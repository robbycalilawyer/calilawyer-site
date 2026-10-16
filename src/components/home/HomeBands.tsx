import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { DualPathHero } from "@/components/DualPathHero";
import { LocationGrid } from "@/components/LocationGrid";
import { BLOG_POSTS } from "@/lib/content/blog";
import { SITE_FAQS } from "@/lib/content/faq";
import { SERVICE_CITIES, SITE } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { LinkButton } from "@/components/Button";

const WHY = [
  {
    title: "Evidence-first intake",
    body: "Repair orders, medical records, and video are requested before the other side writes the file.",
  },
  {
    title: "Manufacturer accountability",
    body: "Dealer visits are not a strategy. We take the warranty file to the company that has to answer it.",
  },
  {
    title: "Insurance-company pressure",
    body: "Adjusters minimize injuries. We document treatment and losses before a number is discussed.",
  },
  {
    title: "Damages documentation",
    body: "Bills, wages, and future care are organized so a demand reads like a trial exhibit.",
  },
  {
    title: "Negotiation with leverage",
    body: "We negotiate from a file that can be filed. A low offer does not close the case.",
  },
  {
    title: "California-wide access",
    body: "The review does not depend on which county the crash, the bite, or the dealership was in.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Free consultation",
    body: "A confidential look at the facts, the repair orders, or the medical records.",
  },
  {
    step: "02",
    title: "Evidence and records",
    body: "We secure the documents the other side would rather see late.",
  },
  {
    step: "03",
    title: "Demand and leverage",
    body: "A demand backed by a file prepared as if a judge will read it.",
  },
  {
    step: "04",
    title: "Resolution",
    body: "Settlement when it is fair. Litigation when it is not. You hear from us either way.",
  },
];

export function HomeBands() {
  return (
    <>
      <JsonLd data={faqSchema(SITE_FAQS)} />

      <DualPathHero />

      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <span className="eyebrow text-ink/60">The CaliLawyer.com advantage</span>
          <h2 className="h-section mt-3 max-w-2xl text-ink">Pressure where it counts.</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/75">
            The other side has a playbook. So do we. The work is the record,
            then the strategy, then the pressure.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((item) => (
              <li
                key={item.title}
                className="rounded-[var(--radius-lg)] border border-bone bg-paper p-6 transition-colors duration-[var(--motion-base)] hover:border-ink"
              >
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/75">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="on-dark bg-ink">
        <div className="container-site py-16 md:py-24">
          <h2 className="h-section max-w-3xl text-white">
            From first call to full-court pressure.
          </h2>
          <p className="mt-4 text-lg text-bone">The other side has a playbook. So do we.</p>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((item) => (
              <li key={item.step} className="border-t border-gold pt-5">
                <span className="figure text-3xl text-gold">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-ink/60">The firm</span>
            <h2 className="h-section mt-3 text-ink">
              California advocacy with a modern edge.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              Documents first. Strategy second. Pressure always. CaliLawyer.com is a
              Glendale plaintiff practice for injury victims and consumers who are tired
              of being managed by a call center.
            </p>
            <div className="mt-8">
              <LinkButton href="/about">About the firm</LinkButton>
            </div>
          </div>
          <figure>
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-bone bg-ink">
              <Image
                src="/assets/attorney-portrait.jpg"
                alt="Rober A. Terziyan"
                width={1024}
                height={1024}
                className="aspect-[4/5] w-full object-cover grayscale"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink/60">
              Rober A. Terziyan
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site py-16 md:py-20">
          <LocationGrid
            heading="Glendale office. Serving clients across California"
            cities={[...SERVICE_CITIES]}
            hrefBase="/contact"
          />
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site py-16 md:py-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="h-section text-ink">
                Know the process before the other side calls.
              </h2>
            </div>
            <Link href="/blog" className="font-semibold text-ink">
              <span className="border-b-2 border-gold pb-0.5">Read resources</span>
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <li key={post.title} className="rounded-[var(--radius-lg)] border border-bone bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/60">
                  {post.category}
                </p>
                <h3 className="mt-3 font-display text-2xl text-ink">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site max-w-3xl py-16 md:py-20">
          <h2 className="h-section text-ink">Questions, answered.</h2>
          <div className="mt-8">
            <Accordion items={SITE_FAQS} />
          </div>
        </div>
      </section>

      <section className="on-dark bg-charcoal">
        <div className="container-site py-16 md:py-24">
          <h2 className="h-hero max-w-3xl text-white">
            Tell us what happened. We’ll tell you the next step.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/contact" size="lg">
              Free consultation
            </LinkButton>
            <LinkButton href={SITE.phoneHref} variant="secondary" size="lg" onDark>
              Call / text now
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
