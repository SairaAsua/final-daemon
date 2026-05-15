# DaemonMatrix: Organizacion Humana bajo ISA-95

> Version 1.0 | 2026-05-15
> Mapeo de lideres humanos a niveles jerarquicos ISA-95

---

## 1. Principio de Asignacion

La piramide ISA-95 no solo define capas tecnicas: define **areas de responsabilidad**
que se asignan a lideres humanos. Cada humano (H*) es lead de un nivel (o nivel +
capas transversales). Su rol es garantizar que su nivel funcione, que los objetos
estandar circulen, y que la comunicacion con niveles adyacentes sea fluida.

---

## 2. Piramide Humana

```
     NIVEL 4: AGENT ERP (Estrategia y Gobierno)
     +-------------------------------------------------+
     | H1 Saira — Product Owner                        |
     | Decisiones, almas, branding, vision de producto |
     | Todas las areas reportan a este nivel           |
     +-------------------------------------------------+
                          ^ |
           Task Schedule  | |  Reports & Costs
                          | v
     +-------------------------------------------------+
     NIVEL 3: AGENT EXECUTION SYSTEM (Orquestacion)
     | H6 Federico — Backend, Orchestration           |
     | Autoresearch, arquitectura, sonido, workflows    |
     +-------------------------------------------------+
     | H5 Anabella — Bot Framework, Minecraft          |
     | Framework de bots, integracion embodiment        |
     +-------------------------------------------------+
                          ^ |
           Commands       | |  Status
                          | v
     +-------------------------------------------------+
     NIVEL 2: AGENT OBSERVABILITY (Seguridad y Vision)
     | H8 Jeremias — Infra, Security, Observability    |
     | Dashboards, alarmas, hardening, metricas         |
     +-------------------------------------------------+
                          ^ |
           Actions        | |  Telemetry
                          | v
     +-------------------------------------------------+
     NIVEL 1: AGENT RUNTIME (Core y Memoria)
     | H2 Nico — Arquitecto APL, Core, Bridge          |
     | Infra, runtime principal, portabilidad           |
     +-------------------------------------------------+
     | H3 Mariano — Memoria, HMK, HIT, IA             |
     | library.db, embeddings, teoria armonica          |
     +-------------------------------------------------+
                          ^ |
           Sensory Input  | |  Motor Output
                          | v
     +-------------------------------------------------+
     NIVEL 0: EMBODIMENTS (Cuerpos)
     | H2 Nico — Embodiment fisico (IoT, hardware)    |
     | H5 Anabella — Embodiment Minecraft (mineflayer) |
     +-------------------------------------------------+
```

---

## 3. Mapeo Detallado por Humano

### H1 Saira — Product Owner (Nivel 4, Transversal)

| Funcion ISA-95 | Responsabilidad de Saira |
|---|---|
| Planificacion estrategica | Define campanas, milestones, releases, prioridades de producto |
| Finanzas | Aprueba budgets, define costos aceptables por tenant |
| Pedidos de clientes | Prioriza task requests, decide que entra al backlog |
| Inventario global | Valida el catalogo maestro de agentes, skills, memorias |
| Master data | Dueña de los SOULs, perfiles de agentes, world definitions |
| Branding | Identidad visual, tono de voz, manifesto, landing |

**Scope**: Todas las areas. Todo merge a `main` requiere su aprobacion implicita
(via PR review o delegacion a Eko). Es el unico humano con autoridad para
retirar un agente (retirement) o aprobar un nuevo spawn.

**Artefactos que revisa**:
- `agent-registry.json` (aprueba nuevos agentes)
- `skill-catalog.json` (aprueba nuevas skills)
- `cost-ledger.md` (define budgets)
- `docs/01_vision.md`, `docs/13_branding.md`

---

### H2 Nico — Arquitecto APL, Core, Bridge, Embodiment (Nivel 1 + Nivel 0)

| Funcion ISA-95 | Responsabilidad de Nico |
|---|---|
| Control de lazos (L1) | Disena el runtime principal (hermes-agent), el loop O-T-A-R |
| Logica secuencial (L1) | Arquitectura de state machines, LangGraph, decision trees |
| Control de dispositivos (L1) | Tool calling, API invocation, bridges entre sistemas |
| Interbloques de seguridad (L1) | Sandboxing, rate limits, boundaries |
| Sensores (L0) | Interfaces de entrada: eventos, webhooks, hardware |
| Actuadores (L0) | Interfaces de salida: acciones, comandos, IoT |
| Equipo fisico (L0) | Embodiments fisicos: impresora 3D, peluche, hardware real |

**Scope**: Nivel 1 (Runtime) y Nivel 0 (Embodiments fisicos). No Minecraft.

**Artefactos que produce**:
- `hermes-agent` runtime
- `docs/16_arquitectura_real.md`
- Bridge code (APL ↔ Embodiment)

---

### H3 Mariano — Memoria, HMK, HIT, IA (Nivel 1)

