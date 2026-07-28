/* ==========================================================================
   PALRAM AI — Interactive Scripts
   Theme toggle, Mobile Nav, Counter Animations, Logo Switcher & Chat Assistant
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const savedTheme = localStorage.getItem('palram_theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Check saved logo variation
  const savedLogo = localStorage.getItem('palram_logo_var');
  if (savedLogo) {
    applyLogoVariation(parseInt(savedLogo, 10), false);
  }

  // Counter Animation
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }
});

function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('palram_theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.innerHTML = theme === 'dark' ? '&#9789;' : '&#9788;';
  }
}

function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
  }
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  let count = 0;
  const speed = target / 50;
  const updateCount = () => {
    count += speed;
    if (count < target) {
      el.innerText = Math.ceil(count);
      setTimeout(updateCount, 30);
    } else {
      el.innerText = target + '+';
    }
  };
  updateCount();
}

function applyLogoVariation(v, notify = true) {
  localStorage.setItem('palram_logo_var', v);
  const headerLogo = document.getElementById('headerLogo');
  const footerLogo = document.getElementById('footerLogo');

  let html = '';
  if (v === 1) {
    html = `<div class="logo-svg-icon"><svg width="34" height="34" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="url(#logo-bg-grad)"/><path d="M12 10H23C27.4183 10 31 13.5817 31 18C31 22.4183 27.4183 26 23 26H18V30" stroke="white" stroke-width="3.5" stroke-linecap="round"/><line x1="12" y1="10" x2="12" y2="30" stroke="white" stroke-width="3.5"/><circle cx="23" cy="18" r="3.5" fill="#06B6D4"/><defs><linearGradient id="logo-bg-grad" x1="0" y1="0" x2="40" y2="40"><stop stop-color="#FF3500"/><stop offset="1" stop-color="#06B6D4"/></linearGradient></defs></svg></div><span class="logo-text-script">palramai</span><span class="logo-arrow">&#8599;</span>`;
    if (headerLogo) headerLogo.className = 'logo logo-v1';
    if (footerLogo) footerLogo.className = 'logo logo-v1';
  } else if (v === 2) {
    html = `<div class="badge-v2">P</div><span>PALRAM<span class="ai-dot">•</span>AI</span>`;
    if (headerLogo) headerLogo.className = 'logo logo-v2';
    if (footerLogo) footerLogo.className = 'logo logo-v2';
  } else if (v === 3) {
    html = `<span>PALRAM AI</span><span class="ai-tag">ENTERPRISE</span>`;
    if (headerLogo) headerLogo.className = 'logo logo-v3';
    if (footerLogo) footerLogo.className = 'logo logo-v3';
  } else if (v === 4) {
    html = `<span class="script-v4">palramai</span><span class="arrow-v4">&#8599;</span>`;
    if (headerLogo) headerLogo.className = 'logo logo-v4';
    if (footerLogo) footerLogo.className = 'logo logo-v4';
  }

  if (headerLogo) headerLogo.innerHTML = html;
  if (footerLogo) footerLogo.innerHTML = html;
  if (notify) alert('Applied Logo Variation ' + v + '!');
}

// Chat Assistant Widget
function toggleChat() {
  const panel = document.getElementById('chatPanel');
  if (panel) {
    panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
  }
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const body = document.getElementById('chatBody');
  if (!input || !body || !input.value.trim()) return;

  const userText = input.value.trim();

  // Add User Message
  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.innerText = userText;
  body.appendChild(userMsg);

  input.value = '';
  body.scrollTop = body.scrollHeight;

  // Bot Reply Simulation
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot';
    
    const lower = userText.toLowerCase();
    if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing')) {
      botMsg.innerText = "Our custom AI & engineering solutions range from $5,000 to $50,000+ depending on scope. View details on our Pricing page!";
    } else if (lower.includes('agent') || lower.includes('ai') || lower.includes('bot')) {
      botMsg.innerText = "We build custom AI agents for Support, Sales, Coding, Research, and HR! Which workflow would you like to automate?";
    } else if (lower.includes('contact') || lower.includes('consultation') || lower.includes('call')) {
      botMsg.innerText = "You can book a free consultation directly at contact@palramai.in or click 'Book Consultation' above!";
    } else {
      botMsg.innerText = "Thanks for reaching out! A PALRAM AI engineer will review your inquiry and reply shortly. Feel free to leave your email.";
    }

    body.appendChild(botMsg);
    body.scrollTop = body.scrollHeight;
  }, 700);
}
