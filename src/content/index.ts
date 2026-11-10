// La puerta de la capa de contenido: `contenido(idioma)` da las páginas y los textos de interfaz de ese idioma.
import * as en from './en';
import * as es from './es';
import type { Catalogo } from './catalogo';
import type { IdPagina, Idioma, Interfaz, Pagina, Piezas } from './tipos';

const TODO: Record<Idioma, { paginas: Record<IdPagina, Pagina>; interfaz: Interfaz; piezas: Piezas; servicios: Catalogo }> = { es, en };

export const contenido = (idioma: Idioma) => TODO[idioma];
export const pagina = (id: IdPagina, idioma: Idioma): Pagina => TODO[idioma].paginas[id];
export const piezasDe = (idioma: Idioma): Piezas => TODO[idioma].piezas;
export const catalogoDe = (idioma: Idioma): Catalogo => TODO[idioma].servicios;
export const interfazDe = (idioma: Idioma): Interfaz => TODO[idioma].interfaz;

/** Las páginas que se indexan (van al sitemap y llevan hreflang recíproco). */
export const indexables = (idioma: Idioma): Pagina[] => Object.values(TODO[idioma].paginas).filter((p) => p.indexar);

export * from './rutas';
export * from './slugs';
export * from './sitio';
export * from './tipos';
export { ARTICULOS, articuloPorSlug, minutosDeLectura } from './blog';
export { CON_BORRADORES, CURSOS, RUTAS_CURSOS, cursoConPagina, cursoIndexable, cursoPorSlug, cursosVisibles, leccionPorSlug, leccionesDe, rutaCursos } from './cursos';
export { medioDe, videosDe, type Medio } from './cursos/medios';
