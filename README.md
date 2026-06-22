# Пан Піксель — AI Design Critic

Завантажте скріншот інтерфейсу та отримайте структурований фідбек від Пана Пікселя: оцінку, підсумок і конкретні рекомендації щодо покращення UI.

---

## Що це

MVP веб-застосунку з трьома екранами:

1. **Upload** — завантаж скріншот (drag & drop або вибір файлу) і опціонально додай контекст екрана
2. **Loading** — прогрес-бар і кроки аналізу з коментарями від маскота
3. **Results** — ліворуч превью завантаженого дизайну + оцінка, праворуч список знайдених проблем з поясненнями та рекомендаціями

> MVP використовує mock-дані замість реального AI-аналізу.

---

## Стек

| Шар | Технологія |
|---|---|
| UI | React 18 + TypeScript |
| Стилі | Tailwind CSS v4 |
| Анімації | Motion (motion/react) |
| Іконки | Lucide React |
| Збірка | Vite |

---

## Структура проєкту

```
src/
├── app/
│   └── App.tsx              # Екрани та оркестрація стану
├── components/
│   ├── tokens.ts            # Дизайн-токени (кольори, шрифти, відступи, радіуси)
│   ├── NavbarLogo.tsx       # SVG-логотип
│   ├── PageWrapper.tsx      # Shell: navbar + main
│   ├── Button.tsx           # Кнопка (primary / disabled)
│   ├── Card.tsx             # Біла картка з бордером
│   ├── ProgressBar.tsx      # Анімований прогрес-бар
│   ├── StepItem.tsx         # Рядок кроку аналізу
│   ├── IssueCard.tsx        # Картка знайденої проблеми
│   ├── SpeechBubble.tsx     # Бульбашка маскота
│   ├── TextAreaField.tsx    # Textarea з лейблом
│   └── UploadZone.tsx       # Зона завантаження файлу
├── styles/
│   ├── fonts.css            # Google Fonts імпорт
│   ├── theme.css            # CSS-токени + Tailwind @theme
│   └── index.css            # Глобальні стилі
├── imports/                 # Figma-імпорти (read-only)
└── DesignSystem.md          # Документація дизайн-системи
```

---

## Запуск

```bash
npm install
npm run build
```

---

## Дизайн-система

Всі стилі побудовані на токенах із `theme.css` і `src/components/tokens.ts`.

### Кольори

| Токен | Значення | Призначення |
|---|---|---|
| `--background` | `#f9f5f3` | Фон сторінки |
| `--foreground` | `#070708` | Основний текст |
| `--card` | `#ffffff` | Фон карток та інпутів |
| `--accent` | `#fcc12e` | Брендовий жовтий |
| `--border` | `#efe8e4` | Всі бордери |
| `--muted-foreground` | `#838386` | Другорядний текст |

### Шрифти

| Токен | Сімейство | Використання |
|---|---|---|
| `--font-display` | Unbounded Black | Заголовки, оцінка |
| `--font-body` | Space Grotesk | Текст, кнопки, інпути |
| `--font-mono` | Space Mono Bold | Лейбли, мітки |
| `--font-handwriting` | Bad Script | Повідомлення маскота |

Детальніше — у [`src/DesignSystem.md`](src/DesignSystem.md).
