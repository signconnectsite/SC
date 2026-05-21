/* SCROLL SUAVE PARA SEÇÕES (ChatGPT)*/

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    closeLangMenu();
    closeMobileMenu();
  }
}


/* MENU MOBILE (HAMBÚRGUER) ChatGPT*/

function toggleMobileMenu() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('mobile-menu-btn');
  if (!nav) return;

  const isOpen = nav.classList.toggle('open');

  /* Troca o ícone entre menu fechado e aberto */
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


/* MODO ESCURO ChatGPT */

/* Aplica o tema salvo antes de renderizar a página, evita o flash de tela clara */
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

/* Atualiza o ícone do botão da Lua e do Sol */
function updateDarkIcon() {
  const btn = document.getElementById('dark-toggle');
  if (!btn) return;
  const isDark = document.body.classList.contains('dark');
  btn.innerHTML = isDark
    ? '<i data-lucide="sun" class="w-5 h-5"></i>'
    : '<i data-lucide="moon" class="w-5 h-5"></i>';
  lucide.createIcons();
}


/* DROPDOWN DE IDIOMA ChatGPT */

function toggleLangMenu() {
  const menu = document.getElementById('lang-menu');
  if (menu) menu.classList.toggle('open');
}

function closeLangMenu() {
  const menu = document.getElementById('lang-menu');
  if (menu) menu.classList.remove('open');
}


/* FECHAR MENUS AO CLICAR FORA ChatGPT */

document.addEventListener('click', function (e) {
  /* Fecha o dropdown de idioma se clicar fora dele */
  const dropdown = document.querySelector('.lang-dropdown');
  if (dropdown && !dropdown.contains(e.target)) {
    closeLangMenu();
  }

  /* Fecha o menu mobile se clicar fora do drawer e do botão */
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


/* FORMULÁRIO DE CONTATO ChatGPT */

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    contactForm.reset();

    /* Mostra a mensagem de sucesso e esconde depois de 4 segundos */
    const successMessage = document.getElementById('form-success');
    successMessage.classList.remove('hidden');
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 4000);
  });
}


/* INICIALIZAÇÃO ChatGPT */

document.addEventListener('DOMContentLoaded', function () {
  lucide.createIcons();
  updateDarkIcon();
});
