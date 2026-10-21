import Link from "next/link";
import type { PracticeAreaContent } from "@/lib/content/types";

/** Child-page cards and the injury insurance-playbook block. */
export function PracticeAreaExtras({
  content,
}: {
  content: PracticeAreaContent;
}) {
  return (
    <>
      {content.related ? (
        <section className="bg-white">
          <div
            className={`container-site py-20 md:py-28 ${
              content.related.items.length < 3
                ? "md:grid md:grid-cols-2 md:items-end md:gap-10"
                : ""
            }`}
          >
            <div>
              <h2 className="h-section max-w-3xl text-ink">{content.related.title}</h2>
              {content.related.intro ? (
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
                  {content.related.intro}
                </p>
              ) : null}
            </div>
            <ul
              className={`grid gap-4 ${
                content.related.items.length < 3
                  ? "mt-10 md:mt-0"
                  : "mt-10 sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {content.related.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-[var(--radius-lg)] bg-paper p-6 transition-[border-color,transform] duration-[var(--motion-base)] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
                  >
                    <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-ink/75">
                      {item.description}
                    </p>
                    <span className="mt-5 text-sm font-semibold text-ink">
                      <span className="border-b-2 border-gold pb-0.5">
                        View this case type
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {content.tactics ? (
        <section className="bg-paper">
          <div className="container-site py-20 md:py-28">
            <h2 className="h-section max-w-3xl text-ink">{content.tactics.title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
              {content.tactics.intro}
            </p>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {content.tactics.items.map((item) => (
                <li
                  key={item.tactic}
                  className="rounded-[var(--radius-lg)] bg-white p-6"
                >
                  <h3 className="font-display text-2xl text-ink">{item.tactic}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
                    {item.reality}
                  </p>
                  <p className="mt-4 border-l-4 border-gold pl-3 text-sm font-semibold leading-relaxed text-ink">
                    Our counter: {item.counter}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
