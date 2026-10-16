/**
 * Three skewed gold bars. Decorative brand mark from the second-version
 * site, drawn with design tokens instead of a raw brand hex.
 */
export function SlashMotif({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-end gap-1 ${className}`}
      aria-hidden="true"
    >
      <span className="block h-8 w-2 -skew-x-12 bg-gold" />
      <span className="block h-8 w-2 -skew-x-12 bg-gold/45" />
      <span className="block h-8 w-2 -skew-x-12 bg-gold/15" />
    </span>
  );
}
