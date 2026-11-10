// Las lecciones de «C2-cuantificacion», lámina por lámina, desde el storyboard de la aldea
// (docs/planes/cursos/C2-cuantificacion.md, 2026-11-10). Texto completo de cada lámina; los videos e imágenes van en ../medios.json.
import type { LeccionCurso } from '../../tipos';

export const lecciones: LeccionCurso[] = [
  {
    "n": 1,
    "slug": "1-que-se-puede-cuantificar",
    "titulo": "Qué se puede cuantificar de un plano (y qué no)",
    "objetivo": "Saber, antes de empezar, qué cifras van a salir con confianza según el formato del plano.",
    "laminas": [
      {
        "n": "1.1",
        "titulo": "1.458 m² que eran 729",
        "cuerpo": "En el diagnóstico del curso Claude + AutoCAD, una medición sin criterio daba **1.458 m²**. Eran **729**: cada planta estaba dibujada dos veces (a 1:100 y a 1:50). Cuantificar no es sumar lo que hay en el archivo.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Una cifra grande, «1.458 m²», en rojo, que se parte en dos bloques iguales, «_100» y «_50»; uno se apaga y queda «729 m²»."
        }
      },
      {
        "n": "1.2",
        "titulo": "Contar, medir, poner precio",
        "cuerpo": "Tres trabajos distintos. **Contar** (puertas, ventanas, artefactos) sale bien si el plano usa bloques o marcas. **Medir** (m², m, m³) sale bien si hay geometría cerrada y una escala segura. **Poner precio** no sale de ningún plano: sale de **su** base de precios.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 30,
          "seVe": "Chispa, de medio cuerpo sobre el fondo crema; al costado, tres íconos (contar, medir, poner precio) que se encienden con cada palabra.",
          "dice": "Cuantificar son tres trabajos. Contar: eso la IA lo hace bien, si el plano está bien dibujado. Medir: también, si hay geometría y una escala segura. Y poner precio. Eso no sale de ningún plano, ni de ninguna IA. Sale de su base de precios."
        }
      },
      {
        "n": "1.3",
        "titulo": "El formato decide",
        "cuerpo": "- **DWG o DXF:** geometría, capas, bloques y atributos → se cuenta y se mide.\n- **PDF vectorial** (impreso desde el CAD): líneas y texto con coordenadas, sin capas ni bloques → se mide con escala calibrada y se cuentan marcas de texto.\n- **PDF escaneado:** una imagen → la IA solo orienta; se mide a mano.\n\n*(El cuadro también viene en el kit: `cuadro-formatos.pdf`.)*",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Un cuadro de tres por tres: DWG o DXF, PDF vectorial y PDF escaneado frente a contar, medir y poner precio, con tildes, «con cuidado» y cruces."
        }
      },
      {
        "n": "1.4",
        "titulo": "Lo mismo, en tres archivos",
        "cuerpo": "La misma ventana de la casa de ejemplo: en el DXF es un bloque con 6 atributos; en el PDF vectorial, 14 líneas y la marca «V-2»; en el escaneado, píxeles.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Un acercamiento a una ventana de la casa de ejemplo, que se separa en tres capas rotuladas «bloque + atributos», «14 líneas + texto» y «píxeles»."
        }
      },
      {
        "n": "1.5",
        "titulo": "Lo que el plano no dice",
        "cuerpo": "Ningún plano dice todo: alturas de muro que no están acotadas, cuántas plantas tipo hay, el espesor del repello, el desperdicio. Eso **no se adivina**: queda como una celda que llena usted y que se ve en el resumen.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Una pizarra con cuatro tarjetas, «¿altura?», «¿plantas tipo?», «¿espesor?» y «¿desperdicio?», que caen a una columna «LO PONE USTED»."
        }
      },
      {
        "n": "1.6",
        "titulo": "Quién firma",
        "cuerpo": "La IA cuenta y mide. Usted revisa. **Un profesional responsable firma** lo que llega a una obra o a un presupuesto. Ese orden no cambia en ninguna lección.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa, de frente, seria; detrás, tres golpes de texto: «LA IA MIDE · USTED REVISA · UN PROFESIONAL FIRMA».",
          "dice": "Y una regla para todo el curso. La IA mide. Usted revisa. Y lo que llega a una obra lo firma un profesional."
        }
      },
      {
        "n": "1.7",
        "titulo": "Lo que se lleva",
        "cuerpo": "El cuadro formato × tarea. Próxima: la puesta a punto (si hizo el curso Claude + AutoCAD, son cinco minutos).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina de cierre: el cuadro formato × tarea, completo."
        }
      }
    ],
    "resultado": "El cuadro formato × tarea: DWG o DXF, PDF vectorial y PDF escaneado frente a contar, medir y poner precio."
  },
  {
    "n": 2,
    "slug": "2-puesta-a-punto",
    "titulo": "Puesta a punto: lo del curso de AutoCAD más lo nuevo",
    "objetivo": "Dejar el kit andando y abrir los dos planos de muestra, la casa de ejemplo en DXF y en PDF.",
    "laminas": [
      {
        "n": "2.1",
        "titulo": "Así termina esta lección",
        "cuerpo": "Claude lee la casa de ejemplo y contesta: «unidades: metros · 9 capas · 6 polilíneas cerradas en RECINTOS».",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "La pregunta y la respuesta en la terminal, con un acercamiento a «metros»."
        }
      },
      {
        "n": "2.2",
        "titulo": "Si hizo el curso de AutoCAD, saltee esto",
        "cuerpo": "Claude Code, Git y uv se instalan igual que en la lección 2 del curso Claude + AutoCAD: en Windows, Claude Code con el comando de PowerShell y Git y uv con `winget`; en Mac, Claude Code con Homebrew (los comandos, en los bloques de abajo). `claude doctor` revisa la instalación; después, `claude` y entre con su cuenta paga (el plan gratis no incluye Claude Code). En Mac y Linux, uv se instala como indica [su página](https://docs.astral.sh/uv/getting-started/installation/). **Este curso no necesita el servidor MCP ni AutoCAD**: lee copias DXF y PDF con Python y no toca el dibujo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "La instalación de Claude Code, Git y uv en Windows, recortada a lo esencial."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows, en PowerShell (sin administrador)",
            "lenguaje": "powershell",
            "texto": "irm https://claude.ai/install.ps1 | iex\n# cerrar y abrir la terminal\nclaude --version\nclaude doctor"
          },
          {
            "tipo": "comando",
            "etiqueta": "Windows: Git y uv",
            "lenguaje": "powershell",
            "texto": "winget install --id Git.Git -e\nwinget install --id=astral-sh.uv -e"
          },
          {
            "tipo": "comando",
            "etiqueta": "Mac, en la Terminal",
            "lenguaje": "bash",
            "texto": "brew install --cask claude-code\nclaude doctor"
          }
        ]
      },
      {
        "n": "2.3",
        "titulo": "El kit",
        "cuerpo": "Cree la carpeta del curso, baje el kit y deje que `uv sync` instale Python y las bibliotecas fijadas (ezdxf 1.4.5, pdfplumber 0.11.10, openpyxl 3.1.5). La línea de `uv run` comprueba que las tres cargan: tiene que decir `ok`. Al final, `claude` abre Claude Code en la carpeta del kit, que lee su `CLAUDE.md`. En Mac o Linux, lo mismo con / en lugar de \\. {{la dirección del kit se publica con el curso}}",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "Los comandos en la terminal, con acercamientos, y «ok» al final."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows, en PowerShell",
            "lenguaje": "powershell",
            "texto": "mkdir C:\\cursos\\cuantificacion; cd C:\\cursos\\cuantificacion\ngit clone <URL-DEL-KIT> kit; cd kit\nuv sync          # instala Python y las bibliotecas fijadas en uv.lock (ezdxf 1.4.5, pdfplumber 0.11.10, openpyxl 3.1.5)\nuv run python -c \"import ezdxf, pdfplumber, openpyxl; print('ok')\"\nclaude           # abrir Claude Code en la carpeta del kit (lee su CLAUDE.md)"
          }
        ]
      },
      {
        "n": "2.4",
        "titulo": "Los planos",
        "cuerpo": "La casa de ejemplo viene en el kit (DXF, PDF, escaneado y la cuantificación a mano). `home_floor_plan.dwg` se baja de la página de muestras de Autodesk: no lo repartimos.\n\n| Plano | De dónde | Lecciones | ¿Viene en el kit? |\n| `home_floor_plan.dwg` | La página de muestras de AutoCAD LT de Autodesk ([autodesk.com/autocadlt-samples](https://autodesk.com/autocadlt-samples), 2.360 KB) | 1, 4 y 5 (el edificio del curso de AutoCAD: ahí se ve lo que falla al medir) | No: se enlaza {{sus condiciones de uso se confirman antes de publicar}} |\n| `home_floor_plan.dxf` y `.pdf` | Los hace usted: `SAVEAS` a DXF y `PLOT` a PDF desde AutoCAD. Sin AutoCAD, el DXF con el conversor gratuito de su preferencia, y el PDF queda solo para quien tenga AutoCAD | 4 y 5 | No |\n| `casa-ejemplo` (del curso) | Una casa ficticia de una planta (unos 90 m², 6 recintos, 3 tipos de muro, 8 puertas y ventanas con marca), **dibujada para cuantificar**: polilíneas cerradas por recinto, muros por eje en capa propia, bloques con atributos | 3 a 7 | Sí: `casa-ejemplo.dxf`, `casa-ejemplo.pdf` (vectorial, impreso a 1:50 en A3), `casa-ejemplo-escaneado.pdf` (el mismo PDF impreso en papel, escaneado a 150 ppp y algo torcido) y `casa-ejemplo-control.xlsx` (la cuantificación hecha **a mano** por la ingeniera, la vara contra la que se compara todo) |",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "La carpeta `planos/` del kit y la página pública de muestras de Autodesk."
        }
      },
      {
        "n": "2.5",
        "titulo": "Una regla antes de empezar",
        "cuerpo": "Se trabaja **sobre copias**. El kit trae un `CLAUDE.md` que se lo recuerda a Claude: nunca escribir en `planos/`, todo lo que genera va a `salida/`.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa, en capa sobre la carpeta `planos/`, la señala.",
          "dice": "Los planos no se tocan. Nunca. Todo lo que genere Claude va a otra carpeta, y usted lo revisa."
        }
      },
      {
        "n": "2.6",
        "titulo": "Comprobar",
        "cuerpo": "En `claude`, dentro del kit, haga las dos preguntas de abajo. A la primera tiene que contestar **metros** y las capas de la casa de ejemplo (RECINTOS, ETIQUETAS, MURO-EXT, MURO-INT, MURO-BANO, PUERTAS, VENTANAS, COTAS y CIELOS); a la segunda, el tamaño de la página en puntos y cuántas líneas tiene. Si contesta las dos, está listo.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Las dos respuestas de Claude en la terminal: la del DXF y la del PDF."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "El DXF",
            "texto": "Leé planos/casa-ejemplo.dxf y decime unidades, capas y cuántas polilíneas cerradas hay en la capa de recintos. Solo lectura."
          },
          {
            "tipo": "pedido",
            "etiqueta": "El PDF",
            "texto": "Abrí planos/casa-ejemplo.pdf con pdfplumber y decime el tamaño de la página en puntos y cuántas líneas tiene."
          }
        ]
      },
      {
        "n": "2.7",
        "titulo": "Si algo no anda",
        "cuerpo": "| Error | Causa | Solución |\n| `uv` no se reconoce | Terminal abierta antes de instalar | Cerrar y abrir una nueva |\n| `ezdxf.DXFStructureError` | El archivo es DWG, no DXF (ezdxf no lee DWG) | Guardar una copia como DXF (`SAVEAS` → DXF) |\n| Áreas un millón de veces más grandes | Unidades en milímetros leídas como metros (`INSUNITS = 4`) | Lección 3: lo primero es leer `$INSUNITS` |\n| El PDF no tiene líneas ni texto | Es un escaneado (una imagen) | Lección 5: no se mide con código; se mide a mano |\n| El texto del PDF sale vacío o en símbolos | Las fuentes se imprimieron como curvas | Lección 5: no hay marcas que contar; se cuenta en el DXF o a mano |\n| Excel muestra fórmulas en vez de números | Se abrió en una vista protegida o sin recalcular | Habilitar edición; en LibreOffice, Datos → Calcular → Recalcular |",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Seis tarjetas de error, cada una con su causa y su solución."
        }
      }
    ],
    "resultado": "`uv run` sin errores y Claude que contesta «metros» al leer la casa de ejemplo."
  },
  {
    "n": 3,
    "slug": "3-medir-con-criterio",
    "titulo": "Medir, no solo contar: el criterio y la regla de áreas",
    "objetivo": "Escribir el criterio de medición antes de medir y aplicar la regla de áreas por geometría.",
    "laminas": [
      {
        "n": "3.1",
        "titulo": "¿El área de qué?",
        "cuerpo": "«El área de la sala»: ¿a ejes, a caras interiores, con o sin el muro? Tres respuestas correctas, tres números distintos. Por eso el criterio se escribe **antes**.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "La sala de la casa de ejemplo con tres contornos que se dibujan uno tras otro (a ejes, a caras interiores y por fuera), cada uno con su número al lado."
        }
      },
      {
        "n": "3.2",
        "titulo": "El criterio se escribe",
        "cuerpo": "Pídale a Claude que le pregunte, de a una, cómo mide su oficina: unidad, a ejes o a caras, qué vanos se descuentan y desde qué tamaño, cómo se cuenta el desperdicio (**aparte**, nunca escondido en la cantidad). El criterio es el de su oficina: el curso no le da uno. Queda en `criterios.md`, y Claude lo lee en cada pedido. El pedido, en el bloque de abajo (en el kit, `PEDIDOS.md`).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "El pedido, las preguntas de Claude y las respuestas; al final se abre `criterios.md`."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "Escribir el criterio",
            "texto": "Quiero escribir criterios.md. Preguntame de a una: unidad de cada rubro, si mido a ejes o a caras, qué vanos descuento y desde qué tamaño, cómo trato el desperdicio (aparte), qué hago con lo que el plano no dice. Después escribilo y mostrámelo antes de guardarlo."
          }
        ]
      },
      {
        "n": "3.3",
        "titulo": "Primero, las unidades",
        "cuerpo": "Lo primero que se lee de un DXF es `$INSUNITS`. La casa de ejemplo: 6 (metros). `home_floor_plan`: 4 (milímetros). Un m² en milímetros son 1.000.000 de unidades².",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "«INSUNITS = 4» y un cuadrado que crece un millón de veces."
        }
      },
      {
        "n": "3.4",
        "titulo": "La regla de áreas",
        "cuerpo": "Si un recinto tiene un **polígono cerrado** que contiene su etiqueta, el área sale de la **geometría**; la etiqueta solo se compara. Diferencia de más de **2 %**: confianza baja y una fila en Observaciones con las dos cifras. Sin polígono: la etiqueta, confianza media. Sin nada: **FALTA**. *(Es la regla que usamos en Vion desde octubre de 2026, la misma del curso Claude + AutoCAD.)*",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Un diagrama de decisión de cuatro ramas: polígono que coincide, polígono con más de 2 % de diferencia, solo la etiqueta y nada."
        }
      },
      {
        "n": "3.5",
        "titulo": "Lo difícil: el polígono que contiene a dos",
        "cuerpo": "Si un polígono contiene dos etiquetas, se asigna a la única cuya área coincide. Si no hay una sola, no se usa. Nunca se reparte «a ojo».",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 25,
          "seVe": "Chispa, de medio cuerpo; a su lado, un rectángulo con dos etiquetas adentro.",
          "dice": "A veces un polígono encierra dos etiquetas. ¿De cuál es? Si una sola coincide con el área, de esa. Si no, no se usa, y queda para que usted lo mire. Lo que no tiene una sola respuesta, no se adivina."
        }
      },
      {
        "n": "3.6",
        "titulo": "Medir la casa de ejemplo",
        "cuerpo": "Con el criterio escrito, Claude escribe `medir/areas.py`, que lee `planos/casa-ejemplo.dxf` con ezdxf y aplica la regla de áreas. La salida: una tabla con recinto, área de dibujo, área de etiqueta, diferencia y confianza. El pedido, en el bloque de abajo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "Claude escribe y corre el script, en cámara rápida; la tabla aparece en la terminal."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "Medir las áreas",
            "texto": "Con criterios.md, escribí medir/areas.py que lea planos/casa-ejemplo.dxf con ezdxf y aplique la regla de áreas. Salida: una tabla recinto, área de dibujo, área de etiqueta, diferencia, confianza."
          }
        ]
      },
      {
        "n": "3.7",
        "titulo": "Contra la cuantificación a mano",
        "cuerpo": "Se compara con `casa-ejemplo-control.xlsx` (la medición de la ingeniera). Lo que coincide queda; lo que no, se explica antes de seguir.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "Las dos tablas lado a lado: las coincidencias en verde y la diferencia que haya en ámbar, con su explicación."
        }
      },
      {
        "n": "3.8",
        "titulo": "Lo que se lleva",
        "cuerpo": "`criterios.md` y las áreas con su confianza. Próxima: muros, vanos y cielos, a Excel.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina de cierre: `criterios.md` y la tabla de áreas con su confianza."
        }
      }
    ],
    "resultado": "`criterios.md` y las áreas de la casa de ejemplo con su confianza."
  },
  {
    "n": 4,
    "slug": "4-del-dxf-a-cantidades",
    "titulo": "De DWG/DXF a la hoja de cantidades",
    "objetivo": "Pasar de las áreas a una hoja de cantidades de obra (pisos, cielos, muros netos de vanos, repello y pintura) que se pueda revisar.",
    "laminas": [
      {
        "n": "4.1",
        "titulo": "Así termina",
        "cuerpo": "Hojas: Resumen · Pisos · Cielos · Muros · Vanos · Supuestos · Observaciones. Cada fila con su unidad, su fórmula y su confianza.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 15,
          "seVe": "El Excel se abre y la imagen recorre sus pestañas."
        }
      },
      {
        "n": "4.2",
        "titulo": "Muros: largo × alto − vanos",
        "cuerpo": "Muro neto = largo por eje × altura − ancho × alto de cada vano que lo corta (si pasa el tamaño mínimo de `criterios.md`). El largo sale de la capa de muros; el vano, de los atributos de la puerta o ventana; **la altura, de una celda de Supuestos** si el plano no la acota.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Un muro que se mide, un vano que se recorta y la fórmula que se arma pieza por pieza."
        }
      },
      {
        "n": "4.3",
        "titulo": "Cada supuesto, a la vista",
        "cuerpo": "Altura de muros, espesor de repello, alturas de cielo: van en la hoja **Supuestos**, con quién lo decidió. El Resumen los muestra arriba. Si cambia uno, cambian todos los totales.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "La celda «Altura de muro» cambia y los totales se recalculan; en la réplica, la altura es «h», no un número."
        }
      },
      {
        "n": "4.4",
        "titulo": "El pedido",
        "cuerpo": "El pedido de la lección (en el bloque de abajo; en el kit, `PEDIDOS.md`): pisos y cielos por recinto, muros por tipo con descuento de vanos, repello y pintura por cara, totales con fórmulas, supuestos en su hoja, confianza en cada fila y, al final, la comparación con la medición a mano.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El pedido de la lección, escrito en Claude Code."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "La hoja de cantidades",
            "texto": "Con criterios.md y medir/areas.py, escribí cantidades/extraer_dxf.py: pisos y cielos por recinto, muros por tipo con descuento de vanos, repello y pintura por cara. Totales con fórmulas. Supuestos en su hoja. Confianza en cada fila. Al terminar, compará con casa-ejemplo-control.xlsx y explicame cada diferencia."
          }
        ]
      },
      {
        "n": "4.5",
        "titulo": "Claude escribe, corre y compara",
        "cuerpo": "Claude arma el script, lo corre y compara con la medición a mano. Si encuentra un error suyo, lo dice y lo corrige.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 50,
          "seVe": "Claude escribe el script, lo corre y lo compara con la medición a mano, en cámara rápida."
        }
      },
      {
        "n": "4.6",
        "titulo": "El edificio del curso de AutoCAD, otra vez",
        "cuerpo": "Con `home_floor_plan` (una copia DXF): los recintos salen; los muros, como en el curso de AutoCAD, solo como orden de magnitud: son líneas sueltas sin espesor. **Un plano mal dibujado para cuantificar no se arregla con IA.**",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "El mismo script sobre el DXF del edificio; la hoja Muros en confianza «baja» y la Observación que lo explica."
        }
      },
      {
        "n": "4.7",
        "titulo": "Tres reglas de dibujo",
        "cuerpo": "Para que el próximo plano se pueda medir:\n\n1. Un polígono cerrado por recinto, en su capa.\n2. Muros por eje, en una capa por tipo.\n3. Puertas y ventanas como bloques, con ancho y alto en atributos.\n\n*(Son las tres reglas de dibujo del reporte del curso Claude + AutoCAD.)*",
        "apoyo": {
          "tipo": "motion",
          "conChispa": true,
          "segundos": 30,
          "seVe": "Chispa, en capa, habla; después, una lista con las tres reglas, que se tildan.",
          "dice": "Si dibuja así, la próxima cuantificación sale en minutos. Si no, ninguna IA lo salva."
        }
      },
      {
        "n": "4.8",
        "titulo": "Lo que se lleva",
        "cuerpo": "`cantidades.xlsx` con sus supuestos. Próxima: lo mismo, desde un PDF.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina de cierre: `cantidades.xlsx` con sus supuestos."
        }
      }
    ],
    "resultado": "`cantidades.xlsx` de la casa de ejemplo, con pisos, muros netos de vanos, cielos, sus supuestos y su confianza."
  },
  {
    "n": 5,
    "slug": "5-planos-en-pdf",
    "titulo": "PDF: lo que se puede leer y lo que falla",
    "objetivo": "Sacar cantidades de un PDF vectorial con la escala calibrada, y reconocer el PDF que no se mide con código.",
    "laminas": [
      {
        "n": "5.1",
        "titulo": "El plano que llega por correo",
        "cuerpo": "Casi nunca le mandan el DWG. Le mandan un PDF. Antes de medir, hay que saber **qué clase** de PDF es.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 20,
          "seVe": "Chispa, en capa, al lado de un PDF que se abre.",
          "dice": "Casi nunca le mandan el DWG. Le mandan un PDF. Y no todos los PDF son iguales: algunos se pueden medir con código, y otros no."
        }
      },
      {
        "n": "5.2",
        "titulo": "¿Vectorial o escaneado?",
        "cuerpo": "Pregúntele a Claude (en el bloque de abajo) cuántas líneas, letras e imágenes tiene cada página. Con miles de líneas y letras: vectorial. Con una imagen que ocupa toda la página: escaneado.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "La pregunta sobre los dos PDF de la casa de ejemplo; las dos respuestas, lado a lado."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "¿Este PDF es vectorial o escaneado? Decime cuántas líneas, letras e imágenes tiene cada página."
          }
        ]
      },
      {
        "n": "5.3",
        "titulo": "La escala se calibra",
        "cuerpo": "Un PDF mide en **puntos** (1/72 de pulgada). Para pasar a metros: elija una **cota conocida**, mida su largo en puntos y saque el factor. Compruébelo con **una segunda cota**: si no coinciden en menos de 0,5 %, no siga.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "Una cota de 4,20 m se ilumina, su largo en puntos aparece al lado y sale el factor; una segunda cota lo confirma con una tilde."
        }
      },
      {
        "n": "5.4",
        "titulo": "Por qué nunca «la escala dice 1:50»",
        "cuerpo": "El rótulo dice 1:50, pero el PDF pudo imprimirse «ajustado a la hoja». La escala que vale es la que se mide en el PDF, no la que está escrita.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa, de frente.",
          "dice": "El rótulo dice uno a cincuenta. Pero si alguien lo imprimió ajustado a la hoja, ya no lo es. La escala se mide, no se lee."
        }
      },
      {
        "n": "5.5",
        "titulo": "Lo que sí se saca",
        "cuerpo": "Con pdfplumber: las **marcas** de texto con su posición («P-1», «V-2») → conteo por tipo; los **rectángulos y polígonos cerrados** → áreas con el factor; el **largo de las líneas** de una zona → orden de magnitud. Sin capas ni bloques: todo con confianza un escalón más baja que en el DXF. El pedido, en el bloque de abajo (en el kit, `PEDIDOS.md`).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "El pedido, la corrida de `cantidades/extraer_pdf.py` y la tabla con las marcas contadas y las áreas."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "Cantidades desde el PDF",
            "texto": "Escribí cantidades/extraer_pdf.py con pdfplumber: primero decí si cada página es vectorial; pedime dos cotas para calibrar la escala y comprobá que coincidan; contá las marcas de puertas y ventanas por tipo con su posición; medí los polígonos cerrados de los recintos con el factor. Todo con confianza un escalón más baja que en el DXF. Al final, compará con salida/cantidades.xlsx del DXF y explicame cada diferencia."
          }
        ]
      },
      {
        "n": "5.6",
        "titulo": "DXF contra PDF",
        "cuerpo": "El mismo plano por los dos caminos: lo que coincide da confianza; lo que no, se mira. Es la mejor revisión automática que hay.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Dos columnas, «DXF» y «PDF», que se llenan; las filas iguales se unen con una línea verde."
        }
      },
      {
        "n": "5.7",
        "titulo": "Lo que falla",
        "cuerpo": "- **Texto como curvas** (no hay marcas).\n- **Líneas partidas** en muchos tramos (el largo se duplica).\n- **Varias escalas** en una hoja (un detalle a 1:20 junto a la planta a 1:50).\n- **Escaneado**: no hay nada que medir con código.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "Una lista con los cuatro casos, cada uno con un recorte real de un PDF."
        }
      },
      {
        "n": "5.8",
        "titulo": "El escaneado: la IA orienta, usted mide",
        "cuerpo": "Claude puede mirar la página y decir «hay unas ocho ventanas». Anthropic lo dice: sus conteos en imágenes son **aproximados**. Úselo para no olvidarse de nada; las cifras, con una herramienta de medición en PDF y su mano.\n\n> «Claude can give approximate counts of objects in an image but might not always be precisely accurate, especially with large numbers of small objects» ([documentación de Anthropic, Vision](https://platform.claude.com/docs/en/build-with-claude/vision)).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "Claude mira el escaneado y da una lista aproximada; al lado, la cita de la documentación; la fila queda «a medir a mano»."
        }
      },
      {
        "n": "5.9",
        "titulo": "Lo que se lleva",
        "cuerpo": "Saber qué PDF se mide con código, la escala calibrada con dos cotas y el cruce DXF contra PDF. Próxima: los precios.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina de cierre: qué PDF se mide con código, la escala calibrada con dos cotas y el cruce DXF contra PDF."
        }
      }
    ],
    "resultado": "La escala calibrada, las marcas contadas en el PDF y el escaneado marcado «a medir a mano»."
  },
  {
    "n": 6,
    "slug": "6-base-de-precios",
    "titulo": "Su base de precios y el presupuesto (nunca inventar precios)",
    "objetivo": "Armar una base de precios propia y un presupuesto que se niega a inventar.",
    "laminas": [
      {
        "n": "6.1",
        "titulo": "¿De dónde salió este precio?",
        "cuerpo": "Una IA puede escribir «m² de cerámica: 18.500» con toda seguridad. No dice de qué proveedor, de qué fecha ni si lleva impuesto. Ese número **no entra** a un presupuesto.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Un chat: a «¿cuánto cuesta el m² de cerámica?» la IA contesta un número muy seguro; encima cae un sello «¿FUENTE? ¿FECHA?»."
        }
      },
      {
        "n": "6.2",
        "titulo": "La regla del curso",
        "cuerpo": "Un precio entra solo si tiene **fuente** (su cotización, su factura, su contrato) y **fecha**. Claude nunca escribe un precio: lo busca en su base. Si no está, la línea dice **FALTA PRECIO** y el total dice **incompleto**.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 30,
          "seVe": "Chispa, de medio cuerpo, seria.",
          "dice": "Esta es la regla más importante del curso. Ningún precio sale de una IA. Ni de la nuestra. Un precio tiene fuente y fecha: su cotización, su factura, su contrato. Si no lo tiene, el presupuesto dice: falta precio. Y se ve."
        }
      },
      {
        "n": "6.3",
        "titulo": "La base de precios",
        "cuerpo": "Una fila por insumo o actividad: código · descripción · unidad · precio · moneda · ¿con impuesto? · fuente · fecha · vigente hasta. La plantilla está en el kit, con tres filas marcadas **EJEMPLO** que no se usan.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La plantilla de la base de precios, vacía, con una nota en cada columna."
        }
      },
      {
        "n": "6.4",
        "titulo": "Cantidad × precio, con su cuenta",
        "cuerpo": "El presupuesto toma cada línea de `cantidades.xlsx`, le asigna un **código** de su base y multiplica. Desperdicio, si lo hay, en su columna y con quién lo decidió. Claude **propone** el código; usted lo confirma.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "Una línea de cantidades viaja a la base, encuentra su código, vuelve con el precio y la cuenta se arma: cantidad × (1 + desperdicio) × precio."
        }
      },
      {
        "n": "6.5",
        "titulo": "Armarlo",
        "cuerpo": "Con `cantidades.xlsx` y `base-precios.xlsx`, Claude arma `presupuesto.xlsx`: propone un código para cada línea en una columna «código propuesto» y no pone ningún precio que no esté en la base. Lo que no tenga código queda **FALTA PRECIO**, y el total dice «incompleto» si falta alguno. El pedido, en el bloque de abajo. En la demostración, la base tiene precios ficticios marcados **EJEMPLO**, nunca precios reales de proveedores.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "El pedido y el presupuesto que se arma, con dos líneas en rojo: «FALTA PRECIO»."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "etiqueta": "El presupuesto",
            "texto": "Con cantidades.xlsx y base-precios.xlsx, armá presupuesto.xlsx. Proponé un código para cada línea en una columna \"código propuesto\" y no pongas ningún precio que no esté en la base. Lo que no tenga código queda FALTA PRECIO. El total dice \"incompleto\" si falta alguno."
          }
        ]
      },
      {
        "n": "6.6",
        "titulo": "El verificador",
        "cuerpo": "`verificar_precios.py` revisa el presupuesto: cada precio existe en la base, tiene fuente y fecha, no está vencido y la moneda coincide. Si algo falla, lo lista y sale con error. Córralo antes de mandar nada.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El verificador encuentra un precio vencido y una moneda distinta; los dos se arreglan en la base, se corre de nuevo y pasa."
        }
      },
      {
        "n": "6.7",
        "titulo": "Monedas y fechas",
        "cuerpo": "Colones o dólares: una moneda por presupuesto, el tipo de cambio en Supuestos con su fecha y su fuente (el del BCCR del día, si es Costa Rica). Un precio de hace seis meses no es un precio de hoy: decida la vigencia y respétela.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Una pizarra: «MONEDA · TIPO DE CAMBIO (fuente, fecha) · VIGENCIA»."
        }
      },
      {
        "n": "6.8",
        "titulo": "Lo que se lleva",
        "cuerpo": "Su base y un presupuesto que no inventa. Próxima: la revisión que lo vuelve entregable.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina de cierre: la base de precios y el presupuesto que no inventa."
        }
      }
    ],
    "resultado": "`base-precios.xlsx` y `presupuesto.xlsx` con «FALTA PRECIO» donde corresponde."
  },
  {
    "n": 7,
    "slug": "7-revision-y-entrega",
    "titulo": "La revisión profesional y la entrega",
    "objetivo": "Convertir el borrador en un entregable revisado y firmado por un profesional responsable.",
    "laminas": [
      {
        "n": "7.1",
        "titulo": "Hasta acá, todo es borrador",
        "cuerpo": "Todo lo que hizo Claude en este curso dice **BORRADOR**. Lo que cambia eso no es otra IA: es una persona con título y responsabilidad que lo revisa y lo firma.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa, de frente, delante de un PDF con el sello «BORRADOR».",
          "dice": "Hasta acá, todo es borrador. Lo que lo cambia no es otra IA. Es una persona que sabe, que lo revisa, y que lo firma."
        }
      },
      {
        "n": "7.2",
        "titulo": "La lista de revisión",
        "cuerpo": "1. Unidades y escala (dos cotas).\n2. Criterio aplicado igual en todo.\n3. Supuestos con quién los decidió.\n4. Observaciones resueltas una por una.\n5. **Muestra contada a mano** (un tipo de pieza y un sector).\n6. DXF contra PDF, si hay los dos.\n7. Cada precio con fuente y fecha (el verificador en 0).\n8. Sin errores de fórmula.\n9. Lo que el plano no dice, dicho en la entrega.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 35,
          "seVe": "Una lista que se tilda punto por punto junto a la grabación del Excel."
        }
      },
      {
        "n": "7.3",
        "titulo": "Una revisión de verdad",
        "cuerpo": "Una revisión real de la casa de ejemplo: quien revisa cuenta a mano una muestra, mira dos Observaciones y decide cada una. Lo que corrige, se corrige en el **criterio o el script**, no a mano en la celda. {{quién revisa en pantalla: por confirmar}}",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 60,
          "seVe": "Las manos y la pantalla de quien revisa, con el cronómetro del conteo a mano."
        }
      },
      {
        "n": "7.4",
        "titulo": "Lo que dice quien firma",
        "cuerpo": "Por qué una cuantificación de IA se revisa siempre, dicho por quien firma.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa, de frente, explica por qué quien firma revisa cada número.",
          "dice": "Quien firma responde por cada número. Por eso revisa la muestra, las observaciones y los precios. Si una cifra no se puede explicar, no sale."
        }
      },
      {
        "n": "7.5",
        "titulo": "La hoja de Revisión",
        "cuerpo": "En el Excel: revisó (nombre y registro profesional), fecha, muestras contadas y su diferencia, observaciones resueltas, verificador de precios en 0, decisión (aprobado, aprobado con cambios, devuelto). Sin esta hoja completa, no hay entrega.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La hoja de Revisión del kit: revisó, registro profesional, fecha, muestras, observaciones, verificador de precios y decisión."
        }
      },
      {
        "n": "7.6",
        "titulo": "La entrega",
        "cuerpo": "Un PDF de una página por plano: lo cuantificado con su confianza, los supuestos, lo que el plano no dice y el presupuesto (o «incompleto» con lo que falta). El sello BORRADOR sale **solo** cuando la hoja de Revisión está completa: el script lo comprueba.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "`entregar.py` se niega a sacar el sello con la hoja de Revisión incompleta; se completa y sale el PDF limpio."
        }
      },
      {
        "n": "7.7",
        "titulo": "Cuánto tardó (lo medido)",
        "cuerpo": "Lo que tardó la máquina y lo que tardó la revisión, medidos en este curso con la casa de ejemplo: {{las dos cifras, cuando se midan al grabar}}. La revisión no se ahorra: es lo que se cobra.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Dos cifras grandes con su etiqueta: lo que tardó la máquina y lo que tardó la revisión."
        }
      },
      {
        "n": "7.8",
        "titulo": "Sigamos",
        "cuerpo": "Si quiere que lo hagamos con sus planos, con la revisión de una ingeniera, escríbanos. Empezamos por un plano de prueba. {{la acción del cierre: por confirmar}}",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa, de medio cuerpo, y después una tarjeta con la forma de escribirnos.",
          "dice": "Si quiere esto con sus planos, revisado por una ingeniera, escríbanos. Empezamos por un plano de prueba."
        }
      }
    ],
    "resultado": "La hoja de Revisión firmada y el PDF de entrega, que deja de decir «borrador» solo cuando la revisión está completa."
  }
];