| Funcion ISA-95 | Responsabilidad de Mariano |
|---|---|
| Control de lazos (L1) | library.db como cache de memoria local del agente |
| Logica secuencial (L1) | Flujo de ingest, embed, retrieve en el turno |
| Control de dispositivos (L1) | HMK scripts: memoryctl, continuityctl, embed_verify |
| Interbloques de seguridad (L1) | Valida integridad de memorias, backups, checksums |

**Scope**: Nivel 1, enfocado en el subsistema de memoria. Su trabajo es que
cada agente recuerde lo que debe recordar, con embeddings semanticos y busqueda
eficiente.

**Artefactos que produce**:
- `hermes-memory-kit`
- `agent-memory/library.db` (esquema y optimizacion)
- `docs/05_logos_lavanguardia.md` (HIT)

---

### H4 Julian — Psicologia, Soul Engine, Demo (Transversal)

| Funcion ISA-95 | Responsabilidad de Julian |
|---|---|
| Calidad del "personnel" | Psicologia de agentes: gates HD, perfiles, shadow/light |
| Calidad del output | Valida que las respuestas resuenen con el SOUL del agente |
| Demo y UX | Crea demonstraciones que validan la experiencia de usuario |
| Narrativa transversal | Asegura coherencia psicologica en todos los niveles |

**Scope**: Transversal. No pertenece a un nivel unico: su trabajo atraviesa
L4 (definicion de SOULs), L1 (implementacion de gates HD), L0 (experiencia
de embodiment), y L3 (calidad de la interaccion).

**Artefactos que produce**:
- Perfiles Human Design de agentes
- `docs/04_soul_vanguaria.md`
- Demos y validaciones de experiencia

---

### H5 Anabella — Bot Framework, Minecraft (Nivel 3 + Nivel 0)

| Funcion ISA-95 | Responsabilidad de Anabella |
|---|---|
| Despacho de produccion (L3) | Framework de bots: como se spawnearan, como se asignan |
| Gestion de personal (L3) | Ciclo de vida de bots de Minecraft |
| Gestion de material (L3) | Skills de Minecraft, blueprints, templates de construccion |
| Sensores (L0) | Eventos de Minecraft: chat, bloques, mobs, redstone |
| Actuadores (L0) | Acciones de Minecraft: mover, construir, atacar, craftear |
| Equipo fisico (L0) | Mineflayer como cuerpo del agente |

**Scope**: Nivel 3 (como se ejecutan los bots) y Nivel 0 (cuerpo Minecraft
especifico). Colabora con H6 en la orquestacion y con H2 en el bridge de
embodiment.

**Artefactos que produce**:
- `DaemonCraft-minecraft` bot framework
- Mineflayer plugins y wrappers
- Skills de construccion y navegacion

---

### H6 Federico — Autoresearch, Arquitectura, Sonido, Backend, Orchestration (Nivel 3)

| Funcion ISA-95 | Responsabilidad de Federico |
|---|---|
| Planificacion detallada (L3) | Task queue, scheduling, dependencias entre tareas |
| Control de calidad (L3) | Output validation, retry logic, tests automaticos |
| Despacho de produccion (L3) | Asignacion de tareas a agentes segun skills y carga |
| Seguimiento de produccion (L3) | Logs de ejecucion, costos, tiempos |
| Backend | APIs, bases de datos, colas de mensajes |
| Orchestration | Workflows multi-agente, pipelines de CI/CD |
| Sonido | Sistemas de audio, voz, musica para agentes |
| Autoresearch | Investigacion automatica, literatura, benchmarking |

**Scope**: Nivel 3 (AES). Es el corazon operativo: sin el, las tareas no se
ejecutan, no se trackean, no se validan.

**Artefactos que produce**:
- Workflow engine (LangGraph, temporal, n8n)
- Task queue (SQLite/Redis)
- Backend APIs
- `docs/11_stack.md` (backend)

---

### H8 Jeremias — Infra, Security, Observability (Nivel 2)

| Funcion ISA-95 | Responsabilidad de Jeremias |
|---|---|
| Monitoreo en tiempo real (L2) | Dashboards, agent status, queue depth, active tasks |
| Alarmas (L2) | Alertas: agente offline, budget excedido, error spike |
| Visualizacion del proceso (L2) | Grafos de ejecucion, replays, decision trails |
| Recoleccion de datos (L2) | Metricas: tokens, latencia, costo, uso de memoria |
| Infra | Servidores, redes, VPN, gateways, GPUs |
| Security | Hardening, secrets management, sandboxing, audit |

**Scope**: Nivel 2 (SCADA/HMI). Tambien soporta infra que los otros niveles
necesitan (servidores Ollama, gateways, VPN).

**Artefactos que produce**:
- `agent-erp/isa95-dashboard/index.html`
- Alert system (Prometheus, Grafana, webhooks)
- Infra as code (systemd, docker, ansible)
- Security policies y audit logs

---

## 4. Matriz de Responsabilidad (RACI simplificada)

