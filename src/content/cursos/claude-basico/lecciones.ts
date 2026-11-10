// Las lecciones de «A0-claude-basico», lámina por lámina, desde el storyboard de la aldea
// (docs/planes/cursos/A0-claude-basico.md, 2026-11-10). Texto completo de cada lámina; los videos e imágenes van en ../medios.json.
import type { LeccionCurso } from '../../tipos';

export const lecciones: LeccionCurso[] = [
  {
    "n": 1,
    "slug": "1-tres-formas-de-trabajar",
    "titulo": "Una sola Claude, tres formas de trabajar",
    "objetivo": "Que entienda qué es Claude, que tiene tres formas de usarse y cuánto cuesta cada una, sin instalar nada.",
    "resultado": "El «mapa de las tres puertas» completo y la tabla de planes.",
    "laminas": [
      {
        "n": "1.1",
        "titulo": "¿Chat, Cowork o Code?",
        "cuerpo": "Le dijeron que use Claude. Abre la página y encuentra tres opciones: Chat, Cowork y Code. Es la misma Claude; lo que cambia es **lo que puede tocar**. En esta lección: qué hace cada una, cuál es su fuerte y cuánto cuesta. Sin instalar nada.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa, en plano medio sobre fondo crema; arriba, «¿Chat, Cowork o Code?». Después pasa a plano de cara y detrás aparecen tres puertas, una a una.",
          "dice": "Le dijeron que use Claude. Abre la página y encuentra Chat, Cowork y Code. ¿Cuál es cuál? Es la misma Claude; cambia lo que puede tocar. Se las muestro."
        }
      },
      {
        "n": "1.2",
        "titulo": "Puerta 1 · Chat: conversa",
        "cuerpo": "Usted escribe, Claude contesta. Le puede hacer preguntas, pedirle un texto, subirle un PDF o una foto y que se lo explique. Está en la página **claude.ai**, en una app para la compu y en el celular. **Tiene plan gratis.**",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "claude.ai con una pregunta simple que se escribe y la respuesta que aparece; la puerta 1 dibujada se abre y la ventana sale de ella."
        }
      },
      {
        "n": "1.3",
        "titulo": "Puerta 2 · Cowork: hace",
        "cuerpo": "Acá Claude no solo contesta: **hace la tarea**. Usted le conecta una carpeta y le pide, por ejemplo, que ordene sus descargas o que arme un Excel con sus facturas. Trabaja solo, varios pasos seguidos, y le pide permiso antes de borrar algo. Pide plan pago.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "Una carpeta desordenada en una ventana; los archivos se acomodan solos en subcarpetas (antes y después, acelerado)."
        }
      },
      {
        "n": "1.4",
        "titulo": "Puerta 3 · Code: construye",
        "cuerpo": "Claude Code es para **construir**: una página web, una herramienta chica, un programa. Se abre en la **terminal**, esa ventana negra donde se escriben órdenes. Suena a programadores, pero usted le habla en castellano igual que en el chat. Pide plan pago.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "Una terminal con una frase en castellano y, al lado, una página web que aparece."
        }
      },
      {
        "n": "1.5",
        "titulo": "Resumido",
        "cuerpo": "**Chat conversa. Cowork hace tareas con sus archivos. Code construye cosas nuevas.**",
        "apoyo": {
          "tipo": "motion",
          "segundos": 10,
          "seVe": "Las tres puertas juntas; debajo de cada una cae su palabra: conversa · hace · construye."
        }
      },
      {
        "n": "1.6",
        "titulo": "¿Cuánto cuesta?",
        "cuerpo": "Chat tiene un plan gratis, con un límite de uso que se renueva cada cinco horas. Cowork y Code piden un plan pago: el más barato es **Pro, USD 20 al mes** (o 17 al mes pagando el año). Max y Ultra dan más uso, para quien lo usa todo el día. Precios sin impuestos, al 10/11/2026: cambian, mírelos en [claude.com/pricing](https://claude.com/pricing). La tabla, abajo.\n\n| Plan | Precio | Chat | Cowork | Code |\n| Free | USD 0 | ✓ (uso limitado, se renueva cada 5 h y cada semana) | · | · |\n| Pro | **USD 20 al mes** (17 pagando el año: USD 200) | ✓ | ✓ | ✓ |\n| Max | USD 100 al mes · 5 veces el uso de Pro | ✓ | ✓ | ✓ |\n| Ultra | USD 200 al mes · 10 veces el uso de Pro | ✓ | ✓ | ✓ |\n| Team | USD 25 por persona al mes (20 pagando el año) | ✓ | ✓ | ✓ |",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "La tabla de planes con un tilde por producto; «Pro · USD 20» marcado en rojo. Al pie: «Fuente: claude.com/pricing · 10/11/2026»."
        }
      },
      {
        "n": "1.7",
        "titulo": "El camino de este curso",
        "cuerpo": "1. Las tres puertas (esta)\n2. Chat\n3. Cowork\n4. La terminal e instalar Claude Code\n5. Su primera página web\n6. ¿Cuál uso para qué?",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista de las seis lecciones del curso, con la primera tildada."
        }
      },
      {
        "n": "1.8",
        "titulo": "La siguiente, gratis",
        "cuerpo": "La lección 2 se hace con el plan gratis. Tenga a mano un PDF cualquiera (o el del kit: `cotizacion-remodelacion.pdf`).",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 12,
          "seVe": "Chispa entra caminando desde la derecha sobre la lista y señala la lección 2.",
          "dice": "La siguiente se hace gratis. Abra claude.ai y venga con un PDF cualquiera."
        }
      }
    ]
  },
  {
    "n": 2,
    "slug": "2-chat-pdf-y-textos",
    "titulo": "Chat: pregúntele, súbale un PDF, pídale un texto",
    "objetivo": "Crear la cuenta y hacer tres cosas reales en Chat: una pregunta, el análisis de un PDF y un texto listo.",
    "resultado": "Una cotización en PDF resumida en 5 líneas, con lo que falta, y el correo de respuesta listo para copiar.",
    "laminas": [
      {
        "n": "2.1",
        "titulo": "Cuatro páginas, leídas por usted",
        "cuerpo": "Esto es una cotización de cuatro páginas. Y esto es lo que Claude encontró en ella: lo que cobra, los plazos y **dos cosas que no dice**. Al final de esta lección usted hace lo mismo con el plan gratis.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 12,
          "seVe": "El PDF de 4 páginas («Cotización · Remodelación de oficina», ficticio) se encoge y a su lado aparece el resumen en 5 líneas con dos puntos marcados en rojo."
        }
      },
      {
        "n": "2.2",
        "titulo": "Cree su cuenta",
        "cuerpo": "1. Entre a **claude.ai**.\n2. Toque «Continuar con Google» o escriba su correo (le llega un código o un enlace).\n3. Listo: ya está en el plan gratis.\n\nLa caja de abajo es donde escribe; **el clip, o el signo de más, sube archivos**. Si prefiere, baje la app para la compu o el celular desde [claude.com/download](https://claude.com/download): es la misma cuenta, y las apps son gratis (lo que cuesta es el plan).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "claude.ai → «Continuar con Google» → la pantalla de inicio; unas flechas marcan la caja de mensaje y el clip. El correo, tapado."
        }
      },
      {
        "n": "2.3",
        "titulo": "Primera pregunta: dele contexto",
        "cuerpo": "Pruebe con algo suyo. Fíjese en el pedido de abajo: dice «como si tuviera una panadería». **Regla número uno: cuanto más le cuenta de su caso, mejor contesta.** El pedido, abajo.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "La respuesta sobre el flujo de caja ya escrita en claude.ai; Chispa, chiquita abajo a la derecha, la señala.",
          "dice": "Fíjese que le di contexto: “como si tuviera una panadería”. Esa es la regla número uno. Cuanto más le cuenta de su caso, mejor contesta. Como a alguien nuevo en su equipo."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Explíqueme qué es un flujo de caja como si yo tuviera una panadería."
          }
        ]
      },
      {
        "n": "2.4",
        "titulo": "El fuerte de Chat: leer por usted",
        "cuerpo": "1. Toque el clip y suba el PDF (el del kit, o uno suyo).\n2. Pídale dos cosas: el resumen y lo que falta (el pedido de abajo).\n\nClaude lee las cuatro páginas, saca lo importante y le marca lo que no está claro: acá, que no dice si el precio incluye impuestos ni qué pasa si la obra se atrasa. **Revíselo siempre usted: Claude puede equivocarse, sobre todo con números.**",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "Se adjunta el PDF, se escribe el pedido y aparece la respuesta (acelerada en la espera); se subrayan las dos dudas."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Resuma esta cotización en 5 líneas. Después dígame qué falta o qué está poco claro antes de aceptarla."
          }
        ]
      },
      {
        "n": "2.5",
        "titulo": "De lo que leyó, que escriba",
        "cuerpo": "En la misma conversación pídale el correo para el proveedor (el pedido de abajo). Claude se acuerda de todo lo anterior: no hace falta repetir nada. ¿No le gusta el tono? Dígaselo: «más formal», «más corto». Copia y lo manda desde su correo. **Claude no manda nada por usted.**",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Se escribe el pedido, aparece el correo, se pide «más corto», cambia; se toca «Copiar»."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Con esto, escríbale un correo corto y amable al proveedor pidiéndole que aclare esos dos puntos."
          }
        ]
      },
      {
        "n": "2.6",
        "titulo": "Para qué es bueno Chat",
        "cuerpo": "- Preguntar y aprender un tema\n- Leer y resumir PDF, fotos y planillas\n- Escribir y corregir textos\n- Pensar ideas con alguien\n\nTodo en una conversación, sin instalar nada.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista «Para qué es bueno Chat», con sus cuatro puntos tildados."
        }
      },
      {
        "n": "2.7",
        "titulo": "Lo que Chat no hace",
        "cuerpo": "Chat no se mete en sus carpetas ni trabaja solo con sus archivos. Para eso está **Cowork**, que pide un plan pago (Pro o más). Es la lección siguiente.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Pantalla dividida: a la izquierda la conversación; a la derecha una carpeta con 12 PDF que espera, con un candado."
        }
      }
    ]
  },
  {
    "n": 3,
    "slug": "3-cowork-con-sus-archivos",
    "titulo": "Cowork: que haga el trabajo con sus archivos",
    "objetivo": "Conectar una carpeta y delegar dos tareas: ordenar archivos y armar un Excel con facturas en PDF.",
    "resultado": "La carpeta «Descargas de prueba» ordenada en subcarpetas y un Excel con fecha, proveedor y monto de 12 facturas, con el total.",
    "laminas": [
      {
        "n": "3.1",
        "titulo": "¿Su carpeta se ve así?",
        "cuerpo": "Cowork no solo contesta: **hace la tarea**. Usted le conecta una carpeta, le pide algo en palabras y trabaja solo, varios pasos seguidos. En esta lección: ordenar una carpeta de descargas y armar un Excel con 12 facturas en PDF.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa, plano de cara. Detrás, una ventana con 60 archivos sueltos («scan001.pdf», «IMG_2231.jpg»…) que se van acumulando.",
          "dice": "¿Su carpeta de descargas se ve así? La mía también. Hoy la ordena Claude, no usted."
        }
      },
      {
        "n": "3.2",
        "titulo": "Cowork en 3 pasos",
        "cuerpo": "1. Conecte una carpeta.\n2. Pida la tarea en palabras.\n3. Revise el plan que le muestra Claude y déjelo trabajar.\n\n**Qué necesita:** un plan pago (Pro o más). Cowork está en la **app de escritorio** (todos los planes pagos) y en la **web y el celular** (Pro, Max, Ultra y Team, en beta); para usar carpetas de su compu, la app de escritorio.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Una pizarra con los tres pasos de Cowork: conectar una carpeta, pedir la tarea en palabras, revisar el plan y dejarlo trabajar."
        }
      },
      {
        "n": "3.3",
        "titulo": "Conecte una carpeta de prueba",
        "cuerpo": "1. Baje y descomprima `descargas-de-prueba.zip` del kit.\n2. Abra la app de Claude.\n3. En la caja de mensaje elija **Cowork** y conecte esa carpeta.\n\n**La primera vez, siempre una carpeta de prueba**, nunca la de sus documentos de verdad. Claude solo lee y escribe en las carpetas que usted conecta y le pide permiso antes de borrar algo para siempre.\n\n**¿No ve la opción «Cowork»?** Ya tiene la versión nueva: Anthropic está juntando Cowork dentro de Claude, que lo usa solo cuando la tarea toca archivos. Pídaselo directo y conecte la carpeta.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "La app de escritorio en Windows: en la caja de mensaje se elige Cowork y se conecta «Descargas de prueba»; un rótulo chico dice «¿No ve “Cowork”? Pídalo directo»."
        }
      },
      {
        "n": "3.4",
        "titulo": "Tarea 1: ordenar",
        "cuerpo": "Pídale que ordene por tipo y aclárele: **no borre nada** (el pedido de abajo). Antes de tocar algo, Claude le muestra su plan. Léalo, apruébelo y déjelo: trabaja solo, paso por paso (crea las carpetas, mira cada archivo y lo mueve). Puede irse a hacer otra cosa.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "Se escribe el pedido, aparece el plan, se aprueba y los archivos se mueven a sus subcarpetas (acelerado en la espera)."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Ordene esta carpeta: cree subcarpetas por tipo (facturas, fotos, documentos, otros) y mueva cada archivo. No borre nada."
          }
        ]
      },
      {
        "n": "3.5",
        "titulo": "Tarea 2: 12 facturas a un Excel",
        "cuerpo": "En la subcarpeta «facturas», pídale un Excel con fecha, proveedor, número y monto, el total al final, y que marque las que no se lean bien (el pedido de abajo). **Este es el fuerte de Cowork: muchos archivos, varios pasos y un documento terminado al final.** En el ejemplo marcó una factura borrosa: esa la revisa usted.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "Se escribe el pedido, Claude trabaja y se abre el Excel (en Excel o LibreOffice) con la fila marcada y el total resaltados."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Lea las 12 facturas y arme un Excel con fecha, proveedor, número y monto. Al final, el total. Marque las que no se lean bien."
          }
        ]
      },
      {
        "n": "3.6",
        "titulo": "Para qué es bueno Cowork",
        "cuerpo": "- Ordenar y renombrar muchos archivos\n- Armar un Excel, un Word o una presentación con lo que hay en una carpeta\n- Tareas largas que corren solas mientras usted hace otra cosa\n\n**Ojo:** Cowork gasta su límite de uso más rápido que el chat: junte lo parecido en una sola tarea.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista «Para qué es bueno Cowork», con sus tres puntos tildados."
        }
      },
      {
        "n": "3.7",
        "titulo": "Ahora, la terminal",
        "cuerpo": "La lección 4 abre la terminal e instala Claude Code. Es la más larga del curso y la única con algo que instalar. Necesita el plan Pro (o más) y unos 15 minutos.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 20,
          "seVe": "Chispa entra caminando desde la izquierda sobre la carpeta ya ordenada, festeja; después mira hacia una terminal negra que aparece a la derecha.",
          "dice": "Ordenada, y no toqué un archivo. Ahora, la ventana que da miedo: la terminal. Prometo que no muerde."
        }
      }
    ]
  },
  {
    "n": 4,
    "slug": "4-terminal-y-claude-code",
    "titulo": "Code: abrir la terminal sin miedo e instalar Claude Code",
    "objetivo": "Que sepa qué es una terminal, la abra, instale Claude Code con el comando oficial, inicie sesión y lo abra en su primera carpeta. En Windows y en Mac.",
    "resultado": "La bienvenida de Claude Code dentro de «mi-primer-proyecto».",
    "laminas": [
      {
        "n": "4.1",
        "titulo": "La ventana negra",
        "cuerpo": "Una **terminal** es una ventana donde, en vez de hacer clic, se escriben órdenes. Ya viene en su compu: no hay que bajar nada. **Claude Code vive ahí:** usted le escribe en castellano y él trabaja en la carpeta donde lo abrió. Necesita un plan Pro o más (el gratis no incluye Claude Code). Requisitos: Windows 10 (1809 o más nuevo) o macOS 13 o más nuevo, 4 GB de RAM e internet.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa, plano medio; a su lado una ventana negra con un cursor que parpadea; Chispa se aleja un paso.",
          "dice": "Esta ventana negra es la terminal. Parece de película de hackers. En realidad es una caja donde se escriben órdenes en vez de hacer clic."
        }
      },
      {
        "n": "4.2",
        "titulo": "Lo mismo, con clics o escribiendo",
        "cuerpo": "Todo lo que hace con el mouse se puede hacer escribiendo. Para Claude Code son **cuatro pasos**: 1 · abrir la terminal · 2 · pegar el comando de instalación · 3 · abrir una carpeta · 4 · escribir `claude`. Primero Windows; Mac está en la lámina 4.9.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 12,
          "seVe": "La misma acción dos veces, lado a lado: «abrir una carpeta» con clics en el Explorador y con una línea escrita; después aparecen los 4 pasos."
        }
      },
      {
        "n": "4.3",
        "titulo": "Windows · 1. Abra la terminal",
        "cuerpo": "Apriete **Windows + X** y elija «Terminal» o «Windows PowerShell». La línea tiene que empezar con `PS C:\\Users\\SuNombre>`: la **PS** dice que está en PowerShell, que es lo que queremos (si no tiene PS, es CMD). *(Opcional: instale Git para Windows desde [git-scm.com/downloads/win](https://git-scm.com/downloads/win), «Next» en todas las pantallas. Sin él, Claude Code usa PowerShell y anda igual.)*",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "Se aprieta Win + X (las teclas, dibujadas en pantalla) y se elige «Terminal»; se subraya `PS C:\\Users\\…>` al principio de la línea."
        }
      },
      {
        "n": "4.4",
        "titulo": "Windows · 2. Instale Claude Code",
        "cuerpo": "Copie el comando oficial (en el bloque de abajo; si su terminal es CMD, use el segundo), péguelo con **Ctrl + V** y apriete **Enter**. Baja Claude Code y lo instala. **No muestra avance:** espere, sin cerrar, hasta que diga «Claude Code successfully installed!». Pegue solo comandos de la página oficial ([code.claude.com](https://code.claude.com/docs/en/setup)).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Se pega el comando, Enter, espera (acelerada), «Claude Code successfully installed!» con acercamiento. El comando grande en un rótulo arriba."
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
            "etiqueta": "Windows, si está en CMD",
            "lenguaje": "bat",
            "texto": "curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd"
          }
        ]
      },
      {
        "n": "4.5",
        "titulo": "3. Compruebe",
        "cuerpo": "**Cierre la terminal y abra una nueva.** Escriba `claude --version`. Si sale un número y «(Claude Code)», quedó instalado.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La terminal nueva con `claude --version` y el número, subrayado."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows y Mac, en una terminal nueva",
            "texto": "claude --version"
          }
        ]
      },
      {
        "n": "4.6",
        "titulo": "¿Le dice «not recognized»?",
        "cuerpo": "Casi siempre es porque no abrió una terminal **nueva**: ciérrela y ábrala de nuevo. Si sigue, vea la lámina 4.11 y la chuleta del kit.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 12,
          "seVe": "Chispa entra corriendo desde abajo; detrás, el error «'claude' is not recognized».",
          "dice": "¿Le salió “not recognized”? Casi siempre es esto: no abrió una terminal nueva. Ábrala de nuevo."
        }
      },
      {
        "n": "4.7",
        "titulo": "4. Su primera carpeta y `claude`",
        "cuerpo": "`mkdir` crea una carpeta; `cd` entra en ella; adentro, `claude` abre Claude Code (los tres comandos, en el bloque de abajo). **Claude solo trabaja en la carpeta donde lo abre:** así sabe dónde puede tocar. Para ver la carpeta: `explorer .` en Windows, `open .` en Mac.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Se escribe `mkdir mi-primer-proyecto` y, al lado, la carpeta aparece en el Explorador; después `cd mi-primer-proyecto` y `claude`."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows y Mac",
            "texto": "mkdir mi-primer-proyecto\ncd mi-primer-proyecto\nclaude"
          },
          {
            "tipo": "comando",
            "etiqueta": "Windows: ver la carpeta",
            "lenguaje": "powershell",
            "texto": "explorer ."
          },
          {
            "tipo": "comando",
            "etiqueta": "Mac: ver la carpeta",
            "lenguaje": "bash",
            "texto": "open ."
          }
        ]
      },
      {
        "n": "4.8",
        "titulo": "5. Inicie sesión (una sola vez)",
        "cuerpo": "La primera vez se abre el navegador: entre con su cuenta de Claude (Pro o más) y vuelve sola a la terminal. Si le pregunta si confía en esta carpeta, es la suya y está vacía: diga que sí. Queda guardado.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La bienvenida de Claude Code en «mi-primer-proyecto» (el correo, tapado)."
        }
      },
      {
        "n": "4.9",
        "titulo": "En Mac",
        "cuerpo": "1. **Cmd + Espacio**, escriba `Terminal` y Enter.\n2. Pegue el comando de Mac (en el bloque de abajo), que es distinto.\n3. Después, igual que en Windows: terminal nueva, `claude --version`, su carpeta y `claude`. Necesita macOS 13 o más nuevo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Cmd + Espacio, «Terminal», el comando de instalación, `claude --version` y después `mkdir`, `cd` y `claude` (acelerado)."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Mac, en Terminal",
            "lenguaje": "bash",
            "texto": "curl -fsSL https://claude.ai/install.sh | bash"
          }
        ]
      },
      {
        "n": "4.10",
        "titulo": "Adentro de Claude Code",
        "cuerpo": "**Enter** manda. **Esc** lo frena si se va por mal camino. Cuando pide permiso para crear o cambiar un archivo, **Enter** elige «Yes». `/help` muestra los comandos. `exit` (o **Ctrl + D** dos veces) sale. No se hace clic: se usan las flechas. **Shift + Tab** cambia cuánto puede hacer sin preguntar; en este curso se deja como viene: que pregunte.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista «Adentro de Claude Code» con las teclas dibujadas: Enter, Esc, las flechas, Shift + Tab y Ctrl + D."
        }
      },
      {
        "n": "4.11",
        "titulo": "Si algo falla",
        "cuerpo": "Los errores típicos y su solución, de las páginas oficiales de Claude Code (la misma tabla está en la chuleta del kit). Los comandos de las soluciones, en los bloques de abajo.\n\n| Lo que ve | Qué pasa | Qué hacer |\n| «'irm' is not recognized…» | Está en CMD, no en PowerShell | Abrir PowerShell (Win + X) o usar el comando de CMD de la lámina 4.4 |\n| «The token '&&' is not a valid statement separator» | Está en PowerShell con el comando de CMD | Usar el comando de PowerShell de la lámina 4.4 |\n| «'claude' is not recognized» o «command not found: claude» | La carpeta del programa no está en el «camino» (PATH) | Cerrar y abrir una terminal nueva. Si sigue: en Windows, los dos comandos de PATH de la [guía oficial](https://code.claude.com/docs/en/terminal-guide); en Mac, los dos comandos del bloque de abajo |\n| «Could not create SSL/TLS secure channel» | Windows 10 viejo | Correr antes el comando del bloque de abajo y repetir la instalación |\n| «does not support 32-bit Windows» | Abrió «Windows PowerShell (x86)» | Abrir la que no dice (x86) |\n| «syntax error near unexpected token '<'» o una página web en la terminal | El enlace devolvió una página; si dice «App unavailable in region», Claude no está en su país | Repetir; en Mac, `brew install --cask claude-code` |\n| «dyld: cannot load» o «built for Mac OS X 13.0» | macOS más viejo que 13 | Actualizar macOS |\n| Al entrar, le pide mejorar el plan | Está con Free | Claude Code necesita Pro o más |",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Tarjetas de error, una por cada fila de la tabla, con su solución debajo."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Mac, si sigue «command not found: claude»",
            "lenguaje": "bash",
            "texto": "echo 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.zshrc\nsource ~/.zshrc"
          },
          {
            "tipo": "comando",
            "etiqueta": "Windows 10, si sale «Could not create SSL/TLS secure channel»",
            "lenguaje": "powershell",
            "texto": "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12"
          }
        ]
      },
      {
        "n": "4.12",
        "titulo": "Otras formas, y lo que sigue",
        "cuerpo": "**Sin terminal también se puede:** la pestaña **Code** de la app de escritorio, claude.ai/code en la web y las extensiones de VS Code y JetBrains. Otras instalaciones oficiales: `winget install Anthropic.ClaudeCode` (Windows) y `brew install --cask claude-code` (Mac); **esas dos no se actualizan solas**, la normal sí. En la próxima lección: su primera página web.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa, en plano de cara sobre fondo crema.",
          "dice": "Ya tiene la terminal abierta. Si prefiere no usarla, Claude Code también está en la app de escritorio, en la pestaña Code. En la próxima, su primera página web."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows, otra instalación oficial (no se actualiza sola)",
            "lenguaje": "powershell",
            "texto": "winget install Anthropic.ClaudeCode"
          },
          {
            "tipo": "comando",
            "etiqueta": "Mac, otra instalación oficial (no se actualiza sola)",
            "lenguaje": "bash",
            "texto": "brew install --cask claude-code"
          }
        ]
      }
    ]
  },
  {
    "n": 5,
    "slug": "5-pagina-web-y-herramienta",
    "titulo": "Code: su primera página web y una herramienta que se reusa",
    "objetivo": "Construir dos cosas con Claude Code en la carpeta de la lección 4: una página web de una panadería ficticia y un archivo que renombra fotos con la fecha, que se puede usar todas las semanas.",
    "resultado": "La página abierta en el navegador (en la compu y achicada como celular) y una carpeta de fotos renombradas de un solo doble clic.",
    "laminas": [
      {
        "n": "5.1",
        "titulo": "Esta página no la programó nadie",
        "cuerpo": "Se la pidieron a Claude Code en dos frases y tardó {{el tiempo medido al grabar}}. En esta lección usted hace la suya y, después, una herramienta que va a usar todas las semanas.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 12,
          "seVe": "La página de «Panadería La Espiga» (ficticia) a pantalla completa; se recorre hacia abajo y se achica al tamaño de un celular."
        }
      },
      {
        "n": "5.2",
        "titulo": "Pídala como a un diseñador",
        "cuerpo": "Abra Claude Code en su carpeta (`cd mi-primer-proyecto` y `claude`) y describa la página como se la contaría a un diseñador: el nombre, qué tiene que tener y cómo se tiene que ver (el pedido de abajo; cambie los datos por los suyos). Claude le pide permiso para crear el archivo `index.html`: **Enter**, sí.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "La terminal en «mi-primer-proyecto»: `claude`, se escribe el pedido, Claude pide permiso para crear `index.html`, Enter, y trabaja (acelerado en la espera)."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows y Mac",
            "texto": "cd mi-primer-proyecto\nclaude"
          },
          {
            "tipo": "pedido",
            "texto": "Haga una página web de una sola hoja para una panadería que se llama La Espiga, en Heredia. Que tenga el horario, tres productos con precio y un botón de WhatsApp. Colores cálidos y que se vea bien en el celular."
          }
        ]
      },
      {
        "n": "5.3",
        "titulo": "Ábrala en el navegador",
        "cuerpo": "Abra la carpeta (`explorer .` en Windows, `open .` en Mac) y haga doble clic en `index.html`: se abre en el navegador. **Es un archivo en su compu; todavía no está en internet.**",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La carpeta con `index.html` y, encima, el navegador con la página."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows",
            "lenguaje": "powershell",
            "texto": "explorer ."
          },
          {
            "tipo": "comando",
            "etiqueta": "Mac",
            "lenguaje": "bash",
            "texto": "open ."
          }
        ]
      },
      {
        "n": "5.4",
        "titulo": "¿No le gusta algo? Dígaselo",
        "cuerpo": "Se lo pide como a una persona (el pedido de abajo). **Ese es el fuerte de Code: construye algo que antes no existía y lo va cambiando con usted.**",
        "apoyo": {
          "tipo": "motion",
          "segundos": 10,
          "seVe": "Antes y después lado a lado: el botón de WhatsApp crece y aparece la foto de pan arriba."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "El botón de WhatsApp más grande y agregue una foto de pan arriba."
          }
        ]
      },
      {
        "n": "5.5",
        "titulo": "¿Y en internet?",
        "cuerpo": "Por ahora la página vive en su carpeta. Publicarla con su propio dominio, y cambiarla después en palabras, es un curso entero: **D2 · Tu sitio web con Claude Code**.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 10,
          "seVe": "Chispa, chiquita sobre la página, apoyada en el botón de WhatsApp.",
          "dice": "Para ponerla en internet con su dominio hay un curso entero: el D2."
        }
      },
      {
        "n": "5.6",
        "titulo": "Una vez, o todas las semanas",
        "cuerpo": "Tiene veinte fotos de una obra con nombres que no dicen nada («IMG_4821.jpg»). **Cowork** las renombra una vez. Pero si le pasa todas las semanas, pídale a **Code** otra cosa: **una herramienta**, un archivo que con doble clic ponga la fecha en el nombre de cada foto. La próxima semana no le pide nada a nadie.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 12,
          "seVe": "Dos líneas de tiempo: arriba, «Cowork» repite el pedido cada semana; abajo, «Code» hace el archivo una vez y después solo hay dobles clics."
        }
      },
      {
        "n": "5.7",
        "titulo": "Hágala: renombrar fotos con la fecha",
        "cuerpo": "1. Descomprima `fotos-obra.zip` del kit dentro de su carpeta.\n2. Pídale la herramienta (el pedido de abajo).\n3. Claude elige el tipo de archivo y le explica cómo usarlo: siga **su** explicación (si hace un `.ps1` o un `.bat`, le dice cómo ejecutarlo).\n4. Doble clic: los nombres cambian a `2026-11-10_01.jpg`, `2026-11-10_02.jpg`…",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "La carpeta con 20 fotos llamadas como «IMG_4821.jpg»; el pedido; Claude crea el archivo y explica cómo usarlo; doble clic, y los nombres cambian a la fecha (de cerca)."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Hágame un archivo que, con doble clic, cambie el nombre de todas las fotos de esta carpeta por la fecha en que se tomaron, por ejemplo 2026-11-10_01.jpg. Explíqueme cómo usarlo."
          }
        ]
      },
      {
        "n": "5.8",
        "titulo": "Para qué es bueno Code",
        "cuerpo": "- Páginas web\n- Herramientas y automatizaciones que se reusan\n- Apps y programas\n- Arreglar o entender código que ya existe\n\nY como trabaja en una carpeta, **todo queda guardado en archivos suyos**.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista «Para qué es bueno Code», con sus cuatro puntos tildados."
        }
      },
      {
        "n": "5.9",
        "titulo": "Ya usó los tres",
        "cuerpo": "Chat, Cowork y Code, cada uno con una tarea real. Falta lo más útil: saber cuál abrir cada vez.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa, en plano medio sobre fondo crema.",
          "dice": "Ya usó los tres. Falta lo más útil: saber cuál abrir cada vez. Eso es la última, y es corta."
        }
      }
    ]
  },
  {
    "n": 6,
    "slug": "6-cual-uso-para-que",
    "titulo": "¿Cuál uso para qué?",
    "objetivo": "Decidir en segundos cuál usar y saber qué curso de Vion sigue.",
    "resultado": "La tabla de decisión completa y la tarjeta con el siguiente curso.",
    "laminas": [
      {
        "n": "6.1",
        "titulo": "Un juego rápido",
        "cuerpo": "¿Cuál abriría para cada uno? «Resumir un contrato» · «Ordenar mis fotos del año» · «Una página para mi negocio».",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 30,
          "seVe": "Chispa, en plano medio. Arriba aparece un pedido por vez y, a los dos segundos, se enciende la puerta que corresponde: Chat, Cowork o Code.",
          "dice": "Un juego rápido. “Resumir un contrato”: Chat. “Ordenar mis fotos del año”: Cowork. “Una página para mi negocio”: Code. ¿Ve el patrón?"
        }
      },
      {
        "n": "6.2",
        "titulo": "La regla",
        "cuerpo": "Si quiere **una respuesta, un texto o que le lea un documento: Chat**. Si quiere que **haga una tarea con sus archivos**, como ordenar o armar un Excel o un Word: **Cowork**. Si quiere que **exista algo nuevo**, una página, una herramienta o una app: **Code**. Y si duda, empiece por Chat: le puede preguntar a la misma Claude cuál le conviene. La tabla completa, abajo (también está en el kit).\n\n| Quiero… | Uso | Por qué | Plan mínimo |\n| Preguntar algo, aprender un tema, pensar una idea | **Chat** | Es una conversación; no necesita tocar nada suyo | Free |\n| Que me lea un PDF, una foto o una planilla y me diga lo importante | **Chat** | Sube el archivo y pregunta | Free |\n| Un texto: un correo, una publicación, una propuesta | **Chat** | Escribe y corrige con usted en la misma conversación | Free |\n| Ordenar o renombrar muchos archivos una vez | **Cowork** | Trabaja en la carpeta que usted conecta, varios pasos solo | Pro |\n| Armar un Excel, un Word o una presentación con lo que hay en una carpeta | **Cowork** | Lee muchos archivos y entrega el documento terminado | Pro |\n| Una tarea larga mientras hago otra cosa | **Cowork** | Corre sola y le pide permiso para lo delicado | Pro |\n| Una página web | **Code** | Crea los archivos y los cambia con usted | Pro |\n| Una herramienta que voy a usar todas las semanas | **Code** | Deja un archivo que se reusa sin pedirle nada | Pro |\n| Una app o un programa, o arreglar uno que ya tengo | **Code** | Es para lo que fue hecho | Pro |",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "La tabla «¿Cuál uso para qué?» se arma fila por fila, y cada fila se pinta del color de su puerta."
        }
      },
      {
        "n": "6.3",
        "titulo": "¿Qué curso sigue?",
        "cuerpo": "Depende de lo que quiera hacer (la tabla, abajo). Para usar Code en su trabajo de todos los días: **A1**. Para animaciones y videos: **B1**. Si trabaja con AutoCAD: **C1**. Para su sitio web: **D2**. Para que Claude trabaje solo para su negocio: **A2**.\n\n| Si quiere… | Siga con |\n| Usar Claude Code para tareas de su trabajo (carpetas, Excel, una página) | **A1 · Claude Code sin programar** |\n| Que un equipo de agentes trabaje para su negocio | **A2 · Su agentic OS** |\n| Dejar de repetirle las mismas instrucciones a Claude | **A3 · Crear tus propias skills** |\n| Manejar todo desde el teléfono | **A4 · Un bot de Telegram que trabaja para vos** |\n| Animaciones y videos sin After Effects | **B1 · Motion design con Claude** |\n| Videos 3D sin saber Blender | **B2 · Videos 3D con Blender y Claude** |\n| Planos, cantidades y reportes en AutoCAD | **C1 · Claude + AutoCAD** |\n| Su sitio web publicado y que se cambia en palabras | **D2 · Tu sitio web con Claude Code** |\n| Que su sitio aparezca en Google | **D1 · SEO con agentes** |\n| Que sus datos no salgan de la oficina | **D6 · IA local y privada** |",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "El mapa de cursos: desde «A0» salen flechas a A1, A2, A3, B1, C1 y D2, con una frase cada uno."
        }
      },
      {
        "n": "6.4",
        "titulo": "Si quiere más (oficial, en inglés)",
        "cuerpo": "La guía de la terminal para principiantes: [code.claude.com/docs/en/terminal-guide](https://code.claude.com/docs/en/terminal-guide). Los cursos de Anthropic en [Claude Academy](https://anthropic.skilljar.com/) («Claude 101», «Introduction to Claude Cowork», «Claude Code 101», «AI Fluency»; piden una cuenta de Skilljar). Las skills de ejemplo de Anthropic (crean Word, PDF, PowerPoint y Excel): [github.com/anthropics/skills](https://github.com/anthropics/skills); instalarlas y revisarlas se ve en A3.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Tres tarjetas con el nombre de cada recurso y su enlace (sin logos)."
        }
      },
      {
        "n": "6.5",
        "titulo": "Lo que ya tiene",
        "cuerpo": "- Sabe qué es Chat, Cowork y Code y cuánto cuesta cada uno\n- Un PDF analizado y su correo\n- Un Excel armado con 12 facturas\n- Claude Code instalado y abierto en su carpeta\n- Su primera página web y una herramienta que se reusa\n\n**Descargue el kit:** la chuleta de instalación, la tabla de decisión y los pedidos para empezar.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista de lo que ya tiene, con los cinco puntos tildados."
        }
      },
      {
        "n": "6.6",
        "titulo": "Siga con A1",
        "cuerpo": "Si no sabe cuál, empiece por **A1 · Claude Code sin programar**. Y súmese a la comunidad de Vion: {{enlace de la comunidad}}.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa, sobre el mapa de cursos, señala A1 y guiña; entra la tarjeta «Siga con A1» con el botón «Unirme a la comunidad».",
          "dice": "Si no sabe cuál, empiece por A1. Y súmese a la comunidad de Vion: el enlace está abajo."
        }
      }
    ]
  }
];
