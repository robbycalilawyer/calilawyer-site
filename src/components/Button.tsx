import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  /** Render on a dark ground so the focus ring switches to gold. */
  onDark?: boolean;
  loading?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Shared visual system for every actionable element. Covers the full
 * state matrix: default, hover, focus-visible, active, disabled,
 * loading, error (error is expressed by the consuming form, not here).
 *
 * Touch targets are >=44px tall by construction (min-h-11 = 44px).
 */
function classes({
  variant = "primary",
  size = "md",
  onDark = false,
  loading = false,
}: Required<Pick<BaseProps, "variant" | "size" | "onDark" | "loading">>) {
  const base = [
    "inline-flex items-center justify-center gap-2 text-center",
    "font-sans font-semibold rounded-[var(--radius-pill)]",
    "min-h-11 select-none whitespace-nowrap",
    "transition-[background-color,color,transform,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)]",
    "active:scale-[0.98]",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100",
    "aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:active:scale-100",
    loading ? "cursor-wait" : "",
    onDark ? "on-dark" : "",
  ];

  const sizes: Record<Size, string> = {
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-base",
  };

  const variants: Record<Variant, string> = {
    // Gold fill, ink text — the single accent, used for the primary action.
    primary: [
      "bg-gold text-ink",
      "hover:brightness-95",
    ].join(" "),
    // Outlined. Ink outline on light; bone outline on dark.
    secondary: onDark
      ? [
          "bg-transparent text-white border-2 border-bone/70",
          "hover:bg-white/10 hover:border-white",
        ].join(" ")
      : [
          "bg-transparent text-ink border-2 border-ink",
          "hover:bg-ink hover:text-white",
        ].join(" "),
    // Minimal. Text + underline affordance.
    ghost: onDark
      ? "bg-transparent text-white hover:bg-white/10"
      : "bg-transparent text-ink hover:bg-ink/[0.06]",
  };

  return [...base, sizes[size], variants[variant]].filter(Boolean).join(" ");
}

function Spinner({ onDark }: { onDark: boolean }) {
  return (
    <svg
      className="h-4 w-4 animate-spin motion-reduce:animate-none"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={onDark ? "currentColor" : "currentColor"}
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---- Link-style button (for navigation / CTAs that route) ---- */
type LinkButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & { href: string };

export function LinkButton({
  variant = "primary",
  size = "md",
  onDark = false,
  loading = false,
  children,
  className = "",
  href,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${classes({ variant, size, onDark, loading })} ${className}`}
      {...rest}
    >
      {loading && <Spinner onDark={onDark} />}
      {children}
    </Link>
  );
}

/* ---- Native button (for form submits / JS actions) ---- */
type ButtonProps = BaseProps & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  size = "md",
  onDark = false,
  loading = false,
  children,
  className = "",
  disabled,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={`${classes({ variant, size, onDark, loading })} ${className}`}
      {...rest}
    >
      {loading && <Spinner onDark={onDark} />}
      {children}
    </button>
  );
}
