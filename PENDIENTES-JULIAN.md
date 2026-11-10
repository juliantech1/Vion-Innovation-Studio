# Pendientes de Julian

Lo que el sitio necesita de vos para estar completo. Nada de esto se inventó: donde falta un dato, la página muestra un
casillero `{{…}}` discreto (letra mono chica con un filete de puntos, como el campo sin llenar de un cajetín), y `scripts/revisar-seo.mjs` falla si aparece uno que no esté en esta lista (o en una
página que no sea la que dice acá). Ningún casillero va en títulos, descripciones, Open Graph ni datos estructurados.

Cómo se llena: el texto de cada casillero está en `src/content/pendientes.ts` (constante `P`); se reemplaza el uso de
`P.loQueSea` en `src/content/es/…` y `src/content/en/…` por el dato real (en los dos idiomas), se borra la fila de acá y
se vuelve a correr la revisión. Antes de publicar el dominio: `node scripts/revisar-seo.mjs --estricto` tiene que dar
0 casilleros.

## Casilleros

| Casillero | Dónde aparece | Archivo |
|---|---|---|
| `{{razón social y cédula jurídica}}` | pie de todas las páginas: `/` `/consultoria-ia-autocad-bim` `/automatizacion-autocad` `/apps-a-medida` `/casos` `/nosotros` `/contacto` `/privacidad` `/gracias` `/en` `/en/ai-autocad-bim-consulting` `/en/autocad-automation` `/en/custom-apps` `/en/work` `/en/about` `/en/contact` `/en/privacy` `/en/thanks` `/cursos` `/en/courses` `/cursos/*` `/en/courses/*` `/blog` `/en/blog` `/blog/nombrar-archivos-iso-19650` `/blog/que-automatizar-primero-en-autocad` `/blog/equipo-de-agentes-de-ia-con-aprobacion` `/en/blog/iso-19650-file-naming` `/en/blog/what-to-automate-first-in-autocad` `/en/blog/ai-agent-team-with-human-approval` | `interfaz.ts`, `privacidad.ts` |
| `{{domicilio legal}}` | `/privacidad` `/en/privacy` | `privacidad.ts` |
| `{{región de Vercel donde se procesa el formulario}}` | `/privacidad` `/en/privacy` | `privacidad.ts` |
| `{{plazo de conservación de los datos}}` | `/privacidad` `/en/privacy` | `privacidad.ts` |
| `{{plazo legal de respuesta a un pedido de acceso o borrado}}` | `/privacidad` `/en/privacy` | `privacidad.ts` (Ley 8968 y su reglamento: lo confirma la abogada) |
| `{{fecha de aprobación del aviso}}` | `/privacidad` `/en/privacy` | `privacidad.ts` |
| `{{plazo de respuesta al formulario}}` | `/contacto` `/en/contact` | `contacto.ts` (por ejemplo «un día hábil») |
| `{{¿reuniones presenciales? dónde}}` | `/contacto` `/en/contact` | `contacto.ts` |
| `{{biografía de Julian Alvarez: formación, experiencia y qué hace en Vion}}` | `/nosotros` `/en/about` | `nosotros.ts` |
| `{{biografía de Maite Alvarez: formación, experiencia y qué hace en Vion}}` | `/nosotros` `/en/about` | `nosotros.ts` |
| `{{experiencia del equipo: años, formación y proyectos anteriores que se pueden nombrar}}` | `/nosotros` `/en/about` | `nosotros.ts` |
| `{{tecnologías de la automatización: AutoLISP, .NET, Python u otras}}` | `/automatizacion-autocad` `/en/autocad-automation` | `autocad.ts` |
| `{{resultado medido del diagnóstico de ejemplo}}` | `/automatizacion-autocad` `/en/autocad-automation` | `autocad.ts` (el diagnóstico sobre el plano de muestra de Autodesk) |
| `{{primer caso real de cliente, con permiso: firma, flujo automatizado y horas antes y después}}` | `/automatizacion-autocad` `/casos` `/en/autocad-automation` `/en/work` | `autocad.ts`, `casos.ts` |
| `{{resultados medidos de Ultron, si se publican}}` | `/casos` `/en/work` | `casos.ts` |
| `{{captura real de Ultron en modo demo, sin datos privados}}` | `/casos` `/en/work` | `casos.ts` (al tenerla: `imagen` del proyecto, con alt y medidas) |
| `{{estado de Top Spin y qué hace la app}}` | `/casos` `/en/work` | `casos.ts` |
| `{{resultados medidos de Top Spin, si se publican}}` | `/casos` `/en/work` | `casos.ts` |
| `{{captura real de Top Spin}}` | `/casos` `/en/work` | `casos.ts` |
| `{{estado de RealFood y qué parte construyó Vion}}` | `/casos` `/en/work` | `casos.ts` |
| `{{resultados medidos de RealFood, si se publican}}` | `/casos` `/en/work` | `casos.ts` |
| `{{captura real de RealFood}}` | `/casos` `/en/work` | `casos.ts` |
| `{{estado de Viazo}}` | `/casos` `/en/work` | `casos.ts` |
| `{{resultados medidos de Viazo, si se publican}}` | `/casos` `/en/work` | `casos.ts` |
| `{{captura real de Viazo}}` | `/casos` `/en/work` | `casos.ts` |

