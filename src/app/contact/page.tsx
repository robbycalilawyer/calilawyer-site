import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { OFFICE, SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Request a free consultation with CaliLawyer.com in Glendale by form, phone, or text. A form doesn’t create an attorney-client relationship.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Free consultation."
        sub="Strictly confidential. No obligation. Not a retainer."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <section className="bg-paper">
        <div className="container-site grid items-start gap-12 py-16 lg:grid-cols-[1fr_1.05fr] md:py-20">
          <div className="space-y-8">
            <div>
              <h2 className="h-section text-ink">Tell us what you know so far.</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
                Share as much as you’re comfortable sharing. Someone at the
                firm reviews it and contacts you. Don’t send confidential or
                time-sensitive information you can’t also say out loud.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="rounded-[var(--radius-lg)] bg-white p-6">
                <p className="text-sm font-semibold text-ink/60">
                  Call / text
                </p>
                <a href={SITE.phoneHref} className="figure mt-2 block text-2xl text-ink">
                  {SITE.phoneDisplay}
                </a>
                <a href={SITE.smsHref} className="mt-2 inline-block text-sm font-semibold text-ink">
                  Send a text
                </a>
              </li>
              <li className="rounded-[var(--radius-lg)] bg-white p-6">
                <p className="text-sm font-semibold text-ink/60">
                  Email
                </p>
                <a href={`mailto:${SITE.email}`} className="mt-2 block font-semibold text-ink">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <p className="rounded-[var(--radius-lg)] bg-white p-6 text-ink/80">
              <span className="font-semibold text-ink">Office: </span>
              {OFFICE.display}
            </p>
          </div>
          <div id="lead-form" className="scroll-mt-28">
            <LeadForm practice="general" tone="light" />
          </div>
        </div>
      </section>
    </>
  );
}
