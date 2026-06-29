  document.querySelectorAll('[data-section]').forEach(section => {
    const header = section.querySelector('.section-header');
    const toggle = () => {
      const isOpen = section.classList.contains('open');
      section.classList.toggle('open', !isOpen);
      header.setAttribute('aria-expanded', String(!isOpen));
    };
    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });