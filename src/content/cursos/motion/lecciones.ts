// Las lecciones de «B1-motion», lámina por lámina, desde el storyboard de la aldea
// (docs/planes/cursos/B1-motion.md, 2026-11-10). Texto completo de cada lámina; los videos e imágenes van en ../medios.json.
import type { LeccionCurso } from '../../tipos';

export const lecciones: LeccionCurso[] = [
  {
    "n": 0,
    "slug": "0-puesta-a-punto",
    "titulo": "Puesta a punto: Claude Code, Node, ffmpeg y las skills",
    "objetivo": "Dejar todo instalado y comprobado: la cuenta de Claude, cinco programas y dos skills, en Windows, Mac o Linux.",
    "resultado": "Todo instalado y una animación de prueba de 5 s moviéndose en el navegador, pedida a Claude Code.",
    "laminas": [
      {
        "n": "0.1",
        "titulo": "Antes de animar",
        "cuerpo": "En esta lección deja todo listo: una cuenta, cinco programas y dos skills. Al final, una animación de prueba se mueve en su navegador. Tiempo: unos 20 minutos la primera vez.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Sobre un fondo crema, Chispa entra caminando por la derecha y se para en el centro; aparece el texto «LECCIÓN 0 · PUESTA A PUNTO».",
          "dice": "Antes de animar, vamos a dejar todo listo. Son cinco programas y una cuenta. Al final de esta lección, usted va a tener una animación moviéndose en su pantalla, pedida en una frase."
        }
      },
      {
        "n": "0.2",
        "titulo": "La lista",
        "cuerpo": "1. Cuenta de Claude (Pro o superior).\n2. Git para Windows (solo Windows).\n3. Claude Code.\n4. Node.js LTS.\n5. ffmpeg.\n6. Google Chrome.\n7. La carpeta del curso.\n8. Las skills `bang-motion` y `mi-motion`.\n9. `npm install` en la carpeta.\n\n**Todo es gratis menos la cuenta**: Claude Code no viene en el plan gratis.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "La lista de nueve puntos entra de a uno y se tilda, con sonido de tildes; el punto 1 queda en rojo con la palabra «PAGO»."
        }
      },
      {
        "n": "0.3",
        "titulo": "La cuenta de Claude",
        "cuerpo": "Claude Code necesita un plan **Pro** (USD 20 al mes, o USD 17 pagando el año), **Max** (USD 100) o **Ultra** (USD 200). Con Pro alcanza para el curso; en pedidos largos el plan puede pedirle que espere un rato. Elija el plan en [claude.com/pricing](https://claude.com/pricing).",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La página de planes de claude.com/pricing, con Pro, Max y Ultra."
        }
      },
      {
        "n": "0.4",
        "titulo": "Git para Windows (solo Windows)",
        "cuerpo": "Bájelo de [git-scm.com/downloads/win](https://git-scm.com/downloads/win) e instálelo con todo por defecto. Claude Code lo usa para correr comandos con Git Bash; sin él, usa PowerShell. Compruebe: `git --version`. En Mac y Linux no hace falta.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El instalador de Git para Windows, con las opciones por defecto."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Comprobar",
            "texto": "git --version"
          }
        ]
      },
      {
        "n": "0.5",
        "titulo": "Instalar Claude Code",
        "cuerpo": "- **Windows (PowerShell):** `irm https://claude.ai/install.ps1 | iex`\n- **Mac y Linux (Terminal):** `curl -fsSL https://claude.ai/install.sh | bash`\n\nNo muestra progreso: espere. Abra **otra** terminal y escriba `claude --version`: si sale un número, está. `claude doctor` revisa la instalación. Después escriba `claude` y entre con su cuenta en el navegador.\n\nTambién se puede instalar con `winget install Anthropic.ClaudeCode` en Windows o `brew install --cask claude-code` en Mac.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "Pantalla partida: PowerShell en Windows a la izquierda y Terminal en Mac a la derecha; el comando se pega y se resalta con un recuadro rojo; en una terminal nueva, `claude --version` y `claude doctor`; al final, el inicio de sesión en el navegador con el correo tapado.",
          "dice": "En Windows, PowerShell y este comando. En Mac, la Terminal y este otro. No muestra progreso: espere a que termine. Después abra una terminal nueva y pida la versión. Si aparece un número, está instalado. Escriba claude y entre con su cuenta.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows, en PowerShell",
            "lenguaje": "powershell",
            "texto": "irm https://claude.ai/install.ps1 | iex"
          },
          {
            "tipo": "comando",
            "etiqueta": "Mac y Linux, en Terminal",
            "lenguaje": "bash",
            "texto": "curl -fsSL https://claude.ai/install.sh | bash"
          },
          {
            "tipo": "comando",
            "etiqueta": "Comprobar, en una terminal nueva",
            "texto": "claude --version"
          },
          {
            "tipo": "comando",
            "etiqueta": "Revisar la instalación",
            "texto": "claude doctor"
          },
          {
            "tipo": "comando",
            "etiqueta": "Entrar con su cuenta",
            "texto": "claude"
          }
        ]
      },
      {
        "n": "0.6",
        "titulo": "Node.js y ffmpeg",
        "cuerpo": "**Node:** [nodejs.org](https://nodejs.org) → botón **LTS** (hoy la v26.13.0; también sirven la v24 y la v22), o `winget install OpenJS.NodeJS.LTS` / `brew install node`. Compruebe `node -v`.\n\n**ffmpeg:** `winget install Gyan.FFmpeg` · `brew install ffmpeg` · `sudo apt install ffmpeg`. Compruebe `ffmpeg -version`.\n\nSi la terminal no los encuentra, ciérrela y ábrala de nuevo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "nodejs.org con el botón LTS resaltado; `node -v`; `winget install Gyan.FFmpeg` y `ffmpeg -version`, con sonido de tecleo; un texto encima: «¿No lo encuentra? Cierre y abra la terminal»."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Node, Windows",
            "lenguaje": "powershell",
            "texto": "winget install OpenJS.NodeJS.LTS"
          },
          {
            "tipo": "comando",
            "etiqueta": "Node, Mac",
            "lenguaje": "bash",
            "texto": "brew install node"
          },
          {
            "tipo": "comando",
            "etiqueta": "Comprobar Node",
            "texto": "node -v"
          },
          {
            "tipo": "comando",
            "etiqueta": "ffmpeg, Windows",
            "lenguaje": "powershell",
            "texto": "winget install Gyan.FFmpeg"
          },
          {
            "tipo": "comando",
            "etiqueta": "ffmpeg, Mac",
            "lenguaje": "bash",
            "texto": "brew install ffmpeg"
          },
          {
            "tipo": "comando",
            "etiqueta": "ffmpeg, Linux (Ubuntu o Debian)",
            "lenguaje": "bash",
            "texto": "sudo apt install ffmpeg"
          },
          {
            "tipo": "comando",
            "etiqueta": "Comprobar ffmpeg",
            "texto": "ffmpeg -version"
          }
        ]
      },
      {
        "n": "0.7",
        "titulo": "Qué es una skill",
        "cuerpo": "Una skill es una carpeta con un archivo `SKILL.md`: un manual que Claude lee **solo cuando hace falta**. Arriba dice para qué sirve; abajo, las reglas. Las suyas van en `~/.claude/skills/` (para todos sus proyectos) o en `.claude/skills/` dentro de un proyecto.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Una carpeta se abre y sale una hoja `SKILL.md`; Claude, dibujado como un ícono genérico sin logo, la lee cuando llega el pedido «hacé una animación».",
          "dice": "Una skill es un manual para Claude. Lo lee solo cuando el pedido tiene que ver. Lo escribe una vez y sirve para siempre.",
          "vozEnOff": true
        }
      },
      {
        "n": "0.8",
        "titulo": "La carpeta del curso y las skills",
        "cuerpo": "1. Baje el kit y descomprímalo en `Documentos/motion-curso`.\n2. Dentro: `npm install` (instala Puppeteer y su Chrome de pruebas).\n3. `bang-motion`, fijada a la versión que revisamos: `git clone https://github.com/bangtutorial/bang-motion` en una carpeta aparte, `git checkout c1aa65e921c970d858705fcb4a53a8294d1a4131`, y copie la carpeta que tiene el `SKILL.md` a `~/.claude/skills/bang-motion`.\n4. `mi-motion` ya viene en `motion-curso/.claude/skills/`.\n\nCompruebe: en Claude Code escriba `/` y busque las dos. El kit trae también `CLAUDE.md`, las reglas del proyecto para Claude Code (en el bloque de abajo).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "El zip, la carpeta y `npm install`; el clon de bang-motion y el checkout; la copia de la carpeta; en Claude Code, la lista que abre `/` con `bang-motion` y `mi-motion` resaltadas. Cada paso lleva su texto encima."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Dentro de motion-curso",
            "texto": "npm install"
          },
          {
            "tipo": "comando",
            "etiqueta": "bang-motion, en una carpeta aparte",
            "lenguaje": "bash",
            "texto": "git clone https://github.com/bangtutorial/bang-motion\ncd bang-motion\ngit checkout c1aa65e921c970d858705fcb4a53a8294d1a4131"
          },
          {
            "tipo": "archivo",
            "etiqueta": "CLAUDE.md (viene en el kit)",
            "lenguaje": "markdown",
            "texto": "# Motion con Claude (kit del curso de Vion)\n- Cada animación es UN archivo HTML que se abre con doble clic. GSAP 3.15.1 desde un CDN con la versión exacta.\n- Contrato: window.DURATION (segundos) y window.seek(t) (lleva la animación al segundo t y la deja quieta).\n  La línea de tiempo arranca sola al abrir, salvo con ?render=1 en la URL.\n- Tamaño fijo en píxeles (1920×1080 por defecto; 1080×1920 si se pide vertical). Nada depende del tamaño de la ventana.\n- Estilo: leer ESTILO.md antes de diseñar. Reglas de movimiento: skill bang-motion y revision-anti-ppt.md.\n- Nada de imágenes ni fuentes de sitios que no sean Google Fonts. Nada de pedir datos ni conectarse a otra cosa.\n- Al terminar: decir cuánto dura y qué se puede cambiar fácil (textos, colores)."
          }
        ]
      },
      {
        "n": "0.9",
        "titulo": "La prueba",
        "cuerpo": "Abra Claude Code en `motion-curso` y pida: «Hacé una animación de prueba de 5 segundos: un círculo rojo que cruza la pantalla. Seguí CLAUDE.md.» Abra con doble clic el HTML que escribe. Si el círculo se mueve, todo funciona.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El pedido se escribe en Claude Code; Claude crea `prueba.html`; con doble clic se abre en Chrome y el círculo rojo cruza la pantalla."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code, dentro de motion-curso",
            "texto": "Hacé una animación de prueba de 5 segundos: un círculo rojo que cruza la pantalla. Seguí CLAUDE.md."
          }
        ]
      },
      {
        "n": "0.10",
        "titulo": "Si algo falla",
        "cuerpo": "Los errores típicos: comando de PowerShell en CMD o al revés; terminal vieja que no ve lo instalado; cuenta gratis; `npm` bloqueado en PowerShell (`Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`); la animación quieta.\n\n| Lo que aparece | Qué pasa | Solución |\n| 'irm' no se reconoce… | Está en CMD, no en PowerShell | Abrir PowerShell, o usar el comando de CMD de la página oficial |\n| The token '&&' is not a valid statement separator | Está en PowerShell con el comando de CMD | Usar el de PowerShell |\n| claude: command not found (o «no se reconoce») | La carpeta de Claude Code todavía no está en el PATH | Cerrar y abrir la terminal; si sigue, la guía «Fix your PATH» de la página oficial |\n| Claude Code dice que el plan no incluye Claude Code | Cuenta gratis | Pasar a Pro o superior |\n| npm : … la ejecución de scripts está deshabilitada (Windows) | La política de PowerShell bloquea `npm.ps1` | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` y abrir otra terminal (o usar Git Bash) |\n| ffmpeg no se encuentra justo después de instalarlo | winget cambió el PATH en otra sesión | Cerrar y abrir la terminal |\n| La animación no se mueve al abrir el HTML | El HTML carga GSAP de internet y no hay conexión, o Claude no siguió la regla de `seek` | Revisar la conexión; pedirle a Claude «revisá que la animación arranque sola y exponga seek y DURATION» |",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La tabla de errores típicos de la instalación, con lo que aparece, qué pasa y cómo se arregla."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows, si PowerShell bloquea npm",
            "lenguaje": "powershell",
            "texto": "Set-ExecutionPolicy -Scope CurrentUser RemoteSigned"
          }
        ]
      },
      {
        "n": "0.11",
        "titulo": "Listo",
        "cuerpo": "Ya tiene todo. En la próxima lección le pide algo de verdad: un título con su nombre.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa en capa sobre el círculo rojo, que sigue cruzando; lo sigue con la mirada y festeja.",
          "dice": "Eso que se mueve lo escribió Claude. En la próxima lección le pedimos algo de verdad: un título con su nombre."
        }
      }
    ]
  },
  {
    "n": 1,
    "slug": "1-pedir-una-animacion",
    "titulo": "Le pide una animación y recibe código que se mueve",
    "objetivo": "Entender que una animación es código y que se corrige hablando, con su primer título animado.",
    "resultado": "`titulo.html` con su nombre, corregido dos veces en palabras.",
    "laminas": [
      {
        "n": "1.1",
        "titulo": "Hecho en una frase",
        "cuerpo": "Este título no lo animó nadie: se pidió a Claude en una frase. En esta lección usted hace el suyo, con su nombre, y lo corrige sin tocar código.",
        "apoyo": {
          "tipo": "motion",
          "conChispa": true,
          "segundos": 20,
          "seVe": "Un título rojo sobre negro, «HECHO EN UNA FRASE», que entra letra por letra; después aparece Chispa en capa, chiquita abajo a la izquierda, mirando el título que se repite.",
          "dice": "En esta lección usted va a hacer lo mismo con su nombre. Y lo va a corregir sin tocar código: diciéndole a Claude qué cambiar."
        }
      },
      {
        "n": "1.2",
        "titulo": "Qué le devuelve Claude",
        "cuerpo": "Un archivo **HTML**: una página web que se mueve. Por dentro usa **GSAP**, una biblioteca de animación gratuita. Le pedimos una sola regla: que la animación diga cuánto dura (`DURATION`) y que se pueda llevar a cualquier segundo (`seek(t)`). Con eso, en la lección 3 se convierte en video sin perder cuadros.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "El recorrido: su pedido → Claude → `titulo.html` → el navegador; abajo, las dos reglas: `DURATION` y `seek(t)`."
        }
      },
      {
        "n": "1.3",
        "titulo": "Pedir el título",
        "cuerpo": "Copie el pedido de abajo y cambie lo que está entre corchetes. Cuanto más concreto (duración, tamaño, fondo, texto y cómo entra), mejor el primer intento. Abra el archivo con doble clic.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "Claude Code en la carpeta `motion-curso`: el pedido se escribe, con las etiquetas «duración», «tamaño», «texto» y «cómo entra» sobre cada parte; Claude crea `titulo.html` (la respuesta, acelerada) y Chrome lo muestra."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "Cambie lo que está entre corchetes",
            "texto": "Hacé un título animado de [6] segundos, [1920 por 1080], fondo [negro], que diga [MARÍA LÓPEZ · FOTOGRAFÍA]. Que las letras entren de abajo de a una y al final quede quieto 1 segundo."
          }
        ]
      },
      {
        "n": "1.4",
        "titulo": "Corregir en palabras",
        "cuerpo": "No hace falta saber qué línea cambiar: diga lo que ve y lo que quiere. Ejemplos: «Más lento: que tarde el doble en entrar». «Que FOTOGRAFÍA aparezca después, más chica, en gris claro». **Un cambio por pedido**, y recargue el navegador para ver cada uno.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "Las dos correcciones, con el navegador recargándose; el antes y el después de cada una.",
          "dice": "Dígale lo que ve y lo que quiere. Más lento. Que la segunda palabra entre después. Cada cambio tarda unos segundos.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "Corrección 1",
            "texto": "Más lento: que tarde el doble en entrar"
          },
          {
            "tipo": "pedido",
            "etiqueta": "Corrección 2",
            "texto": "Que FOTOGRAFÍA aparezca después, más chica, en gris claro"
          }
        ]
      },
      {
        "n": "1.5",
        "titulo": "Así lo hacemos en Vion",
        "cuerpo": "En el estudio de Vion el pedido va tal cual a Claude, vuelve una animación y **cada cambio queda como una versión nueva**, para volver atrás si no gusta. Usted puede hacer lo mismo guardando una copia del HTML antes de cada cambio grande.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "Ultron en modo demo: la sala de motion con una animación, sus versiones y un cambio pedido en palabras."
        }
      },
      {
        "n": "1.6",
        "titulo": "Tres consejos",
        "cuerpo": "1. Diga siempre la duración y el tamaño.\n2. Pida un cambio a la vez.\n3. Cuando algo le guste, guarde una copia antes de seguir (`titulo-v1.html`).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Los tres consejos de la lección en una lámina."
        }
      },
      {
        "n": "1.7",
        "titulo": "Lo que tiene",
        "cuerpo": "Un título que se mueve, hecho y corregido por usted. Le falta su marca: es la próxima lección.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 10,
          "seVe": "Chispa en plano medio.",
          "dice": "Ya tiene un título que se mueve. Pero todavía no tiene su marca. Eso es la próxima lección."
        }
      }
    ]
  },
  {
    "n": 2,
    "slug": "2-prompt-de-estilo",
    "titulo": "El prompt de estilo: su guía de marca en texto",
    "objetivo": "Escribir su prompt de estilo (`ESTILO.md`) y aprender las leyes del movimiento para que nada parezca PowerPoint.",
    "resultado": "El título de la lección 1 rehecho con su marca, al lado de la versión vieja.",
    "laminas": [
      {
        "n": "2.1",
        "titulo": "Se mueve, pero parece PowerPoint",
        "cuerpo": "Esto es lo que sale casi siempre cuando no se le dice nada a la IA: textos que aparecen y desaparecen con un fundido, todo centrado, el fondo quieto. Se mueve, pero parece una presentación.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 10,
          "seVe": "Una animación con cara de presentación, hecha así a propósito; al final, una cruz roja la tacha."
        }
      },
      {
        "n": "2.2",
        "titulo": "Dos textos lo arreglan",
        "cuerpo": "Uno con **su marca** (colores, letra, tono) y otro con **las reglas del movimiento**. Los escribe una vez y valen para todo lo que pida después.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa en plano de cara.",
          "dice": "La solución son dos textos. Uno con su marca: colores, letras y tono. Y otro con las reglas de cómo se mueve un video de verdad. Se escriben una vez."
        }
      },
      {
        "n": "2.3",
        "titulo": "El prompt de estilo",
        "cuerpo": "Abra `ESTILO.md` del kit y llénelo: **colores** con nombre, código y uso (fondo, acento, texto); **letra** y peso; **tono del movimiento**; y **nunca** (lo que no quiere ver). Regla de oro: el color de acento es solo acento, nunca el fondo entero. El ejemplo completo está en el bloque de abajo.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Un `ESTILO.md` lleno y, al lado, los colores y la letra de la guía de marca de Vion."
        },
        "bloques": [
          {
            "tipo": "archivo",
            "etiqueta": "ESTILO.md (ejemplo)",
            "lenguaje": "markdown",
            "texto": "# Estilo de [MARCA]\n## Colores\n- fondo: #0b0b0c (base) · alterno: #f2efe9\n- acento: #e8341c (solo una forma o una o dos palabras; nunca el fondo entero)\n- texto: #fafafa sobre oscuro, #0b0b0c sobre claro\n## Letra\n- Títulos: [Geist] 800, mayúsculas, a la izquierda. Cuerpo: 400.\n## Tono del movimiento\n- [Seguro y editorial]: entradas de 0,7 a 1,3 s, salidas rápidas, una idea por toma.\n## Nunca\n- Fundidos de diapositiva, texto gris sobre color, más de 6 palabras por toma, logos de otros."
          }
        ]
      },
      {
        "n": "2.4",
        "titulo": "Las leyes del movimiento",
        "cuerpo": "Vienen del skill abierto **bang-motion** (Bang Tutorial, MIT):\n\n1. Una idea por toma.\n2. La cámara cambia de plano (se acerca, se aleja).\n3. El fondo nunca está quieto.\n4. Las transiciones cambian de una toma a otra.\n5. Lo que entra, entra con calma (0,7 a 1,3 s); lo que sale, sale rápido.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 40,
          "seVe": "Cinco tomas muy cortas, una por ley, cada una con su número grande.",
          "dice": "Una idea por toma. La cámara se acerca y se aleja, como en un video. El fondo nunca se queda quieto. Las transiciones cambian. Y lo que entra, entra con calma; lo que sale, sale rápido.",
          "vozEnOff": true
        }
      },
      {
        "n": "2.5",
        "titulo": "Rehacer el título",
        "cuerpo": "Pida: «Rehacé titulo.html siguiendo ESTILO.md y las leyes de bang-motion. Guardalo como titulo-marca.html.» Compare los dos lado a lado.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El pedido en Claude Code y la pantalla dividida con la versión vieja y la nueva reproduciéndose a la vez, con los rótulos «ANTES» y «DESPUÉS»."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "Rehacé titulo.html siguiendo ESTILO.md y las leyes de bang-motion. Guardalo como titulo-marca.html."
          }
        ]
      },
      {
        "n": "2.6",
        "titulo": "¿No tiene marca todavía?",
        "cuerpo": "El repositorio abierto **lemo-opuscar** ([github.com/lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar), MIT) trae 66 recetas de estilo escritas para animaciones por código: color, letra, movimiento, cámara y errores típicos. Elija una y úsela como base de su `ESTILO.md`.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Una receta de estilo `STYLE.md` de lemo-opuscar, con su color, letra, movimiento y cámara."
        }
      },
      {
        "n": "2.7",
        "titulo": "Escríbalo una vez",
        "cuerpo": "Guarde `ESTILO.md` en la carpeta del curso. Desde ahora, cada pedido lo usa.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "El texto grande «ESCRÍBALO UNA VEZ» sobre un cuadro del título nuevo."
        }
      }
    ]
  },
  {
    "n": 3,
    "slug": "3-del-html-al-mp4",
    "titulo": "Del HTML al MP4",
    "objetivo": "Convertir la animación en un video MP4 que se sube a cualquier red, sin perder cuadros, y hacer su corte vertical.",
    "resultado": "`titulo.mp4` a 1920×1080 y 30 cuadros por segundo, y su versión vertical.",
    "laminas": [
      {
        "n": "3.1",
        "titulo": "Una página no se sube a Instagram",
        "cuerpo": "Necesitamos un archivo de video. Y hay una forma de hacerlo sin perder ni un cuadro.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa en capa delante de un navegador con el título; intenta «agarrar» la página y no puede.",
          "dice": "Una página web no se sube a Instagram. Necesitamos un video. Y hay una forma de hacerlo sin perder ni un cuadro."
        }
      },
      {
        "n": "3.2",
        "titulo": "Cuadro por cuadro",
        "cuerpo": "Grabar la pantalla sirve, pero se saltan cuadros. Lo que hacemos: abrir la página en un Chrome invisible, llevarla al segundo 0, sacar una foto, avanzar 1/30 de segundo, otra foto… hasta el final. **ffmpeg** une las fotos en un MP4. Por eso pedimos `seek(t)`.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "Un reloj que avanza de a 1/30 de segundo; en cada tic, `seek(t)` → una foto → la pila de fotos → ffmpeg → el MP4.",
          "dice": "Abrimos la página en un Chrome invisible, la llevamos a cada instante, sacamos una foto, y ffmpeg une las fotos en un video. Ni un cuadro perdido.",
          "vozEnOff": true
        }
      },
      {
        "n": "3.3",
        "titulo": "El script `a-mp4`",
        "cuerpo": "En la carpeta del curso: `node a-mp4.mjs titulo-marca.html titulo.mp4`. Va contando los cuadros. Al terminar, abra el MP4 con cualquier reproductor. Opciones: `--fps 30` y `--audio voz.m4a` (lección 6).\n\n`a-mp4.mjs` viene en el kit: es un script chico escrito para el curso que abre la página, pide cada cuadro con `seek` y se lo pasa a ffmpeg.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El comando en la terminal, el contador de cuadros avanzando (acelerado) y el MP4 abierto en un reproductor."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Dentro de motion-curso",
            "texto": "node a-mp4.mjs titulo-marca.html titulo.mp4"
          }
        ]
      },
      {
        "n": "3.4",
        "titulo": "Vertical para reels",
        "cuerpo": "No recorte el video horizontal: pida una versión nueva. «Hacé una versión vertical de 1080 por 1920 de titulo-marca.html, sin cortar el texto.» Después, `node a-mp4.mjs titulo-vertical.html titulo-vertical.mp4`.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Los cuadros finales de las dos versiones lado a lado: la horizontal y la vertical."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "Hacé una versión vertical de 1080 por 1920 de titulo-marca.html, sin cortar el texto."
          },
          {
            "tipo": "comando",
            "etiqueta": "Después, a MP4",
            "texto": "node a-mp4.mjs titulo-vertical.html titulo-vertical.mp4"
          }
        ]
      },
      {
        "n": "3.5",
        "titulo": "Compruebe antes de subir",
        "cuerpo": "Pídale a Claude: «Revisá titulo.mp4 con ffprobe: duración, tamaño, cuadros por segundo, y si hay cuadros negros». Tiene que decir 6 s, 1920×1080, 30.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La respuesta de Claude con la duración, el tamaño y los cuadros por segundo del MP4, y una tira de cuadros del video."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "Revisá titulo.mp4 con ffprobe: duración, tamaño, cuadros por segundo, y si hay cuadros negros"
          }
        ]
      },
      {
        "n": "3.6",
        "titulo": "Otros caminos",
        "cuerpo": "- **Remotion** (lección 4).\n- **HyperFrames** ([github.com/heygen-com/hyperframes](https://github.com/heygen-com/hyperframes), Apache-2.0, gratis para cualquier empresa): hace lo mismo desde HTML; existe y es abierto, pero **en Vion no lo usamos**, así que no lo enseñamos.\n- **Grabar la pantalla** (OBS o similar): rápido, pero puede perder cuadros.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Tres tarjetas, una por camino: Remotion, HyperFrames y grabar la pantalla."
        }
      },
      {
        "n": "3.7",
        "titulo": "Su primer video",
        "cuerpo": "Este es el resultado: un MP4 con su marca, listo para cualquier red.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 6,
          "seVe": "El `titulo.mp4` de ejemplo del kit a pantalla completa."
        }
      }
    ]
  },
  {
    "n": 4,
    "slug": "4-remotion",
    "titulo": "Remotion: cuando quiere repetirlo",
    "objetivo": "Saber cuándo conviene Remotion y hacer una tarjeta de oferta como plantilla, con datos que cambian en cada video.",
    "resultado": "Un proyecto de Remotion con la tarjeta de oferta y tres versiones en MP4 salidas de la misma plantilla.",
    "laminas": [
      {
        "n": "4.1",
        "titulo": "Tres videos, una plantilla",
        "cuerpo": "Cambian solo los datos: el producto, el precio y el color.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 10,
          "seVe": "Tres tarjetas de oferta distintas, hechas con la misma plantilla, que caen una sobre otra."
        }
      },
      {
        "n": "4.2",
        "titulo": "¿HTML o Remotion?",
        "cuerpo": "**HTML:** lo que se hace una vez. **Remotion:** lo que se repite con otros datos (la tarjeta de cada producto, el video de cada cliente). En Remotion el video es una plantilla de React y los datos van en un archivo aparte.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 25,
          "seVe": "Chispa en plano medio.",
          "dice": "Cuando una animación se hace una vez, alcanza con el HTML. Pero si mañana necesita la misma tarjeta con otro producto, y pasado otra, conviene Remotion: un proyecto donde el video es una plantilla y los datos van aparte."
        }
      },
      {
        "n": "4.3",
        "titulo": "La licencia, antes de empezar",
        "cuerpo": "Remotion es **gratis** para personas, empresas de **hasta 3 empleados**, organizaciones sin fines de lucro y para evaluarlo. Si su empresa es más grande: **USD 25 por puesto al mes** (quien crea a mano) o **USD 0,01 por render con un mínimo de USD 100 al mes** (quien automatiza). Fuentes: [LICENSE.md de Remotion](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md) y [remotion.pro/license](https://www.remotion.pro/license).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tabla con la licencia de Remotion: gratis hasta 3 empleados y, arriba de eso, por puesto o por render."
        }
      },
      {
        "n": "4.4",
        "titulo": "Crear el proyecto",
        "cuerpo": "1. `npx create-video --yes --blank oferta`\n2. `cd oferta`\n3. `npx remotion skills add` (las skills oficiales de Remotion para Claude; son textos: léalos)\n4. `npm run dev` abre **Remotion Studio**.\n\nEn otra terminal, dentro de `oferta`: `claude`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "Los cuatro comandos, cada uno con su etiqueta; Remotion Studio abriéndose en el navegador y una segunda terminal con Claude Code."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "1. Crear el proyecto",
            "texto": "npx create-video --yes --blank oferta"
          },
          {
            "tipo": "comando",
            "etiqueta": "2. Entrar",
            "texto": "cd oferta"
          },
          {
            "tipo": "comando",
            "etiqueta": "3. Las skills de Remotion (léalas antes de usarlas)",
            "texto": "npx remotion skills add"
          },
          {
            "tipo": "comando",
            "etiqueta": "4. Abrir Remotion Studio",
            "texto": "npm run dev"
          },
          {
            "tipo": "comando",
            "etiqueta": "En otra terminal, dentro de oferta",
            "texto": "claude"
          }
        ]
      },
      {
        "n": "4.5",
        "titulo": "Pedir la tarjeta como plantilla",
        "cuerpo": "«Hacé una composición Oferta de 8 segundos, 1080 por 1920, con props titulo, precio, detalle y boton, con el estilo de ../ESTILO.md.» El Studio se actualiza solo. Cambie el precio en el panel de props y mire cómo se acomoda.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "El pedido en Claude Code, Remotion Studio actualizándose solo y el precio cambiado a mano en el panel de props.",
          "dice": "Pida la tarjeta como plantilla: los textos son datos. Cambie el precio en el panel y mire cómo se acomoda.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code, dentro de oferta",
            "texto": "Hacé una composición Oferta de 8 segundos, 1080 por 1920, con props titulo, precio, detalle y boton, con el estilo de ../ESTILO.md."
          }
        ]
      },
      {
        "n": "4.6",
        "titulo": "Un archivo de datos, un video",
        "cuerpo": "Guarde los datos en `datos/a.json`, `b.json`, `c.json` y: `npx remotion render Oferta salida/a.mp4 --props=datos/a.json`. Remotion trae su propio Chrome y su propio ffmpeg para el render.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "Tres renders seguidos (acelerados) y los tres MP4 en la carpeta."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Uno por archivo de datos (después, b y c)",
            "texto": "npx remotion render Oferta salida/a.mp4 --props=datos/a.json"
          }
        ]
      },
      {
        "n": "4.7",
        "titulo": "Así en Vion",
        "cuerpo": "Las pizarras, los chats, las listas y las tarjetas de los reels de Vion son plantillas de Remotion: se llenan con datos y se dibujan en segundos, sin gastar en IA.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Ultron en modo demo: las plantillas de motion del estudio de Vion y un reel que las usa."
        }
      },
      {
        "n": "4.8",
        "titulo": "La regla",
        "cuerpo": "HTML para lo que se hace una vez. Remotion para lo que se repite.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 8,
          "seVe": "Chispa en capa sobre una tarjeta de oferta.",
          "dice": "HTML para lo que se hace una vez. Remotion para lo que se repite."
        }
      }
    ]
  },
  {
    "n": 5,
    "slug": "5-plantillas",
    "titulo": "Plantillas que se reusan",
    "objetivo": "Convertir lo que funcionó en plantillas y en una skill propia, para que un pedido de una línea ya salga con su marca.",
    "resultado": "Su skill `mi-motion` y tres plantillas con sus datos aparte: un pedido de una línea ya sale con la marca y las reglas.",
    "laminas": [
      {
        "n": "5.1",
        "titulo": "¿Cuántas veces lo explicó?",
        "cuerpo": "Si ya le explicó a Claude más de una vez sus colores, su letra y que no quiere fundidos, necesita una skill.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 10,
          "seVe": "La pregunta «¿CUÁNTAS VECES LE EXPLICÓ SU MARCA A CLAUDE?» y un contador que sube."
        }
      },
      {
        "n": "5.2",
        "titulo": "La skill `mi-motion`",
        "cuerpo": "Está en `.claude/skills/mi-motion/SKILL.md`. Arriba, **cuándo usarla** (`description`: cuando le pidan una animación). Abajo, **las reglas**: leer `ESTILO.md` y `plantillas.md`; un solo HTML con `DURATION` y `seek(t)`; revisar la lista anti-PPT antes de entregar; decir cómo pasarla a MP4. Ábrala y cámbiela a su gusto. El texto completo está en el bloque de abajo.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El `SKILL.md` de `mi-motion` con sus partes señaladas: la descripción arriba y las reglas abajo."
        },
        "bloques": [
          {
            "tipo": "archivo",
            "etiqueta": ".claude/skills/mi-motion/SKILL.md",
            "lenguaje": "markdown",
            "texto": "---\nname: mi-motion\ndescription: Hacer o corregir una animación de motion (título, explicador, tarjeta, intro) como HTML que se pasa a MP4. Usar cada vez que se pida una animación, un título animado, un explicador o una tarjeta para video.\n---\n1. Leé ESTILO.md y plantillas.md. Si una plantilla sirve, usala con los datos nuevos.\n2. Un solo HTML con window.DURATION y window.seek(t) (ver CLAUDE.md).\n3. Antes de entregar, revisá revision-anti-ppt.md punto por punto y corregí lo que falle.\n4. Decí cómo pasarlo a video: node a-mp4.mjs <archivo>.html <salida>.mp4"
          }
        ]
      },
      {
        "n": "5.3",
        "titulo": "La diferencia",
        "cuerpo": "Un pedido corto, sin explicar nada: «Tarjeta de 8 s: 20 % en sesiones de fotos hasta el viernes». Sale con su marca y con las reglas.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El pedido de una línea y el resultado, ya con la marca."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "Tarjeta de 8 s: 20 % en sesiones de fotos hasta el viernes"
          }
        ]
      },
      {
        "n": "5.4",
        "titulo": "Guardar plantillas",
        "cuerpo": "Cuando algo le sale bien, pida: «Convertí titulo-marca.html en plantilla: el diseño fijo y los textos como datos al principio del archivo». En Vion hay seis plantillas así (pizarra, chat, claude_code, lista, oferta, girar), y con ellas se arma casi todo el motion de un reel.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Las tres plantillas del alumno como tarjetas con sus «huecos» para los datos; al lado, las seis plantillas de Vion con su nombre.",
          "dice": "Cuando algo le sale bien, conviértalo en plantilla: el diseño queda fijo y los textos pasan a ser datos. Nosotros tenemos seis y con ellas armamos casi todo.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "Convertí titulo-marca.html en plantilla: el diseño fijo y los textos como datos al principio del archivo"
          }
        ]
      },
      {
        "n": "5.5",
        "titulo": "Su catálogo",
        "cuerpo": "En `plantillas.md` anote cada plantilla: **nombre · datos que lleva · para qué sirve · ejemplo**. Así Claude elige la correcta en lugar de inventar una nueva.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Un `plantillas.md` lleno, con el nombre, los datos, para qué sirve y un ejemplo de cada plantilla."
        }
      },
      {
        "n": "5.6",
        "titulo": "Escríbalo una vez",
        "cuerpo": "Una skill y un catálogo: lo explicó una vez y lo usa siempre.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 12,
          "seVe": "Chispa repite, cansada, «colores, letra, sin fundidos…»; corte; se relaja.",
          "dice": "Colores, letra, sin fundidos… Colores, letra… No. Escríbalo una vez. Úselo siempre."
        }
      }
    ]
  },
  {
    "n": 6,
    "slug": "6-ritmo-y-sonido",
    "titulo": "Ritmo y sonido",
    "objetivo": "Hacer que la animación respire con una voz y suene, con sonidos hechos por código y sin música de terceros.",
    "resultado": "Una animación de 15 s atada a una voz, cuyos textos entran en la palabra justa, con sonidos hechos por código.",
    "laminas": [
      {
        "n": "6.1",
        "titulo": "La misma animación, dos veces",
        "cuerpo": "La segunda se siente mejor porque cada cosa entra en su momento y suena.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "La misma animación dos veces: primero muda y a destiempo; después con sonido y a tiempo."
        }
      },
      {
        "n": "6.2",
        "titulo": "Tres reglas de ritmo",
        "cuerpo": "1. Lo que entra tarda de 0,7 a 1,3 s; lo que sale, la mitad.\n2. Nunca más de 2 s sin que algo cambie en pantalla.\n3. Cada texto entra **cuando la voz lo dice**, ni antes ni después.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "Una línea de tiempo con la onda de una voz; los textos caen en cada palabra, con las marcas «0,7 a 1,3 s», «salida rápida» y «máx. 2 s quieto».",
          "dice": "Lo que entra, con calma; lo que sale, rápido. Nunca dos segundos quietos. Y cada texto, cuando la voz lo dice.",
          "vozEnOff": true
        }
      },
      {
        "n": "6.3",
        "titulo": "Atar la animación a la voz",
        "cuerpo": "Grabe su voz (15 s, con el celular sirve). Escúchela y anote en `tiempos.txt` el segundo de cada frase: `0.0 Esto es nuevo` · `2.4 Tres pasos` · … Pida: «Ataná cada texto de la animación a tiempos.txt».",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El archivo de tiempos, el pedido y la animación con la voz de ejemplo sonando y los textos en su lugar."
        },
        "bloques": [
          {
            "tipo": "codigo",
            "etiqueta": "tiempos.txt (el principio del ejemplo)",
            "lenguaje": "text",
            "texto": "0.0 Esto es nuevo\n2.4 Tres pasos"
          },
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "Ataná cada texto de la animación a tiempos.txt"
          }
        ]
      },
      {
        "n": "6.4",
        "titulo": "Sonido hecho por código",
        "cuerpo": "El navegador sabe fabricar golpes, barridos y clics (Web Audio). Así no hay música de nadie y cada sonido cae justo. Pida: «Sumá sonidos con Web Audio: un golpe suave cuando entra cada texto y un barrido en la transición. Que se pueda exportar a sonidos.wav con la misma duración».",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El pedido, la animación sonando y la forma de onda de `sonidos.wav`.",
          "dice": "El sonido también puede ser código. Sin derechos de nadie, y cada golpe en su cuadro.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "Sumá sonidos con Web Audio: un golpe suave cuando entra cada texto y un barrido en la transición. Que se pueda exportar a sonidos.wav con la misma duración"
          }
        ]
      },
      {
        "n": "6.5",
        "titulo": "Al MP4, con voz y sonidos",
        "cuerpo": "Mezcle la voz y los sonidos (pídaselo a Claude con ffmpeg) y: `node a-mp4.mjs animacion.html final.mp4 --audio mezcla.m4a`. En Remotion, la voz es un elemento `<Audio>` dentro de la composición.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El comando con la opción `--audio` y el video final en un reproductor."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Dentro de motion-curso",
            "texto": "node a-mp4.mjs animacion.html final.mp4 --audio mezcla.m4a"
          }
        ]
      },
      {
        "n": "6.6",
        "titulo": "Cuando falta, se nota",
        "cuerpo": "El ritmo no se nota cuando está bien. Se nota cuando falta.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 8,
          "seVe": "Chispa en capa entra con un golpe de sonido justo cuando habla.",
          "dice": "El ritmo no se nota cuando está bien. Se nota cuando falta."
        }
      }
    ]
  },
  {
    "n": 7,
    "slug": "7-explicador-completo",
    "titulo": "Un explicador completo",
    "objetivo": "Juntar todo en un explicador de 30 a 45 segundos, con su título y su tarjeta de oferta, revisado con la lista anti-PPT.",
    "resultado": "Las tres animaciones (título, explicador y tarjeta) terminadas, revisadas y en MP4.",
    "laminas": [
      {
        "n": "7.1",
        "titulo": "Esto es un explicador",
        "cuerpo": "Un tema, tres pasos y una acción al final. Mírelo entero antes de seguir.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 40,
          "seVe": "El explicador de ejemplo del kit, entero, con una voz de ejemplo."
        }
      },
      {
        "n": "7.2",
        "titulo": "Lo más útil que puede hacer",
        "cuerpo": "Con un explicador usted muestra cómo funciona su producto o su servicio, en menos de un minuto.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa en plano general.",
          "dice": "Eso es un explicador: un tema, tres pasos y una acción al final. Es lo más útil que puede hacer con lo que aprendió, y es lo que vamos a armar ahora."
        }
      },
      {
        "n": "7.3",
        "titulo": "La estructura de partida",
        "cuerpo": "1. **El gancho:** el resultado primero, no una introducción.\n2. **El mapa:** cuántos pasos son.\n3. **Los pasos:** muéstrelos, no los cuente.\n4. **El resultado.**\n5. **Una sola acción** al final.\n\nEs un punto de partida: cámbielo cuando el tema lo pida.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Una pizarra con los cinco puntos de la estructura, que entran uno a uno."
        }
      },
      {
        "n": "7.4",
        "titulo": "Primero el guion",
        "cuerpo": "Escriba 5 líneas cortas con el segundo, lo que se dice y lo que se ve: `0 s · «Su web en una tarde» · el sitio terminado` … Guárdelo en `guion.md`.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Un `guion.md` de ejemplo, con cinco líneas: el segundo, lo que se dice y lo que se ve."
        }
      },
      {
        "n": "7.5",
        "titulo": "Pedirlo",
        "cuerpo": "«Hacé el explicador de guion.md con la skill mi-motion, 1920 por 1080, con mi voz voz.m4a y tiempos.txt». El primer intento casi nunca es el final.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "El pedido en Claude Code y el primer HTML del explicador."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "Hacé el explicador de guion.md con la skill mi-motion, 1920 por 1080, con mi voz voz.m4a y tiempos.txt"
          }
        ]
      },
      {
        "n": "7.6",
        "titulo": "Revisar con la lista",
        "cuerpo": "Abra `revision-anti-ppt.md` (viene en el kit; está en el bloque de abajo): ¿más de una idea por toma? ¿algo quieto más de 2 s? ¿textos de más de 6 palabras? ¿la cámara cambia de plano? Cada «sí» es un pedido de cambio, uno por vez.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "Tres correcciones: «el paso dos tiene demasiado texto», «la cámara está quieta en el segundo 12» y «el cierre necesita el botón», con el antes y el después de cada una.",
          "dice": "Cada respuesta de la lista es un pedido de cambio. Así se pasa de bien a muy bien.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "archivo",
            "etiqueta": "revision-anti-ppt.md (viene en el kit)",
            "lenguaje": "markdown",
            "texto": "# Revisión anti-PPT (basada en las leyes de bang-motion, de Bang Tutorial, licencia MIT)\n- ¿Más de una idea por toma?\n- ¿Hay 3 o más escenas que solo aparecen y desaparecen con un fundido?\n- ¿Algo queda quieto más de 2 s?\n- ¿Algún texto de más de 6 palabras fuera de una pantalla de app?\n- ¿La cámara cambia de plano?\n- ¿Las transiciones varían?\n- ¿Hay 1 o 2 momentos especiales, no 10?"
          }
        ]
      },
      {
        "n": "7.7",
        "titulo": "Sus tres videos",
        "cuerpo": "Pase a MP4 el título, el explicador y la tarjeta. Esos tres archivos son lo que se lleva de este curso.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Los tres MP4 de ejemplo (título, explicador y tarjeta), uno tras otro, rápido, con música."
        }
      },
      {
        "n": "7.8",
        "titulo": "¿Y ahora?",
        "cuerpo": "Si quiere compartir lo que hizo, o que le ayudemos con el suyo, la comunidad de Vion está abierta: el enlace está abajo.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa en capa sobre la tarjeta de oferta final; señala el botón.",
          "dice": "Si quiere compartir lo que hizo, o que le ayudemos con el suyo, la comunidad de Vion está abierta. El enlace, abajo."
        }
      }
    ]
  }
];
