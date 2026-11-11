import Link from "next/link";

interface LocationGridProps {
  /** Heading, e.g. "Serving injury clients across California". */
  heading: string;
  /** One sentence under the heading. Kept out of the h2 so the title stays short. */
  lede?: string;
  cities: string[];
  /**
   * Where a city chip routes. These are programmatic location pages
   * in a real build; here they anchor to the lead form on the hub.
   */
  hrefBase: string;
  tone?: "light" | "dark";
}

/**
 * Programmatic city grid. Renders as a dense chip grid; each city is
 * a link to a (future) location page. Kept token-driven for both
 * grounds.
 */
export function LocationGrid({
  heading,
  lede,
  cities,
  hrefBase,
  tone = "light",
}: LocationGridProps) {
  const isDark = tone === "dark";
  return (
    <div>
      <h2
        className={`h-section ${isDark ? "text-white" : "text-ink"}`}
      >
        {heading}
      </h2>
      {lede ? (
        <p
          className={`mt-4 max-w-[42ch] text-lg leading-relaxed ${
            isDark ? "text-bone" : "text-ink"
          }`}
        >
          {lede}
        </p>
      ) : null}
      <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {cities.map((city) => (
          <li key={city}>
            <Link
              href={`${hrefBase}#lead-form`}
              className={`flex min-h-11 items-center rounded-[var(--radius-md)] border px-4 text-base font-semibold transition-colors duration-[var(--motion-fast)] ${
                isDark
                  ? "on-dark border-charcoal text-bone hover:border-gold hover:text-white"
                  : "border-bone bg-white text-ink"
              }`}
            >
              {city}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
