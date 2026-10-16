import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SITE_FAQS } from "@/lib/content/faq";
import { faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "Answers about California lemon law reviews, injury claims, fees, and what a form submission does not do. Not legal advice.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(SITE_FAQS)} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        sub="Clear answers. Not a case evaluation, and not legal advice about your facts."
      />
      <section className="bg-paper">
        <div className="container-site max-w-3xl py-16 md:py-24">
          <Accordion items={SITE_FAQS} />
          <div className="mt-12 rounded-[var(--radius-lg)] border border-ink bg-white p-8">
            <h2 className="font-display text-3xl text-ink">Still have questions?</h2>
            <p className="mt-3 text-ink/75">
              Send the facts. The review is free and it does not make you a client.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 items-center rounded-[var(--radius-pill)] bg-gold px-6 font-semibold text-ink"
            >
              Contact the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
