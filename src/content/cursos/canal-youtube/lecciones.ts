// B9 · Su canal de YouTube con IA: las lecciones, lámina por lámina, desde el storyboard
// (docs/planes/cursos/B9-canal-youtube.md de la aldea, 2026-11-10). Texto completo de cada lámina; los videos e imágenes van en ../medios.json.
import type { LeccionCurso } from '../../tipos';

export const lecciones: LeccionCurso[] = [
  {
    "n": 0,
    "slug": "0-puesta-a-punto",
    "titulo": "Puesta a punto: canal, Claude Code, voz y la API de YouTube",
    "objetivo": "Dejar listos el canal, Claude Code, la voz y la API de YouTube, y comprobarlo.",
    "resultado": "Un video de prueba de 10 s subido **como privado** desde la terminal, y el nombre de su canal leído por la API.",
    "laminas": [
      {
        "n": "0.1",
        "titulo": "Un canal que se hace casi solo",
        "cuerpo": "En este curso arma su canal con IA: Claude escribe con fuentes, una voz narra, su computadora hace las imágenes y un programa lo sube programado. Usted decide el tema, revisa y aprueba. Esta lección deja todo instalado.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 18,
          "seVe": "Chispa en plano medio; a su lado aparece una miniatura de video en blanco que se va llenando.",
          "dice": "Casi todo su canal lo puede hacer una computadora. Casi. Lo que no, lo hace usted, y le voy a mostrar cuál es cuál. Empecemos por instalar."
        }
      },
      {
        "n": "0.2",
        "titulo": "Lo que va a necesitar",
        "cuerpo": "- **Cuentas:** Google con su canal, Claude (plan Pro o superior), ElevenLabs (Starter si va a publicar) o la voz local.\n- **Programas:** Claude Code, Python, ffmpeg.\n- **Opcional:** Blender y la IA local (en el curso de videos 3D con Blender y Claude).\n- **Costo mínimo para publicar:** USD 20 de Claude + USD 6 de voz al mes.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tabla con las cuentas y los programas del curso y lo que cuesta cada uno; abajo, el mínimo para publicar: USD 20 de Claude y USD 6 de voz al mes."
        }
      },
      {
        "n": "0.3",
        "titulo": "El canal",
        "cuerpo": "Cree el canal desde youtube.com (mejor con una cuenta de marca, no su correo personal) y **verifíquelo por teléfono** en youtube.com/verify: sin eso no puede subir miniaturas propias.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Las pantallas de «Crear un canal» en YouTube y de youtube.com/verify, en una cuenta de prueba."
        }
      },
      {
        "n": "0.4",
        "titulo": "Claude Code, Python y ffmpeg",
        "cuerpo": "- **Claude Code:** en Windows, en PowerShell (antes instale Git para Windows); en Mac y Linux, en la Terminal.\n- **Python 3.14:** de python.org (en Windows, marque «Add to PATH») o con `winget` en Windows y `brew` en Mac. En Linux, el de su distribución.\n- **ffmpeg:** con `winget` en Windows, `brew` en Mac y `apt` en Linux.\n\nAbra una terminal nueva y pida las versiones: si las tres responden, está listo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "vozEnOff": true,
          "seVe": "PowerShell y la Terminal de Mac lado a lado, con los comandos de instalación resaltados; después responden `claude --version`, `python --version` y `ffmpeg -version`.",
          "dice": "Tres programas: Claude Code, Python y ffmpeg. Instálelos, abra una terminal nueva y pida la versión de cada uno."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Claude Code · Windows, en PowerShell",
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
            "etiqueta": "Python y ffmpeg · Windows",
            "lenguaje": "powershell",
            "texto": "winget install Python.Python.3.14\nwinget install Gyan.FFmpeg"
          },
          {
            "tipo": "comando",
            "etiqueta": "Python y ffmpeg · Mac",
            "lenguaje": "bash",
            "texto": "brew install python@3.14\nbrew install ffmpeg"
          },
          {
            "tipo": "comando",
            "etiqueta": "ffmpeg · Linux (Debian o Ubuntu)",
            "lenguaje": "bash",
            "texto": "sudo apt install ffmpeg"
          },
          {
            "tipo": "comando",
            "etiqueta": "Comprobar, en una terminal nueva",
            "lenguaje": "bash",
            "texto": "claude --version\nclaude doctor\npython --version\nffmpeg -version"
          }
        ]
      },
      {
        "n": "0.5",
        "titulo": "La carpeta del curso",
        "cuerpo": "Baje el kit en `Documentos\\canal-youtube` (Windows) o `~/canal-youtube` (Mac y Linux) y prepare sus bibliotecas, con versiones fijas: cree el entorno (`python -m venv .venv`), actívelo e instale `requirements.txt`. Los comandos de cada sistema están abajo.\n\nSe comprueba con `pip list`: aparece `google-api-python-client 2.201.0`. Abra Claude Code en esa carpeta: lee el `CLAUDE.md` del kit.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La carpeta del kit abierta con sus archivos, y `requirements.txt` con las versiones fijas."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows, en PowerShell",
            "lenguaje": "powershell",
            "texto": "cd Documentos\\canal-youtube\npython -m venv .venv\n.venv\\Scripts\\activate\npip install -r requirements.txt"
          },
          {
            "tipo": "comando",
            "etiqueta": "Mac y Linux",
            "lenguaje": "bash",
            "texto": "cd ~/canal-youtube\npython3 -m venv .venv\nsource .venv/bin/activate\npip install -r requirements.txt"
          }
        ]
      },
      {
        "n": "0.6",
        "titulo": "La API de YouTube, paso a paso",
        "cuerpo": "1. console.cloud.google.com → proyecto nuevo.\n2. Biblioteca → habilite **YouTube Data API v3** y **YouTube Analytics API** (las dos tienen que figurar como «Habilitada»).\n3. Pantalla de consentimiento: «Externo», su correo como usuario de prueba.\n4. Credenciales → ID de cliente de OAuth → **App de escritorio** → descargue el JSON y guárdelo como `client_secret.json` en la carpeta `secretos` del kit.\n\nEse archivo da acceso a su canal: no lo ponga en ninguna carpeta compartida.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 55,
          "vozEnOff": true,
          "seVe": "La consola de Google Cloud en una cuenta de prueba: el proyecto, las dos APIs habilitadas, la pantalla de consentimiento, el cliente de escritorio y la descarga del JSON, con los datos tapados.",
          "dice": "Un proyecto, dos interfaces habilitadas y un cliente de escritorio. Ese archivo es la llave de su canal: guárdelo en la carpeta de secretos y no lo comparta."
        }
      },
      {
        "n": "0.7",
        "titulo": "La voz",
        "cuerpo": "Cuenta en elevenlabs.io; si va a publicar, plan **Starter o superior** (el gratis no trae licencia comercial). En **Developers → API Keys** cree una clave con permiso de voz (*Text to Speech*) y **un tope de créditos que usted conozca**; guárdela en el archivo `elevenlabs.txt` de la carpeta `secretos`. Las claves no se pegan en el chat de Claude: Claude solo corre los scripts que las leen.\n\nSe comprueba con `python voz.py --prueba`: deja `salida/prueba.mp3`. ¿Sin pagar? La voz local de la lección 4.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La pantalla de claves de ElevenLabs con el tope de créditos señalado y la clave tapada."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Probar la voz",
            "texto": "python voz.py --prueba"
          }
        ]
      },
      {
        "n": "0.8",
        "titulo": "La prueba de fuego",
        "cuerpo": "1. `python subir.py --autorizar` abre el navegador: elija **el canal**, no su correo personal. Queda el permiso guardado en `token.json`, dentro de `secretos`.\n2. `python subir.py ejemplos/prueba.mp4 ejemplos/prueba.json`: en YouTube Studio aparece «Prueba del curso», **privado**.\n3. `python medir.py --canal` escribe el nombre de su canal.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "El navegador con el permiso y el aviso de app no verificada (con el clic en «Configuración avanzada»); la terminal subiendo con su porcentaje; YouTube Studio con el video privado. Sin voz: los pasos aparecen escritos en pantalla."
        },
        "bloques": [
          {
            "tipo": "comando",
            "texto": "python subir.py --autorizar",
            "etiqueta": "El primer permiso"
          },
          {
            "tipo": "comando",
            "texto": "python subir.py ejemplos/prueba.mp4 ejemplos/prueba.json",
            "etiqueta": "Subir el video de prueba"
          },
          {
            "tipo": "comando",
            "texto": "python medir.py --canal",
            "etiqueta": "Leer el nombre del canal"
          }
        ]
      },
      {
        "n": "0.9",
        "titulo": "Si algo falla",
        "cuerpo": "Lo que más suele fallar en la puesta a punto, y cómo se arregla:\n\n| Lo que aparece | Qué pasa | Solución |\n| «Google no verificó esta app» al autorizar | Su proyecto usa permisos sensibles y no está verificado | Es su propia app: «Configuración avanzada» → «Ir a … (no seguro)». Mientras sea solo para su canal no hace falta verificarla (lección 8) |\n| `invalid_grant` a la semana | En modo «Prueba», Google da permisos que **vencen a los 7 días** | Pasar la app a «En producción» y autorizar de nuevo (lección 8) |\n| `quotaExceeded` | Se gastó la cuota del día | Esperar a la medianoche del Pacífico; no reintentar en bucle (`subir.py` no lo hace) |\n| `401` de ElevenLabs a mitad de un guion | La clave llegó a su tope de créditos o perdió el permiso de voz (nos pasó con Roma) | En Developers → API Keys, subir el tope o revisar el permiso; `voz.py` retoma desde la parte que falta |\n| La miniatura no se sube (`forbidden`) | El canal no está verificado por teléfono | youtube.com/verify |\n| `python` no se reconoce (Windows) | No quedó en el PATH | Reinstalar marcando «Add to PATH», o usar `py` |\n| El video subido dice «Privado» y no se publica | Así lo sube el kit a propósito, con fecha programada | Mírelo en Studio; se publica solo a la hora de `publicar` |",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La tabla de errores típicos de la puesta a punto: lo que aparece, qué pasa y cómo se soluciona."
        }
      },
      {
        "n": "0.10",
        "titulo": "Su canal ya obedece",
        "cuerpo": "Ese video lo subió un programa, no usted. Desde ahora, todo lo que suba va a entrar **privado y programado**, para que lo vea antes que nadie.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 12,
          "seVe": "Chispa en capa delante de YouTube Studio con el video privado; lo señala.",
          "dice": "Ese video lo subió un programa. Y entró privado, a propósito: lo ve usted antes que nadie."
        }
      }
    ]
  },
  {
    "n": 1,
    "slug": "1-nicho-y-formato",
    "titulo": "El nicho, el formato y las cuentas claras",
    "objetivo": "Elegir de qué va el canal, en qué formato y a qué ritmo, sabiendo cuándo (y si) paga.",
    "resultado": "La ficha del canal escrita con Claude (`canal.md`).",
    "laminas": [
      {
        "n": "1.1",
        "titulo": "¿De qué va a ser su canal?",
        "cuerpo": "Antes de la primera imagen hay tres decisiones: **el tema**, **el formato** y **el ritmo**. Las tres se escriben en una ficha que Claude va a leer cada vez que trabaje para su canal.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa con tres tarjetas en blanco flotando (tema, formato, ritmo); las da vuelta de a una.",
          "dice": "Antes de hacer un solo video hay que decidir tres cosas: de qué va su canal, cómo son sus videos y cada cuánto sale uno. Si eso está claro, lo demás se automatiza."
        }
      },
      {
        "n": "1.2",
        "titulo": "Las cuentas claras",
        "cuerpo": "YouTube no paga nada hasta que entra al **Programa de socios**: **1.000 suscriptores** y **4.000 horas** de reproducción pública de videos largos en los últimos 12 meses, o **10 millones de vistas de shorts** en 90 días. Hasta entonces, el ingreso por anuncios es **cero**. Por eso nuestro plan de negocios dice «no ahora» a vivir de AdSense: el canal empieza como **vitrina** (de un servicio, un curso, un producto).\n\nFuente: [Programa de socios de YouTube](https://support.google.com/youtube/answer/72857), consultada el 2026-11-10.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "vozEnOff": true,
          "seVe": "Dos barras que se llenan despacio, suscriptores y horas, con un contador de meses; al lado, una flecha del canal a «su servicio».",
          "dice": "Mil suscriptores y cuatro mil horas: hasta ahí, YouTube no le paga nada. Por eso, al principio, que su canal lleve a algo que usted ya vende."
        }
      },
      {
        "n": "1.3",
        "titulo": "Elegir el nicho",
        "cuerpo": "Tres preguntas: **¿alguien lo busca?** (mire en YouTube qué se publicó este año sobre el tema y cuánto se vio). **¿Puede aportar algo propio?** (investigación, un punto de vista, un estilo, su oficio). **¿Le alcanzan los temas** para 6 meses sin repetirse? Si alguna es «no», cambie de nicho.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Las tres preguntas como lámina, con un ejemplo «sí/sí/sí» y uno que falla."
        }
      },
      {
        "n": "1.4",
        "titulo": "Nuestro caso",
        "cuerpo": "Nuestra sede de videos arrancó con **historia**, después **salud y ciencia**, un **canal de niños** y el mismo video **doblado al inglés** en otro canal. Lo que decidió Julian el 2026-11-07: **un video al día, no producción masiva**; guion con Claude; lo pesado en la PC, de noche; el estilo visual, según el tema. Todavía no publicamos: no hay suscriptores ni ingresos que mostrarle.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Un diagrama que se dibuja: investigar → guion → producir → revisar → publicar, con los cuatro canales a la derecha; al final, un sello «sin publicar todavía». Sin voz: los textos aparecen en pantalla."
        }
      },
      {
        "n": "1.5",
        "titulo": "El formato: uno largo y sus shorts",
        "cuerpo": "**Largo de 8 a 10 min, horizontal (16:9):** es el que suma horas de reproducción y deja contar una historia entera. **Shorts verticales** que salen del largo: los que hacen que lo descubran. Un video largo bien hecho da de 2 a 4 shorts.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "vozEnOff": true,
          "seVe": "Una línea de tiempo de 10 min; de ella se desprenden tres tramos que se paran en vertical como celulares.",
          "dice": "Un video largo para contar la historia entera. Y de él, los cortos verticales que lo hacen descubrir."
        }
      },
      {
        "n": "1.6",
        "titulo": "El ritmo que se sostiene",
        "cuerpo": "YouTube castiga lo que parece hecho en serie (lección 2). Elija un ritmo que pueda **revisar** usted: al empezar, de **2 a 3 por semana**; nosotros apuntamos a uno por día con un equipo de agentes y la aprobación de Julian en cada video. Constancia antes que volumen.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Calendario de 4 semanas con 3 videos por semana marcados y «revisado» en cada uno."
        }
      },
      {
        "n": "1.7",
        "titulo": "La ficha del canal con Claude",
        "cuerpo": "En Claude Code, en la carpeta del kit, pida la ficha con el pedido de abajo (cambie el tema y para quién). Léala y corríjala: es la que va a leer Claude en cada guion.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "El pedido en Claude Code; Claude hace dos preguntas y escribe `canal.md`; zoom en «Lo que nunca vamos a hacer». Sin voz: los textos aparecen en pantalla."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Usá la skill canal. Mi tema es [tema], para [quién]. Haceme la ficha en canal.md: público, promesa, 20 temas, formato, estilo visual, ritmo y lo que nunca vamos a hacer",
            "etiqueta": "La ficha del canal"
          }
        ]
      }
    ]
  },
  {
    "n": 2,
    "slug": "2-reglas-de-youtube",
    "titulo": "Lo que hace que YouTube no le pague (o le cierre el canal)",
    "objetivo": "Conocer las reglas que pueden tirar un canal hecho con IA antes de producir.",
    "resultado": "Su lista de reglas en `canal.md` (IA declarada, audiencia, derechos, valor propio) y la lista de revisión del kit entendida.",
    "laminas": [
      {
        "n": "2.1",
        "titulo": "Usar IA no está prohibido",
        "cuerpo": "Lo que YouTube no paga es **lo que no aporta**: videos intercambiables, hechos en serie, o de otros. La IA puede escribir, narrar e ilustrar; el valor tiene que ser suyo. Esta lección va antes de producir a propósito.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa seria, plano de cara; detrás, borroso, un muro de miniaturas iguales.",
          "dice": "Usar inteligencia artificial no está prohibido. Lo que YouTube no paga es lo que no aporta nada. Y eso conviene saberlo antes de hacer el primer video, no después."
        }
      },
      {
        "n": "2.2",
        "titulo": "Contenido «no auténtico»",
        "cuerpo": "Desde el **15 de julio de 2025**, la regla de contenido «repetitivo» se llama **contenido no auténtico**: lo **producido en masa o repetitivo** no se monetiza. Ejemplos que YouTube da: presentaciones de imágenes o texto que corre **con poca o ninguna narración, comentario o valor educativo**; videos parecidos **con poca variación** entre uno y otro; **contenido hecho con IA a partir de plantillas genéricas**. Sí se permite: la misma presentación y cierre en todos, o una serie, si cada video tiene su propio tema. Y YouTube aclara que usar IA para **editar el guion** o crear **un fondo propio** está bien.\n\nFuente: [políticas de monetización de canales](https://support.google.com/youtube/answer/1311392), consultada el 2026-11-10.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una lámina en dos columnas, «no se paga» y «sí se paga», con las frases de la política de YouTube y su fuente abajo."
        }
      },
      {
        "n": "2.3",
        "titulo": "Contenido reutilizado",
        "cuerpo": "Usar videos de otros (aun **con su permiso**) **sin un aporte importante** (comentario, cambios de fondo, valor educativo) no se monetiza: recopilaciones con poca historia, ediciones mínimas, leer textos ajenos. Sí: crítica, análisis, reacciones con su comentario.\n\nFuente: [políticas de monetización de canales](https://support.google.com/youtube/answer/1311392), consultada el 2026-11-10.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Tarjetas con ejemplos de lo que sí se paga y lo que no."
        }
      },
      {
        "n": "2.4",
        "titulo": "Lo que miran cuando revisan",
        "cuerpo": "No revisan un video: revisan **el canal**. El tema principal, los videos más vistos, los más nuevos, los que suman más tiempo de reproducción, **los títulos, miniaturas y descripciones**, y la sección «Acerca de». Si castigan, **puede ser el canal entero**, con pagos retenidos o la monetización quitada; en casos graves, cerrado. Y no se puede abrir otro canal para esquivarlo.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "vozEnOff": true,
          "seVe": "Una página de canal de ejemplo (inventada, sin marcas) recorrida por una lupa: pestaña de populares, recientes, miniaturas, «Acerca de»; al final, todo el canal se pone en gris.",
          "dice": "No revisan un video suelto: revisan su canal entero. Lo más visto, lo último, las miniaturas y hasta la descripción."
        }
      },
      {
        "n": "2.5",
        "titulo": "Declarar lo alterado o sintético",
        "cuerpo": "Hay que declarar, al subir, lo **realista** hecho o cambiado con IA: una persona real diciendo o haciendo algo que no hizo, un hecho o un lugar real alterado, **una escena realista que nunca ocurrió**. No hace falta en lo claramente irreal (animación, fantasía), en retoques menores ni en lo que la IA solo ayudó a producir (guion, ideas, títulos). Se marca en **Studio → Detalles → «Uso de IA»** (o por la API, lección 8). **Declararlo no le quita alcance ni monetización**; no hacerlo, varias veces, sí trae sanciones. Nuestra regla: si duda, se declara.\n\nFuente: [declarar contenido alterado o sintético](https://support.google.com/youtube/answer/14328491), consultada el 2026-11-10.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La opción «Uso de IA» de YouTube Studio señalada; al lado, un cuadro de «La caída de Roma» con la nota «escena histórica realista: se declara»."
        }
      },
      {
        "n": "2.6",
        "titulo": "«Hecho para niños»",
        "cuerpo": "Usted **tiene la obligación legal** de marcar bien la audiencia (ley COPPA de EE. UU.: niños = menores de 13). Si un video es para niños, **pierde**: anuncios personalizados, comentarios, notificaciones, minirreproductor, tarjetas y pantallas finales, guardar en listas, membresías, Super Chat y tienda. Marcarlo mal puede traer **consecuencias en YouTube y legales**. Un canal de niños gana menos por video: hágalo sabiendo eso, y ante la duda consulte a un abogado.\n\nFuentes: [contenido hecho para niños](https://support.google.com/youtube/answer/9528076) y [lo que se desactiva](https://support.google.com/youtube/answer/9632097), consultadas el 2026-11-10.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lista de lo que se pierde, con íconos tachados."
        }
      },
      {
        "n": "2.7",
        "titulo": "Derechos, avisos y metadatos",
        "cuerpo": "**Música:** la Biblioteca de audio de YouTube se puede monetizar (algunas pistas piden crédito); «libre de derechos» de otro lado es su riesgo. **Imágenes:** propias, generadas por usted, de dominio público o CC0, con la fuente anotada. Un **reclamo de Content ID** no es un aviso; **3 avisos por derechos de autor en 90 días** pueden cerrar el canal, y **3 faltas a las normas de la comunidad en 90 días** también. **Títulos y miniaturas engañosos** o pedir «me gusta» a cambio de premios: prohibido.\n\nFuentes: [avisos por derechos de autor](https://support.google.com/youtube/answer/2814000), [faltas a las normas de la comunidad](https://support.google.com/youtube/answer/2802032) y [spam y metadatos engañosos](https://support.google.com/youtube/answer/2801973), consultadas el 2026-11-10.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tabla de tres filas (reclamo de Content ID, aviso por derechos de autor y falta a las normas) con la consecuencia de cada uno."
        }
      },
      {
        "n": "2.8",
        "titulo": "Cómo hacerlo bien",
        "cuerpo": "1. **Revisión humana** de cada guion y de cada video entero.\n2. **Valor propio**: investigación con fuentes, un punto de vista, un estilo.\n3. **Variedad real**: cada video con su tema y su historia, no una plantilla rellena.\n4. **Ritmo sostenible**: el que usted pueda revisar.\n5. IA declarada y audiencia bien marcada.\n\nTodo esto queda en la **lista de revisión** del kit.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 20,
          "seVe": "Chispa en capa sobre un clip de «La caída de Roma» (mármol, mapas); cuenta con los dedos.",
          "dice": "Revisión humana, valor propio, variedad de verdad y un ritmo que pueda sostener. Nosotros elegimos un video al día, no cien. La lista está en el kit."
        }
      }
    ]
  },
  {
    "n": 3,
    "slug": "3-el-guion",
    "titulo": "El guion con Claude: fuentes, estructura y sin copiar",
    "objetivo": "Pasar de un tema a un guion de 8 a 10 min investigado, con una estructura que retiene y sin copiar a nadie.",
    "resultado": "`escaleta.md` y `guion.md` (1.450 a 1.800 palabras) con su lista de fuentes.",
    "laminas": [
      {
        "n": "3.1",
        "titulo": "«24 de agosto del año 410»",
        "cuerpo": "Así empieza nuestro guion de «La caída de Roma»: una fecha, una puerta que se abre desde adentro, y la pregunta que sostiene diez minutos: ¿cómo cae el imperio más poderoso de la historia? **2.050 palabras, 11 partes, unos 11:20 a 1,2x.** Lo escribió Claude; lo aprobó Julian.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "Los primeros 25 segundos de «La caída de Roma», en 16:9, con su narración y su música."
        }
      },
      {
        "n": "3.2",
        "titulo": "Primero, las fuentes",
        "cuerpo": "Pida la investigación **antes** del guion, con el pedido de abajo. Compruebe las cifras (fechas, cantidades) usted o con una segunda búsqueda. Lo que no tiene fuente, no entra.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "vozEnOff": true,
          "seVe": "El pedido; Claude busca en la web y `fuentes.md` se llena con hechos y enlaces; zoom en una cifra y su fuente, y una marca «revisar» en un hecho que no tiene.",
          "dice": "Primero los hechos, cada uno con su fuente. Lo que no tiene fuente, no entra en el guion."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Usá la skill guion-largo. Investigá [tema] y dame los hechos que vamos a contar, cada uno con su fuente (libro, artículo o sitio académico) y una línea de por qué es confiable",
            "etiqueta": "La investigación, antes del guion"
          }
        ]
      },
      {
        "n": "3.3",
        "titulo": "La escaleta",
        "cuerpo": "Una lista de partes con su tiempo y su pregunta: qué tiene que querer saber el espectador al final de cada una. En Roma: el gancho (0:00), «cuando parecía eterna» (0:45), cincuenta años de caos (1:45), dividir para sobrevivir (2:45)… hasta el cierre. Revísela **antes** de pedir el guion: cambiar una línea acá es gratis.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "vozEnOff": true,
          "seVe": "La escaleta de Roma se arma como una columna de tarjetas con tiempos; entre tarjeta y tarjeta, una flecha con la pregunta que lleva a la siguiente.",
          "dice": "Cada parte termina con una pregunta que abre la siguiente. Si la escaleta funciona, el guion funciona."
        }
      },
      {
        "n": "3.4",
        "titulo": "Lo que retiene (sin fórmula)",
        "cuerpo": "Escriba para **una persona**, no para «la audiencia». Cada línea tiene que hacer querer la siguiente. **Lo concreto** gana: «800 años», «menos de un 5 % de plata», «un adolescente que entregó la corona». Abra preguntas y ciérrelas más tarde. Corte todo lo que no suma. Para afinar el criterio: lea [content-principles](https://github.com/aiwithremy/content-principles); no es una plantilla, es una forma de pensar.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 35,
          "vozEnOff": true,
          "seVe": "Líneas del guion de Roma aparecen una debajo de otra; las palabras concretas se encienden («800 años», «Ocho siglos.»); una línea de relleno se tacha. Cierra con la última línea del video: «Roma no murió en el 476. Murió la mitad.»",
          "dice": "Fíjese en lo concreto: fechas, cifras, una imagen. Y en el final, que responde la pregunta del principio."
        }
      },
      {
        "n": "3.5",
        "titulo": "Aprender de otros sin copiarlos",
        "cuerpo": "Mire lo que funciona en su nicho para entender **por qué** retiene (el ritmo, cómo abre, cuándo muestra el mapa), **nunca** para copiar su texto, su estructura entera o su estilo. La skill `leer-referencia` del kit le ayuda a anotar eso. En Vion, Ultron lo hace solo: el tablero de virales y el lector de referencias, que con Sonnet saca la gramática de un video (USD 0,2 a 0,6 por lectura) y borra el original a los 30 días.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Ultron en modo demo: el tablero de virales con sus notas y una lectura de referencia abierta (estructura, ritmo, por qué retiene), con los nombres de terceros tapados. Sin voz: los textos aparecen en pantalla."
        }
      },
      {
        "n": "3.6",
        "titulo": "Escribir a su ritmo",
        "cuerpo": "Las palabras deciden la duración. A 1,2x, nuestro narrador dice **unas 180 palabras por minuto**: 2.050 palabras dieron 11:20. Para **8 a 10 min**: de **1.450 a 1.800 palabras**. Pida el guion por partes, con la escaleta al lado, y marque en **negrita** lo que llevará rótulo en pantalla.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una regla que pasa de palabras a minutos, con el punto de «La caída de Roma» marcado (2.050 palabras, 11:20) y la franja de 1.450 a 1.800 palabras para 8 a 10 min."
        }
      },
      {
        "n": "3.7",
        "titulo": "La revisión del guion",
        "cuerpo": "Antes de la voz, léalo entero en voz alta. Revise: **cada dato con su fuente**; nada que afirme algo de una persona real sin respaldo; ninguna promesa del título que el video no cumpla; que se entienda sin imágenes. Corrija en el texto: después es caro.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La primera parte de la lista de revisión del kit, con casillas: cada dato con su fuente y las cifras comprobadas dos veces; nada sobre personas reales sin respaldo; el título que el video cumple; que no se parezca a sus últimos 5 videos."
        }
      },
      {
        "n": "3.8",
        "titulo": "Un guion que usted firmaría",
        "cuerpo": "Claude escribe rápido y bien, pero el que firma es usted.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa en capa al lado de `guion.md` abierto; pasa la página con la mano.",
          "dice": "Claude escribe rápido y escribe bien. Pero el guion lo firma usted. Léalo en voz alta antes de darle voz."
        }
      }
    ]
  },
  {
    "n": 4,
    "slug": "4-la-voz",
    "titulo": "La voz: ElevenLabs o local, a 1,2x",
    "objetivo": "Narrar el guion con una voz que se pueda publicar, al ritmo justo y con subtítulos sincronizados.",
    "resultado": "`salida/voz/` con las partes en MP3 y `voz.srt`.",
    "laminas": [
      {
        "n": "4.1",
        "titulo": "¿Cuál se escucha mejor?",
        "cuerpo": "La misma frase, dos velocidades. Julian escuchó la primera y dijo: «se escucha como para tontos». Desde entonces, **todo sale a 1,2x**.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Una onda de audio: la misma frase de «La caída de Roma» a 1,0 y después a 1,2, con un contador de cuánto dura cada una. Se oye la narración de prueba dos veces."
        }
      },
      {
        "n": "4.2",
        "titulo": "Lo que cuesta la voz",
        "cuerpo": "**ElevenLabs:** un carácter = un crédito (Multilingual v2). Un video de 10 min son unos **11.500 caracteres**: Roma gastó **12.752 créditos** con las repeticiones. Starter (USD 6, 30.000) da para **2 videos al mes**; Creator (USD 22, 121.000) para unos **9**; uno por día pide **Pro (USD 99, 600.000)**. El plan gratis **no** trae licencia comercial: sirve para probar, no para publicar.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tabla con los planes de ElevenLabs (Free, Starter, Creator, Pro), sus créditos y una barra con cuántos videos largos al mes da cada uno."
        }
      },
      {
        "n": "4.3",
        "titulo": "Pedir la voz bien",
        "cuerpo": "Con el comando de abajo (`<id>` es el identificador de la voz que eligió en ElevenLabs), `voz.py` parte el guion en trozos de unos 500 caracteres **por frases**; manda a cada uno el texto de antes y el de después (`previous_text` y `next_text`) para que suene seguido; pide los **tiempos por letra** y arma `voz.srt`. Si se corta a la mitad, lo vuelve a correr y sigue desde la parte que falta.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "vozEnOff": true,
          "seVe": "La terminal con las partes saliendo una a una; la carpeta `salida/voz/`; `voz.srt` abierto; un reproductor con la voz y los subtítulos en su tiempo.",
          "dice": "Por partes, con el texto de antes y de después para que suene seguido, y con los tiempos de cada letra para los subtítulos."
        },
        "bloques": [
          {
            "tipo": "comando",
            "texto": "python voz.py guion.md --voz <id> --velocidad 1.2",
            "etiqueta": "Narrar el guion con ElevenLabs"
          }
        ]
      },
      {
        "n": "4.4",
        "titulo": "Lo que nos pasó: el 401",
        "cuerpo": "Con Roma, desde la parte 99 cada pedido devolvió **401**. La clave tenía su **propio tope de créditos** y se había acabado, aunque la cuenta tenía saldo. Dos partes se quedaron sin voz hasta que se subió el tope. Póngale un tope a su clave (protege su bolsillo) pero sepa cuál es, y que su script avise qué parte falta.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tarjeta con la línea del error 401 y, abajo, «créditos de la cuenta: 4.955 de 38.535 usados»: la cuenta tenía saldo, la clave no."
        }
      },
      {
        "n": "4.5",
        "titulo": "La voz local, gratis",
        "cuerpo": "**Kokoro-82M** (Apache-2.0) corre en su computadora sin internet: 8 idiomas, entre ellos el español. Suena menos natural que ElevenLabs; nosotros la usamos para **pruebas** y ElevenLabs para lo que se publica. El comando está abajo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "La misma frase narrada con Kokoro y con ElevenLabs, cada una con su onda, y la terminal sin conexión. Se oyen las dos muestras."
        },
        "bloques": [
          {
            "tipo": "comando",
            "texto": "python voz.py guion.md --local --velocidad 1.2",
            "etiqueta": "Narrar con la voz local"
          }
        ]
      },
      {
        "n": "4.6",
        "titulo": "Otro idioma y voces clonadas",
        "cuerpo": "**Canal en inglés:** Claude traduce el guion (y lo revisa una persona que hable inglés), y se narra con una voz en inglés; las imágenes son las mismas. **Clonar una voz:** solo la suya, o la de alguien que firmó su permiso. Nunca la de un famoso ni la de otro creador.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Dos columnas, español e inglés, con las mismas imágenes; un candado sobre «clonar»."
        }
      },
      {
        "n": "4.7",
        "titulo": "Una voz que no aburre",
        "cuerpo": "La voz queda en partes, a 1,2x, con sus subtítulos. Lo que sigue: las imágenes.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 12,
          "seVe": "Chispa en capa sobre la onda de la narración; chasquea los dedos y la onda se acelera.",
          "dice": "A uno coma dos, nadie se aburre. Y con los tiempos de cada letra, los subtítulos salen solos."
        }
      }
    ]
  },
  {
    "n": 5,
    "slug": "5-lo-visual",
    "titulo": "Lo visual por estilos: motion, 3D e IA en su PC",
    "objetivo": "Decidir el estilo del video y producir sus imágenes con lo que su computadora puede.",
    "resultado": "`tomas.csv` (el plan de tomas) y la carpeta `imagenes/` con fotos, mapas, rótulos y, si puede, algunas tomas animadas.",
    "laminas": [
      {
        "n": "5.1",
        "titulo": "Mármol que cobra vida",
        "cuerpo": "Este es el estilo de nuestro canal de historia: romanos de **mármol blanco**, pueblos de fuera en **bronce**, mapas **tallados en piedra**. Lo eligió el sistema para ese tema, con reglas escritas.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "Un montaje de «La caída de Roma»: un busto de mármol, un mapa tallado, la caballería animada con IA y Estilicón que se hace pedazos. Con la música del video, sin voz."
        }
      },
      {
        "n": "5.2",
        "titulo": "Un estilo por tema",
        "cuerpo": "Escriba sus estilos como **reglas**, no como «que se vea lindo»: paleta, materiales, cómo se reconoce cada personaje al instante (en Roma: coraza, capa, estandarte, rótulo «EMPERADOR ROMANO»), qué nunca aparece. Ejemplos del kit: **A, ilustrado plano recortable** (ciencia, niños); **C, mármol vivo** (historia); **motion** (explicar un proceso); **3D** (lugares y máquinas). El estilo va en `canal.md`.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Cuatro tarjetas de estilo con una imagen de muestra cada una: ilustrado plano recortable, mármol vivo, motion y 3D."
        }
      },
      {
        "n": "5.3",
        "titulo": "No todo tiene que moverse",
        "cuerpo": "En Roma, de casi 10 minutos: **unas 120 fotos** hechas con IA, mostradas **con movimiento de cámara**; mapas tallados; rótulos; y solo **5 tomas animadas** con IA, donde había movimiento de verdad. Una foto no parpadea ni cambia de cara. Animar todo es caro y es donde aparecen los errores.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "vozEnOff": true,
          "seVe": "Una línea de tiempo del video coloreada por tipo de toma (fotos, mapas, rótulos, 5 tomas animadas); al pasar el cursor, cada tramo muestra su cuadro.",
          "dice": "Unas ciento veinte fotos con movimiento y solo cinco tomas animadas. Lo que no necesita moverse, no se anima."
        }
      },
      {
        "n": "5.4",
        "titulo": "La receta en la PC",
        "cuerpo": "1. **Blender** da la cámara y las formas (un maniquí, un mapa).\n2. **FLUX.2 klein 4B** pasa ese cuadro a una **foto guía** (unos 20 s).\n3. **Wan 2.2 Fun Control 5B** hace el video siguiendo los bordes de Blender y el aspecto de la foto: una toma de unos 100 cuadros, **de 5 a 6,5 min**. Todo en nuestra PC (RTX 4070 Ti SUPER, 16 GB), gratis, **hasta 73 °C**. La instalación está en el curso de videos 3D con Blender y Claude.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "vozEnOff": true,
          "seVe": "Diagrama: cuadro gris de Blender → foto guía de mármol → toma animada; con los tiempos medidos al pie.",
          "dice": "Blender pone la cámara, una inteligencia artificial hace la foto guía y otra la anima. En nuestra PC, unos seis minutos por toma."
        }
      },
      {
        "n": "5.5",
        "titulo": "Las reglas de las tomas con IA",
        "cuerpo": "1. **Una toma, una generación:** como mucho 5 s (121 cuadros). Si la IA la parte en tramos, el personaje cambia en cada unión.\n2. Los cambios van en **cortes de cámara**.\n3. Anime Blender **al ritmo final** (1,2x), no acelere después.\n4. Personajes **con manos modeladas**.\n5. **La IA no escribe texto**: rótulos y nombres salen de Blender o del montaje.\n6. **Revise cada toma**; si falla, rehaga solo esa con otra semilla.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "vozEnOff": true,
          "seVe": "El short de Constantino: dos cuadros seguidos donde la estatua cambia (mano, diadema, cara), marcados con un círculo; el brazo sin mano; el pedestal con «CONSIATINVS» tachado y el nombre correcto encima.",
          "dice": "Así aprendimos estas reglas: la estatua cambiaba de cara en cada unión, no tenía mano derecha y la inteligencia artificial escribió mal su nombre."
        }
      },
      {
        "n": "5.6",
        "titulo": "Si su PC no puede",
        "cuerpo": "**Fotos con movimiento** (la mayor parte de Roma) piden poca GPU: la foto guía también se puede hacer en un servicio. **Video en la nube:** con lo que pagamos en fal.ai (2026-11-04), Kling O3 Edit cuesta USD 0,126 por segundo: **10 minutos animados ≈ USD 75**, cinco tomas de 5 s ≈ USD 3. **O sin IA de video:** motion y 3D (los cursos de motion design y de videos 3D con Blender).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tarjeta de costos fechada el 2026-11-04: USD 0,126 por segundo de video en la nube, unos USD 75 por 10 minutos animados y unos USD 3 por cinco tomas de 5 s."
        }
      },
      {
        "n": "5.7",
        "titulo": "Mapas y rótulos que no fallan",
        "cuerpo": "Los mapas salen de **datos reales** (las costas de Natural Earth, de dominio público) dibujados en Blender o en motion; los nombres, con una fuente con licencia libre (nosotros: Marcellus SC, OFL). Ni mapas ni letras inventados por la IA: se equivoca en los dos.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Un mapa de «La caída de Roma» con sus capas separadas: la costa, el relieve y los nombres."
        }
      },
      {
        "n": "5.8",
        "titulo": "El plan de tomas",
        "cuerpo": "Pida el plan de tomas con el pedido de abajo. Revíselo: **menos de 10 animadas** en un video de 10 min. Después genere las imágenes por lote, de noche si usa su PC.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "El pedido; `tomas.csv` abierto en una planilla y filtrado por tipo «animada» (7 filas); la carpeta `imagenes/` llenándose, acelerado. Sin voz: los textos aparecen en pantalla."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Con guion.md y el estilo de canal.md, armá tomas.csv: una fila por toma con desde, hasta, qué se ve, tipo (foto con movimiento, mapa, rótulo, animada) y el pedido de imagen",
            "etiqueta": "El plan de tomas"
          }
        ]
      },
      {
        "n": "5.9",
        "titulo": "Lo que se ve es su firma",
        "cuerpo": "Su estilo, escrito como reglas en `canal.md`, es lo que hace reconocible su canal. Respételo en cada video.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa en capa delante de un mapa tallado; lo recorre con el dedo.",
          "dice": "El estilo es lo que hace que su canal no se parezca a ningún otro. Escríbalo como reglas y respételas en cada video."
        }
      }
    ]
  },
  {
    "n": 6,
    "slug": "6-montaje-y-miniatura",
    "titulo": "Montaje, miniatura, título y descripción",
    "objetivo": "Unir voz, imágenes, música y subtítulos en un video de 8 a 10 min, y prepararle la miniatura y el texto.",
    "resultado": "`salida/video.mp4` a −14 LUFS, `miniatura.png` y `meta.json` listos para subir.",
    "laminas": [
      {
        "n": "6.1",
        "titulo": "Todo junto",
        "cuerpo": "Tiene la voz, las imágenes y el plan de tomas. Falta lo que más se ve: el montaje, la miniatura y el título.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa con tres piezas flotando (una onda, una foto, un mapa) que se juntan en una pantalla.",
          "dice": "Ya tiene la voz y las imágenes. Ahora las juntamos, y le ponemos la cara con la que su video va a competir: la miniatura."
        }
      },
      {
        "n": "6.2",
        "titulo": "Montar con Claude y ffmpeg",
        "cuerpo": "`./montar.sh tomas.csv salida/video.mp4` (en Windows, `montar.ps1`). Por dentro: cada foto con un **movimiento de cámara** suave (`zoompan`), las tomas animadas tal cual, los rótulos encima, la voz y los subtítulos de `voz.srt`. Lo esencial del script está abajo. Si algo no le gusta, dígaselo a Claude en palabras: «la toma 14 más lenta», «el rótulo de la 20 más grande».",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "vozEnOff": true,
          "seVe": "`tomas.csv`, el comando y ffmpeg trabajando hasta el video armado; Claude cambia la toma 14 y se vuelve a armar solo ese tramo.",
          "dice": "Un comando arma el video entero. Y para cambiar algo, se lo dice a Claude en palabras."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Mac y Linux",
            "lenguaje": "bash",
            "texto": "./montar.sh tomas.csv salida/video.mp4"
          },
          {
            "tipo": "codigo",
            "etiqueta": "Lo esencial de montar.sh",
            "lenguaje": "bash",
            "texto": "# Una foto con movimiento de cámara (5 s a 25 cps, acercándose despacio):\nffmpeg -loop 1 -i imagenes/t014.png -vf \"scale=3840:-1,zoompan=z='min(zoom+0.0008,1.15)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=25\" \\\n  -t 5 -c:v libx264 -pix_fmt yuv420p salida/tramos/t014.mp4\n# Unir los tramos en el orden de tomas.csv:\nffmpeg -f concat -safe 0 -i salida/lista.txt -c copy salida/imagen.mp4\n# Voz + música 17 dB abajo + subtítulos, y el total a -14 LUFS:\nffmpeg -i salida/imagen.mp4 -i salida/voz/voz.mp3 -i musica.mp3 \\\n  -filter_complex \"[2:a]volume=-17dB[m];[1:a][m]amix=inputs=2:duration=first,loudnorm=I=-14:TP=-1.5:LRA=11[a]\" \\\n  -map 0:v -map \"[a]\" -vf \"subtitles=salida/voz/voz.srt\" -c:v libx264 -c:a aac -b:a 192k salida/video.mp4\n# Revisión: ningún tramo de 0 bytes, y sin negros largos:\nfind salida/tramos -size 0 -print | grep -q . && echo \"Hay tramos vacíos\"\nffmpeg -i salida/video.mp4 -vf blackdetect=d=0.5 -an -f null - 2>&1 | grep black_start"
          }
        ]
      },
      {
        "n": "6.3",
        "titulo": "El sonido",
        "cuerpo": "La voz adelante; la música **unos 17 dB por debajo**; el total a **−14 LUFS** (el nivel que usamos para YouTube), con el filtro de abajo. Antes de seguir, el kit revisa que **no haya negros, cuadros congelados ni archivos de 0 bytes**.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La pista de voz y la de música con sus niveles: la música unos 17 dB por debajo y el total a −14 LUFS, con el filtro de ffmpeg escrito abajo."
        },
        "bloques": [
          {
            "tipo": "codigo",
            "etiqueta": "El filtro de volumen de ffmpeg",
            "lenguaje": "bash",
            "texto": "-af loudnorm=I=-14:TP=-1.5:LRA=11"
          }
        ]
      },
      {
        "n": "6.4",
        "titulo": "La música",
        "cuerpo": "**Biblioteca de audio de YouTube:** se puede monetizar; algunas pistas piden crédito en la descripción. **CC0** (dominio público): revise la licencia en la fuente. **Generada por usted:** anote con qué y su licencia. Nunca una canción comercial «porque es poquito».",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Tres tarjetas con el riesgo de cada fuente de música: la Biblioteca de audio de YouTube, CC0 y la música generada por usted."
        }
      },
      {
        "n": "6.5",
        "titulo": "La miniatura",
        "cuerpo": "**1280×720** (mínimo 640 de ancho), canal verificado. **Una idea**: un personaje que se lee al instante y como mucho 3 o 4 palabras. Pida a Claude 3 ideas; la imagen base sale como las del video; **el texto lo pone usted** (o Blender), nunca la IA. Tiene que **cumplir lo que promete**: una miniatura engañosa es una falta.\n\nFuente: [miniaturas personalizadas](https://support.google.com/youtube/answer/72431), consultada el 2026-11-10.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "vozEnOff": true,
          "seVe": "Tres bocetos de miniatura de «La caída de Roma» que se arman (un busto agrietado con «CAYÓ», un mapa partido, Odoacro con la corona); se elige uno y se ve chico, como en el celular.",
          "dice": "Una idea por miniatura, que se entienda en el celular. Y que el video cumpla lo que la miniatura promete."
        }
      },
      {
        "n": "6.6",
        "titulo": "Título y descripción",
        "cuerpo": "Pida los títulos y la descripción con el pedido de abajo, y elija usted. El kit lo deja en `meta.json` (título, descripción, etiquetas, idioma, audiencia, IA).",
        "apoyo": {
          "tipo": "captura",
          "seVe": "`meta.json` con sus campos señalados: título, descripción con capítulos y fuentes, etiquetas, idioma, `para_ninos`, `ia_realista` y la fecha de `publicar`."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Con guion.md, dame 5 títulos honestos de menos de 70 caracteres y la descripción: dos líneas que enganchen, capítulos con sus tiempos, las fuentes, los créditos de música y si hay escenas hechas con IA",
            "etiqueta": "Títulos y descripción"
          },
          {
            "tipo": "archivo",
            "etiqueta": "plantillas/meta.json (ejemplo)",
            "lenguaje": "json",
            "texto": "{\n  \"titulo\": \"Cómo cayó Roma (y por qué la mitad siguió viva mil años)\",\n  \"descripcion\": \"…\\n\\nCapítulos\\n0:00 Roma arde\\n0:45 Cuando parecía eterna\\n…\\n\\nFuentes\\n- …\\n\\nMúsica: … (licencia)\\nEscenas históricas recreadas con IA.\",\n  \"etiquetas\": [\"historia\", \"imperio romano\"],\n  \"categoria\": \"27\",\n  \"idioma\": \"es\",\n  \"para_ninos\": false,\n  \"ia_realista\": true,\n  \"publicar\": \"2026-11-12T18:00:00-06:00\",\n  \"miniatura\": \"salida/miniatura.png\",\n  \"subtitulos\": \"salida/voz/voz.srt\"\n}"
          }
        ]
      },
      {
        "n": "6.7",
        "titulo": "Antes de subir",
        "cuerpo": "La **lista de revisión** del kit: ¿lo vio entero? ¿cada dato tiene fuente? ¿la miniatura cumple? ¿declaró la IA y la audiencia? ¿la música tiene licencia? ¿se parece demasiado a su video anterior? Si algo dice «no», no se sube.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La segunda parte de la lista de revisión del kit, con casillas: lo vio entero con sonido; la música con licencia y su crédito; la miniatura cumple; `para_ninos` e `ia_realista` bien puestos; sube privado, con fecha."
        }
      }
    ]
  },
  {
    "n": 7,
    "slug": "7-los-shorts",
    "titulo": "Los shorts que salen del largo",
    "objetivo": "Sacar de cada largo de 2 a 4 shorts verticales que se entiendan solos.",
    "resultado": "Dos shorts de 30 a 60 s, rehechos en vertical, con subtítulos grandes.",
    "laminas": [
      {
        "n": "7.1",
        "titulo": "Constantino, en vertical",
        "cuerpo": "Nuestro primer short: «Este hombre gobernó todo el imperio romano… y sin querer, empezó a partirlo». Vertical, 38 s en español y 33 s en inglés, a 1,2x.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "El short de Constantino en español dentro de la silueta de un celular, sobre un fondo crema, con su narración."
        }
      },
      {
        "n": "7.2",
        "titulo": "Qué es un short hoy",
        "cuerpo": "Un video **vertical o cuadrado de hasta 3 minutos** se clasifica como short; uno horizontal es un video normal aunque dure 30 s. El largo cuenta la historia entera; el short es **una idea completa**, con su propio gancho, que lleva al largo.\n\nFuente: [qué es un short](https://support.google.com/youtube/answer/15424877), consultada el 2026-11-10.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Tres formatos lado a lado (9:16, 1:1 y 16:9) con su etiqueta: short, short y video normal."
        }
      },
      {
        "n": "7.3",
        "titulo": "Elegir el momento",
        "cuerpo": "Pida los momentos con el pedido de abajo. Es el criterio de nuestro clipping, que no deja pasar los de menos de 55 sobre 100.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "vozEnOff": true,
          "seVe": "El pedido; la tabla de 4 momentos con sus puntajes; se eligen los dos mejores.",
          "dice": "Un short es una idea que se entiende sola. Que Claude le proponga varias y le diga por qué."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Leé guion.md y proponé 4 momentos para shorts: cada uno se tiene que entender solo, abrir con algo que frene el dedo y cerrar con un remate. Puntuá cada uno de 0 a 10 en gancho, se entiende solo, emoción, remate y cierre",
            "etiqueta": "Los momentos para shorts"
          }
        ]
      },
      {
        "n": "7.4",
        "titulo": "Rehacer, no recortar",
        "cuerpo": "Recortar el centro de un video horizontal deja al personaje cortado y los rótulos afuera. Rehágalo: la **cámara vertical** en Blender (o la foto encuadrada de nuevo), el personaje **que se lea al instante** y subtítulos grandes. El comando de abajo arma la versión 1080×1920 con las tomas de ese tramo. Si falta la versión vertical de una imagen, `cortos.py` avisa en vez de recortar.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "vozEnOff": true,
          "seVe": "Lado a lado: el recorte del 16:9 (Constantino cortado, rótulo afuera) contra la versión rehecha en vertical.",
          "dice": "Si recorta, pierde la mitad. Si lo rehace en vertical, el personaje se lee en un segundo."
        },
        "bloques": [
          {
            "tipo": "comando",
            "texto": "python cortos.py tomas.csv --desde 3:10 --hasta 3:55 --vertical",
            "etiqueta": "Un short vertical desde un tramo del largo"
          }
        ]
      },
      {
        "n": "7.5",
        "titulo": "Lo que todavía no está bien",
        "cuerpo": "El short de Constantino tiene arreglos pendientes y se los mostramos: la estatua **cambiaba en cada unión** de Wan (la toma de 177 cuadros se hizo en dos tramos), **le faltaba la mano derecha** y la música es provisional. De ahí salieron las reglas de la lección 5. Un short también se revisa entero.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Dos cuadros con las marcas de los defectos y la regla que salió de cada uno."
        }
      },
      {
        "n": "7.6",
        "titulo": "Que cada short lleve al largo",
        "cuerpo": "Nombre el video largo en el short y en su descripción: el short es la puerta, el largo es la casa.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa en capa, vertical a la izquierda del cuadro, señala hacia el video largo que aparece a la derecha.",
          "dice": "Cada short es una puerta. Que el que lo vea sepa que hay un video largo esperándolo."
        }
      }
    ]
  },
  {
    "n": 8,
    "slug": "8-subir-y-medir",
    "titulo": "Subir, programar y medir",
    "objetivo": "Subir el largo y los shorts por la API oficial, programados, sin perder el control, y medir lo que pasa.",
    "resultado": "Los tres videos programados y el informe de la semana en la carpeta `informes/` (un CSV con la fecha en el nombre).",
    "laminas": [
      {
        "n": "8.1",
        "titulo": "Automatizar no es soltar el volante",
        "cuerpo": "Una computadora puede subir, programar y medir. Lo que no debe hacer sola es **decidir que un video está listo**.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 18,
          "seVe": "Chispa al volante de un auto de juguete que avanza solo; ella sigue con las manos en el volante.",
          "dice": "Automatizar no es soltar el volante. Que la computadora suba y mida. Pero que un video está listo, eso lo decide usted."
        }
      },
      {
        "n": "8.2",
        "titulo": "Qué se automatiza y qué no",
        "cuerpo": "**Se automatiza:** subir como privado con fecha, la miniatura, la descripción, los subtítulos, el informe de la semana. **Lo revisa usted:** el guion antes de la voz, el video entero, la declaración de IA y de audiencia, los comentarios. Así trabajamos en Vion: todo lo que se publica pasa por la aprobación de Julian.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "vozEnOff": true,
          "seVe": "Una cinta transportadora con los pasos; dos de ellos se detienen en un puesto con una persona y un sello «aprobado»",
          "dice": "Lo repetitivo, a la máquina. Lo que puede dañar su canal, a una persona."
        }
      },
      {
        "n": "8.3",
        "titulo": "La cuota",
        "cuerpo": "La API es gratis, pero tiene **cuota diaria**. **Subir un video** cuesta 1 unidad de su propia bolsa: **100 subidas por día**. Del resto hay **10.000 unidades por día**: cambiar un video 50, **miniatura 50**, **subtítulos 400**, leer datos 1. La cuota se reinicia a la **medianoche del Pacífico**. Un largo y tres shorts por día entran de sobra.\n\nFuente: [costos de cuota de la YouTube Data API](https://developers.google.com/youtube/v3/determine_quota_cost), consultada el 2026-11-10.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tabla con lo que cuesta cada operación en cuota y la cuenta de un día típico: un largo y tres shorts, con sus miniaturas y subtítulos."
        }
      },
      {
        "n": "8.4",
        "titulo": "¿Hay que verificar la app?",
        "cuerpo": "**Hasta hace poco**, lo subido por una app no verificada quedaba **privado** para siempre. **Desde el 2 de noviembre de 2026 ya no**: Google sacó esa restricción. Lo que sigue: en modo «Prueba» el permiso **vence a los 7 días**; en «En producción» sin verificar, Google muestra la pantalla de app no verificada y la limita a **100 usuarios nuevos**. Para **su propio canal** eso alcanza; si va a manejar canales de clientes, verifique la app.\n\nFuentes: [historial de cambios de la YouTube Data API](https://developers.google.com/youtube/v3/revision_history) y [verificación de apps de Google](https://support.google.com/cloud/answer/7454865), consultadas el 2026-11-10.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una línea de tiempo: 2020, «solo privado»; 2026-11-02, «se puede publicar»; abajo, «Prueba: 7 días» y «Producción: pantalla de aviso»."
        }
      },
      {
        "n": "8.5",
        "titulo": "Subir programado",
        "cuerpo": "Con el comando de abajo, `subir.py` sube el video **privado** con `publicar` como fecha (se publica solo a esa hora), la **audiencia** (`para_ninos`), la **IA declarada** (`ia_realista`), la categoría y el idioma; después la miniatura y los subtítulos. Mientras tanto, usted lo ve en Studio. Los shorts, igual, con su propio `meta.json`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "vozEnOff": true,
          "seVe": "`meta.json` con los campos resaltados; la subida con su porcentaje; Studio con «Programado» y la fecha; la casilla de IA marcada.",
          "dice": "Sube privado, con fecha. Hasta esa hora, usted lo puede mirar, cambiar o frenar."
        },
        "bloques": [
          {
            "tipo": "comando",
            "texto": "python subir.py salida/video.mp4 meta.json",
            "etiqueta": "Subir el video largo"
          }
        ]
      },
      {
        "n": "8.6",
        "titulo": "La semana en un comando",
        "cuerpo": "El kit trae `semana.md`: Claude lee `canal.md`, propone los temas de la semana y deja cada video en su carpeta. **Usted aprueba cada guion**; recién entonces Claude corre voz, imágenes, montaje y subida. Si quiere que corra de noche, programe solo la parte de la máquina (Programador de tareas en Windows, `cron` en Mac y Linux), nunca la aprobación.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "`semana.md` y la lista de 3 temas que propone Claude; unas manos escriben «aprobado» en uno y Claude sigue con ese, mientras los otros esperan. Sin voz: los textos aparecen en pantalla."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "semana.md (lo que trae el kit)",
            "texto": "Leé canal.md y los últimos 5 videos de videos/. Proponé 3 temas que no se parezcan a esos, con su pregunta y sus fuentes probables. No escribas guiones hasta que apruebe cada tema."
          }
        ]
      },
      {
        "n": "8.7",
        "titulo": "Medir con YouTube Analytics",
        "cuerpo": "El primer comando de abajo deja un CSV con, por video: **vistas**, **minutos vistos**, **duración media**, **porcentaje medio visto** y **suscriptores ganados**; y el segundo (`<id>` es el del video) da la curva de retención (cuánta gente sigue en cada punto del video). Las **impresiones y el CTR de la miniatura** no están en la API: se miran en YouTube Studio → Estadísticas.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "vozEnOff": true,
          "seVe": "La terminal; el CSV abierto en una planilla; la curva de retención dibujada, con la caída del segundo 30 señalada. Son datos de un canal de prueba.",
          "dice": "Cuánto se vio, hasta dónde y quién se suscribió. Y la curva que le dice en qué segundo se fueron."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "El informe de los últimos 28 días",
            "texto": "python medir.py --dias 28"
          },
          {
            "tipo": "comando",
            "etiqueta": "La curva de retención de un video",
            "texto": "python medir.py --retencion <id>"
          }
        ]
      },
      {
        "n": "8.8",
        "titulo": "Qué hacer con los números",
        "cuerpo": "Espere a tener **al menos 5 videos** antes de sacar conclusiones. Mire **dónde se va la gente** en los primeros 30 s y cambie **una cosa por vez** (el gancho, la miniatura, el ritmo). Nuestro canal **todavía no publicó**: cuando tengamos datos reales, esta lámina los va a mostrar.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una curva de retención de ejemplo (marcada «ejemplo») con tres lecturas posibles."
        }
      },
      {
        "n": "8.9",
        "titulo": "Su canal, en marcha",
        "cuerpo": "Si quiere mostrarnos su primer video, la comunidad de Vion está abierta: el enlace está abajo.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 20,
          "seVe": "Chispa en capa sobre Studio con el largo y dos shorts programados; aplaude.",
          "dice": "Un video largo, dos cortos, programados y medidos. Y usted, revisando lo que importa. Si quiere mostrarnos el suyo, la comunidad de Vion está abierta."
        }
      }
    ]
  }
];
