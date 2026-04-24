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
  /** Text before the “How it works” link, including trailing space (Voice C: “First time here? Read ”). */
  hero_help_intro: string
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
  state_feed_failed: string
  state_feed_failed_hint: string
  retry: string
  word_app: string
  word_apps: string
  home_title: string
  hero_h1_main: string
  hero_h1_accent: string
  /** Shown in the home page description meta tag. */
  meta_home_description: string
  /** Open Graph description for the home page. */
  meta_home_og: string
  meta_about_description: string
  meta_updates_description: string
  /** Use literal substring `{category}` (replaced on category pages). */
  meta_category: string
  /** Home page H2 above the app grid (document outline / SEO). */
  home_h2_catalog: string
  /** Category page H2; use `{category}` placeholder. */
  category_h2_grid: string
  /** App detail page H2 for the install block. */
  app_install_h2: string
  nav_updates: string
  updates_title: string
  updates_h1: string
  updates_stays_en: string
  /** Footer / growth: link to GitHub Discussions */
  contribute_cta: string
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
  foot_sub: 'Privacy-labelled apps for EU Linux users',
  foot_github: 'GitHub',
  foot_flathub: 'Powered by Flathub',
  hero_sub:
    'A privacy-friendly Linux app store for Flatpak apps: short notes on telemetry, open-source status, and data residency. Built for EU Linux users, home and work.',
  hero_help_intro: 'First time here? Read ',
  hero_help_hint: '',
  filter_label: 'Filter',
  filter_all: 'All',
  filter_hide: 'Hide flagged',
  filter_safe: 'Reviewed & safe',
  filter_hint_all:
    'We’ve added notes to some apps, not all. Filters only change what’s listed — not what’s safe on your machine.',
  filter_hint_hide:
    'Hides apps we’ve flagged as high-risk. Apps we haven’t reviewed yet still appear.',
  filter_hint_safe:
    'Only apps we’ve fully checked against our criteria (a short list by design).',
  about_title: 'How it works — Agora Linux App Store',
  about_stays_en:
    'The full guide on this page is in English. Your browser can translate the page, or you can help add proper translations on GitHub. Thank you for your patience.',
  lang_label: 'Language',
  search_placeholder: 'Search apps…',
  state_searching: 'Searching…',
  state_failed: 'Failed to load',
  state_no_hits: 'No apps found',
  state_no_hits_for: 'No apps found for',
  state_feed_failed: 'Couldn’t load the app list from Flathub.',
  state_feed_failed_hint:
    'Check your internet, firewall, or VPN. This computer must reach flathub.org (try in Terminal: curl -I https://flathub.org).',
  retry: 'Try again',
  word_app: 'app',
  word_apps: 'apps',
  home_title: 'Agora — Linux App Store',
  hero_h1_main: 'Linux apps, ',
  hero_h1_accent: 'labelled for privacy.',
  meta_home_description:
    'Agora is a Linux app store with privacy labels for every app — tracking, telemetry, open-source status. Find and install Flatpak apps safely on Linux.',
  meta_home_og:
    'Linux apps with privacy labels. Find Flatpak apps with notes on telemetry, open source, and data residency — EU-friendly.',
  meta_about_description:
    'How Agora works: list filters, colour badges, Flatpak install commands, and honest privacy notes — for people new to Linux in the EU.',
  meta_updates_description:
    'Agora changelog and how to help label apps — short privacy notes for Linux software on Flathub.',
  meta_category: 'Browse {category} Linux apps on Agora — privacy labels, Flatpak install.',
  home_h2_catalog: 'Popular Linux apps',
  category_h2_grid: 'Linux apps in {category}',
  app_install_h2: 'Install on Linux',
  nav_updates: 'Updates',
  updates_title: 'Updates & changelog — Agora',
  updates_h1: 'Updates',
  updates_stays_en:
    'The entries below are in English. Your browser can translate, or you can help translate on GitHub.',
  contribute_cta: 'Discuss & contribute',
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
  foot_sub: 'Apps mit Datenschutz-Labels für Linux-Nutzer in der EU',
  foot_github: 'GitHub',
  foot_flathub: 'Mit Flathub',
  hero_sub:
    'Telemetrie, Datenstandort, Open-Source-Status — kurz notiert. Für Linux-Nutzer in der EU, auch am Arbeitsrechner.',
  hero_help_intro: 'Neu hier? ',
  hero_help_hint:
    'Der Leitfaden ist vorerst auf Englisch (Farben, Begriffe, Installationsbefehl).',
  filter_label: 'Filter',
  filter_all: 'Alle',
  filter_hide: 'Markierte ausblenden',
  filter_safe: 'Geprüft & sicher',
  filter_hint_all:
    'Hinweise gibt es noch nicht für jede App. Filter ändern nur die Liste — nicht, was auf Ihrem Rechner sicher ist.',
  filter_hint_hide:
    'Blendet von uns als hohes Risiko markierte Apps aus. Nicht geprüfte Apps bleiben sichtbar.',
  filter_hint_safe:
    'Nur nach unseren Kriterien voll geprüfte Apps (bewusst kurze Liste).',
  about_title: 'So funktioniert’s — Agora Linux-App-Shop',
  about_stays_en:
    'Der ausführliche Leitfaden auf dieser Seite ist auf Englisch. Ihr Browser kann die Seite übersetzen, oder Sie helfen mit Übersetzungen auf GitHub. Vielen Dank.',
  lang_label: 'Sprache',
  search_placeholder: 'Apps suchen…',
  state_searching: 'Suche…',
  state_failed: 'Laden fehlgeschlagen',
  state_no_hits: 'Keine Apps',
  state_no_hits_for: 'Nichts gefunden zu',
  state_feed_failed: 'App-Liste von Flathub konnte nicht geladen werden.',
  state_feed_failed_hint:
    'Internet, Firewall, VPN prüfen. flathub.org muss erreichbar sein (Test: curl -I https://flathub.org im Terminal).',
  retry: 'Erneut versuchen',
  word_app: 'App',
  word_apps: 'Apps',
  home_title: 'Agora — Linux-App-Shop',
  hero_h1_main: 'Linux-Apps, ',
  hero_h1_accent: 'mit Datenschutz-Labels.',
  meta_home_description:
    'Linux-Apps mit Datenschutz-Fokus — Telemetrie, Datenstandort, Open Source, kurz erklärt. Für Linux-Nutzer in der EU, auch am Arbeitsrechner.',
  meta_home_og:
    'Linux-Apps mit Datenschutz-Labels. Flatpak-Katalog mit kurzen Hinweisen für die EU.',
  meta_about_description:
    'So funktioniert Agora: Filter, Farbbadges, Flatpak-Befehle und ehrliche Datenschutznotizen — für Einsteiger in der EU.',
  meta_updates_description:
    'Agora: Neuigkeiten und mithelfen bei App-Labels — Datenschutz zu Linux-Software auf Flathub.',
  meta_category: '{category}-Apps auf Agora — Datenschutz-Hinweise, Flatpak-Installation.',
  home_h2_catalog: 'Beliebte Linux-Apps',
  category_h2_grid: 'Linux-Apps: {category}',
  app_install_h2: 'Installation unter Linux',
  nav_updates: 'Neuigkeiten',
  updates_title: 'Neuigkeiten & Changelog — Agora',
  updates_h1: 'Neuigkeiten',
  updates_stays_en:
    'Die Einträge unten sind auf Englisch. Der Browser kann übersetzen; mithelfen auf GitHub.',
  contribute_cta: 'Mithelfen & Diskussion',
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
  foot_sub: 'Apps étiquetées confidentialité pour les Linux dans l’UE',
  foot_github: 'GitHub',
  foot_flathub: 'Propulsé par Flathub',
  hero_sub:
    'Télémétrie, localisation des données, open source — en bref. Pour les utilisateurs Linux dans l’UE, y compris au travail.',
  hero_help_intro: 'Première visite ? ',
  hero_help_hint:
    'Le guide est pour l’instant en anglais (couleurs, termes, commande d’installation).',
  filter_label: 'Filtrer',
  filter_all: 'Tout',
  filter_hide: 'Masquer les signalés',
  filter_safe: 'Vérifiés & sûrs',
  filter_hint_all:
    'Notes sur certaines apps seulement. Les filtres changent la liste — pas ce qui est sûr sur votre machine.',
  filter_hint_hide:
    'Masque les apps que nous marquons à haut risque. Les apps non vérifiées restent visibles.',
  filter_hint_safe:
    'Uniquement les apps entièrement vérifiées selon nos critères (liste courte volontairement).',
  about_title: 'Fonctionnement — Agora',
  about_stays_en:
    'Le guide complet de cette page est en anglais. Votre navigateur peut traduire la page, ou vous pouvez aider sur GitHub. Merci de votre compréhension.',
  lang_label: 'Langue',
  search_placeholder: 'Rechercher…',
  state_searching: 'Recherche…',
  state_failed: 'Échec du chargement',
  state_no_hits: 'Aucune app',
  state_no_hits_for: 'Aucun résultat pour',
  state_feed_failed: 'Impossible de charger la liste d’apps depuis Flathub.',
  state_feed_failed_hint:
    'Vérifiez internet, pare-feu ou VPN. flathub.org doit être accessible (test : curl -I https://flathub.org).',
  retry: 'Réessayer',
  word_app: 'app',
  word_apps: 'apps',
  home_title: 'Agora — boutique d’apps Linux',
  hero_h1_main: 'Apps Linux, ',
  hero_h1_accent: 'étiquetées pour la confidentialité.',
  meta_home_description:
    'Apps Linux étiquetées confidentialité — télémétrie, données, open source, en bref. Pour les Linux dans l’UE, maison et travail.',
  meta_home_og: 'Apps Linux et confidentialité. Catalogue Flatpak avec notes courtes pour l’UE.',
  meta_about_description:
    'Fonctionnement d’Agora : filtres, pastilles, commandes Flatpak et notes honnêtes — pour débutants Linux dans l’UE.',
  meta_updates_description:
    'Agora : nouveautés et contribuer aux étiquettes — confidentialité des apps Linux sur Flathub.',
  meta_category: 'Parcourir les apps {category} sur Agora — notes de confidentialité, Flatpak.',
  home_h2_catalog: 'Apps Linux populaires',
  category_h2_grid: 'Apps Linux : {category}',
  app_install_h2: 'Installer sur Linux',
  nav_updates: 'Nouveautés',
  updates_title: 'Nouveautés & journal — Agora',
  updates_h1: 'Nouveautés',
  updates_stays_en:
    'Les entrées ci-dessous sont en anglais. Le navigateur peut traduire ; contribuez sur GitHub.',
  contribute_cta: 'Contribuer & discussions',
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
  foot_sub: 'Apps etiquetadas por privacidad para Linux en la UE',
  foot_github: 'GitHub',
  foot_flathub: 'Con tecnología de Flathub',
  hero_sub:
    'Telemetría, ubicación de datos, código abierto — en notas breves. Para usuarios Linux en la UE, también en el trabajo.',
  hero_help_intro: '¿Primera vez? ',
  hero_help_hint:
    'La guía está por ahora en inglés (colores, términos, comando de instalación).',
  filter_label: 'Filtrar',
  filter_all: 'Todas',
  filter_hide: 'Ocultar marcados',
  filter_safe: 'Revisadas y seguras',
  filter_hint_all:
    'Notas solo en parte de las apps. Los filtros cambian el listado — no qué es seguro en tu equipo.',
  filter_hint_hide:
    'Oculta las que marcamos como alto riesgo. Las no revisadas siguen visibles.',
  filter_hint_safe:
    'Solo las revisadas según nuestros criterios (lista corta a propósito).',
  about_title: 'Cómo funciona — Agora',
  about_stays_en:
    'La guía detallada de esta página está en inglés. El navegador puede traducir, o puedes colaborar en GitHub. Gracias por tu paciencia.',
  lang_label: 'Idioma',
  search_placeholder: 'Buscar apps…',
  state_searching: 'Buscando…',
  state_failed: 'Error al cargar',
  state_no_hits: 'Sin resultados',
  state_no_hits_for: 'Sin resultados para',
  state_feed_failed: 'No se pudo cargar la lista de apps desde Flathub.',
  state_feed_failed_hint:
    'Comprueba internet, cortafuegos o VPN. Debe alcanzarse flathub.org (prueba: curl -I https://flathub.org).',
  retry: 'Reintentar',
  word_app: 'aplicación',
  word_apps: 'aplicaciones',
  home_title: 'Agora — tienda de apps Linux',
  hero_h1_main: 'Apps Linux, ',
  hero_h1_accent: 'etiquetadas por privacidad.',
  meta_home_description:
    'Apps Linux con etiquetas de privacidad: telemetría, datos, open source, en notas breves. Para Linux en la UE, casa y trabajo.',
  meta_home_og: 'Apps Linux etiquetadas por privacidad. Catálogo Flatpak con notas para la UE.',
  meta_about_description:
    'Cómo funciona Agora: filtros, colores, comandos Flatpak y notas de privacidad — para quien empieza con Linux en la UE.',
  meta_updates_description:
    'Agora: novedades y cómo ayudar con etiquetas — privacidad de apps Linux en Flathub.',
  meta_category: 'Explora apps de {category} en Agora — notas de privacidad, Flatpak.',
  home_h2_catalog: 'Apps Linux populares',
  category_h2_grid: 'Apps Linux: {category}',
  app_install_h2: 'Instalar en Linux',
  nav_updates: 'Novedades',
  updates_title: 'Novedades y registro de cambios — Agora',
  updates_h1: 'Novedades',
  updates_stays_en:
    'Las entradas siguientes están en inglés. El navegador puede traducir; colabora en GitHub.',
  contribute_cta: 'Colaborar y foro',
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
  foot_sub: 'App etichettate per la privacy per Linux nell’UE',
  foot_github: 'GitHub',
  foot_flathub: 'Basato su Flathub',
  hero_sub:
    'Telemetria, sede dei dati, open source — in note brevi. Per chi usa Linux nell’UE, anche al lavoro.',
  hero_help_intro: 'Prima volta? ',
  hero_help_hint:
    'La guida è per ora in inglese (colori, termini, comando di installazione).',
  filter_label: 'Filtra',
  filter_all: 'Tutte',
  filter_hide: 'Nascondi segnalati',
  filter_safe: 'Verificate e sicure',
  filter_hint_all:
    'Note solo su parte delle app. I filtri cambiano l’elenco — non cosa è sicuro sulla tua macchina.',
  filter_hint_hide:
    'Nasconde le app che segniamo ad alto rischio. Le non revisionate restano visibili.',
  filter_hint_safe:
    'Solo quelle verificate secondo i nostri criteri (elenco breve di proposito).',
  about_title: 'Come funziona — Agora',
  about_stays_en:
    'La guida completa su questa pagina è in inglese. Il browser può tradurre, oppure si può contribuire su GitHub. Grazie.',
  lang_label: 'Lingua',
  search_placeholder: 'Cerca app…',
  state_searching: 'Ricerca…',
  state_failed: 'Caricamento non riuscito',
  state_no_hits: 'Nessun risultato',
  state_no_hits_for: 'Nessun risultato per',
  state_feed_failed: 'Impossibile caricare l’elenco da Flathub.',
  state_feed_failed_hint:
    'Controlla rete, firewall o VPN. flathub.org deve essere raggiungibile (prova: curl -I https://flathub.org).',
  retry: 'Riprova',
  word_app: 'app',
  word_apps: 'app',
  home_title: 'Agora — app store Linux',
  hero_h1_main: 'App Linux, ',
  hero_h1_accent: 'etichettate per la privacy.',
  meta_home_description:
    'App Linux etichettate per la privacy: telemetria, dati, open source, in note brevi. Per utenti Linux nell’UE, lavoro e casa.',
  meta_home_og: 'App Linux con etichette privacy. Catalogo Flatpak con note per l’UE.',
  meta_about_description:
    'Come funziona Agora: filtri, colori, comandi Flatpak e note oneste — per chi inizia con Linux nell’UE.',
  meta_updates_description:
    'Agora: novità e come aiutare con le etichette — privacy delle app Linux su Flathub.',
  meta_category: 'Sfoglia app {category} su Agora — note privacy, installazione Flatpak.',
  home_h2_catalog: 'App Linux popolari',
  category_h2_grid: 'App Linux: {category}',
  app_install_h2: 'Installazione su Linux',
  nav_updates: 'Novità',
  updates_title: 'Novità e changelog — Agora',
  updates_h1: 'Novità',
  updates_stays_en: 'Le voci sotto sono in inglese. Il browser può tradurre; contributi su GitHub.',
  contribute_cta: 'Contribuisci e discussione',
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
  foot_sub: 'Aplikacje z etykietami prywatności dla Linuxa w UE',
  foot_github: 'GitHub',
  foot_flathub: 'Dzięki Flathub',
  hero_sub:
    'Telemetria, lokalizacja danych, open source — krótko w notatkach. Dla użytkowników Linuxa w UE, także w pracy.',
  hero_help_intro: 'Pierwszy raz? ',
  hero_help_hint:
    'Przewodnik jest na razie po angielsku (kolory, słownictwo, polecenie instalacji).',
  filter_label: 'Filtr',
  filter_all: 'Wszystkie',
  filter_hide: 'Ukryj oznaczone',
  filter_safe: 'Sprawdzone i bezpieczne',
  filter_hint_all:
    'Notatki tylko przy części aplikacji. Filtry zmieniają listę — nie to, co jest bezpieczne na Twoim komputerze.',
  filter_hint_hide:
    'Ukrywa aplikacje oznaczone przez nas jako wysokie ryzyko. Niesprawdzone dalej widać.',
  filter_hint_safe:
    'Tylko w pełni sprawdzone według naszych kryteriów (krótka lista z założenia).',
  about_title: 'Jak to działa — Agora',
  about_stays_en:
    'Pełny przewodnik na tej stronie jest po angielsku. Przeglądarka może przetłumaczyć albo możesz pomóc na GitHub. Dziękujemy za cierpliwość.',
  lang_label: 'Język',
  search_placeholder: 'Szukaj aplikacji…',
  state_searching: 'Szukanie…',
  state_failed: 'Nie udało się wczytać',
  state_no_hits: 'Brak wyników',
  state_no_hits_for: 'Brak wyników dla',
  state_feed_failed: 'Nie udało się wczytać listy z Flathub.',
  state_feed_failed_hint:
    'Sprawdź internet, firewall lub VPN. Wymagany jest dostęp do flathub.org (test: curl -I https://flathub.org).',
  retry: 'Spróbuj ponownie',
  word_app: 'aplikacja',
  word_apps: 'aplikacji',
  home_title: 'Agora — sklep Linux',
  hero_h1_main: 'Aplikacje na Linux, ',
  hero_h1_accent: 'z etykietami prywatności.',
  meta_home_description:
    'Aplikacje na Linuxa z etykietami prywatności: telemetria, dane, open source, krótko. Dla użytkowników Linuxa w UE, dom i praca.',
  meta_home_og: 'Aplikacje z etykietami prywatności. Katalog Flatpak z notatkami dla UE.',
  meta_about_description:
    'Jak działa Agora: filtry, kolory, polecenia Flatpak i uczciwe notatki — dla początkujących w UE.',
  meta_updates_description:
    'Agora: nowości i pomoc w etykietach — prywatność aplikacji na Flathub.',
  meta_category: 'Przeglądaj aplikacje {category} w Agorze — prywatność, Flatpak.',
  home_h2_catalog: 'Popularne aplikacje na Linuxa',
  category_h2_grid: 'Aplikacje Linux: {category}',
  app_install_h2: 'Instalacja na Linuxie',
  nav_updates: 'Aktualności',
  updates_title: 'Aktualności i dziennik zmian — Agora',
  updates_h1: 'Aktualności',
  updates_stays_en: 'Wpisy poniżej są po angielsku. Przeglądarka może tłumaczyć; współpraca na GitHubie.',
  contribute_cta: 'Dyskusja i wkład',
}

export const UI: Record<Locale, UiStrings> = { en, de, fr, es, it, pl }

export function getUi(loc: string | undefined | null): UiStrings {
  if (loc && loc in UI) return UI[loc as Locale]
  return UI.en
}
