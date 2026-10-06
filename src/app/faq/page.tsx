import type { Metadata } from "next";
import { Accordion, type FaqItem } from "@/components/Accordion";
import { LinkButton } from "@/components/Button";
import { injuryContent } from "@/lib/content/injury";
import { lemonLawContent } from "@/lib/content/lemon-law";
import { PLACEHOLDER, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about California personal injury and lemon law claims — cost, deadlines, what to do next, and whether you have a case.",
};

const GENERAL: FaqItem[] = [
  {
    q: "Do I pay anything upfront?",
    a: `No. Case reviews are always free, and we take injury cases on a contingency basis — our fee comes out of the recovery we win, not your pocket. ${PLACEHOLDER.noFee}`,
  },
  {
    q: "Can I still call if I’m not sure I have a case?",
    a: "Absolutely. A lot of people aren’t sure, and that’s exactly what a free review is for. We’ll tell you honestly whether you have something worth pursuing — with no pressure either way.",
  },
  {
    q: "Do you handle cases throughout California?",
    a: "Yes. We help clients across the state, from Los Angeles and San Diego to the Bay Area and the Central Valley.",
  },
  {
    q: "Does submitting a form make me a client?",
    a: "No. Submitting a form or contacting us does not create an attorney–client relationship, and you should not send confidential or time-sensitive information through this website. A relationship is formed only through a signed written agreement.",
  },
];

// Structured data: only mirrors content actually on the page.
function faqJsonLd(groups: FaqItem[][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flat().map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function FaqPage() {
  const jsonLd = faqJsonLd([GENERAL, injuryContent.faqs, lemonLawContent.faqs]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="on-dark bg-ink">
        <div className="container-site py-16 md:py-24">
          <span className="eyebrow text-bone">FAQ</span>
          <h1 className="h-hero mt-4 max-w-3xl text-white">
            Questions, answered straight.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone">
            The answers below are general information, not legal advice. For
            guidance on your specific situation, the best next step is a free
            case review.
          </p>
        </div>
      </section>

      {/* General */}
      <section className="bg-paper">
        <div className="container-site max-w-3xl py-16 md:py-20">
          <h2 className="h-section text-ink">General</h2>
          <div className="mt-8">
            <Accordion items={GENERAL} tone="light" />
          </div>
        </div>
      </section>

      {/* Personal injury */}
      <section className="bg-white">
        <div className="container-site max-w-3xl py-16 md:py-20">
          <h2 className="h-section text-ink">Personal injury</h2>
          <div className="mt-8">
            <Accordion items={injuryContent.faqs} tone="light" />
          </div>
        </div>
      </section>

      {/* Lemon law */}
      <section className="bg-paper">
        <div className="container-site max-w-3xl py-16 md:py-20">
          <h2 className="h-section text-ink">Lemon law</h2>
          <div className="mt-8">
            <Accordion items={lemonLawContent.faqs} tone="light" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="on-dark bg-charcoal">
        <div className="container-site flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-xl">
            <h2 className="h-section text-white">Still have a question?</h2>
            <p className="mt-3 text-lg text-bone">
              Ask us directly. The call is free and there’s no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="/contact" size="lg">
              Free case review
            </LinkButton>
            <LinkButton href={SITE.phoneHref} variant="secondary" size="lg" onDark>
              Call {SITE.phoneDisplay}
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
