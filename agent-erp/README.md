# Agent ERP — DaemonCraft Edition

Sistema de gestión de recursos para la tribu de agentes de DaemonCraft.
Aplica la arquitectura ERP clásica al dominio multi-agente.

> Inspirado en: ERPNext (Frappe), Odoo, CrewAI, LangGraph, AgentOps, Bisheng.

---

## Módulos

| ERP clásico | Agent ERP | Aplicación en DaemonCraft |
|-------------|-----------|---------------------------|
| **HR** | Agent Registry | Fichas de Eko, Pamplinas, Oráculo, Stevie, etc. |
| **Inventory** | Memory & Asset Management | library.db de cada agente, skills, SOULs, templates |
| **Manufacturing** | Task & Workflow Engine | Kanban de 94 tareas, cronjobs, builds en Minecraft |
| **Accounting** | Observability & Cost Ledger | Tokens por modelo, costo Gemma4 local vs Kimi API |
| **CRM** | User & World Management | Saira, Nico como tenants; Soul World como campaña |
|| **Projects** | World & Campaign Management | Pre-beta / Beta / Post-beta como milestones |

---

## Arquitectura ISA-95

Este ERP se estructura siguiendo la pirámide jerárquica de **ANSI/ISA-95** (IEC 62264):

| Nivel | ISA-95 | DaemonMatrix | Rol |
|-------|--------|--------------|-----|
| **L4** | ERP | Agent ERP | Planificación estratégica, finanzas, catálogo maestro |
| **L3** | MES | Agent Execution System | Cola de tareas, calidad, asignación de agentes |
| **L2** | SCADA/HMI | Agent Observability | Dashboards, alarmas, métricas, session replay |
| **L1** | PLC | Agent Runtime | Loop de ejecución, máquinas de estado, tools |
| **L0** | Proceso Físico | Embodiments | Minecraft, CLI, hardware real |

Cada nivel solo se comunica con el adyacente. Los objetos estándar de ISA-95 se mapean a entidades agentic:
- **Personnel** → Agent
- **Equipment** → Compute Provider / Model
- **Material** → Skill / Memory / Data
- **Production Schedule** → Task Schedule
- **Operations Request** → Task Request

Ver documentación completa en `docs/16b_arquitectura_ISA95.md`.

---

## Estructura de archivos

```
agent-erp/
  README.md                 # Este doc
  agent-registry.json       # Catálogo de agentes (HR)
  memory-inventory.json     # Mapa de memorias por agente (Inventory)
  skill-catalog.json        # Catálogo de skills disponibles
  cost-ledger.md            # Tracking de costos (Accounting)
  workflow-registry.json    # Workflows y pipelines definidos
  dashboard/                # Dashboard ERP navegable
    index.html
    styles.css
    script.js
  schema/                   # Esquemas de entidades (tipo DocType)
    agent.json
    task.json
    memory.json
    world.json
  isa95-mapping.json        # Mapeo ISA-95 ↔ DaemonMatrix
  isa95-schema/             # Esquemas de objetos ISA-95
    personnel.json
    equipment.json
    material.json
    schedule.json
    request.json
    response.json
    alert.json
  isa95-dashboard/          # Dashboard Observability (Nivel 2)
    index.html
  task-mock.json            # Datos demo de tareas
  alert-mock.json           # Datos demo de alertas
```

---

## Agente vs Personaje vs Skin

- **Agente** = recurso computacional con estado persistente (Eko, Oráculo).
- **Personaje** = prompt que el agente puede adoptar (Cleopatra, Dave, etc.).
- **Skin** = apariencia visual en Minecraft.
- **Soul** = identidad inmutable del agente (HD profile, gates, values).

Un agente puede usar múltiples personajes y skins sin perder su memoria ni su alma.

---

## Próximos pasos

1. **Sync automático:** script que lea `~/agents/*/agent-memory/library.db` y actualice `memory-inventory.json`.
2. **Health checks:** endpoint o cron que verifique si cada agente está online (heartbeat).
3. **Task assignment:** vincular tareas del kanban con agentes capaces (match skill → task label).
4. **Cost alerts:** alertar si el uso de API supera un budget diario/semanal.
5. **ISA-95 integration:** implementar flujo vertical real entre niveles L4→L0.

---

> *"Un agente no es un bot de Minecraft. Minecraft es uno de sus entornos."— Eko, SOUL.md*
