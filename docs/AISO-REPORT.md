# AI Search Optimisation (AISO) report: Kurulu Drives

**Live site:** https://kurulu-drives.vercel.app · **Code:** this repository · **Prepared by:** Apsari Udithara · **Baseline date:** 2 October 2026

> **Demo business.** Kurulu Drives, its people and its email address are fictional, and the site says so. The travel facts on the site are real and sourced. There are no reviews, ratings or testimonials, because there are no real customers.

---

## Summary

Kurulu Drives is a demo private-driver and tour service in Sri Lanka, built to show the full AISO loop: **Scan → Score → Generate → Publish → Re-scan**.

- **Scan.** Before the site was indexed, 8 priority prompts were asked on ChatGPT (search) and Perplexity, plus a Coderra AISO scan and `site:` checks on Google and Bing.
- **Score.** Kurulu Drives was mentioned in **0 of 16** answers and cited in **0 of 16**. **5 of 16** answers recommended a train journey that is not running end to end in 2026. ChatGPT credited the brand with another company's 29 reviews. Coderra's overall score was **55/100**: website tech 100, content 88, trust 59, AI mentions 0.
- **Generate.** A static, JavaScript-free site with 10 pages that answer specific traveller questions first, with tables, dated sources and one consistent business entity in structured data. Lighthouse mobile on the live site: **100 / 100 / 100 / 100** on the home, pricing and tour pages (from 84 on the first production build).
- **Publish.** Deployed on Vercel; Google Search Console verified; Bing Webmaster Tools imported; 10 URLs submitted through IndexNow (HTTP 202).
- **Re-scan.** The same prompts at 2 and 4 weeks after indexing, plus Coderra reports and the Google and Bing AI-visibility reports. Realistic first wins: the train-status, airport-transfer and tipping questions. "Recommend a driver" will not move without real reviews.

---

## 1. Business and audience

| | |
|---|---|
| **Business** | Private chauffeur-guides with air-conditioned cars and vans, based in Kandy: multi-day round trips, Colombo airport (CMB) transfers, day trips |
| **Prices** | US$60/day sedan (1–3 travellers), US$85/day van (4–8), including fuel, tolls, parking and the driver's meals and room |
| **Audience** | Travellers from the UK, Europe, Australia and India, aged 25–55, planning a 7–14 day trip and researching it with ChatGPT, Perplexity and Google |
| **Why this niche** | High-value, research-heavy trips, a crowded field of small operators, and questions that AI assistants answer directly ("how much does a driver cost?") |

---

## 2. What AISO is, and how an AI answer is built

Coderra's definition: AISO is *"getting your business named, quoted, or linked when someone asks ChatGPT, Gemini, or Perplexity a question."* SEO is about being ranked; AISO is about being cited.

An answer engine works in three steps:

1. **Retrieve.** It searches an index (ChatGPT search and Copilot lean on Bing; Google's AI features use Google's index; Perplexity has its own) and pulls candidate pages.
2. **Synthesise.** The model writes an answer from a small subset of those pages.
3. **Cite.** The sources that shaped the answer are named or linked.

To be cited, a business has to (a) be crawlable and indexed, (b) be the easiest trustworthy page to quote, and (c) be corroborated by other sites the engine trusts. The site covers (a) and (b); (c) is the off-site plan in section 6.

---

## 3. Scan (baseline, 2 October 2026)

### Method

| Check | What was done |
|---|---|
| **Index status** | `site:kurulu-drives.vercel.app` on Google and Bing: **no results on either** ([Google](screenshots/2026-10-02-baseline-google-site.png), [Bing](screenshots/2026-10-02-baseline-bing-site.png)). The baseline is a true "before". |
| **Prompt scan** | 8 prompts covering every page and intent, asked once each on **ChatGPT (search)** and **Perplexity**, fresh chat, logged out, private window. Results in [`prompts.csv`](prompts.csv). |
| **Coderra AISO scan** | Coderra's free URL-only preview of the site |

Sixteen prompts were planned; the 8 below were chosen to cover each page and intent within the time available. ChatGPT and Perplexity were picked because they show their sources most clearly and cover both a Bing-based engine and an independent index.

