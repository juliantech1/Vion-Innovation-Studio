// Las lecciones de «A3-skills», lámina por lámina, desde el storyboard de la aldea
// (docs/planes/cursos/A3-skills.md, 2026-11-10). Texto completo de cada lámina; los videos e imágenes van en ../medios.json.
import type { LeccionCurso } from '../../tipos';

export const lecciones: LeccionCurso[] = [
  {
    "n": 1,
    "slug": "1-que-es-una-skill",
    "titulo": "Qué es una skill (y qué no)",
    "objetivo": "Saber cuándo conviene escribir una skill y cuándo conviene otra cosa: CLAUDE.md, un subagente o un MCP.",
    "resultado": "El cuadro de las cuatro piezas (CLAUDE.md, skill, subagente y MCP), con un ejemplo de cada una.",
    "laminas": [
      {
        "n": "1.1",
        "titulo": "Escríbalo una vez",
        "cuerpo": "Si le repite a Claude las mismas instrucciones más de dos veces, eso es una skill.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 30,
          "seVe": "Chispa en plano de cara, en tres tomas cortas, cada vez más cansada de repetir el mismo pedido; suspira, y al final mira a cámara.",
          "dice": "Escribí la propuesta con este formato, en este orden, sin inventar precios… Escribí la propuesta con este formato, en este orden… Escribí la propuesta… Si se lo dice a Claude más de dos veces, eso es una skill. Escríbalo una vez."
        }
      },
      {
        "n": "1.2",
        "titulo": "Qué es una skill",
        "cuerpo": "Una carpeta con un archivo `SKILL.md`. Arriba, el **nombre** y una **descripción** de cuándo usarla. Abajo, las **instrucciones**. Puede traer `scripts/`, `references/` y `assets/`. Claude la usa sola cuando su pedido coincide con la descripción, o usted la llama con `/nombre`.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Una carpeta que se abre y muestra `SKILL.md`, `scripts/` y `references/`; la cabecera del `SKILL.md` se resalta."
        }
      },
      {
        "n": "1.3",
        "titulo": "No ocupa lugar hasta que la usa",
        "cuerpo": "- **Siempre:** nombre y descripción (unos 100 tokens por skill).\n- **Al usarla:** las instrucciones.\n- **Si hace falta:** scripts y documentos.\n\nPor eso puede tener muchas. Fuente: [documentación de Agent Skills de Anthropic](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview).",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Tres capas que se apilan (nombre y descripción, instrucciones, scripts y documentos) y se encienden por turno."
        }
      },
      {
        "n": "1.4",
        "titulo": "Skill, CLAUDE.md, subagente o MCP",
        "cuerpo": "- **CLAUDE.md:** lo que vale siempre en un proyecto («usamos usted»); está cargado todo el tiempo.\n- **Skill:** un procedimiento que se carga cuando toca («así hago una propuesta»).\n- **Subagente:** otro Claude con su contexto y sus herramientas.\n- **MCP:** un enchufe a otro programa.\n\nSe combinan.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Un cuadro de cuatro filas (CLAUDE.md, skill, subagente y MCP), cada una con qué es y un ejemplo."
        }
      },
      {
        "n": "1.5",
        "titulo": "Lo difícil: ¿cuándo cuál?",
        "cuerpo": "Si es una regla que vale siempre, CLAUDE.md. Si es un cómo-se-hace que usa a veces, una skill. Si necesita trabajar aparte con sus propias herramientas, un subagente. Si necesita hablar con otro programa, un MCP.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 25,
          "seVe": "Chispa en plano medio, explicando las cuatro preguntas.",
          "dice": "La pregunta es simple. ¿Vale siempre? Va en CLAUDE punto md. ¿Es un cómo-se-hace que usa a veces? Una skill. ¿Necesita trabajar aparte? Un subagente. ¿Tiene que hablar con otro programa? Un MCP."
        }
      },
      {
        "n": "1.6",
        "titulo": "Así lo usamos en Vion",
        "cuerpo": "Una biblioteca de skills propias y de terceros, cada una revisada antes de activarla (se ve en modo demo, sin rutas ni huellas).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "La sección Skills de Ultron en modo demo: la lista de skills, cada una marcada como activa o inactiva."
        }
      },
      {
        "n": "1.7",
        "titulo": "Lo que se lleva",
        "cuerpo": "Cuándo hacer una skill. Próxima lección: dónde viven y cómo prepararlas.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lámina de cierre de la lección: cuándo hacer una skill y lo que viene en la próxima."
        }
      }
    ]
  },
  {
    "n": 2,
    "slug": "2-puesta-a-punto",
    "titulo": "Puesta a punto: dónde viven las skills",
    "objetivo": "Dejar Claude Code andando y la carpeta de skills creada y comprobada, en Windows y en Mac.",
    "resultado": "Claude Code responde qué skills tiene, con la carpeta de skills creada en Windows o en Mac.",
    "laminas": [
      {
        "n": "2.1",
        "titulo": "Instalar Claude Code",
        "cuerpo": "Si ya hizo el curso «Su agentic OS», saltee esta lámina.\n\n- **Windows:** `winget install Anthropic.ClaudeCode`.\n- **Mac:** `brew install --cask claude-code`.\n\nCierre y abra la terminal. Comprobar: `claude --version` y `claude doctor`. La versión cambia seguido: la que usted vea será otra. Entrar: `claude` → cuenta con suscripción (plan Pro desde USD 20 al mes). La guía completa (con Python y Git, que se usan en las lecciones 5 a 7) está en el kit, en `PUESTA-A-PUNTO.md`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "Recreación, marcada como tal, con los textos reales de cada fuente: winget en PowerShell (los mensajes en español de winget y el paquete oficial de Claude Code), Homebrew en el Terminal de Mac y, después, la salida real de `claude --version`, `claude doctor` y la primera vez de `claude`, donde se elige la cuenta con suscripción."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows, en PowerShell",
            "lenguaje": "powershell",
            "texto": "winget install Anthropic.ClaudeCode"
          },
          {
            "tipo": "comando",
            "etiqueta": "Mac, en Terminal",
            "lenguaje": "bash",
            "texto": "brew install --cask claude-code"
          },
          {
            "tipo": "comando",
            "etiqueta": "Comprobar (Windows y Mac)",
            "texto": "claude doctor"
          }
        ]
      },
      {
        "n": "2.2",
        "titulo": "¿Dónde guardarla?",
        "cuerpo": "Depende de quién la va a usar.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa en plano medio.",
          "dice": "Ahora lo importante: dónde guardar una skill. Depende de quién la va a usar: usted, su equipo, o usted en el chat de claude.ai."
        }
      },
      {
        "n": "2.3",
        "titulo": "Tres lugares",
        "cuerpo": "- **Solo usted, en todos sus proyectos:** `~/.claude/skills/<nombre>/` (Windows: `C:\\Users\\<usuario>\\.claude\\skills\\<nombre>\\`).\n- **Su equipo, en un proyecto:** `.claude/skills/<nombre>/` dentro del repo.\n- **claude.ai:** se sube un ZIP.\n\nSon lugares separados: lo de claude.ai no aparece en Claude Code ni al revés.\n\nTodos los lugares, según la documentación oficial:\n\n| Dónde | Ruta | Se cargan en |\n| Personal | `~/.claude/skills/<nombre>/SKILL.md` (Windows: `C:\\Users\\<usuario>\\.claude\\skills\\<nombre>\\SKILL.md`) | Todos sus proyectos en esa computadora |\n| Proyecto | `.claude/skills/<nombre>/SKILL.md` dentro del repo | Las sesiones de ese repo; se comparte con Git |\n| Plugin | `<plugin>/skills/<nombre>/SKILL.md` | Donde el plugin esté activo, como `/plugin:nombre` |\n| Empresa | La carpeta de ajustes administrados | Todos los usuarios de la organización |\n| claude.ai | Se sube un ZIP en la configuración | El chat, Cowork y las sesiones en la nube con esa cuenta |\n\nConviene saber: no llame a una carpeta `synced` ni `anthropic-skills` (son nombres reservados); una carpeta puede ser un enlace a otra; los archivos viejos de `.claude/commands/` siguen andando, pero una skill nueva se hace como carpeta.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Los tres lugares donde vive una skill: su carpeta personal, la carpeta del proyecto con Git y claude.ai con un ZIP, separados entre sí."
        }
      },
      {
        "n": "2.4",
        "titulo": "Crear la carpeta",
        "cuerpo": "- **Windows:** `mkdir $HOME\\.claude\\skills`\n- **Mac:** `mkdir -p ~/.claude/skills`\n\nEs una carpeta oculta: en el Finder, Cmd+Mayús+punto la muestra.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Recreación, marcada como tal: el comando en PowerShell con su respuesta y la carpeta en el Explorador; después el comando en el Terminal de Mac y, en el Finder, Cmd+Mayús+punto, que muestra la carpeta oculta `.claude` con `skills` adentro."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows, en PowerShell",
            "lenguaje": "powershell",
            "texto": "mkdir $HOME\\.claude\\skills"
          },
          {
            "tipo": "comando",
            "etiqueta": "Mac, en Terminal",
            "lenguaje": "bash",
            "texto": "mkdir -p ~/.claude/skills"
          }
        ]
      },
      {
        "n": "2.5",
        "titulo": "Comprobar",
        "cuerpo": "En `claude`: «¿Qué skills tenés disponibles?» (la prueba que propone la documentación). Para revisar las cabeceras: `claude plugin validate ~/.claude/skills` (Claude Code 2.1.233 o más nuevo).\n\nClaude Code nota los cambios en las carpetas de skills sin reiniciar; si la carpeta de skills se creó con la sesión abierta, reinicie.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Claude Code respondiendo qué skills tiene disponibles."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "¿Qué skills tenés disponibles?"
          },
          {
            "tipo": "comando",
            "etiqueta": "Revisar las cabeceras",
            "texto": "claude plugin validate ~/.claude/skills"
          }
        ]
      },
      {
        "n": "2.6",
        "titulo": "Reglas del nombre",
        "cuerpo": "Minúsculas, números y guiones; sin guion al principio ni al final ni dos seguidos; hasta 64 caracteres; igual al nombre de la carpeta. No use `synced` ni `anthropic-skills`.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Ejemplos de nombres válidos e inválidos, según la especificación de agentskills.io."
        }
      },
      {
        "n": "2.7",
        "titulo": "El formato, en una lámina",
        "cuerpo": "Una skill es una carpeta con un `SKILL.md`: cabecera YAML entre `---` y, abajo, las instrucciones en Markdown. La cabecera mínima está en el bloque de abajo. Los campos, qué vale en todos lados y qué solo en Claude Code:\n\n| Campo | Para qué | Dónde vale |\n| name | El comando (`/propuesta-cliente`). En el estándar abierto: obligatorio, hasta 64 caracteres, minúsculas, números y guiones, sin guion al principio ni al final ni dos seguidos, **igual al nombre de la carpeta**. En Claude Code es opcional (si falta, usa la carpeta) | Todos |\n| description | Qué hace **y cuándo usarla**: con esto Claude decide cargarla sola. Estándar: hasta 1.024 caracteres. Claude Code corta la lista en 1.536 (con `when_to_use`) | Todos |\n| license, compatibility (hasta 500), metadata | Licencia, requisitos, datos propios (versión, autor) | Todos |\n| allowed-tools | Herramientas que no piden permiso **en el turno** en que se invoca (por ejemplo `Bash(python3 ${CLAUDE_SKILL_DIR}/scripts/resumen.py *)`) | Todos (experimental en el estándar) |\n| when_to_use, argument-hint, arguments | Frases que la activan; ayuda al escribir; argumentos con nombre (`$cliente`) | Solo Claude Code |\n| disable-model-invocation: true | Solo la invoca usted con `/nombre` (para lo que tiene efectos: publicar, enviar, desplegar) | Solo Claude Code |\n| user-invocable: false | Solo la usa Claude (conocimiento de fondo) | Solo Claude Code |\n| context: fork, agent, model, effort, paths, hooks, shell | Correr en un subagente, con otro modelo o esfuerzo; activarse solo con ciertos archivos; hooks; PowerShell | Solo Claude Code |\n\nLo demás que conviene saber, también de la documentación:\n\n- **Carga por etapas:** al arrancar, Claude solo ve el nombre y la descripción (unos 100 tokens por skill); el cuerpo se carga cuando se usa (conviene por debajo de 5.000 tokens); los archivos de apoyo, solo si los necesita. **SKILL.md por debajo de 500 líneas**; lo largo, a `references/`.\n- **Carpetas de apoyo:** `scripts/` (se ejecutan, no se cargan), `references/` (se leen si hace falta), `assets/` (plantillas, imágenes).\n- **Variables:** `$ARGUMENTS`, `$0`, `$1`, `${CLAUDE_SKILL_DIR}` (la carpeta de la skill), `${CLAUDE_PROJECT_DIR}`.\n- **Contexto en vivo:** una línea que empieza con `!` y un comando entre comillas invertidas (por ejemplo `!` seguido de `git diff HEAD`) corre el comando y pone su salida antes de que Claude lea la skill (solo Claude Code; no anda en claude.ai ni por la API).\n- **Una vez cargada, queda en la conversación** y Claude Code no vuelve a leer el archivo: las instrucciones se escriben como reglas que valen para toda la tarea.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La cabecera mínima de un SKILL.md y la tabla de sus campos, con lo que vale en todos lados y lo que solo vale en Claude Code."
        },
        "bloques": [
          {
            "tipo": "archivo",
            "etiqueta": "SKILL.md (cabecera mínima)",
            "lenguaje": "markdown",
            "texto": "---\nname: propuesta-cliente\ndescription: Arma una propuesta comercial de una página para un cliente de [su negocio], con el problema, la solución, el precio y el plazo. Usar cuando pidan una propuesta, una cotización o una oferta para un cliente.\n---\n\n# Propuesta para un cliente\n..."
          }
        ]
      },
      {
        "n": "2.8",
        "titulo": "Si algo no anda",
        "cuerpo": "Los errores típicos, su causa y cómo se arreglan:\n\n| Error | Causa | Solución |\n| La skill no aparece | Nombre con mayúsculas, espacios dobles, `<` `>` o caracteres invisibles; o la carpeta se creó con la sesión abierta | Renombrar en minúsculas con guiones; reiniciar; `claude --debug` y buscar `[names]` |\n| Aparece pero Claude no la usa sola | La descripción no tiene las palabras que usted dice | Poner el caso de uso primero y las palabras reales del pedido (lección 3) |\n| Se activa cuando no debe | Descripción muy amplia | Más específica, o `disable-model-invocation: true` |\n| La cabecera no se lee | YAML roto (por ejemplo, dos puntos sin comillas) o el `---` no está en la primera línea | `claude plugin validate`; la skill carga igual pero sin descripción |\n| La descripción sale cortada | Más de 1.536 caracteres (descripción + `when_to_use`) | Acortar: lo importante primero |\n| Se ven &lt; y &gt; | Ángulos en la descripción | Usar corchetes: `[cliente]` |\n| Al subir a claude.ai: Unexpected key(s) in SKILL.md frontmatter | Campos que solo entiende Claude Code (`argument-hint`, `disable-model-invocation`…) | Para claude.ai, solo `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools` |\n| Claude deja de seguirla a mitad de la sesión | La conversación se compactó (quedan los primeros 5.000 tokens de cada skill) | Lo importante arriba; volver a invocarla |",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La tabla de errores típicos de una skill, con su causa y su solución."
        }
      }
    ]
  },
  {
    "n": 3,
    "slug": "3-metodo-no-plantilla",
    "titulo": "Escribir un método, no una plantilla",
    "objetivo": "Escribir una descripción que Claude reconoce sola y un cuerpo que le enseña a pensar el problema.",
    "resultado": "Una descripción que se activa sola y las cinco reglas para escribir el cuerpo de cualquier skill.",
    "laminas": [
      {
        "n": "3.1",
        "titulo": "Plantilla vs. método",
        "cuerpo": "Las dos propuestas salieron de una skill. La de la izquierda llena huecos; la de la derecha entendió al cliente. La diferencia está en cómo se escribió la skill.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Dos propuestas lado a lado; en la de la izquierda, las partes genéricas se tachan."
        }
      },
      {
        "n": "3.2",
        "titulo": "Por qué método",
        "cuerpo": "Una plantilla le dice a Claude qué poner en cada casilla. Un método le dice cómo pensar el problema.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 25,
          "seVe": "Chispa en plano medio.",
          "dice": "Una plantilla le dice a Claude qué poner en cada casilla. Un método le dice cómo pensar el problema. Las buenas skills son métodos: reglas con su porqué, no casillas para llenar."
        }
      },
      {
        "n": "3.3",
        "titulo": "La descripción manda",
        "cuerpo": "Es lo único que Claude ve antes de decidir. Dos partes: **qué hace** y **cuándo usarla**, con las palabras que usted dice de verdad («propuesta», «cotización», «presupuesto»). Lo importante primero: Claude Code la corta en 1.536 caracteres.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Una descripción que se arma en dos partes, qué hace y cuándo usarla, y cada una se resalta."
        }
      },
      {
        "n": "3.4",
        "titulo": "Ejemplos buenos y malos",
        "cuerpo": "Malo: `description: Ayuda con propuestas.`\n\nBueno: `description: Arma una propuesta comercial de una página para un cliente… Usar cuando pidan una propuesta, una cotización o un presupuesto.`\n\nLa buena, entera, en el bloque de abajo.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Las dos descripciones, la mala y la buena, una debajo de la otra."
        },
        "bloques": [
          {
            "tipo": "codigo",
            "etiqueta": "Malo",
            "lenguaje": "yaml",
            "texto": "description: Ayuda con propuestas."
          },
          {
            "tipo": "codigo",
            "etiqueta": "Bueno",
            "lenguaje": "yaml",
            "texto": "description: Arma una propuesta comercial de una página para un cliente de la panadería (pedidos para eventos, catering y tortas por encargo), con el problema, la solución, el precio con su cuenta y el plazo. Usar cuando pidan una propuesta, una cotización, un presupuesto o una oferta para un cliente."
          }
        ]
      },
      {
        "n": "3.5",
        "titulo": "Dos skills que son métodos",
        "cuerpo": "- **content-principles** ([github.com/aiwithremy/content-principles](https://github.com/aiwithremy/content-principles)): no da un formato; explica cómo piensa el que mira un video y pide aplicarlo en silencio.\n- **bang-motion** ([github.com/bangtutorial/bang-motion](https://github.com/bangtutorial/bang-motion)): leyes con su porqué («una toma, una idea»).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "Las páginas públicas de las dos skills en GitHub, con zoom a las líneas que se citan."
        }
      },
      {
        "n": "3.6",
        "titulo": "Cinco reglas para el cuerpo",
        "cuerpo": "1. Lo importante arriba (si la conversación se resume, queda el principio).\n2. Reglas que valen toda la tarea (Claude no vuelve a leer el archivo).\n3. El porqué de cada regla.\n4. Un ejemplo bueno y uno malo.\n5. Menos de 500 líneas; lo largo, en `references/`.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Una lista con las cinco reglas que se tildan de a una."
        }
      },
      {
        "n": "3.7",
        "titulo": "Así escribimos las nuestras",
        "cuerpo": "La cabecera de `explicador-personaje`, una skill propia de Vion: «Es un método, no una plantilla: la estructura es la de partida y cambia de un video a otro.»",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La cabecera de la skill `explicador-personaje` de Vion y la línea que dice que es un método, no una plantilla."
        }
      }
    ]
  },
  {
    "n": 4,
    "slug": "4-primera-skill",
    "titulo": "Su primera skill",
    "objetivo": "Escribir, probar y corregir una skill real: una que arma propuestas para sus clientes con su método.",
    "resultado": "`propuesta-cliente` funcionando: Claude la usa sola y también con `/propuesta-cliente`.",
    "laminas": [
      {
        "n": "4.1",
        "titulo": "Empezamos",
        "cuerpo": "Vamos a hacer una skill que arme propuestas para sus clientes, con su método. Ejemplo del curso: una panadería (ficticia).",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 20,
          "seVe": "Chispa en capa sobre una terminal vacía.",
          "dice": "Una skill que le arme propuestas a sus clientes. La suya, con su método. Empezamos."
        }
      },
      {
        "n": "4.2",
        "titulo": "Que Claude la escriba con usted",
        "cuerpo": "Abra `claude` y pegue el **pedido de la lección 4** (está en el bloque de abajo y en el kit). Le va a preguntar qué vende, cómo pone el precio y qué nunca promete. Conteste como a un empleado nuevo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "El pedido en Claude Code y las preguntas que hace de a una, con las respuestas."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "Pedido de la lección 4",
            "texto": "Quiero crear una skill personal `propuesta-cliente` en `~/.claude/skills/`. Haceme preguntas de a una (qué vendo, cómo calculo el precio, qué nunca prometo, qué tono uso) y después escribí el SKILL.md: descripción con qué hace y cuándo usarla (con las palabras propuesta, cotización, presupuesto), el método en reglas cortas y la regla de no inventar precios. Menos de 100 líneas. Mostrámelo antes de guardarlo."
          }
        ]
      },
      {
        "n": "4.3",
        "titulo": "El borrador",
        "cuerpo": "El `SKILL.md` de `propuesta-cliente` está en el bloque de abajo. Revise: la descripción dice qué hace y cuándo; el cuerpo es su método; y la regla que no falta: **nunca inventar un precio.**",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El SKILL.md de `propuesta-cliente`: la cabecera con la descripción, el método y la regla de no inventar precios."
        },
        "bloques": [
          {
            "tipo": "archivo",
            "etiqueta": "propuesta-cliente/SKILL.md",
            "lenguaje": "markdown",
            "texto": "---\nname: propuesta-cliente\ndescription: Arma una propuesta comercial de una página para un cliente de la panadería (pedidos para eventos, catering y tortas por encargo), con el problema, la solución, el precio con su cuenta y el plazo. Usar cuando pidan una propuesta, una cotización, un presupuesto o una oferta para un cliente.\n---\n\n# Propuesta para un cliente\n\nUsted arma propuestas de una página. El objetivo es que el cliente diga que sí sin tener que preguntar nada.\n\n## Antes de escribir\n- Entienda el pedido: para qué es, para cuántas personas, qué fecha. Si falta la cantidad o la fecha, pregúntela; no la suponga.\n- Lea los precios de `precios.md` en la carpeta del proyecto. Si un producto no está, dígalo: **nunca invente un precio.**\n\n## La propuesta (en este orden, en usted)\n1. Lo que entendimos (una o dos líneas, con las palabras del cliente).\n2. Lo que proponemos (productos y cantidades).\n3. El precio, con su cuenta visible (cantidad × precio unitario, entrega, total). Todo precio lleva su cuenta.\n4. El plazo y la condición para confirmar (seña, fecha límite).\n5. Una sola pregunta de cierre.\n\n## Nunca\n- Prometer algo que no está en `precios.md` o en el pedido.\n- Descuentos que nadie pidió."
          }
        ]
      },
      {
        "n": "4.4",
        "titulo": "La prueba de verdad",
        "cuerpo": "En una conversación **nueva**, sin nombrarla: «Necesito una cotización para 200 empanadas para un evento». Claude la reconoce por la descripción y la usa.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "El pedido en una conversación nueva, el aviso de que Claude cargó la skill y la propuesta que arma."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En una conversación nueva",
            "texto": "Necesito una cotización para 200 empanadas para un evento"
          }
        ]
      },
      {
        "n": "4.5",
        "titulo": "Llamarla a mano",
        "cuerpo": "`/propuesta-cliente boda de 120 personas`. Lo que escribe después del nombre le llega como argumento (`$ARGUMENTS`).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "El comando `/propuesta-cliente` con su argumento y la propuesta que sale."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "En Claude Code",
            "texto": "/propuesta-cliente boda de 120 personas"
          }
        ]
      },
      {
        "n": "4.6",
        "titulo": "Corregir la skill, no la respuesta",
        "cuerpo": "Salió una nota para usted pegada a la propuesta, que el cliente no tiene que leer. No corrija la respuesta: agregue a la skill, arriba de todo, «termine en la pregunta de cierre; nada después» y repita el mismo pedido en una conversación nueva. Así se mejora una skill: con cada error que encuentra.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "La nota interna resaltada al final de la propuesta, la regla nueva arriba del SKILL.md y el mismo pedido otra vez, que ahora termina en la pregunta de cierre."
        }
      },
      {
        "n": "4.7",
        "titulo": "El recorrido",
        "cuerpo": "Su pedido → Claude lee las descripciones → carga la skill → sigue el método → la propuesta.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Una ventana de Claude Code con el pedido y los pasos que siguen: lee las descripciones, carga la skill, sigue el método y entrega la propuesta."
        }
      },
      {
        "n": "4.8",
        "titulo": "Lo que se lleva",
        "cuerpo": "Su primera skill. Próxima lección: una que además corre su propio programa.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lámina de cierre de la lección: su primera skill y lo que viene en la próxima."
        }
      }
    ]
  },
  {
    "n": 5,
    "slug": "5-skills-con-scripts",
    "titulo": "Skills con scripts y archivos de apoyo",
    "objetivo": "Hacer una skill en la que el código hace lo exacto y Claude pone el criterio, con un script y archivos de apoyo.",
    "resultado": "`informe-semanal`: un script suma el CSV de ventas y Claude escribe el informe con tres observaciones.",
    "laminas": [
      {
        "n": "5.1",
        "titulo": "Las cuentas, con código",
        "cuerpo": "Pídale a un modelo que sume 200 filas y a veces se equivoca. Lo exacto, con un programa; el criterio, con Claude.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Un chat: «¿Cuánto vendí esta semana?» y un total que no coincide con la planilla."
        }
      },
      {
        "n": "5.2",
        "titulo": "Una skill con su programa",
        "cuerpo": "Claude ejecuta el programa de la skill y usa la salida. El programa no ocupa lugar en la conversación: solo lo que imprime.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa en plano medio.",
          "dice": "Una skill puede traer sus propios programas. Claude los ejecuta y usa el resultado. El programa no ocupa lugar en la conversación: solo lo que imprime."
        }
      },
      {
        "n": "5.3",
        "titulo": "La carpeta",
        "cuerpo": "`informe-semanal/`:\n\n- `SKILL.md`: el método.\n- `scripts/resumen.py`: suma; **se ejecuta**.\n- `references/formato.md`: el formato; **se lee si hace falta**.\n- `assets/ventas-ejemplo.csv`: los datos de ejemplo.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "La carpeta `informe-semanal` con flechas que marcan qué se ejecuta y qué se lee si hace falta."
        }
      },
      {
        "n": "5.4",
        "titulo": "Dos detalles técnicos",
        "cuerpo": "`${CLAUDE_SKILL_DIR}` apunta a la carpeta de la skill, esté donde esté. `allowed-tools` con `Bash(python3 ${CLAUDE_SKILL_DIR}/scripts/resumen.py *)` permite **ese** comando sin preguntar, solo en el turno en que se usa la skill. Escríbalo como lista, un permiso por línea: con dos permisos en la misma línea, Claude Code no los tomó. Y como la skill trae `allowed-tools`, al usarla Claude Code pregunta una vez: «Use skill \"informe-semanal\"?». El `SKILL.md` completo está en el bloque de abajo.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El SKILL.md de `informe-semanal` con las dos partes resaltadas: `${CLAUDE_SKILL_DIR}` y la línea `allowed-tools`."
        },
        "bloques": [
          {
            "tipo": "archivo",
            "etiqueta": "informe-semanal/SKILL.md",
            "lenguaje": "markdown",
            "texto": "---\nname: informe-semanal\ndescription: Hace el informe semanal de ventas desde un CSV (fecha, producto, cantidad, precio): totales exactos con un script y tres observaciones. Usar cuando pidan el informe de la semana, cuánto se vendió o qué se vendió más.\nallowed-tools:\n  - Bash(python3 ${CLAUDE_SKILL_DIR}/scripts/resumen.py *)\n  - Bash(py ${CLAUDE_SKILL_DIR}/scripts/resumen.py *)\n---\n\n# Informe semanal\n\n1. Corra `python3 ${CLAUDE_SKILL_DIR}/scripts/resumen.py <archivo.csv>` (en Windows, `py` en lugar de `python3`).\n   Los números del informe salen **solo** de esa salida: no sume a mano.\n2. Si el script da un error, muéstrelo y pare.\n3. Escriba el informe con el formato de `references/formato.md`: los totales, lo que más subió y bajó contra la semana\n   anterior, y tres observaciones concretas (qué haría el dueño el lunes)."
          }
        ]
      },
      {
        "n": "5.5",
        "titulo": "Armarla",
        "cuerpo": "Pegue el **pedido de la lección 5** (en el bloque de abajo y en el kit): Claude escribe la skill y el script (solo biblioteca estándar) y los prueba con el CSV de ejemplo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "Claude Code creando la carpeta de la skill y corriendo la prueba con el CSV de ejemplo."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "Pedido de la lección 5",
            "texto": "Creá la skill `informe-semanal` con `scripts/resumen.py` (solo biblioteca estándar: lee un CSV con fecha, producto, cantidad y precio; imprime totales por producto y por día y la comparación con la semana anterior), `references/formato.md` y `assets/ventas-ejemplo.csv` con 60 filas inventadas y marcadas como ejemplo. En el SKILL.md usá `${CLAUDE_SKILL_DIR}` y `allowed-tools` solo para ese script. Probalo con el CSV de ejemplo."
          }
        ]
      },
      {
        "n": "5.6",
        "titulo": "Probarla",
        "cuerpo": "«Hacé el informe de esta semana con ventas.csv» → corre el script → totales exactos y tres observaciones.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "El script que corre con un CSV de ventas ficticio y el informe que escribe Claude."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "Hacé el informe de esta semana con ventas.csv"
          }
        ]
      },
      {
        "n": "5.7",
        "titulo": "Tres opciones más",
        "cuerpo": "- `disable-model-invocation: true`: solo la llama usted (para lo que publica, envía o despliega).\n- Una línea con `!` y un comando entre comillas invertidas: corre el comando y pone su salida antes de que Claude la lea (solo Claude Code).\n- `context: fork`: corre en un subagente aparte.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Una pizarra con las tres opciones, una debajo de la otra."
        }
      },
      {
        "n": "5.8",
        "titulo": "Un buen ejemplo de afuera",
        "cuerpo": "**instagram-agent** ([github.com/Jakeschincariol/instagram-agent-skill](https://github.com/Jakeschincariol/instagram-agent-skill), MIT): 13 skills con 6 programas chicos de Python, sin internet, que solo leen el texto que se les pasa.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "La página pública de instagram-agent en GitHub y su carpeta `scripts`."
        }
      }
    ]
  },
  {
    "n": 6,
    "slug": "6-revisar-skills-ajenas",
    "titulo": "Revisar una skill ajena antes de instalarla",
    "objetivo": "Aplicar la lista de 12 preguntas a una skill real de terceros antes de instalarla, y fijarla con sus huellas.",
    "resultado": "Una skill de terceros revisada con las 12 preguntas, fijada a un commit y con sus huellas anotadas.",
    "laminas": [
      {
        "n": "6.1",
        "titulo": "Lo dice Anthropic",
        "cuerpo": "«Use Skills only from trusted sources» · «a malicious Skill can direct Claude to call tools or run code in ways that don't match the Skill's stated purpose».\n\nFuente: [platform.claude.com, Agent Skills, Security considerations](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La cita de la documentación de Anthropic sobre la seguridad de las skills, con su fuente."
        }
      },
      {
        "n": "6.2",
        "titulo": "Una skill es texto que Claude obedece",
        "cuerpo": "Si no la leyó, le está dando órdenes a su Claude alguien que no conoce. En Vion: **ninguna skill se activa sin revisión.**",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 30,
          "seVe": "Chispa en plano de cara.",
          "dice": "Una skill es texto que Claude obedece. Si usted no la leyó, le está dando órdenes a su Claude alguien que no conoce. En Vion tenemos una regla: ninguna skill se activa sin revisión."
        }
      },
      {
        "n": "6.3",
        "titulo": "Las 12 preguntas (1 a 6)",
        "cuerpo": "1. ¿De dónde viene y con qué licencia? (sin licencia: se usa, no se reparte; así pasa con content-principles).\n2. ¿Leí **todo**, también lo que llama?\n3. ¿Usa internet, a dónde?\n4. ¿Ejecuta comandos, cuáles?\n5. ¿Se da permisos a sí misma (`allowed-tools`)?\n6. ¿Trae hooks? (taste-skill: se sacó).",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "La primera tanda de preguntas en una lista, cada una con su ejemplo chico."
        }
      },
      {
        "n": "6.4",
        "titulo": "Las 12 preguntas (7 a 12)",
        "cuerpo": "- **7.** ¿Pide instalar o actualizar desde una URL que puede cambiar (`curl … | sh`, «leé las instrucciones de esta URL»)? (Agent-Reach).\n- **8.** ¿Baja binarios o código al usarse? (impeccable, VoiceStudio).\n- **9.** ¿Usa sus sesiones o cookies? (ig-viral: parcheado).\n- **10.** ¿Publica, envía o paga? (claude-ads: no se copió lo que lanza campañas).\n- **11.** ¿Está fijada a un commit de 40 caracteres?\n- **12.** ¿Anoté qué cambié y por qué (original aparte)?",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "La segunda tanda de preguntas en una lista, cada una con su ejemplo chico."
        }
      },
      {
        "n": "6.5",
        "titulo": "Revisar es leer",
        "cuerpo": "Baje la carpeta, no la instale. Lea el SKILL.md y cada script. Pídale ayuda a Claude Code con `LISTA-DE-REVISION.md` y el pedido de abajo, **sin ejecutar nada**: ábralo con `claude --disallowedTools Bash` (al probarlo, aunque se le pidió no ejecutar, intentó leer con Bash).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 50,
          "seVe": "La revisión en vivo de una skill pública con un script: el SKILL.md y el script abiertos, y Claude Code respondiendo pregunta por pregunta sin ejecutar nada."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "Pedido de la lección 6",
            "texto": "Revisá la skill de la carpeta <x> con LISTA-DE-REVISION.md. No ejecutes nada: solo leé. Por cada pregunta, la respuesta con el archivo y la línea. Al final: activar, activar con parche (cuál) o rechazar (por qué)."
          },
          {
            "tipo": "comando",
            "etiqueta": "Abrir Claude Code sin Bash, para que solo pueda leer",
            "texto": "claude --disallowedTools Bash"
          }
        ]
      },
      {
        "n": "6.6",
        "titulo": "Un escáner ayuda; no reemplaza leer",
        "cuerpo": "**SkillSpector** ([github.com/NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector), Apache-2.0) busca patrones peligrosos; en Vion corre fijado a un commit, en un contenedor sin red y sin LLM (`--no-llm`). Sobre `webapp-testing`, la skill de la lámina anterior, marcó «HIGH» el `shell=True` con el que arranca su servidor, que es justamente para lo que existe. Y no vio el posible bloqueo de la línea 72 que encontró la lectura. Ayuda a mirar; no reemplaza leer.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "SkillSpector sobre `webapp-testing`, sin red: su informe con la alerta «HIGH» en `with_server.py:69` y, al lado, las líneas 67 a 73 del script, donde está el bloqueo que solo encontró la lectura."
        }
      },
      {
        "n": "6.7",
        "titulo": "Fijar y anotar las huellas",
        "cuerpo": "1. `git clone <repo>`\n2. `git checkout <commit de 40 caracteres>`\n3. Copiar (no enlazar) la carpeta a `~/.claude/skills/`.\n4. `python huellas.py anotar <skill>` (origen, commit, licencia, revisión y el sha256 de cada archivo en `catalogo.json`).\n5. `python huellas.py verificar`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "Los comandos uno por uno y el catálogo con el origen, el commit y las huellas de cada archivo."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "1. Bajar la skill",
            "texto": "git clone <repo>"
          },
          {
            "tipo": "comando",
            "etiqueta": "2. Fijar el commit",
            "texto": "git checkout <commit de 40 caracteres>"
          },
          {
            "tipo": "comando",
            "etiqueta": "4. Anotar las huellas",
            "texto": "python huellas.py anotar <skill>"
          },
          {
            "tipo": "comando",
            "etiqueta": "5. Verificar",
            "texto": "python huellas.py verificar"
          }
        ]
      },
      {
        "n": "6.8",
        "titulo": "Lo que rechazamos (y por qué)",
        "cuerpo": "- **Kevs-IOS-Agents:** manejaba teléfonos para interactuar en redes.\n- **VoiceStudio:** bajaba código mientras se usaba.\n- **Craft Anything:** demasiado alcance para lo que hacía.\n\nLo rechazado se anota igual, con su motivo.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Tres tarjetas, Kevs-IOS-Agents, VoiceStudio y Craft Anything, cada una con el sello «Rechazada»."
        }
      },
      {
        "n": "6.9",
        "titulo": "Lo que se lleva",
        "cuerpo": "`LISTA-DE-REVISION.md` con las 12 preguntas y `huellas.py`, en el kit.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lámina de cierre de la lección: la lista de revisión y el script de huellas del kit."
        }
      }
    ]
  },
  {
    "n": 7,
    "slug": "7-biblioteca-con-versiones",
    "titulo": "Compartir y tener su biblioteca con versiones",
    "objetivo": "Tener sus skills en Git, compartirlas con su equipo o en claude.ai, y probar si una skill mejoró o empeoró.",
    "resultado": "El repo `mis-skills` con sus dos skills y el catálogo, compartido y evaluado.",
    "laminas": [
      {
        "n": "7.1",
        "titulo": "¿Cuál es la buena?",
        "cuerpo": "Su skill anda. Su socia la quiere, y usted la cambió tres veces esta semana.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa en plano medio.",
          "dice": "Su skill anda en su compu. Ahora su socia la quiere, y usted la cambió tres veces esta semana. ¿Cuál es la buena? Para eso, una biblioteca con versiones."
        }
      },
      {
        "n": "7.2",
        "titulo": "La biblioteca",
        "cuerpo": "`mis-skills/`:\n\n- `skills/propuesta-cliente/`\n- `skills/informe-semanal/`\n- `catalogo.json`\n- `huellas.py`\n\nUn repo de Git: `git init`, y cada cambio, un commit que dice qué cambió y por qué (`git commit -m \"propuesta-cliente: todo precio lleva su cuenta\"`).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "La carpeta `mis-skills` y su primer commit."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Dentro de mis-skills",
            "texto": "git init"
          },
          {
            "tipo": "comando",
            "etiqueta": "Un commit que dice qué cambió y por qué",
            "texto": "git commit -m \"propuesta-cliente: todo precio lleva su cuenta\""
          }
        ]
      },
      {
        "n": "7.3",
        "titulo": "Tres formas de compartir",
        "cuerpo": "- **Su equipo:** `.claude/skills/` dentro del proyecto, con Git.\n- **Usted, en todos sus proyectos:** un enlace desde `~/.claude/skills/` a la biblioteca.\n- **Mucha gente:** un plugin (carpeta `skills/` dentro del plugin; se instala con `/plugin install`).",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Los tres caminos para compartir una skill: dentro del proyecto con Git, un enlace desde su carpeta personal y un plugin."
        }
      },
      {
        "n": "7.4",
        "titulo": "En claude.ai",
        "cuerpo": "Se sube como ZIP: **Personalizar > Habilidades**, el botón «+», «+ Crear habilidad» y «Cargar una habilidad» (así lo dice el centro de ayuda de Anthropic al 2026-11-13; ahí las skills se llaman «habilidades»). El ZIP lleva la carpeta de la skill como raíz, con el mismo nombre que la skill. Según la misma ayuda, en claude.ai la descripción va hasta 200 caracteres: la de `propuesta-cliente` es más larga, acórtela antes de subirla. En la cabecera solo valen seis campos: `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools`. Con otro, da error: `Unexpected key(s) in SKILL.md frontmatter`.\n\nFuentes: [Usar habilidades en Claude](https://support.claude.com/es/articles/12512180-usar-habilidades-en-claude) y [Cómo crear habilidades personalizadas](https://support.claude.com/es/articles/12512198-como-crear-habilidades-personalizadas).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "Las páginas públicas del centro de ayuda de Anthropic, capturadas y con zoom: quién puede usar skills, los pasos para subir el ZIP, cómo va el ZIP y el límite de la descripción."
        }
      },
      {
        "n": "7.5",
        "titulo": "¿Mejoró o empeoró?",
        "cuerpo": "Se prueba con y sin la skill, en conversaciones nuevas. El plugin oficial **skill-creator** lo hace solo. La primera vez, sume el directorio oficial de plugins (`/plugin marketplace add anthropics/claude-plugins-official`); después, `/plugin install skill-creator@claude-plugins-official` («Install for you») y el pedido de abajo. Arma un caso de prueba, lo corre en dos subagentes, uno con la skill y otro sin ella, y compara criterio por criterio. Con un solo caso la muestra es chica: pídale más casos, como uno sin fecha.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "Grabación real con Haiku: el directorio de plugins, la instalación de skill-creator, los dos subagentes y la tabla con y sin la skill (sin la skill, la propuesta cierra con saludo y firma e inventa una forma de pago)."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "En Claude Code, una vez",
            "texto": "/plugin marketplace add anthropics/claude-plugins-official"
          },
          {
            "tipo": "comando",
            "etiqueta": "En Claude Code",
            "texto": "/plugin install skill-creator@claude-plugins-official"
          },
          {
            "tipo": "pedido",
            "etiqueta": "Después, en Claude Code",
            "texto": "evaluá mi skill propuesta-cliente con skill-creator. Dos casos, con y sin la skill sin abrir el navegador: el resumen acá."
          }
        ]
      },
      {
        "n": "7.6",
        "titulo": "Para seguir",
        "cuerpo": "- **anthropics/skills** ([github.com/anthropics/skills](https://github.com/anthropics/skills)): las oficiales y una plantilla.\n- **agentskills.io** ([agentskills.io/specification](https://agentskills.io/specification)): el estándar.\n- **claude-plugins-official** ([github.com/anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)): skill-creator.\n- Las listas de terceros: úselas para ideas; cada skill pasa por la lección 6.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una lámina con los enlaces para seguir: anthropics/skills, agentskills.io, claude-plugins-official y las listas de terceros."
        }
      },
      {
        "n": "7.7",
        "titulo": "Su biblioteca, en una imagen",
        "cuerpo": "Dos skills, un catálogo con huellas, Git, y la lista de revisión.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "La biblioteca que se arma pieza por pieza: las dos skills, el catálogo con huellas, Git y la lista de revisión."
        }
      },
      {
        "n": "7.8",
        "titulo": "Sigamos juntos",
        "cuerpo": "Skills ya revisadas y los métodos que usamos en Vion: la comunidad de skills.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 25,
          "seVe": "Chispa en plano medio invita a sumarse; después, una tarjeta: «Comunidad de skills de Vion · vion-studio.com».",
          "dice": "Si quiere skills ya revisadas y los métodos que usamos en Vion, súmese a la comunidad. Lo que aprendió acá es lo mismo que hacemos nosotros."
        }
      }
    ]
  }
];
