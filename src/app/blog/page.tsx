import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Plain-English guides on California injury and lemon law claims — what documents help, what to do after a crash, and why adjusters call so fast.",
};

// Placeholder resource cards. Replace with real articles before launch;
// no fabricated authors, dates, or legal conclusions.
const ARTICLES = [
  {
    category: "Lemon Law",
    title: "What documents help a California lemon law claim?",
    excerpt:
      "Repair orders are the backbone of any lemon claim. Here’s what to keep, why dealer paperwork matters, and how to organize it before a review.",
  },
  {
    category: "Personal Injury",
    title: "What to do after a car accident in California",
    excerpt:
      "The first hours matter. A practical checklist for safety, evidence, medical care, and the one conversation to avoid before you’ve talked to a lawyer.",
  },
  {
    category: "Personal Injury",
    title: "Why insurance adjusters call so quickly",
    excerpt:
      "That friendly early call isn’t courtesy — it’s strategy. What adjusters are really after, and why a recorded statement can quietly shrink your claim.",
  },
  {
    category: "Lemon Law",
    title: "Buyback vs. replacement: what each one means",
    excerpt:
      "If your vehicle qualifies, you may have options. A plain-English look at how refunds, replacements, and cash-and-keep settlements generally work.",
  },
  {
    category: "Personal Injury",
    title: "How injury compensation is evaluated",
    excerpt:
      "Medical bills are only part of the picture. How lost income, future care, and pain and suffering factor into the full value of a claim.",
  },
  {
    category: "Personal Injury",
    title: "Hit by an uninsured driver — now what?",
    excerpt:
      "An uninsured or hit-and-run driver doesn’t always mean you’re out of options. How uninsured-motorist coverage and other avenues can still apply.",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark bg-ink">
        <div className="container-site py-16 md:py-24">
          <span className="eyebrow text-bone">Resources</span>
          <h1 className="h-hero mt-4 max-w-3xl text-white">
            Know the process before the other side calls.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone">
            Straightforward guides on how California injury and lemon law claims
            actually work. General information to help you get oriented — not
            legal advice.
          </p>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-paper">
        <div className="container-site py-16 md:py-20">
          <p className="mb-8 text-sm text-ink/60">
            Articles below are placeholders. Replace with published resources
            before launch.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a) => (
              <article
                key={a.title}
                className="flex flex-col rounded-[var(--radius-lg)] border border-bone bg-white p-6 md:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="eyebrow text-ink/55">{a.category}</span>
                  <span className="rounded-[var(--radius-pill)] border border-bone px-2.5 py-0.5 text-xs font-semibold text-ink/50">
                    Coming soon
                  </span>
                </div>
                <h2 className="h-card mt-3 text-ink">{a.title}</h2>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/70">
                  {a.excerpt}
                </p>
                <span className="mt-5 text-sm font-semibold text-ink/40">
                  Full guide publishing soon
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="on-dark bg-charcoal">
        <div className="container-site flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-xl">
            <h2 className="h-section text-white">
              Rather just ask someone directly?
            </h2>
            <p className="mt-3 text-lg text-bone">
              A free case review answers the questions that matter most — about
              your situation, specifically.
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
