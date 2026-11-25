# SNAKEJUEGO 🐍

SNAKEJUEGO es una plataforma web moderna, rápida y responsiva para jugar al clásico juego de Snake en el navegador web, desarrollada con Next.js 15 (App Router), React 19 y TypeScript.

## Características

- 🎮 **Juego oficial de Google Snake integrado** totalmente traducido al español.
- 📱 **100% responsivo y sin desplazamiento** en dispositivos móviles, tablets y ordenadores.
- 🕹️ **Controles dedicados (D-Pad)** para tablet y móvil con soporte de pantalla completa.
- 🌓 **Modo Claro y Oscuro** con guardado de preferencias en localStorage.
- 🚀 **Optimizado para SEO:** Datos estructurados JSON-LD (`WebSite`, `Organization`, `VideoGame`, `FAQPage`, `BlogPosting`), `sitemap.xml` y `robots.txt` generados dinámicamente.
- 🔒 **Preparado para verificaciones web:** Google Search Console, Bing, Pinterest, AdSense, Microsoft Clarity y Google Analytics.

## Instalación y ejecución

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. **Construir para producción:**
   ```bash
   npm run build
   npm start
   ```

## Estructura del proyecto

- `src/app/`: Rutas y páginas de Next.js App Router.
- `src/components/`: Componentes modulares (Header, GameEmbed, ThemeToggle, Menu, Footer, etc.).
- `src/lib/`: Configuración del sitio y utilidades.
- `public/`: Archivos estáticos y motor del juego (`/game`).
