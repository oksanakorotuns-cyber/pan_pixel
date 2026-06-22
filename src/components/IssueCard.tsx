import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";
import { font, radius, spacing } from "./tokens";

export interface Issue {
  title: string;
  description: string;
  recommendation: string;
}

interface IssueCardProps {
  issue: Issue;
  index: number;
}

export default function IssueCard({ issue, index }: IssueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="bg-card border border-border flex flex-col"
      style={{ borderRadius: radius.lg, padding: "24px 28px", gap: spacing.md }}
    >
      <div className="flex items-start gap-3">
        <div
          className="bg-accent flex items-center justify-center flex-shrink-0"
          style={{ width: 28, height: 28, borderRadius: radius.xs, marginTop: 2 }}
        >
          <AlertCircle size={14} className="text-accent-foreground" />
        </div>
        <h3
          className="text-foreground"
          style={{ fontWeight: 700, fontSize: 16, lineHeight: "26px" }}
        >
          {issue.title}
        </h3>
      </div>

      <p className="text-foreground" style={{ fontSize: 14, lineHeight: "22px", opacity: 0.7 }}>
        {issue.description}
      </p>

      <div
        className="bg-background border border-border flex gap-2 items-start"
        style={{ borderRadius: radius.sm, padding: "10px 14px" }}
      >
        <span
          className="text-muted-foreground flex-shrink-0"
          style={{
            fontFamily: font.mono,
            fontWeight: 700,
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginTop: 2,
          }}
        >
          Реком.
        </span>
        <p className="text-foreground" style={{ fontSize: 13, lineHeight: "20px" }}>
          {issue.recommendation}
        </p>
      </div>
    </motion.div>
  );
}
