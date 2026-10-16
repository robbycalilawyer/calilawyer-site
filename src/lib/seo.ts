import type { Metadata } from "next";

const OG_ALT = "CaliLawyer.com, California lemon law and personal injury";
const FIRM_OG = {
  url: "/assets/og-image.png",
  width: 1200,
  height: 630,
  alt: OG_ALT,
} as const;

/** Per-route title, description, canonical, and social cards. */
export function pageMeta({
  title,
  description,
  path,
  canonical,
  image,
}: {
  title: string;
  description: string;
  path: string;
  /** Defaults to `path`. Set when this URL is an alias of another route. */
  canonical?: string;
  /** Overrides the firm card. Used for the attorney page. */
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const canon = canonical ?? path;
  const card = image ?? FIRM_OG;
  return {
    title,
    description,
    alternates: { canonical: canon },
    openGraph: {
      title,
      description,
      url: canon,
      images: [card],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [card.url],
    },
  };
}
