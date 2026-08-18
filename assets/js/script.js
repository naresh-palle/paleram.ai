/* PALRAM AI — chrome, neural net background, theme, chat */

const PAGES = [
  { id: 'home', href: 'index.html', label: 'Home' },
  { id: 'services', href: 'services.html', label: 'Services' },
  { id: 'work', href: 'portfolio.html', label: 'Work' },
  { id: 'about', href: 'about.html', label: 'About' },
  { id: 'pricing', href: 'pricing.html', label: 'Pricing' },
  { id: 'contact', href: 'contact.html', label: 'Contact' }
];

document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('palram_theme') || 'dark';
  document.body.setAttribute('data-theme', theme);
  mountChrome(document.body.dataset.page || 'home', theme);
  initNeuralNet();
});

function logoHtml() {
  return `<a href="index.html" class="logo">
    <img src="assets/img/logo-icon.png" alt="PALRAM AI" class="logo-img" width="40" height="40">
    <span class="logo-text-stack">
      <span class="brand-title">PALRAM AI</span>
      <span class="brand-sub">SINCE 2026</span>
    </span>
  </a>`;
}

function mountChrome(page, theme) {
  const nav = PAGES.map((p) =>
    `<a href="${p.href}" class="${p.id === page ? 'active' : ''}">${p.label}</a>`
  ).join('');

  const bg = document.createElement('div');
  bg.className = 'ai-bg';
  bg.setAttribute('aria-hidden', 'true');
  bg.innerHTML = '<div class="ai-bg-aurora"></div><canvas id="aiNet"></canvas><div class="ai-bg-vignette"></div>';
  document.body.prepend(bg);

  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `<div class="wrap">
    ${logoHtml()}
    <nav class="nav-links">${nav}</nav>
    <div class="nav-actions">
      <button type="button" class="icon-toggle" id="themeIcon" aria-label="Toggle theme">${theme === 'dark' ? '☾' : '☀'}</button>
      <a href="contact.html" class="btn btn-primary">Book a call</a>
      <button type="button" class="burger" id="burger" aria-label="Open menu">☰</button>
    </div>
  </div>`;
  document.body.insertBefore(header, document.querySelector('main'));

  const mobile = document.createElement('div');
  mobile.id = 'mobileMenu';
  mobile.className = 'mobile-menu';
  mobile.innerHTML = `<button type="button" class="mobile-close" id="mobileClose" aria-label="Close">✕</button>
    <div class="mobile-menu-links">${nav}
      <a href="ai-solutions.html">AI Solutions</a>
      <a href="industries.html">Industries</a>
      <a href="contact.html" class="btn btn-primary">Book a call</a>
    </div>`;
  document.body.appendChild(mobile);

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `<div class="wrap">
    <div class="foot-grid">
      <div>${logoHtml()}<p>AI agents, automation, and software. India · since 2026.</p></div>
      <div><h5>Studio</h5>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="ai-solutions.html">AI Solutions</a>
        <a href="pricing.html">Pricing</a>
      </div>
      <div><h5>Work</h5>
        <a href="portfolio.html">Build types</a>
        <a href="industries.html">Industries</a>
        <a href="contact.html">Start a project</a>
      </div>
      <div><h5>Contact</h5>
        <a href="mailto:contact@palramai.in">contact@palramai.in</a>
        <a href="https://palramai.in">palramai.in</a>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2026 PALRAM AI</span>
      <span>AI studio · India</span>
    </div>
  </div>`;
  document.body.appendChild(footer);

  const chat = document.createElement('div');
  chat.className = 'chat-widget';
  chat.innerHTML = `<div class="chat-panel" id="chatPanel">
      <div class="chat-head">
        <div><b>PALRAM AI</b><span>Guide only · email for a real reply</span></div>
        <button type="button" class="chat-close" id="chatClose" aria-label="Close">✕</button>
      </div>
      <div class="chat-body" id="chatBody">
        <div class="msg bot">Ask about agents, RAG, automation, or pricing. Real replies go to contact@palramai.in.</div>
      </div>
      <div class="chat-input">
        <input type="text" id="chatInput" placeholder="Type a question" autocomplete="off">
        <button type="button" id="chatSend">Send</button>
      </div>
    </div>
    <button type="button" class="chat-bubble" id="chatBubble" aria-label="Open chat">💬</button>`;
  document.body.appendChild(chat);

  document.getElementById('themeIcon').addEventListener('click', toggleTheme);
  document.getElementById('burger').addEventListener('click', () => toggleMobile(true));
  document.getElementById('mobileClose').addEventListener('click', () => toggleMobile(false));
  document.getElementById('chatBubble').addEventListener('click', toggleChat);
  document.getElementById('chatClose').addEventListener('click', toggleChat);
  document.getElementById('chatSend').addEventListener('click', sendChat);
  document.getElementById('chatInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendChat();
  });
}

