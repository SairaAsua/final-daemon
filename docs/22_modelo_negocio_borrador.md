# Modelo de negocio · borrador

> Cherry-picked del repo `grok-daemonMatrix` (Kimi), con ajustes para que use los datos del [research real](../research/screen-time-data.md). Los números siguen siendo estimaciones que **requieren validación con datos reales del equipo dev**.

## Estructura de ingresos

### Freemium

- **Demo gratis** con onboarding completo.
- Acceso limitado al agente después del demo.

### Suscripción familiar

- Acceso ilimitado al agente.
- Reportes para papás (ver [docs/08 · App / Vórtice](08_app_vortice.md)).
- Skins exclusivas.
- Música Harmonic Beacon completa.

### Upsells futuros

- **Embodiments físicos**: peluche musical · [docs/12 · Roadmap](12_roadmap.md).
- **Servidores premium**.
- **Módulos educativos** específicos.

---

## Costos estimados · requieren verificación con `F2.3`

### Infraestructura por usuario activo

- Servidor Minecraft + agente: **estimado $0.15–$0.40/día** (depende de concurrencia y optimización).
- APIs de LLM: **variable** según uso de tokens y modelo (Gemma local vs Kimi/Hermes API).
- Hosting de app y servicios: **variable** según escala.

> ⚠️ **Estos números son orientativos, no validados**. El issue [F2.3](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F2.3) es para medir costos reales con el equipo dev.

### Etapas de escala

- **Beta cerrada (primeros usuarios)**: costos controlados, comunidad AlterMundi.
- **Crecimiento**: optimización con self-hosting y caching para reducir costos por usuario.
- **Escala masiva**: requiere análisis financiero detallado.

---

## Timeline propuesto · borrador

| Etapa | Cuándo | Qué |
|---|---|---|
| MVP + beta cerrada | 2026 | DaemonCraft en Minecraft + app vórtice + primeros usuarios |
| Versión 1.0 | 2026-2027 | Reportes para papás + más usuarios |
| Embodiments físicos | 2027 | Peluche musical + otros hardware |
| Impacto educativo | 2028+ | Pilotos con escuelas personalizadas |

> Este timeline coincide con los hitos en [docs/12 · Roadmap](12_roadmap.md). Requiere validación final con el equipo.

---

## Estrategia de distribución

1. **Comunidad AlterMundi**: beta cerrada con familias del equipo (issue D1.1).
2. **Minecraft Marketplace · lanzamiento directo**: distribución del juego.
3. **App stores**: la app vórtice en iOS/Android (decisión depende de A1.1).
4. **Comunidad y boca en boca**: el producto se vende solo cuando un niño le cuenta a otro.

---

## Contexto de mercado relevante

Datos verificables que respaldan el problema y la oportunidad — ver [`research/screen-time-data.md`](../research/screen-time-data.md):

- Tweens (8-12): **5h 33m/día** de screen-time (Common Sense Census 2021).
- 50,4% de teens 12-17 tienen 4+ horas diarias de screen-time no escolar (CDC NCHS 2024).
- **86% de padres tiene reglas, solo 19% las cumple** (Pew 2025) → la pelea por horas no funciona.
- Razón #1 para no dar smartphone: **contenido inapropiado, no tiempo** (Pew 2025) → confirma el reframe.
- AI tutors con effect size 0.73-1.3 SD vs clase activa (Harvard RCT jun 2025) → la IA acompañante tiene base científica.
- Mercado smart toys: USD 2,6B (2024) → 9,7B proyectado (2033).

> El caso **Moxie / Embodied** (smart toy con IA) cerró nov-dic 2024 — referencia importante para no inventar la rueda.

---

## Notas

- Todos los números de costos son estimaciones preliminares.
- Se necesita un análisis financiero detallado con **datos reales de infraestructura** ([F2.3](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F2.3)).
- El modelo puede pivotar según el aprendizaje de la beta cerrada.

## Issues relacionados

- [F2.1](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F2.1) · Decisión de modelo (freemium + suscripción familiar es la propuesta acá).
- [F2.2](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F2.2) · Decisión de pricing — pendiente, requiere F2.3.
- [F2.3](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F2.3) · Costos reales por usuario — pendiente.
- [F2.4](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F2.4) · Plan financiero — depende de F2.1, F2.2, F2.3.
- [F2.5](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F2.5) · Fundraising — ver también [docs/21 · Legal](21_legal_preliminar.md) sección 6.
