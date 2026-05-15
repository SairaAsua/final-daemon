# Cost Ledger — Agent ERP Accounting

Ledger de costos operativos del ecosistema multi-agente DaemonCraft.

## Modelos y tarifas estimadas

| Modelo | Provider | Modo | Costo aprox | Unidad |
|--------|----------|------|-------------|--------|
| kimi-k2.6 | kimi-coding | API | ~$0.003 / 1K tokens | input |
| gemma4:e4b-it-q8_0 | Ollama local | Local | $0.00 (electricidad/GPU) | por hora |
| minimax | MiniMax (anthropic) | API | ~$0.002 / 1K tokens | input |

## Reglas de negocio

- **Gemma4 local** = costo fijo de infraestructura (electricidad, GPU), no por token.
- **Kimi / MiniMax** = costo variable por uso. Necesitan budgeting y alerts.
- **Eko CLI** usa Kimi → alto costo por turno largo (~50K tokens con SOUL.md).
- **Eko Minecraft** usa Gemma4 local → costo marginal cero, pero limitado por VRAM.
- **Pamplinas** usa MiniMax → costo moderado, SOUL.md grande (~52KB).

## Cost Ledger (ejemplo estructurado)

```json
{
  "period": "2026-05",
  "entries": [
    {
      "date": "2026-05-15",
      "agent_id": "eko",
      "task": "research-agent-erp",
      "model": "kimi-k2.6",
      "tokens_in": 85000,
      "tokens_out": 12000,
      "cost_usd": 0.29,
      "notes": "Research web + skill authoring"
    },
    {
      "date": "2026-05-15",
      "agent_id": "pamplinas",
      "task": "narrative-session",
      "model": "minimax",
      "tokens_in": 45000,
      "tokens_out": 8000,
      "cost_usd": 0.11,
      "notes": "Minecraft storytelling session"
    }
  ],
  "monthly_budget_usd": 50.00,
  "spent_usd": 0.40,
  "remaining_usd": 49.60
}
```

## Alertas propuestas

- **Daily spend > $5** → alerta a Saira
- **Single session > $2** → alerta + sugerir switch a modelo local
- **Monthly spend > 80% budget** → alerta + freeze de jobs no críticos
- **Agente offline > 24h** → alerta + trigger rebirth sync

## Próximos pasos

1. Integrar SDK de AgentOps o OpenLIT para tracking automático.
2. Script `cost-tracker.py` que lea logs de Hermes y escriba en este ledger.
3. Dashboard widget de "tokens hoy" en el ERP dashboard.
