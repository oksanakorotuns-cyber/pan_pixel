import { useState } from "react";
import { font, radius, color } from "./tokens";

interface TextAreaFieldProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  labelSuffix?: string;
  placeholder?: string;
  rows?: number;
}

export default function TextAreaField({
  value,
  onChange,
  label,
  labelSuffix,
  placeholder,
  rows = 4,
}: TextAreaFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      <p style={{ fontSize: 13 }}>
        <strong className="text-foreground" style={{ fontWeight: 700 }}>
          {label}
        </strong>
        {labelSuffix && (
          <span className="text-muted-foreground">{labelSuffix}</span>
        )}
      </p>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="bg-card text-foreground w-full"
        style={{
          border: `2px solid ${focused ? color.accent : color.border}`,
          borderRadius: radius.md,
          padding: 18,
          fontSize: 16,
          lineHeight: "24px",
          resize: "vertical",
          outline: "none",
          fontFamily: font.body,
          transition: "border-color 0.15s",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
