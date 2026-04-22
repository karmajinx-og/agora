export type PrivacyLevel='safe'|'caution'|'risk'|'unknown'
export interface AppPrivacy{id:string;level:PrivacyLevel;eu_origin?:boolean;gdpr_safe?:boolean;no_telemetry?:boolean;notes?:string;last_reviewed:string}
export const privacyData:AppPrivacy[]=[
{id:'org.libreoffice.LibreOffice',level:'safe',eu_origin:true,gdpr_safe:true,no_telemetry:true,notes:'EU-developed (Berlin)',last_reviewed:'2026-04-22'},
{id:'org.mozilla.Thunderbird',level:'safe',gdpr_safe:true,no_telemetry:true,last_reviewed:'2026-04-22'},
{id:'org.mozilla.firefox',level:'safe',gdpr_safe:true,last_reviewed:'2026-04-22'},
{id:'org.gimp.GIMP',level:'safe',gdpr_safe:true,no_telemetry:true,last_reviewed:'2026-04-22'},
{id:'org.inkscape.Inkscape',level:'safe',gdpr_safe:true,no_telemetry:true,last_reviewed:'2026-04-22'},
{id:'org.videolan.VLC',level:'safe',eu_origin:true,gdpr_safe:true,no_telemetry:true,notes:'EU-developed (Paris)',last_reviewed:'2026-04-22'},
{id:'org.blender.Blender',level:'safe',eu_origin:true,gdpr_safe:true,no_telemetry:true,notes:'EU-developed (Amsterdam)',last_reviewed:'2026-04-22'},
{id:'org.kde.kdenlive',level:'safe',gdpr_safe:true,no_telemetry:true,last_reviewed:'2026-04-22'},
{id:'org.nextcloud.Nextcloud',level:'safe',eu_origin:true,gdpr_safe:true,last_reviewed:'2026-04-22'},
{id:'com.dropbox.Client',level:'risk',gdpr_safe:false,notes:'US cloud',last_reviewed:'2026-04-22'},
{id:'com.slack.Slack',level:'risk',notes:'US cloud',last_reviewed:'2026-04-22'},
]
export const getPrivacy=(id:string):AppPrivacy|null=>privacyData.find(s=>s.id===id)??null
