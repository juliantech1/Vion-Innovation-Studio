// Datos estructurados (schema.org) de cada página, armados desde su contenido: solo lo que la página muestra.
// Sin reseñas, puntajes ni nada que no esté visible. `scripts/revisar-seo.mjs` revisa los tipos y sus campos.
import { imagenOg } from './metadatos';
import { interfazDe, pagina, sitio, urlAbsoluta, type IdPagina, type Idioma } from '@/content';

type Nodo = Record<string, unknown>;

export const ID_ORGANIZACION = `${sitio.url}/#organizacion`;
export const ID_SITIO = `${sitio.url}/#sitio`;

const PAISES = {
  es: [{ '@type': 'Country', name: 'Costa Rica' }, { '@type': 'Country', name: 'Estados Unidos' }],
  en: [{ '@type': 'Country', name: 'Costa Rica' }, { '@type': 'Country', name: 'United States' }],
};
const SABE = {
  es: ['Inteligencia artificial', 'Agentes de IA', 'AutoCAD', 'Civil 3D', 'Revit', 'BIM', 'ISO 19650', 'AutoLISP', 'Desarrollo de software a la medida'],
  en: ['Artificial intelligence', 'AI agents', 'AutoCAD', 'Civil 3D', 'Revit', 'BIM', 'ISO 19650', 'AutoLISP', 'Custom software development'],
};

/** Vion: Organization + ProfessionalService, con contacto y zona de servicio. */
export function organizacion(idioma: Idioma, personas?: { nombre: string; cargo: string }[]): Nodo {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ID_ORGANIZACION,
    name: sitio.nombre,
    alternateName: [...sitio.nombresAlternos],
    url: `${sitio.url}/`,
    logo: { '@type': 'ImageObject', url: `${sitio.url}${sitio.logo.src}`, width: sitio.logo.ancho, height: sitio.logo.alto },
    image: imagenOg('inicio', idioma),
    description: pagina('inicio', idioma).bajada,
    email: sitio.correo,
    telephone: sitio.whatsappE164,
    address: { '@type': 'PostalAddress', addressCountry: sitio.pais },
    areaServed: PAISES[idioma],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: idioma === 'es' ? 'ventas' : 'sales',
        email: sitio.correo,
        telephone: sitio.whatsappE164,
        availableLanguage: ['Spanish', 'English'],
        areaServed: ['CR', 'US'],
      },
    ],
    knowsLanguage: ['es', 'en'],
    knowsAbout: SABE[idioma],
    sameAs: [sitio.instagram],
    ...(personas?.length
      ? { employee: personas.map((x) => ({ '@type': 'Person', name: x.nombre, jobTitle: x.cargo, worksFor: { '@id': ID_ORGANIZACION } })) }
      : {}),
  };
}

export function sitioWeb(): Nodo {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': ID_SITIO,
    url: `${sitio.url}/`,
    name: sitio.nombre,
    alternateName: [...sitio.nombresAlternos],
    inLanguage: ['es-CR', 'en'],
    publisher: { '@id': ID_ORGANIZACION },
  };
}

/** Todos los nodos de una página, cada uno en su <script type="application/ld+json">. */
export function datosEstructurados(id: IdPagina, idioma: Idioma): Nodo[] {
  const p = pagina(id, idioma);
  const ui = interfazDe(idioma);
  const url = urlAbsoluta(id, idioma);
  const idMigas = `${url}#migas`;
  const conMigas = id !== 'inicio';
  const nodos: Nodo[] = [organizacion(idioma, p.esquema.personas), sitioWeb()];

  const web: Nodo = {
    '@context': 'https://schema.org',
    '@type': p.esquema.tipo,
    '@id': `${url}#pagina`,
    url,
    name: p.titulo,
    headline: p.h1,
    description: p.descripcion,
    inLanguage: ui.lang,
    isPartOf: { '@id': ID_SITIO },
    about: { '@id': ID_ORGANIZACION },
    primaryImageOfPage: { '@type': 'ImageObject', url: imagenOg(id, idioma), width: 1200, height: 630 },
  };
  if (p.palabrasClave.length) web.keywords = p.palabrasClave.join(', ');
  if (conMigas) web.breadcrumb = { '@id': idMigas };
  if (p.esquema.tipo === 'ContactPage' || p.esquema.tipo === 'AboutPage') web.mainEntity = { '@id': ID_ORGANIZACION };
  if (p.esquema.lista?.length) {
    web.mainEntity = {
      '@type': 'ItemList',
      numberOfItems: p.esquema.lista.length,
      itemListElement: p.esquema.lista.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.nombre, url: `${url}#${x.ancla}` })),
    };
  }
  nodos.push(web);

  if (conMigas) {
    nodos.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': idMigas,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: pagina('inicio', idioma).nav, item: urlAbsoluta('inicio', idioma) },
        { '@type': 'ListItem', position: 2, name: p.nav, item: url },
      ],
    });
  }

  const s = p.esquema.servicio;
  if (s) {
    nodos.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#servicio`,
      name: s.nombre,
      serviceType: s.tipoDeServicio,
      description: s.descripcion,
      url,
      inLanguage: ui.lang,
      provider: { '@id': ID_ORGANIZACION },
      areaServed: PAISES[idioma],
      ...(s.precio
        ? {
            offers: {
              '@type': 'Offer',
              ...(s.oferta ? { name: s.oferta } : {}),
              url,
              priceCurrency: s.precio.moneda,
              priceSpecification: {
                '@type': 'PriceSpecification',
                minPrice: s.precio.min,
                maxPrice: s.precio.max,
                priceCurrency: s.precio.moneda,
              },
            },
          }
        : {}),
    });
  }

  // FAQPage: exactamente las preguntas visibles de la página.
  const preguntas = p.secciones.flatMap((x) => (x.tipo === 'preguntas' ? x.preguntas : []));
  if (preguntas.length) {
    nodos.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${url}#preguntas-frecuentes`,
      inLanguage: ui.lang,
      isPartOf: { '@id': `${url}#pagina` },
      mainEntity: preguntas.map((q) => ({ '@type': 'Question', name: q.p, acceptedAnswer: { '@type': 'Answer', text: q.r } })),
    });
  }
  return nodos;
}

/** JSON seguro dentro de un <script>. */
export const serializar = (nodo: Nodo) => JSON.stringify(nodo).replace(/</g, '\\u003c');
