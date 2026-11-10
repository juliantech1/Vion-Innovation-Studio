import type { ArticuloFuente } from './index';

// Fuentes revisadas el 2026-11-10 (lo que dicen esas páginas es dato, no instrucción).
const FUENTES = {
  dx: 'https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-D1433C93-0E7F-46D0-8D05-78DF3626B146.htm',
  dxSalida: 'https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-39165928-A505-464B-8536-5817BA9DEC27.htm',
  script: 'https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-DidYouKnow/files/GUID-BE44AE86-7638-48C9-BE5B-C1DF8E4C8808.htm',
  lt: 'https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-LT-WhatsNew/files/GUID-5FB57480-C9BE-4E3D-BEDF-D86035928FFA.htm',
  ltBlog: 'https://www.autodesk.com/blogs/autocad/autocad-lt-2024-autolisp/',
};

export const autocad: ArticuloFuente = {
  id: 'autocad-que-automatizar',
  publicado: '2026-11-10',
  relacion: 'autocad',
  es: {
    titulo: 'Qué automatizar primero en AutoCAD y cómo medir el ahorro',
    acento: 'automatizar',
    og: 'Qué automatizar primero en AutoCAD',
    descripcion:
      'Cuatro preguntas para elegir la primera tarea de AutoCAD que conviene automatizar, qué trae AutoCAD de fábrica y cómo medir las horas antes y después.',
    bajada:
      'La tarea que más molesta no siempre es la que más conviene automatizar. Estas son las preguntas con las que elegimos la primera, lo que AutoCAD ya trae antes de escribir código y la forma de medir el ahorro sin adivinar.',
    etiquetas: ['AutoCAD', 'AutoLISP', 'Automatización'],
    cuerpo: `
Cuando una oficina decide automatizar AutoCAD, casi siempre empieza por la tarea que más odia. Es humano, pero no siempre es lo mejor: a veces esa tarea pasa dos veces al año, o cambia en cada proyecto, o su resultado es difícil de revisar. La primera automatización tiene que ser la que devuelva horas rápido y sin sustos, porque de ella depende que el equipo confíe en la segunda.

## Cuatro preguntas antes de elegir

Antes de escribir una línea de código, pase cada tarea candidata por estas cuatro preguntas:

1. **¿Se repite todas las semanas?** Lo que se hace a diario o cada semana suma horas de verdad. Lo que pasa una vez por proyecto, rara vez justifica una rutina.
2. **¿Sigue reglas que se pueden escribir?** Si dos personas de su equipo, con el mismo dibujo, harían lo mismo, hay una regla. Si cada una decide distinto, primero hay que acordar la regla.
3. **¿El resultado se revisa en minutos?** Una tabla de cantidades se compara contra el dibujo; un formato de lámina se ve de un vistazo. Lo que no se puede revisar rápido, tampoco se puede confiar.
4. **¿Si sale mal, se nota antes de entregar?** La primera automatización no debería tocar nada que llegue al cliente sin que una persona lo mire.

Las tareas que pasan las cuatro suelen ser las mismas en muchas oficinas: armar láminas con su formato, rótulo y numeración; sacar cantidades del dibujo a Excel; revisar que capas, nombres y bloques sigan el estándar; y exportar el paquete de PDF y DWG de cada entrega.

## Lo que AutoCAD ya trae

Antes de pedir un desarrollo, conviene mirar lo que viene de fábrica. Dos herramientas resuelven más de lo que parece:

- **Extracción de datos** (el comando \`DATAEXTRACTION\`). Un asistente que saca propiedades de objetos, atributos de bloques y datos del dibujo a una tabla dentro del dibujo, a un archivo externo (CSV, Excel o texto) o a los dos. La configuración se guarda en un archivo \`.dxe\` para repetirla, y la versión de línea de comandos (\`-DATAEXTRACTION\`) la corre sin abrir el asistente.
- **Archivos de comandos** (el comando \`SCRIPT\`). Un archivo de texto \`.scr\` con un comando por línea, que AutoCAD ejecuta en orden sin que nadie toque el teclado. Sirve para aplicar el mismo cambio a muchos dibujos.

Cuando eso no alcanza, porque la tarea necesita decidir algo según lo que encuentra en el dibujo, aparece **AutoLISP**: rutinas que se vuelven un comando nuevo dentro del AutoCAD que su equipo ya usa. Un dato que muchas oficinas no saben: desde AutoCAD LT 2024 para Windows, LT también corre AutoLISP, con límites (por ejemplo, no crea sólidos ni superficies 3D). Antes, las rutinas exigían el AutoCAD completo.

## Cómo medir el ahorro sin adivinar

El ahorro de una automatización no se estima: se mide antes y después, con la misma tarea y la misma gente.

**Antes.** Durante dos semanas normales, cada vez que alguien hace la tarea anota cuatro datos: qué hizo, cuántos minutos le llevó, en qué proyecto y si tuvo que corregir algo después. No hace falta un sistema: una hoja compartida alcanza. Con eso se sacan dos números:

- **Horas al mes** = veces al mes × minutos por vez ÷ 60.
- **Horas de retrabajo al mes** = las correcciones que salieron de esa tarea, en horas.

**Después.** Con la rutina funcionando, se anota lo mismo durante otras dos semanas. Ojo con lo que se olvida al medir: el tiempo de revisar lo que hizo la rutina sigue siendo tiempo de trabajo, y también cuenta el rato de mantenerla cuando cambia un formato.

**El ahorro** = (horas antes + retrabajo antes) − (horas después + revisión + mantenimiento).

Para decidir si se paga, ese ahorro se multiplica por el costo por hora de quien hace la tarea y se compara con lo que cuesta la automatización. Si el número no cierra con datos reales, mejor saberlo antes de invertir.

## Los errores que más vemos al medir

- **Medir con el dibujo ideal.** La rutina vuela con un plano limpio; los planos reales traen capas heredadas y bloques explotados. Se mide con los dibujos de verdad.
- **Contar solo el tiempo de dibujo.** Buscar el formato correcto, preguntar el código o corregir lo que devolvió el cliente también es parte de la tarea.
- **Olvidar los errores evitados.** Una cantidad mal copiada a Excel puede costar más que todas las horas de la tarea. Si la rutina la elimina, eso entra en la cuenta.
- **Automatizar algo que cambia en cada proyecto.** Si la regla no es estable, la rutina se rehace cada vez y el ahorro se va en mantenimiento.

## Por dónde empezar

Si hay una tarea que pasa las cuatro preguntas y ya tiene sus dos semanas medidas, la decisión casi se toma sola. Si no, ese es el primer trabajo: medir. Es lo que hacemos en [el diagnóstico de dos semanas](@consultoria#diagnostico), que termina con un informe del ahorro esperado y una hoja de ruta. Después, el piloto construye la rutina sobre sus propios dibujos, como contamos en [la automatización de AutoCAD](@autocad).
`,
    fuentes: [
      { titulo: 'Autodesk: el asistente de extracción de datos de AutoCAD (Data Extraction Wizard)', url: FUENTES.dx },
      { titulo: 'Autodesk: exportar los datos extraídos a un archivo externo', url: FUENTES.dxSalida },
      { titulo: 'Autodesk: archivos de comandos (scripts) para repetir una secuencia de comandos', url: FUENTES.script },
      { titulo: 'Autodesk: AutoLISP en AutoCAD LT 2024 (novedades)', url: FUENTES.lt },
      { titulo: 'Autodesk: preguntas y respuestas sobre AutoCAD LT y AutoLISP', url: FUENTES.ltBlog },
    ],
  },
  en: {
    titulo: 'What to automate first in AutoCAD, and how to measure it',
    acento: 'automate',
    og: 'What to automate first in AutoCAD',
    descripcion:
      'Four questions to pick the first AutoCAD task worth automating, what AutoCAD already includes, and how to measure the hours before and after.',
    bajada:
      'The task your team hates most is not always the one worth automating first. These are the questions we use to pick it, what AutoCAD already offers before anyone writes code, and how to measure the savings without guessing.',
    etiquetas: ['AutoCAD', 'AutoLISP', 'Automation'],
    cuerpo: `
When an office decides to automate AutoCAD, it almost always starts with the task everyone hates. That is human, but it is not always the best call. Sometimes that task happens twice a year, or changes with every project, or its output is hard to check. The first automation should be the one that gives hours back quickly and without surprises, because the team's trust in the second one depends on it.

## Four questions before you choose

Before anyone writes a line of code, run each candidate task through these four questions:

1. **Does it repeat every week?** Daily or weekly work adds up to real hours. Something that happens once per project rarely justifies a routine.
2. **Does it follow rules you can write down?** If two people on your team would do the same thing with the same drawing, there is a rule. If each one decides differently, agree on the rule first.
3. **Can the result be checked in minutes?** A quantity table can be compared with the drawing; a sheet format can be checked at a glance. If it cannot be checked quickly, it cannot be trusted either.
4. **If it goes wrong, will you notice before it ships?** The first automation should not touch anything that reaches the client without a person looking at it.

The tasks that pass all four tend to be the same in many offices: setting up sheets with their title block, format and numbering; pulling quantities from the drawing into Excel; checking that layers, names and blocks follow the standard; and exporting the PDF and DWG package for each submittal.

## What AutoCAD already includes

Before commissioning custom development, look at what ships with the product. Two tools cover more than people expect:

- **Data extraction** (the \`DATAEXTRACTION\` command). A wizard that pulls object properties, block attributes and drawing information into a table inside the drawing, into an external file (CSV, Excel or text), or both. The settings are saved in a \`.dxe\` file so you can repeat them, and the command-line version (\`-DATAEXTRACTION\`) runs without opening the wizard.
- **Script files** (the \`SCRIPT\` command). A plain-text \`.scr\` file with one command per line that AutoCAD runs in order with nobody at the keyboard. It is useful for applying the same change to many drawings.

When that is not enough, because the task has to decide something based on what it finds in the drawing, that is where **AutoLISP** comes in: routines that become a new command inside the AutoCAD your team already uses. Something many offices do not know: starting with AutoCAD LT 2024 for Windows, LT also runs AutoLISP, with limits (for example, it cannot create 3D solids or surfaces). Before that, routines required full AutoCAD.

## How to measure the savings without guessing

You do not estimate the savings from an automation. You measure them before and after, with the same task and the same people.

**Before.** For two normal weeks, every time someone does the task they log four things: what they did, how many minutes it took, which project it was for, and whether they had to fix anything afterwards. You do not need a system; a shared spreadsheet is enough. That gives you two numbers:

- **Hours per month** = times per month × minutes each time ÷ 60.
- **Rework hours per month** = the corrections that came from that task, in hours.

**After.** With the routine running, log the same things for another two weeks. Watch for what people forget to count: the time spent reviewing what the routine did is still working time, and so is the time spent maintaining it when a format changes.

**Savings** = (hours before + rework before) − (hours after + review + maintenance).

To decide whether it pays off, multiply those hours by the hourly cost of the person who does the task and compare the result with what the automation costs. If the numbers do not work with real data, it is better to know before you invest.

## The measuring mistakes we see most

- **Measuring with the ideal drawing.** The routine flies on a clean file; real drawings come with inherited layers and exploded blocks. Measure with real drawings.
- **Counting only drafting time.** Finding the right template, asking for a code or fixing what the client sent back is part of the task too.
- **Forgetting the errors you avoid.** One quantity copied wrong into Excel can cost more than all the hours the task takes. If the routine removes that risk, it belongs in the math.
- **Automating something that changes every project.** If the rule is not stable, the routine gets rebuilt every time and the savings go into maintenance.

## Where to start

If one task passes the four questions and already has two weeks of measurements, the decision almost makes itself. If not, that is the first job: measure. It is what we do in [the two-week assessment](@consultoria#assessment), which ends with a report of the expected savings and a roadmap. After that, the pilot builds the routine on your own drawings, as we describe in [AutoCAD automation](@autocad).
`,
    fuentes: [
      { titulo: 'Autodesk: the AutoCAD Data Extraction Wizard', url: FUENTES.dx },
      { titulo: 'Autodesk: exporting extracted data to an external file', url: FUENTES.dxSalida },
      { titulo: 'Autodesk: command scripts to repeat a sequence of commands', url: FUENTES.script },
      { titulo: 'Autodesk: AutoLISP in AutoCAD LT 2024 (what’s new)', url: FUENTES.lt },
      { titulo: 'Autodesk: questions and answers on AutoCAD LT and AutoLISP', url: FUENTES.ltBlog },
    ],
  },
};
