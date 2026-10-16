"use client";

import { openCaseModal } from "./CaseReviewModal";

/**
 * Desktop case-review button. Hidden on small screens, where the
 * bottom bar already offers Call, Text, and Free Review.
 */
export function FloatingCTA() {
  return (
    <button
      type="button"
      onClick={openCaseModal}
      className="on-dark fixed bottom-8 right-8 z-40 hidden min-h-11 items-center gap-3 rounded-[var(--radius-pill)] bg-gold px-6 py-3 font-semibold text-ink shadow-[0_12px_32px_-12px_rgba(0,0,0,0.45)] transition-transform duration-[var(--motion-fast)] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 md:inline-flex"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
        <path
          d="M5 6h14v9H8l-3 3V6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      Start case review
    </button>
  );
}