## Decisiones (no son casilleros, pero conviene confirmarlas antes de publicar)

- **Rangos de precio publicados.** Salen del catálogo real de Orión: diagnóstico USD 600 a 1.500, piloto 2.000 a 5.000,
  soporte 300 a 900 al mes, apps 3.000 a 15.000. Feme recomienda publicarlos (y la búsqueda «… precio» los pide). Con
  `publicarRangos = false` en `src/content/sitio.ts` desaparecen de las páginas, de las preguntas frecuentes y del
  JSON-LD (`Service.offers`).
- **WhatsApp `+506 8688 3553`** (de `docs/marca/DESIGN.md`): confirmar que es el número para clientes. Se usa solo como
  enlace con el mensaje ya escrito, no como texto grande.
- **Equipo:** «Julian Alvarez, CEO · desarrollo de software e IA» y «Maite Alvarez, COO · ingeniería y operaciones»
  salen del sitio anterior (`/about`). Confirmar nombres y cargos; van también en el JSON-LD de `/nosotros` (`employee`).
- **Proyectos propios en `/casos`:** Ultron, Top Spin, RealFood y Viazo, como los nombra el catálogo de Orión. Si alguno
  no debe mostrarse todavía, se saca del arreglo `proyectos` de `src/content/es/casos.ts` y `en/casos.ts`.
- **Aviso de privacidad:** es un borrador según la Ley 8968; lo revisa una abogada. Al aprobarlo: llenar sus casilleros,
  sacar la frase de borrador de la bajada y poner `indexar: true` en `privacidad.ts` (los dos idiomas). Entonces entra
  solo al sitemap y al hreflang.
- **Formulario → Ventas de Ultron:** Vercel no llega a Ultron (solo escucha en la laptop y en Tailscale, y Funnel está
  prohibido). Hasta decidir el camino (ver «Formulario» en el README), el formulario está en **modo prueba** y lo dice
  en la página; los llamados fuertes son WhatsApp y el correo, que ya funcionan.
- **Marca en el buscador:** Search Console muestra que la gente busca «vion studio» (34 impresiones, posición 8) y
  «vion-studio». Por eso el título de la portada dice «Vion Studio» y el JSON-LD lleva `alternateName` «Vion Studio» y
  «Vion Innovation Studio» (el nombre del sitio anterior). Si la marca es solo «Vion», se cambia en `sitio.ts`.
- **Search Console:** después de publicar, enviar `https://vion-studio.com/sitemap.xml` y pedir la indexación de las
  URL nuevas; las viejas ya redirigen con 308.

