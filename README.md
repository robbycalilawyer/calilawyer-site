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

## Content placeholders

Factual claims stay bracketed for attorney review (`src/lib/site.ts`):
`[SETTLEMENTS RECOVERED]`, `[CLIENTS HELPED]`, `[YEARS IN PRACTICE]`,
`[RESULT AMOUNT]`, `[NO-FEE PHRASING]`, `[TCPA CONSENT LANGUAGE]`,
`[ATTORNEY ADVERTISING DISCLAIMER]`, `[RESPONSIBLE ATTORNEY]`,
`[BAR NUMBER]`, `[OFFICE ADDRESS]`. Testimonials, admissions, and result
narratives are marked the same way. Do not replace them with invented
figures.