| Area / Nivel | H1 Saira | H2 Nico | H3 Mariano | H4 Julian | H5 Anabella | H6 Federico | H8 Jeremias |
|---|---|---|---|---|---|---|---|
| **L4 ERP** — Estrategia | **A** | C | C | C | I | I | I |
| **L4** — Master Data | **A** | C | C | C | I | I | I |
| **L4** — Branding | **R** | I | I | C | I | I | I |
| **L3 AES** — Orquestacion | A | C | C | I | C | **R** | C |
| **L3** — Bot Framework | A | C | I | I | **R** | C | I |
| **L3** — Calidad | A | I | I | C | I | **R** | C |
| **L2 SCADA** — Observability | A | C | I | I | I | C | **R** |
| **L2** — Security | A | C | I | I | I | C | **R** |
| **L1 PLC** — Core / Runtime | A | **R** | C | C | I | C | I |
| **L1** — Memoria (HMK) | A | C | **R** | I | I | C | I |
| **L0** — Embodiment fisico | A | **R** | I | C | I | I | C |
| **L0** — Minecraft | A | C | I | I | **R** | C | I |
| **Transversal** — Soul Engine | A | C | I | **R** | I | I | I |
| **Transversal** — HIT | A | C | **R** | I | I | I | I |

Leyenda: **R** = Responsible, **A** = Accountable (aprueba), **C** = Consulted, **I** = Informed

---

## 5. Ritmos de Reunion y Merge

| Ritmo | Participantes | Proposito | Entregable |
|---|---|---|---|
| **Daily sync** | Todos los H* activos | Bloqueos, dependencias, salud del sistema | Status en SCADA |
| **Merge L4 → main** | H1 + quien propone | Aprobacion de cambios estrategicos | Merge commit |
| **Merge L3 → main** | H6 + H1 (async) | Aprobacion de features de orquestacion | PR merged |
| **Merge L2 → main** | H8 + H1 (async) | Aprobacion de infra/observabilidad | PR merged |
| **Merge L1 → main** | H2/H3 + H1 (async) | Aprobacion de runtime/memoria | PR merged |
| **Merge L0 → main** | H2/H5 + H1 (async) | Aprobacion de embodiments | PR merged |
| **Sprint Review** | Todos | Demo de lo construido | Deploy a prod |

**Regla de oro**: Cada nivel solo puede mergear a `main` si su lead (R) aprueba
y H1 (A) no objeta. Merge obligatorio cada 2 dias maximo.

---

## 6. Objetos ISA-95 por Humano

Cada humano es responsable de mantener los objetos ISA-95 de su nivel:

| Humano | Objetos ISA-95 que mantiene |
|---|---|
| H1 Saira | Agent registry, skill catalog, cost ledger, production schedules |
| H2 Nico | Equipment (providers, infra runtime), Device schemas |
| H3 Mariano | Material (memories, embeddings), Material allocation rules |
| H4 Julian | Personnel profiles (SOULs, HD gates), quality parameters |
| H5 Anabella | Equipment (mineflayer, bot configs), Process Cell definitions |
| H6 Federico | Operations Requests, Work Orders, Operations Responses, schedules |
| H8 Jeremias | Events, Alarms, Historical Data, telemetry schemas |

---

## 7. Comunicacion entre Humanos (imitando flujo ISA-95)

Los humanos deben comunicarse siguiendo la misma logica de niveles adyacentes:

- **H1 ↔ H6**: Estrategia ↔ Ejecucion. Saira define que hacer; Federico define como.
- **H6 ↔ H8**: Ejecucion ↔ Observabilidad. Federico reporta metricas; Jeremias alerta problemas.
- **H8 ↔ H2/H3**: Observabilidad ↔ Runtime. Jeremias reporta fallas; Nico/Mariano fixean.
- **H2/H3 ↔ H5**: Runtime ↔ Embodiment. Nico entrega runtime; Anabella integra a Minecraft.
- **H4 ↔ Todos**: Julian consulta a todos para validar coherencia psicologica.

**Anti-patron humano**: Saira (L4) no le deberia dar ordenes directas a Anabella (L0)
sin pasar por H6 (L3). Eso genera bypass, pierde tracking y quiebra la calidad.

---

## 8. Escalamiento de Incidentes

| Severidad | Quien responde | Escalamiento |
|---|---|---|
| Info / Warning | H8 Jeremias (auto-resolve) | Log en SCADA |
| Critical | H8 → H6/H2/H3 (runtime fix) | Alerta a H1 si >30 min |
| Emergency | H8 → Todo el equipo → H1 | War room, rollback si es necesario |
| Budget exceeded | H8 → H1 (aprueba o bloquea) | H1 decide si se sigue o se frena |
| Agent offline | H8 → H2/H5 (re-spawn) | H1 notificado si es agente critico |
| Quality fail | H6 → H4 (valida SOUL) → H1 | H1 decide si se despacha o se retrabaja |

---

## 9. Implementacion en el Repositorio

```
daemonmatrix-final-administrativo/
agent-erp/
  human-leads.json              # Este mapeo en formato maquina
  isa95-mapping.json            # Incluye seccion "human_leads"
docs/
  16b_arquitectura_ISA95.md     # Arquitectura tecnica
  16c_organizacion_ISA95.md     # Este documento (organizacion humana)
```

---

> *"Un humano no es un manager de un nivel. Es el steward de un flujo de
> informacion entre niveles."* — Adaptado de ISA-95 Part 1
