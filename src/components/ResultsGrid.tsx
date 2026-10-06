"use client";

import { useMemo, useState } from "react";
import { ResultCard } from "./ResultCard";

export interface ResultItem {
  amount: string;
  caseType: string;
  detail: string;
  category: string;
}

interface ResultsGridProps {
  results: ResultItem[];
}

/**
 * Filterable results grid. Categories derive from the data. Amounts
 * are bracketed placeholders — verified figures are supplied by the
 * firm before launch; we never invent settlement numbers.
 */
export function ResultsGrid({ results }: ResultsGridProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(results.map((r) => r.category)))],
    [results],
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? results : results.filter((r) => r.category === active);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter results by case type"
      >
        {categories.map((cat) => {
          const selected = cat === active;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(cat)}
              className={`min-h-11 rounded-[var(--radius-pill)] border px-5 text-sm font-semibold transition-colors duration-[var(--motion-fast)] ${
                selected
                  ? "border-ink bg-ink text-white"
                  : "border-bone bg-white text-ink hover:border-ink"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((r) => (
          <ResultCard
            key={`${r.category}-${r.detail}`}
            amount={r.amount}
            caseType={r.caseType}
            detail={r.detail}
          />
        ))}
      </div>
    </div>
  );
}
