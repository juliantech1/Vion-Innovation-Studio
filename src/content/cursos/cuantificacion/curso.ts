// C2 · Cuantificación y presupuestos: la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción del final, desde el
// storyboard (docs/planes/cursos/C2-cuantificacion.md de la aldea), reescrito para principiantes el 2026-11-14. Las lecciones están en lecciones.ts.
import type { CursoTexto } from '../../tipos';

export const curso: CursoTexto = {
  "es": {
    "corto": "Cuantificación",
    "titulo": "Cuantificación y presupuestos desde planos con IA",
    "subtitulo": "Cuantificación de obra con Claude: de DWG y PDF a Excel, con revisión profesional",
    "tituloSeo": "Curso gratis: cuantificación de obra con IA | Vion",
    "descripcion": "Curso gratis de Vion: saque cantidades de obra de planos DWG y PDF a Excel con Claude, arme su presupuesto con su propia base de precios y déjelo listo para que lo revise un profesional.",
    "paraQuien": "Presupuestistas, ingenieros de costos, constructoras pequeñas y dibujantes que hoy cuantifican a mano. Ayuda haber hecho el curso Claude + AutoCAD, o saber qué es una capa y un bloque en un dibujo de CAD. No hace falta programar.",
    "seLleva": "Un método escrito para medir (el criterio de su oficina y la regla de áreas), dos programas que sacan las cantidades de un DXF y de un PDF y las escriben en Excel, su base de precios con fuente y fecha en cada fila, un presupuesto que se niega a inventar precios y la hoja de revisión que firma un profesional. Todo practicado con una casa de ejemplo.",
    "herramientas": "Claude Code (pide un plan pago de Claude, desde USD 20 al mes); Python y sus bibliotecas ezdxf, pdfplumber y openpyxl, gratis; Excel o LibreOffice Calc. AutoCAD no hace falta.",
    "explica": "**Cuantificar** es sacar de un plano las cantidades de una obra: cuántas puertas y ventanas hay, cuántos metros cuadrados de piso, de pared o de cielo. Con esas cantidades y los precios de su oficina se arma el **presupuesto**. Hecho a mano lleva mucho trabajo y es fácil equivocarse.\n\nEn este curso esas cuentas las hace **Claude Code**, la versión de Claude (una inteligencia artificial) que trabaja en su computadora: lee los archivos del plano, escribe pequeños programas que miden y deja los resultados en Excel. Usted decide cómo se mide, revisa cada número y, al final, un profesional responsable firma. La IA mide; ningún precio sale de la IA.\n\n### Al terminar el curso va a poder\n\n- saber, antes de empezar, qué se puede medir con confianza según el formato del plano (DWG, DXF, PDF o escaneado);\n- escribir el criterio de medición de su oficina y sacar áreas de piso, muros netos de puertas y ventanas, cielos, repello y pintura;\n- sacar cantidades de un PDF calibrando la escala con dos medidas conocidas;\n- armar un presupuesto con su propia base de precios, que marca «FALTA PRECIO» en vez de inventar;\n- preparar la revisión y la entrega que firma un profesional.\n\n### Lo que necesita\n\nUna computadora con Windows, Mac o Linux, una cuenta de Claude con plan pago (Pro, desde USD 20 al mes, porque Claude Code no está en el plan gratis) y Excel o LibreOffice Calc para abrir las hojas. AutoCAD no hace falta: se trabaja sobre copias de los planos en DXF y PDF. Todo se practica con una casa de ejemplo que viene en el kit.",
    "ficha": {
      "requisitos": "Windows 10 (1809 o más nuevo), macOS 13 o más nuevo, o Linux; una cuenta de Claude con plan pago; Excel o LibreOffice Calc. AutoCAD es opcional. No hace falta programar: los programas los escribe Claude Code y usted los revisa.",
      "duracion": "7 lecciones con 54 láminas y sus videos cortos, más el tráiler.",
      "costo": "El curso es gratis. Claude Code se paga aparte (Claude Pro, USD 20 al mes); Python y sus bibliotecas son gratis y AutoCAD no hace falta."
    },
    "costos": [
      {
        "pieza": "Claude Pro",
        "costo": "USD 20 al mes; USD 17 al mes con pago anual (USD 200). Max: USD 100 al mes. El plan gratis no incluye Claude Code.",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "Python 3, ezdxf 1.4.5, pdfplumber 0.11.10, openpyxl 3.1.5",
        "costo": "Gratis, licencia MIT.",
        "fuente": "[ezdxf](https://pypi.org/project/ezdxf/), [pdfplumber](https://pypi.org/project/pdfplumber/), [openpyxl](https://pypi.org/project/openpyxl/) en PyPI"
      },
      {
        "pieza": "Hoja de cálculo",
        "costo": "Excel si ya lo tiene; si no, LibreOffice Calc (gratis).",
        "fuente": "[libreoffice.org](https://www.libreoffice.org)"
      },
      {
        "pieza": "AutoCAD (opcional)",
        "costo": "No hace falta para este curso. Si lo usa, como en el curso Claude + AutoCAD: el completo, de USD 1.575 a 1.950 al año según la región; LT, de USD 410 a 540."
      },
      {
        "pieza": "Bluebeam Revu (para comparar; no hace falta)",
        "costo": "Desde USD 260 por usuario al año (Basics, en la página de Bluebeam).",
        "fuente": "[bluebeam.com/solutions/compare](https://www.bluebeam.com/solutions/compare)"
      }
    ],
    "costosFecha": "2026-11-10",
    "puesta": {
      "leccion": 2,
      "texto": "Si hizo el curso Claude + AutoCAD, ya tiene casi todo: Claude Code, Git y uv se instalan igual. **Este curso no necesita AutoCAD ni el servidor MCP**: lee copias de los planos en DXF y PDF con Python y no toca el dibujo original.\n\n- **Windows:** Claude Code con su instalador de PowerShell (`irm https://claude.ai/install.ps1 | iex`); Git y uv con `winget`. `claude doctor` revisa la instalación.\n- **Mac:** Claude Code con Homebrew (`brew install --cask claude-code`); uv como indica [su página](https://docs.astral.sh/uv/getting-started/installation/).\n- **Linux:** Claude Code como indica [su documentación](https://code.claude.com/docs/en/setup) y uv como indica su página.\n\nDespués, el kit: póngalo en una carpeta propia (`C:\\cursos\\cuantificacion\\kit` en Windows), `uv sync` instala Python y las bibliotecas fijadas (ezdxf 1.4.5, pdfplumber 0.11.10, openpyxl 3.1.5) y una línea de `uv run` comprueba que cargan. **Para comprobar**, dentro del kit, Claude tiene que contestar **metros** y las capas de la casa de ejemplo al leer el DXF, y el tamaño de la página y cuántas líneas tiene al abrir el PDF. Si contesta las dos, está listo."
    },
      "recursos": [
        {
          "nombre": "ezdxf",
          "url": "https://github.com/mozman/ezdxf",
          "que": "Lee y escribe DXF en Python, sin AutoCAD: entidades, capas, bloques, atributos y áreas de polilíneas.",
          "licencia": "MIT",
          "revision": "Biblioteca sin red; versión fijada con su huella en uv.lock (1.4.5, del 2026-10-16). El curso de AutoCAD fijó la 1.4.4: el kit de este curso se prueba con la 1.4.5.",
          "lecciones": "3, 4"
        },
        {
          "nombre": "pdfplumber",
          "url": "https://github.com/jsvine/pdfplumber",
          "que": "Saca de un PDF vectorial cada línea, rectángulo, curva y letra con sus coordenadas.",
          "licencia": "MIT",
          "revision": "Sin red; depende de pdfminer.six (MIT). Fijada a la versión 0.11.10.",
          "lecciones": "5"
        },
        {
          "nombre": "openpyxl",
          "url": "https://foss.heptapod.net/openpyxl/openpyxl",
          "que": "Escribe el Excel con fórmulas.",
          "licencia": "MIT",
          "revision": "Sin red. Versión 3.1.5, la última, de 2024.",
          "lecciones": "4, 6"
        },
        {
          "nombre": "Skills xlsx y pdf de Anthropic",
          "url": "https://github.com/anthropics/skills",
          "que": "Le enseñan a Claude a armar y revisar hojas de cálculo (fórmulas, sin errores) y PDF.",
          "licencia": "Apache 2.0 (comprobado en skills/xlsx/LICENSE.txt)",
          "revision": "Oficiales de Anthropic; traen scripts: se leen antes de instalarlas.",
          "lecciones": "4, 6, 7"
        },
        {
          "nombre": "El kit del curso Claude + AutoCAD",
          "que": "El extractor por DXF, la lista de chequeo y el CLAUDE.md de copias.",
          "licencia": "Gratis, con el curso Claude + AutoCAD",
          "revision": "Lo hacemos nosotros.",
          "lecciones": "2, 4"
        },
        {
          "nombre": "El kit de este curso",
          "que": "El criterio, los extractores desde DXF y PDF, la base de precios, el presupuesto, el verificador de precios, la hoja de revisión, la casa de ejemplo y el skill cuantificar-presupuestar con el método de las lecciones 3 a 7.",
          "licencia": "Gratis, con este curso",
          "revision": "Lo hacemos nosotros, con sus pruebas.",
          "lecciones": "Todas"
        }
      ],
      "noRecomendamos": "- **Pedirle a una IA que «lea» un plano escaneado y dé cantidades.** La documentación de Anthropic lo dice: «Claude can give approximate counts of objects in an image but might not always be precisely accurate, especially with large numbers of small objects» ([Vision, Limitations](https://platform.claude.com/docs/en/build-with-claude/vision)). Un PDF también se procesa como imagen de cada página («PDF support relies on Claude's vision capabilities», [PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support)). Sirve para orientarse y para revisar; no para la cifra.\n- **PyMuPDF para un trabajo que se cobra.** Es un lector de PDF muy rápido y bien hecho, pero su licencia AGPL-3.0 obliga a abrir el código de un servicio que lo use (o a pagar la licencia comercial de Artifex). pdfplumber evita la duda.\n- **Un precio que sale de una IA.** Ninguno entra a un presupuesto: un precio tiene fuente y fecha, o la línea dice FALTA PRECIO.",
      "kit": {
        "descripcion": "Todo lo del curso en una carpeta: la casa de ejemplo en DXF, PDF y escaneado, los programas que miden, las plantillas de Excel y los pedidos de cada lección. No trae el plano de Autodesk del curso de AutoCAD: trae el enlace a su página.",
        "archivos": [
          {
            "nombre": "LEAME.md",
            "que": "Qué es, qué cuesta y los enlaces de las lecciones."
          },
          {
            "nombre": "INSTALAR.md",
            "que": "La puesta a punto de la lección 2 y el enlace a la del curso de AutoCAD."
          },
          {
            "nombre": "CLAUDE.md",
            "que": "Las reglas de trabajo: copias, criterio antes de medir, regla de áreas, precios solo de la base y todo es borrador hasta la revisión."
          },
          {
            "nombre": ".claude/settings.json",
            "que": "Los permisos: leer todo, escribir solo en salida/ y en los scripts, sin red."
          },
          {
            "nombre": ".claude/skills/cuantificar-presupuestar/SKILL.md",
            "que": "El método de las lecciones 3 a 7 como skill (instrucciones guardadas que Claude usa cuando hace falta)."
          },
          {
            "nombre": "criterios-plantilla.md",
            "que": "Las preguntas del criterio de medición (lección 3)."
          },
          {
            "nombre": "PEDIDOS.md",
            "que": "Los pedidos de cada lección."
          },
          {
            "nombre": "planos/",
            "que": "La casa de ejemplo en DXF, PDF vectorial y PDF escaneado, su cuantificación hecha a mano y el enlace al plano de Autodesk."
          },
          {
            "nombre": "medir/areas.py",
            "que": "La regla de áreas sobre un DXF, con ezdxf."
          },
          {
            "nombre": "cantidades/extraer_dxf.py",
            "que": "La hoja de cantidades desde un DXF."
          },
          {
            "nombre": "cantidades/extraer_pdf.py",
            "que": "La escala calibrada, las marcas y las áreas desde un PDF vectorial."
          },
          {
            "nombre": "precios/base-precios.xlsx",
            "que": "La plantilla de la base de precios, vacía, con tres filas marcadas EJEMPLO."
          },
          {
            "nombre": "precios/verificar_precios.py",
            "que": "El verificador de la lección 6: cada precio existe en la base, con fuente, fecha, vigencia y moneda."
          },
          {
            "nombre": "presupuesto/plantilla.xlsx",
            "que": "El presupuesto con «FALTA PRECIO» e «incompleto» por fórmula."
          },
          {
            "nombre": "revisar/lista.md",
            "que": "Los 9 puntos de la lista de revisión (lección 7)."
          },
          {
            "nombre": "revisar/hoja-revision.xlsx",
            "que": "La hoja de Revisión que completa y firma el profesional."
          },
          {
            "nombre": "entregar/entregar.py",
            "que": "El PDF de una página; el sello BORRADOR sale solo con la revisión completa."
          },
          {
            "nombre": "cuadro-formatos.pdf",
            "que": "El cuadro formato × tarea de la lección 1."
          },
          {
            "nombre": "pyproject.toml y uv.lock",
            "que": "ezdxf 1.4.5, pdfplumber 0.11.10, openpyxl 3.1.5 y reportlab, fijados con sus huellas."
          },
          {
            "nombre": "salida/",
            "que": "La carpeta vacía donde Claude deja todo lo que genera."
          }
        ]
      },
      "accion": {
        "titulo": "Con sus planos",
        "texto": "Escriba el criterio de medición de su oficina, cargue su base de precios con fuente y fecha, y pruebe el método con un plano propio: todo queda en borrador hasta que un profesional responsable lo revisa y lo firma. Si quiere que lo hagamos con sus planos, con la revisión de una ingeniera, escríbanos a consultorias@vion-studio.com: empezamos por un plano de prueba."
      }
  },
  "en": {
    "corto": "Takeoff",
    "titulo": "Quantity takeoff and estimates from drawings with AI",
    "subtitulo": "Construction takeoff with Claude: from DWG and PDF to Excel, with professional review",
    "tituloSeo": "Free course: AI quantity takeoff from drawings | Vion",
    "descripcion": "A free Vion course: construction quantities from DWG and PDF to Excel with Claude, your own price database and professional review.",
    "paraQuien": "Cost engineers, estimators, small builders and drafters who do takeoffs by hand, in Latin America or for US clients. The Claude + AutoCAD course helps, or knowing what a layer and a block are.",
    "seLleva": "A written takeoff method (criteria, area rule, confidence), extractors from DXF and from vector PDF that write to Excel, your own price database with a source and date on every row, an estimate that refuses to invent a price, and the review sheet a licensed professional signs. Nothing ships without that sign-off. All on public sample drawings.",
    "herramientas": "Claude Code (Anthropic Pro plan or higher); Python, ezdxf, pdfplumber and openpyxl are free; Excel or LibreOffice Calc. AutoCAD is not required.",
    "lecciones": [
      "What can be quantified from a drawing (and what cannot)",
      "Setup: the AutoCAD course plus what is new",
      "Measure, not just count: criteria and the area rule",
      "From DWG/DXF to the quantity sheet",
      "PDF: what can be read and what fails",
      "Your price database and the estimate (never invent prices)",
      "Professional review and delivery"
    ]
  }
};
