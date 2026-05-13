# Plan de implementación · DaemonCraft (todo lo que NO es el juego)

> **Scope**: este plan cubre **todo lo que rodea al juego** (app, onboarding, demo design, reportes, web, branding, lore, marketing, beta, legal, negocio, futuro).
> **NO cubre** lo que ya está haciendo el equipo de desarrollo: el agente / bot, la memoria persistente (HMK), el autoresearch, el soul-engine técnico, DaemonMatrix / APL, fine-tuning de modelos, infraestructura Mineflayer / Forge.

> Las **tareas** de este plan se convierten en **issues** en GitHub, agrupadas en un Project tipo kanban.

## Convenciones

Cada tarea lleva:
- **Owner sugerido**: `saira` · `dev` (equipo dev AlterMundi) · `julian` (Julián de la Reta) · `claude` · `tbd`
- **Tipo**: `decision` · `design` · `build` · `research` · `write`
- **Prioridad**: `p1` (urgente, antes de beta) · `p2` (importante, durante beta) · `p3` (después)

---

## 🟦 PRODUCTO

### A1 · App / Vórtice

**Objetivo**: que niños y papás tengan un único punto de entrada al mundo del daemon, con sus dos flujos diferenciados.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| A1.1 | Decisión de stack: nativo iOS/Android, PWA, o solo web responsive | tbd | decision | p1 |
| A1.2 | Wireframes completos · flujo niño (home, jugar, hablar con daemon, escuchar Beacon, skins) | claude | design | p1 |
| A1.3 | Wireframes completos · flujo papá (home, reporte, hablar con daemon del hijo, invitación a jugar) | claude | design | p1 |
| A1.4 | Sistema de cuentas: cómo se asocia un niño con sus papás, autenticación | tbd | design | p1 |
| A1.5 | Backend mínimo: API entre app y agente (qué endpoints, qué auth) | dev | build | p2 |
| A1.6 | Implementación MVP de la app | dev | build | p2 |

### A2 · Onboarding

**Objetivo**: que la primera experiencia desde "descargo el juego" hasta "encendí el Beacon" sea fluida y emocionante.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| A2.1 | Definir set de preguntas inicial (fecha/hora/lugar + lo que decida el equipo) | saira | decision | p1 |
| A2.2 | Catálogo inicial de personajes para el daemon (curar de los 14 que ya existen en `agents/prompts/`) | saira | decision | p1 |
| A2.3 | Catálogo inicial de skins (humano + daemon): cantidad, estilo, cómo se desbloquean | tbd | design | p2 |
| A2.4 | Flujo de selección y creación de server | dev | build | p2 |
| A2.5 | Tutorial inicial: cómo se le explica al niño qué es su daemon | claude + julian | write | p1 |

### A3 · Demo de entrada · Protector de la Luz

**Objetivo**: que el demo sea inolvidable y cumpla la función de Proyección del Mito Personal.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| A3.1 | Diseño narrativo final de las 4 pruebas con Julián | julian + saira | design | p1 |
| A3.2 | Mecánicas concretas de cada prueba (qué se hace, cómo, condiciones de éxito) | dev + julian | design | p1 |
| A3.3 | Integración del daemon en el demo: qué dice, cuándo, cómo se comporta | dev + julian | design | p2 |
| A3.4 | Integración del campo armónico del Beacon en el demo | dev | build | p2 |
| A3.5 | Escena final: encendido del Beacon (visual + sonoro) | dev | build | p2 |
| A3.6 | QA del demo con las primeras 5 familias beta | saira + dev | research | p2 |

### A4 · Reportes a papás

**Objetivo**: que los papás reciban reportes de **crecimiento** (no de horas) que les den confianza y ganas de jugar con el hijo.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| A4.1 | Definir estructura del reporte: qué bullets aparecen (matemáticas, lectura, risas, preguntas, etc.) | saira + julian | decision | p1 |
| A4.2 | Decisión de frecuencia: diaria, semanal, on-demand | saira | decision | p1 |
| A4.3 | Decisión de canal: app push, email, Telegram, otra | saira | decision | p1 |
| A4.4 | Definir métricas que el daemon va a observar y reportar | dev + julian | decision | p1 |
| A4.5 | Diseño visual del reporte (en app + en canal alternativo) | claude | design | p2 |
| A4.6 | Sistema de invitación a jugar (cuándo el juego invita al papá) | dev | build | p2 |

### A5 · Harmonic Beacon · integración

**Objetivo**: que la música armónica esté presente dentro y fuera del juego, y prepare el futuro peluche.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| A5.1 | Curaduría de pistas para el demo (qué frecuencias en qué momento) | tbd | design | p2 |
| A5.2 | Sistema técnico de delivery in-game | dev | build | p2 |
| A5.3 | Reproductor del Beacon en la app | dev | build | p3 |
| A5.4 | Catálogo público de música del Beacon | tbd | design | p3 |

---

## 🎨 BRANDING + WEB + NARRATIVA

### B1 · Web pública

