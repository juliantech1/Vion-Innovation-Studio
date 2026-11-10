import type { MetadataRoute } from 'next';
import { ARTICULOS, CURSOS, IDIOMAS, alternativas, cursoIndexable, indexables, leccionesDe, urlAbsoluta, urlArticulo, urlCurso, urlLeccion } from '@/content';
import { alternativasArticulo, alternativasCurso, metadatosLeccion } from '@/seo/metadatos';

/**
 * Todas las páginas que se indexan, en los dos idiomas, cada una con sus alternativas (hreflang): las del sitio, los
 * artículos del blog y los cursos publicados (los que están en producción no tienen página; los borradores, nunca).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return IDIOMAS.flatMap((idioma) => [
    ...indexables(idioma).map((p) => ({
      url: urlAbsoluta(p.id, idioma),
      changeFrequency: 'monthly' as const,
      priority: p.id === 'inicio' ? 1 : ['consultoria', 'autocad', 'apps'].includes(p.id) ? 0.9 : 0.7,
      alternates: { languages: alternativas(p.id) },
    })),
    ...ARTICULOS.map((a) => ({
      url: urlArticulo(a[idioma].slug, idioma),
      lastModified: a.actualizado ?? a.publicado,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
      alternates: { languages: alternativasArticulo(a) },
    })),
    ...CURSOS.filter(cursoIndexable).map((c) => ({
      url: urlCurso(c[idioma].slug, idioma),
      lastModified: c.publicado,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: alternativasCurso(c) },
    })),
    // Las lecciones de los cursos publicados, en los idiomas que las tienen; sus alternativas, las mismas de su página.
    ...CURSOS.filter(cursoIndexable).flatMap((c) =>
      leccionesDe(c, idioma).map((l) => ({
        url: urlLeccion(c[idioma].slug, l.slug, idioma),
        lastModified: c.publicado,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
        alternates: { languages: metadatosLeccion(c, l, idioma).alternates?.languages as Record<string, string> },
      })),
    ),
  ]);
}
