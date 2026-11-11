import Link from "next/link";
import { ATTORNEY, FEE_TERMS, FIRM_LINKS, INJURY_LINKS, LANGUAGES, OFFICE, SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="on-dark bg-ink text-bone">
      <div className="container-site py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-bone">
              We’re a Glendale firm for California lemon law and injury cases.
              You talk to the office, not a call center.
            </p>
            <p className="mt-6 text-base font-semibold text-white">
              Free consultations.
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
                <Link href="/lemon-law" className="text-base text-bone hover:text-white">
                  Lemon law
                </Link>
              </li>
              <li>
                <Link href="/injury" className="text-base text-bone hover:text-white">
                  Personal injury
                </Link>
              </li>
              {INJURY_LINKS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-base text-bone hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/injury" className="text-base text-bone hover:text-gold">
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
                  <Link href={item.href} className="text-base text-bone hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-bone">Glendale</h2>
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-bone">
              Office: {OFFICE.display}. We also take cases across California,
              including Burbank, Pasadena, Los Angeles, Orange County, San Diego,
              the Inland Empire, Sacramento, and the Bay Area.
            </p>
          </div>
        </div>

        <div className="mt-14 max-w-[65ch] space-y-4 border-t border-charcoal pt-8 text-sm leading-relaxed text-bone">
          <p className="font-semibold text-white">
            Advertisement / Attorney Advertising
          </p>
          <p>
            This website is for information only and doesn’t create
            an attorney-client relationship. Submitting a form doesn’t create
            an attorney-client relationship. Don’t submit confidential or
            time-sensitive information through this website.
          </p>
          <p>
            {FEE_TERMS} Free consultation.
          </p>
          <p>
            Responsible attorney: {ATTORNEY.name}, State Bar of California No.{" "}
            {ATTORNEY.barNumber}. Office: {OFFICE.display}. Languages:{" "}
            {LANGUAGES.join(", ")}.
          </p>
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
