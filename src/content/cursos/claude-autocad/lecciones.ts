// Las lecciones de «C1-autocad», lámina por lámina, desde el storyboard de la aldea
// (docs/planes/cursos/C1-autocad.md, 2026-11-10). Texto completo de cada lámina; los videos e imágenes van en ../medios.json.
import type { LeccionCurso } from '../../tipos';

export const lecciones: LeccionCurso[] = [
  {
    "n": 1,
    "slug": "1-la-ia-en-autocad",
    "titulo": "Qué hace (y qué no) la IA en AutoCAD",
    "objetivo": "Entender las cinco formas de conectar Claude con AutoCAD y elegir la suya según tenga AutoCAD completo, LT o Mac.",
    "laminas": [
      {
        "n": "1.1",
        "titulo": "¿La IA dibuja planos sola?",
        "cuerpo": "No. Lo que sí hace muy bien es **leer los planos que usted ya tiene**. En este curso, Claude Code va a leer un plano de muestra de Autodesk (`home_floor_plan.dwg`), contar sus puertas, ventanas y recintos, pasarlo a Excel y armar un reporte en PDF. Y usted va a revisar cada cifra antes de que salga.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa, de medio cuerpo sobre un fondo crema; arriba, la pregunta «¿LA IA DIBUJA PLANOS SOLA?», que se tacha.",
          "dice": "Seguro escuchó que la inteligencia artificial ya dibuja planos sola. No es cierto. Pero hay algo que sí hace muy bien: leer los planos que usted ya tiene."
        }
      },
      {
        "n": "1.2",
        "titulo": "Así se ve",
        "cuerpo": "AutoCAD con el plano a un lado y Claude Code en la terminal al otro. Usted le pregunta qué hay adentro y Claude lo lee: **226 capas, 148 bloques, 101 etiquetas de recinto**. No tocó nada del plano.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 18,
          "seVe": "AutoCAD con el plano de muestra en una ventana oscura y, a la derecha, la terminal. Claude responde y la imagen se acerca a «226 capas · 148 bloques · 101 recintos»."
        }
      },
      {
        "n": "1.3",
        "titulo": "Lo que sí y lo que no",
        "cuerpo": "**Sí:** leer capas, bloques y atributos · contar · comparar dos datos · escribir rutinas · armar un reporte. **No:** decidir el criterio de ingeniería · firmar un plano · adivinar lo que el plano no dice. Por ejemplo, este plano no dice cuántas veces se repite la planta tipo. Ninguna IA lo puede saber.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Dos columnas «SÍ» y «NO» que se llenan alternadas; la última fila del NO («adivinar…») queda marcada."
        }
      },
      {
        "n": "1.4",
        "titulo": "Cinco formas de conectarlos",
        "cuerpo": "Hay cinco formas reales de conectar Claude con AutoCAD, de la más directa a la más simple:\n\n- **A** · un servidor MCP con puente AutoLISP\n- **B** · un servidor MCP por COM\n- **C** · Claude escribe la rutina y usted la carga\n- **D** · lo que AutoCAD ya trae (extracción de datos y scripts)\n- **E** · una copia DXF, sin AutoCAD abierto\n\nLas cinco, una por lámina; al final elige la suya.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Claude a la izquierda, AutoCAD a la derecha; entre los dos, cinco caminos numerados A a E, como cables."
        }
      },
      {
        "n": "1.5",
        "titulo": "A · Servidor MCP con puente AutoLISP",
        "cuerpo": "Un **servidor MCP** es un programa chico que traduce lo que Claude pide en órdenes para AutoCAD. El del curso ([puran-water/autocad-mcp](https://github.com/puran-water/autocad-mcp), MIT) deja cada pedido en un archivo JSON en `C:/temp`, y una rutina AutoLISP que usted carga en AutoCAD (`mcp_dispatch.lsp`) lo ejecuta y devuelve el resultado. **Funciona en AutoCAD completo y en LT desde la 2024** (cuando LT empezó a correr AutoLISP). **No en Mac.** Es el camino del curso (lecciones 2 a 4).",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "El camino A se ilumina: Claude → programa en Python → archivo de pedido (una hoja que viaja) → rutina AutoLISP dentro de AutoCAD → resultado de vuelta. Rótulo: «MCP + AUTOLISP · COMPLETO Y LT 2024+»."
        }
      },
      {
        "n": "1.6",
        "titulo": "B · Servidor MCP por COM",
        "cuerpo": "Otros servidores manejan AutoCAD por **COM**, su interfaz de automatización de Windows (`AutoCAD.Application`). Solo sirve en el **AutoCAD completo** (LT no tiene COM; Mac tampoco). Nosotros probamos uno así ([christiannp/autocad-mcp](https://github.com/christiannp/autocad-mcp)), pero **no tiene licencia de uso**: no lo recomendamos para trabajos con clientes.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Claude → COM → AutoCAD; una etiqueta roja «SIN LICENCIA» sobre el ejemplo."
        }
      },
      {
        "n": "1.7",
        "titulo": "C · Claude escribe la rutina, usted la carga",
        "cuerpo": "Claude escribe una rutina AutoLISP (`.lsp`) o un script (`.scr`) y usted la carga con `APPLOAD` o `SCRIPT`. No hay conexión directa, pero la rutina queda como **un comando más**, para usted y su equipo. Corre en completo, en LT desde la 2024 (sin Visual LISP ni ActiveX: nada de funciones `vla-`) y en AutoCAD para Mac (AutoLISP básico, sin ActiveX). LT para Mac no corre AutoLISP. Se ve en la lección 7.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 12,
          "seVe": "Un `.lsp` que se tipea solo, el archivo cae en la ventana de AutoCAD y aparece un comando nuevo, `CONTAR`."
        }
      },
      {
        "n": "1.8",
        "titulo": "D · Lo que AutoCAD ya trae",
        "cuerpo": "La **extracción de datos** (`DATAEXTRACTION`) saca propiedades y atributos a una tabla o a Excel/CSV y guarda la configuración en un `.dxe` para repetirla (`-DATAEXTRACTION` la corre sin asistente). Los **scripts** (`SCRIPT`) ejecutan un `.scr` línea por línea, sin que nadie toque el teclado. **Ojo:** la extracción de datos no está en LT ni en Mac; ahí, para atributos, `ATTEXT`/`-ATTEXT`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "El asistente de extracción de datos pasa sus pantallas rápido hasta la tabla; al lado, un `.scr` de cuatro líneas."
        }
      },
      {
        "n": "1.9",
        "titulo": "E · Una copia DXF, sin AutoCAD abierto",
        "cuerpo": "Se guarda una copia del plano como **DXF** y Claude escribe un programa en Python ([ezdxf](https://github.com/mozman/ezdxf), MIT) que la lee. Funciona en Windows, Mac y Linux. Es el camino para Mac y **el más seguro: nunca toca el plano original**. Es también la base del extractor del kit (lección 4).",
        "apoyo": {
          "tipo": "motion",
          "segundos": 10,
          "seVe": "Un `.dwg` se copia y se vuelve `.dxf`; Python lo lee en una ventana genérica, sin logos, con la etiqueta «MAC · LINUX»."
        }
      },
      {
        "n": "1.10",
        "titulo": "¿Y lo de Autodesk?",
        "cuerpo": "**AutoCAD 2027** instala un servidor MCP propio, pero hoy **solo lo usa Autodesk Assistant**, está en vista previa, en AutoCAD **solo lee** y es solo de Windows. Lo que sí puede conectar a Claude es el **Product Help MCP** de Autodesk (público, sin clave): le da a Claude la ayuda oficial de más de 110 productos. Va como extra en la lección 2.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El panel «Asistente» de AutoCAD 2027 en una ventana, con la etiqueta «VISTA PREVIA · SOLO LECTURA»."
        }
      },
      {
        "n": "1.11",
        "titulo": "Elija su camino",
        "cuerpo": "Con **AutoCAD completo** en Windows, puede usar todo. Con **LT 2024 o posterior**, el servidor MCP, las rutinas y los scripts, pero no la extracción de datos. En **Mac**, rutinas básicas y la copia DXF. Si su **LT es anterior a 2024**, le queda la copia DXF. *(El cuadro, abajo; también viene en el kit como `cuadro-de-decision.pdf`.)*\n\n| Camino | Completo (Windows) | LT (Windows) | Mac |\n| A · MCP + puente AutoLISP | ✓ | ✓ desde 2024 | No |\n| B · MCP por COM | ✓ (sin licencia: no se recomienda) | No | No |\n| C · Rutina `.lsp` / `.scr` | ✓ | ✓ desde 2024, sin `vla-` | AutoCAD para Mac: AutoLISP básico · LT para Mac: no |\n| D · `DATAEXTRACTION` y `SCRIPT` | ✓ | `SCRIPT` ✓ · extracción: no (usar `-ATTEXT`) | Extracción: no (usar `-ATTEXT`) |\n| E · Copia DXF + Python | ✓ | ✓ | ✓ (también Linux) |",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "El cuadro se arma: columnas «COMPLETO · LT · MAC», filas A a E, y las tildes y las cruces caen una por una."
        }
      },
      {
        "n": "1.12",
        "titulo": "El camino de este curso",
        "cuerpo": "En el curso usamos el **camino A en Windows** y el **E para quien usa Mac**. En la próxima lección se instala todo, paso a paso: tenga AutoCAD a mano.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa entra caminando sobre el cuadro y se para junto a la columna «COMPLETO»; señala la fila A y después la E.",
          "dice": "En el curso usamos el camino A en Windows, y el E para quien usa Mac. En la próxima lección lo instalamos, paso a paso. Tenga AutoCAD a mano."
        }
      }
    ],
    "resultado": "Un cuadro para elegir su camino (AutoCAD completo, LT o Mac), lleno."
  },
  {
    "n": 2,
    "slug": "2-puesta-a-punto",
    "titulo": "La puesta a punto en Windows, paso a paso (y qué cambia en Mac)",
    "objetivo": "Dejar Claude Code conectado a AutoCAD con el servidor MCP y comprobar que anda.",
    "laminas": [
      {
        "n": "2.1",
        "titulo": "Esto, al final de la lección",
        "cuerpo": "Claude dibujando en su AutoCAD y diciéndole qué hizo: un rectángulo de 10 por 5 en una capa `PRUEBA-IA`, con su área. Se llega en seis pasos.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "Un dibujo nuevo vacío; en la terminal se escribe el pedido del rectángulo; aparece el rectángulo; la respuesta «Área: 50». Rótulo: «ESTO, EN SEIS PASOS»"
        }
      },
      {
        "n": "2.2",
        "titulo": "Seis pasos, y una regla",
        "cuerpo": "1 · Claude Code · 2 · Git y uv · 3 · El servidor · 4 · El puente en AutoCAD · 5 · Conectar · 6 · Probar. **La regla de todo el curso: se trabaja siempre sobre copias.** Cree la carpeta `C:\\cursos\\autocad-ia\\` y descargue ahí `home_floor_plan.dwg` desde la página de archivos de muestra de Autodesk ([autodesk.com/autocadlt-samples](https://autodesk.com/autocadlt-samples), 2.360 KB).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "A la izquierda, la lista de los seis pasos; a la derecha, la carpeta vacía y la descarga del plano desde la página de Autodesk."
        }
      },
      {
        "n": "2.3",
        "titulo": "1 · Claude Code",
        "cuerpo": "Abra **PowerShell sin permisos de administrador** y pegue el comando de instalación (en el bloque de abajo). No muestra avance: espere a que termine. Cierre la terminal, abra una nueva y escriba `claude --version`: si ve un número, está instalado. `claude doctor` revisa la instalación. Después escriba `claude` e inicie sesión. **Necesita un plan Pro o superior: el plan gratis no incluye Claude Code.**",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "PowerShell con el comando de instalación; la terminal nueva, `claude --version` con un acercamiento al número, `claude` y el inicio de sesión en el navegador, con la cuenta tapada. Recuadro: «PLAN PRO O SUPERIOR · EL GRATIS NO INCLUYE CLAUDE CODE»."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows, en PowerShell, sin administrador",
            "lenguaje": "powershell",
            "texto": "irm https://claude.ai/install.ps1 | iex\n# cerrar y abrir la terminal\nclaude --version\nclaude doctor"
          }
        ]
      },
      {
        "n": "2.4",
        "titulo": "2 · Git y uv",
        "cuerpo": "**Git** sirve para bajar el servidor y deja que Claude use su consola completa. **uv** instala Python y las piezas del servidor sin que usted tenga que configurarlas (los dos comandos, en el bloque de abajo). Compruebe con `git --version` y `uv --version`.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Las dos instalaciones con `winget` terminadas y las dos versiones en la terminal."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Git para Windows (recomendado) y uv, en PowerShell",
            "lenguaje": "powershell",
            "texto": "winget install --id Git.Git -e\nwinget install --id=astral-sh.uv -e"
          },
          {
            "tipo": "comando",
            "etiqueta": "Comprobar (en una terminal nueva)",
            "lenguaje": "powershell",
            "texto": "git --version\nuv --version"
          }
        ]
      },
      {
        "n": "2.5",
        "titulo": "3 · El servidor, fijado a lo que revisamos",
        "cuerpo": "El servidor es de código abierto (MIT). Se baja y se **fija a la versión exacta que revisamos**: ese código largo de letras y números (el commit) que va en el bloque de abajo. ¿Por qué? Porque este programa va a tocar sus planos: si mañana alguien lo cambia, usted no se entera. Si sube de versión, primero se revisa. {{el commit revisado se publica con el curso}}",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "`git clone`, el `git checkout` con un acercamiento al código del commit y `uv sync`; al costado, un candado con «FIJADO AL COMMIT REVISADO»."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows, en PowerShell",
            "lenguaje": "powershell",
            "texto": "mkdir C:\\cursos\\autocad-ia; cd C:\\cursos\\autocad-ia\ngit clone https://github.com/puran-water/autocad-mcp\ngit -C autocad-mcp checkout <SHA-REVISADO>\ncd autocad-mcp; uv sync; cd .."
          }
        ]
      },
      {
        "n": "2.6",
        "titulo": "No se instala a ciegas",
        "cuerpo": "Antes de recomendarlo leímos su código: nuestra regla es leer antes de instalar y fijar la versión. Tres cosas que tiene que saber, y que dice su propio README:\n\n1. La herramienta `system` → `execute_lisp` corre **AutoLISP libre**: queda siempre en «preguntar», y usted lee qué quiere hacer antes de aprobar.\n2. `drawing` → `create` **borra y purga el dibujo activo**: nunca con un plano abierto.\n3. Los pedidos pasan por archivos en `C:/temp`.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 8,
          "seVe": "Chispa, chiquita en la esquina de la terminal, con los brazos cruzados.",
          "dice": "Un programa que toca sus planos no se instala a ciegas. Ni el nuestro."
        }
      },
      {
        "n": "2.7",
        "titulo": "4 · El puente, dentro de AutoCAD",
        "cuerpo": "1. Escriba `APPLOAD` y cargue `mcp_dispatch.lsp`, que está en la carpeta `lisp-code` del servidor.\n2. AutoCAD avisa que la carpeta no es de confianza: **agréguela a las ubicaciones de confianza solo si es esta carpeta**.\n3. Cuando la línea de comandos dice que el despachador está listo, el puente está abierto.\n4. Si lo agrega a la carga al inicio (Startup Suite), no tiene que repetirlo cada vez.\n5. Revise que exista la carpeta `C:\\temp`: ahí van los pedidos.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "`APPLOAD`, la búsqueda de `lisp-code\\mcp_dispatch.lsp`, el aviso de seguridad, la ubicación de confianza, el mensaje del despachador con un acercamiento y la carga al inicio."
        }
      },
      {
        "n": "2.8",
        "titulo": "5 · Conectar",
        "cuerpo": "Desde la carpeta del kit, el comando del bloque de abajo registra el servidor **solo para este proyecto** y crea un archivo `.mcp.json`. Abra `claude`, **apruebe el servidor** cuando se lo pregunte y escriba `/mcp`: tiene que decir **connected**. {{la dirección del kit se publica con el curso}}",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "El comando `claude mcp add`; se abre `.mcp.json`; en `claude`, la pregunta de aprobar el servidor del proyecto, que se aprueba; `/mcp` muestra «autocad · connected»."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "El kit del curso y el servidor, en PowerShell",
            "lenguaje": "powershell",
            "texto": "git clone <URL-DEL-KIT> kit; cd kit\nclaude mcp add --scope project autocad --env AUTOCAD_MCP_BACKEND=file_ipc -- C:\\cursos\\autocad-ia\\autocad-mcp\\.venv\\Scripts\\python.exe -m autocad_mcp"
          }
        ]
      },
      {
        "n": "2.9",
        "titulo": "Las reglas y los permisos del kit",
        "cuerpo": "Dos archivos importan más que la instalación. **`CLAUDE.md`**, las reglas que Claude lee al empezar: trabajar sobre copias, no guardar nunca sobre el original, verificar después de dibujar. **`.claude/settings.json`**, los permisos: la herramienta que corre AutoLISP libre queda siempre en «preguntar». Los dos vienen en el kit y van completos en los bloques de abajo. {{los nombres exactos de las herramientas en los permisos se confirman al revisar el servidor}}",
        "apoyo": {
          "tipo": "captura",
          "seVe": "`CLAUDE.md` y `settings.json` del kit abiertos, con tres reglas resaltadas: «trabajar sobre copias», «no guardar sobre el original», «system queda en preguntar»."
        },
        "bloques": [
          {
            "tipo": "archivo",
            "etiqueta": "CLAUDE.md",
            "lenguaje": "markdown",
            "texto": "# Proyecto: cantidades desde planos de AutoCAD\n\n## Regla de oro: copias\n- Nunca modificar un plano original. Trabajar en C:\\cursos\\autocad-ia\\copias\\ (plano.dwg → plano_IA_AAAAMMDD.dwg).\n- Si el dibujo activo está guardado en disco y no es una copia, parar y preguntar antes de dibujar, borrar, purgar o guardar.\n- Nunca usar drawing → create con un plano abierto: borra y purga el dibujo activo. Para probar, el usuario abre un dibujo\n  nuevo a mano.\n- Guardar solo con \"guardar como\" hacia la copia.\n\n## Antes de leer o contar\n- Confirmar en qué dibujo se está (system → status y el nombre del dibujo activo).\n- Leer primero: unidades (INSUNITS), capas, bloques, atributos y si hay plantas repetidas a otra escala.\n- Pedidos de lectura: solo lectura, sin cambiar variables.\n\n## Cantidades\n- Una sola versión por planta. Decir cuál y por qué.\n- Áreas: si hay un contorno cerrado que contiene la etiqueta, el área sale de la geometría; diferencia > 2 % con la\n  etiqueta = confianza baja + fila en Observaciones. Sin contorno, la etiqueta (confianza media). Sin nada, FALTA.\n- Cada fila con su confianza (alta, media, baja) y el porqué.\n- Lo que el plano no dice (plantas tipo, niveles) no se inventa: queda como celda para el usuario.\n- Nunca precios. Los del plano, si los hay, solo como referencia y en su moneda.\n- Totales con fórmulas, no con números pegados.\n\n## Herramientas\n- system → execute_lisp corre código libre: explicarle al usuario qué hace y por qué antes de pedirlo.\n- Después de dibujar, verificar (medir, listar) en lugar de suponer.\n\n## Responsabilidad\n- Todo lo que sale es un borrador hasta que lo revisa un profesional responsable."
          },
          {
            "tipo": "archivo",
            "etiqueta": ".claude/settings.json",
            "lenguaje": "json",
            "texto": "{\n  \"permissions\": {\n    \"allow\": [\"mcp__autocad__layer\", \"mcp__autocad__view\"],\n    \"ask\": [\"mcp__autocad__system\", \"mcp__autocad__drawing\", \"mcp__autocad__entity\", \"mcp__autocad__block\", \"mcp__autocad__annotation\"]\n  },\n  \"enabledMcpjsonServers\": [\"autocad\"]\n}"
          }
        ]
      },
      {
        "n": "2.10",
        "titulo": "6 · Probar",
        "cuerpo": "1. En AutoCAD, `NEW`: **un dibujo nuevo, vacío**.\n2. Pregúntele a Claude por el estado del servidor: tiene que decir `file_ipc`.\n3. Pídale el rectángulo (en el bloque de abajo). Respuesta esperada: área 50, perímetro 30.\n\n**Importante:** la orden de crear dibujo de este servidor borra el dibujo activo; nunca la use con un plano abierto.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "Un dibujo nuevo con `NEW`; a «¿En qué estado está el servidor?», Claude contesta `file_ipc`; con el pedido, el rectángulo se dibuja y Claude responde «área 50, perímetro 30»."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "El estado del servidor",
            "texto": "¿En qué estado está el servidor?"
          },
          {
            "tipo": "pedido",
            "etiqueta": "El rectángulo de prueba",
            "texto": "Dibuje un rectángulo de 10 por 5 en una capa PRUEBA-IA y dígame su área."
          }
        ]
      },
      {
        "n": "2.11",
        "titulo": "Si algo falla",
        "cuerpo": "- «`claude` no se reconoce» → abra una terminal nueva.\n- «`irm` no se reconoce» → está en CMD: use PowerShell.\n- «`/mcp` dice failed» → revise la ruta al Python del `.venv`.\n- «Claude espera y se corta» → el despachador no está cargado o AutoCAD tiene un comando a medias: **Esc dos veces**.\n- «Tengo LT 2023 o anterior» → no corre AutoLISP: use la copia DXF (camino E).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Cinco tarjetas de error, cada una con su solución abajo."
        }
      },
      {
        "n": "2.12",
        "titulo": "¿Y en Mac?",
        "cuerpo": "AutoCAD para Mac no tiene COM ni el puente de este servidor, y LT para Mac no corre AutoLISP. Lo que sí: instala Claude Code con el comando de Mac (en el bloque de abajo), guarda una **copia del plano como DXF** y Claude trabaja sobre esa copia; es el método de las lecciones 3 a 6. Las rutinas básicas de AutoLISP corren en AutoCAD para Mac, sin las funciones de ActiveX.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Pantalla partida: a la izquierda, Windows con el puente; a la derecha, una ventana genérica de Mac con la terminal y un `.dxf`. Rótulos: «EN MAC: SIN PUENTE · SIN EXTRACCIÓN DE DATOS · SÍ CLAUDE CODE Y DXF»."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Mac, en la Terminal",
            "lenguaje": "bash",
            "texto": "curl -fsSL https://claude.ai/install.sh | bash"
          }
        ]
      },
      {
        "n": "2.13",
        "titulo": "Extra: la ayuda oficial de Autodesk",
        "cuerpo": "Opcional. El **Product Help MCP** de Autodesk le da a Claude la documentación oficial de más de 110 productos (público, sin clave; solo lee documentación y sale a internet). Dirección: `https://developer.api.autodesk.com/knowledge/public/v1/mcp`. Se agrega con el comando del bloque de abajo. {{el comando se comprueba al grabar}}",
        "apoyo": {
          "tipo": "captura",
          "seVe": "`/mcp` con los dos servidores conectados y una respuesta de Claude que cita la ayuda de Autodesk."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Opcional: la ayuda de Autodesk",
            "lenguaje": "bash",
            "texto": "claude mcp add --transport http autodesk-ayuda https://developer.api.autodesk.com/knowledge/public/v1/mcp"
          }
        ]
      },
      {
        "n": "2.14",
        "titulo": "Listo",
        "cuerpo": "Claude ya ve su AutoCAD. En la próxima lección le pedimos que lea un plano de verdad, sin tocar nada.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 10,
          "seVe": "Chispa, de medio cuerpo, sobre el fondo crema.",
          "dice": "Listo: Claude ya ve su AutoCAD. En la próxima, le pedimos que lea un plano de verdad. Sin tocar nada."
        }
      }
    ],
    "resultado": "`/mcp` muestra «autocad · connected» y Claude dibuja un rectángulo de 10 × 5, con 50 de área, en un dibujo nuevo."
  },
  {
    "n": 3,
    "slug": "3-leer-un-plano",
    "titulo": "Leer un plano: capas, bloques y atributos",
    "objetivo": "Antes de contar, entender cómo está dibujado el plano: unidades, bloques, escalas, atributos y capas.",
    "laminas": [
      {
        "n": "3.1",
        "titulo": "¿Qué hay adentro?",
        "cuerpo": "El plano de muestra es un edificio de apartamentos japonés, con planta baja, planta tipo, último piso y azotea. **Antes de contar nada, hay que saber cómo está dibujado.**",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 12,
          "seVe": "El plano entero en AutoCAD, con un acercamiento lento a la planta tipo. Rótulo: «¿QUÉ HAY ADENTRO?»."
        }
      },
      {
        "n": "3.2",
        "titulo": "El primer pedido: solo lectura",
        "cuerpo": "El primer pedido siempre es de **solo lectura**, y lo dice con esas palabras (en el bloque de abajo; en el kit, `prompts/01-inventario.md`). Y una costumbre: pedirle que **confirme en qué dibujo está**. En nuestra prueba, una herramienta leyó el dibujo equivocado porque estaba activo otro; desde entonces, primero se confirma.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Se escribe el pedido; Claude confirma el nombre del dibujo activo, con un acercamiento, y empieza a leer."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Haga un inventario de solo lectura de este dibujo: unidades, capas, bloques y atributos. No modifique, no guarde y no cambie variables. Antes de leer, confirme en qué dibujo está. Al terminar, escriba el inventario en analisis/inventario.md."
          }
        ]
      },
      {
        "n": "3.3",
        "titulo": "Lo primero: las unidades",
        "cuerpo": "Este plano está en **milímetros**, no en metros ni en pies. Si eso se lee mal, cada área sale un millón de veces más grande. Después: **226 capas**, **148 bloques** con nombre y **101 etiquetas de recinto**.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 12,
          "seVe": "La respuesta de Claude; cada dato sale de la terminal como cifra grande: «UNIDADES: MILÍMETROS» · «226 CAPAS» · «148 BLOQUES» · «101 ETIQUETAS DE RECINTO»."
        }
      },
      {
        "n": "3.4",
        "titulo": "Todo vive en bloques, y cada planta está dos veces",
        "cuerpo": "En el espacio modelo hay solo 13 objetos: **todo el proyecto vive adentro de bloques**, uno por planta (`1F`, `SF`, `TF`, `TRF`, `TRR`). Y **cada planta está dibujada dos veces**: una para escala 1:100 (`_100`) y otra para 1:50 (`_50`). Si alguien suma todo, cada cantidad sale el doble.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Los 13 objetos; cada uno se abre como una caja con su planta adentro, y cada caja tiene dos copias, «_100» y «_50»."
        }
      },
      {
        "n": "3.5",
        "titulo": "Esto lo decide usted",
        "cuerpo": "Una suma ingenua cuenta todo dos veces. **Esto no lo resuelve la IA: lo resuelve usted, eligiendo una sola versión** por planta (en este curso, la 1:100 para contar piezas y recintos).",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 10,
          "seVe": "Chispa aparece al lado de las dos cajas «_100» y «_50» y las mira alternadamente.",
          "dice": "Mismo edificio, dos dibujos. Ojo: una suma ingenua cuenta todo dos veces."
        }
      },
      {
        "n": "3.6",
        "titulo": "Los atributos: donde está la información",
        "cuerpo": "Cada puerta y ventana tiene una etiqueta con **21 datos**: tipo, medidas, fabricante, precio, resistencia al fuego. Están en japonés, y Claude los traduce. Las etiquetas de recinto traen el **área** y los **acabados** de piso, pared y cielo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Claude lista los atributos de una etiqueta de puerta; la cámara se acerca a los nombres en japonés y a la traducción que Claude pone al lado."
        }
      },
      {
        "n": "3.7",
        "titulo": "Las capas tienen un patrón",
        "cuerpo": "`PLANTA-DISCIPLINA_ELEMENTO-ESCALA`. Ejemplo: `SF-R_EWALL-50`. Ese patrón le dice a Claude qué es un muro de concreto, qué es un tabique y qué es un acabado, **aunque los muros sean solo líneas**.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "Claude explica el patrón; el nombre `SF-R_EWALL-50` se separa en sus cuatro partes."
        }
      },
      {
        "n": "3.8",
        "titulo": "¿Qué se puede contar con confianza?",
        "cuerpo": "- **Puertas y ventanas: alta** (cada una es un bloque con su etiqueta).\n- **Recintos y acabados: alta.**\n- **Áreas: media o baja** (muchas están escritas a mano, no medidas).\n- **Muros: baja** (líneas sueltas, sin espesor ni altura: solo dan un orden de magnitud).",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Una tabla de cuatro filas con la confianza en color: alta, alta, media o baja, y baja."
        }
      },
      {
        "n": "3.9",
        "titulo": "Déjelo escrito",
        "cuerpo": "Pídale que deje todo en `analisis/inventario.md`. Ese inventario es la base de la próxima lección, y le sirve para explicarle al cliente por qué una cifra tiene confianza baja.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "`analisis/inventario.md` abierto en el editor."
        }
      },
      {
        "n": "3.10",
        "titulo": "Leer antes de contar",
        "cuerpo": "Unidades, bloques, escalas, atributos y capas: con eso sabe qué puede contar y con qué confianza. Ahora sí: a Excel.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 8,
          "seVe": "Chispa, de frente; rótulo «LEER ANTES DE CONTAR».",
          "dice": "Leer antes de contar es lo que separa una cifra que se defiende de una que no. Ahora sí: a Excel."
        }
      }
    ],
    "resultado": "El inventario del plano y la tabla «¿qué se puede cuantificar?», con la confianza de cada cosa."
  },
  {
    "n": 4,
    "slug": "4-cantidades-a-excel",
    "titulo": "Cantidades a Excel",
    "objetivo": "Sacar puertas, ventanas, recintos y muros a un Excel que se pueda revisar.",
    "laminas": [
      {
        "n": "4.1",
        "titulo": "Así termina esta lección",
        "cuerpo": "Cinco hojas, cada cifra con su confianza y ninguna escrita a mano. En el resumen de la planta tipo: 51 puertas y 22 ventanas y shoji.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 12,
          "seVe": "El Excel se abre; la imagen recorre las pestañas y se detiene en «Resumen»."
        }
      },
      {
        "n": "4.2",
        "titulo": "La celda que pone usted",
        "cuerpo": "En el resumen hay una celda vacía: **Plantas tipo**. El plano no dice cuántas veces se repite la planta tipo. Ese número lo pone usted.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 8,
          "seVe": "Chispa, en capa sobre el Excel, señala la celda vacía «Plantas tipo».",
          "dice": "Fíjese en esta celda vacía. El plano no lo dice. Lo pone usted."
        }
      },
      {
        "n": "4.3",
        "titulo": "Primero, lo que AutoCAD ya trae",
        "cuerpo": "La **extracción de datos** saca los atributos de los bloques a Excel y guarda la configuración en un `.dxe` para repetirla. Funciona, pero **en este plano cuenta las dos escalas** y no sabe cuál es cuál. En LT no existe: el equivalente es `-ATTEXT`, que exporta atributos a un texto.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "El asistente de extracción de datos: se eligen los bloques de puertas y sus atributos, la salida a `.xlsx` y se guarda el `.dxe`. Rótulo: «SOLO AUTOCAD COMPLETO · EN LT: -ATTEXT»."
        }
      },
      {
        "n": "4.4",
        "titulo": "Escriba el criterio antes de pedir",
        "cuerpo": "1. Puertas, ventanas y recintos: solo la versión 1:100.\n2. Muros: solo la 1:50, que es la única que separa los tipos, y como orden de magnitud.\n3. Área: de la geometría si hay contorno dibujado; la etiqueta solo se compara.\n4. Cada fila lleva su confianza.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Una pizarra con los cuatro puntos del criterio."
        }
      },
      {
        "n": "4.5",
        "titulo": "Una copia DXF y el pedido",
        "cuerpo": "En AutoCAD, `SAVEAS` de una copia en formato DXF: `copias\\home_floor_plan_copia.dxf`. Así el programa nunca toca el original, y el mismo método sirve en Mac. Después, el pedido con su criterio pegado (en el bloque de abajo; en el kit, `prompts/02-cantidades.md`).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "`SAVEAS` a DXF; en Claude Code se pega el pedido."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "El criterio y el extractor",
            "texto": "Lea analisis/inventario.md. Con este criterio:\n1. Puertas, ventanas y recintos: solo la versión 1:100.\n2. Muros: solo la 1:50, como orden de magnitud.\n3. Área: de la geometría si hay contorno cerrado; la etiqueta solo se compara (diferencia > 2 % = confianza baja + Observaciones).\n4. Cada fila con su confianza (alta, media, baja) y el porqué.\nescriba cantidades/extraer_dxf.py, que lea copias/home_floor_plan_copia.dxf con ezdxf (incluidos los bloques anidados y sus atributos) y arme cantidades_home_floor_plan.xlsx con cinco hojas: Resumen, Puertas y ventanas, Recintos, Muros y Observaciones. Totales con fórmulas. Una celda editable para las plantas tipo. Columna de confianza en cada hoja.\nAl terminar, compare los conteos con el inventario y explíqueme cada diferencia."
          }
        ]
      },
      {
        "n": "4.6",
        "titulo": "Claude escribe el programa y lo corre",
        "cuerpo": "Claude escribe `extraer_dxf.py` (Python con ezdxf y openpyxl), lo corre y corrige lo que falla. {{el error real que haya encontrado en la grabación, solo si pasó}}",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "Claude escribe y corre el programa, en cámara rápida, y corrige lo que falla; la terminal termina con «Excel listo»."
        }
      },
      {
        "n": "4.7",
        "titulo": "Lo que sale",
        "cuerpo": "- **Puertas y ventanas:** una fila por pieza, con su marca, tipo, medidas, planta y confianza.\n- **Recintos:** dos columnas de área, la medida en el dibujo y la escrita en la etiqueta; 31 de 96 recintos tienen un contorno para medir, el resto usa la etiqueta y queda con confianza media.\n- **Resumen:** todo son fórmulas: si cambia una fila, cambia el total.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "La hoja «Puertas y ventanas» (la cámara baja por las filas), «Recintos» (las dos columnas de área), «Resumen» con la barra de fórmulas visible."
        }
      },
      {
        "n": "4.8",
        "titulo": "Plantas tipo: N",
        "cuerpo": "La celda de plantas tipo es la única que se escribe a mano. Cuando usted pone el número, los totales del edificio se calculan solos.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 12,
          "seVe": "Una réplica de la hoja: la celda de plantas tipo recibe «N» y los totales del edificio se recalculan."
        }
      },
      {
        "n": "4.9",
        "titulo": "Una pregunta puntual, en vivo",
        "cuerpo": "Para una pregunta puntual no hace falta el programa: con el servidor conectado y el plano abierto, Claude contesta en vivo (en el bloque de abajo). Es la forma más rápida de comprobar una fila del Excel.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "La pregunta; Claude responde y marca las ventanas en AutoCAD, con un acercamiento a la selección."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "¿Cuántas ventanas AW-1 hay en la planta tipo, versión 1:100? Muéstreme dónde están."
          }
        ]
      },
      {
        "n": "4.10",
        "titulo": "La regla de áreas",
        "cuerpo": "Si hay un contorno cerrado, **el área sale de la geometría**. Si difiere **más de un 2 %** de la etiqueta, la fila baja a **confianza baja** y va a la hoja **Observaciones** con las dos cifras. Sin contorno, la etiqueta (confianza media). Sin nada, «FALTA». Vale para cualquier plano.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Una pizarra: «El área: geometría manda · Diferencia > 2 % → confianza baja + fila en Observaciones»."
        }
      },
      {
        "n": "4.11",
        "titulo": "Un Excel que se arma solo…",
        "cuerpo": "…no es un Excel correcto. La próxima lección es la que hace que estas cifras se puedan entregar: revisarlas.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 8,
          "seVe": "Chispa, de medio cuerpo, sobre el fondo crema.",
          "dice": "Un Excel que se arma solo no es un Excel correcto. Eso viene ahora."
        }
      }
    ],
    "resultado": "`cantidades_home_floor_plan.xlsx` con cinco hojas (Resumen, Puertas y ventanas, Recintos, Muros, Observaciones), totales con fórmulas, las plantas tipo como celda editable y la columna de confianza. Todavía es un borrador: se revisa en la lección 5."
  },
  {
    "n": 5,
    "slug": "5-validar-cantidades",
    "titulo": "Validar las cantidades (nunca a ciegas)",
    "objetivo": "Revisar el Excel como lo revisaría un profesional y saber qué firma y qué no.",
    "laminas": [
      {
        "n": "5.1",
        "titulo": "88 piezas. Son 73.",
        "cuerpo": "Un conteo automático da **88 puertas y ventanas** en la planta tipo. Son **73**.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 8,
          "seVe": "La cifra grande, en rojo, «88 PIEZAS», que se tacha y baja a «73»."
        }
      },
      {
        "n": "5.2",
        "titulo": "¿Dónde estaba el error?",
        "cuerpo": "Quince piezas de más en una sola planta, y nadie se equivocó al sumar.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 12,
          "seVe": "Chispa, de frente, seria.",
          "dice": "Quince piezas de más en una sola planta. Y nadie se equivocó al sumar. ¿Dónde estaba el error?"
        }
      },
      {
        "n": "5.3",
        "titulo": "En el módulo de baño",
        "cuerpo": "El módulo de baño («WaterSpace») es un bloque que lleva adentro las puertas **en las dos escalas**. Un conteo que no lo sabe las cuenta dos veces. El criterio de una sola escala lo arregla, **pero solo si alguien lo revisó**.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "El bloque «WaterSpace» se abre y adentro aparecen las puertas en «_100» y en «_50»."
        }
      },
      {
        "n": "5.4",
        "titulo": "Las etiquetas dobles",
        "cuerpo": "La planta baja: sumando las etiquetas da **450 m²**. Son **282 m²**: el estacionamiento está etiquetado dos veces.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 12,
          "seVe": "«450 m²» que baja a «282 m²»; abajo, el estacionamiento en el plano con las dos etiquetas iguales resaltadas."
        }
      },
      {
        "n": "5.5",
        "titulo": "Las áreas escritas a mano",
        "cuerpo": "El pasillo dice **4,47 m²** en la etiqueta y mide **3,79 m²** en el dibujo: 18 % de diferencia. El cuarto de máquinas: **19,08** contra **21,80**. Esas filas no se corrigen solas: **se miran en el plano y decide usted**.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La hoja «Observaciones» con las dos filas resaltadas."
        }
      },
      {
        "n": "5.6",
        "titulo": "La lista de chequeo",
        "cuerpo": "- ☐ Unidades confirmadas\n- ☐ Una sola escala\n- ☐ Etiquetas repetidas\n- ☐ Bloques sin su etiqueta (como una puerta del último piso que no tiene ficha)\n- ☐ Áreas del dibujo contra las escritas\n- ☐ Lo que el plano no dice (las plantas tipo)\n- ☐ Una muestra contada a mano\n- ☐ El Excel sin errores de fórmula\n\n*(En el kit: `validar/lista-de-chequeo.md`.)*",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "La lista se tilda punto por punto al costado de la grabación del Excel."
        }
      },
      {
        "n": "5.7",
        "titulo": "La muestra contada a mano",
        "cuerpo": "La prueba más simple: elija un tipo de pieza y un sector, **cuéntelos usted** y compare con el filtro del Excel. Si coincide, sigue. Si no, **no se entrega nada hasta saber por qué**.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "Una persona cuenta a mano las ventanas de un apartamento de la planta tipo, seleccionándolas una por una, con un contador en pantalla; al lado, el filtro del Excel."
        }
      },
      {
        "n": "5.8",
        "titulo": "La IA cuenta. Usted revisa. Un profesional firma.",
        "cuerpo": "Lo que llega a una obra o a un presupuesto lo firma **un profesional responsable**, con su criterio y con la normativa de su país (Código Sísmico, CFIA, INVU: pregunte, no lo invente). Y **nunca le pida precios a una IA**: los de este plano están en yenes y no sirven para Costa Rica.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 12,
          "seVe": "Fondo azul claro y texto grande en tres golpes: «LA IA CUENTA» · «USTED REVISA» · «UN PROFESIONAL FIRMA»; abajo, chico: «Nunca ponga precios de una IA»."
        }
      },
      {
        "n": "5.9",
        "titulo": "Si no la puede explicar, no la entregue",
        "cuerpo": "Cada cifra del Excel tiene que poder explicarse con el plano en la mano. Si no puede, no sale.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 10,
          "seVe": "Chispa entra por la derecha sobre «UN PROFESIONAL FIRMA» y se queda al lado.",
          "dice": "Si una cifra no la puede explicar, no la entregue. Así de simple."
        }
      }
    ],
    "resultado": "La lista de chequeo cumplida y la hoja de Observaciones revisada."
  },
  {
    "n": 6,
    "slug": "6-reporte-en-pdf",
    "titulo": "El reporte en PDF para el cliente",
    "objetivo": "Convertir el Excel en un diagnóstico de una página que un cliente entiende.",
    "laminas": [
      {
        "n": "6.1",
        "titulo": "Lo que recibe el cliente: una página",
        "cuerpo": "No el Excel, no el código: **una página** con lo que se pudo medir, lo que está mal en el plano y cómo dibujarlo mejor.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "El PDF del diagnóstico del plano de muestra en una ventana clara, con un acercamiento lento desde el título."
        }
      },
      {
        "n": "6.2",
        "titulo": "Tres partes",
        "cuerpo": "**1** · La tabla de cantidades por planta, con su confianza. **2** · Los cinco problemas que más cambian las cifras. **3** · Tres reglas de dibujo para que el próximo plano se pueda contar sin sorpresas.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "El PDF se separa en sus tres bloques, uno por uno: «1 · LO QUE SE PUDO CUANTIFICAR» · «2 · LOS 5 PROBLEMAS» · «3 · TRES REGLAS DE DIBUJO»"
        }
      },
      {
        "n": "6.3",
        "titulo": "El pedido: las mismas cifras",
        "cuerpo": "La regla clave: **el PDF usa las mismas cifras del Excel y no recalcula nada**. Si el reporte y la tabla no coinciden, el cliente deja de confiar en los dos (el pedido, en el bloque de abajo; en el kit, `prompts/03-reporte.md`).",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El pedido escrito en Claude Code."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "El reporte de una página",
            "texto": "Con el Excel y el inventario, arme un PDF de una página con tres partes: lo que se pudo cuantificar (por planta, con su confianza), los 5 problemas de más impacto y 3 reglas de dibujo. Use las mismas cifras del Excel, no recalcule nada. Marque la confianza de cada fila. Diga lo que el plano no dice. Sin precios."
          }
        ]
      },
      {
        "n": "6.4",
        "titulo": "Un programa, para repetirlo",
        "cuerpo": "Claude arma el PDF con un programa (`reporte/generar_reporte.py`, con reportlab), así se repite igual con el próximo plano. Lo revisa como usted: si algo no entra en una página, **se ajusta lo secundario, nunca las cifras**.\n\n*Opcional:* las skills `xlsx` y `pdf` de Anthropic le enseñan a Claude a armar y revisar hojas de cálculo y PDF (en el bloque de abajo; licencia Apache 2.0; traen scripts: léalas antes de instalarlas).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "Claude escribe y corre el programa, en cámara rápida, y abre el PDF; después, el ajuste: «la tabla no entra; achique la letra de las notas, no las cifras»."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Opcional, dentro de Claude Code",
            "texto": "/plugin marketplace add anthropics/skills\n/plugin install document-skills@anthropic-agent-skills"
          }
        ]
      },
      {
        "n": "6.5",
        "titulo": "Lea el problema uno",
        "cuerpo": "**Problema 1:** cada planta está dibujada dos veces; una medición sin criterio da **302 piezas de carpintería en vez de 151, y 1.458 m² en vez de 729 m²**. **Problema 2:** el plano no dice cuántas plantas tipo hay; sin ese dato no hay total del edificio. El reporte no lo inventa: da las cifras por planta y lo dice.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 10,
          "seVe": "Chispa, sobre el PDF, señala el problema 1; la imagen se acerca a las dos cifras.",
          "dice": "Lea el problema uno. Es el error más caro de este plano."
        }
      },
      {
        "n": "6.6",
        "titulo": "La última revisión",
        "cuerpo": "Antes de mandarlo: que **cada cifra del PDF esté en el Excel**. Y mientras un profesional no lo haya revisado, el PDF dice **«BORRADOR · SUJETO A REVISIÓN PROFESIONAL»**.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Claude compara el PDF con el Excel cifra por cifra y escribe cuántas coinciden; un sello de texto cae en la esquina del PDF."
        }
      },
      {
        "n": "6.7",
        "titulo": "Una página que se entiende",
        "cuerpo": "Tiene el Excel revisado y el reporte de una página con las mismas cifras.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 8,
          "seVe": "Chispa, de medio cuerpo, con el PDF desenfocado de fondo.",
          "dice": "Un reporte de una página que se entiende vale más que cinco hojas que nadie lee."
        }
      }
    ],
    "resultado": "El PDF con tres partes: lo que se pudo cuantificar, los 5 problemas de más impacto y 3 reglas de dibujo. Dice «BORRADOR · SUJETO A REVISIÓN PROFESIONAL» hasta que lo revisa un profesional."
  },
  {
    "n": 7,
    "slug": "7-rutinas-y-ahorro",
    "titulo": "Rutinas que se repiten y cuánto se ahorra",
    "objetivo": "Convertir lo que su oficina repite en un comando de AutoCAD y medir, con datos propios, si valió la pena.",
    "laminas": [
      {
        "n": "7.1",
        "titulo": "Contar puertas. Otra vez.",
        "cuerpo": "Lo que su oficina repite todas las semanas puede ser un comando de AutoCAD. En esta lección: una rutina, un script y cómo medir, con sus datos, si valió la pena.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 9,
          "seVe": "Tres cortes rápidos de Chispa diciendo lo mismo, cada vez más cansada: de cerca, de medio cuerpo y de cuerpo entero.",
          "dice": "Contar puertas. Contar puertas. … Contar puertas."
        }
      },
      {
        "n": "7.2",
        "titulo": "Cuatro preguntas antes de automatizar",
        "cuerpo": "- ¿Se repite **todas las semanas**?\n- ¿Sigue **reglas que se pueden escribir**?\n- ¿El resultado **se revisa en minutos**?\n- ¿Y si sale mal, **se nota antes de llegar al cliente**?\n\nSi las cuatro son sí, es candidata.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Una pizarra con las cuatro preguntas, tildadas."
        }
      },
      {
        "n": "7.3",
        "titulo": "Una rutina: `CONTAR`",
        "cuerpo": "Una rutina AutoLISP es **un comando nuevo** dentro de su AutoCAD. Pídale a Claude que la escriba y **dígale en qué versión corre**: si es LT, sin las funciones de ActiveX (`vla-`) (el pedido, en el bloque de abajo). Cárguela con `APPLOAD` y escriba `CONTAR`: cuenta los bloques del dibujo por nombre. El código, en el kit: `rutinas/CONTAR.lsp`. Para editarla, Autodesk recomienda la extensión AutoLISP de VS Code (Windows y Mac).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El pedido; aparece `CONTAR.lsp`; `APPLOAD`; `CONTAR`; la lista de bloques en la línea de comandos."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Escriba una rutina AutoLISP, CONTAR, que cuente los bloques del dibujo por nombre y escriba el total en la línea de comandos. Que corra en LT 2024: sin funciones vla."
          }
        ]
      },
      {
        "n": "7.4",
        "titulo": "Hace exactamente lo que dice",
        "cuerpo": "`CONTAR` cuenta también los bloques de la otra escala. Una rutina hace exactamente lo que dice, ni más ni menos: **se prueba con sus planos reales**, no con uno limpio.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 12,
          "seVe": "Un acercamiento a la salida de `CONTAR`; un recuadro rojo marca una línea con un bloque «_50», de la otra escala."
        }
      },
      {
        "n": "7.5",
        "titulo": "Un script para muchos dibujos",
        "cuerpo": "Un **script** (`.scr`) es una lista de comandos que AutoCAD ejecuta solo, con `SCRIPT`. Sirve para repetir lo mismo en muchos dibujos: abrir cada copia, aplicar el estándar de capas, guardar como copia nueva. **Igual que siempre: sobre copias, y guardando con otro nombre.** En el kit: `rutinas/ejemplo.scr`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Un `.scr` de cuatro líneas que escribió Claude; `SCRIPT` lo ejecuta sobre dos copias."
        }
      },
      {
        "n": "7.6",
        "titulo": "¿Cuánto ahorra? No lo adivine",
        "cuerpo": "**Mídalo.** Durante dos semanas normales, cada vez que alguien hace la tarea anota qué hizo, cuántos minutos le llevó, en qué proyecto y si tuvo que corregir algo. Después, con la rutina andando, otras dos semanas.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 8,
          "seVe": "Chispa, chiquita, sobre la esquina del plano.",
          "dice": "Bien. ¿Y cuánto tiempo le ahorra esto? No lo adivine. Mídalo."
        }
      },
      {
        "n": "7.7",
        "titulo": "La cuenta",
        "cuerpo": "**Horas al mes = veces × minutos ÷ 60**, más el retrabajo. **Ahorro = (antes + retrabajo) − (después + revisión + mantenimiento).** Revisar lo que hizo la rutina y mantenerla también es trabajo.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "La fórmula se arma pieza por pieza, como piezas que encajan."
        }
      },
      {
        "n": "7.8",
        "titulo": "La planilla del kit",
        "cuerpo": "`medicion-ahorro.xlsx`: hojas «Antes» y «Después» (fecha, persona, tarea, minutos, proyecto, ¿hubo que corregir?, minutos de corrección) y «Cuenta» con la fórmula. No necesita un sistema: una hoja compartida alcanza. Multiplique el ahorro por el costo por hora de quien hace la tarea y compárelo con lo que cuesta la automatización. **Si con datos reales no cierra, mejor saberlo antes.**",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La planilla con sus columnas vacías y una fila marcada «EJEMPLO»."
        }
      },
      {
        "n": "7.9",
        "titulo": "Lo que medimos nosotros",
        "cuerpo": "Sacar las cantidades de este plano tomó **entre 3 y 4 minutos de máquina**. A eso hay que sumarle su revisión, que es la parte que no se automatiza. {{lo que llevó contarlo a mano, solo si se midió completo al grabar}}",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una cifra grande, «3 a 4 min de máquina», y al lado lo que llevó contarlo a mano, si se midió."
        }
      },
      {
        "n": "7.10",
        "titulo": "Lo que tiene ahora",
        "cuerpo": "- ✓ Claude conectado a AutoCAD\n- ✓ Un plano leído sin tocarlo\n- ✓ Sus cantidades en Excel\n- ✓ Una revisión que no deja pasar errores\n- ✓ El reporte para el cliente\n- ✓ Su primera rutina\n- ✓ La forma de medir si valió la pena",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una lista con los siete puntos tildados."
        }
      },
      {
        "n": "7.11",
        "titulo": "Con los planos de su oficina",
        "cuerpo": "Si quiere hacer esto con los planos de su oficina, escríbanos con la tarea que más repite. Empezamos por medir. {{cómo escribirnos: por confirmar}}",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 8,
          "seVe": "Chispa, de medio cuerpo; entra una tarjeta con la forma de escribirnos.",
          "dice": "Si quiere hacer esto con los planos de su oficina, escríbanos. Empezamos por medir."
        }
      }
    ],
    "resultado": "`CONTAR.lsp` andando, un `.scr` de ejemplo y la planilla de medición de dos semanas."
  }
];
