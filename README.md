# CaliLawyer — marketing site

Static marketing site for a California law firm with two practice areas:
**personal injury** and **lemon law**. It's the credible umbrella brand that
segments two very different visitors — injury victims and frustrated vehicle
owners — into two separate funnels from the first interaction.

Built with **Next.js 15** (App Router) + **TypeScript** + **Tailwind v4**,
statically exported for Vercel. No backend, CMS, auth, or database.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Structure

```
src/
  app/
    layout.tsx                       # fonts, header, footer, sticky mobile CTA
    globals.css                      # design tokens (colors, type, motion, radii)
    page.tsx                         # home: dual-path hero + conversion stack
    injury/page.tsx                  # practice hub (PracticeArea template)
    injury/car-accident/page.tsx     # child page proving template reuse
    lemon-law/page.tsx               # practice hub (PracticeArea template)
    lemon-law/what-qualifies/page.tsx# child page proving template reuse
  components/                        # Header, StickyMobileCTA, Button, Card,
                                     # ResultCard, StatCounter, Accordion,
                                     # LeadForm, Testimonial, LocationGrid,
                                     # Footer, DualPathHero, PracticeArea
  lib/
    site.ts                          # firm constants + bracketed placeholders
    content/                         # PracticeArea data (types, injury, lemon-law)
```

Both practice hubs and their child pages render from **one** `PracticeArea`
component — they differ only by the data object passed in.

## Design system

All colors, fonts, radii, motion, and spacing are defined as tokens in
`src/app/globals.css` and wired into Tailwind's theme. Components reference
tokens only — no raw hex.

- **Colors:** ink, charcoal, bone, paper, gold, white.
- **Type roles:** Hanken Grotesk (body), Fraunces (display headlines),
  JetBrains Mono (figures — settlements, stats, case numbers).
- **Accessibility (WCAG 2.2 AA):** gold is never body text on light grounds;
  bone is text only on dark grounds; 3px focus rings (ink on light, gold on
  dark) are never removed; all motion honors `prefers-reduced-motion`.

## Lead form

`LeadForm` is client-side only. It POSTs to `process.env.LEAD_ENDPOINT`
(exposed to the client at build time via `next.config.ts`). If unset, it shows
the success state and logs the payload to the console — no email/CRM service is
integrated.

```bash
# optional
LEAD_ENDPOINT="https://example.com/leads" npm run build
```

## Content placeholders

Every factual legal claim is left as a bracketed placeholder for attorney
review (centralized in `src/lib/site.ts`): `[SETTLEMENTS RECOVERED]`,
`[YEARS IN PRACTICE]`, `[NO-FEE PHRASING]`, `[TCPA CONSENT LANGUAGE]`,
`[ATTORNEY ADVERTISING DISCLAIMER]`. No settlement figures, review counts, or
fee guarantees are invented.
