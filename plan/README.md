# Plan de implementación · índice rápido

[**PLAN completo →**](PLAN.md)

## 🎯 Las 3 fases (tipo Trello)

Cada milestone es una vista propia tipo tablero con barra de progreso. **Esta es la forma cómoda de ver todo.**

### 🚀 [Pre-beta — destrabar la beta](https://github.com/SairaAsua/final-daemon/milestone/1)
Las **25 cosas** que hay que decidir / diseñar / escribir **antes** de abrir la beta cerrada.
Decisiones core (stack, dominio, monetización), wireframes, set de preguntas, demo con Julián, branding visual, lista de familias.

### 🌱 [Beta — construir y validar](https://github.com/SairaAsua/final-daemon/milestone/2)
Las **44 cosas** que se construyen / validan **durante** la beta cerrada.
Implementación de la app, mecánicas del demo, sistema de reportes, web pulida, NotebookLM, redes, compliance, costos reales, sistema de feedback.

### 🌳 [Post-beta — crecer](https://github.com/SairaAsua/final-daemon/milestone/3)
Las **25 cosas** que vienen **después** del lanzamiento público.
Internacionalización, newsletter, peluche, embodiments físicos, versión inglés, fundraising.

## 🗂️ Vista kanban con tarjetas

[**Project Board → DaemonCraft Implementation**](https://github.com/users/SairaAsua/projects/3)

Para verlo agrupado por fase (tipo Trello con columnas):
1. Abrir el Project (link arriba)
2. Click en el menú "View options" (arriba a la derecha) → **Group by** → **Milestone**
3. Listo — 3 columnas con tarjetas, drag & drop entre fases.

Otros agrupamientos útiles:
- **Group by → Labels** → ver por área (App, Onboarding, Demo, etc.)
- **Group by → Assignees** → ver por persona cuando asignemos

## 📋 Vista plana

- [Todos los issues abiertos](https://github.com/SairaAsua/final-daemon/issues)

## Las 21 áreas

| Sección | Área | Qué cubre |
|---|---|---|
| 🟦 Producto | A1 | App / Vórtice |
| 🟦 Producto | A2 | Onboarding |
| 🟦 Producto | A3 | Demo de entrada (Protector de la Luz) |
| 🟦 Producto | A4 | Reportes a papás |
| 🟦 Producto | A5 | Harmonic Beacon integración |
| 🎨 Branding | B1 | Web pública |
| 🎨 Branding | B2 | Branding visual |
| 🎨 Branding | B3 | Lore y narrativa |
| 📣 Comunicación | C1 | Pitch deck final |
| 📣 Comunicación | C2 | NotebookLM workflow |
| 📣 Comunicación | C3 | Redes sociales |
| 📣 Comunicación | C4 | Newsletter + email funnel |
| 📣 Comunicación | C5 | Press / blog de lanzamiento |
| 👨‍👩‍👧 Beta | D1 | Comunidad beta · primeras 20 familias |
| 🔮 Futuro | E1 | Peluche |
| 🔮 Futuro | E2 | Embodiments físicos |
| ⚖️ Legal | F1 | Legal / Compliance |
| ⚖️ Negocio | F2 | Modelo de negocio |
| ⚖️ Research | F3 | Investigación pendiente |
| 🔧 Ops | G1 | Equipo + roles |
| 🔧 Ops | G2 | Internacionalización |

## Owners

- **`saira`** — Saira. Visión, decisiones grandes, branding, beta, copy final.
- **`dev`** — Equipo dev AlterMundi. Todo lo técnico (app backend, integración con agente, infra).
- **`julian`** — Julián de la Reta. Narrativa del demo, *Proyección del Mito Personal*, reportes psicológicos.
- **`claude`** — Yo. Documentación, copy, mockups, research, pitch, web standalone.
- **`tbd`** — A definir cuando aparezca quién.

## Filtros útiles

Click directo:
- 🔴 [Lo urgente · pre-beta](https://github.com/SairaAsua/final-daemon/milestone/1)
- 🟡 [Lo de la beta](https://github.com/SairaAsua/final-daemon/milestone/2)
- 🟢 [Lo de después](https://github.com/SairaAsua/final-daemon/milestone/3)

Por owner:
- 👩 [Saira (vos)](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+label%3Aowner%3Asaira)
- 👨‍💻 [Equipo dev](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+label%3Aowner%3Adev)
- 🧠 [Julián de la Reta](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+label%3Aowner%3Ajulian)
- 🤖 [Claude (yo)](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+label%3Aowner%3Aclaude)

Por tipo de tarea:
- ⚖️ [Decisiones pendientes](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+label%3Atype%3Adecision)
- 🎨 [Diseño](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+label%3Atype%3Adesign)
- 🔨 [Build](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+label%3Atype%3Abuild)
- 🔍 [Research](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+label%3Atype%3Aresearch)
- ✍️ [Escribir / copy](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+label%3Atype%3Awrite)

Cruzados (vos podés combinarlos):
- 🔴👩 [Lo urgente que decide Saira](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+label%3Aowner%3Asaira+label%3Apriority%3Ap1)
- 🔴⚖️ [Decisiones urgentes (cualquier owner)](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+label%3Apriority%3Ap1+label%3Atype%3Adecision)
