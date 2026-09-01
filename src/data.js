export const categoryImages = {
  tubi: '/images/products/tubi.jpg',
  flange: '/images/products/flange.jpg',
  raccordi: '/images/products/raccordi.jpg',
  valvole: '/images/products/valvole.jpg',
  accessori: '/images/products/accessori.jpg',
  'arredo-tecnico': '/images/products/arredo-tecnico.jpg',
}

export function getProductImage(product) {
  return categoryImages[product.category]
}

export const company = {
  name: 'Arteco S.r.l.',
  tagline: 'Componenti per impianti industriali',
  address: "Via dell'Industria 00",
  city: '20100 Milano (MI)',
  phone: '+39 02 0000 0000',
  email: 'buyer@artecovalvole.it',
  referent: 'Riccardo',
  vat: 'P.IVA da inserire',
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/azienda', label: 'Azienda' },
  { href: '/prodotti', label: 'Prodotti' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/contatti', label: 'Contatti' },
]

export const certifications = ['PED', 'ATEX', 'FDA']

export const partners = [
  { id: 'ghidini', name: '4G Ghidini', initials: '4G' },
  { id: 'az', name: 'AZ Armaturen', initials: 'AZ' },
]

export const sectors = [
  {
    id: 'chimico',
    name: 'Chimico',
    description: 'Componenti per processi corrosivi e impianti di sintesi.',
  },
  {
    id: 'energetico',
    name: 'Energetico',
    description: 'Fornitura per centrali, cogenerazione e reti di distribuzione.',
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description: 'Valvole e raccordi per upstream, midstream e downstream.',
  },
  {
    id: 'petrolchimico',
    name: 'Petrolchimico',
    description: 'Soluzioni per cracking, raffinazione e polimeri.',
  },
  {
    id: 'farmaceutico',
    name: 'Farmaceutico',
    description: 'Componenti inox per processi GMP e ambienti controllati.',
  },
  {
    id: 'alimentare',
    name: 'Alimentare',
    description: 'Materiali idonei al contatto alimentare e CIP/SIP.',
  },
  {
    id: 'energia',
    name: 'Energia',
    description: 'Supporto a impianti di conversione e stoccaggio energetico.',
  },
  {
    id: 'navale',
    name: 'Navale',
    description: 'Forniture per piping di bordo e sistemi ausiliari.',
  },
  {
    id: 'trattamento-acque',
    name: 'Trattamento acque',
    description: 'Componenti per depurazione, desalinizzazione e riuso.',
  },
]

export const productCategories = [
  { id: 'tubi', label: 'Tubi' },
  { id: 'flange', label: 'Flange' },
  { id: 'raccordi', label: 'Raccordi' },
  { id: 'valvole', label: 'Valvole' },
  { id: 'accessori', label: 'Accessori' },
  { id: 'arredo-tecnico', label: 'Arredo tecnico' },
]

export const products = [
  {
    id: 'tubo-inox-aisi316',
    category: 'tubi',
    material: 'AISI 316L',
    norm: 'EN 10217-7',
    tags: ['PED'],
  },
  {
    id: 'tubo-sanitario',
    category: 'tubi',
    material: 'AISI 304L',
    norm: 'DIN 11850',
    tags: ['FDA'],
  },
  {
    id: 'tubo-saldato',
    category: 'tubi',
    material: 'Acciaio inox',
    norm: 'ASTM A312',
    tags: [],
  },
  {
    id: 'tubo-seamless',
    category: 'tubi',
    material: 'AISI 316L',
    norm: 'EN 10216-5',
    tags: ['PED'],
  },
  {
    id: 'flangia-welding-neck',
    category: 'flange',
    material: 'AISI 316L',
    norm: 'EN 1092-1',
    tags: ['PED'],
  },
  {
    id: 'flangia-blind',
    category: 'flange',
    material: 'AISI 304L',
    norm: 'EN 1092-1',
    tags: [],
  },
  {
    id: 'flangia-slip-on',
    category: 'flange',
    material: 'Acciaio inox',
    norm: 'ANSI B16.5',
    tags: [],
  },
  {
    id: 'flangia-loose',
    category: 'flange',
    material: 'AISI 316L',
    norm: 'EN 1092-1',
    tags: ['PED'],
  },
  {
    id: 'raccordo-a-90',
    category: 'raccordi',
    material: 'AISI 316L',
    norm: 'ISO 4144',
    tags: [],
  },
  {
    id: 'raccordo-tee',
    category: 'raccordi',
    material: 'AISI 316L',
    norm: 'ISO 4144',
    tags: [],
  },
  {
    id: 'raccordo-clamp',
    category: 'raccordi',
    material: 'AISI 316L',
    norm: 'DIN 32676',
    tags: ['FDA'],
  },
  {
    id: 'raccordo-filettato',
    category: 'raccordi',
    material: 'Acciaio inox',
    norm: 'ISO 7-1',
    tags: [],
  },
  {
    id: 'valvola-sfera',
    category: 'valvole',
    material: 'AISI 316L',
    norm: 'ISO 5211',
    tags: ['PED', 'ATEX'],
  },
  {
    id: 'valvola-farfalla',
    category: 'valvole',
    material: 'Acciaio inox',
    norm: 'EN 593',
    tags: ['PED'],
  },
  {
    id: 'valvola-psv',
    category: 'valvole',
    material: 'Acciaio inox',
    norm: 'API 526',
    tags: ['PED', 'INAIL'],
  },
  {
    id: 'valvola-non-ritorno',
    category: 'valvole',
    material: 'AISI 316L',
    norm: 'EN 12334',
    tags: [],
  },
  {
    id: 'filtro-y',
    category: 'accessori',
    material: 'AISI 316L',
    norm: 'Placeholder',
    tags: [],
  },
  {
    id: 'giunto-compensatore',
    category: 'accessori',
    material: 'Acciaio inox',
    norm: 'Placeholder',
    tags: [],
  },
  {
    id: 'supporto-piping',
    category: 'accessori',
    material: 'Acciaio inox',
    norm: 'Placeholder',
    tags: [],
  },
  {
    id: 'drenaggio-condensa',
    category: 'accessori',
    material: 'AISI 316L',
    norm: 'Placeholder',
    tags: [],
  },
  {
    id: 'banco-lavaggio',
    category: 'arredo-tecnico',
    material: 'AISI 304L',
    norm: 'Su misura',
    tags: ['FDA'],
  },
  {
    id: 'carrelli-inox',
    category: 'arredo-tecnico',
    material: 'AISI 304L',
    norm: 'Su misura',
    tags: [],
  },
  {
    id: 'scaffalature-tecnici',
    category: 'arredo-tecnico',
    material: 'Acciaio inox',
    norm: 'Su misura',
    tags: [],
  },
  {
    id: 'pensiline-processo',
    category: 'arredo-tecnico',
    material: 'AISI 316L',
    norm: 'Su misura',
    tags: [],
  },
]

export const productCopy = {
  'tubo-inox-aisi316': {
    name: 'Tubo inox AISI 316L',
    description: 'Tubi saldati per fluidi corrosivi e alte temperature. Disponibile in diverse schedule e finiture.',
    placeholder: 'Immagine tubo inox',
  },
  'tubo-sanitario': {
    name: 'Tubo sanitario',
    description: 'Superfici levigate per settore alimentare e farmaceutico. Certificazioni su richiesta.',
    placeholder: 'Immagine tubo sanitario',
  },
  'tubo-saldato': {
    name: 'Tubo saldato',
    description: 'Soluzione versatile per reti di processo e utility industriali.',
    placeholder: 'Immagine tubo saldato',
  },
  'tubo-seamless': {
    name: 'Tubo seamless',
    description: 'Tubi senza saldatura per applicazioni ad alta pressione.',
    placeholder: 'Immagine tubo seamless',
  },
  'flangia-welding-neck': {
    name: 'Flangia welding neck',
    description: 'Collegamento saldato per linee ad alta integrità strutturale.',
    placeholder: 'Immagine flangia WN',
  },
  'flangia-blind': {
    name: 'Flangia cieca',
    description: 'Chiusura temporanea o permanente di terminali di linea.',
    placeholder: 'Immagine flangia cieca',
  },
  'flangia-slip-on': {
    name: 'Flangia slip-on',
    description: 'Montaggio rapido per impianti con pressioni moderate.',
    placeholder: 'Immagine flangia slip-on',
  },
  'flangia-loose': {
    name: 'Flangia loose',
    description: 'Sistema con collare e anello per allineamento semplificato.',
    placeholder: 'Immagine flangia loose',
  },
  'raccordo-a-90': {
    name: 'Curva 90°',
    description: 'Raccordo a gomito per deviazioni di piping in processo.',
    placeholder: 'Immagine curva 90°',
  },
  'raccordo-tee': {
    name: 'Tee di derivazione',
    description: 'Derivazioni a T per ramificazioni e by-pass di linea.',
    placeholder: 'Immagine tee',
  },
  'raccordo-clamp': {
    name: 'Raccordo clamp',
    description: 'Collegamenti rapidi per impianti sanitari e CIP.',
    placeholder: 'Immagine raccordo clamp',
  },
  'raccordo-filettato': {
    name: 'Raccordo filettato',
    description: 'Nipple, boccola e riduzioni per collegamenti filettati.',
    placeholder: 'Immagine raccordo filettato',
  },
  'valvola-sfera': {
    name: 'Valvola a sfera',
    description: 'Intercettazione on/off con attuazione manuale o pneumatica.',
    placeholder: 'Immagine valvola a sfera',
  },
  'valvola-farfalla': {
    name: 'Valvola a farfalla',
    description: 'Regolazione e intercettazione per grandi diametri.',
    placeholder: 'Immagine valvola farfalla',
  },
  'valvola-psv': {
    name: 'Valvola di sicurezza PSV',
    description: 'Protezione sovrapressione con revisione e taratura certificata INAIL.',
    placeholder: 'Immagine valvola PSV',
  },
  'valvola-non-ritorno': {
    name: 'Valvola non ritorno',
    description: 'Prevenzione reflusso fluidi in linee di processo.',
    placeholder: 'Immagine valvola NRV',
  },
  'filtro-y': {
    name: 'Filtro a Y',
    description: 'Protezione pompe e strumentazione da particolato.',
    placeholder: 'Immagine filtro Y',
  },
  'giunto-compensatore': {
    name: 'Giunto compensatore',
    description: 'Assorbimento dilatazioni termiche e vibrazioni.',
    placeholder: 'Immagine giunto',
  },
  'supporto-piping': {
    name: 'Supporti piping',
    description: 'Staffaggi e supporti in acciaio inox per reti sospese.',
    placeholder: 'Immagine supporti',
  },
  'drenaggio-condensa': {
    name: 'Sistema drenaggio condensa',
    description: 'Separatori e trappole per linee vapore e condensa.',
    placeholder: 'Immagine drenaggio',
  },
  'banco-lavaggio': {
    name: 'Banco lavaggio inox',
    description: 'Arredo tecnico per aree produzione e laboratorio.',
    placeholder: 'Immagine banco lavaggio',
  },
  'carrelli-inox': {
    name: 'Carrelli inox',
    description: 'Mobilità per strumenti e componenti in ambiente produttivo.',
    placeholder: 'Immagine carrelli',
  },
  'scaffalature-tecnici': {
    name: 'Scaffalature tecniche',
    description: 'Stoccaggio organizzato per magazzino e reparto manutenzione.',
    placeholder: 'Immagine scaffalature',
  },
  'pensiline-processo': {
    name: 'Pensiline di processo',
    description: 'Protezione e accesso a skid e quadri di controllo.',
    placeholder: 'Immagine pensilina',
  },
}

export const services = [
  {
    id: 'consulenza-tecnica',
    title: 'Consulenza tecnica',
    description:
      'Supporto alla selezione materiali, dimensionamento e compatibilità normativa per il vostro impianto.',
    highlights: ['Analisi requisiti di processo', 'Schede tecniche e MTC', 'Supporto a uffici acquisti'],
  },
  {
    id: 'fornitura-chiavi-in-mano',
    title: 'Fornitura chiavi in mano',
    description:
      'Gestione ordini complessi con picking, collaudo e spedizione coordinata verso cantiere o stabilimento.',
    highlights: ['Kit piping su disegno', 'Tracciabilità lotti', 'Consegne programmate'],
  },
  {
    id: 'revisione-psv-inail',
    title: 'Revisione e taratura PSV (INAIL)',
    description:
      'Servizio distintivo: certificazione INAIL per revisione e taratura valvole di sicurezza PSV, con documentazione completa.',
    highlights: ['Collaudo in banco prova', 'Certificato INAIL', 'Etichettatura e tracciabilità'],
    featured: true,
  },
  {
    id: 'magazzino-rapido',
    title: 'Magazzino e consegne rapide',
    description:
      'Disponibilità su articoli a catalogo per ridurre i tempi di fermo impianto e le urgenze di manutenzione.',
    highlights: ['Stock su valvole e raccordi', 'Spedizioni nazionali', 'Gestione urgenze B2B'],
  },
]

export const companyStats = [
  { label: 'Anni di attività', value: 'XX+' },
  { label: 'Settori serviti', value: '9' },
  { label: 'Referente dedicato', value: '1' },
]

export const testimonials = [
  {
    id: 'manutenzione',
    name: 'Responsabile manutenzione',
    company: 'Impianto chimico — Nord Italia',
    quote:
      'Tempi di risposta rapidi e documentazione tecnica sempre completa. Per noi conta l’affidabilità nella continuità operativa.',
  },
  {
    id: 'acquisti',
    name: 'Ufficio acquisti',
    company: 'EPC contractor',
    quote:
      'Arteco ci supporta nella gestione di ordini multi-riga con tracciabilità e consegne coordinate in cantiere.',
  },
  {
    id: 'progettista',
    name: 'Progettista impianti',
    company: 'Settore farmaceutico',
    quote:
      'Materiali inox certificati e schede tecniche chiare: semplificano la validazione in fase di commissioning.',
  },
]

export const copy = {
  hero: {
    kicker: 'Fornitore B2B · Acciaio inox',
    title: 'Componenti per impianti industriali, dalla progettazione alla consegna',
    lead: 'Tubi, flange, raccordi, valvole, accessori e arredo tecnico in acciaio inox per aziende industriali, EPC contractor e distributori. Richiedete un preventivo dedicato.',
    ctaProducts: 'Esplora prodotti',
    ctaQuote: 'Richiedi preventivo',
    imageAlt: 'Componenti industriali in acciaio inox',
    imageSrc: '/images/hero.jpg',
  },
  about: {
    kicker: 'Chi siamo',
    title: 'Partner tecnico per l’industria',
    p1: 'Arteco S.r.l. supporta aziende industriali, uffici acquisti, responsabili manutenzione, ingegneri e progettisti con componenti per impianti di processo.',
    p2Before: 'Operiamo con ',
    p2Strong: 'materiali certificati',
    p2After: ' e documentazione tecnica completa, per garantire tracciabilità e conformità alle normative di riferimento.',
    p3: 'Il nostro obiettivo è ridurre i tempi di approvvigionamento e offrire un interlocutore unico per componentistica inox e servizi correlati.',
    imageAlt: 'Magazzino componenti industriali',
    imageSrc: '/images/about.jpg',
  },
  sectors: {
    kicker: 'Settori',
    title: 'Dove operiamo',
    lead: 'Soluzioni per processi critici in ambienti ad alta exigence tecnica e normativa.',
  },
  products: {
    kicker: 'Catalogo',
    title: 'Prodotti',
    lead: 'Componenti in acciaio inox per piping, valvole e arredo tecnico. Selezionate una categoria per esplorare la gamma.',
    categoriesLabel: 'Categorie prodotto',
    material: 'Materiale',
    norm: 'Normativa',
    viewAll: 'Vedi tutti i prodotti',
  },
  services: {
    kicker: 'Servizi',
    title: 'Oltre la fornitura',
    lead: 'Consulenza, gestione ordini e servizi specializzati per valvole di sicurezza.',
    featuredBadge: 'Servizio distintivo',
    viewAll: 'Scopri i servizi',
  },
  partners: {
    kicker: 'Partner',
    title: 'Collaborazioni',
    lead: 'Lavoriamo con produttori e brand di riferimento nel settore valvole e componentistica industriale.',
  },
  certifications: {
    kicker: 'Conformità',
    title: 'Etichette e standard',
    lead: 'Etichette indicative di conformità — verificare sempre i requisiti specifici del vostro impianto.',
    disclaimer: 'Le etichette PED, ATEX e FDA sono indicative. Per claim legali e certificazioni ufficiali contattare il referente commerciale.',
  },
  testimonials: {
    kicker: 'Referenze',
    title: 'Cosa dicono i clienti B2B',
  },
  contact: {
    kicker: 'Contatti',
    title: 'Richiedi un preventivo',
    lead: 'Compilate il modulo: il referente Riccardo vi ricontatterà con un’offerta personalizzata.',
    name: 'Nome e cognome',
    namePlaceholder: 'Es. Mario Rossi',
    company: 'Azienda',
    companyPlaceholder: 'Es. Industria S.p.A.',
    email: 'Email',
    emailPlaceholder: 'nome@azienda.it',
    phone: 'Telefono',
    phonePlaceholder: '+39 ...',
    product: 'Prodotto o servizio',
    productPlaceholder: 'Seleziona',
    message: 'Messaggio',
    messagePlaceholder: 'Descrivete quantità, materiali, normative e tempi di consegna...',
    submit: 'Invia richiesta',
    sentTitle: 'Richiesta inviata',
    sentBody: (name) =>
      `Grazie ${name}. Abbiamo registrato la vostra richiesta: Riccardo vi contatterà a breve all’indirizzo indicato.`,
    sendAnother: 'Invia un’altra richiesta',
    address: 'Sede',
    hours: 'Orari',
    weekdays: 'Lun–Ven',
    hoursSlots: '08:30–12:30  ·  14:00–18:00',
    mapTitle: 'Mappa sede Arteco S.r.l.',
  },
  footer: {
    blurb: 'Componenti per impianti industriali in acciaio inox. Fornitura B2B con supporto tecnico dedicato.',
    legal: 'Informazioni',
    privacy: 'Privacy',
    cookie: 'Cookie policy',
    legalNotice: 'Note legali',
    contacts: 'Contatti',
    rights: 'Tutti i diritti riservati.',
    placeholderNote: 'Dati anagrafici e fiscali da inserire.',
  },
}

export const quoteProductOptions = [
  'Tubi e piping',
  'Flange',
  'Raccordi',
  'Valvole',
  'Accessori',
  'Arredo tecnico',
  'Revisione PSV (INAIL)',
  'Altro',
]
