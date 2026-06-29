import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import PageWrapper from "@/components/PageWrapper";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ProgressBar from "@/components/ProgressBar";
import StepItem from "@/components/StepItem";
import IssueCard from "@/components/IssueCard";
import SpeechBubble from "@/components/SpeechBubble";
import TextAreaField from "@/components/TextAreaField";
import UploadZone from "@/components/UploadZone";
import { font, radius, spacing, layout, color } from "@/components/tokens";
import { analyzeDesign, type AnalysisResult } from "@/lib/gemini";

const ANALYSIS_STEPS = [
  "Аналізую структуру інтерфейсу",
  "Перевіряю візуальну ієрархію",
  "Аналізую CTA",
  "Перевіряю spacing та alignment",
  "Формую рекомендації",
];

const PAN_PIXEL_MESSAGES = [
  "Хмм, цікаво що тут відбувається...",
  "О, бачу кілька підозрілих відступів!",
  "Цей CTA явно соромиться себе...",
  "Alignment бʼється головою об стіл...",
  "Майже готово, тримайтесь!",
];

type Screen = "upload" | "loading" | "results";

// ─── Screen 1: Upload ─────────────────────────────────────────────────────────

interface UploadScreenProps {
  onAnalyze: (file: File, previewUrl: string, context: string) => void;
}

function UploadScreen({ onAnalyze }: UploadScreenProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [context, setContext] = useState("");

  const handleFile = (f: File, url: string) => {
    setFile(f);
    setPreview(url);
  };

  const handleClear = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <PageWrapper>
      <div
        className="w-full flex flex-col items-center"
        style={{ maxWidth: layout.maxWidthContent, gap: spacing.xl }}
      >
        {/* Headline */}
        <div className="flex flex-col items-center text-center" style={{ gap: spacing.sm + 4 }}>
          <h1
            className="text-foreground"
            style={{
              fontFamily: font.display,
              fontWeight: 900,
              fontSize: "clamp(32px, 6vw, 44px)",
              lineHeight: 1.15,
            }}
          >
            Завантаж свій дизайн
          </h1>
          <p className="text-foreground" style={{ fontSize: 18, lineHeight: "28px", maxWidth: 619 }}>
            Отримай швидкий аналіз інтерфейсу та{" "}
            <strong style={{ fontFamily: font.body, fontWeight: 700 }}>конкретні рекомендації</strong>{" "}
            щодо покращення UI/UX від Пана Пікселя.
          </p>
        </div>

        {/* Upload zone */}
        <UploadZone preview={preview} onFile={handleFile} onClear={handleClear} />

        {/* Context */}
        <TextAreaField
          value={context}
          onChange={setContext}
          label="Контекст екрану"
          labelSuffix=" (необов'язково)"
          placeholder="Пару слів про твій дизайн..."
        />

        {/* CTA */}
        <div className="w-full flex justify-center">
          <Button
            disabled={!file}
            onClick={() => file && preview && onAnalyze(file, preview, context)}
          >
            Проаналізувати дизайн
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}

// ─── Screen 2: Loading ────────────────────────────────────────────────────────

function LoadingScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  const progressPct = Math.round((currentStep / ANALYSIS_STEPS.length) * 100);

  useState(() => {
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < ANALYSIS_STEPS.length) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
      }
    }, 900);
    return () => clearInterval(interval);
  });

  return (
    <PageWrapper>
      <div
        className="w-full flex flex-col items-center"
        style={{ maxWidth: 512, gap: spacing["2xl"], marginTop: spacing["2xl"] }}
      >
        <SpeechBubble message={PAN_PIXEL_MESSAGES[currentStep] ?? PAN_PIXEL_MESSAGES[PAN_PIXEL_MESSAGES.length - 1]} />

        <ProgressBar
          percent={progressPct}
          labelStart="Початок"
          labelEnd={`Завершення аналізу ${progressPct}%`}
        />

        <Card style={{ width: "100%", display: "flex", flexDirection: "column", gap: spacing.md }}>
          {ANALYSIS_STEPS.map((step, i) => (
            <StepItem
              key={step}
              label={step}
              state={i < currentStep ? "done" : i === currentStep ? "active" : "pending"}
            />
          ))}
        </Card>
      </div>
    </PageWrapper>
  );
}

