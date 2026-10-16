import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { PLACEHOLDER, SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Request a free, confidential CaliLawyer case review by form, phone, or text. Submitting a form does not create an attorney-client relationship.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Free case review."
        sub="Strictly confidential. No obligation. Not a retainer."
      />
      <section className="bg-paper">
        <div className="container-site grid items-start gap-12 py-16 lg:grid-cols-[1fr_1.05fr] md:py-20">
          <div className="space-y-8">
            <div>
              <h2 className="h-section text-ink">Get answers on the facts you have.</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Share as much as you are comfortable sharing. A team member
                reviews it and contacts you. Do not send confidential or
                time-sensitive information you cannot also say out loud.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="rounded-[var(--radius-lg)] border border-bone bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/60">
                  Call / text
                </p>
                <a href={SITE.phoneHref} className="figure mt-2 block text-2xl text-ink">
                  {SITE.phoneDisplay}
                </a>
                <a href={SITE.smsHref} className="mt-2 inline-block text-sm font-semibold text-ink">
                  Send a text
                </a>
              </li>
              <li className="rounded-[var(--radius-lg)] border border-bone bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/60">
                  Email
                </p>
                <a href={`mailto:${SITE.email}`} className="mt-2 block font-semibold text-ink">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <p className="rounded-[var(--radius-lg)] border border-bone bg-white p-6 text-ink/80">
              <span className="font-semibold text-ink">Office: </span>
              {PLACEHOLDER.office}
            </p>
            <p className="border-l-4 border-gold pl-4 text-sm leading-relaxed text-ink/70">
              {PLACEHOLDER.tcpa} By submitting, you agree to be contacted by
              phone, text, or email. Message and data rates may apply. Reply
              STOP to opt out. This does not create an attorney–client
              relationship.
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
