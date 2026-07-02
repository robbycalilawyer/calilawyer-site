"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  /** Big figure. Use a bracketed placeholder for any factual claim. */
  value: string;
  /** Supporting label under the figure. */
  label: string;
  /**
   * Optional numeric target. When provided (and motion is allowed),
   * the figure animates up to it on scroll-in. Placeholders like
   * "[SETTLEMENTS RECOVERED]" omit this and simply reveal.
   */
  to?: number;
  prefix?: string;
  suffix?: string;
  tone?: "light" | "dark";
  /** md = large hero/section figure; sm = compact for tight rails. */
  size?: "sm" | "md";
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export function StatCounter({
  value,
  label,
  to,
  prefix = "",
  suffix = "",
  tone = "light",
  size = "md",
}: StatCounterProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [display, setDisplay] = useState(to != null ? `${prefix}0${suffix}` : value);

  useEffect(() => {
    if (to == null || !inView) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setDisplay(`${prefix}${to.toLocaleString()}${suffix}`);
      return;
    }

    const duration = 1200;
    let raf = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${prefix}${Math.round(eased * to).toLocaleString()}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, prefix, suffix]);

  const figureColor = tone === "dark" ? "text-gold" : "text-ink";
  const labelColor = tone === "dark" ? "text-bone" : "text-ink/65";
  const figureSize =
    size === "sm"
      ? "text-2xl sm:text-3xl"
      : "text-4xl sm:text-5xl";

  return (
    // Always visible: the fade is a pure-CSS enhancement that ends at
    // opacity 1, so stats show even if JS never runs. The observer
    // (ref/inView) only drives the optional number count-up.
    <div ref={ref} className="count-in">
      <div
        className={`figure font-medium break-words ${figureSize} ${figureColor}`}
      >
        {display}
      </div>
      <div className={`mt-2 text-sm font-semibold ${labelColor}`}>{label}</div>
    </div>
  );
}
