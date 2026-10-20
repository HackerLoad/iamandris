import type { RouteKey } from './routes'

export const de = {
  nav: {
    menu: 'MENU',
    close: 'SCHLIESSEN',
    openAria: 'Menü öffnen',
    closeAria: 'Menü schließen',
    langToDe: 'Sprache: Deutsch',
    langToEn: 'Sprache wechseln: English',
    themeToLight: 'Farbschema wechseln: Light',
    themeToDark: 'Farbschema wechseln: Dark',
  },
  menu: {
    aria: 'Hauptmenü',
    current: 'AKTUELL',
    github: 'GITHUB',
    linkedin: 'LINKEDIN',
    mail: 'MAIL',
    city: 'GERA',
  },
  pages: {
    home: { name: 'HOME', title: 'Home' },
    projects: { name: 'PROJEKTE', title: 'Projekte' },
    about: { name: 'ÜBER MICH', title: 'Über mich' },
    contact: { name: 'KONTAKT', title: 'Kontakt' },
  } as Record<RouteKey, { name: string; title: string }>,
  landing: {
    meta1: 'PORTFOLIO — 2026',
    meta2: 'GERA, DE',
    meta3: 'VERFÜGBAR FÜR PROJEKTE',
    headline: ['WILLKOMMEN.'],
    intro:
      'Schön, dass du hier bist. Schau dich in Ruhe um.',
    ctaProjects: 'PROJEKTE ANSEHEN',
    ctaContact: 'KONTAKT AUFNEHMEN',
    scroll: 'WEITER',
  },
  about: {
    portrait: 'PORTRAIT',
    text: [
      'Ich bin 21, studiere und bin gerade in Gera. Eigentlich komme ich aus Thüringen, deshalb gefällt mir der Kleinstadt-Flair hier.',
      'Angefangen hat alles mit 12: Ich war Admin auf einem Minecraft-Server und habe mir die Plugins, die ich brauchte, einfach selbst geschrieben. Danach kamen Websites für Dinge, die ich auf RP-Servern angeboten habe. Der Name HackerLoad ist mein Gamertag von damals und ist bis heute geblieben.',
      'Inzwischen baue ich meistens Lösungen für kleine Probleme aus meinem Alltag, statt dafür zu bezahlen. Aktuell arbeite ich an der cornerGuider-App. Neben dem Code spiele ich Gitarre und Klavier, gehe ab und zu ins Gym und höre ziemlich alles an Musik. Diese Seite ist mehr Werkstatt als Bewerbungsmappe.',
    ],
    facts: [
      { k: 'ALTER', v: '21' },
      { k: 'ORT', v: 'GERA / THÜRINGEN' },
      { k: 'STATUS', v: 'STUDENT' },
      { k: 'GITHUB', v: 'HACKERLOAD' },
    ],
    contact: 'KONTAKT AUFNEHMEN',
  },
  contact: {
    sub: 'Schreib mir einfach.',
    rows: [
      { k: 'MAIL', v: 'CONTACT@IAMANDRIS.ONLINE' },
      { k: 'GITHUB', v: 'GITHUB.COM/HACKERLOAD' },
      { k: 'LINKEDIN', v: 'PLATZHALTER' },
    ],
  },
  footer: {
    rights: 'ALLE RECHTE VORBEHALTEN',
    privacy: 'DATENSCHUTZ',
    imprint: 'IMPRESSUM',
  },
  legal: {
    draftPrivacy: '',
    draft: 'ENTWURF — Angaben in [ECKIGEN KLAMMERN] sind noch auszufüllen.',
    privacyTitle: 'DATENSCHUTZ',
    privacy: [
      {
        h: '1 — DATENSCHUTZ AUF EINEN BLICK: ALLGEMEINE HINWEISE',
        p: [
          'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
        ],
      },
      {
        h: '1 — DATENERFASSUNG AUF DIESER WEBSITE',
        p: [
          'Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.',
          'Wie erfassen wir Ihre Daten? Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. wenn Sie mir eine E-Mail schreiben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
          'Wofür nutzen wir Ihre Daten? Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
          'Welche Rechte haben Sie bezüglich Ihrer Daten? Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.',
        ],
      },
      {
        h: '2 — HOSTING',
        p: [
          'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:',
          'Externes Hosting: Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.',
          'Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.',
          'Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.',
          'Wir setzen folgende(n) Hoster ein: Maxim Andris, Platanenstraße 9, 07549 Gera',
        ],
      },
      {
        h: '3 — DATENSCHUTZ',
        p: [
          'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
          'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.',
          'Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
        ],
      },
      {
        h: '3 — HINWEIS ZUR VERANTWORTLICHEN STELLE',
        p: [
          'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
          'Maxim Andris, Platanenstraße 9, 07549 Gera. Telefon: 0176 72768237. E-Mail: contact@iamandris.online',
          'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',
        ],
      },
      {
        h: '3 — SPEICHERDAUER',
        p: [
          'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.',
        ],
      },
      {
        h: '3 — RECHTSGRUNDLAGEN DER DATENVERARBEITUNG',
        p: [
          'Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.',
        ],
      },
      {
        h: '3 — EMPFÄNGER VON PERSONENBEZOGENEN DATEN',
        p: [
          'Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.',
        ],
      },
      {
        h: '3 — WIDERRUF IHRER EINWILLIGUNG',
        p: [
          'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
        ],
      },
      {
        h: '3 — WIDERSPRUCHSRECHT (ART. 21 DSGVO)',
        p: [
          'WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).',
          'WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).',
        ],
      },
      {
        h: '3 — BESCHWERDERECHT BEI DER AUFSICHTSBEHÖRDE',
        p: [
          'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',
        ],
      },
      {
        h: '3 — RECHT AUF DATENÜBERTRAGBARKEIT',
        p: [
          'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
        ],
      },
      {
        h: '3 — AUSKUNFT, BERICHTIGUNG UND LÖSCHUNG',
        p: [
          'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.',
        ],
      },
      {
        h: '3 — RECHT AUF EINSCHRÄNKUNG DER VERARBEITUNG',
        p: [
          'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:',
          '— Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
          '— Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.',
          '— Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
          '— Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
          'Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.',
        ],
      },
      {
        h: '3 — SSL- BZW. TLS-VERSCHLÜSSELUNG',
        p: [
          'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
          'Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.',
        ],
      },
      {
        h: '4 — SERVER-LOG-DATEIEN',
        p: [
          'Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:',
          '— Browsertyp und Browserversion',
          '— verwendetes Betriebssystem',
          '— Referrer URL',
          '— Hostname des zugreifenden Rechners',
          '— Uhrzeit der Serveranfrage',
          '— IP-Adresse',
          'Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.',
        ],
      },
      {
        h: '4 — ANFRAGE PER E-MAIL, TELEFON ODER TELEFAX',
        p: [
          'Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
          'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.',
          'Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.',
        ],
      },
      {
        h: '4 — LOKALER SPEICHER (LOCALSTORAGE)',
        p: [
          'Sprache und Farbschema (hell oder dunkel) werden im localStorage Ihres Browsers gespeichert, damit sie beim nächsten Besuch erhalten bleiben. Die Daten bleiben auf Ihrem Gerät und werden nicht an uns übertragen. Es werden keine Cookies gesetzt.',
        ],
      },
      {
        h: '5 — PLUGINS, TOOLS UND EXTERNE LINKS',
        p: [
          'Diese Seite lädt keine Schriften, Icons, Analyse- oder sonstigen Tools von Drittanbietern. Sie verlinkt auf GitHub und LinkedIn. Erst wenn Sie einen Link anklicken, gelten die Datenschutzbestimmungen des jeweiligen Anbieters.',
        ],
      },
    ],
    imprintTitle: 'IMPRESSUM',
    imprint: [
      { h: 'ANGABEN GEMÄSS § 5 DDG', p: '[VOLLSTÄNDIGER NAME], [STRASSE HAUSNUMMER], [PLZ ORT]' },
      { h: 'KONTAKT', p: 'E-Mail: contact@iamandris.online' },
    ],
  },
  showcase: {
    s01: 'TYPOGRAFIE',
    s02: 'BUTTONS & CTA',
    s03: 'BENTO',
    s04: 'BILDER',
    s05: 'FORMULAR',
    s06: 'LISTE',
    s07: 'TAGS & STATUS',
    s08: 'TOKENS',
    leadTag: 'AUSWAHL',
    lead: 'Meine Projekte',
    body1:
      'Fließtext steht in Helvetica, 16 Pixel, Zeilenhöhe 1,35. Er ist direkt, ohne Schnörkel und mit klaren Zeilenlängen. Links sind unterstrichen und kehren beim Hover sofort um.',
    body2:
      'Überschriften sind Display: fett, versal, eng gesetzt. Alles Technische steht als Label in eckigen Klammern. Nichts ist dekoriert, alles hat eine Funktion.',
    quote: 'Ein gut gebautes Werkzeug muss nicht hübsch sein. Es muss stimmen.',
    listA: 'Zellen statt Karten',
    listB: 'Linien statt Schatten',
    listC: 'Stufen statt Kurven',
    btnPrimary: 'Projekt ansehen',
    btnSecondary: 'Mehr erfahren',
    btnAccent: 'Anfrage senden',
    btnDisabled: 'Nicht verfügbar',
    ctaTitle: 'Projekt im Kopf?',
    ctaBtn: 'KONTAKT AUFNEHMEN',
    bentoTitle: 'Ausgewählte Arbeiten 2020–2026',
    bentoText: 'Web, Tools und Experimente. Gebaut mit React, TypeScript und reinem CSS.',
    bentoStat: 'PROJEKTE',
    bentoStack: 'STACK',
    bentoStatus: 'STATUS',
    available: 'VERFÜGBAR',
    figCaption: 'ABB.',
    formName: 'NAME',
    formMail: 'E-MAIL',
    formMsg: 'NACHRICHT',
    formSend: 'ABSENDEN',
    formHint: 'Pflichtfeld',
    projects: [
      { name: 'cornerGuider', tags: ['APP', 'TYPESCRIPT', 'GPX'], year: '2026', url: 'https://github.com/HackerLoad/cornerGuider' },
      { name: 'touchBarText', tags: ['MACOS', 'SWIFT', 'TOOL'], year: '2026', url: 'https://github.com/HackerLoad/touchBarText' },
      { name: 'walletStalker', tags: ['BOT', 'PYTHON', 'SOLANA'], year: '2026', url: 'https://github.com/HackerLoad/walletStalker' },
    ],
    prev: 'ZURÜCK',
    next: 'VOR',
    carouselAria: 'Projekte',
    projectAria: 'Projekt öffnen',
    tags: ['WEB', 'TOOL', 'EXPERIMENT'],
  },
}

export type Dict = typeof de
