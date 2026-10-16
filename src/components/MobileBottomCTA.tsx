"use client";

import { SITE } from "@/lib/site";
import { openCaseModal } from "./CaseReviewModal";

/**
 * Mobile-only bar: call, text, and a review that opens the modal.
 * Touch targets stay at least 44px. Hidden from the md breakpoint up.
 */
export function MobileBottomCTA() {
  return (
    <div
      className="on-dark fixed inset-x-0 bottom-0 z-40 border-t border-charcoal bg-ink md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-[1fr_1fr_1.4fr]">
        <a
          href={SITE.phoneHref}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-r border-charcoal text-bone"
        >
          <PhoneIcon />
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">
            Call
          </span>
        </a>
        <a
          href={SITE.smsHref}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-r border-charcoal text-bone"
        >
          <TextIcon />
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">
            Text
          </span>
        </a>
        <button
          type="button"
          onClick={openCaseModal}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 bg-gold font-semibold text-ink"
        >
          <ReviewIcon />
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">
            Free consultation
          </span>
        </button>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z" />
    </svg>
  );
}

function TextIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M5 6h14v9H8l-3 3V6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M12 3l2.2 4.6L19 8.2l-3.5 3.4.8 4.9L12 14.8 7.7 16.5l.8-4.9L5 8.2l4.8-.6L12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
