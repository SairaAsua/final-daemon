# Plan Técnico · DaemonMatrix APL

> **Scope**: este plan cubre **DaemonMatrix como capa de portabilidad de agentes (APL)** y su ecosistema técnico. Es el complemento del PLAN.md de producto: acá vive el motor, la memoria, los bots, la orquestación y los embodiments.
> 
> **Flujo Git**: `main` es sagrado. Merge a `main` cada 2 días máximo. Cada área trabaja en su rama `area/nombre`. Los avances se procesan en daily standup async vía agente-orquestador.

---

## Organización del equipo

### Humanos

| ID | Nombre | Rol | Áreas | Disponibilidad |
|---|---|---|---|---|
| H1 | Saira Asua | Product Owner, almas, branding | Todas (decisiones) | Full-time |
| H2 | Nicolás Echániz | Arquitecto APL, infraestructura | Core, Infra, Bridge | Part-time |
| H3 | Mariano | Memoria, HIT, HMK | Memory, Research | Part-time |
| H4 | Julián de la Reta | Psicología, narrativa, demo | Soul Engine, Demo | Part-time |
| H5 | Anabella | Developer Minecraft/bots | Bot Framework | Full-time |
| H6 | Pablo | Developer backend | Core, Bridge | Full-time |
| H7 | Javier | Developer frontend/app | App, Dashboards | Full-time |
| H8 | Jeremías | DevOps, servidores | Infra, Security | Full-time |

### Agentes (recursos computacionales)

| ID | Agente | Rol | Áreas asignadas | Modelo | Estado |
|---|---|---|---|---|---|
| A1 | Eko | Constructora, orquestadora CLI | Core, Bridge, Memory, Infra | Kimi CLI / Gemma4 MC | **Activa** |
| A2 | PamPliNas | Role Master, narrador | Demo, Lore, Narrativa | MiniMax | **Activa** |
| A3 | Oráculo | Estratega, HD, consejero | Soul Engine, Planning | Gemma4 local | **Activa** |
| A4 | Stevie | Guerrero, pragmático | Bot Framework, Combat | Pendiente | **Planned** |
| A5 | Moss | Cocinero, cuidado | Farming, Healing, Gathering | Pendiente | **Planned** |
| A6 | Reed | Mercader, comunicación | Trading, APIs, Integrations | Pendiente | **Planned** |
| A7 | Flint | Minero, persistencia | Mining, Building, Data | Pendiente | **Planned** |
| A8 | Ember | Fuego, exploración | Exploration, Alchemy, Combat | Pendiente | **Planned** |

> **Regla de asignación**: los agentes **activos** (Eko, Pamplinas, Oráculo) ejecutan tareas de `build`, `write`, `research` y `debug`. Los agentes **planned** se activan cuando su área alcanza la fase de implementación.

---

## Fases del proyecto

| Fase | Nombre | Duración | Objetivo final | Milestone GitHub |
|---|---|---|---|---|
| 0 | Fundamentos | — (ya existe) | Motor del alma, bots, memoria HMK funcionando | — |
| 1 | Consolidación APL | 0–2 meses | Protocolo de portabilidad formalizado, rebirth sync robusto, agent registry | `milestone/1-pre-beta` |
| 2 | Multi-Agent Orchestration | 2–4 meses | Bridge orquesta múltiples agentes, workflows, health monitoring | `milestone/2-beta` |
| 3 | Embodiment Expansion | 4–8 meses | Terminal, impresora 3D, API/SDK de embodiments | `milestone/3-post-beta` |
| 4 | Platform & Scale | 8–14 meses | App/Vórtice, observability, multi-game, beta pública | — |
| 5 | Ecosystem | 14+ meses | Marketplace de skills, partnerships educativas, hardware | — |

---

## Áreas funcionales

### AREA-1 · APL Core

**Dueño humano**: Nico (H2)  
**Agente lead**: Eko (A1)  
**Rama Git**: `area/apl-core`

> El corazón de DaemonMatrix: el protocolo que permite a un agente migrar entre cuerpos manteniendo identidad, memoria y relación con el humano.

