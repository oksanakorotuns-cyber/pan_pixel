import { font, radius, color } from "./tokens";

interface SpeechBubbleProps {
  message: string;
}

export default function SpeechBubble({ message }: SpeechBubbleProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="bg-accent relative"
        style={{ borderRadius: radius.lg, padding: "16px 24px", maxWidth: 340 }}
      >
        <p
          className="text-foreground"
          style={{ fontFamily: font.handwriting, fontSize: 20, lineHeight: "28px", margin: 0 }}
        >
          {message}
        </p>
        {/* tail */}
        <div
          style={{
            position: "absolute",
            bottom: -10,
            left: 28,
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: `10px solid ${color.accent}`,
          }}
        />
      </div>

      {/* Pixel mascot */}
      <div
        className="bg-foreground flex items-center justify-center"
        style={{ width: 64, height: 64, borderRadius: radius.xs, fontSize: 32 }}
      >
        👾
      </div>
    </div>
  );
}
