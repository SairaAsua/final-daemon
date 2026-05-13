# Informe legal preliminar

> Cherry-picked del repo `grok-daemonMatrix` (Kimi). Mapa de riesgos legales y recomendaciones para DaemonCraft. **No reemplaza asesoramiento legal profesional**.

## Resumen ejecutivo

DaemonCraft combina:

- un **videojuego** (Minecraft)
- **inteligencia artificial** con memoria persistente
- **datos personales de menores**

La intención del equipo es ética: la memoria pertenece a cada familia, no a la empresa. A continuación, los principales riesgos y recomendaciones.

---

## 1. Protección de datos de menores

**Riesgo: alto**

DaemonCraft procesa datos personales de niños (edad, comportamiento, conversaciones con el agente, historial de juego, datos de crecimiento). Esto está altamente regulado.

### Recomendaciones

- **COPPA (EE.UU.)**: si algún usuario es de EE.UU. o el servidor está allí, se aplica la *Children's Online Privacy Protection Act*. Requiere consentimiento verificable de los padres antes de recolectar datos de menores de 13 años.
- **GDPR-K (Europa)**: el GDPR protege específicamente a menores de 16 años (o 13 con consentimiento parental). Requiere bases legales claras, derecho al olvido, portabilidad de datos.
- **Argentina (Ley 25.326)**: protege datos personales de todos los individuos. El titular de los datos es el niño/a, representado por los padres.
- **Consentimiento parental explícito**: la app debe tener un flujo de verificación parental (no solo un checkbox) antes de que el niño juegue.
- **Datos mínimos**: solo recolectar lo estrictamente necesario. Menos datos = menos riesgo.

---

## 2. Propiedad de la memoria / datos

**Principio del equipo**:
> *"La memoria no es nuestra, es de cada familia."*

### Recomendaciones

- Reflejar este principio en los **Términos de Servicio** y la **Política de Privacidad**.
- Los padres deben poder:
  - **Exportar** toda la memoria / conversaciones del agente en cualquier momento (portabilidad).
  - Solicitar la **eliminación completa** de datos (derecho al olvido).
  - **Revisar** qué datos se almacenan.
- Evitar usar datos de menores para entrenar modelos de IA sin consentimiento explícito y separado.

---

## 3. Términos de uso de Minecraft · Microsoft

**Riesgo: medio-alto**

DaemonCraft usa Minecraft como plataforma. Microsoft tiene términos estrictos:

- **EULA de Minecraft**: prohíbe vender ventajas de juego (pay-to-win) en servidores.
- **Política de marca**: el uso del nombre "Minecraft" y sus assets está regulado.
- **API de Minecraft · Mineflayer**: el bot usa Mineflayer (librería Node.js). No viola la EULA si se usa en servidores privados con consentimiento, pero hay que revisar los términos si se comercializa.

**Recomendación**: no vender items o ventajas dentro de Minecraft directamente. La suscripción debe ser por el **servicio del agente**, no por contenido del juego.

---

## 4. Responsabilidad del contenido generado por IA

**Riesgo: medio**

El agente de IA genera respuestas en tiempo real. Puede:

- Dar información incorrecta.
- Generar contenido inapropiado (aunque improbable con buenos filtros).
- Crear dependencia emocional.

### Recomendaciones

- **Filtros de seguridad**: implementar filtros de contenido en las respuestas del agente.
- **Descargo de responsabilidad**: los Términos deben aclarar que el agente es una herramienta de acompañamiento — **no un profesional de la salud mental, ni un tutor educativo certificado**.
- **Intervención humana**: tener un mecanismo para que padres o moderadores puedan revisar conversaciones si hay alertas.
- **Límites del agente**: el agente debe estar programado para **no dar consejos médicos, legales o de seguridad** sin derivar a un adulto.

---

## 5. Propiedad intelectual

**Riesgo: medio**

- **Diseño Humano · Ra Uru Hu**: el software de creación del alma usa Diseño Humano. Asegurarse de **no infringir** derechos de autor o marcas registradas del sistema Human Design (hay organizaciones que reclaman derechos sobre ciertos materiales).
- **Harmonic Beacon**: es tecnología propia de AlterMundi. No hay problema si AlterMundi es la dueña.
- **Soul · Logos de LaVanguardIA**: son creaciones originales del equipo. **Registrar derechos de autor es recomendable**.

---

## 6. Aspectos comerciales

**Riesgo: bajo-medio**

- **Suscripción**: si se cobra, se debe cumplir con legislación de consumidor (derecho de arrepentimiento, facturación, etc.).
- **Crowdfunding · inversores**: si se busca inversión, se necesita una estructura legal adecuada. **AlterMundi es una ONG**, lo cual puede complicar la distribución de ganancias o equity. Revisar si se necesita una **SRL/SA paralela** para el producto comercial.

---

## 7. Accesibilidad y no discriminación

### Recomendación

- El juego y la app deben ser accesibles para niños con discapacidades (lectores de pantalla, subtítulos, controles adaptables).

---

## Próximos pasos legales recomendados

1. **Contratar a un abogado** especializado en protección de datos de menores y tecnología.
2. **Redactar Términos de Servicio y Política de Privacidad** específicos para DaemonCraft.
3. **Implementar flujo de consentimiento parental verificable** antes del lanzamiento.
4. **Auditar qué datos** se almacenan y dónde (repos privados, servidores).
5. **Registrar marca** "DaemonCraft" si no está registrada.
6. **Revisar estructura societaria** (ONG vs empresa comercial) si se busca inversión.

---

## Issues relacionados

- [F1.1](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F1.1) · Entidad legal — ver sección 6 acá.
- [F1.2](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F1.2) · T&C y privacidad — este doc da el outline.
- [F1.3](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F1.3) · COPPA — ver sección 1.
- [F1.4](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F1.4) · GDPR — ver sección 1.
- [F1.5](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F1.5) · LGPD / Argentina — ver sección 1.
- [F1.6](https://github.com/SairaAsua/final-daemon/issues?q=is%3Aopen+F1.6) · Consentimiento parental — ver sección 1 + paso 3.

---

*Este informe es preliminar y no reemplaza el asesoramiento legal profesional.*
