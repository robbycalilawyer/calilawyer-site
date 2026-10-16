# CaliLawyer — marketing site

Static marketing site for a California law firm with two practice areas:
**personal injury** and **lemon law**. It is the credible umbrella brand that
segments injury victims and frustrated vehicle owners into two funnels.

Built with **Next.js 15** (App Router) + **TypeScript** + **Tailwind v4**,
statically exported. No backend, CMS, auth, or database. The earlier Vite /
Replit monorepo (API server, connectors SDK, mockup sandbox) is not part of
this site.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # static export to ./out
```

## Structure

```
src/
  app/                             # App Router pages, sitemap, robots
    injury/                        # personal-injury hub + child case types
    lemon-law/                     # lemon-law hub + what-qualifies
    results about faq contact blog privacy terms
  components/                      # Header, Footer, PracticeArea, LeadForm,
                                   # SlashMotif, CaseReviewModal, FloatingCTA,
                                   # MobileBottomCTA
  lib/
    site.ts                        # firm constants + bracketed placeholders
    seo.ts schema.ts routes.ts
    content/                       # PracticeArea data
public/assets/                     # logo, white logo, portrait, OG image
```

Practice hubs and child pages render from one `PracticeArea` component.
Flat paths from the Vite export (`/personal-injury`, `/car-accidents`, and
the other case-type slugs) render the same pages and canonicalize to the
nested routes.

## Design system

Colors, fonts, radii, motion, and spacing are tokens in `src/app/globals.css`.
Components reference tokens only.

- **Colors:** ink, charcoal, bone, paper, gold, white.
- **Type:** Hanken Grotesk (body), Fraunces (display), JetBrains Mono (figures).
- **Accessibility (WCAG 2.2 AA):** gold is not body text on light grounds;
  bone is text on dark grounds; 3px focus rings (ink on light, gold on dark)
  stay in place; motion honors `prefers-reduced-motion`.

## Lead form

`LeadForm` is client-side only. It POSTs to `process.env.LEAD_ENDPOINT`
(exposed at build time via `next.config.ts`). If unset, it shows the success
state and logs the payload. No email or CRM is connected. Lemon-law forms
collect vehicle facts. The repair-order upload is a labeled placeholder.

```bash
# optional
LEAD_ENDPOINT="https://example.com/leads" npm run build
```

## Approved firm facts

Phone `(310) 331-0310` (`tel:+13103310310`, schema `+1-310-331-0310`), office `315 Arden Ave Ste 10, Glendale, CA 91203`,
firm name CaliLawyer.com, responsible attorney Rober A. Terziyan, State Bar of
California No. 351959. Languages are English, Armenian, and Spanish. Fees are
stated only as “We handle cases on contingency.” Consultations are free.
Stats, case results, testimonials, and star ratings are not rendered.
