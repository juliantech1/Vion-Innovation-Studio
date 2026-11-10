import { SLUGS_BLOG, SLUGS_CURSOS } from './slugs';
import { sitio } from './sitio';
import type { IdPagina, Idioma } from './tipos';

/**
 * El mapa de URLs. Español en la raíz (las 7 del plan de Feme) e inglés en /en con URLs en inglés equivalentes.
 * Es la única fuente: de acá salen los enlaces internos, las canónicas, el hreflang, el sitemap y el selector de idioma.
 * Una página nueva se agrega acá, en `tipos.ts` (PAGINAS), en `es/` y `en/`, y con su carpeta en `src/app`.
 */
export const RUTAS: Record<IdPagina, Record<Idioma, string>> = {
  inicio: { es: '/', en: '/en' },
  consultoria: { es: '/consultoria-ia-autocad-bim', en: '/en/ai-autocad-bim-consulting' },
  autocad: { es: '/automatizacion-autocad', en: '/en/autocad-automation' },
  apps: { es: '/apps-a-medida', en: '/en/custom-apps' },
  casos: { es: '/casos', en: '/en/work' },
  nosotros: { es: '/nosotros', en: '/en/about' },
  contacto: { es: '/contacto', en: '/en/contact' },
  cursos: { es: '/cursos', en: '/en/courses' },
  blog: { es: '/blog', en: '/en/blog' },
  privacidad: { es: '/privacidad', en: '/en/privacy' },
  gracias: { es: '/gracias', en: '/en/thanks' },
};

/** Las páginas del menú principal, en orden. También es el orden de las láminas (Inicio es la 01) y de la planta. */
export const MENU: IdPagina[] = ['consultoria', 'autocad', 'apps', 'cursos', 'casos', 'nosotros', 'blog', 'contacto'];
/** Todas las láminas del juego, en orden: Inicio y el menú. */
export const LAMINAS: IdPagina[] = ['inicio', ...MENU];

export const ruta = (id: IdPagina, idioma: Idioma, ancla?: string) => RUTAS[id][idioma] + (ancla ? `#${ancla}` : '');

/** URL absoluta y canónica, sin barra final (la raíz es `https://vion-studio.com`, como la escribe Next en la canónica). */
export const urlAbsoluta = (id: IdPagina, idioma: Idioma) => {
  const r = RUTAS[id][idioma];
  return r === '/' ? sitio.url : `${sitio.url}${r}`;
};

/** hreflang → URL de una página: es-CR, en y x-default (el español, que es la raíz). */
export const alternativas = (id: IdPagina) => ({
  'es-CR': urlAbsoluta(id, 'es'),
  en: urlAbsoluta(id, 'en'),
  'x-default': urlAbsoluta(id, 'es'),
});

/** La dirección de un artículo del blog o de un curso: debajo de la página que los reúne. */
export const rutaArticulo = (slug: string, idioma: Idioma) => `${RUTAS.blog[idioma]}/${slug}`;
export const rutaCurso = (slug: string, idioma: Idioma) => `${RUTAS.cursos[idioma]}/${slug}`;
const absolutaDe = (r: string) => (r === '/' ? sitio.url : `${sitio.url}${r}`);
export const urlArticulo = (slug: string, idioma: Idioma) => absolutaDe(rutaArticulo(slug, idioma));
export const urlCurso = (slug: string, idioma: Idioma) => absolutaDe(rutaCurso(slug, idioma));
/** Una lección: debajo de su curso. El ancla de una lámina es #lamina-<n> («0.3» → #lamina-0-3). */
export const rutaLeccion = (curso: string, leccion: string, idioma: Idioma) => `${rutaCurso(curso, idioma)}/${leccion}`;
export const urlLeccion = (curso: string, leccion: string, idioma: Idioma) => absolutaDe(rutaLeccion(curso, leccion, idioma));
export const anclaLamina = (n: string) => `lamina-${n.replace(/\./g, '-')}`;

/**
 * De una ruta cualquiera del sitio a su página (o nada si no es una página conocida). Un artículo o un curso es de su
 * página madre (Blog o Cursos), y `sub` dice cuál es, para llevar al mismo artículo en el otro idioma.
 */
export function paginaDeRuta(pathname: string): { id: IdPagina; idioma: Idioma; sub?: string } | undefined {
  const limpia = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  for (const id of Object.keys(RUTAS) as IdPagina[]) {
    for (const idioma of ['es', 'en'] as const) {
      if (RUTAS[id][idioma] === limpia) return { id, idioma };
      if ((id === 'blog' || id === 'cursos') && limpia.startsWith(`${RUTAS[id][idioma]}/`)) {
        // Una lección (/cursos/<curso>/<lección>) es de su curso: el otro idioma lleva a la página del curso.
        const slug = limpia.slice(RUTAS[id][idioma].length + 1).split('/')[0];
        const existe = Object.values(id === 'blog' ? SLUGS_BLOG : SLUGS_CURSOS).some((x) => x[idioma] === slug);
        if (existe) return { id, idioma, sub: slug };
      }
    }
  }
  return undefined;
}

/** La misma página en el otro idioma; si la ruta no es una página conocida (404), la portada de ese idioma. */
export function equivalente(pathname: string, destino: Idioma): string {
  const p = paginaDeRuta(pathname);
  if (!p) return RUTAS.inicio[destino];
  if (p.sub) {
    const x = Object.values(p.id === 'blog' ? SLUGS_BLOG : SLUGS_CURSOS).find((s) => s[p.idioma] === p.sub);
    if (x) return (p.id === 'blog' ? rutaArticulo : rutaCurso)(x[destino], destino);
  }
  return RUTAS[p.id][destino];
}
