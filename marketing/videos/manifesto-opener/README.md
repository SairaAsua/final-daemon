# Manifesto opener · 75s

Pieza ancla cinematográfica del manifesto de DaemonCraft. Reusable en web, social (corte de 30s y 15s), y como abre-pitch.

## Estructura

**Duración**: 75s · 12 shots de ~6s cada uno (Veo 3.1 corta en 8s, así que cada shot es un clip independiente).

**Arco emocional**:
1. **Hook** (0-12s) — pantalla fría, vacío
2. **Reframe** (12-24s) — la misma pantalla con calidez
3. **Reveal** (24-36s) — aparece el Allay/daemon
4. **Vínculo** (36-54s) — jugando juntos
5. **Visión** (54-66s) — el daemon afuera de Minecraft
6. **Cierre** (66-75s) — wordmark DaemonCraft

Ver [`shotlist.md`](shotlist.md).

## Pipeline

```
[shotlist.md]  →  Nano Banana Pro (frame)  →  Veo 3.1 (anima 6-8s)
                  prompts_nano_banana.md     prompts_veo3.md
                          ↓                          ↓
                    /frames/shot-NN.png        /clips/shot-NN.mp4
                                                     ↓
                                              ffmpeg concat
                                                     ↓
                                          manifesto-opener.mp4
```

Automatizado en [`n8n-workflow.json`](n8n-workflow.json).

## Cómo correrlo

**1. Instalar n8n (una vez)**
```bash
npx n8n
```
Abre en `http://localhost:5678`. Crear cuenta local.

**2. Credenciales**
- En n8n: Settings → Credentials → New → **Google Gemini (Generative Language API)**.
- API key desde [aistudio.google.com](https://aistudio.google.com/app/apikey). Necesita acceso a `gemini-3-pro-image` (Nano Banana Pro) y `veo-3.1`. Si tu key no tiene Veo 3.1 todavía, está detrás de waitlist en Vertex AI.

**3. Importar workflow**
- En n8n: menú → Import from File → seleccionar `n8n-workflow.json`.
- Asignar credenciales en cada nodo HTTP.

**4. Ejecutar**
- Botón "Execute Workflow". Procesa los 12 shots secuencialmente (~10 min total porque Veo 3.1 tarda).
- Output: `marketing/videos/manifesto-opener/frames/` y `/clips/`.

**5. Ensamblar**
```bash
cd marketing/videos/manifesto-opener
ffmpeg -f concat -safe 0 -i clips/concat.txt -c copy manifesto-opener.mp4
```
(El workflow genera `concat.txt` automáticamente.)

**6. Audio** — el manifesto opener NO lleva narración en off. Lleva:
- Pad armónico de Harmonic Beacon (usar pista real cuando esté lista; mientras tanto, generar con Suno usando el prompt en [`script.md`](script.md)).
- Sonidos ambient sutiles (viento de pradera, noteblock lejano en el shot 8).
- On-screen text en 2 momentos. Ver `script.md`.

## Variantes a producir después

Una vez que el master de 75s funciona, recortar:
- **30s social** — shots 1, 3, 6, 8, 11, 12.
- **15s hook** — shots 1, 6, 12.
- **6s loop** — solo shot 8 (Allay + faro de quartz + ondas armónicas).

## Branding

Paleta **Allay vibe** (cyan + perla + miel + índigo + verde pradera). Ver `project_daemoncraft_branding_allay` en memoria. NO acero-azul.
