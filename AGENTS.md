# METRA Baulogistik Website - Agent Documentation

> **Language**: German (website content), English (code comments mixed with German)
> **Framework**: Astro 5.x with Static Site Generation
> **Styling**: Tailwind CSS 3.x

## Project Overview

This is the corporate website for **METRA Baulogistik & Projektsteuerung GmbH**, a construction logistics and project management company based in Cologne, Germany. The website is a static, SEO-optimized, accessible single-page application (SPA) feel with multiple routes.

### Key Characteristics

- **German-language** business website for the construction/logistics industry
- **Dark theme** design with yellow accent color (#fdf153)
- **Mobile-first responsive** design
- **WCAG accessibility** compliant (ARIA labels, semantic HTML, keyboard navigation, reduced motion support)
- **SEO-optimized** with Schema.org structured data, meta tags, Open Graph, Twitter Cards
- **Cookie consent** banner implemented (localStorage-based, GDPR-compliant)
- **Contact form** via Web3Forms (requires access key configuration)
- **WhatsApp integration** for direct messaging

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Astro | ^5.17.1 |
| Styling | Tailwind CSS | ^3.4.19 |
| PostCSS | autoprefixer | ^10.4.27 |
| Type System | TypeScript (via Astro) | strict config |
| Deployment | Netlify | static hosting |
| Form Handling | Web3Forms | external API |
| Font | Inter | self-hosted woff2 |
| Image Optimization | Sharp | ^0.34.5 |

## Project Structure

```
/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── CookieBanner.astro    # GDPR cookie consent
│   │   ├── Footer.astro          # Site footer with links
│   │   ├── Header.astro          # Navigation header with mobile menu
│   │   └── WhatsAppButton.astro  # Floating WhatsApp CTA
│   ├── layouts/
│   │   └── Layout.astro          # Base HTML layout with SEO, Schema.org
│   ├── pages/               # File-based routing
│   │   ├── index.astro           # Homepage (Hero, Services teaser, Process, CTA)
│   │   ├── leistungen.astro      # Services page (detailed)
│   │   ├── kontakt.astro         # Contact page with Web3Forms
│   │   ├── datenschutz.astro     # Privacy policy (DSGVO)
│   │   └── impressum.astro       # Legal imprint (§ 5 TMG)
│   └── styles/
│       └── global.css            # Tailwind imports + custom styles + fonts
├── public/                  # Static assets
│   ├── fonts/               # Self-hosted Inter font files (regular, 600, 700)
│   ├── images/              # WebP images (logo, hero, 8 service images)
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── .vscode/                 # VS Code settings (extensions.json, launch.json)
├── astro.config.mjs         # Astro configuration (static output, Sharp)
├── tailwind.config.js       # Tailwind customization (colors, fonts, animations)
├── postcss.config.js        # PostCSS plugins (Tailwind + autoprefixer)
├── tsconfig.json            # TypeScript strict config
├── netlify.toml             # Netlify deployment & security headers
└── package.json
```

## Build Commands

```bash
# Install dependencies
npm install

# Development server (localhost:4321)
npm run dev

# Production build (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Astro CLI commands
npm run astro -- --help
```

## Configuration Details

### Astro Config (`astro.config.mjs`)

- **Output**: Static site generation (`output: 'static'`)
- **Dev Toolbar**: Disabled (`devToolbar: { enabled: false }`)
- **Image optimization**: Sharp service enabled
- **HTML compression**: Enabled (`compressHTML: true`)
- **Build format**: Directory-based

### Tailwind Config (`tailwind.config.js`)

Custom theme extensions:

```javascript
// Colors
background: '#17181d',     // Dark background
accent: '#fdf153',         // Yellow accent (brand color)
secondary: '#d2d1d9',      // Light gray text
'accent-hover': '#e5d94a', // Darker yellow

// Font Family
sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']

// Animations
'fade-in': fadeIn 0.6s ease-out
'fade-in-up': fadeInUp 0.6s ease-out
```

### Netlify Config (`netlify.toml`)

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Security headers**: 
  - Cache-Control (1 year for static assets)
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - Content-Security-Policy (CSP) with Web3Forms API allowance

## Code Style Guidelines

### Astro Components

1. **Frontmatter first**: Use TypeScript in frontmatter for data definitions
2. **Props interfaces**: Define explicit interfaces for component props
3. **Semantic HTML**: Use proper heading hierarchy, landmarks, ARIA labels
4. **Accessibility**:
   - All interactive elements must have `aria-label` or visible text
   - Use `focus-visible` classes for keyboard navigation
   - Skip links for main content (`#main-content`)
   - Reduced motion media query support in global.css

### CSS/Styling

1. **Tailwind-first**: Use utility classes; avoid custom CSS when possible
2. **Custom properties**: Use Tailwind theme values, not hardcoded colors
3. **Responsive prefix**: Mobile-first (`sm:`, `md:`, `lg:`, `xl:`)
4. **Dark theme**: Site is permanently dark; no light mode toggle
5. **Custom scrollbar**: Styled with yellow accent on hover

### JavaScript/TypeScript

1. **TypeScript**: Use type annotations in scripts (strict config)
2. **IIFE pattern**: Wrap client scripts in IIFEs to avoid global scope
3. **Null checks**: Use optional chaining (`?.`) for DOM elements
4. **Event listeners**: Clean up when appropriate (rare in Astro static sites)

### Naming Conventions

- **Components**: PascalCase (e.g., `CookieBanner.astro`)
- **Variables**: camelCase (e.g., `contactInfo`)
- **Constants**: UPPER_SNAKE_CASE for true constants (e.g., `WEB3FORMS_ENDPOINT`)
- **Files**: kebab-case for pages, PascalCase for components
- **German content**: All user-facing text is in German

## Key Components

### Layout.astro

Base layout providing:
- HTML5 boilerplate with German lang attribute (`lang="de-DE"`)
- Meta tags (SEO, Open Graph, Twitter Cards)
- Schema.org JSON-LD (Organization + LocalBusiness structured data)
- Self-hosted Inter font preloading
- Critical CSS inline for above-the-fold content
- Cookie banner inclusion
- Skip-to-content accessibility link

### Header.astro

- Fixed position navigation with backdrop blur
- Company logo with tagline claim
- Desktop navigation with active link highlighting
- Mobile hamburger menu with slide-out drawer
- CTA button "Angebot anfordern"
- ARIA attributes for accessibility

### Footer.astro

- 4-column layout (Company info, Services, Company links, Contact)
- Contact information with phone/email/WhatsApp
- Legal links (Impressum, Datenschutz)
- Disclaimer notice about security services

### CookieBanner.astro

- Fixed bottom banner with GDPR-compliant cookie consent
- Three options: Accept All, Decline, Essential Only
- Stores preference in localStorage (`metra_cookie_consent`)
- Dispatches custom event on acceptance for potential analytics
- Hidden by default, slides up after 1s delay if no consent found

### WhatsAppButton.astro

- Fixed floating button (bottom-right)
- Pulse animation on hover
- Links to WhatsApp with company phone number

## Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `index.astro` | Homepage with hero, services teaser, 4-step process, CTA sections |
| `/leistungen` | `leistungen.astro` | Detailed services page with 8 service descriptions |
| `/kontakt` | `kontakt.astro` | Contact form (Web3Forms), contact info, WhatsApp link |
| `/impressum` | `impressum.astro` | Legal imprint (§ 5 TMG) with company details |
| `/datenschutz` | `datenschutz.astro` | Privacy policy (DSGVO compliant) |

## Contact Form Setup

The contact form uses **Web3Forms** (configured in `kontakt.astro`):

```typescript
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY'; // Must be replaced!
```

**To configure:**
1. Sign up at https://web3forms.com/
2. Get your access key
3. Replace `YOUR_ACCESS_KEY` in `src/pages/kontakt.astro`

**Features:**
- Honeypot field (`botcheck`) for bot protection
- Client-side validation (required fields)
- Loading states during submission
- Success/error message display
- Privacy checkbox (required)
- Reply-to email auto-population

## Testing Checklist

Before deploying changes, verify:

- [ ] All pages render without errors (`npm run build`)
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Navigation works (including mobile menu toggle)
- [ ] Contact form submits correctly (test with Web3Forms)
- [ ] Cookie banner appears for new users
- [ ] WhatsApp button opens correct chat
- [ ] No console errors
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: skip link works
- [ ] Accessibility: focus indicators visible
- [ ] SEO: meta tags present on all pages
- [ ] SEO: Schema.org data validates

## Deployment

**Platform**: Netlify

**Automatic deployment triggers:**
- Push to `master` branch deploys to production
- Build command: `npm run build`
- Output directory: `dist`

**Environment variables:** None currently required (Web3Forms key is in code)

## Security Considerations

1. **CSP Headers**: Configured in `netlify.toml`
   - Default src: 'self'
   - Scripts: 'self' + 'unsafe-inline' (required for Astro islands)
   - Connect: allows Web3Forms API (`https://api.web3forms.com`)

2. **Form Security**:
   - Honeypot field (`botcheck`) must remain empty for submission
   - Client-side validation only; server validates at Web3Forms

3. **No sensitive data** in repository (no API keys, credentials)

## Performance Optimizations

- Static site generation (no server runtime needed)
- Self-hosted fonts with `font-display: swap`
- Image optimization via Sharp
- HTML compression enabled
- Preconnect to Web3Forms API
- Long-term caching headers for static assets (1 year)
- Lazy loading for below-the-fold images

## Common Issues

### Web3Forms not working
- Verify access key is set correctly (not 'YOUR_ACCESS_KEY')
- Check browser console for network errors
- Ensure `api.web3forms.com` is reachable from user's location

### Cookie banner not showing
- Clear localStorage key `metra_cookie_consent`
- Check for JavaScript errors in console

### Styles not updating
- Restart dev server (Tailwind JIT mode cache)
- Check `tailwind.config.js` content paths include your files

## External Dependencies

| Service | Purpose | URL |
|---------|---------|-----|
| Web3Forms | Contact form handling | https://api.web3forms.com |
| WhatsApp | Direct messaging | https://wa.me/491708888891 |
| Netlify | Hosting & CDN | https://www.netlify.com |

## Company Information

- **Name**: METRA Baulogistik & Projektsteuerung GmbH
- **Owner**: Sascha Trajkovic
- **Address**: Im Mediapark 5, 50670 Köln, Germany
- **Phone**: 0170 888 88 91
- **Email**: info@metra-baulogistik.de
- **Website**: https://www.metra-baulogistik.de

## License & Legal

- Website content: © METRA Baulogistik & Projektsteuerung GmbH
- This is proprietary code for the company's website

---

Last updated: March 2026
