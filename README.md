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
├── portfolio.html        # Case studies — chatbots, RAG platforms, travel AI, healthcare
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

### 🏠 Home (`index.html`)
- Full hero section with animated CTA buttons
- Services, Industries, Portfolio, and Tech Stack sections
- Testimonials and stats counter

### ⚙️ Services (`services.html`)
- 6 service categories: AI Development, AI Agents, Automation, Web Apps, Mobile, UI/UX

### 🤖 AI Solutions (`ai-solutions.html`)
- Multi-agent mesh, RAG pipelines, LLM model integrations

### 🏭 Industries (`industries.html`)
- Healthcare, FinTech, E-Commerce, Real Estate, Logistics, Legal & Compliance

### 💼 Portfolio (`portfolio.html`)
- 6 case studies with tech stack pills (OpenAI, LangChain, Pinecone, FastAPI, etc.)

### 🙋 About (`about.html`)
- Mission, team ethos, delivery process, why PALRAM AI

### 💰 Pricing (`pricing.html`)
- **All prices in Indian Rupees (₹)**
- Starter: ₹49,999 | Pro: ₹1,49,999 | Enterprise: Custom quote

### 📬 Contact (`contact.html`)
- Project inquiry form
- Budget selector in ₹ (Under ₹50,000 → ₹5,00,000+)
- Discovery call booking CTA

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
Home → Services → AI Solutions → Industries → Portfolio → About → Pricing → Contact
```

---

## Known Gaps (Future Backend Work)

- **Contact Form** — Currently shows a browser alert on submit. Wire to [Formspree](https://formspree.io), a serverless function, or CRM API for real submissions.
- **Chat Widget** — Keyword-matched canned responses in `script.js`. Replace `sendChat()` with a real OpenAI API call when ready.
- **Blog / CMS** — Not included. Requires headless CMS (Sanity, Contentful) + routing.
- **Payment Gateway** — Pricing page links to contact. Wire to Razorpay for INR payments.

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
