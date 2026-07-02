import Link from "next/link";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  /** When set, the whole card becomes a link with hover/focus affordance. */
  href?: string;
  /** Ground the card sits on, to keep contrast correct. */
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Generic surface. Light tone = paper/white ground with ink text;
 * dark tone = charcoal ground with white/bone text. Interactive
 * variant (href) lifts on hover and shows a focus ring.
 */
export function Card({
  children,
  href,
  tone = "light",
  className = "",
}: CardProps) {
  const toneClasses =
    tone === "dark"
      ? "on-dark bg-charcoal text-bone border-charcoal"
      : "bg-white text-ink border-bone";

  const base = `block rounded-[var(--radius-lg)] border p-6 md:p-8 ${toneClasses}`;

  if (href) {
    return (
      <Link
        href={href}
        className={`group ${base} transition-[transform,box-shadow,border-color] duration-[var(--motion-base)] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.25)] motion-reduce:hover:translate-y-0 ${
          tone === "dark" ? "hover:border-gold" : "hover:border-ink"
        } ${className}`}
      >
        {children}
      </Link>
    );
  }

  return <div className={`${base} ${className}`}>{children}</div>;
}
