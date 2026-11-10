import type { MetadataRoute } from 'next';
import { IDIOMAS, alternativas, indexables, urlAbsoluta } from '@/content';

/** Todas las páginas que se indexan, en los dos idiomas, cada una con sus alternativas (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  return IDIOMAS.flatMap((idioma) =>
    indexables(idioma).map((p) => ({
      url: urlAbsoluta(p.id, idioma),
      changeFrequency: 'monthly' as const,
      priority: p.id === 'inicio' ? 1 : ['consultoria', 'autocad', 'apps'].includes(p.id) ? 0.9 : 0.7,
      alternates: { languages: alternativas(p.id) },
    })),
  );
}
