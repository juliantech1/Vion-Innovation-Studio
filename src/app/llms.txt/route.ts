// /llms.txt: un resumen breve del sitio para modelos de lenguaje, armado desde la capa de contenido.
import { ARTICULOS, CURSOS, IDIOMAS, cursoIndexable, indexables, leccionesDe, urlLeccion, pagina, sitio, urlAbsoluta, urlArticulo, urlCurso } from '@/content';
import { descripcionLeccion } from '@/seo/metadatos';

export const dynamic = 'force-static';

export function GET() {
  const lineas = [
    '# Vion (Vion Studio)',
    '',
    `> ${pagina('inicio', 'en').bajada}`,
    '',
    `Vion is an AI studio based in Costa Rica. Contact: ${sitio.correo} · WhatsApp ${sitio.whatsapp} · Instagram ${sitio.instagramUsuario}.`,
    'The site is published in Spanish (es-CR, at the root) and in English (under /en). Prices are indicative and are confirmed after an assessment.',
    '',
  ];
  for (const idioma of IDIOMAS) {
    lineas.push(idioma === 'es' ? '## Páginas en español' : '## Pages in English', '');
    for (const p of indexables(idioma)) lineas.push(`- [${p.titulo}](${urlAbsoluta(p.id, idioma)}): ${p.descripcion}`);
    lineas.push('', idioma === 'es' ? '### Blog' : '### Blog', '');
    for (const a of ARTICULOS) lineas.push(`- [${a[idioma].titulo}](${urlArticulo(a[idioma].slug, idioma)}): ${a[idioma].descripcion}`);
    const cursos = CURSOS.filter(cursoIndexable);
    if (cursos.length) {
      lineas.push('', idioma === 'es' ? '### Cursos' : '### Courses', '');
      for (const c of cursos) {
        lineas.push(`- [${c[idioma].titulo}](${urlCurso(c[idioma].slug, idioma)}): ${c[idioma].descripcion}`);
        for (const l of leccionesDe(c, idioma)) lineas.push(`  - [${l.titulo}](${urlLeccion(c[idioma].slug, l.slug, idioma)}): ${descripcionLeccion(l)}`);
      }
    }
    lineas.push('');
  }
  return new Response(lineas.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
