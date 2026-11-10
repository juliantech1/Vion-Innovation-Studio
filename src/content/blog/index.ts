// El blog de Vion: los artículos, en español y en inglés. Cada uno en su archivo (texto en Markdown mínimo, ver
// `CuerpoArticulo` en tipos.ts) y sus direcciones en `slugs.ts`. Autor: Vion (no se inventan personas).
// Nada inventado: cifras, clientes y citas, solo si son reales; lo que se afirma de una norma lleva su fuente al pie.
import { SLUGS_BLOG } from '../slugs';
import type { Articulo, ArticuloIdioma, Idioma } from '../tipos';
import { agentes } from './agentes-con-aprobacion';
import { autocad } from './autocad-que-automatizar';
import { iso19650 } from './iso-19650-nombres';

type SinSlug = Omit<ArticuloIdioma, 'slug'>;
export type ArticuloFuente = Omit<Articulo, 'es' | 'en'> & { es: SinSlug; en: SinSlug };

/** Los artículos publicados, del más nuevo al más viejo. */
export const ARTICULOS: Articulo[] = [iso19650, autocad, agentes]
  .map((a) => {
    const s = SLUGS_BLOG[a.id];
    if (!s) throw new Error(`El artículo «${a.id}» no tiene sus direcciones en slugs.ts`);
    return { ...a, es: { ...a.es, slug: s.es }, en: { ...a.en, slug: s.en } };
  })
  .sort((a, b) => (a.publicado < b.publicado ? 1 : a.publicado > b.publicado ? -1 : a.id.localeCompare(b.id)));

export const articuloPorSlug = (idioma: Idioma, slug: string) => ARTICULOS.find((a) => a[idioma].slug === slug);

/** Minutos de lectura (a 200 palabras por minuto, redondeado hacia arriba). */
export const minutosDeLectura = (cuerpo: string) => Math.max(1, Math.ceil(cuerpo.split(/\s+/).filter(Boolean).length / 200));
