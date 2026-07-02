import Link from "next/link";
import { NAV, PLACEHOLDER, SITE } from "@/lib/site";

const PRACTICE_LINKS = [
  { label: "Personal Injury", href: "/injury" },
  { label: "Car Accidents", href: "/injury/car-accident" },
  { label: "Lemon Law", href: "/lemon-law" },
  { label: "What Qualifies", href: "/lemon-law/what-qualifies" },
];

export function Footer() {
  return (
    <footer className="on-dark bg-ink text-bone">
      <div className="container-site py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Link
              href="/"
              className="font-display text-2xl tracking-tight text-white"
            >
              Cali<span className="text-bone">Lawyer</span>
            </Link>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-bone">
              A California firm fighting for injury victims and drivers stuck
              with defective vehicles. One call routes you to the right team.
            </p>
            <a
              href={SITE.phoneHref}
              className="figure mt-6 inline-block text-2xl font-semibold text-gold"
            >
              {SITE.phoneDisplay}
            </a>
            <p className="mt-1 text-sm text-bone">{SITE.addressLine}</p>
          </div>

          {/* Practice areas */}
          <nav aria-label="Footer practice areas">
            <h2 className="eyebrow text-bone">Practice Areas</h2>
            <ul className="mt-4 space-y-3">
              {PRACTICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.95rem] text-bone transition-colors duration-[var(--motion-fast)] hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Firm */}
          <nav aria-label="Footer firm links">
            <h2 className="eyebrow text-bone">The Firm</h2>
            <ul className="mt-4 space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.95rem] text-bone transition-colors duration-[var(--motion-fast)] hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.phoneHref}
                  className="text-[0.95rem] text-bone transition-colors duration-[var(--motion-fast)] hover:text-white"
                >
                  Free case review
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Legal / disclaimers */}
        <div className="mt-14 border-t border-charcoal pt-8">
          <div className="space-y-3 text-xs leading-relaxed text-bone/80">
            <p>
              <span className="font-semibold text-bone">
                Attorney Advertising.
              </span>{" "}
              {PLACEHOLDER.disclaimer} This website is for general information
              only and does not create an attorney–client relationship. Prior
              results do not guarantee a similar outcome. {PLACEHOLDER.noFee}
            </p>
            <p>
              <span className="font-semibold text-bone">Consent.</span>{" "}
              {PLACEHOLDER.tcpa} By submitting a form on this site you agree to
              be contacted about your inquiry by phone, text, or email.
            </p>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-2">
              <span>
                © {SITE.legalName}. All rights reserved.
              </span>
              <span aria-hidden="true">·</span>
              <span>{SITE.addressLine}.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
