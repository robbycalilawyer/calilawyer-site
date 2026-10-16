"use client";

import { SITE } from "@/lib/site";
import { Button, LinkButton } from "@/components/Button";
import { LeadForm } from "@/components/LeadForm";
import { SlashMotif } from "@/components/SlashMotif";
import { openCaseModal } from "@/components/CaseReviewModal";

const CHIPS = [
  "Free consultation",
  "Glendale office",
  "Lemon law and injury",
  "English, Armenian, Spanish",
];

export function HomeHero() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink">
      <div
        className="slash-pattern pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
      />
      <div className="container-site relative grid items-start gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <div className="flex items-center gap-4">
            <SlashMotif />
            <span className="eyebrow text-bone">
              California lemon law + personal injury
            </span>
          </div>
          <h1 className="h-hero mt-5 text-white">
            California lemon law and injury law.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone">
            CaliLawyer.com in Glendale reviews defective vehicles and injury
            cases. Free consultation. We handle cases on contingency.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button type="button" onClick={openCaseModal} size="lg">
              Free consultation
            </Button>
            <LinkButton href={SITE.phoneHref} variant="secondary" size="lg" onDark>
              Call or text
            </LinkButton>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {CHIPS.map((chip) => (
              <li key={chip} className="text-sm font-semibold text-bone">
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
