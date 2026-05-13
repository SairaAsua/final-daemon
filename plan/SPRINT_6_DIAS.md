# Sprint de 6 días · plan táctico

> Cherry-picked del repo `grok-daemonMatrix` (Kimi). Complemento corto y táctico al [PLAN.md](PLAN.md) general.

**Objetivo del sprint**: tener materiales sólidos para mostrar a inversores / lanzar campaña de crowdfunding.

> **Estado real**: estamos en etapa bebé. El motor del alma existe, los bots corren, pero no hay app, no hay suscripción, no hay reportes. Este sprint es para producir **materiales de presentación**, no un producto terminado.

> Este plan es ambicioso para 6 días. Si algo se escapa, **priorizar**: pitch deck + demo básico + números.

---

## Día 1 — Documentación y contenido

- [ ] Leer/completar documentación de Julián de la Reta (`/home/saira/web/proyecciondelmito/docs/` cuando esté montada).
- [ ] Definir las 4 pruebas del demo basadas en la *Proyección del Mito Personal* — issue [A3.1](https://github.com/SairaAsua/final-daemon/issues?q=A3.1).
- [ ] Actualizar todos los documentos del repo con la información real del equipo, costos y estado — ver [docs/20 · Equipo](../docs/20_equipo.md).
- [ ] Revisar el informe legal preliminar ([docs/21](../docs/21_legal_preliminar.md)) y marcar qué puntos necesitan abogado.
- [ ] Validar precio ($30/mes) y costos ($10/mes tokens) con Nico — issue [F2.2](https://github.com/SairaAsua/final-daemon/issues?q=F2.2).

**Responsable**: Saira + Eko (documentación).

---

## Día 2 — Demo jugable

- [ ] Construir la estructura base del demo en Minecraft (mundo, spawn, zona de pruebas).
- [ ] Definir mecánicas de las 4 pruebas (aunque sean bloques básicos) — issue [A3.2](https://github.com/SairaAsua/final-daemon/issues?q=A3.2).
- [ ] Integrar el bot (Eko / Oráculo) al mundo del demo para que pueda acompañar — issue [A3.3](https://github.com/SairaAsua/final-daemon/issues?q=A3.3).
- [ ] Testear que el bot responda dentro del contexto del demo.

**Responsable**: Developers (Anabella, Pablo, Javier, Jeremías) + Nico.

---

## Día 3 — App / Vórtice · MVP visual

- [ ] Wireframes de la app · 3-5 pantallas clave: login, dashboard niño, dashboard padre, chat con agente — issues [A1.2](https://github.com/SairaAsua/final-daemon/issues?q=A1.2) y [A1.3](https://github.com/SairaAsua/final-daemon/issues?q=A1.3).
- [ ] Definir qué reportes se muestran a los padres · texto, formato, frecuencia — issues A4.1-A4.4.
- [ ] Mockup navegable (Figma o HTML estático).
- [ ] Flujo de creación del personaje y elección de skins — issues A2.2-A2.3.

**Responsable**: Saira + un dev front-end + Claude (wireframes).

---

## Día 4 — Pitch y presentación

- [ ] Armar el pitch deck final (slides diseñadas, no solo texto) — issues [C1.1](https://github.com/SairaAsua/final-daemon/issues?q=C1.1)-C1.3.
- [ ] Preparar un video demo corto (30-60 segundos) del bot en Minecraft.
- [ ] Revisar landing page y ajustar según feedback del equipo — issue [B1.4](https://github.com/SairaAsua/final-daemon/issues?q=B1.4).
- [ ] One-pager (una hoja) para inversores — ya hay base en `pitch/one-pager.md`.

**Responsable**: Saira + Eko.

---

## Día 5 — Negocio y números

- [ ] Calcular costos reales: servidor Minecraft, tokens LLM (~$10/mes), hosting app, infraestructura — issue [F2.3](https://github.com/SairaAsua/final-daemon/issues?q=F2.3).
- [ ] Validar precio final de suscripción: **$30/mes** es la propuesta inicial (familiar, no por niño) — issue [F2.2](https://github.com/SairaAsua/final-daemon/issues?q=F2.2).
- [ ] Proyección financiera básica (cuántos usuarios necesitamos para cubrir costos) — issue [F2.4](https://github.com/SairaAsua/final-daemon/issues?q=F2.4).
- [ ] Preparar preguntas frecuentes para inversores.
- [ ] Revisar estructura legal: ¿AlterMundi puede recibir inversión? ¿Necesita SRL? — issue [F1.1](https://github.com/SairaAsua/final-daemon/issues?q=F1.1) + [docs/21 sección 6](../docs/21_legal_preliminar.md).

**Responsable**: Nico + Saira.

---

## Día 6 — Ensayo y ajuste final

- [ ] Presentar internamente al equipo completo.
- [ ] Recolectar feedback y ajustar pitch, demo y documentos.
- [ ] Preparar la campaña de crowdfunding (texto, imágenes, recompensas, meta de financiamiento).
- [ ] Definir fecha de lanzamiento de la campaña.
- [ ] Commit final de todo en el repo.

**Responsable**: Todo el equipo.

---

## Materiales de salida · entregables

1. Repo actualizado con documentación completa.
2. Demo jugable en Minecraft (aunque sea básico).
3. Mockup de la app / vórtice.
4. Pitch deck listo para presentar.
5. One-pager para inversores.
6. Landing page funcional.
7. Plan de costos y precios validado.
8. Campaña de crowdfunding lista para lanzar.

---

## Relación con el PLAN.md general

Este sprint **acelera** el progreso de las áreas: A1, A2, A3, A4, B1, C1, F1, F2.
No reemplaza el PLAN.md — es una capa táctica para producir entregables en poco tiempo si hace falta presentar el proyecto.

Cuando termine el sprint:

1. Cerrar las issues que ya estén hechas.
2. Mover los entregables al milestone [🌱 Beta — construir y validar](https://github.com/SairaAsua/final-daemon/milestone/2) si pasan al siguiente bucle.
