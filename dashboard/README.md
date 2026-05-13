# DaemonCraft Dashboard Local

Kanban tipo Trello con las 94 tareas del roadmap, servido localmente.

## Cómo usar

```bash
cd dashboard
python3 -m http.server 8771
# Abrir http://localhost:8771
```

## Qué muestra

- **3 columnas** por milestone: Pre-beta | Beta | Post-beta
- **Filtros** por área, owner, prioridad, texto
- **Stats** en vivo: P1 / P2 / P3
- **Click en tarjeta** = modal con descripción completa + link a GitHub

## Datos

Las 94 issues vienen de `gh issue list` del repo `SairaAsua/final-daemon`.
Para actualizar: `gh issue list --json number,title,labels,state,milestone,assignees,body,url > issues.json` y regenerar.

## Autor

Dashboard generado por Eko (Kimi) el 2026-05-13.
