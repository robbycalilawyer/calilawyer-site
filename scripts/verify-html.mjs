/**
 * Checks the static export the way the post-deploy curl loop would,
 * without calling the live host. Run after `npm run build`.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
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

function portraitTag(html) {
  const match = html.match(
    /<img[^>]*alt="Rober A. Terziyan, attorney at CaliLawyer.com"[^>]*>/,
  );
  if (!match) {
    fail("missing attorney portrait img");
    return "";
  }
  return match[0];
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
const UNPUBLISHED = [
  "/guides/california-personal-injury-statute-of-limitations",
  "/guides/california-comparative-fault",
  "/lemon-law/song-beverly-act-explained",
  "/lemon-law/deadlines",
  "/lemon-law/attorney-fees",
  "/lemon-law/used-cpo-leased",
  "/lemon-law/ev-tesla",
  "/injury/attorney-fees",
  "/glendale/injury-lawyer",
  "/glendale/lemon-law-attorney",
  "/burbank/injury-lawyer",
  "/burbank/lemon-law-attorney",
  "/pasadena/injury-lawyer",
  "/pasadena/lemon-law-attorney",
  "/los-angeles/injury-lawyer",
  "/los-angeles/lemon-law-attorney",
  "/attorneys/robby-terziyan",
];

const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (locs.length < 17) fail(`sitemap has only ${locs.length} URLs`);

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
  else if (canonical[1] !== loc) {
    fail(`${path} canonical ${canonical[1]} does not match sitemap loc ${loc}`);
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
}
if (trailing.size > 1) fail("canonical paths mix trailing slashes");

const FORBIDDEN_HTML = [
  "pending fact-check",
  "Copy pending",
  "Last reviewed by",
  "Question 1",
  "reviewedBy",
];

function walkHtml(dir) {
  const found = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = resolve(dir, entry.name);
    if (entry.isDirectory()) found.push(...walkHtml(file));
    else if (entry.name.endsWith(".html")) found.push(file);
  }
  return found;
}

const BANNED_PHRASES = [
  "navigating",
  "landscape",
  "we understand that",
  "rest assured",
  "comprehensive",
  "seamless",
  "dedicated to",
  "tailored",
  "empower",
  "in today's",
  "it's important to note",
  "delve",
  "journey",
];

function readable(html) {
  return strip(html)
    .replace(/\u2019/g, "'")
    .replace(/\u2018/g, "'")
    .replace(/\u201c/g, '"')
    .replace(/\u201d/g, '"');
}

function faqText(value) {
  return readable(value).replace(/\s+/g, " ").trim();
}

function assertFaqParity(file, html) {
  const panels = [...html.matchAll(/role="region"[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g)].map((match) =>
    faqText(match[1]),
  );
  const answers = [];
  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const data = JSON.parse(block[1]);
    const nodes = data["@graph"] ?? [data];
    for (const node of nodes) {
      const type = node["@type"];
      const types = Array.isArray(type) ? type : [type];
      if (!types.includes("FAQPage")) continue;
      for (const question of node.mainEntity ?? []) {
        const answer = faqText(question.acceptedAnswer?.text ?? "");
        answers.push(answer);
        if (!panels.includes(answer)) {
          fail(`${file} FAQ JSON-LD answer is not the visible answer word for word: ${question.name}`);
        }
      }
    }
  }
  if (answers.length && panels.length !== answers.length) {
    fail(`${file} has ${panels.length} visible FAQ answers and ${answers.length} JSON-LD answers`);
  }
  if (answers.length && panels.join("\n") !== answers.join("\n")) {
    fail(`${file} FAQ answers are not in the same order as the JSON-LD`);
  }
}

let directAnswers = 0;
for (const file of walkHtml(root)) {
  const html = readFileSync(file, "utf8");
  for (const needle of FORBIDDEN_HTML) {
    if (html.includes(needle)) fail(`${file} contains ${JSON.stringify(needle)}`);
  }
  if (/—|&mdash;|&#8212;|&#x2014;/i.test(html)) {
    fail(`${file} contains an em dash`);
  }
  const text = readable(html).toLowerCase();
  for (const phrase of BANNED_PHRASES) {
    const pattern = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    if (pattern.test(text)) fail(`${file} contains banned phrase ${JSON.stringify(phrase)}`);
  }
  assertFaqParity(file, html);
  for (const match of html.matchAll(/data-direct-answer="true"[^>]*>([\s\S]*?)<\/p>/g)) {
    directAnswers += 1;
    const answer = faqText(match[1]);
    const count = answer.split(/\s+/).filter(Boolean).length;
    if (count < 40 || count > 60) {
      fail(`${file} direct answer is ${count} words, expected 40-60`);
    }
    const firstSentence = answer.split(/(?<=\.)\s/)[0] ?? "";
    const firstWords = firstSentence.split(/\s+/).filter(Boolean);
    if (firstWords.length < 12 || firstSentence.endsWith("?")) {
      fail(`${file} direct answer does not open with the answer`);
    }
  }
}
if (directAnswers < 1) fail("no guide direct answer was exported");

for (const path of UNPUBLISHED) {
  if (sitemap.includes(path)) fail(`sitemap still lists ${path}`);
  if (existsSync(fileFor(path))) fail(`unpublished route was exported: ${path}`);
}

if (!existsSync(resolve(root, "404.html"))) fail("out/404.html was not exported");
const rules = [
  readFileSync(resolve("public/_redirects"), "utf8"),
  existsSync(resolve("netlify.toml")) ? readFileSync(resolve("netlify.toml"), "utf8") : "",
].join("\n");
if (/\/\*\s+\S*index\.html\s+200/.test(rules)) {
  fail("a catch-all rewrite would serve index.html with status 200");
}
for (const path of UNPUBLISHED) {
  if (rules.includes(path)) fail(`${path} is in a redirect or rewrite rule`);
}
if (/\b410\b/.test(rules)) fail("a redirect rule uses 410");
if (!/^\/personal-injury\s+\/injury\s+301\s*$/m.test(rules)) {
  fail("missing /personal-injury /injury 301");
}
if (
  existsSync(resolve(root, "personal-injury.html")) ||
  existsSync(resolve(root, "personal-injury/index.html"))
) {
  fail("personal-injury alias was exported");
}

const robots = readFileSync(resolve(root, "robots.txt"), "utf8");
for (const agent of ["GPTBot", "Google-Extended", "OAI-SearchBot", "PerplexityBot", "ClaudeBot"]) {
  if (!robots.includes(agent)) fail(`robots.txt missing ${agent}`);
}
if (!/User-Agent: GPTBot\s+Allow: \//i.test(robots)) fail("GPTBot is not Allow");
if (!/User-Agent: Google-Extended\s+Allow: \//i.test(robots)) fail("Google-Extended is not Allow");

const llms = readFileSync(resolve(root, "llms.txt"), "utf8");
if (!llms.startsWith("# CaliLawyer.com")) fail("llms.txt missing title");
for (const needle of [
  "](https://calilawyer.com)",
  "](https://calilawyer.com/about)",
  "](https://calilawyer.com/lemon-law)",
  "](https://calilawyer.com/lemon-law/what-qualifies)",
  "](https://calilawyer.com/injury):",
  "Rober A. Terziyan",
  "351959",
  "(310) 331-0310",
  "CaliLawyer.com",
  "Used vehicles may qualify, case by case.",
]) {
  if (!llms.includes(needle)) fail(`llms.txt missing ${needle}`);
}
for (const path of UNPUBLISHED) {
  if (llms.includes(path)) fail(`llms.txt still lists ${path}`);
}
for (const needle of FORBIDDEN_HTML) {
  if (llms.includes(needle)) fail(`llms.txt contains ${JSON.stringify(needle)}`);
}
const llmsUrls = [...llms.matchAll(/\]\((https:\/\/calilawyer\.com[^)]*)\)/g)].map((match) => match[1]);
for (const url of llmsUrls) {
  if (!locs.includes(url)) fail(`llms.txt lists a URL that is not in the sitemap: ${url}`);
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
if (!home.includes("/assets/attorney/robby-terziyan-800.png")) {
  fail("home schema is missing the attorney portrait");
}
if (home.includes("attorney-portrait.jpg")) fail("home still uses the old portrait");
const homePortrait = portraitTag(home);
if (!homePortrait.includes('loading="lazy"') || homePortrait.includes("fetchpriority")) {
  fail("home portrait should lazy-load below the fold");
}
if (!home.includes("https://calilawyer.com/about#person")) {
  fail("home schema person @id is not the about page");
}
if (home.includes("/attorneys/robby-terziyan")) {
  fail("home still links the unpublished attorney profile");
}

const about = readFileSync(fileFor("/about"), "utf8");
const aboutPortrait = portraitTag(about);
if (!aboutPortrait.includes('loading="lazy"') || /fetchpriority/i.test(aboutPortrait)) {
  fail("about portrait should lazy-load; only a sliver is in the first viewport");
}
if (!aboutPortrait.includes('width="800"') || !aboutPortrait.includes('height="1000"')) {
  fail("about portrait is missing width and height");
}
if (!about.includes("image/avif") || !about.includes("image/webp")) {
  fail("about portrait is missing avif or webp");
}
if (!about.includes("https://calilawyer.com/about#person")) {
  fail("about schema person @id is not the about page");
}

const lemon = readFileSync(fileFor("/lemon-law"), "utf8");
if (!strip(lemon).includes("Used vehicles may qualify, case by case.")) {
  fail("lemon law page is missing the approved used-vehicle sentence");
}

if (existsSync(resolve(root, "this-page-does-not-exist.html"))) {
  fail("unknown path was exported");
}

const formsPath = resolve(root, "__forms.html");
if (!existsSync(formsPath)) fail("__forms.html was not exported");
else if (!readFileSync(formsPath, "utf8").includes('<meta name="robots" content="noindex"')) {
  fail("__forms.html is missing the robots noindex meta");
}
if (sitemap.includes("__forms")) fail("sitemap lists __forms.html");
if (llms.includes("__forms")) fail("llms.txt lists __forms.html");
if (/disallow:\s*\/__forms/i.test(robots)) fail("robots.txt disallows __forms.html");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Verified ${locs.length} sitemap URLs, robots.txt, and llms.txt.`);
