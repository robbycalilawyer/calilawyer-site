import Link from "next/link";
import type { PracticeAreaContent } from "@/lib/content/types";
import { SITE } from "@/lib/site";
import { faqSchema } from "@/lib/schema";
import { LinkButton } from "./Button";
import { Accordion } from "./Accordion";
import { LocationGrid } from "./LocationGrid";
import { LeadForm } from "./LeadForm";
import { JsonLd } from "./JsonLd";
import { SlashMotif } from "./SlashMotif";
import { PracticeAreaExtras } from "./PracticeAreaExtras";

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * ONE reusable template that renders both practice hubs and their
 * child pages. All copy comes from a PracticeAreaContent object, so
 * /injury, /lemon-law, and their children differ only by data.
 */
export function PracticeArea({ content }: { content: PracticeAreaContent }) {
  const c = content;
  const hubHref = `/${c.slug}`;

  return (
    <>
      <JsonLd data={faqSchema(c.faqs)} />
      {/* ---------- Hero (dark, with stat counters) ---------- */}
      <section className="on-dark relative overflow-hidden bg-ink">
        <div
          className="slash-pattern pointer-events-none absolute inset-0 opacity-50"
          aria-hidden="true"
        />
        <div className="container-site relative grid gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:items-center md:py-24">
          <div>
            {c.breadcrumb ? (
              <Link
                href={c.breadcrumb.href}
                className="text-sm font-semibold text-bone hover:text-white"
              >
                ← {c.breadcrumb.label}
              </Link>
            ) : null}
            <div
              className={`flex items-center gap-4 ${c.breadcrumb ? "mt-4" : ""}`}
            >
              <SlashMotif />
              <span className="eyebrow text-bone">{c.hero.eyebrow}</span>
            </div>
            <h1 className="h-hero mt-4 text-white">{c.hero.headline}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone">
              {c.hero.sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="#lead-form" size="lg">
                Get my free consultation
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

        </div>
      </section>

      {/* ---------- Narrative intro ---------- */}
      <section className="bg-paper">
        <div className="container-site max-w-3xl py-20 md:py-28">
          <div className="space-y-5 text-lg leading-relaxed text-ink/85">
            {c.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Important legal information callout */}
          <aside className="mt-10 rounded-[var(--radius-lg)] border-l-4 border-gold bg-white p-6 md:p-7">
            <h2 className="eyebrow text-ink/70">{c.legalCallout.title}</h2>
            <p className="mt-3 text-[0.975rem] leading-relaxed text-ink/80">
              {c.legalCallout.body}
            </p>
          </aside>
        </div>
      </section>

      {/* ---------- What your case may be worth ---------- */}
      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-start">
            <div className="md:sticky md:top-24">
              <h2 className="h-section text-ink">{c.worth.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                {c.worth.body}
              </p>
            </div>
            <ul className="space-y-4">
              {c.worth.items.map((item) => (
                <li
                  key={item.label}
                  className="flex gap-4 rounded-[var(--radius-md)] bg-paper p-5"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-pill)] bg-gold text-ink">
                    <CheckIcon />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{item.label}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/70">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- What we handle + common scenarios ---------- */}
      <section className="bg-paper">
        <div className="container-site grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <div className="rounded-[var(--radius-lg)] bg-white p-7 md:p-8">
            <h2 className="h-card text-ink">{c.handle.title}</h2>
            <ul className="mt-6 space-y-3">
              {c.handle.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/85">
                  <span className="mt-1 text-ink">
                    <CheckIcon className="h-[18px] w-[18px]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-lg)] bg-white p-7 md:p-8">
            <h2 className="h-card text-ink">{c.scenarios.title}</h2>
            <ul className="mt-6 space-y-3">
              {c.scenarios.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/85">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[var(--radius-pill)] bg-gold"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PracticeAreaExtras content={c} />

      {/* ---------- 3-step process ---------- */}
      <section className="on-dark bg-charcoal">
        <div className="container-site py-20 md:py-32">
          <h2 className="h-section max-w-2xl text-white">How it works</h2>
          <p className="mt-4 max-w-xl text-lg text-bone">
            Three steps, and we do the heavy lifting on all of them.
          </p>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {c.process.map((step) => (
              <li
                key={step.step}
                className="rounded-[var(--radius-lg)] border border-charcoal bg-ink p-7"
              >
                <span className="figure text-4xl font-medium text-gold">
                  {step.step}
                </span>
                <h3 className="h-card mt-4 text-white">{step.title}</h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-bone">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Why us (stats) ---------- */}
      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="h-section text-ink">{c.whyUs.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              {c.whyUs.body}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-white">
        <div className="container-site max-w-3xl py-20 md:py-28">
          <h2 className="h-section text-ink">Common questions</h2>
          <div className="mt-8">
            <Accordion items={c.faqs} tone="light" />
          </div>
        </div>
      </section>

      {/* ---------- Inline lead form ---------- */}
      <section id="lead-form" className="on-dark scroll-mt-20 bg-ink">
        <div className="container-site grid gap-12 py-16 md:grid-cols-[1fr_1.1fr] md:items-center md:py-24">
          <div>
            <span className="eyebrow text-bone">Free consultation</span>
            <h2 className="h-section mt-4 text-white">
              Tell us what happened.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-bone">
              A few details is all it takes to get started. Free consultation.
              We handle cases on contingency.
            </p>
            <a
              href={SITE.phoneHref}
              className="figure mt-6 inline-block text-2xl font-semibold text-gold"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
          <LeadForm practice={c.formPractice} tone="dark" />
        </div>
      </section>

      {/* ---------- Location grid ---------- */}
      <section className="bg-paper">
        <div className="container-site py-20 md:py-28">
          <LocationGrid
            heading={c.locations.heading}
            cities={c.locations.cities}
            hrefBase={hubHref}
            tone="light"
          />
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="on-dark bg-charcoal">
        <div className="container-site flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-xl">
            <h2 className="h-section text-white">{c.finalCta.headline}</h2>
            <p className="mt-3 text-lg text-bone">{c.finalCta.sub}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="#lead-form" size="lg">
              Start my free consultation
            </LinkButton>
            <LinkButton
              href={SITE.phoneHref}
              variant="secondary"
              size="lg"
              onDark
            >
              Call now
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
