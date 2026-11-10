// Los tipos de la capa de contenido. Todo el texto del sitio vive en `src/content` (español e inglés) y las páginas
// solo lo dibujan: una sola fuente por página para el título, la descripción, el H1, las secciones, las preguntas
// frecuentes, los llamados y los datos estructurados.

export const IDIOMAS = ['es', 'en'] as const;
export type Idioma = (typeof IDIOMAS)[number];

/** Las 7 páginas del plan de Feme, más el aviso de privacidad y la página de gracias. */
export const PAGINAS = ['inicio', 'consultoria', 'autocad', 'apps', 'casos', 'nosotros', 'contacto', 'privacidad', 'gracias'] as const;
export type IdPagina = (typeof PAGINAS)[number];

/**
 * Texto con un marcado mínimo (lo dibuja `components/sitio/Texto.tsx`):
 *   **negrita**
 *   [texto del enlace](@casos)            enlace interno por id de página (se resuelve a la URL del idioma)
 *   [texto del enlace](@casos#ultron)     enlace interno con ancla
 *   [texto](https://…) · [texto](mailto:…)
 *   {{casillero}}                         un dato que falta: se ve marcado y está en PENDIENTES-JULIAN.md
 */
export type Texto = string;

export interface Accion {
  texto: string;
  /** Adónde lleva: una página del sitio, WhatsApp (con un mensaje ya escrito) o el correo. */
  destino: { pagina: IdPagina; ancla?: string } | { whatsapp: string } | { correo: true };
}

interface SeccionBase {
  /** id del <section> y destino de anclas (#servicios). Único en la página. */
  id: string;
  /** El H2 de la sección. */
  titulo: string;
  /** Palabra o palabras del título que el diseño puede acentuar (rojo amapola). */
  acento?: string;
  /** Etiqueta corta sobre el título (Geist Mono en el diseño). */
  etiqueta?: string;
  intro?: Texto;
}

export interface SeccionTexto extends SeccionBase {
  tipo: 'texto';
  parrafos: Texto[];
  lista?: Texto[];
  /** Párrafos que van después de la lista. */
  cierre?: Texto[];
}

export interface SeccionLista extends SeccionBase {
  tipo: 'lista';
  items: { titulo: string; texto: Texto; etiqueta?: string; enlace?: { pagina: IdPagina; ancla?: string } }[];
}

export interface Paso {
  titulo: string;
  texto: Texto;
  plazo?: string;
  rango?: string;
  entregables?: string[];
}
export interface SeccionPasos extends SeccionBase {
  tipo: 'pasos';
  pasos: Paso[];
  nota?: Texto;
}

export interface SeccionFicha extends SeccionBase {
  tipo: 'ficha';
  filas: { termino: string; valor: Texto }[];
  nota?: Texto;
}

export interface Proyecto {
  id: string;
  nombre: string;
  linea: string;
  que: Texto;
  filas: { termino: string; valor: Texto }[];
  /** La captura real que falta (un casillero) o, cuando exista, la imagen. */
  captura?: Texto;
  imagen?: { src: string; alt: string; ancho: number; alto: number };
}
export interface SeccionProyectos extends SeccionBase {
  tipo: 'proyectos';
  proyectos: Proyecto[];
}

export interface SeccionPersonas extends SeccionBase {
  tipo: 'personas';
  personas: { nombre: string; cargo: string; bio: Texto }[];
}

export interface SeccionRangos extends SeccionBase {
  tipo: 'rangos';
  filas: { nombre: string; rango: string; detalle: string }[];
  nota?: Texto;
}

export interface Pregunta {
  p: string;
  /** Texto plano (va tal cual a FAQPage): sin marcado ni casilleros. */
  r: string;
}
export interface SeccionPreguntas extends SeccionBase {
  tipo: 'preguntas';
  preguntas: Pregunta[];
}

/** Los datos de contacto directo (WhatsApp, correo, Instagram): salen de `sitio.ts`. */
export interface SeccionContacto extends SeccionBase {
  tipo: 'contacto';
  filas: { termino: string; valor: Texto }[];
}

/** El formulario de contacto: sus textos están en `formulario` de cada idioma. */
export interface SeccionFormulario extends SeccionBase {
  tipo: 'formulario';
}

