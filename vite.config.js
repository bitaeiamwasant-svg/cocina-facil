import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Ruta base. En local y Netlify es "/". Para GitHub Pages (que sirve en
// /nombre-del-repo/) se pasa con la variable VITE_BASE; el workflow la pone sola.
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      // start_url y scope se omiten a propósito: vite-plugin-pwa los toma de `base`.
      manifest: {
        name: 'Cocina Fácil',
        short_name: 'Cocina Fácil',
        description: 'Cocina con los ingredientes que ya tienes en casa.',
        theme_color: '#ff7043',
        background_color: '#fff8f0',
        display: 'standalone',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      }
    })
  ]
})
