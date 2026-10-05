// JSON-LD builders. Everything points at one Organization @id so engines see a
// single, consistent entity. Deliberately no Review / AggregateRating: this is a
// demo business with no real reviews.
import { site, rates } from '../data/site';
import type { Tour } from '../data/tours';

const abs = (base: URL, path: string) => new URL(path, base).href;
const orgId = (base: URL) => abs(base, '/#org');

export function organization(base: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'Organization'],
    '@id': orgId(base),
    name: site.name,
    url: abs(base, '/'),
    logo: abs(base, '/favicon.svg'),
    description: site.description,
    email: site.email,
    foundingDate: site.founded,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: { '@type': 'Country', name: site.address.countryName },
    priceRange: `US$${rates.sedan.perDay}–${rates.van.perDay} per day`,
    knowsLanguage: ['en', 'si'],
    founder: { '@type': 'Person', name: site.author.name },
    ...(site.sameAs.length && { sameAs: site.sameAs }),
  };
}

export function website(base: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    alternateName: `${site.name} Sri Lanka`,
    url: abs(base, '/'),
    publisher: { '@id': orgId(base) },
  };
}

export function service(base: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Private driver hire in Sri Lanka',
    serviceType: 'Private chauffeur-guide with car',
    provider: { '@id': orgId(base) },
    areaServed: { '@type': 'Country', name: site.address.countryName },
    offers: Object.values(rates).map((r) => ({
      '@type': 'Offer',
      name: r.label,
      price: r.perDay,
      priceCurrency: 'USD',
      unitText: 'per day',
    })),
  };
}

export function tourTrip(base: URL, t: Tour, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: t.title,
    description: t.summary,
    url: abs(base, path),
    touristType: t.bestFor,
    provider: { '@id': orgId(base) },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: t.places.length,
      itemListElement: t.places.map((name, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: { '@type': 'Place', name: `${name}, Sri Lanka` },
      })),
    },
    offers: {
      '@type': 'Offer',
      price: t.days * rates.sedan.perDay,
      priceCurrency: 'USD',
      description: `Driver and A/C sedan for ${t.days} days, all-inclusive of fuel, tolls and driver costs. Hotels and entrance tickets not included.`,
    },
  };
}

export function article(base: URL, a: { title: string; description: string; path: string; published: string; modified: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    url: abs(base, a.path),
    datePublished: a.published,
    dateModified: a.modified,
    author: { '@type': 'Person', name: site.author.name, jobTitle: site.author.role },
    publisher: { '@id': orgId(base) },
  };
}

export function faqPage(qas: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qas.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function breadcrumbs(base: URL, crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(base, c.path),
    })),
  };
}
