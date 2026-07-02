import Link from "next/link";

interface LocationGridProps {
  /** Heading, e.g. "Serving injury clients across California". */
  heading: string;
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
      <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {cities.map((city) => (
          <li key={city}>
            <Link
              href={`${hrefBase}#lead-form`}
              className={`flex min-h-11 items-center rounded-[var(--radius-md)] border px-4 text-[0.95rem] font-semibold transition-colors duration-[var(--motion-fast)] ${
                isDark
                  ? "on-dark border-charcoal text-bone hover:border-gold hover:text-white"
                  : "border-bone bg-white text-ink hover:border-ink"
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
