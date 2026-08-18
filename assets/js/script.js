/* ==========================================================================
   PALRAM AI — Theme, mobile nav, inquiry mailto, chat helper
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('palram_theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
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
  if (!menu) return;
  menu.classList.toggle('open');
  const open = menu.classList.contains('open');
  menu.style.display = open ? 'block' : 'none';
  document.body.style.overflow = open ? 'hidden' : '';
}

function submitInquiry(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
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
  const subject = encodeURIComponent('Project inquiry — PALRAM AI');
  const body = encodeURIComponent(lines.join('\n'));
  window.location.href = 'mailto:contact@palramai.in?subject=' + subject + '&body=' + body;
}

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
  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.innerText = userText;
  body.appendChild(userMsg);
  input.value = '';
  body.scrollTop = body.scrollHeight;

  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot';
    const lower = userText.toLowerCase();
    if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing') || lower.includes('₹') || lower.includes('rupee')) {
      botMsg.innerText = 'Starter work begins at ₹49,999. Larger builds are quoted after a short call. Details are on the Pricing page, or email contact@palramai.in.';
    } else if (lower.includes('contact') || lower.includes('consultation') || lower.includes('call') || lower.includes('email')) {
      botMsg.innerText = 'Email contact@palramai.in or use the Contact page. We reply from that inbox.';
    } else if (lower.includes('agent') || lower.includes('rag') || lower.includes('automat')) {
      botMsg.innerText = 'We build AI agents, RAG search over your documents, and workflow automation (n8n and custom APIs). Share your use case on the Contact page.';
    } else {
      botMsg.innerText = 'This widget is a short guide only. For a real reply, write to contact@palramai.in.';
    }
    body.appendChild(botMsg);
    body.scrollTop = body.scrollHeight;
  }, 400);
}