| # | Prompt | Intent | Target page |
|---|---|---|---|
| 1 | How much does a private driver in Sri Lanka cost per day? | Cost | `/pricing/` |
| 3 | Driver vs train vs tuk-tuk for travelling Sri Lanka | Comparison | `/guides/driver-vs-train/` |
| 4 | 7-day Sri Lanka itinerary with a private driver | Planning | `/tours/7-day-classic/` |
| 7 | How to get from Colombo airport to Kandy | Transfer | `/guides/airport-transfers/` |
| 10 | How much to tip a driver in Sri Lanka | Advice | `/guides/tipping-and-driver-costs/` |
| 13 | Recommend a private driver based in Kandy | Local recommendation | `/`, `/about/` |
| 15 | Kurulu Drives reviews / is Kurulu Drives legit | Brand | `/about/` |
| 16 | Is the Kandy to Ella train running in 2026? | Fresh fact | `/guides/driver-vs-train/` |

---

## 4. Score

### Visibility

| Measure | ChatGPT | Perplexity | Total |
|---|---|---|---|
| Kurulu Drives mentioned | 0 / 8 | 0 / 8 | **0 / 16** |
| Our URL cited | 0 / 8 | 0 / 8 | **0 / 16** |

Zero is the expected starting point for an unindexed site; the value of the baseline is in **who is cited instead**, and **how good the current answers are**.

### Who AI cites today

