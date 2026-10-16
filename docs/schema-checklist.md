# Schema checklist

Checked against the static export. Items that need a live host are marked open.

- [x] One firm node, `@id` `https://calilawyer.com/#firm`, reused from the layout graph.
- [x] `areaServed` includes Glendale, Burbank, Pasadena, Los Angeles, and California. Glendale is first.
- [x] `knowsAbout` is personal injury and California lemon law. No landlord-tenant.
- [x] `sameAs` is omitted. No profile URLs are shipped.
- [x] No `aggregateRating` or `review` on the firm node. Star ratings are not rendered.
- [x] FAQPage `name` and `text` are the same strings the accordion renders.
- [x] JSON-LD is in the static HTML (`scripts/verify-html.mjs`).
- [x] Person `@id` is `https://calilawyer.com/about#person`. The type is `Person`, not the deprecated `Attorney` type. The attorney profile route is not published.
- [x] Person name is Rober A. Terziyan. State Bar of California No. 351959. Admission date in the credential is 2023-12-01.
- [x] Office address on the firm node: 315 Arden Ave Ste 10, Glendale, CA 91203.
- [x] `knowsLanguage` is `["en","hy","es"]` on the firm node and the attorney Person node.
- [x] `telephone` is `+1-310-331-0310`. Call links use `tel:+13103310310`.
- [x] `name` and `legalName` are CaliLawyer.com.
- [x] No federal-court admission is stated.
- [x] No years-of-experience claim. Stats, case results, testimonials, and star ratings are not rendered.
- [x] Placeholder guides, city pages, fee pages, and the attorney profile are not in the build.
- [ ] Rich Results Test and schema.org validator: run after deploy. This environment does not submit the site to Google.
- [ ] Search Console, Bing, and IndexNow are post-deploy. They are not run from this pull request.
- [ ] Host or CDN bot-fight settings (a 403 for Googlebot, Bingbot, PerplexityBot, or ClaudeBot) can be checked only on the live host.

The firm node is the only office. City pages are not published.
