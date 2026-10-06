import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PLACEHOLDER, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact / Free Case Review",
  description:
    "Tell us what happened and we’ll tell you the next step. Free, confidential case review for California injury and lemon law claims. Call or text 24/7.",
};

function CallIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z"
        fill="currentColor"
      />
    </svg>
  );
}
function TextIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path
        d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path
        d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const METHODS = [
  {
    icon: CallIcon,
    label: "Call",
    value: SITE.phoneDisplay,
    href: SITE.phoneHref,
    note: "Someone is available around the clock.",
  },
  {
    icon: TextIcon,
    label: "Text",
    value: SITE.phoneDisplay,
    href: SITE.smsHref,
    note: "Prefer texting? Message us anytime.",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "We’ll reply as soon as possible.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark bg-ink">
        <div className="container-site py-16 md:py-20">
          <span className="eyebrow text-bone">Free Case Review</span>
          <h1 className="h-hero mt-4 max-w-3xl text-white">
            Tell us what happened. We’ll tell you the next step.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone">
            Whether you were injured in an accident or you’re stuck with a
            defective vehicle, the first step is the same: a free, confidential
            conversation. No cost, no obligation.
          </p>
        </div>
      </section>

      {/* Form + methods */}
      <section className="bg-paper">
        <div className="container-site grid gap-12 py-16 md:grid-cols-[1.1fr_1fr] md:py-20">
          {/* Form */}
          <div>
            <h2 className="h-section text-ink">Request your free review</h2>
            <p className="mt-3 max-w-md text-ink/75">
              Share a few details and we’ll reach out. The more we know, the
              faster we can point you in the right direction.
            </p>
            <div className="mt-8">
              <LeadForm practice="general" tone="light" />
            </div>
          </div>

          {/* Methods */}
          <div className="md:pl-4">
            <h2 className="h-card text-ink">Other ways to reach us</h2>
            <ul className="mt-6 space-y-4">
              {METHODS.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    className="group flex items-start gap-4 rounded-[var(--radius-lg)] border border-bone bg-white p-5 transition-colors duration-[var(--motion-fast)] hover:border-ink"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-pill)] bg-ink text-white">
                      <m.icon />
                    </span>
                    <span>
                      <span className="eyebrow block text-ink/55">{m.label}</span>
                      <span className="figure mt-1 block text-lg font-semibold text-ink">
                        {m.value}
                      </span>
                      <span className="mt-1 block text-sm text-ink/65">
                        {m.note}
                      </span>
                    </span>
                  </a>
                </li>
              ))}

              {/* Office placeholder */}
              <li className="flex items-start gap-4 rounded-[var(--radius-lg)] border border-bone bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-pill)] bg-ink text-white">
                  <PinIcon />
                </span>
                <span>
                  <span className="eyebrow block text-ink/55">Office</span>
                  <span className="mt-1 block font-semibold text-ink">
                    {PLACEHOLDER.firmAddress}
                  </span>
                  <span className="mt-1 block text-sm text-ink/65">
                    {SITE.addressLine}. By appointment.
                  </span>
                </span>
              </li>
            </ul>

            {/* Consent / SMS language */}
            <div className="mt-6 rounded-[var(--radius-md)] border border-bone bg-white p-5 text-xs leading-relaxed text-ink/65">
              <p>
                {PLACEHOLDER.tcpa} By submitting, you agree to be contacted by
                phone, text, or email about your inquiry. Message and data rates
                may apply. Reply STOP to opt out. This does not create an
                attorney–client relationship, and you should not submit
                confidential or time-sensitive information through this website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
