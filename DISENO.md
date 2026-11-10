# DISENO.md · el sistema de diseño de vion-studio.com

Para quien haga las páginas que faltan. La marca manda (`docs/marca/DESIGN.md` de la aldea): negro cuervo, azul polvo,
rojo amapola solo como acento, Geist, titulares en MAYÚSCULAS de peso 800 con una o dos palabras en rojo, plano y recto.
Este documento explica cómo quedó eso en el repo y cómo armar una página nueva sin inventar nada.

Dos páginas son la referencia y conviene leerlas antes de empezar: la portada (`src/components/paginas/Inicio.tsx`) y
Automatización de AutoCAD (`src/components/paginas/Autocad.tsx`).

## La idea, en tres líneas

1. **El sitio se lee como una ficha técnica bien compuesta.** Cada afirmación lleva su unidad, su rango o su nota; el
   plazo y el precio del primer paso están en el primer pantallazo. Figuras numeradas (Fig. 0, 1, 2…) con su leyenda.
2. **El sitio es un juego de láminas.** La portada trae la planta del sitio (cada ambiente es una página), el pie es un
   cajetín (lámina n/07, revisión, quién dibujó) y pasar de página es cambiar de lámina.
3. **El rojo quiere decir «acá decide una persona».** Los llamados, los rombos de «usted decide», el botón «Aprobar».
   Por eso aparece poco: un botón principal por pantalla y un solo campo rojo por página (el panel del cierre).

Verbo de movimiento: **trazar**. Las líneas se trazan, los datos se dibujan, el texto calza y se queda. Sin rebote.

## Dónde está cada cosa

```
src/app/globals.css          los tokens, en @theme de Tailwind 4 (color, tipografía, espacio, radios, líneas, movimiento)
src/app/sistema.css          las piezas (clases) que leen esos tokens; el índice está en su primer comentario
src/app/fuentes.ts           Geist y Geist Mono variables con next/font
src/components/vion/         los componentes del sistema
  Marco.tsx                  lo que va dentro de <body> en los tres layouts: cabecera, <main>, pie, comportamientos
  Cabecera.tsx · Navegador.tsx (cliente)   menú, etiqueta de sección, idioma, menú del celular (<dialog>)
  Pie.tsx · Lamina.tsx (cliente)           el cajetín unido al colofón
  piezas.tsx                 Boton, Flecha, Titular, Cabeza, Ficha, Figura, Nota, LlamadaNota, FilaServicio, Preguntas, Nube
  Pasos.tsx                  Fig. 1 de la portada: los tres pasos sobre una escala de semanas
  Cola.tsx (cliente)         Fig. 2 de la portada: la cola de aprobación que se opera, con datos de ejemplo
  Cierre.tsx                 el cierre de toda página: pregunta con nube de revisión, WhatsApp, correo y el panel rojo
  Comportamientos.tsx (cliente)  todo el JavaScript de comportamiento, en un solo lugar
  plano/                     la figura de firma: geometria.ts (datos), Plano.tsx (póster SVG, servidor),
                             PlanoVivo.tsx (cliente, carga diferida) y motor.ts (canvas 2D)
src/components/paginas/      las páginas hechas a mano (Inicio, Autocad) y comun.ts
src/components/sitio/        la base de contenido: PaginaContenido (las páginas que todavía no se rediseñaron), Texto, JsonLd…
src/content/                 TODO el texto. Las piezas del diseño tienen sus textos en es/piezas.ts y en/piezas.ts
```

## Tokens (`globals.css`, bloque `@theme static`)

Están en `@theme`, así que son a la vez variables CSS (`var(--color-poppy)`) y utilidades de Tailwind (`bg-raven`,
`text-poppy`, `font-mono`, `text-h2`, `rounded-marca`, `ease-sale-expo`). Las piezas de `sistema.css` usan las
variables; en una página nueva se puede componer con las clases del sistema, con utilidades o con las dos.

