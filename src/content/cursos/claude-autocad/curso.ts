// C1 · Claude + AutoCAD: la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción del final, desde el
// storyboard (docs/planes/cursos/C1-autocad.md de la aldea, 2026-11-10). Las lecciones están en lecciones.ts.
import type { CursoTexto } from '../../tipos';

export const curso: CursoTexto = {
  "es": {
    "corto": "AutoCAD",
    "titulo": "Claude + AutoCAD: planos, cantidades y reportes",
    "tituloSeo": "Curso gratis: Claude + AutoCAD, planos y cantidades",
    "descripcion": "Curso gratis de Vion: conecte Claude Code a AutoCAD, lea un plano, pase las cantidades a Excel y arme el reporte.",
    "paraQuien": "Oficinas de ingeniería y arquitectura, dibujantes y técnicos que ya usan AutoCAD (Costa Rica y Latinoamérica). No hace falta programar; sí saber AutoCAD: capas, bloques, atributos y APPLOAD.",
    "seLleva": "Claude Code conectado a su AutoCAD (o, en Mac, a una copia DXF), el inventario de un plano de muestra de Autodesk, una tabla de cantidades en Excel con su columna de confianza, un reporte de una página en PDF, una rutina AutoLISP propia y una planilla para medir el ahorro antes y después. Cada cifra la revisa usted, y lo que llega a una obra o a un cliente lo firma un profesional responsable.",
    "herramientas": "AutoCAD 2024 o posterior, completo o LT (suscripción de Autodesk), y Claude Code (plan Pro o superior de Anthropic); Python y sus bibliotecas, gratis.",
    "explica": "**AutoCAD** es el programa de dibujo técnico que usan las oficinas de ingeniería y arquitectura. **Claude Code** es la versión de Claude, una inteligencia artificial, que trabaja en su computadora: lee archivos, escribe pequeños programas y, con un conector, habla con otros programas.\n\nEn este curso conecta Claude Code con su AutoCAD para que **lea los planos que usted ya tiene**: cuente puertas, ventanas y recintos, pase las cantidades a Excel y arme un reporte de una página para el cliente. La IA no dibuja planos sola ni decide por usted: usted revisa cada cifra, y lo que llega a una obra lo firma un profesional.\n\n### Al terminar el curso va a poder\n\n- conectar Claude Code con AutoCAD en Windows (o trabajar sobre una copia del plano en Mac);\n- pedirle que lea un plano sin tocarlo: unidades, capas, bloques y atributos;\n- sacar las cantidades a Excel, con la confianza de cada cifra;\n- revisar esas cantidades antes de entregarlas;\n- armar el reporte para el cliente y una rutina propia de AutoCAD, y medir si le ahorra trabajo.\n\n### Lo que necesita\n\nAutoCAD 2024 o más nuevo (completo o LT) y saber usarlo: capas, bloques y atributos. Una cuenta de Claude con plan pago (Pro, desde USD 20 al mes), porque Claude Code no está en el plan gratis. No hace falta programar: los programas los escribe Claude Code y usted los revisa. Todo se practica con un plano de muestra de Autodesk.",
    "ficha": {
      "requisitos": "Windows 10 (1809 o posterior) u 11 con AutoCAD 2024 o posterior, completo o LT (LT corre AutoLISP desde la 2024). En Mac: AutoCAD para Mac, sin el puente MCP (se trabaja sobre una copia DXF). Una cuenta de Claude con Claude Code y conexión a internet. No hace falta programar; sí saber AutoCAD.",
      "duracion": "7 lecciones con 73 láminas y sus videos cortos, más el tráiler.",
      "costo": "El curso es gratis. AutoCAD y Claude Code se pagan aparte: Claude Pro desde USD 20 al mes y AutoCAD LT desde unos USD 410 al año."
    },
    "costos": [
      {
        "pieza": "Claude Code",
        "costo": "Pro: USD 20 al mes, o USD 200 al año (USD 17 al mes). Max: USD 100 al mes. El plan gratis no incluye Claude Code.",
        "fuente": "[claude.com/pricing](https://claude.com/pricing), [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup)"
      },
      {
        "pieza": "AutoCAD completo",
        "costo": "Suscripción anual. Las páginas regionales de Autodesk dan entre USD 1.575 y 1.950 al año (ASEAN, Hong Kong, Emiratos); en el Reino Unido, £1.890 al año.",
        "fuente": "[Autodesk, Emiratos](https://www.autodesk.com/ae/buy-online), [Autodesk, Reino Unido](https://www.autodesk.com/uk/solutions/autocad-subscription-faq)"
      },
      {
        "pieza": "AutoCAD LT",
        "costo": "Entre USD 410 y 540 al año según la región, en páginas de Autodesk.",
        "fuente": "[Autodesk, Emiratos](https://www.autodesk.com/ae/buy-online), [Autodesk, Reino Unido](https://www.autodesk.com/uk/solutions/autocad-subscription-faq)"
      },
      {
        "pieza": "Prueba de AutoCAD",
        "costo": "15 días según la mayoría de las páginas de Autodesk (alguna regional dice 30). Es para evaluar.",
        "fuente": "[Autodesk, prueba](https://asean.autodesk.com/products/autocad/free-trial)"
      },
      {
        "pieza": "Python, uv, Git, ezdxf, openpyxl, reportlab y el servidor MCP",
        "costo": "Gratis (código abierto)."
      },
      {
        "pieza": "Hoja de cálculo",
        "costo": "Excel si ya lo tiene; si no, LibreOffice Calc (gratis) abre el `.xlsx`."
      }
    ],
    "costosFecha": "2026-11-10",
    "puesta": {
      "leccion": 2,
      "texto": "Todo va en una carpeta propia, `C:\\cursos\\autocad-ia\\`, y se trabaja siempre sobre copias del plano. En Windows son seis pasos:\n\n1. **Claude Code:** el instalador oficial en PowerShell, sin permisos de administrador; se comprueba con `claude --version` y `claude doctor`. Hace falta un plan Pro o superior.\n2. **Git y uv:** con `winget`; se comprueba con `git --version` y `uv --version`.\n3. **El servidor MCP** ([puran-water/autocad-mcp](https://github.com/puran-water/autocad-mcp)): se baja con Git, se fija al commit que revisamos y `uv sync` instala sus piezas.\n4. **El puente en AutoCAD:** `APPLOAD` de `mcp_dispatch.lsp` (en la carpeta `lisp-code` del servidor), con esa carpeta como ubicación de confianza; conviene sumarlo a la carga al inicio. Los pedidos pasan por `C:\\temp`.\n5. **Conectar:** desde la carpeta del kit, `claude mcp add` registra el servidor solo para el proyecto (crea `.mcp.json`) y se aprueba al abrir `claude`.\n6. **Comprobar:** `/mcp` dice «autocad · connected» y, en un dibujo nuevo y vacío, Claude dibuja un rectángulo de 10 × 5 en la capa `PRUEBA-IA` y contesta área 50, perímetro 30.\n\n**En Mac:** Claude Code se instala con el comando de Mac. No hay puente ni extracción de datos: se guarda una copia del plano como DXF y Claude trabaja sobre esa copia con Python (lecciones 3 a 6). **Con LT 2023 o anterior**, y **en Linux**, el mismo camino: la copia DXF."
    },
    "recursos": [
      {
        "nombre": "autocad-mcp (puran-water)",
        "url": "https://github.com/puran-water/autocad-mcp",
        "que": "Servidor MCP con 8 herramientas (drawing, entity, layer, block, annotation, pid, view, system) y un puente AutoLISP para AutoCAD completo y LT 2024 o posterior, o DXF sin AutoCAD. Es el camino principal del curso, fijado al commit f07b6a5.",
        "licencia": "MIT",
        "revision": "Leímos su código en el commit f07b6a5 (del 2026-11-07): habla con Claude solo por stdio, sin red ni telemetría, y sus dependencias van fijadas con sus huellas. Tres cosas que hay que saber: system → execute_lisp corre AutoLISP libre (no se puede apagar por separado: la herramienta system queda en «preguntar» y nunca se aprueba sola), y drawing → create borra y purga el dibujo activo. Los pedidos pasan por archivos en C:/temp.",
        "lecciones": "2, 3, 4"
      },
      {
        "nombre": "AutoCAD-MCP (beiming183-cloud)",
        "url": "https://github.com/beiming183-cloud/AutoCAD-MCP",
        "que": "Derivado del anterior: suma un complemento .NET para AutoCAD completo 2025 y 2026 (pide un certificado para firmar código) y sólidos 3D. Es para avanzados: se nombra como siguiente paso, no se instala en el curso.",
        "licencia": "MIT",
        "revision": "No lo revisamos.",
        "lecciones": "1"
      },
      {
        "nombre": "autocad-mcp (christiannp)",
        "url": "https://github.com/christiannp/autocad-mcp",
        "que": "Servidor MCP por COM, con 121 herramientas; solo AutoCAD completo. Es el que usamos en nuestra prueba; en el curso solo se menciona.",
        "licencia": "Ninguna (todos los derechos reservados)",
        "revision": "Lo revisamos en el commit ceefd02: sin red; tiene 6 herramientas de código libre o que guardan sobre los originales, que nuestro lanzador apaga. Sin licencia de uso: no se instala ni se reparte.",
        "lecciones": "1"
      },
      {
        "nombre": "ezdxf",
        "url": "https://github.com/mozman/ezdxf",
        "que": "Lee y escribe DXF en Python, sin AutoCAD. En el kit, fijada a la versión 1.4.4.",
        "licencia": "MIT",
        "revision": "Biblioteca sin red; se fija la versión con su huella.",
        "lecciones": "4 y el camino de Mac"
      },
      {
        "nombre": "openpyxl",
        "url": "https://foss.heptapod.net/openpyxl/openpyxl",
        "que": "Escribe el Excel. En el kit, fijada a la versión 3.1.5.",
        "licencia": "MIT",
        "revision": "Sin red; versión fijada con su huella.",
        "lecciones": "4"
      },
      {
        "nombre": "reportlab",
        "url": "https://www.reportlab.com/opensource/",
        "que": "Escribe el PDF. En el kit, fijada a la versión 5.0.1.",
        "licencia": "BSD",
        "revision": "Sin red; versión fijada con su huella.",
        "lecciones": "6"
      },
      {
        "nombre": "Skills xlsx y pdf de Anthropic",
        "url": "https://github.com/anthropics/skills",
        "que": "Le enseñan a Claude a armar y revisar hojas de cálculo (fórmulas, sin errores) y PDF. Dentro de Claude Code: /plugin marketplace add anthropics/skills y después /plugin install document-skills@anthropic-agent-skills.",
        "licencia": "Apache 2.0 (comprobado en skills/xlsx/LICENSE.txt)",
        "revision": "Son de Anthropic; aun así se leen antes de instalarlas, porque traen scripts.",
        "lecciones": "4, 6"
      },
      {
        "nombre": "Autodesk Product Help MCP",
        "url": "https://help.autodesk.com/cloudhelp/ENU/ADSKMCP-ProductHelpMcp/files/ADSKMCP_ProductHelpMcp_autodesk_product_help_mcp_server_html.html",
        "que": "Claude consulta la ayuda oficial de más de 110 productos de Autodesk, en https://developer.api.autodesk.com/knowledge/public/v1/mcp. Opcional.",
        "licencia": "Servicio de Autodesk",
        "revision": "Público y sin clave; solo lee documentación y sale a internet.",
        "lecciones": "2 (extra)"
      },
      {
        "nombre": "AutoLISP Extension para VS Code",
        "que": "Editar y depurar rutinas AutoLISP en Windows y Mac. La recomienda Autodesk en su ayuda de AutoLISP.",
        "licencia": "De Autodesk",
        "revision": "Oficial de Autodesk.",
        "lecciones": "7"
      },
      {
        "nombre": "El kit del curso",
        "que": "CLAUDE.md con las reglas, los permisos, los pedidos de cada lección, el extractor por DXF, la plantilla del reporte, CONTAR.lsp, la planilla de medición y el skill autocad-cantidades con el método de las lecciones 3 a 6.",
        "licencia": "Gratis, con el curso",
        "revision": "Lo hacemos nosotros, con sus pruebas.",
        "lecciones": "Todas"
      }
    ],
    "noRecomendamos": "- **christiannp/autocad-mcp para trabajos con clientes:** funciona, pero no tiene licencia de uso (todos los derechos reservados).\n- **puran-water/autocad-drafting:** está archivado desde el 2026-03-10.\n- **Instalar un servidor MCP sin revisarlo:** un programa que toca sus planos se lee antes y se fija a una versión; si sube de versión, primero se revisa.\n- **Pedirle precios a una IA:** los del plano de muestra están en yenes y no sirven para Costa Rica. Los precios salen de su base, nunca de la IA.",
    "kit": {
      "descripcion": "Todo lo del curso en una carpeta: las reglas para Claude, los pedidos de cada lección, los programas, la rutina CONTAR y la planilla para medir el ahorro. No trae planos: trae el enlace a la página de muestras de Autodesk.",
      "archivos": [
        {
          "nombre": "LEAME.md",
          "que": "Qué es, qué cuesta y los enlaces de las lecciones."
        },
        {
          "nombre": "INSTALAR.md",
          "que": "La lección 2 por escrito: Windows paso a paso, Mac y los errores típicos."
        },
        {
          "nombre": "cuadro-de-decision.pdf",
          "que": "AutoCAD completo, LT y Mac frente a los cinco caminos (lección 1)."
        },
        {
          "nombre": "CLAUDE.md",
          "que": "Las reglas de trabajo: copias, leer antes de contar, una sola escala, nunca precios y todo es borrador hasta la revisión profesional."
        },
        {
          "nombre": ".claude/settings.json",
          "que": "Los permisos: las herramientas que corren AutoLISP libre o cambian el dibujo quedan en «preguntar»."
        },
        {
          "nombre": ".claude/skills/autocad-cantidades/SKILL.md",
          "que": "El método de las lecciones 3 a 6: leer, criterio, extraer, validar y reportar."
        },
        {
          "nombre": "prompts/01-inventario.md",
          "que": "El pedido de lectura, de solo lectura (lección 3)."
        },
        {
          "nombre": "prompts/02-cantidades.md",
          "que": "El criterio y el extractor (lección 4)."
        },
        {
          "nombre": "prompts/03-reporte.md",
          "que": "El PDF de una página (lección 6)."
        },
        {
          "nombre": "prompts/04-rutina.md",
          "que": "Cómo pedir una rutina AutoLISP o un script (lección 7)."
        },
        {
          "nombre": "cantidades/extraer_dxf.py",
          "que": "El extractor desde una copia DXF, con ezdxf y openpyxl."
        },
        {
          "nombre": "reporte/generar_reporte.py",
          "que": "El PDF desde el Excel, con reportlab."
        },
        {
          "nombre": "validar/lista-de-chequeo.md",
          "que": "Los 8 puntos de la lección 5."
        },
        {
          "nombre": "rutinas/CONTAR.lsp",
          "que": "La rutina que cuenta los bloques del dibujo por nombre."
        },
        {
          "nombre": "rutinas/ejemplo.scr",
          "que": "El script de la lección 7."
        },
        {
          "nombre": "medicion-ahorro.xlsx",
          "que": "La planilla de dos semanas, antes y después, con la fórmula del ahorro."
        },
        {
          "nombre": "requirements.txt",
          "que": "ezdxf 1.4.4, openpyxl 3.1.5 y reportlab 5.0.1, con sus huellas."
        }
      ]
    },
    "accion": {
      "titulo": "Con los planos de su oficina",
      "texto": "Elija la tarea que más se repite en su oficina, mídala dos semanas con la planilla del kit y pruebe la rutina con sus planos reales, siempre sobre copias y con la revisión de un profesional antes de que algo llegue a una obra o a un cliente. Si quiere hacerlo con nosotros, escríbanos a consultorias@vion-studio.com con esa tarea: empezamos por medir."
    }
  },
  "en": {
    "corto": "AutoCAD",
    "titulo": "Claude + AutoCAD: drawings, quantities and reports",
    "tituloSeo": "Free course: Claude + AutoCAD drawings and quantities",
    "descripcion": "A free Vion course: connect Claude Code to AutoCAD, read a drawing, send quantities to Excel and build the report.",
    "paraQuien": "Engineering and architecture offices, drafters and technicians who already use AutoCAD. No coding needed, but you should know AutoCAD: layers, blocks, attributes and APPLOAD.",
    "seLleva": "Claude Code connected to your AutoCAD (or, on a Mac, to a DXF copy), an inventory of an Autodesk sample drawing, a quantity table in Excel with a confidence column, a one-page PDF report, your own AutoLISP routine and a sheet to measure time saved. You check every number, and a licensed professional signs off on anything that reaches a site or a client.",
    "herramientas": "AutoCAD 2024 or later, full or LT (Autodesk subscription), and Claude Code (Anthropic Pro plan or higher); Python and its libraries are free.",
    "lecciones": [
      "What AI does (and does not do) in AutoCAD",
      "Setup on Windows, step by step (and what changes on a Mac)",
      "Reading a drawing: layers, blocks and attributes",
      "Quantities to Excel",
      "Checking the quantities (never blindly)",
      "The PDF report for the client",
      "Routines that repeat and how much they save"
    ]
  }
};
