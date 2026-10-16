"use client";

import { SITE } from "@/lib/site";
import { LeadForm } from "@/components/LeadForm";
import { SlashMotif } from "@/components/SlashMotif";
import { openCaseModal } from "@/components/CaseReviewModal";

const CHIPS = [
  "Free consultation",
  "Serving all of California",
  "Lemon law + injury",
  "Fee terms in writing",
];

export function HomeHero() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink">
      <div
        className="slash-pattern pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-[32rem] w-[32rem] rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site relative grid items-start gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <div className="flex items-center gap-4">
            <SlashMotif />
            <span className="eyebrow text-bone">
              California lemon law + personal injury
            </span>
          </div>
          <h1 className="h-hero mt-6 text-white">
            California’s lemon law &amp; injury firm.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone">
            CaliLawyer fights for people hurt by negligence and consumers stuck
            with defective vehicles — with trial-ready pressure, direct client
            contact, and statewide California reach.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openCaseModal}
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-pill)] bg-gold px-7 py-3 font-semibold text-ink"
            >
              Start free case review
            </button>
            <a
              href={SITE.phoneHref}
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-pill)] border-2 border-bone/70 px-7 py-3 font-semibold text-white hover:border-white hover:bg-white/10"
            >
              Call / text now
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6">
            {CHIPS.map((chip) => (
              <li
                key={chip}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-bone"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
        <div id="lead-form" className="scroll-mt-28">
          <LeadForm practice="general" tone="dark" />
        </div>
      </div>
    </section>
  );
}
