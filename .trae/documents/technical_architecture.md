# Technical Architecture Document - The Open Group Website

## 1. Technology Stack
- **Framework**: React (Next.js for SSR/Static Generation to ensure SEO and performance).
- **Styling**: Tailwind CSS for rapid, consistent, and responsive UI development.
- **Animations**: Framer Motion for high-quality transitions and micro-interactions.
- **Icons**: Lucide React or React Icons.
- **Form Handling**: React Hook Form (for the Contact page).
- **Deployment**: Vercel (recommended for Next.js projects).

## 2. Project Structure
```text
src/
├── components/          # Reusable UI components
│   ├── common/          # Buttons, Inputs, Typography
│   ├── layout/          # Header, Footer, Page containers
│   └── brands/          # Brand-specific components (Grid, Card)
├── pages/               # Next.js pages (File-based routing)
│   ├── index.tsx        # Home Page
│   ├── sustainability.tsx
│   ├── mission.tsx
│   ├── careers.tsx
│   └── contact.tsx
├── styles/              # Global CSS and Tailwind configuration
├── utils/               # Helper functions
└── constants/           # Brand data, navigation links
```

## 3. Data Strategy
- **Brand Data**: Store the brand list (names, taglines, image paths) in a constant file `src/constants/brands.ts` for easy maintenance.
- **Content**: Content for Sustainability, Mission, and Careers will be hardcoded in the initial phase but structured for easy migration to a CMS (like Sanity or Contentful) if needed later.

## 4. Key Components
- **Navbar**: Sticky header with logo and navigation links.
- **BrandGrid**: A responsive grid displaying `BrandCard` components.
- **BrandCard**: Individual card with logo, name, tagline, and hover animations.
- **SectionHeader**: Consistent header component for different sections.
- **ContactForm**: Validated form with success/error states.

## 5. Styling & Design System
- **Tailwind Config**: Define custom colors (`primary-cyan`, `dark-black`) and font families.
- **Responsive Design**: Mobile-first breakpoints using Tailwind's `sm`, `md`, `lg`, `xl`.
- **Animations**: 
  - Page transitions: Fade and slide.
  - Scroll reveals: Staggered entry for brand cards.
  - Hover effects: Scale and shadow depth.

## 6. Performance & SEO
- **Image Optimization**: Use Next.js `next/image` for automatic resizing and lazy loading.
- **SEO Metadata**: Implement custom Meta tags for each page using `next/head`.
- **Static Site Generation (SSG)**: Use `getStaticProps` where applicable for lightning-fast load times.
