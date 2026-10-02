// Single source of truth for the business entity. Every page and every JSON-LD
// block reads from here so name/contact details stay identical everywhere.

export const site = {
  name: 'Kurulu Drives',
  tagline: 'Private drivers & tours across Sri Lanka, based in Kandy',
  description:
    'Kurulu Drives provides English-speaking private chauffeur-guides with air-conditioned cars and vans for multi-day round trips, Colombo airport (CMB) transfers and day trips across Sri Lanka, from a base in Kandy.',
  // Demo business: replace with a real inbox before any real launch.
  email: 'hello@kurulu-drives.example',
  address: { locality: 'Kandy', region: 'Central Province', country: 'LK', countryName: 'Sri Lanka' },
  founded: '2026',
  // Add Google Business Profile, TripAdvisor, Facebook etc. here once they exist.
  sameAs: [] as string[],
  lastUpdated: '2026-10-02',
  usdToLkr: 330, // approx. market rate, late Sept 2026
  author: {
    name: 'Ruwan Jayasinghe',
    role: 'Founder & lead driver-guide (fictional person, demo business)',
  },
  driverQuoteName: 'Chaminda, Kurulu Drives driver-guide (fictional, demo business)',
  // Search console verification tokens; leave empty until you have them.
  googleVerification: 'RtAZKpOFZZ965yFJshyqOS8bwPGwFICeazcgcQUbOKc',
  bingVerification: '',
};

// Day rates in USD. Include fuel, driver's meals & room, highway tolls, parking.
export const rates = {
  sedan: { label: 'A/C sedan (1–3 travellers)', perDay: 60 },
  van: { label: 'A/C van (4–8 travellers)', perDay: 85 },
};

export const lkr = (usd: number) => `LKR ${(usd * site.usdToLkr).toLocaleString('en-US')}`;

// One-way transfers from Colombo airport (CMB). Times are typical door-to-door.
export const transfers = [
  { to: 'Negombo', km: 10, time: '20–30 min', sedan: 15, van: 25 },
  { to: 'Colombo city', km: 35, time: '45–75 min', sedan: 25, van: 35 },
  { to: 'Kandy', km: 115, time: '3–3.5 h', sedan: 55, van: 75 },
  { to: 'Sigiriya', km: 150, time: '3.5–4 h', sedan: 65, van: 90 },
  { to: 'Galle', km: 150, time: '2–2.5 h', sedan: 55, van: 80 },
  { to: 'Mirissa', km: 180, time: '2.5–3 h', sedan: 65, van: 90 },
  { to: 'Ella', km: 300, time: '5–6 h', sedan: 95, van: 130 },
];
