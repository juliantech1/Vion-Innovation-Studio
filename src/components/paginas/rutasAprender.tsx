// Lo que comparten las rutas de los artículos y de los cursos en los dos idiomas: qué páginas se generan, sus
// metadatos y la fuente RSS. Cada `page.tsx` es una línea que llama a esto con su idioma.
import { notFound } from 'next/navigation';
import { ARTICULOS, CURSOS, articuloPorSlug, cursoConPagina, cursoPorSlug, interfazDe, leccionPorSlug, leccionesDe, pagina, sitio, urlAbsoluta, urlArticulo, type Idioma } from '@/content';
import { metadatosArticulo, metadatosCurso, metadatosLeccion } from '@/seo/metadatos';
import { Articulo } from './Articulo';
import { Curso } from './Curso';
import { Leccion } from './Leccion';

type Params = { params: Promise<{ slug: string }> };

export const articulos = (idioma: Idioma) => ({
  generateStaticParams: () => ARTICULOS.map((a) => ({ slug: a[idioma].slug })),
  generateMetadata: async ({ params }: Params) => {
    const a = articuloPorSlug(idioma, (await params).slug);
    return a ? metadatosArticulo(a, idioma) : {};
  },
  Page: async function Page({ params }: Params) {
    const a = articuloPorSlug(idioma, (await params).slug);
    if (!a) notFound();
    return <Articulo a={a} idioma={idioma} />;
  },
});

/**
 * Los cursos con página: los publicados. Los que están en producción se generan únicamente al construir con
 * VION_BORRADORES=1, para revisarlos, y salen con noindex. Si no hay ninguno, la ruta no genera nada y cualquier
 * /cursos/<algo> es la 404.
 */
export const cursos = (idioma: Idioma) => ({
  generateStaticParams: () => CURSOS.filter(cursoConPagina).map((c) => ({ slug: c[idioma].slug })),
  generateMetadata: async ({ params }: Params) => {
    const c = cursoPorSlug(idioma, (await params).slug);
    return c ? metadatosCurso(c, idioma) : {};
  },
  Page: async function Page({ params }: Params) {
    const c = cursoPorSlug(idioma, (await params).slug);
    if (!c) notFound();
    return <Curso c={c} idioma={idioma} />;
  },
});

type ParamsLeccion = { params: Promise<{ slug: string; leccion: string }> };

/** Las lecciones de los cursos con página, en los idiomas que tienen su contenido (hoy, castellano). */
export const lecciones = (idioma: Idioma) => {
  const buscar = async ({ params }: ParamsLeccion) => {
    const { slug, leccion } = await params;
    const c = cursoPorSlug(idioma, slug);
    const l = c && leccionPorSlug(c, idioma, leccion);
    return c && l ? { c, l } : undefined;
  };
  return {
    generateStaticParams: () =>
      CURSOS.filter(cursoConPagina).flatMap((c) => leccionesDe(c, idioma).map((l) => ({ slug: c[idioma].slug, leccion: l.slug }))),
    generateMetadata: async (p: ParamsLeccion) => {
      const x = await buscar(p);
      return x ? metadatosLeccion(x.c, x.l, idioma) : {};
    },
    Page: async function Page(p: ParamsLeccion) {
      const x = await buscar(p);
      if (!x) notFound();
      return <Leccion c={x.c} l={x.l} idioma={idioma} />;
    },
  };
};

const xml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fechaRss = (iso: string) => new Date(`${iso}T12:00:00Z`).toUTCString();

/** La fuente RSS 2.0 del blog de un idioma (/blog/rss.xml, /en/blog/rss.xml). */
export function rss(idioma: Idioma) {
  const blog = pagina('blog', idioma);
  const propia = `${urlAbsoluta('blog', idioma)}/rss.xml`;
  const items = ARTICULOS.map((a) => {
    const x = a[idioma];
    const url = urlArticulo(x.slug, idioma);
    return [
      '    <item>',
      `      <title>${xml(x.titulo)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${fechaRss(a.publicado)}</pubDate>`,
      `      <description>${xml(x.descripcion)}</description>`,
      ...x.etiquetas.map((e) => `      <category>${xml(e)}</category>`),
      '    </item>',
    ].join('\n');
  });
  const ultimo = ARTICULOS.map((a) => a.actualizado ?? a.publicado).sort().at(-1) ?? '2026-11-10';
  const cuerpo = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${xml(blog.titulo)}</title>`,
    `    <link>${urlAbsoluta('blog', idioma)}</link>`,
    `    <description>${xml(blog.descripcion)}</description>`,
    `    <language>${interfazDe(idioma).lang}</language>`,
    `    <lastBuildDate>${fechaRss(ultimo)}</lastBuildDate>`,
    `    <atom:link href="${propia}" rel="self" type="application/rss+xml"/>`,
    `    <copyright>${xml(sitio.nombre)}</copyright>`,
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');
  return new Response(cuerpo, { headers: { 'content-type': 'application/rss+xml; charset=utf-8' } });
}
