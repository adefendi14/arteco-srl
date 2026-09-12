import { company } from './data'

export const legalUpdatedAt = '12 settembre 2026'

const site = `${company.name} — ${company.tagline}`
const fullAddress = `${company.address}, ${company.city}`

export const legalPages = {
  privacy: {
    kicker: 'Privacy',
    title: 'Informativa privacy',
    lead: 'Come trattiamo i dati personali di chi visita il sito o ci scrive dal modulo contatti.',
    sections: [
      {
        heading: 'Premessa',
        blocks: [
          {
            type: 'p',
            text: `Questa informativa descrive il trattamento dei dati personali effettuato da ${company.name} attraverso il sito ${site}, ai sensi del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.`,
          },
        ],
      },
      {
        heading: 'Titolare del trattamento',
        blocks: [
          {
            type: 'p',
            text: `Titolare del trattamento è ${company.name}, con sede in ${fullAddress}.`,
          },
          {
            type: 'ul',
            items: [
              `Email commerciale: ${company.email}`,
              `Email: ${company.emailInfo}`,
              `Telefono: ${company.phone} · ${company.phoneAlt}`,
              `PEC: ${company.pec}`,
              company.vat,
            ],
          },
          {
            type: 'p',
            text: 'Per questioni relative ai dati personali potete scrivere all’indirizzo email indicato. Al momento non è stato nominato un Responsabile della protezione dei dati (DPO).',
          },
        ],
      },
      {
        heading: 'Dati trattati',
        blocks: [
          {
            type: 'p',
            text: 'Trattiamo solo i dati necessari a far funzionare il sito e a rispondere alle richieste commerciali B2B.',
          },
          {
            type: 'ul',
            items: [
              'Dati identificativi e di contatto inseriti nel modulo: nome e cognome, azienda, email, telefono, ruolo, prodotto o servizio di interesse, messaggio ed eventuale allegato (distinta o specifica).',
              'Dati di navigazione di tipo tecnico (indirizzo IP, data e ora della richiesta, tipo di browser) eventualmente registrati nei log del fornitore di hosting, per sicurezza e funzionamento del sito.',
              'Dati tecnici scambiati con Google Fonts per il caricamento dei caratteri tipografici.',
              'Se scegliete di caricare la mappa nella pagina Contatti, dati di connessione verso Google Maps.',
            ],
          },
          {
            type: 'p',
            text: 'Non raccogliamo categorie particolari di dati (art. 9 GDPR) e non utilizziamo i dati per profilazione o marketing automatizzato.',
          },
        ],
      },
      {
        heading: 'Finalità e basi giuridiche',
        blocks: [
          {
            type: 'ul',
            items: [
              'Rispondere a richieste di informazioni, preventivi e contatto commerciale: esecuzione di misure precontrattuali su vostra richiesta (art. 6, par. 1, lett. b GDPR) e consenso espresso tramite checkbox del modulo (art. 6, par. 1, lett. a GDPR).',
              'Adempimenti contabili, fiscali o di legge eventualmente successivi a un rapporto commerciale: obbligo legale (art. 6, par. 1, lett. c GDPR).',
              'Funzionamento, sicurezza e manutenzione del sito: legittimo interesse (art. 6, par. 1, lett. f GDPR).',
            ],
          },
        ],
      },
      {
        heading: 'Conferimento',
        blocks: [
          {
            type: 'p',
            text: 'I campi obbligatori del modulo sono necessari per evadere la richiesta. Senza quelli, e senza il consenso privacy, il messaggio non viene inviato. Il telefono è facoltativo.',
          },
        ],
      },
      {
        heading: 'Modalità e durata',
        blocks: [
          {
            type: 'p',
            text: 'I dati sono trattati con strumenti elettronici, con misure adeguate a limitare accessi indebiti. Le richieste inviate dal modulo sono conservate per il tempo necessario a dare riscontro e a gestire l’eventuale seguito commerciale, e comunque non oltre 24 mesi dall’ultimo contatto utile, salvo obblighi di legge più lunghi.',
          },
        ],
      },
      {
        heading: 'Destinatari',
        blocks: [
          {
            type: 'p',
            text: 'I dati possono essere conosciuti dal personale autorizzato di Arteco e, nei limiti di quanto necessario, da:',
          },
          {
            type: 'ul',
            items: [
              'Web3Forms, che riceve il contenuto del modulo per recapitarlo via email al titolare.',
              'Il fornitore di hosting del sito, per la pubblicazione delle pagine e i log tecnici.',
              'Google (font e, solo su vostra azione, mappe), come descritto di seguito.',
            ],
          },
          {
            type: 'p',
            text: 'I dati del modulo non sono diffusi né ceduti a terzi per finalità di marketing.',
          },
        ],
      },
      {
        heading: 'Trasferimenti extra-UE',
        blocks: [
          {
            type: 'p',
            text: 'Alcuni fornitori (in particolare Google e il servizio di invio del modulo) possono trattare dati anche fuori dallo Spazio economico europeo. In quel caso il trasferimento avviene, ove applicabile, sulla base delle Clausole contrattuali standard della Commissione europea o di altre garanzie previste dal GDPR.',
          },
        ],
      },
      {
        heading: 'Diritti degli interessati',
        blocks: [
          {
            type: 'p',
            text: 'Potete chiedere al titolare accesso, rettifica, cancellazione, limitazione, opposizione e, ove applicabile, portabilità dei dati, oltre alla revoca del consenso (senza pregiudicare i trattamenti già svolti). Avete inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).',
          },
        ],
      },
      {
        heading: 'Cookie e tracciamento',
        blocks: [
          {
            type: 'p',
            parts: [
              { text: 'Il sito non usa Google Analytics né cookie di profilazione. Dettagli e terze parti sono nella ' },
              { text: 'Cookie policy', to: '/cookie' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        heading: 'Modifiche',
        blocks: [
          {
            type: 'p',
            text: `Questa informativa può essere aggiornata in caso di nuove funzionalità (per esempio Analytics) o di dati societari definitivi. Data dell’ultimo aggiornamento: ${legalUpdatedAt}.`,
          },
        ],
      },
    ],
  },

  cookie: {
    kicker: 'Cookie',
    title: 'Cookie policy',
    lead: 'Quali cookie e servizi di terze parti usa questo sito, e come gestirli.',
    sections: [
      {
        heading: 'Premessa',
        blocks: [
          {
            type: 'notice',
            text: 'Niente banner: sul sito non è attivo alcun cookie di profilazione o Analytics. La policy va aggiornata se si aggiungono tracker.',
          },
          {
            type: 'p',
            parts: [
              { text: `Questa policy integra l’` },
              { text: 'informativa privacy', to: '/privacy' },
              { text: ` di ${company.name} e spiega l’uso di cookie e strumenti analoghi.` },
            ],
          },
        ],
      },
      {
        heading: 'Cosa sono i cookie',
        blocks: [
          {
            type: 'p',
            text: 'I cookie sono piccoli file che un sito può salvare sul dispositivo. Possono essere tecnici (necessari al funzionamento) oppure di analisi, profilazione o marketing. Strumenti simili (local storage, pixel, script di terze parti) sono trattati allo stesso modo quando tracciano l’utente.',
          },
        ],
      },
      {
        heading: 'Cosa fa questo sito oggi',
        blocks: [
          {
            type: 'p',
            text: 'Non installiamo cookie di Analytics, pubblicità o profilazione. Non è quindi presente un banner di consenso per il tracciamento. Quando (e se) verrà attivato Google Analytics o uno strumento analogo, gli script partiranno solo dopo il consenso e questa pagina sarà aggiornata.',
          },
          {
            type: 'ul',
            items: [
              'Cookie tecnici: eventuali cookie strettamente necessari al funzionamento o alla sicurezza, gestiti dal browser o dall’hosting. Non richiedono consenso.',
              'Nessun cookie di prima parte per statistiche o marketing.',
            ],
          },
        ],
      },
      {
        heading: 'Servizi di terze parti',
        blocks: [
          {
            type: 'p',
            text: 'Alcune funzioni passano da soggetti esterni. Non sono “cookie Arteco”, ma possono comunque trattare l’indirizzo IP o, in certi casi, impostare cookie propri.',
          },
          {
            type: 'ul',
            items: [
              'Google Fonts: i caratteri del sito sono caricati da Google. Avviene una connessione tecnica (di solito senza cookie di tracciamento). Dettagli nella privacy di Google.',
              'Google Maps: nella pagina Contatti la mappa non parte in automatico. Viene caricata solo se scegliete “Carica mappa Google”; da quel momento Google può usare cookie e dati di connessione.',
              'Web3Forms: riceve i dati del modulo per recapitarli via email. Non installa cookie di marketing sul sito Arteco.',
            ],
          },
        ],
      },
      {
        heading: 'Come gestirli dal browser',
        blocks: [
          {
            type: 'p',
            text: 'Potete bloccare o cancellare i cookie dalle impostazioni del browser (Chrome, Safari, Firefox, Edge). Il blocco totale può limitare qualche funzione, in particolare la mappa se l’avete caricata.',
          },
        ],
      },
      {
        heading: 'Aggiornamenti',
        blocks: [
          {
            type: 'p',
            text: `Data dell’ultimo aggiornamento: ${legalUpdatedAt}.`,
          },
        ],
      },
    ],
  },

  legalNotice: {
    kicker: 'Note legali',
    title: 'Note legali',
    lead: 'Dati della società, condizioni d’uso del sito e limiti di responsabilità.',
    sections: [
      {
        heading: 'Titolare del sito',
        blocks: [
          {
            type: 'ul',
            items: [
              `Ragione sociale: ${company.name}`,
              `Sede: ${fullAddress}`,
              company.vat,
              `REA: ${company.rea}`,
              `PEC: ${company.pec}`,
              `Capitale sociale: ${company.shareCapital}`,
              `Email commerciale: ${company.email}`,
              `Email: ${company.emailInfo}`,
              `Telefono: ${company.phone} · ${company.phoneAlt}`,
              `Fax: ${company.fax}`,
              `Referente commerciale indicato sul sito: ${company.referent}`,
            ],
          },
        ],
      },
      {
        heading: 'Oggetto del sito',
        blocks: [
          {
            type: 'p',
            text: 'Il sito presenta l’attività B2B di Arteco nel settore valvole, componenti piping e servizi correlati. I contenuti hanno scopo informativo e commerciale. Le richieste inviate dal modulo non costituiscono ordine, contratto o preventivo vincolante finché non confermati per iscritto da Arteco.',
          },
        ],
      },
      {
        heading: 'Proprietà intellettuale',
        blocks: [
          {
            type: 'p',
            text: `Testi, marchi, layout, loghi e materiali grafici sono di ${company.name} o dei rispettivi titolari (partner e produttori citati). È vietata la riproduzione, anche parziale, senza autorizzazione scritta, salvo quanto consentito dalla legge sul diritto d’autore.`,
          },
        ],
      },
      {
        heading: 'Prodotti, immagini e certificazioni',
        blocks: [
          {
            type: 'p',
            text: 'Descrizioni, immagini e riferimenti a norme o etichette (PED, ATEX, FDA e simili) sono indicativi. Non sostituiscono schede tecniche, dichiarazioni di conformità né la verifica dei requisiti del vostro impianto. Per claim vincolanti rivolgersi al referente commerciale.',
          },
        ],
      },
      {
        heading: 'Limitazione di responsabilità',
        blocks: [
          {
            type: 'p',
            text: 'Arteco si impegna a tenere il sito aggiornato, ma non garantisce che le informazioni siano sempre complete, aggiornate o prive di errori. Non risponde di interruzioni del servizio, di contenuti di siti terzi collegati né dell’uso che visitatori o terzi fanno delle informazioni pubblicate, nei limiti ammessi dalla legge.',
          },
        ],
      },
      {
        heading: 'Link esterni',
        blocks: [
          {
            type: 'p',
            text: 'Eventuali collegamenti a siti di terzi (mappe, partner, produttori) sono forniti per comodità. Arteco non controlla né è responsabile delle relative policy o contenuti.',
          },
        ],
      },
      {
        heading: 'Privacy',
        blocks: [
          {
            type: 'p',
            parts: [
              { text: 'Il trattamento dei dati è descritto nell’' },
              { text: 'informativa privacy', to: '/privacy' },
              { text: ' e nella ' },
              { text: 'Cookie policy', to: '/cookie' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        heading: 'Legge applicabile',
        blocks: [
          {
            type: 'p',
            text: `Per l’uso del sito si applica la legge italiana. Foro competente, ove ammesso, è quello della sede del titolare. Data dell’ultimo aggiornamento: ${legalUpdatedAt}.`,
          },
        ],
      },
    ],
  },
}

export function getLegalPage(slug) {
  return legalPages[slug]
}
