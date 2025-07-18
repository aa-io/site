# Guidance for Codex Contributors

This repository contains a Next.js 15 application written in TypeScript with Tailwind CSS and shadcn/ui components. The documents inside `.cursor/rules` describe how code should be structured and styled. Below is a summary for quick reference.

## General Principles
- **TypeScript First** – keep `strict` mode and never use `any`.
- **Server Components By Default** – only use client components when necessary.
- **Tailwind Only** – avoid custom CSS, rely on utility classes.
- **Mobile First** – design responsive layouts starting from mobile breakpoints.
- **Accessibility** – ensure keyboard navigation and screen‑reader support.

## Repository Structure
- Use the `app/` directory for all routes and components.
- Place shared UI elements in `app/components/ui/`.
- Static assets go in `public/` and fonts in `app/assets/font/`.
- Data files live in the `data/` folder.

## Components
- Follow functional component patterns using the `FC` type.
- Define props with TypeScript interfaces and include a `className` prop.
- Use the `cn()` utility for conditional classes.
- Export components as **named exports**.

## Styling
- Organize Tailwind classes logically (layout → spacing → sizing → typography → colors → borders → transitions → states).
- Always provide dark‑mode variants and test light/dark themes.

## TypeScript
- Prefer `interface` for object shapes and `type` for unions or aliases.
- Type event handlers precisely, e.g. `React.MouseEvent`.
- Use generics and type guards where appropriate.

## Next.js
- Use the App Router and follow file‑based routing conventions.
- Fetch data in server components and leverage caching.
- Optimize images with the Next.js `Image` component.
- Use `next/font` for custom fonts and include metadata for SEO.

## Development Workflow
1. Review the rule files under `.cursor/rules` before implementing new features.
2. Reuse existing UI components whenever possible.
3. Test in both light and dark modes.
4. **Ensure TypeScript and ESLint have no errors before committing.**

### Programmatic Checks
Run the linter after making changes:
```bash
pnpm lint
```
If the lint command fails, resolve the issues before committing.


