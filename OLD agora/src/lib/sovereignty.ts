export type SovereigntyLevel = 'safe' | 'caution' | 'risk' | 'unknown'

export interface SovereigntyTag {
  eu_origin: boolean | null          // Developed/maintained in EU
  gdpr_safe: boolean | null          // No personal data to 3rd parties
  no_telemetry: boolean | null       // Zero data phoned home by default
  open_source: boolean | null        // OSI-approved licence
  us_cloud_dependency: boolean | null // Syncs to AWS/Azure/GCP
  verified_safe: boolean | null      // Community audited
  notes?: string
}

export interface AppSovereignty {
  id: string
  tags: SovereigntyTag
  level: SovereigntyLevel
  last_reviewed: string
}

// Overall sovereignty level derived from tags
export function deriveSovereigntyLevel(tags: SovereigntyTag): SovereigntyLevel {
  if (tags.us_cloud_dependency === true) return 'risk'
  if (tags.gdpr_safe === false) return 'risk'
  if (tags.open_source === true && tags.no_telemetry === true && tags.gdpr_safe === true) {
    return 'safe'
  }
  if (tags.open_source === null && tags.gdpr_safe === null) return 'unknown'
  return 'caution'
}

// Seed data — top apps curated for EU government audience
export const sovereigntyData: AppSovereignty[] = [
  {
    id: 'org.libreoffice.LibreOffice',
    tags: { eu_origin: true, gdpr_safe: true, no_telemetry: true, open_source: true, us_cloud_dependency: false, verified_safe: true, notes: 'EU-developed (The Document Foundation, Berlin)' },
    level: 'safe', last_reviewed: '2026-04-20'
  },
  {
    id: 'org.mozilla.Thunderbird',
    tags: { eu_origin: false, gdpr_safe: true, no_telemetry: true, open_source: true, us_cloud_dependency: false, verified_safe: true, notes: 'Mozilla Foundation — no cloud dependency' },
    level: 'safe', last_reviewed: '2026-04-20'
  },
  {
    id: 'org.mozilla.firefox',
    tags: { eu_origin: false, gdpr_safe: true, no_telemetry: false, open_source: true, us_cloud_dependency: false, verified_safe: true, notes: 'Telemetry on by default — disable in settings' },
    level: 'safe', last_reviewed: '2026-04-20'
  },
  {
    id: 'org.gnome.Geary',
    tags: { eu_origin: false, gdpr_safe: true, no_telemetry: true, open_source: true, us_cloud_dependency: false, verified_safe: true },
    level: 'safe', last_reviewed: '2026-04-20'
  },
  {
    id: 'org.gimp.GIMP',
    tags: { eu_origin: false, gdpr_safe: true, no_telemetry: true, open_source: true, us_cloud_dependency: false, verified_safe: true },
    level: 'safe', last_reviewed: '2026-04-20'
  },
  {
    id: 'org.inkscape.Inkscape',
    tags: { eu_origin: false, gdpr_safe: true, no_telemetry: true, open_source: true, us_cloud_dependency: false, verified_safe: true },
    level: 'safe', last_reviewed: '2026-04-20'
  },
  {
    id: 'org.kde.okular',
    tags: { eu_origin: false, gdpr_safe: true, no_telemetry: true, open_source: true, us_cloud_dependency: false, verified_safe: true },
    level: 'safe', last_reviewed: '2026-04-20'
  },
  {
    id: 'org.videolan.VLC',
    tags: { eu_origin: true, gdpr_safe: true, no_telemetry: true, open_source: true, us_cloud_dependency: false, verified_safe: true, notes: 'EU-developed (VideoLAN, Paris)' },
    level: 'safe', last_reviewed: '2026-04-20'
  },
  {
    id: 'element.io/Element',
    tags: { eu_origin: true, gdpr_safe: true, no_telemetry: true, open_source: true, us_cloud_dependency: false, verified_safe: true, notes: 'Element/Matrix — EU-origin, federated, self-hostable' },
    level: 'safe', last_reviewed: '2026-04-20'
  },
  {
    id: 'com.dropbox.Client',
    tags: { eu_origin: false, gdpr_safe: false, no_telemetry: false, open_source: false, us_cloud_dependency: true, verified_safe: false, notes: 'US cloud (AWS) — data leaves EU by default' },
    level: 'risk', last_reviewed: '2026-04-20'
  },
  {
    id: 'com.slack.Slack',
    tags: { eu_origin: false, gdpr_safe: null, no_telemetry: false, open_source: false, us_cloud_dependency: true, verified_safe: false, notes: 'US cloud — Salesforce-owned' },
    level: 'risk', last_reviewed: '2026-04-20'
  },
  {
    id: 'org.kde.kdenlive',
    tags: { eu_origin: false, gdpr_safe: true, no_telemetry: true, open_source: true, us_cloud_dependency: false, verified_safe: true },
    level: 'safe', last_reviewed: '2026-04-20'
  },
  {
    id: 'org.blender.Blender',
    tags: { eu_origin: true, gdpr_safe: true, no_telemetry: true, open_source: true, us_cloud_dependency: false, verified_safe: true, notes: 'EU-developed (Blender Foundation, Amsterdam)' },
    level: 'safe', last_reviewed: '2026-04-20'
  },
  {
    id: 'org.gnome.Evince',
    tags: { eu_origin: false, gdpr_safe: true, no_telemetry: true, open_source: true, us_cloud_dependency: false, verified_safe: true, notes: 'PDF viewer — replaces Adobe Acrobat Reader' },
    level: 'safe', last_reviewed: '2026-04-20'
  },
  {
    id: 'org.nextcloud.Nextcloud',
    tags: { eu_origin: true, gdpr_safe: true, no_telemetry: true, open_source: true, us_cloud_dependency: false, verified_safe: true, notes: 'EU-developed — self-hostable OneDrive replacement' },
    level: 'safe', last_reviewed: '2026-04-20'
  },
]

export function getSovereignty(appId: string): AppSovereignty | null {
  return sovereigntyData.find(s => s.id === appId) ?? null
}
