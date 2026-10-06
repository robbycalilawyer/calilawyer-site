import { DualPathHero } from "@/components/DualPathHero";
import { LinkButton } from "@/components/Button";
import { Card } from "@/components/Card";
import { StatCounter } from "@/components/StatCounter";
import { ResultCard } from "@/components/ResultCard";
import { Testimonial } from "@/components/Testimonial";
import { Accordion } from "@/components/Accordion";
import { PLACEHOLDER, SITE } from "@/lib/site";

// Home-level trust stats. Every factual claim is a bracketed
// placeholder for attorney review — we do not invent figures.
const TRUST_STATS = [
  { value: PLACEHOLDER.settlements, label: "Recovered for clients" },
  { value: PLACEHOLDER.years, label: "Years in practice" },
  { value: "24/7", label: "Free case reviews" },
  { value: "$0", label: "Upfront cost to start" },
];

const RESULTS = [
  {
    amount: "[RESULT AMOUNT]",
    caseType: "Rear-end collision",
    detail:
      "Client rear-ended on the freeway; insurer’s first offer barely covered the ER visit.",
  },
  {
    amount: "[RESULT AMOUNT]",
    caseType: "Vehicle buyback",
    detail:
      "Transmission defect the dealer couldn’t fix after repeated attempts. Full buyback recovered.",
  },
  {
    amount: "[RESULT AMOUNT]",
    caseType: "Pedestrian injury",
    detail:
      "Client struck in a crosswalk by a distracted driver; disputed liability resolved.",
  },
];

const HOME_TESTIMONIALS = [
  {
    quote:
      "They took the phone calls, the paperwork, all of it. I finally got to focus on getting better.",
    name: "Marcus D.",
    context: "Personal injury client",
  },
  {
    quote:
      "Four trips to the dealer and nothing worked. They got me a full buyback and it cost me nothing.",
    name: "Danielle W.",
    context: "Lemon law client",
  },
  {
    quote:
      "Honest, responsive, and genuinely on my side. I always knew what was happening with my case.",
    name: "Priya S.",
    context: "Car accident client",
  },
];

const HOME_FAQS = [
  {
    q: "How do I know which team I need?",
    a: "If you’ve been hurt in an accident, that’s our personal injury team. If your vehicle keeps failing under warranty, that’s lemon law. Not sure? Call us — we’ll point you to the right place in a two-minute conversation.",
  },
  {
    q: "What does it cost to talk to you?",
    a: `Nothing. Case reviews are always free and there’s no obligation. ${PLACEHOLDER.noFee}`,
  },
  {
    q: "Do you handle cases across California?",
    a: "Yes. We help clients throughout California, from Los Angeles and San Diego to the Bay Area and the Central Valley.",
  },
  {
    q: "How fast will someone get back to me?",
    a: "Quickly. Someone is available around the clock to take your call, and we follow up on form submissions as soon as possible.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- Signature: dual-path hero ---------- */}
      <DualPathHero />

      {/* ---------- Trust bar ---------- */}
      <section className="border-b border-bone bg-paper">
        <div className="container-site py-12 md:py-16">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {TRUST_STATS.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <StatCounter
                  value={s.value}
                  label={s.label}
                  tone="light"
                  size="sm"
                />
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Two ways we fight for you ---------- */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow text-ink/60">Two ways we fight for you</span>
            <h2 className="h-section mt-3 text-ink">
              One firm, two teams, built for two very different problems.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card href="/injury" className="flex flex-col">
              <span className="eyebrow text-ink/60">Personal Injury</span>
              <h3 className="h-card mt-3 text-ink">
                You were hurt. Someone else is responsible.
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-ink/75">
                Car crashes, falls, and more. We take on the insurance company,
                document the true cost of your injury, and fight for a full
                recovery — while you focus on healing.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-ink">
                <span className="border-b-2 border-gold pb-0.5 transition-colors group-hover:border-ink">
                  Explore personal injury
                </span>
                <span aria-hidden="true">→</span>
              </span>
            </Card>

            <Card href="/lemon-law" className="flex flex-col">
              <span className="eyebrow text-ink/60">Lemon Law</span>
              <h3 className="h-card mt-3 text-ink">
                Your vehicle keeps failing. It’s not on you.
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-ink/75">
                When a manufacturer can’t fix a covered defect, California law
                may owe you a refund or replacement — and in qualifying cases
                they pay the fees, not you.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-ink">
                <span className="border-b-2 border-gold pb-0.5 transition-colors group-hover:border-ink">
                  Explore lemon law
                </span>
                <span aria-hidden="true">→</span>
              </span>
            </Card>
          </div>
        </div>
      </section>

      {/* ---------- Firm authority block ---------- */}
      <section className="on-dark bg-ink">
        <div className="container-site grid gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:items-center md:py-24">
          <div>
            <span className="eyebrow text-bone">Why CaliLawyer</span>
            <h2 className="h-section mt-3 text-white">
              The other side has a team of adjusters. You should have one too.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-bone">
              <p>
                Insurance companies and manufacturers do this all day, every
                day. Alone, most people don’t stand a chance against that
                machinery — and they know it.
              </p>
              <p>
                We built CaliLawyer to level that. Two focused teams, one
                straightforward promise: we do the fighting, you get your life
                back.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/injury" size="lg">
                I was injured
              </LinkButton>
              <LinkButton href="/lemon-law" variant="secondary" size="lg" onDark>
                I have a lemon
              </LinkButton>
            </div>
          </div>

          <ul className="space-y-4">
            {[
              "Free, honest case reviews — we tell you where you really stand.",
              "No upfront cost to start your case.",
              "Direct attorney attention, not a claim number in a queue.",
              "Available around the clock when you need us.",
            ].map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-[var(--radius-md)] border border-charcoal bg-charcoal p-5 text-bone"
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
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Result cards ---------- */}
      <section className="bg-paper">
        <div className="container-site py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow text-ink/60">Recent results</span>
            <h2 className="h-section mt-3 text-ink">
              Outcomes we’ve fought for.
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              Figures below are placeholders pending attorney verification. Prior
              results do not guarantee a similar outcome.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {RESULTS.map((r) => (
              <ResultCard key={r.detail} {...r} />
            ))}
          </div>
          <div className="mt-10">
            <LinkButton href="/results" variant="secondary" size="lg">
              View all case results
            </LinkButton>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow text-ink/60">Client voices</span>
            <h2 className="h-section mt-3 text-ink">
              People we’ve stood beside.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {HOME_TESTIMONIALS.map((t) => (
              <Testimonial key={t.name} {...t} tone="light" />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-paper">
        <div className="container-site max-w-3xl py-16 md:py-20">
          <h2 className="h-section text-ink">Questions, answered.</h2>
          <div className="mt-8">
            <Accordion items={HOME_FAQS} tone="light" />
          </div>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="on-dark bg-charcoal">
        <div className="container-site flex flex-col items-start gap-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="h-hero text-white">
              Two doors. Pick yours and let’s get started.
            </h2>
            <p className="mt-5 text-lg text-bone">
              Whichever side you’re on, the first step is the same: a free,
              no-pressure conversation about where you stand.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/injury" size="lg">
              Injured in an accident?
            </LinkButton>
            <LinkButton href="/lemon-law" size="lg">
              Stuck with a lemon?
            </LinkButton>
            <LinkButton
              href={SITE.phoneHref}
              variant="secondary"
              size="lg"
              onDark
            >
              Call {SITE.phoneDisplay}
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
