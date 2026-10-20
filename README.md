# iamandris

Persönliche Portfolio-Website von Maxim Andris im rohen Web-Brutalismus. Zweisprachig (Deutsch und Englisch), mit Hell- und Dunkelmodus.

## Stack

React 19, Vite, TypeScript, `react-router`. Reines CSS, keine UI-, Icon- oder Animations-Library, keine Webfonts.

## Entwicklung

```
npm install
npm run dev       # Entwicklungsserver
npm run build     # tsc + vite build
npm run preview
```

## Struktur

- `src/pages/` – Startseite mit Hero, Projekt-Karussell, Über mich und Kontakt; Datenschutz und Impressum
- `src/i18n/` – Texte in `de.ts` und `en.ts`, Projekte unter `showcase.projects`
- `src/lib/` – Links und Projektbilder (`projectImages.ts`)
- `src/styles/` – Design-Tokens und globale Styles

## Hinweise

- Die Seite ist eine Single-Page-App. Direktaufrufe von `/de/...` brauchen beim Hosting einen Rewrite auf `index.html`.
- Die englischen Rechtstexte sind noch Entwürfe.
