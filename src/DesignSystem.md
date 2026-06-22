# Pan Pixel — Design System

## Design Tokens

### Colors
| Token (CSS var) | Tailwind class | Value | Usage |
|---|---|---|---|
| `--background` | `bg-background` | `#f9f5f3` | Page background |
| `--foreground` | `text-foreground` | `#070708` | Primary text, dark fills |
| `--card` | `bg-card` | `#ffffff` | Card / input backgrounds |
| `--card-foreground` | `text-card-foreground` | `#070708` | Text on cards |
| `--primary` | `bg-primary` | `#070708` | Primary button background |
| `--primary-foreground` | `text-primary-foreground` | `#ffffff` | Text on primary button |
| `--accent` | `bg-accent` | `#fcc12e` | Brand yellow — CTAs, badges, score card |
| `--accent-foreground` | `text-accent-foreground` | `#070708` | Text on accent backgrounds |
| `--secondary` | `bg-secondary` | `#efe8e4` | Disabled button, subtle backgrounds |
| `--secondary-foreground` | `text-secondary-foreground` | `#070708` | Text on secondary |
| `--border` | `border-border` | `#efe8e4` | All borders |
| `--muted` | `bg-muted` | `#efe8e4` | Muted backgrounds |
| `--muted-foreground` | `text-muted-foreground` | `#838386` | Secondary / helper text |

### Typography
| Token (CSS var) | Value | Usage |
|---|---|---|
| `--font-display` | `'Unbounded', sans-serif` | Headlines (h1–h2), score, section titles |
| `--font-body` | `'Space Grotesk', sans-serif` | All body text, buttons, inputs |
| `--font-mono` | `'Space Mono', monospace` | Labels, badges, progress bar labels |
| `--font-handwriting` | `'Bad Script', cursive` | Speech bubbles (mascot messages) |

#### Type scale
| Role | Size | Weight | Line height |
|---|---|---|---|
| Display heading | clamp(32px, 6vw, 44px) | 900 | 1.15 |
| Section heading | 20–22px | 900 | 1.3 |
| Body large | 18px | 400/700 | 28px |
| Body default | 16px | 400 | 24px |
| Body small | 14–15px | 400 | 22px |
| Label / mono | 10–13px | 700 | — |

### Spacing (8px base grid)
| Token | Value | Usage |
|---|---|---|
| `spacing.xs` | 4px | Tight gaps (icon + text) |
| `spacing.sm` | 8px | Inner component gaps |
| `spacing.md` | 16px | Between elements in a group |
| `spacing.lg` | 24px | Section padding, card gaps |
| `spacing.xl` | 32px | Between sections |
| `spacing.2xl` | 48px | Screen vertical rhythm |
| `spacing.3xl` | 64px | Page-level spacing |

### Border Radius
| Token | Value | Usage |
|---|---|---|
| `radius.xs` | 8px | Small chips, icon containers |
| `radius.sm` | 12px | Buttons, small cards |
| `radius.md` | 16px | Inputs, textarea |
| `radius.lg` | 24px | Cards, upload zone, major containers |
| `radius.xl` | 32px | Large section cards |
| `radius.full` | 9999px | Pills, progress bar track |

### Layout
| Token | Value | Usage |
|---|---|---|
| `layout.maxWidthContent` | 672px | Upload screen content column |
| `layout.maxWidthResults` | 1200px | Results two-column grid |

---

## Components

### `NavbarLogo`
- **Purpose**: Renders the Pan Pixel wordmark SVG with yellow crown accent.
- **Props**: none
- **File**: `src/components/NavbarLogo.tsx`

### `PageWrapper`
- **Purpose**: Full-screen layout shell — warm background, centered navbar, main content area.
- **Props**: `children: ReactNode`
- **File**: `src/components/PageWrapper.tsx`

### `Button`
- **Purpose**: Primary action button with hover/tap animation.
- **Props**: `children`, `onClick?`, `disabled?`, `icon?`
- **Variants**: `primary` (dark bg, white text), `disabled` (secondary bg, muted text)
- **States**: default, hover (scale 1.02), tap (scale 0.98), disabled (no-drop cursor)
- **File**: `src/components/Button.tsx`

### `Card`
- **Purpose**: White surfaced container with border, used for step lists and preview wrappers.
- **Props**: `children`, `className?`, `padding?`, `style?`
- **File**: `src/components/Card.tsx`

### `ProgressBar`
- **Purpose**: Animated pill-shaped progress indicator with start/end labels.
- **Props**: `percent: number`, `labelStart?`, `labelEnd?`
- **States**: animates width on `percent` change
- **File**: `src/components/ProgressBar.tsx`

### `StepItem`
- **Purpose**: Single row in the analysis step list with state indicator dot.
- **Props**: `label: string`, `state: "done" | "active" | "pending"`
- **States**: done (dark dot + checkmark), active (yellow dot + spinning icon), pending (muted)
- **File**: `src/components/StepItem.tsx`

