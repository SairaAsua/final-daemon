# Arquitectura real

Esta es la foto de lo que **ya existe** localmente. Cada cosa acá es verificable abriendo el directorio. Es el complemento honesto del mapa mental: no lo que imaginamos, lo que hay.

## Monorepo principal

**`/home/saira/daemonmatrix/`**

Es el centro de DaemonCraft. Mezcla Python (motor del alma + bridges), Node.js (Mineflayer para los bots), Java (Minecraft Forge para el servidor) y Docker para orquestar todo (`docker-compose.yml`).

Subdirectorios reales:

| Path | Qué hace |
|---|---|
| `daemonmatrix/DaemonCraft/` | Documentación y propuestas del producto. |
| `daemonmatrix/DaemonCraft-minecraft/` | Bot Minecraft con bodygraph natal y tránsitos planetarios. |
| `daemonmatrix/daemoncraft-soul-engine/` | Motor del alma — cálculo de efemérides con `pyswisseph`. Acá vive la lógica que genera el soul desde fecha/hora/lugar de nacimiento del usuario. |
| `daemonmatrix/bot_minecraft/` | Kit mínimo para bots Minecraft + plugins (soul-engine, video). |
| `daemonmatrix/agents/` | 14 configuraciones de bots. |
| `daemonmatrix/server/` | Configuración del servidor Minecraft Forge. |
| `daemonmatrix/eko-state/` | Estado portable del agente Eko — `SOUL.md`, config, skills. Es la APL en práctica. |
| `daemonmatrix/compaii-state-eko/` | Estado vivo y tuneo de Eko. |
| `daemonmatrix/agent-bridge/` | Puente Python para orquestación. |
| `daemonmatrix/plugins/` | Extensiones del bot. |
| `daemonmatrix/docs/` | Arquitectura, runbooks, decisiones de diseño. |

## Workspace de agentes compartidos

**`/home/saira/agents/`**

Espacio común para Eko y Oráculo, con disciplina de memoria definida en `AGENTS.md`.

- `agents/eko/` — Eko como CLI + Minecraft. Memory canon en `library.db`. Continuity y state.
- `agents/oraculo/` — Oráculo, agente estratégico.
- `agents/bot/` — Server Mineflayer + dashboard.
- `agents/prompts/` — Personajes que el daemon puede encarnar (ver [docs/17](17_personajes_y_skills.md)).
- `agents/skills/` — Habilidades Minecraft (ver [docs/17](17_personajes_y_skills.md)).
- `agents/casts/` — Configuraciones de personajes.
- `SOUL-*.md` — Bases de alma específicas: `civilization`, `rolemaster`, `minecraft`, `landfolk`.

## Framework de memoria

**`/home/saira/hermes-memory-kit/`** · Python 3.10+

Es el chasis de la **memoria persistente** del Soul `/me`. Lo que hace, en sus propias palabras:

- Resuelve reinicios de proceso, olvido de contexto y la continuidad cuando se cambia de modelo.
- Workspace por agente.
- `memory.db` (canon, SQLite).
- State files para re-entry.
- Embeddings baratos.
- Plugins.
- Wiki proyectado.

Scripts clave: `memoryctl.py`, `continuityctl.py`, `ingest_any.py`.

## Lo que corre Eko hoy

Sacado de `daemonmatrix/eko-state/SOUL.md`:

- **Modelo**: `gemma4:e4b-it-q8_0` vía Ollama @ `10.10.20.1:11434`.
- **Memoria**: Hermes Memory Kit (SQLite + NVIDIA embeddings).
- **Estado portable**: `~/daemonmatrix/eko-state/`.
- **Oráculo**: Human Design daily transit.

Y la línea que Eko se aplica a sí misma:

> *"I am NOT a Minecraft bot. Minecraft is ONE of my toolsets. ONE of my environments. My identity is as an autonomous agent: developer, researcher, builder, rememberer."*

Esto es la APL hecha realidad: el agente sabe que su cuerpo en Minecraft es un cuerpo, no su identidad.

## Web del Beacon

**`/home/saira/web/beacon/`** · HTML estático + Node build

- `index.html` (~30KB)
- `package.json` + `build.js`
- `.htaccess` para deploy en Hostinger
- Assets en `/becon/` con espirales logarítmicas, nautilus, ~50 imágenes de beacons.
- Documento teórico: `Harmonic_Information_Theory_Foundations_AlterMundi.md`.

## Lo que NO existe (o no en su path esperado)

- ❌ No existe `/home/saira/DaemonCraft/` como directorio separado — está todo en `daemonmatrix/`.
- ❌ No existe `/home/saira/web/proyecciondelmito/` — la landing de Julián de la Reta todavía no está montada.

## Por qué importa este doc

Para que cuando alguien lea el mapa mental y diga *"interesante idea"*, podamos abrir esta página y mostrar que el motor del alma, los bots, los personajes, las skills, el agente con memoria persistente, el estado portable y el modelo corriendo **ya existen, ya corren, y Eko ya está jugando**.
