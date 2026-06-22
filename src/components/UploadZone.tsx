import { useRef, useCallback, useState } from "react";
import { X } from "lucide-react";
import svgPaths from "@/imports/BuildMvpForAiDesignCritic/svg-gc0z5n7rdu";
import { color, radius, spacing } from "./tokens";

interface UploadZoneProps {
  preview: string | null;
  onFile: (file: File, previewUrl: string) => void;
  onClear: () => void;
}

function UploadIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d={svgPaths.p2d557600}
        stroke={color.foreground}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M17 8L12 3L7 8"
        stroke={color.foreground}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 3V15"
        stroke={color.foreground}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function UploadZone({ preview, onFile, onClear }: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (f: File) => {
    onFile(f, URL.createObjectURL(f));
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, []);

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={() => setIsDragging(false)}
      onClick={() => !preview && inputRef.current?.click()}
      className="flex flex-col items-center justify-center w-full overflow-hidden"
      style={{
        background: isDragging ? "#fef9ee" : color.card,
        borderRadius: radius.lg,
        border: `2px dashed ${isDragging ? color.accent : color.border}`,
        minHeight: 200,
        cursor: preview ? "default" : "pointer",
        transition: "border-color 0.15s, background 0.15s",
        position: "relative",
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpg,image/jpeg"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />

      {preview ? (
        <div className="relative w-full p-2">
          <img
            src={preview}
            alt="Preview"
            style={{
              width: "100%",
              maxHeight: 360,
              objectFit: "contain",
              display: "block",
              borderRadius: radius.lg - 4,
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
            className="bg-primary text-primary-foreground flex items-center justify-center"
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              border: "none",
              borderRadius: radius.xs,
              width: 32,
              height: 32,
              cursor: "pointer",
            }}
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div
          className="flex flex-col items-center"
          style={{ gap: spacing.md, padding: spacing.xl }}
        >
          <div
            className="bg-accent flex items-center justify-center flex-shrink-0"
            style={{ width: 56, height: 56, borderRadius: radius.xs + 6 }}
          >
            <UploadIcon />
          </div>

          <div className="flex flex-col items-center" style={{ gap: spacing.xs }}>
            <p className="text-foreground" style={{ fontWeight: 700, fontSize: 18, lineHeight: "28px" }}>
              Перетягни скріншот сюди
            </p>
            <p className="text-muted-foreground" style={{ fontSize: 16, lineHeight: "24px" }}>
              або натисни, щоб обрати файл
            </p>
          </div>

          <div
            className="border border-border inline-flex items-center"
            style={{ borderRadius: radius.full, padding: "4px 12px" }}
          >
            <span className="text-muted-foreground" style={{ fontSize: 14 }}>
              PNG&nbsp;&nbsp;·&nbsp;&nbsp;JPG&nbsp;&nbsp;·&nbsp;&nbsp;JPEG
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

