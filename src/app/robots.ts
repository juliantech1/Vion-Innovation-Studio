import type { MetadataRoute } from 'next';
import { sitio } from '@/content';

/**
 * Los buscadores con IA que leen y citan el sitio en sus respuestas (GEO, pedido de Julian del 2026-11-16) van con
 * grupo propio y explícito: así un cambio futuro en el grupo general no los deja afuera sin querer.
 */
const BUSCADORES_IA = ['OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Claude-SearchBot', 'Claude-User'];

export default function robots(): MetadataRoute.Robots {
  return {
    // /gracias y el aviso en borrador no se bloquean: llevan noindex y el buscador tiene que poder leerlo.
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      ...BUSCADORES_IA.map((userAgent) => ({ userAgent, allow: '/', disallow: ['/api/'] })),
    ],
    sitemap: `${sitio.url}/sitemap.xml`,
    host: sitio.url,
  };
}
