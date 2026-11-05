# src/lib - firm constants, SEO, routes

Non-visual logic and data. No React components here (except via types).

## Files

- `site.ts` - single source of truth for firm name, phone, address, nav
- `seo.ts` - metadata helpers, canonical URLs
- `schema.ts` - JSON-LD builders (firm, Person, FAQPage, article, city service)
- `routes.ts` - `SITEMAP_ROUTES`, canonical public routes only
- `attorney-photo.ts` - responsive photo sizes (generated assets built by `../../scripts/build-attorney-photo.sh`)
- `content/` - page copy as data; see `content/CONTEXT.md`

## Load for which task

| Task | Load |
|---|---|
| Change a firm fact | `site.ts`, then README "Approved firm facts" for what is allowed |
| New or changed JSON-LD | `schema.ts`, `../../docs/schema-checklist.md` (tick the checklist) |
| Canonical URL or metadata | `seo.ts` |
| Add a route to the sitemap | `routes.ts` |
| Page copy | `content/CONTEXT.md` |

## Usual process

1. Change the constant or builder once here; pages and components read from it.
2. Rebuild and run `node scripts/verify-html.mjs` to confirm JSON-LD and canonicals in the export.
3. Update `docs/schema-checklist.md` if a schema claim changes.
