// Revisión de SEO, semántica y enlaces del sitio ya construido y servido (`next start`). Node 22, sin dependencias.
// Recorre el sitio como un buscador: parte del sitemap y de las portadas, sigue cada enlace interno y revisa cada
// página. Sale con 1 si hay alguna falla; los casilleros {{…}} solo se aceptan donde PENDIENTES-JULIAN.md los lista
// (con --estricto, antes de publicar, tienen que ser cero).
//
//   node scripts/revisar-seo.mjs [http://127.0.0.1:4510] [--estricto]
//
// Qué revisa, por página: <html lang> según el idioma, un solo H1 y jerarquía de títulos sin saltos, landmarks
// (header, nav, main, footer) y «saltar al contenido», título (30 a 60) y descripción (70 a 155) sin repetir,
// canónica absoluta y propia, hreflang es-CR/en/x-default recíproco, Open Graph y Twitter con la imagen 1200 × 630
// que exista, robots coherente con el sitemap, JSON-LD que parsea (tipos permitidos, sin reseñas, sin casilleros,
// FAQPage solo con preguntas visibles, BreadcrumbList fuera de la portada), imágenes con alt y medidas, enlaces
// internos sin romper ni redirigir, anclas que existen, textos de enlace descriptivos, las búsquedas del plan de Feme
// en el texto, sin rayas (— –) ni frases prohibidas por la marca. Del sitio: sitemap completo y con alternates,
// robots.txt, manifest, llms.txt, las redirecciones 308 de las URL viejas, la 404 de cada idioma y los encabezados de
// seguridad.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const BASE = (args.find((a) => /^https?:\/\//.test(a)) || 'http://127.0.0.1:4510').replace(/\/$/, '');
const ESTRICTO = args.includes('--estricto');
const SITIO = 'https://vion-studio.com';
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const fallas = [];
const avisos = [];
const falla = (donde, m) => fallas.push(`${donde}: ${m}`);

// ---------- utilidades ----------
const ENTIDADES = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' };
const decodificar = (s = '') =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) =>
    e[0] === '#' ? String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : Number(e.slice(1))) : (ENTIDADES[e.toLowerCase()] ?? m),
  );
