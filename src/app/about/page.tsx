import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";
import { PLACEHOLDER, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "CaliLawyer is a California plaintiff firm built for two fights: personal injury and lemon law. Modern communication, serious leverage, statewide reach.",
};

const PILLARS = [
  {
    title: "Built for Californians",
    body: "We represent people — injured victims and consumers stuck with defective vehicles — against insurers and manufacturers who do this every day. We’re focused on California law, California courts, and California clients.",
  },
  {
    title: "Modern communication. Serious leverage.",
    body: "You get straight answers and same-day callbacks, not a runaround. Behind that accessibility is a firm that prepares every case as if it’s going to trial — because that’s what moves the other side.",
  },
  {
    title: "A plaintiff firm for consumers and injury victims.",
    body: "Two practice areas, one standard. Whether you’re recovering from a crash or fighting a manufacturer over a lemon, you get a team that treats your case like it matters — because it does.",
  },
];

const VALUES = [
  "We only win when you do — our fee comes from the recovery, not your pocket.*",
  "Documents first. Strategy second. Pressure always.",
  "We’d rather tell you the hard truth early than a comfortable fiction.",
  "Every client gets a real attorney’s attention, not a claim number.",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero / manifesto */}
      <section className="on-dark bg-ink">
        <div className="container-site py-16 md:py-24">
          <span className="eyebrow text-bone">About the Firm</span>
          <h1 className="h-hero mt-4 max-w-4xl text-white">
            California advocacy with a modern edge.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone">
            CaliLawyer is built for two very different fights — personal injury
            and California lemon law — and one shared belief: ordinary people
            shouldn’t have to face billion-dollar insurers and manufacturers
            alone.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-paper">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="rounded-[var(--radius-lg)] border border-bone bg-white p-7 md:p-8"
              >
                <h2 className="h-card text-ink">{p.title}</h2>
                <p className="mt-4 leading-relaxed text-ink/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="on-dark bg-charcoal">
        <div className="container-site grid gap-12 py-16 md:grid-cols-[1fr_1.2fr] md:items-center md:py-24">
          <div>
            <span className="eyebrow text-bone">What we stand for</span>
            <h2 className="h-section mt-3 text-white">
              The other side has a playbook. So do we.
            </h2>
          </div>
          <ul className="space-y-4">
            {VALUES.map((v) => (
              <li
                key={v}
                className="flex items-start gap-3 rounded-[var(--radius-md)] border border-charcoal bg-ink p-5 text-bone"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--radius-pill)] bg-gold text-ink">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team placeholders */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow text-ink/60">Our team</span>
            <h2 className="h-section mt-3 text-ink">The people in your corner.</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Replace the cards below with real attorney and team photography and
              bios before launch.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[var(--radius-lg)] border border-bone bg-paper"
              >
                <div
                  className="flex aspect-[4/5] items-center justify-center bg-charcoal"
                  aria-hidden="true"
                >
                  <span className="eyebrow text-bone/60">Photo placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-ink">
                    [ATTORNEY NAME]
                  </h3>
                  <p className="eyebrow mt-1 text-ink/55">[TITLE / ROLE]</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
                    [Short attorney bio — background, focus areas, and what they
                    bring to clients. Replace before launch.]
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials placeholder */}
      <section className="bg-paper">
        <div className="container-site py-16 md:py-20">
          <div className="rounded-[var(--radius-lg)] border-l-4 border-gold bg-white p-6 md:p-8">
            <h2 className="eyebrow text-ink/70">Credentials & recognition</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-ink/80">
              Bar admissions, honors, memberships, and recognitions must be
              independently verifiable before they appear here. Do not publish
              awards, “super lawyer”-type designations, or specialist claims
              unless they can be substantiated under California’s attorney
              advertising rules.
            </p>
            <ul className="mt-5 space-y-2 text-[0.95rem] text-ink/70">
              <li>[BAR ADMISSIONS — e.g. State Bar of California, [YEAR]]</li>
              <li>[MEMBERSHIPS — e.g. Consumer Attorneys of California]</li>
              <li>[RECOGNITIONS — verify before publishing]</li>
            </ul>
            <p className="mt-5 text-sm text-ink/60">
              Responsible attorney: {PLACEHOLDER.responsibleAttorney}.{" "}
              {PLACEHOLDER.firmAddress}.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="on-dark bg-ink">
        <div className="container-site flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-xl">
            <h2 className="h-section text-white">
              Ready to talk to someone on your side?
            </h2>
            <p className="mt-3 text-lg text-bone">
              The first step is a free, no-pressure conversation about where you
              stand.
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
