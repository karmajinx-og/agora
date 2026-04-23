/**
 * UI strings (nav, home filters, footers) for main EU languages.
 * The long "How it works" article stays in English for now; see `about_stays_en` when locale !== en.
 * Native review welcome for de/fr/es/it/pl.
 */

export const LOCALES = ['en', 'de', 'fr', 'es', 'it', 'pl'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'

export type UiStrings = {
  logo_tag: string
  nav_office: string
  nav_dev: string
  nav_graphics: string
  nav_network: string
  nav_how: string
  foot_line1: string
  foot_new: string
  foot_sub: string
  foot_github: string
  foot_flathub: string
  hero_sub: string
  hero_help_link: string
  hero_help_hint: string
  filter_label: string
  filter_all: string
  filter_hide: string
  filter_safe: string
  filter_hint_all: string
  filter_hint_hide: string
  filter_hint_safe: string
  about_title: string
  about_stays_en: string
  lang_label: string
  search_placeholder: string
  state_searching: string
  state_failed: string
  state_no_hits: string
  state_no_hits_for: string
  word_app: string
  word_apps: string
  home_title: string
  hero_h1_main: string
  hero_h1_accent: string
}

const en: UiStrings = {
  logo_tag: 'Linux App Store',
  nav_office: 'Office',
  nav_dev: 'Dev tools',
  nav_graphics: 'Graphics',
  nav_network: 'Network',
  nav_how: 'How it works',
  foot_line1: 'Agora — Linux App Store',
  foot_new: 'New to Linux?',
  foot_sub: 'Community-rated apps for EU Linux users',
  foot_github: 'GitHub',
  foot_flathub: 'Powered by Flathub',
  hero_sub:
    'Browse installable Linux programs with simple privacy notes — for anyone moving to Linux in the EU, including on work computers.',
  hero_help_link: 'New to Linux or the coloured labels?',
  hero_help_hint:
    'The guide is in English for now. It covers what the label colours mean, the words we use, and how the install line works.',
  filter_label: 'Choose what the list shows',
  filter_all: 'All apps',
  filter_hide: 'Hide strongest-warning apps',
  filter_safe: 'Only our “all clear” list',
  filter_hint_all:
    'We add short privacy notes to some apps, not all. The next two options only change the list you see; they are not a guarantee the app is “safe on every PC”.',
  filter_hint_hide:
    'Hides only the apps we gave our strongest privacy warnings. Apps we have not written up yet still show — not reviewed means “unknown to us”, not “bad”.',
  filter_hint_safe:
    'Only apps we have fully checked and marked as “all clear” for our criteria. The list is short and strict on purpose, and it will grow as we add more reviews.',
  about_title: 'How it works — Agora Linux App Store',
  about_stays_en:
    'The full guide on this page is in English. Your browser can translate the page, or you can help add proper translations on GitHub. Thank you for your patience.',
  lang_label: 'Language',
  search_placeholder: 'Search apps…',
  state_searching: 'Searching…',
  state_failed: 'Failed to load',
  state_no_hits: 'No apps found',
  state_no_hits_for: 'No apps found for',
  word_app: 'app',
  word_apps: 'apps',
  home_title: 'Agora — Linux App Store',
  hero_h1_main: 'Linux apps, ',
  hero_h1_accent: 'community rated.',
}

const de: UiStrings = {
  logo_tag: 'Linux-App-Shop',
  nav_office: 'Büro',
  nav_dev: 'Entwicklung',
  nav_graphics: 'Grafik',
  nav_network: 'Netz',
  nav_how: 'So funktioniert’s',
  foot_line1: 'Agora — Linux-App-Shop',
  foot_new: 'Neu bei Linux?',
  foot_sub: 'Von der Community bewertete Apps für Linux-Nutzer in der EU',
  foot_github: 'GitHub',
  foot_flathub: 'Mit Flathub',
  hero_sub:
    'Durchsuchen Sie installierbare Linux-Programme mit einfachen Datenschutzhinweisen — für alle, die in der EU auf Linux wechseln, auch am Arbeits-PC.',
  hero_help_link: 'Neu bei Linux oder den farbigen Markierungen?',
  hero_help_hint:
    'Die Erklärung ist vorerst auf Englisch: Farben der Kennzeichnungen, Begriffe, und der Installationsbefehl.',
  filter_label: 'Was die Liste anzeigen soll',
  filter_all: 'Alle Apps',
  filter_hide: 'Stärkste Bedenken ausblenden',
  filter_safe: 'Nur unsere „alles in Ordnung“-Liste',
  filter_hint_all:
    'Wir ergänzen kurze Datenschutzhinweise — noch nicht für jede App. Die nächsten beiden Optionen ändern nur die Liste; sie sind keine Garantie für „sicher auf jedem Rechner“.',
  filter_hint_hide:
    'Blendet nur Apps aus, die wir mit den stärksten Datenschutzhinweisen markiert haben. Nicht geprüfte Apps erscheinen weiter — „kein Eintrag“ heißt „uns unbekannt“, nicht „schlecht“.',
  filter_hint_safe:
    'Nur Apps, die wir in der Datenbank voll geprüft und als unbedenklich markiert haben. Diese Liste ist bewusst kurz und streng und wird wachsen.',
  about_title: 'So funktioniert’s — Agora Linux-App-Shop',
  about_stays_en:
    'Der ausführliche Leitfaden auf dieser Seite ist auf Englisch. Ihr Browser kann die Seite übersetzen, oder Sie helfen mit Übersetzungen auf GitHub. Vielen Dank.',
  lang_label: 'Sprache',
  search_placeholder: 'Apps suchen…',
  state_searching: 'Suche…',
  state_failed: 'Laden fehlgeschlagen',
  state_no_hits: 'Keine Apps',
  state_no_hits_for: 'Nichts gefunden zu',
  word_app: 'App',
  word_apps: 'Apps',
  home_title: 'Agora — Linux-App-Shop',
  hero_h1_main: 'Linux-Apps, ',
  hero_h1_accent: 'von der Community bewertet',
}

const fr: UiStrings = {
  logo_tag: 'Boutique d’apps Linux',
  nav_office: 'Bureautique',
  nav_dev: 'Dév.',
  nav_graphics: 'Graphisme',
  nav_network: 'Réseau',
  nav_how: 'Fonctionnement',
  foot_line1: 'Agora — Boutique d’apps Linux',
  foot_new: 'Nouveau sur Linux ?',
  foot_sub: 'Apps notées par la communauté pour les utilisateurs Linux dans l’UE',
  foot_github: 'GitHub',
  foot_flathub: 'Propulsé par Flathub',
  hero_sub:
    'Parcourez des applications Linux installables avec des notes de confidentialité simples — pour ceux qui passent à Linux dans l’UE, y compris au travail.',
  hero_help_link: 'Nouveau sur Linux ou sur les pastilles de couleur ?',
  hero_help_hint:
    'Le guide est pour l’instant en anglais : couleurs des pastilles, vocabulaire, et ligne d’installation à copier.',
  filter_label: 'Choisir l’affichage de la liste',
  filter_all: 'Toutes les apps',
  filter_hide: 'Masquer les alertes les plus sérieuses',
  filter_safe: 'Seulement notre liste « tout va bien »',
  filter_hint_all:
    'Nous ajoutons de courtes notes de confidentialité — pas pour toutes les apps. Les options suivantes ne changent que la liste affichée ; ce n’est pas une garantie « sûr sur chaque ordinateur ».',
  filter_hint_hide:
    'Masque seulement les apps auxquelles nous avons donné l’alerte la plus marquée. Les apps non vérifiées restent visibles : « pas de fiche » signifie « inconnu pour nous », pas « mauvais ».',
  filter_hint_safe:
    'Uniquement les apps que nous avons intégralement vérifiées et jugées vraiment rassurantes. La liste est volontairement courte et stricte ; elle s’agrandira avec le temps.',
  about_title: 'Fonctionnement — Agora',
  about_stays_en:
    'Le guide complet de cette page est en anglais. Votre navigateur peut traduire la page, ou vous pouvez aider sur GitHub. Merci de votre compréhension.',
  lang_label: 'Langue',
  search_placeholder: 'Rechercher…',
  state_searching: 'Recherche…',
  state_failed: 'Échec du chargement',
  state_no_hits: 'Aucune app',
  state_no_hits_for: 'Aucun résultat pour',
  word_app: 'app',
  word_apps: 'apps',
  home_title: 'Agora — boutique d’apps Linux',
  hero_h1_main: 'Apps Linux, ',
  hero_h1_accent: 'notées par la communauté',
}

const es: UiStrings = {
  logo_tag: 'Tienda de apps Linux',
  nav_office: 'Oficina',
  nav_dev: 'Desarrollo',
  nav_graphics: 'Gráficos',
  nav_network: 'Red',
  nav_how: 'Cómo funciona',
  foot_line1: 'Agora — tienda de apps Linux',
  foot_new: '¿Nuevo en Linux?',
  foot_sub: 'Apps valoradas por la comunidad para usuarios de Linux en la UE',
  foot_github: 'GitHub',
  foot_flathub: 'Con tecnología de Flathub',
  hero_sub:
    'Explora programas Linux con notas breves de privacidad, para quien pasa a Linux en la UE, también en el trabajo.',
  hero_help_link: '¿Nuevo en Linux o en las etiquetas de color?',
  hero_help_hint:
    'La guía está por ahora en inglés: colores de las marcas, términos, y el comando de instalación.',
  filter_label: 'Elegir qué muestra la lista',
  filter_all: 'Todas las apps',
  filter_hide: 'Quitar avisos fuertes',
  filter_safe: 'Solo lista « todo despejado »',
  filter_hint_all:
    'Añadimos notas de privacidad a algunas apps, no a todas. Las dos opciones siguientes solo cambian la lista que ves; no garantizan que la app « sea segura en todo ordenador ».',
  filter_hint_hide:
    'Oculta solo las que marcamos con la advertencia más seria. Las no revisadas siguen mostrándose: « sin ficha » significa « desconocida para nosotros », no « mala ».',
  filter_hint_safe:
    'Solo las que comprobamos y marcamos como claramente aceptables. La lista es corta a propósito; crecerá con más reseñas.',
  about_title: 'Cómo funciona — Agora',
  about_stays_en:
    'La guía detallada de esta página está en inglés. El navegador puede traducir, o puedes colaborar en GitHub. Gracias por tu paciencia.',
  lang_label: 'Idioma',
  search_placeholder: 'Buscar apps…',
  state_searching: 'Buscando…',
  state_failed: 'Error al cargar',
  state_no_hits: 'Sin resultados',
  state_no_hits_for: 'Sin resultados para',
  word_app: 'aplicación',
  word_apps: 'aplicaciones',
  home_title: 'Agora — tienda de apps Linux',
  hero_h1_main: 'Apps Linux, ',
  hero_h1_accent: 'valoradas por la comunidad',
}

const it: UiStrings = {
  logo_tag: 'App store Linux',
  nav_office: 'Ufficio',
  nav_dev: 'Sviluppo',
  nav_graphics: 'Grafica',
  nav_network: 'Rete',
  nav_how: 'Come funziona',
  foot_line1: 'Agora — app store Linux',
  foot_new: 'Nuovo a Linux?',
  foot_sub: 'App con valutazioni della comunità per utenti Linux nell’UE',
  foot_github: 'GitHub',
  foot_flathub: 'Basato su Flathub',
  hero_sub:
    'Sfoglia programmi installabili per Linux con note di privacy semplici — per chi in UE passa a Linux, anche al lavoro.',
  hero_help_link: 'Nuovo a Linux o alle etichette colorate?',
  hero_help_hint:
    'Per ora la guida è in inglese: colori delle etichette, termini, e riga del comando d’installazione.',
  filter_label: 'Cosa mostrare in elenco',
  filter_all: 'Tutte le app',
  filter_hide: 'Senza segnalazioni forti',
  filter_safe: 'Solo l’elenco « tutto ok »',
  filter_hint_all:
    'Aggiungiamo note di privacy a parte delle app, non a tutte. Le due opzioni sotto cambiano solo l’elenco; non significano che l’app « sia al sicuro su ogni PC ».',
  filter_hint_hide:
    'Nasconde solo le app a cui abbiamo dato l’avviso di privacy più forte. Le app non ancora scritte restano visibili: niente scheda = « non lo sappiamo », non « cattivo ».',
  filter_hint_safe:
    'Solo le app che abbiamo controllato a fondo e considerate chiaramente ok. L’elenco è volutamente breve; crescerà con il tempo.',
  about_title: 'Come funziona — Agora',
  about_stays_en:
    'La guida completa su questa pagina è in inglese. Il browser può tradurre, oppure si può contribuire su GitHub. Grazie.',
  lang_label: 'Lingua',
  search_placeholder: 'Cerca app…',
  state_searching: 'Ricerca…',
  state_failed: 'Caricamento non riuscito',
  state_no_hits: 'Nessun risultato',
  state_no_hits_for: 'Nessun risultato per',
  word_app: 'app',
  word_apps: 'app',
  home_title: 'Agora — app store Linux',
  hero_h1_main: 'App Linux, ',
  hero_h1_accent: 'con voti della comunità',
}

const pl: UiStrings = {
  logo_tag: 'Sklep z aplikacjami Linux',
  nav_office: 'Biuro',
  nav_dev: 'Dev',
  nav_graphics: 'Grafika',
  nav_network: 'Sieć',
  nav_how: 'Jak to działa',
  foot_line1: 'Agora — sklep z aplikacjami Linux',
  foot_new: 'Nowy w Linuxie?',
  foot_sub: 'Aplikacje oceniane przez społeczność dla użytkowników Linuxa w UE',
  foot_github: 'GitHub',
  foot_flathub: 'Dzięki Flathub',
  hero_sub:
    'Przeglądaj programy do instalacji w Linuxie z krótkimi notatkami o prywatności — dla osób przechodzących na Linuxa w UE, także w pracy.',
  hero_help_link: 'Nowy w Linuxie albo etykietach kolorów?',
  hero_help_hint:
    'Na razie przewodnik jest po angielsku: kolory etykiet, słownictwo, i linia instalacji (do skopiowania).',
  filter_label: 'Co widać na liście',
  filter_all: 'Wszystkie',
  filter_hide: 'Bez naszych najmocniejszych zastrzeżeń',
  filter_safe: 'Tylko w pełni sprawdzone u nas',
  filter_hint_all:
    'Dodajemy krótkie notatki o prywatności — jeszcze nie do wszystkich aplikacji. Dwie opcje poniżej tylko zmieniają listę; to nie gwarancja, że aplikacja jest „zawsze bezpieczna”.',
  filter_hint_hide:
    'Ukrywa tylko aplikacje, które oznaczyliśmy najpoważniejszymi uwagami o prywatności. Aplikacji bez opisu dalej widać — brak wpisu to „nam nieznane”, a nie „złe”.',
  filter_hint_safe:
    'Tylko te, co dokładnie sprawdziliśmy i uznaliśmy za w porządku. Lista jest krótka i celowo ścisła; będzie rosnąć.',
  about_title: 'Jak to działa — Agora',
  about_stays_en:
    'Pełny przewodnik na tej stronie jest po angielsku. Przeglądarka może przetłumaczyć albo możesz pomóc na GitHub. Dziękujemy za cierpliwość.',
  lang_label: 'Język',
  search_placeholder: 'Szukaj aplikacji…',
  state_searching: 'Szukanie…',
  state_failed: 'Nie udało się wczytać',
  state_no_hits: 'Brak wyników',
  state_no_hits_for: 'Brak wyników dla',
  word_app: 'aplikacja',
  word_apps: 'aplikacji',
  home_title: 'Agora — sklep Linux',
  hero_h1_main: 'Aplikacje na Linux, ',
  hero_h1_accent: 'oceniane przez społeczność',
}

export const UI: Record<Locale, UiStrings> = { en, de, fr, es, it, pl }

export function getUi(loc: string | undefined | null): UiStrings {
  if (loc && loc in UI) return UI[loc as Locale]
  return UI.en
}