const atributos = (tag) => {
  const a = {};
  for (const m of tag.matchAll(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
    a[m[1].toLowerCase()] = decodificar(m[2] ?? m[3] ?? m[4] ?? '');
  }
  return a;
};
const etiquetas = (html, nombre) => [...html.matchAll(new RegExp(`<${nombre}\\b[^>]*>`, 'gi'))].map((m) => atributos(m[0].slice(nombre.length + 1)));
const meta = (html, clave) => etiquetas(html, 'meta').find((a) => a.name === clave || a.property === clave)?.content;
const sinEtiquetas = (s) => decodificar(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const textoVisible = (html) =>
  sinEtiquetas(
    html
      .replace(/<head[\s\S]*?<\/head>/i, ' ')
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<div hidden="">[\s\S]*?<\/div>/gi, ' '),
  );
const normal = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ');
const local = (url) => (url.startsWith(SITIO) ? url.slice(SITIO.length) || '/' : url);
const absoluta = (ruta) => (ruta === "/" ? SITIO : `${SITIO}${ruta}`);
const esIngles = (ruta) => ruta === '/en' || ruta.startsWith('/en/');

async function pedir(ruta, opciones = {}) {
  const r = await fetch(BASE + ruta, { redirect: 'manual', ...opciones });
  const tipo = r.headers.get('content-type') || '';
  const cuerpo = tipo.startsWith('image/') ? Buffer.from(await r.arrayBuffer()) : await r.text();
  return { estado: r.status, headers: r.headers, tipo, cuerpo };
}

// ---------- los casilleros permitidos (PENDIENTES-JULIAN.md: cada {{…}} con las rutas donde aparece) ----------
const permitidos = new Map();
const archivoPendientes = path.join(RAIZ, 'PENDIENTES-JULIAN.md');
if (!fs.existsSync(archivoPendientes)) fallas.push('falta PENDIENTES-JULIAN.md');
else {
  for (const linea of fs.readFileSync(archivoPendientes, 'utf8').split('\n')) {
    if (!linea.startsWith('|')) continue;
    const casilleros = [...linea.matchAll(/`(\{\{[^}]+\}\})`/g)].map((m) => m[1]);
    const rutas = [...linea.matchAll(/`(\/[^`]*)`/g)].map((m) => m[1]);
    for (const c of casilleros) permitidos.set(c, new Set([...(permitidos.get(c) || []), ...rutas]));
  }
}

// ---------- el sitemap ----------
const sitemap = await pedir('/sitemap.xml');
if (sitemap.estado !== 200) falla('/sitemap.xml', `responde ${sitemap.estado}`);
const enSitemap = new Map(); // ruta → { hreflang: url }
for (const m of String(sitemap.cuerpo).matchAll(/<url>([\s\S]*?)<\/url>/g)) {
  const loc = (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1];
  if (!loc) continue;
  const alt = {};
  for (const l of m[1].matchAll(/<xhtml:link\b[^>]*>/g)) {
    const a = atributos(l[0]);
    alt[a.hreflang] = a.href;
  }
  enSitemap.set(local(decodificar(loc)), alt);
}

// ---------- recorrido ----------
const paginas = new Map(); // ruta → { html, estado }
// Las de gracias no tienen enlaces que lleguen (las abre el formulario sin JavaScript): se agregan a mano.
const cola = ['/', '/en', ...enSitemap.keys(), '/gracias', '/en/thanks'];
const vistos = new Set();
const enlazadas = new Map(); // ruta → de dónde
while (cola.length) {
  const ruta = cola.shift();
  if (vistos.has(ruta)) continue;
  vistos.add(ruta);
  const r = await pedir(ruta);
  if (r.estado !== 200) {
    falla(ruta, `responde ${r.estado}${r.headers.get('location') ? ` → ${r.headers.get('location')}` : ''}${enlazadas.has(ruta) ? ` (enlazada desde ${enlazadas.get(ruta)})` : ''}`);
    continue;
  }
  if (!r.tipo.includes('text/html')) continue;
  paginas.set(ruta, { html: r.cuerpo, headers: r.headers });
  for (const a of etiquetas(r.cuerpo, 'a')) {
    const href = a.href || '';
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const destino = href.split('#')[0].split('?')[0] || ruta;
    if (destino.startsWith('/api/') || /\.[a-z0-9]+$/i.test(destino)) continue;
    if (!enlazadas.has(destino)) enlazadas.set(destino, ruta);
    if (!vistos.has(destino)) cola.push(destino);
  }
}

// ---------- cada página ----------
const titulos = new Map();
const descripciones = new Map();
const hreflangDe = new Map();
const casillerosVistos = new Map();
const imagenesOg = new Set();
const TIPOS_LD = new Set(['Organization', 'ProfessionalService', 'WebSite', 'WebPage', 'AboutPage', 'ContactPage', 'CollectionPage', 'BreadcrumbList', 'Service', 'FAQPage']);
const PROHIBIDAS = ['elevate', 'seamless', 'potencie su negocio', 'revolucionario', 'disruptivo', 'siguiente nivel', 'garantizado', 'WhatsApp Business', 'next level', 'game-changer', 'cutting-edge'];
const ENLACE_VAGO = /^(aqu[ií]|ac[aá]|click|clic|haga clic|here|click here|more|m[aá]s|leer m[aá]s|read more|ver m[aá]s|link|enlace)$/i;

for (const [ruta, { html }] of paginas) {
  const mal = (m) => falla(ruta, m);
  const ingles = esIngles(ruta);
  const visible = textoVisible(html);

  // idioma
  const lang = atributos((html.match(/<html\b[^>]*>/i) || [''])[0]).lang;
  if (lang !== (ingles ? 'en' : 'es-CR')) mal(`<html lang="${lang}"> (se esperaba ${ingles ? 'en' : 'es-CR'})`);

  // robots
  const robots = meta(html, 'robots') || '';
  const noindex = /noindex/.test(robots);
  if (enSitemap.has(ruta) && noindex) mal('está en el sitemap pero tiene noindex');
  if (!enSitemap.has(ruta) && !noindex) mal('se puede indexar pero no está en el sitemap');

  // título y descripción
  const titulo = decodificar((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  if (!titulo) mal('sin <title>');
  else if (titulo.length < 30 || titulo.length > 60) mal(`título de ${titulo.length} caracteres (30 a 60): «${titulo}»`);
  const desc = meta(html, 'description') || '';
  if (desc.length < 70 || desc.length > 155) mal(`descripción de ${desc.length} caracteres (70 a 155): «${desc}»`);
  if (titulos.has(titulo)) mal(`título repetido con ${titulos.get(titulo)}`);
  if (descripciones.has(desc)) mal(`descripción repetida con ${descripciones.get(desc)}`);
  titulos.set(titulo, ruta);
  descripciones.set(desc, ruta);

  // canónica y hreflang
  const links = etiquetas(html, 'link');
  const canonicas = links.filter((l) => l.rel === 'canonical');
  if (canonicas.length !== 1) mal(`${canonicas.length} canónicas (tiene que haber 1)`);
  else if (canonicas[0].href !== absoluta(ruta)) mal(`canónica ${canonicas[0].href} (se esperaba ${absoluta(ruta)})`);
  const alt = {};
  for (const l of links.filter((l) => l.rel === 'alternate' && l.hreflang)) alt[l.hreflang] = l.href;
  if (!noindex) {
    for (const h of ['es-CR', 'en', 'x-default']) if (!alt[h]) mal(`falta hreflang="${h}"`);
    if (alt[ingles ? 'en' : 'es-CR'] !== absoluta(ruta)) mal('el hreflang de su propio idioma no apunta a sí misma');
    if (alt['x-default'] !== alt['es-CR']) mal('x-default tiene que ser la versión en español');
    const s = enSitemap.get(ruta);
    if (s && JSON.stringify(Object.entries(s).sort()) !== JSON.stringify(Object.entries(alt).sort())) mal('los alternates del sitemap no coinciden con los hreflang de la página');
    hreflangDe.set(ruta, alt);
  } else if (Object.keys(alt).length) mal('una página sin indexar no lleva hreflang');

  // Open Graph y Twitter
  const og = Object.fromEntries(['og:title', 'og:description', 'og:url', 'og:image', 'og:image:width', 'og:image:height', 'og:image:alt', 'og:locale', 'og:type', 'og:site_name', 'twitter:card', 'twitter:image'].map((k) => [k, meta(html, k)]));
  for (const [k, v] of Object.entries(og)) if (!v) mal(`falta ${k}`);
  if (og['og:url'] && og['og:url'] !== absoluta(ruta)) mal(`og:url ${og['og:url']} distinta de la canónica`);
  if (og['og:locale'] && og['og:locale'] !== (ingles ? 'en_US' : 'es_CR')) mal(`og:locale ${og['og:locale']}`);
  if (og['twitter:card'] && og['twitter:card'] !== 'summary_large_image') mal('twitter:card no es summary_large_image');
  if (og['og:image']) {
    if (!og['og:image'].startsWith(SITIO)) mal('og:image no es absoluta de vion-studio.com');
    else imagenesOg.add(local(og['og:image']));
    if (og['og:image:width'] !== '1200' || og['og:image:height'] !== '630') mal('og:image no declara 1200 × 630');
  }

  // estructura: H1, jerarquía, landmarks, saltar al contenido
  const titulosHtml = [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({ n: Number(m[1]), texto: sinEtiquetas(m[2]) }));
  const h1 = titulosHtml.filter((t) => t.n === 1);
  if (h1.length !== 1) mal(`tiene ${h1.length} <h1> (tiene que ser 1)`);
  if (titulosHtml[0]?.n !== 1) mal('el primer título no es el H1');
  for (let i = 1; i < titulosHtml.length; i++) {
    if (titulosHtml[i].n > titulosHtml[i - 1].n + 1) mal(`salto de H${titulosHtml[i - 1].n} a H${titulosHtml[i].n} en «${titulosHtml[i].texto}»`);
  }
  for (const t of titulosHtml) if (!t.texto) mal(`H${t.n} vacío`);
  const mains = (html.match(/<main\b/gi) || []).length;
  if (mains !== 1) mal(`${mains} <main>`);
  if (!/<main\b[^>]*\bid="contenido"/.test(html)) mal('<main> sin id="contenido"');
  if (!/<header\b/.test(html) || !/<footer\b/.test(html) || !/<nav\b/.test(html)) mal('faltan landmarks (header, nav o footer)');
  const primerEnlace = etiquetas(html.replace(/<head[\s\S]*?<\/head>/i, ''), 'a')[0];
  if (primerEnlace?.href !== '#contenido') mal('el primer enlace no es «saltar al contenido»');
  const navs = etiquetas(html, 'nav');
  if (navs.length > 1 && navs.some((n) => !n['aria-label'] && !n['aria-labelledby'])) mal('hay varios <nav> y alguno no tiene nombre');
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const repetidos = ids.filter((x, i) => ids.indexOf(x) !== i);
  if (repetidos.length) mal(`ids repetidos: ${[...new Set(repetidos)].join(', ')}`);

  // imágenes
  for (const img of etiquetas(html, 'img')) {
    if (!('alt' in img)) mal(`imagen sin alt: ${img.src}`);
    if (!(img.width && img.height) && !/position:absolute/.test(img.style || '')) mal(`imagen sin medidas: ${img.src}`);
  }

  // enlaces
  for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const a = atributos(m[1]);
    const texto = sinEtiquetas(m[2]);
    const nombre = a['aria-label'] || texto || etiquetas(m[2], 'img').map((i) => i.alt).join(' ');
    if (!nombre.trim()) mal(`enlace sin nombre: ${a.href}`);
    else if (ENLACE_VAGO.test(texto)) mal(`texto de enlace poco descriptivo: «${texto}» → ${a.href}`);
    if (a['aria-label'] && texto && !normal(a['aria-label']).includes(normal(texto))) mal(`el nombre accesible «${a['aria-label']}» no contiene el texto visible «${texto}»`);
    const href = a.href || '';
    if (a.target === '_blank' && !/noopener|noreferrer/.test(a.rel || '')) mal(`target=_blank sin noopener: ${href}`);
    if (href.startsWith('#')) {
      if (href.length > 1 && !ids.includes(href.slice(1))) mal(`ancla inexistente: ${href}`);
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      const [destino, ancla] = [href.split('#')[0].split('?')[0] || ruta, href.split('#')[1]];
      if (destino !== '/' && destino.endsWith('/')) mal(`enlace con barra final: ${href}`);
      if (ancla && paginas.has(destino) && !paginas.get(destino).html.includes(`id="${ancla}"`)) mal(`ancla inexistente: ${href}`);
      if (!destino.startsWith('/api/') && !/\.[a-z0-9]+$/i.test(destino) && esIngles(destino) !== ingles && !a.hreflang) mal(`enlace a otro idioma sin hreflang: ${href}`);
    } else if (href.startsWith(SITIO)) mal(`enlace interno absoluto: ${href}`);
  }

  // JSON-LD
  const nodos = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    if (m[1].includes('{{')) mal('un casillero {{…}} dentro de los datos estructurados');
    try {
      nodos.push(JSON.parse(m[1]));
    } catch {
      mal('JSON-LD que no parsea');
    }
  }
  const tipos = nodos.flatMap((n) => [n['@type']].flat());
  for (const n of nodos) if (n['@context'] !== 'https://schema.org') mal(`JSON-LD sin @context schema.org (${n['@type']})`);
  for (const t of tipos) if (!TIPOS_LD.has(t)) mal(`tipo de JSON-LD no esperado: ${t}`);
  const ld = JSON.stringify(nodos);
  if (/"(Review|AggregateRating|reviewRating|aggregateRating)"/.test(ld)) mal('JSON-LD con reseñas o puntajes');
  if (!tipos.includes('Organization') || !tipos.includes('WebSite')) mal('falta Organization o WebSite en el JSON-LD');
  const webPage = nodos.find((n) => /Page$/.test([n['@type']].flat()[0]) && n['@type'] !== 'FAQPage');
  if (!webPage) mal('falta el nodo de la página (WebPage, AboutPage, ContactPage o CollectionPage)');
  else {
    if (webPage.url !== absoluta(ruta)) mal(`el JSON-LD de la página dice url ${webPage.url}`);
    if (webPage.inLanguage !== (ingles ? 'en' : 'es-CR')) mal(`JSON-LD inLanguage ${webPage.inLanguage}`);
  }
  const esPortada = ruta === '/' || ruta === '/en';
  const migas = nodos.find((n) => n['@type'] === 'BreadcrumbList');
  if (!esPortada && !migas) mal('falta BreadcrumbList');
  if (migas) {
    for (const item of migas.itemListElement || []) if (!item.item?.startsWith(SITIO) || !paginas.has(local(item.item))) mal(`miga a una página que no existe: ${item.item}`);
    if (migas.itemListElement?.at(-1)?.item !== absoluta(ruta)) mal('la última miga no es la página');
  }
  const faq = nodos.find((n) => n['@type'] === 'FAQPage');
  if (faq) {
    const visibleN = normal(visible);
    for (const q of faq.mainEntity || []) {
      if (!visibleN.includes(normal(q.name))) mal(`pregunta del FAQPage que no se ve en la página: «${q.name}»`);
      if (!visibleN.includes(normal(q.acceptedAnswer?.text || ''))) mal(`respuesta del FAQPage que no se ve igual en la página: «${q.name}»`);
    }
  }
  const servicio = nodos.find((n) => n['@type'] === 'Service');
  if (servicio && (!servicio.provider || !servicio.name || !servicio.description)) mal('Service incompleto (name, description, provider)');
  if (servicio?.offers?.priceSpecification) {
    const { minPrice, maxPrice } = servicio.offers.priceSpecification;
    const miles = (n) => n.toLocaleString(ingles ? 'en-US' : 'es-CR').replace(/ /g, '.').replace(/\s/g, '.');
    const formas = (n) => [String(n), miles(n), n.toLocaleString('en-US')];
    if (![minPrice, maxPrice].every((p) => formas(p).some((f) => visible.includes(f)))) mal(`el precio del JSON-LD (${minPrice} a ${maxPrice}) no se ve en la página`);
  }

  // las búsquedas del plan de Feme (van en keywords del nodo de la página): todas sus palabras en el texto
  if (!noindex && webPage?.keywords) {
    const vacias = new Set(['de', 'la', 'el', 'para', 'con', 'en', 'a', 'y', 'los', 'las', 'del', 'for', 'and', 'the', 'in', 'of', 'to']);
    const todo = normal(`${titulo} ${desc} ${visible}`);
    for (const k of webPage.keywords.split(',').map((s) => s.trim())) {
      const faltan = normal(k).split(' ').filter((w) => w && !vacias.has(w) && !todo.includes(w));
      if (faltan.length) mal(`la búsqueda «${k}» no está cubierta en el texto (faltan: ${faltan.join(', ')})`);
    }
  }

  // texto visible: marca y casilleros
  if (/[—–]/.test(visible)) mal('raya o guion largo en el texto visible (usar punto, coma o dos puntos)');
  for (const frase of PROHIBIDAS) if (normal(visible).includes(normal(frase))) mal(`frase prohibida por la marca: «${frase}»`);
  for (const m of visible.matchAll(/\{\{[^}]+\}\}/g)) {
    casillerosVistos.set(m[0], [...(casillerosVistos.get(m[0]) || []), ruta]);
    if (!permitidos.get(m[0])?.has(ruta)) mal(`casillero que PENDIENTES-JULIAN.md no lista para esta página: ${m[0]}`);
  }
  if (/\{\{|\}\}/.test(titulo + desc + Object.values(og).join(' '))) mal('casillero en el título, la descripción o el Open Graph');
}

// hreflang recíproco: cada alternativa apunta de vuelta con el mismo grupo
for (const [ruta, alt] of hreflangDe) {
  for (const [h, url] of Object.entries(alt)) {
    if (h === 'x-default') continue;
    const otra = hreflangDe.get(local(url));
    if (!otra) falla(ruta, `hreflang ${h} → ${url}, que no es una página indexable del recorrido`);
    else if (JSON.stringify(Object.entries(otra).sort()) !== JSON.stringify(Object.entries(alt).sort())) falla(ruta, `hreflang no recíproco con ${local(url)}`);
  }
}

// las imágenes Open Graph: PNG de 1200 × 630
for (const ruta of imagenesOg) {
  const r = await pedir(ruta);
  if (r.estado !== 200 || r.tipo !== 'image/png') falla(ruta, `imagen OG responde ${r.estado} ${r.tipo}`);
  else if (r.cuerpo.readUInt32BE(16) !== 1200 || r.cuerpo.readUInt32BE(20) !== 630) falla(ruta, `imagen OG de ${r.cuerpo.readUInt32BE(16)} × ${r.cuerpo.readUInt32BE(20)}`);
}

// sitemap: todo lo indexable del recorrido está, y todo lo del sitemap existe
for (const ruta of enSitemap.keys()) if (!paginas.has(ruta)) falla('/sitemap.xml', `${ruta} no responde 200`);
const indexables = [...hreflangDe.keys()];
if (enSitemap.size !== indexables.length) falla('/sitemap.xml', `${enSitemap.size} URL en el sitemap y ${indexables.length} páginas indexables`);
for (const [ruta, alt] of enSitemap) if (!alt['es-CR'] || !alt.en || !alt['x-default']) falla('/sitemap.xml', `${ruta} sin sus tres alternates`);

// robots.txt
const robots = await pedir('/robots.txt');
if (robots.estado !== 200) falla('/robots.txt', `responde ${robots.estado}`);
else {
  if (!robots.cuerpo.includes(`Sitemap: ${SITIO}/sitemap.xml`)) falla('/robots.txt', 'sin la línea Sitemap');
  const prohibidas = [...robots.cuerpo.matchAll(/^Disallow:\s*(\S+)/gim)].map((m) => m[1]);
  for (const ruta of indexables) if (prohibidas.some((p) => ruta.startsWith(p))) falla('/robots.txt', `bloquea ${ruta}, que es indexable`);
}

// manifest, llms.txt
const manifest = await pedir('/manifest.webmanifest');
try {
  const j = JSON.parse(manifest.cuerpo);
  if (!j.name || !j.icons?.some((i) => i.sizes === '512x512')) falla('/manifest.webmanifest', 'sin nombre o sin ícono de 512');
} catch {
  falla('/manifest.webmanifest', `no es JSON (${manifest.estado})`);
}
const llms = await pedir('/llms.txt');
if (llms.estado !== 200 || !llms.cuerpo.startsWith('# ')) falla('/llms.txt', `responde ${llms.estado}`);
else for (const ruta of indexables) if (!llms.cuerpo.includes(`(${absoluta(ruta)})`)) falla('/llms.txt', `no lista ${ruta}`);
for (const icono of ['/favicon.ico', '/apple-touch-icon.png', '/icono-32.png', '/icono-512.png']) {
  const r = await pedir(icono);
  if (r.estado !== 200) falla(icono, `responde ${r.estado}`);
}

// redirecciones 308 de las URL del sitio anterior
const REDIRECCIONES = { '/work': '/casos', '/about': '/nosotros', '/how-it-works': '/consultoria-ia-autocad-bim', '/contact': '/contacto', '/services': '/#servicios', '/blog': '/', '/blog/algo': '/' };
for (const [vieja, nueva] of Object.entries(REDIRECCIONES)) {
  const r = await pedir(vieja);
  if (r.estado !== 308 || r.headers.get('location') !== nueva) falla(vieja, `responde ${r.estado} → ${r.headers.get('location')} (se esperaba 308 → ${nueva})`);
}

// la 404 (una sola, bilingüe: app/global-not-found.tsx) para cualquier dirección que no existe
for (const ruta of ['/no-existe-esta-pagina', '/en/no-such-page', '/casos/no-existe']) {
  const r = await pedir(ruta);
  if (r.estado !== 404) falla(ruta, `responde ${r.estado} (se esperaba 404)`);
  if (!/<html lang="es-CR"/.test(r.cuerpo)) falla(ruta, 'la 404 no tiene lang="es-CR"');
  if (!/<section[^>]*\blang="en"/.test(r.cuerpo)) falla(ruta, 'la 404 no tiene la ayuda en inglés (lang="en")');
  if (!/<meta name="robots" content="noindex/.test(r.cuerpo)) falla(ruta, 'la 404 sin noindex');
  if ((r.cuerpo.match(/<h1\b/g) || []).length !== 1) falla(ruta, 'la 404 no tiene un H1');
}

// encabezados de seguridad
const portada = await pedir('/');
for (const h of ['content-security-policy', 'strict-transport-security', 'x-content-type-options', 'x-frame-options', 'referrer-policy', 'permissions-policy']) {
  if (!portada.headers.get(h)) falla('/', `falta el encabezado ${h}`);
}
if (portada.headers.get('x-powered-by')) falla('/', 'expone x-powered-by');

// el formulario: GET no, otro origen no
const api = await pedir('/api/contacto');
if (api.estado !== 405) falla('/api/contacto', `GET responde ${api.estado} (se esperaba 405)`);
const ajeno = await pedir('/api/contacto', { method: 'POST', headers: { origin: 'https://otro.example', 'content-type': 'application/json' }, body: '{}' });
if (ajeno.estado !== 403) falla('/api/contacto', `POST de otro origen responde ${ajeno.estado} (se esperaba 403)`);

// ---------- informe ----------
for (const [c, rutas] of permitidos) if (!casillerosVistos.has(c)) avisos.push(`PENDIENTES-JULIAN.md lista ${c}, que ya no aparece en ninguna página`);
const total = [...casillerosVistos.values()].reduce((a, v) => a + v.length, 0);
console.log(`revisar-seo: ${paginas.size} páginas (${indexables.length} indexables), ${imagenesOg.size} imágenes OG, ${fallas.length} fallas, ${total} casilleros (${casillerosVistos.size} distintos)`);
for (const a of avisos) console.log(`  aviso: ${a}`);
for (const f of fallas) console.log(`  FALLA: ${f}`);
if (args.includes('--casilleros')) for (const [c, rutas] of casillerosVistos) console.log(`  ${c}  →  ${[...new Set(rutas)].join(', ')}`);
if (fallas.length || (ESTRICTO && total)) process.exit(1);
