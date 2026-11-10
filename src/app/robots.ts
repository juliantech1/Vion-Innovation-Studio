import type { MetadataRoute } from 'next';
import { sitio } from '@/content';

export default function robots(): MetadataRoute.Robots {
  return {
    // /gracias y el aviso en borrador no se bloquean: llevan noindex y el buscador tiene que poder leerlo.
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${sitio.url}/sitemap.xml`,
    host: sitio.url,
  };
}
