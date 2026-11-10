# vion-studio.com

El sitio de Vion (Vion Studio): Next.js 16.1.6 (App Router, React 19.2, React Compiler), Tailwind 4. Esta rama
(`hefesto/base`) deja la **base de contenido y de SEO**: todo el texto en una capa tipada y bilingüe, rutas estáticas
por idioma, metadatos, datos estructurados, imágenes Open Graph, formulario y controles. El estilo (`src/app/base.css`)
es mínimo y neutro a propósito: el diseño se monta encima.

**Diseño (rama `hefesto/rediseno`):** el sistema está explicado en [`DISENO.md`](DISENO.md): tokens en `src/app/globals.css`
(`@theme`), piezas en `src/app/sistema.css` y `src/components/vion/`. Todas las páginas (es/en) están hechas a mano
con ese sistema en `src/components/paginas/`, también Cursos, Blog, la plantilla de un artículo y la de un curso.

Nada se publica sin la aprobación de Julian. Lo que falta de su parte está en [`PENDIENTES-JULIAN.md`](PENDIENTES-JULIAN.md).

## Mapa de URL

Español (es-CR, trato de usted) en la raíz con las 7 URL del plan de SEO de Feme; inglés (EE.UU.) en `/en`. Cada página
indexable lleva canónica propia y `hreflang` es-CR, en y x-default (el español), recíprocos, y está en el sitemap con sus
alternativas. El selector de idioma lleva a la misma página en el otro idioma.

| Página | Español | Inglés | Indexa |
|---|---|---|---|
| Inicio | `/` | `/en` | sí |
| Consultoría IA + AutoCAD/BIM | `/consultoria-ia-autocad-bim` | `/en/ai-autocad-bim-consulting` | sí |
| Automatización de AutoCAD | `/automatizacion-autocad` | `/en/autocad-automation` | sí |
| Apps a la medida | `/apps-a-medida` | `/en/custom-apps` | sí |
| Casos | `/casos` | `/en/work` | sí |
| Nosotros | `/nosotros` | `/en/about` | sí |
| Contacto | `/contacto` | `/en/contact` | sí |
| Cursos (gratis, en producción) | `/cursos` | `/en/courses` | sí |
| Un curso publicado | `/cursos/<slug>` | `/en/courses/<slug>` | sí, recién cuando se publique (hoy ninguno) |
| Blog | `/blog` | `/en/blog` | sí |
| Un artículo | `/blog/<slug>` | `/en/blog/<slug>` | sí (3 artículos) |
| RSS del blog | `/blog/rss.xml` | `/en/blog/rss.xml` | (fuente) |
| Aviso de privacidad (borrador legal) | `/privacidad` | `/en/privacy` | no, hasta que lo apruebe una abogada |
| Gracias (formulario sin JavaScript) | `/gracias` | `/en/thanks` | no |
| 404 (bilingüe) | cualquier otra | cualquier otra | no |

Redirecciones 308 de las URL del sitio anterior (`next.config.ts`): `/work` → `/casos`, `/about` → `/nosotros`,
`/how-it-works` → `/consultoria-ia-autocad-bim`, `/contact` → `/contacto`, `/services` → `/#servicios`. `/blog` ya no
redirige: desde el 2026-11-10 es el blog.

## Cómo está armado

