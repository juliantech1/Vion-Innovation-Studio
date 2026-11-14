// Las lecciones de «A3-skills», lámina por lámina, desde el storyboard de la aldea
// (docs/planes/cursos/A3-skills.md, 2026-11-10). Texto completo de cada lámina; los videos e imágenes van en ../medios.json.
import type { LeccionCurso } from '../../tipos';

export const lecciones: LeccionCurso[] = [
  {
    "n": 1,
    "slug": "1-que-es-una-skill",
    "titulo": "Qué es una skill (y qué no)",
    "objetivo": "Entender qué es una skill y cuándo conviene escribir una, frente a las otras formas de darle instrucciones a Claude.",
    "resultado": "El cuadro de las cuatro piezas (CLAUDE.md, skill, subagente y MCP), con un ejemplo de cada una.",
    "laminas": [
      {
        "n": "1.1",
        "titulo": "Escríbalo una vez",
        "cuerpo": "¿Le pide a Claude lo mismo una y otra vez, con las mismas aclaraciones? Por ejemplo: «escribí la propuesta con este formato, en este orden, sin inventar precios». Cada conversación nueva empieza de cero, así que tiene que volver a explicarlo.\n\nUna **skill** es la forma de escribir esas instrucciones una sola vez y dejarlas guardadas, para que Claude las use cada vez que haga falta. La regla práctica: si le dice lo mismo a Claude más de dos veces, eso es una skill.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa en plano de cara, en tres tomas cortas, cada vez más cansada de repetir el mismo pedido; suspira, y al final mira a cámara.",
          "dice": "Escribí la propuesta con este formato, en este orden, sin inventar precios… Escribí la propuesta con este formato, en este orden… Escribí la propuesta… Si se lo dice a Claude más de dos veces, eso es una skill. Escríbalo una vez."
        }
      },
      {
        "n": "1.2",
        "titulo": "Qué es una skill",
        "cuerpo": "Una skill es una **carpeta** con un archivo de texto llamado `SKILL.md`. Ese archivo tiene dos partes:\n\n- **Arriba, la cabecera:** el **nombre** de la skill y una **descripción** de cuándo usarla.\n- **Abajo, las instrucciones:** lo que Claude tiene que hacer, escrito como se lo explicaría a una persona.\n\nLa carpeta también puede traer subcarpetas: `scripts/` (programas), `references/` (documentos de consulta) y `assets/` (plantillas, imágenes o datos).\n\nSe usa de dos maneras: Claude la usa solo cuando lo que usted pide coincide con la descripción, o usted la llama escribiendo `/` y el nombre, por ejemplo `/propuesta-cliente`.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Una carpeta que se abre y muestra `SKILL.md`, `scripts/` y `references/`; la cabecera del `SKILL.md` se resalta."
        }
      },
      {
        "n": "1.3",
        "titulo": "No ocupa lugar hasta que la usa",
        "cuerpo": "Claude tiene un límite de cuánto texto puede tener presente a la vez, y lo mide en **tokens** (pedacitos de palabras). Las skills gastan poco de ese espacio porque se cargan por partes:\n\n- **Siempre:** solo el nombre y la descripción de cada skill (unos 100 tokens por skill).\n- **Cuando la usa:** las instrucciones.\n- **Si hace falta:** los programas y documentos de la carpeta.\n\nPor eso puede tener muchas skills instaladas sin que Claude se llene. Fuente: [documentación de Agent Skills de Anthropic](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview).",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Tres capas que se apilan (nombre y descripción, instrucciones, scripts y documentos) y se encienden por turno."
        }
      },
      {
        "n": "1.4",
        "titulo": "Skill, CLAUDE.md, subagente o MCP",
        "cuerpo": "Además de las skills, Claude Code tiene otras tres formas de recibir instrucciones o capacidades. Se parecen, pero sirven para cosas distintas:\n\n- **CLAUDE.md:** un archivo con las reglas que valen siempre en un proyecto (por ejemplo, «usamos usted»). Claude lo tiene cargado todo el tiempo.\n- **Skill:** un procedimiento que se carga solo cuando toca (por ejemplo, «así hago una propuesta»).\n- **Subagente:** otro Claude que trabaja aparte, con su propia conversación y sus propias herramientas, y le devuelve el resultado.\n- **MCP:** un enchufe que conecta a Claude con otro programa.\n\nNo compiten: se pueden usar juntos.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Un cuadro de cuatro filas (CLAUDE.md, skill, subagente y MCP), cada una con qué es y un ejemplo."
        }
      },
      {
        "n": "1.5",
        "titulo": "¿Cuándo conviene cada una?",
        "cuerpo": "Para elegir, hágase cuatro preguntas:\n\n- ¿Es una regla que vale **siempre** en el proyecto? Va en **CLAUDE.md**.\n- ¿Es una forma de hacer algo que usa **a veces**? Es una **skill**.\n- ¿El trabajo tiene que hacerse **aparte**, con sus propias herramientas? Es un **subagente**.\n- ¿Claude tiene que **hablar con otro programa**? Es un **MCP**.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa en plano medio, explicando las cuatro preguntas.",
          "dice": "La pregunta es simple. ¿Vale siempre? Va en CLAUDE punto md. ¿Es un cómo-se-hace que usa a veces? Una skill. ¿Necesita trabajar aparte? Un subagente. ¿Tiene que hablar con otro programa? Un MCP."
        }
      },
      {
        "n": "1.6",
        "titulo": "Así lo usamos en Vion",
        "cuerpo": "En Vion tenemos una biblioteca de skills: algunas escritas por nosotros y otras de terceros. Cada una está marcada como activa o inactiva, y ninguna se activa sin que alguien la haya leído y revisado antes. En la lección 6 aprende a hacer esa revisión.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 16,
          "seVe": "La sección Skills de Ultron en modo demo: la lista de skills, cada una marcada como activa o inactiva."
        }
      },
      {
        "n": "1.7",
        "titulo": "Lo que se lleva",
        "cuerpo": "Ya sabe qué es una skill, cómo está hecha y cuándo conviene escribir una en vez de usar CLAUDE.md, un subagente o un MCP.\n\nEn la próxima lección deja todo listo en su computadora: instala Claude Code y crea la carpeta donde viven las skills.",
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
    "objetivo": "Instalar Claude Code, crear la carpeta donde se guardan las skills y comprobar que todo anda, en Windows o en Mac.",
    "resultado": "Claude Code responde qué skills tiene, con la carpeta de skills creada en Windows o en Mac.",
    "laminas": [
      {
        "n": "2.1",
        "titulo": "Instalar Claude Code",
        "cuerpo": "**Claude Code** es la versión de Claude que trabaja en su computadora: lee y escribe archivos y ejecuta comandos, pidiéndole permiso. Ahí va a crear y probar sus skills. Si ya lo tiene instalado (por ejemplo, porque hizo el curso «Su agentic OS»), pase a la lámina siguiente.\n\nSe instala desde la **terminal**, la ventana donde se escriben comandos: PowerShell en Windows, Terminal en Mac. Copie el comando de su sistema:\n\n- **Windows:** `winget install Anthropic.ClaudeCode`\n- **Mac:** `brew install --cask claude-code` (usa Homebrew, el instalador de programas de la terminal de Mac).\n\nDespués cierre la terminal y vuelva a abrirla. Para comprobar que quedó bien, escriba `claude --version`, que muestra la versión instalada (cambia seguido: la suya va a ser otra), y `claude doctor`, que revisa la instalación.\n\nPara entrar, escriba `claude` y elija la cuenta con suscripción: se abre el navegador para aceptar. Claude Code pide un plan pago (Pro, desde USD 20 al mes). La guía completa, con Python y Git (se usan en las lecciones 5 a 7), está en el kit, en `PUESTA-A-PUNTO.md`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 47,
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
            "texto": "claude --version\nclaude doctor"
          }
        ]
      },
      {
        "n": "2.2",
        "titulo": "¿Dónde guardarla?",
        "cuerpo": "Una skill es una carpeta, y el lugar donde la guarde decide **quién** la puede usar: solo usted, todo su equipo, o usted en el chat de claude.ai (la página web de Claude). La lámina siguiente muestra los tres lugares.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 10,
          "seVe": "Chispa en plano medio.",
          "dice": "Ahora lo importante: dónde guardar una skill. Depende de quién la va a usar: usted, su equipo, o usted en el chat de claude.ai."
        }
      },
      {
        "n": "2.3",
        "titulo": "Tres lugares",
        "cuerpo": "- **Solo usted, en todos sus proyectos:** en su carpeta personal, `~/.claude/skills/<nombre>/`. El signo `~` quiere decir su carpeta de usuario; en Windows es `C:\\Users\\<usuario>\\.claude\\skills\\<nombre>\\`.\n- **Su equipo, en un proyecto:** en `.claude/skills/<nombre>/`, dentro de la carpeta del proyecto. Si el proyecto se comparte con Git (un programa que guarda las versiones de los archivos), todo el equipo la recibe.\n- **claude.ai:** se sube como un archivo ZIP.\n\nSon lugares separados: lo que sube a claude.ai no aparece en Claude Code, ni al revés.\n\nTodos los lugares, según la documentación oficial:\n\n| Dónde | Ruta | Se cargan en |\n| Personal | `~/.claude/skills/<nombre>/SKILL.md` (Windows: `C:\\Users\\<usuario>\\.claude\\skills\\<nombre>\\SKILL.md`) | Todos sus proyectos en esa computadora |\n| Proyecto | `.claude/skills/<nombre>/SKILL.md` dentro del repo | Las sesiones de ese repo; se comparte con Git |\n| Plugin | `<plugin>/skills/<nombre>/SKILL.md` | Donde el plugin esté activo, como `/plugin:nombre` |\n| Empresa | La carpeta de ajustes administrados | Todos los usuarios de la organización |\n| claude.ai | Se sube un ZIP en la configuración | El chat, Cowork y las sesiones en la nube con esa cuenta |\n\nConviene saber: no llame a una carpeta `synced` ni `anthropic-skills` (son nombres reservados); una carpeta puede ser un enlace a otra; los archivos viejos de `.claude/commands/` siguen andando, pero una skill nueva se hace como carpeta.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Los tres lugares donde vive una skill: su carpeta personal, la carpeta del proyecto con Git y claude.ai con un ZIP, separados entre sí."
        }
      },
      {
        "n": "2.4",
        "titulo": "Crear la carpeta",
        "cuerpo": "Cree su carpeta personal de skills con este comando en la terminal:\n\n- **Windows (PowerShell):** `mkdir $HOME\\.claude\\skills`\n- **Mac (Terminal):** `mkdir -p ~/.claude/skills`\n\n`mkdir` quiere decir «crear carpeta». En Windows la ve en el Explorador, dentro de su carpeta de usuario. En Mac, la carpeta `.claude` está oculta porque empieza con punto: en el Finder, Cmd+Mayús+punto la muestra, con `skills` adentro.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 28,
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
        "cuerpo": "Abra Claude Code escribiendo `claude` y pregúntele: «¿Qué skills tenés disponibles?». Es la prueba que propone la documentación: Claude responde con las skills que encuentra.\n\nPara revisar que las cabeceras de sus skills estén bien escritas, use `claude plugin validate ~/.claude/skills` (pide Claude Code 2.1.233 o más nuevo).\n\nClaude Code nota los cambios dentro de las carpetas de skills sin reiniciar. La excepción: si creó la carpeta de skills con Claude Code abierto, ciérrelo y vuelva a abrirlo.",
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
        "cuerpo": "El nombre de una skill es también el comando con que se la llama (`/nombre`), así que tiene reglas fijas:\n\n- Solo minúsculas, números y guiones.\n- Sin guion al principio ni al final, y nunca dos guiones seguidos.\n- Hasta 64 caracteres.\n- Igual al nombre de la carpeta.\n- Ni `synced` ni `anthropic-skills`: están reservados.\n\nPor ejemplo, `propuesta-cliente` sirve; `Propuesta Cliente` y `-propuesta` no.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Ejemplos de nombres válidos e inválidos, según la especificación de agentskills.io."
        }
      },
      {
        "n": "2.7",
        "titulo": "El formato, en una lámina",
        "cuerpo": "Esta lámina es de consulta: no hace falta aprenderla de memoria; vuelva cuando escriba sus skills.\n\nUn `SKILL.md` empieza con una cabecera entre dos líneas `---`, escrita en YAML (un formato simple de «campo: valor»). Debajo van las instrucciones, en Markdown (texto común con algunos signos para títulos y listas). La cabecera mínima, con `name` y `description`, está en el bloque de abajo.\n\nTodos los campos de la cabecera, y cuáles valen en todos lados o solo en Claude Code:\n\n| Campo | Para qué | Dónde vale |\n| name | El comando (`/propuesta-cliente`). En el estándar abierto: obligatorio, hasta 64 caracteres, minúsculas, números y guiones, sin guion al principio ni al final ni dos seguidos, **igual al nombre de la carpeta**. En Claude Code es opcional (si falta, usa la carpeta) | Todos |\n| description | Qué hace **y cuándo usarla**: con esto Claude decide cargarla sola. Estándar: hasta 1.024 caracteres. Claude Code corta la lista en 1.536 (con `when_to_use`) | Todos |\n| license, compatibility (hasta 500), metadata | Licencia, requisitos, datos propios (versión, autor) | Todos |\n| allowed-tools | Herramientas que no piden permiso **en el turno** en que se invoca (por ejemplo `Bash(python3 ${CLAUDE_SKILL_DIR}/scripts/resumen.py *)`) | Todos (experimental en el estándar) |\n| when_to_use, argument-hint, arguments | Frases que la activan; ayuda al escribir; argumentos con nombre (`$cliente`) | Solo Claude Code |\n| disable-model-invocation: true | Solo la invoca usted con `/nombre` (para lo que tiene efectos: publicar, enviar, desplegar) | Solo Claude Code |\n| user-invocable: false | Solo la usa Claude (conocimiento de fondo) | Solo Claude Code |\n| context: fork, agent, model, effort, paths, hooks, shell | Correr en un subagente, con otro modelo o esfuerzo; activarse solo con ciertos archivos; hooks; PowerShell | Solo Claude Code |\n\nLo demás que conviene saber, también de la documentación:\n\n- **Carga por etapas:** al arrancar, Claude solo ve el nombre y la descripción (unos 100 tokens por skill); el cuerpo se carga cuando se usa (conviene por debajo de 5.000 tokens); los archivos de apoyo, solo si los necesita. **SKILL.md por debajo de 500 líneas**; lo largo, a `references/`.\n- **Carpetas de apoyo:** `scripts/` (se ejecutan, no se cargan), `references/` (se leen si hace falta), `assets/` (plantillas, imágenes).\n- **Variables:** `$ARGUMENTS`, `$0`, `$1`, `${CLAUDE_SKILL_DIR}` (la carpeta de la skill), `${CLAUDE_PROJECT_DIR}`.\n- **Contexto en vivo:** una línea que empieza con `!` y un comando entre comillas invertidas (por ejemplo `!` seguido de `git diff HEAD`) corre el comando y pone su salida antes de que Claude lea la skill (solo Claude Code; no anda en claude.ai ni por la API).\n- **Una vez cargada, queda en la conversación** y Claude Code no vuelve a leer el archivo: las instrucciones se escriben como reglas que valen para toda la tarea.",
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
        "cuerpo": "Si una skill no aparece o no hace lo que espera, busque el síntoma en esta tabla:\n\n| Error | Causa | Solución |\n| La skill no aparece | Nombre con mayúsculas, espacios dobles, `<` `>` o caracteres invisibles; o la carpeta se creó con la sesión abierta | Renombrar en minúsculas con guiones; reiniciar; `claude --debug` y buscar `[names]` |\n| Aparece pero Claude no la usa sola | La descripción no tiene las palabras que usted dice | Poner el caso de uso primero y las palabras reales del pedido (lección 3) |\n| Se activa cuando no debe | Descripción muy amplia | Más específica, o `disable-model-invocation: true` |\n| La cabecera no se lee | YAML roto (por ejemplo, dos puntos sin comillas) o el `---` no está en la primera línea | `claude plugin validate`; la skill carga igual pero sin descripción |\n| La descripción sale cortada | Más de 1.536 caracteres (descripción + `when_to_use`) | Acortar: lo importante primero |\n| Se ven &lt; y &gt; | Ángulos en la descripción | Usar corchetes: `[cliente]` |\n| Al subir a claude.ai: Unexpected key(s) in SKILL.md frontmatter | Campos que solo entiende Claude Code (`argument-hint`, `disable-model-invocation`…) | Para claude.ai, solo `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools` |\n| Claude deja de seguirla a mitad de la sesión | La conversación se compactó (quedan los primeros 5.000 tokens de cada skill) | Lo importante arriba; volver a invocarla |",
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
    "objetivo": "Aprender a escribir una skill que funcione: una descripción que Claude reconoce solo y unas instrucciones que le enseñan a pensar el trabajo, no a llenar casillas.",
    "resultado": "Una descripción que se activa sola y las cinco reglas para escribir el cuerpo de cualquier skill.",
    "laminas": [
      {
        "n": "3.1",
        "titulo": "Plantilla vs. método",
        "cuerpo": "Dos propuestas para el mismo cliente, hechas con dos skills distintas. La primera llena huecos con frases genéricas que le servirían a cualquiera. La segunda entendió al cliente. La diferencia no está en Claude: está en cómo se escribió la skill.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Dos propuestas lado a lado; en la de la izquierda, las partes genéricas se tachan."
        }
      },
      {
        "n": "3.2",
        "titulo": "Por qué método",
        "cuerpo": "Hay dos maneras de escribir una skill:\n\n- Una **plantilla** le dice a Claude qué poner en cada casilla. Sale siempre igual, aunque el caso sea distinto.\n- Un **método** le explica cómo pensar el problema: reglas, cada una con su porqué. Con eso, Claude se adapta a cada caso.\n\nLas buenas skills son métodos.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 12,
          "seVe": "Chispa en plano medio.",
          "dice": "Una plantilla le dice a Claude qué poner en cada casilla. Un método le dice cómo pensar el problema. Las buenas skills son métodos: reglas con su porqué, no casillas para llenar."
        }
      },
      {
        "n": "3.3",
        "titulo": "La descripción manda",
        "cuerpo": "La descripción es lo único que Claude lee antes de decidir si usa una skill. Si está mal escrita, la skill no se activa sola. Tiene que decir dos cosas:\n\n1. **Qué hace.**\n2. **Cuándo usarla**, con las palabras que usted dice de verdad al pedirlo («propuesta», «cotización», «presupuesto»).\n\nPonga lo importante primero: Claude Code corta las descripciones largas en 1.536 caracteres.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Una descripción que se arma en dos partes, qué hace y cuándo usarla, y cada una se resalta."
        }
      },
      {
        "n": "3.4",
        "titulo": "Ejemplos buenos y malos",
        "cuerpo": "Malo: `description: Ayuda con propuestas.` Es tan vaga que Claude no sabe cuándo usarla.\n\nBueno: `description: Arma una propuesta comercial de una página para un cliente… Usar cuando pidan una propuesta, una cotización o un presupuesto.` Dice qué hace y con qué palabras se pide.\n\nLa descripción buena, entera, está en el bloque de abajo.",
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
        "cuerpo": "Dos skills públicas, de otros autores, que muestran cómo se ve un método:\n\n- **content-principles** ([github.com/aiwithremy/content-principles](https://github.com/aiwithremy/content-principles)): no da un formato de video; explica cómo piensa el que mira un video y le pide a Claude aplicarlo en silencio.\n- **bang-motion** ([github.com/bangtutorial/bang-motion](https://github.com/bangtutorial/bang-motion)): leyes de animación, cada una con su porqué («una toma, una idea»).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "Las páginas públicas de las dos skills en GitHub, con zoom a las líneas que se citan."
        }
      },
      {
        "n": "3.6",
        "titulo": "Cinco reglas para el cuerpo",
        "cuerpo": "El cuerpo es la parte de abajo del `SKILL.md`, la de las instrucciones. Cinco reglas para escribirlo:\n\n1. Lo importante, arriba: si la conversación se resume, queda el principio.\n2. Reglas que valen para toda la tarea, porque Claude no vuelve a leer el archivo.\n3. El porqué de cada regla.\n4. Un ejemplo bueno y uno malo.\n5. Menos de 500 líneas; lo largo, en `references/`.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Una lista con las cinco reglas que se tildan de a una."
        }
      },
      {
        "n": "3.7",
        "titulo": "Así escribimos las nuestras",
        "cuerpo": "Un ejemplo nuestro: `explicador-personaje`, la skill que usamos en Vion para armar videos explicativos con un personaje. Su cabecera lo dice desde el principio: «Es un método, no una plantilla: la estructura es la de partida y cambia de un video a otro.»",
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
    "objetivo": "Escribir, probar y corregir su primera skill: una que arma propuestas para sus clientes con su forma de trabajar.",
    "resultado": "`propuesta-cliente` funcionando: Claude la usa sola y también con `/propuesta-cliente`.",
    "laminas": [
      {
        "n": "4.1",
        "titulo": "Empezamos",
        "cuerpo": "En esta lección hace su primera skill de verdad: `propuesta-cliente`, que arma propuestas comerciales para sus clientes con su método (cómo pone el precio, qué incluye, qué nunca promete). El ejemplo del curso es una panadería ficticia; usted la adapta a su negocio.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 9,
          "seVe": "Chispa en capa sobre una terminal vacía.",
          "dice": "Una skill que le arme propuestas a sus clientes. La suya, con su método. Empezamos."
        }
      },
      {
        "n": "4.2",
        "titulo": "Que Claude la escriba con usted",
        "cuerpo": "No hace falta escribir la skill a mano: Claude Code la escribe con usted. Abra `claude` y pegue el **pedido de la lección 4** (está en el bloque de abajo y en el kit).\n\nClaude le va a hacer preguntas de a una: qué vende, cómo pone el precio, qué nunca promete. Contéstele como le explicaría el trabajo a un empleado nuevo: con eso escribe el método.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 42,
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
        "cuerpo": "Claude guarda la skill en su carpeta personal de skills. El `SKILL.md` de `propuesta-cliente` está entero en el bloque de abajo. Revise tres cosas:\n\n- La descripción dice qué hace y cuándo usarla.\n- El cuerpo es su método, no una plantilla.\n- Está la regla que no puede faltar: **nunca inventar un precio.**",
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
        "cuerpo": "La prueba importante es ver si Claude la usa **solo**. Abra una conversación **nueva** y pida algo sin nombrar la skill: «Necesito una cotización para 200 empanadas para un evento». Claude reconoce el pedido por la descripción, avisa que cargó la skill y arma la propuesta con su método.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 22,
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
        "cuerpo": "También la puede llamar usted, escribiendo `/` y el nombre: `/propuesta-cliente boda de 120 personas`. Lo que escribe después del nombre le llega a la skill como dato (en las instrucciones se llama `$ARGUMENTS`).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 26,
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
        "cuerpo": "En la prueba, al final de la propuesta salió una nota para usted, pegada al texto, que el cliente no tiene que leer. Lo tentador es corregir esa respuesta. No lo haga: corrija la skill. Agregue arriba de todo de las instrucciones «termine en la pregunta de cierre; nada después» y repita el mismo pedido en una conversación nueva. Ahora la propuesta termina en la pregunta de cierre.\n\nAsí se mejora una skill: cada error que encuentra se convierte en una regla.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 42,
          "seVe": "La nota interna resaltada al final de la propuesta, la regla nueva arriba del SKILL.md y el mismo pedido otra vez, que ahora termina en la pregunta de cierre."
        }
      },
      {
        "n": "4.7",
        "titulo": "El recorrido",
        "cuerpo": "Lo que pasa cada vez que usted pide algo:\n\n1. Usted escribe su pedido.\n2. Claude lee las descripciones de sus skills.\n3. Si una coincide, carga sus instrucciones.\n4. Sigue el método de la skill.\n5. Le entrega la propuesta.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Una ventana de Claude Code con el pedido y los pasos que siguen: lee las descripciones, carga la skill, sigue el método y entrega la propuesta."
        }
      },
      {
        "n": "4.8",
        "titulo": "Lo que se lleva",
        "cuerpo": "Su primera skill, `propuesta-cliente`, funcionando: Claude la usa solo cuando usted pide una propuesta, y usted la puede llamar con `/propuesta-cliente`. Además aprendió a mejorarla corrigiendo la skill, no la respuesta.\n\nEn la próxima lección hace una skill que además trae su propio programa.",
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
    "objetivo": "Hacer una skill que trae su propio programa: el programa hace las cuentas exactas y Claude pone el criterio.",
    "resultado": "`informe-semanal`: un script suma el CSV de ventas y Claude escribe el informe con tres observaciones.",
    "laminas": [
      {
        "n": "5.1",
        "titulo": "Las cuentas, con código",
        "cuerpo": "Si le pide a un modelo de IA que sume 200 filas de una planilla, a veces se equivoca y le da un total que no coincide. Los modelos son buenos para entender y redactar, no para hacer cuentas largas.\n\nLa solución: que lo exacto lo haga un programa y que Claude ponga el criterio (qué mirar, qué destacar, cómo contarlo).",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Un chat: «¿Cuánto vendí esta semana?» y un total que no coincide con la planilla."
        }
      },
      {
        "n": "5.2",
        "titulo": "Una skill con su programa",
        "cuerpo": "Una skill puede traer sus propios programas (en la carpeta `scripts/`). Claude los ejecuta y usa lo que devuelven. Además, el programa no ocupa lugar en la conversación: Claude solo ve lo que el programa imprime.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 10,
          "seVe": "Chispa en plano medio.",
          "dice": "Una skill puede traer sus propios programas. Claude los ejecuta y usa el resultado. El programa no ocupa lugar en la conversación: solo lo que imprime."
        }
      },
      {
        "n": "5.3",
        "titulo": "La carpeta",
        "cuerpo": "La skill de esta lección se llama `informe-semanal`. Su carpeta tiene cuatro partes:\n\n- `SKILL.md`: el método.\n- `scripts/resumen.py`: el programa que suma; **se ejecuta**.\n- `references/formato.md`: el formato del informe; **se lee si hace falta**.\n- `assets/ventas-ejemplo.csv`: datos de ventas de ejemplo, para probarla.\n\nNo hace falta saber programar: el programa lo escribe Claude Code.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "La carpeta `informe-semanal` con flechas que marcan qué se ejecuta y qué se lee si hace falta."
        }
      },
      {
        "n": "5.4",
        "titulo": "Dos detalles técnicos",
        "cuerpo": "Dos líneas del `SKILL.md` hacen que el programa funcione bien:\n\n- **`${CLAUDE_SKILL_DIR}`** apunta a la carpeta de la skill, esté donde esté. Así la skill encuentra su programa en cualquier computadora.\n- **`allowed-tools`** deja que Claude corra **ese** comando sin preguntarle, solo en el turno en que usa la skill: `Bash(python3 ${CLAUDE_SKILL_DIR}/scripts/resumen.py *)`. Escriba cada permiso en su propia línea, como lista: con dos permisos en la misma línea, Claude Code no los tomó.\n\nComo la skill trae `allowed-tools`, al usarla Claude Code le pregunta una vez: «Use skill \"informe-semanal\"?». El `SKILL.md` completo está en el bloque de abajo.",
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
        "cuerpo": "Pegue el **pedido de la lección 5** en Claude Code (está en el bloque de abajo y en el kit). Claude escribe la skill y el programa, usando solo lo que ya trae Python (nada que instalar aparte), y los prueba con el archivo de ventas de ejemplo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 37,
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
        "cuerpo": "Pídale: «Hacé el informe de esta semana con ventas.csv». Claude corre el programa, que suma las ventas, y con esos totales exactos escribe el informe con tres observaciones.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
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
        "cuerpo": "Tres opciones más de la cabecera, que solo valen en Claude Code:\n\n- `disable-model-invocation: true`: Claude no la usa solo; la llama usted. Sirve para lo que tiene efectos afuera: publicar, enviar o desplegar.\n- Una línea que empieza con `!` y un comando entre comillas invertidas: corre ese comando y pone su resultado en la skill antes de que Claude la lea.\n- `context: fork`: la skill corre en un subagente aparte (lección 1).",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Una pizarra con las tres opciones, una debajo de la otra."
        }
      },
      {
        "n": "5.8",
        "titulo": "Un buen ejemplo de afuera",
        "cuerpo": "Un ejemplo público bien hecho: **instagram-agent** ([github.com/Jakeschincariol/instagram-agent-skill](https://github.com/Jakeschincariol/instagram-agent-skill), licencia MIT). Son 13 skills para Instagram con 6 programas chicos de Python que no usan internet: solo leen el texto que se les pasa.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 22,
          "seVe": "La página pública de instagram-agent en GitHub y su carpeta `scripts`."
        }
      }
    ]
  },
  {
    "n": 6,
    "slug": "6-revisar-skills-ajenas",
    "titulo": "Revisar una skill ajena antes de instalarla",
    "objetivo": "Revisar una skill de otra persona antes de instalarla, con una lista de 12 preguntas, y dejarla fijada en una versión que no cambie sin que usted lo sepa.",
    "resultado": "Una skill de terceros revisada con las 12 preguntas, fijada a un commit y con sus huellas anotadas.",
    "laminas": [
      {
        "n": "6.1",
        "titulo": "Lo dice Anthropic",
        "cuerpo": "Anthropic, la empresa que hace Claude, lo advierte en su documentación: «Use Skills only from trusted sources» (use skills solo de fuentes de confianza) y «a malicious Skill can direct Claude to call tools or run code in ways that don't match the Skill's stated purpose» (una skill maliciosa puede hacer que Claude use herramientas o ejecute código para algo distinto de lo que dice hacer).\n\nFuente: [platform.claude.com, Agent Skills, Security considerations](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La cita de la documentación de Anthropic sobre la seguridad de las skills, con su fuente."
        }
      },
      {
        "n": "6.2",
        "titulo": "Una skill es texto que Claude obedece",
        "cuerpo": "Instalar una skill es darle a Claude instrucciones que va a seguir, y Claude Code puede leer sus archivos y ejecutar comandos en su computadora. Si no la leyó, le está dando órdenes a su Claude alguien que no conoce.\n\nPor eso en Vion tenemos una regla: **ninguna skill se activa sin revisión.**",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 13,
          "seVe": "Chispa en plano de cara.",
          "dice": "Una skill es texto que Claude obedece. Si usted no la leyó, le está dando órdenes a su Claude alguien que no conoce. En Vion tenemos una regla: ninguna skill se activa sin revisión."
        }
      },
      {
        "n": "6.3",
        "titulo": "Las 12 preguntas (1 a 6)",
        "cuerpo": "Las preguntas que nos hacemos antes de instalar cualquier skill. Entre paréntesis, casos reales de las que revisamos.\n\n1. ¿De dónde viene y con qué licencia? (Sin licencia se puede usar, pero no repartir; así pasa con content-principles.)\n2. ¿Leí **todo**, también lo que llama?\n3. ¿Usa internet? ¿A dónde se conecta?\n4. ¿Ejecuta comandos? ¿Cuáles?\n5. ¿Se da permisos a sí misma (`allowed-tools`)?\n6. ¿Trae hooks, es decir, comandos que corren solos en ciertos momentos? (taste-skill traía uno: se lo sacamos.)",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "La primera tanda de preguntas en una lista, cada una con su ejemplo chico."
        }
      },
      {
        "n": "6.4",
        "titulo": "Las 12 preguntas (7 a 12)",
        "cuerpo": "- **7.** ¿Pide instalar o actualizar desde una dirección de internet que puede cambiar (`curl … | sh`, «leé las instrucciones de esta URL»)? (Agent-Reach.)\n- **8.** ¿Baja programas o código mientras se usa? (impeccable, VoiceStudio.)\n- **9.** ¿Usa sus sesiones o cookies, es decir, entra a sus cuentas como si fuera usted? (ig-viral: la cambiamos.)\n- **10.** ¿Publica, envía o paga? (claude-ads: no copiamos lo que lanza campañas.)\n- **11.** ¿Está fijada a un commit, el código de 40 caracteres que identifica una versión exacta en Git?\n- **12.** ¿Anoté qué cambié y por qué, y guardé el original aparte?",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "La segunda tanda de preguntas en una lista, cada una con su ejemplo chico."
        }
      },
      {
        "n": "6.5",
        "titulo": "Revisar es leer",
        "cuerpo": "Revisar una skill es leerla entera antes de instalarla:\n\n1. Baje la carpeta, pero no la instale.\n2. Lea el `SKILL.md` y cada programa que traiga.\n3. Pídale ayuda a Claude Code con `LISTA-DE-REVISION.md` (está en el kit) y el pedido de abajo, **sin ejecutar nada**.\n\nPara que Claude solo pueda leer, ábralo con `claude --disallowedTools Bash`, que le quita la herramienta de ejecutar comandos. Hace falta: al probarlo, aunque se le pidió no ejecutar nada, intentó leer con Bash.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 38,
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
        "cuerpo": "Hay programas que revisan skills solos. **SkillSpector** ([github.com/NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector), Apache-2.0) busca patrones peligrosos. En Vion lo corremos fijado a un commit, en un contenedor sin internet y sin LLM (`--no-llm`).\n\nSirve, pero tiene límites. Sobre `webapp-testing`, la skill de la lámina anterior, marcó como peligro alto («HIGH») el `shell=True` con el que arranca su servidor, que es justamente para lo que existe. Y no vio el posible bloqueo de la línea 72 del script, que sí encontró la lectura. Ayuda a mirar; no reemplaza leer.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 34,
          "seVe": "SkillSpector sobre `webapp-testing`, sin red: su informe con la alerta «HIGH» en `with_server.py:69` y, al lado, las líneas 67 a 73 del script, donde está el bloqueo que solo encontró la lectura."
        }
      },
      {
        "n": "6.7",
        "titulo": "Fijar y anotar las huellas",
        "cuerpo": "Cuando la skill pasó la revisión, se instala de forma que no pueda cambiar sin que usted lo note:\n\n1. `git clone <repo>`: baja la skill.\n2. `git checkout <commit de 40 caracteres>`: la fija en la versión exacta que revisó.\n3. Copie (no enlace) la carpeta a `~/.claude/skills/`.\n4. `python huellas.py anotar <skill>`: anota en `catalogo.json` el origen, el commit, la licencia, la revisión y la **huella** (sha256) de cada archivo.\n5. `python huellas.py verificar`: compara cada archivo con su huella.\n\nUna huella es un código que se calcula a partir del contenido de un archivo: si el archivo cambia, aunque sea una letra, la huella cambia.",
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
        "cuerpo": "Tres skills que revisamos y no instalamos:\n\n- **Kevs-IOS-Agents:** manejaba teléfonos para interactuar en redes.\n- **VoiceStudio:** bajaba código mientras se usaba.\n- **Craft Anything:** demasiado alcance para lo que hacía.\n\nLo rechazado también se anota, con su motivo.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Tres tarjetas, Kevs-IOS-Agents, VoiceStudio y Craft Anything, cada una con el sello «Rechazada»."
        }
      },
      {
        "n": "6.9",
        "titulo": "Lo que se lleva",
        "cuerpo": "Una forma de revisar cualquier skill antes de instalarla. En el kit están las dos herramientas: `LISTA-DE-REVISION.md`, con las 12 preguntas, y `huellas.py`, para anotar y verificar las huellas.\n\nEn la próxima lección arma su biblioteca de skills y la comparte.",
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
    "objetivo": "Guardar sus skills con versiones en Git, compartirlas con su equipo o en claude.ai y comprobar si un cambio las mejoró o las empeoró.",
    "resultado": "El repo `mis-skills` con sus dos skills y el catálogo, compartido y evaluado.",
    "laminas": [
      {
        "n": "7.1",
        "titulo": "¿Cuál es la buena?",
        "cuerpo": "Su skill anda en su computadora. Ahora su socia la quiere usar, y usted la cambió tres veces esta semana: ¿cuál le pasa? Para eso sirve una biblioteca de skills **con versiones**: cada cambio queda guardado, con lo que cambió y por qué.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 11,
          "seVe": "Chispa en plano medio.",
          "dice": "Su skill anda en su compu. Ahora su socia la quiere, y usted la cambió tres veces esta semana. ¿Cuál es la buena? Para eso, una biblioteca con versiones."
        }
      },
      {
        "n": "7.2",
        "titulo": "La biblioteca",
        "cuerpo": "Arme una carpeta `mis-skills/` con sus skills y el catálogo:\n\n- `skills/propuesta-cliente/`\n- `skills/informe-semanal/`\n- `catalogo.json`\n- `huellas.py`\n\nConviértala en un repositorio de Git con `git init`: desde ahí, Git guarda cada versión. Cada vez que cambie algo, haga un commit (una versión guardada) con un mensaje que diga qué cambió y por qué, por ejemplo `git commit -m \"propuesta-cliente: todo precio lleva su cuenta\"`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 32,
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
        "cuerpo": "Tres formas de compartir una skill, según con quién:\n\n- **Su equipo:** en `.claude/skills/` dentro del proyecto, compartido con Git.\n- **Usted, en todos sus proyectos:** un enlace (un acceso directo) desde `~/.claude/skills/` a la biblioteca.\n- **Mucha gente:** un plugin, un paquete que se instala con `/plugin install`; las skills van en su carpeta `skills/`.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Los tres caminos para compartir una skill: dentro del proyecto con Git, un enlace desde su carpeta personal y un plugin."
        }
      },
      {
        "n": "7.4",
        "titulo": "En claude.ai",
        "cuerpo": "En claude.ai (la página web de Claude) las skills se llaman «habilidades» y se suben como un ZIP: **Personalizar > Habilidades**, el botón «+», «+ Crear habilidad» y «Cargar una habilidad» (así lo dice el centro de ayuda de Anthropic al 2026-11-13).\n\nTres cosas a cuidar, según la misma ayuda:\n\n- El ZIP lleva la carpeta de la skill como raíz, con el mismo nombre que la skill.\n- La descripción va hasta 200 caracteres: la de `propuesta-cliente` es más larga, acórtela antes de subirla.\n- En la cabecera solo valen seis campos: `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools`. Con otro, da error: `Unexpected key(s) in SKILL.md frontmatter`.\n\nFuentes: [Usar habilidades en Claude](https://support.claude.com/es/articles/12512180-usar-habilidades-en-claude) y [Cómo crear habilidades personalizadas](https://support.claude.com/es/articles/12512198-como-crear-habilidades-personalizadas).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "Las páginas públicas del centro de ayuda de Anthropic, capturadas y con zoom: quién puede usar skills, los pasos para subir el ZIP, cómo va el ZIP y el límite de la descripción."
        }
      },
      {
        "n": "7.5",
        "titulo": "¿Mejoró o empeoró?",
        "cuerpo": "Cuando cambia una skill, ¿cómo sabe si quedó mejor? Se prueba el mismo pedido con y sin la skill, en conversaciones nuevas, y se comparan los resultados. El plugin oficial **skill-creator** lo hace por usted:\n\n1. La primera vez, sume el directorio oficial de plugins: `/plugin marketplace add anthropics/claude-plugins-official`.\n2. Instale skill-creator con `/plugin install skill-creator@claude-plugins-official` y elija «Install for you».\n3. Pegue el pedido de abajo.\n\nskill-creator arma un caso de prueba, lo corre en dos subagentes, uno con la skill y otro sin ella, y compara los resultados criterio por criterio. Al probarlo con `propuesta-cliente`, sin la skill la propuesta cerraba con saludo y firma e inventaba una forma de pago. Con un solo caso la muestra es chica: pídale más casos, como uno sin fecha.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 57,
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
        "cuerpo": "Para seguir aprendiendo:\n\n- **anthropics/skills** ([github.com/anthropics/skills](https://github.com/anthropics/skills)): las skills oficiales de Anthropic y una plantilla para empezar.\n- **agentskills.io** ([agentskills.io/specification](https://agentskills.io/specification)): el estándar abierto del `SKILL.md`.\n- **claude-plugins-official** ([github.com/anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)): donde está skill-creator.\n- Las listas de skills de terceros: úselas para sacar ideas, y pase cada skill por las preguntas de la lección 6.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una lámina con los enlaces para seguir: anthropics/skills, agentskills.io, claude-plugins-official y las listas de terceros."
        }
      },
      {
        "n": "7.7",
        "titulo": "Su biblioteca, en una imagen",
        "cuerpo": "Lo que armó en el curso: dos skills propias (`propuesta-cliente` e `informe-semanal`), un catálogo con la huella de cada archivo, todo guardado con versiones en Git, y la lista de revisión para sumar skills ajenas con cuidado.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "La biblioteca que se arma pieza por pieza: las dos skills, el catálogo con huellas, Git y la lista de revisión."
        }
      },
      {
        "n": "7.8",
        "titulo": "Sigamos juntos",
        "cuerpo": "Lo que aprendió acá es lo mismo que hacemos nosotros. Si quiere skills ya revisadas y los métodos que usamos en Vion, súmese a la comunidad de skills de Vion, en vion-studio.com.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 21,
          "seVe": "Chispa en plano medio invita a sumarse; después, una tarjeta: «Comunidad de skills de Vion · vion-studio.com».",
          "dice": "Si quiere skills ya revisadas y los métodos que usamos en Vion, súmese a la comunidad. Lo que aprendió acá es lo mismo que hacemos nosotros."
        }
      }
    ]
  }
];
