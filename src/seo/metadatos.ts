import type { Metadata, Viewport } from 'next';
import { alternativas, interfazDe, pagina, sitio, urlAbsoluta, urlArticulo, urlCurso, type Articulo, type Curso, type IdPagina, type Idioma } from '@/content';
import { cursoIndexable } from '@/content/cursos';

/** La imagen Open Graph de una página (la dibuja `app/og/[archivo]/route.tsx`, 1200 × 630). */
export const imagenOg = (id: IdPagina, idioma: Idioma) => `${sitio.url}/og/${idioma}-${id}.png`;
export const imagenOgArticulo = (a: Articulo, idioma: Idioma) => `${sitio.url}/og/${idioma}-articulo-${a.id}.png`;
export const imagenOgCurso = (c: Curso, idioma: Idioma) => `${sitio.url}/og/${idioma}-curso-${c.id}.png`;

/** El <title> de un artículo o un curso: con « | Vion» si entra en 60 caracteres. */
export const tituloCon = (t: string) => (t.length + 7 <= 60 && !/\|\s*Vion$/.test(t) ? `${t} | Vion` : t);

/** hreflang de un artículo: cada idioma con su propia dirección. */
export const alternativasArticulo = (a: Articulo) => ({ 'es-CR': urlArticulo(a.es.slug, 'es'), en: urlArticulo(a.en.slug, 'en'), 'x-default': urlArticulo(a.es.slug, 'es') });
export const alternativasCurso = (c: Curso) => ({ 'es-CR': urlCurso(c.es.slug, 'es'), en: urlCurso(c.en.slug, 'en'), 'x-default': urlCurso(c.es.slug, 'es') });

const ROBOTS_SI = { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const, 'max-snippet': -1, 'max-video-preview': -1 } };

function metadatosSub(o: { idioma: Idioma; url: string; titulo: string; descripcion: string; imagen: string; alt: string; idiomas?: Record<string, string>; articulo?: { publicado: string; actualizado?: string; etiquetas: string[] } }): Metadata {
  const ui = interfazDe(o.idioma);
  const imagen = { url: o.imagen, width: 1200, height: 630, alt: o.alt, type: 'image/png' };
  return {
    title: { absolute: o.titulo },
    description: o.descripcion,
    alternates: { canonical: o.url, languages: o.idiomas },
    openGraph: {
      ...(o.articulo
        ? { type: 'article' as const, publishedTime: o.articulo.publicado, modifiedTime: o.articulo.actualizado ?? o.articulo.publicado, authors: [sitio.url], tags: o.articulo.etiquetas }
        : { type: 'website' as const }),
      siteName: sitio.nombre,
      locale: ui.localeOg,
      alternateLocale: o.idiomas ? [interfazDe(o.idioma === 'es' ? 'en' : 'es').localeOg] : undefined,
      url: o.url,
      title: o.titulo,
      description: o.descripcion,
      images: [imagen],
    },
    twitter: { card: 'summary_large_image', title: o.titulo, description: o.descripcion, images: [imagen] },
    robots: o.idiomas ? ROBOTS_SI : { index: false, follow: true },
  };
}

/** Un artículo del blog: canónica propia, hreflang con su par en el otro idioma y Open Graph de tipo article. */
export function metadatosArticulo(a: Articulo, idioma: Idioma): Metadata {
  const x = a[idioma];
  return metadatosSub({
    idioma,
    url: urlArticulo(x.slug, idioma),
    titulo: tituloCon(x.titulo),
    descripcion: x.descripcion,
    imagen: imagenOgArticulo(a, idioma),
    alt: x.titulo,
    idiomas: alternativasArticulo(a),
    articulo: { publicado: a.publicado, actualizado: a.actualizado, etiquetas: x.etiquetas },
  });
}

/** Un curso: solo se indexa si está publicado y no es un borrador. */
export function metadatosCurso(c: Curso, idioma: Idioma): Metadata {
  const x = c[idioma];
  return metadatosSub({
    idioma,
    url: urlCurso(x.slug, idioma),
    titulo: x.tituloSeo,
    descripcion: x.descripcion,
    imagen: imagenOgCurso(c, idioma),
    alt: x.titulo,
    idiomas: cursoIndexable(c) ? alternativasCurso(c) : undefined,
  });
}

/** Lo que comparten todas las páginas de un idioma: va en el layout raíz de ese idioma. */
export function metadatosBase(idioma: Idioma): Metadata {
  return {
    metadataBase: new URL(sitio.url),
    applicationName: sitio.nombre,
    authors: [{ name: sitio.nombre, url: sitio.url }],
    creator: sitio.nombre,
    publisher: sitio.nombre,
    category: idioma === 'es' ? 'tecnología' : 'technology',
    formatDetection: { telephone: false, email: false, address: false },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '48x48' },
        { url: '/icono-32.png', type: 'image/png', sizes: '32x32' },
        { url: '/icono-512.png', type: 'image/png', sizes: '512x512' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: sitio.colores.negro,
  colorScheme: 'dark',
};

/** Título, descripción, canónica, hreflang, Open Graph, Twitter y robots de una página, desde su contenido. */
export function metadatosDe(id: IdPagina, idioma: Idioma): Metadata {
  const p = pagina(id, idioma);
  const ui = interfazDe(idioma);
  const url = urlAbsoluta(id, idioma);
  const imagen = { url: imagenOg(id, idioma), width: 1200, height: 630, alt: p.h1, type: 'image/png' };
  return {
    title: { absolute: p.titulo },
    description: p.descripcion,
    alternates: {
      canonical: url,
      // Las páginas sin indexar (borradores, gracias) no entran en el grupo de hreflang.
      languages: p.indexar ? alternativas(id) : undefined,
      // El blog anuncia su fuente RSS.
      types: id === 'blog' ? { 'application/rss+xml': [{ url: `${url}/rss.xml`, title: p.titulo }] } : undefined,
    },
    openGraph: {
      type: 'website',
      siteName: sitio.nombre,
      locale: ui.localeOg,
      alternateLocale: p.indexar ? [interfazDe(idioma === 'es' ? 'en' : 'es').localeOg] : undefined,
      url,
      title: p.titulo,
      description: p.descripcion,
      images: [imagen],
    },
    twitter: { card: 'summary_large_image', title: p.titulo, description: p.descripcion, images: [imagen] },
    robots: p.indexar
      ? { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } }
      : { index: false, follow: true },
  };
}

/** La página 404 (bilingüe, ver `app/global-not-found.tsx`): sin indexar y sin canónica. */
export function metadatosNoEncontrada(): Metadata {
  const es = interfazDe('es').noEncontrada;
  const en = interfazDe('en').noEncontrada;
  return {
    ...metadatosBase('es'),
    title: { absolute: `${es.titulo.replace(/ \| Vion$/, '')} · ${en.titulo}` },
    description: es.descripcion,
    robots: { index: false, follow: true },
  };
}
