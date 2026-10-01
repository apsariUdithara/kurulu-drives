// Itineraries. Distances and drive times are approximate road figures;
// "km: 0" means a sightseeing day without a long transfer.
import type { PhotoKey } from './photos';

export type Day = { route: string; km: number; hours: string; highlights: string; overnight: string };
export type Tour = {
  slug: string;
  days: number;
  title: string;
  summary: string;
  bestFor: string;
  photo: PhotoKey;
  places: string[];
  plan: Day[];
};

export const tours: Tour[] = [
  {
    slug: '7-day-classic',
    photo: 'sigiriya',
    days: 7,
    title: '7-day Sri Lanka itinerary with a private driver',
    summary:
      'A 7-day loop from Colombo airport through the Cultural Triangle (Sigiriya, Dambulla), Kandy, the tea country around Nuwara Eliya, Ella and the south coast at Galle. Never more than about 5 hours of driving in a day.',
    bestFor: 'First-time visitors with one week who want the highlights without rushing.',
    places: ['Sigiriya', 'Dambulla', 'Kandy', 'Nuwara Eliya', 'Ella', 'Galle'],
    plan: [
      { route: 'Colombo airport (CMB) → Sigiriya', km: 150, hours: '3.5–4 h', highlights: 'Arrival, lunch stop at Kurunegala', overnight: 'Sigiriya' },
      { route: 'Sigiriya & Dambulla', km: 40, hours: '1 h', highlights: 'Sigiriya Rock at sunrise, Dambulla Cave Temple', overnight: 'Sigiriya' },
      { route: 'Sigiriya → Kandy', km: 90, hours: '2.5–3 h', highlights: 'Spice garden at Matale, Temple of the Tooth', overnight: 'Kandy' },
      { route: 'Kandy → Nuwara Eliya', km: 77, hours: '3 h', highlights: 'Ramboda Falls, tea factory visit', overnight: 'Nuwara Eliya' },
      { route: 'Nuwara Eliya → Ella', km: 60, hours: '2.5 h (or train from Nanu Oya)', highlights: 'Scenic train Nanu Oya → Ella; your driver meets you at Ella', overnight: 'Ella' },
      { route: 'Ella → Galle', km: 200, hours: '4.5–5 h', highlights: 'Nine Arches Bridge early, Southern Expressway to the coast', overnight: 'Galle' },
      { route: 'Galle → Colombo airport (CMB)', km: 150, hours: '2–2.5 h', highlights: 'Galle Fort walk, expressway to the airport', overnight: '—' },
    ],
  },
  {
    slug: '10-day-highlights',
    photo: 'elephants',
    days: 10,
    title: '10-day Sri Lanka itinerary with a private driver',
    summary:
      'A 10-day round trip covering the Cultural Triangle (Sigiriya, Polonnaruwa, Minneriya elephants), Kandy, the hill country, Ella, a Yala safari and the beaches of Mirissa and Galle.',
    bestFor: 'Couples and families who want culture, tea country, wildlife and beach in one trip.',
    places: ['Sigiriya', 'Polonnaruwa', 'Minneriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Mirissa', 'Galle'],
    plan: [
      { route: 'Colombo airport (CMB) → Sigiriya', km: 150, hours: '3.5–4 h', highlights: 'Arrival and rest', overnight: 'Sigiriya' },
      { route: 'Sigiriya & Dambulla', km: 40, hours: '1 h', highlights: 'Sigiriya Rock, Dambulla Cave Temple', overnight: 'Sigiriya' },
      { route: 'Polonnaruwa & Minneriya', km: 120, hours: '2.5 h', highlights: 'Ancient city by bicycle, afternoon elephant safari', overnight: 'Sigiriya' },
      { route: 'Sigiriya → Kandy', km: 90, hours: '2.5–3 h', highlights: 'Spice garden, Temple of the Tooth', overnight: 'Kandy' },
      { route: 'Kandy', km: 15, hours: '0.5 h', highlights: 'Peradeniya Botanical Gardens, Kandy Lake, cultural dance show', overnight: 'Kandy' },
      { route: 'Kandy → Nuwara Eliya', km: 77, hours: '3 h', highlights: 'Ramboda Falls, tea factory', overnight: 'Nuwara Eliya' },
      { route: 'Nuwara Eliya → Ella', km: 60, hours: '2.5 h (or train from Nanu Oya)', highlights: 'Scenic train, Little Adam’s Peak at sunset', overnight: 'Ella' },
      { route: 'Ella → Tissamaharama (Yala)', km: 85, hours: '2 h', highlights: 'Nine Arches Bridge, Ravana Falls, afternoon Yala safari', overnight: 'Tissamaharama' },
      { route: 'Tissamaharama → Mirissa', km: 110, hours: '2.5 h', highlights: 'Beach afternoon; whale watching Dec–Apr', overnight: 'Mirissa' },
      { route: 'Mirissa → Galle → Colombo airport (CMB)', km: 180, hours: '3 h + stops', highlights: 'Galle Fort, expressway to the airport', overnight: '—' },
    ],
  },
  {
    slug: '14-day-grand-tour',
    photo: 'nineArches',
    days: 14,
    title: '14-day Sri Lanka round trip by car with a private driver',
    summary:
      'A 14-day grand tour adding the ancient capital Anuradhapura, Horton Plains and extra beach days to the classic route. A relaxed pace with several short-drive days.',
    bestFor: 'Travellers with two weeks who want a relaxed pace and the complete island loop.',
    places: ['Anuradhapura', 'Sigiriya', 'Polonnaruwa', 'Kandy', 'Nuwara Eliya', 'Horton Plains', 'Ella', 'Yala', 'Mirissa', 'Galle'],
    plan: [
      { route: 'Colombo airport (CMB) → Anuradhapura', km: 180, hours: '4 h', highlights: 'Arrival, afternoon rest', overnight: 'Anuradhapura' },
      { route: 'Anuradhapura → Sigiriya', km: 75, hours: '2 h', highlights: 'Sacred city, Sri Maha Bodhi, then on to Sigiriya', overnight: 'Sigiriya' },
      { route: 'Sigiriya & Dambulla', km: 40, hours: '1 h', highlights: 'Sigiriya Rock, Dambulla Cave Temple', overnight: 'Sigiriya' },
      { route: 'Polonnaruwa & Minneriya', km: 120, hours: '2.5 h', highlights: 'Ancient city, elephant safari', overnight: 'Sigiriya' },
      { route: 'Sigiriya → Kandy', km: 90, hours: '2.5–3 h', highlights: 'Spice garden, Temple of the Tooth', overnight: 'Kandy' },
      { route: 'Kandy', km: 15, hours: '0.5 h', highlights: 'Botanical gardens, city walk, dance show', overnight: 'Kandy' },
      { route: 'Kandy → Nuwara Eliya', km: 77, hours: '3 h', highlights: 'Ramboda Falls, tea factory', overnight: 'Nuwara Eliya' },
      { route: 'Horton Plains', km: 70, hours: '2 h return', highlights: 'World’s End hike (start early)', overnight: 'Nuwara Eliya' },
      { route: 'Nuwara Eliya → Ella', km: 60, hours: '2.5 h (or train from Nanu Oya)', highlights: 'Scenic train to Ella', overnight: 'Ella' },
      { route: 'Ella', km: 10, hours: '—', highlights: 'Little Adam’s Peak, Nine Arches Bridge, Ella Rock', overnight: 'Ella' },
      { route: 'Ella → Tissamaharama (Yala)', km: 85, hours: '2 h', highlights: 'Afternoon Yala safari', overnight: 'Tissamaharama' },
      { route: 'Tissamaharama → Mirissa', km: 110, hours: '2.5 h', highlights: 'Beach time', overnight: 'Mirissa' },
      { route: 'Mirissa', km: 0, hours: '—', highlights: 'Whale watching (Dec–Apr) or rest day — no driving', overnight: 'Mirissa' },
      { route: 'Mirissa → Galle → Colombo airport (CMB)', km: 180, hours: '3 h + stops', highlights: 'Galle Fort, expressway to the airport', overnight: '—' },
    ],
  },
];

export const totalKm = (t: Tour) => t.plan.reduce((sum, d) => sum + d.km, 0);
