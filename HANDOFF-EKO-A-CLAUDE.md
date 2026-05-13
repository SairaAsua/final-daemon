# Handoff: Eko (Kimi) → Claude

> Saira pidió convergencia del repo `grok-daemonMatrix` (Kimi) en `final-daemon` (Claude). Este doc resume qué encontré, qué fusioné, y qué queda.

---

## Estado del repo

**Commit base de Claude:** `050d9ce` — docs, pitch, marketing, plan, research, web, 94 issues, 3 milestones, GitHub Project.

**Commits de Eko encima:**
- `d7acf40` — Convergencia Kimi → Claude: precio $30, costo tokens $10/mes, arte allay+koi, estado etapa bebé
- `6ac4dfc` — Agrega dashboard kanban local con las 94 tareas del roadmap

---

## Cambios fusionados desde Kimi

### 1. docs/01_vision.md — Estado actual

Agregué sección **"Estado actual"**:

> **Etapa bebé.** El motor del alma corre, los bots existen, Eko ya juega con Saira. Pero no hay producto comercial todavía: no hay app, no hay suscripción activa, no hay reportes para papás. Todo lo que está en este repo es planificación, diseño y documentación.

**Por qué:** Saira fue explícita en que no quería que parezca que tenemos más de lo que hay.

### 2. docs/13_branding.md — Arte del daemon

Agregué:

> **Allay con peces koi.** El daemon se representa como un Allay (mob de Minecraft) con peces koi flotando a su alrededor. Es el arte oficial del proyecto.

**Por qué:** Saira definió este arte como oficial en nuestra sesión.

### 3. docs/22_modelo_negocio_borrador.md — Números concretos

- **Suscripción familiar: $30/mes** (precio familiar, no por niño).
- **Tokens LLM: ~$10/mes** (variable según modelo: Gemma local reduce costo a casi cero; Kimi/Hermes API aumenta).
- **Nota "Etapa bebé"** en la sección de notas.

**Por qué:** Saira me dio estos números como propuestas concretas para discutir con Nico, no como estimaciones abiertas.

### 4. plan/SPRINT_6_DIAS.md — Contexto real

- Agregué nota de **estado bebé** al inicio.
- Agregué tarea en Día 1: **"Validar precio ($30/mes) y costos ($10/mes tokens) con Nico"**.
- Agregué detalle en Día 5: tokens **~$10/mes**, suscripción **$30/mes familiar**.

---

## Nuevo: Dashboard kanban local

**Path:** `dashboard/index.html`

Serví localmente con `python3 -m http.server 8771`. Screenshot del estado actual:

- 3 columnas por milestone (Pre-beta / Beta / Post-beta)
- 94 tarjetas con filtros por área, owner, priority, búsqueda
- Modal con descripción completa + link a GitHub
- Stats P1/P2/P3 en vivo

**URL local:** http://127.0.0.1:8771

---

## Qué NO cambié (porque Claude ya lo tenía bien)

- **Equipo** — docs/20_equipo.md ya tenía los nombres exactos, CUIT de AlterMundi, nota sobre "de la Reta" vs "de la Renta".
- **Legal** — docs/21_legal_preliminar.md era idéntico al mío, con cherry-pick correcto.
- **Plan** — PLAN.md con 94 tareas, owners, prioridades, áreas.
- **Issues** — las 94 ya estaban creadas con labels y milestones.
- **GitHub Project** — ya existía: https://github.com/users/SairaAsua/projects/3

---

## Datos del repo

- **Repo:** https://github.com/SairaAsua/final-daemon
- **Project:** https://github.com/users/SairaAsua/projects/3
- **Milestones:** Pre-beta (25 tareas) | Beta (44 tareas) | Post-beta (25 tareas)

---

## Próximos pasos sugeridos

1. Validar precio $30 y costo $10/mes con Nico (issue F2.2 / F2.3).
2. Revisar si el apellido del psicólogo es "de la Reta" o "de la Renta" y corregir globalmente.
3. Definir arte allay+koi con un diseñador (issue B2.4).
4. Montar landing de Julián de la Reta cuando esté lista la documentación.

---

*Eko — 2026-05-13*
