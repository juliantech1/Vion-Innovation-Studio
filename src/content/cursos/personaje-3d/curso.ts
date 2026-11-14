// B3 · Su personaje 3D que habla: la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción del final, desde el
// storyboard (docs/planes/cursos/B3-personaje-3d.md de la aldea, 2026-11-10). Las lecciones están en lecciones.ts.
import type { CursoTexto } from '../../tipos';

export const curso: CursoTexto = {
  "es": {
    "corto": "Personaje 3D",
    "titulo": "Su personaje 3D que habla (como Chispa)",
    "subtitulo": "Mascota 3D con voz y boca sincronizada (lip sync)",
    "tituloSeo": "Curso gratis: su personaje 3D que habla | Vion",
    "descripcion": "Curso gratis de Vion: un personaje 3D original con Blender y Claude, con voz, boca sincronizada y fondo transparente. En producción.",
    "paraQuien": "Marcas, negocios y creadores que quieren una cara propia en sus videos sin grabarse, y no quieren depender de una app cerrada de avatares.",
    "seLleva": "Un personaje 3D original con voz, que habla y gesticula con fondo transparente encima de cualquier video, y el kit (la ficha, los scripts de cuerpo, voz, boca y render, y la skill personaje-3d) para hacerle decir otra cosa mañana.",
    "herramientas": "Blender y ffmpeg (gratis), Claude Code (plan pago de Anthropic, desde USD 20 al mes) y ElevenLabs para la voz (Starter, USD 6 al mes, para uso comercial); Meshy es opcional.",
    "ficha": {
      "requisitos": "Los de Blender 5.2.3 (8 GB de RAM; GPU de 2 GB con OpenGL 4.3 / Vulkan 1.3; Mac solo con chip de Apple) y los de Claude Code. Sin GPU se puede: el render va por el CPU, mucho más lento.",
      "duracion": "8 lecciones (57 láminas con 36 videos cortos), unos 50 min de lectura, más el tiempo de render (minutos con una GPU; mucho más sin ella).",
      "costo": "Claude Code pide un plan pago (desde USD 20 al mes) y la voz para uso comercial, ElevenLabs Starter (USD 6 al mes); Blender, ffmpeg y el camino por código son gratis, y Meshy es opcional."
    },
    "costos": [
      {
        "pieza": "Claude Code",
        "costo": "**Pago.** Pro USD 20 al mes (USD 17 pagando el año), Max USD 100, Ultra USD 200. El plan gratis no lo incluye",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "Blender 5.2.3 LTS, ffmpeg",
        "costo": "Gratis (GPL / LGPL-GPL)",
        "fuente": "[blender.org](https://www.blender.org/download/), [ffmpeg.org](https://ffmpeg.org)"
      },
      {
        "pieza": "ElevenLabs (la voz)",
        "costo": "Free: 10.000 créditos, **sin licencia comercial**. **Starter USD 6 al mes** (30.000 créditos, licencia comercial, clonar su propia voz); Creator USD 22 (121.000). Es lo que pagamos nosotros (Starter, desde el 2026-11-09)",
        "fuente": "[elevenlabs.io/pricing](https://elevenlabs.io/pricing)"
      },
      {
        "pieza": "Meshy (opcional, lección 2)",
        "costo": "Free: 100 créditos al mes y lo que sale es **CC BY 4.0** (uso comercial **con crédito** a Meshy). **Pro USD 20 al mes**: 1.000 créditos y el modelo es suyo («Private & Customer owned»). Un personaje: imagen a 3D con textura 2K, 30 créditos (+5 en «Ultra»); auto-rig, 5; un concepto de imagen, de 3 a 9. Nuestra cuenta: unos 62 créditos por personaje sin rondas extra",
        "fuente": "[meshy.ai/pricing](https://www.meshy.ai/pricing), [docs.meshy.ai](https://docs.meshy.ai/en/api/pricing)"
      },
      {
        "pieza": "Voz local (alternativa)",
        "costo": "Kokoro-82M, gratis (Apache-2.0); no da tiempos por letra",
        "fuente": "[huggingface.co/hexgrad/Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)"
      },
      {
        "pieza": "Rhubarb Lip Sync 1.14.0",
        "costo": "Gratis (MIT)",
        "fuente": "[github.com/DanielSWolf/rhubarb-lip-sync](https://github.com/DanielSWolf/rhubarb-lip-sync)"
      },
      {
        "pieza": "Mixamo (esqueleto automático, opcional)",
        "costo": "Gratis con una cuenta de Adobe; personajes y animaciones sin regalías para uso comercial; no se pueden revender los archivos sueltos",
        "fuente": "[preguntas frecuentes de Mixamo](https://helpx.adobe.com/en/creative-cloud/faq/mixamo-faq.html)"
      },
      {
        "pieza": "Otras IA de imagen a 3D (se mencionan, no se enseñan)",
        "costo": "TRELLIS.2 (MIT, gratis, pero pide Linux y una GPU NVIDIA de 24 GB); por fal.ai, TRELLIS 2 a USD 0,25 a 0,35 por modelo (lo que pagamos nosotros, 2026-11-04); Hunyuan3D 2.1 (licencia comunitaria de Tencent que **no vale** en la Unión Europea, el Reino Unido ni Corea del Sur); Tripo: su página de precios no se pudo leer y los sitios que la citan no coinciden, así que no damos su precio",
        "fuente": "Repos oficiales; nuestra cuenta de fal.ai"
      }
    ],
    "costosFecha": "2026-11-10",
    "puesta": {
      "leccion": 0,
      "texto": "Todo se comprueba al final de la lección 0: una voz con sus tiempos por letra y un PNG con transparencia, hechos desde la terminal.\n\n1. **Cuenta de Claude** Pro o superior ([claude.com/pricing](https://claude.com/pricing)). Se comprueba: el plan en Ajustes.\n2. **Blender 5.2.3 LTS** de [blender.org/download](https://www.blender.org/download/). Windows: instalador o .zip. Mac: .dmg de Apple Silicon. Linux: .tar.xz o Snap. Se comprueba: Ayuda → Acerca de dice 5.2.3.\n3. **Git para Windows** 2.56.0 (lo recomienda Claude Code; en Mac y Linux no hace falta): git-scm.com/downloads/win. Se comprueba: `git --version`.\n4. **Claude Code.** Windows, en PowerShell: `irm https://claude.ai/install.ps1 | iex`. Mac y Linux: `curl -fsSL https://claude.ai/install.sh | bash`. Se comprueba en una terminal nueva: `claude --version` (hoy 2.1.322) y `claude doctor`.\n5. **ffmpeg.** Windows: `winget install Gyan.FFmpeg`. Mac: `brew install ffmpeg`. Linux: `sudo apt install ffmpeg`. Se comprueba: `ffmpeg -version`, y que `ffmpeg -encoders` muestre `libvpx-vp9` (en Windows, filtrando con `findstr vp9`; en Mac y Linux, con `grep vp9`).\n6. **Python** para los scripts del kit. Los de Blender usan el Python de Blender; `voz.py` necesita cualquier Python 3.10 o más nuevo. Windows: `winget install Python.Python.3.13`. Mac: `brew install python` o el de Xcode. Linux: el del sistema. Se comprueba: `python --version`.\n7. **ElevenLabs:** cuenta en elevenlabs.io, plan Starter (o Free para probar, sin uso comercial), y en Developers → API Keys, una clave. Se comprueba: `python voz.py <id-de-voz> \"Hola\" prueba` deja `prueba.mp3` y `prueba.json`.\n8. **La clave, en su lugar:** en `personaje-curso/.env` (copia de `.env.ejemplo`): `ELEVENLABS_API_KEY=` y la clave. **Nunca** se pega en el chat de Claude ni se sube a ningún lado. Se comprueba: `.env` aparece en el `.gitignore` del kit.\n9. **Opcional, Meshy** (lección 2): cuenta gratis en meshy.ai (100 créditos al mes, CC BY) o Pro. Se comprueba: el saldo de créditos arriba a la derecha.\n10. **La carpeta del curso** (el kit) y la ruta de Blender en su `CLAUDE.md`. Windows: `Documentos\\personaje-curso` y `C:\\Program Files\\Blender Foundation\\Blender 5.2\\blender.exe`. Mac: `~/personaje-curso` y `/Applications/Blender.app/Contents/MacOS/Blender`. Linux: la carpeta del .tar.xz. Se comprueba: en Claude Code, «corré blender --version» devuelve 5.2.3."
    },
    "recursos": [
      {
        "nombre": "Blender 5.2.3 LTS (con Rigify adentro)",
        "url": "https://www.blender.org/download/",
        "que": "Cuerpo, cara, esqueleto y render.",
        "licencia": "GPL",
        "revision": "Oficial. Nosotros usamos la 5.2.2, verificada por su sha256.",
        "lecciones": "Todas"
      },
      {
        "nombre": "API de ElevenLabs (texto a voz con tiempos)",
        "url": "https://elevenlabs.io",
        "que": "`POST /v1/text-to-speech/{voice_id}/with-timestamps`: la voz en MP3 y los tiempos de inicio y fin de cada letra (`alignment`).",
        "licencia": "Servicio pago",
        "revision": "En uso desde el 2026-10-21 en nuestro estudio, con lista cerrada (solo texto a voz con tiempos y la suscripción) y salida solo a api.elevenlabs.io. El kit no usa SDK: `voz.py` es un pedido HTTP de 15 líneas, sin dependencias.",
        "lecciones": "0, 4, 5"
      },
      {
        "nombre": "Meshy (web; API solo con plan pago)",
        "url": "https://www.meshy.ai",
        "que": "Imagen o dibujo a modelo 3D con textura; auto-rig.",
        "licencia": "Términos de Meshy: plan pago, el modelo es suyo; gratis, CC BY 4.0",
        "revision": "Revisado el 2026-10-21: Meshy puede usar lo que se le sube para entrenar (salvo Enterprise), puede nombrar al cliente en su publicidad si no se opone por escrito, borra lo generado por API a los 3 días y la suscripción no tiene reembolsos. Hoy no lo usamos (en pausa desde el 2026-10-21).",
        "lecciones": "2, 3"
      },
      {
        "nombre": "DanielSWolf/rhubarb-lip-sync v1.14.0",
        "url": "https://github.com/DanielSWolf/rhubarb-lip-sync",
        "que": "Saca las formas de la boca de un audio, sin texto ni tiempos por letra.",
        "licencia": "MIT (sus partes: BSD, Boost, MIT)",
        "revision": "No lo usamos (nos alcanzan los tiempos de ElevenLabs). Es un ejecutable sin red: baje el release de GitHub y compare su huella con la del release.",
        "lecciones": "5"
      },
      {
        "nombre": "hexgrad/Kokoro-82M",
        "url": "https://huggingface.co/hexgrad/Kokoro-82M",
        "que": "Voz local, sin nube.",
        "licencia": "Apache-2.0",
        "revision": "En uso en nuestro estudio (por kokoro-onnx 0.6.1, leído antes de instalar y con la versión fijada) como voz de respaldo. Pocas voces en español; no da tiempos por letra.",
        "lecciones": "4"
      },
      {
        "nombre": "Mixamo",
        "url": "https://www.mixamo.com",
        "que": "Esqueleto automático y animaciones para personajes humanoides en pose T.",
        "licencia": "Términos de Adobe: sin regalías; no revender los archivos sueltos",
        "revision": "No lo usamos. Sube su modelo a Adobe y no sirve para formas no humanas (una estrella, un cubo).",
        "lecciones": "3"
      },
      {
        "nombre": "microsoft/TRELLIS.2",
        "url": "https://github.com/microsoft/TRELLIS.2",
        "que": "Imagen a 3D local.",
        "licencia": "MIT",
        "revision": "No lo usamos. Su README pide Linux y una GPU NVIDIA de 24 GB; se menciona para quien tenga ese equipo.",
        "lecciones": "2"
      },
      {
        "nombre": "Skill del curso personaje-3d (en el kit)",
        "que": "Cómo escribir y cambiar `ficha.json`, la receta de una toma (entrada, gestos, líneas) y las reglas de diseño y derechos.",
        "licencia": "La del kit: {{MIT, por confirmar}}",
        "revision": "Escrita por nosotros, sin scripts.",
        "lecciones": "1, 2, 6"
      }
    ],
    "noRecomendamos": "- Apps de «avatar que habla» que no dicen de quién es el resultado.\n- Clonar la voz de otra persona.\n- Modelos 3D de sitios que no dicen su licencia.\n- Pegar en Blender código que no leyó.",
    "kit": {
      "descripcion": "La carpeta `personaje-curso` (un zip), escrita para el curso. Chispa no va en el kit: el ejemplo es Tuerca, una tuerca hexagonal tejida color mostaza diseñada para el curso.",
      "archivos": [
        {
          "nombre": "LEAME.md",
          "que": "Qué trae, el orden y los comandos de la lección 0."
        },
        {
          "nombre": "CLAUDE.md",
          "que": "Las reglas del proyecto para Claude Code, con la ruta de Blender y los comandos de cuerpo, voz y toma."
        },
        {
          "nombre": ".claude/skills/personaje-3d/SKILL.md",
          "que": "La skill: la ficha, la receta de una toma y las reglas de diseño y derechos."
        },
        {
          "nombre": ".env.ejemplo y .gitignore",
          "que": "Dónde va la clave de ElevenLabs y que nunca se suba."
        },
        {
          "nombre": "fichas/tuerca.json, fichas/vacia.json",
          "que": "El personaje de ejemplo y una ficha en blanco con comentarios."
        },
        {
          "nombre": "armar_personaje.py",
          "que": "Lee la ficha, la valida y arma cuerpo, cara de piezas y esqueleto mínimo en Blender; guarda el .blend y las vistas de frente y de perfil."
        },
        {
          "nombre": "limpiar.py",
          "que": "Para el camino de Meshy: baja las caras, deja colores lisos, borra la cara pintada y apoya el modelo en el suelo."
        },
        {
          "nombre": "probar_rig.py",
          "que": "La prueba de deformación: ningún vértice sin hueso, las manos no mueven la cabeza y la cabeza gira sola."
        },
        {
          "nombre": "voz.py",
          "que": "La voz de ElevenLabs con los tiempos de cada letra, sin dependencias."
        },
        {
          "nombre": "boca.py",
          "que": "De los tiempos por letra (o de Rhubarb) a la boca de cada cuadro, con la velocidad de la voz."
        },
        {
          "nombre": "animar.py",
          "que": "Lee la toma y renderiza los PNG con transparencia a 12 cuadros por segundo, con temblor y parpadeos."
        },
        {
          "nombre": "capa.sh / capa.ps1",
          "que": "Pasa los PNG a WebM y ProRes con alfa y los monta sobre un video."
        },
        {
          "nombre": "voces.json",
          "que": "La voz elegida para cada personaje (su voice ID)."
        },
        {
          "nombre": "licencias.md",
          "que": "La lista de derechos para completar: diseño, modelo, voz, música, texturas y a qué no se parece."
        },
        {
          "nombre": "prompts.md",
          "que": "Pedidos de ejemplo de cada lección."
        }
      ]
    },
    "accion": {
      "titulo": "Hágalo hablar otra vez",
      "texto": "Escriba una línea nueva en el guion, pida la voz, saque la boca con boca.py y renderice la toma: su personaje dice otra cosa sin rehacer nada. Antes de usarlo para una marca, complete licencias.md. Si quiere mostrárnoslo, la comunidad de Vion está abierta."
    }
  },
  "en": {
    "corto": "3D mascot",
    "titulo": "Your talking 3D mascot (like Chispa)",
    "subtitulo": "Personaje 3D que habla",
    "tituloSeo": "Free course: build your talking 3D mascot | Vion",
    "descripcion": "A free Vion course: an original 3D character made with Blender and Claude, with a voice, lip sync and a transparent background. In production.",
    "paraQuien": "Brands, businesses and creators who want their own face in their videos without filming themselves, and without relying on a closed avatar app.",
    "seLleva": "An original 3D character with a voice that talks and gestures over any video with a transparent background, plus the kit to make it say something new tomorrow.",
    "herramientas": "Blender and ffmpeg (free), Claude Code (paid Anthropic plan, from USD 20 a month) and ElevenLabs for the voice (Starter, USD 6 a month, for commercial use); Meshy is optional.",
    "lecciones": [
      "Setup: Blender, Claude Code, ffmpeg and the voice",
      "Designing a character people recognize (and that is yours)",
      "From idea to 3D model: with code or from a drawing",
      "Cleanup, face and rig",
      "The voice (and its speed)",
      "Lip sync: the mouth follows the voice",
      "Gestures, entrances and rendering with transparency",
      "On top of any video, and who owns your character"
    ]
  }
};
