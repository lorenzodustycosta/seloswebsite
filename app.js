// ─────────────────────────────────────────────────────────────────────────────
// app.js — Selo’s Design SPA (vanilla JS, no framework, no build step)
// ─────────────────────────────────────────────────────────────────────────────

// ── STATO DELL'APPLICAZIONE ────────────────────────────────────────────────

const state = {
  lang: 'it',      // lingua attiva: 'it' | 'en' | 'tr'
  page: 'home',    // pagina attiva: 'home' | 'team' | 'projects' | 'project' | 'contact'
  projectId: null       // id del progetto aperto (solo quando page === 'project')
};

// Stato del lightbox (separato per evitare re-render della pagina)
const lbState = {
  images: [],  // array di { src, caption }
  index: 0
};

// Contatore per generare id SVG univoci ad ogni render
let _svgId = 0;

// ── URL ROUTING (hash-based, funziona su file:// e http://) ───────────────

function buildHash(page, projectId) {
  if (!page || page === 'home') return '#/';
  if (page === 'project' && projectId) return `#/project/${projectId}`;
  return `#/${page}`;
}

function parseHash() {
  const raw = location.hash.replace(/^#\/?/, '');
  if (!raw) return { page: 'home', projectId: null };
  const parts = raw.split('/');
  if (parts[0] === 'project' && parts[1]) return { page: 'project', projectId: parts[1] };
  const valid = ['home', 'team', 'projects', 'contact', 'privacy', 'interior', 'consultation', 'rendering', 'international', 'amsterdam'];
  return { page: valid.includes(parts[0]) ? parts[0] : 'home', projectId: null };
}

// ── HELPERS ────────────────────────────────────────────────────────────────

// Restituisce la stringa tradotta per la lingua corrente.
// obj può essere una stringa semplice o un oggetto { it, en, tr }.
// Se il valore per la lingua corrente è "" (stringa vuota), lo restituisce così —
// non fa fallback, in modo che le traduzioni mancanti siano visibili nel sito.
function t(obj) {
  if (obj === null || obj === undefined) return '';
  if (typeof obj !== 'object') return String(obj);
  const val = obj[state.lang];
  // Restituisce il valore se definito (anche stringa vuota)
  if (val !== undefined) return val;
  // Fallback: italiano poi inglese (per chiavi non ancora presenti nei dati)
  return obj['it'] || obj['en'] || '';
}

// Restituisce il pacchetto linguistico attivo
function lang() {
  return window['LANG_' + state.lang.toUpperCase()];
}

// Aggiorna <title> e <meta description> in base alla pagina corrente
const SITE_ORIGIN = 'https://www.selosdesign.com';
const PAGE_SLUGS = { home: '', team: 'team', projects: 'projects', contact: 'contact', privacy: 'privacy', interior: 'interior-design-milano', consultation: 'consulenza-arredo', rendering: 'rendering', international: 'progetti-internazionali', amsterdam: 'amsterdam' };

function pageUrl(page = state.page, projectId = state.projectId, language = state.lang) {
  const slug = page === 'project' ? (projectId === 'amsterdam' ? 'amsterdam' : 'project-' + projectId) : PAGE_SLUGS[page];
  if (!slug) return language === 'en' ? '/home-en/' : '/';
  return '/' + slug + (language === 'en' ? '-en' : '') + '/';
}

function pageMeta() {
  const en = state.lang === 'en';
  const service = lang().servicePages && lang().servicePages[state.page];
  if (service) return { title: service.title + ' — Selo’s Design', desc: service.description };
  if (state.page === 'project') {
    const p = PROJECTS.find(p => p.id === state.projectId);
    if (p) return { title: t(p.title) + ' — Selo’s Design', desc: t(p.intro[0]).length > 160 ? t(p.intro[0]).slice(0, 157).replace(/\s+\S*$/, '') + '…' : t(p.intro[0]) };
  }
  const names = en ? { home: 'Interior Design Studio | Magenta, Milan', team: 'Our Team', projects: 'Interior Design Projects', contact: 'Tell us about your project', privacy: 'Privacy & Cookie Policy' } : { home: 'Studio di Interior Design | Magenta, Milano', team: 'Il Team', projects: 'Progetti di interior design', contact: 'Parlaci del tuo progetto', privacy: 'Privacy & Cookie Policy' };
  const descriptions = en ? { home: 'Residential interior design in Magenta and Milan. Tailored spaces, furniture selection, visualisation and furnishing consultation.', team: 'Meet Selin Hilal and Lorenzo Costa, the people behind Selo’s Design in Magenta and Milan.', projects: 'Explore real Selo’s Design projects through interior layouts, material choices and visualisations.', contact: 'Discuss your residential interior project with Selo’s Design. Contact us by email, phone or project enquiry form.', privacy: 'How Selo’s Design handles personal information provided through the contact form.' } : { home: 'Interior design residenziale a Magenta e Milano. Spazi su misura, selezione di arredi, rendering e consulenza d’arredo.', team: 'Selin Hilal e Lorenzo Costa: le persone dietro i progetti Selo’s Design a Magenta e Milano.', projects: 'Esplora i progetti reali di Selo’s Design: distribuzione degli spazi, materiali e visualizzazioni di interni.', contact: 'Parla con Selo’s Design del tuo progetto residenziale. Contattaci per email, telefono o con il modulo di richiesta.', privacy: 'Come Selo’s Design tratta le informazioni personali fornite tramite il modulo di contatto.' };
  return { title: names[state.page] + ' — Selo’s Design', desc: descriptions[state.page] };
}

function updateMeta() {
  const m = pageMeta();
  document.title = m.title;
  document.querySelector('meta[name="description"]').content = m.desc;
  document.querySelector('link[rel="canonical"]').href = SITE_ORIGIN + pageUrl();
  ['it', 'en'].forEach(code => document.querySelector('link[hreflang="' + code + '"]').href = SITE_ORIGIN + pageUrl(state.page, state.projectId, code));
  const values = { 'og:title': m.title, 'og:description': m.desc, 'og:url': SITE_ORIGIN + pageUrl(), 'og:locale': state.lang === 'en' ? 'en_GB' : 'it_IT' };
  Object.entries(values).forEach(([key, value]) => document.querySelector('meta[property="' + key + '"]').content = value);
}

// Cerca uno spec per chiave inglese (per visualizzare location/area nella lista)
function findSpec(project, keys) {
  const s = project.specs.find(x => keys.includes((x.label.en || '').toLowerCase()));
  return s ? t(s.value) : null;
}

// The typography tools are loaded only when explicitly opened with ?fonts=1.
function fontPreviewUrl(url) {
  if (!new URLSearchParams(location.search).has('fonts')) return url;
  if (url.startsWith('#')) return location.search + url;
  const target = new URL(url, location.href);
  target.searchParams.set('fonts', '1');
  return target.pathname + target.search + target.hash;
}

function syncFontPreview() {
  const enabled = new URLSearchParams(location.search).has('fonts');
  if (!enabled && !window.SelosFontPreview) return;
  document.querySelectorAll('a[data-nav], a[data-nav-project]').forEach(link => {
    const target = new URL(link.href, location.href);
    if (enabled) target.searchParams.set('fonts', '1');
    else target.searchParams.delete('fonts');
    link.setAttribute('href', target.pathname + target.search + target.hash);
  });
  if (window.SelosFontPreview) {
    window.SelosFontPreview.sync();
  } else if (enabled && !document.getElementById('font-preview-script')) {
    const script = document.createElement('script');
    script.id = 'font-preview-script';
    script.src = 'preview/typography.js';
    document.body.append(script);
  }
}

// Converte il testo di una bio (paragrafi separati da \n\n) in elementi <p>
function bioParagraphs(text) {
  if (!text) return '';
  const paras = text.split('\n\n');
  return paras.map((p, i) =>
    `<p class="team-bio"${i < paras.length - 1 ? ' style="margin-bottom:14px"' : ''}>${p}</p>`
  ).join('');
}

// Genera un SVG placeholder per i ritratti (usato finché non ci sono foto reali)
function portraitSvg(color) {
  const id = 'ps-' + (++_svgId);
  return `<svg viewBox="0 0 600 750" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
    <defs>
      <pattern id="${id}" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
        <rect width="20" height="20" fill="${color}"/>
        <rect width="1" height="20" fill="oklch(50% 0.04 80 / 0.12)"/>
      </pattern>
    </defs>
    <rect width="600" height="750" fill="url(#${id})"/>
  </svg>`;
}

// ── FRAMMENTI CONDIVISI ────────────────────────────────────────────────────

function renderNav() {
  const L = lang();
  // Evidenzia "Progetti" anche quando si è su una pagina di dettaglio progetto
  const activePage = ['project', 'amsterdam'].includes(state.page) ? 'projects' : state.page;
  return `
    <nav class="nav">
      <a class="nav-logo" href="${pageUrl('home')}" data-nav="home">
        <img src="assets/logo.png" alt="Selo’s Design">
        <span class="nav-logo-text">Selo’s Design</span>
      </a>
      <div class="nav-links">
        ${['home', 'team', 'projects', 'contact'].map(p => `
          <a class="nav-link${activePage === p ? ' active' : ''}" href="${pageUrl(p)}" data-nav="${p}">${L.nav[p]}</a>
        `).join('')}
        <div class="nav-lang">
          <button class="lang-btn${state.lang === 'it' ? ' active' : ''}" data-lang="it">IT</button>
          <span class="lang-sep">|</span>
          <button class="lang-btn${state.lang === 'en' ? ' active' : ''}" data-lang="en">EN</button>
        </div>
      </div>
      <button class="nav-hamburger" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>`;
}

function renderFooter() {
  const f = lang().footer;
  return `
    <footer class="footer">
      <div class="footer-logo">
        <img src="assets/logo.png" alt="" style="height:52px;width:52px;object-fit:contain">
        <div class="footer-logo-text">Selo’s Design</div>
        <div class="footer-tagline">${f.tagline}</div>
      </div>
      <div class="footer-col">
        <div class="footer-heading">${f.studioLabel}</div>
        <a href="mailto:selosdesign@gmail.com" class="footer-link">selosdesign@gmail.com</a>
        <a href="tel:+393662312315" class="footer-link" style="margin-top:4px">+39 366 23 12 315</a>
        <a href="https://wa.me/393662312315" target="_blank" rel="noreferrer" class="footer-link" style="margin-top:4px">WhatsApp</a>
      </div>
      <div class="footer-col">
        <div class="footer-heading">${f.hoursLabel}</div>
        <div class="footer-line">${f.hoursLine1}</div>
        <div class="footer-line">${f.hoursLine2}</div>
        <div class="footer-line" style="margin-top:16px">P.IVA 11190110962</div>
      </div>
    </footer>
    <div class="footer-bottom">
      <div class="footer-bottom-text">${f.rights}</div>
      <div class="footer-socials">
        <a class="social-link" href="https://www.instagram.com/selos_design/" target="_blank" rel="noreferrer">Instagram</a>
        <a class="social-link" href="https://www.facebook.com/selosdesign" target="_blank" rel="noreferrer">Facebook</a>
        <a class="social-link" href="https://www.linkedin.com/in/selin-hilal" target="_blank" rel="noreferrer">LinkedIn</a>
        <a class="social-link" href="${pageUrl('privacy')}" data-nav="privacy">${f.privacy}</a>
      </div>
    </div>`;
}

function renderCtaBlock(c = lang().projects, className = '') {
  return `
    <div class="pd-cta${className ? ' ' + className : ''}">
      <h2 class="pd-cta-title">${c.ctaTitle}</h2>
      <p class="pd-cta-text">${c.ctaText}</p>
      <button class="btn-primary" data-cta="contact" data-cta-location="page" data-nav="contact">${c.ctaBtn}</button>
    </div>`;
}

// ── HOME ───────────────────────────────────────────────────────────────────

function renderHome() {
  const L = lang();
  const h = L.hero;
  const a = L.about;
  const pr = L.process;
  const sv = L.services;
  const selectedProjects = ['trilocale-magenta', 'camera-corbetta']
    .map(id => PROJECTS.find(p => p.id === id))
    .filter(p => p && !p.inProgress);

  return `
    <main class="page home-page" id="main-content">

      <!-- HERO -->
      <div class="hero">
        <div class="hero-left">
          <div class="hero-eyebrow">${h.eyebrow}</div>
          <h1 class="hero-title">
            ${h.title1}<br>
            ${h.title2} ${h.title3}
          </h1>
          <p class="hero-desc">${h.desc}</p>
          <div class="hero-actions">
            <button class="btn-primary" data-nav="projects">${h.cta}</button>
            <button class="btn-ghost" data-cta="contact" data-cta-location="page" data-nav="contact">${h.cta2} →</button>
          </div>
        </div>
        <div class="hero-visual">
          <img class="hero-image" src="assets/hero.png" alt="${h.heroImageAlt}" width="2500" height="3125" fetchpriority="high">
        </div>
      </div>

      <!-- DUE PROGETTI CON LO STESSO PESO VISIVO -->
      ${selectedProjects.length ? `<section class="home-section home-work" aria-labelledby="home-work-title">
        <div class="home-section-heading">
          <div>
            <div class="section-label">${L.homeProjects.label}</div>
            <h2 class="section-title" id="home-work-title">${L.homeProjects.title}</h2>
          </div>
          <a class="home-text-link" href="${pageUrl('projects')}" data-nav="projects">${L.homeProjects.all} <span aria-hidden="true">→</span></a>
        </div>
        <div class="home-projects">
          ${selectedProjects.map(p => `
            <a class="home-project" href="${pageUrl('project', p.id)}" data-nav-project="${p.id}" data-cta="project" data-cta-location="home-selection">
              <img src="${p.cover}" alt="${t(p.title)} — ${h.imageLabel}" width="2500" height="1406" loading="lazy" decoding="async">
              <div class="home-project-heading">
                <h3>${t(p.title)}</h3>
                <span aria-hidden="true">→</span>
              </div>
              <p>${findSpec(p, ['services']) || ''}</p>
            </a>`).join('')}
        </div>
      </section>` : ''}

      <!-- LO STUDIO -->
      <section class="home-section home-studio" aria-labelledby="home-studio-title">
          <div>
            <div class="section-label">${a.label}</div>
            <h2 class="section-title" id="home-studio-title" style="white-space:pre-line">${a.title}</h2>
          </div>
          <div class="home-studio-copy">
            <p>${a.p1}</p>
            <p>${a.p2}</p>
            <a class="home-text-link" href="${pageUrl('team')}" data-nav="team">${a.link} <span aria-hidden="true">→</span></a>
          </div>
      </section>

      <!-- SERVIZI -->
      <section class="home-section home-services" aria-labelledby="home-services-title">
        <div>
          <div class="section-label">${sv.label}</div>
          <h2 class="section-title" id="home-services-title">${sv.title}</h2>
        </div>
        <div class="home-service-list">
          ${sv.items.map((s, i) => `
            <a class="home-service" href="${pageUrl(['interior', 'rendering', 'consultation'][i])}" data-nav="${['interior', 'rendering', 'consultation'][i]}">
              <div>
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
              </div>
              <span aria-hidden="true">→</span>
            </a>`).join('')}
        </div>
      </section>

      <!-- COME LAVORIAMO -->
      <section class="home-section home-process" aria-labelledby="home-process-title">
        <img class="home-materials" src="assets/moodboard.png" alt="${pr.imageAlt}" width="1254" height="1254" loading="lazy" decoding="async">
        <div>
          <div class="section-label">${pr.label}</div>
          <h2 class="section-title" id="home-process-title">${pr.title}</h2>
          <p class="home-process-intro">${pr.intro}</p>
          <ol class="home-process-list">
            ${pr.steps.map(s => `
              <li>
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
              </li>`).join('')}
          </ol>
        </div>
      </section>

      ${renderCtaBlock(L.homeContact, 'home-contact')}
      ${renderFooter()}
    </main>`;
}

// ── TEAM ───────────────────────────────────────────────────────────────────

function renderTeam() {
  const c = lang().team;
  return `
    <main class="page" id="main-content">
      <div class="team-header">
        <div class="section-label">${c.label}</div>
        <h1 class="section-title" style="white-space:pre-line">${c.title}</h1>
        <p class="team-intro">${c.desc}</p>
      </div>
      <div class="team-members">
        ${c.members.map(m => `
          <div class="team-member">
            <div class="team-circle">${m.photo
              ? `<img src="${m.photo}" alt="${m.name}" style="width:100%;height:100%;object-fit:cover;display:block">`
              : portraitSvg(m.color)}</div>
            <div class="team-name">${m.name}</div>
            <div class="team-role">${m.role}</div>
            <div class="team-divider"></div>
            ${bioParagraphs(m.bio)}
          </div>`).join('')}
      </div>
      ${renderCtaBlock()}
      ${renderFooter()}
    </main>`;
}

// ── LISTA PROGETTI ─────────────────────────────────────────────────────────

function renderProjects() {
  const L = lang();
  const c = L.projects;
  const publishedProjects = PROJECTS.filter(p => !p.inProgress);
  const ongoingProjects = PROJECTS.filter(p => p.inProgress);

  return `
    <main class="page portfolio-page" id="main-content">
      <header class="projects-hero">
        <div class="section-label">${c.label}</div>
        <h1 class="section-title">${c.title}</h1>
        <p class="projects-intro">${c.desc}</p>
      </header>
      <div class="projects-index">
        ${publishedProjects.map(p => {
          const meta = [t(p.tag), findSpec(p, ['location']), findSpec(p, ['area'])].filter(Boolean);
          return `
          <a class="pi-row" href="${pageUrl('project', p.id)}" data-nav-project="${p.id}" data-cta="project">
            <div class="pi-media"><img src="${p.cover}" alt="${t(p.title)}" width="2500" height="1406" loading="lazy" decoding="async"></div>
            <div class="pi-body">
              <div class="pi-heading"><h2 class="pi-title">${t(p.title)}</h2><span aria-hidden="true">→</span></div>
              <p class="pi-meta">${meta.join(' · ')}</p>
            </div>
          </a>`;
        }).join('')}
      </div>
      ${ongoingProjects.length ? `<section class="projects-current" aria-labelledby="ongoing-projects-title">
        <h2 class="pd-section-heading" id="ongoing-projects-title">${c.inProgressLabel}</h2>
        <div>
          ${ongoingProjects.map(p => `<a class="projects-current-link" href="${pageUrl('project', p.id)}" data-nav-project="${p.id}" data-cta="project">
            <div><h3>${t(p.title)}</h3><p>${t(p.intro[0])}</p></div><span aria-hidden="true">→</span>
          </a>`).join('')}
        </div>
      </section>` : ''}
      ${renderCtaBlock(L.homeContact, 'home-contact')}
      ${renderFooter()}
    </main>`;
}

// ── DETTAGLIO PROGETTO ─────────────────────────────────────────────────────

function renderProjectDetail() {
  const L = lang();
  const c = L.projects;
  const p = PROJECTS.find(x => x.id === (state.page === 'amsterdam' ? 'amsterdam' : state.projectId)) || PROJECTS[0];
  const context = [findSpec(p, ['location']), findSpec(p, ['area'])].filter(Boolean);

  return `
    <main class="page portfolio-page" id="main-content">
      <header class="pd-head">
        <a class="pd-back" href="${pageUrl('projects')}" data-nav="projects">← ${c.back}</a>
        <div class="pd-title-row">
          <div><p class="pd-tag">${t(p.tag)}</p><h1 class="pd-title">${t(p.title)}</h1></div>
          ${context.length ? `<p class="pd-context">${context.join(' · ')}</p>` : ''}
        </div>
      </header>
      <div class="pd-overview${p.plan ? ' has-plan' : ''}">
        <section class="pd-story" aria-labelledby="project-story-title">
          <h2 class="pd-section-heading" id="project-story-title">${p.subtitle ? t(p.subtitle) : c.overviewLabel}</h2>
          ${p.intro.map(para => `${para.heading ? `<h3 class="pd-story-subheading">${t(para.heading)}</h3>` : ''}<p class="pd-intro">${t(para)}</p>`).join('')}
        </section>
        <section class="pd-facts" aria-labelledby="project-details-title">
          <h2 class="pd-section-heading" id="project-details-title">${c.detailsTitle}</h2>
          <dl class="pd-specs">
            ${p.specs.map(s => `<div class="pd-spec"><dt class="pd-spec-label">${t(s.label)}</dt><dd class="pd-spec-value">${t(s.value)}</dd></div>`).join('')}
          </dl>
        </section>
        ${p.plan ? `<section class="pd-plan-col" aria-labelledby="project-plan-title">
          <h2 class="pd-section-heading" id="project-plan-title">${c.planLabel}</h2>
          <button class="pd-plan-wrap" type="button" aria-label="${c.openImage}: ${c.planLabel}" data-open-plan="${p.plan}" data-plan-label="${c.planLabel}">
            <img src="${p.plan}" alt="${c.planLabel}" loading="lazy">
            <span class="pd-plan-zoom" aria-hidden="true">+</span>
          </button>
        </section>` : ''}
      </div>

      ${!p.inProgress && p.gallery.length ? `<section class="pd-gallery-section" aria-labelledby="project-images-title">
        <h2 class="pd-section-heading" id="project-images-title">${c.galleryLabel}</h2>
        <div class="pd-gallery">
          ${p.gallery.map((g, i) => `<figure class="pd-gallery-item">
            <button class="pd-gallery-button" type="button" aria-label="${c.openImage}: ${t(g.caption)}" data-lb-index="${i}">
              <img src="${g.src}" alt="${t(g.caption)}" loading="lazy" decoding="async">
            </button>
            <figcaption class="pd-gallery-cap">${t(g.caption)}</figcaption>
          </figure>`).join('')}
        </div>
      </section>` : ''}
      ${renderCtaBlock(L.homeContact, 'home-contact')}
      ${renderFooter()}
    </main>`;
}

// ── CONTATTI ───────────────────────────────────────────────────────────────

function renderContact() {
  const c = lang().contact;
  return `
    <main class="page" id="main-content">
      <section class="section">
        <div class="section-label">${c.label}</div>
        <h1 class="section-title" style="white-space:pre-line;margin-bottom:32px">${c.title}</h1>
        <p class="contact-area-text">${c.areaText}</p>
        <div class="contact-grid" style="margin-top:48px">
          <div class="contact-info">
            <div class="contact-block">
              <div class="contact-label">${c.emailLabel}</div>
              <div class="contact-value">
                <a href="mailto:selosdesign@gmail.com" class="social-link" style="font-size:inherit;text-transform:none;letter-spacing:0">selosdesign@gmail.com</a>
              </div>
            </div>
            <div class="contact-block">
              <div class="contact-label">${c.phoneLabel}</div>
              <div class="contact-value">
                <a href="tel:+393662312315" class="social-link" style="font-size:inherit;text-transform:none;letter-spacing:0">+39 366 23 12 315</a>
              </div>
            </div>
            <a class="wa-cta" href="https://wa.me/393662312315" target="_blank" rel="noreferrer" style="margin-top:8px">
              <span class="wa-icon">
                <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.8L.4 31.6l8-2.1c2.3 1.3 4.9 1.9 7.6 1.9 8.6 0 15.5-7 15.5-15.5S24.6.5 16 .5zm0 28.3c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.3-2.1-2-4.5-2-7C3 9 8.8 3.3 16 3.3c3.4 0 6.6 1.3 9 3.8 2.4 2.4 3.7 5.6 3.7 9 0 7.2-5.8 12.7-12.7 12.7zm7-9.5c-.4-.2-2.3-1.1-2.6-1.3-.3-.1-.6-.2-.8.2-.2.4-.9 1.3-1.1 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.6.2-.2.2-.4.4-.6.1-.3 0-.5 0-.7-.1-.2-.8-2.1-1.2-2.8-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.5 3.8 6 5.3.8.4 1.5.6 2 .8.8.3 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.4z"></path></svg>
              </span>
              <span class="wa-text">
                <span class="wa-label">${c.whatsappLabel}</span>
                <span class="wa-sub">${c.whatsappReply}</span>
              </span>
              <span class="wa-arrow" aria-hidden="true">→</span>
            </a>
            <div class="contact-block" style="margin-top:8px">
              <div class="contact-label">${c.socialLabel}</div>
              <div style="display:flex;gap:16px;margin-top:8px">
                <a class="social-link" style="font-size:13px" href="https://www.instagram.com/selos_design/" target="_blank" rel="noreferrer">Instagram</a>
                <a class="social-link" style="font-size:13px" href="https://www.facebook.com/selosdesign" target="_blank" rel="noreferrer">Facebook</a>
              </div>
            </div>
          </div>
          <form class="contact-form" id="contact-form" action="https://formspree.io/f/xojzpodo" method="post">
            <input type="hidden" name="_subject" id="contact-subject">
            <div class="form-row">
              <div class="form-field"><label for="field-nome">${c.form.name}</label><input type="text" id="field-nome" name="nome" autocomplete="given-name"></div>
              <div class="form-field"><label for="field-cognome">${c.form.surname}</label><input type="text" id="field-cognome" name="cognome" autocomplete="family-name"></div>
            </div>
            <div class="form-row">
              <div class="form-field"><label for="field-email">${c.form.email} *</label><input type="email" id="field-email" name="email" autocomplete="email" required></div>
              <div class="form-field"><label for="field-telefono">${c.form.phone}</label><input type="tel" id="field-telefono" name="telefono" autocomplete="tel"></div>
            </div>
            ${renderEnquiryFields()}
            <div class="form-field">
              <label for="field-message">${c.form.messageLabel} *</label>
              <textarea id="field-message" name="messaggio" placeholder="${c.form.messagePlaceholder}" required></textarea>
            </div>
            <p class="form-privacy">${c.form.privacyText} <a href="${pageUrl('privacy')}" target="_blank" rel="noopener" aria-label="${c.form.privacyNewTab}">${c.form.privacyLink} <span aria-hidden="true">↗</span></a></p>
            <div role="status" aria-live="polite" id="contact-form-status" style="font-size:15px;line-height:1.6;min-height:24px"></div>
            <button class="btn-primary" type="submit" style="align-self:flex-start">${c.form.send}</button>
          </form>
        </div>
      </section>
      ${renderFooter()}
    </main>`;
}

function renderPrivacy() {
  const p = lang().privacy;
  const raw = (p.body || '').trim();
  const toBold = s => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  let content;
  if (!raw) {
    content = `<p class="privacy-para" style="font-style:italic">Testo non ancora disponibile.</p>`;
  } else {
    content = raw.split('\n\n').map(block => {
      block = block.trim();
      if (!block) return '';
      const lines = block.split('\n');
      if (lines[0].startsWith('## ')) {
        const heading = toBold(lines[0].slice(3));
        const rest = lines.slice(1).join('<br>');
        return `<h3 class="privacy-heading">${heading}</h3>${rest ? `<p class="privacy-para">${toBold(rest)}</p>` : ''}`;
      }
      return `<p class="privacy-para">${toBold(block.replace(/\n/g, '<br>'))}</p>`;
    }).join('');
  }
  return `
    <main class="page" id="main-content">
      <section class="section">
        <div class="section-label">Legal</div>
        <h1 class="section-title" style="margin-bottom:48px">${p.title}</h1>
        <div class="privacy-body">${content}</div>
      </section>
      ${renderFooter()}
    </main>`;
}

// ── RENDER PRINCIPALE ──────────────────────────────────────────────────────

function render() {
  _svgId = 0; // reset id SVG ad ogni render

  let html = renderNav();

  switch (state.page) {
    case 'home': html += renderHome(); break;
    case 'team': html += renderTeam(); break;
    case 'projects': html += renderProjects(); break;
    case 'project':
    case 'amsterdam': html += renderProjectDetail(); break;
    case 'contact': html += renderContact(); break;
    case 'privacy': html += renderPrivacy(); break;
    default: html += renderServicePage();
  }

  document.getElementById('root').innerHTML = html;
  document.documentElement.lang = state.lang;
  document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach(a => { a.dataset.cta = a.href.startsWith('mailto:') ? 'email' : 'phone'; });
  syncFontPreview();
}

function navigate(page, projectId) {
  state.page = page;
  state.projectId = projectId || null;
  updateMeta();
  render();
  window.scrollTo(0, 0);
  const url = fontPreviewUrl(location.protocol === 'file:' ? buildHash(page, projectId) : pageUrl(page, projectId));
  if (location.pathname !== url || location.hash) history.pushState(null, '', url);
}

function setLang(newLang) {
  state.lang = newLang;
  if (location.protocol !== 'file:') history.pushState(null, '', fontPreviewUrl(pageUrl()));
  updateMeta();
  render();
}

// ── LIGHTBOX ───────────────────────────────────────────────────────────────

function openLightbox(images, index) {
  lbState.images = images;
  lbState.index = index;
  renderLightbox();
}

function openPlan(src, label) {
  lbState.images = [{ src, caption: label }];
  lbState.index = 0;
  renderLightbox();
}

function renderLightbox() {
  const overlay = document.getElementById('lightbox');
  const { images, index } = lbState;

  overlay.style.display = 'flex';

  const img = images[index];
  const caption = typeof img.caption === 'object' ? t(img.caption) : (img.caption || '');
  const showNav = images.length > 1;

  overlay.innerHTML = `
    <button class="lb-close" aria-label="${state.lang === 'en' ? 'Close' : 'Chiudi'}" data-close-lb>×</button>
    ${showNav ? `<button class="lb-nav lb-prev" aria-label="${state.lang === 'en' ? 'Previous image' : 'Immagine precedente'}" data-lb-prev>‹</button>` : ''}
    <img src="${img.src}" alt="${caption}">
    ${showNav ? `<button class="lb-nav lb-next" aria-label="${state.lang === 'en' ? 'Next image' : 'Immagine successiva'}" data-lb-next>›</button>` : ''}
    <div class="lb-caption">${caption}</div>`;

  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lbState.images = [];
  const overlay = document.getElementById('lightbox');
  overlay.style.display = 'none';
  overlay.innerHTML = '';
  document.body.style.overflow = '';
}

function lbPrev() {
  lbState.index = (lbState.index - 1 + lbState.images.length) % lbState.images.length;
  renderLightbox();
}

function lbNext() {
  lbState.index = (lbState.index + 1) % lbState.images.length;
  renderLightbox();
}

// ── EVENT DELEGATION ───────────────────────────────────────────────────────

document.addEventListener('click', function (e) {
  const cta = e.target.closest('[data-cta]');
  if (cta) emitInteraction(cta.dataset.cta + '_click', { location: cta.dataset.ctaLocation || 'page' });
  // ── LIGHTBOX: gestisci tutti i click al suo interno per primo ──
  if (e.target.closest('#lightbox')) {
    if (e.target.closest('[data-lb-prev]')) { lbPrev(); return; }
    if (e.target.closest('[data-lb-next]')) { lbNext(); return; }
    if (e.target.closest('img')) { return; }  // click sull'immagine: nulla
    closeLightbox();                                       // sfondo o pulsante × → chiudi
    return;
  }

  // ── HAMBURGER TOGGLE ──
  const hambEl = e.target.closest('.nav-hamburger');
  if (hambEl) {
    const links = document.querySelector('.nav-links');
    const isOpen = links.classList.toggle('open');
    hambEl.classList.toggle('open', isOpen);
    hambEl.setAttribute('aria-expanded', String(isOpen));
    return;
  }

  // ── NAVIGAZIONE ──
  const navEl = e.target.closest('[data-nav]');
  if (navEl && !e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) { e.preventDefault(); navigate(navEl.dataset.nav); return; }

  // ── APERTURA PROGETTO ──
  const projEl = e.target.closest('[data-nav-project]');
  if (projEl && !e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) { e.preventDefault(); navigate('project', projEl.dataset.navProject); return; }

  // ── CAMBIO LINGUA ──
  const langEl = e.target.closest('[data-lang]');
  if (langEl) { setLang(langEl.dataset.lang); return; }

  // ── APRI GALLERIA ──
  const lbEl = e.target.closest('[data-lb-index]');
  if (lbEl) {
    const p = PROJECTS.find(x => x.id === (state.page === 'amsterdam' ? 'amsterdam' : state.projectId));
    if (p) openLightbox(p.gallery, parseInt(lbEl.dataset.lbIndex, 10));
    return;
  }

  // ── APRI PLANIMETRIA ──
  const planEl = e.target.closest('[data-open-plan]');
  if (planEl) {
    openPlan(planEl.dataset.openPlan, planEl.dataset.planLabel);
    return;
  }
});

// ── FORM CONTATTI ──────────────────────────────────────────────────────────

document.addEventListener('submit', async function (e) {
  const form = e.target.closest('#contact-form');
  if (!form) return;
  e.preventDefault();

  const btn = form.querySelector('[type=submit]');
  const status = document.getElementById('contact-form-status');
  const L = lang().contact.form;

  const cognome = (form.querySelector('[name=cognome]').value || '').trim();
  const email   = (form.querySelector('[name=email]').value || '').trim();
  form.querySelector('#contact-subject').value =
    `Nuovo Contatto da ${cognome || email} - Selo’s Design`;

  btn.disabled = true;
  status.style.color = 'var(--text-light)';
  status.textContent = L.sending;

  try {
    const res = await fetch('https://formspree.io/f/xojzpodo', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      emitInteraction('contact_form_submission');
      form.reset();
      status.style.color = 'var(--accent)';
      status.textContent = L.success;
      btn.disabled = false;
    } else {
      throw new Error();
    }
  } catch {
    status.style.color = 'oklch(55% 0.18 25)';
    status.textContent = L.error;
    btn.disabled = false;
  }
});

// Tastiera: Esc chiude il lightbox, ← → naviga
document.addEventListener('keydown', function (e) {
  if (e.target instanceof Element && e.target.matches('[role=button]') && ['Enter', ' '].includes(e.key)) { e.preventDefault(); e.target.click(); }
  if (!lbState.images.length) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowRight') lbNext();
  else if (e.key === 'ArrowLeft') lbPrev();
});

// Tasto Indietro/Avanti del browser → ripristina la pagina dall'hash
window.addEventListener('popstate', function () {
  const { page, projectId } = resolveRoute();
  state.page = page;
  state.projectId = projectId;
  updateMeta();
  render();
  window.scrollTo(0, 0);
});

// ── AVVIO ──────────────────────────────────────────────────────────────────
// Legge l'hash iniziale: permette di condividere/bookmarcare URL come #/project/bilocale
const _init = resolveRoute();
state.page = _init.page;
state.projectId = _init.projectId;
updateMeta();
render();

// Static URLs mirror the hash routes; old shared links remain valid.
function resolveRoute() {
  const slug = location.pathname.split('/').filter(Boolean).pop() || '';
  if (slug === 'index.html') {
    state.lang = document.documentElement.lang;
    if (location.hash) return parseHash();
    return { page: document.body.dataset.page || 'home', projectId: document.body.dataset.project || null };
  }
  state.lang = /-en$/.test(slug) ? 'en' : 'it';
  if (location.hash) return parseHash();
  const base = slug.replace(/-en$/, '');
  if (base.startsWith('project-')) {
    const id = base.slice(8);
    if (PROJECTS.some(p => p.id === id)) return { page: 'project', projectId: id };
  }
  const page = Object.keys(PAGE_SLUGS).find(key => PAGE_SLUGS[key] === base);
  return { page: page || 'home', projectId: null };
}

function renderEnquiryFields() {
  const q = lang().enquiry || window.LANG_IT.enquiry;
  const field = (name, label) => `<div class="form-field"><label for="field-${name}">${label}</label><input id="field-${name}" name="${name}" type="text"></div>`;
  const select = (name, label, options) => `<div class="form-field"><label for="field-${name}">${label}</label><select id="field-${name}" name="${name}"><option value="">—</option>${options.map(v => `<option>${v}</option>`).join('')}</select></div>`;
  return `<fieldset class="enquiry-details" aria-describedby="enquiry-help"><legend>${q.title}</legend><p class="enquiry-intro" id="enquiry-help">${q.intro}</p><div class="contact-form"><div class="form-row">${field('localita', q.location)}${field('tempi', q.timing)}</div><div class="form-row">${select('tipologia', q.type, q.types)}${select('fase', q.stage, q.stages)}</div></div></fieldset>`;
}

function renderServicePage() {
  const L = lang();
  const c = L.servicePages[state.page];
  const u = L.serviceUI;
  if (window.SERVICE_IMAGES[state.page]) return renderServiceDetail(c, u, window.SERVICE_IMAGES[state.page]);
  const isInternational = ['international', 'amsterdam'].includes(state.page);
  const contact = where => `<a class="btn-primary service-button" href="${pageUrl('contact')}" data-nav="contact" data-cta="contact" data-cta-location="${where}">${u.cta}</a>`;
  return `<main class="page service-page" id="main-content">
    <header class="projects-hero section-dark">
      <div class="section-label">Selo’s Design · ${isInternational ? u.international : 'Magenta · Milano'}</div>
      <h1 class="section-title">${c.title}</h1>
      <p class="service-intro">${c.intro}</p>
      <div class="hero-actions">${contact('hero')}<a class="btn-ghost service-button" href="${pageUrl('projects')}" data-nav="projects">${u.portfolio} →</a></div>
    </header>
    <section class="section"><div class="about-grid"><div><h2 class="section-title">${c.audienceTitle}</h2><p class="service-copy">${c.audience}</p>${state.page === 'international' ? `<a class="text-link" href="${pageUrl('amsterdam')}" data-nav="amsterdam">${u.amsterdam} →</a>` : ''}</div><div><h2 class="service-subtitle">${c.scopeTitle}</h2><ul class="service-scope">${c.scope.map(v => `<li>${v}</li>`).join('')}</ul></div></div></section>
    ${c.process ? `<section class="hww-section"><h2 class="section-title">${u.process}</h2><div class="service-process">${c.process.map(([title, desc], i) => `<div class="hww-step"><div class="hww-num">0${i + 1}</div><h3 class="hww-title">${title}</h3><p class="hww-desc">${desc}</p></div>`).join('')}</div></section>` : ''}
    ${!isInternational ? `<section class="section"><h2 class="section-title">${u.projects}</h2><div class="service-projects">${['trilocale-magenta', 'bilocale-milano', 'monolocale-milano'].map(id => { const p = PROJECTS.find(p => p.id === id); return `<a href="${pageUrl('project', id)}" data-nav-project="${id}" data-cta="project"><img src="${p.cover}" alt="${t(p.title)} — ${state.lang === 'en' ? 'interior visualisation' : 'visualizzazione di interni'}" loading="lazy" width="${id === 'bilocale-milano' ? 2400 : 2500}" height="${id === 'bilocale-milano' ? 1350 : 1406}"><h3 class="service-subtitle">${t(p.title)}</h3><p class="service-copy">${t(p.tag)}</p></a>`; }).join('')}</div></section>` : ''}
    <section class="section"><h2 class="section-title">${c.whyTitle}</h2><p class="service-copy service-readable">${c.why}</p></section>
    <section class="section service-related"><h2 class="service-subtitle">${u.related}</h2><div>${['interior', 'consultation', 'rendering', 'international'].filter(key => key !== state.page).map(key => `<a class="text-link" href="${pageUrl(key)}" data-nav="${key}">${key === 'international' ? u.international : L.servicePages[key].title} →</a>`).join('')}</div></section>
    <div class="pd-cta"><h2 class="pd-cta-title">${u.cta}</h2>${contact('footer')}</div>
    ${renderFooter()}
  </main>`;
}

function renderServiceDetail(c, u, images) {
  const L = lang();
  const project = PROJECTS.find(p => p.id === images.projectId);
  const projectUrl = pageUrl('project', project.id);
  const caption = image => image.plan ? L.projects.planLabel : L.hero.imageLabel;
  const imageAlt = image => {
    if (image.plan) return L.projects.planLabel + ' — ' + t(project.title);
    const view = project.gallery.find(item => item.src === image.src);
    return L.hero.imageLabel + ': ' + (view ? t(view.caption) + ' — ' : '') + t(project.title);
  };
  const imageTag = (image, first = false) => `<img src="${image.plan ? project.plan : image.src}" alt="${imageAlt(image)}" width="${image.width}" height="${image.height}" ${first ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>`;
  const projectCaption = image => `<figcaption><a href="${projectUrl}" data-nav-project="${project.id}">${caption(image)} · ${t(project.title)} <span aria-hidden="true">→</span></a></figcaption>`;
  return `<main class="page service-page service-detail-page" id="main-content">
    <header class="service-lead">
      <div class="service-lead-copy">
        <p class="section-label">${u.area}</p>
        <h1 class="service-lead-title">${c.displayTitle}</h1>
        <p class="service-intro">${c.intro}</p>
        <a class="home-text-link" href="${pageUrl('contact')}" data-nav="contact" data-cta="contact" data-cta-location="service-intro">${u.cta} <span aria-hidden="true">→</span></a>
      </div>
      <figure class="service-lead-visual">
        ${imageTag(images.hero, true)}
        ${projectCaption(images.hero)}
      </figure>
    </header>
    <section class="service-body" aria-labelledby="service-audience-title">
      <div class="service-story">
        <h2 class="section-title" id="service-audience-title">${c.audienceTitle}</h2>
        <p class="service-copy">${c.audience}</p>
        <h3 class="service-story-heading">${c.whyTitle}</h3>
        <p class="service-copy">${c.why}</p>
      </div>
      <div class="service-outline">
        <h2 class="service-story-heading">${c.scopeTitle}</h2>
        <ul class="service-scope">${c.scope.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
    </section>
    <section class="service-example" aria-labelledby="service-example-title">
      <figure class="service-example-visual${images.detail.plan ? ' is-plan' : ''}">
        <a href="${projectUrl}" data-nav-project="${project.id}" data-cta="project" data-cta-location="service-example">${imageTag(images.detail)}</a>
        ${projectCaption(images.detail)}
      </figure>
      <div class="service-example-copy">
        <p class="section-label">${u.example}</p>
        <h2 class="section-title" id="service-example-title">${t(project.title)}</h2>
        <p class="service-copy">${c.example}</p>
        <a class="home-text-link" href="${projectUrl}" data-nav-project="${project.id}" data-cta="project" data-cta-location="service-example">${u.projectLink} <span aria-hidden="true">→</span></a>
      </div>
    </section>
    <nav class="service-navigation" aria-label="${u.related}">
      <p class="section-label">${u.related}</p>
      <div>${['interior', 'rendering', 'consultation', 'international'].filter(key => key !== state.page).map(key => `<a class="home-text-link" href="${pageUrl(key)}" data-nav="${key}">${key === 'international' ? u.international : L.servicePages[key].displayTitle} <span aria-hidden="true">→</span></a>`).join('')}</div>
    </nav>
    ${renderCtaBlock(L.homeContact, 'home-contact')}
    ${renderFooter()}
  </main>`;
}

// Local hooks only. No network requests, analytics SDK or personal data.
function emitInteraction(name, detail = {}) {
  document.dispatchEvent(new CustomEvent('selos:interaction', { detail: { event: name, page: state.page, language: state.lang, ...detail } }));
}

document.addEventListener('focusin', e => {
  const form = e.target.closest('#contact-form');
  if (form && !form.dataset.started) { form.dataset.started = 'true'; emitInteraction('contact_form_start'); }
});
