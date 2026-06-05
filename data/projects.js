// ─────────────────────────────────────────────────────────────────────────────
// DATI PROGETTI — projects.js
//
// Ogni elemento dell'array PROJECTS è un progetto del portfolio.
// Per aggiungere un nuovo progetto: copia un blocco esistente, incollalo in fondo
// all'array (prima del "];" finale) e compila i campi.
//
// Struttura di ogni campo multilingua: { it: "...", en: "...", tr: "" }
// I campi senza traduzione (tr: "") appaiono vuoti quando il sito è in turco —
// questo è intenzionale per segnalare le traduzioni mancanti.
//
// Campi NON tradotti (valore singolo, uguale in tutte le lingue): area, anno.
// ─────────────────────────────────────────────────────────────────────────────

window.PROJECTS = [

  // ── PROGETTO 1 ──────────────────────────────────────────────────────────
  {
    // Identificativo univoco — usato nell'URL interno. Solo lettere minuscole e trattini.
    id: "trilocale-magenta",

    title: { it: "Trilocale Magenta",     en: "Magenta Three-Room Flat", tr: "" },
    tag:   { it: "Residenziale · 2024",   en: "Residential · 2024",      tr: "" },

    // Immagine di copertina (nella lista progetti e in cima al dettaglio)
    cover: "assets/projects/trilocale/open_space_1.png",

    // Planimetria (opzionale — rimuovi la riga o metti null se non disponibile)
    plan:  "assets/projects/trilocale/plan.png",

    // Scheda tecnica — array di coppie label/valore
    specs: [
      { label: { it: "Cliente",    en: "Client",   tr: "" }, value: { it: "Privato",                            en: "Private",                         tr: "" } },
      { label: { it: "Località",   en: "Location", tr: "" }, value: { it: "Magenta, Milano",                    en: "Magenta, Milan",                  tr: "" } },
      { label: { it: "Superficie", en: "Area",     tr: "" }, value: "95 m²" },
      { label: { it: "Tipologia",  en: "Type",     tr: "" }, value: { it: "Trilocale",                          en: "Three-room flat",                 tr: "" } },
      { label: { it: "Anno",       en: "Year",     tr: "" }, value: "2024" },
      { label: { it: "Servizi",    en: "Services", tr: "" }, value: { it: "Progettazione · Rendering · Arredo", en: "Design · Rendering · Furnishing", tr: "" } }
    ],

    // Testo introduttivo — array di paragrafi
    intro: [
      {
        it: "Un trilocale di 95 m² in uno stabile signorile a Magenta, ripensato per una giovane coppia. L'intervento chiave è l'abbattimento della parete tra cucina e soggiorno: un unico open space luminoso e conviviale al posto della distribuzione tradizionale. Una palette neutra di bianchi e grigi caldi fa da sfondo ad accenti vivaci — giallo, verde, corallo — di ispirazione pop-art, mentre la zona notte resta intima, con arredi su misura e contenimento integrato.",
        en: "A 95 m² three-room flat in an elegant period building in Magenta, reimagined for a young couple. The key move is removing the wall between kitchen and living room: a single, bright, convivial open space in place of the traditional layout. A neutral palette of whites and warm greys sets the stage for vivid accents — yellow, green, coral — with a pop-art feel, while the sleeping area stays intimate, with bespoke furniture and integrated storage.",
        tr: ""
      },
      {
        it: "La zona living è pavimentata in SPC effetto legno per continuità visiva e resistenza, mentre le camere adottano un parquet che ne scalda l'atmosfera. Il bagno è stato rinnovato con doccia walk-in in vetro trasparente, mobile su misura e finiture effetto ceppo di Gré, valorizzate da nicchie decorative. L'illuminazione alterna faretti a incasso, per le aree funzionali, e corpi decorativi che definiscono i punti focali di ogni ambiente.",
        en: "On the technical side, the living area is laid with wood-effect SPC flooring for visual continuity and durability, while the bedrooms use parquet to warm the atmosphere. The bathroom was renovated with a clear-glass walk-in shower, a bespoke vanity and ceppo di Gré-effect finishes, enhanced by decorative niches. Lighting alternates recessed spots for the functional areas with decorative fixtures that define the focal points of each room.",
        tr: ""
      }
    ],

    // Galleria fotografica
    gallery: [
      { src: "assets/projects/trilocale/open_space_1.png", caption: { it: "Open space — living e cucina",    en: "Open space — living and kitchen",  tr: "" } },
      { src: "assets/projects/trilocale/living_1.png",     caption: { it: "Zona living",                     en: "Living area",                      tr: "" } },
      { src: "assets/projects/trilocale/soggiorno_2.png",  caption: { it: "Soggiorno",                       en: "Living room",                      tr: "" } },
      { src: "assets/projects/trilocale/kitchen_1.png",    caption: { it: "Cucina con isola",                en: "Kitchen with island",              tr: "" } },
      { src: "assets/projects/trilocale/kitchen_2.png",    caption: { it: "Cucina — dettaglio",              en: "Kitchen — detail",                 tr: "" } },
      { src: "assets/projects/trilocale/kitchen_3.png",    caption: { it: "Colonna elettrodomestici",        en: "Appliance column",                 tr: "" } },
      { src: "assets/projects/trilocale/bedroom_1.png",    caption: { it: "Camera da letto",                 en: "Bedroom",                          tr: "" } },
      { src: "assets/projects/trilocale/bedroom_2.png",    caption: { it: "Camera — cabina armadio",         en: "Bedroom — walk-in closet",         tr: "" } },
      { src: "assets/projects/trilocale/bathroom_2.png",   caption: { it: "Bagno",                           en: "Bathroom",                         tr: "" } },
      { src: "assets/projects/trilocale/bathroom_1.png",   caption: { it: "Bagno — dettaglio doccia",        en: "Bathroom — shower detail",         tr: "" } },
      { src: "assets/projects/trilocale/studio_1.png",     caption: { it: "Studio",                          en: "Study",                            tr: "" } }
    ]
  },

  // ── PROGETTO 2 ──────────────────────────────────────────────────────────
  {
    id: "bilocale-milano",

    title: { it: "Bilocale Milano",       en: "Milan Two-Room Flat",  tr: "" },
    tag:   { it: "Residenziale · 2023",   en: "Residential · 2023",   tr: "" },

    cover: "assets/projects/bilocale/living_1.png",
    plan:  "assets/projects/bilocale/plan.png",

    specs: [
      { label: { it: "Cliente",    en: "Client",   tr: "" }, value: { it: "Agenzia immobiliare",               en: "Real estate agency",              tr: "" } },
      { label: { it: "Località",   en: "Location", tr: "" }, value: { it: "Milano, via Saronno",               en: "Milan, via Saronno",              tr: "" } },
      { label: { it: "Superficie", en: "Area",     tr: "" }, value: "55 m²" },
      { label: { it: "Tipologia",  en: "Type",     tr: "" }, value: { it: "Bilocale",                          en: "Two-room flat",                   tr: "" } },
      { label: { it: "Anno",       en: "Year",     tr: "" }, value: "2023" },
      { label: { it: "Servizi",    en: "Services", tr: "" }, value: { it: "Proposta d'arredo · Rendering",     en: "Furnishing proposal · Rendering", tr: "" } }
    ],

    intro: [
      {
        it: "Un bilocale di 55 m² in una casa di corte in stile vecchia Milano, nella zona di Corso Sempione. Commissionato da un'agenzia immobiliare per rendere l'appartamento più attraente e vendibile, il progetto è un restyling mirato che rispetta la planimetria esistente e valorizza ogni metro quadro, mettendo in dialogo i dettagli storici dell'edificio con un'estetica contemporanea.",
        en: "A 55 m² flat in an old-Milan courtyard building near Corso Sempione. Commissioned by a real estate agency to make the apartment more appealing and sellable, the project is a targeted restyling that respects the existing layout and makes the most of every square metre, putting the building's historic details in dialogue with a contemporary aesthetic.",
        tr: ""
      },
      {
        it: "La palette è delicata — bianco, beige e verde tenue — per un ambiente equilibrato e rilassante. La zona giorno unisce cucina e soggiorno: pensili bianchi con dettagli in legno chiaro, arredi dalle linee pulite e complementi moderni. La camera è ottimizzata con armadio su misura e scrivania integrata, mentre il bagno rinnovato alterna ceramica bianca e legno naturale, con nicchie illuminate e storage a scomparsa. Il parquet, uniformato in tutti gli ambienti, garantisce continuità visiva e un tocco naturale.",
        en: "The palette is gentle — white, beige and soft green — for a balanced, relaxing feel. The living area merges kitchen and lounge: white cabinets with light-wood details, clean-lined furniture and modern accents. The bedroom is optimised with a bespoke wardrobe and integrated desk, while the renovated bathroom alternates white ceramic and natural wood, with lit niches and concealed storage. Parquet, unified across all rooms, ensures visual continuity and a natural touch.",
        tr: ""
      }
    ],

    gallery: [
      { src: "assets/projects/bilocale/open_space_1.png", caption: { it: "Zona giorno — cucina e pranzo",  en: "Living area — kitchen and dining",    tr: "" } },
      { src: "assets/projects/bilocale/living_1.png",     caption: { it: "Soggiorno",                      en: "Living room",                         tr: "" } },
      { src: "assets/projects/bilocale/kitchen_1.png",    caption: { it: "Cucina",                         en: "Kitchen",                             tr: "" } },
      { src: "assets/projects/bilocale/kitchen_2.png",    caption: { it: "Cucina — vista bagno",           en: "Kitchen — view to bathroom",          tr: "" } },
      { src: "assets/projects/bilocale/bedroom_1.png",    caption: { it: "Camera da letto",                en: "Bedroom",                             tr: "" } },
      { src: "assets/projects/bilocale/bedroom_2.png",    caption: { it: "Camera — zona relax",            en: "Bedroom — relaxation corner",         tr: "" } },
      { src: "assets/projects/bilocale/bedroom_3.png",    caption: { it: "Camera — armadio e studio",      en: "Bedroom — wardrobe and study",        tr: "" } },
      { src: "assets/projects/bilocale/bathroom_1.png",   caption: { it: "Bagno",                          en: "Bathroom",                            tr: "" } }
    ]
  },

  // ── PROGETTO 3 ──────────────────────────────────────────────────────────
  {
    id: "monolocale-milano",

    title: { it: "Monolocale Milano",     en: "Milan Studio Flat",    tr: "" },
    tag:   { it: "Residenziale · 2022",   en: "Residential · 2022",   tr: "" },

    cover: "assets/projects/monolocale/living_1.png",
    plan:  "assets/projects/monolocale/plan.png",

    specs: [
      { label: { it: "Cliente",    en: "Client",   tr: "" }, value: { it: "Privato",                          en: "Private",                         tr: "" } },
      { label: { it: "Località",   en: "Location", tr: "" }, value: { it: "Milano, Paolo Sarpi",              en: "Milan, Paolo Sarpi",              tr: "" } },
      { label: { it: "Superficie", en: "Area",     tr: "" }, value: "35 m²" },
      { label: { it: "Tipologia",  en: "Type",     tr: "" }, value: { it: "Monolocale · B&B",                 en: "Studio · B&B",                    tr: "" } },
      { label: { it: "Anno",       en: "Year",     tr: "" }, value: "2022" },
      { label: { it: "Servizi",    en: "Services", tr: "" }, value: { it: "Ristrutturazione · Rendering",     en: "Renovation · Rendering",          tr: "" } }
    ],

    intro: [
      {
        it: "Un monolocale di 35 m² nel cuore di Paolo Sarpi, quartiere vivace e multiculturale di Milano, pensato come B&B per soggiorni brevi. L'intervento ottimizza uno spazio compatto in un ambiente coeso e versatile, dove cucina, zona pranzo e zona notte si integrano in un'unica fluidità visiva — fresca e contemporanea, in sintonia con l'energia del quartiere.",
        en: "A 35 m² studio flat in the heart of Paolo Sarpi, one of Milan's liveliest, most multicultural neighbourhoods, designed as a B&B for short stays. The project optimises a compact space into a cohesive, versatile environment where kitchen, dining and sleeping areas merge into a single visual flow — fresh and contemporary, in tune with the area's energy.",
        tr: ""
      },
      {
        it: "Il fulcro è la cucina in verde oliva con piani effetto marmo Calacatta e un'isola che funge anche da postazione di lavoro; un divano-letto trasforma la zona giorno in camera, affiancato da mensole su misura. Il pavimento in terrazzo unifica tutti gli ambienti, reinterpretando la tradizione milanese in chiave contemporanea, mentre lampade dalle forme geometriche in giallo e verde danno carattere. Il bagno, minimalista, alterna piastrelle bianche con fughe verdi e mobile lavabo verde, celando con discrezione l'area lavatrice e asciugatrice.",
        en: "At its core is an olive-green kitchen with Calacatta marble-effect worktops and an island that doubles as a workstation; a sofa bed turns the living area into a bedroom, flanked by bespoke shelving. Terrazzo flooring unifies every room, reinterpreting Milanese tradition in a contemporary key, while geometric lamps in yellow and green add character. The minimalist bathroom alternates white tiles with green grouting and a green vanity, discreetly concealing the washer and dryer area.",
        tr: ""
      }
    ],

    gallery: [
      { src: "assets/projects/monolocale/living_1.png",   caption: { it: "Zona giorno",               en: "Living area",              tr: "" } },
      { src: "assets/projects/monolocale/kitchen_1.png",  caption: { it: "Cucina e isola pranzo",      en: "Kitchen and dining island", tr: "" } },
      { src: "assets/projects/monolocale/living_2.png",   caption: { it: "Divano-letto e libreria",    en: "Sofa bed and shelving",     tr: "" } },
      { src: "assets/projects/monolocale/bathroom_1.png", caption: { it: "Bagno",                      en: "Bathroom",                 tr: "" } }
    ]
  },

  // ── PROGETTO 4 ──────────────────────────────────────────────────────────
  {
    id: "living-eindhoven",

    title: { it: "Living Eindhoven",      en: "Eindhoven Living",     tr: "" },
    tag:   { it: "Residenziale · 2022",   en: "Residential · 2022",   tr: "" },

    cover: "assets/projects/eindhoven/living_2.png",
    plan:  "assets/projects/eindhoven/plan.png",

    specs: [
      { label: { it: "Cliente",    en: "Client",   tr: "" }, value: { it: "Privato",                          en: "Private",                         tr: "" } },
      { label: { it: "Località",   en: "Location", tr: "" }, value: "Eindhoven" },
      { label: { it: "Superficie", en: "Area",     tr: "" }, value: "45 m²" },
      { label: { it: "Tipologia",  en: "Type",     tr: "" }, value: { it: "Zona living con cucina",           en: "Living area with kitchen",        tr: "" } },
      { label: { it: "Anno",       en: "Year",     tr: "" }, value: "2022" },
      { label: { it: "Progetto",   en: "Project",  tr: "" }, value: { it: "Disegno e scelta arredi",          en: "Design & furniture selection",    tr: "" } }
    ],

    intro: [
      {
        it: "Una zona living con cucina di 45 m² a Eindhoven, ripensata come un unico ambiente luminoso e fluido. Il progetto disegna lo spazio e ne seleziona gli arredi attorno a una palette neutra di bianchi caldi, crema e legno chiaro, lasciando che sia la luce naturale a dare ritmo agli ambienti.",
        en: "A 45 m² living area with kitchen in Eindhoven, reimagined as a single bright, flowing space. The project shapes the layout and selects the furnishings around a neutral palette of warm whites, cream and light wood, letting natural light set the rhythm of the rooms.",
        tr: ""
      },
      {
        it: "La cucina si integra con la zona pranzo, dove un tavolo affiancato da sedute in paglia di Vienna dialoga con la mensola-fioriera sospesa che porta il verde all'interno. Il soggiorno, raccolto attorno a divani in tessuto chiaro, tavolini tondi e una lampada ad arco, si apre verso l'esterno: pochi accenti grafici e una libreria a giorno completano un ambiente sobrio e accogliente.",
        en: "The kitchen flows into the dining area, where a table flanked by Vienna-cane chairs converses with a suspended planter-shelf that brings greenery indoors. The living room — gathered around light-fabric sofas, round coffee tables and an arc lamp — opens toward the outside: a few graphic accents and open shelving complete a calm, welcoming space.",
        tr: ""
      }
    ],

    gallery: [
      { src: "assets/projects/eindhoven/living_1.png", caption: { it: "Zona living — TV e madia",     en: "Living area — TV and media unit",   tr: "" } },
      { src: "assets/projects/eindhoven/living_2.png", caption: { it: "Soggiorno",                    en: "Living room",                       tr: "" } },
      { src: "assets/projects/eindhoven/living_3.png", caption: { it: "Cucina e zona pranzo",         en: "Kitchen and dining area",           tr: "" } },
      { src: "assets/projects/eindhoven/living_4.png", caption: { it: "Pranzo verso il living",       en: "Dining toward the living room",     tr: "" } }
    ]
  }

  // ── AGGIUNGI NUOVI PROGETTI QUI (copia il blocco sopra, incolla e compila) ──

];
