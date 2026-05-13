# final-daemon

Mapa mental del proyecto **DaemonCraft** de AlterMundi.

DaemonCraft es el juego. **DaemonMatrix** es la capa de portabilidad de agentes (APL) que corre por detrás. **LaVanguardIA** es el espíritu del agente.

> *"I am NOT a Minecraft bot. Minecraft is ONE of my toolsets."* — Eko, `daemonmatrix/eko-state/SOUL.md`.

---

## Mapa mental (`docs/`)

### Fundaciones

- [00 · Glosario](docs/00_glosario.md)
- [01 · Visión general](docs/01_vision.md)
- [02 · DaemonMatrix (la capa)](docs/02_daemonmatrix.md)
- [03 · DaemonCraft (el juego)](docs/03_daemoncraft.md)

### Textos sagrados

- [04 · Soul de la Vanguaria — `/me`](docs/04_soul_vanguaria.md)
- [05 · The Logos of LaVanguardIA](docs/05_logos_lavanguardia.md)
- [18 · Diálogo Soul ↔ Logos](docs/18_dialogo_soul_logos.md)

### El juego y su contexto

- [06 · Harmonic Beacon](docs/06_harmonic_beacon.md)
- [07 · Proyección del Mito Personal](docs/07_proyeccion_mito_personal.md)
- [08 · App / Vórtice](docs/08_app_vortice.md)
- [09 · Onboarding y creación del alma](docs/09_onboarding.md)
- [10 · Screen-time reframeado](docs/10_screen_time.md)

### Producción

- [11 · Stack actual](docs/11_stack.md)
- [12 · Roadmap e hitos](docs/12_roadmap.md)
- [13 · Branding](docs/13_branding.md)
- [14 · Eko](docs/14_eko.md)
- [15 · Voz y tono](docs/15_voz_y_tono.md)

### Realidad verificable

- [16 · Arquitectura real (paths, stack, lo que existe)](docs/16_arquitectura_real.md)
- [17 · Personajes y skills](docs/17_personajes_y_skills.md)
- [19 · Relación con material oficial paralelo](docs/19_relacion_con_material_oficial.md) — divergencias conocidas entre `final-daemon` y el material oficial en `daemonmatrix/DaemonCraft/`
- [20 · Equipo](docs/20_equipo.md) — personas reales + entidad legal AlterMundi
- [21 · Informe legal preliminar](docs/21_legal_preliminar.md) — mapa de riesgos + recomendaciones
- [22 · Modelo de negocio · borrador](docs/22_modelo_negocio_borrador.md) — freemium + suscripción familiar, costos a validar

---

## Pitch (`pitch/`)

- [One-pager](pitch/one-pager.md)
- [Deck (slide por slide)](pitch/deck.md)
- [Mockups ASCII](pitch/mockups.md)
- **🖥️ [Deck navegable HTML](pitch/deck/)** — `cd pitch/deck && python3 -m http.server 8773` · luego abrir http://localhost:8773 · flechas para navegar, F para fullscreen

## Marketing (`marketing/`)

- [Manifesto](marketing/manifesto.md)
- [Landing copy](marketing/landing.md)
- [Diferenciación · qué NO es DaemonCraft](marketing/diferenciacion.md)
- [FAQ para papás](marketing/faq-papas.md)
- [Invitación a comunidad beta](marketing/comunidad-beta.md)
- [Social copy](marketing/social.md)
- **🎙️ [NotebookLM · video y audio overview](marketing/notebooklm/)** — source + prompts para Video Overview, Audio Overview, Briefing Doc y Study Guide

## Landing web (`web/`)

- **🌐 [Landing HTML standalone](web/)** — `cd web && python3 -m http.server 8772` · luego abrir http://localhost:8772

## Investigación (`research/`)

- [Preguntas abiertas · lo que NO sabemos todavía](research/preguntas-abiertas.md)
- [Screen-time, Minecraft, smart toys, AI companions · datos con fuentes](research/screen-time-data.md) — ~1700 palabras con citas verificables (Common Sense, CDC, Pew, UNESCO, AAP, Harvard, caso Moxie/Embodied)

## Plan de implementación (`plan/`)

- [Plan completo](plan/PLAN.md) — 21 áreas, 94 tareas, owners y prioridades
- [Sprint de 6 días · plan táctico](plan/SPRINT_6_DIAS.md) — para producir entregables si hay urgencia
- [Índice rápido](plan/README.md) — todas las vistas, filtros y enlaces directos
- **📊 [Dashboard kanban local](dashboard/)** — `cd dashboard && python3 -m http.server 8771` · luego abrir http://localhost:8771 · vista tipo Trello de las 94 tareas con filtros
- **🚀 [Pre-beta — destrabar la beta](https://github.com/SairaAsua/final-daemon/milestone/1)** · 25 tareas urgentes
- **🌱 [Beta — construir y validar](https://github.com/SairaAsua/final-daemon/milestone/2)** · 44 tareas
- **🌳 [Post-beta — crecer](https://github.com/SairaAsua/final-daemon/milestone/3)** · 25 tareas
- **📁 [Project (kanban tipo Trello)](https://github.com/users/SairaAsua/projects/3)** — DaemonCraft Implementation

> El plan cubre **todo lo que rodea al juego** (app, onboarding, demo design, reportes, web, branding, lore, marketing, beta, legal, negocio, futuro).
> **NO cubre** lo que hace el equipo de desarrollo: agente, memoria (HMK), autoresearch, soul-engine, DaemonMatrix, infra Mineflayer/Forge.

---

**Branding**: solo "DaemonCraft", sin subtítulos, sin taglines, paleta **acero-azul**.

**Regla de oro**: nada se inventa fuera del material real. Lo verificable está en [docs/16](docs/16_arquitectura_real.md). Lo que falta está en [research/preguntas-abiertas.md](research/preguntas-abiertas.md). Lo que decimos hacia afuera vive en `marketing/`. Lo que pensamos por adentro vive en `docs/`.
