# Selo's Design — Guida alla manutenzione

Sito vetrina statico: nessun server, nessuna build. Si carica aprendo `index.html` in un browser o tramite Cloudflare Pages.

---

## Come aggiungere un nuovo progetto

**1. Prepara le immagini**

Crea una cartella dentro `assets/projects/` con il nome del progetto (solo lettere minuscole e trattini, es. `assets/projects/villa-arona/`). Mettici tutte le foto del progetto.

**2. Aggiungi il progetto in `data/projects.js`**

Apri `data/projects.js`. Vai in fondo al file, trova il commento:

```
// ── AGGIUNGI NUOVI PROGETTI QUI ...
```

Incolla un nuovo blocco progetto prima della riga `];` finale. Copia la struttura da un progetto esistente e compila i campi:

```js
{
  id:    "nome-progetto",           // identificativo univoco, solo minuscole e trattini
  title: { it: "...", en: "...", tr: "" },
  tag:   { it: "Residenziale · 2025", en: "Residential · 2025", tr: "" },
  cover: "assets/projects/nome-progetto/copertina.png",
  plan:  "assets/projects/nome-progetto/planimetria.png",  // o: plan: null, se non disponibile
  specs: [
    { label: { it: "Cliente",    en: "Client",   tr: "" }, value: { it: "Privato", en: "Private", tr: "" } },
    { label: { it: "Località",   en: "Location", tr: "" }, value: { it: "...",     en: "...",     tr: "" } },
    { label: { it: "Superficie", en: "Area",     tr: "" }, value: "XX m²" },
    { label: { it: "Tipologia",  en: "Type",     tr: "" }, value: { it: "...",     en: "...",     tr: "" } },
    { label: { it: "Anno",       en: "Year",     tr: "" }, value: "2025" },
    { label: { it: "Servizi",    en: "Services", tr: "" }, value: { it: "...",     en: "...",     tr: "" } }
  ],
  intro: [
    { it: "Primo paragrafo descrittivo...", en: "First descriptive paragraph...", tr: "" },
    { it: "Secondo paragrafo...",           en: "Second paragraph...",            tr: "" }
  ],
  gallery: [
    { src: "assets/projects/nome-progetto/foto1.png", caption: { it: "...", en: "...", tr: "" } },
    { src: "assets/projects/nome-progetto/foto2.png", caption: { it: "...", en: "...", tr: "" } }
  ]
},
```

**3. Salva e ricarica il browser.** Il progetto appare automaticamente nella lista e nella pagina di dettaglio.

---

## Come aggiungere o modificare una traduzione

I testi sono divisi in tre file nella cartella `data/`:

| File | Lingua |
|------|--------|
| `data/it.js` | Italiano |
| `data/en.js` | Inglese |
| `data/tr.js` | Turco |

**Per modificare un testo esistente:** apri il file della lingua corrispondente, trova la chiave e cambia il valore tra virgolette a destra dei due punti. Esempio in `data/it.js`:

```js
hero: {
  title1: "Spazi che",   // ← cambia solo questo valore
  ...
}
```

**Per completare la traduzione turca:** apri `data/tr.js`. Tutti i valori `""` sono testi non ancora tradotti — comparendo vuoti sul sito rendono evidente cosa manca. Riempi ciascun `""` con la traduzione corrispondente.

**Per i testi dei progetti** (titoli, descrizioni, didascalie): i testi multilingua sono dentro `data/projects.js`, in ciascun progetto, nella forma `{ it: "...", en: "...", tr: "" }`. Compila il campo `tr` per ogni progetto.

---

## Struttura dei file

```
/
├── index.html        ← punto di ingresso, non modificare
├── style.css         ← stili, non modificare
├── app.js            ← logica, non modificare
├── data/
│   ├── it.js         ← testi italiani dell'interfaccia
│   ├── en.js         ← testi inglesi dell'interfaccia
│   ├── tr.js         ← testi turchi dell'interfaccia
│   └── projects.js   ← tutti i progetti con testi multilingua
└── assets/
    ├── logo.png
    ├── hero.png
    └── projects/
        ├── trilocale/
        ├── bilocale/
        ├── monolocale/
        └── eindhoven/
```

---

## Cambiare tema

Apri `index.html` e modifica l'attributo `data-theme` sul tag `<body>`:

- `data-theme="lineare"` — bianco e verde (default)
- `data-theme="caldo"` — toni sabbia e terracotta
- `data-theme="notturno"` — dark mode

---

## Deploy su Cloudflare Pages

1. Crea un repository git con tutti i file del sito
2. Su Cloudflare Pages: connetti il repository, seleziona il branch principale
3. Build command: *(lascia vuoto)*
4. Build output directory: `/` oppure `.`

Cloudflare servirà `index.html` come pagina principale.
