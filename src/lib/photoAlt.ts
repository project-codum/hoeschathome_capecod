import type { Locale } from '../i18n';

const photoAltText: Record<string, Record<Locale, string>> = {
  '01-exterior-hero.png': {
    de: 'Cape-Cod-Haus am Wasser mit Poolterrasse und Blick auf die Bucht.',
    en: 'Cape Cod waterfront home with pool terrace and bay views.',
  },
  '02-waterfront-deck.png': {
    de: 'Terrasse direkt am Wasser mit Sitzbereich und Sonnenschirmen.',
    en: 'Waterfront terrace with seating and umbrellas.',
  },
  '03-pool-terrace.png': {
    de: 'Poolterrasse mit Blick auf das Wasser.',
    en: 'Pool terrace with views over the water.',
  },
  '04-main-bedroom.png': {
    de: 'Helles Schlafzimmer mit Doppelbett und maritimen Details.',
    en: 'Bright bedroom with a double bed and coastal details.',
  },
  '05-guest-room-corner.png': {
    de: 'Gemütliche Gästezimmerecke mit Sessel und Küstendekoration.',
    en: 'Cozy guest room corner with an armchair and coastal decor.',
  },
  '07-kitchen-dining.png': {
    de: 'Offene Küche und Essbereich mit viel Tageslicht.',
    en: 'Open kitchen and dining area with plenty of daylight.',
  },
  '08-living-area.png': {
    de: 'Heller Wohnbereich mit Blick Richtung Wasser.',
    en: 'Bright living area facing the water.',
  },
  '09-coastal-detail-vignette.png': {
    de: 'Küstendetail im Haus mit Blick nach draußen.',
    en: 'Coastal interior detail with an outdoor view.',
  },
  '10-dock-arrival-waterfront.jpeg': {
    de: 'Steg zum Cape-Cod-Haus direkt am Wasser.',
    en: 'Dock leading to the Cape Cod waterfront home.',
  },
  '11-waterfront-deck-umbrellas.jpeg': {
    de: 'Große Terrasse am Wasser mit Esstisch und grünen Sonnenschirmen.',
    en: 'Large waterfront deck with dining table and green umbrellas.',
  },
  '12-adirondack-chairs-water-view.jpeg': {
    de: 'Adirondack-Stühle mit Blick über das Wasser.',
    en: 'Adirondack chairs overlooking the water.',
  },
  '13-blue-crab-bedroom.jpeg': {
    de: 'Schlafzimmer mit Doppelbett und blauem Krabbenbild.',
    en: 'Bedroom with a double bed and blue crab artwork.',
  },
  '14-tower-office-water-view.jpeg': {
    de: 'Kleines Büro im Türmchen mit weitem Wasserblick.',
    en: 'Small tower office with wide water views.',
  },
  '15-bunk-room-lounge.jpeg': {
    de: 'Stockbettzimmer mit Sofa und Holzboden.',
    en: 'Bunk room with sofa and wood floor.',
  },
  '16-harbor-water-view.jpeg': {
    de: 'Blick über das Wasser und die Häuser am Ufer von Hyannis.',
    en: 'View across the water toward waterfront homes in Hyannis.',
  },
  '17-kayaks-on-dock.jpeg': {
    de: 'Zwei Personen mit Kayaks auf dem Steg am Wasser.',
    en: 'Two people with kayaks on the waterfront dock.',
  },
  '18-pool-waterfront.jpeg': {
    de: 'Pool direkt am Wasser mit Steinmauer und Buchtblick.',
    en: 'Waterfront pool with stone wall and bay view.',
  },
  '19-terrace-dinner-evening.jpeg': {
    de: 'Gedeckter Terrassentisch am Abend.',
    en: 'Set terrace table in the evening.',
  },
  '20-sunset-shoreline.jpeg': {
    de: 'Sonnenuntergang über der ruhigen Cape-Cod-Küste.',
    en: 'Sunset over the calm Cape Cod shoreline.',
  },
  '21-sailboat-blue-water.jpeg': {
    de: 'Kleines Segelboot auf blauem Wasser.',
    en: 'Small sailboat on blue water.',
  },
  '22-harbor-sunset-dock.jpeg': {
    de: 'Sonnenuntergang über Hafenstegen und Booten.',
    en: 'Sunset over harbor docks and boats.',
  },
};

export const getPhotoAlt = (path: string, locale: Locale, fallbackPrefix: string) => {
  const filename = path.split('/').pop() ?? '';
  const knownAlt = photoAltText[filename]?.[locale];

  if (knownAlt) {
    return knownAlt;
  }

  const label = filename
    .replace(/\.[^.]+$/, '')
    .replace(/^\d+-/, '')
    .replace(/-/g, ' ');

  return `${fallbackPrefix}: ${label}`;
};
