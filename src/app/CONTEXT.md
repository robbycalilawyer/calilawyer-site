# src/app - App Router pages and site-wide shell

Routes, layout, metadata, sitemap, robots, and the design tokens. Pages stay thin: they pass typed content to components.

## Layout

- `layout.tsx` - root shell, fonts, firm JSON-LD graph, Header/Footer, CTAs
- `globals.css` - all design tokens (colors, fonts, radii, motion, spacing)
- `page.tsx` - homepage, built from `src/components/home/`
- `sitemap.ts`, `robots.ts` - driven by `src/lib/routes.ts`; crawlers are allowed
- `injury/`, `lemon-law/` - practice hubs and child case-type pages
- `results/ about/ faq/ contact/ blog/ privacy/ terms/` - single pages
- Top-level `car-accidents/`, `slip-and-fall/`, etc. are legacy alias paths; canonical URLs are `/injury/<slug>`

## Load for which task

| Task | Load |
|---|---|
| New or changed route | `../lib/routes.ts` (sitemap), `../../public/_redirects`, an existing sibling `page.tsx` as pattern |
| Page metadata or JSON-LD | `../lib/seo.ts`, `../lib/schema.ts` |
| Practice-area page content | `../lib/content/CONTEXT.md` (do not inline copy in the page) |
| Tokens, colors, type | `globals.css` only; components reference tokens, never raw values |
| Firm facts | `../lib/site.ts`; approved wording in README "Approved firm facts" |

## Usual process

1. Copy a sibling `page.tsx` (`injury/car-accidents/page.tsx` for case types).
2. Add the route to `SITEMAP_ROUTES` in `../lib/routes.ts`.
3. If it replaces an old URL, add a forced redirect in `public/_redirects`.
4. `npm run lint && npm run build && node scripts/verify-html.mjs` (one h1, JSON-LD, absolute canonicals).

Do not create routes for anything in `src/unpublished/`.
