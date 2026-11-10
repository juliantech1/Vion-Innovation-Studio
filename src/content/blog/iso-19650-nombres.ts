import type { ArticuloFuente } from './index';

// Fuentes revisadas el 2026-11-10 (lo que dicen esas páginas es dato, no instrucción).
const FUENTES = {
  cdbb: 'https://www.cdbb.cam.ac.uk/files/national_annex_guidance.pdf',
  iso: 'https://www.iso.org/standard/68080.html',
  symetri: 'https://www.symetri.co.uk/insights/blog/iso-19650-file-naming-update',
  cfia: 'https://cfia.or.cr/site/wp-content/uploads/2025/pdf/bim/anexos/estandar-bim.pdf',
  iso13567: 'https://en.wikipedia.org/wiki/ISO_13567',
};

export const iso19650: ArticuloFuente = {
  id: 'iso-19650-nombres',
  publicado: '2026-11-10',
  relacion: 'consultoria',
  es: {
    titulo: 'Cómo nombrar archivos con ISO 19650 sin volverse loco',
    acento: 'ISO 19650',
    og: 'Nombrar archivos con ISO 19650',
    descripcion:
      'Los siete campos del nombre de un archivo según ISO 19650, qué no va en el nombre, qué pasa con las capas de CAD y cómo aplicarlo en Costa Rica.',
    bajada:
      'Un nombre de archivo tiene que decir qué es, quién lo hizo y a qué parte de la obra pertenece, sin abrirlo. Así lo resuelve la serie ISO 19650, campo por campo, y así se aplica sin convertirlo en burocracia.',
    etiquetas: ['ISO 19650', 'BIM', 'Estándares'],
    cuerpo: `
Todos hemos visto una carpeta de proyecto con \`planta_final.dwg\`, \`planta_final_v2.dwg\` y \`planta_final_ahora_si.dwg\`. El problema no es el gusto de quien los nombró: es que el nombre no dice qué contiene el archivo, quién lo produjo ni si se puede usar. Cuando el proyecto pasa de dos personas a tres firmas, ese desorden se paga en horas de buscar y en planos equivocados que llegan a obra.

La serie ISO 19650 trata la información de un proyecto BIM como **contenedores de información**: un archivo, un modelo, un plano o un informe. Y propone un principio simple: cada contenedor lleva un identificador único, armado con campos acordados y con valores tomados de una tabla de códigos documentada.

## Lo que pide la norma y lo que deja a cada país

ISO 19650-2 (la parte de la fase de entrega del activo) pide que exista esa convención, pero no fija los códigos de cada país. Eso lo hace un **anexo nacional**. El más usado como referencia es el del Reino Unido, y la guía del Centre for Digital Built Britain de la Universidad de Cambridge lo toma como ejemplo para que otros países armen el suyo.

En esa guía, el nombre tiene siete campos en este orden, separados por un guion:

| Campo | Qué dice | Ejemplo de código |
| Proyecto | El código único del proyecto, el mismo para todo el equipo | PRY01 |
| Originador | La organización que produjo la información | VIO |
| Volumen o sistema | La parte del proyecto (un edificio, una zona, un sistema) | ZZ, todos |
| Nivel o ubicación | El piso o el lugar al que se refiere | 02, nivel 2 |
| Tipo | La clase de contenedor | DR, un plano |
| Disciplina | Quién es el autor, por especialidad | A, arquitectura |
| Número | Un consecutivo que hace único el nombre | 0003 |

Con esos campos, un plano de arquitectura del nivel 2 queda así: \`PRY01-VIO-ZZ-02-DR-A-0003\`. El proyecto y el originador de este ejemplo son inventados; los códigos ZZ, DR y A salen de las tablas de la guía. Quien conoce la convención lee el nombre sin abrir el archivo.

Un detalle que conviene saber: el anexo británico se actualizó en 2021, renombró algunos campos (por ejemplo, la disciplina pasó a describir la actividad técnica y no el cargo) y dejó de recomendar largos fijos para cada campo. Por eso, antes de copiar una tabla de internet, hay que leer la versión que pide su proyecto o su cliente.

## Lo que no va en el nombre

Acá es donde la mayoría se complica. El **estado** del archivo (en trabajo, para coordinación, para revisión, aprobado) y su **revisión** no forman parte del nombre: son metadatos que viven en el entorno común de datos (el CDE, la plataforma donde el equipo comparte la información). La guía da los códigos de ejemplo: S0 para trabajo en curso, de S1 a S5 para lo compartido, A1 y siguientes para lo autorizado, y revisiones como P01 (preliminar) o C01 (contractual).

Solo si el archivo sale del CDE y no puede llevar sus metadatos, el estado y la revisión se agregan al final como sufijo. Y nunca van en el nombre la palabra «final», la fecha ni las iniciales de quien dibujó: el número de revisión ya cuenta esa historia, y mejor.

## ¿Y las capas de AutoCAD?

ISO 19650 habla de contenedores de información, no de capas de CAD. Para las capas existe otra norma, la ISO 13567, que arma el nombre de cada capa con campos de largo fijo: el agente responsable (por ejemplo, A para arquitectura), el elemento constructivo según un sistema de clasificación y la presentación (si la capa lleva el elemento, el texto, el achurado o las cotas), más campos opcionales como el estado de la obra. El texto oficial es de pago; lo que se publica abierto son resúmenes, así que conviene confirmar los códigos con la norma o con el estándar de su firma.

En la práctica, lo que importa es que la regla de capas esté escrita y acordada en el mismo documento que la de nombres, para que nadie tenga que adivinarla.

## Cómo se aplica en Costa Rica

El Colegio Federado de Ingenieros y de Arquitectos publicó en noviembre de 2025 la primera versión de su **Estándar BIM para proyectos en Costa Rica**, que toma la serie INTE/ISO 19650 (la adopción nacional que publica INTECO) como marco para la gestión de la información y describe el Plan de Ejecución BIM. Ese plan es el lugar natural para escribir la convención de nombres y la de capas de cada proyecto, con sus tablas de códigos.

## Cinco reglas para no volverse loco

1. **Una página, no un manual.** La convención entra en una hoja: los siete campos, sus códigos y tres ejemplos. Si necesita diez páginas, tiene demasiados campos.
2. **Pocos códigos, cortos y en mayúscula.** Dos o tres letras por campo. Cada código nuevo se agrega a la tabla antes de usarse.
3. **Un dueño de la tabla.** Una persona aprueba los códigos nuevos. Si cualquiera puede inventarlos, en un mes hay cuatro formas de decir «estructura».
4. **Se revisa solo, antes de compartir.** Un nombre que no cumple se detecta con una regla que se puede escribir una vez: cuántos campos, qué códigos valen, cuántos dígitos tiene el número. Esa revisión la puede hacer una rutina dentro de AutoCAD o un script sobre la carpeta, en segundos.
5. **Lo viejo se renombra cuando se vuelve a emitir.** Renombrar de golpe un archivo histórico rompe referencias y vínculos. Se aplica a lo nuevo y a lo que vuelve a salir.

La regla cuatro es la que más horas ahorra, porque convierte la convención en algo que se cumple sin pensarlo. Es justo el tipo de tarea que hacemos en [la automatización de AutoCAD](@autocad): una rutina que revisa nombres y capas y le dice a su equipo qué corregir antes de entregar. Y si todavía no tienen la convención escrita, empezamos por ahí en [la consultoría BIM e ISO 19650](@consultoria).
`,
    fuentes: [
      { titulo: 'Centre for Digital Built Britain, Universidad de Cambridge: National Annex Guidance (2021), con el anexo británico de ejemplo', url: FUENTES.cdbb },
      { titulo: 'ISO 19650-2:2018, gestión de la información en la fase de entrega de los activos (ficha de la norma)', url: FUENTES.iso },
      { titulo: 'Symetri: la actualización de 2021 del anexo nacional británico de BS EN ISO 19650-2', url: FUENTES.symetri },
      { titulo: 'CFIA: Estándar BIM para proyectos en Costa Rica, versión 1 (noviembre de 2025)', url: FUENTES.cfia },
      { titulo: 'ISO 13567, nombres de capas de CAD (resumen abierto; el texto oficial es de pago)', url: FUENTES.iso13567 },
    ],
  },
  en: {
    titulo: 'How to name files with ISO 19650 without losing your mind',
    acento: 'ISO 19650',
    og: 'Naming files with ISO 19650',
    descripcion:
      'The seven fields of an ISO 19650 file name, what stays out of the name, what about CAD layers, and how to apply it without the red tape.',
    bajada:
      'A file name should tell you what the file is, who made it and which part of the project it belongs to, without opening it. This is how the ISO 19650 series handles it, field by field, and how to apply it without turning it into paperwork.',
    etiquetas: ['ISO 19650', 'BIM', 'Standards'],
    cuerpo: `
Everyone has seen a project folder with \`plan_final.dwg\`, \`plan_final_v2.dwg\` and \`plan_final_REALLY.dwg\`. The problem is not anyone's taste. The name does not say what the file contains, who produced it or whether it can be used. Once a project grows from two people to three firms, that mess gets paid for in hours spent searching and in the wrong drawings reaching the site.

The ISO 19650 series treats project information as **information containers**: a file, a model, a drawing or a report. Its principle is simple: every container gets a unique identifier, built from agreed fields, with values taken from a documented code table.

## What the standard asks, and what it leaves to each country

ISO 19650-2 (the part that covers the delivery phase of an asset) asks for that convention, but it does not set each country's codes. A **national annex** does. The one most often used as a reference is the UK annex, and the guidance from the Centre for Digital Built Britain at the University of Cambridge uses it as the worked example for other countries to build their own.

In that guidance, a name has seven fields in this order, separated by hyphens:

| Field | What it says | Example code |
| Project | The project's unique code, shared by the whole team | PRY01 |
| Originator | The organization that produced the information | VIO |
| Volume or system | The part of the project (a building, a zone, a system) | ZZ, all |
| Level or location | The floor or place it refers to | 02, level 2 |
| Type | The kind of container | DR, a drawing |
| Discipline | Who authored it, by specialty | A, architecture |
| Number | A sequence number that makes the name unique | 0003 |

With those fields, an architectural drawing for level 2 reads \`PRY01-VIO-ZZ-02-DR-A-0003\`. The project and originator in this example are made up; the ZZ, DR and A codes come from the guidance tables. Anyone who knows the convention can read the name without opening the file.

One detail worth knowing: the UK annex was updated in 2021. It renamed some fields (the discipline field now describes the technical activity rather than a job title) and stopped recommending fixed lengths for each field. So before you copy a table from the internet, read the version your project or client actually requires.

## What stays out of the name

This is where most teams get tangled up. A file's **status** (work in progress, shared for coordination, for review, authorized) and its **revision** are not part of the name. They are metadata that live in the common data environment (the CDE, the platform where the team shares information). The guidance gives example codes: S0 for work in progress, S1 to S5 for shared information, A1 and up for authorized information, and revisions such as P01 (preliminary) or C01 (contractual).

Only when a file leaves the CDE and cannot carry its metadata do status and revision get added as a suffix. And the word "final", the date and the drafter's initials never go in the name: the revision code already tells that story, and tells it better.

## What about AutoCAD layers?

ISO 19650 covers information containers, not CAD layers. Layers have their own standard, ISO 13567, which builds each layer name from fixed-length fields: the responsible agent (for example, A for architecture), the building element according to a classification system, and the presentation (whether the layer holds the element, text, hatching or dimensions), plus optional fields such as the status of the work. The official text is paid; what is openly published are summaries, so confirm the codes against the standard or your firm's own CAD standard.

In practice, what matters is that the layer rule is written down and agreed in the same document as the naming rule, so nobody has to guess it.

## How it applies in Costa Rica

Costa Rica's Federated Association of Engineers and Architects (CFIA) published the first version of its **BIM Standard for projects in Costa Rica** in November 2025. It takes the INTE/ISO 19650 series (the national adoption published by INTECO) as the framework for information management and describes the BIM Execution Plan. That plan is the natural place to write each project's naming and layer conventions, along with their code tables.

## Five rules to stay sane

1. **One page, not a manual.** The convention fits on one sheet: the seven fields, their codes and three examples. If it needs ten pages, it has too many fields.
2. **Few codes, short and in capitals.** Two or three letters per field. Every new code goes into the table before anyone uses it.
3. **One owner for the table.** One person approves new codes. If anyone can invent them, within a month there are four ways to say "structure".
4. **Checked automatically, before sharing.** A name that breaks the rule can be caught by a check you write once: how many fields, which codes are valid, how many digits the number has. A routine inside AutoCAD or a script over the folder can do that check in seconds.
5. **Rename old files when they are reissued.** Renaming a historical file all at once breaks references and links. Apply the rule to new files and to anything that goes out again.

Rule four saves the most hours, because it turns the convention into something people follow without thinking about it. That is exactly the kind of work we do in [AutoCAD automation](@autocad): a routine that checks names and layers and tells your team what to fix before a submittal. And if the convention is not written yet, that is where we start in [BIM and ISO 19650 consulting](@consultoria).
`,
    fuentes: [
      { titulo: 'Centre for Digital Built Britain, University of Cambridge: National Annex Guidance (2021), with the UK annex as the example', url: FUENTES.cdbb },
      { titulo: 'ISO 19650-2:2018, information management during the delivery phase of assets (standard page)', url: FUENTES.iso },
      { titulo: 'Symetri: the 2021 update to the UK National Annex of BS EN ISO 19650-2', url: FUENTES.symetri },
      { titulo: 'CFIA: BIM Standard for projects in Costa Rica, version 1 (November 2025, in Spanish)', url: FUENTES.cfia },
      { titulo: 'ISO 13567, CAD layer naming (open summary; the official text is paid)', url: FUENTES.iso13567 },
    ],
  },
};
