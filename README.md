# Syed Saleh — Developer Portfolio

A modern, dark-themed developer portfolio built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** for scroll/hover animations
- Self-hosted variable fonts: Inter (body), Space Grotesk (display), JetBrains Mono (labels/mono accents)
- Custom inline SVG icons for GitHub/LinkedIn

## Project structure

```
src/
  app/
    layout.tsx          Root layout, fonts, metadata
    page.tsx             Assembles all sections in order
    globals.css          Design tokens (colors, fonts) + base styles
    fonts/                Self-hosted .ttf variable font files
  components/
    layout/
      Navbar.tsx          Sticky nav with scroll-spy active section highlight
      ScrollProgress.tsx  Top progress bar tied to scroll position
    sections/
      Hero.tsx
      About.tsx
      Experience.tsx
      Projects.tsx
      Education.tsx
      Contact.tsx
    ui/
      SectionHeading.tsx  Shared eyebrow + heading + description block
      Tag.tsx             Small mono pill for tech stack / coursework
      SignalLine.tsx      Animated waveform SVG (hero signature element)
      icons.tsx           Custom GitHub / LinkedIn icons
  lib/
    data.ts               All content (profile, experience, projects, education) —
                           edit this file to update copy without touching components
    hooks/
      useActiveSection.ts IntersectionObserver hook powering the nav highlight
```

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Customizing

- **Content**: everything text-based (name, roles, experience bullets, project descriptions, coursework) lives in `src/lib/data.ts`.
- **Headshot**: the hero currently shows initials in a placeholder circle. Drop a real photo at `public/headshot.jpg` and swap the placeholder `<div>` in `src/components/sections/Hero.tsx` for an `<Image src="/headshot.jpg" ... />`.
- **Colors**: edit the CSS variables at the top of `src/app/globals.css` (`--bg`, `--accent`, etc).
- **Fonts**: swapped from `next/font/google` to `next/font/local` because this sandbox couldn't reach Google Fonts directly — the same `.ttf` files Google Fonts serves are self-hosted in `src/app/fonts/`. If you have normal network access, you can switch back to `next/font/google` in `layout.tsx` if you prefer, or keep the local copies (no external requests, slightly better privacy/perf).
