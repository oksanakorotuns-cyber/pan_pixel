import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import PageWrapper from "@/components/PageWrapper";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ProgressBar from "@/components/ProgressBar";
import StepItem from "@/components/StepItem";
import IssueCard, { type Issue } from "@/components/IssueCard";
import SpeechBubble from "@/components/SpeechBubble";
import TextAreaField from "@/components/TextAreaField";
import UploadZone from "@/components/UploadZone";
import { font, radius, spacing, layout } from "@/components/tokens";

// ─── Static data ──────────────────────────────────────────────────────────────

const MOCK_RESULT: { score: number; summary: string; issues: Issue[] } = {
  score: 7.4,
  summary:
    "Інтерфейс має чітку структуру та зрозумілу навігацію, проте є кілька проблем із візуальною ієрархією та читабельністю тексту. CTA-кнопки виражені слабко, а деякі елементи потребують кращого вирівнювання та відступів.",
  issues: [
    {
      title: "Слабка візуальна ієрархія",
      description:
        "Заголовки та основний текст мають схожий розмір, через що важко відразу зрозуміти головне повідомлення екрана.",
      recommendation:
        "Збільш розмір заголовків мінімум до 32px і використай різницю у вазі шрифту (Bold vs Regular), щоб чітко розрізнити рівні.",
    },
    {
      title: "CTA-кнопка губиться на фоні",
      description:
        "Головна кнопка дії використовує той же колір, що й другорядні елементи, тому не привертає увагу першою.",
      recommendation:
        "Виділи основний CTA контрастним кольором або збільш розмір кнопки. Переконайся, що вона виглядає як очевидна наступна дія.",
    },
    {
      title: "Проблеми зі spacing між блоками",
      description:
        "Відступи між секціями нерівномірні — в одних місцях занадто щільно, в інших надмірно вільно, що порушує ритм сторінки.",
      recommendation:
        "Запровади систему відступів кратну 8px (8, 16, 24, 32, 48, 64). Використовуй однакові значення для схожих за рівнем елементів.",
    },
    {
      title: "Низька читабельність дрібного тексту",
      description:
        "Текст розміром менше 14px на світлому фоні не відповідає стандартам контрасту WCAG AA (4.5:1 для малого тексту).",
      recommendation:
        "Збільш мінімальний розмір тексту до 14px та переконайся, що контраст між текстом і фоном не менше 4.5:1.",
    },
    {
      title: "Alignment елементів порушено",
      description:
        "Кілька іконок і підписів до них вирівняні по-різному — частина по лівому краю, частина по центру, що створює візуальний безлад.",
      recommendation:
        "Визнач єдине правило вирівнювання для схожих компонентів і дотримуйся його. Для списків використовуй flex або grid із чіткою базовою лінією.",
    },
  ],
};

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
  onAnalyze: (previewUrl: string) => void;
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
          placeholder="Що це за екран? Яка його головна ціль? На що варто звернути увагу під час аналізу?"
        />

        {/* CTA */}
        <div className="w-full">
          <Button
            disabled={!file}
            onClick={() => preview && onAnalyze(preview)}
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
  onReset: () => void;
}

function ResultsScreen({ preview, onReset }: ResultsScreenProps) {
  const { score, summary, issues } = MOCK_RESULT;

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
        {/* Left: sticky preview + score */}
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

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-accent border border-border flex flex-col"
            style={{ borderRadius: radius.lg, padding: "28px 32px", gap: spacing.md }}
          >
            <span
              className="text-foreground"
              style={{
                fontFamily: font.mono,
                fontWeight: 700,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                opacity: 0.7,
              }}
            >
              Загальна оцінка
            </span>
            <div className="flex items-end" style={{ gap: spacing.sm }}>
              <span
                className="text-foreground"
                style={{ fontFamily: font.display, fontWeight: 900, fontSize: 72, lineHeight: 1 }}
              >
                {score}
              </span>
              <span
                className="text-foreground"
                style={{ fontSize: 20, opacity: 0.6, marginBottom: 8 }}
              >
                / 10
              </span>
            </div>
            <p
              className="text-foreground"
              style={{ fontSize: 15, lineHeight: "24px", fontStyle: "italic" }}
            >
              "{summary}"
            </p>
          </motion.div>
        </div>

        {/* Right: issues + CTA */}
        <div className="flex flex-col" style={{ gap: spacing.md }}>
          <h2
            className="text-foreground"
            style={{ fontFamily: font.display, fontWeight: 900, fontSize: 20, marginBottom: spacing.xs }}
          >
            Знайдені проблеми
          </h2>

          {issues.map((issue, i) => (
            <IssueCard key={issue.title} issue={issue} index={i} />
          ))}

          <div style={{ marginTop: spacing.xs }}>
            <Button onClick={onReset} icon={<RefreshCw size={16} />}>
              Перевірити інший дизайн
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// ─── App orchestrator ─────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState<Screen>("upload");
  const [preview, setPreview] = useState<string | null>(null);

  const handleAnalyze = (previewUrl: string) => {
    setPreview(previewUrl);
    setScreen("loading");
    setTimeout(() => setScreen("results"), 5000);
  };

  const handleReset = () => {
    setPreview(null);
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

      {screen === "results" && (
        <motion.div
          key="results"
          className="w-full min-h-screen"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ResultsScreen preview={preview} onReset={handleReset} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