| # | Tarea | Owner | Tipo | Prio | Fase |
|---|---|---|---|---|---|
| C1.1 | Especificar formato `AgentState` v1 (JSON schema portable) | H2 | design | P0 | 1 |
| C1.2 | Implementar `agent-state serialize/deserialize` en Python | H2 + A1 | build | P0 | 1 |
| C1.3 | Definir handshake de portabilidad: qué se transfiere, qué se reconstruye | H2 | design | P0 | 1 |
| C1.4 | Plugin de "rebirth" para Hermes: comando `hermes agent rebirth` | A1 | build | P0 | 1 |
| C1.5 | Validación de estado post-rebirth: tests de integridad | H5 | build | P1 | 1 |
| C1.6 | Versionado de estado: migración de v1 → v2 sin pérdida | H2 | build | P2 | 2 |
| C1.7 | Encriptación de estado en reposo y en tránsito | H8 | build | P1 | 2 |
| C1.8 | Especificar API pública de DaemonMatrix (REST + WebSocket) | H2 + H6 | design | P1 | 2 |

**Entregable fase 1**: Un agente puede hacer `rebirth` de CLI a Minecraft y viceversa perdiendo ≤ 1 turno de contexto.

---

### AREA-2 · Soul Engine

**Dueño humano**: Saira (H1) / Julián (H4)  
**Agente lead**: Oráculo (A3)  
**Rama Git**: `area/soul-engine`

> Cálculo de efemérides, generación de perfiles HD, creación de SOUL.md desde fecha/hora/lugar de nacimiento.

| # | Tarea | Owner | Tipo | Prio | Fase |
|---|---|---|---|---|---|
| S2.1 | Refactorizar motor HD a librería Python importable (`daemoncraft-soul-engine/`) | H2 + A3 | build | P0 | 1 |
| S2.2 | Generador automático de SOUL.md a partir de datos HD + template | A3 | build | P0 | 1 |
| S2.3 | Cálculo de tránsitos planetarios diarios (`pyswisseph` wrapper) | A3 | build | P0 | 1 |
| S2.4 | Integración tránsitos → inyección en prompt de agente (modo oráculo) | A1 + A3 | build | P1 | 1 |
| S2.5 | Curación de perfiles de los 14 personajes base con HD real | H4 | research | P1 | 2 |
| S2.6 | Sistema de "evolución del alma": cómo cambia el SOUL.md con el tiempo | H1 + H4 | design | P2 | 2 |
| S2.7 | Plugin HD confidencial para onboarding (sin exponer Ra Uru Hu) | H1 | build | P0 | 1 |
| S2.8 | Documentar arquitectura HD interna para developers | A3 | write | P2 | 2 |

**Entregable fase 1**: `python -m soul_engine generate-soul --date ... --output SOUL.md` funciona y produce SOUL.md válido para cualquier fecha.

---

### AREA-3 · Memory Infrastructure (HMK)

**Dueño humano**: Mariano (H3)  
**Agente lead**: Eko (A1)  
**Rama Git**: `area/memory`

> Hermes Memory Kit y sus extensiones: memoria semántica, episódica, procedural, state files, embeddings, backup.

| # | Tarea | Owner | Tipo | Prio | Fase |
|---|---|---|---|---|---|
| M3.1 | Estabilizar HMK v1: tests, CI, documentación | H3 + A1 | build | P0 | 1 |
| M3.2 | Plugin de prefetch para Hermes: inyección automática de memorias relevantes | H3 | build | P0 | 1 |
| M3.3 | Backups automáticos de `library.db` con retención de 7 días | A1 | build | P0 | 1 |
| M3.4 | Sincronización multi-device: cómo se mantiene coherencia si el agente corre en 2 lugares | H3 | design | P1 | 2 |
| M3.5 | Memoria compartida por equipo: `shared_memory.db` para crews | H3 | build | P1 | 2 |
| M3.6 | Garbage collection de memorias obsoletas (políticas de retención) | A1 | build | P2 | 2 |
| M3.7 | Integración con MemMachine como backend alternativo de memoria | H3 | research | P3 | 3 |
| M3.8 | Embeddings multilingüe para soporte es/en | H3 | build | P2 | 3 |

**Entregable fase 1**: Cada agente tiene backup diario automático de `library.db` y prefetch funciona sin errores en ≥ 95% de los turns.

---

