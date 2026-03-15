# Portfolio — AI/ML Research Engineer

Modern, production-ready portfolio built with Next.js 16, Tailwind CSS, shadcn/ui, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + JetBrains Mono
- **Theme:** Dark/Light mode with next-themes

## Customization Guide

### 1. Personal Information

Edit `lib/data.ts` — all portfolio content is centralized there:

- `personalInfo` — name, title, tagline, social links
- `researchInterests` — research interest badges
- `publications` — academic publications
- `projects` — project cards
- `skills` — skill bars and domain badges
- `experience` — work experience timeline
- `education` — education entries

### 2. Placeholders to Replace

Search for `[À COMPLÉTER]` and `[NOM]` across the codebase:

- [ ] `lib/data.ts` — Replace all `[NOM]`, `[username]`, `[id]` placeholders
- [ ] `lib/data.ts` — Fill in abstracts, descriptions, and highlights
- [ ] `app/layout.tsx` — Update meta tags with real name and URL
- [ ] `app/json-ld.tsx` — Update structured data URL
- [ ] `app/sitemap.ts` — Update base URL
- [ ] `public/robots.txt` — Update sitemap URL
- [ ] `public/images/placeholder-avatar.svg` — Replace with real photo
- [ ] `public/files/CV_placeholder.pdf` — Replace with real CV

### 3. Avatar

Replace the placeholder in `public/images/` with your photo. Update the Hero component to use `next/image` with your photo path.

### 4. Colors

Theme colors are in `app/globals.css`. Modify the `:root` and `.dark` CSS variables.

### 5. SEO

- Meta tags: `app/layout.tsx`
- Structured data: `app/json-ld.tsx`
- Sitemap: `app/sitemap.ts`
- Robots: `public/robots.txt`

## Deployment (Vercel)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with fonts, meta, theme
├── page.tsx            # Home page (all sections)
├── globals.css         # Theme colors, Tailwind config
├── json-ld.tsx         # Structured data
├── sitemap.ts          # Dynamic sitemap
├── publications/       # Publications page
└── projects/           # Projects page

components/
├── ui/                 # shadcn/ui components
├── layout/
│   ├── Header.tsx      # Sticky header with nav
│   └── Footer.tsx      # Footer with social links
├── sections/
│   ├── Hero.tsx        # Hero with CTA buttons
│   ├── About.tsx       # Bio, education, interests
│   ├── Research.tsx    # Research areas grid
│   ├── Publications.tsx # Filterable publications
│   ├── Projects.tsx    # Project cards grid
│   ├── Skills.tsx      # Skill bars and badges
│   ├── Experience.tsx  # Timeline
│   └── Contact.tsx     # Contact section
└── common/
    ├── ThemeProvider.tsx
    ├── ThemeToggle.tsx
    └── SectionWrapper.tsx

lib/
├── data.ts             # All portfolio content
└── utils.ts            # Utility functions
```

## Features

- Dark/Light mode with system preference detection
- Smooth scroll navigation with active section highlight
- Responsive design (mobile-first)
- Animated sections with Framer Motion
- Publication filters and BibTeX copy
- SEO optimized with JSON-LD structured data
- Static generation for performance
