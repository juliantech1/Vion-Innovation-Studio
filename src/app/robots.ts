import type { MetadataRoute } from 'next';
import { RUTAS, sitio } from '@/content';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', RUTAS.gracias.es, RUTAS.gracias.en] }],
    sitemap: `${sitio.url}/sitemap.xml`,
    host: sitio.url,
  };
}
