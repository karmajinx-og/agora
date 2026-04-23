import dns from 'node:dns'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

// Only runs in Node (dev / build). Helps when `curl` reaches flathub.org but the
// Vite dev server’s fetch() times out (IPv6-first resolution on some networks).
// Not used in the Cloudflare Worker bundle.
try {
  dns.setDefaultResultOrder('ipv4first')
} catch {
  /* Node < 17 */
}

export default defineConfig({
  plugins: [sveltekit()]
})