function toggleTheme() {
  const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', next);
  localStorage.setItem('palram_theme', next);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = next === 'dark' ? '☾' : '☀';
}

function toggleMobile(open) {
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;
  const show = typeof open === 'boolean' ? open : !menu.classList.contains('open');
  menu.classList.toggle('open', show);
  document.body.style.overflow = show ? 'hidden' : '';
}

function toggleChat() {
  document.getElementById('chatPanel')?.classList.toggle('open');
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const body = document.getElementById('chatBody');
  if (!input || !body || !input.value.trim()) return;
  const userText = input.value.trim();
  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.textContent = userText;
  body.appendChild(userMsg);
  input.value = '';
  body.scrollTop = body.scrollHeight;

  const lower = userText.toLowerCase();
  let reply = 'This widget is a short guide. Email contact@palramai.in for a real reply.';
  if (/price|cost|pricing|₹|rupee/.test(lower)) {
    reply = 'Starter work begins at ₹49,999. Larger builds are quoted after a short call. See Pricing, or email contact@palramai.in.';
  } else if (/contact|call|email/.test(lower)) {
    reply = 'Write to contact@palramai.in or use the Contact page.';
  } else if (/agent|rag|automat/.test(lower)) {
    reply = 'We build AI agents, RAG over your documents, and workflow automation. Share the use case on Contact.';
  }
  const botMsg = document.createElement('div');
  botMsg.className = 'msg bot';
  botMsg.textContent = reply;
  body.appendChild(botMsg);
  body.scrollTop = body.scrollHeight;
}

function submitInquiry(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const lines = [
    'Name: ' + (data.get('name') || ''),
    'Company: ' + (data.get('company') || ''),
    'Email: ' + (data.get('email') || ''),
    'Phone: ' + (data.get('phone') || ''),
    'Service: ' + (data.get('service') || ''),
    'Budget: ' + (data.get('budget') || ''),
    '',
    data.get('details') || ''
  ];
  window.location.href =
    'mailto:contact@palramai.in?subject=' +
    encodeURIComponent('Project inquiry — PALRAM AI') +
    '&body=' +
    encodeURIComponent(lines.join('\n'));
}

/* Neural network canvas — violet / cyan, matches brand */
function initNeuralNet() {
  const canvas = document.getElementById('aiNet');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let nodes = [];
  let raf = 0;
  let w = 0;
  let h = 0;

  function color(alphaViolet, alphaCyan, t) {
    const light = document.body.getAttribute('data-theme') === 'light';
    const a = light ? 0.45 : 1;
    if (t > 0.5) return `rgba(6, 182, 212, ${(alphaCyan * a).toFixed(3)})`;
    return `rgba(168, 85, 247, ${(alphaViolet * a).toFixed(3)})`;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(90, Math.max(28, (w * h) / 18000)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 1.2 + Math.random() * 1.8,
      t: Math.random()
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    const maxDist = Math.min(160, w * 0.14);

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      if (!reduce) {
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
      }
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < maxDist) {
          ctx.strokeStyle = color(0.22 * (1 - d / maxDist), 0.18 * (1 - d / maxDist), (a.t + b.t) / 2);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = color(0.85, 0.75, a.t);
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(tick);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else raf = requestAnimationFrame(tick);
  });
  raf = requestAnimationFrame(tick);
}