**Objetivo**: que `daemoncraft.com` (o el dominio que sea) cuente la historia y capture beta sign-ups.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| B1.1 | Decisión de stack final: pulir HTML standalone actual o portar a Astro+Tailwind+GSAP | saira | decision | p1 |
| B1.2 | Decisión de dominio (daemoncraft.com / .ar / otro) y compra | saira | decision | p1 |
| B1.3 | Decisión de hosting (Hostinger, Vercel, Netlify) | saira | decision | p1 |
| B1.4 | Pulido final del copy (basado en `marketing/landing.md`) | claude | write | p2 |
| B1.5 | Capturas / mockups reales del juego para hero y secciones | dev + saira | design | p2 |
| B1.6 | SEO básico + analytics (privacy-friendly: Plausible, Umami) | claude | build | p3 |
| B1.7 | Conectar formulario de beta a backend real (no solo UI) | dev | build | p2 |

### B2 · Branding visual

**Objetivo**: tener un sistema visual sólido más allá de la paleta acero-azul.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| B2.1 | Logo final (texto + ícono opcional) | tbd | design | p1 |
| B2.2 | Sistema visual completo (espaciado, tipografía, escalas, motion) | tbd | design | p2 |
| B2.3 | Iconografía propia (vs lucide/heroicons) | tbd | design | p3 |
| B2.4 | Avatars / sprites de los daemons (los 14 iniciales) | tbd | design | p2 |
| B2.5 | Brand guidelines doc | claude | write | p3 |

### B3 · Lore y narrativa

**Objetivo**: que DaemonCraft tenga un universo coherente que aguante el peso del Soul `/me` y el Logos sin exponer Diseño Humano.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| B3.1 | Universe bible: qué es el mundo de DaemonCraft narrativamente | saira + julian | write | p2 |
| B3.2 | Backstory de Eko (y otros daemons existentes si los hay) | saira | write | p2 |
| B3.3 | Integrar Soul `/me` + Logos al lore sin nombrar Ra Uru Hu | claude + saira | write | p2 |
| B3.4 | Definir naming convention para daemons (sugerencias del juego) | saira | decision | p3 |

---

## 📣 COMUNICACIÓN

### C1 · Pitch deck final

**Objetivo**: tener un deck listo para mostrar a partners / inversores / equipo.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| C1.1 | Decisión: pulir HTML deck existente o portar a Keynote/Slides | saira | decision | p2 |
| C1.2 | Agregar capturas reales del juego al deck | dev + saira | design | p2 |
| C1.3 | Exportar versión PDF para mandar por email | claude | build | p2 |
| C1.4 | Versión inglés del deck | claude | write | p3 |

### C2 · NotebookLM workflow

**Objetivo**: generar Video Overview + Audio Overview oficiales con NotebookLM.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| C2.1 | Subir `marketing/notebooklm/source.md` a NotebookLM | saira | build | p2 |
| C2.2 | Generar Video Overview con `prompts_video.md`, revisar y aprobar | saira | build | p2 |
| C2.3 | Generar Audio Overview con `prompts_audio.md`, revisar y aprobar | saira | build | p2 |
| C2.4 | Generar Briefing Doc + Study Guide | saira | build | p3 |

### C3 · Redes sociales

**Objetivo**: presencia mínima viable en IG/X/TikTok que acompañe la beta.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| C3.1 | Decisión: qué canales arrancamos (IG sí/no, X sí/no, TikTok sí/no) | saira | decision | p2 |
| C3.2 | Plan de primer mes de contenido (basado en `marketing/social.md`) | claude + saira | write | p2 |
| C3.3 | Crear cuentas con handle consistente | saira | build | p2 |
| C3.4 | Primer post en cada canal | saira | build | p2 |

### C4 · Newsletter + email funnel

**Objetivo**: tener un canal directo con las primeras familias y con quienes quieran seguir el proyecto.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| C4.1 | Decisión de plataforma (Buttondown, ConvertKit, Beehiiv, etc.) | saira | decision | p3 |
| C4.2 | Copy de los 3 primeros emails (welcome → updates → invitación a jugar) | claude | write | p3 |
| C4.3 | Setup de la integración con el formulario de beta | dev | build | p3 |

### C5 · Press / blog de lanzamiento

**Objetivo**: tener un post de lanzamiento listo para cuando se abra la beta pública.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| C5.1 | Borrador del blog post de lanzamiento | claude | write | p2 |
| C5.2 | Lista de medios / periodistas / newsletters para difusión | saira | research | p3 |
| C5.3 | Versión inglés del blog post | claude | write | p3 |

---

## 👨‍👩‍👧 BETA

### D1 · Comunidad beta

**Objetivo**: que las primeras 20 familias tengan una experiencia memorable y nos den feedback útil.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| D1.1 | Lista de 20-30 familias candidatas (con datos de contacto) | saira | research | p1 |
| D1.2 | Mensaje de invitación final, basado en `marketing/comunidad-beta.md` | claude + saira | write | p1 |
| D1.3 | Onboarding por familia: call de 30 min · agenda + script | saira | design | p1 |
| D1.4 | Sistema de feedback: ¿qué herramienta? (Tally, Notion, Discord, etc.) | saira | decision | p1 |
| D1.5 | Métricas a observar durante la beta (basadas en `marketing/comunidad-beta.md`) | saira | decision | p2 |
| D1.6 | Canal de comunicación con beta (Discord, WhatsApp group, etc.) | saira | decision | p2 |

