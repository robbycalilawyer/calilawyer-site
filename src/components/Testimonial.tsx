interface TestimonialProps {
  quote: string;
  name: string;
  /** e.g. "Car accident client, Los Angeles". */
  context: string;
  /** 1–5; renders star row. Aggregate/verified counts stay bracketed. */
  rating?: number;
  tone?: "light" | "dark";
}

function Stars({ rating, tone }: { rating: number; tone: "light" | "dark" }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          width="18"
          height="18"
          fill={i < rating ? "var(--color-gold)" : "none"}
          stroke={
            i < rating
              ? "var(--color-gold)"
              : tone === "dark"
                ? "var(--color-bone)"
                : "var(--color-charcoal)"
          }
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * Named testimonial with optional star rating. Quote in display face
 * for editorial weight; attribution in sans.
 */
export function Testimonial({
  quote,
  name,
  context,
  rating = 5,
  tone = "light",
}: TestimonialProps) {
  const isDark = tone === "dark";
  return (
    <figure
      className={`flex h-full flex-col rounded-[var(--radius-lg)] border p-6 md:p-8 ${
        isDark
          ? "on-dark border-charcoal bg-charcoal"
          : "border-bone bg-white"
      }`}
    >
      <Stars rating={rating} tone={tone} />
      <blockquote
        className={`mt-4 font-display text-lg leading-snug ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        “{quote}”
      </blockquote>
      <figcaption
        className={`mt-6 text-sm ${isDark ? "text-bone" : "text-ink/70"}`}
      >
        <span
          className={`font-semibold ${isDark ? "text-white" : "text-ink"}`}
        >
          {name}
        </span>
        <span className="mx-1.5" aria-hidden="true">
          ·
        </span>
        {context}
      </figcaption>
    </figure>
  );
}