| Question type | ChatGPT cited | Perplexity cited |
|---|---|---|
| Price per day (#1) | Driver-company sites (Sri Lanka Car and Driver Hire, OneCeylon) | Driver-company sites (zipceylon.com, rediscoversrilanka.com, lankatravelbee.com and 3 more) |
| Driver vs train (#3) | Nothing (answered from memory) | Sources not captured |
| 7-day itinerary (#4) | srilanka.travel; named two map-listed drivers | viator.com (a tour listing) |
| Airport → Kandy (#7) | nextbus.lk, the railway booking site | rome2rio.com, thecommonwanderer.com |
| Tipping (#10) | roughguides.com, lonelyplanet.com | srilanka-spirit.com |
| Recommend a driver in Kandy (#13) | Tripadvisor and business listings, each with a rating | kandytransfers.com, paradisekandytaxi.com, a family travel blog, GetYourGuide, Tripadvisor |
| Brand (#15) | Tripadvisor (about a different company) | Tripadvisor, Trustpilot, BBB |
| Train status 2026 (#16) | The railway booking site | srilankatrip.com.lk, iwayrentacar.com, srilankatour.travel |

22 different domains were cited across 16 answers. Operator websites, official tourism and railway sites, Tripadvisor/Viator, big publishers and niche guides all appear, and the mix changes with the type of question.

### Findings

**1. Current answers are often outdated or vague. This is the content gap.**

| Gap | Evidence |
|---|---|
| **Outdated rail advice** | **5 of 16** answers recommend a Kandy–Ella or Colombo–Kandy train. After Cyclone Ditwah (November 2025) the Kandy end of the line is still under repair; only Nanu Oya → Ella → Badulla reopened, in June 2026. ChatGPT answered prompt #16 with "Yes. The Kandy–Ella train route is operating in 2026", based only on the route appearing in the booking system. |
| **Wrong transfer time** | Perplexity gave 1.5–2 hours by taxi from the airport to Kandy; the realistic time for ~115 km is 3–3.5 hours. |
| **No prices or distances** | Neither itinerary answer gave distances, drive times or a total price. Neither transfer answer gave a price. |
| **Conflicting facts** | ChatGPT implied the driver's meals are usually included; Perplexity said they often are not. |
| **SUV tier** | Both price answers include an SUV tier; the demo offers sedan and van only. |

Each gap is something the site answers specifically: dated rail status with sources, a per-day itinerary table with km, hours and price, a transfer price table, and a clear statement of what the day rate includes.

**2. The two engines behave differently.**

| | ChatGPT | Perplexity |
|---|---|---|
| Searched every time? | No: prompt #3 was answered from memory | Yes |
| Train status (#16) | Wrong | Correct, citing guides updated in 2026 |
| "Recommend a driver" (#13) | Chose businesses by rating and review count | Cited small driver websites and a blog |
| Brand question (#15) | Confidently wrong | "No clear evidence this business exists" |

Perplexity cites niche, recently updated pages, including small operators' own websites, so it is the likeliest first engine to cite this site.

**3. Local recommendations are won by reviews and listings.** All four drivers ChatGPT recommended were shown with 4.9–5.0 stars from 24 or more reviews. The research points the same way (see section 8). On-site work cannot win this prompt; real reviews and listings can, and a demo must not fake them.

**4. Entity confusion is a live risk.** Asked whether "Kurulu Drives" is legitimate, ChatGPT said it "appears to be a legitimate operating tour/driver service" with 5.0/5 from 29 Tripadvisor reviews. Perplexity identified those reviews as belonging to **Kurulu Tour**, a real driver service in Nuwara Eliya. The engine attached a real business's reputation to a similar name. Response: the About page now states that Kurulu Drives is not connected to any real company with a similar name and that their reviews belong to them (section 5.3). For a real launch, the first recommendation would be a distinct name (section 10).

**5. The site already uses the evidence base the engines trust.** Perplexity cited rome2rio.com and thecommonwanderer.com for prompt #7; both are among this site's sources. The site offers the same base with more specific and more current figures.

### Coderra AISO scan (URL-only preview)

| Area | Score | Reading |
|---|---|---|
| **Overall** | **55 / 100** ("getting there") | |
| Website tech ("can AI read your website?") | 100 | Static HTML, crawler access, robots.txt |
| Content ("is your content AI-ready?") | 88 | 9 pages of 630–890 words, all with structured data |
| Search ranking (Google and Bing) | 86 | On-page readiness; actual rankings not yet possible |
| Trust ("does AI trust you're real?") | 59 | Clear identity on-site; no Wikipedia, Wikidata or knowledge panel |
| AI mentions | 0 | ChatGPT only mentioned the name when asked about the brand; 0 for category, comparison and how-to questions |

Coderra's biggest lever, trust, is the same conclusion as findings 3 and 4: the next gains are off-site.

Two items in the preview are artefacts of a home-page-only check: "missing FAQ page and breadcrumbs" (both exist, on `/faq/` and every inner page) and "sitemap: 1 URL" (the sitemap index points to a sub-sitemap with all 10 pages).

---

## 5. Generate: what was built, and why

### 5.1 Technical

| Tactic | Why | Evidence |
|---|---|---|
| **Static HTML, no client-side JavaScript** (Astro) | AI crawlers such as GPTBot, ClaudeBot and PerplexityBot do not run JavaScript. Every price and table is in the first response. Verified with `curl -A "GPTBot"`. | Vercel/MERJ crawler study |
| **robots.txt separates search bots from training bots** | OAI-SearchBot vs GPTBot, Claude-SearchBot vs ClaudeBot, PerplexityBot are independent switches. Both groups are allowed. | OpenAI and Anthropic crawler documentation |
| **One business entity in JSON-LD** | Organization/TravelAgency with one `@id`; Service with offers; TouristTrip per tour; Article per guide; FAQPage; BreadcrumbList. Everything points to the same `@id`. **No Review or AggregateRating**, because there are no real reviews. | schema.org; Google structured-data guidelines |
| **Single source of truth** for name, prices and contact (`src/data/site.ts`) | Every page, table, total and JSON-LD block uses the same figures, so nothing can contradict anything else | Entity consistency |
| **Sitemap, canonical URLs, unique titles and descriptions**; `/pricing` redirects (308) to `/pricing/` | Standard indexing; one URL per page | Google Search Central |
| **Performance** | Phone-sized 800 px photos and an inlined 2 KB stylesheet took the home page from 84 to 100 on Lighthouse mobile; LCP 1.8 s on the live site | [Lighthouse reports](lighthouse/) |
| **llms.txt** | Included because it costs nothing. Labelled experimental: no engine has confirmed using it. | Google; Coderra's own guidance |

### 5.2 Content

| Tactic | Example | Why |
|---|---|---|
| **Answer first** | Pricing opens with "US$60 per day… US$85 for a van… a 7-day trip costs US$420" | The first passage is what an engine lifts |
| **Key-facts box** on every content page | 4–5 number-heavy bullets near the top | Short, factual and quotable |
| **Question headings** | "Is the Kandy to Ella train running in 2026?" | Matches how people ask; each heading gets an anchor link |
| **Tables** | Rates, 7/10/14-day totals, day-by-day itineraries, transfer prices | Engines answered both itinerary prompts in this format |
| **Named sources on every statistic** | 4–6 sources per page, dated | The GEO paper found citing sources, quotations and statistics raises visibility in AI answers |
| **One quote per guide** | A (labelled fictional) driver's tip | Quotations are among the GEO tactics that help |
| **Honest trade-offs** | "When is the train the better choice?"; the tipping page sets out conflicting sources before recommending a range | Balanced pages are more trustworthy |
| **Fresh, dated facts** | 2026 rail status with what reopened, what's closed and the repair targets | The scan's biggest gap |

Readers were considered too: photos, jump links, tables that become cards on phones, clickable cards and a quote button that stays on screen on phones. Lighthouse accessibility is 100.

### 5.3 Honesty

The About page answers "Is Kurulu Drives a real company?" with "No", explains why there are no reviews, and states the business is not connected to any real company with a similar name. Fictional people are labelled as fictional. The email address is a non-working placeholder.

---

## 6. Publish

| Step | Status (2 October 2026) |
|---|---|
| Deploy | Vercel, from GitHub; every push redeploys |
| Google Search Console | Ownership verified (HTML tag); `sitemap-index.xml` read with status **Success, 10 pages discovered**; manual indexing requests hit the daily quota for new properties ([verified](screenshots/2026-10-02-gsc-ownership-verified.png), [sitemap](screenshots/2026-10-02-gsc-sitemap-success.png), [quota](screenshots/2026-10-02-gsc-indexing-quota-exceeded.png)) |
| Bing Webmaster Tools | Imported from Search Console (Bing powers ChatGPT search and Copilot) |
| IndexNow | Key file published; all 10 URLs submitted to `api.indexnow.org`: **HTTP 202 Accepted** |
| Analytics | Vercel Web Analytics on (referrers will show chatgpt.com, perplexity.ai and others) |

### Off-site plan (documented, not faked)

Ordered by the scan's evidence:

1. **Google Business Profile and Bing Places** with identical details. ChatGPT's local recommendations came from business listings.
2. **Tripadvisor listing and real reviews** from real customers. Every recommended driver had 24 or more reviews at 4.9–5.0.
3. **Viator / GetYourGuide listings**. Both engines cited marketplace listings for itinerary and driver questions.
4. **Travel bloggers.** Perplexity recommended a driver only because a family blog had written about him.
5. Add each profile to `sameAs` in the structured data, so engines connect them to one entity.

None of these were created for the demo: a fictional business cannot honestly have listings or reviews.

---

## 7. Re-scan: measurement and expectations

**Schedule.** Day 0 is when `site:kurulu-drives.vercel.app` first returns results on Google and Bing. Re-scan at **day 0 + 2 weeks** and **+ 4 weeks**: the same 8 prompts, the same two engines, the same method, as new `phase` rows in `prompts.csv`. Coderra free reports #2 and #3 alongside.

| Area | KPI | Target | Source |
|---|---|---|---|
| Indexing | Pages indexed | 10/10 within ~2 weeks | Search Console, Bing Webmaster Tools |
| Technical | Lighthouse, schema errors | ≥95; 0 errors | Lighthouse, Rich Results Test |
| Visibility | Mentions / citations on the 16 scan rows | Any citation on #16, #7 or #10 by week 4 | `prompts.csv` |
| Visibility | Brand answer (#15) | Reflects the About page instead of another company's reviews | `prompts.csv` |
| AI impressions | Appearances in AI features | > 0 | Search Console AI-features report; Bing AI Performance |
| Traffic | Visits referred by AI assistants | Tracked | Vercel Analytics referrers |

**Realistic expectations.**

| Prompt | Expectation | Why |
|---|---|---|
| #16 Train status | Most likely first citation | Current answers are wrong; our page is specific, dated and sourced |
| #7 Airport → Kandy, #10 Tipping | Possible | Perplexity already cites niche pages and our sources |
| #1 Price | Possible | Operator sites are cited for this question |
| #13 Recommend a driver | No change | Needs real reviews and listings |
| #15 Brand | Should improve | The About page gives engines the true answer |

---

## 8. Evidence levels

| Claim | Evidence | Level |
|---|---|---|
| A page must be indexed and eligible for normal search to appear in Google's AI features; no special "AI markup" is needed | Google Search Central (2026 guidance) | Proven |
| AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do not execute JavaScript | Vercel/MERJ study | Proven |
| Search bots and training bots are separate switches | OpenAI, Anthropic, Perplexity crawler docs | Proven |
| Citing sources, quotations and statistics improves visibility in AI answers; keyword stuffing does not | GEO paper (Aggarwal et al., KDD 2024) | Strong (lab study) |
| Engines cite very different sources | 2026 citation studies; this scan (22 domains, little overlap between engines) | Directional |
| Local recommendations depend on listings and reviews | 2026 local studies; this scan (#13) | Directional |
| `llms.txt` affects citations | No engine confirms it | Experimental (included, no claim made) |
| FAQPage markup produces rich results | Restricted to government and health sites since 2023 | Kept for machine understanding only |

---

## 9. Limitations and ethics

**Limitations.**
- **Sample.** 8 of the 16 planned prompts, 1 run each, 2 engines. AI answers vary between runs, so treat single results as indicative.
- **Location.** The scan was run from Sri Lanka; answers can differ by country.
- **Logged-out ChatGPT** sometimes answered without searching (prompt #3).
- **Two cells are incomplete** in `prompts.csv`: the source domains for ChatGPT #1 and Perplexity #3.
- **Coderra.** The baseline used Coderra's URL-only preview, which checked ChatGPT only, without web search.
- **Time.** A new domain may take weeks to be cited; the re-scans may still show zero.

**Ethics.**
- The business is fictional and labelled as such on the About page and in `llms.txt`.
- No reviews, ratings, testimonials, licences or business listings were invented.
- The name clash with a real company was handled without naming that company on a fictional site.
- Screenshots were cropped to remove personal browser details.

---

## 10. Launching for real: what would change

If Kurulu Drives became a real business, in this order:

1. **Name check against near matches, then a distinct name.** The scan showed engines already merge "Kurulu Drives" with "Kurulu Tour". Renaming after reviews and listings exist would waste them.
2. **Real details replace the fictional ones in a single change:** owner and drivers (with consent), email and WhatsApp, address, vehicles, prices and policies the business will honour, SLTDA licences and registration. The demo labels come off only in that same change.
3. **Own domain**, then re-verify Search Console and Bing and resubmit through IndexNow.
4. **The off-site plan** from section 6: profiles, real reviews, marketplaces, bloggers, and `sameAs`.
5. **Keep facts fresh.** The rail status will change (Colombo–Kandy services were announced to resume in October 2026, unconfirmed); updating it promptly keeps the page citable.

---

## 11. Sources

**AISO and search**
- Coderra: [What is AISO?](https://coderra.com.au/blog/what-is-aiso) · [AISO product](https://www.coderra.com.au/products/aiso) · [Pricing](https://www.coderra.com.au/pricing)
- Search Engine Journal: [Google's new AI search guide calls AEO and GEO "still SEO"](https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/)
- CMSWire: [Google adds AI visibility reports to Search Console](https://www.cmswire.com/digital-experience/google-adds-ai-visibility-reports-to-search-console/)
- Bing Webmaster Blog: [AI Performance in Bing Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- OpenAI: [Crawler documentation](https://developers.openai.com/api/docs/bots)
- Vercel: [How AI is changing SEO (crawler study)](https://vercel.com/i/how-ai-is-changing-seo)
- Aggarwal et al.: [GEO: Generative Engine Optimization (KDD 2024)](https://arxiv.org/pdf/2311.09735)
- AuthorityTech: [AI citation overlap by engine, 2026](https://authoritytech.io/curated/ai-citation-11-percent-platform-overlap-per-engine-audit-2026)
- Marketing Code: [ChatGPT recommends ~1% of local businesses](https://www.marketingcode.com/chatgpt-recommends-1-percent-local-businesses-contractors/)
- Vercel: [`trailingSlash` in vercel.json](https://vercel.com/docs/project-configuration/vercel-json)

**Travel facts used on the site and in this report**
- Sunday Times (21 June 2026): [Podi Menike runs again from Nanu Oya to Badulla](https://www.sundaytimes.lk/260621/news/podi-menike-hits-the-tracks-from-nanu-oya-to-badulla-marking-latest-phase-of-restoration-646913.html)
- Newswire (8 Sept 2026): [Nanu Oya–Great Western repairs to be completed by December](https://www.newswire.lk/2026/09/08/nanu-oya-great-western-railway-repairs-to-be-completed-by-december/)
- The Morning (19 April 2026): [Upcountry rail repairs miss key targets](https://www.themorning.lk/articles/5hM6S1G0upunOodLALoX)
- BYC: [Colombo–Kandy–Ella train status 2026](https://byc.lk/colombo-kandy-ella-train-status-2026)
- Rome2Rio: [Colombo airport (CMB) to Kandy](https://www.rome2rio.com/s/Colombo-Airport-CMB/Kandy)
- Ceylon Route: [Private driver cost in 2026](https://ceylonroute.com/blog/hire-private-driver-sri-lanka-cost-2026/)
- The Middle Age Wanderer: [Tipping in Sri Lanka 2026](https://themiddleagewanderer.com/guide-to-tipping-in-sri-lanka/) · Rediscover Sri Lanka: [Tipping in Sri Lanka 2026](https://rediscoversrilanka.com/tipping-in-sri-lanka-guide/)
- Ada Derana Biz: [Record 2025 tourist arrivals](https://bizenglish.adaderana.lk/december-tourist-arrivals-drive-sri-lanka-to-record-breaking-2025/)

**Evidence in this repository**
- Baseline scan: [`prompts.csv`](prompts.csv)
- Index checks: [Google](screenshots/2026-10-02-baseline-google-site.png) · [Bing](screenshots/2026-10-02-baseline-bing-site.png)
- Lighthouse: [`lighthouse/`](lighthouse/)
