# METRA Baulogistik Website – Agent-Dokumentation

> **Sprache**: Deutsch (Website-Inhalt), Gemischt Deutsch/Englisch in Code-Kommentaren und Agent-Docs
> **Framework**: Astro 5.x mit Static Site Generation
> **Styling**: Tailwind CSS 3.x
> **Deployment**: Netlify

## Projektübersicht

Dies ist die Unternehmenswebsite der **METRA Baulogistik & Projektsteuerung GmbH**, ein Bau-logistik- und Projektsteuerungsunternehmen mit Sitz in Köln. Es handelt sich um eine statische, SEO-optimierte, barrierefreie Multi-Page-Website, die auf Netlify gehostet wird.

### Kernmerkmale

- **Deutschsprachige** Business-Website für die Baubranche/Logistik
- **Dark-Theme** Design mit Gold-Akzentfarbe (`#dab252`)
- **Mobile-first** responsives Design
- **Barrierefreiheit** (WCAG): ARIA-Labels, semantisches HTML, Tastaturnavigation, Reduced-Motion-Support, Skip-Links, Fokus-Fallen
- **SEO-optimiert**: Schema.org Structured Data, Meta-Tags, Open Graph, Twitter Cards, Sitemap, Robots.txt, Canonical URLs
- **Cookie-Consent-Banner** (localStorage-basiert, DSGVO-konform)
- **Kontaktformular** via Web3Forms
- **WhatsApp-Integration** für Direktnachrichten
- **Kein automatisierter Test-Suite** – Testing erfolgt manuell
- **ESM-only** Projekt (`"type": "module"` in package.json)

---

## Technologie-Stack

| Kategorie | Technologie | Version |
|-----------|------------|---------|
| Framework | Astro | ^5.17.1 |
| Styling | Tailwind CSS | ^3.4.19 |
| PostCSS | autoprefixer | ^10.4.27 |
| TypeScript | Astro strict config | – |
| Deployment | Netlify | Static Hosting |
| Formular-Handling | Web3Forms | Externe API |
| Schriftart | Inter | Self-hosted woff2 (Regular, 600, 700) |
| Bildoptimierung | Sharp | ^0.34.5 |

---

## Projektstruktur

```
/
├── src/
│   ├── components/              # Wiederverwendbare Astro-Komponenten
│   │   ├── CookieBanner.astro   # DSGVO-konformes Cookie-Consent-Banner
│   │   ├── Footer.astro         # Footer mit Links & Kontaktinfo
│   │   ├── Header.astro         # Navigation mit Mobile-Menü
│   │   └── WhatsAppButton.astro # Floatender WhatsApp-CTA-Button
│   ├── layouts/
│   │   └── Layout.astro         # Basis-HTML-Layout mit SEO, Schema.org
│   ├── pages/                   # File-based Routing
│   │   ├── index.astro          # Startseite (Hero, Leistungs-Teaser, 4-Schritte-Prozess, CTA)
│   │   ├── leistungen.astro     # Leistungsseite (8 detaillierte Service-Sektionen)
│   │   ├── kontakt.astro        # Kontaktseite mit Web3Forms-Formular
│   │   ├── datenschutz.astro    # Datenschutzerklärung (DSGVO-konform)
│   │   ├── impressum.astro      # Impressum (§ 5 TMG)
│   │   └── 404.astro            # Benutzerdefinierte 404-Fehlerseite
│   └── styles/
│       └── global.css           # Tailwind-Imports + Custom Styles + Fonts
├── public/                      # Statische Assets
│   ├── fonts/                   # Self-hosted Inter (Regular, 600, 700 woff2)
│   ├── images/                  # WebP-Bilder (Logo, Hero, 8 Leistungsbilder)
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── .vscode/                     # VS Code Einstellungen
│   ├── extensions.json
│   └── launch.json
├── astro.config.mjs             # Astro-Konfiguration
├── tailwind.config.js           # Tailwind-Anpassungen (Farben, Fonts, Animationen)
├── postcss.config.js            # PostCSS-Plugins (tailwindcss, autoprefixer)
├── tsconfig.json                # TypeScript strict config
├── netlify.toml                 # Netlify Deployment & Security Headers
└── package.json
```

---

## Build-Befehle

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver (localhost:4321)
npm run dev

# Produktions-Build (Output in ./dist/)
npm run build

