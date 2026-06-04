import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(__dirname, '..', 'public')
mkdirSync(publicDir, { recursive: true })

// Logo: fondo naranja redondeado + tenedor y cuchara centrados (dentro de la zona segura maskable).
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="#ff7043"/>
  <g fill="none" stroke="#ffffff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round">
    <!-- Tenedor -->
    <path d="M186 152 v60"/>
    <path d="M212 152 v60"/>
    <path d="M238 152 v60"/>
    <path d="M186 212 h52"/>
    <path d="M212 212 v148"/>
    <!-- Cuchara -->
    <ellipse cx="322" cy="196" rx="34" ry="46"/>
    <path d="M322 242 v118"/>
  </g>
</svg>`

const buf = Buffer.from(svg)

for (const size of [192, 512]) {
  await sharp(buf, { density: 384 })
    .resize(size, size)
    .png()
    .toFile(resolve(publicDir, `pwa-${size}.png`))
  console.log(`generado public/pwa-${size}.png`)
}

// Apple touch icon (iOS no usa el manifest; necesita su propio PNG)
await sharp(buf, { density: 384 })
  .resize(180, 180)
  .png()
  .toFile(resolve(publicDir, 'apple-touch-icon.png'))
console.log('generado public/apple-touch-icon.png')
