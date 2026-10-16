/**
 * Checks the static export the way the post-deploy curl loop would,
 * without calling the live host. Run after `npm run build`.
 */
import { readFileSync, existsSync, statSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve("out");
const failures = [];

function fail(message) {
  failures.push(message);
}

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");
}

function fileFor(urlPath) {
  if (urlPath === "/") return resolve(root, "index.html");
  const clean = urlPath.replace(/\/$/, "");
  const nested = resolve(root, `${clean.slice(1)}.html`);
  const index = resolve(root, clean.slice(1), "index.html");
  if (existsSync(nested)) return nested;
  if (existsSync(index)) return index;
  return nested;
}

const sitemapPath = resolve(root, "sitemap.xml");
const sitemap = readFileSync(sitemapPath, "utf8");
if (!sitemap.includes("<urlset") || sitemap.includes("<!DOCTYPE html")) {
  fail("sitemap.xml is not a urlset");
}
const PENDING_PREFIXES = [
  "/guides/",
  "/lemon-law/song-beverly-act-explained",
  "/lemon-law/deadlines",
  "/lemon-law/attorney-fees",
  "/lemon-law/used-cpo-leased",
  "/lemon-law/ev-tesla",
  "/injury/attorney-fees",
  "/glendale/",
  "/burbank/",
  "/pasadena/",
  "/los-angeles/",
  "/attorneys/",
  "/reviews",
];

function isPendingPage(path) {
  return PENDING_PREFIXES.some((prefix) => path === prefix || path.startsWith(prefix));
}

const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (locs.length < 20) fail(`sitemap has only ${locs.length} URLs`);

