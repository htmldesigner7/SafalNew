# Project Structure

This is a Next.js App Router project (v16).

```text
├── app/                        # Next.js App Router directory
│   ├── globals.css             # Global CSS, variables, and utility classes
│   ├── layout.tsx              # Root HTML layout
│   ├── page.tsx                # Homepage
│   ├── about/                  # /about route
│   ├── blogs/                  # /blogs route
│   ├── business-financial-advisory/ # Route
│   ├── technology-staffing/    # Route
│   └── ...other routes
├── components/                 # React Components
│   ├── layout/                 # Site-wide layouts (Header, Footer)
│   ├── sections/               # Reusable modular sections (Hero, Grids, Accordions)
│   ├── ui/                     # Basic UI primitives
│   └── views/                  # Complex page-level views
├── data/                       # Content definitions (TypeScript objects)
│   ├── architectureData.ts
│   ├── pagesData.tsx
│   ├── sectorsData.ts
│   └── ...other data files
├── public/                     # Static assets (images, fonts, favicons)
│   └── images/
├── next.config.ts              # Next.js Configuration
├── package.json                # Dependencies (Next 16, React 19, Framer Motion)
└── tsconfig.json               # TypeScript config (Defines @/* alias)
```

## Routing Conventions
- Every route is a folder inside `app/` containing a `page.tsx` file.
- Pages should be kept thin. A `page.tsx` file should primarily act as a composition of `<Section />` components.
- Data for the page should be fetched or imported at the top of the `page.tsx` file and passed down to sections as props.
