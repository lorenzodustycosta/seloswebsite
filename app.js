// ─────────────────────────────────────────────────────────────────────────────
// app.js — Selo's Design SPA (vanilla JS, no framework, no build step)
// ─────────────────────────────────────────────────────────────────────────────

// ── STATO DELL'APPLICAZIONE ────────────────────────────────────────────────

const state = {
  lang:      'it',      // lingua attiva: 'it' | 'en' | 'tr'
  page:      'home',    // pagina attiva: 'home' | 'team' | 'projects' | 'project' | 'contact'
  projectId: null       // id del progetto aperto (solo quando page === 'project')
};

// Stato del lightbox (separato per evitare re-render della pagina)
const lbState = {
  images: [],  // array di { src, caption }
  index:  0
};

// Contatore per generare id SVG univoci ad ogni render
let _svgId = 0;

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

// Cerca uno spec per chiave inglese (per visualizzare location/area nella lista)
function findSpec(project, keys) {
  const s = project.specs.find(x => keys.includes((x.label.en || '').toLowerCase()));
  return s ? t(s.value) : null;
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
    <text x="300" y="368" text-anchor="middle" font-family="monospace" font-size="13" fill="oklch(35% 0.03 80 / 0.55)">[portrait photo]</text>
  </svg>`;
}

// ── FRAMMENTI CONDIVISI ────────────────────────────────────────────────────

function renderNav() {
  const L = lang();
  // Evidenzia "Progetti" anche quando si è su una pagina di dettaglio progetto
  const activePage = state.page === 'project' ? 'projects' : state.page;
  return `
    <nav class="nav">
      <div class="nav-logo" data-nav="home">
        <img src="assets/logo.png" alt="Selos Design">
        <span class="nav-logo-text">Selo's Design</span>
      </div>
      <div class="nav-links">
        ${['home', 'team', 'projects', 'contact'].map(p => `
          <span class="nav-link${activePage === p ? ' active' : ''}" data-nav="${p}">${L.nav[p]}</span>
        `).join('')}
      </div>
      <div class="nav-lang">
        <button class="lang-btn${state.lang === 'it' ? ' active' : ''}" data-lang="it">IT</button>
        <span class="lang-sep">|</span>
        <button class="lang-btn${state.lang === 'en' ? ' active' : ''}" data-lang="en">EN</button>
        <span class="lang-sep">|</span>
        <button class="lang-btn${state.lang === 'tr' ? ' active' : ''}" data-lang="tr">TR</button>
      </div>
    </nav>`;
}

function renderFooter() {
  const f = lang().footer;
  return `
    <footer class="footer">
      <div class="footer-logo">
        <img src="assets/logo.png" alt="" style="height:52px;width:52px;object-fit:contain">
        <div class="footer-logo-text">Selo's Design</div>
        <div class="footer-tagline">${f.tagline}</div>
      </div>
      <div class="footer-col">
        <div class="footer-heading">${f.studioLabel}</div>
        <div class="footer-line">Via Silvio Pellico 40</div>
        <div class="footer-line">20013 Magenta, Milano</div>
        <div class="footer-line" style="margin-top:8px">+39 366 23 12 315</div>
        <div class="footer-line">selosdesign@gmail.com</div>
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
        <span class="social-link">${f.privacy}</span>
      </div>
    </div>`;
}

function renderCtaBlock() {
  const c = lang().projects;
  return `
    <div class="pd-cta">
      <h2 class="pd-cta-title">${c.ctaTitle}</h2>
      <p class="pd-cta-text">${c.ctaText}</p>
      <button class="btn-primary" data-nav="contact">${c.ctaBtn}</button>
    </div>`;
}

// ── HOME ───────────────────────────────────────────────────────────────────

function renderHome() {
  const L = lang();
  const h  = L.hero;
  const a  = L.about;
  const pr = L.process;
  const sv = L.services;
  const va = L.values;

  return `
    <div class="page">

      <!-- HERO -->
      <div class="hero">
        <div class="hero-left">
          <div class="hero-eyebrow">${h.eyebrow}</div>
          <h1 class="hero-title">
            ${h.title1}<br>
            <em>${h.title2}</em><br>
            ${h.title3}
          </h1>
          <p class="hero-desc">${h.desc}</p>
          <div class="hero-actions">
            <button class="btn-primary" data-nav="projects">${h.cta}</button>
            <button class="btn-ghost" data-nav="contact">${h.cta2} →</button>
          </div>
        </div>
        <div class="hero-right">
          <img src="assets/hero.png" alt="Interior design — soggiorno" style="width:100%;height:100%;object-fit:cover;display:block">
        </div>
      </div>

      <!-- SU SELOS -->
      <section class="section">
        <div class="about-grid">
          <div class="about-text">
            <div class="section-label">${a.label}</div>
            <h2 class="section-title" style="white-space:pre-line">${a.title}</h2>
            <p>${a.p1}</p>
            <button class="btn-ghost" style="margin-top:8px" data-nav="team">${a.link} →</button>
          </div>
          <div class="about-img">${portraitSvg('oklch(86% 0.04 85)')}</div>
        </div>
      </section>

      <!-- COME LAVORIAMO -->
      <section class="hww-section">
        <div class="section-label">${pr.label}</div>
        <h2 class="section-title">${pr.title}</h2>
        <div class="hww-steps">
          ${pr.steps.map(s => `
            <div class="hww-step">
              <div class="hww-num">${s.num}</div>
              <div class="hww-title">${s.title}</div>
              <div class="hww-desc">${s.desc}</div>
            </div>`).join('')}
        </div>
      </section>

      <!-- SERVIZI -->
      <section class="section">
        <div class="section-label">${sv.label}</div>
        <h2 class="section-title">${sv.title}</h2>
        <div class="services-grid">
          ${sv.items.map(s => `
            <div class="service-card">
              <div class="service-num">${s.num}</div>
              <div class="service-title">${s.title}</div>
              <div class="service-desc">${s.desc}</div>
            </div>`).join('')}
        </div>
      </section>

      <!-- VALORI -->
      <section class="section">
        <div class="section-label">${va.label}</div>
        <h2 class="section-title">${va.title}</h2>
        <div class="values-grid">
          ${va.items.map(v => `
            <div class="value-item">
              <div class="value-line"></div>
              <div class="value-title">${v.title}</div>
              <div class="value-desc">${v.desc}</div>
            </div>`).join('')}
        </div>
      </section>

      ${renderCtaBlock()}
      ${renderFooter()}
    </div>`;
}

// ── TEAM ───────────────────────────────────────────────────────────────────

function renderTeam() {
  const c = lang().team;
  return `
    <div class="page">
      <div class="team-header">
        <div class="section-label">${c.label}</div>
        <h1 class="section-title" style="white-space:pre-line">${c.title}</h1>
        <p style="font-size:15px;color:var(--text-light);font-weight:300;max-width:560px;margin-top:8px">${c.desc}</p>
      </div>
      <div class="team-members">
        ${c.members.map(m => `
          <div class="team-member">
            <div class="team-circle">${portraitSvg(m.color)}</div>
            <div class="team-name">${m.name}</div>
            <div class="team-role">${m.role}</div>
            <div class="team-divider"></div>
            ${bioParagraphs(m.bio)}
          </div>`).join('')}
      </div>
      ${renderCtaBlock()}
      ${renderFooter()}
    </div>`;
}

// ── LISTA PROGETTI ─────────────────────────────────────────────────────────

function renderProjects() {
  const c     = lang().projects;
  const total = PROJECTS.length;

  return `
    <div class="page">
      <div class="projects-hero section-dark" style="padding:80px 80px 64px">
        <div class="section-label">${c.label}</div>
        <h1 class="section-title">${c.title}</h1>
        <p style="font-size:15px;color:var(--text-light);font-weight:300;max-width:560px;margin-top:8px">${c.desc}</p>
      </div>
      <div class="projects-index">
        ${PROJECTS.map((p, i) => {
          const loc  = findSpec(p, ['location']);
          const area = findSpec(p, ['area']);
          return `
            <div class="pi-row${i % 2 ? ' reverse' : ''}" data-nav-project="${p.id}">
              <div class="pi-media">
                <img src="${p.cover}" alt="${t(p.title)}">
              </div>
              <div class="pi-body">
                <div class="pi-index">${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>
                <h2 class="pi-title">${t(p.title)}</h2>
                <div class="pi-tag">${t(p.tag)}</div>
                <div class="pi-meta">
                  ${loc ? `<div class="pi-meta-item">
                    <div class="pi-meta-label">${c.metaLocation}</div>
                    <div class="pi-meta-value">${loc}</div>
                  </div>` : ''}
                  ${area ? `<div class="pi-meta-item">
                    <div class="pi-meta-label">${c.metaArea}</div>
                    <div class="pi-meta-value">${area}</div>
                  </div>` : ''}
                </div>
                <span class="pi-arrow"><span class="line"></span>${c.viewLabel}</span>
              </div>
            </div>`;
        }).join('')}
      </div>
      ${renderCtaBlock()}
      ${renderFooter()}
    </div>`;
}

// ── DETTAGLIO PROGETTO ─────────────────────────────────────────────────────

function renderProjectDetail() {
  const c = lang().projects;
  const p = PROJECTS.find(x => x.id === state.projectId) || PROJECTS[0];

  return `
    <div class="page">
      <div class="pd-cover">
        <img src="${p.cover}" alt="${t(p.title)}">
      </div>

      <div class="pd-head">
        <button class="pd-back" data-nav="projects">← ${c.back}</button>
        <div class="project-tag" style="color:var(--accent);margin-top:20px">${t(p.tag)}</div>
        <h1 class="pd-title">${t(p.title)}</h1>
      </div>

      <div class="pd-overview">
        <div class="pd-specs">
          ${p.specs.map(s => `
            <div class="pd-spec">
              <div class="pd-spec-label">${t(s.label)}</div>
              <div class="pd-spec-value">${t(s.value)}</div>
            </div>`).join('')}
        </div>
        ${p.plan ? `
          <div class="pd-plan-col">
            <div class="pd-plan-wrap" data-open-plan="${p.plan}" data-plan-label="${c.planLabel}">
              <img src="${p.plan}" alt="${c.planLabel}">
              <span class="pd-plan-zoom">+</span>
              <span class="pd-plan-tag">${c.planLabel}</span>
            </div>
          </div>` : ''}
      </div>

      <div class="pd-intro-section">
        <div class="pd-intro-label">${c.overviewLabel}</div>
        ${p.intro.map((para, i) => `
          <p class="pd-intro"${i > 0 ? ' style="margin-top:24px"' : ''}>${t(para)}</p>`).join('')}
      </div>

      <div class="pd-gallery-section">
        <div class="pd-section-label">${c.galleryLabel}</div>
        <div class="pd-gallery">
          ${p.gallery.map((g, i) => {
            // Ultima immagine con numero dispari → occupa entrambe le colonne
            const span = (i === p.gallery.length - 1) && (p.gallery.length % 2 === 1);
            return `
              <div class="pd-gallery-item${span ? ' span2' : ''}" data-lb-index="${i}">
                <img src="${g.src}" alt="${t(g.caption)}" loading="lazy">
                <div class="pd-gallery-cap"><span>${t(g.caption)}</span></div>
              </div>`;
          }).join('')}
        </div>
      </div>

      <div class="pd-cta">
        <h2 class="pd-cta-title">${c.ctaTitle}</h2>
        <p class="pd-cta-text">${c.ctaText}</p>
        <button class="btn-primary" data-nav="contact">${c.ctaBtn}</button>
      </div>

      ${renderFooter()}
    </div>`;
}

// ── CONTATTI ───────────────────────────────────────────────────────────────

function renderContact() {
  const c = lang().contact;
  return `
    <div class="page">
      <section class="section">
        <div class="section-label">${c.label}</div>
        <h1 class="section-title" style="white-space:pre-line;margin-bottom:56px">${c.title}</h1>
        <div class="contact-grid">
          <div class="contact-info">
            <div class="contact-block">
              <div class="contact-label">${c.phoneLabel}</div>
              <div class="contact-value">+39 366 23 12 315</div>
            </div>
            <div class="contact-block">
              <div class="contact-label">${c.emailLabel}</div>
              <div class="contact-value">selosdesign@gmail.com</div>
            </div>
            <div class="contact-block">
              <div class="contact-label">${c.addressLabel}</div>
              <div class="contact-value" style="white-space:pre-line">Via Silvio Pellico 40
20013 Magenta, Milano</div>
            </div>
            <div class="contact-block">
              <div class="contact-label">${c.hoursLabel}</div>
              <div class="contact-value" style="white-space:pre-line">${c.hoursValue}</div>
            </div>
            <div class="contact-block" style="margin-top:8px">
              <div class="contact-label">${c.socialLabel}</div>
              <div style="display:flex;gap:16px;margin-top:4px">
                <a class="social-link" style="font-size:13px" href="https://www.instagram.com/selos_design/" target="_blank" rel="noreferrer">Instagram</a>
                <a class="social-link" style="font-size:13px" href="https://www.facebook.com/selosdesign" target="_blank" rel="noreferrer">Facebook</a>
                <a class="social-link" style="font-size:13px" href="https://www.linkedin.com/in/selin-hilal" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
          <form class="contact-form" onsubmit="return false">
            <div class="form-row">
              <div class="form-field"><label>${c.form.name}</label><input type="text"></div>
              <div class="form-field"><label>${c.form.surname}</label><input type="text"></div>
            </div>
            <div class="form-row">
              <div class="form-field"><label>${c.form.email}</label><input type="email"></div>
              <div class="form-field"><label>${c.form.phone}</label><input type="tel"></div>
            </div>
            <div class="form-field">
              <label>${c.form.messageLabel}</label>
              <textarea placeholder="${c.form.messagePlaceholder}"></textarea>
            </div>
            <button class="btn-primary" type="submit" style="align-self:flex-start">${c.form.send}</button>
          </form>
        </div>
      </section>
      ${renderCtaBlock()}
      ${renderFooter()}
    </div>`;
}

// ── RENDER PRINCIPALE ──────────────────────────────────────────────────────

function render() {
  _svgId = 0; // reset id SVG ad ogni render

  let html = renderNav();

  switch (state.page) {
    case 'home':     html += renderHome();          break;
    case 'team':     html += renderTeam();          break;
    case 'projects': html += renderProjects();      break;
    case 'project':  html += renderProjectDetail(); break;
    case 'contact':  html += renderContact();       break;
  }

  document.getElementById('root').innerHTML = html;
  document.documentElement.lang = state.lang;
}

function navigate(page, projectId) {
  state.page      = page;
  state.projectId = projectId || null;
  render();
  window.scrollTo(0, 0);
}

function setLang(newLang) {
  state.lang = newLang;
  render();
}

// ── LIGHTBOX ───────────────────────────────────────────────────────────────

function openLightbox(images, index) {
  lbState.images = images;
  lbState.index  = index;
  renderLightbox();
}

function openPlan(src, label) {
  lbState.images = [{ src, caption: label }];
  lbState.index  = 0;
  renderLightbox();
}

function renderLightbox() {
  const overlay = document.getElementById('lightbox');
  const { images, index } = lbState;

  overlay.style.display = 'flex';

  const img     = images[index];
  const caption = typeof img.caption === 'object' ? t(img.caption) : (img.caption || '');
  const showNav = images.length > 1;

  overlay.innerHTML = `
    <button class="lb-close" data-close-lb>×</button>
    ${showNav ? `<button class="lb-nav lb-prev" data-lb-prev>‹</button>` : ''}
    <img src="${img.src}" alt="${caption}">
    ${showNav ? `<button class="lb-nav lb-next" data-lb-next>›</button>` : ''}
    <div class="lb-caption">${caption}${showNav ? ` · ${index + 1} / ${images.length}` : ''}</div>`;

  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lbState.images = [];
  const overlay  = document.getElementById('lightbox');
  overlay.style.display = 'none';
  overlay.innerHTML     = '';
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
  // ── LIGHTBOX: gestisci tutti i click al suo interno per primo ──
  if (e.target.closest('#lightbox')) {
    if (e.target.closest('[data-lb-prev]'))  { lbPrev(); return; }
    if (e.target.closest('[data-lb-next]'))  { lbNext(); return; }
    if (e.target.closest('img'))             { return; }  // click sull'immagine: nulla
    closeLightbox();                                       // sfondo o pulsante × → chiudi
    return;
  }

  // ── NAVIGAZIONE ──
  const navEl = e.target.closest('[data-nav]');
  if (navEl) { navigate(navEl.dataset.nav); return; }

  // ── APERTURA PROGETTO ──
  const projEl = e.target.closest('[data-nav-project]');
  if (projEl) { navigate('project', projEl.dataset.navProject); return; }

  // ── CAMBIO LINGUA ──
  const langEl = e.target.closest('[data-lang]');
  if (langEl) { setLang(langEl.dataset.lang); return; }

  // ── APRI GALLERIA ──
  const lbEl = e.target.closest('[data-lb-index]');
  if (lbEl) {
    const p = PROJECTS.find(x => x.id === state.projectId);
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

// Tastiera: Esc chiude il lightbox, ← → naviga
document.addEventListener('keydown', function (e) {
  if (!lbState.images.length) return;
  if (e.key === 'Escape')      closeLightbox();
  else if (e.key === 'ArrowRight') lbNext();
  else if (e.key === 'ArrowLeft')  lbPrev();
});

// ── AVVIO ──────────────────────────────────────────────────────────────────
render();
