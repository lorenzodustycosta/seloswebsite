// ─────────────────────────────────────────────────────────────────────────────
// DATI PROGETTI — projects.js
//
// Ogni elemento dell'array PROJECTS è un progetto del portfolio.
// Per aggiungere un nuovo progetto: copia un blocco esistente, incollalo ovunque
// nell'array (l'ordine non conta, vedi sotto) e compila i campi.
//
// Struttura di ogni campo multilingua: { it: "...", en: "...", tr: "" }
// I campi senza traduzione (tr: "") appaiono vuoti quando il sito è in turco —
// questo è intenzionale per segnalare le traduzioni mancanti.
//
// Campi NON tradotti (valore singolo, uguale in tutte le lingue): area, anno, year.
//
// Il campo "year" (numero) determina l'ordine di visualizzazione: i progetti
// vengono ordinati automaticamente dal più recente al più vecchio, quindi non
// serve posizionarli manualmente nell'array.
// ─────────────────────────────────────────────────────────────────────────────

window.PROJECTS = [

  {
    id: "amsterdam",
    title: { it: "Amsterdam — Residenza privata", en: "Amsterdam — Private Residence", tr: "Amsterdam" },
    tag: { it: "Residenziale · In corso", en: "Residential · In progress", tr: "Devam ediyor" },
    inProgress: true,
    year: null,
    cover: "assets/projects/amsterdam/placeholder.svg",
    plan: null,
    specs: [
      { label: { it: "Cliente", en: "Client" }, value: { it: "Privato", en: "Private" } },
      { label: { it: "Località", en: "Location" }, value: { it: "Amsterdam, Paesi Bassi", en: "Amsterdam, the Netherlands" } },
      { label: { it: "Tipologia", en: "Type" }, value: { it: "Residenza privata", en: "Private residence" } },
      { label: { it: "Stato", en: "Status" }, value: { it: "In corso", en: "In progress" } },
      { label: { it: "Servizi", en: "Services" }, value: { it: "Cucina e interior design", en: "Kitchen & interior design" } },
      { label: { it: "Cucina selezionata", en: "Selected kitchen" }, value: "Valcucine" }
    ],
    intro: [
      { it: "Un progetto di cucina e interior design per una residenza privata ad Amsterdam, attualmente in corso. La cucina selezionata per il progetto è Valcucine.", en: "A kitchen and interior design project for a private residence in Amsterdam, currently in progress. Valcucine is the kitchen brand selected for the project." },
      { it: "Il racconto del progetto sarà completato con fotografie e approfondimenti sulle scelte di spazio, materiali e dettagli quando disponibili.", en: "Photography and a fuller account of the spatial decisions, materials and details will be added as they become available." }
    ],
    gallery: [
      { src: "assets/projects/amsterdam/placeholder.svg", caption: { it: "Immagini del progetto — in preparazione", en: "Project images — coming soon" } }
    ]
  },

  // ── PROGETTO 1 ──────────────────────────────────────────────────────────
  {
    id: "camera-corbetta",

    title: { it: "Camera Corbetta",       en: "Corbetta Bedroom",     tr: "Corbetta Yatak Odası" },
    tag:   { it: "Residenziale · 2025",   en: "Residential · 2025",   tr: "Konut · 2025" },
    year:  2025, // usato per ordinare automaticamente i progetti dal più recente

    cover: "assets/projects/camera-corbetta/living_room_1.png",
    plan:   "assets/projects/camera-corbetta/plan.png",
    specs: [
      { label: { it: "Cliente",    en: "Client",   tr: "Müşteri" }, value: { it: "Privato",                                                                    en: "Private",                                                        tr: "Özel" } },
      { label: { it: "Località",   en: "Location", tr: "Konum" }, value: { it: "Corbetta, Milano",                                                           en: "Corbetta, Milan",                                                tr: "Corbetta, Milano" } },
      { label: { it: "Superficie", en: "Area",     tr: "Alan" }, value: "95 m²" },
      { label: { it: "Tipologia",  en: "Type",     tr: "Tip" }, value: { it: "Nuova camera (concept iniziale)",                                            en: "New bedroom (initial concept)",                                  tr: "Yeni yatak odası (ilk konsept)" } },
      { label: { it: "Anno",       en: "Year",     tr: "Yıl" }, value: "2025" },
      { label: { it: "Servizi",    en: "Services", tr: "Hizmetler" }, value: { it: "Progettazione · Rendering · Arredo · Gestione e coordinamento pratiche e cantiere", en: "Design · Rendering · Furnishing · Permits & site management",   tr: "Tasarım · Render · Dekorasyon · İzin ve şantiye yönetimi" } }
    ],

    subtitle: { it: "UNA STANZA IN PIÙ", en: "AN EXTRA ROOM", tr: "BİR ODA DAHA" },
    intro: [
      {
        it: "In un appartamento di 95 m² a Corbetta, la famiglia aveva bisogno di una camera in più, per dare a ciascun figlio uno spazio proprio.",
        en: "In a 95 m² apartment in Corbetta, the family needed an extra bedroom so that each child could have a space of their own.",
        tr: "Corbetta’daki 95 m²’lik bir dairede yaşayan ailenin, her çocuğun kendine ait bir alanı olması için bir odaya daha ihtiyacı vardı."
      },
      {
        it: "La nuova stanza è ricavata da una porzione del soggiorno e sfrutta una finestra esistente, che le garantisce luce naturale e aerazione autonome. L’accesso dal corridoio non è praticabile per l’ingombro di un’armadiatura esistente. La camera si apre quindi sul soggiorno, con una porta scorrevole filomuro che ne riduce al minimo l’impatto visivo.",
        en: "The new room occupies part of the living room and uses an existing window to provide its own natural light and ventilation. Access from the hallway is not possible because of an existing wardrobe. The bedroom therefore opens onto the living room through a flush sliding door that keeps its visual impact to a minimum.",
        tr: "Yeni oda, salonun bir bölümünden elde ediliyor ve mevcut bir pencereden yararlanarak kendi doğal ışığına ve havalandırmasına sahip oluyor. Mevcut bir gardırobun kapladığı alan nedeniyle koridordan giriş mümkün değil. Bu nedenle yatak odası, görsel etkisi en aza indirilen, duvarla aynı hizada bir sürgülü kapıyla salona açılıyor."
      },
      {
        it: "La stanza è pensata per un ragazzo appassionato di musica. Per questo la nuova parete integra lastre e materiali fonoisolanti, a tutela del comfort acustico di entrambi gli ambienti. Pavimento e zoccolino proseguono senza interruzioni, perché l’intervento si legga come continuità della casa e non come un’aggiunta.",
        en: "The room is designed for a boy with a passion for music. The new wall therefore incorporates sound-insulating boards and materials to protect the acoustic comfort of both spaces. The flooring and skirting board continue without interruption, so that the intervention feels like a continuation of the home rather than an addition.",
        tr: "Oda, müziğe ilgi duyan bir genç için düşünülüyor. Bu nedenle yeni bölme duvar, her iki mekânın akustik konforunu korumak için ses yalıtım levhaları ve malzemeleri içeriyor. Zemin kaplaması ve süpürgelik kesintisiz devam ediyor; böylece müdahale, sonradan eklenen bir bölümden çok evin devamı olarak algılanıyor."
      },
      {
        heading: { it: "Il concept", en: "The concept", tr: "Konsept" },
        it: "La proposta progettuale sviluppava la nuova parete come elemento d’arredo. Lo spessore aggiuntivo ospitava una libreria a nicchia, che verso il soggiorno diventava spazio di contenimento e verso la camera lasciava libertà nell’arredo. Una cornice in legno con LED integrato correva sia nella camera sia sul lato del soggiorno, unendo i due ambienti in un unico linguaggio materico.",
        en: "The design proposal developed the new wall as a furnishing element. Its additional thickness accommodated a recessed bookcase, providing storage on the living-room side while leaving flexibility for furnishing the bedroom. A wooden trim with integrated LED lighting ran through the bedroom and along the living-room side, uniting the two spaces through a shared material language.",
        tr: "Tasarım önerisinde yeni duvar bir mobilya öğesi olarak ele alınıyordu. Ek duvar kalınlığına yerleştirilen niş kitaplık, salon tarafında depolama alanı sağlıyor, yatak odası tarafında ise mobilya yerleşimine esneklik bırakıyordu. Entegre LED aydınlatmalı ahşap bir çerçeve hem yatak odasında hem de salon tarafında devam ederek iki mekânı ortak bir malzeme diliyle birleştiriyordu."
      }
    ],

    gallery: [
      { src: "assets/projects/camera-corbetta/living_room_1.png", caption: { it: "Concept — Soggiorno: nuova parete e libreria a nicchia", en: "Concept — Living room: new wall and recessed bookcase", tr: "Konsept — Salon: yeni duvar ve niş kitaplık" } },
      { src: "assets/projects/camera-corbetta/living_room_2.png", caption: { it: "Concept — Vista del soggiorno", en: "Concept — Living room view", tr: "Konsept — Salon görünümü" } },
      { src: "assets/projects/camera-corbetta/camera_1.png", caption: { it: "Concept — Camera: ingresso con porta scorrevole filomuro", en: "Concept — Bedroom: entrance with flush sliding door", tr: "Konsept — Yatak odası: duvarla aynı hizada sürgülü kapı girişi" } },
      { src: "assets/projects/camera-corbetta/camera_2.png", caption: { it: "Concept — Camera: zona studio / DJ", en: "Concept — Bedroom: study / DJ area", tr: "Konsept — Yatak odası: çalışma / DJ alanı" } },
      { src: "assets/projects/camera-corbetta/camera_3.png", caption: { it: "Concept — Camera: zona letto", en: "Concept — Bedroom: sleeping area", tr: "Konsept — Yatak odası: yatak alanı" } }
    ]
  },

  // ── PROGETTO 2 ──────────────────────────────────────────────────────────
  {
    // Identificativo univoco — usato nell'URL interno. Solo lettere minuscole e trattini.
    id: "trilocale-magenta",

    title: { it: "Trilocale Magenta",     en: "Magenta Three-Room Flat", tr: "Magenta 3+1 Daire" },
    tag:   { it: "Residenziale · 2024",   en: "Residential · 2024",      tr: "Konut · 2024" },
    year:  2024,

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
    subtitle: { it: "APERTURA E COLORE", en: "OPENNESS AND COLOUR", tr: "AÇIKLIK VE RENK" },
    intro: [
      {
        it: "Il progetto ripensa un trilocale di 95 m² in uno stabile signorile di Magenta per le esigenze di una giovane coppia. La distribuzione tradizionale lascia spazio a una zona giorno aperta, mentre la zona notte mantiene la propria riservatezza.",
        en: "The project reimagines a 95 m² three-room flat in an elegant apartment building in Magenta for a young couple. The traditional layout gives way to an open living area, while the bedrooms retain their privacy.",
        tr: "Proje, Magenta’daki şık bir apartmanda bulunan 95 m²’lik üç odalı bir daireyi genç bir çiftin ihtiyaçları doğrultusunda yeniden ele alıyor. Geleneksel yerleşim, açık bir yaşam alanına dönüşürken yatak odaları mahremiyetini koruyor."
      },
      {
        it: "L’intervento principale è l’eliminazione della parete tra cucina e soggiorno. Ne nasce un unico open space luminoso, pensato sia per la vita quotidiana sia per ricevere. La cucina con isola e la colonna elettrodomestici organizzano l’ambiente senza dividerlo.",
        en: "The main intervention is the removal of the wall between the kitchen and living room. This creates a single, bright open-plan space for everyday life and entertaining. The kitchen with its island and tall appliance unit organises the room without dividing it.",
        tr: "Müdahalenin odağında, mutfakla salon arasındaki duvarın kaldırılması yer alıyor. Böylece hem günlük yaşam hem de misafir ağırlamak için düşünülen, aydınlık ve bütünleşik bir açık alan ortaya çıkıyor. Adalı mutfak ve ankastre cihazların yer aldığı boy dolabı, mekânı bölmeden düzenliyor."
      },
      {
        it: "La palette si fonda su bianchi e grigi caldi, su cui si innestano accenti di giallo, verde e corallo di ispirazione pop art. Nella zona notte, gli arredi su misura e la cabina armadio integrano il contenimento nell’architettura della casa. Completa la pianta un piccolo studio.",
        en: "The palette is based on whites and warm greys, punctuated by pop art-inspired accents of yellow, green and coral. In the bedrooms, bespoke furniture and a walk-in wardrobe integrate storage into the architecture of the home. A small study completes the layout.",
        tr: "Paletin temelini beyazlar ve sıcak griler oluşturuyor; pop art’tan ilham alan sarı, yeşil ve mercan vurgular bu zemini canlandırıyor. Yatak odalarında özel tasarım mobilyalar ve giyinme odası, depolamayı evin mimarisine dâhil ediyor. Küçük bir çalışma odası da planı tamamlıyor."
      },
      {
        it: "I materiali sono scelti in base all’uso. Nel living il pavimento in SPC effetto legno garantisce continuità visiva e resistenza, mentre nelle camere il parquet rende l’atmosfera più calda. Il bagno ha una doccia walk-in in vetro trasparente, un mobile su misura e finiture effetto ceppo di Gré, scandite da nicchie decorative. L’illuminazione alterna faretti a incasso nelle zone funzionali e corpi decorativi che segnano i punti focali di ogni ambiente.",
        en: "Materials are chosen according to how each space is used. In the living area, wood-effect SPC flooring provides visual continuity and durability, while parquet brings warmth to the bedrooms. The bathroom features a clear-glass walk-in shower, a bespoke vanity and Ceppo di Gré stone-effect finishes, punctuated by decorative niches. The lighting combines recessed spotlights in functional areas with decorative fixtures that mark the focal points of each room.",
        tr: "Malzemeler kullanım amacına göre seçiliyor. Yaşam alanında ahşap görünümlü SPC zemin kaplaması görsel süreklilik ve dayanıklılık sağlarken yatak odalarındaki parke atmosfere sıcaklık katıyor. Banyoda şeffaf camlı bir walk-in duş, özel tasarım bir lavabo dolabı ve dekoratif nişlerle hareketlenen Ceppo di Gré görünümlü yüzeyler yer alıyor. Aydınlatmada, işlevsel alanlardaki gömme spotlarla her mekânın odak noktalarını belirleyen dekoratif aydınlatma elemanları bir araya geliyor."
      }
    ],

    gallery: [
      { src: "assets/projects/trilocale/open_space_1.png", caption: { it: "Open space — living e cucina",    en: "Open space — living and kitchen",  tr: "Açık mekân — salon ve mutfak" } },
      { src: "assets/projects/trilocale/living_1.png",     caption: { it: "Zona living",                     en: "Living area",                      tr: "Yaşam alanı" } },
      { src: "assets/projects/trilocale/soggiorno_2.png",  caption: { it: "Soggiorno",                       en: "Living room",                      tr: "Oturma odası" } },
      { src: "assets/projects/trilocale/kitchen_1.png",    caption: { it: "Cucina con isola",                en: "Kitchen with island",              tr: "Adalı mutfak" } },
      { src: "assets/projects/trilocale/kitchen_2.png",    caption: { it: "Cucina — dettaglio",              en: "Kitchen — detail",                 tr: "Mutfak — detay" } },
      { src: "assets/projects/trilocale/kitchen_3.png",    caption: { it: "Colonna elettrodomestici",        en: "Appliance column",                 tr: "Ankastre dolabı" } },
      { src: "assets/projects/trilocale/bedroom_1.png",    caption: { it: "Camera da letto",                 en: "Bedroom",                          tr: "Yatak odası" } },
      { src: "assets/projects/trilocale/bedroom_2.png",    caption: { it: "Camera — cabina armadio",         en: "Bedroom — walk-in closet",         tr: "Yatak odası — giyinme odası" } },
      { src: "assets/projects/trilocale/bathroom_2_edit.png",   caption: { it: "Bagno",                           en: "Bathroom",                         tr: "Banyo" } },
      { src: "assets/projects/trilocale/bathroom_1.png",   caption: { it: "Bagno — dettaglio doccia",        en: "Bathroom — shower detail",         tr: "Banyo — duş detayı" } },
      { src: "assets/projects/trilocale/studio_1.png",     caption: { it: "Studio",                          en: "Study",                            tr: "Çalışma odası" } }
    ]
  },

  // ── PROGETTO 3 ──────────────────────────────────────────────────────────
  {
    id: "bilocale-milano",

    title: { it: "Bilocale Milano",       en: "Milan Two-Room Flat",  tr: "Milano 1+1 Daire" },
    tag:   { it: "Residenziale · 2023",   en: "Residential · 2023",   tr: "Konut · 2023" },
    year:  2023,

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

    subtitle: { it: "STORIA E LEGGEREZZA", en: "HERITAGE AND LIGHTNESS", tr: "TARİH VE HAFİFLİK" },
    intro: [
      {
        it: "Un bilocale di 55 m² in una casa di corte della vecchia Milano, a pochi passi da Corso Sempione. Il progetto, commissionato da un’agenzia immobiliare, è una proposta d’arredo pensata per valorizzare l’appartamento in vista della vendita.",
        en: "A 55 m² two-room flat in a traditional courtyard building in old Milan, a short walk from Corso Sempione. Commissioned by a real estate agency, the project is a furnishing proposal designed to enhance the apartment ahead of its sale.",
        tr: "Eski Milano’da, Corso Sempione’ye birkaç adım mesafedeki avlulu bir yapıda yer alan 55 m²’lik iki odalı bir daire. Bir emlak ajansı tarafından talep edilen proje, daireyi satış öncesinde daha iyi değerlendirmeyi amaçlayan bir dekorasyon önerisi."
      },
      {
        it: "La planimetria resta invariata. L’intervento lavora su arredi, colori e materiali per sfruttare ogni metro quadro e far dialogare i dettagli storici dell’edificio con un linguaggio contemporaneo.",
        en: "The floor plan remains unchanged. The proposal uses furniture, colours and materials to make the most of every square metre and bring the building’s historic details together with a contemporary design language.",
        tr: "Dairenin planı değişmeden korunuyor. Müdahale, her metrekareyi değerlendirmek ve yapının tarihî detaylarını çağdaş bir tasarım diliyle buluşturmak için mobilya, renk ve malzemelere odaklanıyor."
      },
      {
        it: "La palette è delicata, fatta di bianco, beige e verde tenue, per un ambiente equilibrato e riposante. La zona giorno riunisce cucina e soggiorno, con pensili bianchi dai dettagli in legno chiaro, arredi dalle linee essenziali e pochi complementi contemporanei. In camera, un armadio su misura con scrivania integrata ottimizza lo spazio e ricava anche un angolo relax.",
        en: "A soft palette of white, beige and muted green creates a balanced, restful interior. The living area brings the kitchen and sitting room together, with white wall cabinets featuring pale wood details, clean-lined furniture and a few contemporary accessories. In the bedroom, a bespoke wardrobe with an integrated desk optimises the space and creates a corner for relaxation.",
        tr: "Beyaz, bej ve açık yeşilden oluşan yumuşak palet, dengeli ve dinlendirici bir atmosfer yaratıyor. Yaşam alanı mutfakla salonu bir araya getiriyor; açık renkli ahşap detaylara sahip beyaz üst dolaplar, yalın çizgili mobilyalar ve az sayıda çağdaş aksesuar kullanılıyor. Yatak odasında, entegre çalışma masasına sahip özel tasarım gardırop alanı verimli kullanıyor ve bir dinlenme köşesine de yer açıyor."
      },
      {
        it: "Nel bagno la ceramica bianca si alterna al legno naturale, con nicchie illuminate e contenitori a scomparsa. Il parquet, esteso a tutti gli ambienti, dà continuità all’insieme e introduce un elemento naturale.",
        en: "The bathroom combines white ceramic and natural wood, with illuminated niches and concealed storage. Parquet flooring runs throughout the apartment, bringing continuity and a natural element to the interior.",
        tr: "Banyoda beyaz seramik, doğal ahşapla bir araya geliyor; aydınlatılmış nişler ve gizli depolama çözümleri kullanılıyor. Tüm mekânlara yayılan parke, evin bütününde süreklilik sağlıyor ve doğal bir unsur katıyor."
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

  // ── PROGETTO 4 ──────────────────────────────────────────────────────────
  {
    id: "monolocale-milano",

    title: { it: "Monolocale Milano",     en: "Milan Studio Flat",    tr: "Milano Stüdyo Daire" },
    tag:   { it: "Residenziale · 2022",   en: "Residential · 2022",   tr: "Konut · 2022" },
    year:  2022,

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

    subtitle: { it: "COMPATTO E VERSATILE", en: "COMPACT AND VERSATILE", tr: "KOMPAKT VE ÇOK YÖNLÜ" },
    intro: [
      {
        it: "Un monolocale di 35 m² nel cuore di Paolo Sarpi, uno dei quartieri più vivaci e multiculturali di Milano, pensato come B&B per soggiorni brevi.",
        en: "A 35 m² studio flat in the heart of Paolo Sarpi, one of Milan’s liveliest and most multicultural neighbourhoods, designed as a B&B for short stays.",
        tr: "Milano’nun en canlı ve çok kültürlü semtlerinden Paolo Sarpi’nin kalbinde, kısa süreli konaklamalar için B&B olarak düşünülen 35 m²’lik bir stüdyo daire."
      },
      {
        it: "L’obiettivo è trasformare uno spazio compatto in un ambiente unico e versatile, dove cucina, zona pranzo e zona notte si susseguono senza interruzioni visive.",
        en: "The aim is to turn a compact space into a single, versatile interior, where the kitchen, dining area and sleeping area flow into one another without visual breaks.",
        tr: "Amaç, kompakt bir alanı mutfak, yemek ve uyku bölümlerinin görsel kesintiler olmadan birbirini izlediği, bütünleşik ve çok yönlü bir mekâna dönüştürmek."
      },
      {
        it: "Il fulcro del progetto è la cucina in verde oliva con piani effetto marmo Calacatta, completata da un’isola che funziona come tavolo da pranzo e come postazione di lavoro. Un divano letto, affiancato da mensole su misura, permette alla zona giorno di trasformarsi in camera.",
        en: "At the heart of the design is an olive-green kitchen with Calacatta marble-effect worktops, completed by an island that serves as both a dining table and a workspace. A sofa bed, flanked by made-to-measure shelving, allows the living area to become a bedroom.",
        tr: "Projenin odağında, Calacatta mermeri görünümlü tezgâhlara sahip zeytin yeşili mutfak yer alıyor. Hem yemek masası hem de çalışma alanı olarak kullanılan bir ada mutfağı tamamlıyor. Özel ölçü raflarla çevrelenen bir çekyat, yaşam alanının yatak odasına dönüşmesini sağlıyor."
      },
      {
        it: "Il pavimento in terrazzo unifica tutti gli ambienti e reinterpreta in chiave contemporanea un materiale della tradizione milanese. Le lampade dalle forme geometriche in giallo e verde danno carattere allo spazio. Il bagno, essenziale, abbina piastrelle bianche con fughe verdi a un mobile lavabo nello stesso tono e nasconde con discrezione lavatrice e asciugatrice.",
        en: "Terrazzo flooring unifies all the spaces, giving a contemporary interpretation to a material rooted in Milanese tradition. Geometric lights in yellow and green give the interior its character. The pared-back bathroom pairs white tiles and green grout with a matching green vanity, discreetly concealing the washing machine and tumble dryer.",
        tr: "Terrazzo zemin, tüm mekânları birleştiriyor ve Milano geleneğine ait bir malzemeyi çağdaş bir yorumla ele alıyor. Sarı ve yeşil renkli geometrik aydınlatmalar mekâna karakter katıyor. Yalın tasarımlı banyoda, yeşil derzli beyaz fayanslar aynı tondaki bir lavabo dolabıyla eşleşirken çamaşır ve kurutma makineleri göze çarpmayacak şekilde gizleniyor."
      }
    ],

    gallery: [
      { src: "assets/projects/monolocale/living_1.png",   caption: { it: "Zona giorno",               en: "Living area",              tr: "Yaşam alanı" } },
      { src: "assets/projects/monolocale/kitchen_1.png",  caption: { it: "Cucina e isola pranzo",      en: "Kitchen and dining island", tr: "Mutfak ve yemek adası" } },
      { src: "assets/projects/monolocale/living_2.png",   caption: { it: "Divano-letto e libreria",    en: "Sofa bed and shelving",     tr: "Çekyat ve raf" } },
      { src: "assets/projects/monolocale/bathroom_1.png", caption: { it: "Bagno",                      en: "Bathroom",                 tr: "Banyo" } }
    ]
  },

  // ── PROGETTO 5 ──────────────────────────────────────────────────────────
  {
    id: "living-eindhoven",

    title: { it: "Living Eindhoven",      en: "Eindhoven Living",     tr: "Eindhoven Yaşam Alanı" },
    tag:   { it: "Residenziale · 2022",   en: "Residential · 2022",   tr: "Konut · 2022" },
    year:  2022,

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

    subtitle: { it: "LUCE NATURALE", en: "NATURAL LIGHT", tr: "DOĞAL IŞIK" },
    intro: [
      {
        it: "Una zona living con cucina di 45 m² a Eindhoven, ripensata come un unico ambiente luminoso e fluido. L’incarico comprende il disegno dello spazio e la scelta degli arredi.",
        en: "A 45 m² living area with a kitchen in Eindhoven, reimagined as a single, bright and flowing space. The brief covers spatial design and furniture selection.",
        tr: "Eindhoven’da, aydınlık ve akıcı tek bir mekân olarak yeniden düşünülen, mutfakla birlikte 45 m²’lik bir yaşam alanı. İşin kapsamı mekân tasarımını ve mobilya seçimini içeriyor."
      },
      {
        it: "Il progetto si sviluppa attorno a una palette neutra di bianchi caldi, crema e legno chiaro. È la luce naturale a dare ritmo agli ambienti.",
        en: "The design centres on a neutral palette of warm whites, cream and pale wood. Natural light sets the rhythm of the interior.",
        tr: "Proje, sıcak beyazlar, krem ve açık renkli ahşaptan oluşan nötr bir palet etrafında şekilleniyor. Mekânların ritmini doğal ışık belirliyor."
      },
      {
        it: "La cucina prosegue nella zona pranzo, dove il tavolo con sedute in paglia di Vienna si accompagna a una mensola fioriera sospesa che porta il verde all’interno. Il soggiorno si raccoglie attorno a divani in tessuto chiaro, tavolini tondi e una lampada ad arco, e si apre verso l’esterno. Una madia, una libreria a giorno e pochi accenti grafici completano un ambiente sobrio e accogliente.",
        en: "The kitchen flows into the dining area, where a table and chairs with Viennese cane seats are accompanied by a suspended planter shelf that brings greenery indoors. The living room is arranged around sofas in light-coloured fabric, round coffee tables and an arc lamp, and opens towards the outdoors. A sideboard, an open bookcase and a few graphic accents complete an understated, welcoming interior.",
        tr: "Mutfak yemek alanına uzanıyor; Viyana hasırı oturumlu sandalyelerin eşlik ettiği masa, yeşili içeri taşıyan asılı bir saksılık rafla tamamlanıyor. Salon, açık renkli kumaş kanepeler, yuvarlak sehpalar ve kemerli bir lambader etrafında şekilleniyor ve dışarıya açılıyor. Bir konsol, açık bir kitaplık ve birkaç grafik vurgu, sade ve davetkâr bir ortamı tamamlıyor."
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

// Mostra prima i progetti in corso, poi ordina per "year" dal più recente —
// così l'ordine nell'array sopra non ha importanza.
window.PROJECTS.sort((a, b) => Number(Boolean(b.inProgress)) - Number(Boolean(a.inProgress)) || b.year - a.year);
