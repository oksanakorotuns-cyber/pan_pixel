import { motion } from "motion/react";
import { font, radius } from "./tokens";

interface ProgressBarProps {
  percent: number;
  labelStart?: string;
  labelEnd?: string;
}

const labelStyle: React.CSSProperties = {
  fontFamily: font.mono,
  fontWeight: 700,
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
};

export default function ProgressBar({
  percent,
  labelStart = "Початок",
  labelEnd,
}: ProgressBarProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className="bg-card border-2 border-foreground overflow-hidden"
        style={{ height: 20, borderRadius: radius.full }}
      >
        <motion.div
          className="bg-accent h-full"
          initial={{ width: "0%" }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ borderRadius: radius.full }}
        />
      </div>

      <div className="flex justify-between">
        <span className="text-muted-foreground" style={labelStyle}>
          {labelStart}
        </span>
        {labelEnd && (
          <span className="text-muted-foreground" style={labelStyle}>
            {labelEnd}
          </span>
        )}
      </div>
    </div>
  );
}
