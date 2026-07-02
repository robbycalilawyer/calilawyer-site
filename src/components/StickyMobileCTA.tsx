import { SITE } from "@/lib/site";

/**
 * Persistent bottom bar on mobile only: one call action, one
 * qualify action. Hidden at md+ where the header CTA is always
 * visible. Sits above content with a safe-area inset for notched
 * phones.
 */
export function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal bg-ink px-3 pt-2 md:hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 8px)" }}
    >
      <div className="on-dark flex items-center gap-2">
        <a
          href={SITE.phoneHref}
          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-[var(--radius-pill)] border-2 border-bone/60 font-semibold text-white"
          aria-label={`Call ${SITE.name} at ${SITE.phoneDisplay}`}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <path
              d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z"
              fill="currentColor"
            />
          </svg>
          Call now
        </a>
        <a
          href="/injury#lead-form"
          className="flex min-h-11 flex-1 items-center justify-center rounded-[var(--radius-pill)] bg-gold font-semibold text-ink"
        >
          Free case review
        </a>
      </div>
    </div>
  );
}
