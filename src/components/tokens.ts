// Single source of truth for JS-side design token values.
// These must stay in sync with the CSS custom properties in theme.css.
// Use Tailwind utility classes (bg-background, text-foreground, etc.) wherever
// possible; fall back to these constants only for inline styles that Tailwind
// cannot express (font-family, numeric borderRadius, etc.).

export const font = {
  display: "var(--font-display)",
  body: "var(--font-body)",
  mono: "var(--font-mono)",
  handwriting: "var(--font-handwriting)",
} as const;

export const radius = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  full: 9999,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
} as const;

export const layout = {
  maxWidthContent: 672,
  maxWidthResults: 1200,
} as const;

// Resolved hex values — used only when a CSS var cannot be referenced inline
// (e.g. SVG fill/stroke attributes, dynamic CSS string interpolation).
export const color = {
  background: "#f9f5f3",
  foreground: "#070708",
  card: "#ffffff",
  accent: "#fcc12e",
  border: "#efe8e4",
  muted: "#efe8e4",
  mutedFg: "#838386",
} as const;
