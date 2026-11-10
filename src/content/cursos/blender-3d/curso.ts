// B2 · Videos 3D con Blender y Claude: la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción del final, desde el
// storyboard (docs/planes/cursos/B2-3d-blender.md de la aldea, 2026-11-10). Las lecciones están en lecciones.ts.
import type { CursoTexto } from '../../tipos';

export const curso: CursoTexto = {
  "es": {
    "corto": "Blender 3D",
    "titulo": "Videos 3D con Blender y Claude (sin saber Blender)",
    "tituloSeo": "Curso gratis: videos 3D con Blender y Claude | Vion",
    "descripcion": "Curso gratis de Vion: una escena 3D desde una frase, animada y llevada a video con Blender y Claude, sin saber Blender. En producción.",
    "paraQuien": "Creadores, estudios y constructoras que quieren escenas 3D en video sin aprender Blender a fondo.",
    "seLleva": "Una escena 3D hecha desde un texto, con 3 o 4 tomas animadas, renderizada y unida en un video, y el kit (armar.py, el lenguaje de escena, la guardia de temperatura y la skill escena-3d) para hacer las siguientes.",
    "herramientas": "Blender, ffmpeg y los modelos de Poly Haven y Polyfork (gratis), y Claude Code (plan pago de Anthropic, desde USD 20 al mes); la IA local opcional es gratis y pide una GPU de 16 GB.",
    "ficha": {
      "requisitos": "Lo mínimo de Blender 5.2.3: 8 GB de RAM, CPU de 4 núcleos, GPU de 2 GB con OpenGL 4.3 / Vulkan 1.3 (Mac solo con chip de Apple). Cómodo: GPU de 8 GB. La IA local opcional: nosotros usamos 16 GB de video. Y un plan pago de Claude.",
      "duracion": "8 lecciones (56 láminas con 39 videos cortos), unos 50 min de lectura, más el tiempo de render (de minutos a horas según la GPU).",
      "costo": "Claude Code pide un plan pago de Anthropic (desde USD 20 al mes); Blender, los modelos y la IA local son gratis, y la IA local, como la hacemos nosotros, pide una GPU de 16 GB."
    },
    "costos": [
      {
        "pieza": "Claude Code",
        "costo": "**Pago.** Pro USD 20 al mes (USD 17 pagando el año), Max USD 100, Ultra USD 200. El plan gratis no lo incluye",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "Blender 5.2.3 LTS",
        "costo": "Gratis (GPL)",
        "fuente": "[blender.org/download](https://www.blender.org/download/)"
      },
      {
        "pieza": "MCP for Blender (ahujasid)",
        "costo": "Gratis (MIT). Su herramienta `generate_3d` usa servicios **pagos** con clave propia (Hyper3D Rodin, Hunyuan3D, Meshy, Tripo, Sketchfab) y ofrece un plan «Premium»: **no hacen falta** para el curso",
        "fuente": "[github.com/ahujasid/blender-mcp](https://github.com/ahujasid/blender-mcp)"
      },
      {
        "pieza": "Modelos y texturas de Poly Haven",
        "costo": "Gratis, CC0 (uso comercial, sin crédito obligatorio)",
        "fuente": "[polyhaven.com/license](https://polyhaven.com/license)"
      },
      {
        "pieza": "Modelos de Polyfork",
        "costo": "Gratis, sin cuenta: licencia Polyfork (uso comercial y en videos, sin crédito, **sin volver a subir los archivos sueltos**) o CC BY 4.0 (con crédito). Las versiones HD son pagas (Pro o Lifetime) y no hacen falta",
        "fuente": "[polyfork.dev/licensing](https://polyfork.dev/licensing)"
      },
      {
        "pieza": "IA local (opcional): ComfyUI, Wan 2.2 Fun Control 5B, FLUX.2 [klein] 4B",
        "costo": "Gratis: ComfyUI GPL-3, Wan 2.2 Apache-2.0, FLUX.2 klein **4B** Apache-2.0 (la **9B** no: licencia no comercial). Se paga la luz y unos 19 GB de disco",
        "fuente": "Repos oficiales y Hugging Face"
      },
      {
        "pieza": "IA paga (alternativa a la local)",
        "costo": "Lo que pagamos nosotros en fal.ai, a precios del 2026-11-04: Kling O3 Edit USD 0,126 por segundo de video; Nano Banana Pro USD 0,15 por foto guía. Una toma de 5 s ≈ USD 0,78. No es parte del curso: se menciona",
        "fuente": "Nuestra cuenta de fal.ai (2026-11-04)"
      }
    ],
    "costosFecha": "2026-11-10",
    "puesta": {
      "leccion": 0,
      "texto": "Todo se comprueba al final de la lección 0 con un cubo renderizado desde la terminal.\n\n1. **Cuenta de Claude** Pro o superior ([claude.com/pricing](https://claude.com/pricing)). Se comprueba: el plan en Ajustes.\n2. **Controlador de la GPU** al día. Windows: nvidia.com o amd.com (NVIDIA: el «Studio» o el «Game Ready»). Mac: viene con macOS. Linux: el de su distribución. Se comprueba: `nvidia-smi` muestra la GPU (NVIDIA).\n3. **Blender 5.2.3 LTS** de [blender.org/download](https://www.blender.org/download/). Windows: instalador (349 MB) o .zip portátil. Mac: .dmg para Apple Silicon. Linux: .tar.xz o Snap. Se comprueba: Ayuda → Acerca de dice 5.2.3.\n4. **Git para Windows** (lo recomienda Claude Code; en Mac y Linux no hace falta): git-scm.com/downloads/win. Se comprueba: `git --version`.\n5. **Claude Code.** Windows, en PowerShell: `irm https://claude.ai/install.ps1 | iex`. Mac y Linux: `curl -fsSL https://claude.ai/install.sh | bash`. Se comprueba en una terminal nueva: `claude --version` y `claude doctor`; después `claude` para iniciar sesión.\n6. **ffmpeg**, para unir las tomas. Windows: `winget install Gyan.FFmpeg`. Mac: `brew install ffmpeg`. Linux: `sudo apt install ffmpeg`. Se comprueba: `ffmpeg -version`.\n7. **La carpeta del curso** (el kit). Windows: `Documentos\\blender-curso`. Mac y Linux: `~/blender-curso`. Se comprueba: están `CLAUDE.md` y `armar.py`.\n8. **Decirle a Claude dónde está Blender**, en la primera línea del `CLAUDE.md` del kit. Windows: `C:\\Program Files\\Blender Foundation\\Blender 5.2\\blender.exe`. Mac: `/Applications/Blender.app/Contents/MacOS/Blender`. Linux: la carpeta del .tar.xz, o `blender` con Snap. Se comprueba: en Claude Code, «corré blender --version» devuelve 5.2.3.\n9. **Opcional, el MCP** (lección 1). Primero **uv**: `winget install --id=astral-sh.uv -e` en Windows, `brew install uv` en Mac, el instalador oficial de astral.sh en Linux. Se comprueba: `uv --version`.\n10. **El conector en Claude Code**, con la versión fija y sin telemetría (igual en los tres sistemas): `claude mcp add blender -e DISABLE_TELEMETRY=true -e BLENDER_MCP_SAFE_MODE=1 -- uvx mcp-for-blender==2.2.7`. Se comprueba: `claude mcp list` muestra `blender`.\n11. **El complemento dentro de Blender:** `uvx mcp-for-blender==2.2.7 install-addon`; en Blender, Editar → Preferencias → Complementos → activar **MCP for Blender**; en la vista 3D, tecla `N` → pestaña MCP for Blender → **Start MCP Server**. Se comprueba: en Claude Code, «¿qué hay en la escena de Blender?» responde con el cubo de inicio."
    },
    "recursos": [
      {
        "nombre": "ahujasid/blender-mcp (paquete mcp-for-blender 2.2.7)",
        "url": "https://github.com/ahujasid/blender-mcp",
        "que": "Claude controla Blender en vivo: corre Python en la sesión abierta, mira la vista, busca modelos en Poly Haven, Sketchfab y Poly Pizza, y genera modelos con servicios pagos.",
        "licencia": "MIT",
        "revision": "No lo revisamos y no lo usamos en nuestro estudio. Su propio README avisa: `execute_blender_code` corre cualquier código de Python en Blender (guardar antes), el canal con el complemento no tiene clave ni cifrado (dejarlo solo en su computadora), telemetría anónima por defecto (`DISABLE_TELEMETRY=true` la apaga) y un modo seguro (`BLENDER_MCP_SAFE_MODE=1`). Fije la versión: `==2.2.7`.",
        "lecciones": "0, 1"
      },
      {
        "nombre": "MCP oficial de Blender Lab (complemento 1.0.3)",
        "url": "https://www.blender.org/lab/mcp-server/",
        "que": "El servidor MCP de la Fundación Blender, más pensado para entender y depurar escenas.",
        "licencia": "Sin licencia indicada en la página",
        "revision": "No lo usamos. Pide Blender 5.1 o más nuevo, su guía está escrita para llama.cpp (no para Claude), y la página advierte que ejecuta el código del modelo «sin ninguna protección» y recomienda una máquina virtual. Se menciona para que sepa que existe.",
        "lecciones": "1"
      },
      {
        "nombre": "Poly Haven",
        "url": "https://polyhaven.com",
        "que": "Modelos, texturas y cielos HDRI.",
        "licencia": "CC0",
        "revision": "Revisado y en uso: 22 modelos y las texturas de nuestro taller, fijados por su sha256.",
        "lecciones": "2, 4"
      },
      {
        "nombre": "Polyfork (lucas-martinic/polyfork-catalog)",
        "url": "https://github.com/lucas-martinic/polyfork-catalog",
        "que": "Índice de 3.156 modelos low-poly en GLB, en metros: autos, máquinas de obra, edificios, personas, animales. Los modelos se bajan de [polyfork.dev](https://polyfork.dev).",
        "licencia": "Índice libre; modelos con licencia Polyfork o CC BY 4.0",
        "revision": "Revisado y en uso desde el 2026-11-09 (índice fijado al commit `fcae470`; cada modelo se revisa al bajarlo: glTF y tope de 20 MB). El repo es nuevo (2026-11-02) y no publica huellas: tome la huella la primera vez.",
        "lecciones": "2"
      },
      {
        "nombre": "Blender 5.2.3 LTS",
        "url": "https://www.blender.org/download/",
        "que": "El programa.",
        "licencia": "GPL",
        "revision": "Oficial. Nosotros usamos la 5.2.2, verificada por su sha256.",
        "lecciones": "Todas"
      },
      {
        "nombre": "ComfyUI v0.44.0 + Wan 2.2 Fun Control 5B + FLUX.2 [klein] 4B",
        "url": "https://github.com/Comfy-Org/ComfyUI",
        "que": "La IA local de la lección 7: el video con la profundidad de Blender y la foto guía.",
        "licencia": "GPL-3 / Apache-2.0 / Apache-2.0",
        "revision": "En uso en nuestra PC (ComfyUI portable v0.42.1, modelos de Comfy-Org fijados por revisión y sha256, ComfyUI solo en 127.0.0.1 y sin red). Hay que fijar versiones y no instalar nodos de terceros sin leerlos.",
        "lecciones": "7"
      },
      {
        "nombre": "Skill del curso escena-3d (en el kit)",
        "que": "El lenguaje de escena y las reglas para escribir `escena.json` y las tomas.",
        "licencia": "La del kit: {{MIT, por confirmar}}",
        "revision": "Escrita por nosotros, sin scripts.",
        "lecciones": "2, 3, 6"
      }
    ],
    "noRecomendamos": "- Instalar el MCP con `uvx mcp-for-blender` sin versión: baja la última cada vez, sin que usted vea el cambio.\n- Dejar el servidor del complemento abierto a la red: no tiene clave.\n- Pegar en Blender código que no leyó.\n- Nodos de ComfyUI de terceros sin revisar.",
    "kit": {
      "descripcion": "La carpeta `blender-curso` (un zip), escrita para el curso. No incluye modelos de Polyfork (su licencia no deja volver a subirlos sueltos): `armar.py` los baja de polyfork.dev cuando una escena los nombra. Se publica con el curso.",
      "archivos": [
        {
          "nombre": "LEAME.md",
          "que": "Qué trae, el orden y los comandos de la lección 0."
        },
        {
          "nombre": "CLAUDE.md",
          "que": "Las reglas del proyecto para Claude Code, con la ruta de Blender en la primera línea."
        },
        {
          "nombre": ".claude/skills/escena-3d/SKILL.md",
          "que": "La skill: el lenguaje de escena (entorno, objetos, tomas y animaciones) con sus listas cerradas."
        },
        {
          "nombre": "armar.py",
          "que": "Lee `escena.json`, la valida, arma la escena en Blender, guarda una copia con fecha y renderiza la vista, el borrador o la alta de cada toma, con su huella."
        },
        {
          "nombre": "guardia.sh / guardia.ps1",
          "que": "Render por tramos que mira la temperatura de la GPU (NVIDIA)."
        },
        {
          "nombre": "unir.sh / unir.ps1",
          "que": "Une las tomas con ffmpeg y pone música y título encima."
        },
        {
          "nombre": "escenas/casa-de-campo.json, escenas/obra.json, escenas/vacia.json",
          "que": "Ejemplos del lenguaje de escena."
        },
        {
          "nombre": "modelos.md",
          "que": "Dónde bajar modelos (Poly Haven, Polyfork), sus licencias, cómo nombrarlos en la escena y qué crédito poner si usa CC BY."
        },
        {
          "nombre": "ia-local.md",
          "que": "Guía opcional de la IA local: ComfyUI portable, Wan 2.2 Fun Control 5B, FLUX.2 klein 4B, versiones y huellas, y cómo sacar la profundidad."
        },
        {
          "nombre": "prompts.md",
          "que": "Pedidos de ejemplo de cada lección."
        }
      ]
    },
    "accion": {
      "titulo": "Haga la suya",
      "texto": "Escriba una frase con un lugar, una hora y de tres a cinco cosas, pídasela a Claude con la skill escena-3d y llévela hasta el video: tres o cuatro tomas, borrador, alta con la guardia y unir. Si quiere mostrarnos el suyo, la comunidad de Vion está abierta."
    }
  },
  "en": {
    "corto": "Blender 3D",
    "titulo": "3D videos with Blender and Claude (no Blender skills needed)",
    "tituloSeo": "Free course: 3D videos with Blender and Claude | Vion",
    "descripcion": "A free Vion course: a 3D scene from one sentence, animated and rendered to video with Blender and Claude. In production.",
    "paraQuien": "Creators, studios and builders who want 3D scenes on video without learning Blender in depth.",
    "seLleva": "A 3D scene made from text, with 3 or 4 animated shots, rendered and cut into one video, plus the kit to make the next ones.",
    "herramientas": "Blender, ffmpeg and Poly Haven and Polyfork models (free), and Claude Code (paid Anthropic plan, from USD 20 a month); the optional local AI is free but needs a 16 GB GPU.",
    "lecciones": [
      "Setup: Blender, Claude Code and (optionally) the MCP",
      "Blender through code: Claude writes, Blender draws",
      "A scene from one sentence",
      "Camera and shots",
      "Light and materials without the pain",
      "Rendering on your GPU without overheating it",
      "Editing shot by shot",
      "From draft to video (with AI on top, if you want)"
    ]
  }
};
