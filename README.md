# PALRAM AI — Official Website

> **Live Site:** [palramai.in](https://palramai.in)  
> **Repo:** [github.com/naresh-palle/paleram.ai](https://github.com/naresh-palle/paleram.ai)

Enterprise-grade AI agency website for **PALRAM AI** — specializing in AI Agents, Workflow Automation, RAG Systems, and Custom Software Engineering.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (Semantic) |
| Styling | Vanilla CSS (Design tokens, glassmorphism, animations) |
| Scripting | Vanilla JavaScript |
| Fonts | Plus Jakarta Sans, Outfit, JetBrains Mono (Google Fonts) |
| Hosting | GitHub Pages / Static CDN |
| CI/CD | GitHub → Auto-deploy on push to `main` |

---

## Site Structure

```
palramai/
├── index.html            # Home — hero, services overview, portfolio, tech stack
├── services.html         # All 6 service categories (AI, Automation, DevOps, etc.)
├── ai-solutions.html     # AI agents, LLM integrations, RAG systems, model stack
├── industries.html       # Healthcare, FinTech, E-Commerce, Real Estate, Logistics, Legal
├── portfolio.html        # Work — typical build types (no invented case studies)
├── about.html            # Team, values, process, why choose PALRAM AI
├── pricing.html          # Transparent INR pricing tiers (Starter / Pro / Enterprise)
├── contact.html          # Project inquiry form with INR budget selector
├── assets/
│   ├── css/style.css     # Global design system — tokens, components, animations
│   ├── js/script.js      # Theme toggle, nav scroll, chat widget, mobile menu
│   └── img/
│       ├── logo-icon.png # Official PALRAM AI logo (Cyber AI Head)
│       └── favicon-32.png
└── README.md
```

---

## Brand Design

- **Color Palette:** Cyber Midnight Violet `#180B28` + Neon Violet `#A855F7` + Electric Cyan `#06B6D4`
- **Logo:** Uploaded PNG image applied uniformly across all pages (header + footer)
- **Logo Layout:** Logo icon → **PALRAM AI** (bold) → *SINCE 2026* (monospace, stacked below)
- **Dark Mode** default with light mode toggle
- **Animations:** Glassmorphism cards, ambient glow orbs, scroll reveal, micro-interactions

---

## Pages & Features

### Home (`index.html`)
- Hero, services, process, industries, stack, typical builds
- No invented project counts or client metrics

### Services (`services.html`)
- AI, agents, automation, web, mobile, UI/UX

### AI Solutions (`ai-solutions.html`)
- How agents, tools, and RAG are assembled for a project

### Industries (`industries.html`)
- Healthcare ops, finance, retail, real estate, logistics, legal

### Work (`portfolio.html`)
- Build types we take on. Named case studies only when a client agrees.

### About (`about.html`)
- Studio since 2026, how we work

### Pricing (`pricing.html`)
- Starting packages in INR: Starter ₹49,999 · Pro ₹1,49,999 · Custom quote

### Contact (`contact.html`)
- Form opens a mailto draft to admin@palramai.in

---

## Run Locally

```bash
# Using npx serve (recommended)
npx serve .

# Using Python
python3 -m http.server 3000

# Using Node http-server
npx http-server . -p 3000
```

Then open → **http://localhost:3000**

---

## Deploy

Static HTML/CSS/JS — zero build step required.

| Platform | Method |
|---|---|
| **GitHub Pages** | Enable Pages on `main` branch in repo settings |
| **Vercel** | Import repo → framework: `Other` → no build command |
| **Netlify** | Drag & drop folder or connect GitHub repo |

---

## Navbar Order (All Pages)

```
Home → Services → AI Solutions → Industries → Work → About → Pricing → Contact
```

---

## Known Gaps (Future Backend Work)

- **Contact Form** — Opens a mailto draft to admin@palramai.in. Wire to Formspree or a serverless function when you want inbox capture without the user’s email app.
- **Chat Widget** — Keyword helper only. It is not a live agent.
- **Work page** — Build types until you have permission to name clients.

---

## Customization

All brand tokens live at the top of [`assets/css/style.css`](assets/css/style.css) in `:root`:

```css
:root {
  --bg-dark: #180B28;          /* Page background */
  --color-primary: #A855F7;    /* Neon Violet accent */
  --color-secondary: #06B6D4;  /* Electric Cyan accent */
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## License

© 2026 PALRAM AI. All rights reserved.  
Website design and code proprietary to PALRAM AI.
