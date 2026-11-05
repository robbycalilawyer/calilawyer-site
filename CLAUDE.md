# CaliLawyer.com site (map)

Static marketing site for a California law firm (personal injury and lemon law): Next.js 15 App Router, TypeScript, Tailwind v4, exported to `out/`, deployed on Netlify. No backend, CMS or database. Docs and routing only here: rules and facts live in the files below.

## Folder map

- `src/app/` - App Router pages, layout, `globals.css` (design tokens), sitemap, robots
- `src/components/` - shared UI (`PracticeArea` template, `LeadForm`, header/footer, CTAs), `home/` for the homepage
- `src/lib/` - firm constants (`site.ts`), SEO and JSON-LD helpers, route list, attorney photo sizes
- `src/lib/content/` - page copy as typed data (injury, lemon law, FAQ, results), `geo/` for unpublished answer pages
- `src/unpublished/` - drafted pages that are NOT routes, not in the sitemap
- `public/` - static assets, `_redirects`, `llms.txt`, `__forms.html` (Netlify form detection)
- `scripts/` - `verify-html.mjs` export check, photo build, taste-skill install (CI)
- `docs/` - `schema-checklist.md`, review screenshots
- `.github/workflows/ci.yml` - install, lint, build

## Task routing

Search for the file you need first (grep, codegraph); open a folder's CONTEXT.md only when you don't know where something lives.

| To do this | Open as needed |
|---|---|
| Edit copy on a practice or case-type page | `src/lib/content/CONTEXT.md`, then `types.ts` |
| Add or change a page or route | `src/app/CONTEXT.md`, then `src/lib/routes.ts` |
| Change a component or the lead form | `src/components/CONTEXT.md`, README "Lead form" |
| Change colors, type, motion | README "Design system", then `src/app/globals.css` |
| Change phone, address, attorney, firm facts | README "Approved firm facts", then `src/lib/site.ts` |
| Schema, SEO, sitemap, llms.txt | `src/lib/CONTEXT.md`, `docs/schema-checklist.md` |
| Publish or edit an unpublished answer page | `src/unpublished/CONTEXT.md`, README "Answer pages" |
| Redirects or deploy | `public/_redirects`, `netlify.toml`, `scripts/CONTEXT.md` |

## Canonical docs

- `README.md` - stack, structure, design system, lead form, approved firm facts, answer pages
- `docs/schema-checklist.md` - JSON-LD checks and open post-deploy items
- No `factory.md` or `AGENTS.md` in this repo.

Commands: `npm run dev`, `npm run lint`, `npm run build`, then `node scripts/verify-html.mjs`.
