// ─── Navigation scroll effect ───────────────────────────────
const nav = document.getElementById('site-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ─── Mobile menu ─────────────────────────────────────────────
const toggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const isOpen = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = isOpen ? 'none' : 'flex';
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

// ─── Scroll reveal ───────────────────────────────────────────
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));
}

// ─── Post card stagger ───────────────────────────────────────
document.querySelectorAll('.post-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
  card.classList.add('fade-up');
});

// Re-observe after adding class
const newFadeEls = document.querySelectorAll('.post-card.fade-up');
if (newFadeEls.length) {
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  newFadeEls.forEach(el => cardObserver.observe(el));
}

// ─── Active nav link ─────────────────────────────────────────
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPath ||
      (currentPath.startsWith(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
    link.style.color = 'var(--accent)';
    link.style.setProperty('--active', '1');
  }
});