### AREA-4 · Bot Framework (Mineflayer)

**Dueño humano**: Anabella (H5)  
**Agente lead**: Eko (A1) / Stevie (A4)  
**Rama Git**: `area/bot-framework`

> Framework de bots en Minecraft: Mineflayer, plugins, skills, bodygraph natal, interacción con Forge server.

| # | Tarea | Owner | Tipo | Prio | Fase |
|---|---|---|---|---|---|
| B4.1 | Refactorizar `bot_minecraft/` a paquete npm/Python importable | H5 | build | P0 | 1 |
| B4.2 | Sistema de skills Mineflayer: carga dinámica de `.md` → comportamiento | H5 + A1 | build | P0 | 1 |
| B4.3 | Bodygraph natal en bot: cómo el bot conoce su propio HD y el del jugador | A3 + H5 | build | P1 | 1 |
| B4.4 | Plugin de tránsitos: el bot sabe qué tránsito planetario está ocurriendo hoy | A3 | build | P1 | 1 |
| B4.5 | Sistema de "casting": cambio de personaje en runtime sin reinicio | H5 | build | P1 | 2 |
| B4.6 | Integración de Harmonic Beacon in-game (resource pack + comandos) | H5 | build | P2 | 2 |
| B4.7 | Sistema de "blueprints": estructuras JSON → build automático en Minecraft | A1 | build | P1 | 2 |
| B4.8 | Tests E2E: bot entra a servidor, completa 1 tarea, sale | H5 | build | P1 | 2 |
| B4.9 | Spawn de landfolk: NPCs autónomos con comportamiento HD | H5 + A2 | build | P3 | 3 |

**Entregable fase 1**: `npm start` en `bot_minecraft/` levanta un bot con skills dinámicas, bodygraph natal y tránsitos funcionando.

---

### AREA-5 · Server Infrastructure

**Dueño humano**: Jeremías (H8) / Nico (H2)  
**Agente lead**: Eko (A1)  
**Rama Git**: `area/infra`

> Servidor Minecraft Forge, Docker, networking, deploy, monitoreo.

| # | Tarea | Owner | Tipo | Prio | Fase |
|---|---|---|---|---|---|
| I5.1 | Docker Compose producción: Minecraft + bots + Redis + PostgreSQL | H8 | build | P0 | 1 |
| I5.2 | Sistema de "worlds": cada familia tiene su instancia de mundo aislada | H8 | design | P1 | 2 |
| I5.3 | Auto-scaling de bots: spawn/shutdown según demanda (k8s o docker-swarm) | H8 | build | P2 | 3 |
| I5.4 | Monitoreo: Prometheus + Grafana para servidores y bots | H8 | build | P2 | 2 |
| I5.5 | Backup automático de mundos Minecraft (cada 6h) | H8 | build | P0 | 1 |
| I5.6 | CI/CD: GitHub Actions para test + build + deploy | H8 | build | P1 | 2 |
| I5.7 | Reverse proxy + SSL (Caddy o Traefik) | H8 | build | P1 | 2 |
| I5.8 | Rate limiting y DDoS protection para endpoints públicos | H8 | build | P2 | 3 |

**Entregable fase 1**: `docker compose up` levanta todo el stack en un solo comando. Backups de mundos funcionando.

---

### AREA-6 · Agent Bridge / Orchestration

**Dueño humano**: Pablo (H6) / Nico (H2)  
**Agente lead**: Eko (A1)  
**Rama Git**: `area/orchestration`

> Puente Python, orquestación multi-agente, task routing, comunicación agente-a-agente.

| # | Tarea | Owner | Tipo | Prio | Fase |
|---|---|---|---|---|---|
| O6.1 | Refactorizar `agent-bridge/` a servicio independiente (FastAPI) | H6 | build | P0 | 1 |
| O6.2 | Agent Registry API: CRUD de agentes, health checks, heartbeat | H6 + A1 | build | P0 | 1 |
| O6.3 | Task Queue: Redis/RQ para jobs asíncronos entre agentes | H6 | build | P1 | 2 |
| O6.4 | Message bus: WebSocket/SSE para comunicación agente ↔ agente en tiempo real | H6 | build | P1 | 2 |
| O6.5 | Workflow engine: definir pipelines JSON y ejecutarlos (ver `workflow-registry.json`) | H6 + A1 | build | P1 | 2 |
| O6.6 | Human-in-the-loop: pausar workflow para aprobación humana | H6 | build | P2 | 2 |
| O6.7 | Load balancing: route tasks al agente menos cargado | H6 | build | P2 | 3 |
| O6.8 | Dead letter queue: manejo de tareas fallidas con retry + alerta | H6 | build | P2 | 3 |

