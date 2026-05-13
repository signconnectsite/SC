function scrollToSection(id) {
    const section = document.getElementById(id);
  
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
  
  /* FORMULÁRIO */
  
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
  
    contactForm.addEventListener('submit', function (e) {
  
      e.preventDefault();
  
      contactForm.reset();
  
      const successMessage =
        document.getElementById('form-success');
  
      successMessage.classList.remove('hidden');
  
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 4000);
  
    });
  
  }
  
  /* ICONES */
  
  lucide.createIcons();