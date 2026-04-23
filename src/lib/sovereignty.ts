export type SovereigntyLevel = 'safe' | 'caution' | 'risk' | 'unknown'

export interface SovereigntyTag {
  eu_origin: boolean | null
  gdpr_safe: boolean | null
  no_telemetry: boolean | null
  open_source: boolean | null
  us_cloud_dependency: boolean | null
  /** Set by project maintainers for the seed list — not a community vote. */
  maintainer_reviewed: boolean | null
  notes?: string
}

export interface AppSovereignty {
  id: string
  tags: SovereigntyTag
  level: SovereigntyLevel
  last_reviewed: string
}

// Overall level derived from tags (single source of truth for the badge)
export function deriveSovereigntyLevel(tags: SovereigntyTag): SovereigntyLevel {
  if (tags.us_cloud_dependency === true) return 'risk'
  if (tags.gdpr_safe === false) return 'risk'
  if (tags.open_source === true && tags.no_telemetry === true && tags.gdpr_safe === true) {
    return 'safe'
  }
  if (tags.open_source === null && tags.gdpr_safe === null) return 'unknown'
  return 'caution'
}

type Seed = { id: string; tags: SovereigntyTag; last_reviewed: string }

const seeds: Seed[] = [
  {
    id: 'org.libreoffice.LibreOffice',
    tags: {
      eu_origin: true,
      gdpr_safe: true,
      no_telemetry: true,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
      notes: 'EU-developed (The Document Foundation, Berlin)',
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'org.mozilla.Thunderbird',
    tags: {
      eu_origin: false,
      gdpr_safe: true,
      no_telemetry: true,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
      notes: 'Mozilla Foundation — no cloud dependency',
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'org.mozilla.firefox',
    tags: {
      eu_origin: false,
      gdpr_safe: true,
      no_telemetry: false,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
      notes: 'Telemetry on by default — disable in settings',
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'org.gnome.Geary',
    tags: {
      eu_origin: false,
      gdpr_safe: true,
      no_telemetry: true,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'org.gimp.GIMP',
    tags: {
      eu_origin: false,
      gdpr_safe: true,
      no_telemetry: true,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'org.inkscape.Inkscape',
    tags: {
      eu_origin: false,
      gdpr_safe: true,
      no_telemetry: true,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'org.kde.okular',
    tags: {
      eu_origin: false,
      gdpr_safe: true,
      no_telemetry: true,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'org.videolan.VLC',
    tags: {
      eu_origin: true,
      gdpr_safe: true,
      no_telemetry: true,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
      notes: 'EU-developed (VideoLAN, Paris)',
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'im.riot.Riot',
    tags: {
      eu_origin: true,
      gdpr_safe: true,
      no_telemetry: true,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
      notes: 'Element/Matrix — EU-origin, federated, self-hostable',
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'com.dropbox.Client',
    tags: {
      eu_origin: false,
      gdpr_safe: false,
      no_telemetry: false,
      open_source: false,
      us_cloud_dependency: true,
      maintainer_reviewed: true,
      notes: 'US cloud (AWS) — data leaves EU by default',
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'com.slack.Slack',
    tags: {
      eu_origin: false,
      gdpr_safe: null,
      no_telemetry: false,
      open_source: false,
      us_cloud_dependency: true,
      maintainer_reviewed: true,
      notes: 'US cloud — Salesforce-owned',
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'org.kde.kdenlive',
    tags: {
      eu_origin: false,
      gdpr_safe: true,
      no_telemetry: true,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'org.blender.Blender',
    tags: {
      eu_origin: true,
      gdpr_safe: true,
      no_telemetry: true,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
      notes: 'EU-developed (Blender Foundation, Amsterdam)',
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'org.gnome.Evince',
    tags: {
      eu_origin: false,
      gdpr_safe: true,
      no_telemetry: true,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
      notes: 'PDF viewer — replaces Adobe Acrobat Reader',
    },
    last_reviewed: '2026-04-20',
  },
  {
    id: 'org.nextcloud.Nextcloud',
    tags: {
      eu_origin: true,
      gdpr_safe: true,
      no_telemetry: true,
      open_source: true,
      us_cloud_dependency: false,
      maintainer_reviewed: true,
      notes: 'EU-developed — self-hostable OneDrive replacement',
    },
    last_reviewed: '2026-04-20',
  },
]

/** Curated seed list; `level` is always from `deriveSovereigntyLevel(tags)`. */
export const sovereigntyData: AppSovereignty[] = seeds.map(s => ({
  ...s,
  level: deriveSovereigntyLevel(s.tags),
}))

export function getSovereignty(appId: string): AppSovereignty | null {
  return sovereigntyData.find(s => s.id === appId) ?? null
}
