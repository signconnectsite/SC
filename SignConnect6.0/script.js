/* SCROLL */
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    // close lang menu if open
    closeLangMenu();
  }
}

/* DARK MODE */
(function () {
  const saved = localStorage.getItem('singconnect-theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
  }
})();

function toggleDark() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('singconnect-theme', isDark ? 'dark' : 'light');
  updateDarkIcon();
}

function updateDarkIcon() {
  const btn = document.getElementById('dark-toggle');
  if (!btn) return;
  const isDark = document.body.classList.contains('dark');
  btn.innerHTML = isDark
    ? '<i data-lucide="sun" class="w-5 h-5"></i>'
    : '<i data-lucide="moon" class="w-5 h-5"></i>';
  lucide.createIcons();
}

/* LANG DROPDOWN */
function toggleLangMenu() {
  const menu = document.getElementById('lang-menu');
  if (menu) menu.classList.toggle('open');
}

function closeLangMenu() {
  const menu = document.getElementById('lang-menu');
  if (menu) menu.classList.remove('open');
}

document.addEventListener('click', function (e) {
  const dropdown = document.querySelector('.lang-dropdown');
  if (dropdown && !dropdown.contains(e.target)) {
    closeLangMenu();
  }
});

/* FORMULÁRIO */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    contactForm.reset();
    const successMessage = document.getElementById('form-success');
    successMessage.classList.remove('hidden');
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 4000);
  });
}

/* INIT ICONS + DARK ICON */
document.addEventListener('DOMContentLoaded', function () {
  lucide.createIcons();
  updateDarkIcon();
});
