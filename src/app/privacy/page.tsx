import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CaliLawyer handles information submitted through this website. Placeholder policy pending review by counsel before launch.",
};

const SECTIONS = [
  {
    h: "Information we collect",
    p: "When you submit a form or contact us, we may collect the information you provide — such as your name, phone number, email address, and a description of your situation. We may also collect limited technical data (such as device and usage information) through standard web analytics.",
  },
  {
    h: "How we use your information",
    p: "We use the information you provide to respond to your inquiry, evaluate a potential matter, and communicate with you about it. We do not sell your personal information.",
  },
  {
    h: "How we share information",
    p: "We may share information with service providers who help us operate this website and our intake process, and as required by law. [Describe any other sharing, analytics, or advertising partners here before launch.]",
  },
  {
    h: "Your choices",
    p: "You can opt out of text messages by replying STOP and can ask us to stop contacting you at any time. [Add any state-specific privacy rights — including California Consumer Privacy Act disclosures and requests — before launch.]",
  },
  {
    h: "Data retention & security",
    p: "We retain information for as long as needed to respond to your inquiry and as required by law, and we take reasonable measures to protect it. No method of transmission over the internet is completely secure — please do not submit confidential or time-sensitive information through this website.",
  },
  {
    h: "Contact",
    p: `Questions about this policy can be directed to ${SITE.email}. [Insert responsible contact and firm address before launch.]`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="on-dark bg-ink">
        <div className="container-site py-16 md:py-20">
          <span className="eyebrow text-bone">Legal</span>
          <h1 className="h-hero mt-4 text-white">Privacy Policy</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bone">
            This is a placeholder privacy policy. It must be reviewed and
            completed by counsel before the site goes live.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site max-w-3xl py-16 md:py-20">
          <p className="rounded-[var(--radius-md)] border-l-4 border-gold bg-white p-5 text-sm leading-relaxed text-ink/75">
            <span className="font-semibold text-ink">Placeholder notice.</span>{" "}
            The language below is a starting template only and does not
            constitute a complete or compliant privacy policy. Replace the
            bracketed items and have the final policy reviewed before launch.
          </p>

          <div className="mt-10 space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.h}>
                <h2 className="h-card text-ink">{s.h}</h2>
                <p className="mt-3 leading-relaxed text-ink/80">{s.p}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-ink/55">Last updated: [DATE].</p>
        </div>
      </section>
    </>
  );
}
