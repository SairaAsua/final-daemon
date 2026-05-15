# Arquitectura DaemonMatrix: Adaptacion ISA-95

> Version 1.0 | 2026-05-15
> Basado en ANSI/ISA-95 (IEC 62264) — Enterprise-Control System Integration

---

## 1. Resumen Ejecutivo

ISA-95 es el estandar internacional para integrar sistemas empresariales (ERP)
con sistemas de control industrial (SCADA/PLC). Su piramide jerarquica de 5
niveles proporciona terminologia, modelos de objetos y flujos de operaciones
que aplican directamente a ecosistemas multi-agente.

DaemonMatrix adapta ISA-95 para estructurar su stack completo:
- **Nivel 4 (ERP)** → Planeacion estrategica de agentes, finanzas, catalogo maestro
- **Nivel 3 (MES)** → Ejecucion de tareas, calidad, asignacion de jobs
- **Nivel 2 (SCADA)** → Observabilidad en tiempo real, alarmas, metricas
- **Nivel 1 (PLC)** → Runtime de cada agente, loops de ejecucion
- **Nivel 0 (Proceso Fisico)** → Cuerpos: Minecraft, terminal, hardware

---

## 2. La Piramide ISA-95 en DaemonMatrix

```
     NIVEL 4: AGENT ERP
     +------------------------------+
     | Planificacion Estrategica    |
     | Finanzas (tokens/compute)    |
     | Inventario Global            |
     | Catalogo Maestro             |
     +------------------------------+
              ^  |
     Task     |  |  Reports
     Schedule |  v  & Costs
     +------------------------------+
     NIVEL 3: AGENT EXECUTION SYSTEM (AES)
     | Cola de Tareas               |
     | Control de Calidad           |
     | Asignacion de Agentes        |
     | Gestion de Memoria/Skills    |
     +------------------------------+
              ^  |
     Commands |  |  Status
              |  v
     +------------------------------+
     NIVEL 2: AGENT OBSERVABILITY (SCADA)
     | Dashboards en Tiempo Real    |
     | Alarmas y Escalamiento       |
     | Recoleccion de Metricas      |
     | Session Replay               |
     +------------------------------+
              ^  |
     Actions  |  |  Telemetry
              |  v
     +------------------------------+
     NIVEL 1: AGENT RUNTIME (PLC)
     | Loop: Observar > Pensar > Actuar |
     | Maquinas de Estado (LangGraph)   |
     | Orquestacion de Herramientas     |
     | Sandboxing y Seguridad           |
     +------------------------------+
              ^  |
     Sensory  |  |  Motor
     Input    |  |  Output
              |  v
     +------------------------------+
     NIVEL 0: EMBODIMENTS
     | Minecraft (mineflayer)       |
     | Terminal / CLI               |
     | Hardware Real (IoT, 3D print)|
     | APIs y Webhooks              |
     +------------------------------+
```

---

## 3. Mapeo Detallado por Nivel

### 3.1 Nivel 4 — Agent ERP

Funciones ISA-95 | Implementacion DaemonMatrix
---|---
Planificacion estrategica | Campanas activas, milestones, releases
Finanzas | Cost tracking por agente/tarea/tenant: tokens API, VRAM, tiempo CPU
Pedidos de clientes | Task requests: jobs de usuarios o triggers programados
Inventario global | Catalogo maestro: skills, memorias, prompts, configs, modelos
Master data | Agent registry, user profiles (SOUL), world definitions

**Artefactos**:
- `agent-erp/agent-registry.json` — Registro maestro de agentes
- `agent-erp/skill-catalog.json` — Catalogo de skills versionados
- `agent-erp/memory-inventory.json` — Inventario de memorias persistentes
- `agent-erp/cost-ledger.md` — Tarifas y presupuestos

**API / Interfaz**:
- Recibe: Task Requests (nivel 3)
- Emite: Production Schedules, Resource Allocations, Cost Reports

---

### 3.2 Nivel 3 — Agent Execution System (AES)

Funciones ISA-95 | Implementacion DaemonMatrix
---|---
Planificacion detallada | Task queue con prioridades, dependencias, deadlines
Despacho de produccion | Asignacion de tarea a agente especifico segun skills y carga
Control de calidad | Output validation, retry con backoff, human-in-the-loop approval
Gestion de personal | Agent lifecycle: spawn, health check, rebirth, retirement
Gestion de material | Memory allocation, skill loading/unloading, context window mgmt
Seguimiento de produccion | Execution logs: que se hizo, por quien, cuando, cuanto costo

**Artefactos**:
- `agent-erp/schema/task.json` — Esquema de tareas
- Cola de ejecucion (SQLite o Redis)
- Workflow engine (LangGraph-style state machines)

**API / Interfaz**:
- Recibe: Production Schedule (nivel 4), Control Commands (nivel 2)
- Emite: Work Orders (nivel 2), Production Responses (nivel 4)