export type Seccion =
  | SeccionTexto
  | SeccionLista
  | SeccionPasos
  | SeccionFicha
  | SeccionProyectos
  | SeccionPersonas
  | SeccionRangos
  | SeccionPreguntas
  | SeccionContacto
  | SeccionFormulario;

/** El cierre de cada página: WhatsApp y correo (DESIGN.md) y, en chico, la página de contacto. */
export interface Llamado {
  titulo: string;
  acento?: string;
  texto: Texto;
  /** El mensaje que ya va escrito al abrir WhatsApp. */
  mensajeWhatsapp: string;
}

/** Lo que la página declara para sus datos estructurados (los arma `src/seo/jsonld.ts`). */
export interface EsquemaPagina {
  tipo: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  /** schema.org/Service: solo en las páginas de servicio, con lo que la página muestra. */
  servicio?: {
    nombre: string;
    tipoDeServicio: string;
    descripcion: string;
    /** Rango visible en la página (solo si `publicarRangos`). */
    precio?: { min: number; max: number; moneda: 'USD'; porMes?: boolean };
    /** A qué servicio del catálogo corresponde ese rango (el nombre de la oferta). */
    oferta?: string;
  };
  /** Los proyectos de la página de casos (ItemList con sus anclas). */
  lista?: { nombre: string; ancla: string }[];
  /** Las personas de la página «Nosotros» (visibles en la página). */
  personas?: { nombre: string; cargo: string }[];
}

export interface Pagina {
  id: IdPagina;
  /** Nombre corto: menú, migas y pie. */
  nav: string;
  /** <title>: 30 a 60 caracteres, único. */
  titulo: string;
  /** Meta descripción: 70 a 155 caracteres, única. */
  descripcion: string;
  /** Las búsquedas del plan de Feme que esta página tiene que cubrir (el verificador revisa que estén en el texto). */
  palabrasClave: string[];
  /** false = noindex y fuera del sitemap (borradores, gracias). */
  indexar: boolean;
  /** Etiqueta sobre el H1. */
  etiqueta: string;
  /** El único H1 de la página. */
  h1: string;
  /** Palabra del H1 que el diseño puede acentuar. */
  acento?: string;
  bajada: Texto;
  acciones?: Accion[];
  secciones: Seccion[];
  llamado?: Llamado;
  /** La imagen Open Graph (1200 × 630): título corto y la palabra en rojo. */
  og: { titulo: string; acento?: string };
  esquema: EsquemaPagina;
}

/** Los textos de la interfaz (cabecera, pie, formulario, 404) de un idioma. */
export interface Interfaz {
  idioma: Idioma;
  /** El valor de <html lang> y de hreflang. */
  lang: 'es-CR' | 'en';
  /** og:locale */
  localeOg: 'es_CR' | 'en_US';
  saltar: string;
  inicio: string;
  navPrincipal: string;
  navPie: string;
  migas: string;
  /** El texto del selector de idioma: adónde lleva (está escrito en el otro idioma). */
  otroIdioma: { texto: string; etiqueta: string };
  pie: {
    lema: Texto;
    servicios: string;
    estudio: string;
    contacto: string;
    formulario: string;
    legal: Texto;
    privacidad: string;
  };
  llamado: { whatsapp: string; correo: string; formulario: string };
  /** Rótulos de los pasos y los rangos. `paso` lleva {n} y {total}. */
  etiquetas: { paso: string; plazo: string; rango: string; entregables: string };
  contacto: { whatsapp: string; correo: string; instagram: string };
  noEncontrada: { titulo: string; descripcion: string; etiqueta: string; h1: string; acento: string; bajada: string; lista: string };
  formulario: {
    avisoPrueba: string;
    nombre: string;
    empresa: string;
    contacto: string;
    ayudaContacto: string;
    servicio: string;
    /** Lista cerrada: el valor que viaja a Ventas es siempre el texto en español (ver `opcionesServicio`). */
    opciones: string[];
    mensaje: string;
    ejemploMensaje: string;
    obligatorio: string;
    consentimiento: Texto;
    enviar: string;
    enviando: string;
    errores: { nombre: string; contacto: string; consentimiento: string; revisar: string; envio: string };
    exito: string;
    exitoPrueba: string;
    trampa: string;
  };
}
