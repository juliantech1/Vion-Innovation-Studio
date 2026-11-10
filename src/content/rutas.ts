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
  privacidad: { es: '/privacidad', en: '/en/privacy' },
  gracias: { es: '/gracias', en: '/en/thanks' },
};

/** Las páginas del menú principal, en orden. */
export const MENU: IdPagina[] = ['consultoria', 'autocad', 'apps', 'casos', 'nosotros', 'contacto'];

export const ruta = (id: IdPagina, idioma: Idioma, ancla?: string) => RUTAS[id][idioma] + (ancla ? `#${ancla}` : '');

/** URL absoluta y canónica (sin barra final, salvo la raíz). */
export const urlAbsoluta = (id: IdPagina, idioma: Idioma) => {
  const r = RUTAS[id][idioma];
  return r === '/' ? `${sitio.url}/` : `${sitio.url}${r}`;
};

/** hreflang → URL de una página: es-CR, en y x-default (el español, que es la raíz). */
export const alternativas = (id: IdPagina) => ({
  'es-CR': urlAbsoluta(id, 'es'),
  en: urlAbsoluta(id, 'en'),
  'x-default': urlAbsoluta(id, 'es'),
});

/** De una ruta cualquiera del sitio a su página (o nada si no es una página conocida). */
export function paginaDeRuta(pathname: string): { id: IdPagina; idioma: Idioma } | undefined {
  const limpia = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  for (const id of Object.keys(RUTAS) as IdPagina[]) {
    for (const idioma of ['es', 'en'] as const) if (RUTAS[id][idioma] === limpia) return { id, idioma };
  }
  return undefined;
}

/** La misma página en el otro idioma; si la ruta no es una página conocida (404), la portada de ese idioma. */
export function equivalente(pathname: string, destino: Idioma): string {
  const p = paginaDeRuta(pathname);
  return p ? RUTAS[p.id][destino] : RUTAS.inicio[destino];
}
