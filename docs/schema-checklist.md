# Schema checklist

Checked against the static export. Items that need a live host are marked open.

- [x] One firm node, `@id` `https://calilawyer.com/#firm`, reused from the layout graph.
- [x] `areaServed` includes Glendale, Burbank, Pasadena, Los Angeles, and California. Glendale is first.
- [x] `knowsAbout` is personal injury and California lemon law. No landlord-tenant.
- [x] `sameAs` is omitted. No profile URLs are shipped.
- [x] No `aggregateRating` or `review` on the firm node. Star ratings are not rendered.
- [x] FAQPage `name` and `text` are the same strings the accordion renders.
- [x] JSON-LD is in the static HTML (`scripts/verify-html.mjs`).
- [x] Person `@id` is `https://calilawyer.com/attorneys/robby-terziyan#person`. The type is `Person`, not the deprecated `Attorney` type.
- [x] Person name is Rober A. Terziyan. State Bar of California No. 351959. Admission date in the credential is 2023-12-01.
- [x] Office address on the firm node: 315 Arden Ave Ste 10, Glendale, CA 91203.
- [x] `knowsLanguage` is `["en","hy","es"]` on the firm node and the attorney Person node.
- [x] `telephone` is `+1-310-331-0310`. Call links use `tel:+13103310310`.
- [x] `name` and `legalName` are CaliLawyer.com.
- [x] No federal-court admission is stated.
- [x] No years-of-experience claim. Stats, case results, testimonials, and star ratings are not rendered.
- [x] New answer-page bodies say “Copy pending fact-check.” Brief sentences are not published.
- [ ] Rich Results Test and schema.org validator: run after deploy. This environment does not submit the site to Google.
- [ ] Search Console, Bing, and IndexNow are post-deploy. They are not run from this pull request.
- [ ] Host or CDN bot-fight settings (a 403 for Googlebot, Bingbot, PerplexityBot, or ClaudeBot) can be checked only on the live host.

City pages use a `LegalService` that references `#firm` and sets `areaServed` to that city. They do not create a second office.
