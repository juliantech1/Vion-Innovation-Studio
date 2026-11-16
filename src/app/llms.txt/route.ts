// /llms.txt: un resumen breve del sitio para modelos de lenguaje, armado desde la capa de contenido.
// El sitio principal está en español de Costa Rica (la raíz): va primero y completo. La versión en inglés (/en), con
// las mismas páginas, va aparte al final (pedido de Julian del 2026-11-16, GEO).
import { ARTICULOS, CURSOS, cursoIndexable, indexables, leccionesDe, urlLeccion, pagina, sitio, urlAbsoluta, urlArticulo, urlCurso, type Idioma } from '@/content';
import { descripcionLeccion } from '@/seo/metadatos';

export const dynamic = 'force-static';

const TEXTOS = {
  es: { paginas: '## Páginas', casos: '## Casos de clientes', blog: '## Blog', cursos: '## Cursos' },
  en: { paginas: '### Pages', casos: '### Client cases', blog: '### Blog', cursos: '### Courses' },
} as const;

/** Las páginas, el blog y los cursos de un idioma, con su enlace y su descripción. */
function listas(idioma: Idioma): string[] {
  const t = TEXTOS[idioma];
  const lineas: string[] = [t.paginas, ''];
  for (const p of indexables(idioma)) lineas.push(`- [${p.titulo}](${urlAbsoluta(p.id, idioma)}): ${p.descripcion}`);
  const casos = pagina('casos', idioma).secciones.flatMap((s) => (s.tipo === 'caso' ? s.casos : []));
  if (casos.length) {
    lineas.push('', t.casos, '');
    for (const c of casos) lineas.push(`- [${c.titulo}](${urlAbsoluta('casos', idioma)}#${c.id}): ${c.problema} ${c.solucion} ${c.resultado}`);
  }
  lineas.push('', t.blog, '');
  for (const a of ARTICULOS) lineas.push(`- [${a[idioma].titulo}](${urlArticulo(a[idioma].slug, idioma)}): ${a[idioma].descripcion}`);
  const cursosPub = CURSOS.filter(cursoIndexable);
  if (cursosPub.length) {
    lineas.push('', t.cursos, '');
    for (const c of cursosPub) {
      lineas.push(`- [${c[idioma].titulo}](${urlCurso(c[idioma].slug, idioma)}): ${c[idioma].descripcion}`);
      for (const l of leccionesDe(c, idioma)) lineas.push(`  - [${l.titulo}](${urlLeccion(c[idioma].slug, l.slug, idioma)}): ${descripcionLeccion(l)}`);
    }
  }
  lineas.push('');
  return lineas;
}

export function GET() {
  const lineas = [
    `# ${sitio.nombre} (${sitio.nombresAlternos.join(', ')})`,
    '',
    `> ${pagina('inicio', 'es').bajada}`,
    '',
    `Vion es un estudio de IA de ${sitio.direccion.localidad}, ${sitio.direccion.region}, Costa Rica. Contacto: ${sitio.correo} · WhatsApp ${sitio.whatsapp} · Instagram ${sitio.instagramUsuario}.`,
    'El sitio está en español de Costa Rica (en la raíz) y en inglés (bajo /en), con las mismas páginas. Los precios publicados son orientativos y se confirman después del diagnóstico. La auditoría GEO se cotiza para cada sitio.',
    `Texto completo de las páginas y los artículos: ${sitio.url}/llms-full.txt`,
    '',
    ...listas('es'),
    '## English version (/en)',
    '',
    `> ${pagina('inicio', 'en').bajada}`,
    '',
    `Vion is an AI studio based in ${sitio.direccion.localidad}, ${sitio.direccion.region}, Costa Rica. Contact: ${sitio.correo} · WhatsApp ${sitio.whatsapp} · Instagram ${sitio.instagramUsuario}. Prices are indicative and are confirmed after the assessment; the GEO audit is quoted per site. Full text: ${sitio.url}/llms-full.txt`,
    '',
    ...listas('en'),
  ];
  return new Response(lineas.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