## Cursos y blog (2026-11-10)

- **Leer los tres artículos antes de publicar** (es y en; `src/content/blog/`): «Cómo nombrar archivos con ISO 19650
  sin volverse loco», «Qué automatizar primero en AutoCAD y cómo medir el ahorro» y «Un equipo de agentes de IA con
  aprobación humana». Están escritos en «usted», firmados por Vion, sin cifras ni clientes, y lo que dicen de normas y
  programas tiene su fuente al pie (revisadas el 2026-11-10). Conviene que los lea alguien que trabaje con ISO 19650 y
  AutoCAD. Su fecha de publicación dice 2026-11-10: si salen otro día, se cambia `publicado` en cada archivo.
- **El de agentes describe Ultron solo como patrón** (cola de aprobación, topes, bitácora, «la página es un dato»):
  nada de su código, prompts ni datos. Confirmar que está bien mostrar eso (es lo mismo que ya dicen la portada y Casos).
- **Cursos: decisiones del plan que siguen abiertas** (`~/aldea/docs/planes/2026-11-10-cursos-vion.md`, §6). La página
  no las da por tomadas:
  1. **Usted o tú.** La página y los títulos de los cursos están en «usted», como el resto del sitio (el plan los
     tenía en voseo: «Tu agentic OS… para vos» pasó a «Su agentic OS… para usted»). Si los cursos van a tutear, se
     cambia en `src/content/cursos.ts` y `src/content/es/cursos.ts`.
  2. **Correo o todo abierto, y la plataforma de la comunidad.** Hoy «avisarme cuando salga» es WhatsApp o el
     formulario de contacto con el mensaje ya escrito; no hay suscripción ni lista de correo.
  3. **Inglés.** La página en inglés existe, pero no promete cursos en inglés ni fechas.
  4. **Herramientas pagas.** Cada curso dice qué herramienta cobra (Claude Code, AutoCAD); revisar que la lista sea la
     correcta cuando se grabe cada uno.
- **Publicar un curso**: ver «Publicar un curso» en el README. El curso de ejemplo (`ejemplo` en `cursos.ts`) es un
  borrador que nunca se publica; se puede borrar cuando exista el primer curso de verdad.

## Cursos: casilleros de los diez cursos (2026-11-10)

Los cursos están en producción: sus páginas solo se construyen con `VION_BORRADORES=1` (noindex), así que estos
casilleros no se ven en el sitio publicado. Hay que llenarlos antes de marcar cada curso como publicado. Están en
`src/content/cursos/<id>/lecciones.ts` o `curso.ts` (la columna «Curso» da el slug de su página). Los `{{…}}` que van
dentro de un bloque de código (`<pre>` o `` `…` ``) no son casilleros: son partes de una plantilla que llena el alumno.

