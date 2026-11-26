# Install the redesign in the existing GitHub repository

This is a complete replacement source tree for `syedsalehdev/portfolio`. Your GitHub repository, history, Vercel project, and domain can stay in place. The live website has not been changed by this delivery.

## Use GitHub Desktop or an existing local checkout

1. Clone `https://github.com/syedsalehdev/portfolio` if you do not already have a local checkout. Create a branch named `portfolio-redesign` from the current production branch.
2. Extract the delivered ZIP outside your checkout. Open the `portfolio-main` folder inside it.
3. In your checkout, delete the old **src** and **public** folders. Copy the replacement **src** and **public** folders from the ZIP into the same location. Replace folders completely: merging folders would retain obsolete components with incompatible imports.
4. Copy the **scripts** folder and the root files from the ZIP into the checkout, replacing files with matching names. Never delete or replace the checkout's **.git** folder. Do not copy **node_modules** or **.next** from another installation.
5. From the checkout, run `npm ci`, then `npm run build`. Use `npm run dev` to inspect locally.
6. Review the changes, commit them, and push the `portfolio-redesign` branch. If the existing Vercel Git integration is enabled, inspect its preview deployment.
7. Open a pull request into your configured production branch (usually `main`). Merge when satisfied. Vercel should automatically deploy it through the existing project.

## Vercel configuration

Keep the existing repository connection and domain. Use the Next.js framework preset, `npm run build` as the build command, and the default Next.js output settings. This project uses Next.js 16.2.12 and requires Node.js 20.9 or newer. No environment variables are required.

If the project is not Git-connected, connect this repository in Vercel before expecting automatic deployments. Do not create a second project just to update the existing site.

## Before merging

- Preview About, Projects, Awards, Resume, Skills, and Contact.
- Open all four projects and try the file search.
- Open/download the resume on desktop and mobile.
- Check the email, LinkedIn, GitHub, and project links.
- Confirm skill bar levels and the flame help text reflect your preferences.
- Check keyboard navigation, browser Back, and a narrow phone viewport.

## Source changes

The old `src/components/layout`, `src/components/sections`, `src/components/ui`, and `src/lib/hooks` folders are replaced by `src/components/Portfolio.tsx`. The page, root layout, stylesheet, and content module are rewritten. New repository maps document all files. The outdated default favicon and unused starter SVG icons are replaced by `src/app/icon.svg` and the city illustration. Your original headshot and font files are retained. The updated resume PDF is included.

## Maintain later

Edit `src/lib/data.ts` for most profile changes. Skill bars use percentages derived from your supplied self-ratings (Python 5/5, SQL 4/5, R 4/5, Java 3.4/5, C/C++ 3/5, JavaScript 3.5/5, Azure 4/5, LLVM 3.8/5); numbers are not displayed. Set `improving` to change flame markers.

The external file maps were checked against GitHub on November 25, 2026. Descriptions of binary competition documents use their supplied project context and observed filenames. StockAI's current code is not backtested, so that project entry intentionally differs from older resume/README language. The included resume is the previously approved one-page version; reconcile its stock-project wording if you add that project back later.

Only source files and static assets are included. Dependencies are restored with `npm ci`.
