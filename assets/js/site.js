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

const MARK = `<svg class="brand-mark" viewBox="0 0 64 64" aria-hidden="true"><rect class="stack-bar" x="12" y="10" width="13" height="44" rx="6.5" fill="currentColor"/><rect class="stack-bar" x="28.5" y="18" width="13" height="36" rx="6.5" fill="currentColor"/><rect class="stack-signal" x="45" y="28" width="13" height="26" rx="6.5" fill="#FF4D8D"/></svg>`;

document.addEventListener("DOMContentLoaded", () => {
  mountColorField();
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
  window.setTimeout(() => document.querySelector(".site-loader")?.classList.add("is-done"), 780);
});

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function brandHTML(subtitle) {
  return `${MARK}<span class="brand-lockup"><span class="brand-name">PALRAM</span><small>${subtitle}</small></span>`;
}

function mountColorField() {
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="color-field" aria-hidden="true">
      <span></span><span></span><span></span><span></span><span></span>
    </div>`);
}

function mountLoader() {
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="site-loader" aria-hidden="true">
      <div class="loader-core">
        <svg class="loader-mark" viewBox="0 0 64 64" aria-hidden="true">
          <rect class="stack-bar" x="12" y="10" width="13" height="44" rx="6.5" fill="currentColor"/>
          <rect class="stack-bar" x="28.5" y="18" width="13" height="36" rx="6.5" fill="currentColor"/>
          <rect class="stack-signal" x="45" y="28" width="13" height="26" rx="6.5" fill="#FF4D8D"/>
        </svg>
        <span class="loader-word">PALRAM</span>
      </div>
    </div>`);
  window.setTimeout(() => document.querySelector(".site-loader")?.remove(), 1200);
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
    <button class="agent-fab" id="agentFab" type="button" aria-expanded="false" aria-controls="agentChat">
      ${MARK}<span>Ask PALRAM</span>
    </button>
    <section class="agent-chat" id="agentChat" aria-label="PALRAM chat">
      <div class="agent-chat-head">
        <div>${MARK}<span><strong>PALRAM</strong><small>Here to help you find a path</small></span></div>
        <button class="agent-chat-close" id="agentChatClose" type="button" aria-label="Close chat">×</button>
      </div>
      <div class="agent-chat-thread" id="agentChatThread" aria-live="polite"></div>
      <div class="agent-chat-chips" id="agentChatChips"></div>
      <form class="agent-chat-form" id="agentChatForm">
        <label class="sr-only" for="agentChatInput">Your question</label>
        <input id="agentChatInput" name="question" autocomplete="off" placeholder="Ask about agents, apps, or how to start">
        <button class="button button-primary" type="submit">Send</button>
      </form>
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
  if (!system) return;
  const canvas = system.querySelector(".system-canvas");
  const svg = canvas?.querySelector("svg");
  const stepEl = system.querySelector("[data-system-step]");
  const statusEl = system.querySelector("[data-system-status]");
  if (!canvas || !svg) return;

  const nodes = Object.fromEntries(
    [...system.querySelectorAll(".flow-node")].map(node => [node.dataset.id, node])
  );
  const edges = [
    ["input", "agent"],
    ["agent", "memory"],
    ["agent", "tools"],
    ["memory", "decision"],
    ["tools", "decision"],
    ["decision", "action"],
    ["decision", "human"],
    ["action", "outcome"],
    ["human", "outcome"]
  ];
  const beats = [
    { live: ["input"], edges: [], step: "01 / Input", status: "A question arrives" },
    { live: ["input", "agent"], edges: ["input-agent"], step: "02 / Agent", status: "The agent takes the work" },
    { live: ["agent", "memory", "tools"], edges: ["agent-memory", "agent-tools"], step: "03 / Memory & tools", status: "It checks knowledge and approved systems" },
    { live: ["decision"], edges: ["memory-decision", "tools-decision"], step: "04 / Decision", status: "It chooses the next step" },
    { live: ["action", "human"], edges: ["decision-action", "decision-human"], step: "05 / Action", status: "It acts, and a person can step in" },
    { live: ["outcome"], edges: ["action-outcome", "human-outcome"], step: "06 / Outcome", status: "The result lands" }
  ];

  const seen = new Set();
  let index = 0;
  let timer = 0;
  let drawTimer = 0;

  const point = id => {
    const el = nodes[id];
    const box = canvas.getBoundingClientRect();
    const node = el.getBoundingClientRect();
    return {
      x: node.left + node.width / 2 - box.left,
      y: node.top + node.height / 2 - box.top
    };
  };

  const curve = (from, to) => {
    const a = point(from);
    const b = point(to);
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const nx = (a.y - b.y) * 0.14;
    const ny = (b.x - a.x) * 0.14;
    return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${(mx + nx).toFixed(1)} ${(my + ny).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
  };

  const apply = (i, restartPackets = true) => {
    const current = beats[i];
    if (i === 0) seen.clear();
    current.live.forEach(id => seen.add(id));
    Object.values(nodes).forEach(node => {
      const id = node.dataset.id;
      node.classList.toggle("is-live", current.live.includes(id));
      node.classList.toggle("is-done", seen.has(id) && !current.live.includes(id));
    });
    svg.querySelectorAll("[data-edge]").forEach(path => {
      const on = current.edges.includes(path.dataset.edge);
      path.classList.remove("is-on");
      if (on && restartPackets) {
        void path.getBoundingClientRect();
        path.classList.add("is-on");
      } else if (on) {
        path.classList.add("is-on");
      }
    });
    if (stepEl) stepEl.textContent = current.step;
    if (statusEl) statusEl.textContent = current.status;
  };

  const draw = () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.innerHTML = edges.map(([from, to]) => {
      const id = `${from}-${to}`;
      const d = curve(from, to);
      return `<path class="flow" data-edge="${id}" d="${d}"></path><path class="signal" data-edge="${id}" pathLength="100" d="${d}"></path>`;
    }).join("");
    apply(index, false);
  };

  const scheduleDraw = () => {
    window.clearTimeout(drawTimer);
    drawTimer = window.setTimeout(draw, 50);
  };

  const tick = () => {
    apply(index, true);
    index = (index + 1) % beats.length;
  };

  const start = () => {
    if (timer || reducedMotion()) return;
    tick();
    timer = window.setInterval(tick, 1300);
  };

  const stop = () => {
    window.clearInterval(timer);
    timer = 0;
  };

  draw();
  window.addEventListener("resize", scheduleDraw);
  if ("ResizeObserver" in window) new ResizeObserver(scheduleDraw).observe(canvas);

  if (reducedMotion()) return;
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? start() : stop());
    }, { threshold: .35 });
    observer.observe(system);
  } else {
    start();
  }
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
  let step = 0;
  const statusFor = () => panels[step]?.querySelector(".form-status");
  const show = next => {
    step = Math.max(0, Math.min(next, panels.length - 1));
    panels.forEach((panel, index) => panel.classList.toggle("is-active", index === step));
    progress.forEach((item, index) => {
      item.classList.toggle("is-active", index === step);
      item.classList.toggle("is-done", index < step);
    });
    panels[step].querySelector("button, input, textarea")?.focus();
    const live = statusFor();
    if (live) live.textContent = "";
  };
  form.querySelectorAll("[data-choice]").forEach(button => {
    button.addEventListener("click", () => {
      const group = button.dataset.group;
      const multi = button.closest("[data-multi]") !== null;
      if (multi) {
        const next = button.getAttribute("aria-pressed") !== "true";
        button.setAttribute("aria-pressed", String(next));
      } else {
        form.querySelectorAll(`[data-group="${group}"]`).forEach(item => item.setAttribute("aria-pressed", String(item === button)));
      }
      const selected = [...form.querySelectorAll(`[data-group="${group}"][aria-pressed="true"]`)]
        .map(item => item.dataset.choice);
      const target = form.elements.namedItem(group);
      if (target) target.value = selected.join(", ");
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
      const live = statusFor();
      if (live) live.textContent = "Select an option to continue.";
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
      `Problem notes: ${data.get("problemNotes") || "None"}`,
      `Organisation: ${data.get("companyStage")}`,
      `First delivery: ${data.get("deliveryScale")}`,
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
  const fab = document.getElementById("agentFab");
  const chat = document.getElementById("agentChat");
  const close = document.getElementById("agentChatClose");
  const thread = document.getElementById("agentChatThread");
  const chips = document.getElementById("agentChatChips");
  const form = document.getElementById("agentChatForm");
  const input = document.getElementById("agentChatInput");
  if (!fab || !chat || !close || !thread || !chips || !form || !input) return;

  const suggestions = [
    ["What can PALRAM AI build?", "What you build"],
    ["Can you automate my business?", "Automation"],
    ["Can you build an AI agent?", "AI agents"],
    ["How much does an AI project cost?", "Pricing"],
    ["Can you build a mobile app?", "Mobile apps"],
    ["How do I start?", "How to start"]
  ];

  const fallback = "I can help with agents, automation, software, mobile, pricing, or how to start. Or open Start a Project and send a brief to admin@palramai.in.";

  const addMessage = (role, text) => {
    const row = document.createElement("div");
    row.className = `chat-row is-${role}`;
    const bubble = document.createElement("p");
    bubble.textContent = text;
    row.appendChild(bubble);
    thread.appendChild(row);
    thread.scrollTop = thread.scrollHeight;
  };

  const replyTo = question => {
    const answer = PALRAM.assistant[question] || fallback;
    addMessage("agent", answer);
  };

  const matchQuestion = text => {
    const q = text.toLowerCase();
    if (/(automat|workflow|handoff)/.test(q)) return "Can you automate my business?";
    if (/(agent|digital worker)/.test(q)) return "Can you build an AI agent?";
    if (/(cost|price|pricing|budget)/.test(q)) return "How much does an AI project cost?";
    if (/(mobile|ios|android|app)/.test(q)) return "Can you build a mobile app?";
    if (/(start|contact|begin|enquiry|email)/.test(q)) return "How do I start?";
    if (/(build|software|what can|services)/.test(q)) return "What can PALRAM AI build?";
    return "";
  };

  chips.innerHTML = suggestions.map(([question, label]) =>
    `<button class="agent-chip" type="button" data-question="${escapeHTML(question)}">${escapeHTML(label)}</button>`
  ).join("");

  const setOpen = open => {
    chat.classList.toggle("is-open", open);
    fab.hidden = open;
    fab.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("agent-open", open);
    if (open && !thread.childElementCount) {
      addMessage("agent", "Hi. Ask what you want to build — agents, automation, software, mobile, or how to start.");
    }
    if (open) input.focus();
  };

  fab.addEventListener("click", () => setOpen(true));
  close.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", event => { if (event.key === "Escape") setOpen(false); });
  chips.addEventListener("click", event => {
    const button = event.target.closest("[data-question]");
    if (!button) return;
    addMessage("user", button.dataset.question);
    replyTo(button.dataset.question);
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addMessage("user", text);
    input.value = "";
    const key = matchQuestion(text);
    replyTo(key || "");
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
