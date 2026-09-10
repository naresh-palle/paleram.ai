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
  fields: {
    home: "INTELLIGENCE",
    solutions: "SYSTEMS",
    agents: "AGENTS",
    automation: "AUTOMATION",
    software: "SOFTWARE",
    industries: "CONTEXT",
    work: "SYSTEMS",
    about: "STUDIO",
    contact: "INTAKE",
    pricing: "SCOPE",
    insights: "NOTES"
  },
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
      role: "Resolve and route customer questions",
      memory: "Help centre, tickets, customer record",
      tools: "CRM, knowledge base, ticketing",
      actions: "Answer, classify, update, notify",
      escalate: "Policy exceptions and unhappy customers",
      flow: ["User", "Agent", "Knowledge", "Decision", "CRM", "Human"]
    },
    Sales: {
      role: "Qualify leads and prepare follow-up",
      memory: "Account history, scoring rules",
      tools: "CRM, email, enrichment",
      actions: "Score, draft, assign, notify",
      escalate: "Strategic or ambiguous accounts",
      flow: ["Lead", "Agent", "Rules", "CRM", "Outreach", "Owner"]
    },
    Research: {
      role: "Gather evidence and produce cited briefs",
      memory: "Prior briefs and approved sources",
      tools: "Documents, search, notes",
      actions: "Plan, retrieve, synthesize, cite",
      escalate: "Conflicting or weak evidence",
      flow: ["Goal", "Agent", "Sources", "Synthesis", "Review", "Brief"]
    },
    Operations: {
      role: "Coordinate tasks across business systems",
      memory: "Process state and exception log",
      tools: "ERP, APIs, database",
      actions: "Validate, update, notify, retry",
      escalate: "Failed writes and unknown events",
      flow: ["Event", "Agent", "Validate", "Systems", "Exception", "Human"]
    },
    Finance: {
      role: "Extract and route finance documents",
      memory: "Vendor rules and prior invoices",
      tools: "OCR, ledger, approval queue",
      actions: "Extract, match, route, post",
      escalate: "Mismatches and unusual amounts",
      flow: ["Document", "Extract", "Validate", "Approve", "Post", "Flag"]
    },
    HR: {
      role: "Answer policy questions and guide onboarding",
      memory: "Policies, role, task progress",
      tools: "HRIS, documents, tasks",
      actions: "Answer, create task, remind",
      escalate: "Sensitive or legal questions",
      flow: ["Employee", "Access", "Policy", "Answer", "Task", "Escalate"]
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

const MARK = `<svg class="brand-mark" viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="square" stroke-linejoin="miter"><path d="M14 10 V54 M14 10 H38 c10 0 16 7 16 16 0 9-6 16-16 16 H26"/><path d="M26 42 L50 54"/></g><rect x="11" y="7" width="6" height="6" fill="#5EE7FF"/><rect x="47" y="22" width="6" height="6" fill="currentColor"/><rect x="47" y="51" width="6" height="6" fill="currentColor"/></svg>`;

document.addEventListener("DOMContentLoaded", () => {
  mountLoader();
  mountSiteShell();
  mountField();
  initHeader();
  initMobileMenu();
  initReveal();
  initLivingSystem();
  initChapters();
  initBusinessExplorer();
  initAgentShowcase();
  initAutomation();
  initIndustries();
  initIntake();
  initAssistant();
  initCursor();
  window.setTimeout(() => document.querySelector(".site-loader")?.classList.add("is-done"), 420);
});

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function brandHTML(subtitle) {
  return `${MARK}<span class="brand-lockup"><span class="brand-name">PALRAM</span><small>${subtitle}</small></span>`;
}

function mountLoader() {
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="site-loader" aria-hidden="true">
      <div class="loader-core">
        <svg class="loader-mark" viewBox="0 0 64 64" fill="none">
          <path d="M14 10 V54 M14 10 H38 c10 0 16 7 16 16 0 9-6 16-16 16 H26 M26 42 L50 54" stroke="currentColor" stroke-width="2.25" stroke-linecap="square"/>
          <rect x="11" y="7" width="6" height="6" fill="#5EE7FF"/>
        </svg>
        <span class="loader-word">PALRAM</span>
      </div>
    </div>`);
  window.setTimeout(() => document.querySelector(".site-loader")?.remove(), 900);
}

function mountField() {
  const page = document.body.dataset.page || "";
  const word = PALRAM.fields[page];
  if (!word || document.querySelector(".field-word")) return;
  const hero = document.querySelector(".page-hero, .hero");
  if (!hero) return;
  hero.insertAdjacentHTML("afterbegin", `<div class="field-word" aria-hidden="true">${word}</div>`);
  document.querySelectorAll("img.page-visual").forEach(image => {
    const holder = document.createElement("div");
    holder.innerHTML = MARK;
    const mark = holder.firstElementChild;
    mark.classList.add("page-visual");
    mark.classList.remove("brand-mark");
    image.replaceWith(mark);
  });
}

function mountSiteShell() {
  const page = document.body.dataset.page || "";
  const nav = PALRAM.nav.map(([id, href, label]) =>
    `<a href="${href}"${page === id ? ' aria-current="page"' : ""}>${label}</a>`
  ).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="spine" aria-hidden="true">P A L R A M</div>
    <header class="site-header" id="siteHeader">
      <div class="wrap nav-shell">
        <a class="brand" href="index.html" aria-label="PALRAM home">${brandHTML("AI · AGENTS · SOFTWARE")}</a>
        <nav class="desktop-nav" aria-label="Primary navigation">${nav}</nav>
        <button class="theme-toggle" id="themeToggle" type="button" aria-label="Switch color theme">◐</button>
        <a class="nav-cta" href="contact.html" data-cursor="START">Start a Project →</a>
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
        <span>© 2026 PALRAM AI</span>
        <span>Signal → Intelligence → Action</span>
      </div>
    </footer>
    <button class="assistant-launcher" id="assistantLauncher" type="button" aria-expanded="false" aria-controls="assistantPanel">
      ${MARK}<span>Guide</span>
    </button>
    <section class="assistant-panel" id="assistantPanel" aria-label="PALRAM guide">
      <div class="assistant-head">
        <div>${MARK}<span><strong>PALRAM guide</strong><small>Website index</small></span></div>
        <button class="assistant-close" id="assistantClose" type="button" aria-label="Close guide">×</button>
      </div>
      <div class="assistant-body">
        <p class="assistant-disclosure">This is a guided interface, not a live AI model.</p>
        <div class="assistant-options">
          ${Object.keys(PALRAM.assistant).map(question => `<button class="assistant-option" type="button" data-question="${escapeHTML(question)}">${question}</button>`).join("")}
        </div>
        <div class="assistant-answer" id="assistantAnswer" aria-live="polite">Choose a question to see how we can help.</div>
      </div>
    </section>
    <div class="site-cursor" id="siteCursor" aria-hidden="true">
      <span class="site-cursor-core"></span>
      <span class="cursor-label" id="cursorLabel" hidden></span>
    </div>
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
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initMobileMenu() {
  const button = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileNav");
  if (!button || !menu) return;
  const setOpen = open => {
    button.classList.toggle("is-open", open);
    menu.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("menu-open", open);
  };
  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", event => { if (event.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") setOpen(false); });
}

function initReveal() {
  const nodes = [...document.querySelectorAll("[data-reveal]")];
  if (!nodes.length) return;
  if (reducedMotion() || !("IntersectionObserver" in window)) {
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

function initLivingSystem() {
  const system = document.querySelector("[data-living-system]");
  if (!system || reducedMotion()) return;
  const nodes = [...system.querySelectorAll(".flow-node")];
  let active = 0;
  window.setInterval(() => {
    nodes.forEach(node => node.classList.remove("is-live"));
    nodes[active % nodes.length]?.classList.add("is-live");
    active += 1;
  }, 1100);
}

function initChapters() {
  const index = document.querySelector("[data-chapter-index]");
  const chapters = [...document.querySelectorAll("[data-chapter]")];
  if (!index || !chapters.length || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) index.textContent = entry.target.dataset.chapter;
    });
  }, { threshold: .35 });
  chapters.forEach(chapter => observer.observe(chapter));
}

function initBusinessExplorer() {
  const tabs = document.querySelector("[data-business-tabs]");
  const result = document.querySelector("[data-business-result]");
  if (!tabs || !result) return;
  const render = area => {
    const item = PALRAM.businessAreas[area];
    result.innerHTML = `
      <div class="tech-label">Selected area</div>
      <h3>${escapeHTML(area)}</h3>
      <div class="outcome-flow">
        ${[
          ["Problem", item.problem],
          ["PALRAM", item.solution],
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
      <div class="tech-label">Agent / active</div>
      <h3>${escapeHTML(name)} Agent</h3>
      <p>${escapeHTML(agent.role)}</p>
      <dl class="agent-spec">
        <div><dt>Role</dt><dd>${escapeHTML(agent.role)}</dd></div>
        <div><dt>Memory</dt><dd>${escapeHTML(agent.memory)}</dd></div>
        <div><dt>Tools</dt><dd>${escapeHTML(agent.tools)}</dd></div>
        <div><dt>Actions</dt><dd>${escapeHTML(agent.actions)}</dd></div>
        <div><dt>Human escalation</dt><dd>${escapeHTML(agent.escalate)}</dd></div>
      </dl>
      <div class="workflow">${agent.flow.map((step, index) => `<div class="workflow-node${index === 0 ? " is-live" : ""}">${escapeHTML(step)}</div>`).join("")}</div>
      <div class="loop-actions">
        ${["Search", "Read", "Reason", "Call API", "Update CRM", "Send message", "Create ticket", "Escalate"].map(item => `<span>${item}</span>`).join("")}
      </div>`;
    const nodes = [...stage.querySelectorAll(".workflow-node")];
    const caps = [...stage.querySelectorAll(".loop-actions span")];
    let tick = 0;
    if (stage._timer) window.clearInterval(stage._timer);
    if (!reducedMotion()) {
      stage._timer = window.setInterval(() => {
        nodes.forEach(node => node.classList.remove("is-live"));
        caps.forEach(cap => cap.classList.remove("is-on"));
        nodes[tick % nodes.length]?.classList.add("is-live");
        caps[tick % caps.length]?.classList.add("is-on");
        tick += 1;
      }, 900);
    }
  };
  list.innerHTML = Object.entries(PALRAM.agents).map(([name, agent], index) =>
    `<button class="agent-card" type="button" data-cursor="EXPLORE" aria-selected="${index === 0}" data-agent="${name}"><strong>${name} Agent</strong><small>${escapeHTML(agent.role)}</small></button>`
  ).join("");
  render(Object.keys(PALRAM.agents)[0]);
  list.addEventListener("click", event => {
    const button = event.target.closest("[data-agent]");
    if (!button) return;
    list.querySelectorAll("[data-agent]").forEach(item => item.setAttribute("aria-selected", String(item === button)));
    render(button.dataset.agent);
  });
}

function initAutomation() {
  const canvas = document.querySelector("[data-automation]");
  if (!canvas) return;
  const nodes = [...canvas.querySelectorAll(".automation-node")];
  nodes.forEach(node => {
    node.setAttribute("data-cursor", "RUN");
    node.tabIndex = 0;
  });
  let tick = 0;
  if (!reducedMotion()) {
    window.setInterval(() => {
      nodes.forEach(node => node.classList.remove("is-live"));
      nodes[tick % nodes.length]?.classList.add("is-live");
      tick += 1;
    }, 1000);
  }
}

function initIndustries() {
  const list = document.querySelector("[data-industry-list]");
  const panel = document.querySelector("[data-industry-panel]");
  if (!list || !panel) return;
  const render = name => {
    panel.innerHTML = `<div class="tech-label">Examples</div><h3>${escapeHTML(name)}</h3><ul>${PALRAM.industries[name].map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
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
  document.addEventListener("keydown", event => { if (event.key === "Escape") setOpen(false); });
}

function initCursor() {
  const root = document.getElementById("siteCursor");
  const label = document.getElementById("cursorLabel");
  if (!root || reducedMotion() || window.matchMedia("(pointer: coarse)").matches) return;
  const move = event => {
    if (!document.body.classList.contains("has-signal-cursor")) {
      document.body.classList.add("has-signal-cursor");
    }
    root.hidden = false;
    root.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    const host = event.target.closest("[data-cursor]");
    root.classList.toggle("is-hot", Boolean(host));
    if (!label) return;
    if (host) {
      label.hidden = false;
      label.textContent = host.dataset.cursor;
    } else {
      label.hidden = true;
    }
  };
  document.addEventListener("pointermove", move, { passive: true });
  document.documentElement.addEventListener("mouseleave", () => { root.hidden = true; });
  document.documentElement.addEventListener("mouseenter", () => { root.hidden = false; });
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