| Casillero | Dónde aparece | Curso |
|---|---|---|
| `{{enlace de la comunidad}}` | `/cursos/claude-basico-chat-cowork-code` `/cursos/claude-basico-chat-cowork-code/6-cual-uso-para-que` | claude-basico-chat-cowork-code |
| `{{licencia de la plantilla}}` | `/cursos/agentic-os-equipo-de-agentes` | agentic-os-equipo-de-agentes |
| `{{versión con la que se grabó, se anota al grabar}}` | `/cursos/motion-design-con-claude` | motion-design-con-claude |
| `{{licencia del kit, por decidir}}` | `/cursos/motion-design-con-claude` | motion-design-con-claude |
| `{{MIT, por confirmar}}` | `/cursos/videos-3d-con-blender-y-claude` `/cursos/personaje-3d-que-habla` | personaje-3d-que-habla, videos-3d-con-blender-y-claude |
| `{{el precio para Costa Rica se confirma antes de publicar}}` | `/cursos/claude-autocad-planos-cantidades` | claude-autocad-planos-cantidades |
| `{{cómo escribirnos: por confirmar}}` | `/cursos/claude-autocad-planos-cantidades` `/cursos/claude-autocad-planos-cantidades/7-rutinas-y-ahorro` | claude-autocad-planos-cantidades |
| `{{se confirma antes de publicar}}` | `/cursos/cuantificacion-y-presupuestos-con-ia` | cuantificacion-y-presupuestos-con-ia |
| `{{la acción del cierre: por confirmar}}` | `/cursos/cuantificacion-y-presupuestos-con-ia` `/cursos/cuantificacion-y-presupuestos-con-ia/7-revision-y-entrega` | cuantificacion-y-presupuestos-con-ia |
| `{{enlace a la comunidad de Vion}}` | `/cursos/sitio-web-con-claude-code` `/cursos/sitio-web-con-claude-code/7-un-rediseno-en-serio` | sitio-web-con-claude-code |
| `{{el tiempo medido al grabar}}` | `/cursos/claude-basico-chat-cowork-code/5-pagina-web-y-herramienta` | claude-basico-chat-cowork-code |
| `{{el menú se comprueba al grabar}}` | `/cursos/skills-propias-de-claude/7-biblioteca-con-versiones` | skills-propias-de-claude |
| `{{el commit revisado se publica con el curso}}` | `/cursos/claude-autocad-planos-cantidades/2-puesta-a-punto` | claude-autocad-planos-cantidades |
| `{{la dirección del kit se publica con el curso}}` | `/cursos/claude-autocad-planos-cantidades/2-puesta-a-punto` `/cursos/cuantificacion-y-presupuestos-con-ia/2-puesta-a-punto` | claude-autocad-planos-cantidades, cuantificacion-y-presupuestos-con-ia |
| `{{los nombres exactos de las herramientas en los permisos se confirman al revisar el servidor}}` | `/cursos/claude-autocad-planos-cantidades/2-puesta-a-punto` | claude-autocad-planos-cantidades |
| `{{el comando se comprueba al grabar}}` | `/cursos/claude-autocad-planos-cantidades/2-puesta-a-punto` | claude-autocad-planos-cantidades |
| `{{el error real que haya encontrado en la grabación, solo si pasó}}` | `/cursos/claude-autocad-planos-cantidades/4-cantidades-a-excel` | claude-autocad-planos-cantidades |
| `{{lo que llevó contarlo a mano, solo si se midió completo al grabar}}` | `/cursos/claude-autocad-planos-cantidades/7-rutinas-y-ahorro` | claude-autocad-planos-cantidades |
| `{{sus condiciones de uso se confirman antes de publicar}}` | `/cursos/cuantificacion-y-presupuestos-con-ia/2-puesta-a-punto` | cuantificacion-y-presupuestos-con-ia |
| `{{quién revisa en pantalla: por confirmar}}` | `/cursos/cuantificacion-y-presupuestos-con-ia/7-revision-y-entrega` | cuantificacion-y-presupuestos-con-ia |
| `{{las dos cifras, cuando se midan al grabar}}` | `/cursos/cuantificacion-y-presupuestos-con-ia/7-revision-y-entrega` | cuantificacion-y-presupuestos-con-ia |

**Marcadores dentro de bloques copiables** (no los revisa `revisar-seo`, pero hay que cambiarlos al publicar):
`<SHA-REVISADO>` (claude-autocad, lámina 2.5: el commit revisado del servidor MCP), `<URL-DEL-KIT>` (claude-autocad 2.8,
cuantificacion 2.3, seo-agentes 2.3) y `<repo de la plantilla de Vion>` (agentic-os 2.9).

## Cursos: dónde se alojan los videos (decidir antes de publicar el primero)

