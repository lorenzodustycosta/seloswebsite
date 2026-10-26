// ─────────────────────────────────────────────────────────────────────────────
// TRADUZIONI ITALIANE — it.js
//
// Per modificare un testo: trova la chiave corrispondente e cambia solo il valore
// tra virgolette a destra dei due punti.
//
// ⚠️  Non cambiare i nomi delle chiavi (es. "nav", "hero", "title") — solo i valori.
// ─────────────────────────────────────────────────────────────────────────────

window.LANG_IT = {

  nav: {
    home:     "Home",
    team:     "Il Team",
    projects: "Progetti",
    contact:  "Contatti"
  },

  hero: {
    eyebrow: "Studio di Interior Design · Magenta · Milano",
    title1:  "Spazi che",
    title2:  "raccontano",
    title3:  "storie.",
    desc:    "Progettiamo interni a Magenta e Milano. Ti aiutiamo a ripensare gli spazi e a scegliere arredi, colori e materiali per la tua casa.",
    cta:     "Scopri i Progetti",
    cta2:    "Contattaci",
    imageLabel: "Rendering",
    heroImageAlt: "Dettaglio di un interno con divano chiaro e lampada da terra"
  },

  homeProjects: {
    label: "Progetti",
    title: "Alcuni dei nostri lavori",
    all: "Tutti i progetti"
  },

  homeContact: {
    ctaTitle: "Da quale spazio vorresti partire?",
    ctaText: "Una stanza, una casa o qualche scelta d’arredo. Scrivici cosa hai in mente: capiremo insieme come possiamo aiutarti.",
    ctaBtn: "Parliamone"
  },

  about: {
    label: "Lo studio",
    title: "Siamo Selin e Lorenzo, siamo Selo’s Design.",
    p1: "Selo’s Design è uno studio di interior design con base a Magenta (Milano), che lavora su progetti in Italia e in Europa. Selin si occupa del progetto degli interni, Lorenzo dell’organizzazione e dei rapporti con fornitori e artigiani.",
    p2: "Partiamo dalla tua casa e da come la vivi: cosa funziona, cosa vorresti cambiare, quali arredi vuoi tenere. Su queste basi costruiamo il progetto e facciamo le scelte insieme a te.",
    link: "Qualcosa in più su di noi"
  },

  process: {
    label: "Come lavoriamo",
    title: "Dalle idee alle scelte per la casa",
    intro: "Ogni incarico ha dimensioni diverse. Definiamo insieme cosa serve, prima di sviluppare il progetto.",
    imageAlt: "Moodboard di materiali e colori: legno, pietra e toni verdi",
    steps: [
      {
        num: "01",
        title: "Conosciamo la casa",
        desc: "Ci racconti le tue esigenze e guardiamo gli spazi, le abitudini e gli arredi da cui partire."
      },
      {
        num: "02",
        title: "Mettiamo a fuoco le idee",
        desc: "Planimetrie, materiali e rendering ci aiutano a confrontare le alternative e a scegliere una direzione."
      },
      {
        num: "03",
        title: "Sviluppiamo le scelte",
        desc: "Definiamo arredi e dettagli. Se l’incarico lo prevede, ci coordiniamo anche con fornitori e artigiani."
      }
    ]
  },

  services: {
    label: "Servizi",
    title: "Da dove possiamo partire",
    items: [
      {
        num: "01",
        title: "Progettazione di interni",
        desc: "Ripensiamo la disposizione degli ambienti e il rapporto tra arredi, luce e materiali, per una stanza o per tutta la casa."
      },
      {
        num: "02",
        title: "Rendering",
        desc: "Visualizziamo il progetto per confrontare soluzioni, proporzioni e abbinamenti prima di fare le scelte definitive."
      },
      {
        num: "03",
        title: "Consulenza d’arredo",
        desc: "Ti aiutiamo a scegliere mobili, colori e finiture, tenendo insieme quello che c’è già e quello che vorresti aggiungere."
      }
    ]
  },

  values: {
    label: "Perché scegliere Selo’s Design",
    title: "I nostri valori",
    items: [
      { title: "Personalizzazione", desc: "Soluzioni di design su misura, pensate sulle esigenze di ogni cliente. Ogni progetto riflette lo stile e la personalità di chi lo vive." },
      { title: "Qualità",           desc: "Dalla progettazione ai materiali, dalla cura del cliente alla scelta dei fornitori: manteniamo standard elevati in ogni fase del lavoro." },
      { title: "Progetto a 360°",   desc: "Grazie a una rete di collaboratori qualificati, offriamo soluzioni complete integrando aspetti tecnici, fornitura di mobili e coordinamento lavori." }
    ]
  },

  team: {
    label: "Il Team",
    title: "Le persone dietro\nogni progetto",
    desc:  "Due figure complementari, un unico obiettivo: trasformare i tuoi spazi in luoghi che senti davvero tuoi.",
    members: [
      {
        name:  "Selin Hilal",
        role:  "Interior Designer · Fondatrice",
        // I paragrafi sono separati da una riga vuota (\n\n)
        bio:   "Sono nata e cresciuta ad Antalya, sul Mediterraneo: è lì, tra il mare e il negozio di arredamenti di mio padre, che è nata la mia passione per il design.\n\nMi sono laureata in Architettura d’Interni alla Bilkent University di Ankara e ho lavorato per alcuni anni a Istanbul su progetti per hotel, ville e uffici. Nel 2016 mi sono trasferita in Italia, dove ho conseguito la laurea magistrale in Architettura al Politecnico di Milano.\n\nDa allora lavoro su progetti residenziali e commerciali in Italia e in Europa. Mi occupo della distribuzione degli spazi, degli arredi, dei materiali e della luce. Uso planimetrie, moodboard e rendering per rendere le proposte facili da valutare insieme: come funziona una stanza, quali mobili possono starci, come stanno insieme colori e finiture.",
        color: "oklch(84% 0.04 85)",
        photo: "assets/selin.png"
      },
      {
        name:  "Lorenzo Costa",
        role:  "Project Manager · Co-fondatore",
        bio:   "Seguo preventivi, tempi e costi di ogni progetto e tengo i rapporti con fornitori e artigiani. Quando il lavoro lo richiede, mi occupo anche dei sopralluoghi e del coordinamento con clienti e fornitori.\n\nRaccolgo le informazioni, seguo le questioni aperte e metto per iscritto gli accordi, così che le scelte progettuali di Selin si traducano in un lavoro realizzabile, nei tempi e nel budget previsti.\n\nPer il cliente, sono il riferimento per tutto ciò che riguarda l’organizzazione: sa sempre a chi chiedere e a che punto è il progetto.",
        color: "oklch(84% 0.03 220)",
        photo: "assets/lorenzo.png"
      }
    ]
  },

  projects: {
    label:         "Progetti",
    title:         "I nostri progetti",
    desc:          "Progetti residenziali e proposte d’arredo. Qui raccogliamo planimetrie, rendering e scelte di materiali per case e singoli ambienti.",
    inProgressLabel: "In corso",
    detailsTitle: "Dati del progetto",
    openImage: "Apri immagine",
    back:          "Tutti i progetti",
    planLabel:     "Planimetria",
    galleryLabel:  "Immagini del progetto",
    overviewLabel: "Il progetto",
    metaLocation:  "Località",
    metaArea:      "Superficie",
    viewLabel:     "Scopri",
    ctaTitle:      "Ti piace quello che vedi?",
    ctaText:       "Raccontaci il tuo spazio. Il primo incontro è conoscitivo e senza impegno.",
    ctaBtn:        "Contattaci"
  },

  contact: {
    label:          "Contatti",
    title:          "Parliamo del\ntuo progetto",
    areaText:       "Lavoriamo a Magenta, Milano e dintorni e seguiamo progetti anche all’estero.",
    emailLabel:     "Email",
    phoneLabel:     "Telefono",
    whatsappLabel:  "Scrivici su WhatsApp",
    whatsappReply:  "Di solito rispondiamo in giornata",
    socialLabel:    "Seguici",
    form: {
      name:               "Nome",
      surname:            "Cognome",
      email:              "Email",
      phone:              "Telefono",
      messageLabel:       "Messaggio",
      messagePlaceholder: "Raccontaci del tuo progetto…",
      privacyText:        "Usiamo i dati che ci invii per rispondere alla tua richiesta.",
      privacyLink:        "Informativa sulla privacy",
      privacyNewTab:      "Informativa sulla privacy (si apre in una nuova scheda)",
      send:               "Invia Messaggio",
      sending:            "Invio in corso…",
      success:            "Messaggio inviato! Ti risponderemo presto.",
      error:              "Qualcosa è andato storto. Riprova o scrivici direttamente."
    }
  },

  footer: {
    tagline:     "Studio di Interior Design · Magenta · Milano.",
    studioLabel: "Contatti",
    hoursLabel:  "Orari",
    hoursLine1:  "Lun – Ven: 9:00 – 19:00",
    hoursLine2:  "Sabato: su appuntamento",
    privacy:     "Privacy Policy",
    rights:      `© ${new Date().getFullYear()} Selo’s Design. Tutti i diritti riservati.`
  },

  privacy: {
    title: "Privacy & Cookie Policy",
    body: `## 1. Titolare del Trattamento
Il Titolare del trattamento dei dati personali raccolti tramite questo sito è **Ummusan Selin Hilal**, P.IVA **11190110962**, con sede in **Via Silvio Pellico 40, 20013, Magenta**.
Email di contatto: **selosdesign@gmail.com**

## 2. Quali dati raccogliamo
Questo sito raccoglie esclusivamente i dati che ci fornisci volontariamente tramite il modulo di contatto: nome e cognome, indirizzo email, numero di telefono (se fornito), il contenuto del messaggio e gli eventuali dettagli facoltativi sul progetto (località, ambienti, fase e tempi).
Non raccogliamo dati di navigazione a fini statistici o di profilazione, non utilizziamo strumenti di analisi del traffico (es. Google Analytics) e non gestiamo newsletter o comunicazioni di marketing.

## 3. Finalità e base giuridica
Utilizziamo i dati del modulo esclusivamente per rispondere alla tua richiesta e gestire un eventuale contatto preliminare relativo ai nostri servizi. Base giuridica: riscontro a una tua richiesta e misure precontrattuali (art. 6.1.b GDPR) e nostro legittimo interesse a risponderti (art. 6.1.f GDPR). Il conferimento è facoltativo, ma senza i dati non possiamo risponderti.

## 4. Come e dove conserviamo i dati
I messaggi inviati tramite il modulo vengono recapitati e conservati nella nostra casella di posta (servizio Google/Gmail), per il tempo necessario a gestire la richiesta e gli eventuali contatti successivi, salvo obblighi di legge.

## 5. A chi comunichiamo i dati
Non vendiamo né cediamo i tuoi dati a terzi. Possono trattarli, per nostro conto, i fornitori tecnici che utilizziamo: **Cloudflare** (hosting e distribuzione del sito), **Google/Gmail** (casella email), **Formspree** (invio tecnico del modulo). Alcuni fornitori possono trattare dati fuori dall'UE, con le garanzie previste dal GDPR. I dati possono essere comunicati alle autorità se obbligatorio per legge.

## 6. I tuoi diritti
Hai diritto di accedere ai tuoi dati, chiederne rettifica o cancellazione, limitarne od opporti al trattamento, richiederne la portabilità e revocare l'eventuale consenso. Scrivi a **selosdesign@gmail.com**. Puoi inoltre proporre reclamo al **Garante per la protezione dei dati personali** (www.garanteprivacy.it).

## 7. Cookie
I cookie sono piccoli file di testo memorizzati sul tuo dispositivo. Questo sito utilizza **esclusivamente cookie tecnici** necessari al funzionamento, che non richiedono consenso. **Non** utilizziamo cookie di profilazione, analisi o marketing. I caratteri tipografici sono ospitati sul nostro server e non comportano trasmissione di dati a terzi. Il sito non incorpora mappe o contenuti di terze parti che installano cookie.

## 8. Modifiche
Potremo aggiornare questa policy nel tempo. Ultimo aggiornamento: **14/06/2026**.

## 9. Contatti
Per domande su questa policy: **selosdesign@gmail.com**`
  }

};
