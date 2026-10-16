/** Canonical public routes. Alias URLs from the Vite export are not listed. */
export const SITEMAP_ROUTES: {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/injury", priority: 0.9, changeFrequency: "monthly" },
  { path: "/injury/car-accident", priority: 0.8, changeFrequency: "monthly" },
  { path: "/injury/truck-accident", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/injury/motorcycle-accident",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/injury/rideshare-accident",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/injury/pedestrian-accident",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/injury/dog-bites", priority: 0.8, changeFrequency: "monthly" },
  { path: "/injury/slip-and-fall", priority: 0.8, changeFrequency: "monthly" },
  { path: "/lemon-law", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/lemon-law/what-qualifies",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/results", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.5, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];