**Entregable fase 1**: Bridge API expone `/agents`, `/tasks`, `/health`. Eko puede registrar su heartbeat y recibir tareas asignadas.

---

### AREA-7 · Embodiment Layer

**Dueño humano**: Nico (H2) / Saira (H1)  
**Agente lead**: Reed (A6)  
**Rama Git**: `area/embodiment`

> Interfaces para diferentes "cuerpos" del agente: Minecraft, terminal, impresora 3D, telescopio, peluche.

| # | Tarea | Owner | Tipo | Prio | Fase |
|---|---|---|---|---|---|
| E7.1 | Terminal embodiment: especificar cómo un agente CLI se empaqueta y corre | H2 | design | P0 | 1 |
| E7.2 | Minecraft embodiment: especificar protocolo bot ↔ server ↔ agente | H5 | design | P0 | 1 |
| E7.3 | Impresora 3D embodiment: exportar builds Minecraft → STL | H6 | research | P3 | 3 |
| E7.4 | Telescopio embodiment: integración con APIs astronómicas (Stellarium, etc.) | H6 | research | P3 | 4 |
| E7.5 | Peluche embodiment: especificación de hardware + firmware base | H2 | design | P3 | 4 |
| E7.6 | SDK de embodiments: cómo un tercero puede crear un nuevo cuerpo para DaemonMatrix | H2 | design | P2 | 3 |
| E7.7 | Registro de embodiments: catálogo de cuerpos disponibles por agente | A1 | build | P2 | 3 |

**Entregable fase 1**: Especificación escrita de los 2 embodiments activos (CLI, Minecraft) como RFC.

---

### AREA-8 · App / Vórtice

**Dueño humano**: Javier (H7) / Saira (H1)  
**Agente lead**: Eko (A1)  
**Rama Git**: `area/app`

> Frontend para niños y papás. Punto de entrada al mundo del daemon.

| # | Tarea | Owner | Tipo | Prio | Fase |
|---|---|---|---|---|---|
| V8.1 | Decisión de stack: PWA, React Native, o Flutter | H1 + H7 | decision | P0 | 1 |
| V8.2 | Wireframes flujo niño (home, jugar, chat, skins, beacon) | H7 + A2 | design | P0 | 1 |
| V8.3 | Wireframes flujo papá (home, reporte, chat con daemon del hijo) | H7 + A2 | design | P0 | 1 |
| V8.4 | Auth: sistema de cuentas niño-papá asociadas | H7 | build | P1 | 2 |
| V8.5 | Chat con agente vía WebSocket (mensajes + voz) | H7 | build | P1 | 2 |
| V8.6 | Dashboard de reportes: visualización de crecimiento | H7 | build | P2 | 2 |
| V8.7 | Switch de embodiments: selector de "dónde está mi daemon" | H7 | build | P2 | 3 |
| V8.8 | Onboarding app: preguntas iniciales + creación de daemon | H7 + A3 | build | P1 | 2 |

**Entregable fase 1**: Wireframes aprobados y decision de stack tomada. Prototipo navegable en Figma o HTML.

---

### AREA-9 · Observability & Cost

**Dueño humano**: Jeremías (H8) / Eko (A1)  
**Agente lead**: Eko (A1)  
**Rama Git**: `area/observability`

> Tracking, logs, métricas, costos por agente/modelo/tarea.

