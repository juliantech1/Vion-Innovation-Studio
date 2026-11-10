// A0 · Claude desde cero: la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción del final, desde el
// storyboard (docs/planes/cursos/A0-claude-basico.md de la aldea, 2026-11-10). Las lecciones están en lecciones.ts.
import type { CursoTexto } from '../../tipos';

export const curso: CursoTexto = {
  "es": {
    "corto": "Claude básico",
    "titulo": "Claude desde cero: Chat, Cowork y Code, y cuál usar para qué",
    "subtitulo": "Curso de Claude para principiantes · Claude Code en la terminal paso a paso",
    "tituloSeo": "Curso gratis: Claude desde cero, Chat, Cowork y Code",
    "descripcion": "Curso gratis de Vion: qué hacen Chat, Cowork y Code de Claude, cuál usar para qué, cuánto cuesta y cómo instalar Claude Code. En producción.",
    "paraQuien": "Alguien que nunca usó Claude (o solo lo probó como un buscador): dueños de negocio, profesionales, estudiantes. No hace falta saber programar ni haber abierto una terminal.",
    "seLleva": "Sabe qué es Chat, Cowork y Code, cuál usar para cada cosa y cuánto cuesta; hizo una tarea real con cada uno (un PDF analizado con su correo, un Excel armado con sus facturas y una página web); tiene Claude Code instalado y sabe abrirlo en la terminal; y sabe qué curso de Vion sigue.",
    "herramientas": "Claude: Chat con el plan gratis; Cowork y Claude Code piden un plan pago (Pro, USD 20 al mes).",
    "ficha": {
      "requisitos": "Una computadora con Windows 10 (versión 1809 o más nueva) o macOS 13 o más nuevo, 4 GB de RAM, internet y un correo para la cuenta. Para las lecciones 3 a 5, un plan pago de Claude (Pro o más). Estar en un país donde Claude está disponible ([anthropic.com/supported-countries](https://www.anthropic.com/supported-countries)).",
      "duracion": "6 lecciones en 49 láminas, con 34 videos cortos; unos 30 min de recorrido, más el tiempo de hacer los ejercicios (unos 45 min).",
      "costo": "Ver el curso es gratis y la lección 2 se hace con el plan Free de Claude; las lecciones 3, 4 y 5 piden un plan pago, y el más barato es Pro: USD 20 al mes (o USD 17 al mes pagando el año), sin impuestos."
    },
    "costos": [
      {
        "pieza": "Plan Free",
        "costo": "USD 0. Chat sí (web, escritorio y celular); Cowork y Claude Code no. «Uso limitado» que se renueva cada 5 h y cada semana; busca en la web, crea archivos, tiene memoria y hasta 5 proyectos",
        "fuente": "[claude.com/pricing](https://claude.com/pricing) y [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup)"
      },
      {
        "pieza": "Plan Pro",
        "costo": "USD 20 al mes, o USD 17 al mes pagando el año (USD 200). Chat, Cowork y Claude Code. Es el que alcanza para este curso; Cowork «gasta el límite más rápido que el chat»",
        "fuente": "[claude.com/pricing](https://claude.com/pricing) y [claude.com/product/cowork](https://claude.com/product/cowork)"
      },
      {
        "pieza": "Plan Max",
        "costo": "USD 100 al mes. Chat, Cowork y Claude Code, con 5 veces el uso de Pro",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "Plan Ultra",
        "costo": "USD 200 al mes. Chat, Cowork y Claude Code, con 10 veces el uso de Pro; sin el límite de 5 h (cuentas verificadas)",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "Plan Team",
        "costo": "USD 25 por persona al mes (USD 20 pagando el año), de 2 a 150 personas. Chat, Cowork y Claude Code; asiento premium de USD 125 (USD 100 anual)",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "Las apps de Claude (escritorio y celular)",
        "costo": "Gratis: lo que cuesta es el plan",
        "fuente": "[claude.com/download](https://claude.com/download)"
      }
    ],
    "costosFecha": "2026-11-10",
    "puesta": {
      "leccion": 4,
      "texto": "La cuenta y la app se arman en la lección 2, Cowork en la 3 y la terminal con Claude Code en la 4. Todo junto:\n\n1. **La cuenta:** en **claude.ai**, «Continuar con Google» o su correo. Queda en el plan Free; para pasar a Pro, el menú con su nombre → Configuración → Facturación (o «Mejorar plan»), con tarjeta.\n2. **Las apps** (opcional para Chat; necesaria para Cowork con carpetas de su compu): Claude para escritorio en Windows (x64 o ARM64, también en la Microsoft Store) y Mac desde [claude.com/download](https://claude.com/download); en Linux, en beta para Ubuntu y Debian ([code.claude.com/docs/en/desktop-linux](https://code.claude.com/docs/en/desktop-linux)); en el celular, la app «Claude» de Anthropic.\n3. **Cowork** (plan pago): en la caja de mensaje elija Cowork y conecte una carpeta de prueba. Si no ve la opción, ya tiene la versión nueva: pídaselo directo.\n4. **Claude Code en la terminal** (plan pago), con la guía oficial ([code.claude.com/docs/en/terminal-guide](https://code.claude.com/docs/en/terminal-guide)):\n\n| Paso | Windows | Mac |\n| Abrir la terminal | Win + X → «Terminal» o «Windows PowerShell» (la línea empieza con PS) | Cmd + Espacio, «Terminal», Enter |\n| Instalar | El comando de PowerShell de la lámina 4.4 (hay otro para CMD) | El comando de la lámina 4.9 |\n| Esperar | No muestra avance; termina con «Claude Code successfully installed!» | Igual |\n| Comprobar | Una terminal **nueva** y `claude --version`: sale un número y «(Claude Code)» | Igual |\n| Primera carpeta y abrir | `mkdir mi-primer-proyecto`, `cd mi-primer-proyecto` y `claude` | Igual |\n| Iniciar sesión | La primera vez se abre el navegador: entre con su cuenta (Pro o más) | Igual |\n| Ver la carpeta | `explorer .` | `open .` |\n\nGit para Windows es opcional: sin él, Claude Code usa PowerShell y anda igual. Si algo falla, la tabla de errores está en la lámina 4.11 y en la chuleta del kit."
    },
    "recursos": [
      {
        "nombre": "Guía de la terminal para principiantes (Claude Code)",
        "url": "https://code.claude.com/docs/en/terminal-guide",
        "que": "La guía oficial de Anthropic para abrir la terminal e instalar Claude Code desde cero, en inglés.",
        "licencia": "Documentación de Anthropic",
        "revision": "Oficial de Anthropic; no instala nada aparte de Claude Code.",
        "lecciones": "4"
      },
      {
        "nombre": "Claude Academy",
        "url": "https://anthropic.skilljar.com/",
        "que": "Los cursos de Anthropic: «Claude 101», «Introduction to Claude Cowork», «Claude Code 101» y «AI Fluency», en inglés.",
        "licencia": "No la indica",
        "revision": "Oficial de Anthropic. Piden una cuenta de Skilljar; la página no dice el precio.",
        "lecciones": "6"
      },
      {
        "nombre": "anthropics/skills",
        "url": "https://github.com/anthropics/skills",
        "que": "Las skills de ejemplo de Anthropic, entre ellas las que crean Word, PDF, PowerPoint y Excel.",
        "licencia": "Apache 2.0 para docx, pdf, pptx y xlsx (las demás, ver cada carpeta)",
        "revision": "Oficial de Anthropic. En este curso solo se nombra, no se instala: instalar y revisar skills se ve en el curso A3.",
        "lecciones": "6"
      }
    ],
    "kit": {
      "descripcion": "Lo que hace falta para los ejercicios y las dos hojas para tener a mano después del curso. Todo lo ficticio es inventado: empresas, personas y facturas.",
      "archivos": [
        {
          "nombre": "chuleta-instalacion.pdf",
          "que": "Una hoja por sistema (Windows y Mac): abrir la terminal, el comando oficial, comprobar, la primera carpeta y la tabla de errores, con la fecha de la comprobación y el enlace oficial."
        },
        {
          "nombre": "cual-uso-para-que.pdf",
          "que": "La tabla «¿cuál uso para qué?» y la de qué curso de Vion seguir, en una hoja."
        },
        {
          "nombre": "cotizacion-remodelacion.pdf",
          "que": "Una cotización ficticia de 4 páginas para la lección 2; le faltan, a propósito, si el precio incluye impuestos y qué pasa si se atrasa la obra."
        },
        {
          "nombre": "descargas-de-prueba.zip",
          "que": "60 archivos ficticios desordenados para la lección 3, con 12 facturas en PDF de proveedores inventados (una escaneada borrosa a propósito)."
        },
        {
          "nombre": "fotos-obra.zip",
          "que": "20 fotos de una obra, con la fecha en los datos de cada foto, para la herramienta de la lección 5."
        },
        {
          "nombre": "pedidos-para-empezar.md",
          "que": "Los pedidos del curso para copiar y adaptar a su caso: tres para Chat, dos para Cowork y dos para Code."
        }
      ]
    },
    "accion": {
      "titulo": "Elija su siguiente curso",
      "texto": "Con la tabla de la lección 6, elija el curso que sigue según lo que quiera hacer. Si no sabe cuál, empiece por **A1 · Claude Code sin programar**. Y súmese a la comunidad de Vion: {{enlace de la comunidad}}."
    }
  },
  "en": {
    "corto": "Claude basics",
    "titulo": "Claude basics: Chat, Cowork and Code, and when to use each",
    "subtitulo": "Claude for beginners · Claude Code in the terminal, step by step",
    "tituloSeo": "Free course: Claude basics, Chat, Cowork and Code",
    "descripcion": "A free Vion course: what Claude's Chat, Cowork and Code do, when to use each, what they cost and how to install Claude Code. In production.",
    "paraQuien": "Anyone who has never used Claude (or only tried it like a search engine): business owners, professionals, students. No coding or terminal experience needed.",
    "seLleva": "You know what Chat, Cowork and Code are, which one to use for what and what each costs; you did a real task with each (a PDF reviewed with a reply email, a spreadsheet built from your invoices and a web page); Claude Code is installed and you can open it in the terminal.",
    "herramientas": "Claude: Chat on the free plan; Cowork and Claude Code need a paid plan (Pro, USD 20 a month).",
    "lecciones": [
      "One Claude, three ways to work",
      "Chat: ask it, upload a PDF, have it write",
      "Cowork: let it do the work with your files",
      "Code: open the terminal without fear and install Claude Code",
      "Code: your first web page and a tool you reuse",
      "Which one do I use for what?"
    ]
  }
};