```
src/content/            LA fuente de todo el texto
  tipos.ts              tipos: Pagina, Seccion (texto, lista, pasos, ficha, proyectos, personas, rangos,
                        preguntas, contacto, formulario), Interfaz, EsquemaPagina
  rutas.ts              el mapa de URL por idioma: enlaces, canónicas, hreflang, sitemap y selector salen de acá
  sitio.ts              datos fijos (correo, WhatsApp, Instagram, colores) y `publicarRangos`
  catalogo.ts           montos del catálogo de Orión y ayudas (pasos, precio para JSON-LD, preguntas con precio)
  pendientes.ts         los casilleros {{…}} (ver PENDIENTES-JULIAN.md)
  cursos.ts             los cursos (rutas A a D, los cinco primeros, el curso de ejemplo borrador) y quién tiene página
  blog/                 los artículos (uno por archivo, es y en, cuerpo en Markdown mínimo y fuentes) e index.ts
  slugs.ts              las direcciones de cada artículo y curso por idioma (las usa también el selector de idioma)
  es/ · en/             una página por archivo + catalogo.ts (servicios) + interfaz.ts (cabecera, pie, formulario, 404)
src/app/(es)/           layout raíz con <html lang="es-CR"> y las páginas en español
src/app/(en)/en/        layout raíz con <html lang="en"> (en `(en)/layout.tsx`) y las páginas en inglés
src/app/global-not-found.tsx   la 404 de todo el sitio (experimental.globalNotFound: con dos layouts raíz no hay otra
                        forma de que la 404 salga en el HTML con lang y H1)
src/app/og/[archivo]/   imágenes Open Graph 1200 × 630 por página e idioma (/og/es-inicio.png…), estáticas, next/og + Geist
src/app/sitemap.ts · robots.ts · manifest.ts · llms.txt/   SEO técnico, todo desde la capa de contenido
src/components/vion/    el sistema de diseño (ver DISENO.md) · src/components/paginas/  las páginas rediseñadas
src/app/api/contacto/   el manejador del formulario (la lógica está en src/lib/contacto.ts)
src/seo/metadatos.ts    generateMetadata de cada página: título, descripción, canónica, hreflang, OG, Twitter, robots
src/seo/jsonld.ts       datos estructurados de cada página
src/components/sitio/   la estructura semántica: Cabecera, Navegacion (selector de idioma), Pie, PaginaContenido,
                        Secciones, Texto (marcado mínimo), FormularioContacto, NoEncontrada, JsonLd
src/components/ui/      los componentes de Julian (Spline, etc.): intactos, hoy sin uso; su CSS está en legado.css y no se carga
```

Cada página de `src/app` es una línea: `<PaginaContenido id="…" idioma="…" />` y `generateMetadata` desde el contenido.
El diseño puede reemplazar `PaginaContenido` por páginas hechas a mano usando la misma capa (`pagina(id, idioma)`).

**Marcado del texto** (`components/sitio/Texto.tsx`): `**negrita**`, `[texto](@casos#ultron)` (enlace interno por id de
página, se resuelve a la URL del idioma; un id que no existe rompe el build), `[texto](https://…)`, `{{casillero}}`.

**Sumar un artículo:** un archivo en `src/content/blog/` (copiar uno: `publicado`, `relacion`, y en `es` y `en`
título de 30 a 60, descripción de 70 a 155, bajada, etiquetas, cuerpo y fuentes), su id en `ARTICULOS`
(`blog/index.ts`) y sus dos direcciones en `slugs.ts`. Página, sitemap, hreflang, RSS, OG, JSON-LD y llms.txt salen
solos. El cuerpo: un bloque por párrafo; `## ` título (entra al índice), `- ` lista, `1. ` lista numerada, `> ` nota,
`| a | b |` tabla (la primera fila es el encabezado) y `` `código` ``; dentro, el marcado de `Texto`.

**Publicar un curso:** en `src/content/cursos.ts`, cargar en los dos idiomas `tituloSeo`, `descripcion` y cada lección
con su `video` (`mp4` + `poster`, o `youtube`), `minutos` y `material`; poner `estado: 'publicado'` y `publicado:
'AAAA-MM-DD'`. Con eso tiene su página (`components/paginas/Curso.tsx`), entra al sitemap, a llms.txt, a la lista de
`/cursos` con enlace y lleva JSON-LD `Course` (gratis, en línea) y la lista `ItemList` en `/cursos`. Para revisar la
plantilla sin publicar nada: construir con `VION_BORRADORES=1` (en Vercel no tiene efecto) y abrir
`/cursos/curso-de-ejemplo`, que sale con noindex.

**Sumar una página:** su id en `PAGINAS` (`tipos.ts`), sus dos URL en `rutas.ts`, el contenido en `es/` y `en/` (y en
sus `index.ts`), y su carpeta en `src/app/(es)` y `src/app/(en)/en`. El sitemap, hreflang, OG y llms.txt la toman solos.

### Datos estructurados

Blog: `CollectionPage` + `Blog` con sus `BlogPosting`; cada artículo: `WebPage` + `BlogPosting` (autor y editor:
Vion, fecha, imagen, palabras, las fuentes como `citation`) y migas de tres niveles. Cursos: `CollectionPage` sin
`ItemList` mientras no haya cursos con página (una lista de cursos que no existen no sirve; el resultado de cursos
pide una página por curso); un curso publicado lleva `Course`.

En todas: `Organization` + `ProfessionalService` (Vion, con contacto, zona de servicio CR y EE.UU., `sameAs` de
Instagram, `alternateName` «Vion Studio») y `WebSite`. Además, por página: el nodo de la página (`WebPage`,
`CollectionPage` con `ItemList` de proyectos, `AboutPage` con `employee`, `ContactPage`), `BreadcrumbList` fuera de la
portada, `Service` con su `Offer` y rango de precio (solo si `publicarRangos`) en las tres de servicio, y `FAQPage`
armado con las mismas preguntas que se ven en la página. Sin reseñas, puntajes ni nada que no esté visible.