Los once cursos tienen 415 videos cortos previstos (unos 167 minutos en total, de los que unos 32 son de Chispa). **No van al
repositorio**: pesan (el primero que llegó, 15 s en 1080p, pesa 6,3 MB: todo junto serían unos 4 GB tal como salen) y el
repositorio es público. La página ya está lista para leerlos de `src/content/cursos/medios.json` (curso → lámina → URL
del MP4, póster y subtítulos `.vtt`, o un id de YouTube o Vimeo); la CSP de `next.config.ts` suma sola el origen nuevo.
Hoy ese archivo solo marca qué videos ya están hechos (`"producido": true`) y trae las imágenes fijas livianas.

| Opción | Costo (páginas oficiales, 2026-11-10) | A favor | En contra |
|---|---|---|---|
| YouTube no listado | Gratis | Subtítulos, calidad adaptable, sin cuenta que pagar | Marca de YouTube y videos sugeridos al final; un iframe de terceros (más peso y cookies, aunque se usa youtube-nocookie y se carga recién al tocar «Reproducir») |
| Vimeo | Plan pago (ver vimeo.com/upgrade; no lo comprobamos) | Reproductor limpio, sin publicidad | Cuesta todos los meses; también es un iframe |
| Vercel Blob | Hobby: 1 GB y 10 GB de transferencia al mes incluidos (si se pasa, se corta 30 días). Pro: USD 0,023 por GB al mes guardado y desde USD 0,05 por GB transferido (vercel.com/docs/vercel-blob/usage-and-pricing) | Mismo proveedor que el sitio, MP4 propio con `<video>` | 4 GB no entran en Hobby; con tráfico, la transferencia se cobra |
| Cloudflare R2 | USD 0,015 por GB al mes, **salida gratis**; 10 GB al mes gratis (developers.cloudflare.com/r2/pricing) | Lo más barato para MP4 propios: con ~2 a 4 GB entra en la capa gratis | Hay que abrir una cuenta de Cloudflare y un dominio o subdominio para los archivos |
| Cloudflare Stream | USD 5 por cada 1.000 minutos guardados (al mes) y USD 1 por cada 1.000 minutos vistos (developers.cloudflare.com/stream/pricing) | Calidad adaptable y subtítulos; 167 min entran en el primer bloque de USD 5 | Es un iframe o HLS; cobra por minuto visto |

Recomendación: **Cloudflare R2** para los MP4 (con los videos recomprimidos a 720p o 1080p livianos) y los pósteres y
subtítulos al lado; si se prefiere no abrir otra cuenta, **YouTube no listado**. Después de decidir: subir los archivos,
cargar sus URL en `medios.json` (cada video con su `poster` y sus `subtitulos`: hacen falta para publicar) y marcar el
curso como publicado en `src/content/cursos/index.ts`.

## Cursos: otras decisiones abiertas (2026-11-10)

- **B9 · Su canal de YouTube con IA**: aparece en `/cursos` con su ficha básica y «El temario se está escribiendo»,
  sin lecciones ni página. Cuando su storyboard (`docs/planes/cursos/B9-canal-youtube.md` en la aldea) esté listo, se
  carga como los demás (`src/content/cursos/<id>/`).
- **Licencias de los kits y plantillas** (propuesta de los storyboards: MIT): están como casilleros en las fichas.
- **La comunidad de Vion**: tres cursos cierran con «la comunidad de Vion está abierta» y su enlace es un casillero.
- **La revisión de la ingeniera** en el curso de cuantificación (lección 7): los títulos dicen «revisión profesional»
  para no afirmar algo que todavía no está grabado.
- **Nombres en el kit**: para que no se vean nombres internos, el archivo `REVISAR.md` del curso de skills se llama
  `LISTA-DE-REVISION.md` y la carpeta `secretos/` del kit de SEO se llama `claves/`. Quien arme los kits tiene que usar
  esos nombres.
- **Imágenes fijas**: `python3 scripts/medios-cursos.py` pasa a WebP (menos de 300 kB) las que los manifiestos de
  `~/hefesto/cursos-media/` marcan como listas y las anota en `medios.json`. Hoy entraron 12 del curso de motion.
