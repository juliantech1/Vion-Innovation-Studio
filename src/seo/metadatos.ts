import type { Metadata, Viewport } from 'next';
import { alternativas, interfazDe, pagina, sitio, urlAbsoluta, type IdPagina, type Idioma } from '@/content';

/** La imagen Open Graph de una página (la dibuja `app/og/[archivo]/route.tsx`, 1200 × 630). */
export const imagenOg = (id: IdPagina, idioma: Idioma) => `${sitio.url}/og/${idioma}-${id}.png`;

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
