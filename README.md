# Selo’s Design — Guida alla manutenzione

Il nome dello studio è **Selo’s Design**, da SElin + LOrenzo + ’s. Usa questa dicitura nei testi, nei metadati e nei dati strutturati.

Sito vetrina statico: nessun framework o server applicativo. In produzione Cloudflare Workers esegue una breve build che genera le pagine SEO statiche; in locale si può aprire `index.html` oppure usare un server HTTP.

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
  subtitle: { it: "...", en: "...", tr: "" }, // facoltativo: titolo del racconto al posto di «Il progetto»
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

Per introdurre una sottosezione nel racconto, aggiungi `heading: { it: "Il concept", en: "The concept", tr: "Konsept" }` al relativo paragrafo di `intro`. Il titolo viene mostrato prima del testo.

La homepage usa `assets/hero.png` come immagine d'atmosfera in apertura. Sotto
presenta Trilocale Magenta e Camera Corbetta con lo stesso peso visivo. La selezione
è in `renderHome()` in `app.js`; titoli, copertine e collegamenti vengono dai dati
del portfolio. I progetti con `inProgress: true` sono esclusi. I testi della
homepage sono nei dizionari di lingua.

Nelle schede il racconto è affiancato dalla planimetria e seguito dalla galleria.
Il campo `cover` serve alla homepage e all'elenco; per mostrare quella stessa
immagine anche nella scheda, includila in `gallery`.

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
├── sitemap.xml       ← per Google Search Console
├── robots.txt        ← istruzioni per i crawler
├── data/
│   ├── it.js         ← testi italiani dell'interfaccia
│   ├── en.js         ← testi inglesi dell'interfaccia
│   ├── tr.js         ← testi turchi dell'interfaccia (+ chiave privacy.body)
│   └── projects.js   ← tutti i progetti con testi multilingua
└── assets/
    ├── logo.png
    ├── hero.png
    ├── fonts/        ← font self-hosted (woff2, no Google CDN)
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

## Anteprima locale

Il sito funziona aprendo `index.html` direttamente nel browser, ma alcuni browser bloccano i font self-hosted via `file://`. Per vedere i font corretti usa un server locale:

**Opzione 1 — Python (sempre disponibile su Mac/Linux):**
```
python3 -m http.server 8080
```
Poi apri: http://localhost:8080

**Opzione 2 — Node.js (se installato):**
```
npx serve .
```
Poi apri l'URL indicato nel terminale.

---

## Anteprima dei font

Apri la homepage aggiungendo `?fonts=1` all’URL, per esempio `http://localhost:8080/?fonts=1` se stai servendo `dist` in locale. Compare un pannello richiudibile per cambiare separatamente il font dei titoli e quello di testi e menu, applicare un font a tutto o ripristinare DM Sans.

Le scelte si vedono subito e vengono ricordate nel browser, anche passando a un’altra pagina o ricaricandola. Non serve rigenerare il sito per ogni prova. «Esci dall’anteprima» riporta al sito normale. Questa modalità non cambia i font predefiniti del sito né i suoi URL canonical.

Sono disponibili DM Sans, Manrope, Work Sans, Source Sans 3, Lora e Cormorant Garamond. DM Sans e Cormorant sono locali; le altre famiglie vengono caricate da Google Fonts solo quando selezionate nell’anteprima e richiedono una connessione a Internet.

## Deploy su Cloudflare Workers

Il sito è il progetto Workers `seloswebsite`, collegato al repository GitHub
`lorenzodustycosta/seloswebsite`. Ogni push su `master` aggiorna `selosdesign.com`;
gli altri branch producono un URL di anteprima.

Impostazioni (Settings → Build):

- Build command: `node scripts/export-pages.js`
- Deploy command: `npx wrangler deploy`

`wrangler.jsonc` indica a Cloudflare di pubblicare la cartella `dist`
(`"assets": { "directory": "./dist" }`). Cloudflare esegue lo script, genera le
cartelle `index.html` per le pagine bilingui e `dist/sitemap.xml`, poi pubblica
`dist/`. La cartella generata è esclusa da Git e non va modificata manualmente.

Se una build fallisce, il sito resta alla versione precedente: apri la build in
Deployments per leggere il log.

## Pagine pubbliche e SEO

La navigazione e le traduzioni restano in `app.js` e `data/it.js` / `data/en.js`.
I nuovi contenuti di servizio sono in `data/services.js`, che estende gli stessi dizionari.
Le tre pagine di interior design, rendering e consulenza hanno un’apertura con immagine,
un racconto breve e un solo progetto di esempio. `SERVICE_IMAGES` in `data/services.js`
seleziona le immagini; le didascalie e i collegamenti provengono dai dati del progetto.
I vecchi URL `#/team`, `#/projects`, `#/project/...` e `#/contact` continuano a funzionare.
Ogni pagina ha anche un URL statico, con `index.html` in una cartella: `/team/`,
`/projects/`, `/project-bilocale-milano/`, `/contact/`, ecc.
La versione inglese usa il suffisso `-en`, ad esempio `/contact-en/`; la homepage
inglese è `/home-en/`. Il selettore lingua mantiene la pagina corrente e lo storico.
Non ci sono dipendenze o framework: la build su Cloudflare esegue solo lo script Node.

Dopo aver modificato testi, progetti o template, aggiorna la cartella di build e il sitemap:

```
node scripts/export-pages.js
python3 scripts/check-pages.py
python3 -m http.server 8080 --directory dist
```

I file HTML generati sono artefatti di build dentro `dist/` e non sono versionati. Non modificarli direttamente: aggiorna i dizionari o il template condiviso.
`index.html` è anch’esso esportato con il template originale della homepage.
Canonical, Open Graph e sitemap usano `https://www.selosdesign.com`.

Amsterdam è un progetto in `data/projects.js`, con `inProgress: true`, senza anno.
Nell'elenco appare nella sezione «In corso». La scheda mostra testo e informazioni,
senza copertina o galleria segnaposto, e mantiene gli URL `/amsterdam/` e
`/amsterdam-en/`.
Quando saranno disponibili fotografie e contenuti approvati, il template può ospitare
le immagini rimuovendo il flag `inProgress` e sostituendo i riferimenti segnaposto.
Il progetto Eindhoven già esistente rimane nel portfolio e non è stato rinominato.

### Eventi per una futura integrazione

`document` emette l’evento locale `selos:interaction`. `event.detail` contiene
`event`, `page`, `language` e, per i CTA, `location`. I nomi sono
`contact_click`, `project_click`, `email_click`, `phone_click`,
`contact_form_start`, `contact_form_submission` (solo dopo risposta positiva).
Nessun evento contiene campi del modulo; nessun evento viene memorizzato o inviato.
Un’eventuale integrazione con tracking va definita e approvata separatamente.
Il modulo conserva endpoint Formspree e chiavi originali; i dettagli aggiuntivi
sono facoltativi e inviati nella stessa FormData.

Il modulo mostra subito località, tempi, ambienti e fase del progetto. Non richiede
un budget. Solo email e messaggio sono obbligatori e contrassegnati da un asterisco.