# Produktions-Build lokal previewen
npm run preview

# Astro CLI
npm run astro -- --help
```

---

## Konfigurationsdetails

### Astro Config (`astro.config.mjs`)

- **Dev Toolbar**: deaktiviert
- **Output**: `static` (Static Site Generation)
- **Bildoptimierung**: Sharp via `astro/assets/services/sharp`
- **HTML-Komprimierung**: aktiviert (`compressHTML: true`)
- **Build-Format**: `directory`

### Tailwind Config (`tailwind.config.js`)

Custom Theme Extensions:

```javascript
// Farben
background: '#00002e',     // Dunkler Hintergrund
accent: '#dab252',         // Gold-Akzent (Markenfarbe)
secondary: '#c8c7cf',      // Helles Grau für Text
'accent-hover': '#c9a14a', // Dunkleres Gold

// Schriftart
sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']

// Animationen
'fade-in': 'fadeIn 0.6s ease-out'
'fade-in-up': 'fadeInUp 0.6s ease-out'
```

Content-Pfade: `./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`

### PostCSS Config (`postcss.config.js`)

- tailwindcss
- autoprefixer

### TypeScript Config (`tsconfig.json`)

- Erweitert `astro/tsconfigs/strict`
- Include: `.astro/types.d.ts`, `**/*`
- Exclude: `dist`

### Netlify Config (`netlify.toml`)

- **Build-Befehl**: `npm run build`
- **Publish-Verzeichnis**: `dist`
- **Security Headers**:
  - Cache-Control (1 Jahr für statische Assets: Bilder, Fonts, JS, CSS)
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection: 1; mode=block
  - Referrer-Policy: strict-origin-when-cross-origin
  - Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  - Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()
  - Content-Security-Policy (CSP) mit Web3Forms-API-Erlaubnis

---

## Code-Style-Richtlinien

### Astro-Komponenten

1. **Frontmatter zuerst**: TypeScript im Frontmatter für Daten-Definitionen
2. **Props-Interfaces**: Explizite Interfaces für Komponenten-Props (z.B. `interface Props { title?: string; description?: string; }`)
3. **Semantisches HTML**: Korrekte Heading-Hierarchie, Landmarks, ARIA-Labels
4. **Barrierefreiheit**:
   - Alle interaktiven Elemente müssen `aria-label` oder sichtbaren Text haben
   - `focus-visible` Klassen für Tastaturnavigation
   - Skip-Links für Hauptinhalt (`#main-content`)
   - Reduced-Motion Media-Query-Support in global.css

### CSS/Styling

1. **Tailwind-first**: Utility-Klassen verwenden; Custom-CSS nur in `global.css`
2. **Custom Properties**: Tailwind-Theme-Werte verwenden, keine hartkodierten Farben
3. **Responsive Prefix**: Mobile-first (`sm:`, `md:`, `lg:`, `xl:`)
4. **Dark Theme**: Permanently Dark; kein Light-Mode-Toggle
5. **Custom Scrollbar**: Mit Gold-Akzent im Hover-Zustand gestylt

### JavaScript/TypeScript

1. **TypeScript**: Typ-Annotationen in Scripts verwenden (strict config)
2. **IIFE-Pattern**: Client-Scripts in IIFEs wrappen, um globalen Scope zu vermeiden
3. **Null-Checks**: Optional Chaining (`?.`) für DOM-Elemente verwenden
4. **Event Listener**: Bei Bedarf aufräumen (selten in Astro-Static-Sites)
5. **ESM-only**: Alle Scripts verwenden ES-Module-Syntax (kein `require()`)

### Naming Conventions

- **Komponenten**: PascalCase (z.B. `CookieBanner.astro`)
- **Variablen**: camelCase (z.B. `contactInfo`)
- **Konstanten**: UPPER_SNAKE_CASE für echte Konstanten (z.B. `WEB3FORMS_ENDPOINT`)
- **Dateien**: kebab-case für Pages, PascalCase für Komponenten
- **Deutsche Inhalte**: Alle nutzerseitigen Texte sind auf Deutsch

---

## Wichtige Komponenten

### Layout.astro

Basis-Layout mit:
- HTML5-Boilerplate mit deutscher Sprache (`lang="de-DE"`)
- Meta-Tags (SEO, Open Graph, Twitter Cards)
- Schema.org JSON-LD (Organization + LocalBusiness Structured Data)
- Self-hosted Inter-Font Preloading
- Critical CSS Inline für Above-the-fold
- Cookie-Banner-Einbindung
- Skip-to-content Accessibility-Link
- Preconnect zu Web3Forms API

### Header.astro

- Fixed-Position Navigation mit Backdrop-Blur
- Firmenlogo mit Claim-Tagline
- Desktop-Navigation mit Active-Link-Highlighting
- Mobiles Hamburger-Menü mit Slide-out-Drawer
- CTA-Button "Angebot anfordern"
- ARIA-Attribute für Barrierefreiheit
- Client-seitiges JavaScript für Mobile-Menü-Toggle (IIFE-Pattern)
- Focus-Trap für mobiles Menü
- Noscript-Fallback für mobiles Menü
- Active-Link-Detection via `Astro.url.pathname`

### Footer.astro

- 4-Spalten-Layout (Firmeninfo, Leistungen, Unternehmenslinks, Kontakt)
- Kontaktinformationen mit Telefon/E-Mail/WhatsApp
- Rechtliche Links (Impressum, Datenschutz)
- Disclaimer-Hinweis zu Sicherheitsleistungen
- Dynamisches Copyright-Jahr

### CookieBanner.astro

- Fixed-Bottom-Banner mit DSGVO-konformem Cookie-Consent
- Drei Optionen: Alle Akzeptieren, Ablehnen, Nur Essenzielle
- Speichert Präferenz in localStorage (`metra_cookie_consent`)
- Sendet Custom Event bei Annahme für potenzielles Tracking
- Standardmäßig versteckt, gleitet nach 1s hoch, wenn keine Einwilligung vorliegt

### WhatsAppButton.astro

- Fixed-Floating-Button (unten rechts)
- Pulse-Animation beim Hover
- Link zu WhatsApp mit dedizierter WhatsApp-Nummer

---

## Seiten

| Route | Datei | Zweck |
|-------|------|-------|
| `/` | `index.astro` | Startseite mit Hero, Leistungs-Teaser, 4-Schritte-Prozess, CTA-Sektionen |
| `/leistungen` | `leistungen.astro` | Detaillierte Leistungsseite mit 8 Service-Beschreibungen |
| `/kontakt` | `kontakt.astro` | Kontaktformular (Web3Forms), Kontaktinfo, WhatsApp-Link |
| `/impressum` | `impressum.astro` | Rechtliches Impressum (§ 5 TMG) mit Firmendetails |
| `/datenschutz` | `datenschutz.astro` | Datenschutzerklärung (DSGVO-konform) |
| `/404` | `404.astro` | Benutzerdefinierte 404-Fehlerseite |

Jede Seite enthält:
- Individuelles `<Layout>` mit seiten-spezifischem Title, Description, Canonical
- Schema.org BreadcrumbList JSON-LD
- Seiten-spezifische Schema.org Structured Data wo anwendbar (z.B. Service-Schema auf `/leistungen`, ContactPage-Schema auf `/kontakt`)
- `<Header />`, `<Footer />`, `<WhatsAppButton />` Imports (nicht im Layout enthalten)

---

## Kontaktformular-Setup

Das Kontaktformular verwendet **Web3Forms** (konfiguriert in `kontakt.astro`):

```typescript
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '17e31a52-3b0a-42ac-9244-8400b05477ee';
```

**Features:**
- Honeypot-Feld (`botcheck`) für Bot-Schutz
- Client-seitige Validierung (Pflichtfelder)
- Loading-Zustände während der Übermittlung
- Success/Error-Meldungsanzeige
- Privacy-Checkbox (Pflichtfeld)
- Reply-to E-Mail automatisch befüllt
- Formular-Übermittlung via fetch API mit async Handling
- 10-Sekunden-Timeout mit Abort-Controller

---

## Testing

Dieses Projekt enthält **keine** automatisierte Test-Suite. Testing erfolgt manuell.

**Manuelle Testing-Checkliste vor Deployment:**

- [ ] Alle Seiten rendern fehlerfrei (`npm run build`)
- [ ] Responsives Design funktioniert auf Mobile, Tablet, Desktop
- [ ] Navigation funktioniert (inkl. Mobile-Menü-Toggle)
- [ ] Kontaktformular übermittelt korrekt (mit Web3Forms testen)
- [ ] Cookie-Banner erscheint für neue Nutzer
- [ ] WhatsApp-Button öffnet korrekten Chat
- [ ] Keine Console-Fehler
- [ ] Barrierefreiheit: Tastaturnavigation funktioniert
- [ ] Barrierefreiheit: Skip-Link funktioniert
- [ ] Barrierefreiheit: Focus-Indikatoren sichtbar
- [ ] SEO: Meta-Tags auf allen Seiten vorhanden
- [ ] SEO: Schema.org-Daten validieren

---

## Deployment

**Plattform**: Netlify

**Automatische Deployment-Trigger:**
- Push auf `master`-Branch deployt in Production
- Build-Befehl: `npm run build`
- Output-Verzeichnis: `dist`

**Umgebungsvariablen**: Derzeit keine erforderlich (Web3Forms-Key ist hartkodiert)

**Pre-Deployment-Checkliste:**
- [ ] USt-IdNr. in `impressum.astro` ersetzen (aktuell: `DE [USt-IdNr. wird ergänzt]`)
- [ ] Handelsregisternummer in `impressum.astro` ersetzen (aktuell: `[Handelsregisternummer wird ergänzt]`)
- [ ] `sitemap.xml` Daten aktualisieren, falls sich Inhalte signifikant geändert haben

---

## Sicherheitsaspekte

1. **CSP-Headers**: Konfiguriert in `netlify.toml`
   - Default src: 'self'
   - Scripts: 'self' + 'unsafe-inline' (erforderlich für Astro-Inseln)
   - Style src: 'self' + 'unsafe-inline'
   - Img src: 'self' + data:
   - Font src: 'self'
   - Connect: erlaubt Web3Forms API (`https://api.web3forms.com`)
   - Frame ancestors: 'none'
   - Base URI: 'self'
   - Form action: 'self' + `https://api.web3forms.com`

2. **Formular-Sicherheit**:
   - Honeypot-Feld (`botcheck`) muss leer bleiben für Übermittlung
   - Client-seitige Validierung nur; Server validiert bei Web3Forms

3. **Keine sensiblen Daten** im Repository (keine API-Keys, Credentials)

---

## Performance-Optimierungen

- Static Site Generation (kein Server-Runtime nötig)
- Self-hosted Fonts mit `font-display: swap`
- Bildoptimierung via Sharp
- HTML-Komprimierung aktiviert
- Preconnect zu Web3Forms API
- Long-term Caching-Headers für statische Assets (1 Jahr)
- Lazy Loading für Below-the-fold Bilder (`loading="lazy"`)
- Critical CSS Inline für Above-the-fold Content
- `fetchpriority="high"` auf Hero-Bild
- `loading="eager"` auf Hero-Bild

---

## Häufige Probleme

### Web3Forms funktioniert nicht
- Access-Key korrekt prüfen
- Browser-Console auf Netzwerkfehler prüfen
- Sicherstellen, dass `api.web3forms.com` vom Nutzerstandort erreichbar ist

### Cookie-Banner wird nicht angezeigt
- localStorage-Key `metra_cookie_consent` löschen
- JavaScript-Fehler in der Console prüfen

### Styles werden nicht aktualisiert
- Dev-Server neustarten (Tailwind JIT-Mode-Cache)
- Prüfen, ob `tailwind.config.js` Content-Pfade die Dateien enthalten

---

## Externe Abhängigkeiten

| Service | Zweck | URL |
|---------|-------|-----|
| Web3Forms | Kontaktformular-Handling | https://api.web3forms.com |
| WhatsApp | Direktnachrichten | https://wa.me/491738888378 |
| Netlify | Hosting & CDN | https://www.netlify.com |

---

## Firmeninformationen

- **Name**: METRA Baulogistik & Projektsteuerung GmbH
- **Inhaber/Geschäftsführer**: Sascha Trajkovic
- **Adresse**: Im Mediapark 5, 50670 Köln, Deutschland
- **Telefon**: 0800 8888369
- **E-Mail**: info@metra-baulogistik.de
- **Website**: https://www.metra-baulogistik.de

---

## Lizenz & Rechtliches

- Website-Inhalt: © METRA Baulogistik & Projektsteuerung GmbH
- Dies ist proprietärer Code für die Unternehmenswebsite

---

Letzte Aktualisierung: Juni 2026
