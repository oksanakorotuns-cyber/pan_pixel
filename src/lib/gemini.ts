import { GoogleGenAI } from "@google/genai";

export interface Issue {
  title: string;
  description: string;
  recommendation: string;
}

export interface AnalysisResult {
  score: number;
  summary: string;
  issues: Issue[];
}

const PROMPT = `Ти — експерт з UI/UX дизайну на ім'я Пан Піксель. Проаналізуй цей скріншот інтерфейсу та надай детальний аналіз.

Поверни відповідь ТІЛЬКИ у форматі JSON (без markdown, без пояснень, тільки JSON):
{
  "score": число від 1 до 10 (одна десяткова, наприклад 7.4),
  "summary": "загальний висновок про інтерфейс, 2-3 речення українською",
  "issues": [
    {
      "title": "коротка назва проблеми",
      "description": "опис проблеми",
      "recommendation": "конкретна рекомендація як виправити"
    }
  ]
}

Знайди 3-6 найважливіших проблем. Пиши українською мовою. Будь конкретним і практичним.`;

export async function analyzeDesign(
  imageBase64: string,
  mimeType: string,
  context?: string
): Promise<AnalysisResult> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) throw new Error("VITE_GEMINI_API_KEY не вказано");

  const ai = new GoogleGenAI({ apiKey });

  const prompt = context
    ? `${PROMPT}\n\nДодатковий контекст від користувача: ${context}`
    : PROMPT;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          { inlineData: { mimeType, data: imageBase64 } },
          { text: prompt },
        ],
      },
    ],
  });

  const text = response.text ?? "";
  const clean = text.replace(/```json|```/g, "").trim();
  return JSON.parse(clean) as AnalysisResult;
}
