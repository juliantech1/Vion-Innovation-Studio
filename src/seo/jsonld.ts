// Datos estructurados (schema.org) de cada página, armados desde su contenido: solo lo que la página muestra.
// Sin reseñas, puntajes ni nada que no esté visible. `scripts/revisar-seo.mjs` revisa los tipos y sus campos.
import { descripcionLeccion, imagenOg, imagenOgArticulo, imagenOgCurso, tituloLeccion } from './metadatos';
import { ARTICULOS, CURSOS, cursoIndexable, interfazDe, leccionesDe, pagina, sitio, urlAbsoluta, urlArticulo, urlCurso, urlLeccion, type Articulo, type Curso, type IdPagina, type Idioma, type LeccionCurso } from '@/content';

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
  // Cursos: la lista de los cursos publicados (con su página). Los que están en producción NO van: una lista de
  // cursos sin página no le sirve a un buscador y el resultado enriquecido de cursos pide una página por curso.
  const publicados = id === 'cursos' ? CURSOS.filter(cursoIndexable) : [];
  if (publicados.length) {
    web.mainEntity = {
      '@type': 'ItemList',
      numberOfItems: publicados.length,
      itemListElement: publicados.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c[idioma].titulo, url: urlCurso(c[idioma].slug, idioma) })),
    };
  }
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

  // Blog: el blog y sus artículos (cada uno con su página).
  if (id === 'blog') {
    nodos.push({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${url}#blog`,
      url,
      name: p.titulo,
      description: p.descripcion,
      inLanguage: ui.lang,
      publisher: { '@id': ID_ORGANIZACION },
      mainEntityOfPage: { '@id': `${url}#pagina` },
      blogPost: ARTICULOS.map((a) => ({
        '@type': 'BlogPosting',
        '@id': `${urlArticulo(a[idioma].slug, idioma)}#articulo`,
        headline: a[idioma].titulo,
        url: urlArticulo(a[idioma].slug, idioma),
        datePublished: a.publicado,
        dateModified: a.actualizado ?? a.publicado,
        author: { '@id': ID_ORGANIZACION },
      })),
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

const migas = (url: string, idioma: Idioma, madre: IdPagina, nombre: string): Nodo => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${url}#migas`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: pagina('inicio', idioma).nav, item: urlAbsoluta('inicio', idioma) },
    { '@type': 'ListItem', position: 2, name: pagina(madre, idioma).nav, item: urlAbsoluta(madre, idioma) },
    { '@type': 'ListItem', position: 3, name: nombre, item: url },
  ],
});

/** Un artículo: WebPage + BlogPosting (autor y editor: Vion), migas y las fuentes como citas. */
export function datosArticulo(a: Articulo, idioma: Idioma): Nodo[] {
  const x = a[idioma];
  const ui = interfazDe(idioma);
  const url = urlArticulo(x.slug, idioma);
  const imagen = { '@type': 'ImageObject', url: imagenOgArticulo(a, idioma), width: 1200, height: 630 };
  return [
    organizacion(idioma),
    sitioWeb(),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#pagina`,
      url,
      name: x.titulo,
      description: x.descripcion,
      inLanguage: ui.lang,
      isPartOf: { '@id': ID_SITIO },
      breadcrumb: { '@id': `${url}#migas` },
      primaryImageOfPage: imagen,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${url}#articulo`,
      mainEntityOfPage: { '@id': `${url}#pagina` },
      headline: x.titulo,
      description: x.descripcion,
      image: imagen,
      inLanguage: ui.lang,
      datePublished: a.publicado,
      dateModified: a.actualizado ?? a.publicado,
      author: { '@id': ID_ORGANIZACION },
      publisher: { '@id': ID_ORGANIZACION },
      isPartOf: { '@type': 'Blog', '@id': `${urlAbsoluta('blog', idioma)}#blog` },
      keywords: x.etiquetas.join(', '),
      wordCount: x.cuerpo.split(/\s+/).filter(Boolean).length,
      citation: x.fuentes.map((f) => f.url),
    },
    migas(url, idioma, 'blog', x.titulo),
  ];
}

/**
 * Un curso con página: WebPage, migas y, si está publicado, `Course` (gratis, en línea, de Vion) con sus lecciones.
 * Un curso en producción que se construye para revisarlo no lleva `Course`: todavía no existe para nadie.
 */
export function datosCurso(c: Curso, idioma: Idioma): Nodo[] {
  const x = c[idioma];
  const ui = interfazDe(idioma);
  const url = urlCurso(x.slug, idioma);
  const nodos: Nodo[] = [
    organizacion(idioma),
    sitioWeb(),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#pagina`,
      url,
      name: x.tituloSeo,
      description: x.descripcion,
      inLanguage: ui.lang,
      isPartOf: { '@id': ID_SITIO },
      breadcrumb: { '@id': `${url}#migas` },
      primaryImageOfPage: { '@type': 'ImageObject', url: imagenOgCurso(c, idioma), width: 1200, height: 630 },
    },
    migas(url, idioma, 'cursos', x.titulo),
  ];
  if (cursoIndexable(c)) {
    const lecciones = leccionesDe(c, idioma);
    nodos.push({
      '@context': 'https://schema.org',
      '@type': 'Course',
      '@id': `${url}#curso`,
      name: x.titulo,
      description: x.descripcion,
      url,
      inLanguage: lecciones.length ? ui.lang : interfazDe('es').lang,
      provider: { '@id': ID_ORGANIZACION },
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', category: 'Free', price: 0, priceCurrency: 'USD', url },
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'Online' },
      ...(c.publicado ? { datePublished: c.publicado } : {}),
      syllabusSections: (lecciones.length ? lecciones : x.lecciones).map((l) => ({ '@type': 'Syllabus', name: l.titulo, ...('objetivo' in l ? { description: l.objetivo } : {}) })),
    });
  }
  return nodos;
}

/** Una lección: WebPage (parte del curso) y migas de cuatro niveles: Inicio, Cursos, el curso y la lección. */
export function datosLeccion(c: Curso, l: LeccionCurso, idioma: Idioma): Nodo[] {
  const x = c[idioma];
  const ui = interfazDe(idioma);
  const url = urlLeccion(x.slug, l.slug, idioma);
  const curso = urlCurso(x.slug, idioma);
  return [
    organizacion(idioma),
    sitioWeb(),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#pagina`,
      url,
      name: tituloLeccion(c, l, idioma),
      description: descripcionLeccion(l),
      inLanguage: ui.lang,
      isPartOf: cursoIndexable(c) ? { '@id': `${curso}#curso` } : { '@id': ID_SITIO },
      breadcrumb: { '@id': `${url}#migas` },
      primaryImageOfPage: { '@type': 'ImageObject', url: imagenOgCurso(c, idioma), width: 1200, height: 630 },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${url}#migas`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: pagina('inicio', idioma).nav, item: urlAbsoluta('inicio', idioma) },
        { '@type': 'ListItem', position: 2, name: pagina('cursos', idioma).nav, item: urlAbsoluta('cursos', idioma) },
        { '@type': 'ListItem', position: 3, name: x.titulo, item: curso },
        { '@type': 'ListItem', position: 4, name: l.titulo, item: url },
      ],
    },
  ];
}

/** JSON seguro dentro de un <script>. */
export const serializar = (nodo: Nodo) => JSON.stringify(nodo).replace(/</g, '\\u003c');
