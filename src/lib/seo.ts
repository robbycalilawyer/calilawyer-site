import type { Metadata } from "next";

const OG_ALT = "CaliLawyer.com, California lemon law and personal injury";

/** Per-route title, description, canonical, and social cards. */
export function pageMeta({
  title,
  description,
  path,
  canonical,
}: {
  title: string;
  description: string;
  path: string;
  /** Defaults to `path`. Set when this URL is an alias of another route. */
  canonical?: string;
}): Metadata {
  const canon = canonical ?? path;
  return {
    title,
    description,
    alternates: { canonical: canon },
    openGraph: {
      title,
      description,
      url: canon,
      images: [
        {
          url: "/assets/og-image.png",
          width: 1200,
          height: 630,
          alt: OG_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/og-image.png"],
    },
  };
}
