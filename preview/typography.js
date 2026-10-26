(() => {
  'use strict';

  const fonts = [
    { id: 'dm-sans', name: 'DM Sans', label: 'DM Sans · attuale', fallback: 'sans-serif' },
    { id: 'manrope', name: 'Manrope', fallback: 'sans-serif', remote: true },
    { id: 'work-sans', name: 'Work Sans', fallback: 'sans-serif', remote: true, italic: true },
    { id: 'source-sans-3', name: 'Source Sans 3', fallback: 'sans-serif', remote: true, italic: true },
    { id: 'lora', name: 'Lora', fallback: 'serif', remote: true, italic: true, minWeight: 400 },
    { id: 'cormorant', name: 'Cormorant Garamond', fallback: 'serif' }
  ];
  const storageKey = 'selos-font-preview-v1';
  const root = document.documentElement;
  const originalBodyFont = root.style.getPropertyValue('--font-text');
  const loaded = new Map();
  const assetBase = new URL('preview/', document.baseURI);
  let panel;
  let active = false;
  let revision = 0;
  let stylesReady;
  let applied = { headings: 'dm-sans', text: 'dm-sans' };
  let saved = readSaved();

  function readSaved() {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey));
      if (value && fonts.some(font => font.id === value.headings) && fonts.some(font => font.id === value.text)) return value;
    } catch (_) { /* Preview also works when browser storage is unavailable. */ }
    return { headings: 'dm-sans', text: 'dm-sans' };
  }

  function save(value) {
    saved = { ...value };
    try { localStorage.setItem(storageKey, JSON.stringify(value)); } catch (_) { /* Optional persistence. */ }
  }

  function stylesheet(href, resource) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.dataset.fontPreviewResource = resource;
      const timer = setTimeout(() => finish(new Error('Font stylesheet timed out')), 12000);
      function finish(error) {
        clearTimeout(timer);
        link.onload = link.onerror = null;
        if (error) { link.remove(); reject(error); }
        else resolve();
      }
      link.onload = () => finish();
      link.onerror = () => finish(new Error('Font stylesheet unavailable'));
      document.head.append(link);
    });
  }

  function loadFont(font) {
    if (!loaded.has(font.id)) {
      const promise = (async () => {
        if (font.remote) {
          const family = encodeURIComponent(font.name).replace(/%20/g, '+');
          const weights = (font.minWeight || 300) + '..700';
          const styles = font.italic ? ':ital,wght@0,' + weights + ';1,' + weights : ':wght@' + weights;
          await stylesheet('https://fonts.googleapis.com/css2?family=' + family + styles + '&display=swap', font.id);
        }
        const sample = 'Selo’s Design · Spazi che raccontano storie · Şişli, ışık, İtalya';
        const faces = await document.fonts.load('400 18px "' + font.name + '"', sample);
        if (!faces.length) throw new Error('Font face unavailable');
      })();
      loaded.set(font.id, promise);
      promise.catch(() => {
        loaded.delete(font.id);
        document.querySelectorAll('[data-font-preview-resource="' + font.id + '"]').forEach(link => link.remove());
      });
    }
    return loaded.get(font.id);
  }

  function setControls(value) {
    panel.querySelector('#font-preview-headings').value = value.headings;
    panel.querySelector('#font-preview-text').value = value.text;
  }

  async function apply(value) {
    const request = ++revision;
    const headingFont = fonts.find(font => font.id === value.headings);
    const textFont = fonts.find(font => font.id === value.text);
    const status = panel.querySelector('[role="status"]');
    status.textContent = 'Caricamento dei font…';
    try {
      await Promise.all([loadFont(headingFont), loadFont(textFont)]);
      if (!active || request !== revision) return;
      root.style.setProperty('--font-preview-headings', '"' + headingFont.name + '", ' + headingFont.fallback);
      root.style.setProperty('--font-text', '"' + textFont.name + '", ' + textFont.fallback);
      applied = { ...value };
      save(value);
      status.textContent = 'Titoli: ' + headingFont.name + ' · Testi: ' + textFont.name;
    } catch (_) {
      if (!active || request !== revision) return;
      setControls(applied);
      status.textContent = 'Font non caricato. Controlla la connessione e riprova.';
    }
  }

  function mount() {
    panel = document.createElement('aside');
    panel.className = 'font-preview';
    panel.setAttribute('aria-label', 'Anteprima tipografica');
    const options = fonts.map(font => '<option value="' + font.id + '">' + (font.label || font.name) + '</option>').join('');
    panel.innerHTML = `
      <details open>
        <summary>Prova i font <span>Anteprima</span></summary>
        <div class="font-preview-controls">
          <p>Cambia carattere e guarda il risultato sulle varie pagine.</p>
          <label for="font-preview-headings">Titoli</label>
          <select id="font-preview-headings">${options}</select>
          <label for="font-preview-text">Testi e menu</label>
          <select id="font-preview-text">${options}</select>
          <div class="font-preview-actions">
            <button type="button" data-font-action="same">Usa il font dei titoli per tutto</button>
            <button type="button" data-font-action="reset">Ripristina DM Sans</button>
          </div>
          <p class="font-preview-status" role="status" aria-live="polite"></p>
          <button class="font-preview-exit" type="button" data-font-action="exit">Esci dall’anteprima</button>
        </div>
      </details>`;
    panel.addEventListener('change', () => {
      apply({ headings: panel.querySelector('#font-preview-headings').value, text: panel.querySelector('#font-preview-text').value });
    });
    panel.addEventListener('click', event => {
      const button = event.target.closest('[data-font-action]');
      if (!button) return;
      const action = button.dataset.fontAction;
      if (action === 'exit') {
        const url = new URL(location.href);
        url.searchParams.delete('fonts');
        history.replaceState(null, '', url.href);
        syncFontPreview();
        document.querySelector('.nav-logo').focus();
      } else {
        const value = action === 'reset' ? { headings: 'dm-sans', text: 'dm-sans' } : {
          headings: panel.querySelector('#font-preview-headings').value,
          text: panel.querySelector('#font-preview-headings').value
        };
        setControls(value);
        apply(value);
      }
    });
    document.body.append(panel);
  }

  async function sync() {
    const enabled = new URLSearchParams(location.search).has('fonts');
    if (!enabled) {
      active = false;
      revision++;
      root.removeAttribute('data-font-preview');
      root.style.removeProperty('--font-preview-headings');
      if (originalBodyFont) root.style.setProperty('--font-text', originalBodyFont);
      else root.style.removeProperty('--font-text');
      if (panel) panel.hidden = true;
      return;
    }
    if (active) return;
    active = true;
    try {
      if (!stylesReady) stylesReady = stylesheet(new URL('typography.css', assetBase).href, 'panel');
      await stylesReady;
      if (!active) return;
      root.setAttribute('data-font-preview', '');
      if (!panel) mount();
      panel.hidden = false;
      setControls(saved);
      apply(saved);
    } catch (_) {
      active = false;
      stylesReady = null;
    }
  }

  window.SelosFontPreview = { sync };
  sync();
})();
