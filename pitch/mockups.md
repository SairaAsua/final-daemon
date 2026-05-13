# Mockups ASCII

No son specs visuales finales. Son **flujos** y **layouts** para chequear que el producto se entiende. Sirven al equipo de diseño y al equipo de producto como ancla.

Paleta de referencia: **acero-azul**.

---

## 1. El demo · Protector de la Luz · vista de juego

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌───────────────────────────┐    Prueba 2 de 4: Parkour    │
│  │                           │                              │
│  │        [ DAEMON ]         │    Tu daemon te observa.     │
│  │         ◉ ◉               │    Te dice: "saltá".         │
│  │       ◢█████◣             │                              │
│  │                           │                              │
│  │   ░░░░░░░░░░░░░░░░░       │                              │
│  │   ░░░░ AZUFRE ░░░░        │    ◆  LUZ                    │
│  │   ░░░░ ◇ DIAMANTE ░░      │    ▓▓▓░░ 73% intacto         │
│  │   ░░░░░░░░░░░░░░░░░       │                              │
│  │                           │    ☠  ZOMBIES                │
│  │       🧟 🧟 🧟            │    × 3 cerca del azufre      │
│  │                           │                              │
│  └───────────────────────────┘                              │
│                                                             │
│  ♪ ~ harmonic beacon ~ ~ ~                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Notas:
- El campo armónico del Beacon es constante. La barra de "Luz intacta" sube y baja con los ataques.
- El daemon está siempre presente y comenta en burbuja.
- Las 4 pruebas se muestran arriba como progreso.

---

## 2. App / vórtice · home del niño

```
┌─────────────────────────────┐
│  DaemonCraft         ⚙      │
├─────────────────────────────┤
│                             │
│   ◉ ◉                       │
│  ◢███◣      Eko             │
│            está despierto   │
│                             │
│  ── ── ── ── ── ── ── ── ── │
│                             │
│  ▶ Jugar ahora              │
│                             │
│  ✎ Hablar con Eko           │
│                             │
│  ♪ Escuchar el Beacon       │
│                             │
│  🗺️ Mis mundos              │
│                             │
│  🎨 Skins                   │
│                             │
└─────────────────────────────┘
```

---

## 3. App / vórtice · home del papá / mamá

```
┌─────────────────────────────────────────┐
│  DaemonCraft · Para vos         ⚙       │
├─────────────────────────────────────────┤
│                                         │
│  ◉ Reporte de hoy · 13/may              │
│  ─────────────────────────────────────  │
│  Joaco resolvió 12 problemas            │
│  de matemáticas mientras                │
│  defendía la Luz.                       │
│                                         │
│  Le leyó un cuento a su daemon.         │
│                                         │
│  Se rió tres veces (escuchá audio).     │
│                                         │
│  Hizo una pregunta: "¿por qué los       │
│  zombies vienen siempre de noche?"      │
│                                         │
│  ─────────────────────────────────────  │
│                                         │
│  💬 Hablar con el daemon de Joaco       │
│                                         │
│  🎮 Jugar con Joaco esta tarde          │
│     (él te invitó)                      │
│                                         │
└─────────────────────────────────────────┘
```

Notas:
- **No** hay barra de "horas hoy".
- **No** hay alertas tipo "estuvo demasiado tiempo".
- Cada bullet es un hito, una observación, un momento.

---

## 4. Onboarding · pantalla 1

```
┌─────────────────────────────────────────┐
│                                         │
│              DaemonCraft                │
│                                         │
│                                         │
│         ¿Cómo te llamás?                │
│                                         │
│      ┌─────────────────────┐            │
│      │                     │            │
│      └─────────────────────┘            │
│                                         │
│                                         │
│         ¿Cuándo naciste?                │
│                                         │
│      ┌───────┐  ┌───────┐  ┌───────┐    │
│      │ día   │  │ mes   │  │ año   │    │
│      └───────┘  └───────┘  └───────┘    │
│                                         │
│                                         │
│         ¿Dónde naciste?                 │
│                                         │
│      ┌─────────────────────┐            │
│      │                     │            │
│      └─────────────────────┘            │
│                                         │
│                              [siguiente]│
│                                         │
└─────────────────────────────────────────┘
```

> Internamente, esto alimenta el soul-engine (fecha/hora/lugar). Hacia afuera, son tres preguntas amables.

---

## 5. Onboarding · pantalla "elegí a tu daemon"

```
┌─────────────────────────────────────────┐
│  DaemonCraft                            │
│                                         │
│        Conocé a tu compañero            │
│                                         │
│   ┌────────┐  ┌────────┐  ┌────────┐    │
│   │  ◉ ◉   │  │   ◔    │  │  ◉◉◉   │    │
│   │  ◢██◣  │  │ ◢████◣ │  │ ◢████◣ │    │
│   │        │  │        │  │  ░░░░  │    │
│   │ Sombra │  │ Mística│  │Espíritu│    │
│   └────────┘  └────────┘  └────────┘    │
│                                         │
│   ┌────────┐  ┌────────┐  ┌────────┐    │
│   │  ◉ ◉   │  │   ◇    │  │   ▽    │    │
│   │ ◢▓▓▓◣  │  │  ◇◇◇   │  │   ▽▽   │    │
│   │ "Tesla"│  │"Goblin"│  │ "Monk" │    │
│   └────────┘  └────────┘  └────────┘    │
│                                         │
│         (14+ personajes disponibles)    │
│                                         │
│        Ponele un nombre: _______        │
│                                         │
│                              [crear]    │
│                                         │
└─────────────────────────────────────────┘
```

> Los personajes salen de `agents/prompts/` — son [los 14 personajes reales](../docs/17_personajes_y_skills.md).

---

## 6. El Beacon encendido (final del demo)

```
                          ◇
                         ◇◇◇
                        ◇◇◇◇◇
                       ◇◇   ◇◇
                       ◇  ★  ◇
                       ◇◇   ◇◇
                        ◇◇◇◇◇
                         ◇◇◇
                          ◇

                    ♪ ~ ~ ~ ~ ~

              "Encendiste tu Luz.
            Ahora siempre podés volver."

                   [ continuar ]
```

> Es el cierre de la *Proyección del Mito Personal*. El mito quedó hecho. El espacio queda como referencia para siempre.

---

## 7. Vista de embodiment · "tu daemon está en…"

```
┌─────────────────────────────────────────┐
│  Tu daemon                              │
│                                         │
│   ◉ ◉                                   │
│  ◢███◣     Eko                          │
│                                         │
│  Está acá:                              │
│                                         │
│  ●  Minecraft  (jugando con vos)        │
│  ○  Terminal   (offline)                │
│  ○  Impresora  (no conectada)           │
│  ○  Telescopio (no conectado)           │
│                                         │
│  Es la misma Eko en todos los lugares.  │
│                                         │
└─────────────────────────────────────────┘
```

> Esto hace **visible** la APL. El usuario ve los embodiments. Entiende que el agente es uno solo.

---

## Notas para implementación visual

- Tipografía: una sans humanista para texto, una mono para acentos técnicos.
- Glow sutil en azul-acero alrededor de elementos vivos (Beacon, daemon, Luz).
- Animaciones lentas, sostenidas — coherentes con "campo armónico", no con notificaciones de redes sociales.
- Sin badges rojas, sin contadores ansiosos, sin "estuvo 2h jugando hoy".
