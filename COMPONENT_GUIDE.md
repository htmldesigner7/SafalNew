# Component Guide

This project is built on a modular component architecture. Components are split by their scope and reusability.

## Directory Breakdown
- `components/layout/`: Global wrappers like `Header` and `Footer`.
- `components/ui/`: Low-level, highly reusable primitives (e.g., `ThemeProvider`, `ThemeToggle`).
- `components/sections/`: Large, content-heavy blocks that represent a full horizontal slice of a page.
- `components/views/`: Page-specific wrappers or orchestrators.

## Common Reusable Sections
Before building a new section, check if one of these fits your needs:
- **`InnerPageHero`**: Used at the top of sub-pages. Accepts `title`, `description`, `imageSrc`.
- **`FeatureCards`**: Renders a grid of cards with icons/images and text.
- **`IndustryApplicationsSection`**: A grid of cards with an animated hover effect (paragraph expands, image shrinks).
- **`ArchitectureSection`**: Used for step-by-step methodologies or architectures.
- **`SelectedWorkSection`**: A 2-column layout with text on the left and an image on the right.
- **`SpeedQualitySection`**: A 2-column layout featuring an accordion-style value proposition list on the left.
- **`CultureSection` / `EngineeringSection`**: Domain-specific grids and layouts.

## When to Create vs. Reuse
- **Reuse**: If the layout (grid structure, image placement, typography) perfectly matches an existing section, REUSE it. Modify its TypeScript interface in the `data/` folder to accept your new content.
- **Create**: If the layout requires a fundamentally different HTML structure (e.g., a slider instead of a grid, or an accordion instead of cards), CREATE a new component in `components/sections/`.

## Anatomy of a New Section
When creating a new section `ExampleSection`:
1. Create `components/sections/ExampleSection/ExampleSection.tsx`.
2. Create `components/sections/ExampleSection/ExampleSection.module.css`.
3. Create `data/exampleData.ts` to define the `ExampleData` interface and mock data.
4. Import data and component into the target page inside `app/`.
