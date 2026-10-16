import Link from "next/link";
import { FIRM_LINKS, INJURY_LINKS, PLACEHOLDER, SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="on-dark bg-ink text-bone">
      <div className="container-site py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-bone">
              California’s lemon law and injury firm. Relentless advocacy for
              people hurt by negligence and consumers stuck with defective
              vehicles.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Available to take a review
            </p>
            <a href={SITE.phoneHref} className="figure mt-1 inline-block text-2xl font-semibold text-gold">
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="mt-1 block text-sm text-bone hover:text-white">
              {SITE.email}
            </a>
          </div>

          <nav aria-label="Footer practice areas">
            <h2 className="eyebrow text-bone">Practice areas</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/lemon-law" className="text-[0.95rem] text-bone hover:text-white">
                  Lemon law
                </Link>
              </li>
              <li>
                <Link href="/injury" className="text-[0.95rem] text-bone hover:text-white">
                  Personal injury
                </Link>
              </li>
              {INJURY_LINKS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[0.95rem] text-bone hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/injury" className="text-[0.95rem] text-bone hover:text-gold">
                  All injury types →
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer firm links">
            <h2 className="eyebrow text-bone">The firm</h2>
            <ul className="mt-4 space-y-3">
              {FIRM_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[0.95rem] text-bone hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-bone">California</h2>
            <p className="mt-4 text-sm leading-relaxed text-bone">
              {SITE.addressLine}. Reviews are handled statewide, including Los
              Angeles, Orange County, San Diego, the Inland Empire, Sacramento,
              and the Bay Area.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-bone">
              Office: {PLACEHOLDER.office}
            </p>
          </div>
        </div>

        <div className="mt-14 space-y-4 border-t border-charcoal pt-8 text-xs leading-relaxed text-bone/80">
          <p className="font-semibold uppercase tracking-[0.14em] text-bone">
            Advertisement / Attorney Advertising
          </p>
          <p>
            {PLACEHOLDER.disclaimer} This website is for informational purposes
            only and does not create an attorney–client relationship. Submitting
            a form does not create an attorney–client relationship. Do not
            submit confidential or time-sensitive information through this
            website.
          </p>
          <p>{PLACEHOLDER.noFee}</p>
          <p>
            Past results do not guarantee future outcomes. Each case depends on
            its own facts and law. Result figures on this site are{" "}
            {PLACEHOLDER.result} until an attorney verifies them.
          </p>
          <p>
            Responsible attorney: {PLACEHOLDER.attorney}, California Bar No.{" "}
            {PLACEHOLDER.barNumber}. Office: {PLACEHOLDER.office}.
          </p>
          <p>{PLACEHOLDER.languages}</p>
          <p className="flex flex-wrap gap-x-3 gap-y-1 pt-2 text-bone">
            <span>© {new Date().getFullYear()} {SITE.legalName}.</span>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
