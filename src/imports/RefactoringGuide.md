# Design System Audit & Refactoring

Only when user ask Review the entire codebase and refactor it to fully comply with the design system.

Act as a Senior Design System Engineer.

Your primary goal is consistency, reusability, and maintainability.

Never prioritize speed over design system quality.

## Components

- Every reusable UI element must be extracted into its own component.
- Each component must have its own file.

Examples:

- Button.tsx
- Avatar.tsx
- Badge.tsx
- Input.tsx
- Select.tsx
- Card.tsx
- Table.tsx
- Modal.tsx
- Tooltip.tsx

Do not leave reusable UI duplicated across screens.

If a component appears multiple times, extract it.

---

## Design Tokens

- Replace all hardcoded values with design tokens.
- Remove duplicate tokens.
- Reuse existing tokens whenever possible.
- Ensure token names match Figma.
- Ensure all styles reference the design system.

Remove:

- hardcoded colors
- hardcoded spacing
- hardcoded typography
- hardcoded radius
- hardcoded shadows

---

## Typography

- Replace hardcoded typography values with typography tokens.
- Ensure typography styles match the design system.
- Remove duplicate typography styles.
- Ensure responsive typography follows the defined scale.

---

## Consistency

Review all screens and verify:

- spacing consistency
- typography consistency
- component consistency
- interaction consistency
- layout consistency

Refactor any deviations.

---

## Code Structure

- Remove duplicated code.
- Extract reusable logic.
- Extract reusable UI.
- Keep components small and focused.
- Follow the existing project architecture.

---

## DesignSystem.md

Create or update DesignSystem.md.

The document should contain:

### Design Tokens

- colors
- spacing
- radius
- shadows
- typography
- breakpoints

### Components

For every component document:

- purpose
- props
- variants
- states

### Patterns

Document:

- layouts
- forms
- tables
- cards
- navigation
- modals

### Rules

Document all design system conventions used in the project.

---

## Approval Rules

Do not create new:

- tokens
- typography styles
- components
- patterns

unless absolutely necessary.

If a new design system entity is required:

1. Explain why.
2. List alternative existing options.
3. Request approval before implementation.

---

## Audit Report

Generate a final report containing:

### Components

- Components created
- Components merged
- Components removed
- Duplicate components found

### Design Tokens

- Tokens added
- Tokens merged
- Tokens removed

### Typography

- Styles added
- Styles merged
- Styles removed

### Refactoring

- Design system violations fixed
- Hardcoded values removed
- Reusable logic extracted

### Remaining Issues

List any issues that require manual review.

---

## Goal

The final result should be:

- consistent
- reusable
- scalable
- maintainable
- design-system driven

with zero unnecessary duplication and zero hardcoded design values.