### `IssueCard`
- **Purpose**: Displays a single design issue with title, description, and recommendation.
- **Props**: `issue: Issue`, `index: number` (used for stagger delay)
- **File**: `src/components/IssueCard.tsx`

### `SpeechBubble`
- **Purpose**: Mascot speech bubble with yellow background and pixel avatar.
- **Props**: `message: string`
- **File**: `src/components/SpeechBubble.tsx`

### `TextAreaField`
- **Purpose**: Labelled textarea with focus-ring in accent color.
- **Props**: `value`, `onChange`, `label`, `labelSuffix?`, `placeholder?`, `rows?`
- **States**: default (border-border), focused (border-accent)
- **File**: `src/components/TextAreaField.tsx`

### `UploadZone`
- **Purpose**: Drag-and-drop / click-to-upload zone with image preview and clear button.
- **Props**: `preview: string | null`, `onFile: (file, url) => void`, `onClear: () => void`
- **States**: idle (dashed border), dragging (yellow border + tinted bg), preview (shows image)
- **File**: `src/components/UploadZone.tsx`

---

## Patterns

### Layouts
- **Single-column content**: `max-width: 672px`, centered, used on Upload screen.
- **Two-column results**: `grid-template-columns: 1fr 1fr`, `max-width: 1200px`. Left column sticky.
- **Page shell**: `PageWrapper` — navbar top, scrollable main below.

### Forms
- All inputs use `bg-card`, `border-border`, `radius.md`, font-body.
- Focus state: `border-accent` (yellow), no box-shadow.
- Labels: `font-body bold` + optional muted suffix in `text-muted-foreground`.

### Cards
- Background: `bg-card` (`#ffffff`)
- Border: `border-border` 1px
- Radius: `radius.lg` (24px)
- Use `Card` component for generic white surfaces.
- Score card uses `bg-accent` directly (not `Card`).

### Navigation
- Single centered logo in `<nav>`, no links (MVP scope).

---

## Rules

1. **No hardcoded colors** — always use CSS vars via Tailwind classes or `color.*` from `tokens.ts`.
2. **No hardcoded spacing** — use `spacing.*` from `tokens.ts`.
3. **No hardcoded font families** — use `font.*` from `tokens.ts`.
4. **No hardcoded border radius** — use `radius.*` from `tokens.ts`.
5. **Tailwind-first** — prefer `bg-*`, `text-*`, `border-*` Tailwind classes; fall back to inline styles only when Tailwind cannot express the value.
6. **One component per file** — each reusable element lives in `src/components/`.
7. **Token file is the source of truth** — `tokens.ts` and `theme.css` must stay in sync.
8. **Accent = yellow** — `#fcc12e` is the single brand color; never introduce a second accent.

---

## Audit Report

### Components
- **Created**: `NavbarLogo`, `PageWrapper`, `Button`, `Card`, `ProgressBar`, `StepItem`, `IssueCard`, `SpeechBubble`, `TextAreaField`, `UploadZone` (10 new files)
- **Merged**: Logo + wrapper collapsed from inline JSX → `NavbarLogo` + `PageWrapper`
- **Removed**: All inline JSX duplicates for upload icon, format pill, step rows, issue cards
- **Duplicates eliminated**: Issue card structure (×5 inline) → `IssueCard`, step rows (×5 inline) → `StepItem`

### Design Tokens
- **Added to theme.css**: `--font-display`, `--font-body`, `--font-mono`, `--font-handwriting`, `--radius-xs/sm/md/lg/xl/full`
- **Corrected**: `--accent` `#e9ebef` → `#fcc12e`, `--border` `rgba(0,0,0,0.1)` → `#efe8e4`, `--muted-foreground` `#717182` → `#838386`, `--primary` `#030213` → `#070708`
- **Created**: `src/components/tokens.ts` — JS-side token constants

### Typography
- **Removed**: 30+ instances of hardcoded `fontFamily` strings
- **Replaced with**: `font.display`, `font.body`, `font.mono`, `font.handwriting` from `tokens.ts`

### Refactoring
- **Design system violations fixed**: ~60 hardcoded hex colors, ~40 hardcoded spacing values, ~25 hardcoded font-family strings, ~15 hardcoded border-radius values
- **Hardcoded values removed**: All `C.bg`, `C.dark`, `C.yellow`, `C.border`, `C.muted`, `C.white` constants replaced with CSS vars / Tailwind classes
- **Reusable logic extracted**: Drag-and-drop logic isolated in `UploadZone`; focus state isolated in `TextAreaField`

### Remaining Issues
- `StepItem` uses `useState` workaround pattern for interval (`useState(() => { ... })`) inherited from original — should be `useEffect` in a future refactor pass.
- Mascot is currently an emoji `👾` placeholder; a real pixel-art asset should replace it.