---

## 🔮 FUTURO

### E1 · Peluche

**Objetivo**: explorar el peluche-daemon que hace música y se mueve, como compañero animal.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| E1.1 | Concepto visual del peluche (form factor, materiales, expresividad) | tbd | design | p3 |
| E1.2 | Research de partners de manufactura (Argentina + LATAM) | tbd | research | p3 |
| E1.3 | Estimación de costos por unidad | tbd | research | p3 |
| E1.4 | Prototipo funcional (música + movimiento, sin habla) | tbd | build | p3 |

### E2 · Embodiments físicos

**Objetivo**: definir el roadmap de los embodiments físicos (impresora 3D, telescopio, etc.).

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| E2.1 | Documento de visión: qué embodiments físicos en qué orden | saira | write | p3 |
| E2.2 | Research de pipeline juego → STL → impresora 3D | dev | research | p3 |
| E2.3 | Research de telescopios accesibles + APIs | tbd | research | p3 |

---

## ⚖️ LEGAL + NEGOCIO

### F1 · Legal / Compliance

**Objetivo**: cubrir las bases legales antes de tener usuarios pagantes.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| F1.1 | Decisión de entidad legal que vende DaemonCraft | saira | decision | p1 |
| F1.2 | T&C y política de privacidad — borrador | tbd | write | p2 |
| F1.3 | Compliance COPPA (datos de niños US) — chequeo formal | tbd | research | p2 |
| F1.4 | Compliance GDPR (datos de niños EU) — chequeo formal | tbd | research | p2 |
| F1.5 | Compliance LGPD (Brasil) y normas Argentina/Latam | tbd | research | p2 |
| F1.6 | Flujo de consentimiento parental en el onboarding | tbd | design | p1 |

### F2 · Modelo de negocio

**Objetivo**: tener un modelo de negocio claro antes de salir a beta pública.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| F2.1 | Decisión de modelo de monetización (free / freemium / suscripción / etc.) | saira | decision | p1 |
| F2.2 | Decisión de pricing | saira | decision | p2 |
| F2.3 | Cálculo de costos reales por usuario activo (tokens + servers + LLM) | dev | research | p2 |
| F2.4 | Plan financiero / proyección a 12 meses | saira | research | p3 |
| F2.5 | Decisión de fundraising (si aplica, cuándo, cuánto) | saira | decision | p3 |

### F3 · Investigación pendiente

**Objetivo**: cerrar las preguntas abiertas técnicas / legales / de mercado.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| F3.1 | Marco legal específico Argentina/UE/USA para juegos con IA + menores | tbd | research | p2 |
| F3.2 | Compatibilidad Minecraft Java vs Bedrock para los plug-ins del agente | dev | research | p2 |
| F3.3 | Tiempo promedio por sesión de Minecraft oficial — datos faltantes | claude | research | p3 |
| F3.4 | Casos comparables vivos (no fracasos como Moxie/Embodied) | claude | research | p3 |

---

## 🔧 OPERACIONES

### G1 · Equipo + roles

**Objetivo**: claridad sobre quién hace qué.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| G1.1 | Documento de roles del equipo actual (quién hace qué) | saira | write | p1 |
| G1.2 | Cadencia de reuniones / sincronización | saira | decision | p2 |
| G1.3 | Herramientas de trabajo (qué Discord / Slack / Linear / Notion usamos) | saira | decision | p2 |

### G2 · Internacionalización

**Objetivo**: decidir si arrancamos solo en español o bilingüe.

| # | Tarea | Owner | Tipo | Prio |
|---|---|---|---|---|
| G2.1 | Decisión: ¿lanzamos bilingüe es/en o solo español primero? | saira | decision | p2 |
| G2.2 | Si bilingüe: traducción de docs/marketing/web | claude | write | p3 |

---

## Resumen

| Sección | Áreas | Tareas |
|---|---|---|
| 🟦 PRODUCTO | A1, A2, A3, A4, A5 | 27 |
| 🎨 BRANDING + WEB + NARRATIVA | B1, B2, B3 | 16 |
| 📣 COMUNICACIÓN | C1, C2, C3, C4, C5 | 18 |
| 👨‍👩‍👧 BETA | D1 | 6 |
| 🔮 FUTURO | E1, E2 | 7 |
| ⚖️ LEGAL + NEGOCIO | F1, F2, F3 | 15 |
| 🔧 OPERACIONES | G1, G2 | 5 |
| **Total** | **21 áreas** | **94 tareas** |

Cada tarea se va a transformar en un issue de GitHub con labels `area:` + `owner:` + `type:` + `priority:`, agrupada en un Project tipo kanban.
