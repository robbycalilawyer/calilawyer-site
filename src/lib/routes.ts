import { GEO_PAGES } from "@/lib/content/geo";

/** Canonical public routes. Alias URLs from the Vite export are not listed. */
export const SITEMAP_ROUTES: {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/injury", priority: 0.9, changeFrequency: "monthly" },
  { path: "/injury/car-accidents", priority: 0.8, changeFrequency: "monthly" },
  { path: "/injury/truck-accidents", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/injury/motorcycle-accidents",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/injury/rideshare-accidents",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/injury/pedestrian-accidents",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/injury/dog-bites", priority: 0.8, changeFrequency: "monthly" },
  { path: "/injury/premises-liability", priority: 0.8, changeFrequency: "monthly" },
  { path: "/lemon-law", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/lemon-law/what-qualifies",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.5, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ...GEO_PAGES.map((page) => ({
    path: page.path,
    priority: page.kind === "article" ? 0.8 : 0.7,
    changeFrequency: "monthly" as const,
  })),
];
