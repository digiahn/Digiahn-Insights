// ── Nav scroll ──────────────────────────────────────────────
const nav = document.getElementById('site-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ── Mobile menu ─────────────────────────────────────────────
const toggle  = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const open = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = open ? 'none' : 'flex';
    toggle.setAttribute('aria-expanded', String(!open));
    const spans = toggle.querySelectorAll('span');
    if (!open) {
      spans[0].style.transform = 'translateY(6px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { mobileMenu.style.display = 'none'; });
  });
}

// ── Scroll reveal ────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Post card stagger ────────────────────────────────────────
const cards = document.querySelectorAll('.post-card');
cards.forEach((card, i) => {
  card.classList.add('fade-up');
  card.style.transitionDelay = `${i * 55}ms`;
});
const cardObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); cardObs.unobserve(e.target); }
  });
}, { threshold: 0.05 });
cards.forEach(el => cardObs.observe(el));

// ── Active nav link ──────────────────────────────────────────
const path = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href !== '/' && path.startsWith(href)) {
    link.style.color = 'var(--accent)';
  }
});