### Formulario

`/contacto` → `POST /api/contacto` (JSON con JavaScript; POST normal sin él, que vuelve a `/gracias` con 303). Valida
nombre, contacto y consentimiento, limpia largos y UTM, acepta solo servicios de una lista cerrada, descarta bots (campo
trampa y tiempo mínimo), rechaza otros orígenes y cuerpos grandes. Si existen `VENTAS_API_URL` y `VENTAS_API_TOKEN`
(variables de Vercel, nunca en el repositorio ni en el navegador) lo entrega a Ventas de Ultron
(`POST /api/ventas/servicio/contactos`, `negocio: "vion"`). Sin ellas, **modo prueba**: el formulario lo avisa antes de
llenarlo y al enviar dice con claridad que no se envió. Hoy Vercel no puede llegar a Ultron (solo Tailscale, sin Funnel):
los llamados principales son WhatsApp y el correo. Opción recomendada para conectarlo: una cola chica que Ultron lea
por HTTPS saliente.

### Encabezados

`next.config.ts`: CSP (todo del mismo origen; `vercel.live` solo en vistas previas), HSTS, `nosniff`, `X-Frame-Options`,
`Referrer-Policy`, `Permissions-Policy`, COOP y sin `x-powered-by`. **Si el diseño suma Spline** (o cualquier origen
externo), hay que agregarlo a la CSP a propósito: `prod.spline.design` en `connect-src`/`img-src`, `blob:` en
`worker-src` y `'unsafe-eval'`/`'wasm-unsafe-eval'` en `script-src`. Siempre después del LCP, con póster estático y
apagado con `prefers-reduced-motion`.

## Construir, servir y revisar (en la aldea)

```bash
~/hefesto/herramientas/sitio.sh ~/hefesto/wt/base instalar          # npm ci --ignore-scripts
~/hefesto/herramientas/sitio.sh ~/hefesto/wt/base build             # next build
PUERTO=4510 ~/hefesto/herramientas/sitio.sh ~/hefesto/wt/base start # next start en 127.0.0.1:4510
node scripts/revisar-seo.mjs http://127.0.0.1:4510                   # con el sitio servido (Node 22, sin dependencias;
                                                                     # desde un contenedor, con --network host)
node --test scripts/probar-contacto.mjs                              # el formulario, sin red (Node ≥ 22.18)
~/hefesto/herramientas/sitio.sh ~/hefesto/wt/base parar
```

`npm run revisar` y `npm test` son lo mismo. `revisar-seo.mjs` recorre el sitio como un buscador (sitemap, portadas y
cada enlace interno) y falla si algo no cumple: `<html lang>` por idioma, un H1 y jerarquía sin saltos, landmarks y
«saltar al contenido», títulos de 30 a 60 y descripciones de 70 a 155 sin repetir, canónica propia, hreflang recíproco
y coherente con el sitemap, Open Graph y Twitter con imagen PNG de 1200 × 630, robots coherente con el sitemap, JSON-LD
que parsea (tipos esperados, sin reseñas ni casilleros, FAQ visible, migas, precio visible), imágenes con alt y
medidas, enlaces internos que existen sin redirigir, anclas, textos de enlace descriptivos, las búsquedas del plan de
Feme en el texto, sin rayas ni frases prohibidas por la marca, casilleros solo donde los lista `PENDIENTES-JULIAN.md`,
robots.txt, manifest, llms.txt, íconos, las redirecciones 308, la 404 y los encabezados de seguridad. Con `--estricto`
también falla si queda algún casillero (antes de publicar el dominio). Con `--casilleros` los lista.

## Contenido: de dónde sale

- Texto: el borrador Astro de la aldea (`sitios/vion-studio/src/data/sitio.ts` y sus páginas), el catálogo real de
  Orión y la voz de Vion. Nada inventado: sin clientes, logos, reseñas ni cifras; lo que falta es un casillero.
- Estructura, títulos, descripciones y búsquedas: el plan de Feme (`feme.trabajos` id 2), pasado a «usted». Cada
  página declara sus búsquedas en `palabrasClave` y el verificador revisa que estén cubiertas en el texto.
- Search Console (`feme.busquedas`): la búsqueda real de la marca es «vion studio»; por eso el título de la portada.
- Inglés: traducción cuidada para EE.UU. (no literal), con las mismas secciones y datos.
