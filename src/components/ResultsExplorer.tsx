"use client";

import { useState } from "react";
import {
  RESULT_CATEGORIES,
  RESULTS,
  type ResultCategory,
} from "@/lib/content/results";

export function ResultsExplorer() {
  const [filter, setFilter] = useState<ResultCategory>("All");
  const visible =
    filter === "All" ? RESULTS : RESULTS.filter((item) => item.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter results">
        {RESULT_CATEGORIES.map((category) => {
          const selected = filter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(category)}
              className={`min-h-11 rounded-[var(--radius-pill)] border px-4 text-xs font-bold uppercase tracking-[0.12em] ${
                selected
                  ? "border-ink bg-ink text-white"
                  : "border-bone bg-white text-ink hover:border-ink"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((result) => (
          <li
            key={`${result.category}-${result.type}`}
            className="flex flex-col rounded-[var(--radius-lg)] border border-bone bg-white p-6"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/60">
              {result.category}
            </p>
            <p className="figure mt-4 text-3xl text-ink">{result.amount}</p>
            <h2 className="mt-2 text-lg font-semibold text-ink">{result.type}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{result.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
