# scripts - build checks and tooling

Run from the repo root.

## Files

- `verify-html.mjs` - run after `npm run build`; checks the `out/` sitemap HTML for one h1, JSON-LD and absolute canonicals
- `build-attorney-photo.sh` - generates responsive attorney images in `public/assets/attorney/`; pairs with `src/lib/attorney-photo.ts`
- `install-taste-skill.sh` - installs the taste-skill into gitignored `.agents/skills`; CI runs it via `npm run install-taste-skill`

## Load for which task

| Task | Load |
|---|---|
| Export fails verification | `verify-html.mjs`, `../docs/schema-checklist.md`, `../src/lib/schema.ts` |
| Update attorney photo | `build-attorney-photo.sh`, `../src/lib/attorney-photo.ts` |
| CI behavior | `../.github/workflows/ci.yml` (install, taste-skill, lint, build) |

Deploy is Netlify (`../netlify.toml`: `npm run build`, publish `out`). Redirects are in `../public/_redirects`.
