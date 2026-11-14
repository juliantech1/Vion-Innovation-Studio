// Las lecciones de «A0-claude-basico», lámina por lámina, desde el storyboard de la aldea
// (docs/planes/cursos/A0-claude-basico.md, 2026-11-10). Texto completo de cada lámina; los videos e imágenes van en ../medios.json.
import type { LeccionCurso } from '../../tipos';

export const lecciones: LeccionCurso[] = [
  {
    "n": 1,
    "slug": "1-tres-formas-de-trabajar",
    "titulo": "Una sola Claude, tres formas de trabajar",
    "objetivo": "Entender qué es Claude, sus tres formas de trabajar (Chat, Cowork y Code) y cuánto cuesta cada una, sin instalar nada.",
    "resultado": "Las tres formas de usar Claude, claras, y la tabla de planes.",
    "laminas": [
      {
        "n": "1.1",
        "titulo": "¿Chat, Cowork o Code?",
        "cuerpo": "Claude es una inteligencia artificial de la empresa Anthropic: usted le escribe en castellano y le responde o hace trabajos por usted.\n\nSe puede usar de tres formas: **Chat**, **Cowork** y **Code**. Es siempre la misma Claude; lo que cambia es **qué puede tocar**: solo la conversación, sus archivos, o una carpeta donde construye cosas nuevas. En esta lección ve qué hace cada una y cuánto cuesta, sin instalar nada.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 11,
          "seVe": "Chispa, en plano medio sobre fondo crema; arriba, «¿Chat, Cowork o Code?». Después pasa a plano de cara y detrás aparecen tres puertas, una a una.",
          "dice": "Le dijeron que use Claude. Abre la página y encuentra Chat, Cowork y Code. ¿Cuál es cuál? Es la misma Claude; cambia lo que puede tocar. Se las muestro."
        }
      },
      {
        "n": "1.2",
        "titulo": "Primera forma · Chat: conversa",
        "cuerpo": "Usted escribe y Claude contesta. Le puede hacer preguntas, pedirle un texto o subirle un PDF o una foto para que se lo explique.\n\nEstá en la página **claude.ai**, en una app para la computadora y en el celular. **Tiene plan gratis.**",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 14,
          "seVe": "Recreación de una conversación con Claude: la pregunta del flujo de caja y la respuesta real de Claude."
        }
      },
      {
        "n": "1.3",
        "titulo": "Segunda forma · Cowork: hace",
        "cuerpo": "Con Cowork, Claude no solo contesta: **hace la tarea**. Usted le da acceso a una carpeta y le pide, por ejemplo, que ordene sus descargas o que arme un Excel con sus facturas. Trabaja varios pasos seguidos, solo, y le pide permiso antes de borrar algo.\n\nHoy Cowork ya es parte de Claude: usted pide lo que necesita y, si la tarea es con archivos, Claude trabaja así. Necesita un plan pago.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 11,
          "seVe": "Recreación de la carpeta de descargas: sesenta archivos sueltos que quedan en cuatro carpetas, con el orden real que hizo Claude."
        }
      },
      {
        "n": "1.4",
        "titulo": "Tercera forma · Code: construye",
        "cuerpo": "**Claude Code** es para construir: una página web, una herramienta chica, un programa. Se abre en la **terminal**, la ventana donde se escriben órdenes en vez de hacer clic.\n\nSuena a programadores, pero usted le habla en castellano igual que en el chat. Necesita un plan pago.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 23,
          "seVe": "Grabación real: el pedido de la página en Claude Code y, al lado, la página que hizo."
        }
      },
      {
        "n": "1.5",
        "titulo": "En resumen",
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
        "cuerpo": "El chat tiene un plan gratis, con un límite de uso que se renueva cada cinco horas. Cowork y Code necesitan un plan pago: el más barato es **Pro, USD 20 al mes** (o USD 17 al mes si paga el año). Max y Ultra dan más uso, para quien lo usa todo el día.\n\nPrecios sin impuestos; cambian seguido, así que mírelos en [claude.com/pricing](https://claude.com/pricing).\n\n| Plan | Precio | Chat | Cowork | Code |\n| Free | USD 0 | ✓ (uso limitado, se renueva cada 5 h y cada semana) | · | · |\n| Pro | **USD 20 al mes** (17 pagando el año: USD 200) | ✓ | ✓ | ✓ |\n| Max | USD 100 al mes · 5 veces el uso de Pro | ✓ | ✓ | ✓ |\n| Ultra | USD 200 al mes · 10 veces el uso de Pro | ✓ | ✓ | ✓ |\n| Team | USD 25 por persona al mes (20 pagando el año) | ✓ | ✓ | ✓ |",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "La tabla de planes con un tilde por producto; «Pro · USD 20» marcado en rojo. Al pie: «Fuente: claude.com/pricing · 10/11/2026»."
        }
      },
      {
        "n": "1.7",
        "titulo": "El camino de este curso",
        "cuerpo": "1. Las tres formas de usar Claude (esta lección)\n2. Chat\n3. Cowork\n4. La terminal y Claude Code\n5. Su primera página web\n6. ¿Cuál uso para qué?",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista de las seis lecciones del curso, con la primera tildada."
        }
      },
      {
        "n": "1.8",
        "titulo": "La siguiente, gratis",
        "cuerpo": "La lección 2 se hace con el plan gratis. Tenga a mano un PDF cualquiera, o el del kit del curso: `cotizacion-remodelacion.pdf`.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 9,
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
    "objetivo": "Crear la cuenta y hacer tres cosas reales con el chat: una pregunta, la lectura de un PDF y un texto listo.",
    "resultado": "Una cotización en PDF resumida, con lo que le falta, y el correo de respuesta listo para copiar.",
    "laminas": [
      {
        "n": "2.1",
        "titulo": "Cuatro páginas, leídas por usted",
        "cuerpo": "Esta es una cotización de cuatro páginas, de una remodelación de oficina. Claude la leyó y sacó lo importante: qué incluye, cuánto cuesta, los plazos y **dos cosas que no dice**: si el precio incluye el IVA y qué pasa si la obra se atrasa.\n\nAl final de esta lección usted hace lo mismo, con el plan gratis.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 12,
          "seVe": "Recreación de la conversación: el PDF adjunto y el resumen real de Claude, con el IVA y los atrasos subrayados."
        }
      },
      {
        "n": "2.2",
        "titulo": "Cree su cuenta",
        "cuerpo": "1. Entre a **claude.ai**.\n2. Elija entrar con Google o escriba su correo: le llega un código o un enlace para entrar.\n3. Listo: ya está en el plan gratis.\n\nAbajo está la caja donde escribe; el botón con el clip o el signo de más sirve para subir archivos. Si prefiere, baje la app para la computadora o el celular desde [claude.com/download](https://claude.com/download): es la misma cuenta y las apps son gratis (lo que se paga es el plan).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "La página pública para entrar a claude.ai."
        }
      },
      {
        "n": "2.3",
        "titulo": "Primera pregunta: dele contexto",
        "cuerpo": "Pruebe con algo suyo. Fíjese en este pedido: dice «como si tuviera una panadería».\n\n**Regla número uno: cuanto más le cuenta de su caso, mejor contesta.** Claude respondió con un ejemplo de una semana de la panadería, en colones, con lo que entra, lo que sale y lo que queda.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 18,
          "seVe": "Chispa, chiquita, sobre la conversación recreada con la respuesta real del flujo de caja de la panadería.",
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
        "titulo": "Lo fuerte del chat: leer por usted",
        "cuerpo": "1. Toque el clip (o el signo de más) y suba el PDF, el del kit o uno suyo.\n2. Pídale dos cosas: el resumen y lo que falta.\n\nClaude lee las cuatro páginas, saca lo importante y marca lo que no está claro: acá, que no dice si el precio incluye el IVA y que no hay ninguna regla para los atrasos. **Revíselo siempre usted: Claude puede equivocarse, sobre todo con números.**",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "Recreación de la conversación: se sube el PDF, el pedido y la respuesta real; se subrayan las dos dudas."
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
        "cuerpo": "En la misma conversación pídale el correo para el proveedor. Claude recuerda todo lo anterior: no hace falta repetirle nada.\n\n¿No le gusta cómo quedó? Dígaselo: «más corto», «más formal». Después copie el texto y mándelo desde su correo. **Claude no envía nada por usted.**",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 23,
          "seVe": "Recreación de la conversación: el pedido del correo, la respuesta real, «Más corto» y el botón de copiar."
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
        "titulo": "Para qué sirve el chat",
        "cuerpo": "- Preguntar y aprender un tema\n- Leer y resumir PDF, fotos y planillas\n- Escribir y corregir textos\n- Pensar ideas con alguien\n\nTodo en una conversación, sin instalar nada.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista «Para qué es bueno Chat», con sus cuatro puntos tildados."
        }
      },
      {
        "n": "2.7",
        "titulo": "Lo que el chat no hace",
        "cuerpo": "El chat no entra a sus carpetas ni trabaja con sus archivos por su cuenta. Para eso está **Cowork**, que necesita un plan pago. Es la próxima lección.",
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
    "objetivo": "Pedirle a Claude que trabaje con sus archivos: ordenar una carpeta y armar un Excel con facturas en PDF.",
    "resultado": "Una carpeta de descargas ordenada y un Excel con 12 facturas y su total.",
    "laminas": [
      {
        "n": "3.1",
        "titulo": "¿Su carpeta se ve así?",
        "cuerpo": "Con Cowork, Claude no solo contesta: **hace la tarea**. Usted le da acceso a una carpeta, le pide algo en palabras y trabaja solo, varios pasos seguidos.\n\nEn esta lección le pide dos cosas: ordenar una carpeta de descargas desordenada y armar un Excel con las facturas en PDF que hay adentro.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 7,
          "seVe": "Chispa, plano de cara. Detrás, una ventana con 60 archivos sueltos («scan001.pdf», «IMG_2231.jpg»…) que se van acumulando.",
          "dice": "¿Su carpeta de descargas se ve así? La mía también. Hoy la ordena Claude, no usted."
        }
      },
      {
        "n": "3.2",
        "titulo": "Cowork en tres pasos",
        "cuerpo": "1. Dele acceso a una carpeta.\n2. Pídale la tarea en palabras.\n3. Revise lo que le propone y déjelo trabajar.\n\n**Qué necesita:** un plan pago (Pro o más) y, para trabajar con carpetas de su computadora, la app de escritorio de Claude.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Una pizarra con los tres pasos de Cowork: conectar una carpeta, pedir la tarea en palabras, revisar el plan y dejarlo trabajar."
        }
      },
      {
        "n": "3.3",
        "titulo": "Conecte una carpeta de prueba",
        "cuerpo": "1. Baje del kit el archivo `descargas-de-prueba.zip` y descomprímalo.\n2. Abra la app de Claude en su computadora.\n3. Pídale la tarea y dele acceso a esa carpeta.\n\nCowork ya es parte de Claude: no hace falta buscar un botón aparte. Pida lo que necesita y, si la tarea es con archivos, Claude trabaja con ellos.\n\n**La primera vez, siempre una carpeta de prueba**, nunca la de sus documentos de verdad. Claude solo lee y escribe en las carpetas que usted le da y le pide permiso antes de borrar algo para siempre.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "Capturas reales de claude.com/product/cowork: «Claude Cowork is now part of Claude»."
        }
      },
      {
        "n": "3.4",
        "titulo": "Tarea 1: ordenar",
        "cuerpo": "Pídale que ordene por tipo y aclárele: **no borre nada**.\n\nEn una prueba con la carpeta del kit, Claude creó cuatro carpetas (facturas, fotos, documentos y otros) y movió los 60 archivos, sin borrar ninguno. Tres facturas con nombres que no decían nada («descarga.pdf», «documento(3).pdf», «scan001.pdf») quedaron en documentos: por eso, cuando termine, mire cómo quedó.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Recreación de la carpeta antes y después, con el orden real que hizo Claude en una prueba."
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
        "titulo": "Tarea 2: las facturas, a un Excel",
        "cuerpo": "Pídale que busque las facturas, también en las subcarpetas, y arme un Excel con fecha, proveedor, número y monto, el total al final y una marca en las que no se lean bien.\n\n**Este es el fuerte de Cowork: muchos archivos, varios pasos y un documento terminado al final.** En la prueba, Claude encontró las 12 facturas, llegó al mismo total que la cuenta a mano, dejó afuera una cotización (no es una factura) y marcó una factura escaneada borrosa: esa la revisa usted.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 18,
          "seVe": "El Excel real que armó Claude, mostrado como hoja: la fila marcada para revisar y el total."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Busque las facturas en PDF de esta carpeta y de sus subcarpetas, léalas y arme un Excel con fecha, proveedor, número y monto de cada una. Al final, el total. Marque las que no se lean bien."
          }
        ]
      },
      {
        "n": "3.6",
        "titulo": "Para qué sirve Cowork",
        "cuerpo": "- Ordenar y renombrar muchos archivos\n- Armar un Excel, un Word o una presentación con lo que hay en una carpeta\n- Tareas largas que corren solas mientras usted hace otra cosa\n\n**Ojo:** trabajar con archivos gasta su límite de uso más rápido que el chat; junte lo parecido en una sola tarea.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista «Para qué es bueno Cowork», con sus tres puntos tildados."
        }
      },
      {
        "n": "3.7",
        "titulo": "Ahora, la terminal",
        "cuerpo": "La lección 4 abre la terminal e instala Claude Code. Es la única del curso con algo que instalar, y necesita el plan Pro o superior.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 12,
          "seVe": "Chispa entra sobre la carpeta ya ordenada en cuatro carpetas y festeja.",
          "dice": "Ordenada, y no toqué un archivo. Ahora, la ventana que da miedo: la terminal. Prometo que no muerde."
        }
      }
    ]
  },
  {
    "n": 4,
    "slug": "4-terminal-y-claude-code",
    "titulo": "Code: abrir la terminal sin miedo e instalar Claude Code",
    "objetivo": "Saber qué es una terminal, abrirla e instalar Claude Code, en Windows o en Mac.",
    "resultado": "Claude Code abierto en su primera carpeta.",
    "laminas": [
      {
        "n": "4.1",
        "titulo": "La ventana negra",
        "cuerpo": "Una **terminal** es una ventana donde, en vez de hacer clic, se escriben órdenes. Ya viene en su computadora: no hay que bajar nada.\n\n**Claude Code vive ahí:** usted le escribe en castellano y trabaja en la carpeta donde lo abrió. Necesita un plan Pro o superior (el gratis no incluye Claude Code), Windows 10 (versión 1809 o más nueva) o macOS 13 o más nuevo, 4 GB de memoria e internet.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 10,
          "seVe": "Chispa, plano medio; a su lado una ventana negra con un cursor que parpadea; Chispa se aleja un paso.",
          "dice": "Esta ventana negra es la terminal. Parece de película de hackers. En realidad es una caja donde se escriben órdenes en vez de hacer clic."
        }
      },
      {
        "n": "4.2",
        "titulo": "Lo mismo, con clics o escribiendo",
        "cuerpo": "Todo lo que hace con el mouse se puede hacer escribiendo. Para tener Claude Code son **cuatro pasos**:\n\n1. abrir la terminal;\n2. pegar el comando que lo instala;\n3. crear y abrir una carpeta;\n4. escribir `claude`.\n\nPrimero Windows; el Mac está en la lámina 4.9.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 12,
          "seVe": "La misma acción dos veces, lado a lado: «abrir una carpeta» con clics en el Explorador y con una línea escrita; después aparecen los 4 pasos."
        }
      },
      {
        "n": "4.3",
        "titulo": "Windows · 1. Abra la terminal",
        "cuerpo": "Apriete **Windows + X** y elija «Terminal» (o «Windows PowerShell»). La línea tiene que empezar con `PS`, seguido de su carpeta: esas letras dicen que está en **PowerShell**, que es la que queremos. Si no dice PS, está en otra ventana (CMD).\n\nOpcional: instale Git para Windows desde [git-scm.com/downloads/win](https://git-scm.com/downloads/win), aceptando todo como viene. Sin él, Claude Code usa PowerShell y anda igual.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 9,
          "seVe": "Se aprieta Win + X (las teclas, dibujadas en pantalla) y se elige «Terminal»; se subraya `PS C:\\Users\\…>` al principio de la línea."
        }
      },
      {
        "n": "4.4",
        "titulo": "Windows · 2. Instale Claude Code",
        "cuerpo": "Copie el comando oficial, péguelo en la terminal con **Ctrl + V** y apriete **Enter**. Baja Claude Code y lo instala. Si su ventana es CMD, use el segundo comando.\n\nMientras baja no muestra avance: espere sin cerrar hasta que diga «Claude Code successfully installed!» («instalado correctamente»). Use solo comandos de la página oficial, [code.claude.com](https://code.claude.com/docs/en/setup).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "Recreación con los textos del instalador oficial: el comando en PowerShell y «Claude Code successfully installed!»."
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
        "cuerpo": "**Cierre la terminal y abra una nueva**, así toma el programa recién instalado. Escriba `claude --version`: si responde con un número y «(Claude Code)», quedó instalado.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Una PowerShell nueva con claude --version y su número."
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
        "titulo": "¿Le dice que «claude» no se reconoce?",
        "cuerpo": "Casi siempre es porque usó la misma terminal que tenía abierta antes de instalar: ciérrela y abra una nueva. Si sigue, mire la tabla de la lámina 4.11 y la guía del kit.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 13,
          "seVe": "Chispa entra corriendo desde abajo; detrás, el error «'claude' is not recognized».",
          "dice": "¿Le salió “not recognized”? Casi siempre es esto: no abrió una terminal nueva. Ábrala de nuevo."
        }
      },
      {
        "n": "4.7",
        "titulo": "4. Su primera carpeta y `claude`",
        "cuerpo": "Tres órdenes:\n\n- `mkdir mi-primer-proyecto` crea una carpeta;\n- `cd mi-primer-proyecto` entra en ella;\n- `claude` abre Claude Code ahí.\n\n**Claude solo trabaja en la carpeta donde lo abre:** así sabe dónde puede tocar. Para ver la carpeta con ventanas: `explorer .` en Windows, `open .` en Mac.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 18,
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
        "titulo": "5. Entre con su cuenta (una sola vez)",
        "cuerpo": "La primera vez, Claude Code le pide elegir cómo ver el texto y entrar con su cuenta de Claude (Pro o superior): se abre el navegador, usted acepta y vuelve a la terminal. También pregunta si confía en la carpeta: es suya y está vacía, así que diga que sí.\n\nQueda guardado: la próxima vez entra directo.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La bienvenida real de Claude Code en mi-primer-proyecto, con el aviso del modo automático."
        }
      },
      {
        "n": "4.9",
        "titulo": "En Mac",
        "cuerpo": "1. Apriete **Cmd + Espacio**, escriba «Terminal» y Enter.\n2. Pegue el comando de Mac, que es distinto al de Windows, y Enter.\n3. Si al terminar aparece una nota sobre el «PATH» (la lista de carpetas donde la terminal busca programas), copie y pegue la línea que propone.\n4. Después, igual que en Windows: terminal nueva, `claude --version`, su carpeta y `claude`.\n\nNecesita macOS 13 o más nuevo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 24,
          "seVe": "Grabación real del instalador oficial de Mac y Linux en una terminal: «Claude Code successfully installed!» y la nota del PATH."
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
        "cuerpo": "- **Enter** manda lo que escribió.\n- **Esc** frena a Claude si se va por mal camino.\n- Hoy Claude Code viene en **modo automático**: revisa cada acción, hace solo lo de bajo riesgo (como crear un archivo en su carpeta) y frena lo riesgoso. Si le pregunta algo, **Enter** elige «Yes».\n- **Shift + Tab** cambia cuánto puede hacer sin preguntar.\n- `/help` muestra los comandos y `exit` (o **Ctrl + D** dos veces) sale.\n- No se hace clic: se usan las flechas del teclado.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista «Adentro de Claude Code» con las teclas dibujadas: Enter, Esc, las flechas, Shift + Tab y Ctrl + D."
        }
      },
      {
        "n": "4.11",
        "titulo": "Si algo falla",
        "cuerpo": "Los errores más comunes y su solución, según las páginas oficiales de Claude Code (la misma tabla está en la guía del kit).\n\n| Lo que ve | Qué pasa | Qué hacer |\n| «'irm' is not recognized…» | Está en CMD, no en PowerShell | Abrir PowerShell (Win + X) o usar el comando de CMD de la lámina 4.4 |\n| «The token '&&' is not a valid statement separator» | Está en PowerShell con el comando de CMD | Usar el comando de PowerShell de la lámina 4.4 |\n| «'claude' is not recognized» o «command not found: claude» | La carpeta del programa no está en el «camino» (PATH) | Cerrar y abrir una terminal nueva. Si sigue: en Windows, los dos comandos de PATH de la [guía oficial](https://code.claude.com/docs/en/terminal-guide); en Mac, los dos comandos de abajo |\n| «Could not create SSL/TLS secure channel» | Windows 10 viejo | Correr antes el comando de abajo y repetir la instalación |\n| «does not support 32-bit Windows» | Abrió «Windows PowerShell (x86)» | Abrir la que no dice (x86) |\n| «syntax error near unexpected token '<'» o una página web en la terminal | El enlace devolvió una página; si dice «App unavailable in region», Claude no está en su país | Repetir; en Mac, `brew install --cask claude-code` |\n| «dyld: cannot load» o «built for Mac OS X 13.0» | macOS más viejo que 13 | Actualizar macOS |\n| Al entrar, le pide mejorar el plan | Está con Free | Claude Code necesita Pro o más |",
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
        "cuerpo": "**Sin terminal también se puede:** la pestaña **Code** de la app de escritorio, claude.ai/code en la web y las extensiones para los editores VS Code y JetBrains.\n\nHay otras dos instalaciones oficiales: `winget install Anthropic.ClaudeCode` (Windows) y `brew install --cask claude-code` (Mac). Esas dos **no se actualizan solas**; la del curso sí. En la próxima lección: su primera página web.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 12,
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
    "objetivo": "Construir dos cosas con Claude Code: una página web y una herramienta que renombra fotos con su fecha.",
    "resultado": "Una página web abierta en el navegador y una carpeta de fotos renombradas con un doble clic.",
    "laminas": [
      {
        "n": "5.1",
        "titulo": "Esta página no la programó nadie",
        "cuerpo": "Esta es la página de una panadería de ejemplo, «La Espiga». Se la pidieron a Claude Code en dos frases y la hizo entera: el horario, tres productos con precio y un botón de WhatsApp, y se acomoda sola al celular.\n\nEn esta lección usted hace la suya y, después, una herramienta para usar todas las semanas.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 12,
          "seVe": "Capturas reales de la página que hizo Claude Code: en la compu, bajando, y en el celular."
        }
      },
      {
        "n": "5.2",
        "titulo": "Pídala como a un diseñador",
        "cuerpo": "Abra Claude Code en su carpeta (`cd mi-primer-proyecto` y `claude`) y describa la página como se la contaría a un diseñador: el nombre, qué tiene que tener y cómo se tiene que ver. Cambie los datos del ejemplo por los suyos.\n\nClaude crea el archivo `index.html`, que es la página, y al final le avisa qué datos inventó para completarla (el número de WhatsApp, los precios) y tiene que cambiar por los suyos.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 38,
          "seVe": "Grabación real: el pedido en Claude Code, el archivo index.html creado y el aviso de los datos inventados."
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
        "cuerpo": "Abra la carpeta (`explorer .` en Windows, `open .` en Mac) y haga doble clic en `index.html`: se abre en su navegador.\n\n**Es un archivo en su computadora: todavía no está en internet.**",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Captura real de index.html abierto en el navegador."
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
        "cuerpo": "Pídale los cambios como a una persona, por ejemplo: «El botón de WhatsApp más grande y agregue una foto de pan arriba».\n\nClaude agrandó el botón. Para la foto, le pidió una suya: dejó el lugar listo esperando un archivo llamado `pan.jpg`. **Ese es el fuerte de Code: construye algo que antes no existía y lo va cambiando con usted.**",
        "apoyo": {
          "tipo": "motion",
          "segundos": 12,
          "seVe": "Capturas reales antes y después: el botón de WhatsApp más grande."
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
        "cuerpo": "Por ahora la página vive en su carpeta. Publicarla con su propio dominio, y cambiarla después en palabras, es un curso entero: **Su sitio web con Claude Code**.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 8,
          "seVe": "Chispa sobre la página de la panadería.",
          "dice": "Para ponerla en internet con su dominio hay un curso entero: el D2."
        }
      },
      {
        "n": "5.6",
        "titulo": "Una vez, o todas las semanas",
        "cuerpo": "Tiene veinte fotos de una obra con nombres que no dicen nada («IMG_4821.jpg»). Cowork las renombra una vez. Pero si le pasa todas las semanas, pídale a Code otra cosa: **una herramienta**, un archivo que con doble clic ponga la fecha en el nombre de cada foto. La próxima semana no le pide nada a nadie.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 12,
          "seVe": "Dos líneas de tiempo: arriba, «Cowork» repite el pedido cada semana; abajo, «Code» hace el archivo una vez y después solo hay dobles clics."
        }
      },
      {
        "n": "5.7",
        "titulo": "Hágala: renombrar fotos con su fecha",
        "cuerpo": "1. Descomprima `fotos-obra.zip` del kit dentro de su carpeta.\n2. Pídale la herramienta.\n3. Claude elige el tipo de archivo según su computadora y le explica cómo usarlo: siga **su** explicación.\n4. Úsela: muestra cada cambio, le pide confirmar y renombra las fotos con la fecha en que se tomaron, por ejemplo `2026-11-02_01.jpg`.\n\nLa fecha sale de los datos que la cámara guarda dentro de cada foto.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 54,
          "seVe": "Grabación real: las veinte fotos, el pedido, la explicación de Claude y la herramienta que renombra las fotos con su fecha."
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
        "titulo": "Para qué sirve Code",
        "cuerpo": "- Páginas web\n- Herramientas y automatizaciones que se reusan\n- Apps y programas\n- Arreglar o entender código que ya existe\n\nY como trabaja en una carpeta, **todo queda guardado en archivos suyos**.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista «Para qué es bueno Code», con sus cuatro puntos tildados."
        }
      },
      {
        "n": "5.9",
        "titulo": "Ya usó las tres",
        "cuerpo": "Chat, Cowork y Code, cada uno con una tarea real. Falta lo más útil: saber cuál abrir cada vez.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 9,
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
    "objetivo": "Decidir rápido cuál de las tres formas usar y saber con qué curso seguir.",
    "resultado": "La tabla para decidir y el próximo curso.",
    "laminas": [
      {
        "n": "6.1",
        "titulo": "Un juego rápido",
        "cuerpo": "¿Cuál abriría para cada una de estas tareas?\n\n- Resumir un contrato.\n- Ordenar las fotos del año.\n- Una página para su negocio.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 11,
          "seVe": "Chispa, en plano medio. Arriba aparece un pedido por vez y, a los dos segundos, se enciende la puerta que corresponde: Chat, Cowork o Code.",
          "dice": "Un juego rápido. “Resumir un contrato”: Chat. “Ordenar mis fotos del año”: Cowork. “Una página para mi negocio”: Code. ¿Ve el patrón?"
        }
      },
      {
        "n": "6.2",
        "titulo": "La regla",
        "cuerpo": "Si quiere **una respuesta, un texto o que le lea un documento: Chat**. Si quiere que **haga una tarea con sus archivos**, como ordenar o armar un Excel o un Word: **Cowork**. Si quiere que **exista algo nuevo**, una página, una herramienta o una app: **Code**. Y si duda, empiece por Chat: le puede preguntar a la misma Claude cuál le conviene. La tabla completa también está en el kit.\n\n| Quiero… | Uso | Por qué | Plan mínimo |\n| Preguntar algo, aprender un tema, pensar una idea | **Chat** | Es una conversación; no necesita tocar nada suyo | Free |\n| Que me lea un PDF, una foto o una planilla y me diga lo importante | **Chat** | Sube el archivo y pregunta | Free |\n| Un texto: un correo, una publicación, una propuesta | **Chat** | Escribe y corrige con usted en la misma conversación | Free |\n| Ordenar o renombrar muchos archivos una vez | **Cowork** | Trabaja en la carpeta que usted conecta, varios pasos solo | Pro |\n| Armar un Excel, un Word o una presentación con lo que hay en una carpeta | **Cowork** | Lee muchos archivos y entrega el documento terminado | Pro |\n| Una tarea larga mientras hago otra cosa | **Cowork** | Corre sola y le pide permiso para lo delicado | Pro |\n| Una página web | **Code** | Crea los archivos y los cambia con usted | Pro |\n| Una herramienta que voy a usar todas las semanas | **Code** | Deja un archivo que se reusa sin pedirle nada | Pro |\n| Una app o un programa, o arreglar uno que ya tengo | **Code** | Es para lo que fue hecho | Pro |",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "La tabla «¿Cuál uso para qué?» se arma fila por fila, y cada fila se pinta del color de su puerta."
        }
      },
      {
        "n": "6.3",
        "titulo": "¿Qué curso sigue?",
        "cuerpo": "Depende de lo que quiera hacer:\n\n| Si quiere… | Siga con |\n| Que un equipo de agentes trabaje para su negocio | **Su agentic OS** |\n| Dejar de repetirle las mismas instrucciones a Claude | **Crear sus propias skills de Claude** |\n| Animaciones y videos sin After Effects | **Motion design con Claude** |\n| Planos, cantidades y reportes en AutoCAD | **Claude + AutoCAD** |\n| Su sitio web publicado y que se cambia en palabras | **Su sitio web con Claude Code** |\n| Que su sitio aparezca en Google | **SEO con agentes** |",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "El mapa de cursos: desde «A0» salen flechas a A1, A2, A3, B1, C1 y D2, con una frase cada uno."
        }
      },
      {
        "n": "6.4",
        "titulo": "Si quiere más (oficial, en inglés)",
        "cuerpo": "- La guía de la terminal para principiantes: [code.claude.com/docs/en/terminal-guide](https://code.claude.com/docs/en/terminal-guide).\n- Los cursos de Anthropic en [Claude Academy](https://anthropic.skilljar.com/): «Claude 101», «Introduction to Claude Cowork», «Claude Code 101» y «AI Fluency» (piden una cuenta de Skilljar).\n- Las skills de ejemplo de Anthropic, que crean Word, PDF, PowerPoint y Excel: [github.com/anthropics/skills](https://github.com/anthropics/skills). Cómo instalarlas y revisarlas se ve en el curso de skills.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Tres tarjetas con el nombre de cada recurso y su enlace (sin logos)."
        }
      },
      {
        "n": "6.5",
        "titulo": "Lo que ya tiene",
        "cuerpo": "- Sabe qué hacen Chat, Cowork y Code y cuánto cuesta cada uno\n- Un PDF analizado y su correo de respuesta\n- Un Excel armado con 12 facturas\n- Claude Code instalado y abierto en su carpeta\n- Su primera página web y una herramienta que se reusa\n\nEn el kit del curso están la guía de instalación, la tabla para decidir y los pedidos para empezar.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista de lo que ya tiene, con los cinco puntos tildados."
        }
      },
      {
        "n": "6.6",
        "titulo": "Siga aprendiendo",
        "cuerpo": "Elija el próximo curso por lo que más le sirve hoy: un equipo de agentes que trabaje para su negocio, sus propias skills, su sitio web o sus planos en AutoCAD. Todos parten de lo que aprendió acá.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La tarjeta de cierre del curso, con los próximos cursos para seguir."
        }
      }
    ]
  }
];
