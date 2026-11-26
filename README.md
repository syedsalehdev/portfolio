# Syed Saleh — Portfolio

A red-and-white, architectural portfolio inspired by game-menu navigation. Built with Next.js 16, React 19, TypeScript, and CSS, with an original SVG city backdrop and locally hosted fonts.

## Explore

- **About:** overview, both current roles, prior experience, and education.
- **Projects:** this portfolio, YouTube to MP3, StockAI, and the Airedale challenge. Each project has a searchable, annotated map of every tracked repository file.
- **Awards:** second place in the November 2026 Airedale Applied Intelligence Challenge.
- **Resume:** embedded PDF with open and download links.
- **Skills:** self-assessed proficiency bars. Flame markers identify C/C++ and LLVM as actively improving.
- **Contact:** email, GitHub, LinkedIn, portfolio, and resume.

Use the menu or Previous/Next section buttons. Up/Down keys navigate sections outside text inputs and links; Home/End select the first/last section. Escape returns from a project detail view. Native scrolling reads the current section. Browser Back/Forward and deep links such as `/#projects/stockai` are supported.

## Develop

Use Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js. `scripts/dev.mjs` passes development arguments through to Next.js and normalizes preview tools' host flags.

```sh
npm run build
npm start
```

## Content editing

- `src/lib/data.ts`: profile, projects, roles, experience, and skill values.
- `src/lib/repositories.json`: reviewed file descriptions for the three external projects.
- `src/lib/portfolio-files.json`: file descriptions for this website.
- `src/components/Portfolio.tsx`: interface and interactions.
- `src/app/globals.css`: design, responsive layout, and accessibility styles.
- `public/syedsalehresume.pdf`: downloadable resume.
- `public/city.svg`: original geometric city artwork.

The repository maps are curated snapshots reviewed on November 25, 2026. Update them when repository files change. GitHub links open the current `main` branch, and no GitHub token is required.

StockAI describes the currently published Streamlit prototype, not the earlier unvalidated trading-model concept. Airedale attributes the original analysis to the team and labels modeled financial outcomes appropriately. Baseball processing speed is a development target; LLVM experiments are underway.

## Deployment

See `DEPLOYMENT.md` for replacing the old site, previewing on a Git branch, and publishing through the existing Vercel project. No backend, secrets, database, or environment variables are needed for this portfolio.
