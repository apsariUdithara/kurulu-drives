# Kurulu Drives

A demo website for a private driver and tour service in Sri Lanka, built to show **AI Search Optimisation (AISO)**: making a business easy for ChatGPT, Perplexity, Gemini, Copilot and Google's AI features to find, quote and cite.

**Live site:** https://kurulu-drives.vercel.app · **AISO report:** [docs/AISO-REPORT.md](docs/AISO-REPORT.md)

[![Kurulu Drives home page: private drivers and tours across Sri Lanka, with day rates and a tea estate photo](docs/screenshots/home.png)](https://kurulu-drives.vercel.app)

> **Demo business.** Kurulu Drives, its people and its email address are fictional, and no bookings are taken. The travel facts (distances, 2026 rail status, tipping guidance, market prices) are real and sourced on each page. There are no reviews, ratings or testimonials, because there are no real customers.

## The business

- **What:** English-speaking chauffeur-guides with air-conditioned cars and vans: multi-day round trips, Colombo airport (CMB) transfers and day trips.
- **Where:** based in Kandy, driving all over Sri Lanka.
- **Who for:** travellers from the UK, Europe, Australia and India, aged 25–55, planning a 7–14 day trip and researching it with AI assistants.
- **Price:** US$60/day by sedan, US$85/day by van, including fuel, tolls and the driver's meals and room.

## Results so far (2 October 2026)

The work follows the AISO loop: **Scan → Score → Generate → Publish → Re-scan**. Full details in the [report](docs/AISO-REPORT.md).

| Step | Result | Evidence |
|---|---|---|
| **Scan** (before indexing) | Not indexed on Google or Bing; 8 priority prompts asked on ChatGPT (search) and Perplexity | [Google](docs/screenshots/2026-10-02-baseline-google-site.png), [Bing](docs/screenshots/2026-10-02-baseline-bing-site.png), [`prompts.csv`](docs/prompts.csv) |
| **Score** | Kurulu Drives cited in **0 of 16** answers; **5 of 16** recommended a Kandy–Ella train that is not running end to end in 2026; ChatGPT credited the brand with another company's reviews | [`prompts.csv`](docs/prompts.csv), [report §4](docs/AISO-REPORT.md#4-score) |
| **Generate** | 12 answer-first pages; Lighthouse mobile on the live site **100 / 100 / 100 / 100** (from 84 on the first production build) | [Lighthouse reports](docs/lighthouse/) |
| **Publish** | Google Search Console verified, sitemap read with **Success**; Bing Webmaster Tools imported; all URLs submitted through **IndexNow** | [verified](docs/screenshots/2026-10-02-gsc-ownership-verified.png), [sitemap](docs/screenshots/2026-10-02-gsc-sitemap-success.png) |
| **Re-scan** | The same prompts 2 and 4 weeks after indexing | [report §7](docs/AISO-REPORT.md#7-re-scan-measurement-and-expectations) |

## How the site is optimised for AI search

| What | Why |
|---|---|
| Fully static HTML, no client-side JavaScript | AI crawlers such as GPTBot, ClaudeBot and PerplexityBot do not run JavaScript; every price and table is in the first response |
| Each page answers its question in the first sentence, then a "Key facts" box | Short, factual passages are what AI answers quote; the Key facts on home and pricing also say "Demo business" |
| Question-style headings with "On this page" links, at least one table per content page | Matches how people ask; tables are easy to extract; each answer has its own link |
| Named, dated sources on every statistic, plus a short quote per guide | Research (GEO paper, KDD 2024) found sources and quotations raise citation rates; 2026 rail status kept current |
| One source of truth for business details (`src/data/site.ts`) | The name, prices and contact details are identical on every page and in the structured data |
| JSON-LD structured data linked to one `#org` entity | Search engines see one consistent business: Organization, Service, TouristTrip, Article, FAQPage, BreadcrumbList. No Review or AggregateRating, on purpose |
| `robots.txt` lists search bots and training bots separately | They are independent switches (e.g. OAI-SearchBot vs GPTBot); both are allowed |
| Sitemap with `lastmod`, canonical URLs, unique titles and descriptions; `/sitemap.xml` and no-trailing-slash URLs redirect (308) | Standard indexing in Google and Bing (ChatGPT search and Copilot rely on Bing); one URL per page |
| IndexNow key file | Bing and other engines are told about new and changed pages straight away |
| Overview pages for tours and guides, with breadcrumbs | One page answers "which tours are there?"; Home › Tours › tour |
| Share images (1200×630) and large Twitter cards | Link previews in chat apps and some AI answer cards |
| Phone-sized photos (640/800/1200 px WebP) and an inlined 2 KB stylesheet | Fast on mobile: Lighthouse performance 100, LCP under 2 s on the live site |
| `llms.txt` | Experimental: no engine has confirmed using it; included because it costs nothing |

## Pages

| URL | Answers |
|---|---|
| `/` | Who the business is, services, rates, itineraries |
| `/pricing/` | How much does a private driver in Sri Lanka cost? Also day trips from Kandy |
| `/tours/` | The 7, 10 and 14-day tours compared |
| `/tours/7-day-classic/`, `/tours/10-day-highlights/`, `/tours/14-day-grand-tour/` | Day-by-day itineraries with distances, drive times and prices |
| `/guides/` | Overview of the travel guides |
| `/guides/driver-vs-train/` | Driver vs train vs tuk-tuk, and the 2026 Kandy–Ella rail status |
| `/guides/airport-transfers/` | Colombo airport transfer times and prices |
| `/guides/tipping-and-driver-costs/` | Tipping a driver, and who pays for the driver's food and room |
| `/faq/` | 15 common questions |
| `/about/` | The business, and why it is a demo |

## Run it locally

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview    # serve the built site
```

To see what an AI crawler receives: `npm run build`, `npm run preview`, then `curl -A "GPTBot" http://localhost:4321/pricing/`. Run Lighthouse against `npm run preview` or the live site, not `npm run dev`, which adds development scripts.

## Project structure

```text
src/
├── data/
│   ├── site.ts        business details, day rates, airport transfer prices, verification token
│   ├── tours.ts       the three itineraries, day by day
│   └── photos.ts      photo files, alt text and credits
├── lib/schema.ts      JSON-LD builders
├── layouts/Base.astro meta tags, share images, structured data, header, footer, "On this page" links
├── components/        KeyFacts, Sources, AuthorBox, Cta, Photo
├── pages/             one file per page; tours/[slug].astro builds all three tours;
│                      tours/index.astro and guides/index.astro are the overview pages;
│                      robots.txt.ts and llms.txt.ts generate those files
└── styles/global.css  the only stylesheet (inlined at build)
public/                favicon, photos, share images, IndexNow key file
docs/
├── AISO-REPORT.md     the submission report
├── prompts.csv        baseline AI visibility scan
├── screenshots/       index checks, Search Console, home page
└── lighthouse/        Lighthouse reports (live site and local build)
astro.config.mjs       site URL, sitemap, build settings
vercel.json            trailing-slash and /sitemap.xml redirects
```

**Changing content:** prices, distances and business details live in `src/data/`. Change a rate in `site.ts` and every page, table, total and JSON-LD block updates on the next build. Update `site.lastUpdated` when content changes; it drives the "Last updated" dates and the sitemap `lastmod`.

## Deploying

The site deploys to Vercel from this repository; every push to `main` redeploys. Already set up:

- `site` in `astro.config.mjs` is the live URL, used by canonical URLs, the sitemap, `robots.txt`, `llms.txt` and the structured data.
- Google Search Console verification token in `site.ts`; `/sitemap-index.xml` submitted to Google and Bing.
- Vercel Web Analytics enabled.
- IndexNow key file in `public/`. After publishing new or changed pages, POST their URLs to `https://api.indexnow.org/indexnow` with the key.

## Stack

[Astro](https://astro.build) 7 (static output) and `@astrojs/sitemap`. No other dependencies, no client-side framework.

## Photo credits

Photos from [Unsplash](https://unsplash.com), used under the Unsplash License: Erik Esly (tea estate, Nuwara Eliya), Dylan Shaw (Sigiriya), Hendrik Cornelissen (Nine Arches Bridge), Udara Karunarathna (Minneriya elephants).