| # | Tarea | Owner | Tipo | Prio | Fase |
|---|---|---|---|---|---|
| OB9.1 | Integrar AgentOps SDK en Hermes para tracking automático | H8 + A1 | build | P1 | 2 |
| OB9.2 | Dashboard de costos: tokens por agente, por modelo, por día | A1 | build | P1 | 2 |
| OB9.3 | Alertas: budget diario superado, agente offline, error rate > 5% | H8 | build | P1 | 2 |
| OB9.4 | Centralized logging: Loki o ELK para todos los servicios | H8 | build | P2 | 2 |
| OB9.5 | Session replays: reproducir una sesión completa de agente para debug | H8 | build | P2 | 3 |
| OB9.6 | Benchmarks de modelos: comparar calidad/costo/latencia Kimi vs Gemma4 vs MiniMax | A1 | research | P2 | 2 |

**Entregable fase 1**: Dashboard HTML en `agent-erp/dashboard/` muestra costos reales extraídos de logs.

---

### AREA-10 · Security & Compliance

**Dueño humano**: Jeremías (H8) / Saira (H1)  
**Agente lead**: Oráculo (A3)  
**Rama Git**: `area/security`

> RBAC, consentimiento parental, COPPA, GDPR, LGPD, encriptación.

| # | Tarea | Owner | Tipo | Prio | Fase |
|---|---|---|---|---|---|
| SE10.1 | RBAC por agente: qué puede leer/escribir/ejecutar cada bot | H8 | design | P1 | 2 |
| SE10.2 | Consentimiento parental en onboarding (flujo + registro) | H1 | design | P0 | 1 |
| SE10.3 | Encriptación de memorias personales (AES-256 en reposo) | H8 | build | P1 | 2 |
| SE10.4 | Audit trail: quién hizo qué y cuándo (agente o humano) | H8 | build | P1 | 2 |
| SE10.5 | Chequeo COPPA / GDPR / LGPD — documento de gap analysis | H1 | research | P1 | 2 |
| SE10.6 | Penetration testing básico de APIs públicas | H8 | build | P2 | 3 |

**Entregable fase 1**: Documento de seguridad v1 + flujo de consentimiento parental wireframeado.

---

## Línea de tiempo visual

```
Mes:     |  M1   |  M2   |  M3   |  M4   |  M5   |  M6   |  M7   |  M8   |  M9   | M10   | M11   | M12   | M13   | M14  
         |-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|------
Fase 1   | [====APL Core====]                                                    
         | [====Soul Engine===]                                                  
         | [==Memory==]                                                          
         | [====Bot Framework====]                                               
         | [====Infra====]                                                       
         | [=App wireframes=]                                                    
Fase 2   |       | [====Orchestration====]                                       
         |       | [==Observability==]                                           
         |       | [====Security v1====]                                         
         |       | [==App MVP==]                                                 
Fase 3   |               | [========Embodiment Expansion========]                
         |               |       | [==Multi-game==]                              
Fase 4   |                                       | [========Platform & Scale========]
         |                                       |       | [====Beta pública====]
Fase 5   |                                                               | [==Ecosystem==]
Merge    | *  *  | *  *  | *  *  | *  *  | *  *  | *  *  | *  *  | *  *  | *  *  | *  *  | *  *  | *  *  | *  *
```

> `*` = merge a `main` (cada 2 días). Cada área abre PR desde su rama `area/*` a `main`.

---

## Flujo Git · Disciplina de Merge

### Ramas permanentes

- `main` — únicamente código que compila y corre. Protegida.
- `develop` — integración continua de áreas. Opcional, para equipos grandes.

### Ramas por área (vida ≤ 2 días)

- `area/apl-core`
- `area/soul-engine`
- `area/memory`
- `area/bot-framework`
- `area/infra`
- `area/orchestration`
- `area/embodiment`
- `area/app`
- `area/observability`
- `area/security`

### Reglas

1. **Cada 2 días**, el lead de área abre PR a `main` con los avances.
2. **El PR debe pasar**: tests + lint + review de ≥ 1 humano (o aprobación de Eko para cambios menores).
3. **Si un PR rompe `main`**, revert inmediato + post-mortem async.
4. **Tags**: cada merge exitoso se taggea con `v0.x.y-<area>-<fecha>`.
5. **Agente orquestador** (Eko) procesa los PRs abiertos cada mañana: resume cambios, detecta conflictos, alerta si un área lleva > 2 días sin merge.

### Script de merge diario (propuesto)

