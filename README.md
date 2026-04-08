# CalendarDaily

CalendarDaily is a simple planner-style web app built with Next.js, React, TypeScript, and Tailwind CSS.

It provides:
- A month-by-month 2026 calendar view
- Click-to-select date ranges inside each month
- Per-month note inputs
- Local persistence via `localStorage`

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (installed; currently not used in core flow)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## How It Works

### App entry

- `app/page.tsx` renders the main wall page.
- `pages/Wall/Page.tsx` centers and displays the calendar card.
- `pages/Calender/CalenderPage.tsx` controls month navigation and layout.

### Calendar behavior

- Calendar month metadata comes from `data/calender2026.json`.
- Grid rendering and range selection logic live in `components/Calender/Calender.tsx`.
- Selected range is saved per month with key format:
	- `calendar-range-<monthIndex>`

### Notes behavior

- `components/Notes/Notes.tsx` renders 5 note inputs per month.
- Notes are saved with key format:
	- `note-<monthIndex>-<noteId>`

### Storage helpers

- `store/localstore.ts` wraps `localStorage` access with client-side guards.

## Data Files

- `data/calender2026.json`
	- Source of year, month names, days in month, and starting weekday.
- `data/Background.json`
	- Maps each month to card background color and hero image URL.

## Images and Remote Sources

- Static UI image assets are in `public/`.
- External month images are loaded from Unsplash domains allowed in `next.config.ts`:
	- `images.unsplash.com`
	- `plus.unsplash.com`

## Project Structure

```text
app/
	globals.css
	layout.tsx
	page.tsx
components/
	Button/
	Calender/
	Notes/
data/
	Background.json
	calender2026.json
pages/
	Calender/
	Wall/
store/
	localstore.ts
```

## Customization Guide

### Update calendar year data

Edit `data/calender2026.json` with correct:
- `days` per month
- `startDay` (`0 = Sun` ... `6 = Sat`)

### Change month visuals

Edit `data/Background.json`:
- `color` to change Tailwind background class
- `image` to swap monthly hero image

### Change note capacity

In `components/Notes/Notes.tsx`, add/remove `Input` rows.

## Notes for Contributors

- Component and folder names currently use the spelling `Calender` in multiple places.
	Keep this in mind when searching files or adding imports.
- The app currently stores all user data in browser `localStorage`.
	Clearing browser storage will remove saved ranges and notes.

## Deployment

Deploy as a standard Next.js app (for example on Vercel):

1. Build with `npm run build`
2. Start with `npm run start` or use your hosting provider's Next.js runtime