| Grupo | Tokens |
|---|---|
| Color de marca | `--color-raven` #0b0b0c · `--color-powder` #c9dfee · `--color-claro` #fafafa · `--color-poppy` #e8341c · `--color-orange` #f0612a |
| Superficies | `--color-raven-2`, `--color-raven-3` (sobre negro) · `--color-powder-2`, `--color-powder-3` (sobre azul polvo) |
| Tinta secundaria | `--color-gris-1` (9,3:1 sobre negro), `--color-gris-2` · `--color-azul-tinta` (8,2:1 sobre azul polvo), `--color-azul-tinta-2` |
| Rojo con contraste | `--color-poppy-boton` #d62e17 y `--color-poppy-hondo` #c4260e (el botón) · `--color-poppy-tinta` #b8200c (rojo sobre azul polvo) |
| Tipografía | `--font-sans` (Geist) · `--font-mono` (Geist Mono) · `--font-weight-titular` 800 |
| Escala | `--text-mega` 40 → 80 → 92 px · `--text-h2` 32 → 64 · `--text-h3` 20 → 26 · `--text-lead` 18 → 24 · `--text-cuerpo` 16 → 18 · `--text-s` 15 · `--text-xs` 13 · `--text-rotulo` 12 (cada uno con su interlineado e interletrado) |
| Espacio | la base de Tailwind (4 px) · `--spacing-margen` 20 → 64 · `--spacing-canal` 16 → 24 · `--spacing-seccion` 72 → 152 · `--spacing-seccion-corta` · `--spacing-cabecera` · `--container-marco` 1600 px |
| Forma y líneas | `--radius-marca` 6 px (botones, paneles, la cola); la estructura va en 0 · filetes de 1 px (`--filete`, `--filete-fuerte`, por tono) |
| Movimiento | `--ease-sale-expo`, `--ease-sale-cuarta`, `--ease-entra-sale`, `--ease-entra`, `--ease-resorte` · `--d-1` 140 ms (color) … `--d-5` 1200 ms (trazos) |

### Tonos: solo dos fondos

Cada sección declara su tono con una clase y todo lo de adentro lee nombres de rol, no colores:

```html
<section class="seccion tono-powder"> … </section>   <!-- o tono-raven -->
```

Roles: `--fondo`, `--sup`, `--tinta`, `--tinta-2`, `--tinta-3`, `--filete`, `--filete-fuerte`, `--marca`, `--marca-tinta`,
`--foco`. **Las secciones se alternan negro y azul polvo** (la portada: negro · azul · negro · azul · negro · azul ·
negro). No hay un tercer fondo. Nada de gris claro sobre azul polvo: el secundario ahí es `--color-azul-tinta`.

### Contraste (decisiones anotadas)

- **Botón principal.** DESIGN.md pide degradado de acento con texto claro, pero el texto claro da 4,1:1 sobre el
  amapola y 3,1:1 sobre el naranja: no llega a AA. Se resolvió **sin cambiar el texto**: el botón usa el amapola un
  paso más hondo (`#c4260e → #d62e17`, 5,6 a 4,7:1 con `#fafafa`) y el naranja de la marca queda como filo a la derecha
  (crece al pasar). El panel grande del cierre sí lleva el degradado exacto de la marca, con tinta negra (4,6 a 6:1).
- **Rojo como texto.** Sobre negro, amapola (4,6:1). Sobre azul polvo, los titulares usan `--color-poppy-tinta`
  (4,7:1); el amapola puro ahí da 3,1:1.
- **Foco.** Anillo de 2 px con 3 px de aire: naranja sobre negro, negro sobre azul polvo.

## Tipografía

- `.mega` (el H1) y `.titular` (los H2): MAYÚSCULAS, 800, a la izquierda, `text-wrap: balance`. La palabra de acento sale
  del contenido (`acento` de la página o la sección) con `<Acentuado>` o `<Titular>`.
- **Ningún titular lleva `overflow: hidden` ni se parte por letras**: las tildes de las mayúsculas necesitan su lugar y
  una palabra no se corta. Un H1 de más de 64 caracteres usa `mega mega--larga`.
- `.sub` (H3, 600, caja normal) · `.lead` (bajada) · `.texto` (cuerpo, secundario, 62 caracteres de ancho) ·
  `.rotulo` (Geist Mono 12 px, mayúsculas, +0,08em: etiquetas, encabezados de tabla, números de lámina).
- Cifras en Geist Mono o con `tabular-nums`. Sin rayas (— –) en el texto: lo revisa `npm run revisar`.

## Retícula

`.marco` (ancho de página con márgenes) y `.reticula` (12 columnas desde 768 px, 4 en celular; `--columnas`).
Se coloca con `grid-column`. Líneas fuertes: columnas 1, 7 y 8/9. **La tecla G** (o el conmutador del colofón) la
muestra con sus medidas reales: úsenla para revisar cada página a 390, 768, 1440 y 1920.

## Piezas

