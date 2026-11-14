// A3 · Crear sus propias skills de Claude: la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción del final, desde el
// storyboard (docs/planes/cursos/A3-skills.md de la aldea, 2026-11-10). Las lecciones están en lecciones.ts.
import type { CursoTexto } from '../../tipos';

export const curso: CursoTexto = {
  "es": {
    "corto": "Skills",
    "titulo": "Crear sus propias skills de Claude",
    "subtitulo": "Skills de Claude Code: SKILL.md paso a paso, en español",
    "tituloSeo": "Curso gratis: cree sus propias skills de Claude | Vion",
    "descripcion": "Curso gratis de Vion: escriba sus propias skills de Claude (SKILL.md) y revise las de terceros antes de instalarlas. En producción.",
    "paraQuien": "Quien ya usa Claude (el chat o Claude Code) y pega las mismas instrucciones una y otra vez.",
    "seLleva": "Dos skills propias funcionando (una de método y una con script), la lista de 12 preguntas para revisar skills ajenas, un script de huellas y su biblioteca de skills en Git, lista para compartir.",
    "herramientas": "Claude Code (pide un plan pago de Claude, desde USD 20 al mes) y claude.ai; Python y Git, gratis.",
    "ficha": {
      "requisitos": "Windows 10 (1809 o más nuevo) o macOS 13 o más nuevo; una cuenta de Claude con plan pago; haber usado Claude alguna vez. No hace falta programar: el script de la lección 5 lo escribe Claude Code.",
      "duracion": "7 lecciones, 55 láminas con 40 videos cortos, más el tráiler.",
      "costo": "El plan Pro de Claude (USD 20 al mes, o USD 17 al mes con pago anual) para Claude Code. Subir skills a claude.ai también anda en el plan gratis, con la ejecución de código activada. Python y Git son gratis."
    },
    "costos": [
      {
        "pieza": "Claude Pro",
        "costo": "USD 20 al mes; USD 17 al mes con pago anual (USD 200).",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "Plan gratis de Claude",
        "costo": "No incluye Claude Code. Las skills en claude.ai sí: «Las habilidades están disponibles para usuarios en planes Free, Pro, Max, Ultra, Team y Enterprise. Esta función requiere que la ejecución de código esté habilitada» (centro de ayuda de Anthropic, 2026-11-13).",
        "fuente": "[code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup); [Usar habilidades en Claude](https://support.claude.com/es/articles/12512180-usar-habilidades-en-claude)"
      },
      {
        "pieza": "Python y Git",
        "costo": "Gratis.",
        "fuente": "[python.org](https://www.python.org), [git-scm.com](https://git-scm.com)"
      },
      {
        "pieza": "Las skills de terceros del curso",
        "costo": "Gratis, cada una con su licencia (ver los repos recomendados).",
        "fuente": "GitHub"
      }
    ],
    "costosFecha": "2026-11-10",
    "puesta": {
      "leccion": 2,
      "texto": "| Qué | Windows (PowerShell) | Mac (Terminal) | Cómo se comprueba |\n| Cuenta de Claude con plan pago | claude.com/pricing (Pro desde USD 20 al mes) | Igual | Al entrar a Claude Code con `claude` |\n| Git | `winget install Git.Git` (o el instalador de git-scm.com) | `xcode-select --install` | `git --version` |\n| Python 3.12 o más nuevo | El instalador de python.org, con «Add python.exe to PATH» | El instalador de python.org | `py --version` en Windows, `python3 --version` en Mac |\n| Claude Code | `winget install Anthropic.ClaudeCode` | `brew install --cask claude-code` | `claude --version` y `claude doctor` |\n| La carpeta de skills | `mkdir $HOME\\.claude\\skills` | `mkdir -p ~/.claude/skills` | En `claude`: «¿Qué skills tenés disponibles?» |\n\nDespués de instalar algo, cierre y abra la terminal. Para entrar, escriba `claude` y elija la cuenta con suscripción: se abre el navegador para aceptar. Las cabeceras de sus skills se revisan con `claude plugin validate ~/.claude/skills`. La guía completa va en el kit (`PUESTA-A-PUNTO.md`) y los errores típicos están en la lámina 2.8."
    },
    "recursos": [
      {
        "nombre": "anthropics/skills",
        "url": "https://github.com/anthropics/skills",
        "que": "Las skills públicas de Anthropic: skill-creator, mcp-builder, docx, pdf, pptx, xlsx, frontend-design, brand-guidelines, webapp-testing y una plantilla para empezar.",
        "licencia": "Apache 2.0 según su README (también las de documentos); no hay archivo de licencia en la raíz: se lee la de cada carpeta.",
        "revision": "Fuente oficial. Comprobado el 2026-11-10 en el commit 2c5958ecac7cee2b583967a2c4981d0f4a75c579. En el curso se miran la plantilla y skill-creator; las de documentos, como ejemplo de skill grande con scripts.",
        "lecciones": "1, 4, 5"
      },
      {
        "nombre": "anthropics/claude-plugins-official (skill-creator)",
        "url": "https://github.com/anthropics/claude-plugins-official",
        "que": "El directorio oficial de plugins; incluye skill-creator, que prueba una skill con y sin ella y ajusta la descripción.",
        "licencia": "Apache-2.0",
        "revision": "Oficial; comprobado el 2026-11-10 en el commit dceb15d50832e6adf380bedc26dde03d251324b9. Se instala con `/plugin install skill-creator@claude-plugins-official`.",
        "lecciones": "7"
      },
      {
        "nombre": "Especificación Agent Skills",
        "url": "https://agentskills.io/specification",
        "que": "El estándar abierto del SKILL.md.",
        "licencia": "Documentación",
        "revision": "Documentación de referencia, leída el 2026-11-10.",
        "lecciones": "2, 7"
      },
      {
        "nombre": "content-principles",
        "url": "https://github.com/aiwithremy/content-principles",
        "que": "La psicología del video corto, escrita como método y no como plantilla.",
        "licencia": "Sin licencia: se puede leer y usar, no se reparte (por eso no va en el kit).",
        "revision": "Revisada por Vion y fijada al commit 18f96703c98763b9c3bd647a46f2e031bda4a29d: un SKILL.md de texto. Su README proponía instalarla pegando el enlace en Claude Code; no lo hicimos.",
        "lecciones": "3, 6"
      },
      {
        "nombre": "bang-motion",
        "url": "https://github.com/bangtutorial/bang-motion",
        "que": "Un método de motion design con sus leyes «anti-PPT», escrito en indonesio.",
        "licencia": "MIT",
        "revision": "Revisada por Vion y fijada al commit c1aa65e921c970d858705fcb4a53a8294d1a4131: usamos las guías; sus scripts y el puente a After Effects, no.",
        "lecciones": "3"
      },
      {
        "nombre": "instagram-agent",
        "url": "https://github.com/Jakeschincariol/instagram-agent-skill",
        "que": "13 skills `/ig-*` para Instagram: reels con 26 fórmulas de gancho, captions, carruseles, plan semanal y un «humanizador».",
        "licencia": "MIT",
        "revision": "Revisada por Vion y fijada al commit d03c56bb598be770c60b201f94237e5d1a4268a6: sin internet, 6 scripts de Python de biblioteca estándar sobre texto local. `ig-viral` pedía manejar el navegador con la sesión de Instagram: lo cambiamos a «pegar» y guardamos el original aparte.",
        "lecciones": "5, 6"
      },
      {
        "nombre": "impeccable",
        "url": "https://github.com/pbakaus/impeccable",
        "que": "24 comandos de diseño web (critique, audit, polish…).",
        "licencia": "Apache-2.0",
        "revision": "Revisada por Vion y fijada al commit 613fbf88e0ef08709eaf238653285f430250c0ea (v4.8.1). Su lanzador bajaba un binario de GitHub la primera vez: no lo copiamos y usamos el modo «sin lanzador».",
        "lecciones": "5, 6"
      },
      {
        "nombre": "taste-skill",
        "url": "https://github.com/Leonxlnx/taste-skill",
        "que": "Dirección de arte web, contra lo que parece «hecho por IA».",
        "licencia": "MIT",
        "revision": "Revisada por Vion y fijada al commit f6b76575f949707b4e3c37cd86cb44b0b98643e8 (2.5.1), sin sus scripts; le sacamos el hook de la cabecera que corría un script al terminar.",
        "lecciones": "6"
      },
      {
        "nombre": "awwwards (/awwwards y /jury)",
        "url": "https://github.com/juliobsz/skills",
        "que": "Sitios nivel premio y un jurado que los puntúa.",
        "licencia": "MIT",
        "revision": "Revisada por Vion y fijada al commit add880bd6ec9f5592a1482846fc0dd282c9161bc. Usa internet (las páginas que mira, fuentes y axe-core con hash SRI) y corre Node: la cambiamos para que no haga `npx playwright install`. SkillSpector la marcó «crítica» por heurísticas y la lectura a mano no encontró nada real.",
        "lecciones": "5, 6"
      },
      {
        "nombre": "claude-ads",
        "url": "https://github.com/AgriciDaniel/claude-ads",
        "que": "Auditoría de anuncios en 12 plataformas.",
        "licencia": "MIT",
        "revision": "Revisada por Vion y fijada al commit fc3908e786c318776df89a3a098333da377364be. Usamos solo los textos: sin núcleo de Python, instaladores ni conectores; las skills que lanzan campañas no se copiaron (nunca cambia una cuenta).",
        "lecciones": "6"
      },
      {
        "nombre": "minimalist-ui (open-design)",
        "url": "https://github.com/nexu-io/open-design",
        "que": "Dirección de arte minimalista editorial.",
        "licencia": "MIT",
        "revision": "Revisada por Vion y fijada al commit 5a0c47777975ddb91d09c1c16b423a3ef74bf572: un SKILL.md de texto, 0 alertas de SkillSpector. El resto del repo (con un `curl | sh` en su README) no se usa.",
        "lecciones": "3"
      },
      {
        "nombre": "typesafe",
        "url": "https://github.com/typesafe-ai/skills",
        "que": "Una guía de API que remite a la documentación de docs.typesafe.ai.",
        "licencia": "MIT",
        "revision": "Revisada por Vion y fijada al commit 65a39f393687675ce170e6094757de20370365b9: un SKILL.md que pide leer docs.typesafe.ai, que se lee como dato; no usamos su marketplace ni `npx`.",
        "lecciones": "6"
      },
      {
        "nombre": "NVIDIA/SkillSpector",
        "url": "https://github.com/NVIDIA/SkillSpector",
        "que": "Escáner de seguridad de skills: busca patrones maliciosos y vulnerabilidades.",
        "licencia": "Apache-2.0",
        "revision": "Lo usamos fijado al commit d501c0d5035c2ed6385740a384d942bb05651fda (revisado: no ejecuta lo que escanea; solo sale a la red para bajar repos, consultar vulnerabilidades o usar un LLM), con sus dependencias del uv.lock con huellas, en un contenedor sin red y con `--no-llm`, como ayuda: nunca reemplaza leer.",
        "lecciones": "6"
      },
      {
        "nombre": "obra/superpowers",
        "url": "https://github.com/obra/superpowers",
        "que": "Un marco de skills para desarrollo de software (método de trabajo).",
        "licencia": "MIT",
        "revision": "No lo revisamos: se menciona; antes de usarlo, páselo por la lección 6.",
        "lecciones": "7 (mención)"
      },
      {
        "nombre": "trailofbits/skills",
        "url": "https://github.com/trailofbits/skills",
        "que": "Skills de una empresa de seguridad (auditoría, vulnerabilidades).",
        "licencia": "CC-BY-SA-4.0: lo que se comparta derivado de ellas va con la misma licencia.",
        "revision": "No lo revisamos: se menciona.",
        "lecciones": "6 (mención)"
      },
      {
        "nombre": "ComposioHQ/awesome-claude-skills",
        "url": "https://github.com/ComposioHQ/awesome-claude-skills",
        "que": "Una lista de skills de terceros.",
        "licencia": "Es una lista: cada skill tiene la suya.",
        "revision": "No la revisamos: sirve para ideas, y cada skill de ahí pasa por la lección 6.",
        "lecciones": "7 (con advertencia)"
      }
    ],
    "noRecomendamos": "Skills que rechazamos al revisarlas, con su motivo:\n\n- **Kevs-IOS-Agents:** automatiza teléfonos para interactuar en redes; choca con nuestra regla de que nada sale sin aprobación.\n- **VoiceStudio** ([github.com/debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)): AGPL-3.0, Electron y **baja código mientras se usa**.\n- **Craft Anything** ([github.com/storytold/craft-anything](https://github.com/storytold/craft-anything)): en alfa, corre Claude Code y 314 herramientas; «recrear el sitio de otro» roza el copiado.\n- **StykAnimate:** es para animar a mano y es GPL-3.0; no le aporta a un agente.\n- **Agent-Reach** (no la rechazamos, la recortamos): su SKILL.md pedía leer instrucciones de instalación y actualización desde URLs de GitHub que pueden cambiar, y su instalador corría pipx, npm y uv sin versiones. La instalamos a mano, fijada y sin su SKILL.md.\n\nEn general: no instale skills con un `curl … | sh` ni desde un «leé las instrucciones de esta URL», y no use nada que no esté fijado a un commit. Nuestra regla: leer antes de instalar y fijar la versión.",
    "kit": {
      "descripcion": "Todo lo del curso en una carpeta, escrito para el curso: las dos skills de ejemplo, la lista de revisión, el script de huellas y los pedidos de cada lección. Se publica con el curso.",
      "archivos": [
        {
          "nombre": "PUESTA-A-PUNTO.md",
          "que": "La guía de instalación completa (Claude Code, Python y Git) y la carpeta de skills, en Windows y Mac."
        },
        {
          "nombre": "plantilla-skill/SKILL.md",
          "que": "La cabecera mínima comentada, según el estándar abierto."
        },
        {
          "nombre": "propuesta-cliente/",
          "que": "La skill de la lección 4, con la panadería de ejemplo."
        },
        {
          "nombre": "informe-semanal/",
          "que": "La skill de la lección 5: SKILL.md, scripts/resumen.py, references/formato.md y assets/ventas-ejemplo.csv."
        },
        {
          "nombre": "LISTA-DE-REVISION.md",
          "que": "Las 12 preguntas de la lección 6, cada una con qué buscar y su ejemplo real."
        },
        {
          "nombre": "huellas.py",
          "que": "Anota y verifica el sha256 de cada archivo de una skill en catalogo.json; solo biblioteca estándar de Python."
        },
        {
          "nombre": "catalogo-ejemplo.json",
          "que": "Una entrada de ejemplo con origen, commit, licencia, revisión y huellas."
        },
        {
          "nombre": "PEDIDOS.md",
          "que": "Los pedidos a Claude de las lecciones 4, 5 y 6."
        }
      ]
    },
    "accion": {
      "titulo": "Escriba la próxima skill usted",
      "texto": "Busque la instrucción que más le repite a Claude y conviértala en una skill con lo de la lección 3. Antes de instalar una ajena, pásela por las 12 preguntas. Si quiere skills ya revisadas y los métodos que usamos en Vion, súmese a la comunidad de skills."
    }
  },
  "en": {
    "corto": "Skills",
    "titulo": "Build your own Claude skills",
    "subtitulo": "Claude Code skills: SKILL.md step by step",
    "tituloSeo": "Free course: build your own Claude skills | Vion",
    "descripcion": "A free Vion course: write your own Claude skills (SKILL.md) and review third-party skills before you install them. In production.",
    "paraQuien": "Anyone who already uses Claude (the chat or Claude Code) and keeps pasting the same instructions.",
    "seLleva": "Two working skills of your own (one method, one with a script), a 12-question checklist for third-party skills, a hashing script, and your skill library in Git, ready to share.",
    "herramientas": "Claude Code (requires a paid Claude plan, from USD 20 a month) and claude.ai; Python and Git are free.",
    "lecciones": [
      "What a skill is (and is not)",
      "Setup: where skills live",
      "Write a method, not a template",
      "Your first skill",
      "Skills with scripts and supporting files",
      "Reviewing someone else’s skill before installing it",
      "Sharing and versioning your skill library"
    ]
  }
};
