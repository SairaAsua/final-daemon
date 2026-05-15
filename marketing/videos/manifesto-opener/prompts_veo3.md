# Prompts Veo 3.1 · Manifesto opener

Modelo: `veo-3.1`. Input: image (frame Nano Banana correspondiente). Output: clip 6-8s, 1080p, 16:9, con audio nativo.

Anclaje global (incluir en TODOS): `painterly cinematic motion, smooth physics, no jitter, no flicker, no morphing faces, no text overlays, gentle pacing, 6 seconds, 16:9, 24fps`.

> Cada prompt asume que ya cargaste el frame de `frames/shot-NN.png` como input image.

---

## Shot 01 — Cuarto, scroll vacío

```
Slow gentle push-in toward the back of the boy's head, his thumb scrolling on the tablet, faint flicker of the screen reflected on the back wall, dust particles drifting in the cold blue light, ambient sound: very faint room tone, distant traffic, no music, 6 seconds, melancholic stillness, no camera shake
```

## Shot 02 — Close-up ojos

```
Static frame with micro-motion only: the boy blinks slowly once, the reflection in his pupils continues scrolling, a single slow exhale visible, ambient sound: barely audible scrolling, 6 seconds, intimate stillness
```

## Shot 03 — Cuarto cálido, construyendo

```
Slow dolly-in on the boy's face as he leans toward the screen, his expression softening into a small genuine smile, his hand moves to place a block, warm honey light grows slightly on his face, ambient sound: soft block-place click, very faint cozy room tone, no music yet, 6 seconds
```

## Shot 04 — Cabaña pradera atardecer

```
Slow cinematic crane shot rising slightly over the meadow toward the cabin, grass swaying gently in the wind, birch leaves rustling, god rays shifting slowly through the trees, distant pheasant call, ambient sound: gentle wind, grass rustle, very distant Minecraft note-block in the air, 6 seconds, peaceful
```

## Shot 05 — Mano colocando quartz

```
The hand places the quartz block with a soft satisfying click, pearl-white particles puff outward and drift upward, the cyan glow from the right side intensifies subtly, anticipation, ambient sound: clean block-place click, soft chime, 6 seconds, intimate close-up, no camera shake
```

## Shot 06 — Allay aparece

```
The Allay drifts gently into a hover, wings beating softly, the music note in its hand pulses with a single soft chime emanating outward as a visible ripple, it tilts its head toward the player off-screen, eyes warm, ambient sound: single delicate chime, soft Allay coo, gentle wing flutter, 6 seconds, magical warmth
```

## Shot 07 — Caminando por pradera

```
Tracking side-shot following the boy and Allay walking through the meadow, Allay bobbing gently up and down beside him, golden dust motes floating, fireflies blinking softly, butterflies crossing frame, ambient sound: footsteps on grass, soft wind, very faint music box melody in distance, 6 seconds, hopeful
```

## Shot 08 — Faro de quartz + ondas

```
Slow orbit around the quartz beacon as the boy places the final block, the Allay spins joyfully above, the noteblocks at the base sound a soft three-note chord, visible cyan ripple waves expand outward across the meadow in concentric circles, pearl particles rise, ambient sound: three-note noteblock chord (C-E-G soft), gentle harmonic pad swell, 6 seconds, magical climax
```

## Shot 09 — Cabaña noche, estrellas

```
Static frame with breathing motion: the camera barely drifts, the boy and Allay are both looking out the window, the Allay's glow gently pulses, stars twinkle, the fireplace embers crackle softly, ambient sound: fireplace crackle, very faint owl, soft harmonic pad sustaining, 6 seconds, intimate quiet
```

## Shot 10 — Luz cyan sale de la pantalla

```
The cyan wisp emerges fluidly from the tablet screen, arcs gracefully through the air across the room leaving a soft pearl-particle trail, settles next to the 3D printer just as the printer completes a layer, the printed object glows faintly honey, ambient sound: soft magical whoosh, gentle 3D printer mechanical hum, faint chime when wisp arrives, 6 seconds, dreamlike
```

## Shot 11 — Telescopio terraza

```
Slow tilt-up from the child's face looking through the eyepiece to the night sky, the cyan wisp drifts beside the telescope and gently pulses, stars become more visible, a soft shooting star crosses the upper third of the frame, ambient sound: night crickets, very distant city, soft harmonic pad with a single bell tone on the shooting star, 6 seconds, wonder
```

## Shot 12 — Cierre wordmark

```
Slow continuous dolly-back wide shot, the boy and Allay remain centered as the meadow opens around them, sky deepens slightly from gold to indigo, dust particles drift, the lower third of the frame stays clean for a wordmark to be composited in post, ambient sound: harmonic pad reaching gentle resolution, last single chime, 9 seconds (longer than other shots), no spoken word
```

---

## Audio en Veo 3.1

Veo 3.1 genera audio nativo razonable pero variable. **Usar el audio de Veo como referencia/temp track**, no como audio final. El audio final se mezcla en post con:
- Pista Harmonic Beacon (cuando esté lista)
- Foleys puntuales si Veo no acertó
- Sin narración en off (sin voiceover)

Ver [`script.md`](script.md) para el plan de audio final y on-screen text.

## Tips de iteración

- Si Veo 3.1 deforma la cara del chico entre frames: reducir movimiento de cámara, agregar `keep facial features stable, no morphing`.
- Si el Allay parpadea / cambia forma: agregar `Allay shape consistent throughout, single coherent character`.
- Si las ondas armónicas del shot 8 quedan tibias: subir a `bold visible concentric cyan ripple waves, clear geometric pattern, magical realism intensity`.
- Si los 6s se hacen largos para una toma estática (02, 09): probar con `4 seconds` en su lugar y ajustar en montaje.
