// Las lecciones de «C1-autocad», lámina por lámina, desde el storyboard de la aldea
// (docs/planes/cursos/C1-autocad.md), reescritas para principiantes el 2026-11-14. Los videos e imágenes van en ../medios.json.
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
        "cuerpo": "No. Lo que sí hace muy bien es **leer los planos que usted ya tiene**.\n\nEn este curso, Claude Code lee un plano de muestra de Autodesk (`home_floor_plan.dwg`, un edificio de apartamentos), cuenta sus puertas, ventanas y recintos, pasa las cantidades a Excel y arma un reporte en PDF. Usted revisa cada cifra antes de que salga.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 10,
          "seVe": "Chispa, de medio cuerpo sobre un fondo crema; arriba, la pregunta «¿LA IA DIBUJA PLANOS SOLA?», que se tacha.",
          "dice": "Seguro escuchó que la inteligencia artificial ya dibuja planos sola. No es cierto. Pero hay algo que sí hace muy bien: leer los planos que usted ya tiene."
        }
      },
      {
        "n": "1.2",
        "titulo": "Así se ve",
        "cuerpo": "AutoCAD con el plano abierto y Claude Code al lado. Usted le pide que lea qué hay adentro, sin tocar nada, y Claude le contesta: el plano está en milímetros y tiene **226 capas, 148 bloques con nombre y 101 etiquetas de recinto**.\n\nUna **capa** es un grupo de líneas con un nombre (por ejemplo, «muros»); un **bloque** es una pieza que se repite, como una puerta; una **etiqueta de recinto** es el rótulo de cada habitación.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con lo que Claude lee del plano de muestra: milímetros, 226 capas, 148 bloques con nombre, 101 etiquetas de recinto y 13 objetos sueltos."
        }
      },
      {
        "n": "1.3",
        "titulo": "Lo que sí y lo que no",
        "cuerpo": "**Lo que la IA sí hace bien:** leer capas, bloques y atributos; contar; comparar dos datos; escribir rutinas de AutoCAD; armar un reporte.\n\n**Lo que no:** decidir el criterio de ingeniería, firmar un plano o adivinar lo que el plano no dice. Por ejemplo, este plano no dice cuántas veces se repite la planta tipo del edificio. Ninguna IA lo puede saber: lo pone usted.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Dos columnas «SÍ» y «NO» que se llenan alternadas; la última fila del NO («adivinar…») queda marcada."
        }
      },
      {
        "n": "1.4",
        "titulo": "Cinco formas de conectarlos",
        "cuerpo": "Hay cinco formas reales de conectar Claude con AutoCAD, de la más directa a la más simple:\n\n- **A** · un servidor MCP con un puente dentro de AutoCAD;\n- **B** · un servidor MCP que maneja AutoCAD desde Windows;\n- **C** · Claude escribe una rutina y usted la carga;\n- **D** · las herramientas que AutoCAD ya trae;\n- **E** · una copia del plano en DXF, sin AutoCAD abierto.\n\nLas próximas láminas explican cada una.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Claude a la izquierda, AutoCAD a la derecha; entre los dos, cinco caminos numerados A a E, como cables."
        }
      },
      {
        "n": "1.5",
        "titulo": "A · Servidor MCP con puente AutoLISP",
        "cuerpo": "Un **servidor MCP** es un programa chico que traduce lo que Claude pide en órdenes para AutoCAD. El del curso ([puran-water/autocad-mcp](https://github.com/puran-water/autocad-mcp), de código abierto) deja cada pedido en un archivo en `C:/temp`, y una rutina que usted carga en AutoCAD (`mcp_dispatch.lsp`, escrita en **AutoLISP**, el lenguaje de rutinas de AutoCAD) lo ejecuta y devuelve el resultado.\n\nFunciona en AutoCAD completo y en LT desde la versión 2024 (cuando LT empezó a correr AutoLISP). No funciona en Mac. Es el camino del curso.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "El camino A se ilumina: Claude → programa en Python → archivo de pedido (una hoja que viaja) → rutina AutoLISP dentro de AutoCAD → resultado de vuelta. Rótulo: «MCP + AUTOLISP · COMPLETO Y LT 2024+»."
        }
      },
      {
        "n": "1.6",
        "titulo": "B · Servidor MCP por COM",
        "cuerpo": "Otros servidores manejan AutoCAD por **COM**, la forma en que Windows deja que un programa controle a otro. Solo sirve en el AutoCAD completo: LT no tiene COM, y Mac tampoco.\n\nNosotros probamos uno así ([christiannp/autocad-mcp](https://github.com/christiannp/autocad-mcp)) y funciona, pero no tiene licencia de uso: no se puede usar en trabajos con clientes. Por eso no es el camino del curso.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Claude → COM → AutoCAD; una etiqueta roja «SIN LICENCIA» sobre el ejemplo."
        }
      },
      {
        "n": "1.7",
        "titulo": "C · Claude escribe la rutina, usted la carga",
        "cuerpo": "Claude escribe una rutina AutoLISP (un archivo `.lsp`) o un script (un archivo `.scr`), y usted la carga con `APPLOAD` o `SCRIPT`. No hay conexión directa, pero la rutina queda como **un comando más** de AutoCAD, para usted y su equipo.\n\nCorre en el AutoCAD completo, en LT desde la 2024 (sin las funciones avanzadas que empiezan con `vla-`) y en AutoCAD para Mac. LT para Mac no corre AutoLISP. Se ve en la lección 7.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 12,
          "seVe": "Un `.lsp` que se tipea solo, el archivo cae en la ventana de AutoCAD y aparece un comando nuevo, `CONTAR`."
        }
      },
      {
        "n": "1.8",
        "titulo": "D · Lo que AutoCAD ya trae",
        "cuerpo": "AutoCAD tiene dos herramientas que ya automatizan, sin IA:\n\n- La **extracción de datos** (`DATAEXTRACTION`) saca propiedades y atributos de los bloques a una tabla o a Excel, y guarda la configuración en un archivo `.dxe` para repetirla. Solo en el AutoCAD completo.\n- Los **scripts** (`SCRIPT`) ejecutan un archivo `.scr`, una lista de comandos, línea por línea.\n\nClaude puede escribir el script; usted lo corre.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con la extracción de datos y los scripts de AutoCAD, y lo que hace cada uno."
        }
      },
      {
        "n": "1.9",
        "titulo": "E · Una copia DXF, sin AutoCAD abierto",
        "cuerpo": "Se guarda una copia del plano en formato **DXF** (un formato de dibujo que cualquier programa puede leer) y Claude escribe un programa en Python, con la biblioteca [ezdxf](https://github.com/mozman/ezdxf), que la lee.\n\nFunciona en Windows, Mac y Linux. Es el camino para Mac y el más seguro: nunca toca el plano original. Es también la base del programa de cantidades del kit (lección 4).",
        "apoyo": {
          "tipo": "motion",
          "segundos": 10,
          "seVe": "Un `.dwg` se copia y se vuelve `.dxf`; Python lo lee en una ventana genérica, sin logos, con la etiqueta «MAC · LINUX»."
        }
      },
      {
        "n": "1.10",
        "titulo": "¿Y lo de Autodesk?",
        "cuerpo": "**AutoCAD 2027** trae su propio servidor MCP, pero hoy solo lo usa el asistente de Autodesk (Autodesk Assistant), está en vista previa, en AutoCAD solo lee y es solo para Windows. No se conecta a Claude.\n\nLo que sí se puede conectar a Claude es el **Product Help MCP** de Autodesk: público y sin clave, le da la documentación oficial de sus productos. Es el extra de la lección 2.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con las dos herramientas de Autodesk: el asistente de AutoCAD 2027 y el Product Help MCP."
        }
      },
      {
        "n": "1.11",
        "titulo": "Elija su camino",
        "cuerpo": "Qué puede usar según su AutoCAD:\n\n- **AutoCAD completo en Windows:** todos los caminos.\n- **LT 2024 o más nuevo:** el servidor MCP, las rutinas y los scripts, pero no la extracción de datos.\n- **Mac:** rutinas básicas y la copia DXF.\n- **LT anterior a 2024:** la copia DXF.\n\nEl cuadro completo viene en el kit (`cuadro-de-decision.pdf`).",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "El cuadro se arma: columnas «COMPLETO · LT · MAC», filas A a E, y las tildes y las cruces caen una por una."
        }
      },
      {
        "n": "1.12",
        "titulo": "El camino de este curso",
        "cuerpo": "En el curso se usa el **camino A en Windows** y el **E para quien usa Mac**. En la próxima lección se instala todo, paso a paso: tenga AutoCAD a mano.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 13,
          "seVe": "Chispa, al lado del cuadro de caminos, señala la fila A y la E.",
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
        "cuerpo": "Al final de esta lección, Claude dibuja en su AutoCAD y le dice qué hizo: un rectángulo de 10 por 5 metros en una capa nueva, `PRUEBA-IA`, con su área de **50 m²** y su perímetro de **30 m**. Se llega en seis pasos.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con el pedido del rectángulo de prueba y lo que Claude tiene que contestar: capa PRUEBA-IA, área 50 m², perímetro 30 m."
        }
      },
      {
        "n": "2.2",
        "titulo": "Seis pasos, y una regla",
        "cuerpo": "Los seis pasos: **1** · Claude Code · **2** · Git y uv · **3** · el servidor · **4** · el puente en AutoCAD · **5** · conectar · **6** · probar.\n\n**La regla de todo el curso: se trabaja siempre sobre copias.** Cree la carpeta `C:\\cursos\\autocad-ia\\` y guarde ahí una copia de `home_floor_plan.dwg`, que se baja de la [página de muestras de AutoCAD LT de Autodesk](https://autodesk.com/autocadlt-samples). El original no se toca.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con los seis pasos y la regla de trabajar sobre copias."
        }
      },
      {
        "n": "2.3",
        "titulo": "1 · Claude Code",
        "cuerpo": "Abra **PowerShell** (la terminal de Windows, donde se escriben comandos) sin permisos de administrador y pegue el comando de instalación del bloque de abajo. No muestra avance: espere a que termine.\n\nCierre la terminal, abra una nueva y escriba `claude --version`: si ve un número, quedó instalado. `claude doctor` revisa la instalación. Después escriba `claude` y entre con su cuenta: hace falta un plan pago (Pro o superior).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con los comandos para instalar y comprobar Claude Code en PowerShell."
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
        "cuerpo": "**Git** baja el servidor y guarda versiones de carpetas de archivos. **uv** instala Python y las piezas del servidor sin que usted tenga que configurar nada. Los dos comandos están en el bloque de abajo.\n\nCierre la terminal, abra una nueva y compruebe con `git --version` y `uv --version`.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con los dos comandos de winget y las dos comprobaciones."
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
        "cuerpo": "El servidor es de código abierto (licencia MIT). Se baja con Git y se **fija a una versión exacta**: en GitHub, cada versión tiene un código largo de letras y números, el **commit**. El del bloque de abajo es el que leímos en Vion.\n\n¿Por qué fijarlo? Porque este programa va a tocar sus planos: si mañana alguien lo cambia, a su computadora no llega nada que no se haya revisado. `uv sync` instala lo que el servidor necesita.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con git clone, git checkout del commit revisado y uv sync."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "PowerShell",
            "lenguaje": "powershell",
            "texto": "mkdir C:\\cursos\\autocad-ia; cd C:\\cursos\\autocad-ia\ngit clone https://github.com/puran-water/autocad-mcp\ngit -C autocad-mcp checkout f07b6a5071364a7c4b111ac41a0fc680a3d1ca18\ncd autocad-mcp; uv sync; cd .."
          }
        ]
      },
      {
        "n": "2.6",
        "titulo": "No se instala a ciegas",
        "cuerpo": "Antes de recomendarlo leímos su código: habla con Claude sin internet y no manda datos a ningún lado. Nuestra regla es leer antes de instalar y fijar la versión. Tres cosas que tiene que saber:\n\n1. La herramienta `system` → `execute_lisp` corre **cualquier rutina AutoLISP**. En el kit queda siempre en «preguntar»: usted lee qué quiere hacer antes de aprobar.\n2. `drawing` → `create` **borra y purga el dibujo activo**: nunca la use con un plano abierto.\n3. Los pedidos pasan por archivos en la carpeta `C:/temp`.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 6,
          "seVe": "Chispa, junto a los tres avisos del servidor.",
          "dice": "Un programa que toca sus planos no se instala a ciegas. Ni el nuestro."
        }
      },
      {
        "n": "2.7",
        "titulo": "4 · El puente, dentro de AutoCAD",
        "cuerpo": "El **puente** es la rutina que recibe los pedidos de Claude dentro de AutoCAD:\n\n1. Escriba `APPLOAD` y cargue `mcp_dispatch.lsp`, que está en la carpeta `lisp-code` del servidor.\n2. Si AutoCAD avisa que la carpeta no es de confianza, agréguela a las ubicaciones de confianza, **solo si es esa carpeta**.\n3. Cuando la línea de comandos dice que el despachador quedó cargado, está listo.\n4. Opcional: agréguelo a la carga al inicio, para no repetirlo cada vez. Revise que exista la carpeta `C:\\temp`.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con los cuatro pasos para cargar el puente en AutoCAD."
        }
      },
      {
        "n": "2.8",
        "titulo": "5 · Conectar",
        "cuerpo": "Desde la carpeta del kit, el comando del bloque de abajo registra el servidor **solo para este proyecto** y crea un archivo `.mcp.json`. Abra `claude`, acepte la confianza de la carpeta y **apruebe el servidor** cuando se lo pregunte. Después escriba `/mcp`: tiene que decir **connected**.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con el comando claude mcp add y la comprobación con /mcp."
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
        "cuerpo": "Dos archivos del kit importan más que la instalación:\n\n- **`CLAUDE.md`**, las reglas que Claude lee al empezar: trabajar sobre copias, no guardar nunca sobre el original, verificar después de dibujar.\n- **`.claude/settings.json`**, los permisos: Claude puede leer capas y vistas sin preguntar; para dibujar, borrar o correr una rutina (`system`, `drawing`, `entity`, `block`, `annotation`) le pide permiso cada vez; y nunca puede escribir en la carpeta de planos.\n\nLos dos van completos en los bloques de abajo.",
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
        "cuerpo": "1. En AutoCAD, `NEW`: **un dibujo nuevo y vacío**.\n2. Pregúntele a Claude en qué estado está el servidor: tiene que decir `file_ipc`.\n3. Pídale el rectángulo (en el bloque de abajo). La respuesta esperada: área 50, perímetro 30.\n\n**Importante:** la orden de crear dibujo de este servidor borra el dibujo activo; nunca la use con un plano abierto.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con el pedido del rectángulo de prueba y lo que Claude tiene que contestar: capa PRUEBA-IA, área 50 m², perímetro 30 m."
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
        "cuerpo": "AutoCAD para Mac no tiene COM ni el puente de este servidor, y LT para Mac no corre AutoLISP. Lo que sí se puede: instalar Claude Code con el comando de Mac (en el bloque de abajo), guardar una **copia del plano como DXF** y trabajar sobre esa copia, con el método de las lecciones 3 a 6. Las rutinas básicas de AutoLISP corren en AutoCAD para Mac.",
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
        "cuerpo": "Opcional. El **Product Help MCP** de Autodesk le da a Claude la documentación oficial de sus productos. Es público, no pide clave, solo lee documentación y sale a internet: no toca sus planos. Se agrega con el comando del bloque de abajo; después, `/mcp` muestra los dos servidores.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con el comando para agregar la ayuda de Autodesk."
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
        "cuerpo": "Claude ya ve su AutoCAD. En la próxima lección le pide que lea un plano de verdad, sin tocar nada.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 7,
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
        "cuerpo": "El plano de muestra es un edificio de apartamentos japonés, con planta baja, planta tipo (la que se repite en varios pisos), último piso y azotea.\n\n**Antes de contar nada, hay que saber cómo está dibujado.**",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con los bloques de planta del edificio y sus dos versiones, a 1:100 y a 1:50."
        }
      },
      {
        "n": "3.2",
        "titulo": "El primer pedido: solo lectura",
        "cuerpo": "El primer pedido a Claude siempre es de **solo lectura**, y lo dice con esas palabras (en el bloque de abajo; en el kit, `prompts/01-inventario.md`).\n\nY una costumbre: pedirle que **confirme en qué dibujo está** antes de leer. En una de nuestras pruebas, una herramienta leyó otro dibujo que estaba abierto.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con el pedido de solo lectura del kit."
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
        "cuerpo": "Este plano está en **milímetros**, no en metros ni en pies. Si eso se lee mal, cada área sale un millón de veces más grande (un metro cuadrado son un millón de milímetros cuadrados).\n\nDespués: **226 capas**, **148 bloques** con nombre y **101 etiquetas de recinto**.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 12,
          "seVe": "La respuesta de Claude; cada dato sale de la terminal como cifra grande: «UNIDADES: MILÍMETROS» · «226 CAPAS» · «148 BLOQUES» · «101 ETIQUETAS DE RECINTO»."
        }
      },
      {
        "n": "3.4",
        "titulo": "Todo vive en bloques, y cada planta está dos veces",
        "cuerpo": "En el espacio de dibujo hay solo 13 objetos: **todo el edificio vive adentro de bloques**, uno por planta (`1F` planta baja, `SF` planta tipo, `TF` último piso, `TRF` azotea, `TRR` cubierta).\n\nY **cada planta está dibujada dos veces**: una para imprimir a escala 1:100 (`_100`) y otra a 1:50 (`_50`). Si alguien suma todo, cada cantidad sale el doble.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Los 13 objetos; cada uno se abre como una caja con su planta adentro, y cada caja tiene dos copias, «_100» y «_50»."
        }
      },
      {
        "n": "3.5",
        "titulo": "Esto lo decide usted",
        "cuerpo": "Una suma sin cuidado cuenta todo dos veces. **Esto no lo resuelve la IA: lo resuelve usted**, eligiendo una sola versión de cada planta. En este curso, la de 1:100 para contar piezas y recintos.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 8,
          "seVe": "Chispa, junto a las dos versiones de cada planta.",
          "dice": "Mismo edificio, dos dibujos. Ojo: una suma ingenua cuenta todo dos veces."
        }
      },
      {
        "n": "3.6",
        "titulo": "Los atributos: donde está la información",
        "cuerpo": "Los **atributos** son datos escritos adentro de un bloque. Cada puerta y ventana de este plano tiene una etiqueta con **21 atributos**: tipo, medidas, fabricante, precio, peso, apertura, vidrio, herrajes y resistencia al fuego. Están en japonés, y Claude los traduce.\n\nPor ejemplo, la puerta AD-A02 de la planta baja: puerta de aluminio, batiente sencilla, de 800 × 1200 mm. Las etiquetas de recinto traen el área y los acabados de piso, pared y cielo.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con los datos reales de una puerta del plano."
        }
      },
      {
        "n": "3.7",
        "titulo": "Las capas tienen un patrón",
        "cuerpo": "Los nombres de las capas siguen un patrón: `PLANTA-DISCIPLINA_ELEMENTO-ESCALA`. Por ejemplo, `SF-R_EWALL-50` es: planta tipo, estructura, muro de concreto, escala 1:50.\n\nEse patrón le permite a Claude distinguir un muro de concreto de un tabique o de un acabado, **aunque los muros sean solo líneas**.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con el nombre SF-R_EWALL-50 separado en sus cuatro partes y los prefijos de las capas."
        }
      },
      {
        "n": "3.8",
        "titulo": "¿Qué se puede contar con confianza?",
        "cuerpo": "- **Puertas y ventanas: confianza alta**, porque cada una es un bloque con su etiqueta.\n- **Recintos y acabados: alta.**\n- **Áreas: media o baja**, porque muchas están escritas a mano y no medidas.\n- **Muros: baja**, porque son líneas sueltas, sin espesor ni altura: solo dan un orden de magnitud.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Una tabla de cuatro filas con la confianza en color: alta, alta, media o baja, y baja."
        }
      },
      {
        "n": "3.9",
        "titulo": "Déjelo escrito",
        "cuerpo": "Pídale a Claude que deje todo en un archivo, `analisis/inventario.md`: las unidades, las capas, los bloques, las dos escalas y la confianza de cada cosa.\n\nEse inventario es la base de la próxima lección, y le sirve para explicarle al cliente por qué una cifra tiene confianza baja.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con el resumen del inventario real del plano."
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
        "cuerpo": "Al final de esta lección tiene un Excel con cinco hojas: **Resumen, Puertas y ventanas, Recintos, Muros y Observaciones**. Cada cifra lleva su confianza y ninguna está escrita a mano. En el resumen de la planta tipo: 51 puertas y 22 ventanas y shoji (los paneles corredizos de papel).",
        "apoyo": {
          "tipo": "motion",
          "segundos": 18,
          "seVe": "Réplica de la hoja de cantidades del plano, con sus cifras reales: el recorrido por las cinco hojas."
        }
      },
      {
        "n": "4.2",
        "titulo": "La celda que pone usted",
        "cuerpo": "En el resumen hay una celda vacía: **plantas tipo**. El plano no dice cuántas veces se repite la planta tipo en el edificio. Ese número lo pone usted.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 7,
          "seVe": "Chispa señala la celda vacía de las plantas tipo.",
          "dice": "Fíjese en esta celda vacía. El plano no lo dice. Lo pone usted."
        }
      },
      {
        "n": "4.3",
        "titulo": "Primero, lo que AutoCAD ya trae",
        "cuerpo": "La **extracción de datos** de AutoCAD saca los atributos de los bloques a Excel y guarda la configuración para repetirla. Funciona, pero **en este plano cuenta las dos escalas**, porque cada puerta está dibujada dos veces, y no sabe cuál es cuál.\n\nEn LT no existe: el equivalente es `-ATTEXT`, que exporta los atributos a un archivo de texto.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con lo que hace la extracción de datos y por qué en este plano cuenta todo dos veces."
        }
      },
      {
        "n": "4.4",
        "titulo": "Escriba el criterio antes de pedir",
        "cuerpo": "El **criterio** son las reglas de medición, escritas antes de pedir nada:\n\n1. Puertas, ventanas y recintos: solo la versión 1:100.\n2. Muros: solo la 1:50, que es la única que separa los tipos de muro, y como orden de magnitud.\n3. Área: de la geometría si hay un contorno dibujado; la etiqueta solo se compara.\n4. Cada fila lleva su confianza.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Una pizarra con los cuatro puntos del criterio."
        }
      },
      {
        "n": "4.5",
        "titulo": "Una copia DXF y el pedido",
        "cuerpo": "En AutoCAD, guarde una copia del plano en formato DXF con `SAVEAS`: `copias\\home_floor_plan_copia.dxf`. Así el programa nunca toca el original, y el mismo método sirve en Mac.\n\nDespués, pegue en Claude Code el pedido con su criterio (en el bloque de abajo; en el kit, `prompts/02-cantidades.md`).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con la copia en DXF y el pedido de cantidades del kit."
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
        "cuerpo": "Claude escribe `extraer_dxf.py`, un programa en Python que lee la copia y arma el Excel, lo corre y compara los conteos con el inventario.\n\nCuando un número no coincide, se busca por qué antes de seguir. Así apareció un error real del plano: en la planta tipo, **15 puertas a 1:50 estaban metidas dentro de la planta a 1:100**, adentro del módulo de baño. Un conteo por nombre de bloque las sumaba dos veces. El arreglo: contar solo las marcas de la escala 1:100.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con la observación real del módulo de baño y cómo se arregló."
        }
      },
      {
        "n": "4.7",
        "titulo": "Lo que sale",
        "cuerpo": "- **Puertas y ventanas:** una fila por pieza, con su marca, tipo, medidas, planta y confianza.\n- **Recintos:** dos columnas de área, la escrita en la etiqueta y la medida en el dibujo. Solo 31 de 96 recintos tienen un contorno para medir; el resto usa la etiqueta, con confianza media.\n- **Resumen:** los totales por planta, con fórmulas a la vista.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 18,
          "seVe": "Réplica de las hojas Puertas y ventanas, Recintos y Resumen del plano, con sus cifras reales."
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
        "titulo": "Una pregunta puntual",
        "cuerpo": "Para comprobar una fila del Excel no hace falta otro programa. Con el servidor conectado y el plano abierto, se le pregunta a Claude directamente (en el bloque de abajo) y se compara con el filtro del Excel.\n\nEn este plano, el Excel dice que la planta tipo tiene **4 ventanas AW-1**. Ojo: AW-1′, con apóstrofo, es otro tipo, con 5 más.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con la pregunta puntual y cómo se compara con el filtro del Excel."
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
          "segundos": 6,
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
          "segundos": 7,
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
        "cuerpo": "En la planta baja, sumando las etiquetas de recinto da **450 m²**. Son **282 m²**: el estacionamiento tiene dos etiquetas iguales, de 168,3 m² cada una, y se contó dos veces.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con las dos cifras de la planta baja: 450 m² sumando las etiquetas y 282 m² contando el estacionamiento una vez."
        }
      },
      {
        "n": "5.5",
        "titulo": "Las áreas escritas a mano",
        "cuerpo": "El pasillo de la planta tipo dice **4,47 m²** en la etiqueta y mide **3,79 m²** en el dibujo: 18 % de diferencia. El cuarto de máquinas de la azotea: **19,08** contra **21,80**.\n\nEsas filas no se corrigen solas: **se miran en el plano y decide usted**.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con las dos filas de la hoja Observaciones: etiqueta, dibujo, diferencia y confianza baja."
        }
      },
      {
        "n": "5.6",
        "titulo": "La lista de chequeo",
        "cuerpo": "Antes de entregar, revise:\n\n- ☐ Unidades confirmadas\n- ☐ Una sola escala por planta\n- ☐ Etiquetas repetidas\n- ☐ Bloques sin su etiqueta (como una puerta del último piso que no tiene ficha)\n- ☐ Áreas del dibujo contra las escritas\n- ☐ Lo que el plano no dice (las plantas tipo)\n- ☐ Una muestra contada a mano",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con la lista de chequeo."
        }
      },
      {
        "n": "5.7",
        "titulo": "La muestra contada a mano",
        "cuerpo": "La prueba más simple: elija un tipo de pieza y un sector (por ejemplo, las ventanas de un apartamento de la planta tipo), **cuéntelas usted** en AutoCAD y compare con el filtro del Excel. Si coincide, siga. Si no, **no se entrega nada hasta saber por qué**.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con los cuatro pasos de la muestra contada a mano."
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
          "segundos": 8,
          "seVe": "Chispa, junto a la regla de la IA que cuenta, usted que revisa y el profesional que firma.",
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
        "cuerpo": "Al cliente no se le manda el Excel ni el código: se le manda **una página** con lo que se pudo medir, lo que está mal en el plano y cómo dibujarlo mejor. Esta es la que armamos en Vion para el plano de muestra.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El reporte real de una página del plano de muestra: lo que se pudo cuantificar, los cinco problemas y las tres reglas de dibujo."
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
        "cuerpo": "La regla clave: **el PDF usa las mismas cifras del Excel y no recalcula nada**. Si el reporte y la tabla no coinciden, el cliente deja de confiar en los dos. El pedido está en el bloque de abajo (en el kit, `prompts/03-reporte.md`).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con el pedido del reporte del kit."
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
        "cuerpo": "Claude arma el PDF con un programa (`reporte/generar_reporte.py`, con la biblioteca reportlab), así se repite igual con el próximo plano. Si algo no entra en una página, **se achica lo secundario, nunca las cifras**.\n\n*Opcional:* las skills `xlsx` y `pdf` de Anthropic le enseñan a Claude a revisar hojas de cálculo y PDF (ver los recursos).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con el programa del reporte y sus dos reglas."
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
          "segundos": 6,
          "seVe": "Chispa, junto al problema 1 del reporte real.",
          "dice": "Lea el problema uno. Es el error más caro de este plano."
        }
      },
      {
        "n": "6.6",
        "titulo": "La última revisión",
        "cuerpo": "Antes de mandarlo: que **cada cifra del PDF esté en el Excel** (pídale a Claude que las compare una por una y diga cuántas coinciden) y que lo que el plano no dice esté dicho. Mientras un profesional no lo haya revisado, el PDF dice **«BORRADOR · SUJETO A REVISIÓN PROFESIONAL»**.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con los tres puntos de la última revisión."
        }
      },
      {
        "n": "6.7",
        "titulo": "Una página que se entiende",
        "cuerpo": "Ya tiene el Excel revisado y el reporte de una página con las mismas cifras.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 6,
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
          "segundos": 6,
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
        "cuerpo": "Una rutina AutoLISP es **un comando nuevo** dentro de su AutoCAD. Pídale a Claude que la escriba y **dígale en qué versión corre**: si es LT, sin las funciones que empiezan con `vla-` (el pedido, en el bloque de abajo). El kit trae la rutina `CONTAR.lsp`.\n\nCárguela con `APPLOAD` y escriba `CONTAR`: cuenta los bloques del dibujo por nombre y escribe el total en la línea de comandos. `CONTARTODO` cuenta también los bloques que están adentro de otros bloques.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con cómo se carga la rutina y lo que hacen CONTAR y CONTARTODO."
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
        "cuerpo": "En el plano de muestra, `CONTAR` no lista las puertas: lista los **bloques de planta** (`SF-BLOCK_100`, `SF-BLOCK_50`…), porque cuenta solo lo que está suelto en el dibujo, y en este plano todo vive adentro de bloques. Y `CONTARTODO` cuenta también los de la otra escala.\n\nUna rutina hace exactamente lo que dice, ni más ni menos: **se prueba con sus planos reales**, no con uno limpio.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con lo que listan CONTAR y CONTARTODO en el plano de muestra."
        }
      },
      {
        "n": "7.5",
        "titulo": "Un script para muchos dibujos",
        "cuerpo": "Un **script** (`.scr`) es una lista de comandos que AutoCAD ejecuta solo, con `SCRIPT`. Sirve para repetir lo mismo en muchos dibujos: abrir cada copia, aplicar el estándar de capas y guardarla con otro nombre. El del kit, `rutinas/ejemplo.scr`, está en la lámina.\n\n**Igual que siempre: sobre copias, y guardando con otro nombre.** Revise las rutas antes de correrlo.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con el script de ejemplo del kit."
        }
      },
      {
        "n": "7.6",
        "titulo": "¿Cuánto ahorra? No lo adivine",
        "cuerpo": "**Mídalo.** Durante dos semanas normales, cada vez que alguien hace la tarea anota qué hizo, cuántos minutos le llevó, en qué proyecto y si tuvo que corregir algo. Después, con la rutina andando, otras dos semanas.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 7,
          "seVe": "Chispa, junto a la planilla de medición del kit.",
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
        "titulo": "Lo que tiene ahora",
        "cuerpo": "- ✓ Claude conectado a AutoCAD\n- ✓ Un plano leído sin tocarlo\n- ✓ Sus cantidades en Excel\n- ✓ Una revisión que no deja pasar errores\n- ✓ El reporte para el cliente\n- ✓ Su primera rutina\n- ✓ La forma de medir si valió la pena",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una lista con los siete puntos tildados."
        }
      },
      {
        "n": "7.10",
        "titulo": "Con los planos de su oficina",
        "cuerpo": "Si quiere hacer esto con los planos de su oficina, escríbanos a consultorias@vion-studio.com con la tarea que más repite. Empezamos por medir.",
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
