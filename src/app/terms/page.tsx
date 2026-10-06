import type { Metadata } from "next";
import { PLACEHOLDER, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Attorney Advertising Disclaimer",
  description:
    "Terms of use and attorney advertising disclaimers for the CaliLawyer website. This website is for informational purposes only.",
};

const SECTIONS = [
  {
    h: "Attorney advertising",
    p: "This website is a communication and may be considered attorney advertising under the rules of the State Bar of California. The information presented should not be construed as a promise or guarantee about the outcome of any matter.",
  },
  {
    h: "No attorney–client relationship",
    p: "Using this website, submitting a form, or contacting us does not create an attorney–client relationship. An attorney–client relationship is formed only through a signed, written agreement with the firm. Please do not send confidential or time-sensitive information through this website.",
  },
  {
    h: "Not legal advice",
    p: "The content on this website is provided for general informational purposes only and is not legal advice. Laws change and apply differently to different facts. You should consult a qualified attorney about your specific situation.",
  },
  {
    h: "No guarantee of results",
    p: `Past results do not guarantee future outcomes. Each case depends on its own facts and law. Any results, testimonials, or figures shown are illustrative placeholders pending verification and are not a promise of similar results. ${PLACEHOLDER.noFee}`,
  },
  {
    h: "Testimonials & endorsements",
    p: "Any testimonials appearing on this site are placeholders until replaced with verified client statements provided with permission. Testimonials are not a guarantee of future results.",
  },
  {
    h: "Third-party links",
    p: "This website may link to third-party sites for convenience. We are not responsible for the content, accuracy, or privacy practices of those sites.",
  },
  {
    h: "Responsible attorney",
    p: `${PLACEHOLDER.responsibleAttorney}. ${PLACEHOLDER.firmAddress}. The firm is responsible for the content of this website.`,
  },
  {
    h: "Governing law",
    p: "These terms are governed by the laws of the State of California. [Insert any additional terms, jurisdiction, and dispute-resolution language before launch.]",
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="on-dark bg-ink">
        <div className="container-site py-16 md:py-20">
          <span className="eyebrow text-bone">Legal</span>
          <h1 className="h-hero mt-4 max-w-3xl text-white">
            Terms &amp; Attorney Advertising Disclaimer
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bone">
            This website is for informational purposes only and does not create
            an attorney–client relationship.
          </p>
        </div>
      </section>

      {/* Advertisement notice */}
      <section className="border-b border-bone bg-gold">
        <div className="container-site py-4">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.12em] text-ink">
            Advertisement · Attorney Advertising
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site max-w-3xl py-16 md:py-20">
          <p className="rounded-[var(--radius-md)] border-l-4 border-gold bg-white p-5 text-sm leading-relaxed text-ink/75">
            <span className="font-semibold text-ink">Placeholder notice.</span>{" "}
            This is a starting template. Replace the bracketed items and have the
            final terms and disclaimers reviewed by counsel before launch.
          </p>

          <div className="mt-10 space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.h}>
                <h2 className="h-card text-ink">{s.h}</h2>
                <p className="mt-3 leading-relaxed text-ink/80">{s.p}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-ink/55">
            Questions about these terms: {SITE.email}. Last updated: [DATE].
          </p>
        </div>
      </section>
    </>
  );
}
