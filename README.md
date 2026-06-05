# Cape Cod Beach House

Astro + React site for an owner-run Cape Cod beach house Airbnb with localized routes (`de`, `en`).

## Commands

```sh
npm run dev
npm run build
npm run preview
npm run check
npm run lint
```

## Project structure

```text
src/
  pages/
    index.astro
    calendar.astro
    galerie.astro
    [locale]/index.astro
    [locale]/calendar.astro
    [locale]/galerie.astro
  pages-templates/
    Home.astro
    Calendar.astro
    Gallery.astro
  components/
    HomePage.astro
    Hero.astro
    Footer.astro
    sections/
  content/
    home/de.json
    home/en.json
    calendarDE.json
    calendarEN.json
    config.ts
  i18n/
    index.ts
    de.ts
    en.ts
    types.ts
```

## Booking

- NOTE: This feature is currently turned OFF!
- Booking is handled through `PUBLIC_BOOKING_URL`.
- Set `PUBLIC_BOOKING_URL=[ADD BOOKING LINK]` in the environment when the final booking page is ready.
- Until then, the availability page intentionally shows the `[ADD BOOKING LINK]` placeholder.
