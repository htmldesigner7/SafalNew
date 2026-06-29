# Coding Standards

## General
- **Frameworks:** React 19, Next.js 16 (App Router).
- **Language:** TypeScript. Strict mode is enabled.
- **Alias:** Always use `@/...` for absolute imports from the root.

## Naming Conventions
- **Files/Folders (Components):** PascalCase. E.g., `components/sections/SpeedQualitySection/SpeedQualitySection.tsx`.
- **Files (Data):** camelCase. E.g., `data/speedQualityData.ts`.
- **Interfaces:** PascalCase. E.g., `SpeedQualityData`.
- **CSS Classes:** camelCase inside CSS modules. E.g., `.innerBox`, `.itemTitle`.

## Component Architecture
- Use Server Components by default. Only add `"use client"` when interactivity (hooks, state, event listeners) is required.
- Do NOT create duplicate components. Before building a new section, check if an existing one can be reused via props.
- Keep components modular, separating logic and UI.

## Data Separation Strategy (CRITICAL RULE)
- **Static Data:** If a section's content is static and purely presentational (like a one-off CTA or a fixed banner), hardcode the data/variables directly inside that component's `.tsx` file.
- **Dynamic/List Data:** If a section contains dynamic lists, large mapped arrays (like accordion items, card grids, job postings), or data that might come from a CMS later, place the data in the `data/` folder and pass it via props.

## Component Structure
1. **Imports:** React/Next.js imports first, then external libraries, then internal components, then data, then styles.
2. **Interfaces:** Define the prop interface directly above the component function if it is specific to that component.
3. **Declaration:** Use `export default function ComponentName({ prop1 }: Props)` syntax.
4. **CSS Modules:** Always import as `styles` (e.g., `import styles from './Component.module.css';`).
5. **Class merging:** Use template literals for combining CSS module classes and global classes: `className={\`\${styles.section} mt_80\`}`.

## Styling
- **CRITICAL RULE FOR TEXT/BUTTONS:** NEVER style paragraphs (`<p>`), headings (`<h1>` - `<h6>`), or buttons locally in CSS Modules. Use ONLY the global standard utility classes (e.g., `.title_60`, `.title_40`, `.btn-primary`) and default `<p>` tag behavior. Never add inline styles to override font-sizes.
- **CRITICAL RULE FOR SECTIONS:** Unless explicitly instructed otherwise, EVERY new `<section>` component MUST include the `mt_80` class to ensure consistent top margin spacing across the project (e.g., `<section className="mt_80">`). Do NOT add custom `.section` padding (e.g., `padding: 80px 0`) or `background-color` in CSS modules unless the user explicitly tells you to. Let the `mt_80` handle the standard layout separation.
- **CRITICAL RULE FOR TITLES:** The main title (`<h2>`) of any section MUST always use the `title_60` class (e.g., `<h2 className="title_60">`). Do not use smaller sizes like `title_40` for main section headers unless explicitly requested.
- Do NOT use inline styles unless absolutely necessary for dynamic values (e.g., dynamic background images).
- Use CSS Modules for layout and containers, but not for text elements.
- Rely on `app/globals.css` for standardized spacing (`mt_80`), typography (`title_60`), and buttons (`btn-primary`).

## Images
- Always use Next.js `<Image />` component (`next/image`) instead of raw `<img>` tags.
- Provide sensible `width` and `height`, or use `fill` with a relative parent container (and `aspect-ratio`).
- Images should have `object-fit: cover` or `contain` depending on the design requirement.

## Best Practices
- **Stateless Sections:** Make sections "dumb" where possible. They should receive a `data` object via props and simply render it.
- **Centralized Content:** Content goes in the `data/` directory. This allows for easier localization or CMS integration in the future.
- **Avoid Over-engineering:** Do not use complex state management or context unless the component is highly interactive. Most Safal pages are static informational pages.
