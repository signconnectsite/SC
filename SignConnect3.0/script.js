// Controle de visibilidade do Header
let lastScrollTop = 0;
const header = document.querySelector('header');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Rolando para baixo
        header.classList.add('header-hidden');
    } else {
        // Rolando para cima
        header.classList.remove('header-hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
}, { passive: true });

// Suporte para fechar o seletor de idiomas em dispositivos touch
document.addEventListener('touchstart', (e) => {
    const switcher = document.querySelector('.lang-switcher');
    if (!switcher.contains(e.target)) {
        document.querySelector('.lang-options').style.display = 'none';
    }
});