import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// Automatically set base to '/LatentPol/' on GitHub Actions, and '/' for Cloudflare/local
const BASE = process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS ? '/LatentPol/' : '/')


/**
 * GitHub Pages serves static files only - there are no server-side rewrites, so
 * hitting a client route directly (e.g. /LatentPol/services on a refresh) returns
 * the Pages 404 page. Shipping the built index.html as 404.html lets the SPA boot
 * and render the requested route.
 */
function spaFallback(): Plugin {
  return {
    name: 'spa-fallback',
    apply: 'build',
    closeBundle() {
      const outDir = resolve(rootDir, 'dist')
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: BASE,
  plugins: [react(), spaFallback()],
})