// ─── Screen 3: Results ────────────────────────────────────────────────────────

interface ResultsScreenProps {
  preview: string | null;
  result: AnalysisResult;
  onReset: () => void;
}

function ResultsScreen({ preview, result, onReset }: ResultsScreenProps) {
  const { verdict, stickers } = result;

  return (
    <PageWrapper>
      <div
        className="w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: spacing.xl,
          maxWidth: layout.maxWidthResults,
          alignItems: "start",
          marginTop: spacing.sm,
        }}
      >
        {/* Left: sticky preview */}
        <div className="flex flex-col" style={{ gap: spacing.md, position: "sticky", top: 24 }}>
          {preview && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border overflow-hidden"
              style={{ borderRadius: radius.lg }}
            >
              <img
                src={preview}
                alt="Завантажений дизайн"
                style={{ width: "100%", display: "block", objectFit: "contain", maxHeight: 480 }}
              />
            </motion.div>
          )}

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={onReset} icon={<RefreshCw size={16} />} style={{ width: 360, justifyContent: "center" }}>
              Перевірити інший дизайн
            </Button>
          </div>
        </div>

        {/* Right: stickers */}
        <div className="flex flex-col" style={{ gap: spacing.md }}>
          {/* Mascot + speech bubble */}
          <div className="flex items-center" style={{ gap: spacing.md, marginBottom: spacing.xs }}>
            <div
              className="bg-accent relative"
              style={{ borderRadius: radius.lg, padding: "14px 20px", flexShrink: 0, maxWidth: 220 }}
            >
              <p style={{ fontFamily: font.handwriting, fontSize: 18, lineHeight: "26px", margin: 0 }}>
                {verdict}
              </p>
              {/* tail right */}
              <div style={{
                position: "absolute",
                top: "50%",
                right: -10,
                transform: "translateY(-50%)",
                width: 0,
                height: 0,
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderLeft: `10px solid ${color.accent}`,
              }} />
            </div>
            <img
              src="/src/imports/LandingPage/21b3b62def6a3ca793e241c541cc997ca6bac1a9.png"
              alt="Пан Піксель"
              style={{ width: 90, height: 90, objectFit: "contain", flexShrink: 0 }}
            />
          </div>

          {stickers.map((sticker, i) => (
            <IssueCard key={sticker.principle + i} sticker={sticker} index={i} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

// ─── App orchestrator ─────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState<Screen>("upload");
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (file: File, previewUrl: string, context: string) => {
    setPreview(previewUrl);
    setError(null);
    setScreen("loading");

    try {
      const base64 = await fileToBase64(file);
      const analysisResult = await analyzeDesign(base64, file.type, context);
      setResult(analysisResult);
      setScreen("results");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Сталася помилка аналізу");
      setScreen("upload");
    }
  };

  const handleReset = () => {
    setPreview(null);
    setResult(null);
    setError(null);
    setScreen("upload");
  };

  return (
    <AnimatePresence mode="wait">
      {screen === "upload" && (
        <motion.div
          key="upload"
          className="w-full min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <UploadScreen onAnalyze={handleAnalyze} />
          {error && (
            <p style={{ color: "red", textAlign: "center", marginTop: 16 }}>{error}</p>
          )}
        </motion.div>
      )}

      {screen === "loading" && (
        <motion.div
          key="loading"
          className="w-full min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <LoadingScreen />
        </motion.div>
      )}

      {screen === "results" && result && (
        <motion.div
          key="results"
          className="w-full min-h-screen"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ResultsScreen preview={preview} result={result} onReset={handleReset} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      resolve(dataUrl.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
