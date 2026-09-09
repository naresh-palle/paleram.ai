document.documentElement.classList.add("js");
document.documentElement.dataset.theme = localStorage.getItem("palram-theme") || localStorage.getItem("palram_theme") || "dark";

const PALRAM = {
  nav: [
    ["solutions", "services.html", "Solutions"],
    ["agents", "ai-agents.html", "AI Agents"],
    ["automation", "automation.html", "Automation"],
    ["software", "software-development.html", "Software"],
    ["industries", "industries.html", "Industries"],
    ["work", "portfolio.html", "Work"],
    ["about", "about.html", "About"]
  ],
  businessAreas: {
    "Customer Support": {
      problem: "Teams repeat the same answers across email, chat and tickets.",
      solution: "Support agent grounded in your help centre, policies and customer context.",
      automation: "Understand → retrieve → answer → classify → escalate → update CRM",
      outcome: "Shorter queues, consistent answers and clean human handoffs."
    },
    Sales: {
      problem: "Good leads wait while teams qualify, enrich and route them manually.",
      solution: "Lead agent connected to forms, CRM, email and your qualification rules.",
      automation: "Capture → enrich → score → route → follow up → notify owner",
      outcome: "Faster follow-up and less time spent on poor-fit leads."
    },
    Marketing: {
      problem: "Campaign data and content work are scattered across disconnected tools.",
      solution: "An assisted content and reporting workflow with approval checkpoints.",
      automation: "Brief → research → draft → review → publish → report",
      outcome: "A repeatable content operation without removing editorial control."
    },
    Operations: {
      problem: "Teams move status, documents and approvals between systems by hand.",
      solution: "Workflow orchestration across forms, databases, ERP and messaging.",
      automation: "Trigger → validate → decide → update → notify → verify",
      outcome: "Fewer handoffs, fewer copy errors and visible process state."
    },
    HR: {
      problem: "Onboarding and policy questions interrupt people teams every day.",
      solution: "Internal knowledge assistant plus onboarding task automation.",
      automation: "Ask → retrieve policy → answer → create task → escalate exception",
      outcome: "Faster onboarding while sensitive decisions stay with people."
    },
    Finance: {
      problem: "Invoices, receipts and approvals arrive in inconsistent formats.",
      solution: "Document extraction with validation rules and approval routing.",
      automation: "Ingest → extract → validate → match → approve → post",
      outcome: "Less manual entry and a clearer audit trail."
    },
    Healthcare: {
      problem: "Administrative work slows communication, scheduling and document intake.",
      solution: "Purpose-built workflow assistance designed around your privacy controls.",
      automation: "Receive → classify → route → schedule → confirm → staff review",
      outcome: "Faster operations without automating clinical judgement."
    },
    Documents: {
      problem: "Important answers are buried across PDFs, drives and internal portals.",
      solution: "A cited RAG system that searches only the sources you approve.",
      automation: "Ingest → index → retrieve → answer → cite → request review",
      outcome: "Company knowledge becomes searchable and easier to verify."
    },
    Data: {
      problem: "People wait for analysts to answer recurring operational questions.",
      solution: "A governed data assistant over approved metrics and queries.",
      automation: "Ask → map metric → query → validate → explain → export",
      outcome: "Faster answers with definitions and query history visible."
    },
    "Internal Knowledge": {
      problem: "Teams rely on memory to find policies, decisions and technical context.",
      solution: "An internal copilot connected to documents, wikis and permissions.",
      automation: "Identify user → search permitted sources → answer → cite → feedback",
      outcome: "Less time searching and fewer conflicting answers."
    }
  },
  agents: {
    Support: {
      subtitle: "Resolve and route customer questions",
      tags: ["CRM", "Knowledge base", "Ticketing", "Human escalation"],
      flow: ["Customer message", "Understand intent", "Retrieve knowledge", "Update CRM", "Reply or escalate"]
    },
    Sales: {
      subtitle: "Qualify leads and prepare follow-up",
      tags: ["CRM", "Email", "Enrichment", "Approval"],
      flow: ["Lead arrives", "Enrich account", "Apply rules", "Draft outreach", "Assign owner"]
    },
    Research: {
      subtitle: "Gather evidence and produce cited briefs",
      tags: ["Web sources", "Documents", "Memory", "Review"],
      flow: ["Research goal", "Plan queries", "Gather sources", "Synthesize", "Human review"]
    },
    Operations: {
      subtitle: "Coordinate tasks across business systems",
      tags: ["ERP", "APIs", "Database", "Exceptions"],
      flow: ["Event received", "Validate data", "Choose action", "Update systems", "Report exception"]
    },
    HR: {
      subtitle: "Answer policy questions and guide onboarding",
      tags: ["HRIS", "Policies", "Tasks", "Escalation"],
      flow: ["Employee asks", "Check access", "Retrieve policy", "Create task", "Escalate if sensitive"]
    },
    Finance: {
      subtitle: "Extract and route finance documents",
      tags: ["Invoices", "OCR", "Rules", "Approval"],
      flow: ["Document arrives", "Extract fields", "Validate", "Route approval", "Post or flag"]
    }
  },
  industries: {
    Healthcare: ["Patient communication", "Appointment workflows", "Document intake", "Staff knowledge assistants"],
    Finance: ["Document verification", "Policy search", "Approval workflows", "Operational reporting"],
    Education: ["Student support", "Course knowledge search", "Admissions workflows", "Staff automation"],
    Retail: ["Customer support", "Catalog intelligence", "Order workflows", "Inventory notifications"],
    "Real Estate": ["Lead qualification", "Listing assistants", "Document search", "Tenant workflows"],
    Manufacturing: ["Work-order routing", "Quality document search", "Maintenance workflows", "Ops reporting"],
    Logistics: ["Dispatch workflows", "Status communication", "Document processing", "Exception management"],
    Hospitality: ["Guest communication", "Booking workflows", "Staff knowledge", "Service requests"],
    "Professional Services": ["Knowledge assistants", "Client intake", "Document workflows", "Reporting"],
    Startups: ["AI product prototypes", "SaaS engineering", "Workflow automation", "Cloud foundations"]
  },
  assistant: {
    "What can PALRAM AI build?": "AI agents, knowledge systems, workflow automation, web applications, mobile products, SaaS platforms, APIs and cloud infrastructure.",
    "Can you automate my business?": "We start with one high-friction workflow, map its systems and decisions, then automate the reliable steps with human approval where needed.",
    "Can you build an AI agent?": "Yes. We design agents that retrieve context, use approved tools, take actions and escalate exceptions to a person.",
    "How much does an AI project cost?": "Scope depends on data, integrations and risk. The pricing page shows engagement starting points; a short discovery call produces a specific estimate.",
    "Can you build a mobile app?": "Yes. PALRAM AI builds iOS and Android applications with Flutter or React Native, connected to production APIs.",
    "How do I start?": "Open Start a Project, choose what you are building, describe the workflow and send the brief to admin@palramai.in."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  mountAurora();
  mountLoader();
  mountSiteShell();
  replaceStaticMarks();
  initHeader();
  initMobileMenu();
  initReveal();
  initAstraOrb();
  initHeroInteraction();
  initMagnetic();
  initBusinessExplorer();
  initAgentShowcase();
  initIndustries();
  initIntake();
  initAssistant();
  window.setTimeout(() => document.querySelector(".site-loader")?.classList.add("is-done"), 520);
});

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function orbHTML(size = "sm") {
  return `<span class="astra-orb astra-orb-${size}" aria-hidden="true"></span>`;
}

