export interface FlathubApp{id:string;name:string;summary:string;icon:string;categories:string[];developer_name?:string;project_url?:string;is_free_license:boolean}
const P='/api/flathub'
async function post(e:string,b:object):Promise<FlathubApp[]>{const r=await fetch(`${P}?endpoint=${encodeURIComponent(e)}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)});const d=await r.json();return Array.isArray(d)?d:d.hits??[]}
export const fetchPopularApps=()=>post('search',{query:'',filters:[]})
export const searchApps=(q:string)=>q.trim()?post('search',{query:q,filters:[]}):fetchPopularApps()
export const fetchByCategory=(c:string)=>post('search',{query:'',filters:[{field_name:'categories',value:c}]})
export async function fetchAppDetail(id:string):Promise<FlathubApp>{const r=await fetch(`${P}?endpoint=${encodeURIComponent('appstream/'+id)}`);return r.json()}
export const iconUrl=(a:FlathubApp)=>a.icon?.startsWith('http')?a.icon:`https://dl.flathub.org/repo/appstream/${a.id}/icons/128x128/${a.id}.png`
export const installCommand=(id:string)=>`flatpak install flathub ${id}`
