import { motion } from "motion/react";
import { CheckCircle, RefreshCw } from "lucide-react";

type StepState = "done" | "active" | "pending";

interface StepItemProps {
  label: string;
  state: StepState;
}

export default function StepItem({ label, state }: StepItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: state === "pending" ? 0.4 : 1 }}
      className="flex items-center gap-3"
    >
      <div
        className={
          state === "done"
            ? "bg-primary"
            : state === "active"
            ? "bg-accent"
            : "bg-border"
        }
        style={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "background 0.3s",
        }}
      >
        {state === "done" && <CheckCircle size={14} className="text-primary-foreground" />}
        {state === "active" && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <RefreshCw size={12} className="text-foreground" />
          </motion.div>
        )}
      </div>

      <span
        className={state === "pending" ? "text-muted-foreground" : "text-foreground"}
        style={{
          fontSize: 16,
          fontWeight: state === "active" ? 700 : 400,
          transition: "color 0.3s",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}