| Pieza | Cómo se usa | Notas |
|---|---|---|
| Cabecera | va sola en `Marco` | La etiqueta de sección sale del atributo `data-seccion="…"` de cada `<section>` de `<main>`. Pónganlo en todas. |
| Botón | `<Boton accion={…} idioma variante="principal|linea" flecha />` | **Uno principal por pantalla.** El de la cabecera es de línea. |
| Titular y cabeza | `<Cabeza {...seccion} idioma />` o `<Titular id texto acento />` | El id del H2 es `t-<id de la sección>`; la sección lleva `aria-labelledby`. |
| Ficha | `<Ficha filas={[{ termino, valor, detalle }]} />` | Pares dato / valor con filete. La del primer pantallazo lleva plazo y precio. |
| Figura | `<Figura id numero rotulo leyenda notas>…</Figura>` | Numeradas por página, en orden. `dibuja` traza sus líneas al asomar. |
| Nota | `<LlamadaNota n />` en el dato y `<Nota n>` en la leyenda | El rango de precios siempre lleva su nota. |
| Fila de servicio | `<FilaServicio href numero titulo texto meta />` dentro de `<ul class="indice">` | Se invierte entera a azul polvo al pasar o al enfocar. |
| Libro mayor | `<ul class="mayor">` con `mayor__n`, `.sub` y `<p>` | Frase a la izquierda, detalle a la derecha. |
| Tabla | `<table class="tabla">` con `scope` | Se apila en celular. `tabla__estado` para «Por medir». |
| Pregunta | `<Preguntas preguntas={…} />` dentro de `.preguntas__l` | `<details>` de verdad. El texto es el mismo del JSON-LD `FAQPage`. |
| Casillero | sale solo de `<Texto>` cuando el contenido trae `{{…}}`; suelto, `<Casillero texto />` | Ver abajo. |
| Cierre | `<Cierre llamado={p.llamado} idioma />` | Una nube de revisión por página, acá y en ningún otro lado. |
| Pie-cajetín | va solo en `Marco` | Proyecto, lámina n/07, revisión (fecha del build), índice, contacto, colofón medido. |
| Retícula | va sola en `Marco` | Tecla G. |

### Casilleros `{{…}}`

Lo que falta de Julian sigue como `{{…}}` en `src/content` y listado en `PENDIENTES-JULIAN.md` (`npm run revisar` lo
controla). El diseño lo muestra **en voz baja**: mono chica, color terciario, un filete de puntos, sin caja. Reglas:

- Si un dato falta, primero ver si la sección se puede armar para no necesitarlo (un cuadro con el estado «Por medir»
  dice más que un hueco). Así está la tabla de revisiones de AutoCAD.
- Un casillero nunca va en un titular, un botón, una figura grande ni el primer pantallazo.
- Las capturas que faltan en `/casos` no van como marcos vacíos gigantes: nombre del proyecto, ficha y la nota discreta.

## Movimiento

Todo en CSS salvo lo indicado. Reglas duras:

1. **El texto nunca depende de una animación para verse.** Lo que entra con JavaScript se esconde solo si
   `html.js` existe (lo pone una línea en `Marco` antes de pintar) y la persona no pidió menos movimiento.
2. Solo `transform`, `opacity`, `clip-path` y `stroke-dashoffset`.
3. Con `prefers-reduced-motion`: sin entradas, sin lienzo vivo, sin transición de página. Todo a la vista.

| Qué | Cómo se pide | Duración · curva |
|---|---|---|
| Titular de la portada | solo, con CSS (una vela baja por los renglones); es el LCP y no espera a nadie | 1150 ms · `--ease-sale-expo` |
| Lo demás de la portada | `data-llega` y `style="--espera: 520ms"` | 900 ms |
| Texto que calza al asomar | `data-entra` | 700 a 900 ms |
| Filete que se traza | `data-traza` en la lista o tabla que abre con filete fuerte | 1200 ms |
| Dibujos de línea y nube | `data-dibuja` en el contenedor; los trazos llevan `pathLength={1}` y la clase `dib` | 1200 a 1400 ms |
| Barras y rombos de la Fig. 1 | dentro de `.pasos` | 1200 ms / resorte |
| Hover y foco | botón: luz que barre, flecha que se releva, filo naranja que crece · fila: se invierte · enlace: subrayado que se redibuja en rojo · pregunta: + a − · marca: gira 18° | 530 ms, resorte sin rebote |
| Apretar | 0,98 | 80 ms |

**En reposo** lo único vivo es el plano (respira y sigue al puntero) y la cola (deja un trabajo nuevo cada 7 s si nadie
la toca).

### La figura de firma: la planta del sitio

`<Plano idioma />` (`components/vion/plano/`). Tres capas, cada una funciona sin la siguiente:

