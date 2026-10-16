/** Rober A. Terziyan headshot. Black and white is the photograph, not a filter. */

export const ATTORNEY_ALT = "Rober A. Terziyan, attorney at CaliLawyer.com";

/** Full-frame 4:5 portrait used on the page and in Person JSON-LD. */
export const ATTORNEY_PHOTO = {
  src: "/assets/attorney/robby-terziyan-800.png",
  width: 800,
  height: 1000,
} as const;

/** 1.91:1 crop for the attorney page social card. Face kept, shoulders trimmed. */
export const ATTORNEY_OG = {
  src: "/assets/attorney/robby-terziyan-og.png",
  width: 1200,
  height: 630,
} as const;

export const ATTORNEY_WIDTHS = [400, 640, 800] as const;

/** Two-column figure on home and about. */
export const ATTORNEY_FIGURE_SIZES =
  "(min-width: 1024px) 544px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 3rem)";

/** Narrow figure under the attorney-page hero. */
export const ATTORNEY_PROFILE_SIZES =
  "(min-width: 640px) 384px, calc(100vw - 3rem)";

export function attorneySrcSet(ext: "avif" | "webp" | "png") {
  return ATTORNEY_WIDTHS.map(
    (width) => `/assets/attorney/robby-terziyan-${width}.${ext} ${width}w`,
  ).join(", ");
}
