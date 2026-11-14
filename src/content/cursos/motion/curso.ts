// B1 · Motion design con Claude: la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción del final, desde el
// storyboard (docs/planes/cursos/B1-motion.md de la aldea, 2026-11-10). Las lecciones están en lecciones.ts.
import type { CursoTexto } from '../../tipos';

export const curso: CursoTexto = {
  "es": {
    "corto": "Motion",
    "titulo": "Motion design con Claude",
    "subtitulo": "Motion design sin After Effects",
    "tituloSeo": "Curso gratis: motion design con Claude | Vion",
    "descripcion": "Curso gratis de Vion: animaciones propias en MP4 pidiéndolas en palabras a Claude, con su marca, sin After Effects.",
    "paraQuien": "Creadores, agencias chicas y dueños de negocio que no usan After Effects y quieren animaciones propias para reels, YouTube o anuncios.",
    "seLleva": "Tres animaciones propias en MP4 con su marca (un título de 6 s, un explicador con pasos de 30 a 45 s y una tarjeta de oferta de 8 s), su prompt de estilo `ESTILO.md`, una skill `mi-motion` para Claude Code y una plantilla de Remotion que repite la tarjeta con otros datos.",
    "herramientas": "Claude Code (pide un plan pago de Claude, desde USD 20 al mes); Node.js, ffmpeg, Chrome y GSAP, gratis; Remotion, gratis hasta 3 empleados.",
    "explica": "**Motion design** es el diseño de cosas que se mueven en una pantalla: un título que entra letra por letra, una tarjeta con una oferta, un video corto que explica cómo funciona un servicio. Hasta hace poco se hacía con programas caros y difíciles, como After Effects.\n\nEn este curso usted no anima a mano. Le **pide la animación en palabras** a Claude Code (el asistente de Claude que trabaja en su computadora) y él escribe un archivo que se mueve en el navegador. Después usted la corrige hablando («más lento», «que esta palabra entre después») y, al final, la convierte en un video **MP4** que puede subir a Instagram, YouTube o un anuncio.\n\n### Al terminar el curso va a poder\n\n- pedirle a Claude un título animado con su nombre y corregirlo sin tocar código;\n- escribir una guía de su marca (colores, letra y forma de moverse) para que todo salga con su estilo;\n- pasar cualquier animación a MP4, horizontal o vertical;\n- repetir una misma tarjeta con otros datos (producto, precio) usando Remotion;\n- sumar una voz y sonidos, y armar un explicador corto de su producto o servicio.\n\n### Lo que necesita\n\nUna computadora con Windows, Mac o Linux, internet y una cuenta de Claude con plan pago (Pro, desde USD 20 al mes), porque Claude Code no viene en el plan gratis. Los demás programas son gratis. No hace falta saber programar ni haber usado nunca un programa de animación: los comandos se copian de cada lámina.",
    "ficha": {
      "requisitos": "Una computadora con Windows 10 (1809) o más nuevo, macOS 13 o más nuevo, o Ubuntu 20.04 o más nuevo; 8 GB de RAM recomendados, porque el paso a video abre un Chrome invisible; internet; y saber copiar y pegar un comando en una terminal (se explica en la lección 0). No hace falta programar ni saber After Effects.",
      "duracion": "8 lecciones, 60 láminas con videos cortos, más el tráiler.",
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
      "texto": "| Qué | Windows (PowerShell) | Mac (Terminal) | Cómo se comprueba |\n| Cuenta de Claude, plan Pro o superior | claude.com/pricing | Igual | Al entrar a Claude Code con `claude` |\n| Git para Windows | git-scm.com/downloads/win, todo «Siguiente» | No hace falta | `git --version` |\n| Claude Code | `winget install Anthropic.ClaudeCode` | `brew install --cask claude-code` | En una terminal nueva: `claude --version` y `claude doctor` |\n| Node.js LTS | nodejs.org, o `winget install OpenJS.NodeJS.LTS` | nodejs.org, o `brew install node` | `node -v` |\n| ffmpeg | `winget install Gyan.FFmpeg` | `brew install ffmpeg` | `ffmpeg -version` |\n| Google Chrome | google.com/chrome | Igual | Abre |\n| La carpeta del curso | El kit, descomprimido en `Documentos\\motion-curso` | `~/motion-curso` | Adentro está `CLAUDE.md` |\n| Lo que usa el kit | `npm install` dentro de `motion-curso` | Igual | Termina con «added … packages» |\n| La skill bang-motion | En `C:\\Users\\<usted>\\.claude\\skills\\bang-motion` | En `~/.claude/skills/bang-motion` | En Claude Code, `/` muestra `bang-motion` y `mi-motion` |\n\nEn Linux, Claude Code se instala con `curl -fsSL https://claude.ai/install.sh | bash` y ffmpeg con `sudo apt install ffmpeg`. Después de instalar algo, cierre la terminal y ábrala de nuevo. Para entrar a Claude Code, escriba `claude` y elija la cuenta con suscripción: se abre el navegador para aceptar. Versiones con las que se hizo el curso (2026-11-14): Claude Code 2.1.325, Node v22.23.3 (sirve también la LTS de hoy, la v26.13.1), Puppeteer 25.16.0, Remotion 4.0.543 y GSAP 3.15.1. Los errores típicos están en la lámina 0.10."
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
        "licencia": "La del kit del curso.",
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
          "que": "El paso de HTML a MP4 (Puppeteer y ffmpeg), con las opciones `--fps` y `--audio`. `package.json` fija Puppeteer 25.16.0."
        },
        {
          "nombre": "prompts/titulo.md, explicador.md y oferta.md",
          "que": "Los pedidos del título, la tarjeta de oferta y el explicador, con huecos entre corchetes para sus datos."
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
    "descripcion": "A free Vion course: make your own on-brand MP4 animations by describing them to Claude, no After Effects needed.",
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
