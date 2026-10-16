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
    "Answers about California lemon law, injury claims, and fees. A form doesn’t make you a client. Not legal advice.",
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
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <section className="bg-paper">
        <div className="container-site max-w-3xl py-20 md:py-32">
          <Accordion items={SITE_FAQS} />
          <div className="mt-12 rounded-[var(--radius-lg)] border border-ink bg-white p-8">
            <h2 className="font-display text-3xl text-ink">Still have questions?</h2>
            <p className="mt-3 text-ink/75">
              Send the facts. Free consultation, and it doesn’t make you a client.
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
