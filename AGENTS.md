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
- **WCAG accessibility** compliant (ARIA labels, semantic HTML, keyboard navigation)
- **SEO-optimized** with Schema.org structured data, meta tags, Open Graph
- **Cookie consent** banner implemented (localStorage-based)
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

## Project Structure

```
/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── CookieBanner.astro    # GDPR cookie consent
│   │   ├── Footer.astro          # Site footer
│   │   ├── Header.astro          # Navigation header
│   │   └── WhatsAppButton.astro  # Floating WhatsApp CTA
│   ├── layouts/
│   │   └── Layout.astro          # Base HTML layout with SEO
│   ├── pages/               # File-based routing
│   │   ├── index.astro           # Homepage
│   │   ├── leistungen.astro      # Services page
│   │   ├── kontakt.astro         # Contact page with form
│   │   ├── datenschutz.astro     # Privacy policy (DSGVO)
│   │   └── impressum.astro       # Legal imprint
│   └── styles/
│       └── global.css            # Tailwind imports + custom styles
├── public/                  # Static assets
│   ├── fonts/               # Self-hosted Inter font files
│   ├── images/              # PNG images (logo, hero, services)
│   ├── favicon.ico
│   └── favicon.svg
├── .vscode/                 # VS Code settings
├── astro.config.mjs         # Astro configuration
├── tailwind.config.js       # Tailwind customization
├── postcss.config.js        # PostCSS plugins
├── tsconfig.json            # TypeScript strict config
├── netlify.toml             # Netlify deployment & headers
└── package.json
```

## Build Commands

```bash
# Install dependencies
npm install

# Development server (localhost:4321)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Astro CLI commands
npm run astro -- --help
```

## Configuration Details

### Astro Config (`astro.config.mjs`)

- **Output**: Static site generation (`output: 'static'`)
- **Image optimization**: Sharp service enabled
- **HTML compression**: Enabled
- **Build format**: Directory-based

### Tailwind Config (`tailwind.config.js`)

Custom theme extensions:

```javascript
// Colors
background: '#17181d',    // Dark background
accent: '#fdf153',        // Yellow accent
secondary: '#d2d1d9',     // Light gray text
'accent-hover': '#e5d94a', // Darker yellow

// Font Family
sans: ['Inter', 'system-ui', ...]

// Animations
'fade-in': fade-in 0.6s ease-out
'fade-in-up': fade-in-up 0.6s ease-out
```

### Netlify Config (`netlify.toml`)

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Security headers**: Cache-Control, X-Frame-Options, CSP, etc.
- **CSP** allows connections to `https://api.web3forms.com`

## Code Style Guidelines

### Astro Components

1. **Frontmatter first**: Use TypeScript in frontmatter for data
2. **Props interfaces**: Define explicit interfaces for component props
3. **Semantic HTML**: Use proper heading hierarchy, landmarks, ARIA labels
4. **Accessibility**:
   - All interactive elements must have `aria-label` or visible text
   - Use `focus-visible` classes for keyboard navigation
   - Skip links for main content
   - Reduced motion media query support

### CSS/Styling

1. **Tailwind-first**: Use utility classes; avoid custom CSS when possible
2. **Custom properties**: Use Tailwind theme values, not hardcoded colors
3. **Responsive prefix**: Mobile-first (`sm:`, `md:`, `lg:`)
4. **Dark theme**: Site is permanently dark; no light mode toggle

### JavaScript

1. **TypeScript**: Use type annotations in scripts
2. **IIFE pattern**: Wrap client scripts in IIFEs to avoid global scope
3. **Null checks**: Use optional chaining (`?.`) for DOM elements
4. **Event listeners**: Always clean up if component unmounts (rare in Astro)

### Naming Conventions

- **Components**: PascalCase (e.g., `CookieBanner.astro`)
- **Variables**: camelCase (e.g., `contactInfo`)
- **Constants**: UPPER_SNAKE_CASE for true constants
- **Files**: kebab-case for pages, PascalCase for components
- **German content**: Use German for all user-facing text

## Key Components

### Layout.astro

Base layout providing:
- HTML5 boilerplate with German lang attribute (`de-DE`)
- Meta tags (SEO, Open Graph, Twitter Cards)
- Schema.org JSON-LD (Organization + LocalBusiness)
- Font preloading
- Critical CSS inline
- Cookie banner inclusion

### Header.astro

- Fixed position navigation with backdrop blur
- Mobile hamburger menu with slide-out drawer
- Active link highlighting based on current path
- Skip-to-content link for accessibility

### CookieBanner.astro

- GDPR-compliant cookie consent
- Stores preference in localStorage (`metra_cookie_consent`)
- Three options: Accept All, Decline, Essential Only
- Dispatches custom event on acceptance

### WhatsAppButton.astro

- Fixed floating button (bottom-right)
- Pulse animation on hover
- Adjusts position when cookie banner is visible

## Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `index.astro` | Homepage with hero, services teaser, process, CTA |
| `/leistungen` | `leistungen.astro` | Detailed service descriptions |
| `/kontakt` | `kontakt.astro` | Contact form, info, map placeholder |
| `/impressum` | `impressum.astro` | Legal imprint (§ 5 TMG) |
| `/datenschutz` | `datenschutz.astro` | Privacy policy (DSGVO) |

## Contact Form Setup

The contact form uses **Web3Forms** (configured in `kontakt.astro`):

```typescript
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY'; // Replace this!
```

**To configure:**
1. Sign up at https://web3forms.com/
2. Get your access key
3. Replace `YOUR_ACCESS_KEY` in `src/pages/kontakt.astro`

**Features:**
- Honeypot field for bot protection
- Client-side validation
- Loading states
- Success/error messages
- Privacy checkbox (required)

## Testing Checklist

Before deploying changes, verify:

- [ ] All pages render without errors (`npm run build`)
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Navigation works (including mobile menu)
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
   - Scripts: 'self' + 'unsafe-inline' (required for Astro)
   - Connect: allows Web3Forms API

2. **Form Security**:
   - Honeypot field (`botcheck`) must remain empty
   - Client-side validation only; server validates at Web3Forms

3. **No sensitive data** in repository (no API keys, credentials)

## Performance Optimizations

- Static site generation (no server runtime)
- Self-hosted fonts with `font-display: swap`
- Image optimization via Sharp
- HTML compression enabled
- Preconnect to Web3Forms API
- Prefetch critical resources

## Common Issues

### Web3Forms not working
- Verify access key is set correctly
- Check browser console for network errors
- Ensure `api.web3forms.com` is reachable

### Cookie banner not showing
- Clear localStorage key `metra_cookie_consent`
- Check for JavaScript errors in console

### Styles not updating
- Restart dev server (Tailwind JIT mode cache)
- Check `tailwind.config.js` content paths

## External Dependencies

| Service | Purpose | URL |
|---------|---------|-----|
| Web3Forms | Contact form handling | https://api.web3forms.com |
| WhatsApp | Direct messaging | https://wa.me/... |
| Netlify | Hosting & CDN | https://www.netlify.com |

## License & Legal

- Website content: © METRA Baulogistik & Projektsteuerung GmbH
- Company address: Im Mediapark 5, 50670 Köln, Germany
- This is proprietary code for the company's website

---

Last updated: March 2026
