// La puerta de la capa de contenido: `contenido(idioma)` da las páginas y los textos de interfaz de ese idioma.
import * as en from './en';
import * as es from './es';
import type { IdPagina, Idioma, Interfaz, Pagina } from './tipos';

const TODO: Record<Idioma, { paginas: Record<IdPagina, Pagina>; interfaz: Interfaz }> = { es, en };

export const contenido = (idioma: Idioma) => TODO[idioma];
export const pagina = (id: IdPagina, idioma: Idioma): Pagina => TODO[idioma].paginas[id];
export const interfazDe = (idioma: Idioma): Interfaz => TODO[idioma].interfaz;

/** Las páginas que se indexan (van al sitemap y llevan hreflang recíproco). */
export const indexables = (idioma: Idioma): Pagina[] => Object.values(TODO[idioma].paginas).filter((p) => p.indexar);

export * from './rutas';
export * from './sitio';
export * from './tipos';
