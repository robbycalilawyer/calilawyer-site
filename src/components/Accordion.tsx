"use client";

import { useId, useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: FaqItem[];
  tone?: "light" | "dark";
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-[var(--motion-base)] ease-[var(--ease-out)] ${
        open ? "rotate-180" : ""
      } motion-reduce:transition-none`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/**
 * Single-expand FAQ accordion. Fully keyboard operable via native
 * <button>; panels use a grid-rows animation that collapses to a
 * no-op under prefers-reduced-motion (handled in globals.css).
 */
export function Accordion({ items, tone = "light" }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  const isDark = tone === "dark";

  return (
    <div
      className={`divide-y rounded-[var(--radius-lg)] border ${
        isDark
          ? "on-dark divide-charcoal border-charcoal"
          : "divide-bone border-bone bg-white"
      }`}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={i}>
            <h3 className="m-0">
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold md:px-6 ${
                  isDark ? "text-white" : "text-ink"
                }`}
              >
                <span className="text-[1.05rem]">{item.q}</span>
                <span className={isDark ? "text-gold" : "text-ink/60"}>
                  <Chevron open={isOpen} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="accordion-panel"
              data-open={isOpen}
            >
              <div>
                <p
                  className={`px-5 pb-6 text-[0.975rem] leading-relaxed md:px-6 ${
                    isDark ? "text-bone" : "text-ink/75"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