const trailing = new Set();
for (const loc of locs) {
  if (!loc.startsWith("https://calilawyer.com")) fail(`loc is not absolute https: ${loc}`);
  const path = loc.replace("https://calilawyer.com", "") || "/";
  trailing.add(path !== "/" && path.endsWith("/"));
  const file = fileFor(path);
  if (!existsSync(file)) {
    fail(`missing HTML for ${loc}`);
    continue;
  }
  const html = readFileSync(file, "utf8");
  const bytes = statSync(file).size;
  if (bytes < 5120) fail(`${path} is ${bytes} bytes`);
  const visible = strip(html);
  const h1s = visible.match(/<h1[\s>]/gi) ?? [];
  if (h1s.length !== 1) fail(`${path} has ${h1s.length} h1 elements`);
  if (!html.includes("application/ld+json")) fail(`${path} has no JSON-LD`);
  const canonical = html.match(/rel="canonical" href="([^"]+)"/);
  if (!canonical) fail(`${path} has no canonical`);
  else if (!canonical[1].startsWith("https://calilawyer.com")) {
    fail(`${path} canonical is not absolute https: ${canonical[1]}`);
  }
  if (/attorneys\/robby(?!-terziyan)/.test(html)) fail(`${path} still links /attorneys/robby`);
  if (html.includes("Central District of California")) fail(`${path} claims a Central District admission`);
  if (/\[[A-Z]/.test(visible.replace(/class="[^"]*"/g, ""))) {
    fail(`${path} still has a bracketed placeholder`);
  }
  if (
    /CALI-LAW|no fee|unless you win|certified pre-owned|91203-1160/i.test(html) ||
    /\bCPO\b/.test(html)
  ) {
    fail(`${path} still has a retired claim`);
  }
  if (isPendingPage(path)) {
    if (!visible.includes("Copy pending fact-check.")) {
      fail(`${path} is missing the fact-check note`);
    }
    if (/Rodriguez|issued with the sale|years of experience/i.test(visible)) {
      fail(`${path} still contains brief copy`);
    }
  }
  const faq = html.includes('"@type":"FAQPage"') || html.includes('"@type": "FAQPage"');
  if (faq) {
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    for (const block of blocks) {
      const data = JSON.parse(block[1]);
      const nodes = data["@graph"] ?? [data];
      for (const node of nodes) {
        if (node["@type"] !== "FAQPage") continue;
        for (const question of node.mainEntity ?? []) {
          if (!visible.includes(question.name)) fail(`${path} FAQ question not visible: ${question.name}`);
          if (!visible.includes(question.acceptedAnswer.text)) {
            fail(`${path} FAQ answer not visible: ${question.name}`);
          }
        }
      }
    }
  }
}
if (trailing.size > 1) fail("canonical paths mix trailing slashes");

const robots = readFileSync(resolve(root, "robots.txt"), "utf8");
for (const agent of ["GPTBot", "Google-Extended", "OAI-SearchBot", "PerplexityBot", "ClaudeBot"]) {
  if (!robots.includes(agent)) fail(`robots.txt missing ${agent}`);
}
if (!/User-Agent: GPTBot\s+Allow: \//i.test(robots)) fail("GPTBot is not Allow");
if (!/User-Agent: Google-Extended\s+Allow: \//i.test(robots)) fail("Google-Extended is not Allow");

const llms = readFileSync(resolve(root, "llms.txt"), "utf8");
if (!llms.startsWith("# CaliLawyer.com")) fail("llms.txt missing title");
for (const needle of [
  "](https://calilawyer.com/)",
  "](https://calilawyer.com/lemon-law)",
  "](https://calilawyer.com/injury):",
  "/lemon-law/deadlines",
  "/lemon-law/used-cpo-leased",
  "/injury/attorney-fees",
  "/attorneys/robby-terziyan",
  "/glendale/injury-lawyer",
  "/glendale/lemon-law-attorney",
  "/burbank/injury-lawyer",
  "/burbank/lemon-law-attorney",
  "/pasadena/injury-lawyer",
  "/pasadena/lemon-law-attorney",
  "/los-angeles/injury-lawyer",
  "/los-angeles/lemon-law-attorney",
  "CCP §871.21",
  "§871.29",
  "Rober A. Terziyan",
  "351959",
  "(310) 331-0310",
  "CaliLawyer.com",
  "Used vehicles may qualify, case by case.",
  "Copy pending fact-check.",
]) {
  if (!llms.includes(needle)) fail(`llms.txt missing ${needle}`);
}
if (/\[[A-Z][A-Z0-9 _—-]{2,}\]/.test(llms)) fail("llms.txt still has a bracketed placeholder");

const home = readFileSync(fileFor("/"), "utf8");
if (!home.includes('"knowsLanguage":["en","hy","es"]') && !home.includes('"knowsLanguage": ["en", "hy", "es"]')) {
  fail("home schema is missing knowsLanguage codes");
}
if (!home.includes("+1-310-331-0310")) fail("home schema telephone is not +1-310-331-0310");
if (!home.includes("tel:+13103310310")) fail("home is missing the tel link");
if (!home.includes('"postalCode":"91203"') && !home.includes('"postalCode": "91203"')) {
  fail("home schema postal code is not 91203");
}
if (!home.includes("Rober A. Terziyan")) fail("home schema is missing the attorney name");

const attorney = readFileSync(fileFor("/attorneys/robby-terziyan"), "utf8");
if (!attorney.includes("robby-terziyan#person")) fail("person @id is not the terziyan URL");
if (!strip(attorney).includes("Copy pending fact-check.")) {
  fail("attorney page is missing the fact-check note");
}
if (!attorney.includes("Rober A. Terziyan")) fail("attorney page is missing the attorney name");
if (!attorney.includes('"knowsLanguage":["en","hy","es"]') && !attorney.includes('"knowsLanguage": ["en", "hy", "es"]')) {
  fail("attorney schema is missing knowsLanguage codes");
}
const deadlines = readFileSync(fileFor("/lemon-law/deadlines"), "utf8");
if (!deadlines.includes("CCP §871.21") || !deadlines.includes("§871.29")) {
  fail("deadlines page is missing CCP §871.21 and §871.29");
}
const used = readFileSync(fileFor("/lemon-law/used-cpo-leased"), "utf8");
if (!strip(used).includes("Used vehicles may qualify, case by case.")) {
  fail("used-vehicle page is missing the approved sentence");
}
if (/certified pre-owned|\bCPO\b/.test(strip(used))) {
  fail("used-vehicle page still distinguishes certified pre-owned cars");
}

if (existsSync(resolve(root, "this-page-does-not-exist.html"))) {
  fail("unknown path was exported");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Verified ${locs.length} sitemap URLs, robots.txt, and llms.txt.`);
