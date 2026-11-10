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
| `{{razón social y cédula jurídica}}` | pie de todas las páginas: `/` `/consultoria-ia-autocad-bim` `/automatizacion-autocad` `/apps-a-medida` `/casos` `/nosotros` `/contacto` `/privacidad` `/gracias` `/en` `/en/ai-autocad-bim-consulting` `/en/autocad-automation` `/en/custom-apps` `/en/work` `/en/about` `/en/contact` `/en/privacy` `/en/thanks` `/cursos` `/en/courses` `/blog` `/en/blog` `/blog/nombrar-archivos-iso-19650` `/blog/que-automatizar-primero-en-autocad` `/blog/equipo-de-agentes-de-ia-con-aprobacion` `/en/blog/iso-19650-file-naming` `/en/blog/what-to-automate-first-in-autocad` `/en/blog/ai-agent-team-with-human-approval` | `interfaz.ts`, `privacidad.ts` |
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
