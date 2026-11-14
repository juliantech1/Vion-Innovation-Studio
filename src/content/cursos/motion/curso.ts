// B1 · Motion design con Claude: la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción del final, desde el
// storyboard (docs/planes/cursos/B1-motion.md de la aldea, 2026-11-10). Las lecciones están en lecciones.ts.
import type { CursoTexto } from '../../tipos';

export const curso: CursoTexto = {
  "es": {
    "corto": "Motion",
    "titulo": "Motion design con Claude",
    "subtitulo": "Motion design sin After Effects",
    "tituloSeo": "Curso gratis: motion design con Claude | Vion",
    "descripcion": "Curso gratis de Vion: animaciones propias en MP4 pidiéndolas en palabras a Claude, con su marca, sin After Effects. En producción.",
    "paraQuien": "Creadores, agencias chicas y dueños de negocio que no usan After Effects y quieren animaciones propias para reels, YouTube o anuncios.",
    "seLleva": "Tres animaciones propias en MP4 con su marca (un título de 6 s, un explicador con pasos de 30 a 45 s y una tarjeta de oferta de 8 s), su prompt de estilo `ESTILO.md`, una skill `mi-motion` para Claude Code y una plantilla de Remotion que repite la tarjeta con otros datos.",
    "herramientas": "Claude Code (pide un plan pago de Claude, desde USD 20 al mes); Node.js, ffmpeg, Chrome y GSAP, gratis; Remotion, gratis hasta 3 empleados.",
    "ficha": {
      "requisitos": "Una computadora con Windows 10 (1809) o más nuevo, macOS 13 o más nuevo, o Ubuntu 20.04 o más nuevo; 4 GB de RAM como mínimo para Claude Code y 8 GB recomendados, porque el paso a video abre Chrome; internet; saber copiar y pegar en una terminal (se enseña en la lección 0). No hace falta programar ni saber After Effects.",
      "duracion": "8 lecciones, 60 láminas con 44 videos cortos (unos 18 min de video), unos 45 min de lectura, más el tiempo de práctica (una tarde).",
      "costo": "Claude Code pide un plan pago de Claude (desde USD 20 al mes); lo demás es gratis para una persona o una empresa de hasta 3 empleados, y arriba de eso Remotion cobra."
    },
    "costos": [
      {
        "pieza": "Claude Code",
        "costo": "Pago. Pide Pro (USD 20 al mes, o USD 17 al mes pagando el año: USD 200), Max (USD 100) o Ultra (USD 200). El plan gratis de claude.ai no incluye Claude Code. Con Pro alcanza para el curso; los límites de uso del plan pueden obligar a esperar entre pedidos largos.",
        "fuente": "[claude.com/pricing](https://claude.com/pricing), [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup)"
      },
      {
        "pieza": "Node.js, ffmpeg, Chrome, Git para Windows",
        "costo": "Gratis.",
        "fuente": "Sus sitios oficiales"
      },
      {
        "pieza": "GSAP (la biblioteca de animación)",
        "costo": "Gratis también para uso comercial, con todos sus plugins, bajo la «Standard No Charge License» de Webflow. Una restricción: no usarla en herramientas visuales que compitan con el constructor de animaciones de Webflow.",
        "fuente": "[gsap.com/licensing](https://gsap.com/licensing/)"
      },
      {
        "pieza": "Remotion",
        "costo": "Gratis para personas, empresas con hasta 3 empleados, organizaciones sin fines de lucro y para evaluarlo. Si no entra ahí: Company License, USD 25 por puesto al mes (para quien crea a mano) o USD 0,01 por render con un mínimo de USD 100 al mes (para quien automatiza).",
        "fuente": "[LICENSE.md](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md), [remotion.pro/license](https://www.remotion.pro/license)"
      },
      {
        "pieza": "Fuentes tipográficas",
        "costo": "Gratis si son de Google Fonts (licencia OFL); otra fuente, según su licencia.",
        "fuente": "[fonts.google.com](https://fonts.google.com)"
      },
      {
        "pieza": "Música",
        "costo": "No la damos. La suya tiene que ser propia o con una licencia que permita su uso; los sonidos de la lección 6 se hacen por código y no tienen derechos de terceros."
      }
    ],
    "costosFecha": "2026-11-10",
    "puesta": {
      "leccion": 0,
      "texto": "| Qué | Windows | Mac | Linux (Ubuntu o Debian) | Cómo se comprueba |\n| Cuenta de Claude, plan Pro o superior | claude.com/pricing | Igual | Igual | Entrar a claude.ai y ver el plan en Ajustes |\n| Git para Windows | git-scm.com/downloads/win, todo «Siguiente» | No hace falta | No hace falta | `git --version` |\n| Claude Code | El instalador oficial en PowerShell (abajo), o `winget install Anthropic.ClaudeCode` | El instalador oficial en Terminal (abajo), o `brew install --cask claude-code` | El instalador oficial en Terminal (abajo) | En otra terminal: `claude --version` y `claude doctor` |\n| Node.js LTS (v26, v24 o v22) | nodejs.org, o `winget install OpenJS.NodeJS.LTS` | nodejs.org, o `brew install node` | nodejs.org o el gestor de su distribución | `node -v` y `npm -v` |\n| ffmpeg | `winget install Gyan.FFmpeg` | `brew install ffmpeg` | `sudo apt install ffmpeg` | `ffmpeg -version` |\n| Google Chrome | google.com/chrome | Igual | Igual | Abre |\n| La carpeta del curso | El kit, descomprimido en `Documentos\\motion-curso` | `~/motion-curso` | Igual | `cd motion-curso` y ver `CLAUDE.md` |\n| Las skills | `bang-motion` en `C:\\Users\\<usted>\\.claude\\skills\\` | En `~/.claude/skills/` | Igual | En Claude Code, `/` muestra `bang-motion` y `mi-motion` |\n| Las dependencias del kit | `npm install` dentro de `motion-curso` | Igual | Igual | `npm ls puppeteer` muestra la versión |\n\nEl instalador oficial de Claude Code: en Windows, en PowerShell, `irm https://claude.ai/install.ps1 | iex`; en Mac y Linux, en Terminal, `curl -fsSL https://claude.ai/install.sh | bash`. No muestra progreso: espere a que termine.\n\nPara entrar, escriba `claude` y siga el navegador. `bang-motion` se clona en una carpeta aparte, se fija al commit `c1aa65e921c970d858705fcb4a53a8294d1a4131` y se copia a su carpeta de skills; `mi-motion` ya viene en `motion-curso/.claude/skills/`. La prueba: pedirle a Claude Code una animación de 5 segundos de un círculo que cruza la pantalla y abrirla con doble clic. Versiones de referencia al 2026-11-10: Node v26.13.0, Remotion 4.0.542, GSAP 3.15.1; Claude Code {{versión con la que se grabó, se anota al grabar}}. Después de instalar algo, cierre y abra la terminal; los demás errores típicos están en la lámina 0.10."
    },
    "recursos": [
      {
        "nombre": "bang-motion",
        "url": "https://github.com/bangtutorial/bang-motion",
        "que": "Una skill de motion para el navegador (openers, tipografía cinética, explicadores) con sus leyes «anti-PPT». Las guías están en indonesio.",
        "licencia": "MIT",
        "revision": "Revisada el 2026-11-09 y fijada al commit c1aa65e921c970d858705fcb4a53a8294d1a4131. Las guías no ejecutan nada; sus scripts (`serve.py`, `snap.mjs`, `export-frames.mjs`) y el puente a After Effects no los usamos ni los revisamos. Los HTML de ejemplo cargan GSAP y fuentes de un CDN. Recomendamos clonarla y fijar el commit, no el plugin que se actualiza solo.",
        "lecciones": "0, 2, 7"
      },
      {
        "nombre": "Remotion",
        "url": "https://github.com/remotion-dev/remotion",
        "que": "Videos con React: componentes, props y render a MP4.",
        "licencia": "Remotion License: gratis hasta 3 empleados (ver lo que cuesta).",
        "revision": "Revisado para nuestro estudio en la versión 4.0.532: `npm audit` en 0, instalación sin scripts y Chrome fijo.",
        "lecciones": "4, 5, 6"
      },
      {
        "nombre": "remotion-dev/skills",
        "url": "https://github.com/remotion-dev/skills",
        "que": "13 skills oficiales de Remotion para Claude Code (remotion-best-practices, remotion-create, remotion-render, remotion-captions…). Se instalan con `npx remotion skills add` dentro del proyecto.",
        "licencia": "El repo no trae archivo de licencia propio (sale del monorepo de Remotion).",
        "revision": "Existe y es oficial, pero no lo revisamos. Son textos y no ejecutan nada por sí solos, pero el comando baja la última versión: lea los SKILL.md antes de usarlos.",
        "lecciones": "4"
      },
      {
        "nombre": "HyperFrames",
        "url": "https://github.com/heygen-com/hyperframes",
        "que": "De HTML, CSS y GSAP a MP4, pensado para agentes; trae skills para Claude Code.",
        "licencia": "Apache-2.0 (gratis para cualquier tamaño de empresa).",
        "revision": "No lo usamos en Vion ni lo revisamos: se menciona como alternativa a `a-mp4.mjs` para quien no quiere Remotion.",
        "lecciones": "3"
      },
      {
        "nombre": "lemo-opuscar",
        "url": "https://github.com/lemomo-ai/lemo-opuscar",
        "que": "66 recetas de estilo (`STYLE.md`: color, tipografía, movimiento, cámara, sonido y errores típicos) y una guía de dirección.",
        "licencia": "MIT (las películas de ejemplo son CC BY 4.0).",
        "revision": "Revisado el 2026-11-02, solo los textos; su `setup.sh` se actualiza solo desde la rama principal y no lo usamos.",
        "lecciones": "2, 5"
      },
      {
        "nombre": "GSAP",
        "url": "https://gsap.com",
        "que": "La biblioteca de animación que usan los HTML del curso.",
        "licencia": "Standard No Charge License (Webflow).",
        "revision": "Muy usada; en los HTML va con la versión fija (3.15.1) en lugar de «la última».",
        "lecciones": "1, 2, 3"
      },
      {
        "nombre": "mi-motion (la skill del curso)",
        "que": "Las reglas de Vion para pedir motion: las reglas `seek` y `DURATION`, el estilo de `ESTILO.md` y la lista anti-PPT en castellano. Viene en el kit.",
        "licencia": "La del kit: {{licencia del kit, por decidir}}.",
        "revision": "Escrita por nosotros, sin scripts.",
        "lecciones": "0, 5, 7"
      }
    ],
    "noRecomendamos": "- Instalar skills con un `curl … | sh` o desde un «leé las instrucciones de tal URL» sin mirar lo que hacen.\n- Plugins que se actualizan solos sin que usted vea el cambio: mejor clonar y fijar el commit.\n- Repartir material sin licencia: `content-principles` (una guía de retención que usamos) no tiene licencia en su repo, así que no va en el kit; tampoco las películas CC BY de lemo-opuscar.\n\nNuestra regla: leer antes de instalar y fijar la versión.",
    "kit": {
      "descripcion": "La carpeta `motion-curso` en un zip, escrita para el curso: las reglas del proyecto, el prompt de estilo, la skill, el script que pasa de HTML a MP4, los pedidos de cada lección y los ejemplos.",
      "archivos": [
        {
          "nombre": "LEAME.md",
          "que": "Qué trae el kit, el orden de las lecciones y los comandos de la lección 0."
        },
        {
          "nombre": "CLAUDE.md",
          "que": "Las reglas del proyecto para Claude Code: un HTML por animación, `DURATION` y `seek(t)`, tamaño fijo y el estilo."
        },
        {
          "nombre": "ESTILO.md",
          "que": "La plantilla del prompt de estilo, con un ejemplo lleno."
        },
        {
          "nombre": ".claude/skills/mi-motion/SKILL.md",
          "que": "La skill del curso."
        },
        {
          "nombre": "a-mp4.mjs y package.json",
          "que": "El paso de HTML a MP4 (Puppeteer y ffmpeg), con las opciones `--fps` y `--audio`."
        },
        {
          "nombre": "prompts/titulo.md, explicador.md y oferta.md",
          "que": "Los pedidos de las lecciones 1, 7 y 4, con huecos para sus datos."
        },
        {
          "nombre": "revision-anti-ppt.md",
          "que": "La lista de revisión de la lección 7, en castellano, con el crédito a bang-motion (MIT)."
        },
        {
          "nombre": "plantillas.md",
          "que": "Su catálogo de plantillas (lección 5): nombre, datos, para qué y ejemplo."
        },
        {
          "nombre": "ejemplos/",
          "que": "Los HTML y MP4 de ejemplo del curso (título, explicador y oferta), hechos con el kit."
        },
        {
          "nombre": "oferta-remotion/",
          "que": "La plantilla de Remotion de la lección 4 ya armada, con sus tres archivos de datos."
        }
      ]
    },
    "accion": {
      "titulo": "Haga el explicador de su negocio",
      "texto": "Con lo que aprendió, haga el explicador de cómo funciona su producto o su servicio: un tema, tres pasos y una acción al final, con su título y su tarjeta. Si quiere compartirlo o que le ayudemos con el suyo, la comunidad de Vion está abierta."
    }
  },
  "en": {
    "corto": "Motion",
    "titulo": "Motion design with Claude",
    "subtitulo": "Motion design without After Effects",
    "tituloSeo": "Free course: motion design with Claude | Vion",
    "descripcion": "A free Vion course: make your own on-brand MP4 animations by describing them to Claude, no After Effects needed. In production.",
    "paraQuien": "Creators, small agencies and business owners who do not use After Effects and want their own animations for reels, YouTube or ads.",
    "seLleva": "Three on-brand MP4 animations of your own (a title, a step-by-step explainer and an offer card), your style prompt, a `mi-motion` skill for Claude Code and a Remotion template.",
    "herramientas": "Claude Code (requires a paid Claude plan, from USD 20 a month); Node.js, ffmpeg, Chrome and GSAP are free; Remotion is free for up to 3 employees.",
    "lecciones": [
      "Setup: Claude Code, Node, ffmpeg and skills",
      "Ask for an animation, get code that moves",
      "The style prompt: your brand guide in words",
      "From HTML to MP4",
      "Remotion: when you want to repeat it",
      "Templates you can reuse",
      "Rhythm and sound",
      "A complete explainer"
    ]
  }
};