---

### 3.3 Nivel 2 — Agent Observability (SCADA/HMI)

Funciones ISA-95 | Implementacion DaemonMatrix
---|---
Monitoreo en tiempo real | Dashboards: estado de agentes, profundidad de cola, tareas activas
Alarmas | Alertas: agente offline, presupuesto excedido, spike de errores
Visualizacion del proceso | Grafos de ejecucion, replays de sesion, decision trails
Recoleccion de datos | Metricas: tokens, latencia, costo, uso de memoria
Tendencias historicas | Analisis de series temporales de rendimiento por agente

**Artefactos**:
- `agent-erp/dashboard/index.html` — Dashboard ERP existente
- `agent-erp/isa95-dashboard/index.html` — Dashboard ISA-95 (nuevo)
- Sistema de alertas (webhook, email, Slack)

**API / Interfaz**:
- Recibe: Telemetry & Status (nivel 1, nivel 3)
- Emite: Control Commands (nivel 3), Alarms (nivel 4)

---

### 3.4 Nivel 1 — Agent Runtime (PLC/DCS)

Funciones ISA-95 | Implementacion DaemonMatrix
---|---
Control de lazos | Loop de ejecucion del agente: observar → pensar → actuar → recordar
Logica secuencial | Maquinas de estado (LangGraph), pasos de tarea, ramas condicionales
Control de dispositivos | Tool calling, invocacion de APIs, operaciones de archivo
Interbloques de seguridad | Permission checks, rate limits, boundaries de sandbox

**Artefactos**:
- `hermes-agent` — Runtime principal
- `mineflayer` — Runtime Minecraft
- Perfil de agente (SOUL.md + MEMORY.md)

**API / Interfaz**:
- Recibe: Work Orders (nivel 3)
- Emite: Telemetry, Actions, Sensory Data

---

### 3.5 Nivel 0 — Embodiments (Proceso Fisico)

Funciones ISA-95 | Implementacion DaemonMatrix
---|---
Sensores | Interfaces de entrada: chat, voz, eventos Minecraft, webhooks, APIs
Actuadores | Interfaces de salida: texto, voz, acciones Minecraft, escritura de archivos
Equipo fisico | Cuerpos: bot de Minecraft, CLI terminal, impresora 3D, peluche, hardware IoT

**Artefactos**:
- Bots de Minecraft (mineflayer-based)
- Agentes CLI (hermes-agent)
- Integraciones hardware (futuro)

**API / Interfaz**:
- Recibe: Motor Output (nivel 1)
- Emite: Sensory Input (nivel 1)

---

## 4. Modelos de Objetos ISA-95 Adaptados

ISA-95 Part 1 y 2 definen objetos estandar que mapean directamente:

### 4.1 Personnel → Agent

Atributo ISA-95 | Atributo Agent
---|---
Personnel ID | Agent ID (eko, pampliNas, oraculo...)
Personnel Class | Agent Class (constructor, warrior, chef, merchant...)
Personnel Name | Display Name
Description | SOUL narrative
Status | active / spawning / offline / retired
Capabilities | Skills disponibles
Qualifications | Modelo, provider, cost tier

### 4.2 Equipment → Compute / Model

Atributo ISA-95 | Atributo Agent
---|---
Equipment ID | Provider ID (kimi-api, ollama-gemma4, minimax...)
Equipment Class | Tipo (cloud API, local GPU, edge TPU...)
Location | Endpoint (URL, IP, local path)
Capacity | VRAM, max context, throughput
Status | operational / degraded / offline

### 4.3 Material → Memory / Skill / Data

Atributo ISA-95 | Atributo Agent
---|---
Material ID | Skill ID o Memory ID
Material Class | Tipo (procedural, narrative, config, data...)
Description | Que hace y para que sirve
Version | Semver
Used By | Lista de agentes que lo cargan

### 4.4 Production Schedule → Task Schedule

Atributo ISA-95 | Atributo Agent
---|---
Schedule ID | Sprint ID o Campaign ID
Entry ID | Task ID
Personnel | Assigned Agent
Equipment | Model/Provider asignado
Material | Skills/memorias requeridas
Start / End | Timestamps
Status | pending / running / completed / failed

### 4.5 Operations Request → Task Request

Atributo ISA-95 | Atributo Agent
---|---
Request ID | Job ID
Request Type | Tipo de tarea (build, debug, narrative, research...)
Priority | low / normal / high / critical
Personnel Requirements | Agent requerido o clase de agente
Equipment Requirements | Provider o capacidad minima
Material Requirements | Skills necesarios
Quality Parameters | Criterios de aceptacion

---

## 5. Flujos de Datos entre Niveles

### 5.1 Flujo Descendente (Planificacion → Ejecucion)

