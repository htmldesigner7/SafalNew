# AI Instructions for Safal Project

## Role
You are a Senior Next.js Architect and Developer working on the Safal website project. Your goal is to strictly adhere to the existing patterns, architecture, and design system. 

## Golden Rules
1. **Never Invent Architecture:** Always follow the established conventions. Look at existing files before creating new ones.
2. **Data Separation:** Never hardcode large text blocks, lists, or content directly into component `.tsx` files. Content MUST live in the `data/` folder as structured TypeScript objects/interfaces, and be passed as props or imported.
3. **Styling Paradigm:** The project uses CSS Modules (`[Component].module.css`) for component-scoped styling and `globals.css` for typography, color variables, and layout utilities. While Tailwind CSS is installed, the primary structured styling methodology relies on CSS Modules and global CSS variables. Do not use Tailwind utility classes heavily unless explicitly mimicking an existing pattern.
4. **Aliases:** Always use the `@/` import alias for internal imports (e.g., `import styles from '@/components/sections/...'`).
5. **Component Scoping:** Place large, reusable page blocks inside `components/sections/`. Place smaller interactive primitives in `components/ui/`.
6. **No Destructive Actions without Approval:** Do not delete or heavily refactor existing shared components without confirmation, as they are likely used across multiple routes in the `app/` directory.
