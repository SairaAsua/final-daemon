# NotebookLM — Guía para generar Video y Audio Overview de DaemonCraft

Esta carpeta tiene todo listo para que **Saira / el equipo** suban material a [NotebookLM](https://notebooklm.google.com) y generen:

- **Video Overview** — el reel narrado con visuales auto-generadas.
- **Audio Overview ("Deep Dive")** — un podcast estilo conversación entre dos hosts.
- **Briefing Doc** — un documento ejecutivo.
- **Study Guide** — guía para el equipo o partners.

Yo (Claude) **no puedo correr NotebookLM** desde acá — es una herramienta de Google que se opera en su sitio. Lo que sí dejé hecho:

| Archivo | Para qué sirve |
|---|---|
| `source.md` | El **único archivo** que tenés que subir a NotebookLM. Tiene todo: visión, soul, logos, demo, harmonic beacon, app, screen-time, stack, hitos, branding. Optimizado para que el modelo entienda capas. |
| `prompts_video.md` | El prompt exacto para generar el **Video Overview** (3-5 minutos), con tono y estructura definidos. |
| `prompts_audio.md` | El prompt para el **Audio Overview** (podcast), con dirección de hosts y ángulos a evitar. |
| `prompts_briefing.md` | El prompt para Briefing Doc y Study Guide (formatos secundarios). |

## Pasos

### 1. Entrar a NotebookLM

```
https://notebooklm.google.com
```

Logueate con la cuenta de Google que vas a querer asociar al proyecto (te recomiendo crear un Google Drive específico para DaemonCraft si todavía no existe).

### 2. Crear notebook

Click en *"New notebook"*.
Nombre: **DaemonCraft**.

### 3. Subir el source

Click en *"Add source"* → *"Upload"*.
Subí: **`source.md`** (este mismo directorio).

Listo. Es el único source que NotebookLM necesita.

Opcional: si querés que también tenga el texto completo del Soul `/me` y el Logos como fuentes separadas (NotebookLM cita por fuente), también podés subir:

- `../../docs/04_soul_vanguaria.md`
- `../../docs/05_logos_lavanguardia.md`

Pero el `source.md` consolidado ya los incluye.

### 4. Generar el Video Overview

1. En NotebookLM, en el panel derecho ("Studio"), click en **"Video Overview"** → **"Customize"**.
2. Pegá el contenido de `prompts_video.md` en el campo de instrucciones.
3. Click **"Generate"**.
4. Esperá. (NotebookLM tarda unos minutos.)
5. Cuando esté listo, lo descargás y ya está.

### 5. Generar el Audio Overview

1. En el mismo panel "Studio", click en **"Audio Overview"** → **"Customize"**.
2. Pegá `prompts_audio.md`.
3. Generate.
4. Descargá el MP3 cuando termine.

### 6. Otros formatos (opcional)

- **Briefing Doc** → para mandar a partners / inversores. Usá `prompts_briefing.md`.
- **Study Guide** → para onboarding del equipo. Mismo prompt o adaptado.
- **Timeline** → automático, útil si querés ver la cronología de hitos.
- **FAQ** → ya tenemos uno en [`marketing/faq-papas.md`](../faq-papas.md), pero NotebookLM puede generar otro distinto desde el material completo.

## Cosas a verificar en los outputs

Antes de publicar lo que NotebookLM genere, leelo/escuchalo y chequeá que no diga:

- ❌ Nada sobre el sistema de creación del alma (Diseño Humano de Ra Uru Hu). Es interno.
- ❌ Nada que se sienta "control parental".
- ❌ Métricas de horas frente a la pantalla.
- ❌ Taglines pegadas al nombre tipo "DaemonCraft: tu compañero IA".
- ❌ Promesas de "tu hijo va a aprender más".

Si aparece algo de esto, re-generá con el prompt corregido (y agregale al prompt: *"no menciones X"*).

## Si NotebookLM no acepta el archivo

Convertí a PDF: copiá el contenido de `source.md` a Google Docs y exportá como PDF. Subí el PDF.