```
ERP (N4)              AES (N3)              SCADA (N2)            RUNTIME (N1)          EMBODIMENT (N0)
  |                      |                      |                      |                      |
  | Production Schedule  |                      |                      |                      |
  |--------------------->|                      |                      |                      |
  |                      | Work Orders          |                      |                      |
  |                      |--------------------->|                      |                      |
  |                      |                      | Control Commands       |                      |
  |                      |                      |--------------------->|                      |
  |                      |                      |                      | Actions               |
  |                      |                      |                      |--------------------->|
  |                      |                      |                      |                      v
```

### 5.2 Flujo Ascendente (Ejecucion → Reporte)

```
ERP (N4)              AES (N3)              SCADA (N2)            RUNTIME (N1)          EMBODIMENT (N0)
  ^                      ^                      ^                      ^                      |
  |                      |                      |                      |                      |
  | Cost Reports         |                      |                      |                      |
  |<---------------------| Production Response  |                      |                      |
  |                      |<---------------------| Status & Telemetry     |                      |
  |                      |                      |<---------------------| Sensory Data           |
  |                      |                      |                      |<---------------------|
```

---

## 6. Actividades de Operaciones (ISA-95 Part 3)

ISA-95 define 4 actividades de operaciones de manufactura. En DaemonMatrix:

| Actividad ISA-95 | Actividad Agentic | Responsable |
|---|---|---|
| **Production** | Ejecucion de tareas, workflows, builds | AES (N3) + Runtime (N1) |
| **Quality** | Validacion de outputs, gates de review, tests | AES (N3) |
| **Maintenance** | Rebirth sync, cleanup de memoria, actualizacion de skills | ERP (N4) + Runtime (N1) |
| **Inventory** | Gestion de memoria, carga de skills, estado de agentes | ERP (N4) + AES (N3) |

---

## 7. Reglas de Integracion Vertical

1. **Comunicacion solo entre niveles adyacentes**. Un embodiment (N0) no habla
directamente con ERP (N4). Toda comunicacion sube o baja un nivel a la vez.

2. **Mensajes basados en objetos**. Toda comunicacion inter-nivel usa objetos
estandarizados (Task Request, Agent Status, Production Response, Alert).

3. **Datos maestros en N4**. El registro maestro de agentes, skills y usuarios
vive en ERP y se propaga hacia abajo. Ningun nivel inferior mantiene su propia
version canonica.

4. **Calidad antes de entrega**. AES (N3) valida todo output antes de que
suba a ERP (N4) o llegue al usuario.

5. **Observabilidad obligatoria**. Todo runtime (N1) debe emitir telemetria
minima: heartbeat, costo acumulado, estado de tarea.

---

## 8. Anti-patrones

| Anti-patron | Consecuencia | Solucion |
|---|---|---|
| Bypass de niveles (N0 habla con N4) | Pierde calidad y monitoreo | Enrutar siempre via N1→N2→N3 |
| Sin datos maestros | Inconsistencia entre agentes | Centralizar en N4, replicar hacia abajo |
| Sin AES (MES) | Asignacion ad-hoc sin tracking | Implementar cola y dispatcher en N3 |
| Sin SCADA (N2) | Fallas descubiertas tarde | Dashboard + alarmas obligatorias |
| Acoplamiento directo | Niveles dependen de implementaciones | Comunicar via objetos estandar |

---

## 9. Implementacion en el Repositorio

```
daemonmatrix-final-administrativo/
agent-erp/
  README.md                          # Vision del ERP (N4)
  agent-registry.json                # Registro maestro de agentes
  skill-catalog.json                 # Catalogo de skills
  memory-inventory.json              # Inventario de memorias
  cost-ledger.md                     # Tarifas y presupuestos
  workflow-registry.json             # Workflows estandar
  schema/
    agent.json                       # Esquema Personnel → Agent
    task.json                        # Esquema Production Schedule → Task
    memory.json                      # Esquema Material → Memory
  dashboard/                         # ERP Dashboard (N4)
    index.html
  isa95-dashboard/                   # Observability Dashboard (N2)
    index.html
  isa95-schema/                      # Objetos ISA-95 serializados
    personnel.json                   # Agent profiles
    equipment.json                   # Compute providers
    material.json                    # Skills & memories
    schedule.json                    # Task schedules
    request.json                     # Task requests
    response.json                    # Execution responses
    alert.json                       # Alarm definitions
  isa95-mapping.json                 # Mapeo completo ISA-95 ↔ DaemonMatrix
```

---

## 10. Referencias

- ANSI/ISA-95.00.01-2010 (IEC 62264-1 Mod) — Models and Terminology
- ANSI/ISA-95.00.03-2013 — Activity Models of MOM
- ANSI/ISA-95.00.04-2018 — Objects and Attributes for MOM Integration
- Wikipedia: https://en.wikipedia.org/wiki/ANSI/ISA-95
- Imagen fuente: `4918169683924552934.jpg` (Nano Banana)
