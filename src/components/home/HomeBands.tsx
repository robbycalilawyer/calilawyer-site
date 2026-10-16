import { AttorneyFigure } from "@/components/AttorneyPortrait";
import { Accordion } from "@/components/Accordion";
import { DualPathHero } from "@/components/DualPathHero";
import { LocationGrid } from "@/components/LocationGrid";
import { SITE_FAQS } from "@/lib/content/faq";
import { SERVICE_CITIES, SITE } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { LinkButton } from "@/components/Button";

const WHY = [
  {
    title: "Records first",
    body: "Repair orders, medical records, video. We ask for them before the other side writes the story.",
  },
  {
    title: "The manufacturer, not just the dealer",
    body: "On a lemon law file, we go to the manufacturer. The dealer isn't the one who has to buy the car back.",
  },
  {
    title: "The insurance file",
    body: "On an injury file, treatment and lost wages go in before anyone talks about a number.",
  },
  {
    title: "Damages in one place",
    body: "The demand names the bills, the wages, and the care that's still ahead.",
  },
  {
    title: "A file that can be filed",
    body: "A low offer doesn't close the case. We negotiate from a file that can be filed.",
  },
  {
    title: "Anywhere in California",
    body: "The review doesn’t depend on the county of the crash, the bite, or the dealership.",
  },
];

const STEPS = [
  {
    title: "Free consultation",
    body: "Tell us what happened. The consultation is free.",
  },
  {
    title: "Records",
    body: "We gather the records early.",
  },
  {
    title: "The demand",
    body: "A demand from a file prepared as if a judge will read it.",
  },
  {
    title: "Resolution",
    body: "We prepare every case as if it may go to trial.",
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
            heading="The office is in Glendale. We also take cases across California."
            cities={[...SERVICE_CITIES]}
            hrefBase="/contact"
          />
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
