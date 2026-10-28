# Rahel Belachew Portfolio

Modern, professional, responsive portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Design tokens
- Background: `#0B0D0C`
- Accent: `#00C875`
- Primary text: `#FFFFFF`
- Secondary text: `#A5ADA8`
- Cards/surfaces: `#151917`
- Borders: `#292F2B`

## Getting started
```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Update content (data-driven)
Edit files in `src/data/`:
- `profile.ts` - name, headline, intro, about, contact links, CV path
- `projects.ts` - add/edit/remove projects, categories, case study details
- `experience.ts` - internships/professional experience

## Add assets
- CV: place `cv.pdf` in `public/cv/`
- Project images: place in `public/images/projects/` and reference in project data

## Pages/structure
- Home with sections: Hero, Projects, About, Experience, Contact
- Project detail pages: `/projects/[slug]` with full case study template
- Sticky navbar, mobile menu, footer
- Category filters on Projects
- Previous/Next navigation between projects, Related projects

## Notes
- Placeholder content is clearly marked with `[PLACEHOLDER]` for easy replacement
- No fake stats/testimonials/client logos
- Contact form is disabled until a backend is configured (instructions in Contact section)
- Semantic HTML, focus states, keyboard-friendly navigation
- Responsive for desktop/tablet/mobile
- SEO metadata in layout

## Build
```bash
npm run build
npm run start
```
