import { asset } from './lib/assets'

export const categoryImages = {
  tubi: asset('images/products/tubi.jpg'),
  flange: asset('images/products/flange.jpg'),
  raccordi: asset('images/products/raccordi.jpg'),
  valvole: asset('images/products/valvole.jpg'),
  accessori: asset('images/products/accessori.jpg'),
  'arredo-tecnico': asset('images/products/arredo-tecnico.jpg'),
}

export function getProductImage(product) {
  return product.image ? asset(product.image) : categoryImages[product.category]
}

export const company = {
  name: 'Arteco S.r.l.',
  tagline: 'Valvole e componenti piping',
  address: 'Via Bergamina 36',
  city: '20014 Nerviano (MI)',
  phone: '+39 0331 415325',
  phoneAlt: '+39 0331 588443',
  fax: '+39 0331 416237',
  email: 'buyer@artecovalvole.it',
  emailInfo: 'info@artecovalvole.it',
  pec: 'artecopec@pec.artecovalvole.it',
  referent: 'Riccardo',
  vat: 'P.IVA e C.F. 03800210969',
  rea: 'MI-1703012',
  shareCapital: '€ 20.000',
  website: 'www.artecovalvole.it',
  mapEmbed:
    'https://maps.google.com/maps?q=Via%20Bergamina%2036%2C%2020014%20Nerviano%20MI&z=16&output=embed',
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/azienda', label: 'Azienda' },
  { href: '/prodotti', label: 'Prodotti' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/settori', label: 'Settori' },
  { href: '/contatti', label: 'Contatti' },
]

export const certifications = ['PED', 'ATEX', 'FDA']

export const partners = [
  { id: 'ghidini', name: '4G Ghidini', initials: '4G' },
  { id: 'az', name: 'AZ Armaturen', initials: 'AZ' },
  { id: 'zema', name: 'Zema', initials: 'Z' },
]

export const sectors = [
  {
    id: 'chimico',
    name: 'Chimico',
    description: 'Linee di processo, tenuta e materiali compatibili con fluidi corrosivi e sintesi.',
  },
  {
    id: 'energetico',
    name: 'Energetico',
    description: 'Componenti per centrali, cogenerazione e reti di distribuzione.',
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description: 'Valvole e raccordi per classificazione, continuità di esercizio e servizi gravosi.',
  },
  {
    id: 'petrolchimico',
    name: 'Petrolchimico',
    description: 'Pacchetti per costruzione e ricondizionamento di linee di cracking e raffinazione.',
  },
  {
    id: 'farmaceutico',
    name: 'Farmaceutico',
    description: 'Materiali inox, pulibilità e tracciabilità documentale per aree controllate.',
  },
  {
    id: 'alimentare',
    name: 'Alimentare',
    description: 'Componenti idonei al contatto alimentare, CIP/SIP e linee igieniche.',
  },
  {
    id: 'energia',
    name: 'Energia',
    description: 'Supporto a impianti di conversione, stoccaggio e utility energetiche.',
  },
  {
    id: 'navale',
    name: 'Navale',
    description: 'Forniture per piping di bordo, sistemi ausiliari e servizi marini.',
  },
  {
    id: 'trattamento-acque',
    name: 'Trattamento acque',
    description: 'Valvole e raccordi per depurazione, desalinizzazione e riuso.',
  },
]

export const productCategories = [
  {
    id: 'tubi',
    label: 'Tubi',
    href: '/prodotti/tubi',
    excerpt: 'Inox, carbonio e tubing per linee di processo e strumentazione.',
    subtypes: [
      { name: 'Serie standard', description: 'ASTM A312, A106 e API 5L da magazzino.' },
      { name: 'Su specifica', description: 'Duplex, superduplex, 904L e leghe speciali.' },
      { name: 'Materiali', description: 'AISI 304/L, 316/L, carbonio e zincati.' },
    ],
    specs: [
      { label: 'Materiali', value: 'AISI 304/L · 316/L · A106 Gr.B · API 5L' },
      { label: 'Range DN', value: 'Da ½" a 24" — altri diametri su richiesta' },
      { label: 'Pressione', value: 'Secondo schedula ASTM / ASME (B36.10 e B36.19)' },
      { label: 'Normative', value: 'ASTM A312 · ANSI B36.19 / B36.10 · ASTM A213 / A269' },
      { label: 'Documentazione', value: '3.1 / PED su richiesta' },
    ],
  },
  {
    id: 'flange',
    label: 'Flange',
    href: '/prodotti/flange',
    excerpt: 'EN 1092-1, ASME B16.5 e realizzazioni a disegno.',
    subtypes: [
      { name: 'Serie standard', description: 'Piane, WN, cieche, slip-on, filettate e libere.' },
      { name: 'Su specifica', description: 'Flange di misura, anelli di drenaggio, duplex e superleghe.' },
      { name: 'Materiali', description: 'Inox A182, carbonio A105, P245GH, LF2.' },
    ],
    specs: [
      { label: 'Materiali', value: 'A182 F304/L–F316/L · A105 · LF2 · P245GH' },
      { label: 'Range DN', value: 'EN 1092-1 e ASME B16.5, classi ANSI 150–1500' },
      { label: 'Pressione', value: 'PN e classi ANSI 150–1500, superiori su richiesta' },
      { label: 'Normative', value: 'EN 1092-1 · ASME B16.5' },
      { label: 'Documentazione', value: '3.1 / PED su richiesta' },
    ],
  },
  {
    id: 'raccordi',
    label: 'Raccordi',
    href: '/prodotti/raccordi',
    excerpt: 'BW, curve, tee e forgiati in inox e carbonio.',
    subtypes: [
      { name: 'Serie standard', description: 'ASME B16.9 da schedula 10 a 160, da ½" a 24".' },
      { name: 'Su specifica', description: 'WPHY, WPL6 e acciai legati WP5–WP91.' },
      { name: 'Materiali', description: 'A403 WP304/L–316/L, A234 WPB, serie 3000–9000.' },
    ],
    specs: [
      { label: 'Materiali', value: 'Inox WP304/L–316/L · WPB · forgiati carbonio/inox' },
      { label: 'Range DN', value: 'Da ½" a 24"' },
      { label: 'Pressione', value: 'Schedula 10–160 · serie forgiate 3000 / 6000 / 9000' },
      { label: 'Normative', value: 'ASME B16.9 · serie 3000 / 6000 / 9000' },
      { label: 'Documentazione', value: '3.1 / PED su richiesta' },
    ],
  },
  {
    id: 'valvole',
    label: 'Valvole',
    href: '/prodotti/valvole',
    excerpt: 'Sfera, farfalla, maschio, ritegno, globo e saracinesca.',
    subtypes: [
      { name: 'A maschio (plug)', description: 'Due o più vie, passaggio pieno, anche con camicia di riscaldamento.' },
      { name: 'A sfera (ball)', description: 'Monoblocco, split body, tre pezzi, wafer e trunnion.' },
      { name: 'A farfalla (butterfly)', description: 'Wafer e lug, tenuta elastomero o PTFE.' },
      { name: 'Di ritegno (check)', description: 'A battente, wafer e verticali a sfera.' },
      { name: 'A globo (globe)', description: 'Regolazione e intercettazione, anche socket weld.' },
    ],
    specs: [
      { label: 'Materiali', value: 'AISI 316 · carbonio · ghisa · duplex · PTFE' },
      { label: 'Range DN', value: 'Su distinta, per tipologia (sfera, farfalla, maschio, ritegno, globo)' },
      { label: 'Pressione', value: 'ANSI 150–600 · PN10–100, altri rating su specifica' },
      { label: 'Normative', value: 'ANSI / PN · PED · attuazione ISO 5211 dove applicabile' },
      { label: 'Documentazione', value: 'PED / collaudi INAIL sul service PSV' },
    ],
  },
  {
    id: 'accessori',
    label: 'Accessori',
    href: '/prodotti/accessori',
    excerpt: 'Attacchi LAS, paddle blind e componenti di linea.',
    subtypes: [
      { name: 'Serie standard', description: 'Camlock AISI 316, flangiati e portagomma.' },
      { name: 'Su specifica', description: 'Paddle blind, stub end e pezzi a disegno.' },
      { name: 'Materiali', description: 'Principalmente AISI 316 e acciai da officina.' },
    ],
    specs: [
      { label: 'Materiali', value: 'AISI 316 · acciaio a disegno' },
      { label: 'Range DN', value: 'Su distinta' },
      { label: 'Pressione', value: 'Secondo componente e distinta (LAS, paddle blind, Camlock)' },
      { label: 'Normative', value: 'Camlock / a disegno' },
      { label: 'Documentazione', value: 'Su richiesta' },
    ],
  },
  {
    id: 'arredo-tecnico',
    label: 'Arredo inox',
    href: '/prodotti/arredo-tecnico',
    excerpt: 'Banchi, armadi, carrelli e lavelli su misura.',
    subtypes: [
      { name: 'Serie standard', description: 'Banchi, armadi e carrelli per aree produttive.' },
      { name: 'Su specifica', description: 'Lavelli e arredo per farmaceutica, cosmesi e biomedicale.' },
      { name: 'Materiali', description: 'AISI 304 e 316, con attenzione a igiene e pulibilità.' },
    ],
    specs: [
      { label: 'Materiali', value: 'AISI 304 / 316' },
      { label: 'Range DN', value: 'Non applicabile — arredo su misura' },
      { label: 'Pressione', value: 'Non applicabile' },
      { label: 'Normative', value: 'Su misura per aree produttive, farmaceutica e biomedicale' },
      { label: 'Documentazione', value: 'FDA dove richiesto' },
    ],
  },
]

export function getCategory(id) {
  return productCategories.find((category) => category.id === id)
}

export const products = [
  {
    id: 'tubo-inox',
    category: 'tubi',
    material: 'AISI 304/L · 316/L',
    norm: 'ASTM A312 · ANSI B36.19',
    tags: [],
    image: 'images/products/tubi.jpg',
  },
  {
    id: 'tubo-carbonio',
    category: 'tubi',
    material: 'ASTM A106 Gr.B',
    norm: 'ANSI B36.10 · API 5L',
    tags: [],
    image: 'images/products/tubi-carbonio.jpg',
  },
  {
    id: 'tubing-inox',
    category: 'tubi',
    material: 'AISI 304/L · 316/L',
    norm: 'ASTM A213 / A269',
    tags: [],
    image: 'images/products/tubi.jpg',
  },
  {
    id: 'flange-en1092',
    category: 'flange',
    material: 'Inox e carbonio',
    norm: 'EN 1092-1',
    tags: [],
    image: 'images/products/flange.jpg',
  },
  {
    id: 'flange-asme',
    category: 'flange',
    material: 'A182 · A105 · LF2',
    norm: 'ASME B16.5',
    tags: [],
    image: 'images/products/flange.jpg',
  },
  {
    id: 'flange-speciali',
    category: 'flange',
    material: 'Su specifica',
    norm: 'A disegno',
    tags: [],
    image: 'images/products/flange-speciali.jpg',
  },
  {
    id: 'dischi-reversibili',
    category: 'flange',
    material: 'AISI 316',
    norm: 'Spectacle blind',
    tags: [],
    image: 'images/products/dischi-reversibili.jpg',
  },
  {
    id: 'raccordi-bw-inox',
    category: 'raccordi',
    material: 'ASTM A403 WP304/L · 316/L',
    norm: 'ASME B16.9',
    tags: [],
    image: 'images/products/raccordi.jpg',
  },
  {
    id: 'raccordi-curve',
    category: 'raccordi',
    material: 'Inox e WPB',
    norm: 'ASME B16.9 · LR/SR',
    tags: [],
    image: 'images/products/raccordi-curve.jpg',
  },
  {
    id: 'raccordi-tee',
    category: 'raccordi',
    material: 'Inox e WPB',
    norm: 'ASME B16.9',
    tags: [],
    image: 'images/products/raccordi-tee.jpg',
  },
  {
    id: 'raccordi-wpb',
    category: 'raccordi',
    material: 'ASTM A234 WPB',
    norm: 'ASME B16.9',
    tags: [],
    image: 'images/products/raccordi-wpb-group.jpg',
  },
  {
    id: 'raccordi-forged',
    category: 'raccordi',
    material: 'Carbonio e inox',
    norm: 'Serie 3000 / 6000 / 9000',
    tags: [],
    image: 'images/products/raccordi-3000.jpg',
  },
  {
    id: 'valvola-sfera',
    category: 'valvole',
    material: 'AISI 316 · carbonio',
    norm: 'ANSI / PN',
    tags: ['PED'],
    image: 'images/products/valvola-sfera.jpg',
  },
  {
    id: 'valvola-farfalla',
    category: 'valvole',
    material: 'Ghisa · inox · PTFE',
    norm: 'Wafer / lug',
    tags: [],
    image: 'images/products/valvola-farfalla.jpg',
  },
  {
    id: 'valvola-maschio',
    category: 'valvole',
    material: 'Ghisa · inox · duplex',
    norm: 'ANSI 150–600 · PN10–100',
    tags: [],
    image: 'images/products/valvola-maschio.jpg',
  },
  {
    id: 'valvola-ritegno',
    category: 'valvole',
    material: 'Acciaio inox',
    norm: 'Battente / wafer',
    tags: [],
    image: 'images/products/valvola-ritegno.jpg',
  },
  {
    id: 'valvola-slide',
    category: 'valvole',
    material: 'Acciaio',
    norm: 'Su specifica',
    tags: [],
    image: 'images/products/valvola-slide.jpg',
  },
  {
    id: 'valvola-gate',
    category: 'valvole',
    material: 'Ghisa · acciaio',
    norm: 'Saracinesca',
    tags: [],
    image: 'images/products/valvola-gate.jpg',
  },
  {
    id: 'valvola-globo',
    category: 'valvole',
    material: 'Acciaio inox',
    norm: 'SW / flangiata',
    tags: [],
    image: 'images/products/valvola-globo.jpg',
  },
  {
    id: 'attacchi-las',
    category: 'accessori',
    material: 'AISI 316',
    norm: 'Camlock',
    tags: [],
    image: 'images/products/attacchi-las.jpg',
  },
  {
    id: 'paddle-blinds',
    category: 'accessori',
    material: 'Acciaio inox',
    norm: 'A disegno',
    tags: [],
    image: 'images/products/paddle.jpg',
  },
  {
    id: 'arredo-inox',
    category: 'arredo-tecnico',
    material: 'AISI 304 / 316',
    norm: 'Su misura',
    tags: ['FDA'],
    image: 'images/products/arredo-tecnico.jpg',
  },
]

export const productCopy = {
  'tubo-inox': {
    name: 'Tubi in acciaio inox',
    description:
      'Senza saldatura e saldati secondo ANSI B36.19 e B36.10, ASTM/ASME A312 TP304/L e 316/L. Su richiesta duplex, superduplex, 904L e leghe speciali.',
    placeholder: 'Tubi inox',
  },
  'tubo-carbonio': {
    name: 'Tubi in acciaio al carbonio',
    description:
      'Senza saldatura e saldati secondo ANSI B36.10 in ASTM A106 Gr.B / ASME SA / API 5L. Disponibili anche zincati con estremità lisce o filettate.',
    placeholder: 'Tubi carbonio',
  },
  'tubing-inox': {
    name: 'Tubing inox',
    description:
      'Tubing senza saldatura e saldati in AISI 304/L e 316/L secondo ASTM A213 / A269, per strumentazione e linee di processo.',
    placeholder: 'Tubing inox',
  },
  'flange-en1092': {
    name: 'Flange EN 1092-1',
    description:
      'Piane, a collarino, cieche, filettate, libere e anelli d’appoggio. Materiali inox ASTM A182 F316/L–F304/L e carbonio A105, P245GH, P250GH, A350 LF2.',
    placeholder: 'Flange EN 1092-1',
  },
  'flange-asme': {
    name: 'Flange ASME B16.5',
    description:
      'Slip-on, welding neck, blind, socket welding e lap joint, classi ANSI 150–1500. Classi superiori e materiali speciali su richiesta.',
    placeholder: 'Flange ASME',
  },
  'flange-speciali': {
    name: 'Flange speciali e a disegno',
    description:
      'Flange di misura, anelli di drenaggio e pezzi lavorati su specifica di impianto, anche in duplex, hastelloy, monel e inconel.',
    placeholder: 'Flange speciali',
  },
  'dischi-reversibili': {
    name: 'Dischi reversibili',
    description:
      'Spectacle blind e anelli a otto per isolamento di linea in manutenzione e collaudo. Realizzati e marcati su specifica.',
    placeholder: 'Dischi reversibili',
  },
  'raccordi-bw-inox': {
    name: 'Raccordi BW inox',
    description:
      'Da stock, senza saldatura secondo ASME B16.9 dalla schedula 10 alla 160: curve, tee, riduzioni e fondi bombati, da ½" a 24".',
    placeholder: 'Raccordi BW inox',
  },
  'raccordi-curve': {
    name: 'Curve 45° / 90° / 180°',
    description:
      'Curve long radius e short radius in acciaio inox e carbonio WPB, per variazioni di direzione su linee di processo.',
    placeholder: 'Curve',
  },
  'raccordi-tee': {
    name: 'Pezzi a tee',
    description:
      'Tee di derivazione in inox e WPB per ramificazioni e by-pass. Disponibili anche riduzioni concentriche ed eccentriche.',
    placeholder: 'Tee',
  },
  'raccordi-wpb': {
    name: 'Raccordi BW in carbonio WPB',
    description:
      'Curve, tee, riduzioni e cap in ASTM A234 WPB. Su produzione anche WPHY52, WPL6 e acciai legati WP5–WP91.',
    placeholder: 'Raccordi WPB',
  },
  'raccordi-forged': {
    name: 'Raccordi forgiati',
    description:
      'Serie 3000, 6000 e 9000 con estremità NPT, SW e GAS, in acciaio al carbonio, inox e leghe speciali su richiesta.',
    placeholder: 'Raccordi forgiati',
  },
  'valvola-sfera': {
    name: 'Valvole a sfera',
    description:
      'Monoblocco, split body, tre pezzi, wafer e trunnion, con attuazione manuale o pneumatica. Gamma da stock e su specifica.',
    placeholder: 'Valvola a sfera',
  },
  'valvola-farfalla': {
    name: 'Valvole a farfalla',
    description:
      'Wafer e lug con tenuta in elastomero o PTFE, leva o riduttore. Intercettazione su grandi diametri e linee di processo.',
    placeholder: 'Valvola a farfalla',
  },
  'valvola-maschio': {
    name: 'Valvole a maschio',
    description:
      'Due o più vie, passaggio pieno, con camicia di riscaldamento e versioni di regolazione. Estremità flangiate, GAS, NPT, SW e BW.',
    placeholder: 'Valvola a maschio',
  },
  'valvola-ritegno': {
    name: 'Valvole di ritegno',
    description:
      'A battente, wafer e verticali a sfera, per prevenire il reflusso su linee di processo e utility.',
    placeholder: 'Valvola di ritegno',
  },
  'valvola-slide': {
    name: 'Sliding valve',
    description:
      'Valvole a saracinesca scorrevole per intercettazione su linee di grosso diametro e servizi gravosi.',
    placeholder: 'Sliding valve',
  },
  'valvola-gate': {
    name: 'Valvole a saracinesca',
    description:
      'Gate valve flangiate per apertura/chiusura su piping industriale, in ghisa e acciaio.',
    placeholder: 'Valvola gate',
  },
  'valvola-globo': {
    name: 'Valvole a globo',
    description:
      'Globe valve per regolazione e intercettazione, anche in versione socket weld per linee di piccolo diametro.',
    placeholder: 'Valvola a globo',
  },
  'attacchi-las': {
    name: 'Attacchi LAS / camlock',
    description:
      'Innesti rapidi in AISI 316 per linee aria, acqua e fluidi di processo: flangiati, portagomma e tappi di protezione.',
    placeholder: 'Attacchi LAS',
  },
  'paddle-blinds': {
    name: 'Paddle blind',
    description:
      'Dischi ciechi a pala per isolamento di linea, realizzati su misura in officina. Stub end e flange LT/LG su richiesta.',
    placeholder: 'Paddle blind',
  },
  'arredo-inox': {
    name: 'Arredo tecnico inox',
    description:
      'Banchi, armadi, carrelli e lavelli su misura per farmaceutica, cosmetica e biomedicale, con attenzione a igiene e pulibilità.',
    placeholder: 'Arredo inox',
  },
}

export const aboutGallery = [
  {
    src: asset('images/about-valvole.jpg'),
    alt: 'Valvole industriali a sfera con attuazione manuale',
    caption: 'Valvole',
    description: 'Gamma da stock e su specifica, con service di revisione e collaudo.',
  },
  {
    src: asset('images/about-tubi.jpg'),
    alt: 'Tubi in acciaio inox lucidati pronti per la fornitura',
    caption: 'Tubi e raccordi',
    description: 'Inox, carbonio e leghe speciali, anche in pacchetti su distinta.',
  },
  {
    src: asset('images/about-flange.jpg'),
    alt: 'Flange industriali in acciaio',
    caption: 'Flange e accessori',
    description: 'EN 1092, ANSI e realizzazioni su misura per il vostro impianto.',
  },
]

export const services = [
  {
    id: 'pacchetti-piping',
    title: 'Pacchetti piping',
    description:
      'Fornitura di pacchetti personalizzati di piping per la costruzione e il ricondizionamento di impianti chimici e petrolchimici: valvole, tubi, flange e raccordi coordinati in un’unica commessa.',
    highlights: ['Kit su distinta', 'Tracciabilità lotti', 'Consegne programmate'],
  },
  {
    id: 'service-valvole',
    title: 'Service valvole',
    description:
      'Riparazione, revisione e taratura di valvole di sicurezza e di controllo al banco, con report di collaudo e collaudi presenziati INAIL.',
    highlights: ['Prove al banco', 'Collaudi INAIL', 'Documentazione di collaudo'],
    featured: true,
  },
  {
    id: 'realizzazioni',
    title: 'Realizzazioni su misura',
    description:
      'Lavorazioni meccaniche di tornitura e fresatura per piccoli componenti: flange di misura, stub end, attacchi LAS e pezzi a disegno.',
    highlights: ['Flange di misura', 'Stub end', 'Attacchi LAS'],
  },
  {
    id: 'magazzino-consegne',
    title: 'Magazzino e consegne',
    description:
      'Ampio magazzino di valvole, tubi, flange e raccordi. Consegne con mezzi propri o corrieri convenzionati, anche in urgenza di manutenzione.',
    highlights: ['Stock a magazzino', 'Spedizioni nazionali', 'Sopralluoghi tecnici'],
  },
]

export const companyStats = [
  { label: 'Fondazione', value: '1986' },
  { label: 'Esperienza', value: '40 anni' },
  { label: 'Settori serviti', value: '9' },
]

export const audiences = [
  {
    id: 'aziende',
    name: 'Aziende industriali',
    description: 'Fornitura coordinata per impianti di processo e continuità di esercizio.',
  },
  {
    id: 'acquisti',
    name: 'Uffici acquisti',
    description: 'Listini, alternative e tempi di consegna in un unico canale.',
  },
  {
    id: 'manutenzione',
    name: 'Responsabili manutenzione',
    description: 'Stock e urgenze per ridurre i fermi impianto.',
  },
  {
    id: 'ingegneri',
    name: 'Ingegneri e progettisti',
    description: 'Materiali, norme e schede tecniche per la specifica di linea.',
  },
  {
    id: 'epc',
    name: 'EPC contractor',
    description: 'Pacchetti su distinta e consegne coordinate in cantiere.',
  },
  {
    id: 'distributori',
    name: 'Distributori tecnici',
    description: 'Gamma valvole e piping per il riordino B2B.',
  },
]

export const strengths = [
  {
    id: 'reperibilita',
    title: 'Reperibilità',
    description: 'Magazzino su valvole, tubi, flange e raccordi per risposte rapide.',
  },
  {
    id: 'documentazione',
    title: 'Documentazione',
    description: 'Tracciabilità lotti, schede e collaudi quando il servizio lo richiede.',
  },
  {
    id: 'partner',
    title: 'Partner selezionati',
    description: 'Rete di produttori di riferimento, tra cui 4G Ghidini, AZ Armaturen e Zema.',
  },
  {
    id: 'preventivo',
    title: 'Preventivo rapido',
    description: 'Canale diretto con Riccardo per distinte, specifiche e alternative.',
  },
]

export const timeline = [
  {
    year: '1986',
    title: 'Fondazione',
    description:
      'Nasce Arteco — Articoli Tecnico Commerciali — per la fornitura di valvole e pacchetti completi di componenti piping.',
  },
  {
    year: 'Magazzino',
    title: 'Gamma piping a stock',
    description:
      'Tubi, flange, raccordi e valvole in ferro, acciaio inox, alloy, duplex e superduplex, anche di tipo alimentare.',
  },
  {
    year: 'Service',
    title: 'Revisione valvole',
    description:
      'Revisione, taratura e collaudo valvole di sicurezza, con prove al banco, report e collaudi presenziati INAIL.',
  },
]

export const companyValues = [
  {
    name: 'Precisione',
    description: 'Componenti e distinte allineati alla specifica di impianto.',
  },
  {
    name: 'Tempestività',
    description: 'Risposte rapide su disponibilità, alternative e urgenze di manutenzione.',
  },
  {
    name: 'Trasparenza',
    description: 'Documentazione e tracciabilità su ogni riga d’ordine.',
  },
  {
    name: 'Sicurezza',
    description: 'Attenzione a collaudi, valvole PSV e contesti regolamentati.',
  },
]

export const testimonials = [
  {
    id: 'qualita',
    name: 'Qualità',
    company: 'Arteco S.r.l.',
    quote:
      'Qualità è soddisfare le necessità del cliente e superare le sue stesse aspettative, continuando a migliorarsi.',
  },
  {
    id: 'partner',
    name: 'Affiancamento',
    company: 'Arteco S.r.l.',
    quote:
      'Professionalità, affidabilità e tempestività: le basi per un servizio puntuale, con un interlocutore unico su valvole e piping.',
  },
  {
    id: 'cliente',
    name: 'Orientamento al cliente',
    company: 'Arteco S.r.l.',
    quote: 'A satisfied customer is the best business strategy of all.',
  },
]

export const copy = {
  hero: {
    kicker: 'Valvole · Piping · Service',
    title: 'Valvole e pacchetti piping per impianti industriali',
    lead: 'Fornitura di valvole e componenti piping in acciaio inox, carbonio e leghe speciali. Pacchetti su distinta, magazzino e service di revisione valvole di sicurezza.',
    ctaProducts: 'Esplora prodotti',
    ctaQuote: 'Richiedi preventivo',
    imageAlt: 'Valvole e piping su impianto industriale',
    imageSrc: asset('images/hero.jpg'),
  },
  about: {
    kicker: 'Chi siamo',
    title: 'Articoli tecnico commerciali',
    p1: 'Arteco S.r.l. — Articoli Tecnico Commerciali — nasce nel 1986 con la mission di supportare i clienti nella fornitura di valvole e pacchetti completi di componenti piping.',
    p2Before: 'Per un funzionamento efficiente e affidabile dei sistemi di tubazioni è essenziale che i componenti siano di ',
    p2Strong: 'alta qualità',
    p2After:
      '. Nel corso degli anni Arteco si è fatta apprezzare per professionalità, qualità, affidabilità e tempestività.',
    p3: 'Capacità di affiancamento e risposte concrete hanno fatto di Arteco un partner per i poli chimici, farmaceutici, petrolchimici ed energetici. Accanto alla commercializzazione, è consolidata l’attività di service valvole: revisione, taratura e collaudo delle valvole di sicurezza.',
    statsNote: '',
    imageAlt: 'Magazzino con tubi, flange e componenti piping a stock',
    imageSrc: asset('images/about.jpg'),
  },
  homeAbout: {
    kicker: 'L’azienda',
    title: 'Un interlocutore unico tra specifica e fornitura',
  },
  sectors: {
    kicker: 'Applicazioni',
    title: 'Dall’oil & gas al farmaceutico',
    lead: 'Stessi standard di fornitura, contesti d’impianto diversi.',
    viewAll: 'Vedi tutti i settori',
  },
  products: {
    kicker: 'Prodotti',
    title: 'Sei famiglie, una sola fornitura',
    lead: 'Dalla valvola al tubo, fino all’arredo tecnico inox. Ogni categoria ha una scheda dedicata.',
    categoriesLabel: 'Categorie prodotto',
    material: 'Materiale',
    norm: 'Normativa',
    viewAll: 'Vedi tutti i prodotti',
    discover: 'Scopri',
    breadcrumbHome: 'Home',
    breadcrumbProducts: 'Prodotti',
    specsTitle: 'Specifiche',
    subtypesTitle: 'Sotto-tipologie',
    rangeTitle: 'Gamma',
    askAvailability: 'Chiedi disponibilità',
    indexLead:
      'Navigate per famiglia. Per schede PDF e valori vincolanti rivolgetevi al referente commerciale.',
  },
  target: {
    kicker: 'A chi ci rivolgiamo',
    title: 'Pensato per chi compra e per chi fa funzionare l’impianto',
    lead: 'Decision maker e tecnici che gestiscono approvvigionamenti, progetto e manutenzione.',
  },
  strengths: {
    kicker: 'Perché Arteco',
    title: 'Affidabilità che si misura in risposte, non in slogan',
  },
  timeline: {
    kicker: 'Storia',
    title: 'Dalla fondazione a oggi',
    lead: 'Articoli tecnico commerciali dal 1986, con sede a Nerviano alle porte di Milano.',
  },
  mission: {
    kicker: 'Mission',
    title: 'Il ruolo che copriamo',
    text: 'Rendere prevedibile l’approvvigionamento di componenti critici, con tracciabilità e supporto tecnico tra produttore, magazzino e impianto.',
  },
  values: {
    kicker: 'Valori',
    title: 'Come lavoriamo',
  },
  cta: {
    title: 'Avete una distinta o una specifica da caricare?',
    lead: 'Inviate il materiale all’ufficio acquisti: vi ricontattiamo con disponibilità e alternative.',
    mail: 'Scrivi a Riccardo',
    form: 'Apri il form',
    quote: 'Richiedi preventivo',
  },
  services: {
    kicker: 'Servizi',
    title: 'Oltre la fornitura',
    lead: 'Pacchetti piping, service valvole con collaudi INAIL e lavorazioni su misura.',
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
    disclaimer:
      'Le etichette PED, ATEX e FDA sono indicative. Per claim legali e certificazioni ufficiali contattare il referente commerciale.',
  },
  testimonials: {
    kicker: 'Principi',
    title: 'Come lavoriamo',
  },
  contact: {
    kicker: 'Preventivi',
    title: 'Parliamo della vostra distinta',
    lead: 'Compilate il modulo o scrivete a buyer@artecovalvole.it. Referente: Riccardo.',
    name: 'Nome e cognome',
    namePlaceholder: 'Es. Mario Rossi',
    company: 'Azienda',
    companyPlaceholder: 'Es. Industria S.p.A.',
    email: 'Email',
    emailPlaceholder: 'nome@azienda.it',
    phone: 'Telefono',
    phonePlaceholder: '+39 ...',
    role: 'Ruolo',
    rolePlaceholder: 'Seleziona',
    product: 'Categoria di interesse',
    productPlaceholder: 'Seleziona',
    message: 'Messaggio / distinta',
    messagePlaceholder: 'Descrivete quantità, materiali, normative e tempi di consegna...',
    file: 'Allegato (PDF, Excel, Word)',
    fileHint: 'Facoltativo, max 2 MB.',
    fileTooBig: 'L’allegato supera i 2 MB. Riducete il file o inviatelo via email.',
    submit: 'Invia richiesta',
    sending: 'Invio in corso…',
    sentTitle: 'Richiesta inviata',
    sentBody: (name) =>
      `Grazie ${name}. Abbiamo registrato la vostra richiesta: Riccardo vi contatterà a breve all’indirizzo indicato.`,
    sendAnother: 'Invia un’altra richiesta',
    errorBody:
      'Non siamo riusciti a inviare la richiesta. Riprovate tra qualche minuto o contattateci direttamente via email.',
    missingKey:
      'Il modulo non è ancora configurato. Contattateci direttamente via email indicata a lato.',
    address: 'Sede',
    phones: 'Telefono',
    fax: 'Fax',
    mapTitle: 'Sede Arteco S.r.l. — Via Bergamina 36, Nerviano',
    mapLoad: 'Carica mappa Google',
    mapPrivacy:
      'La mappa è un servizio di Google: viene caricata solo dopo questo clic, per non installare cookie di terze parti in automatico.',
    privacyConsentBefore: 'Ho letto l’',
    privacyConsentLink: 'informativa privacy',
    privacyConsentAfter: ' e acconsento al trattamento dei dati per ricevere riscontro alla richiesta.',
    privacyRequired: 'Per inviare la richiesta è necessario accettare l’informativa privacy.',
  },
  footer: {
    blurb: 'Valvole e componenti piping per impianti industriali. Fornitura B2B con service valvole e supporto tecnico.',
    legal: 'Informazioni',
    privacy: 'Privacy',
    cookie: 'Cookie policy',
    legalNotice: 'Note legali',
    contacts: 'Contatti',
    rights: 'Tutti i diritti riservati.',
  },
}

export const legalLinks = [
  { href: '/privacy', label: copy.footer.privacy },
  { href: '/cookie', label: copy.footer.cookie },
  { href: '/note-legali', label: copy.footer.legalNotice },
]

export const quoteRoles = ['Acquisti', 'Manutenzione', 'Progettazione', 'Altro']

export const quoteProductOptions = [
  'Tubi',
  'Flange',
  'Raccordi',
  'Valvole',
  'Valvole a sfera',
  'Valvole a farfalla',
  'Valvole a maschio',
  'Accessori',
  'Arredo inox',
  'Pacchetto piping',
  'Service valvole / PSV',
  'Altro',
]
