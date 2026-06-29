import { GoogleGenAI, Type } from "@google/genai";
import systemInstructionMd from "../prompts/system-instruction.md?raw";
import analysisSpecMd from "../prompts/analysis-spec.md?raw";

export interface Sticker {
  severity: "high" | "medium" | "low";
  principle: string;
  problem: string;
  fix: string;
}

export interface AnalysisResult {
  verdict: string;
  stickers: Sticker[];
}

const SYSTEM_INSTRUCTION = `${systemInstructionMd}\n\n${analysisSpecMd}`;

const RESPONSE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    verdict: { type: Type.STRING },
    stickers: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          severity: { type: Type.STRING, enum: ["high", "medium", "low"] },
          principle: { type: Type.STRING },
          problem: { type: Type.STRING },
          fix: { type: Type.STRING },
        },
        required: ["severity", "principle", "problem", "fix"],
      },
    },
  },
  required: ["verdict", "stickers"],
};

export async function analyzeDesign(
  imageBase64: string,
  mimeType: string,
  context?: string
): Promise<AnalysisResult> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) throw new Error("VITE_GEMINI_API_KEY не вказано");

  const ai = new GoogleGenAI({ apiKey });

  const userParts: object[] = [{ inlineData: { mimeType, data: imageBase64 } }];
  if (context) {
    userParts.push({ text: `Додатковий контекст від користувача: ${context}` });
  }

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      responseMimeType: "application/json",
      responseSchema: RESPONSE_SCHEMA,
    },
    contents: [{ role: "user", parts: userParts }],
  });

  const text = response.text ?? "";
  try {
    return JSON.parse(text) as AnalysisResult;
  } catch {
    const clean = text.replace(/```json|```/g, "").trim();
    return JSON.parse(clean) as AnalysisResult;
  }
}
