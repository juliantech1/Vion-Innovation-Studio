// B9 · Su canal de YouTube con IA: la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción del final, desde el
// storyboard (docs/planes/cursos/B9-canal-youtube.md de la aldea, 2026-11-10). Las lecciones están en lecciones.ts.
import type { CursoTexto } from '../../tipos';

export const curso: CursoTexto = {
  "es": {
    "corto": "Canal YouTube",
    "titulo": "Su canal de YouTube con IA: crear y automatizar",
    "subtitulo": "YouTube automation con Claude Code",
    "tituloSeo": "Curso gratis: su canal de YouTube con IA | Vion",
    "descripcion": "Curso gratis de Vion: su canal de YouTube con IA, del guion con fuentes a la subida programada, sin perder la monetización. En producción.",
    "paraQuien": "Quien quiere un canal educativo (historia, ciencia, oficios, su negocio) hecho con IA sin grabarse ni pasar el día editando, y sin poner en riesgo la monetización.",
    "seLleva": "Su primer video largo (8 a 10 min) y dos shorts, programados por la API oficial de YouTube; el criterio para no perder la monetización; y el kit (CLAUDE.md, las skills canal y guion-largo, plantillas, voz.py, montar.sh, subir.py, medir.py y la lista de revisión) para hacer los siguientes.",
    "herramientas": "Claude Code (plan pago de Anthropic, desde USD 20 al mes), ElevenLabs para la voz (Starter, USD 6 al mes, o una voz local gratis), la API de YouTube, Python y ffmpeg (gratis); la IA de video local es opcional y gratis.",
    "ficha": {
      "requisitos": "Una cuenta de Google con su canal, Claude Code y una PC cualquiera para el guion, la voz, el montaje y la subida. Para la IA de video local, una GPU de 16 GB; con menos, fotos con movimiento, motion o un servicio en la nube.",
      "duracion": "9 lecciones (71 láminas con 42 videos cortos), unos 60 min de lectura, más el trabajo del primer video (una o dos tardes).",
      "costo": "Claude Code pide un plan pago (desde USD 20 al mes) y la voz para publicar, ElevenLabs Starter (USD 6 al mes, unos 2 videos largos); un video por día pide Pro (USD 99). La voz local, la API de YouTube, ffmpeg y la IA local son gratis."
    },
    "costos": [
      {
        "pieza": "Claude Code",
        "costo": "**Pago.** Pro USD 20 al mes (USD 17 pagando el año), Max USD 100, Ultra USD 200. El plan gratis no lo incluye",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "ElevenLabs",
        "costo": "Free USD 0 (10.000 créditos, **sin licencia comercial**); **Starter USD 6** (USD 1 el primer mes; 30.000 créditos, licencia comercial); Creator USD 22 (121.000); Pro USD 99 (600.000). En Multilingual v2, **1 carácter = 1 crédito**",
        "fuente": "[elevenlabs.io/pricing](https://elevenlabs.io/pricing)"
      },
      {
        "pieza": "Lo que gasta un video largo",
        "costo": "«La caída de Roma»: **11.548 caracteres, 12.752 créditos** (con repeticiones), 26 partes, 11:31 de voz a 1,2x. Un Starter da para 2 por mes; un video por día (unos 380.000 créditos por idioma) pide Pro",
        "fuente": "Medido en nuestro estudio (2026-11-07 a 2026-11-09)"
      },
      {
        "pieza": "Voz local (alternativa)",
        "costo": "Gratis: Kokoro-82M (Apache-2.0)",
        "fuente": "[huggingface.co/hexgrad/Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)"
      },
      {
        "pieza": "YouTube Data API v3 y YouTube Analytics API",
        "costo": "Sin costo: se paga con **cuota** (lección 8)",
        "fuente": "[developers.google.com/youtube/v3/determine_quota_cost](https://developers.google.com/youtube/v3/determine_quota_cost)"
      },
      {
        "pieza": "ffmpeg, Python, Blender",
        "costo": "Gratis",
        "fuente": "[ffmpeg.org](https://ffmpeg.org), [python.org](https://www.python.org), [blender.org](https://www.blender.org)"
      },
      {
        "pieza": "IA local (opcional): ComfyUI, Wan 2.2 Fun Control 5B, FLUX.2 [klein] 4B",
        "costo": "Gratis (GPL-3 / Apache-2.0 / Apache-2.0; la klein **9B** es no comercial). Se paga la luz",
        "fuente": "Instalación y licencias en el curso de videos 3D con Blender y Claude"
      },
      {
        "pieza": "IA de video en la nube (alternativa)",
        "costo": "Lo que pagamos en fal.ai (2026-11-04): Kling O3 Edit, USD 0,126 por segundo. Diez minutos animados enteros, unos USD 75",
        "fuente": "Nuestra cuenta de fal.ai"
      },
      {
        "pieza": "Ingresos de YouTube",
        "costo": "**Cero** hasta entrar al Programa de socios: 1.000 suscriptores y 4.000 horas de reproducción pública de videos largos en 12 meses (o 10 millones de vistas de shorts en 90 días)",
        "fuente": "[support.google.com/youtube/answer/72857](https://support.google.com/youtube/answer/72857)"
      }
    ],
    "costosFecha": "2026-11-10",
    "puesta": {
      "leccion": 0,
      "texto": "Todo se comprueba al final de la lección 0: un video de prueba de 10 s subido **como privado** desde la terminal.\n\n| Qué | Windows | Mac | Linux | Cómo se comprueba |\n| **Cuenta de Google y canal** (mejor con una cuenta de marca, no el correo personal) | youtube.com → Crear un canal | igual | igual | YouTube Studio abre el canal |\n| **Verificar el canal** por teléfono (para subir miniaturas propias) | youtube.com/verify | igual | igual | En Studio, «Funciones con verificación» activas |\n| **Claude** Pro o superior y **Claude Code** | Git para Windows y, en PowerShell, `irm https://claude.ai/install.ps1 \\| iex` | `curl -fsSL https://claude.ai/install.sh \\| bash` | igual que Mac | En una terminal nueva, `claude --version` y `claude doctor` |\n| **Python 3.13 o 3.14** | python.org (marcar «Add to PATH») o `winget install Python.Python.3.14` | `brew install python@3.14` | el de su distribución | `python --version` |\n| **ffmpeg** | `winget install Gyan.FFmpeg` | `brew install ffmpeg` | `sudo apt install ffmpeg` | `ffmpeg -version` |\n| **La carpeta del kit** y sus bibliotecas, con versión fija | `Documentos\\canal-youtube`, entorno `.venv` y `pip install -r requirements.txt` | `~/canal-youtube`, lo mismo | igual que Mac | `pip list` muestra `google-api-python-client 2.201.0` |\n| **ElevenLabs** (o la voz local): plan Starter si va a publicar y una clave con permiso de voz y un tope de créditos que usted conozca | elevenlabs.io | igual | igual | `python voz.py --prueba` deja `salida/prueba.mp3` |\n| **Proyecto de Google Cloud** con YouTube Data API v3 y YouTube Analytics API | console.cloud.google.com → APIs y servicios → Biblioteca | igual | igual | Las dos figuran como «Habilitada» |\n| **Pantalla de consentimiento** («Externo», su correo como usuario de prueba) y **cliente OAuth de escritorio**; el JSON, como `client_secret.json` en la carpeta `secretos` | Credenciales → Crear credenciales → ID de cliente de OAuth | igual | igual | El archivo existe y no está en ninguna carpeta compartida |\n| **Primer permiso**: `python subir.py --autorizar`, eligiendo el canal | igual | igual | igual | Queda `token.json` en la carpeta `secretos` |\n\nLas claves no se pegan en el chat de Claude: van en la carpeta `secretos` del kit, que el `.gitignore` deja afuera, y Claude solo corre los scripts que las leen."
    },
    "recursos": [
      {
        "nombre": "google-api-python-client 2.201.0",
        "url": "https://pypi.org/project/google-api-python-client/",
        "que": "El cliente oficial de Google para la YouTube Data API y la YouTube Analytics API.",
        "licencia": "Apache-2.0",
        "revision": "Oficial de Google. Se fija la 2.201.0 (del 2026-09-30): la 2.202.0 salió el 2026-11-10 y todavía no tiene dos semanas. Nuestra regla: leer antes de instalar y fijar la versión.",
        "lecciones": "0, 8"
      },
      {
        "nombre": "google-auth-oauthlib 1.5.0 y google-auth 2.62.1",
        "url": "https://pypi.org/project/google-auth-oauthlib/",
        "que": "El permiso OAuth de escritorio: abre el navegador y guarda el token.",
        "licencia": "Apache-2.0",
        "revision": "Oficial de Google, con la versión fijada.",
        "lecciones": "0, 8"
      },
      {
        "nombre": "requests 2.34.2",
        "url": "https://pypi.org/project/requests/",
        "que": "Los pedidos HTTP de la voz de ElevenLabs, sin instalar su SDK.",
        "licencia": "Apache-2.0",
        "revision": "La biblioteca estándar de hecho para HTTP en Python, con la versión fijada.",
        "lecciones": "4"
      },
      {
        "nombre": "API de ElevenLabs (texto a voz con tiempos)",
        "url": "https://elevenlabs.io/docs/api-reference/text-to-speech/convert-with-timestamps",
        "que": "`POST /v1/text-to-speech/{voz}/with-timestamps`: la voz con los tiempos de cada letra (para los subtítulos), la velocidad y el texto de antes y de después.",
        "licencia": "Servicio pago",
        "revision": "En uso en nuestro estudio, en un servicio aislado que solo sale a api.elevenlabs.io.",
        "lecciones": "4"
      },
      {
        "nombre": "Kokoro-82M y kokoro-onnx 0.6.1",
        "url": "https://huggingface.co/hexgrad/Kokoro-82M",
        "que": "Voz local gratis, sin internet; 8 idiomas en la versión 1.0, entre ellos el español.",
        "licencia": "Apache-2.0 / MIT",
        "revision": "En uso en nuestro estudio para pruebas, sin red, con el código leído antes de instalarlo.",
        "lecciones": "4"
      },
      {
        "nombre": "aiwithremy/content-principles (commit 18f9670)",
        "url": "https://github.com/aiwithremy/content-principles",
        "que": "La psicología del video que retiene: escribir para una persona, que cada línea haga querer la siguiente, lo concreto, cortar el relleno.",
        "licencia": "Sin licencia: no se puede redistribuir",
        "revision": "Revisado y en uso en nuestro estudio (un SKILL.md de texto, sin código). No va en el kit: se lee en GitHub.",
        "lecciones": "3, 6"
      },
      {
        "nombre": "Skill leer-referencia (versión del curso, en el kit)",
        "que": "Leer un video de otro creador por momentos y sacar su gramática (estructura, ritmo, por qué retiene) sin copiar su texto.",
        "licencia": "La del kit: {{MIT, por confirmar}}",
        "revision": "Escrita por nosotros para el curso, sin scripts.",
        "lecciones": "3"
      },
      {
        "nombre": "Skills canal y guion-largo (en el kit)",
        "que": "Las reglas del canal (ficha, estilo, ritmo) y cómo escribir el guion con fuentes.",
        "licencia": "La del kit: {{MIT, por confirmar}}",
        "revision": "Escritas por nosotros, sin scripts.",
        "lecciones": "1, 3"
      },
      {
        "nombre": "ffmpeg 9.0.2",
        "url": "https://ffmpeg.org",
        "que": "El montaje, las fotos con movimiento, el volumen a −14 LUFS y los cortes verticales.",
        "licencia": "LGPL / GPL",
        "revision": "Oficial, de ffmpeg.org.",
        "lecciones": "6, 7"
      },
      {
        "nombre": "Blender, ComfyUI, Wan 2.2 Fun Control 5B y FLUX.2 [klein] 4B",
        "url": "https://www.blender.org",
        "que": "El 3D y la IA de video local: Blender pone la cámara y las formas, FLUX hace la foto guía y Wan la anima.",
        "licencia": "GPL / GPL-3 / Apache-2.0 / Apache-2.0",
        "revision": "En uso en nuestra PC; las versiones y sus huellas están en el curso de videos 3D con Blender y Claude.",
        "lecciones": "5"
      },
      {
        "nombre": "Natural Earth (ne_50m_land)",
        "url": "https://www.naturalearthdata.com",
        "que": "Las costas reales de los mapas.",
        "licencia": "Dominio público",
        "revision": "En uso en los mapas de «La caída de Roma».",
        "lecciones": "5"
      },
      {
        "nombre": "Biblioteca de audio de YouTube (en Studio)",
        "url": "https://support.google.com/youtube/answer/3376882",
        "que": "Música y efectos que se pueden monetizar; algunas pistas piden crédito en la descripción.",
        "licencia": "Licencia de YouTube / CC",
        "revision": "Oficial de YouTube.",
        "lecciones": "6"
      }
    ],
    "noRecomendamos": "- Herramientas de terceros que piden la contraseña de su cuenta de Google o «suben por usted» sin la API oficial.\n- Bots de vistas, comentarios o suscriptores.\n- Bajar videos de otros para volver a subirlos.\n- Extensiones que «reescriben» guiones de otros canales.\n\nTampoco enseñamos a bajar videos de referencia: para estudiar un video alcanza con verlo y tomar notas con la skill leer-referencia.",
    "kit": {
      "descripcion": "La carpeta `canal-youtube` (un zip), escrita para el curso; sus scripts se prueban contra un canal de prueba, en Windows y en Mac, antes de publicarla. No incluye content-principles (sin licencia: se enlaza) ni clips, voces o imágenes de terceros.",
      "archivos": [
        { "nombre": "LEAME.md", "que": "Qué trae, el orden y los pasos de la lección 0." },
        { "nombre": "CLAUDE.md", "que": "Las reglas del proyecto para Claude Code: la ficha primero, fuentes antes del guion, nada de copiar, las claves sin mostrar y la subida siempre privada con fecha." },
        { "nombre": ".claude/skills/canal/SKILL.md", "que": "La ficha del canal: cómo escribirla y cómo respetarla en temas, títulos, miniaturas y audiencia." },
        { "nombre": ".claude/skills/guion-largo/SKILL.md", "que": "Investigación con fuentes, escaleta y guion de 1.450 a 1.800 palabras a ritmo de 1,2x." },
        { "nombre": ".claude/skills/leer-referencia/SKILL.md", "que": "Leer un video de otro por momentos y anotar qué se aprende, en palabras propias." },
        { "nombre": "plantillas/canal.md", "que": "La ficha del canal: público, promesa, 20 temas, formato, estilo, ritmo, voz, audiencia y lo que nunca se hace." },
        { "nombre": "plantillas/escaleta.md, guion.md, fuentes.md", "que": "Las tres piezas del guion, con cada hecho y su fuente." },
        { "nombre": "plantillas/tomas.csv", "que": "El plan de tomas: desde, hasta, tipo, qué se ve, pedido de imagen, archivo, movimiento y rótulo." },
        { "nombre": "plantillas/meta.json", "que": "Lo que se sube con cada video: título, descripción, etiquetas, idioma, audiencia, IA, fecha, miniatura y subtítulos." },
        { "nombre": "estilos.md", "que": "Cuatro estilos de ejemplo escritos como reglas: ilustrado plano recortable, mármol vivo, motion y 3D low-poly." },
        { "nombre": "revision.md", "que": "La lista de revisión del guion (antes de la voz) y del video (antes de subir)." },
        { "nombre": "semana.md", "que": "El pedido de la semana: 3 temas que no se parezcan a los últimos, sin guiones hasta que usted apruebe." },
        { "nombre": "voz.py", "que": "La narración por partes con ElevenLabs (o la voz local), con el texto de antes y de después y los subtítulos; retoma lo que falta." },
        { "nombre": "montar.sh / montar.ps1", "que": "Arma el video desde tomas.csv con ffmpeg y revisa que no haya negros ni archivos vacíos." },
        { "nombre": "cortos.py", "que": "Arma un short vertical de 1080×1920 desde un tramo del largo con las imágenes rehechas en vertical; si falta alguna, avisa en vez de recortar." },
        { "nombre": "subir.py", "que": "Sube privado y programado por la API oficial, con la audiencia, la IA declarada y la miniatura." },
        { "nombre": "medir.py", "que": "El informe de YouTube Analytics por video y la curva de retención." },
        { "nombre": "requirements.txt y .gitignore", "que": "Las bibliotecas con versión fija, y que las claves, el entorno y la salida no viajen." },
        { "nombre": "ejemplos/prueba.mp4 y prueba.json", "que": "El video de 10 s de la lección 0, hecho por nosotros, sin voz." }
      ]
    },
    "accion": {
      "titulo": "Su próximo video, con el mismo camino",
      "texto": "Pida a Claude los temas de la semana con semana.md, apruebe uno y repita el camino: fuentes, guion, voz, tomas, montaje, la lista de revisión y la subida privada con fecha. Saque conclusiones a partir del quinto video. Si quiere mostrarnos el suyo, la comunidad de Vion está abierta."
    }
  },
  "en": {
    "corto": "YouTube channel",
    "titulo": "Your YouTube channel with AI: build it and automate it",
    "subtitulo": "Canal de YouTube con IA",
    "tituloSeo": "Free course: build a YouTube channel with AI | Vion",
    "descripcion": "A free Vion course: an AI-made YouTube channel, from a sourced script to scheduled uploads, without risking monetization. In production.",
    "paraQuien": "Anyone who wants an educational channel (history, science, a trade, their business) made with AI, without filming themselves or editing all day, and without putting monetization at risk.",
    "seLleva": "Your first long video (8 to 10 min) and two Shorts, scheduled through YouTube's official API; a clear sense of what keeps a channel monetized; and the kit to make the next ones.",
    "herramientas": "Claude Code (paid Anthropic plan, from USD 20 a month), ElevenLabs for the voice (Starter, USD 6 a month, or a free local voice), the YouTube API, Python and ffmpeg (free); local AI video is optional and free.",
    "lecciones": [
      "Setup: your channel, Claude Code, the voice and the YouTube API",
      "Niche, format and an honest look at the money",
      "What gets a channel demonetized (or shut down)",
      "The script with Claude: sources, structure and no copying",
      "The voice: ElevenLabs or local, at 1.2x",
      "Visuals by style: motion, 3D and AI on your own PC",
      "Editing, thumbnail, title and description",
      "Shorts cut from the long video",
      "Upload, schedule and measure"
    ]
  }
};
