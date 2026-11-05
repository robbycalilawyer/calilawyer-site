# src/unpublished - drafted pages that are not live

Placeholder guides, city pages, fee pages and the attorney profile route. They sit outside `src/app`, so they are not App Router routes, not in the sitemap, not in `public/llms.txt`.

## Contents

- `injury/`, `lemon-law/`, `guides/` - hub drafts
- `city/injury-lawyer/`, `city/lemon-law-attorney/` - city pages
- `attorneys/robby-terziyan/` - attorney profile draft
- Data for these lives in `../lib/content/geo/`; the template is `../components/AnswerPage.tsx`

## Load for which task

| Task | Load |
|---|---|
| Edit a draft | The draft `page.tsx`, `../lib/content/geo/pages.ts`, `../components/AnswerPage.tsx` |
| Publish a draft | README "Answer pages", `../app/CONTEXT.md` (routes), `../lib/routes.ts`, `public/llms.txt`, `docs/schema-checklist.md` |

## Process to publish

1. Confirm every claim against README "Approved firm facts"; replace bracketed placeholders.
2. Move the page into `src/app/<path>/page.tsx`.
3. Add to `SITEMAP_ROUTES` and `public/llms.txt`; update the schema checklist.
4. `npm run build && node scripts/verify-html.mjs`.

Until then, do not import these files from live pages.
