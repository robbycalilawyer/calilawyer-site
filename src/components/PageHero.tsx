import { SlashMotif } from "./SlashMotif";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  sub?: string;
}

/** Shared ink hero for informational pages. One h1, token colors only. */
export function PageHero({ eyebrow, title, sub }: PageHeroProps) {
  return (
    <section className="on-dark relative overflow-hidden bg-ink">
      <div
        className="slash-pattern pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
      />
      <div className="container-site relative py-20 md:py-28">
        <div className="flex items-center gap-4">
          <SlashMotif />
          {eyebrow ? <span className="eyebrow text-bone">{eyebrow}</span> : null}
        </div>
        <h1 className="h-hero mt-6 max-w-4xl text-white">{title}</h1>
        {sub ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone">{sub}</p>
        ) : null}
      </div>
    </section>
  );
}
