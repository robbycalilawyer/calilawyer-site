# src/components - shared UI

React components used across pages. Components take props or typed content; firm constants come from `../lib/site.ts`, never hardcoded.

## Groups

- Page templates: `PracticeArea.tsx` (hubs and child pages), `PracticeAreaExtras.tsx`, `AnswerPage.tsx` (unpublished geo pages), `PageHero.tsx`, `DualPathHero.tsx`
- Homepage: `home/HomeHero.tsx`, `home/HomeBands.tsx`
- Lead capture: `LeadForm.tsx`, `LeadFormExtras.tsx`, `CaseReviewModal.tsx`, `FloatingCTA.tsx`, `MobileBottomCTA.tsx`
- Chrome: `Header.tsx`, `Footer.tsx`, `Logo.tsx`, `BreadcrumbTrail.tsx`, `SlashMotif.tsx`
- Primitives: `Button.tsx`, `Card.tsx`, `Accordion.tsx`
- Data display: `ResultCard.tsx`, `ResultsExplorer.tsx`, `StatCounter.tsx`, `Testimonial.tsx`, `LocationGrid.tsx`, `AttorneyPortrait.tsx`
- `JsonLd.tsx` - emits a schema object; builders are in `../lib/schema.ts`

## Load for which task

| Task | Load |
|---|---|
| Lead form behavior | `LeadForm.tsx`, README "Lead form", `../../public/__forms.html` |
| Practice page layout | `PracticeArea.tsx` and `../lib/content/types.ts` |
| Styling | `../app/globals.css` tokens; README "Design system" (WCAG 2.2 AA, focus rings, reduced motion) |
| Attorney image | `AttorneyPortrait.tsx`, `../lib/attorney-photo.ts` |
| Result cards, stats, testimonials | Check README "Approved firm facts" first: these are not rendered on the live site |

## Usual process

1. Find the nearest existing component in the group above and extend it.
2. Use tokens only; keep 3px focus rings and `prefers-reduced-motion` handling.
3. If the lead form fields change, update `public/__forms.html` to match.
4. `npm run lint && npm run build`.
