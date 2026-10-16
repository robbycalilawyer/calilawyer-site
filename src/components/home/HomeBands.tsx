import Link from "next/link";
import { AttorneyFigure } from "@/components/AttorneyPortrait";
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
    title: "Records first",
    body: "We ask for repair orders, medical records, and video before the other side writes the file.",
  },
  {
    title: "The manufacturer, not just the dealer",
    body: "We take the warranty file to the company that has to answer it.",
  },
  {
    title: "The insurance file",
    body: "We document treatment and lost wages before anyone talks about a number.",
  },
  {
    title: "Damages in one place",
    body: "Bills, wages, and future care go in the file so the demand is specific.",
  },
  {
    title: "A file that can be filed",
    body: "We negotiate from a file that can be filed. A low offer doesn’t close the case.",
  },
  {
    title: "Anywhere in California",
    body: "The review doesn’t depend on the county of the crash, the bite, or the dealership.",
  },
];

const STEPS = [
  {
    title: "Free consultation",
    body: "A confidential look at the facts, the repair orders, or the medical records.",
  },
  {
    title: "Records",
    body: "We get the documents the other side would rather see late.",
  },
  {
    title: "The demand",
    body: "A demand from a file prepared as if a judge will read it.",
  },
  {
    title: "Resolution",
    body: "Settlement when it’s fair. Court when it isn’t. You’ll hear from us either way.",
  },
];

export function HomeBands() {
  return (
    <>
      <JsonLd data={faqSchema(SITE_FAQS)} />

      <DualPathHero />

      <section className="bg-white">
        <div className="container-site py-20 md:py-32">
          <h2 className="h-section max-w-2xl text-ink">The file comes first.</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink">
            We start with the records. Then we decide what to ask for.
          </p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {WHY.map((item) => (
              <li
                key={item.title}
                className="rounded-[var(--radius-lg)] bg-paper p-6"
              >
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="on-dark bg-ink">
        <div className="container-site py-20 md:py-32">
          <h2 className="h-section max-w-3xl text-white">What happens after you call.</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-2">
            {STEPS.map((item) => (
              <li key={item.title}>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-bone">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site grid items-center gap-12 py-20 md:py-32 lg:grid-cols-2">
          <div>
            <h2 className="h-section text-ink">A Glendale office for California cases.</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
              CaliLawyer.com reviews injury cases and lemon law claims. You talk
              to the firm, not a call center. Free consultation. We handle cases
              on contingency.
            </p>
            <div className="mt-8">
              <LinkButton href="/about">About the firm</LinkButton>
            </div>
          </div>
          <AttorneyFigure />
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site py-20 md:py-28">
          <LocationGrid
            heading="Glendale office. Serving clients across California"
            cities={[...SERVICE_CITIES]}
            hrefBase="/contact"
          />
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site py-20 md:py-32">
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
              <li key={post.title} className="rounded-[var(--radius-lg)] bg-white p-6">
                <p className="text-sm font-semibold text-ink">
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
        <div className="container-site max-w-3xl py-20 md:py-28">
          <h2 className="h-section text-ink">Questions, answered.</h2>
          <div className="mt-8">
            <Accordion items={SITE_FAQS} />
          </div>
        </div>
      </section>

      <section className="on-dark bg-charcoal">
        <div className="container-site py-20 md:py-32">
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
