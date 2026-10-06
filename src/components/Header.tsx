"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { LinkButton } from "./Button";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      width="18"
      height="18"
    >
      <path
        d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-bone bg-paper/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ink"
          aria-label={`${SITE.name} home`}
        >
          Cali<span className="text-ink/60">Lawyer</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-semibold text-ink/80 transition-colors duration-[var(--motion-fast)] hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Always-on click-to-call (desktop) */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="group inline-flex items-center gap-2 text-ink"
            aria-label={`Call ${SITE.name} at ${SITE.phoneDisplay}`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-pill)] bg-ink text-white transition-transform duration-[var(--motion-fast)] group-hover:scale-105">
              <PhoneIcon />
            </span>
            <span className="figure hidden text-[0.95rem] font-semibold xl:inline">
              {SITE.phoneDisplay}
            </span>
          </a>
          <LinkButton href="/contact" size="md">
            Free case review
          </LinkButton>
        </div>

        {/* Mobile: call + menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={SITE.phoneHref}
            className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-pill)] bg-ink text-white"
            aria-label={`Call ${SITE.name} at ${SITE.phoneDisplay}`}
          >
            <PhoneIcon />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-ink transition-transform duration-[var(--motion-fast)] ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-6 bg-ink transition-opacity duration-[var(--motion-fast)] ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-6 bg-ink transition-transform duration-[var(--motion-fast)] ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-bone bg-paper lg:hidden"
        >
          <nav
            className="container-site flex flex-col gap-1 py-4"
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[var(--radius-sm)] px-2 py-3 text-lg font-semibold text-ink hover:bg-ink/[0.06]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <LinkButton
                href="/contact"
                size="lg"
                onClick={() => setOpen(false)}
              >
                Free case review
              </LinkButton>
              <a
                href={SITE.phoneHref}
                className="figure text-center text-lg font-semibold text-ink"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