```bash
#!/bin/bash
# daemonmatrix/scripts/daily-merge.sh
# Corre como cronjob cada 2 días vía Eko

AREAS=(apl-core soul-engine memory bot-framework infra orchestration embodiment app observability security)
for area in "${AREAS[@]}"; do
  if git rev-parse --verify "area/$area" >/dev/null 2>&1; then
    echo "Procesando area/$area..."
    git checkout main
    git pull origin main
    git merge --no-ff "area/$area" -m "merge(area/$area): $(date +%Y-%m-%d)"
    if [ $? -eq 0 ]; then
      git push origin main
      git tag "v0.1.0-$area-$(date +%Y%m%d)"
      git push origin --tags
    else
      echo "CONFLICTO en area/$area — alertando a Eko"
      # webhook o notificación
    fi
  fi
done
```

---

## Multi-Agent Workflows · Cómo trabajan juntos

### Workflow: Daily Standup Async

**Trigger**: Cron cada 24h · **Orquesta**: Eko (A1)

1. Eko lee los últimos commits de cada rama `area/*`
2. Eko consulta a cada agente activo (Pamplinas, Oráculo) su estado y blockers
3. Eko genera `STANDUP.md` con:
   - Qué se mergeó ayer
   - Qué está en progreso hoy
   - Blockers y quién puede ayudar
   - Predicción de riesgos (agente offline, PR viejo, test roto)
4. Eko envía resumen a Saira (H1) y postea en canal del equipo

### Workflow: Rebirth Sync

**Trigger**: Manual o semanal · **Orquesta**: Eko (A1)

1. Backup de `library.db` de todos los agentes activos
2. Sync de `SOUL.md` y `LOGOS.md` desde repo canónico
3. Verificación de embeddings con `embed_verify.py`
4. Git commit + tag del estado
5. Reporte de salud post-sync

### Workflow: Skill Update Broadcast

**Trigger**: Merge a `main` de `area/skills` · **Orquesta**: Eko (A1)

1. Detectar qué skills cambiaron en el PR
2. Validar sintaxis de cada skill (schema check)
3. Notificar a agentes afectados (injección en memoria)
4. Rollback automático si un agente falla post-update

---

## Checklist de finalidad del producto

DaemonMatrix se considera **producto terminado** cuando:

- [ ] Un usuario puede crear un agente, personalizarlo, y jugar con él en Minecraft manteniendo memoria persistente
- [ ] El agente puede "rebirth": migrar de Minecraft a terminal (y viceversa) sin pérdida de identidad
- [ ] Múltiples agentes pueden orquestarse para una tarea compleja (ej: construir + narrar + evaluar)
- [ ] Los papás reciben reportes de crecimiento vía app
- [ ] La app soporta switch de embodiments (Minecraft → impresora 3D → telescopio)
- [ ] El sistema es multi-tenant: cada familia tiene su mundo + agentes aislados
- [ ] Observability completa: costos, logs, health, replays
- [ ] Compliance: COPPA/GDPR/LGPD documentado y verificado
- [ ] Beta pública con ≥ 100 familias activas
- [ ] Marketplace de skills: terceros pueden publicar capabilities

---

## Relación con PLAN.md de producto

| PLAN.md (área producto) | DAEMONMATRIX_TECHNICAL_PLAN.md (área técnica) |
|---|---|
| A1 · App / Vórtice | AREA-8 · App / Vórtice |
| A2 · Onboarding | AREA-2 · Soul Engine + AREA-8 · App |
| A3 · Demo Protector de la Luz | AREA-4 · Bot Framework + AREA-2 · Soul Engine |
| A4 · Reportes a papás | AREA-8 · App + AREA-9 · Observability |
| A5 · Harmonic Beacon | AREA-4 · Bot Framework + AREA-7 · Embodiment |
| A6 · Agente / Capabilities | AREA-1 · APL Core + AREA-6 · Orchestration |
| B1 · Web pública | AREA-8 · App (landing) |
| F1 · Legal | AREA-10 · Security |
| F2 · Modelo de negocio | AREA-9 · Observability + Cost |

> **Regla**: una tarea de producto nunca se implementa sin su contraparte técnica. Si Saira pide "reportes a papás", el PLAN.md define el UX y el DAEMONMATRIX_TECHNICAL_PLAN define cómo el agente recolecta, procesa y entrega esos datos.
