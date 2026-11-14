// Las lecciones de «C2-cuantificacion», lámina por lámina, desde el storyboard de la aldea
// (docs/planes/cursos/C2-cuantificacion.md), reescritas para principiantes el 2026-11-14. Los videos e imágenes van en ../medios.json.
import type { LeccionCurso } from '../../tipos';

export const lecciones: LeccionCurso[] = [
  {
    "n": 1,
    "slug": "1-que-se-puede-cuantificar",
    "titulo": "Qué se puede cuantificar de un plano (y qué no)",
    "objetivo": "Saber, antes de empezar, qué cantidades van a salir con confianza según el formato del plano.",
    "resultado": "El cuadro formato × tarea: DWG o DXF, PDF vectorial y PDF escaneado frente a contar, medir y poner precio.",
    "laminas": [
      {
        "n": "1.1",
        "titulo": "1.458 m² que eran 729",
        "cuerpo": "**Cuantificar** es sacar de un plano las cantidades de una obra: piezas, metros, metros cuadrados. Parece fácil: sumar lo que hay en el archivo. No lo es.\n\nUn ejemplo real, del curso Claude + AutoCAD: al sumar todos los recintos de un edificio salían **1.458 m²**. La cifra correcta era **729 m²**. Cada planta estaba dibujada dos veces, una a escala 1:100 y otra a 1:50, y la suma contaba todo doble.\n\nPor eso este curso empieza por entender el plano antes de medirlo.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Una cifra grande, «1.458 m²», en rojo, que se parte en dos bloques iguales, «_100» y «_50»; uno se apaga y queda «729 m²»."
        }
      },
      {
        "n": "1.2",
        "titulo": "Contar, medir, poner precio",
        "cuerpo": "Cuantificar son tres trabajos distintos:\n\n- **Contar:** puertas, ventanas, inodoros. Sale bien si el plano dibuja cada pieza como un objeto con nombre.\n- **Medir:** metros cuadrados de piso, metros de muro. Sale bien si los recintos están dibujados como figuras cerradas y la escala es segura.\n- **Poner precio:** no sale de ningún plano ni de ninguna IA. Sale de **su** base de precios, con la fuente y la fecha de cada precio.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 17,
          "seVe": "Chispa, de medio cuerpo sobre el fondo crema; al costado, tres íconos (contar, medir, poner precio) que se encienden con cada palabra.",
          "dice": "Cuantificar son tres trabajos. Contar: eso la IA lo hace bien, si el plano está bien dibujado. Medir: también, si hay geometría y una escala segura. Y poner precio. Eso no sale de ningún plano, ni de ninguna IA. Sale de su base de precios."
        }
      },
      {
        "n": "1.3",
        "titulo": "El formato decide",
        "cuerpo": "Lo que se puede sacar depende del tipo de archivo:\n\n- **DWG o DXF:** son los archivos de dibujo de AutoCAD y otros programas de CAD. Tienen capas (grupos de líneas con un nombre, por ejemplo «muros»), bloques (piezas que se repiten, como una puerta) y medidas exactas. Se puede **contar y medir**.\n- **PDF vectorial:** un PDF impreso directamente desde el programa de dibujo. Guarda las líneas y el texto con su posición, pero sin capas ni bloques. Se puede medir **calibrando la escala** y contar las marcas de texto («P-1», «V-2»).\n- **PDF escaneado:** una foto del plano en papel. Es solo una imagen: la IA puede orientarlo, pero las medidas se toman a mano.\n\nEl cuadro también viene en el kit del curso.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Un cuadro de tres por tres: DWG o DXF, PDF vectorial y PDF escaneado frente a contar, medir y poner precio, con tildes, «con cuidado» y cruces."
        }
      },
      {
        "n": "1.4",
        "titulo": "Lo mismo, en tres archivos",
        "cuerpo": "La misma ventana de la casa de ejemplo del curso, guardada de tres maneras:\n\n- En el **DXF** es un bloque con 6 datos escritos adentro, llamados **atributos**: marca, tipo, ancho, alto, material y antepecho.\n- En el **PDF vectorial** son 6 líneas, un círculo y el texto «V-2». No dice que es una ventana: hay que deducirlo.\n- En el **escaneado** son puntos de color.\n\nCuanto más información guarda el archivo, más se puede automatizar.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Un acercamiento a una ventana de la casa de ejemplo, que se separa en tres capas: el bloque con sus atributos, las líneas con su texto y los píxeles."
        }
      },
      {
        "n": "1.5",
        "titulo": "Lo que el plano no dice",
        "cuerpo": "Ningún plano trae todo. Suelen faltar la altura de los muros, cuántas veces se repite una planta en un edificio, el espesor del repello o el desperdicio de material.\n\nEsos datos **no se adivinan**. En la hoja de cantidades quedan como una celda que llena usted, a la vista en el resumen, para que cualquiera sepa qué se supuso y quién lo decidió.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Una pizarra con cuatro tarjetas, «¿altura?», «¿plantas tipo?», «¿espesor?» y «¿desperdicio?», que caen a una columna «LO PONE USTED»."
        }
      },
      {
        "n": "1.6",
        "titulo": "Quién firma",
        "cuerpo": "Una regla vale para todo el curso: **la IA mide, usted revisa y un profesional responsable firma** lo que llega a una obra o a un presupuesto. Ese orden no cambia en ninguna lección.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 9,
          "seVe": "Chispa, de frente, seria; detrás, tres golpes de texto: «LA IA MIDE · USTED REVISA · UN PROFESIONAL FIRMA».",
          "dice": "Y una regla para todo el curso. La IA mide. Usted revisa. Y lo que llega a una obra lo firma un profesional."
        }
      },
      {
        "n": "1.7",
        "titulo": "Lo que se lleva",
        "cuerpo": "Ya sabe qué se puede contar, medir y poner precio según el formato del plano, y por qué los datos que el plano no trae los decide usted.\n\nEn la próxima lección deja todo listo en su computadora. Si hizo el curso Claude + AutoCAD, ya tiene casi todo instalado.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina de cierre: el cuadro formato × tarea, completo."
        }
      }
    ]
  },
  {
    "n": 2,
    "slug": "2-puesta-a-punto",
    "titulo": "Puesta a punto: lo del curso de AutoCAD más lo nuevo",
    "objetivo": "Dejar el kit andando y abrir la casa de ejemplo en DXF y en PDF.",
    "resultado": "El kit instalado y Claude que contesta «metros» al leer la casa de ejemplo.",
    "laminas": [
      {
        "n": "2.1",
        "titulo": "Así termina esta lección",
        "cuerpo": "Al final de esta lección, Claude Code lee la casa de ejemplo y le contesta tres cosas:\n\n- las **unidades** del dibujo: metros;\n- las **capas**: 11 (las 9 de la casa, más «0» y «Defpoints», que crea el programa de dibujo);\n- cuántas **polilíneas cerradas** hay en la capa de recintos: 6, una por recinto. Una polilínea cerrada es una figura de varios lados que se cierra sobre sí misma, como el contorno de una habitación.\n\nCon eso sabe que todo quedó instalado.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 39,
          "seVe": "Claude Code lee la casa de ejemplo en la terminal y contesta las unidades, las capas y las polilíneas cerradas; un acercamiento resalta «metros»."
        }
      },
      {
        "n": "2.2",
        "titulo": "Si hizo el curso de AutoCAD, saltee esto",
        "cuerpo": "Se usan tres programas, los mismos del curso Claude + AutoCAD:\n\n- **Claude Code**, que trabaja en su computadora. Se instala desde la **terminal**, la ventana donde se escriben comandos (PowerShell en Windows, Terminal en Mac).\n- **Git**, que baja y guarda versiones de carpetas de archivos.\n- **uv**, que instala Python y las bibliotecas del kit en las versiones exactas que probamos.\n\nLos comandos están en los bloques de abajo. Después de instalar, cierre la terminal y ábrala de nuevo; `claude --version` muestra la versión y `claude doctor` revisa la instalación. Para entrar, escriba `claude` y use su cuenta paga (el plan gratis no incluye Claude Code). En Mac y Linux, uv se instala como indica [su página](https://docs.astral.sh/uv/getting-started/installation/).\n\nEste curso **no necesita AutoCAD** ni el servidor MCP: lee copias de los planos con Python y no toca el dibujo original.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina con los tres pasos: instalar Claude Code, instalar Git y uv, y comprobar con claude --version y claude doctor."
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
        "cuerpo": "El **kit** es la carpeta del curso: trae la casa de ejemplo, los programas de medir, las plantillas de Excel y los pedidos de cada lección.\n\nPóngalo en una carpeta propia, por ejemplo `C:\\cursos\\cuantificacion\\kit`, y abra ahí la terminal. `uv sync` instala Python y las bibliotecas que leen los planos y escriben el Excel (ezdxf, pdfplumber y openpyxl) en las versiones fijadas. La línea de `uv run` comprueba que las tres cargan: tiene que decir `ok`.\n\nAl final, `claude` abre Claude Code en la carpeta del kit. Claude lee primero el archivo `CLAUDE.md`, donde están las reglas de trabajo del curso. En Mac o Linux, lo mismo con / en lugar de \\.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 17,
          "seVe": "Los comandos en la terminal, con acercamientos, y «ok» al final."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Windows, en PowerShell, dentro de la carpeta del kit",
            "lenguaje": "powershell",
            "texto": "cd C:\\cursos\\cuantificacion\\kit\nuv sync          # instala Python y las bibliotecas fijadas (ezdxf 1.4.5, pdfplumber 0.11.10, openpyxl 3.1.5)\nuv run python -c \"import ezdxf, pdfplumber, openpyxl; print('ok')\"\nclaude           # abre Claude Code en la carpeta del kit (lee su CLAUDE.md)"
          }
        ]
      },
      {
        "n": "2.4",
        "titulo": "Los planos",
        "cuerpo": "El curso usa sobre todo la **casa de ejemplo**: una casa ficticia de una planta, de unos 90 m², con 6 recintos, 3 tipos de muro y 10 puertas y ventanas. Está dibujada a propósito para poder cuantificarla: cada recinto es una figura cerrada en su capa, los muros van por su eje y las puertas y ventanas son bloques con sus medidas.\n\n| Archivo | Qué es | ¿Viene en el kit? |\n| `casa-ejemplo.dxf` | El dibujo de la casa | Sí |\n| `casa-ejemplo.pdf` | El mismo plano en PDF vectorial, a escala 1:50 en hoja A3 | Sí |\n| `casa-ejemplo-ajustado.pdf` | El mismo PDF impreso «ajustado a la hoja»: la escala ya no es 1:50 | Sí |\n| `casa-ejemplo-escaneado.pdf` | El PDF impreso y escaneado, algo torcido | Sí |\n| `casa-ejemplo-control.xlsx` | La cuantificación hecha a mano, rectángulo por rectángulo: la vara contra la que se compara todo | Sí |\n| `home_floor_plan.dwg` | El edificio del curso de AutoCAD, para ver lo que falla al medir (lecciones 1 y 4) | No: es un plano de muestra de Autodesk; se baja de [su página](https://autodesk.com/autocadlt-samples) |",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 17,
          "seVe": "La carpeta planos/ del kit en la terminal y su archivo ENLACES.md."
        }
      },
      {
        "n": "2.5",
        "titulo": "Una regla antes de empezar",
        "cuerpo": "Se trabaja siempre **sobre copias**. El kit trae un `CLAUDE.md` que se lo recuerda a Claude: nunca escribir en la carpeta `planos/`, donde están los originales; todo lo que genera va a la carpeta `salida/`, y usted lo revisa.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 12,
          "seVe": "Chispa, al lado de la carpeta planos/ del kit, la señala: planos/ solo se lee y salida/ guarda lo que genera Claude.",
          "dice": "Los planos no se tocan. Nunca. Todo lo que genere Claude va a otra carpeta, y usted lo revisa."
        }
      },
      {
        "n": "2.6",
        "titulo": "Comprobar",
        "cuerpo": "En `claude`, dentro del kit, haga las dos preguntas de abajo:\n\n- A la primera tiene que contestar **metros** y las capas de la casa: RECINTOS, ETIQUETAS, MURO-EXT, MURO-INT, MURO-BANO, PUERTAS, VENTANAS, COTAS y CIELOS (más «0» y «Defpoints»).\n- A la segunda, el tamaño de la página en **puntos** (la unidad de medida de un PDF) y cuántas líneas tiene.\n\nSi contesta las dos, está listo para la lección 3.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "Las dos respuestas de Claude en la terminal: la del DXF, con las capas, y la del PDF, con el tamaño de la página y sus líneas."
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
        "cuerpo": "Los errores más comunes y cómo se arreglan:\n\n| Error | Causa | Solución |\n| `uv` no se reconoce | La terminal se abrió antes de instalar | Ciérrela y abra una nueva |\n| `ezdxf.DXFStructureError` | El archivo es DWG, no DXF (ezdxf no lee DWG) | Guarde una copia como DXF (en AutoCAD, `SAVEAS` → DXF) |\n| Áreas un millón de veces más grandes | El dibujo está en milímetros y se leyó como metros | Lección 3: lo primero es leer la unidad del dibujo |\n| El PDF no tiene líneas ni texto | Es un escaneado (una imagen) | Lección 5: se mide a mano |\n| El texto del PDF sale vacío o en símbolos | Las letras se imprimieron como dibujo | Lección 5: cuente en el DXF o a mano |\n| Excel muestra fórmulas en vez de números | Se abrió en vista protegida o sin recalcular | Habilite la edición; en LibreOffice, Datos → Calcular → Recalcular |",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Seis tarjetas de error, cada una con su causa y su solución."
        }
      }
    ]
  },
  {
    "n": 3,
    "slug": "3-medir-con-criterio",
    "titulo": "Medir, no solo contar: el criterio y la regla de áreas",
    "objetivo": "Escribir el criterio de medición antes de medir y sacar las áreas de los recintos de la geometría del dibujo.",
    "resultado": "`criterios.md` y las áreas de la casa de ejemplo con su confianza.",
    "laminas": [
      {
        "n": "3.1",
        "titulo": "¿El área de qué?",
        "cuerpo": "«El área de la sala» parece una pregunta simple, pero tiene tres respuestas correctas según por dónde se mida. En la sala-comedor de la casa de ejemplo:\n\n- **a ejes** (por el centro de los muros): 27,00 m²;\n- **a caras interiores** (lo que se pisa): 25,31 m²;\n- **por fuera** de los muros: 28,74 m².\n\nTres números distintos para el mismo recinto. Por eso, antes de medir, se escribe cómo se mide.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "La sala de la casa de ejemplo con tres contornos que se dibujan uno tras otro (a ejes, a caras interiores y por fuera), cada uno con su número al lado."
        }
      },
      {
        "n": "3.2",
        "titulo": "El criterio se escribe",
        "cuerpo": "El **criterio de medición** son las reglas de su oficina: qué unidad usa cada rubro, si se mide a ejes o a caras, qué huecos de puertas y ventanas se descuentan y desde qué tamaño, y cómo se cuenta el desperdicio (siempre **aparte**, nunca escondido en la cantidad).\n\nEl curso no le da un criterio: lo escribe usted. Pídale a Claude que le pregunte de a una cosa, con el pedido de abajo (también está en el kit, en `PEDIDOS.md`). Al final, Claude lo guarda en `criterios.md` y lo lee en cada pedido siguiente.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 54,
          "seVe": "El pedido en Claude Code, las preguntas de Claude de a una, las respuestas y, al final, criterios.md abierto."
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
        "cuerpo": "Lo primero que se lee de un DXF es su **unidad**, guardada en una variable llamada `$INSUNITS`. En la casa de ejemplo vale 6, que quiere decir metros. En el edificio del curso de AutoCAD vale 4: milímetros.\n\nLa diferencia importa: un metro cuadrado son 1.000.000 de milímetros cuadrados. Si se lee un dibujo en milímetros como si fuera en metros, las áreas salen un millón de veces más grandes.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "«INSUNITS = 4» y un cuadrado que crece un millón de veces."
        }
      },
      {
        "n": "3.4",
        "titulo": "La regla de áreas",
        "cuerpo": "Para cada recinto, el área se decide así:\n\n- Si hay una **figura cerrada** dibujada alrededor de la etiqueta del recinto, el área sale de esa figura. El número escrito en la etiqueta solo se usa para comparar.\n- Si la figura y la etiqueta difieren en más de **2 %**, la confianza es **baja** y queda una observación con las dos cifras.\n- Si no hay figura, se usa la etiqueta, con confianza **media**.\n- Si no hay nada, la fila dice **FALTA**.\n\nEs la misma regla del curso Claude + AutoCAD, la que usamos en Vion.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Un diagrama de decisión de cuatro ramas: polígono que coincide, polígono con más de 2 % de diferencia, solo la etiqueta y nada."
        }
      },
      {
        "n": "3.5",
        "titulo": "Lo difícil: la figura que contiene a dos",
        "cuerpo": "A veces una figura cerrada encierra dos etiquetas de recinto. ¿De cuál es? Se asigna a la única cuya área coincide con la de la figura. Si ninguna coincide, o coinciden las dos, la figura no se usa y queda para que usted la mire. Nunca se reparte «a ojo».",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 14,
          "seVe": "Chispa, de medio cuerpo; a su lado, un rectángulo con dos etiquetas adentro.",
          "dice": "A veces un polígono encierra dos etiquetas. ¿De cuál es? Si una sola coincide con el área, de esa. Si no, no se usa, y queda para que usted lo mire. Lo que no tiene una sola respuesta, no se adivina."
        }
      },
      {
        "n": "3.6",
        "titulo": "Medir la casa de ejemplo",
        "cuerpo": "Con el criterio escrito, se le pide a Claude que escriba un programa corto, `medir/areas.py`, que lee el DXF y aplica la regla de áreas. El pedido está abajo.\n\nEl resultado es una tabla con cada recinto, el área del dibujo, el área de la etiqueta, la diferencia y la confianza. En la casa de ejemplo, cinco recintos coinciden. El **Dormitorio 1** queda en confianza baja: su etiqueta dice 18,72 m² y el dibujo mide 17,35 m². Conviene que el criterio diga sobre qué se calcula la diferencia: sobre el dibujo da 7,9 %.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "Claude escribe y corre el programa en la terminal; aparece la tabla de áreas con el Dormitorio 1 en confianza baja."
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
        "cuerpo": "Las áreas del programa se comparan con `casa-ejemplo-control.xlsx`, la cuantificación de la casa hecha a mano, rectángulo por rectángulo (las cuentas están en el kit). Lo que coincide queda; lo que no, se explica antes de seguir.\n\nEn la casa de ejemplo coinciden las 16 filas.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 19,
          "seVe": "El programa del kit compara sus resultados con la cuantificación a mano: las 16 filas coinciden."
        }
      },
      {
        "n": "3.8",
        "titulo": "Lo que se lleva",
        "cuerpo": "Ya tiene el criterio de su oficina escrito en `criterios.md` y las áreas de la casa de ejemplo, cada una con su confianza.\n\nEn la próxima lección: muros, puertas, ventanas y cielos, todo en una hoja de Excel.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina de cierre: `criterios.md` y la tabla de áreas con su confianza."
        }
      }
    ]
  },
  {
    "n": 4,
    "slug": "4-del-dxf-a-cantidades",
    "titulo": "De DWG/DXF a la hoja de cantidades",
    "objetivo": "Pasar de las áreas a una hoja de cantidades de obra (pisos, cielos, muros netos de vanos, repello y pintura) que se pueda revisar.",
    "resultado": "`cantidades.xlsx` de la casa de ejemplo, con pisos, muros netos de vanos, cielos, sus supuestos y su confianza.",
    "laminas": [
      {
        "n": "4.1",
        "titulo": "Así termina",
        "cuerpo": "Al final de esta lección tiene `cantidades.xlsx`, una hoja de Excel con siete pestañas: **Resumen, Pisos, Cielos, Muros, Vanos, Supuestos y Observaciones**.\n\nCada fila lleva su unidad, la fórmula con la que se calcula y su confianza. Por ejemplo, el piso de porcelanato suma 75,91 m², y queda en confianza baja porque incluye el Dormitorio 1.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 16,
          "seVe": "Réplica de la hoja de cantidades que sale del kit, con sus cifras reales: el recorrido por las siete pestañas."
        }
      },
      {
        "n": "4.2",
        "titulo": "Muros: largo × alto − vanos",
        "cuerpo": "El área neta de un muro se calcula así: **largo por su eje × altura − los vanos** (los huecos de puertas y ventanas) que lo atraviesan, si son más grandes que el tamaño mínimo que fijó en `criterios.md`.\n\n- El **largo** sale de la capa de muros del dibujo.\n- El tamaño de cada **vano**, de los atributos de la puerta o ventana.\n- La **altura**, de una celda de la hoja Supuestos, porque el plano no la trae.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Un muro que se mide, un vano que se recorta y la fórmula que se arma pieza por pieza."
        }
      },
      {
        "n": "4.3",
        "titulo": "Cada supuesto, a la vista",
        "cuerpo": "Todo lo que el plano no dice va en la hoja **Supuestos**: la altura de los muros, el espesor del repello, la altura de los cielos, y quién decidió cada valor. El Resumen los muestra arriba.\n\nComo los totales son fórmulas, si cambia un supuesto, cambian solos todos los totales que dependen de él.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "La celda «Altura de muro» cambia y los totales se recalculan; en la réplica, la altura es «h», no un número."
        }
      },
      {
        "n": "4.4",
        "titulo": "El pedido",
        "cuerpo": "El pedido de la lección está en el bloque de abajo (y en el kit, en `PEDIDOS.md`). Pide pisos y cielos por recinto, muros por tipo con el descuento de vanos, repello y pintura por cara, totales con fórmulas, los supuestos en su hoja y la confianza en cada fila. Al final, Claude compara con la cuantificación a mano y explica cada diferencia.",
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
        "cuerpo": "Claude escribe el programa `cantidades/extraer_dxf.py`, lo corre y compara el resultado con la cuantificación a mano.\n\nEn la grabación pasó un error de verdad: en la primera corrida, el repello y la pintura salieron 0,07 m² de menos. El programa descartaba los tramos de pared de menos de 5 cm, y eran escalones reales de 1,5 cm. Claude lo encontró al comparar, lo corrigió y la segunda corrida coincidió. Para eso sirve la comparación.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 50,
          "seVe": "Claude escribe el programa, lo corre, encuentra la diferencia de 0,07 m², la corrige y vuelve a comparar."
        }
      },
      {
        "n": "4.6",
        "titulo": "El edificio del curso de AutoCAD, otra vez",
        "cuerpo": "¿Qué pasa con un plano que no se dibujó para cuantificar? Así salió el edificio de muestra de Autodesk del curso de AutoCAD, cuantificado en Vion:\n\n- **Recintos:** hay 96, pero solo 31 tienen una figura cerrada que se pueda medir; los demás dependen del número escrito a mano en su etiqueta.\n- **Muros:** son líneas sueltas, sin espesor ni altura. La hoja Muros dice «orden de magnitud, no usar para presupuesto», con confianza baja.\n- **La primera observación:** cada planta está dibujada dos veces, a 1:100 y a 1:50.\n\nUn plano mal dibujado para cuantificar no se arregla con IA.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 19,
          "seVe": "Réplica de la hoja de cantidades del edificio de Autodesk, con sus cifras reales: el resumen de recintos, la hoja Muros marcada como orden de magnitud y la observación de la doble escala."
        }
      },
      {
        "n": "4.7",
        "titulo": "Tres reglas de dibujo",
        "cuerpo": "Para que el próximo plano se pueda medir solo, se dibuja así:\n\n1. Un **polígono cerrado por recinto**, en su capa, con la etiqueta adentro.\n2. Los **muros por su eje**, en una capa por tipo de muro.\n3. Las **puertas y ventanas como bloques**, con el ancho y el alto en sus atributos.\n\nSon las tres reglas del reporte del curso Claude + AutoCAD.",
        "apoyo": {
          "tipo": "motion",
          "conChispa": true,
          "segundos": 22,
          "seVe": "Chispa explica por qué importa cómo se dibuja; después, la lista de las tres reglas, que se tildan.",
          "dice": "Si dibuja así, la próxima cuantificación sale en minutos. Si no, ninguna IA lo salva."
        }
      },
      {
        "n": "4.8",
        "titulo": "Lo que se lleva",
        "cuerpo": "Ya tiene `cantidades.xlsx` de la casa de ejemplo, con sus supuestos a la vista y la confianza de cada fila.\n\nEn la próxima lección: lo mismo, pero desde un PDF.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina de cierre: `cantidades.xlsx` con sus supuestos."
        }
      }
    ]
  },
  {
    "n": 5,
    "slug": "5-planos-en-pdf",
    "titulo": "PDF: lo que se puede leer y lo que falla",
    "objetivo": "Sacar cantidades de un PDF vectorial con la escala calibrada, y reconocer el PDF que no se mide con código.",
    "resultado": "La escala calibrada, las marcas contadas en el PDF y el escaneado marcado «a medir a mano».",
    "laminas": [
      {
        "n": "5.1",
        "titulo": "El plano que llega por correo",
        "cuerpo": "Casi nunca le mandan el archivo de dibujo. Le mandan un PDF. Y no todos los PDF son iguales: algunos se pueden medir con un programa y otros no. Antes de medir, hay que saber **qué clase de PDF** es.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 13,
          "seVe": "Chispa, al lado de la casa de ejemplo abierta en PDF, plantea la pregunta: ¿vectorial o escaneado?",
          "dice": "Casi nunca le mandan el DWG. Le mandan un PDF. Y no todos los PDF son iguales: algunos se pueden medir con código, y otros no."
        }
      },
      {
        "n": "5.2",
        "titulo": "¿Vectorial o escaneado?",
        "cuerpo": "Pregúntele a Claude cuántas líneas, letras e imágenes tiene cada página (el pedido está abajo). En la casa de ejemplo:\n\n- El **PDF vectorial** tiene 82 líneas, 27 rectángulos y 739 letras, y ninguna imagen.\n- El **escaneado** tiene una sola imagen y ninguna línea ni letra.\n\nMuchas líneas y letras: vectorial. Una imagen que ocupa la página: escaneado.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "La pregunta sobre los dos PDF de la casa en Claude Code y las dos respuestas, con su tabla de líneas, letras e imágenes."
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
        "cuerpo": "Un PDF mide en **puntos**: un punto es 1/72 de pulgada. Para pasar a metros, la escala se **calibra**: se elige una medida conocida del plano (una cota), se mide su largo en puntos y se saca el factor.\n\nEn la casa de ejemplo, la cota de 12,00 m mide 680,315 puntos, y la de 4,80 m mide 272,126 puntos: las dos dan el mismo factor, que corresponde a 1:50 exacto. Siempre se comprueba con **una segunda cota**: si no coinciden en menos de 0,5 %, no se sigue.\n\nEn el PDF «ajustado a la hoja», la misma cota de 12,00 m da 1:58,8, aunque el rótulo dice 1:50.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "La cota de 12,00 m se ilumina con su largo en puntos y sale el factor; la de 4,80 m lo confirma; en el PDF ajustado, la misma cota da 1:58,8."
        }
      },
      {
        "n": "5.4",
        "titulo": "Por qué nunca «la escala dice 1:50»",
        "cuerpo": "El rótulo del plano dice 1:50, pero si alguien lo imprimió «ajustado a la hoja», ya no lo es. La escala que vale es la que se mide en el PDF, nunca la que está escrita.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 9,
          "seVe": "Chispa, de frente.",
          "dice": "El rótulo dice uno a cincuenta. Pero si alguien lo imprimió ajustado a la hoja, ya no lo es. La escala se mide, no se lee."
        }
      },
      {
        "n": "5.5",
        "titulo": "Lo que sí se saca",
        "cuerpo": "De un PDF vectorial, con la biblioteca pdfplumber, se puede sacar:\n\n- las **marcas** de texto con su posición («P-1», «V-2»), para contar puertas y ventanas por tipo;\n- los **rectángulos y figuras cerradas**, para medir áreas con el factor de escala;\n- el **largo de las líneas** de una zona, solo como orden de magnitud.\n\nComo el PDF no tiene capas ni bloques, todo lleva una confianza un escalón más baja que en el DXF. El pedido está abajo. En la casa de ejemplo, el programa calibra la escala, cuenta las 10 marcas y mide las 6 áreas.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 23,
          "seVe": "La corrida del programa del PDF: calibra la escala, cuenta las 10 marcas y mide las 6 áreas."
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
        "cuerpo": "El mismo plano, medido por los dos caminos. En la casa de ejemplo coinciden las 11 filas: las 6 áreas y los 5 tipos de puertas y ventanas.\n\nLo que coincide da confianza; lo que no, se mira. Medir por dos caminos es la mejor revisión automática que hay.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Dos columnas, «DXF» y «PDF», que se llenan; las filas iguales se unen con una línea verde."
        }
      },
      {
        "n": "5.7",
        "titulo": "Lo que falla",
        "cuerpo": "Un PDF no siempre se puede medir con un programa. Los cuatro casos más comunes:\n\n- **Texto como curvas:** las letras se imprimieron como dibujo, y no hay marcas que contar.\n- **Líneas partidas:** un muro dibujado en muchos tramos sueltos, y el largo se cuenta mal.\n- **Varias escalas en una hoja:** un detalle a 1:20 junto a la planta a 1:50; un solo factor no sirve para los dos.\n- **Escaneado:** es una imagen; no hay nada que medir con código.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "Una lista con los cuatro casos, cada uno con un recorte real de un PDF."
        }
      },
      {
        "n": "5.8",
        "titulo": "El escaneado: la IA orienta, usted mide",
        "cuerpo": "Claude puede mirar un escaneado como imagen y hacer una lista aproximada de lo que ve. En la prueba del curso acertó las 10 puertas y ventanas de la casa, pero la documentación de Anthropic avisa que sus conteos en imágenes son **aproximados**, sobre todo con muchos objetos pequeños.\n\nÚselo para no olvidarse de nada. Las cifras se toman a mano, con una herramienta de medición de PDF.\n\n> «Claude can give approximate counts of objects in an image but might not always be precisely accurate, especially with large numbers of small objects» ([documentación de Anthropic, Vision](https://platform.claude.com/docs/en/build-with-claude/vision)).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 32,
          "seVe": "Claude mira el escaneado y da una lista aproximada, que queda marcada «a medir a mano»."
        }
      },
      {
        "n": "5.9",
        "titulo": "Lo que se lleva",
        "cuerpo": "Ya sabe reconocer qué PDF se mide con un programa, calibrar la escala con dos cotas y cruzar el DXF con el PDF.\n\nEn la próxima lección: los precios.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina de cierre: qué PDF se mide con código, la escala calibrada con dos cotas y el cruce DXF contra PDF."
        }
      }
    ]
  },
  {
    "n": 6,
    "slug": "6-base-de-precios",
    "titulo": "Su base de precios y el presupuesto (nunca inventar precios)",
    "objetivo": "Armar una base de precios propia y un presupuesto que se niega a inventar.",
    "resultado": "`base-precios.xlsx` y `presupuesto.xlsx` con «FALTA PRECIO» donde corresponde.",
    "laminas": [
      {
        "n": "6.1",
        "titulo": "¿De dónde salió este precio?",
        "cuerpo": "Si le pregunta a una IA cuánto cuesta el metro cuadrado de cerámica, puede contestarle un número con total seguridad. Pero no dice de qué proveedor es, de qué fecha ni si incluye impuestos.\n\nEse número **no entra** a un presupuesto.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 15,
          "seVe": "Ilustración: en un chat, la IA contesta un precio inventado y encima cae un sello «¿FUENTE? ¿FECHA?»."
        }
      },
      {
        "n": "6.2",
        "titulo": "La regla del curso",
        "cuerpo": "Esta es la regla más importante del curso: un precio entra al presupuesto solo si tiene **fuente** (su cotización, su factura, su contrato) y **fecha**.\n\nClaude nunca escribe un precio: lo busca en su base. Si no está, la línea dice **FALTA PRECIO** y el total dice **incompleto**, a la vista.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa, de medio cuerpo, seria.",
          "dice": "Esta es la regla más importante del curso. Ningún precio sale de una IA. Ni de la nuestra. Un precio tiene fuente y fecha: su cotización, su factura, su contrato. Si no lo tiene, el presupuesto dice: falta precio. Y se ve."
        }
      },
      {
        "n": "6.3",
        "titulo": "La base de precios",
        "cuerpo": "La **base de precios** es una hoja de Excel suya, con una fila por insumo o actividad: código, descripción, unidad, precio, moneda, si lleva impuesto, fuente, fecha y hasta cuándo vale.\n\nLa plantilla viene en el kit, con tres filas de muestra marcadas **EJEMPLO**, que no se usan en un presupuesto real.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La plantilla de la base de precios, vacía, con una nota en cada columna."
        }
      },
      {
        "n": "6.4",
        "titulo": "Cantidad × precio, con su cuenta",
        "cuerpo": "El presupuesto toma cada línea de `cantidades.xlsx`, le asigna un **código** de su base y multiplica: cantidad × (1 + desperdicio) × precio. El desperdicio, si lo hay, va en su propia columna, con quién lo decidió.\n\nClaude **propone** el código; usted lo confirma. En el ejemplo, los precios son ficticios y están marcados como tales.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "Ilustración con precios ficticios: una línea de cantidades encuentra su código en la base, vuelve con el precio y se arma la cuenta."
        }
      },
      {
        "n": "6.5",
        "titulo": "Armarlo",
        "cuerpo": "Con `cantidades.xlsx` y su base de precios, Claude arma `presupuesto.xlsx` con el pedido de abajo. Propone un código para cada línea y no pone ningún precio que no esté en la base.\n\nEn la grabación, la base es de muestra (todos los precios son ficticios, marcados EJEMPLO). Claude fue más estricto de lo pedido: dejó en **FALTA PRECIO** las líneas sin código, el precio vencido y el que estaba en dólares, y dejó vacía la columna «código confirmado», porque eso lo confirma usted. Con alguna línea sin precio, el total dice «incompleto».",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 52,
          "seVe": "El pedido en Claude Code y el presupuesto que se arma, con líneas en «FALTA PRECIO» y el total «incompleto»."
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
        "cuerpo": "El kit trae `verificar_precios.py`, un programa que revisa el presupuesto: que cada precio exista en la base, tenga fuente y fecha, no esté vencido y esté en la misma moneda. Si algo falla, lo lista y avisa con error.\n\nEn la casa de ejemplo encuentra un precio vencido y uno en otra moneda. Se corrigen en la base, se corre de nuevo y pasa. Córralo antes de mandar cualquier presupuesto.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "El verificador encuentra un precio vencido y una moneda distinta; se corrigen en la base, se corre de nuevo y pasa."
        }
      },
      {
        "n": "6.7",
        "titulo": "Monedas y fechas",
        "cuerpo": "Tres cuidados más:\n\n- **Una sola moneda** por presupuesto: colones o dólares.\n- **El tipo de cambio**, en la hoja Supuestos, con su fuente y su fecha (en Costa Rica, el del Banco Central del día).\n- **La vigencia:** un precio de hace seis meses no es un precio de hoy. Decida cuánto vale cada precio y respételo.\n\nEl verificador rechaza una moneda distinta o un precio vencido.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Una pizarra: «MONEDA · TIPO DE CAMBIO (fuente, fecha) · VIGENCIA»."
        }
      },
      {
        "n": "6.8",
        "titulo": "Lo que se lleva",
        "cuerpo": "Ya tiene su base de precios con fuente y fecha, y un presupuesto que dice «FALTA PRECIO» en vez de inventar.\n\nEn la próxima lección: la revisión que lo vuelve un entregable.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Lámina de cierre: la base de precios y el presupuesto que no inventa."
        }
      }
    ]
  },
  {
    "n": 7,
    "slug": "7-revision-y-entrega",
    "titulo": "La revisión profesional y la entrega",
    "objetivo": "Convertir el borrador en un entregable revisado y firmado por un profesional responsable.",
    "resultado": "La hoja de Revisión completa y el PDF de entrega, que deja de decir «borrador» solo cuando la revisión está completa.",
    "laminas": [
      {
        "n": "7.1",
        "titulo": "Hasta acá, todo es borrador",
        "cuerpo": "Todo lo que hizo Claude en este curso dice **BORRADOR**. Lo que cambia eso no es otra IA: es una persona con título y responsabilidad que lo revisa y lo firma.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 8,
          "seVe": "Chispa, de frente, delante de un PDF con el sello «BORRADOR».",
          "dice": "Hasta acá, todo es borrador. Lo que lo cambia no es otra IA. Es una persona que sabe, que lo revisa, y que lo firma."
        }
      },
      {
        "n": "7.2",
        "titulo": "La lista de revisión",
        "cuerpo": "Antes de firmar, quien revisa recorre nueve puntos:\n\n1. Unidades y escala (en el PDF, con dos cotas).\n2. El criterio, aplicado igual en todo.\n3. Los supuestos, con quién los decidió.\n4. Las observaciones, resueltas una por una.\n5. **Una muestra contada a mano:** un tipo de pieza y un sector.\n6. DXF contra PDF, si están los dos.\n7. Cada precio con fuente y fecha (el verificador sin fallas).\n8. Sin errores de fórmula en el Excel.\n9. Lo que el plano no dice, dicho en la entrega.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 35,
          "seVe": "Una lista que se tilda punto por punto junto a la grabación del Excel."
        }
      },
      {
        "n": "7.3",
        "titulo": "Cómo se revisa",
        "cuerpo": "Dos ejemplos de la lista, con la casa de ejemplo:\n\n- **La muestra contada a mano.** Quien revisa cuenta en el plano las puertas y las ventanas, una por una: 6 puertas y 4 ventanas. La hoja Vanos dice lo mismo.\n- **Una observación, decidida.** En el Dormitorio 1, la etiqueta dice 18,72 m² y el dibujo mide 17,35 m²: 7,9 % de diferencia. La etiqueta tiene el área a ejes y el dibujo a caras interiores. Decisión: vale el dibujo.\n\nLo que se corrige va al **criterio o al programa**, nunca a mano en una celda: así la próxima cuantificación sale bien sola.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 22,
          "seVe": "Ilustración con el plano y las cifras reales de la casa: las puertas y ventanas se marcan una por una, se comparan con la hoja Vanos y se decide la observación del Dormitorio 1."
        }
      },
      {
        "n": "7.4",
        "titulo": "Lo que dice quien firma",
        "cuerpo": "Quien firma responde por cada número. Por eso revisa la muestra, las observaciones y los precios. Si una cifra no se puede explicar, no sale.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 10,
          "seVe": "Chispa, de frente, explica por qué quien firma revisa cada número.",
          "dice": "Quien firma responde por cada número. Por eso revisa la muestra, las observaciones y los precios. Si una cifra no se puede explicar, no sale."
        }
      },
      {
        "n": "7.5",
        "titulo": "La hoja de Revisión",
        "cuerpo": "En el Excel hay una hoja de **Revisión** que llena quien firma: nombre y registro profesional, fecha, la muestra contada a mano y su diferencia con el Excel, las observaciones resueltas, el verificador de precios sin fallas y la decisión (aprobado, aprobado con cambios o devuelto).\n\nSin esta hoja completa, no hay entrega.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La hoja de Revisión del kit: revisó, registro profesional, fecha, muestras, observaciones, verificador de precios y decisión."
        }
      },
      {
        "n": "7.6",
        "titulo": "La entrega",
        "cuerpo": "La entrega es un PDF de una página por plano: lo cuantificado con su confianza, los supuestos, lo que el plano no dice y el presupuesto (o «incompleto», con lo que falta).\n\nEl programa del kit, `entregar.py`, se niega a sacar el PDF final mientras la hoja de Revisión esté incompleta. Con la hoja completa, sale sin el sello BORRADOR.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 23,
          "seVe": "entregar.py se niega a sacar el PDF final con la hoja de Revisión vacía; con la hoja completa, sale el PDF sin el sello."
        }
      },
      {
        "n": "7.7",
        "titulo": "Sigamos",
        "cuerpo": "Ya tiene el método completo: el criterio, las cantidades desde DXF y PDF, su base de precios, el presupuesto que no inventa y la revisión que lo vuelve entregable.\n\nSi quiere que lo hagamos con sus planos, con la revisión de una ingeniera, escríbanos a consultorias@vion-studio.com. Empezamos por un plano de prueba.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 17,
          "seVe": "Chispa invita a seguir con sus planos; después, una tarjeta con la forma de escribirnos.",
          "dice": "Si quiere esto con sus planos, revisado por una ingeniera, escríbanos. Empezamos por un plano de prueba."
        }
      }
    ]
  }
];