function brandHTML(subtitle) {
  return `${orbHTML()}<span class="brand-lockup"><span class="brand-name">palram</span><small>${subtitle}</small></span>`;
}

function mountAurora() {
  document.body.insertAdjacentHTML("afterbegin", `<div class="aurora" aria-hidden="true"><span></span><span></span><span></span></div>`);
}

function mountLoader() {
  document.body.insertAdjacentHTML("afterbegin", `<div class="site-loader" aria-hidden="true"><div class="loader-core">${orbHTML("md")}<span class="loader-word">palram</span></div></div>`);
  window.setTimeout(() => document.querySelector(".site-loader")?.remove(), 980);
}

function replaceStaticMarks() {
  document.querySelectorAll("img.capability-mark").forEach(image => {
    const orb = document.createElement("span");
    orb.className = "astra-orb astra-orb-sm capability-mark";
    orb.setAttribute("aria-hidden", "true");
    image.replaceWith(orb);
  });
  document.querySelectorAll("img.page-visual").forEach(image => {
    const orb = document.createElement("div");
    orb.className = "astra-orb astra-orb-page page-visual";
    orb.setAttribute("aria-hidden", "true");
    image.replaceWith(orb);
  });
}

function mountSiteShell() {
  const page = document.body.dataset.page || "";
  const nav = PALRAM.nav.map(([id, href, label]) =>
    `<a href="${href}"${page === id ? ' aria-current="page"' : ""}>${label}</a>`
  ).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header" id="siteHeader">
      <div class="wrap nav-shell">
        <a class="brand" href="index.html" aria-label="palram home">
          ${brandHTML("AI · AGENTS · SOFTWARE")}
        </a>
        <nav class="desktop-nav" aria-label="Primary navigation">${nav}</nav>
        <button class="theme-toggle" id="themeToggle" type="button" aria-label="Switch color theme">◐</button>
        <a class="nav-cta" href="contact.html">Start a Project <span aria-hidden="true">→</span></a>
        <button class="menu-toggle" id="menuToggle" type="button" aria-expanded="false" aria-controls="mobileNav" aria-label="Open navigation"><span></span></button>
      </div>
    </header>
    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">${nav}<a href="contact.html">Start a Project →</a></nav>
  `);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site-footer">
      <div class="wrap footer-main">
        <div class="footer-brand">
          <a class="brand" href="index.html">${brandHTML("AI · AUTOMATION · SOFTWARE")}</a>
          <p>We turn business problems into intelligent software.</p>
        </div>
        <div class="footer-column">
          <h3>Solutions</h3>
          <a href="ai-agents.html">AI Agents</a>
          <a href="automation.html">Automation</a>
          <a href="ai-development.html">AI & RAG</a>
          <a href="software-development.html">Software</a>
        </div>
        <div class="footer-column">
          <h3>Company</h3>
          <a href="industries.html">Industries</a>
          <a href="portfolio.html">Work</a>
          <a href="about.html">About</a>
          <a href="blog.html">Insights</a>
          <a href="pricing.html">Pricing</a>
        </div>
        <div class="footer-column">
          <h3>Contact</h3>
          <a href="mailto:admin@palramai.in">admin@palramai.in</a>
          <a href="https://palramai.in/">palramai.in</a>
        </div>
      </div>
      <div class="wrap footer-bottom">
        <span>© 2026 PALRAM AI. All rights reserved.</span>
        <span>AI-first software engineering · India</span>
      </div>
    </footer>
    <button class="assistant-launcher" id="assistantLauncher" type="button" aria-expanded="false" aria-controls="assistantPanel">
      ${orbHTML()}<span>palram guide</span>
    </button>
    <section class="assistant-panel" id="assistantPanel" aria-label="PALRAM AI Assistant">
      <div class="assistant-head">
        <div>${orbHTML()}<span><strong>palram guide</strong><small>Website guide</small></span></div>
        <button class="assistant-close" id="assistantClose" type="button" aria-label="Close assistant">×</button>
      </div>
      <div class="assistant-body">
        <p class="assistant-disclosure">This is a guided interface, not a live AI model.</p>
        <div class="assistant-options">
          ${Object.keys(PALRAM.assistant).map(question => `<button class="assistant-option" type="button" data-question="${escapeHTML(question)}">${question}</button>`).join("")}
        </div>
        <div class="assistant-answer" id="assistantAnswer" aria-live="polite">Choose a question to see how we can help.</div>
      </div>
    </section>
  `);

  const main = document.querySelector("main");
  if (main && !main.id) main.id = "main";
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("palram-theme", next);
  });
}

function initHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initMobileMenu() {
  const button = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileNav");
  if (!button || !menu) return;

  const setOpen = (open) => {
    button.classList.toggle("is-open", open);
    menu.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("menu-open", open);
  };

  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

function initReveal() {
  const nodes = [...document.querySelectorAll("[data-reveal]")];
  if (!nodes.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    nodes.forEach(node => node.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  nodes.forEach(node => observer.observe(node));
}

function initAstraOrb() {
  const stage = document.querySelector("[data-astra-stage]");
  if (!stage) return;

  const canvas = document.createElement("canvas");
  canvas.className = "astra-canvas";
  canvas.setAttribute("aria-hidden", "true");
  stage.prepend(canvas);
  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  const blobs = [
    { radius: 0.48, color: [94, 231, 255], speed: 1.05 },
    { radius: 0.4, color: [82, 104, 255], speed: 0.82 },
    { radius: 0.34, color: [155, 92, 255], speed: 1.28 },
    { radius: 0.18, color: [255, 255, 255], speed: 0.7 }
  ];

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const { width, height } = stage.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(width * ratio));
    canvas.height = Math.max(1, Math.floor(height * ratio));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const paint = time => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const cx = width / 2;
    const cy = height / 2;
    const base = Math.min(width, height) * 0.42;
    context.clearRect(0, 0, width, height);
    context.globalCompositeOperation = "lighter";
    blobs.forEach((blob, index) => {
      const ox = Math.sin(time * blob.speed + index) * 16;
      const oy = Math.cos(time * blob.speed * 0.85 + index * 1.4) * 14;
      const radius = base * blob.radius * (1 + Math.sin(time * 1.35 + index) * 0.1);
      const glow = context.createRadialGradient(cx + ox, cy + oy, radius * 0.04, cx + ox, cy + oy, radius);
      glow.addColorStop(0, `rgba(${blob.color.join(",")},0.95)`);
      glow.addColorStop(0.38, `rgba(${blob.color.join(",")},0.32)`);
      glow.addColorStop(1, `rgba(${blob.color.join(",")},0)`);
      context.fillStyle = glow;
      context.beginPath();
      context.arc(cx + ox, cy + oy, radius, 0, Math.PI * 2);
      context.fill();
    });
  };

  resize();
  paint(0);
  stage.querySelector(".astra-orb")?.setAttribute("hidden", "");
  window.addEventListener("resize", resize, { passive: true });
  if (reducedMotion()) return;

  let elapsed = 0;
  let last = performance.now();
  const tick = now => {
    elapsed += (now - last) / 1000;
    last = now;
    paint(elapsed);
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initMagnetic() {
  if (reducedMotion() || window.matchMedia("(pointer: coarse)").matches) return;
  document.querySelectorAll(".button-primary, .nav-cta").forEach(button => {
    button.addEventListener("pointermove", event => {
      const box = button.getBoundingClientRect();
      const x = event.clientX - box.left - box.width / 2;
      const y = event.clientY - box.top - box.height / 2;
      button.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
    });
    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });
}

function initHeroInteraction() {
  const hero = document.querySelector(".hero");
  const visual = document.querySelector(".system-visual");
  const mark = document.querySelector(".intelligence-core");
  const glow = document.querySelector(".hero-glow");
  if (!hero || !visual || !mark || !glow || reducedMotion()) return;

  hero.addEventListener("pointermove", event => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    glow.style.left = `${x * 100}%`;
    glow.style.top = `${y * 100}%`;
    mark.style.transform = `translate(-50%, -50%) translate(${(x - .5) * 18}px, ${(y - .5) * 18}px)`;
    visual.querySelectorAll(".system-node").forEach((node, index) => {
      const depth = (index % 3 + 1) * 2;
      node.style.transform = `translate(${(x - .5) * depth}px, ${(y - .5) * depth}px)`;
    });
  });
  hero.addEventListener("pointerleave", () => {
    mark.style.transform = "translate(-50%, -50%)";
    visual.querySelectorAll(".system-node").forEach(node => node.style.transform = "");
  });

  const nodes = [...visual.querySelectorAll(".system-node")];
  let active = 0;
  window.setInterval(() => {
    nodes.forEach(node => node.classList.remove("is-active"));
    nodes[active % nodes.length]?.classList.add("is-active");
    active += 1;
  }, 1300);
}

function initBusinessExplorer() {
  const tabs = document.querySelector("[data-business-tabs]");
  const result = document.querySelector("[data-business-result]");
  if (!tabs || !result) return;

  const render = area => {
    const item = PALRAM.businessAreas[area];
    if (!item) return;
    result.innerHTML = `
      <div>
        <span class="eyebrow">Selected area</span>
        <h3>${escapeHTML(area)}</h3>
      </div>
      <div class="outcome-flow">
        ${[
          ["Problem", item.problem],
          ["PALRAM AI", item.solution],
          ["Automation", item.automation],
          ["Outcome", item.outcome]
        ].map(([label, text]) => `<div class="outcome-step"><span>${label}</span><p>${escapeHTML(text)}</p></div>`).join("")}
      </div>`;
  };

  tabs.innerHTML = Object.keys(PALRAM.businessAreas).map((area, index) =>
    `<button class="explorer-tab" type="button" role="tab" aria-selected="${index === 0}" data-area="${escapeHTML(area)}">${escapeHTML(area)}</button>`
  ).join("");
  render(Object.keys(PALRAM.businessAreas)[0]);
  tabs.addEventListener("click", event => {
    const button = event.target.closest("[data-area]");
    if (!button) return;
    tabs.querySelectorAll("[data-area]").forEach(tab => tab.setAttribute("aria-selected", String(tab === button)));
    render(button.dataset.area);
  });
}

function initAgentShowcase() {
  const list = document.querySelector("[data-agent-list]");
  const stage = document.querySelector("[data-agent-stage]");
  if (!list || !stage) return;

  const render = name => {
    const agent = PALRAM.agents[name];
    stage.innerHTML = `
      <div class="eyebrow">Active workflow</div>
      <h3>${escapeHTML(name)} Agent</h3>
      <p>${escapeHTML(agent.subtitle)}</p>
      <div class="agent-meta">${agent.tags.map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>
      <div class="workflow">${agent.flow.map(step => `<div class="workflow-node is-pulsing">${escapeHTML(step)}</div>`).join("")}</div>`;
  };

  list.innerHTML = Object.entries(PALRAM.agents).map(([name, agent], index) =>
    `<button class="agent-card" type="button" aria-selected="${index === 0}" data-agent="${name}"><strong>${name} Agent</strong><small>${escapeHTML(agent.subtitle)}</small></button>`
  ).join("");
  render(Object.keys(PALRAM.agents)[0]);
  list.addEventListener("click", event => {
    const button = event.target.closest("[data-agent]");
    if (!button) return;
    list.querySelectorAll("[data-agent]").forEach(item => item.setAttribute("aria-selected", String(item === button)));
    render(button.dataset.agent);
  });
}

function initIndustries() {
  const list = document.querySelector("[data-industry-list]");
  const panel = document.querySelector("[data-industry-panel]");
  if (!list || !panel) return;

  const render = name => {
    panel.innerHTML = `<div class="eyebrow">Examples</div><h3>${escapeHTML(name)}</h3><ul>${PALRAM.industries[name].map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
  };
  list.innerHTML = Object.keys(PALRAM.industries).map((name, index) =>
    `<button class="industry-tab" type="button" aria-selected="${index === 0}" data-industry="${escapeHTML(name)}">${escapeHTML(name)}</button>`
  ).join("");
  render(Object.keys(PALRAM.industries)[0]);
  list.addEventListener("click", event => {
    const button = event.target.closest("[data-industry]");
    if (!button) return;
    list.querySelectorAll("[data-industry]").forEach(item => item.setAttribute("aria-selected", String(item === button)));
    render(button.dataset.industry);
  });
}

function initIntake() {
  const form = document.getElementById("projectIntake");
  if (!form) return;
  const panels = [...form.querySelectorAll(".intake-panel")];
  const progress = [...document.querySelectorAll("[data-progress-step]")];
  const status = form.querySelector(".form-status");
  let step = 0;

  const show = next => {
    step = Math.max(0, Math.min(next, panels.length - 1));
    panels.forEach((panel, index) => panel.classList.toggle("is-active", index === step));
    progress.forEach((item, index) => {
      item.classList.toggle("is-active", index === step);
      item.classList.toggle("is-done", index < step);
    });
    panels[step].querySelector("button, input, textarea")?.focus();
    if (status) status.textContent = "";
  };

  form.querySelectorAll("[data-choice]").forEach(button => {
    button.addEventListener("click", () => {
      const group = button.dataset.group;
      form.querySelectorAll(`[data-group="${group}"]`).forEach(item => item.setAttribute("aria-pressed", String(item === button)));
      const target = form.elements.namedItem(group);
      if (target) target.value = button.dataset.choice;
    });
  });

  form.addEventListener("click", event => {
    const next = event.target.closest("[data-next]");
    const back = event.target.closest("[data-back]");
    if (back) show(step - 1);
    if (!next) return;
    const required = [...panels[step].querySelectorAll("[required]")];
    const hidden = panels[step].querySelectorAll('input[type="hidden"][required]');
    const valid = required.every(field => field.value.trim() && field.checkValidity()) &&
      [...hidden].every(field => field.value.trim());
    if (!valid) {
      status.textContent = "Choose an option or complete the required field.";
      required.find(field => !field.checkValidity() || !field.value.trim())?.focus();
      return;
    }
    show(step + 1);
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const body = [
      `Project type: ${data.get("projectType")}`,
      `Problem: ${data.get("problem")}`,
      `Company stage: ${data.get("companyStage")}`,
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "Not provided"}`,
      `Company: ${data.get("company") || "Not provided"}`
    ].join("\n");
    window.location.href = `mailto:admin@palramai.in?subject=${encodeURIComponent("Project enquiry — PALRAM AI")}&body=${encodeURIComponent(body)}`;
  });
}

function initAssistant() {
  const launcher = document.getElementById("assistantLauncher");
  const panel = document.getElementById("assistantPanel");
  const close = document.getElementById("assistantClose");
  const answer = document.getElementById("assistantAnswer");
  if (!launcher || !panel || !close || !answer) return;

  const setOpen = open => {
    panel.classList.toggle("is-open", open);
    launcher.setAttribute("aria-expanded", String(open));
  };
  launcher.addEventListener("click", () => setOpen(launcher.getAttribute("aria-expanded") !== "true"));
  close.addEventListener("click", () => setOpen(false));
  panel.addEventListener("click", event => {
    const button = event.target.closest("[data-question]");
    if (button) answer.textContent = PALRAM.assistant[button.dataset.question];
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") setOpen(false);
  });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}