1. **Póster SVG, en el HTML del servidor**, con la planta entera. Se traza solo con CSS (2,3 s). Sin JavaScript queda así.
2. **Ambientes**: una lista de enlaces de verdad a las páginas, posicionados sobre la planta (teclado y lectores).
3. **Lienzo vivo** (`motor.ts`, canvas 2D a mano, sin dependencias): se carga con `import()` después de `load`, con el
   navegador ocioso y con el póster ya trazado; toma el relevo con un fundido de 240 ms. Con el scroll la cámara pasa de
   planta a isométrica y a corte A-A. En escritorio la portada se queda quieta 60vh para ese recorrido (`.portada--plano`);
   en celular el plano gira mientras cruza la pantalla, sin fijar nada.

Si `motor.ts` no carga, queda el póster. La portada nunca queda vacía. La geometría (un solo lugar para las dos plumas)
está en `geometria.ts`. Es la firma de la portada: **no la repitan en las páginas interiores**; ahí va una figura propia
del tema (la de AutoCAD es un juego de láminas y una rutina AutoLISP real).

### Transición entre páginas: la lámina

En `Comportamientos.tsx`. Al tocar un enlace interno, una lámina azul polvo crece desde el enlace hasta cubrir la
pantalla (480 ms) con «LÁMINA 03/07 · AUTOCAD» en su cajetín; se navega, y la página nueva aparece por una ventana con
proporción de lámina que crece desde el centro (820 ms). Es la misma superficie que la fila de servicio invertida: tocar
una fila la convierte en la página. No hace falta hacer nada en las páginas: funciona con cualquier `<Link>`. El cambio
de idioma recarga el documento (cada idioma tiene su layout raíz): ahí se usa View Transitions entre documentos
(`@view-transition`), donde el navegador alcanza. Si la navegación no llega, la lámina se abre sola a los 5 s.

## JavaScript de cliente

Lo mínimo, y nada en el camino del LCP. Componentes de cliente: `Navegador` (página actual, idioma, menú),
`Lamina` (n/07), `Comportamientos` (cabecera, etiqueta de sección, lo que entra al asomar, colofón, retícula,
transición), `Cola` (solo en la portada) y `PlanoVivo` + `motor.ts` (solo en la portada, diferido). **No se usa
framer-motion ni ninguna librería de animación** en las páginas nuevas: no agreguen una para un efecto que CSS resuelve.
Los componentes de `src/components/ui` (Spline y demás, de Julian) siguen en el repo, sin uso.

## Cómo hacer una página nueva

1. El texto ya está en `src/content/es/<pagina>.ts` y `en/<pagina>.ts`. **No se escribe texto en los componentes.** Si
   la página necesita rótulos de diseño (leyendas de figura, encabezados de tabla), van en `es/piezas.ts` y
   `en/piezas.ts` (tipo `Piezas` en `tipos.ts`).
2. Crear `src/components/paginas/<Pagina>.tsx` tomando `Autocad.tsx` como molde: `seccion(p, n, tipo)` trae cada
   sección con su tipo comprobado; se respeta el `id` de cada sección (hay anclas que apuntan ahí) y un solo H1.
3. Cambiar `src/app/(es)/<ruta>/page.tsx` y `src/app/(en)/en/<ruta>/page.tsx` para que usen el componente nuevo en
   lugar de `<PaginaContenido>`. No tocar `generateMetadata` ni `<JsonLd>` (va primero dentro del componente).
4. Alternar `tono-raven` y `tono-powder`; cada sección con `data-seccion`; primer pantallazo con titular, bajada, un
   botón principal y una ficha con el dato que el comprador busca; una figura propia; cerrar con `<Cierre>`.
5. Revisar: `npm run revisar` en 0 fallas, y los controles de `/jury` (`web-qa.sh jury shoot.mjs <url>`) en 390, 768,
   1440 y 1920: axe 0, sin desborde, objetivos táctiles de 44 px, foco visible, nada oculto con movimiento reducido.

Las páginas que siguen con `PaginaContenido` llevan la clase `.base`: ya tienen cabecera, pie, tokens y tipografía
nuevos (sección 11 de `sistema.css`). Al rediseñar una, se saca de ahí; cuando no quede ninguna, se borra esa sección.

## Lo que no va

Degradados violeta-azul, sombras, tarjetas dentro de tarjetas, píldoras, íconos en cuadraditos, texto centrado, un
tercer color de fondo, más de un botón rojo por pantalla, más de una nube de revisión por página, 3D o WebGL en el
camino del LCP, cifras o clientes que no existan, stock de personas, jerga interna a la vista («1 semana = 104 px»).
