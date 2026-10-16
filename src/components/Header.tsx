"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { INJURY_LINKS, NAV, SITE } from "@/lib/site";
import { LinkButton } from "./Button";
import { Logo } from "./Logo";
import { openCaseModal } from "./CaseReviewModal";

export function Header() {
  const [open, setOpen] = useState(false);
  const [injuryOpen, setInjuryOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open && !injuryOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setInjuryOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, injuryOpen]);

  function review() {
    setOpen(false);
    setInjuryOpen(false);
    openCaseModal();
  }

  return (
    <header className="on-dark sticky top-0 z-40 border-b border-gold/40 bg-ink/95 backdrop-blur">
      <div className="container-site flex min-h-20 items-center justify-between gap-4 py-2">
        <Logo priority className="h-11 w-auto md:h-14" />

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          <Link
            href="/lemon-law"
            className="text-sm font-semibold text-white hover:text-gold"
          >
            Lemon Law
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setInjuryOpen(true)}
            onMouseLeave={() => setInjuryOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-gold"
              aria-expanded={injuryOpen}
              aria-controls="injury-menu"
              onClick={() => setInjuryOpen((value) => !value)}
            >
              Personal Injury
              <Chevron open={injuryOpen} />
            </button>
            {injuryOpen ? (
              <div
                id="injury-menu"
                className="absolute left-0 top-full z-50 w-72 pt-3"
              >
                <ul className="rounded-[var(--radius-md)] border border-charcoal bg-charcoal py-2 shadow-2xl">
                  <li>
                    <Link
                      href="/injury"
                      className="block px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
                      onClick={() => setInjuryOpen(false)}
                    >
                      Overview
                    </Link>
                  </li>
                  {INJURY_LINKS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-bone hover:bg-white/5 hover:text-white"
                        onClick={() => setInjuryOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          {NAV.filter((item) => item.href !== "/lemon-law" && item.href !== "/injury").map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white hover:text-gold"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="text-right"
            aria-label={`Call or text ${SITE.name} at ${SITE.phoneDisplay}`}
          >
            <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-bone">
              Call / text 24/7
            </span>
            <span className="figure text-sm font-semibold text-white">
              {SITE.phoneDisplay}
            </span>
          </a>
          <button
            type="button"
            onClick={review}
            className="inline-flex min-h-11 items-center rounded-[var(--radius-pill)] bg-white px-5 text-sm font-semibold text-ink hover:bg-gold"
          >
            Free consultation
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={SITE.phoneHref}
            className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-pill)] bg-gold text-ink"
            aria-label={`Call ${SITE.name} at ${SITE.phoneDisplay}`}
          >
            <PhoneIcon />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="max-h-[80vh] overflow-y-auto border-t border-charcoal bg-ink lg:hidden">
          <nav className="container-site flex flex-col py-2" aria-label="Mobile">
            <Link href="/lemon-law" onClick={() => setOpen(false)} className="py-3 font-semibold text-white">
              Lemon Law
            </Link>
            <Link href="/injury" onClick={() => setOpen(false)} className="py-3 font-semibold text-white">
              Personal Injury
            </Link>
            <div className="border-l border-charcoal pl-4">
              {INJURY_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-bone"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {NAV.filter((item) => item.href !== "/lemon-law" && item.href !== "/injury").map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 font-semibold text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="flex flex-col gap-3 py-4">
              <LinkButton href={SITE.phoneHref} variant="secondary" size="lg" onDark>
                Call {SITE.phoneDisplay}
              </LinkButton>
              <button
                type="button"
                onClick={review}
                className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-pill)] bg-gold px-5 font-semibold text-ink"
              >
                Free consultation
              </button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-[var(--motion-fast)] ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-6">
      <span className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
      <span className={`absolute left-0 top-[7px] h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
      <span className={`absolute left-0 top-[14px] h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
    </span>
  );
}
