# Cocina Fácil 🍳

PWA que ayuda a cocinar con los ingredientes que ya tienes en casa.

## Funciones
- Escribe tus ingredientes y descubre recetas que puedes hacer (ordenadas por coincidencia).
- Cada receta incluye video corto, ingredientes y pasos.
- Guarda recetas **favoritas** (se quedan en tu dispositivo).
- **Lista de compras**: al terminar de cocinar, añade los ingredientes con un toque.
- Instalable en el móvil (PWA) y funciona sin conexión.

## Stack
- **Vite** + **React** (JSX)
- **vite-plugin-pwa** (manifest + service worker offline)
- Datos en JSON local + `localStorage` (sin backend)

## Cómo ejecutar
```bash
npm install
npm run dev        # desarrollo en http://localhost:5173
npm run build      # genera /dist para producción
npm run preview    # prueba el build (incluye el service worker)
```

## Publicar gratis (sin login)

La app es estática: se publica gratis y con HTTPS (la PWA lo necesita). Forma más
simple, sin Git ni terminal en el hosting:

1. Genera la versión de producción:
   ```bash
   npm run build
   ```
2. Entra en [app.netlify.com/drop](https://app.netlify.com/drop).
3. **Arrastra la carpeta `dist`** a la página. En segundos tendrás una URL pública
   (ej. `https://cocina-facil-123.netlify.app`) que puedes abrir e instalar en el móvil.

Alternativas igual de gratuitas: **Vercel**, **Cloudflare Pages** o **GitHub Pages**.
Si más adelante conectas un repositorio Git, el archivo `netlify.toml` ya deja
configurado el build automático.

### Publicar en GitHub Pages

GitHub Pages sirve el proyecto en `https://<usuario>.github.io/<repo>/`. El proyecto
ya está preparado: `base` se ajusta solo con la variable `VITE_BASE` y hay un workflow
que construye y publica en cada `push`.

1. Sube el proyecto a un repositorio de GitHub (rama `main`).
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `push` a `main` ejecuta `.github/workflows/deploy.yml` y publica la web.
   La URL aparece en la pestaña **Actions** y en Settings → Pages.

> El workflow detecta el nombre del repo y pasa `VITE_BASE=/<repo>/` automáticamente.
> **Excepción:** si tu repositorio se llama `<usuario>.github.io`, edita el workflow
> y pon `VITE_BASE: /` (esos repos se sirven en la raíz, no en un subdirectorio).

## Siguientes pasos (fase 2)
- Ampliar la base de recetas en `src/data/recetas.js`.
- Backend con **Supabase** (plan gratuito): login por email (magic link), recetas en
  base de datos y sincronización de favoritas y lista de compras entre dispositivos.
