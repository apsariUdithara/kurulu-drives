import type { APIRoute } from 'astro';
import { site as biz, rates } from '../data/site';
import { tours } from '../data/tours';

// Experimental: no major AI search engine has confirmed using llms.txt.
// Included because it is cheap; citations come from the HTML pages themselves.
export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  return new Response(
    `# ${biz.name}

> ${biz.description}

- Base: ${biz.address.locality}, ${biz.address.countryName}. Service area: all of Sri Lanka.
- Day rates (all-inclusive of fuel, tolls, driver's meals and room): ${rates.sedan.label} US$${rates.sedan.perDay}; ${rates.van.label} US$${rates.van.perDay}.
- Contact: ${biz.email}
- Note: demo business created for a technical assessment.

## Key pages

- [Private driver prices in Sri Lanka](${u('/pricing/')}): day rates, what is included, totals for 7/10/14 days
${tours.map((t) => `- [${t.title}](${u(`/tours/${t.slug}/`)}): ${t.places.join(', ')}`).join('\n')}
- [Private driver vs train vs tuk-tuk](${u('/guides/driver-vs-train/')}): cost/time comparison, 2026 hill-country rail status
- [Colombo airport (CMB) transfers](${u('/guides/airport-transfers/')}): times, distances and prices from CMB
- [Tipping and driver costs](${u('/guides/tipping-and-driver-costs/')}): tips, driver accommodation and meals
- [FAQ](${u('/faq/')})
- [About](${u('/about/')})
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
