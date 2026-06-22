import { radius } from "./tokens";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: number;
  style?: React.CSSProperties;
}

export default function Card({ children, className = "", padding = 32, style }: CardProps) {
  return (
    <div
      className={`bg-card border border-border ${className}`}
      style={{ borderRadius: radius.lg, padding, ...style }}
    >
      {children}
    </div>
  );
}
