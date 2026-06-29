# Design System

This project uses a custom design system driven by CSS variables located in `app/globals.css`. Always use these variables rather than hardcoding hex values.

## Color Palette
- **Background Main:** `--color-bg-main` (`#FFFBEE` - Warm Beige)
- **Primary Text:** `--black-111` (`#111111`)
- **Secondary Text:** `--grey-666` (`#666666`)
- **Accent/Brand:** `--red` (`#D54B26` - Orange/Red)
- **Borders:** `--grey-ddd` (`#dddddd`) or rgba overlays.
- **Decorations:** `--color-circle-yellow`, `--color-circle-lime`, `--color-circle-green`.

## Typography
The primary heading font is **Familjen Grotesk**. Body font defaults to a sans-serif stack.
Use the following global utility classes for typography to ensure consistency:
- `.title_60`: For major section headers (60px, Medium 500).
- `.title_40`: For secondary headers (40px, Semi-bold 600).
- `.title_24`: For card titles and tertiary headers (24px, Semi-bold 600).
- `.title_24_para`: For large paragraph text.

## Layout & Containers
Do not use arbitrary max-widths. Wrap page content in global container classes:
- `.container-1800`: Max width 1800px.
- `.container-1600`: Max width 1600px.

## Spacing Utilities
Use these global utility classes for vertical rhythm:
- `.mt_80`: Margin top 80px (standard section gap).
- `.mt_40`: Margin top 40px.
- `.mb_40`: Margin bottom 40px.
- `.my_40`: Margin top & bottom 40px.

## Buttons
- `.btn-primary`: Solid accent button.
- `.btn-outline`: Transparent button with accent border.
- `.btn-outline-red`: Variant for outline.

## Animations & Transitions
- Standard hover transitions should use `transition: all 0.4s ease;` or `0.3s ease;`.
- Interactive cards typically feature smooth max-height expansions or opacity fades.

## Responsive Breakpoints
- Most structural media queries target `max-width: 1024px` (Tablet) and `max-width: 768px` / `992px` (Mobile/Small Tablet).
- Always use `flex-direction: column` for small screens in flex layouts, and update `grid-template-columns` for grid layouts.
