# Script · Manifesto opener

Sin voiceover. Solo música, ambient, on-screen text minimal.

## On-screen text

Tipografía: limpia, sans humanista (sugerencias: *Inter Display*, *General Sans*, *Sohne*, *Cabinet Grotesk*). Peso medium. Color **perla `#F8FAFC`** con leve **glow miel `#FBBF24`** al 15% de opacidad. Fade-in 0.4s · hold · fade-out 0.4s. Centrado, tercio inferior salvo el wordmark final.

| Tiempo | Texto | Notas |
|--------|-------|-------|
| 0:08 → 0:12 | El problema no es la pantalla. | Final del shot 02. Aparece sobre los ojos en close-up. |
| 0:15 → 0:18 | Es qué se hace en ella. | Mitad del shot 03. Fade-out antes del corte. |
| 0:32 → 0:36 | Un compañero. | Sobre el shot 06, mientras el Allay aparece. Más pequeño que los anteriores. |
| 1:02 → 1:06 | Una vida. Muchos cuerpos. | Sobre el shot 11. Dos líneas, segunda más leve. |
| 1:10 → 1:15 | **DaemonCraft** | Wordmark final. Peso bold. Sin tagline. Animación: cada letra fade-in escalonado de 60ms, luego un sutil pulso miel al asentarse. |

## Música

**Plan A — Harmonic Beacon (canónico)**
- Pista: pad armónico generado desde la escala armónica natural (no temperada). Duración 75s.
- Carácter: drones sostenidos cyan/blue, una sola progresión que evoluciona, sin percusión, una resolución suave al final.
- Pedirle a Saira/Nico la pista cuando esté lista. Si no hay todavía, **Plan B**.

**Plan B — Suno (mientras tanto)**
Prompt para Suno o similar:
```
Title: DaemonCraft Manifesto Pad

[Genre] ambient, harmonic series, drone, gentle
[Mood] peaceful, wondrous, hopeful, intimate, never sentimental
[Instruments] sustained synth pad in natural harmonic ratios (not equal temperament), distant glass bells, soft choir wash, single low cello drone, no drums, no melody upfront
[Structure] 75 seconds, one continuous arc, no verses, no chorus
  0:00-0:24  sparse low drone + occasional bell, minor color
  0:24-0:36  cyan bell ringing emerges, pad opens, major color enters
  0:36-0:54  pad fully open, gentle three-note motif (C-E-G) recurring
  0:54-1:06  pad widens, slight shimmer, suspension
  1:06-1:15  resolution to a held perfect fifth, fades to silence
[Vibe] Studio Ghibli x Harold Budd x The Caretaker (peaceful side) x A Winged Victory for the Sullen
[Avoid] no lyrics, no spoken word, no synth pop, no EDM, no driving beat, no cinematic trailer hits, no orchestral swells
```

Render a 80s y recortar a 75s con fade-out manual.

## Ambient / SFX (en post)

Lo que Veo 3.1 genera sirve como referencia. Reemplazar con foley limpio donde haga falta. Para esta pieza necesitamos como mínimo:

- **Shot 03** — un único *block-place click* Minecraft canónico, suave.
- **Shot 05** — *block-place click* + chime corto.
- **Shot 06** — single *delicate chime* + Allay coo (sample del juego o muy similar).
- **Shot 08** — *three-note noteblock chord* C-E-G en timbre noteblock vanilla.
- **Shot 10** — *whoosh* suave + *3D printer hum* corto.
- **Shot 12** — un único *bell chime* al asentarse el wordmark.

## Mezcla final

- Música base: -18 LUFS (deja aire para los chimes).
- Chimes y noteblocks: -12 LUFS de pico, mezclados con la música.
- Wind / room tone / printer hum: -28 LUFS, casi imperceptible pero presente.
- Master: -16 LUFS integrado (estándar web/social). Versión social a -14 LUFS.

## Decisiones de tono

- **Sin voiceover**. Confianza en la imagen + texto + música. La voz va para el explainer largo de NotebookLM, acá no.
- **Sin trailer hits / risers**. Esto no es un anuncio de tech. Es una invitación a entrar a un lugar tranquilo.
- **Sin Minecraft "OST original"**. Aunque inspira, no usar C418 ni Lena Raine — riesgo de copyright y además queremos firma sonora propia de DaemonCraft (Harmonic Beacon).
