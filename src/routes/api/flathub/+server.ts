import { json } from '@sveltejs/kit'
const FLATHUB = 'https://flathub.org/api/v2'
export const GET = async ({ url }) => {
  const endpoint = url.searchParams.get('endpoint') ?? 'search'
  const res = await fetch(`${FLATHUB}/${endpoint}`, { headers: { 'User-Agent': 'Agora' } })
  return json(await res.json())
}
export const POST = async ({ url, request }) => {
  const endpoint = url.searchParams.get('endpoint') ?? 'search'
  const body = await request.json().catch(() => ({ query: '', filters: [] }))
  const res = await fetch(`${FLATHUB}/${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'User-Agent': 'Agora' }, body: JSON.stringify(body) })
  return json(await res.json())
}
