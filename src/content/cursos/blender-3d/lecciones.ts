// Las lecciones de «B2 · Videos 3D con Blender y Claude», lámina por lámina, desde el storyboard
// (docs/planes/cursos/B2-3d-blender.md de la aldea, 2026-11-10). Texto completo de cada lámina; los videos e imágenes van en ../medios.json.
import type { LeccionCurso } from '../../tipos';

export const lecciones: LeccionCurso[] = [
  {
    "n": 0,
    "slug": "0-puesta-a-punto",
    "titulo": "Puesta a punto: Blender, Claude Code y (si quiere) el MCP",
    "objetivo": "Dejar Blender, Claude Code y la carpeta del curso listos y comprobados.",
    "resultado": "Un cubo con luz, renderizado a PNG desde la terminal por un script que escribió Claude.",
    "laminas": [
      {
        "n": "0.1",
        "titulo": "No hace falta saber Blender",
        "cuerpo": "Hace falta tenerlo instalado. En esta lección deja listos Blender, Claude Code y ffmpeg, y (si quiere) el conector para manejar Blender en vivo. Al final, Claude le dibuja un cubo desde la terminal.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Fondo crema; Chispa en plano medio con un cubo gris flotando al lado.",
          "dice": "Para este curso no hace falta saber Blender. Hace falta tenerlo instalado. Y al final de esta lección, usted va a tener a Claude dibujando en él."
        }
      },
      {
        "n": "0.2",
        "titulo": "¿Qué PC necesito?",
        "cuerpo": "**Mínimo:** 8 GB de RAM, GPU de 2 GB con OpenGL 4.3 / Vulkan 1.3; sirve para todo el curso, despacio.\n\n**Cómodo:** GPU de 8 GB.\n\n**IA local (opcional, lección 7):** nosotros usamos 16 GB de video.\n\n**Mac:** solo con chip de Apple (Blender 5 no corre en Mac con Intel).\n\nNuestros números: borrador ~0,05 s por cuadro y alta ~2 s por cuadro en una laptop con RTX 2070 limitada; una toma en alta en un minuto con una RTX 4070 Ti SUPER.\n\nLos requisitos completos (mínimos de [blender.org](https://www.blender.org/download/requirements/) y lo que medimos nosotros):\n\n| Nivel | Qué hace falta | Qué puede hacer |\n| --- | --- | --- |\n| **Mínimo de Blender** | Windows 8.1 64 bits o Linux con glibc 2.28; CPU de 4 núcleos con SSE4.2; 8 GB de RAM; GPU con 2 GB y OpenGL 4.3 / Vulkan 1.3. Mac: **solo Apple Silicon** con macOS 13 o más nuevo (Blender 5 no corre en Mac con Intel; la última para Intel es la 4.5 LTS, y el curso no se probó ahí) | Lecciones 0 a 4 y borradores. Las tomas en alta, despacio |\n| **Lo recomendado por Blender** | 8 núcleos, 32 GB de RAM, GPU con 8 GB | Todo el curso salvo la IA local |\n| **Nuestra laptop** (RTX 2070 Max-Q, 8 GB, limitada a 600 MHz) | · | Borrador a 960×540: ~0,05 s por cuadro. Alta EEVEE a 1280×720 con 32 muestras: ~2 s por cuadro. Cycles a 1080×1920: ~9 s por cuadro (medido el 2026-11-03 y 05) |\n| **Nuestra PC** (RTX 4070 Ti SUPER, 16 GB, 32 GB de RAM) | · | Una toma en alta a 1920×1080 en un minuto (2026-11-05). Cycles con OptiX: 3,6 s por cuadro (2026-11-03). IA local: unos 7 min por toma, 15,6 GB de memoria de video y hasta 72 °C (2026-11-05) |\n| **IA local con 8 GB** | · | La documentación de ComfyUI dice que el modelo 5B «debería entrar bien en 8 GB» descargando a la RAM ([docs.comfy.org](https://docs.comfy.org/tutorials/video/wan/wan2_2)). **Nosotros no lo probamos**, y en nuestra laptop de 8 GB no lo corremos |\n| **Cycles en GPU** | NVIDIA GeForce 900 o más nueva, AMD GCN de 4.ª generación o más nueva, Intel Kaby Lake o más nueva | Sin GPU compatible, Cycles corre en el CPU, mucho más lento |",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La tabla de requisitos en una lámina: el mínimo de Blender, lo recomendado, nuestra laptop y nuestra PC con sus tiempos por cuadro, la IA local con 8 GB y las GPU que sirven para Cycles."
        }
      },
      {
        "n": "0.3",
        "titulo": "Blender 5.2.3 LTS",
        "cuerpo": "Bájelo de [blender.org/download](https://www.blender.org/download/) (la versión de soporte largo, del 2026-10-22).\n\n- Windows: instalador o .zip portátil.\n- Mac: el .dmg de Apple Silicon.\n- Linux: .tar.xz o Snap.\n\nÁbralo una vez: Ayuda → Acerca de tiene que decir 5.2.3. Tenga al día el controlador de su tarjeta de video.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La página de descarga de blender.org con la versión 5.2.3 LTS, y la ventana «Acerca de» de Blender que dice 5.2.3."
        }
      },
      {
        "n": "0.4",
        "titulo": "Claude Code y ffmpeg",
        "cuerpo": "**Claude Code** (plan Pro o superior): en Windows, desde PowerShell; en Mac y Linux, desde la Terminal (los comandos, abajo). Abra una terminal nueva y pida `claude --version`; después escriba `claude` para entrar.\n\n**ffmpeg**, que une las tomas en un video: `winget install Gyan.FFmpeg` en Windows, `brew install ffmpeg` en Mac, `sudo apt install ffmpeg` en Linux. Compruébelo con `ffmpeg -version`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "PowerShell y la Terminal de Mac lado a lado, con los comandos resaltados; `claude --version`; el inicio de sesión (el correo tapado); `ffmpeg -version`.",
          "dice": "Claude Code con este comando, en Windows o en Mac. Abra una terminal nueva y pida la versión. Después ffmpeg, que va a unir las tomas en un video.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Claude Code · Windows (PowerShell)",
            "lenguaje": "powershell",
            "texto": "irm https://claude.ai/install.ps1 | iex"
          },
          {
            "tipo": "comando",
            "etiqueta": "Claude Code · Mac y Linux",
            "lenguaje": "bash",
            "texto": "curl -fsSL https://claude.ai/install.sh | bash"
          },
          {
            "tipo": "comando",
            "etiqueta": "Comprobar (terminal nueva)",
            "texto": "claude --version"
          },
          {
            "tipo": "comando",
            "etiqueta": "ffmpeg · Windows",
            "lenguaje": "powershell",
            "texto": "winget install Gyan.FFmpeg"
          },
          {
            "tipo": "comando",
            "etiqueta": "ffmpeg · Mac",
            "lenguaje": "bash",
            "texto": "brew install ffmpeg"
          },
          {
            "tipo": "comando",
            "etiqueta": "ffmpeg · Linux",
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
        "n": "0.5",
        "titulo": "Decirle a Claude dónde está Blender",
        "cuerpo": "Baje el kit y descomprímalo en `Documentos/blender-curso`. En `CLAUDE.md`, la primera línea es la ruta de Blender:\n\n- Windows: `C:\\Program Files\\Blender Foundation\\Blender 5.2\\blender.exe`\n- Mac: `/Applications/Blender.app/Contents/MacOS/Blender`\n- Linux: la carpeta del .tar.xz, o `blender` si lo instaló con Snap.\n\nCámbiela si lo instaló en otro lado. Pruebe con el pedido de abajo: Claude tiene que responder 5.2.3.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El archivo `CLAUDE.md` del kit con la línea de la ruta de Blender resaltada, y la respuesta de Claude: «5.2.3»."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "corré blender --version"
          }
        ]
      },
      {
        "n": "0.6",
        "titulo": "La prueba de fuego",
        "cuerpo": "Pida lo de abajo. Claude escribe el archivo y corre `blender -b -P prueba.py`: Blender trabaja sin abrir su ventana. Aparece la imagen.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "El pedido; `prueba.py` en el editor; la terminal con Blender corriendo sin ventana; el PNG del cubo rojo."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Escribí prueba.py: un cubo rojo, un sol y una cámara, y renderizalo a salida/prueba.png sin abrir la ventana de Blender"
          }
        ]
      },
      {
        "n": "0.7",
        "titulo": "Opcional: Blender en vivo (MCP)",
        "cuerpo": "1. **uv:** `winget install --id=astral-sh.uv -e` en Windows · `brew install uv` en Mac · el instalador oficial de astral.sh en Linux. Compruébelo con `uv --version`.\n2. **El conector, con versión fija y sin telemetría:** el comando `claude mcp add` de abajo. `claude mcp list` tiene que mostrar `blender`.\n3. **El complemento:** `uvx mcp-for-blender==2.2.7 install-addon`; en Blender, Editar → Preferencias → Complementos → activar «MCP for Blender»; en la vista 3D, tecla `N` → pestaña MCP for Blender → **Start MCP Server**.\n4. Pruebe: «¿qué hay en la escena de Blender?». Claude tiene que responder con el cubo de inicio.\n\nLa lección 1 explica cuándo conviene y sus riesgos. El proyecto se llamaba `blender-mcp`; hoy el paquete es `mcp-for-blender`. Su README usa `uvx mcp-for-blender` sin versión, que baja la última cada vez: acá se fija la 2.2.7.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 50,
          "seVe": "La instalación de uv; el comando `claude mcp add`; el complemento activado en Blender; la pestaña con Start MCP Server; Claude respondiendo con la escena de inicio.",
          "dice": "Si quiere manejar Blender en vivo, instale este conector con la versión fija y la telemetría apagada. Active el complemento y apriete Start. Es opcional.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "uv · Windows",
            "lenguaje": "powershell",
            "texto": "winget install --id=astral-sh.uv -e"
          },
          {
            "tipo": "comando",
            "etiqueta": "uv · Mac",
            "lenguaje": "bash",
            "texto": "brew install uv"
          },
          {
            "tipo": "comando",
            "etiqueta": "El conector (Windows, Mac y Linux)",
            "texto": "claude mcp add blender -e DISABLE_TELEMETRY=true -e BLENDER_MCP_SAFE_MODE=1 -- uvx mcp-for-blender==2.2.7"
          },
          {
            "tipo": "comando",
            "etiqueta": "El complemento",
            "texto": "uvx mcp-for-blender==2.2.7 install-addon"
          },
          {
            "tipo": "pedido",
            "texto": "¿qué hay en la escena de Blender?"
          }
        ]
      },
      {
        "n": "0.8",
        "titulo": "Si algo falla",
        "cuerpo": "Los errores más comunes y cómo salir de cada uno:\n\n| Lo que aparece | Qué pasa | Solución |\n| --- | --- | --- |\n| `blender` no se reconoce en la terminal | Blender no está en el PATH | No hace falta: el `CLAUDE.md` del kit lleva la ruta completa |\n| `spawn uvx ENOENT` (Windows) | El cliente no ve el PATH donde quedó uv | Abrir una terminal nueva; si sigue, usar la ruta completa a `uvx.exe` |\n| Claude Code no ve las herramientas de Blender | El servidor del complemento no está prendido | En Blender, `N` → MCP for Blender → Start MCP Server; después reiniciar Claude Code |\n| El render sale negro o vacío | No hay cámara activa o la luz es 0 | Pedirle a Claude que revise la cámara y la luz; el `armar.py` del kit siempre pone las dos |\n| Los PNG salen de 0 bytes | Se escribieron en una carpeta temporal en memoria o sin espacio | Renderizar a una carpeta del disco (la del kit, `salida/`) y revisar que ningún cuadro pese 0 |\n| EEVEE falla o va muy lento en Linux con WSL | EEVEE necesita OpenGL o Vulkan de verdad y en WSL2 no es confiable | Blender nativo de Windows (lo mismo hacemos en nuestra PC) |\n| Mac con Intel | Blender 5 no corre | Blender 4.5 LTS; el curso no está probado ahí |",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La tabla de errores típicos en una lámina: Blender que la terminal no encuentra, `spawn uvx ENOENT`, el servidor del complemento apagado, el render negro, los PNG de 0 bytes, EEVEE en WSL y Mac con Intel, cada uno con su solución."
        }
      },
      {
        "n": "0.9",
        "titulo": "Ese cubo lo dibujó Blender",
        "cuerpo": "Ni usted ni Claude lo dibujaron a mano: Claude escribió el guion y Blender lo ejecutó. Es todo lo que necesita para el resto del curso.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 12,
          "seVe": "Chispa delante del cubo rojo renderizado; lo toca con el dedo.",
          "dice": "Ese cubo no lo hizo usted, ni yo. Lo dibujó Blender con lo que escribió Claude."
        }
      }
    ]
  },
  {
    "n": 1,
    "slug": "1-blender-por-codigo",
    "titulo": "Blender por código: Claude escribe, Blender dibuja",
    "objetivo": "Conocer las dos formas de que Claude maneje Blender y por qué elegimos los scripts.",
    "resultado": "La misma mesa con una lámpara hecha de las dos formas.",
    "laminas": [
      {
        "n": "1.1",
        "titulo": "¿Hay que aprender todo esto?",
        "cuerpo": "Blender tiene cientos de botones. La buena noticia: casi todos se pueden apretar con código, y Claude escribe ese código muy bien.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La interfaz de Blender llena de paneles, con la pregunta «¿Hay que aprender todo esto?» encima."
        }
      },
      {
        "n": "1.2",
        "titulo": "Dos caminos",
        "cuerpo": "Todo lo que se hace con el ratón en Blender se puede escribir en **Python**.\n\n- **En vivo:** Claude maneja su Blender abierto por el conector (MCP).\n- **Por archivo:** Claude escribe un guion (`escena.py`) y Blender lo corre solo, sin ventana, y deja una imagen o un video.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "Un diagrama que se dibuja: Claude → MCP → Blender abierto; Claude → `escena.py` → Blender sin ventana → imagen o video.",
          "dice": "Hay dos maneras. En vivo, Claude mueve su Blender abierto. Con un archivo, Claude escribe un guion y Blender lo ejecuta solo.",
          "vozEnOff": true
        }
      },
      {
        "n": "1.3",
        "titulo": "En vivo",
        "cuerpo": "Con el conector prendido, pida lo de abajo. Los objetos aparecen en su ventana mientras Claude trabaja; Claude puede mirar la vista y corregirse. Ideal para **explorar** y aprender.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "El pedido en Claude Code y Blender al lado: la mesa y la lámpara aparecen; Claude saca una captura de la vista para revisarla."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Poné una mesa de madera y una lámpara encima"
          }
        ]
      },
      {
        "n": "1.4",
        "titulo": "Por archivo",
        "cuerpo": "Pida lo de abajo. Tres ventajas:\n\n- lo **lee** antes de correrlo;\n- lo **repite** mañana y sale igual;\n- lo corre en **otra computadora**, sin ventana, mientras hace otra cosa.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "`mesa.py` en el editor (se ve que se puede leer); la terminal con `blender -b -P mesa.py`; el PNG de la mesa.",
          "dice": "Con un archivo es menos vistoso, pero lo puede leer, repetir y correr en otra computadora.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Escribí mesa.py con lo mismo y renderizala a salida/mesa.png"
          }
        ]
      },
      {
        "n": "1.5",
        "titulo": "Cuidado con el modo en vivo",
        "cuerpo": "El propio conector lo advierte: puede correr **cualquier** código de Python dentro de Blender.\n\n1. Guarde su trabajo antes.\n2. Deje el servidor solo en su computadora (no lo abra a la red: no tiene clave).\n3. Telemetría apagada (`DISABLE_TELEMETRY=true`).\n\nExiste también un MCP oficial de la Fundación Blender ([Blender Lab](https://www.blender.org/lab/mcp-server/), para Blender 5.1 o más nuevo), que avisa lo mismo; no lo usamos.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tarjeta roja con las tres advertencias: guardar antes, el servidor solo en su computadora y la telemetría apagada."
        }
      },
      {
        "n": "1.6",
        "titulo": "Cómo lo hacemos en Vion",
        "cuerpo": "Usamos el camino del archivo y un paso más: Claude **no** escribe código de Blender, escribe **una lista de qué hay en la escena**, y un programa fijo la dibuja. Es lo que aprende en la lección 2.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Ultron en modo demo: la sala de escenas 3D con una escena y sus tomas."
        }
      },
      {
        "n": "1.7",
        "titulo": "La regla",
        "cuerpo": "En vivo, para aprender. Por archivo, para trabajar.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 10,
          "seVe": "Chispa en primer plano, de frente.",
          "dice": "En vivo, para aprender. Por archivo, para trabajar."
        }
      }
    ]
  },
  {
    "n": 2,
    "slug": "2-escena-desde-una-frase",
    "titulo": "Una escena desde una frase",
    "objetivo": "Que una frase se vuelva una escena con el lenguaje de escena y modelos gratis.",
    "resultado": "La vista fija de «una casa de campo al atardecer, con un auto estacionado y árboles».",
    "laminas": [
      {
        "n": "2.1",
        "titulo": "De una frase a una escena",
        "cuerpo": "«Una casa de campo al atardecer, con un auto y árboles.» Esa frase se volvió esta escena. En esta lección hace la suya.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 27,
          "seVe": "Plano negro; la frase se escribe y detrás la escena aparece pieza por pieza: suelo, casa, árboles, auto, cielo. Después, Chispa al costado de la escena terminada.",
          "dice": "Esa escena salió de esa frase. Diecisiete objetos, en un intento. Le muestro cómo hacer la suya."
        }
      },
      {
        "n": "2.2",
        "titulo": "El lenguaje de escena",
        "cuerpo": "Es un archivo `escena.json`.\n\n- **Entorno:** suelo, tamaño, cielo, hora.\n- **Objetos:** forma (caja, cilindro, techo, árbol, persona, auto, modelo…), posición en metros, medidas, material, color.\n- **Tomas:** lección 3.\n\nEs una **lista cerrada**: si Claude escribe algo que no está, `armar.py` lo rechaza y dice por qué («auto: falta medidas»), y Claude lo corrige. Abajo, un ejemplo recortado (`escenas/casa-de-campo.json` del kit; los `<id>` de los modelos se eligen de cada catálogo).",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El archivo `escena.json` abierto, con el bloque del entorno y un objeto señalados."
        },
        "bloques": [
          {
            "tipo": "archivo",
            "etiqueta": "escenas/casa-de-campo.json (recortado)",
            "lenguaje": "json",
            "texto": "{\n  \"entorno\": {\"suelo\": \"cesped\", \"tamano\": 120, \"cielo\": \"atardecer\", \"hora\": 17},\n  \"objetos\": [\n    {\"id\": \"casa\", \"forma\": \"caja\", \"pos\": [0, 0, 0], \"medidas\": [10, 8, 3], \"material\": \"pintura\", \"color\": \"#efe6d8\"},\n    {\"id\": \"techo\", \"forma\": \"techo\", \"pos\": [0, 0, 3], \"medidas\": [11, 9, 2.5], \"material\": \"madera\", \"color\": \"#7a4a2a\"},\n    {\"id\": \"auto\", \"forma\": \"modelo\", \"modelo\": \"polyfork:<id-de-un-sedan>\", \"pos\": [9, -6, 0], \"giro\": 30},\n    {\"id\": \"arbol1\", \"forma\": \"modelo\", \"modelo\": \"polyhaven:<id-de-un-arbol>\", \"pos\": [-12, 6, 0]}\n  ],\n  \"tomas\": [\n    {\"nombre\": \"Estaciona frente a la casa\", \"segundos\": 4,\n     \"camara\": {\"tipo\": \"orbita\", \"objetivo\": \"auto\", \"distancia\": 9, \"altura\": 2.5, \"lente\": 35},\n     \"animaciones\": [{\"objeto\": \"auto\", \"tipo\": \"mover\", \"desde\": 0, \"hasta\": 2.5, \"ruta\": [[25, -6, 0], [9, -6, 0]]}]},\n    {\"nombre\": \"La casa entera\", \"segundos\": 5, \"camara\": {\"tipo\": \"grua\", \"objetivo\": \"casa\", \"distancia\": 30, \"altura\": 12, \"lente\": 28}}\n  ]\n}"
          }
        ]
      },
      {
        "n": "2.3",
        "titulo": "Pedirla en una frase",
        "cuerpo": "Pida lo de abajo. Claude escribe el JSON, `armar.py` lo revisa y, con la escena válida, saca la vista fija con el comando de abajo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "El pedido; el JSON que se escribe; `armar.py` marca un problema; Claude lo corrige; aparece `vista.png`. Un texto corto explica cada paso."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Una casa de campo al atardecer, con un auto estacionado y árboles. Usá la skill escena-3d"
          },
          {
            "tipo": "comando",
            "etiqueta": "La vista fija",
            "texto": "blender -b -P armar.py -- escenas/casa.json --calidad vista"
          }
        ]
      },
      {
        "n": "2.4",
        "titulo": "Modelos gratis",
        "cuerpo": "**Poly Haven** ([polyhaven.com](https://polyhaven.com)): modelos, texturas y cielos con licencia **CC0**, para cualquier uso.\n\n**Polyfork** ([polyfork.dev](https://polyfork.dev)): más de 3.000 modelos simples (autos, máquinas de obra, edificios, personas), gratis para uso comercial y en videos **sin crédito**, con una condición: no volver a subir esos archivos sueltos a otro lado.\n\nEn la escena: `\"modelo\": \"polyhaven:<id>\"` o `\"polyfork:<id>\"`; `armar.py` los baja la primera vez.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "polyhaven.com con un árbol y su licencia, y polyfork.dev con un taxi; el JSON con los dos; la vista con el árbol y el taxi en la escena.",
          "dice": "Poly Haven regala modelos para cualquier uso. Polyfork regala miles de modelos simples para usar en sus videos. Solo no vuelva a subir esos archivos a otro lado.",
          "vozEnOff": true
        }
      },
      {
        "n": "2.5",
        "titulo": "Así lo hace nuestro estudio",
        "cuerpo": "En el estudio 3D de Vion esa escena la escribió **Sonnet en un intento**: 17 objetos y 4 tomas, por **USD 0,03**. Cuando una escena pide un camión, el estudio lo busca en Polyfork y lo baja solo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Ultron en modo demo: la escena «Casa de campo», su lista de objetos y la biblioteca de modelos (Poly Haven y Polyfork)."
        }
      },
      {
        "n": "2.6",
        "titulo": "Lo básico alcanza",
        "cuerpo": "No busque perfección todavía: con cajas, techos y unos pocos modelos ya tiene una escena. La cámara y la luz hacen el resto.\n\nY una escena así es una ilustración, no un plano: no sirve para medir ni para presentar como diseño técnico sin revisión.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La vista fija de la casa de campo con el texto «LO BÁSICO ALCANZA»."
        }
      }
    ]
  },
  {
    "n": 3,
    "slug": "3-camara-y-tomas",
    "titulo": "Cámara y tomas",
    "objetivo": "Convertir la escena en tomas con cámara y movimiento, y decidirlas con borradores rápidos.",
    "resultado": "Tres borradores en MP4.",
    "laminas": [
      {
        "n": "3.1",
        "titulo": "Misma escena, tres tomas",
        "cuerpo": "Una órbita alrededor del auto, un acercamiento a la puerta, una grúa que sube y muestra todo. Tres sensaciones distintas.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 12,
          "seVe": "Las tres tomas de la casa de campo seguidas, 4 s cada una: la órbita, el acercamiento y la grúa."
        }
      },
      {
        "n": "3.2",
        "titulo": "Los tipos de cámara",
        "cuerpo": "Una toma es una cámara que hace algo durante unos segundos. En el kit hay nueve: **fija, paneo, órbita, grúa, acercarse, alejarse, aérea, recorrido** (por un camino) y **seguir** (un objeto). Con tres o cuatro tomas ya tiene un video.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Nueve íconos de cámara que se animan con su movimiento.",
          "dice": "Fija, paneo, órbita, grúa, acercarse, alejarse, aérea, recorrido y seguir. Con tres o cuatro, ya tiene un video.",
          "vozEnOff": true
        }
      },
      {
        "n": "3.3",
        "titulo": "Pedir las tomas",
        "cuerpo": "Pida lo de abajo. Claude escribe en `tomas`: qué mira la cámara (`objetivo`), `distancia`, `altura` y `lente` (larga achata, corta exagera).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "El pedido y el bloque `tomas` del JSON que se escribe."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Sumá 3 tomas de 4 segundos: una órbita alrededor del auto, acercarse a la puerta de la casa y una grúa que muestre todo"
          }
        ]
      },
      {
        "n": "3.4",
        "titulo": "Mover objetos",
        "cuerpo": "Además de la cámara: `aparecer`, `desaparecer`, `subir`, `bajar`, `girar`, `crecer` (construirse desde abajo) y `mover` por un camino. Dos ejemplos de pedido, abajo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "Los dos pedidos y sus borradores: el auto que entra por la izquierda y la casa que se construye desde abajo."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "que el auto entre por la izquierda en la toma 1"
          },
          {
            "tipo": "pedido",
            "texto": "que la casa se construya desde abajo en la toma 3"
          }
        ]
      },
      {
        "n": "3.5",
        "titulo": "Primero, el borrador",
        "cuerpo": "El comando de abajo usa **Workbench**, el motor rápido de Blender: sin luces reales, a la mitad del tamaño. En nuestra laptop: unas 5 centésimas de segundo por cuadro. Sirve para decidir cámara y ritmo antes de gastar tiempo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "El comando; las tres tomas saliendo en segundos; se reproducen."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Los borradores",
            "texto": "blender -b -P armar.py -- escenas/casa.json --toma todas --calidad borrador"
          }
        ]
      },
      {
        "n": "3.6",
        "titulo": "Borrador y alta",
        "cuerpo": "El borrador no es bonito: es para decidir. Lo bonito es la lección 4.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Un cuadro en borrador, gris y plano, y el mismo cuadro en alta, con luz y texturas, lado a lado."
        }
      },
      {
        "n": "3.7",
        "titulo": "Una órbita",
        "cuerpo": "Ya sabe hacerla.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 10,
          "seVe": "La cámara da una vuelta alrededor de Chispa.",
          "dice": "¿Ve? Una órbita. Ya sabe hacerla."
        }
      }
    ]
  },
  {
    "n": 4,
    "slug": "4-luz-y-materiales",
    "titulo": "Luz y materiales sin sufrir",
    "objetivo": "Que la escena se vea bien sin tocar nodos: hora, cielo y materiales por nombre.",
    "resultado": "La misma vista a la mañana, al atardecer y de noche.",
    "laminas": [
      {
        "n": "4.1",
        "titulo": "Una línea lo cambia todo",
        "cuerpo": "La hora.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 9,
          "seVe": "La misma vista de la casa a las 7, a las 17 y de noche, con un corte en cada golpe de sonido."
        }
      },
      {
        "n": "4.2",
        "titulo": "Hora y cielo",
        "cuerpo": "En el entorno: `\"hora\": 17` y `\"cielo\": \"atardecer\"` (también despejado, nublado, noche). `armar.py` ubica el sol según la hora.\n\nPara más realismo, ponga un cielo HDRI de Poly Haven en `texturas/` y el programa lo usa para iluminar.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El bloque `entorno` del JSON con la hora y el cielo, y un cielo HDRI en polyhaven.com."
        }
      },
      {
        "n": "4.3",
        "titulo": "Materiales por nombre",
        "cuerpo": "Diga `madera`, `ladrillo`, `vidrio`, `concreto`, `metal`, `césped`… y un `color`. El programa pone una textura gratuita (CC0) de Poly Haven teñida de ese color. Nada de nodos.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La casa con materiales lisos y la misma casa con texturas, lado a lado."
        }
      },
      {
        "n": "4.4",
        "titulo": "Corregir hablando",
        "cuerpo": "Como todo es texto, se corrige en palabras, como en el pedido de abajo. Claude cambia solo esas líneas.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El pedido, el cambio de tres líneas en el JSON y la vista nueva."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "más cálido, que el vidrio refleje y el césped más oscuro"
          }
        ]
      },
      {
        "n": "4.5",
        "titulo": "Cuatro errores de principiante",
        "cuerpo": "1. Luz de frente que aplana: use una hora con sombras largas.\n2. Todo del mismo color.\n3. Objetos que flotan: todo apoyado en el suelo.\n4. Escala: un auto mide unos 4,5 m, no 1; el kit trabaja en metros.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Cuatro pares de miniaturas «mal / bien»: luz de frente y luz de costado, todo de un color y con colores, un objeto que flota y uno apoyado, un auto a mala escala y a escala real."
        }
      },
      {
        "n": "4.6",
        "titulo": "Las cinco de la tarde",
        "cuerpo": "Mire las sombras: largas, de costado. Esa es la luz que hace que algo se vea real.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 10,
          "seVe": "Chispa sobre la vista del atardecer, con una sombra larga a su lado.",
          "dice": "Mire mi sombra. Las cinco de la tarde."
        }
      }
    ]
  },
  {
    "n": 5,
    "slug": "5-render-sin-recalentar",
    "titulo": "Render en su GPU sin recalentarla",
    "objetivo": "Elegir motor y calidad, y renderizar por tramos con la guardia de temperatura.",
    "resultado": "Una toma en alta a 1920×1080, hecha por tramos.",
    "laminas": [
      {
        "n": "5.1",
        "titulo": "Esta lección cuida su computadora",
        "cuerpo": "Renderizar es lo más pesado que le va a pedir a su tarjeta de video. Se puede hacer sin castigarla.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa en primer plano, de frente, seria.",
          "dice": "Esta lección cuida su computadora. Renderizar es lo más pesado que le va a pedir a su tarjeta. Y se puede hacer sin castigarla."
        }
      },
      {
        "n": "5.2",
        "titulo": "Los tres motores",
        "cuerpo": "- **Workbench:** el borrador (~0,05 s por cuadro en nuestra laptop).\n- **EEVEE:** el de todos los días, rápido y lindo (~2 s por cuadro en la laptop a 1280×720; una toma en alta en un minuto en nuestra PC).\n- **Cycles:** calcula la luz de verdad; ~9 s por cuadro en la laptop, 3,6 s en la PC.\n\nUn video de dos minutos en Cycles son horas: úselo solo para el final, si hace falta.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 35,
          "seVe": "Tres tarjetas, una por motor, con sus cifras; una barra de tiempo que crece para cada uno.",
          "dice": "Workbench para el borrador. EEVEE para todos los días. Cycles, solo si hace falta: en nuestra laptop tarda nueve segundos por cuadro.",
          "vozEnOff": true
        }
      },
      {
        "n": "5.3",
        "titulo": "Haga la cuenta antes",
        "cuerpo": "Una toma de 4 s a 24 cuadros por segundo son **96 cuadros**. A 2 s por cuadro: unos **3 minutos**. Si tarda demasiado, baje la resolución, las muestras o el largo.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La cuenta en una lámina: 4 s × 24 cuadros = 96 cuadros; × 2 s por cuadro = unos 3 minutos."
        }
      },
      {
        "n": "5.4",
        "titulo": "La guardia",
        "cuerpo": "Con el comando de abajo (en Windows, `guardia.ps1`) se renderiza de a **tramos** de un segundo. Antes de cada tramo mira la temperatura de la GPU: si está en **78 °C** o más, espera; si llega a **83 °C**, corta. Son los umbrales que usamos en nuestra PC. Si corta, retome desde el último tramo.\n\nSolo funciona con NVIDIA (`nvidia-smi`); en Mac y AMD, use tramos cortos y mire el monitor de actividad.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "La guardia en la terminal: los tramos, la temperatura, una espera a 78 °C y la reanudación.",
          "dice": "Antes de cada tramo, la guardia mira la temperatura. Si está alta, espera. Si sube demasiado, corta. Y después sigue desde donde quedó.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "La guardia (archivo, primer cuadro, último cuadro, cuadros por tramo)",
            "lenguaje": "bash",
            "texto": "./guardia.sh salida/toma1.blend 1 96 24"
          }
        ]
      },
      {
        "n": "5.5",
        "titulo": "Cuadros en el disco",
        "cuerpo": "Los cuadros se guardan como imágenes en `salida/<toma>/`, en el disco, y al final se unen en un video. Así un corte no le hace perder todo. La guardia avisa si algún cuadro salió vacío (0 bytes).",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La carpeta de una toma con sus PNG numerados y el aviso «0 cuadros vacíos»."
        }
      },
      {
        "n": "5.6",
        "titulo": "Tres consejos",
        "cuerpo": "1. En una laptop: enchufada y sobre una mesa, nunca sobre la cama.\n2. Lo largo, cuando no la usa.\n3. Nada de Cycles para probar.\n\nNo suba relojes ni toque ventiladores.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una lámina con los tres consejos: laptop enchufada sobre una mesa, lo largo cuando no la usa y nada de Cycles para probar."
        }
      },
      {
        "n": "5.7",
        "titulo": "Lo pesado, a otra máquina",
        "cuerpo": "En Vion, lo pesado va a una PC aparte, con su guardia, y la laptop hace lo liviano. Si usted tiene dos computadoras, puede hacer lo mismo: copie la carpeta y corra la guardia en la más potente.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Ultron en modo demo: la sala Taller 3D con la PC, el botón «Prestar la GPU» y la temperatura."
        }
      }
    ]
  },
  {
    "n": 6,
    "slug": "6-editar-toma-por-toma",
    "titulo": "Editar toma por toma",
    "objetivo": "Cambiar una toma en palabras sin volver a dibujar las demás, y volver atrás si hace falta.",
    "resultado": "La toma 2 rehecha y las otras reusadas al instante.",
    "laminas": [
      {
        "n": "6.1",
        "titulo": "Esto no lo va a hacer nunca más",
        "cuerpo": "Cambiar un detalle y esperar que se dibuje todo el video de nuevo.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 10,
          "seVe": "Una barra de render que tarda y tarda por un cambio chico; encima, una cruz roja."
        }
      },
      {
        "n": "6.2",
        "titulo": "La huella",
        "cuerpo": "`armar.py` saca un código corto (una **huella**) del texto de cada toma. Si la toma no cambió, la huella es la misma y el video que ya existe se **reusa**. Solo se dibuja lo que cambió.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Tres tomas con su huella; cambia una línea de la toma 2 y solo esa huella cambia de color.",
          "dice": "Cada toma tiene su huella. Si no cambió, se reusa. Solo se dibuja lo nuevo.",
          "vozEnOff": true
        }
      },
      {
        "n": "6.3",
        "titulo": "Cambiar una toma",
        "cuerpo": "Pida lo de abajo. Claude toca solo esa toma. Al renderizar: «toma 1: igual, se reusa · toma 2: cambió, se dibuja · toma 3: igual, se reusa».",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "El pedido; el cambio solo en la toma 2; la salida de `armar.py` que dice qué reusa y qué dibuja."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "En la toma 2, la cámara más baja, a la altura de una persona, y que dure 5 segundos."
          }
        ]
      },
      {
        "n": "6.4",
        "titulo": "Volver atrás",
        "cuerpo": "Cada versión del archivo queda en `escenas/historial/` con su fecha. Vuelva a la anterior y el render viejo sigue ahí.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La carpeta `escenas/historial/` con varias versiones de la escena, cada una con su fecha."
        }
      },
      {
        "n": "6.5",
        "titulo": "En nuestro estudio",
        "cuerpo": "Cada toma tiene sus etapas (vista, borrador, alta, IA) y se elige cuál entra al video.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Ultron en modo demo: la sala de escenas 3D, una toma con sus etapas y el botón «usar esta»."
        }
      },
      {
        "n": "6.6",
        "titulo": "Las demás ni se enteran",
        "cuerpo": "Una toma cambia; las otras quedan como estaban.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 10,
          "seVe": "Chispa chasquea los dedos y una toma cambia detrás de ella.",
          "dice": "Una toma cambia. Las demás, ni se enteran."
        }
      }
    ]
  },
  {
    "n": 7,
    "slug": "7-del-borrador-al-video",
    "titulo": "Del borrador al video (y la IA encima, si quiere)",
    "objetivo": "Unir las tomas en un video con título y música y, si quiere, pasar una toma por IA local.",
    "resultado": "El video de 20 a 40 s, con título y música; opcional, una toma con IA local.",
    "laminas": [
      {
        "n": "7.1",
        "titulo": "El video terminado",
        "cuerpo": "Así se ve el resultado del curso: una escena, cuatro tomas, título y música.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "El video final de ejemplo: la casa de campo en cuatro tomas, con título y música."
        }
      },
      {
        "n": "7.2",
        "titulo": "Lo último",
        "cuerpo": "Faltan tres cosas: unir las tomas, ponerles título y música y, si quiere, un acabado realista.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa en plano medio, sobre el fondo crema.",
          "dice": "Tiene sus tomas. Falta lo último: unirlas, ponerles un título y, si quiere, darles un acabado realista."
        }
      },
      {
        "n": "7.3",
        "titulo": "Unir",
        "cuerpo": "Anote las tomas en orden en `lista.txt` y corra `unir.sh` (en Windows, `unir.ps1`). Por dentro hace lo del segundo bloque de abajo. Música propia o con licencia: `--musica tema.mp3`. Si hizo el curso de motion, ponga su título animado al principio.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "`lista.txt` con las tomas en orden, el comando y el video unido con música."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Unir las tomas",
            "lenguaje": "bash",
            "texto": "./unir.sh lista.txt video.mp4"
          },
          {
            "tipo": "comando",
            "etiqueta": "Lo que hace por dentro",
            "texto": "ffmpeg -f concat -safe 0 -i lista.txt -c copy video.mp4"
          }
        ]
      },
      {
        "n": "7.4",
        "titulo": "Cómo la IA «viste» la toma",
        "cuerpo": "La IA no inventa la escena: la viste. Recibe dos cosas de Blender:\n\n- la **profundidad** de cada cuadro (blanco cerca, negro lejos), para respetar las formas y la cámara;\n- una **foto guía** (un cuadro pasado a foto), para saber cómo tiene que verse.\n\nAsí la cámara queda igual que en Blender.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "Un diagrama: la toma de Blender → su profundidad en grises + la foto guía → Wan 2.2 → la toma con aspecto real.",
          "dice": "La inteligencia artificial no inventa la escena: la viste. La profundidad le da las formas; la foto guía, el aspecto.",
          "vozEnOff": true
        }
      },
      {
        "n": "7.5",
        "titulo": "Nuestro resultado, con números",
        "cuerpo": "Una órbita de 4 s alrededor del auto, hecha toda en nuestra PC (RTX 4070 Ti SUPER, 16 GB): **unos 7 min, gratis**, con el mismo encuadre que Blender. Usó **15,6 GB** de memoria de video y llegó a **72 °C**.\n\nCon 8 GB, la documentación de ComfyUI dice que el modelo «debería entrar» descargando a la RAM: **nosotros no lo probamos**.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "La toma «Estaciona frente a la casa» en Blender y con IA, lado a lado, con las cifras abajo."
        }
      },
      {
        "n": "7.6",
        "titulo": "Si su PC puede: ComfyUI",
        "cuerpo": "Todo gratis y en su máquina: **ComfyUI** (GPL-3), **Wan 2.2 Fun Control 5B** (Apache-2.0) para el video y **FLUX.2 [klein] 4B** (Apache-2.0) para la foto guía (ojo: la versión 9B no es para uso comercial). Unos 19 GB de descarga.\n\nLa profundidad sale del kit: `--calidad profundidad`. Versiones, archivos y pasos en `ia-local.md`. Fije las versiones y no instale nodos de terceros sin leerlos.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "ComfyUI portable, el flujo con la profundidad y la foto guía, la cola y el resultado (acelerado).",
          "dice": "Si su computadora puede, el camino es ComfyUI con el modelo Wan. Todo queda en su máquina. Los pasos exactos están en la guía del kit.",
          "vozEnOff": true
        }
      },
      {
        "n": "7.7",
        "titulo": "Si su PC no puede",
        "cuerpo": "Hay servicios pagos que hacen lo mismo en la nube. Con lo que pagamos nosotros (fal.ai, 2026-11-04): Kling O3 Edit USD 0,126 por segundo + la foto guía USD 0,15: una toma de 5 s ≈ USD 0,78. O quédese con EEVEE: muchas veces alcanza.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tarjeta de costos con la fecha: Kling O3 Edit USD 0,126 por segundo, la foto guía USD 0,15 y una toma de 5 s por unos USD 0,78."
        }
      },
      {
        "n": "7.8",
        "titulo": "Una frase, una escena, un video",
        "cuerpo": "Si quiere mostrarnos el suyo, la comunidad de Vion está abierta: el enlace está abajo.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa sobre el video final; señala a la cámara.",
          "dice": "Eso es todo. Una frase, una escena, un video. Si quiere mostrarnos el suyo, la comunidad de Vion está abierta. El enlace, abajo."
        }
      }
    ]
  }
];
