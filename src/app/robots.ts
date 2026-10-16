import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Search and answer-engine crawlers are allowed.
 * GPTBot and Google-Extended are the training crawlers. They stay
 * Allow, which is the spec default. Flip only those two to Disallow
 * if training use should stop; search visibility uses the other agents.
 */
const AGENTS = [
  "*",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: AGENTS.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
