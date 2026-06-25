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

    title: { it: "Trilocale Magenta",     en: "Magenta Three-Room Flat", tr: "Magenta 3+1 Daire" },
    tag:   { it: "Residenziale · 2024",   en: "Residential · 2024",      tr: "Konut · 2024" },

    // Immagine di copertina (nella lista progetti e in cima al dettaglio)
    cover: "assets/projects/trilocale/open_space_1.png",

    // Planimetria (opzionale — rimuovi la riga o metti null se non disponibile)
    plan:  "assets/projects/trilocale/plan.png",

    // Scheda tecnica — array di coppie label/valore
    specs: [
      { label: { it: "Cliente",    en: "Client",   tr: "Müşteri" }, value: { it: "Privato",                            en: "Private",                         tr: "Özel" } },
      { label: { it: "Località",   en: "Location", tr: "Konum" }, value: { it: "Magenta, Milano",                    en: "Magenta, Milan",                  tr: "Magenta, Milano" } },
      { label: { it: "Superficie", en: "Area",     tr: "Alan" }, value: "95 m²" },
      { label: { it: "Tipologia",  en: "Type",     tr: "Tip" }, value: { it: "Trilocale",                          en: "Three-room flat",                 tr: "3+1 Daire" } },
      { label: { it: "Anno",       en: "Year",     tr: "Yıl" }, value: "2024" },
      { label: { it: "Servizi",    en: "Services", tr: "Hizmetler" }, value: { it: "Progettazione · Rendering · Arredo", en: "Design · Rendering · Furnishing", tr: "Tasarım · Render · Dekorasyon" } }
    ],

    // Testo introduttivo — array di paragrafi
    intro: [
      {
        it: "Un trilocale di 95 m² in uno stabile signorile a Magenta, ripensato per una giovane coppia. L'intervento chiave è l'abbattimento della parete tra cucina e soggiorno: un unico open space luminoso e conviviale al posto della distribuzione tradizionale. Una palette neutra di bianchi e grigi caldi fa da sfondo ad accenti vivaci — giallo, verde, corallo — di ispirazione pop-art, mentre la zona notte resta intima, con arredi su misura e contenimento integrato.",
        en: "A 95 m² three-room flat in an elegant period building in Magenta, reimagined for a young couple. The key move is removing the wall between kitchen and living room: a single, bright, convivial open space in place of the traditional layout. A neutral palette of whites and warm greys sets the stage for vivid accents — yellow, green, coral — with a pop-art feel, while the sleeping area stays intimate, with bespoke furniture and integrated storage.",
        tr: "Magenta'da şık ve eski bir binada yer alan 95 m²'lik bir 3+1 daire, genç bir çift için yeniden tasarlandı. Projenin kilit hamlesi, mutfak ile salon arasındaki duvarın kaldırılması: geleneksel düzenin yerini aydınlık ve davetkâr tek bir açık mekân alıyor. Beyaz ve sıcak grilerden oluşan nötr bir palet, pop-art esintili canlı vurgulara — sarı, yeşil, mercan — zemin oluştururken, yatak bölgesi özel mobilyalar ve entegre depolama çözümleriyle samimi kalıyor."
      },
      {
        it: "La zona living è pavimentata in SPC effetto legno per continuità visiva e resistenza, mentre le camere adottano un parquet che ne scalda l'atmosfera. Il bagno è stato rinnovato con doccia walk-in in vetro trasparente, mobile su misura e finiture effetto ceppo di Gré, valorizzate da nicchie decorative. L'illuminazione alterna faretti a incasso, per le aree funzionali, e corpi decorativi che definiscono i punti focali di ogni ambiente.",
        en: "On the technical side, the living area is laid with wood-effect SPC flooring for visual continuity and durability, while the bedrooms use parquet to warm the atmosphere. The bathroom was renovated with a clear-glass walk-in shower, a bespoke vanity and ceppo di Gré stone-effect finishes, enhanced by decorative niches. Lighting alternates recessed spots for the functional areas with decorative fixtures that define the focal points of each room.",
        tr: "Teknik açıdan, yaşam alanı görsel süreklilik ve dayanıklılık için ahşap görünümlü SPC zeminle döşenirken, yatak odalarında atmosferi ısıtan parke kullanıldı. Banyo; şeffaf camlı bir walk-in duş, özel tasarım lavabo dolabı ve dekoratif nişlerle zenginleştirilmiş ceppo di Gré taş görünümlü yüzeylerle yenilendi. Aydınlatma, işlevsel alanlar için gömme spotlarla her mekânın odak noktalarını tanımlayan dekoratif armatürleri bir araya getiriyor."
      }
    ],

    // Galleria fotografica
    gallery: [
      { src: "assets/projects/trilocale/open_space_1.png", caption: { it: "Open space — living e cucina",    en: "Open space — living and kitchen",  tr: "Açık mekân — salon ve mutfak" } },
      { src: "assets/projects/trilocale/living_1.png",     caption: { it: "Zona living",                     en: "Living area",                      tr: "Yaşam alanı" } },
      { src: "assets/projects/trilocale/soggiorno_2.png",  caption: { it: "Soggiorno",                       en: "Living room",                      tr: "Oturma odası" } },
      { src: "assets/projects/trilocale/kitchen_1.png",    caption: { it: "Cucina con isola",                en: "Kitchen with island",              tr: "Adalı mutfak" } },
      { src: "assets/projects/trilocale/kitchen_2.png",    caption: { it: "Cucina — dettaglio",              en: "Kitchen — detail",                 tr: "Mutfak — detay" } },
      { src: "assets/projects/trilocale/kitchen_3.png",    caption: { it: "Colonna elettrodomestici",        en: "Appliance column",                 tr: "Ankastre dolabı" } },
      { src: "assets/projects/trilocale/bedroom_1.png",    caption: { it: "Camera da letto",                 en: "Bedroom",                          tr: "Yatak odası" } },
      { src: "assets/projects/trilocale/bedroom_2.png",    caption: { it: "Camera — cabina armadio",         en: "Bedroom — walk-in closet",         tr: "Yatak odası — giyinme odası" } },
      { src: "assets/projects/trilocale/bathroom_2_edited.png",   caption: { it: "Bagno",                           en: "Bathroom",                         tr: "Banyo" } },
      { src: "assets/projects/trilocale/bathroom_1.png",   caption: { it: "Bagno — dettaglio doccia",        en: "Bathroom — shower detail",         tr: "Banyo — duş detayı" } },
      { src: "assets/projects/trilocale/studio_1.png",     caption: { it: "Studio",                          en: "Study",                            tr: "Çalışma odası" } }
    ]
  },

  // ── PROGETTO 2 ──────────────────────────────────────────────────────────
  {
    id: "bilocale-milano",

    title: { it: "Bilocale Milano",       en: "Milan Two-Room Flat",  tr: "Milano 1+1 Daire" },
    tag:   { it: "Residenziale · 2023",   en: "Residential · 2023",   tr: "Konut · 2023" },

    cover: "assets/projects/bilocale/living_1.png",
    plan:  "assets/projects/bilocale/plan.png",

    specs: [
      { label: { it: "Cliente",    en: "Client",   tr: "Müşteri" }, value: { it: "Agenzia immobiliare",               en: "Real estate agency",              tr: "Emlak ofisi" } },
      { label: { it: "Località",   en: "Location", tr: "Konum" }, value: { it: "Milano, via Saronno",               en: "Milan, via Saronno",              tr: "Milano, via Saronno" } },
      { label: { it: "Superficie", en: "Area",     tr: "Alan" }, value: "55 m²" },
      { label: { it: "Tipologia",  en: "Type",     tr: "Tip" }, value: { it: "Bilocale",                          en: "Two-room flat",                   tr: "1+1 Daire" } },
      { label: { it: "Anno",       en: "Year",     tr: "Yıl" }, value: "2023" },
      { label: { it: "Servizi",    en: "Services", tr: "Hizmetler" }, value: { it: "Proposta d'arredo · Rendering",     en: "Furnishing proposal · Rendering", tr: "Dekorasyon önerisi · Render" } }
    ],

    intro: [
      {
        it: "Un bilocale di 55 m² in una casa di corte in stile vecchia Milano, nella zona di Corso Sempione. Commissionato da un'agenzia immobiliare per rendere l'appartamento più attraente e vendibile, il progetto è un restyling mirato che rispetta la planimetria esistente e valorizza ogni metro quadro, mettendo in dialogo i dettagli storici dell'edificio con un'estetica contemporanea.",
        en: "A 55 m² flat in an old-Milan courtyard building near Corso Sempione. Commissioned by a real estate agency to make the apartment more appealing and sellable, the project is a targeted restyling that respects the existing layout and makes the most of every square metre, putting the building's historic details in dialogue with a contemporary aesthetic.",
        tr: "Corso Sempione yakınında, eski Milano tarzı avlulu bir binada 55 m²'lik bir daire. Daireyi daha çekici ve satılabilir kılmak için bir emlak ofisi tarafından sipariş edilen proje, mevcut planı koruyan ve her metrekareyi değerlendiren hedefe yönelik bir yenileme; binanın tarihî detaylarını çağdaş bir estetikle diyaloğa sokuyor."
      },
      {
        it: "La palette è delicata — bianco, beige e verde tenue — per un ambiente equilibrato e rilassante. La zona giorno unisce cucina e soggiorno: pensili bianchi con dettagli in legno chiaro, arredi dalle linee pulite e complementi moderni. La camera è ottimizzata con armadio su misura e scrivania integrata, mentre il bagno rinnovato alterna ceramica bianca e legno naturale, con nicchie illuminate e storage a scomparsa. Il parquet, uniformato in tutti gli ambienti, garantisce continuità visiva e un tocco naturale.",
        en: "The palette is gentle — white, beige and soft green — for a balanced, relaxing feel. The living area merges kitchen and lounge: white cabinets with light-wood details, clean-lined furniture and modern accents. The bedroom is optimised with a bespoke wardrobe and integrated desk, while the renovated bathroom alternates white ceramic and natural wood, with lit niches and concealed storage. Parquet, unified across all rooms, ensures visual continuity and a natural touch.",
        tr: "Palet yumuşak — beyaz, bej ve hafif yeşil — dengeli ve dinlendirici bir his için. Yaşam alanı mutfak ile salonu birleştiriyor: açık ahşap detaylı beyaz dolaplar, sade hatlı mobilyalar ve modern tamamlayıcılar. Yatak odası özel tasarım gardırop ve entegre çalışma masasıyla optimize edildi; yenilenen banyoda ise aydınlatmalı nişler ve gizli depolama alanlarıyla beyaz seramik ve doğal ahşap dönüşümlü olarak kullanıldı. Tüm mekânlarda aynılaştırılan parke, görsel süreklilik ve doğal bir dokunuş sağlıyor."
      }
    ],

    gallery: [
      { src: "assets/projects/bilocale/open_space_1.png", caption: { it: "Zona giorno — cucina e pranzo",  en: "Living area — kitchen and dining",    tr: "Yaşam alanı — mutfak ve yemek" } },
      { src: "assets/projects/bilocale/living_1.png",     caption: { it: "Soggiorno",                      en: "Living room",                         tr: "Oturma odası" } },
      { src: "assets/projects/bilocale/kitchen_1.png",    caption: { it: "Cucina",                         en: "Kitchen",                             tr: "Mutfak" } },
      { src: "assets/projects/bilocale/kitchen_2.png",    caption: { it: "Cucina — vista bagno",           en: "Kitchen — view to bathroom",          tr: "Mutfak — banyoya bakış" } },
      { src: "assets/projects/bilocale/bedroom_1.png",    caption: { it: "Camera da letto",                en: "Bedroom",                             tr: "Yatak odası" } },
      { src: "assets/projects/bilocale/bedroom_2.png",    caption: { it: "Camera — zona relax",            en: "Bedroom — relaxation corner",         tr: "Yatak odası — dinlenme köşesi" } },
      { src: "assets/projects/bilocale/bedroom_3.png",    caption: { it: "Camera — armadio e studio",      en: "Bedroom — wardrobe and study",        tr: "Yatak odası — gardrop ve çalışma alanı" } },
      { src: "assets/projects/bilocale/bathroom_1.png",   caption: { it: "Bagno",                          en: "Bathroom",                            tr: "Banyo" } }
    ]
  },

  // ── PROGETTO 3 ──────────────────────────────────────────────────────────
  {
    id: "monolocale-milano",

    title: { it: "Monolocale Milano",     en: "Milan Studio Flat",    tr: "Milano Stüdyo Daire" },
    tag:   { it: "Residenziale · 2022",   en: "Residential · 2022",   tr: "Konut · 2022" },

    cover: "assets/projects/monolocale/living_1.png",
    plan:  "assets/projects/monolocale/plan.png",

    specs: [
      { label: { it: "Cliente",    en: "Client",   tr: "Müşteri" }, value: { it: "Privato",                          en: "Private",                         tr: "Özel" } },
      { label: { it: "Località",   en: "Location", tr: "Konum" }, value: { it: "Milano, Paolo Sarpi",              en: "Milan, Paolo Sarpi",              tr: "Milano, Paolo Sarpi" } },
      { label: { it: "Superficie", en: "Area",     tr: "Alan" }, value: "35 m²" },
      { label: { it: "Tipologia",  en: "Type",     tr: "Tip" }, value: { it: "Monolocale · B&B",                 en: "Studio · B&B",                    tr: "Stüdyo · B&B" } },
      { label: { it: "Anno",       en: "Year",     tr: "Yıl" }, value: "2022" },
      { label: { it: "Servizi",    en: "Services", tr: "Hizmetler" }, value: { it: "Ristrutturazione · Rendering",     en: "Renovation · Rendering",          tr: "Renovasyon · Render" } }
    ],

    intro: [
      {
        it: "Un monolocale di 35 m² nel cuore di Paolo Sarpi, quartiere vivace e multiculturale di Milano, pensato come B&B per soggiorni brevi. L'intervento ottimizza uno spazio compatto in un ambiente coeso e versatile, dove cucina, zona pranzo e zona notte si integrano in un'unica fluidità visiva — fresca e contemporanea, in sintonia con l'energia del quartiere.",
        en: "A 35 m² studio flat in the heart of Paolo Sarpi, one of Milan's liveliest, most multicultural neighbourhoods, designed as a B&B for short stays. The project optimises a compact space into a cohesive, versatile environment where kitchen, dining and sleeping areas merge into a single visual flow — fresh and contemporary, in tune with the area's energy.",
        tr: "Milano'nun en hareketli ve çok kültürlü semtlerinden Paolo Sarpi'nin kalbinde, kısa konaklamalar için B&B olarak tasarlanmış 35 m²'lik bir stüdyo daire. Proje, kompakt bir alanı; mutfak, yemek ve yatak bölgelerinin tek bir görsel akışta birleştiği bütünlüklü ve çok yönlü bir ortama dönüştürüyor — semtin enerjisiyle uyumlu, taze ve çağdaş."
      },
      {
        it: "Il fulcro è la cucina in verde oliva con piani effetto marmo Calacatta e un'isola che funge anche da postazione di lavoro; un divano-letto trasforma la zona giorno in camera, affiancato da mensole su misura. Il pavimento in terrazzo unifica tutti gli ambienti, reinterpretando la tradizione milanese in chiave contemporanea, mentre lampade dalle forme geometriche in giallo e verde danno carattere. Il bagno, minimalista, alterna piastrelle bianche con fughe verdi e mobile lavabo verde, celando con discrezione l'area lavatrice e asciugatrice.",
        en: "At its core is an olive-green kitchen with Calacatta marble-effect worktops and an island that doubles as a workstation; a sofa bed turns the living area into a bedroom, flanked by bespoke shelving. Terrazzo flooring unifies every room, reinterpreting Milanese tradition in a contemporary key, while geometric lamps in yellow and green add character. The minimalist bathroom alternates white tiles with green grouting and a green vanity, discreetly concealing the washer and dryer area.",
        tr: "Merkezde, Calacatta mermer görünümlü tezgâhlara sahip zeytin yeşili bir mutfak ve aynı zamanda çalışma alanı olarak da kullanılan bir ada yer alıyor; bir çekyat, özel tasarım raflarla çevrelenerek yaşam alanını yatak odasına dönüştürüyor. Terrazzo zemin tüm mekânları birleştirerek Milano geleneğini çağdaş bir anlayışla yeniden yorumlarken, sarı ve yeşil geometrik lambalar karakter katıyor. Minimalist banyo, yeşil derzli beyaz fayanslar ile yeşil bir lavabo dolabını dönüşümlü kullanıyor ve çamaşır–kurutma alanını ustaca gizliyor."
      }
    ],

    gallery: [
      { src: "assets/projects/monolocale/living_1.png",   caption: { it: "Zona giorno",               en: "Living area",              tr: "Yaşam alanı" } },
      { src: "assets/projects/monolocale/kitchen_1.png",  caption: { it: "Cucina e isola pranzo",      en: "Kitchen and dining island", tr: "Mutfak ve yemek adası" } },
      { src: "assets/projects/monolocale/living_2.png",   caption: { it: "Divano-letto e libreria",    en: "Sofa bed and shelving",     tr: "Çekyat ve raf" } },
      { src: "assets/projects/monolocale/bathroom_1.png", caption: { it: "Bagno",                      en: "Bathroom",                 tr: "Banyo" } }
    ]
  },

  // ── PROGETTO 4 ──────────────────────────────────────────────────────────
  {
    id: "living-eindhoven",

    title: { it: "Living Eindhoven",      en: "Eindhoven Living",     tr: "Eindhoven Yaşam Alanı" },
    tag:   { it: "Residenziale · 2022",   en: "Residential · 2022",   tr: "Konut · 2022" },

    cover: "assets/projects/eindhoven/living_2.png",
    plan:  "assets/projects/eindhoven/plan.png",

    specs: [
      { label: { it: "Cliente",    en: "Client",   tr: "Müşteri" }, value: { it: "Privato",                          en: "Private",                         tr: "Özel" } },
      { label: { it: "Località",   en: "Location", tr: "Konum" }, value: "Eindhoven" },
      { label: { it: "Superficie", en: "Area",     tr: "Alan" }, value: "45 m²" },
      { label: { it: "Tipologia",  en: "Type",     tr: "Tip" }, value: { it: "Zona living con cucina",           en: "Living area with kitchen",        tr: "Mutfaklı yaşam alanı" } },
      { label: { it: "Anno",       en: "Year",     tr: "Yıl" }, value: "2022" },
      { label: { it: "Progetto",   en: "Project",  tr: "Proje" }, value: { it: "Disegno e scelta arredi",          en: "Design & furniture selection",    tr: "Tasarım ve mobilya seçimi" } }
    ],

    intro: [
      {
        it: "Una zona living con cucina di 45 m² a Eindhoven, ripensata come un unico ambiente luminoso e fluido. Il progetto disegna lo spazio e ne seleziona gli arredi attorno a una palette neutra di bianchi caldi, crema e legno chiaro, lasciando che sia la luce naturale a dare ritmo agli ambienti.",
        en: "A 45 m² living area with kitchen in Eindhoven, reimagined as a single bright, flowing space. The project shapes the layout and selects the furnishings around a neutral palette of warm whites, cream and light wood, letting natural light set the rhythm of the rooms.",
        tr: "Eindhoven'da 45 m²'lik, mutfaklı bir yaşam alanı; aydınlık ve akışkan tek bir mekân olarak yeniden tasarlandı. Proje, mekânın düzenini kuruyor ve mobilyaları sıcak beyazlar, krem ve açık ahşaptan oluşan nötr bir palet etrafında seçiyor; ritmi mekânlara doğal ışığın vermesine izin veriyor."
      },
      {
        it: "La cucina si integra con la zona pranzo, dove un tavolo affiancato da sedute in paglia di Vienna dialoga con la mensola-fioriera sospesa che porta il verde all'interno. Il soggiorno, raccolto attorno a divani in tessuto chiaro, tavolini tondi e una lampada ad arco, si apre verso l'esterno: pochi accenti grafici e una libreria a giorno completano un ambiente sobrio e accogliente.",
        en: "The kitchen flows into the dining area, where a table flanked by Vienna-cane chairs converses with a suspended planter-shelf that brings greenery indoors. The living room — gathered around light-fabric sofas, round coffee tables and an arc lamp — opens toward the outside: a few graphic accents and open shelving complete a calm, welcoming space.",
        tr: "Mutfak, Viyana hasırı sandalyelerle çevrili bir masanın, yeşili içeri taşıyan asılı saksı-rafıyla diyalog kurduğu yemek alanına akıyor. Açık renk kumaş kanepeler, yuvarlak sehpalar ve bir ark lamba etrafında toplanan oturma odası dışarıya açılıyor: birkaç grafik vurgu ve açık raflar sakin ve davetkâr bir mekânı tamamlıyor."
      }
    ],

    gallery: [
      { src: "assets/projects/eindhoven/living_1.png", caption: { it: "Zona living — TV e madia",     en: "Living area — TV and media unit",   tr: "Yaşam alanı — TV ve medya ünitesi" } },
      { src: "assets/projects/eindhoven/living_2.png", caption: { it: "Soggiorno",                    en: "Living room",                       tr: "Oturma odası" } },
      { src: "assets/projects/eindhoven/living_3.png", caption: { it: "Cucina e zona pranzo",         en: "Kitchen and dining area",           tr: "Mutfak ve yemek alanı" } },
      { src: "assets/projects/eindhoven/living_4.png", caption: { it: "Pranzo verso il living",       en: "Dining toward the living room",     tr: "Oturma odasına doğru yemek alanı" } }
    ]
  }

  // ── AGGIUNGI NUOVI PROGETTI QUI (copia il blocco sopra, incolla e compila) ──

];
