import { motion } from "motion/react";
import { font, radius } from "./tokens";

type ButtonVariant = "primary" | "disabled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Button({
  children,
  onClick,
  disabled = false,
  icon,
  style: styleProp,
}: ButtonProps) {
  const variant: ButtonVariant = disabled ? "disabled" : "primary";

  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={
        variant === "primary"
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-muted-foreground"
      }
      style={{
        border: "none",
        borderRadius: radius.sm,
        padding: "12px 24px",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: font.body,
        cursor: disabled ? "not-allowed" : "pointer",
        lineHeight: "28px",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        transition: "background 0.15s",
        ...styleProp,
      }}
    >
      {icon}
      {children}
    </motion.button>
  );
}
