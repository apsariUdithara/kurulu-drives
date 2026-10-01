// Photos from Unsplash (free under the Unsplash License), stored in public/images/ as
// <file>-640.webp and <file>-1200.webp, cropped to 3:2. Credits are shown under each photo.
export const photos = {
  tea: {
    file: 'tea-nuwara-eliya',
    alt: 'Misty tea plantation on a hillside near Nuwara Eliya',
    by: 'Erik Esly',
    url: 'https://unsplash.com/photos/ZWdrM9IBBIE',
  },
  sigiriya: {
    file: 'sigiriya',
    alt: 'Aerial view of Sigiriya rock fortress rising above the forest',
    by: 'Dylan Shaw',
    url: 'https://unsplash.com/photos/smUAKwMT8XA',
  },
  nineArches: {
    file: 'nine-arches-bridge',
    alt: 'Blue train crossing the Nine Arches Bridge near Ella',
    by: 'Hendrik Cornelissen',
    url: 'https://unsplash.com/photos/jpTT_SAU034',
  },
  elephants: {
    file: 'minneriya-elephants',
    alt: 'Two elephants grazing in Minneriya National Park',
    by: 'Udara Karunarathna',
    url: 'https://unsplash.com/photos/d8Lw4p8MVOg',
  },
};

export type PhotoKey = keyof typeof photos;
