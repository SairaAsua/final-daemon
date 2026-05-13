# Personajes y skills

Estos son los **prompts de personaje** y las **habilidades de Minecraft** que el daemon puede encarnar y ejercer. Existen como archivos en `/home/saira/agents/`.

## Personajes (prompts)

Path: `/home/saira/agents/prompts/`

| Personaje | Archivo |
|---|---|
| Cleopatra | `cleopatra.md` |
| Dave | `dave.md` |
| Elena | `elena.md` |
| Genghis | `genghis.md` |
| Goblin | `goblin.md` |
| Jin | `jin.md` |
| Lisa | `lisa.md` |
| Marcus | `marcus.md` |
| Mia | `mia.md` |
| Monk | `monk.md` |
| Pirate | `pirate.md` |
| Sarah | `sarah.md` |
| Tesla | `tesla.md` |
| Tommy | `tommy.md` |

Plus dos carpetas de personajes complejos:

- `landfolk/` — gente de la tierra.
- `rolemaster/` — el rol master.

Y un archivo:

- `BODY.md` — definición del cuerpo / encarnación.

> **Cómo se usan**: el daemon puede tomar uno como modo / casting cuando el usuario lo elige, manteniendo siempre su Soul `/me`. El personaje es ropa, el Soul es el alma.

## Skills (Minecraft)

Path: `/home/saira/agents/skills/`

| Skill | Archivo | Sobre qué |
|---|---|---|
| Building | `minecraft-building.md` | Construcción. |
| Combat | `minecraft-combat.md` | Combate. |
| Farming | `minecraft-farming.md` | Cultivo. |
| Gathering | `minecraft-gathering.md` | Recolección. |
| Goals | `minecraft-goals.md` | Metas y objetivos. |
| Navigation | `minecraft-navigation.md` | Navegación. |
| Survival | `minecraft-survival.md` | Supervivencia. |

Estas son las 7 skills base. Cubren las 4 pruebas del demo:

- **Desafíos** → Survival + Combat + Goals.
- **Parkour** → Navigation.
- **Lógica** → Goals + Gathering.
- **Construcción** → Building.

## Almas base (SOUL-\*.md)

En `/home/saira/agents/`:

- `SOUL-civilization.md`
- `SOUL-rolemaster.md`
- `SOUL-minecraft.md`
- `SOUL-landfolk.md`

Son distintos *modos profundos* — el daemon puede operar como civilización (orquestador), rolemaster (Game Master), minecraft-native (bot puro), o landfolk (gente de la tierra). Siempre por encima del `/me` que define la especie.

## Implicancia para el producto

El daemon ya **no es un personaje único**: tiene la flexibilidad de cambiar de cara según el contexto, sin perder identidad. Para el onboarding esto significa que el catálogo inicial de skins tiene **al menos 14 personajes ya escritos** + 4 almas base + 2 conjuntos complejos (landfolk, rolemaster) — sin tener que diseñar nada nuevo desde cero.

> Ver [docs/09 · Onboarding](09_onboarding.md) — la app pregunta y ayuda a elegir personaje y skin para el bot.
