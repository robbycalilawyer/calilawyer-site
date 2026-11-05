# src/lib/content - page copy as typed data

Practice-area and page content consumed by `PracticeArea` and other templates. Edit copy here, not in `page.tsx`.

## Files

- `types.ts` - `PracticeAreaContent` contract; read first
- `injury.ts` - personal-injury hub
- `accidents.ts`, `accidents-vehicle.ts`, `accidents-liability.ts`, `accident-build.ts` - case-type pages and the builder that assembles them
- `lemon-law.ts` - lemon-law hub and what-qualifies
- `shared.ts` - copy reused across pages
- `faq.ts` - FAQ items (the same strings feed FAQPage JSON-LD)
- `results.ts` - results data (not rendered on the live site)
- `geo/` - unpublished answer-page data (`pages.ts`, `types.ts`, `index.ts`); see `../../unpublished/CONTEXT.md`

## Load for which task

| Task | Load |
|---|---|
| Edit one case-type page | `types.ts`, then the one data file for it |
| Edit FAQ | `faq.ts`; schema reads it via `../schema.ts` |
| Add a case type | `accident-build.ts`, a sibling entry, then `../routes.ts` and `../../app/CONTEXT.md` |
| Lemon law copy | `lemon-law.ts` |

## Rules to check before editing

- Placeholders stay bracketed. No stats, case results, testimonials or star ratings; fees only as "We handle cases on contingency." (README "Approved firm facts").
- Do not load `geo/` unless working on unpublished answer pages.
