import Link from "next/link";

interface Door {
  href: string;
  eyebrow: string;
  headline: string;
  sub: string;
  cta: string;
}

const LEFT: Door = {
  href: "/injury",
  eyebrow: "Personal Injury",
  headline: "You were hurt.",
  sub: "We'll deal with the insurer for you.",
  cta: "Review my injury claim",
};

const RIGHT: Door = {
  href: "/lemon-law",
  eyebrow: "Lemon Law",
  headline: "The dealer can't fix it.",
  sub: "The car keeps going back and the warranty still applies. Send the repair orders. A buyback, a replacement, or cash may be available. It depends on the file.",
  cta: "Check my lemon law case",
};

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-[var(--motion-base)] ease-[var(--ease-out)] group-hover:translate-x-1 motion-reduce:transition-none"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function DoorPanel({ door, align }: { door: Door; align: "left" | "right" }) {
  return (
    <Link
      href={door.href}
      className={`group on-dark relative flex flex-1 flex-col justify-center px-6 py-14 transition-colors duration-[var(--motion-base)] ease-[var(--ease-out)] hover:bg-charcoal focus-visible:bg-charcoal md:py-28 ${
        align === "right"
          ? "md:pl-[max(1.5rem,calc((100vw-1200px)/2+2rem))] md:pr-8"
          : "md:pr-[max(1.5rem,calc((100vw-1200px)/2+2rem))] md:pl-8"
      }`}
    >
      <div
        className={`mx-auto w-full max-w-md ${
          align === "right" ? "md:ml-0" : "md:mr-0 md:ml-auto"
        }`}
      >
        <span className="eyebrow text-bone">{door.eyebrow}</span>
        <h2 className="h-hero mt-4 text-white">{door.headline}</h2>
        <p className="mt-5 text-lg leading-relaxed text-bone">{door.sub}</p>
        <span className="mt-8 inline-flex items-center gap-2 font-semibold text-white">
          <span className="border-b-2 border-gold pb-0.5">{door.cta}</span>
          <span className="text-gold">
            <Arrow />
          </span>
        </span>
      </div>
    </Link>
  );
}

/**
 * The signature two-door fork. Left routes to injury, right to lemon
 * law, divided by a single gold hairline that animates in on load
 * (stacked horizontally on mobile, vertical on desktop). Both halves
 * are real links — fully keyboard + pointer operable — and the whole
 * thing sits on an ink ground so gold accents pass contrast.
 */
export function DualPathHero() {
  return (
    <section
      aria-label="Choose your path"
      className="relative bg-ink"
    >
      <div className="container-site">
        <p className="pt-10 text-center text-base text-bone md:pt-14">
          Two practice areas: lemon law and personal injury.
        </p>
      </div>

      <div className="relative mt-6 flex flex-col md:mt-10 md:flex-row">
        <DoorPanel door={LEFT} align="right" />

        {/* Gold hairline divider — horizontal on mobile, vertical on desktop */}
        <div
          aria-hidden="true"
          className="hairline mx-6 h-px bg-gold md:mx-0 md:h-auto md:w-px"
        />

        <DoorPanel door={RIGHT} align="left" />
      </div>
    </section>
  );
}
