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

const catalogueButtons = document.querySelectorAll('[data-filter]');
const catalogueItems = document.querySelectorAll('[data-catalogue] > [data-period]');
catalogueButtons.forEach(button => button.addEventListener('click', () => {
  catalogueButtons.forEach(item => item.classList.toggle('is-active', item === button));
  catalogueItems.forEach(item => { item.hidden = button.dataset.filter !== 'all' && item.dataset.period !== button.dataset.filter; });
}));

const creditRows = [...document.querySelectorAll('[data-credit-row]')];
const creditSearch = document.querySelector('[data-credit-search]');
const creditFilters = document.querySelectorAll('[data-credit-filter]');
let creditType = 'all';
function filterCredits() {
  const query = (creditSearch?.value || '').trim().toLowerCase();
  creditRows.forEach(row => { row.hidden = (creditType !== 'all' && row.dataset.type !== creditType) || !row.dataset.search.includes(query); });
}
creditSearch?.addEventListener('input', filterCredits);
creditFilters.forEach(button => button.addEventListener('click', () => {
  creditType = button.dataset.creditFilter;
  creditFilters.forEach(item => item.classList.toggle('is-active', item === button));
  filterCredits();
}));

const workField = document.querySelector('[data-work-field]');
if (workField) workField.value = new URLSearchParams(location.search).get('work') || '';

(() => {
  const networkScript = document.createElement('script');
  networkScript.src = new URL('../group-switcher.js', document.currentScript.src);
  networkScript.dataset.currentSite = 'wilsonwalker';
  document.head.append(networkScript);
})();
