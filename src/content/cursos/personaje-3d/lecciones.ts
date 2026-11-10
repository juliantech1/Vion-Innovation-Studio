// Las lecciones de «B3 · Su personaje 3D que habla», lámina por lámina, desde el storyboard
// (docs/planes/cursos/B3-personaje-3d.md de la aldea, 2026-11-10). Texto completo de cada lámina; los videos e imágenes van en ../medios.json.
import type { LeccionCurso } from '../../tipos';

export const lecciones: LeccionCurso[] = [
  {
    "n": 0,
    "slug": "0-puesta-a-punto",
    "titulo": "Puesta a punto: Blender, Claude Code, ffmpeg y la voz",
    "objetivo": "Dejar Blender, Claude Code, ffmpeg y la cuenta de la voz listos y comprobados.",
    "resultado": "Un MP3 con su JSON de tiempos por letra y un PNG de una esfera con fondo transparente, hechos desde la terminal por scripts del kit.",
    "laminas": [
      {
        "n": "0.1",
        "titulo": "Hola, soy Chispa",
        "cuerpo": "En este curso usted arma un personaje como yo: un cuerpo 3D, una cara de piezas, una voz y una boca que la sigue. Primero, dejamos la computadora lista.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 18,
          "seVe": "Fondo crema; Chispa en plano medio saluda con la mano.",
          "dice": "Hola, soy Chispa. Me armaron con código, una voz y unas cuantas reglas. En este curso, usted arma el suyo."
        }
      },
      {
        "n": "0.2",
        "titulo": "Lo que cuesta, de verdad",
        "cuerpo": "**Pago:** Claude Code (desde USD 20 al mes) y la voz para uso comercial (ElevenLabs Starter, USD 6 al mes).\n\n**Gratis:** Blender, ffmpeg, el camino por código.\n\n**Opcional:** Meshy, gratis con 100 créditos y licencia CC BY (hay que darle crédito), o Pro USD 20 al mes para que el modelo sea suyo.\n\nPrecios del 2026-11-10, pieza por pieza:\n\n| Pieza | Costo |\n| --- | --- |\n| Claude Code | **Pago.** Pro USD 20 al mes (USD 17 pagando el año), Max USD 100, Ultra USD 200. El plan gratis no lo incluye |\n| Blender 5.2.3 LTS, ffmpeg | Gratis |\n| ElevenLabs (la voz) | Free: 10.000 créditos, **sin licencia comercial**. **Starter USD 6 al mes** (30.000 créditos, licencia comercial, clonar su propia voz); Creator USD 22 (121.000) |\n| Meshy (opcional, lección 2) | Free: 100 créditos al mes y lo que sale es **CC BY 4.0** (crédito a Meshy). **Pro USD 20 al mes**: 1.000 créditos y el modelo es suyo |\n| Voz local (alternativa) | Kokoro-82M, gratis; no da tiempos por letra |\n| Rhubarb Lip Sync 1.14.0 | Gratis |\n| Mixamo (opcional) | Gratis con una cuenta de Adobe |",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La tabla de costos en una lámina, con la fecha: lo que se paga (Claude Code y ElevenLabs Starter), lo gratis (Blender, ffmpeg, el código) y lo opcional (Meshy)."
        }
      },
      {
        "n": "0.3",
        "titulo": "Blender 5.2.3 LTS",
        "cuerpo": "Bájelo de [blender.org/download](https://www.blender.org/download/).\n\n- Windows: instalador o .zip.\n- Mac: el .dmg de Apple Silicon.\n- Linux: .tar.xz o Snap.\n\nÁbralo una vez: Ayuda → Acerca de tiene que decir 5.2.3.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La página de descarga de blender.org y la ventana «Acerca de» de Blender que dice 5.2.3."
        }
      },
      {
        "n": "0.4",
        "titulo": "Claude Code y ffmpeg",
        "cuerpo": "**Claude Code:** en Windows, desde PowerShell; en Mac y Linux, desde la Terminal (los comandos, abajo). Abra una terminal nueva y pida `claude --version`.\n\n**ffmpeg:** `winget install Gyan.FFmpeg` en Windows, `brew install ffmpeg` en Mac, `sudo apt install ffmpeg` en Linux. Compruebe que trae VP9: `ffmpeg -encoders` y busque `libvpx-vp9`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "PowerShell y la Terminal de Mac lado a lado, con los comandos resaltados; `claude --version`; `ffmpeg -encoders` con la línea de VP9 marcada.",
          "dice": "Claude Code y ffmpeg, en Windows o en Mac. Fíjese que su ffmpeg traiga VP9: es lo que nos deja guardar video con fondo transparente.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Claude Code · Windows (PowerShell)",
            "lenguaje": "powershell",
            "texto": "irm https://claude.ai/install.ps1 | iex"
          },
          {
            "tipo": "comando",
            "etiqueta": "Claude Code · Mac y Linux",
            "lenguaje": "bash",
            "texto": "curl -fsSL https://claude.ai/install.sh | bash"
          },
          {
            "tipo": "comando",
            "etiqueta": "Comprobar (terminal nueva)",
            "texto": "claude --version"
          },
          {
            "tipo": "comando",
            "etiqueta": "ffmpeg · Windows",
            "lenguaje": "powershell",
            "texto": "winget install Gyan.FFmpeg"
          },
          {
            "tipo": "comando",
            "etiqueta": "ffmpeg · Mac",
            "lenguaje": "bash",
            "texto": "brew install ffmpeg"
          },
          {
            "tipo": "comando",
            "etiqueta": "ffmpeg · Linux",
            "lenguaje": "bash",
            "texto": "sudo apt install ffmpeg"
          },
          {
            "tipo": "comando",
            "etiqueta": "Comprobar VP9 · Windows",
            "lenguaje": "powershell",
            "texto": "ffmpeg -encoders | findstr vp9"
          },
          {
            "tipo": "comando",
            "etiqueta": "Comprobar VP9 · Mac y Linux",
            "lenguaje": "bash",
            "texto": "ffmpeg -encoders | grep vp9"
          }
        ]
      },
      {
        "n": "0.5",
        "titulo": "La voz: ElevenLabs",
        "cuerpo": "1. Cuenta en [elevenlabs.io](https://elevenlabs.io).\n2. Para publicar o vender, el plan **Starter** (el gratis no tiene licencia comercial).\n3. Developers → API Keys → crear una clave (si el panel deja limitar sus permisos, déjele solo texto a voz).\n4. Copie `.env.ejemplo` como `.env` en la carpeta del kit y pegue la clave después del `=`, sin comillas ni espacios. **Nunca** en el chat de Claude.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "El panel de ElevenLabs, el plan, la creación de la clave (tapada con un desenfoque) y el archivo `.env` en el editor.",
          "dice": "La clave va en un archivo, nunca en el chat. Si alguien la ve, la borra y crea otra.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "archivo",
            "etiqueta": ".env (pegue su clave después del =)",
            "texto": "ELEVENLABS_API_KEY="
          }
        ]
      },
      {
        "n": "0.6",
        "titulo": "Opcional: Meshy",
        "cuerpo": "Solo si quiere el camino del dibujo (lección 2). Con la cuenta gratis tiene 100 créditos al mes y lo que haga lleva licencia **CC BY 4.0**: puede usarlo, pero tiene que dar crédito. Con **Pro** el modelo es suyo. Puede decidirlo en la lección 2.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "La página de precios de meshy.ai con los planes Free y Pro marcados."
        }
      },
      {
        "n": "0.7",
        "titulo": "La prueba de fuego",
        "cuerpo": "Pida lo de abajo. Aparecen `prueba.mp3`, `prueba.json` (cada letra con su segundo) y `alfa.png`: una esfera con el fondo a cuadros (transparente).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El pedido; la terminal; el JSON abierto con «H», «o», «l», «a» y sus tiempos marcados; el PNG de la esfera en un visor con fondo a cuadros."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Corré voz.py con la voz de ejemplo y la frase \"Hola, ¿me escucha?\", y después prueba_alfa.py"
          }
        ]
      },
      {
        "n": "0.8",
        "titulo": "Si algo falla",
        "cuerpo": "Los errores más comunes y cómo salir de cada uno:\n\n| Lo que aparece | Qué pasa | Solución |\n| --- | --- | --- |\n| `401` o `invalid_api_key` en `voz.py` | La clave no está en `.env` o tiene un espacio | Copiar la clave de nuevo; `.env` sin comillas ni espacios |\n| `402` o «quota exceeded» | Se acabaron los créditos del mes | Esperar al mes siguiente o subir de plan; líneas más cortas gastan menos |\n| El PNG sale con fondo gris, no transparente | Falta «Film → Transparent» en el render | El script del kit lo pone siempre (`scene.render.film_transparent = True`) y guarda en RGBA |\n| `Unknown encoder 'libvpx-vp9'` | El ffmpeg instalado no trae VP9 | Instalar el de Gyan (Windows) o el de Homebrew; los dos lo traen |\n| `blender` no se reconoce | No está en el PATH | El `CLAUDE.md` del kit lleva la ruta completa |\n| Mac con Intel | Blender 5 no corre | Blender 4.5 LTS; el curso no se probó ahí |",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La tabla de errores típicos en una lámina: clave inválida, sin créditos, fondo gris, ffmpeg sin VP9, Blender que no se encuentra y Mac con Intel, cada uno con su solución."
        }
      }
    ]
  },
  {
    "n": 1,
    "slug": "1-disenar-el-personaje",
    "titulo": "Diseñar un personaje que se reconozca (y que sea suyo)",
    "objetivo": "Decidir silueta, colores y cara antes de abrir Blender, y que el personaje sea original.",
    "resultado": "`ficha.json` de su personaje: silueta, colores, medidas y cara de piezas.",
    "laminas": [
      {
        "n": "1.1",
        "titulo": "¿Me reconoce a oscuras?",
        "cuerpo": "Un buen personaje se reconoce por su sombra. Antes de modelar, pruebe la silueta.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa sobre una fila de siluetas negras (una estrella, un cubo, una tuerca); la luz baja y Chispa queda como sombra.",
          "dice": "Tápeme la cara. ¿Me reconoce igual? Esa es la prueba que tiene que pasar su personaje."
        }
      },
      {
        "n": "1.2",
        "titulo": "La silueta manda",
        "cuerpo": "Una forma principal que nadie más tenga (una estrella, una tuerca, una gota) y un cuerpo simple. Si al rellenarla de negro todavía se reconoce, sirve.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Cinco siluetas en negro; tres se confunden entre sí y se tachan; dos se reconocen y se marcan.",
          "dice": "Rellénela de negro. Si todavía se reconoce, sirve. Si se parece a otra, empiece de nuevo.",
          "vozEnOff": true
        }
      },
      {
        "n": "1.3",
        "titulo": "Pocas formas, pocos colores",
        "cuerpo": "Dos o tres colores, uno que manda. Una forma que se repita. Chispa: una cabeza de estrella de 12 rayos, un cuerpo tejido y un solo color terracota; los ojos y la boca, oscuros.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Chispa de frente con su paleta al lado: el terracota que manda y el oscuro de los ojos y la boca."
        }
      },
      {
        "n": "1.4",
        "titulo": "La cara, de piezas",
        "cuerpo": "La cara no se pinta: se arma con piezas (dos ojos, seis bocas) que se prenden y se apagan. Así un script puede cambiarla en cada cuadro.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 25,
          "seVe": "Las piezas de la cara de Chispa se separan, se ordenan en fila (ojos abiertos ‿, cerrados ⌒, bocas reposo, a, e, o, u, m) y vuelven a su lugar.",
          "dice": "Mi cara son piezas. Para hablar, un programa elige qué boca se ve en cada momento.",
          "vozEnOff": true
        }
      },
      {
        "n": "1.5",
        "titulo": "La ficha",
        "cuerpo": "Todo el diseño en un archivo: `ficha.json`. Medidas en unidades de la cabeza (1 = el radio de la cabeza), colores, ojos, boca, cuerpo, brazos. Claude la escribe con usted y Blender la lee. Abajo, la ficha de Tuerca, el personaje de ejemplo del curso (`fichas/tuerca.json` del kit).",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El archivo `fichas/tuerca.json` con la cabeza, los colores y la boca señalados."
        },
        "bloques": [
          {
            "tipo": "archivo",
            "etiqueta": "fichas/tuerca.json",
            "lenguaje": "json",
            "texto": "{\n  \"nombre\": \"Tuerca\",\n  \"textura\": \"tejido\",\n  \"cabeza\": {\"forma\": \"hexagono\", \"radio\": 1.0, \"agujero\": 0.35, \"grosor\": 0.3, \"color\": \"#d9a62e\"},\n  \"ojos\": {\"radio\": 0.07, \"separacion\": 0.42, \"altura\": 0.15, \"color\": \"#1d1a16\"},\n  \"boca\": {\"ancho\": 0.28, \"altura\": -0.12, \"color\": \"#1d1a16\"},\n  \"cuerpo\": {\"forma\": \"revolucion\", \"alto\": 1.2, \"radio\": 0.4, \"color\": \"#d9a62e\"},\n  \"brazos\": {\"largo\": 0.9, \"grosor\": 0.09, \"color\": \"#d9a62e\"},\n  \"piernas\": {\"largo\": 0.45, \"grosor\": 0.12, \"color\": \"#8a6a1f\"}\n}"
          }
        ]
      },
      {
        "n": "1.6",
        "titulo": "Lo que no se copia",
        "cuerpo": "Su personaje no puede parecerse a:\n\n- el logo de otra marca;\n- la mascota de otra empresa;\n- un personaje de una película, serie o juego;\n- una persona real.\n\nAunque lo haga «a su manera»: si alguien lo confunde, es un problema legal y de anuncios (las plataformas rechazan marcas ajenas).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tarjeta roja con las cuatro reglas: ni logos de otras marcas, ni mascotas de otras empresas, ni personajes de películas, series o juegos, ni personas reales."
        }
      },
      {
        "n": "1.7",
        "titulo": "Una confesión",
        "cuerpo": "Chispa se parece mucho al logo de Claude (Anthropic). Fue una decisión de Vion, sabiendo el riesgo, y la revisamos antes de usarla en anuncios. Usted, mejor, invente la suya desde cero.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa en primer plano, de frente, baja la voz.",
          "dice": "Le confieso algo: mi cabeza se parece mucho al logo de Claude. Fue una decisión de Vion, con su riesgo. Usted no se complique: invente la suya."
        }
      }
    ]
  },
  {
    "n": 2,
    "slug": "2-de-la-idea-al-modelo",
    "titulo": "De la idea al modelo 3D: con código o desde un dibujo",
    "objetivo": "Tener el cuerpo del personaje en Blender por uno de los dos caminos, sabiendo lo que cuesta cada uno.",
    "resultado": "El cuerpo de su personaje, de frente y de perfil, en una imagen.",
    "laminas": [
      {
        "n": "2.1",
        "titulo": "Dos caminos",
        "cuerpo": "**Por código:** Claude edita su ficha y un programa del kit arma el cuerpo con formas simples. Gratis y limpio.\n\n**Desde un dibujo:** una IA (Meshy) convierte su dibujo en un modelo 3D, que después hay que limpiar. Pago, y mejor para formas complicadas.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Un diagrama que se dibuja: ficha.json → armar_personaje.py → Blender; dibujo → Meshy → limpiar.py → Blender. Los dos llegan al mismo personaje.",
          "dice": "Dos caminos llegan al mismo lugar. Yo salí por el de arriba.",
          "vozEnOff": true
        }
      },
      {
        "n": "2.2",
        "titulo": "Camino 1: por código",
        "cuerpo": "Pida lo de abajo y después corra el comando. Claude solo toca la ficha. Si una medida no tiene sentido, el programa lo dice («brazo: más largo que el cuerpo») y Claude la corrige.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "El pedido; la ficha que se escribe; el programa marca un problema; Claude lo corrige; las dos vistas de Tuerca. Un texto corto explica cada paso."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Con la skill personaje-3d, completá fichas/tuerca.json: una tuerca hexagonal tejida, de color mostaza, con dos ojos y boca de hilo"
          },
          {
            "tipo": "comando",
            "etiqueta": "Armar el cuerpo y sus dos vistas",
            "texto": "blender -b -P armar_personaje.py -- fichas/tuerca.json --vista frente,perfil"
          }
        ]
      },
      {
        "n": "2.3",
        "titulo": "Así nació Chispa",
        "cuerpo": "Chispa salió por este camino: una curva de estrella extruida con bordes redondos, un cuerpo de revolución, la textura del punto tejido hecha por código, brazos de dos huesos. Ningún modelo de IA, ningún archivo bajado.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Chispa gira 360° sobre el fondo crema; a la mitad se ve en malla (wireframe) y vuelve a tejido."
        }
      },
      {
        "n": "2.4",
        "titulo": "Camino 2: desde un dibujo",
        "cuerpo": "1. Dibuje el personaje de frente y de perfil, en pose T (brazos abiertos), sobre fondo blanco.\n2. En [meshy.ai](https://www.meshy.ai): Image to 3D (o «Multi-Image» con las dos vistas), modelo Meshy 6, textura 2K: **30 créditos**.\n3. Descargue el GLB.\n4. En Blender: Archivo → Importar → glTF.\n\nNosotros armamos este camino y lo dejamos: para un personaje de formas simples, el código queda más limpio y es gratis.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 45,
          "seVe": "El dibujo de Tuerca escaneado; Meshy con las dos imágenes; la barra de avance (acelerada); el modelo girando en Meshy; la importación en Blender.",
          "dice": "Si dibuja mejor de lo que escribe, este camino le sirve. Cuesta créditos, y lo que sale hay que limpiarlo.",
          "vozEnOff": true
        }
      },
      {
        "n": "2.5",
        "titulo": "Qué cuesta cada camino",
        "cuerpo": "- **Código:** gratis.\n- **Meshy gratis:** 100 créditos al mes, alcanza para uno o dos intentos, y el modelo lleva licencia CC BY (crédito a Meshy).\n- **Meshy Pro:** USD 20 al mes, 1.000 créditos, el modelo es suyo; un personaje con su esqueleto, unos 62 créditos.\n- **Otras:** TRELLIS.2 (gratis, pero Linux y GPU de 24 GB), TRELLIS 2 por fal.ai (USD 0,25 a 0,35 por modelo), Hunyuan3D 2.1 (su licencia no vale en la Unión Europea, el Reino Unido ni Corea del Sur).\n\nPrecios del 2026-11-10.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La tabla de costos de los dos caminos en una lámina, con la fecha: código gratis, Meshy gratis, Meshy Pro y las otras IA de imagen a 3D."
        }
      },
      {
        "n": "2.6",
        "titulo": "Lo que sale de la IA",
        "cuerpo": "Un modelo de IA casi nunca sale listo para animar: demasiados triángulos, la cara pintada encima (no se puede mover), manos pegadas, colores con ruido. Para un fondo sirve tal cual; para un personaje que habla, hay que limpiarlo (lección 3).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "El modelo de Tuerca que dio Meshy con los cuatro problemas señalados: demasiados triángulos, la cara pintada, las manos pegadas y los colores con ruido."
        }
      },
      {
        "n": "2.7",
        "titulo": "¿Cuál elijo?",
        "cuerpo": "Si su personaje se arma con formas simples, código. Si es orgánico o muy detallado, dibujo y Meshy.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 12,
          "seVe": "Chispa entre las dos versiones de Tuerca: la hecha por código y la de Meshy.",
          "dice": "Yo salí por el camino del código. Pero si usted dibuja mejor de lo que programa, el otro le sirve."
        }
      }
    ]
  },
  {
    "n": 3,
    "slug": "3-limpieza-cara-esqueleto",
    "titulo": "Limpieza, cara y esqueleto",
    "objetivo": "Dejar el modelo listo para animar: liviano, con colores lisos, cara de piezas y un esqueleto que deforma bien.",
    "resultado": "Su personaje levanta un brazo sin que se le mueva la cabeza: seis bocas, sus ojos y un esqueleto que pasa la prueba de deformación.",
    "laminas": [
      {
        "n": "3.1",
        "titulo": "Antes y después",
        "cuerpo": "A la izquierda, lo que dio la IA (más de 100.000 caras, la cara pintada). A la derecha, lo limpio (unas 2.000 caras, colores lisos, la cara lista para piezas). Si vino por el camino del código, ya lo tiene limpio: salte a la lámina 3.3.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Tuerca de Meshy antes y después de `limpiar.py`, lado a lado, con el conteo de caras de cada una."
        }
      },
      {
        "n": "3.2",
        "titulo": "Limpiar (solo camino 2)",
        "cuerpo": "El comando de abajo hace cuatro cosas:\n\n1. baja a unas 2.000 caras (Decimate);\n2. junta los colores en 4 a 6 lisos;\n3. borra la cara pintada y la cubre con el color de la piel;\n4. aplica la escala y apoya los pies en el suelo.\n\nMire las vistas que deja antes de seguir.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "El comando; las cuatro etapas una por una en el visor de Blender; las vistas finales."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Limpiar el modelo de Meshy",
            "texto": "blender -b -P limpiar.py -- modelos/tuerca.glb"
          }
        ]
      },
      {
        "n": "3.3",
        "titulo": "La cara, encima",
        "cuerpo": "El programa pone la cara de la ficha: dos ojos (abiertos y cerrados) y seis bocas (reposo, a, e, o, u, m), cada una un objeto que se prende o se apaga.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 20,
          "seVe": "Primer plano de Chispa: las seis bocas y el parpadeo, una por una, con su nombre escrito al lado."
        }
      },
      {
        "n": "3.4",
        "titulo": "El esqueleto",
        "cuerpo": "Tres opciones:\n\n- **Rigify** (viene en Blender, gratis; sirve para cualquier forma);\n- **auto-rig de Meshy** (5 créditos; solo humanoides);\n- **Mixamo** (gratis con cuenta de Adobe; solo humanoides en pose T).\n\nPara un personaje simple, el kit arma uno mínimo: cuerpo, cabeza y dos huesos por brazo, con la mano que sigue a un punto (IK). Así está hecha Chispa.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 30,
          "seVe": "El esqueleto de Tuerca que se dibuja hueso por hueso; la mano sigue a un punto que se mueve; las tres opciones como tarjetas al costado.",
          "dice": "Dos huesos por brazo y una mano que sigue a un punto. Con eso saludo, señalo y festejo.",
          "vozEnOff": true
        }
      },
      {
        "n": "3.5",
        "titulo": "La prueba de deformación",
        "cuerpo": "Antes de animar, corra el comando de abajo. Revisa que ningún vértice quede sin hueso, que el brazo no arrastre la cabeza ni las piernas, y que la cabeza gire sola. Si falla, pida a Claude que lo arregle **en la ficha** (largo del brazo, dónde nace).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "La prueba corriendo; un fallo («la mano izquierda mueve la cabeza»); el cambio en la ficha; la prueba en verde; el brazo arriba."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "La prueba de deformación",
            "texto": "blender -b -P probar_rig.py -- tuerca.blend"
          }
        ]
      },
      {
        "n": "3.6",
        "titulo": "Errores típicos",
        "cuerpo": "- Brazos que se estiran como chicle (falta IK o el hueso es corto).\n- Cabeza que se hunde (los pesos del cuello).\n- Pies que flotan (la base no está en el suelo).\n- Un ojo que atraviesa la cabeza (la pieza muy adentro).",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Cuatro pares de miniaturas «mal / bien»: el brazo estirado, la cabeza hundida, los pies que flotan y el ojo que atraviesa la cabeza."
        }
      },
      {
        "n": "3.7",
        "titulo": "¿Ve? Saludo",
        "cuerpo": "Un esqueleto bien hecho no se nota: solo se ve que el personaje se mueve.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa saluda, señala a la cámara y festeja.",
          "dice": "Ese saludo son dos huesos por brazo. Si su personaje lo hace sin desarmarse, el esqueleto está bien."
        }
      }
    ]
  },
  {
    "n": 4,
    "slug": "4-la-voz",
    "titulo": "La voz (y su velocidad)",
    "objetivo": "Elegir una voz para el personaje y generarla con los tiempos de cada letra.",
    "resultado": "Las líneas de su guion en MP3 con su JSON de tiempos por letra, a ×1,25 si hace falta.",
    "laminas": [
      {
        "n": "4.1",
        "titulo": "Una voz que sea del personaje",
        "cuerpo": "La voz es la mitad del personaje. La elegimos escuchando líneas reales del guion, no la frase de muestra.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa en plano medio se toca el cuello.",
          "dice": "Esta voz la eligieron entre muchas, con frases mías de verdad. Y después la aceleraron un poco: sonaba muy lenta."
        }
      },
      {
        "n": "4.2",
        "titulo": "Elegir en la biblioteca",
        "cuerpo": "En elevenlabs.io → Voices → biblioteca: filtre por idioma y acento, y pruebe cada voz con **una línea de su guion**. Cuando una le guste, copie su **voice ID** a `voces.json` del kit.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "La biblioteca de voces, el filtro de español, tres voces probadas con la misma línea (suenan las tres) y el ID copiado."
        }
      },
      {
        "n": "4.3",
        "titulo": "Con los tiempos de cada letra",
        "cuerpo": "El comando de abajo pide la voz a `…/text-to-speech/{voice_id}/with-timestamps` y deja `l1.mp3` y `l1.json`: cada letra con su segundo de inicio y de fin. Con eso se mueve la boca (lección 5). Cambie `<voice-id>` por el de su voz.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El archivo `l1.json` abierto, con `characters` y `character_start_times_seconds` señalados."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Pedir una línea",
            "texto": "python voz.py <voice-id> \"Hola, soy Tuerca.\" lineas/l1"
          }
        ]
      },
      {
        "n": "4.4",
        "titulo": "La velocidad",
        "cuerpo": "Muchas voces suenan lentas para un personaje. Chispa va a **×1,25**: el comando de abajo acelera sin cambiar el tono. Si acelera la voz, divida también los tiempos del JSON por 1,25: `boca.py --velocidad 1.25` lo hace solo.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "La forma de onda de una línea a ×1 y a ×1,25, una encima de la otra; los marcadores de las letras se corren. Suena la misma línea de Chispa a las dos velocidades.",
          "vozEnOff": true
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Acelerar a ×1,25",
            "texto": "ffmpeg -i l1.mp3 -filter:a atempo=1.25 l1-125.mp3"
          }
        ]
      },
      {
        "n": "4.5",
        "titulo": "Planes y permisos",
        "cuerpo": "- **Free:** para probar, sin uso comercial.\n- **Starter (USD 6 al mes):** uso comercial.\n- **Clonar una voz:** solo la suya, o la de alguien que le dio permiso **por escrito**. Nunca la de un famoso ni la de alguien que no sabe.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tarjeta con los planes Free y Starter y la regla de la clonación: solo su voz o una con permiso por escrito."
        }
      },
      {
        "n": "4.6",
        "titulo": "Sin nube: Kokoro",
        "cuerpo": "Si no quiere pagar o no quiere mandar el texto afuera: **Kokoro-82M** (Apache-2.0) corre en su computadora. Tiene pocas voces en español y no da tiempos por letra: para la boca, use Rhubarb (lección 5).",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 25,
          "seVe": "Kokoro generando la misma línea en la terminal; las dos voces, ElevenLabs y Kokoro, una después de la otra."
        }
      },
      {
        "n": "4.7",
        "titulo": "Escribir para la voz",
        "cuerpo": "- Frases cortas (hasta 16 palabras).\n- Una idea por línea.\n- Números escritos como se dicen («dos mil»).\n- Signos de pregunta y exclamación donde los quiera oír.\n\nLea la línea en voz alta antes de pedirla: cada pedido gasta créditos.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La lista de reglas con un ejemplo «mal / bien»: una línea larga con cifras y la misma línea corta, con el número escrito como se dice."
        }
      }
    ]
  },
  {
    "n": 5,
    "slug": "5-boca-con-la-voz",
    "titulo": "Que mueva la boca con la voz",
    "objetivo": "Que la boca del personaje siga a la voz letra por letra, con o sin tiempos por letra.",
    "resultado": "Un clip donde la boca cierra en cada m, b y p y abre en cada vocal.",
    "laminas": [
      {
        "n": "5.1",
        "titulo": "¿Se nota?",
        "cuerpo": "Primero, Chispa habla con la boca quieta. Después, con la boca sincronizada. La diferencia es esta lección.",
        "apoyo": {
          "tipo": "chispa",
          "segundos": 15,
          "seVe": "Chispa dice la misma línea dos veces: primero con la boca en reposo, después con la boca sincronizada.",
          "dice": "Hola, ¿me escucha? Hola, ¿me escucha?"
        }
      },
      {
        "n": "5.2",
        "titulo": "Seis bocas alcanzan",
        "cuerpo": "**reposo** (cerrada), **a**, **e** (también i, y), **o**, **u** y **m** (también b, p: los labios se juntan). No hace falta una boca por sonido.",
        "apoyo": {
          "tipo": "diagrama",
          "seVe": "Las seis bocas de Tuerca en fila, con sus letras debajo: reposo, a, e (i, y), o, u y m (b, p)."
        }
      },
      {
        "n": "5.3",
        "titulo": "De letras a bocas",
        "cuerpo": "La regla:\n\n1. cada **vocal** cambia la boca a la suya;\n2. **m, b, p** la cierran;\n3. las demás consonantes **sostienen** la boca anterior;\n4. un silencio de más de 0,12 s (una coma, un punto) la vuelve a **reposo**;\n5. al final, reposo.",
        "apoyo": {
          "tipo": "motion",
          "segundos": 35,
          "seVe": "La palabra «mamá» y la frase «Hola, ¿me escucha?» con sus letras sobre una línea de tiempo; debajo, la boca que toca a cada letra se ilumina.",
          "dice": "Las vocales abren. La eme, la be y la pe cierran. El resto sostiene. Y en cada pausa, la boca descansa.",
          "vozEnOff": true
        }
      },
      {
        "n": "5.4",
        "titulo": "boca.py",
        "cuerpo": "El comando de abajo deja una lista de (cuadro, boca). `animar.py` la lee y prende cada boca en su cuadro. El código entero está en el kit: 30 líneas.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 40,
          "seVe": "`boca.py` en el editor con la regla marcada; su salida; Blender con la línea de tiempo y las bocas cambiando."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "De los tiempos a las bocas",
            "texto": "python boca.py lineas/l1.json --fps 12 --desde 1.5 > l1-boca.json"
          }
        ]
      },
      {
        "n": "5.5",
        "titulo": "Sin tiempos por letra: Rhubarb",
        "cuerpo": "Si su voz no trae tiempos (una grabación suya, Kokoro): **[Rhubarb Lip Sync](https://github.com/DanielSWolf/rhubarb-lip-sync) 1.14.0** (MIT) los saca del audio. Baje el release de GitHub y compare su huella con la publicada. El comando de abajo acepta WAV u OGG; con `-d guion.txt` acierta más. `boca.py --rhubarb` traduce sus formas (A a H y X) a las seis bocas.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "El release de Rhubarb en GitHub, la huella comparada, el comando, el JSON de Rhubarb y la traducción a las seis bocas."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Rhubarb",
            "texto": "rhubarb -f json -o l1-rhubarb.json l1.wav"
          }
        ]
      },
      {
        "n": "5.6",
        "titulo": "Parpadear",
        "cuerpo": "Un personaje que no parpadea parece muerto. El kit cierra los ojos 2 o 3 cuadros cada 2 a 5 segundos, al azar pero con semilla (sale igual cada vez).",
        "apoyo": {
          "tipo": "motion",
          "segundos": 20,
          "seVe": "Una línea de tiempo con las marcas de parpadeo; los ojos de Tuerca abriéndose y cerrándose encima."
        }
      },
      {
        "n": "5.7",
        "titulo": "Mamá",
        "cuerpo": "Mire la boca en cada m.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa en primer plano sobre la forma de onda de su propia voz; dice la frase despacio y después a velocidad normal.",
          "dice": "Fíjese en mi boca cuando digo mamá, mapa, Pablo. Se cierra en cada eme, en cada pe y en cada be."
        }
      }
    ]
  },
  {
    "n": 6,
    "slug": "6-gestos-y-transparencia",
    "titulo": "Gestos, entradas y el render con transparencia",
    "objetivo": "Armar una toma (entra, saluda, habla, sale) y renderizarla con fondo transparente sin castigar la GPU.",
    "resultado": "`tuerca-toma1.webm` con alfa: su personaje entra, saluda y habla.",
    "laminas": [
      {
        "n": "6.1",
        "titulo": "Entro, saludo y señalo",
        "cuerpo": "Una toma es una receta: cómo entra, qué gesto hace en cada línea, cómo sale y dónde está parado.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Sobre una captura de pantalla cualquiera, Chispa entra caminando desde la izquierda, saluda, señala algo de la pantalla y se queda.",
          "dice": "Entro caminando, saludo y señalo. Con seis acciones me alcanza para casi todo."
        }
      },
      {
        "n": "6.2",
        "titulo": "Las seis acciones",
        "cuerpo": "**caminar** (entrar o salir), **saludar**, **señalar**, **celebrar**, **saltar**, **mirar**. En `toma.json`: `{\"entra\": \"caminar\", \"lugar\": \"abajo-derecha\", \"lineas\": [{\"audio\": \"l1\", \"gesto\": \"saludar\"}, …], \"sale\": \"caminar\"}`. El gesto arranca con su línea.\n\nPara armarla, un pedido como el de abajo.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 24,
          "seVe": "Las seis acciones de Chispa una tras otra, 4 s cada una, con su nombre: caminar, saludar, señalar, celebrar, saltar y mirar."
        },
        "bloques": [
          {
            "tipo": "pedido",
            "texto": "Armá toma1.json: entra caminando por la izquierda, saluda en la línea 1, señala a la derecha en la 2."
          }
        ]
      },
      {
        "n": "6.3",
        "titulo": "Fondo transparente",
        "cuerpo": "En Blender: Render → Film → **Transparent**, y la salida en **PNG RGBA**. `animar.py` ya lo hace: el comando de abajo deja `salida/toma1/0001.png…` en el disco. Revise que ninguno pese 0 bytes.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El panel Film de Blender con Transparent marcado, y la carpeta de la toma con sus PNG numerados."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Renderizar la toma",
            "texto": "blender -b -P animar.py -- toma1.json"
          }
        ]
      },
      {
        "n": "6.4",
        "titulo": "Doce cuadros por segundo",
        "cuerpo": "Chispa se dibuja a **12 cuadros por segundo**, con un temblor leve, como stop motion. Se ve a propósito hecho a mano, y es **la mitad del render** que a 24. ffmpeg lo pasa a 30 al final.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 10,
          "seVe": "Chispa caminando a 24 y a 12 cuadros por segundo, lado a lado."
        }
      },
      {
        "n": "6.5",
        "titulo": "Cuánto tarda",
        "cuerpo": "Lo medido en nuestra laptop (RTX 2070 Max-Q limitada), a 1080 × 1920 con 24 muestras: **Chispa 0,59 s por cuadro**. Un minuto a 12 cuadros por segundo = 720 cuadros ≈ **7 min**. Sin GPU, mucho más.\n\nRenders largos: por tramos y mirando la temperatura (lección 5 del curso «Videos 3D con Blender y Claude»). En una laptop, enchufada y ventilada.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La cuenta en una lámina, con la GPU nombrada: 0,59 s por cuadro en una RTX 2070 Max-Q limitada; un minuto a 12 cuadros por segundo son 720 cuadros, unos 7 min."
        }
      },
      {
        "n": "6.6",
        "titulo": "Del PNG al video con alfa",
        "cuerpo": "**WebM VP9 con alfa**, para la web y ffmpeg, y **ProRes 4444 con alfa**, para editores de video: los dos comandos, abajo.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 30,
          "seVe": "Los dos comandos; los dos archivos que salen; el WebM en el navegador sobre un fondo a cuadros."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "WebM VP9 con alfa",
            "texto": "ffmpeg -framerate 12 -i salida/toma1/%04d.png -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 0 -crf 30 -r 30 tuerca-toma1.webm"
          },
          {
            "tipo": "comando",
            "etiqueta": "ProRes 4444 con alfa",
            "texto": "ffmpeg -framerate 12 -i salida/toma1/%04d.png -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le -r 30 tuerca-toma1.mov"
          }
        ]
      }
    ]
  },
  {
    "n": 7,
    "slug": "7-encima-de-cualquier-video",
    "titulo": "Encima de cualquier video, y de quién es su personaje",
    "objetivo": "Montar el personaje sobre un video suyo y dejar claros los derechos de cada pieza.",
    "resultado": "El video final de 15 a 30 s con su personaje comentando, y `licencias.md` completo.",
    "laminas": [
      {
        "n": "7.1",
        "titulo": "El resultado",
        "cuerpo": "Así se ve: un video cualquiera (una grabación de pantalla, una toma de su local) y su personaje encima, comentándolo.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 20,
          "seVe": "Una grabación de pantalla de un formulario; Chispa, abajo a la derecha, lo comenta y señala el botón.",
          "dice": "Este formulario tiene un error. ¿Lo ve? El botón dice enviar y no envía nada. Por eso existen las vistas previas."
        }
      },
      {
        "n": "7.2",
        "titulo": "Dónde se para",
        "cuerpo": "Abajo a la derecha o a la izquierda, sobre un tercio del alto. Nunca encima de lo que explica. Si tiene que señalar, que mire hacia eso. En vertical (9:16), arriba o abajo, nunca al medio.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Cuatro encuadres de Tuerca sobre un video, «bien» y «mal»: en una esquina, tapando lo que explica, mirando hacia lo que señala y en el medio de un video vertical."
        }
      },
      {
        "n": "7.3",
        "titulo": "Montarlo con ffmpeg",
        "cuerpo": "El comando de abajo pone el personaje sobre su video con la voz. El `-c:v libvpx-vp9` antes del WebM es para que lea el alfa. El script `capa.sh` del kit lo arma con el lugar de `toma.json`.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 35,
          "seVe": "El comando, el video final y un detalle del borde del personaje sin halo negro."
        },
        "bloques": [
          {
            "tipo": "comando",
            "etiqueta": "Montar sobre el video",
            "texto": "ffmpeg -i fondo.mp4 -c:v libvpx-vp9 -i tuerca-toma1.webm -i voz-toma1.mp3 -filter_complex \"[1:v]scale=-1:720[p];[0:v][p]overlay=W-w-40:H-h-20[v]\" -map \"[v]\" -map 2:a -c:v libx264 -crf 18 -c:a aac final.mp4"
          }
        ]
      },
      {
        "n": "7.4",
        "titulo": "En su editor de video",
        "cuerpo": "Si edita en un programa, importe el **ProRes 4444** (`.mov`) en una pista encima del video y la voz en una pista de audio. Nosotros lo probamos solo con ffmpeg: si su editor no muestra la transparencia, use la secuencia de PNG.",
        "apoyo": {
          "tipo": "captura",
          "seVe": "El archivo `.mov` del personaje en la línea de tiempo de un editor de video, en una pista encima del video, con la voz en una pista de audio."
        }
      },
      {
        "n": "7.5",
        "titulo": "¿De quién es su personaje?",
        "cuerpo": "**Su diseño** (la ficha, los dibujos, el código que usted dirigió) es suyo. **El modelo de Meshy:** suyo con plan pago; con el gratis, CC BY (dar crédito). **La voz:** con ElevenLabs Starter o superior puede usarla comercialmente; con el gratis, no. **Lo que hace solo una IA:** en EE. UU., la Oficina de Derechos de Autor (informe de enero de 2025) dice que lo generado por IA sin aporte humano suficiente no se protege; el aporte suyo sí. Fuera de EE. UU. cambia según el país.\n\nEsto no es asesoría legal: si va a ser la mascota de una marca, consulte con un abogado de marcas antes de invertir en anuncios.\n\n| Pieza | De quién es |\n| --- | --- |\n| Su diseño (la ficha, los dibujos, el código que usted dirigió) | Suyo |\n| El modelo de Meshy | Suyo con plan pago; con el gratis, CC BY (dar crédito) |\n| La voz | Uso comercial con ElevenLabs Starter o superior; con el gratis, no |\n| Lo que hace solo una IA | En EE. UU., sin aporte humano suficiente no se protege; el aporte suyo sí |",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "La tabla de derechos en una lámina: el diseño, el modelo de Meshy, la voz y lo que hace solo una IA, con de quién es cada uno."
        }
      },
      {
        "n": "7.6",
        "titulo": "Lo que no",
        "cuerpo": "Nada de: logos o mascotas de otras marcas, personajes de películas o juegos, la cara o la voz de una persona real sin su permiso por escrito. Y recuerde a Chispa: hasta un parecido puede frenar un anuncio.",
        "apoyo": {
          "tipo": "imagen",
          "seVe": "Una tarjeta roja: ni logos ni mascotas de otras marcas, ni personajes de películas o juegos, ni la cara o la voz de una persona real sin permiso."
        }
      },
      {
        "n": "7.7",
        "titulo": "Así lo usamos en Vion",
        "cuerpo": "En nuestro editor de videos, el personaje es una **capa** más: se elige quién, dónde entra, qué gestos hace y qué dice, y se dibuja en la PC.",
        "apoyo": {
          "tipo": "grabacion",
          "segundos": 20,
          "seVe": "Ultron en modo demo: el editor por escenas con una capa de personaje, su receta y la vista en vivo."
        }
      },
      {
        "n": "7.8",
        "titulo": "Ya tiene su personaje",
        "cuerpo": "Ahora puede hacerle decir cualquier cosa: una línea nueva en el guion, la voz, la boca y el render. Si quiere mostrarnos el suyo, la comunidad de Vion está abierta: el enlace está abajo.",
        "apoyo": {
          "tipo": "chispa",
          "conChispa": true,
          "segundos": 15,
          "seVe": "Chispa sobre el video final de Tuerca le da la mano a Tuerca, que está al lado.",
          "dice": "Ya tiene su personaje. Hágalo hablar. Y si quiere mostrárnoslo, la comunidad de Vion está abierta. El enlace, abajo."
        }
      }
    ]
  }
];
