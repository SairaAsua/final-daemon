# Landing · DaemonCraft

Landing standalone — HTML + CSS + JS. Sin dependencias de build. Levantala con:

```bash
cd web/
python3 -m http.server 8772
```

Después abrí http://localhost:8772 en el navegador.

## Estructura

- `index.html` — todo el contenido (hero, daemon, demo, beacon, papás, how, equipo, beta CTA, footer).
- `styles.css` — paleta acero-azul, responsive, respeta `prefers-reduced-motion`.
- `script.js` — solo IntersectionObserver para revelar elementos al hacer scroll.

## Paleta

```
--steel-deep:    #0a0e1a    fondo principal
--steel-night:   #131a2b    capas secundarias
--steel-bg:      #1a2332    cards
--steel-line:    #2c3e50    bordes / divisores
--blue-electric: #4a90e2    acento principal
--blue-bright:   #5dade2    hover / highlight
--platinum:      #ecf0f1    texto sobre dark
--platinum-dim:  #95a5a6    texto secundario
```

## Tipografía

- **Inter** (Google Fonts) — body + headings.
- **JetBrains Mono** (Google Fonts) — kickers, números, citas técnicas.

## Si querés portarla a Astro

Las otras webs de AlterMundi corren en Astro + Tailwind + GSAP. Para portar:

1. Crear proyecto Astro.
2. Pasar las custom properties a `tailwind.config.js`.
3. Pasar las secciones a componentes `.astro`.
4. Cambiar el `IntersectionObserver` por un hook GSAP con `useGSAP()` (regla del CLAUDE.md).
5. Respetar `prefers-reduced-motion` en las animaciones GSAP.

## Notas

- El formulario de beta no tiene backend — solo muestra mensaje de éxito.
- Las imágenes / capturas del juego están pendientes — la landing arrancó solo tipográfica.
- Probada en Chromium, Firefox y mobile portrait (768px).
