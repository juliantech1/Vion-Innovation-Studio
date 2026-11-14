// Las lecciones de «B1-motion», lámina por lámina, desde el storyboard de la aldea
// (docs/planes/cursos/B1-motion.md, 2026-11-10). Texto completo de cada lámina; los videos e imágenes van en ../medios.json.
import type { LeccionCurso } from '../../tipos';

export const lecciones: LeccionCurso[] = [
  {
    "n": 0,
    "slug": "0-puesta-a-punto",
    "titulo": "Puesta a punto: Claude Code, Node, ffmpeg y las skills",
    "objetivo": "Dejar todo instalado y comprobado: la cuenta de Claude, cinco programas y dos skills, en Windows, Mac o Linux.",
    "resultado": "Todo instalado y una animación de prueba moviéndose en el navegador, pedida a Claude Code.",
    "laminas": [
      {
        "n": "0.1",
        "titulo": "Antes de animar",
        "cuerpo": "Antes de animar hay que dejar la computadora lista. En esta lección instala unos pocos programas gratis, prepara la carpeta del curso y, al final, le pide a Claude Code su primera animación: un círculo que cruza la pantalla. Si se mueve, ya está todo funcionando.",
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
        "cuerpo": "Esto es todo lo que va a necesitar:\n\n1. Una cuenta de Claude con plan pago (Pro o superior).\n2. Git para Windows (solo si usa Windows).\n3. **Claude Code**: el asistente de Claude que trabaja en su computadora.\n4. **Node.js**: el programa que corre los pequeños programas del curso.\n5. **ffmpeg**: el programa que arma los videos.\n6. Google Chrome.\n7. La carpeta del curso (el kit).\n8. Dos skills: `bang-motion` y `mi-motion`.\n\n**Todo es gratis menos la cuenta**: Claude Code no viene en el plan gratis de Claude.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "La lista de nueve puntos entra de a uno y se tilda, con sonido de tildes; el punto 1 queda en rojo con la palabra «PAGO»."
        }
      },
      {
        "n": "0.3",
        "titulo": "La cuenta de Claude",
        "cuerpo": "Claude Code necesita un plan **Pro** (USD 20 al mes, o USD 17 al mes pagando el año), **Max** (USD 100) o **Ultra** (USD 200). Con Pro alcanza para todo el curso. Si hace muchos pedidos largos seguidos, el plan puede pedirle que espere antes de seguir. Los planes están en [claude.com/pricing](https://claude.com/pricing).",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La página de planes de claude.com/pricing, con Pro, Max y Ultra."
        }
      },
      {
        "n": "0.4",
        "titulo": "Git para Windows (solo Windows)",
        "cuerpo": "Si usa Windows, instale Git desde [git-scm.com/downloads/win](https://git-scm.com/downloads/win), aceptando todo lo que viene marcado. Git es un programa para guardar versiones de archivos; Claude Code lo usa por dentro para correr comandos. En Mac y Linux no hace falta.\n\nPara comprobar que quedó instalado, abra la **terminal** (la ventana donde se escriben comandos: en Windows se llama PowerShell) y escriba `git --version`. Si responde con un número de versión, está.",
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
        "cuerpo": "Claude Code se instala con un solo comando en la terminal:\n\n- **Windows:** abra PowerShell y escriba `winget install Anthropic.ClaudeCode`. winget es el instalador de programas que trae Windows.\n- **Mac:** abra Terminal y escriba `brew install --cask claude-code` (necesita Homebrew, de [brew.sh](https://brew.sh)).\n\nCuando termine, **cierre la terminal y ábrala de nuevo**, para que encuentre el programa nuevo. Escriba `claude --version`: si aparece un número, está instalado. `claude doctor` revisa la instalación.\n\nPara entrar, escriba `claude`. La primera vez le pregunta cómo quiere ver el texto y con qué cuenta entrar: elija la cuenta con suscripción y acepte en el navegador.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "PowerShell instala Claude Code con winget; el Terminal de Mac, con Homebrew; después claude --version, claude doctor y la primera vez de claude, con la elección de la cuenta."
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
            "etiqueta": "Linux, en Terminal",
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
            "etiqueta": "Entrar",
            "texto": "claude"
          }
        ]
      },
      {
        "n": "0.6",
        "titulo": "Node.js y ffmpeg",
        "cuerpo": "**Node.js** corre los programas pequeños del curso, como el que pasa una animación a video. **ffmpeg** es el que arma el video al final. Los dos son gratis.\n\n- **Node.js:** en [nodejs.org](https://nodejs.org) el botón «Obtener Node.js®» baja la versión marcada **LTS** (la estable; hoy, la v26.13.1). También se instala con `winget install OpenJS.NodeJS.LTS` en Windows o `brew install node` en Mac.\n- **ffmpeg:** `winget install Gyan.FFmpeg` en Windows, `brew install ffmpeg` en Mac o `sudo apt install ffmpeg` en Linux.\n\nCierre la terminal, ábrala de nuevo y compruebe con `node -v` y `ffmpeg -version`: cada uno responde con su versión. Si dice que no encuentra el comando, casi siempre es porque la terminal se abrió antes de instalar.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "nodejs.org con el botón «Obtener Node.js®» y la versión LTS; en PowerShell, winget instala Node.js y ffmpeg; en una terminal nueva, node -v y ffmpeg -version."
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
        "cuerpo": "Una **skill** es una carpeta con un archivo de texto llamado `SKILL.md`: un manual con instrucciones que Claude lee **solo cuando hace falta**. Arriba dice para qué sirve; abajo, las reglas.\n\nLas skills que valen para todos sus proyectos van en la carpeta `.claude/skills/` de su usuario. Las de un solo proyecto van en `.claude/skills/` dentro de ese proyecto. En este curso usa dos: `bang-motion`, con reglas para que el movimiento no parezca una presentación, y `mi-motion`, que viene en el kit.",
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
        "cuerpo": "1. Baje el kit del curso y descomprímalo en `Documentos/motion-curso`.\n2. Abra la terminal **dentro de esa carpeta** y escriba `npm install`. Instala Puppeteer, el programa que más adelante abre la animación en un Chrome invisible para pasarla a video. Termina con «added … packages».\n3. Baje la skill `bang-motion` en una carpeta aparte con `git clone`, y fíjela a la versión que revisamos con `git checkout` (los comandos están abajo).\n4. Copie esa carpeta a su carpeta de skills.\n5. `mi-motion` ya viene en el kit, en `motion-curso/.claude/skills/`.\n\nPara comprobar: entre a Claude Code en `motion-curso` (`claude`) y escriba `/`. En la lista tienen que aparecer `mi-motion` y `bang-motion`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "En la terminal: npm install, el clon de bang-motion fijado a su versión y la copia a la carpeta de skills; en Claude Code, la barra / muestra mi-motion y bang-motion."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Dentro de motion-curso",
            "texto": "npm install"
          },
          {
            "tipo": "comando",
            "etiqueta": "bang-motion, en la carpeta de al lado",
            "lenguaje": "bash",
            "texto": "cd ..\ngit clone https://github.com/bangtutorial/bang-motion\ncd bang-motion\ngit checkout c1aa65e921c970d858705fcb4a53a8294d1a4131\ncd .."
          },
          {
            "tipo": "comando",
            "etiqueta": "Copiarla a sus skills · Mac y Linux",
            "lenguaje": "bash",
            "texto": "cp -r bang-motion ~/.claude/skills/"
          },
          {
            "tipo": "comando",
            "etiqueta": "Copiarla a sus skills · Windows (PowerShell)",
            "lenguaje": "powershell",
            "texto": "New-Item -ItemType Directory -Force $HOME\\.claude\\skills\nCopy-Item -Recurse bang-motion $HOME\\.claude\\skills\\"
          },
          {
            "tipo": "comando",
            "etiqueta": "Comprobar: entrar y escribir /",
            "texto": "claude"
          }
        ]
      },
      {
        "n": "0.9",
        "titulo": "La prueba",
        "cuerpo": "Abra Claude Code dentro de `motion-curso` y pídale una animación de prueba (el pedido está abajo). Claude escribe un archivo **HTML**, que es una página web, y le dice cómo se llama: en la prueba fue `prueba-circulo.html`. Ábralo con doble clic: se abre en el navegador y el círculo rojo cruza la pantalla. Si se mueve, todo funciona.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El pedido en Claude Code; Claude escribe prueba-circulo.html y explica cuánto dura; en el navegador, el círculo rojo cruza la pantalla."
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
        "cuerpo": "Si algo no anda, casi siempre es uno de estos casos:\n\n| Lo que aparece | Qué pasa | Qué hacer |\n| «claude» o «node» no se reconoce como comando | La terminal se abrió antes de instalar | Cerrarla y abrir una nueva |\n| Claude Code dice que su plan no lo incluye | La cuenta es gratis | Pasar a Pro o superior |\n| npm: «la ejecución de scripts está deshabilitada» (Windows) | PowerShell bloquea los scripts de npm | Correr una vez el comando de abajo |\n| La animación se abre pero queda quieta | El archivo no tiene `DURATION` y `seek(t)`, o no cargó GSAP | Pedirle a Claude: «Seguí CLAUDE.md» |\n| `npm install` falla | No está Node.js, o no está dentro de `motion-curso` | `node -v`, y entrar a la carpeta con `cd` |",
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
        "cuerpo": "Ya tiene todo listo. En la próxima lección le pide algo de verdad: un título animado con su nombre.",
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
        "cuerpo": "Este título no lo animó nadie a mano: se le pidió a Claude en una frase. En esta lección usted hace el suyo, con su nombre, y lo corrige sin tocar código.",
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
        "cuerpo": "Claude le devuelve un archivo **HTML**: una página web que se mueve sola cuando la abre. Por dentro usa **GSAP**, una biblioteca de animación gratuita (un conjunto de herramientas que ya saben mover cosas).\n\nEl kit le pide a Claude una sola regla, escrita en `CLAUDE.md`: que la animación diga cuánto dura (`DURATION`) y que se pueda llevar a cualquier segundo (`seek(t)`). Gracias a eso, en la lección 3 se puede convertir en video sin perder ni un cuadro.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "El recorrido: su pedido → Claude → `titulo.html` → el navegador; abajo, las dos reglas: `DURATION` y `seek(t)`."
        }
      },
      {
        "n": "1.3",
        "titulo": "Pedir el título",
        "cuerpo": "Copie el pedido de abajo y cambie lo que está entre corchetes. Cuanto más concreto sea (cuánto dura, de qué tamaño, qué fondo, qué texto y cómo entra), mejor sale el primer intento.\n\nClaude escribe `titulo.html` y le cuenta qué hizo: cuánto dura, cómo entran las letras y qué decidió por su cuenta. En el ejemplo, leyó también la guía de la marca del kit y usó su letra y su color de acento. Abra el archivo con doble clic para verlo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "El pedido en Claude Code; Claude escribe titulo.html y resume lo que hizo; el título se ve en el navegador."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "Cambie lo que está entre corchetes",
            "texto": "Hacé un título animado de [6] segundos, [1920 por 1080], fondo [negro], que diga [MARÍA LÓPEZ · FOTOGRAFÍA]. Que las letras entren de abajo de a una y al final quede quieto 1 segundo. Guardalo como titulo.html y seguí CLAUDE.md."
          }
        ]
      },
      {
        "n": "1.4",
        "titulo": "Corregir en palabras",
        "cuerpo": "No hace falta saber qué línea del código cambiar: diga lo que ve y lo que quiere, como se lo diría a una persona. Por ejemplo: «Más lento: que tarde el doble en entrar». O: «Que FOTOGRAFÍA aparezca después, más chica, en gris claro».\n\nPida **un cambio por vez** y, después de cada uno, recargue la página en el navegador para verlo. Si a Claude le hace falta decidir algo (en el ejemplo, quitar el punto entre las dos palabras para poner FOTOGRAFÍA abajo), se lo dice.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "Las dos correcciones en Claude Code y, después de cada una, el título en el navegador: más lento, y FOTOGRAFÍA después, más chica y en gris."
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
        "cuerpo": "En el estudio de Vion el pedido también va en palabras a Claude, y **cada cambio queda guardado como una versión nueva**: si el cambio no gusta, se vuelve a la anterior con un clic.\n\nUsted puede hacer lo mismo sin ningún programa extra: antes de cada cambio grande, guarde una copia del archivo (por ejemplo `titulo-v1.html`).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "El estudio de Vion en modo demo: una animación con sus versiones y un cambio pedido en palabras («más lento») que deja una versión nueva."
        }
      },
      {
        "n": "1.6",
        "titulo": "Tres consejos",
        "cuerpo": "1. Diga siempre cuánto dura y de qué tamaño es.\n2. Pida un cambio por vez.\n3. Cuando algo le guste, guarde una copia antes de seguir (`titulo-v1.html`).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Los tres consejos de la lección en una lámina."
        }
      },
      {
        "n": "1.7",
        "titulo": "Lo que tiene",
        "cuerpo": "Ya tiene un título que se mueve, hecho y corregido por usted. Le falta su marca: eso es la próxima lección.",
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
        "cuerpo": "Esto es lo que sale casi siempre cuando no se le dice nada a la IA: textos que aparecen y desaparecen con un fundido, todo centrado y el fondo quieto. Se mueve, pero parece una presentación de diapositivas.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 10,
          "seVe": "Una animación con cara de presentación, hecha así a propósito; al final, una cruz roja la tacha."
        }
      },
      {
        "n": "2.2",
        "titulo": "Dos textos lo arreglan",
        "cuerpo": "Dos textos lo arreglan: uno con **su marca** (colores, letra y tono) y otro con **las reglas del movimiento**. Se escriben una sola vez y valen para todo lo que pida después.",
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
        "cuerpo": "El **prompt de estilo** es un texto con la guía de su marca, escrito para Claude. En el kit se llama `ESTILO.md`. Ábralo y llénelo con:\n\n- **colores**, cada uno con su código y para qué se usa (fondo, acento, texto);\n- **letra** y grosor;\n- **tono del movimiento** (por ejemplo, tranquilo o enérgico);\n- **nunca**: lo que no quiere ver.\n\nUna regla de oro: el color de acento es solo un acento, nunca el fondo entero. El kit trae el ejemplo de una fotógrafa inventada, María López; cámbielo por el suyo.",
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
        "cuerpo": "Las reglas del movimiento vienen de **bang-motion**, una skill abierta de Bang Tutorial (licencia MIT):\n\n1. Una idea por toma.\n2. La cámara cambia de plano: se acerca y se aleja.\n3. El fondo nunca está quieto.\n4. Las transiciones cambian de una toma a otra.\n5. Lo que entra, entra con calma; lo que sale, sale rápido.",
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
        "cuerpo": "Ahora pídale a Claude que rehaga el título con las dos guías (el pedido está abajo). Claude lee `ESTILO.md` y las reglas de `bang-motion`, y guarda una versión nueva, `titulo-marca.html`, sin borrar la anterior. Ábralas una al lado de la otra y compare: la nueva tiene los colores, la letra y el movimiento de la marca.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El pedido en Claude Code y, en el navegador, el título de antes y el nuevo uno al lado del otro."
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
        "cuerpo": "Si todavía no tiene una marca definida, el repositorio abierto **lemo-opuscar** ([github.com/lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar), licencia MIT) trae 66 recetas de estilo escritas para animaciones hechas con código: color, letra, movimiento, cámara y errores típicos. Elija una y úsela como punto de partida de su `ESTILO.md`.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Una receta de estilo `STYLE.md` de lemo-opuscar, con su color, letra, movimiento y cámara."
        }
      },
      {
        "n": "2.7",
        "titulo": "Escríbalo una vez",
        "cuerpo": "Guarde `ESTILO.md` en la carpeta del curso. Desde ahora, Claude lo usa en cada pedido.",
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
        "cuerpo": "Una página web no se puede subir a Instagram: hace falta un archivo de video. Y hay una forma de hacerlo sin perder ni un cuadro.",
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
        "cuerpo": "Un video es una serie de fotos, una detrás de otra: 30 por cada segundo. Grabar la pantalla sirve, pero a veces se saltan fotos.\n\nLo que hace el kit: abre la página en un Chrome invisible, la lleva al segundo 0 y saca una foto; la avanza 1/30 de segundo y saca otra; y así hasta el final. Después **ffmpeg** une todas las fotos en un MP4. Por eso a Claude se le pide `seek(t)`: es lo que permite llevar la animación a cada instante exacto.",
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
        "cuerpo": "El kit trae `a-mp4.mjs`, un programa chico escrito para el curso que hace ese paso. En la terminal, dentro de `motion-curso`, escriba el comando de abajo: primero el archivo de la animación y después el nombre del video que quiere.\n\nMientras trabaja, va contando los cuadros (180 en un título de 6 segundos). Al terminar dice «Listo», con el tamaño, la duración y los cuadros por segundo. Abra el MP4 con cualquier reproductor de video.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "En la terminal, a-mp4.mjs cuenta los cuadros y termina con «Listo»; después, el MP4 que salió."
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
        "cuerpo": "Para un reel o una historia, el video va vertical. No recorte el horizontal: pida una versión nueva, pensada para ese formato. Al pasarla a MP4, agregue al final `--ancho 1080 --alto 1920`, para que el video salga vertical.",
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
            "texto": "node a-mp4.mjs titulo-vertical.html titulo-vertical.mp4 --ancho 1080 --alto 1920"
          }
        ]
      },
      {
        "n": "3.5",
        "titulo": "Compruebe antes de subir",
        "cuerpo": "Antes de subir un video, conviene revisarlo. Pídale a Claude que lo mire con **ffprobe** (un programa que viene con ffmpeg y lee los datos de un video). Tiene que decirle que dura 6 segundos, que mide 1920 × 1080 y que tiene 30 cuadros por segundo, y si encontró cuadros negros. Si algo le llama la atención, lo explica: en la prueba, el detector marcó el fondo café muy oscuro como «negro», y Claude comprobó que no era negro puro sino el fondo de la marca.",
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
        "cuerpo": "Hay otras formas de pasar una animación a video:\n\n- **Remotion**, que se ve en la lección 4.\n- **HyperFrames** ([github.com/heygen-com/hyperframes](https://github.com/heygen-com/hyperframes), Apache-2.0): hace lo mismo desde HTML y es gratis para cualquier empresa. Es abierto, pero en Vion no lo usamos, así que no lo enseñamos.\n- **Grabar la pantalla** (con OBS u otro programa): es rápido, pero puede perder cuadros.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Tres tarjetas, una por camino: Remotion, HyperFrames y grabar la pantalla."
        }
      },
      {
        "n": "3.7",
        "titulo": "Su primer video",
        "cuerpo": "Este es el resultado: un MP4 con su marca, listo para subir a cualquier red.",
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
        "cuerpo": "Tres videos que salen de una misma plantilla: solo cambian los datos, como el producto, el precio y el color.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 10,
          "seVe": "Tres tarjetas de oferta distintas, hechas con la misma plantilla, que caen una sobre otra."
        }
      },
      {
        "n": "4.2",
        "titulo": "¿HTML o Remotion?",
        "cuerpo": "¿Cuándo conviene cada camino?\n\n- **HTML:** para lo que se hace una vez, como el título de su canal.\n- **Remotion:** para lo que se repite con otros datos, como la tarjeta de cada producto o el video de cada cliente.\n\n**Remotion** es un programa que arma videos con React (una forma de escribir páginas web por piezas). El video queda como una plantilla, y los datos van aparte.",
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
        "cuerpo": "Remotion es **gratis** para personas, empresas de **hasta 3 empleados**, organizaciones sin fines de lucro y para probarlo. Si su empresa es más grande, cobra **USD 25 por puesto al mes** (para quien hace los videos a mano) o **USD 0,01 por video, con un mínimo de USD 100 al mes** (para quien los arma automáticamente). Fuentes: [la licencia de Remotion](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md) y [remotion.pro/license](https://www.remotion.pro/license).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tabla con la licencia de Remotion: gratis hasta 3 empleados y, arriba de eso, por puesto o por render."
        }
      },
      {
        "n": "4.4",
        "titulo": "Crear el proyecto",
        "cuerpo": "Estos son los pasos para crear un proyecto de Remotion, dentro de `motion-curso`:\n\n1. `npx create-video --yes --blank oferta` crea un proyecto vacío llamado `oferta` e instala lo que necesita. La primera vez pregunta «Ok to proceed? (y)»: escriba `y` y apriete Enter.\n2. `cd oferta` entra a esa carpeta.\n3. `npx remotion skills add` suma las skills oficiales de Remotion para Claude. Son textos con instrucciones: léalos antes de usarlos.\n4. `npm run dev` abre **Remotion Studio**, el programa donde se ve el video mientras se arma. Queda en `http://localhost:3000` en su navegador.\n\nDeje esa terminal abierta. En **otra** terminal, dentro de `oferta`, escriba `claude`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "En la terminal, los cuatro comandos; Remotion Studio abierto en el navegador, todavía vacío."
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
        "cuerpo": "Pídale a Claude la tarjeta **como plantilla**: el diseño fijo y los textos como datos que se pueden cambiar. En Remotion esos datos se llaman **props**. El pedido está abajo.\n\nRemotion Studio se actualiza solo y aparece la composición `Oferta`. A la derecha está el panel de props: cambie el precio ahí mismo y mire cómo se acomoda la tarjeta, sin tocar el código.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "El pedido en Claude Code; Remotion Studio muestra la composición Oferta y el precio se cambia en el panel de props."
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
        "cuerpo": "Para hacer varios videos de la misma plantilla, guarde los datos de cada uno en un archivo aparte, por ejemplo `datos/a.json`, `datos/b.json` y `datos/c.json`. Después, un comando por archivo (abajo) arma cada video en la carpeta `salida`. A ese paso se le llama **render**. La primera vez, Remotion baja su propio Chrome invisible para hacerlo. Mire los tres videos antes de usarlos: un dato largo puede no entrar en el diseño (en la prueba, «Fechas abiertas» quedó cortado), y se arregla pidiéndole a Claude que la plantilla acomode los textos largos.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "Los datos de un archivo, tres renders seguidos y los tres MP4 en la carpeta salida."
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
        "cuerpo": "Las pizarras, los chats, las listas y las tarjetas de los reels de Vion son plantillas así: se llenan con los datos de cada video y se dibujan solas, sin gastar en IA.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "El estudio de Vion en modo demo: las plantillas de motion, la de Oferta llena con datos de ejemplo y un reel de ejemplo con esa tarjeta."
        }
      },
      {
        "n": "4.8",
        "titulo": "La regla",
        "cuerpo": "La regla para elegir: HTML para lo que se hace una vez. Remotion para lo que se repite.",
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
        "cuerpo": "Si ya le explicó a Claude más de una vez sus colores, su letra y que no quiere fundidos, conviene escribirlo en una skill.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 10,
          "seVe": "La pregunta «¿CUÁNTAS VECES LE EXPLICÓ SU MARCA A CLAUDE?» y un contador que sube."
        }
      },
      {
        "n": "5.2",
        "titulo": "La skill `mi-motion`",
        "cuerpo": "La skill del curso está en `.claude/skills/mi-motion/SKILL.md`, dentro del kit. Tiene dos partes:\n\n- **Arriba, cuándo usarla** (`description`): cada vez que le pidan una animación.\n- **Abajo, las reglas:** leer `ESTILO.md` y `plantillas.md`; hacer un solo HTML con `DURATION` y `seek(t)`; revisar la lista contra el efecto «presentación» antes de entregar; y decir cómo pasarla a MP4.\n\nÁbrala y cámbiela a su gusto: es un archivo de texto.",
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
        "cuerpo": "Con la guía de la marca y la skill en la carpeta, alcanza un pedido corto, sin explicar nada más (está abajo). En la prueba, Claude leyó por su cuenta `ESTILO.md` y una tarjeta de ejemplo del kit, y la tarjeta salió con los colores y la letra de la marca.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El pedido de una línea en Claude Code, la skill mi-motion en uso y la tarjeta terminada en el navegador."
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
        "cuerpo": "Cuando algo le sale bien, conviértalo en plantilla: el diseño queda fijo y los textos pasan a ser datos al principio del archivo. Así, la próxima vez solo cambia los datos. En Vion hay seis plantillas así (pizarra, chat, Claude Code en el teléfono, lista, oferta y girar el teléfono), y con ellas se arma casi todo el motion de un reel.",
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
        "cuerpo": "Anote cada plantilla en `plantillas.md`, el catálogo del kit: **nombre · datos que lleva · para qué sirve · ejemplo**. Así Claude elige la que corresponde en lugar de inventar una nueva.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Un `plantillas.md` lleno, con el nombre, los datos, para qué sirve y un ejemplo de cada plantilla."
        }
      },
      {
        "n": "5.6",
        "titulo": "Escríbalo una vez",
        "cuerpo": "Una skill y un catálogo: lo explica una vez y lo usa siempre.",
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
    "resultado": "Una animación atada a una voz, con los textos en su segundo y sonidos hechos por código, pasada a MP4 con su sonido.",
    "laminas": [
      {
        "n": "6.1",
        "titulo": "La misma animación, dos veces",
        "cuerpo": "La misma animación, dos veces. La segunda se siente mejor porque cada cosa entra en su momento y suena.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "La misma animación dos veces: primero muda y a destiempo; después con sonido y a tiempo."
        }
      },
      {
        "n": "6.2",
        "titulo": "Tres reglas de ritmo",
        "cuerpo": "1. Lo que entra tarda entre 0,7 y 1,3 segundos; lo que sale, la mitad.\n2. Nunca pasan más de 2 segundos sin que algo cambie en la pantalla.\n3. Cada texto entra **cuando la voz lo dice**, ni antes ni después.",
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
        "cuerpo": "Grabe su voz leyendo el guion (con el celular alcanza) y guárdela en la carpeta del curso como `voz.m4a`. Escúchela y anote en `tiempos.txt` el segundo en que empieza cada frase, una por línea: `0.0 Sus fotos de familia…`, `4.0 Así se reserva…`. El kit trae un ejemplo.\n\nDespués pídale a Claude la animación atada a esos tiempos (el pedido está abajo): cada texto entra justo en su segundo y, al abrir la página, suena la voz.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "tiempos.txt en la terminal, el pedido en Claude Code y la animación con los textos en su lugar."
        },
        "bloques": [
          {
            "tipo": "codigo",
            "etiqueta": "tiempos.txt (el principio del ejemplo del kit)",
            "lenguaje": "text",
            "texto": "0.0 Sus fotos de familia, listas en una semana\n4.0 Así se reserva una sesión, en tres pasos\n8.0 Uno: elija el día en el calendario de la web"
          },
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "Hacé animacion.html con los textos de tiempos.txt: que cada texto entre justo en su segundo. Que suene voz.m4a desde el principio. Seguí CLAUDE.md."
          }
        ]
      },
      {
        "n": "6.4",
        "titulo": "Sonido hecho por código",
        "cuerpo": "El navegador sabe fabricar sonidos por su cuenta: golpes, barridos, clics. Se llama **Web Audio**. Así no usa música de nadie y cada sonido cae justo en su cuadro.\n\nPídale a Claude los sonidos y, además, un pequeño programa que los guarde en un archivo `sonidos.wav` (el pedido está abajo). Ese archivo es el que después se suma al video.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El pedido en Claude Code, el programa que escribe sonidos.wav y la forma de onda de los sonidos."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "En animacion.html sumá sonidos con Web Audio: un golpe suave cuando entra cada texto y un barrido en cada transición. Y hacé sonidos.mjs, que escriba esos mismos sonidos en sonidos.wav, con la misma duración, sin instalar nada. Corrélo."
          }
        ]
      },
      {
        "n": "6.5",
        "titulo": "Al MP4, con voz y sonidos",
        "cuerpo": "Falta juntar todo. Primero pídale a Claude que mezcle la voz y los sonidos en un solo archivo con ffmpeg (el pedido está abajo). Después pase la animación a MP4 con la opción `--audio`, para que el video lleve esa mezcla.\n\nEn Remotion es distinto: la voz se pone dentro de la composición, como un elemento `<Audio>`.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La mezcla pedida a Claude y el comando con --audio terminado en la terminal."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "Mezclá voz.m4a y sonidos.wav en mezcla.m4a con ffmpeg, la voz más fuerte que los sonidos."
          },
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
        "cuerpo": "Esto es un **explicador**: un video corto con un tema, tres pasos y una acción al final. Mírelo entero antes de seguir.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 40,
          "seVe": "El explicador de ejemplo del kit, entero, con una voz de ejemplo."
        }
      },
      {
        "n": "7.2",
        "titulo": "Lo más útil que puede hacer",
        "cuerpo": "Con un explicador usted muestra cómo funciona su producto o su servicio en menos de un minuto. Es de lo más útil que puede hacer con lo que aprendió.",
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
        "cuerpo": "Un punto de partida para ordenar el explicador:\n\n1. **El gancho:** el resultado primero, sin introducción.\n2. **El mapa:** cuántos pasos son.\n3. **Los pasos:** muéstrelos, no solo los cuente.\n4. **El resultado.**\n5. **Una sola acción** al final, como «Reserve hoy».\n\nCámbielo cuando el tema lo pida.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Una pizarra con los cinco puntos de la estructura, que entran uno a uno."
        }
      },
      {
        "n": "7.4",
        "titulo": "Primero el guion",
        "cuerpo": "Antes de pedir nada, escriba el guion: unas pocas líneas cortas, cada una con el segundo, lo que se dice y lo que se ve. Por ejemplo: `0 s · «Sus fotos de familia, listas en una semana» · la galería terminada`. Guárdelo como `guion.md` en la carpeta del curso. El kit trae uno de ejemplo.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Un `guion.md` de ejemplo, con cinco líneas: el segundo, lo que se dice y lo que se ve."
        }
      },
      {
        "n": "7.5",
        "titulo": "Pedirlo",
        "cuerpo": "Con el guion, la voz y los tiempos, pídale el explicador a Claude (el pedido está abajo). Claude usa la skill `mi-motion`: busca en el catálogo una plantilla que sirva (en la prueba, la del explicador de tres pasos del kit), la adapta a su guion y le dice cómo pasarla a MP4.\n\nEl primer intento casi nunca es el final: en la próxima lámina se revisa.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "El pedido en Claude Code y el primer explicador en el navegador."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "En Claude Code",
            "texto": "Hacé el explicador de guion.md con la skill mi-motion, 1920 por 1080, con mi voz voz.m4a y tiempos.txt. Guardalo como explicador.html."
          }
        ]
      },
      {
        "n": "7.6",
        "titulo": "Revisar con la lista",
        "cuerpo": "Abra `revision-anti-ppt.md`, que viene en el kit, y responda cada pregunta mirando su explicador: ¿hay más de una idea por toma? ¿algo queda quieto más de 2 segundos? ¿hay textos de más de 6 palabras? ¿la cámara cambia de plano?\n\nCada «sí» es un pedido de cambio, **uno por vez**. En el ejemplo fueron tres: el paso dos tenía demasiado texto, la cámara estaba quieta en el segundo 12 y el botón del cierre tenía que decir «Reservar» y entrar al final.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "Las tres correcciones en Claude Code y, después de cada una, el explicador en el navegador."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "Cambio 1",
            "texto": "El paso dos tiene demasiado texto: dejalo en menos de seis palabras."
          },
          {
            "tipo": "pedido",
            "etiqueta": "Cambio 2",
            "texto": "La cámara está quieta en el segundo 12: que se acerque despacio al paso dos."
          },
          {
            "tipo": "pedido",
            "etiqueta": "Cambio 3",
            "texto": "El cierre necesita el botón: «Reservar» en mostaza, que entre al final."
          },
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
        "cuerpo": "Pase a MP4 el título, el explicador y la tarjeta. Esos tres videos son lo que se lleva de este curso.",
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
