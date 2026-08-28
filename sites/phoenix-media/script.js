const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

function closeNav() {
  if (!toggle || !nav) return;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.querySelector('.sr-only').textContent = 'Open navigation';
  nav.classList.remove('is-open');
  document.body.classList.remove('nav-open');
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.sr-only').textContent = open ? 'Close navigation' : 'Open navigation';
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  });
  nav.addEventListener('click', closeNav);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeNav(); });
}

document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
const reveals = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  reveals.forEach(node => observer.observe(node));
} else reveals.forEach(node => node.classList.add('is-visible'));

const projectButtons = document.querySelectorAll('[data-project-filter]');
const projectCards = document.querySelectorAll('[data-project-grid] .project-card');
projectButtons.forEach(button => button.addEventListener('click', () => {
  projectButtons.forEach(item => item.classList.toggle('is-active', item === button));
  const filter = button.dataset.projectFilter;
  projectCards.forEach(card => { card.hidden = filter !== 'all' && !card.dataset.format.includes(filter); });
}));
const projectField = document.querySelector('[data-project-field]');
if (projectField) projectField.value = new URLSearchParams(location.search).get('project') || new URLSearchParams(location.search).get('division') || '';

(() => {
  const networkScript = document.createElement('script');
  networkScript.src = new URL('../group-switcher.js', document.currentScript.src);
  networkScript.dataset.currentSite = 'phoenix';
  document.head.append(networkScript);
})();
