// A2 · Su agentic OS: la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción del final, desde el
// storyboard (docs/planes/cursos/A2-agentic-os.md de la aldea, 2026-11-10). Las lecciones están en lecciones.ts.
import type { CursoTexto } from '../../tipos';

export const curso: CursoTexto = {
  "es": {
    "corto": "Agentic OS",
    "titulo": "Su agentic OS: un equipo de agentes que trabaja para usted",
    "subtitulo": "Agentic OS con Claude Code, paso a paso y en español",
    "tituloSeo": "Curso gratis: su agentic OS con Claude Code | Vion",
    "descripcion": "Curso gratis de Vion: arme en Claude Code un equipo de agentes con cola de aprobación, tope de gasto, memoria y avisos en Telegram. En producción.",
    "paraQuien": "Dueños de pyme, independientes y equipos chicos que ya usan Claude (el chat) y quieren que trabaje solo, sin perder el control.",
    "seLleva": "Su propio sistema en Claude Code, en su compu: 3 agentes con papel y reglas, un orquestador que entiende pedidos en castellano, una cola de aprobación (nada sale sin su «sí»), un tope de gasto con freno, memoria en archivos que usted lee y edita, y un bot de Telegram que le avisa y le deja aprobar desde el teléfono. Todo con la plantilla abierta del curso, que puede cambiar a su negocio.",
    "herramientas": "Claude Code con un plan pago de Claude (Pro, USD 20 al mes); Python, Git, SQLite y Telegram, gratis.",
    "ficha": {
      "requisitos": "Una compu con Windows 10 (1809 o más nuevo) o macOS 13 o más nuevo y 4 GB de RAM; una cuenta de Claude con plan pago; Telegram en el celular; ganas de abrir una terminal (se explica desde cero en la lección 2). No hace falta saber programar: el código lo escribe Claude Code con los pedidos del kit.",
      "duracion": "8 lecciones en 63 láminas, con 47 videos cortos (unos 18 min de video en total); unas 2 h haciendo, de las que la puesta a punto lleva unos 20 min.",
      "costo": "El plan Pro de Claude, USD 20 al mes (o USD 17 al mes pagando el año: USD 200), porque el plan gratis no incluye Claude Code; Python, Git, SQLite y Telegram son gratis."
    },
    "costos": [
      {
        "pieza": "Claude Pro (el mínimo para Claude Code)",
        "costo": "USD 20 al mes; USD 17 al mes con pago anual (USD 200 por adelantado)",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "Claude Max (si usa el equipo todo el día)",
        "costo": "USD 100 al mes (5 veces el uso de Pro)",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "Claude Ultra",
        "costo": "USD 200 al mes; no hace falta para el curso",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "Plan gratis de Claude",
        "costo": "No sirve: «The free claude.ai plan does not include Claude Code access»",
        "fuente": "[code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup)"
      },
      {
        "pieza": "Python, Git, SQLite",
        "costo": "Gratis (código abierto)",
        "fuente": "[python.org](https://www.python.org), [git-scm.com](https://git-scm.com), [sqlite.org](https://sqlite.org)"
      },
      {
        "pieza": "Bot de Telegram",
        "costo": "Gratis",
        "fuente": "[core.telegram.org/bots](https://core.telegram.org/bots)"
      },
      {
        "pieza": "Plantilla del curso",
        "costo": "Gratis, con licencia abierta {{licencia de la plantilla}}",
        "fuente": "Vion"
      }
    ],
    "costosFecha": "2026-11-10",
    "puesta": {
      "leccion": 2,
      "texto": "Todo se instala en la lección 2, sin permisos de administrador. Versiones comprobadas el 10/11/2026: Claude Code 2.1.321, Python 3.15.2 o 3.14.10 (sirve desde 3.12), Git 2.56.0. SQLite viene dentro de Python y Node.js no hace falta.\n\n| Paso | Windows (PowerShell) | Mac (Terminal) |\n| Git | `winget install Git.Git` | `xcode-select --install` |\n| Python | Instalador de python.org con «Add python.exe to PATH» | Instalador de python.org y, al terminar, «Install Certificates.command» |\n| Claude Code | `winget install Anthropic.ClaudeCode` (no se actualiza solo) | `brew install --cask claude-code` (no se actualiza solo) |\n| Comprobar | `git --version`, `py --version`, `claude --version`, `claude doctor` | `git --version`, `python3 --version`, `claude --version`, `claude doctor` |\n| Entrar | `claude` → «Claude account with subscription» → aceptar en el navegador | Igual |\n| La plantilla | `git clone`, `copy .env.ejemplo .env`, `py equipo.py iniciar` | `git clone`, `cp .env.ejemplo .env`, `python3 equipo.py iniciar` |\n\nEn Linux (Ubuntu o Debian): `sudo apt install git python3`, y Claude Code por el repositorio apt firmado de Anthropic (la huella está en [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup)).\n\n**Cómo se comprueba que anda:** `claude doctor` sin errores; `equipo.py estado` todo en verde (menos Telegram, hasta la lección 8); y `equipo.py pedir \"Decime hola en una línea\"` deja un borrador en la cola en menos de un minuto. El token del bot va en `.env`, que nunca va a Git y que los agentes no pueden leer."
    },
    "recursos": [
      {
        "nombre": "Documentación de Claude Code",
        "url": "https://code.claude.com/docs/en/setup",
        "que": "Instalar Claude Code, subagentes (`.claude/agents/`), skills, permisos y las opciones que usa la plantilla: `-p`, `--agent`, `--json-schema` y `--max-budget-usd`.",
        "licencia": "Producto de Anthropic",
        "revision": "Fuente oficial. En el curso se instala por winget o Homebrew, con una versión que no cambia sola: nuestra regla es leer antes de instalar y fijar la versión.",
        "lecciones": "2, 3, 5, 7"
      },
      {
        "nombre": "Telegram Bot API",
        "url": "https://core.telegram.org/bots/api",
        "que": "Lo que usa el bot del curso: `getUpdates`, `sendMessage`, botones (`inline_keyboard`) y `answerCallbackQuery`.",
        "licencia": "API pública de Telegram",
        "revision": "Se llama por https con la biblioteca estándar de Python, sin librerías de terceros.",
        "lecciones": "8"
      },
      {
        "nombre": "Plantilla «Equipo base» de Vion",
        "que": "La carpeta que se arma en el curso: tres agentes, el programa `equipo.py`, la base SQLite, la memoria y el bot. Se publica con el curso.",
        "licencia": "Abierta {{licencia de la plantilla}}",
        "revision": "La hace Vion para el curso, desde cero; sin dependencias (solo la biblioteca estándar de Python).",
        "lecciones": "2 a 8"
      },
      {
        "nombre": "anthropics/claude-plugins-official",
        "url": "https://github.com/anthropics/claude-plugins-official",
        "que": "El directorio oficial de plugins de Claude Code (incluye `skill-creator`), para seguir después del curso.",
        "licencia": "Apache-2.0",
        "revision": "Oficial de Anthropic; lo miramos en el commit `dceb15d` del 10/11/2026. Se nombra para seguir: en el curso no se instala.",
        "lecciones": "Después del curso"
      }
    ],
    "noRecomendamos": "- **n8n u otras plataformas de flujos:** sirven, pero este curso es con Claude Code.\n- **Cualquier «agente que lo hace todo solo»** que publique, conteste o pague sin su aprobación.",
    "kit": {
      "descripcion": "Todo lo que hace falta para armar el equipo, con la guía de instalación y los pedidos para Claude Code.",
      "archivos": [
        {
          "nombre": "PUESTA-A-PUNTO.md",
          "que": "La guía de instalación de la lección 2 para Windows y Mac, con capturas."
        },
        {
          "nombre": "mi-equipo/ (ZIP y repositorio)",
          "que": "La plantilla «Equipo base» terminada y probada en Windows y Mac."
        },
        {
          "nombre": "PEDIDOS.md",
          "que": "Un pedido para Claude Code por lección, para armar la plantilla desde una carpeta vacía (o compararla con la que se baja hecha)."
        },
        {
          "nombre": "CHECKLIST-SEGURIDAD.md",
          "que": "Las 10 preguntas antes de darle algo nuevo a un agente."
        },
        {
          "nombre": "NEGOCIO-ejemplo.md",
          "que": "La memoria de la panadería ficticia del curso, como ejemplo."
        }
      ]
    },
    "accion": {
      "titulo": "Empiece con un pedido por día",
      "texto": "Use su equipo con un pedido por día y corrija con notas: así aprende. Y si quiere uno conectado a su correo, su web y sus clientes, lo armamos con usted."
    }
  },
  "en": {
    "corto": "Agentic OS",
    "titulo": "Build your agentic OS: a team of AI agents that works for you",
    "subtitulo": "Agentic OS with Claude Code, step by step",
    "tituloSeo": "Free course: build your agentic OS | Vion",
    "descripcion": "A free Vion course: build a team of agents in Claude Code with an approval queue, a spending cap, memory and Telegram alerts. In production.",
    "paraQuien": "Small business owners, freelancers and small teams who already use Claude chat and want it to work on its own without losing control.",
    "seLleva": "Your own system in Claude Code on your computer: three agents with a role and rules, an orchestrator that understands plain-language requests, an approval queue, a spending cap with a brake, memory in files you can read, and a Telegram bot to approve from your phone.",
    "herramientas": "Claude Code with a paid Claude plan (Pro, USD 20 a month); Python, Git, SQLite and Telegram are free.",
    "lecciones": [
      "What an agentic OS is (and why it is not a chatbot)",
      "Setup on Windows and Mac",
      "One agent: a role, a name and its rules",
      "The queue: nothing goes out without you",
      "Spending caps so the bill never surprises you",
      "Memory, and learning from your yes and your no",
      "The orchestrator: you ask in plain words, it decides",
      "Alerts on your phone (Telegram)"
    ]
  }
};
