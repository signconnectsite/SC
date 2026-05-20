/* SCROLL */
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    closeLangMenu();
    closeMobileMenu();
  }
}

/* MOBILE MENU */
function toggleMobileMenu() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('mobile-menu-btn');
  if (!nav) return;
  const isOpen = nav.classList.toggle('open');
  if (btn) {
    btn.innerHTML = isOpen
      ? '<i data-lucide="x" class="w-5 h-5"></i>'
      : '<i data-lucide="menu" class="w-5 h-5"></i>';
    lucide.createIcons();
  }
}

function closeMobileMenu() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('mobile-menu-btn');
  if (nav) nav.classList.remove('open');
  if (btn) {
    btn.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
    lucide.createIcons();
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
  // Close mobile menu if clicking outside header/drawer
  const mobileNav = document.getElementById('mobile-nav');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  if (
    mobileNav &&
    mobileNav.classList.contains('open') &&
    !mobileNav.contains(e.target) &&
    mobileBtn &&
    !mobileBtn.contains(e.target)
  ) {
    closeMobileMenu();
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
