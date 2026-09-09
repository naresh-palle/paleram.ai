# PALRAM AI

Official website for [PALRAM AI](https://palramai.in/) — AI agents, intelligent automation and software engineering.

## Architecture

- Semantic static HTML
- Shared design system: `assets/css/site.css`
- Shared accessible runtime: `assets/js/site.js`
- No framework, package dependencies, build step, backend or environment variables
- GitHub Pages deploys `main`; `CNAME` maps `palramai.in`

The shared runtime mounts navigation, footer and the disclosed non-AI website assistant. It also powers the business explorer, agent showcase, industry explorer, contact intake, mobile navigation and scroll reveals.

## Pages

- `index.html` — homepage and interactive product story
- `services.html` — solution overview
- `ai-agents.html` — AI agent engineering
- `automation.html` — intelligent automation
- `ai-development.html` — generative AI and RAG
- `software-development.html` — web, SaaS, APIs, backend, cloud
- `mobile-app-development.html` — iOS and Android applications
- `industries.html` — industry examples
- `portfolio.html` — selected build concepts (not client case studies)
- `about.html` — company positioning
- `pricing.html` — honest INR engagement starting points
- `contact.html` — four-step project intake that opens a mail draft
- `blog.html` — future insights hub; no fabricated posts
- `ai-solutions.html` — legacy redirect to `ai-development.html`

## Brand system

The PALRAM Intelligence Mark is stored in:

- `assets/img/palram-mark.svg`
- `assets/img/social-preview.svg`

The recurring geometry represents PALRAM (`P`) and intelligence (`A`) as connected paths. It is used consistently in navigation, hero visuals, capabilities, favicon, footer and social metadata.

## Forms and integrations

There is currently no form backend or live AI integration.

- Project intake opens an email to `admin@palramai.in`
- The website assistant is explicitly labelled as a guided interface, not a live model
- No analytics are installed
- No customer data is stored by this website

## Local preview

```bash
python -m http.server 4173
```

Open `http://localhost:4173/`.

## Deployment

Pushing `main` to `origin` deploys the static site through GitHub Pages:

```bash
git push origin main
```

## Trust policy

Do not add fabricated clients, logos, testimonials, certifications, partnerships, statistics or case-study results. Use clearly labelled concepts or intended outcomes until real public evidence is available.
