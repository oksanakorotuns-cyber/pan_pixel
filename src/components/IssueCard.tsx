import { motion } from "motion/react";
import { font, spacing } from "./tokens";
import type { Sticker } from "@/lib/gemini";

export type { Sticker };

interface IssueCardProps {
  sticker: Sticker;
  index: number;
}

const STICKER_COLORS = [
  { bg: "#fde68a" },
  { bg: "#c4b5fd" },
  { bg: "#86efac" },
  { bg: "#fdba74" },
  { bg: "#93c5fd" },
  { bg: "#f9a8d4" },
];

const SEVERITY_LABEL: Record<Sticker["severity"], string> = {
  high: "критично",
  medium: "середнє",
  low: "дрібниця",
};

export default function IssueCard({ sticker, index }: IssueCardProps) {
  const color = STICKER_COLORS[index % STICKER_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
      transition={{ delay: 0.1 * index, type: "spring", stiffness: 200 }}
      className="flex flex-col"
      style={{
        background: color.bg,
        borderRadius: 0,
        padding: "24px 28px",
        gap: spacing.md,
        boxShadow: "3px 4px 12px rgba(0,0,0,0.12)",
        position: "relative",
      }}
    >
      {/* Номер + severity */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontFamily: font.mono,
            fontWeight: 700,
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            opacity: 0.5,
          }}
        >
          #{String(index + 1).padStart(2, "0")}
        </span>
        <span
          style={{
            fontFamily: font.mono,
            fontWeight: 700,
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            opacity: 0.6,
          }}
        >
          {SEVERITY_LABEL[sticker.severity]}
        </span>
      </div>

      {/* Principle */}
      <h3 style={{ fontWeight: 700, fontSize: 17, lineHeight: "26px", color: "#111" }}>
        {sticker.principle}
      </h3>

      {/* Problem */}
      <p style={{ fontSize: 14, lineHeight: "22px", color: "#333", opacity: 0.85 }}>
        {sticker.problem}
      </p>

      {/* Fix */}
      <div
        style={{
          borderTop: `2px solid rgba(0,0,0,0.1)`,
          paddingTop: spacing.sm,
          display: "flex",
          gap: 8,
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            fontFamily: font.mono,
            fontWeight: 700,
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#555",
            flexShrink: 0,
            marginTop: 2,
          }}
        >
          →
        </span>
        <p style={{ fontSize: 13, lineHeight: "20px", color: "#222" }}>
          {sticker.fix}
        </p>
      </div>
    </motion.div>
  );
}
