// Los tipos de la capa de contenido. Todo el texto del sitio vive en `src/content` (español e inglés) y las páginas
// solo lo dibujan: una sola fuente por página para el título, la descripción, el H1, las secciones, las preguntas
// frecuentes, los llamados y los datos estructurados.

export const IDIOMAS = ['es', 'en'] as const;
export type Idioma = (typeof IDIOMAS)[number];

/** Las 7 páginas del plan de Feme, Cursos y Blog (pedido de Julian del 2026-11-10), el aviso de privacidad y gracias. */
export const PAGINAS = ['inicio', 'consultoria', 'autocad', 'apps', 'cursos', 'casos', 'nosotros', 'blog', 'contacto', 'privacidad', 'gracias'] as const;
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

/** Los textos de las piezas del diseño (ficha de la portada, figuras, cola de ejemplo, cajetín, colofón, transición). */
export interface Piezas {
  cabecera: { menu: string; cerrar: string; idioma: string; cta: string; seccion: string; descriptores: Partial<Record<IdPagina, string>> };
  portada: {
    fichaTitulo: string; primerPaso: string; plazo: string; rango: string; recibe: string; recibeValor: string;
    figura: { nombre: string; pie: string; vistas: [string, string, string]; ambientes: string; escala: string };
  };
  fig: string;
  nota: string;
  fig1: { paso: string; semana: string; mesAMes: string; plazo: string; rango: string; decide: [string, string]; opcional: string; alMes: string; pie: string; notaRangos: string };
  ultron: {
    ficha: { termino: string; valor: string; detalle?: string }[];
    cola: {
      titulo: string; demo: string; esperan: string; salieron: string; volvieron: string; lista: string; aprobar: string; rechazar: string;
      registro: string; ahora: string; inicial: string; vacia: string; reiniciar: string; deNuevo: [string, string];
      aprobado: [string, string]; rechazado: [string, string]; preparado: [string, string];
      /** Trabajos de ejemplo: [qué, área, para quién y qué]. No son clientes ni trabajos reales. */
      trabajos: [string, string, string][];
    };
    pie: string; notaDemo: string;
  };
  trabajo: { ficha: { termino: string; valor: string }[] };
  cierre: { rotulo: string; panel: string; vias: string };
  pie: {
    cajetin: string; proyecto: string; proyectoValor: string; lamina: string; indice: string; revision: string; dibujo: string; dibujoValor: string;
    razon: string; colofon: string; colofonTexto: string; colofonEspera: string; colofonMedido: string; reticula: string; reticulaDato: string;
  };
  transicion: { lamina: string };
  autocad: {
    fig1: string; fig1Comando: string; fig2: string; fig3: string; fig3Archivo: string; fig3Rotulo: string; fig3Comando: string; fig3Codigo: string; fig3Comentario: string;
    revisiones: string; rev: string; queSeMide: string; resultado: string; pendiente: string;
    cotiza: { plazo: string; rango: string; recibe: string; para: string };
    esquema: { archivos: string; plugin: string; hoja: string; sistema: string; alt: string };
  };
  noEncontrada: { indice: string };
  /** Consultoría IA + AutoCAD/BIM (components/paginas/Consultoria.tsx). */
  consultoria: {
    ficha: { titulo: string; plazo: string; rango: string; recibe: string };
    fig1: string; fig1General: string; fig1Detalle: string; fig1Semana: string; fig1Dias: string[];
    /** Las tres partes del diagnóstico, en orden (una por entregable del catálogo). */
    fig1Tramos: [string, string, string];
    revisa: { titulo: string; que: string; donde: string; sale: string; filas: [string, string][] };
    fig2: string; fig2Antes: string; fig2Despues: string; fig2NombreAntes: string;
    /** Los campos del nombre: [código de ejemplo, qué es]. */
    fig2Campos: [string, string][];
    fig2Rutina: string; fig2Lista: string; notaGeneral: string;
    fig3: string; fig3Entra: string; fig3Sale: string; fig3Sistema: string; fig3Persona: string;
  };
  /** Apps a la medida (components/paginas/Apps.tsx). */
  apps: {
    ficha: { titulo: string; para: string; plazo: string; rango: string; recibe: string };
    fig1: string; fig1Rotulos: { panel: string; datos: string; asistente: string; aprobar: string; lamina: string; escritorio: string; celular: string };
    fig2: string;
    fig3: string; fig3Rotulos: { pedido: string; agente: string; perimetro: string; registro: string; decide: string; sale: string; vuelve: string };
    fig4: string; fig4Rotulos: { etapa: string; semana: string; confirma: string; despues: string; opcional: string };
    rangos: { titulo: string; servicio: string; plazo: string; entregables: string; rango: string; estaPagina: string };
  };
  // Casos, Nosotros, Contacto, Privacidad y Gracias (rediseño, pag2): un bloque por página.
  casos: PiezasCasos;
  nosotros: PiezasNosotros;
  contacto: PiezasContacto;
  privacidad: { fichaTitulo: string; indice: string; estado: string; estadoValor: string; ley: string; leyValor: string };
  gracias: { fichaTitulo: string; recibido: string; recibidoValor: string };
  cursos: PiezasCursos;
  blog: PiezasBlog;
}

/** Los rótulos de Cursos (índice, plantilla de un curso y la sección de la portada). */
export interface PiezasCursos {
  fichaTitulo: string;
  ficha: { termino: string; valor: string }[];
  ruta: string;
  estado: Record<EstadoCurso, string>;
  paraQuien: string;
  seLleva: string;
  herramientas: string;
  lecciones: string;
  leccionesPrevistas: string;
  leccion: string;
  minutos: string;
  avisar: string;
  avisarWhatsapp: string;
  avisarFormulario: string;
  /** El mensaje que va escrito al pedir el aviso. Lleva {curso}. */
  mensajeAviso: string;
  lleva: string;
  verCurso: string;
  fig1: string;
  fig1Alt: string;
  fig1Rotulos: { ruta: string; curso: string; estado: string; hoy: string };
  estadoRotulo: string;
  temarioEnPreparacion: string;
  /** Los videos que ya están: «{n} de {total} videos listos». */
  videosListos: string;
  /** La página de un curso. */
  plantilla: {
    indice: string; volver: string; borrador: string; duracion: string; empezar: string; requisitos: string; costo: string;
    laminas: string; videos: string; contenido: string; objetivo: string; resultado: string; puesta: string; puestaIr: string; costos: string;
    costosFecha: string; costosCols: { pieza: string; costo: string; fuente: string };
    recursos: string; recursosIntro: string; recursosCols: { nombre: string; que: string; licencia: string; revision: string; lecciones: string };
    noRecomendamos: string; kit: string; explica: string; accion: string; soloCastellano: string; verCastellano: string;
  };
  /** La página de una lección: la presentación de láminas. */
  leccionUi: {
    anterior: string; siguiente: string; de: string; lamina: string; indice: string; copiar: string; copiado: string;
    verTodas: string; verDeAUna: string; proxima: string; fin: string; volverCurso: string;
    dice: string; vozEnOff: string; transcripcion: string; reproducir: string;
    bloque: Record<Bloque['tipo'], string>;
  };
  portada: { ver: string; blog: string };
}

export interface PiezasBlog {
  fichaTitulo: string;
  ficha: { termino: string; valor: string }[];
  articulos: string;
  publicado: string;
  actualizado: string;
  lectura: string;
  autor: string;
  fuentes: string;
  fuentesNota: string;
  leer: string;
  indice: string;
  volver: string;
  rss: string;
  otros: string;
  fig1: string;
}

// ───── Cursos ─────

/** «produccion»: sin página pública (se ve en /cursos con su estado). «publicado»: con sus páginas, en el sitemap. */
export type EstadoCurso = 'produccion' | 'publicado';

/** Una lección: el título siempre; el video y el material, cuando existan. */
export interface Leccion {
  titulo: string;
  /** Minutos del video, cuando el video exista (nunca estimados a la vista). */
  minutos?: number;
  /** El video publicado: un archivo propio (MP4 en /public o un CDN) con su póster, o un video de YouTube por su id. */
  video?: { mp4?: string; youtube?: string; poster?: string; subidoEl?: string; /** Subtítulos WebVTT (hacen falta para publicar: accesibilidad). */ vtt?: string };
  material?: { texto: string; href: string }[];
}

// ───── El contenido de un curso: lecciones como presentaciones de láminas (formato de Julian del 2026-11-10) ─────
//
// «Los cursos son como presentaciones explicativas, con texto, de cómo hacer las cosas, y con los videos dentro como
// aporte visual.» Cada lección es una secuencia de láminas; cada lámina tiene su título, su texto (Markdown mínimo, ver
// `CuerpoArticulo`), sus bloques copiables y un apoyo visual. Los videos y las imágenes NO van acá: salen de
// `src/content/cursos/medios.json` (curso → lámina → archivo o URL), para poder sumarlos sin tocar el texto.

/** El tipo de apoyo visual de una lámina, como lo marca el storyboard. */
export type TipoApoyo = 'imagen' | 'diagrama' | 'captura' | 'motion' | 'grabacion' | 'chispa';

export interface Apoyo {
  tipo: TipoApoyo;
  /** Chispa encima de otro video (en capa) o en un video que no es de Chispa (motion + Chispa en capa). */
  conChispa?: boolean;
  /** Duración prevista del video, en segundos (la del storyboard; la real sale del archivo). */
  segundos?: number;
  /** Qué se ve: la descripción que deja entender la lámina sin el video o la imagen (también sirve de texto alternativo). */
  seVe?: string;
  /** Lo que dice Chispa, palabra por palabra: la transcripción (y la base de los subtítulos). */
  dice?: string;
  /** Si la voz es de Chispa en off (sobre un video donde no aparece). */
  vozEnOff?: boolean;
}

/** Un bloque copiable: un comando, un pedido a Claude, un archivo o un trozo de código. */
export interface Bloque {
  tipo: 'comando' | 'pedido' | 'archivo' | 'codigo';
  /** Lo que dice arriba del bloque (por ejemplo «Windows, en PowerShell» o «CLAUDE.md»). */
  etiqueta?: string;
  /** Lenguaje, para el rótulo (powershell, bash, markdown, json, python…). */
  lenguaje?: string;
  texto: string;
}

export interface Lamina {
  /** Número de la lámina, como en el storyboard: «0.3», «4.11». Da el ancla (#lamina-0-3) y la clave en medios.json. */
  n: string;
  titulo: string;
  /** El texto que se lee, completo, en Markdown mínimo (párrafos, listas, tablas, **negrita**, `código`, enlaces, {{…}}). */
  cuerpo: string;
  apoyo: Apoyo;
  bloques?: Bloque[];
}

export interface LeccionCurso {
  n: number;
  /** La dirección de la lección debajo de la del curso: /cursos/<curso>/<slug>. */
  slug: string;
  titulo: string;
  /** Para qué sirve la lección (una o dos frases). Es también la base de su descripción. */
  objetivo: string;
  /** Lo que queda al final (lo que se ve terminado). */
  resultado?: string;
  laminas: Lamina[];
}

/** Un repo, una skill o una herramienta recomendada, con lo que hace falta saber antes de instalarla. */
export interface Recurso {
  nombre: string;
  url?: string;
  /** Qué hace y para qué sirve en el curso. */
  que: string;
  licencia: string;
  /** Si lo revisamos y cómo (o que no lo revisamos). */
  revision: string;
  /** En qué lecciones se usa («2, 7»). */
  lecciones?: string;
}

export interface ContenidoCurso {
  /**
   * De qué se trata, para un principiante (Markdown mínimo): qué es el tema, para qué le sirve, qué va a poder hacer al
   * terminar y qué necesita. Va arriba de todo, después de la portada.
   */
  explica?: string;
  /** La ficha del curso. */
  ficha: {
    requisitos: string;
    /** «8 lecciones, 60 láminas con 44 videos cortos, unos 45 min de lectura, más la práctica». */
    duracion: string;
    /** Lo que cuesta de verdad, en una frase (la tabla va en `costos`). */
    costo: string;
  };
  /** Lo que cuesta, pieza por pieza, con su fuente y la fecha en que se comprobó. */
  costos: { pieza: string; costo: string; fuente?: string }[];
  costosFecha: string;
  /** La puesta a punto: en qué lección está y un resumen (Markdown mínimo: qué se instala, en qué sistema, cómo se comprueba). */
  puesta: { leccion: number; texto: string };
  recursos: Recurso[];
  /** Lo que no recomendamos y por qué (Markdown mínimo). */
  noRecomendamos?: string;
  /** El kit descargable: qué trae. Los archivos se publican con el curso. */
  kit: { descripcion: string; archivos: { nombre: string; que: string }[] };
  /** La acción del final: qué hacer después del curso (y, si lo prefiere, que lo haga Vion: `Curso.lleva`). */
  accion: { titulo: string; texto: string };
  lecciones: LeccionCurso[];
}

/** Lo que se escribe a mano de un curso (src/content/cursos/<id>/curso.ts): la ficha y su contenido sin las lecciones. */
type FichaIdioma = Pick<CursoIdioma, 'corto' | 'titulo' | 'subtitulo' | 'tituloSeo' | 'descripcion' | 'paraQuien' | 'seLleva' | 'herramientas'>;
export interface CursoTexto {
  es: FichaIdioma & Omit<ContenidoCurso, 'lecciones'>;
  /** En inglés, por ahora solo la ficha y los títulos de las lecciones (en el orden de lecciones.ts). */
  en: FichaIdioma & { lecciones: string[] };
}

/** Lo que cambia de un curso entre idiomas. */
export interface CursoIdioma {
  slug: string;
  titulo: string;
  /** El nombre corto, para los rótulos de las figuras (dos palabras como mucho). */
  corto: string;
  /** El término en inglés (o en castellano en la versión inglesa) para que se encuentre en búsquedas. */
  subtitulo?: string;
  /** <title> de su página (30 a 60) y descripción (70 a 155): solo hacen falta al publicarlo. */
  tituloSeo: string;
  descripcion: string;
  paraQuien: string;
  seLleva: string;
  herramientas: string;
  lecciones: Leccion[];
  /**
   * El curso entero (ficha, puesta a punto, repos, lecciones con sus láminas, kit). En castellano está cargado desde los
   * storyboards; en inglés queda previsto y sin traducir: mientras falte, las lecciones solo existen en castellano.
   */
  contenido?: ContenidoCurso;
}

export interface Curso {
  id: string;
  /** El código del storyboard (A0, B1…): da el orden dentro de la ruta. */
  codigo: string;
  ruta: 'A' | 'B' | 'C' | 'D';
  estado: EstadoCurso;
  /** Fecha de publicación (AAAA-MM-DD), recién cuando el curso exista. */
  publicado?: string;
  /** El servicio al que lleva el curso (la acción del final). */
  lleva: IdPagina;
  es: CursoIdioma;
  en: CursoIdioma;
}

export interface RutaCursos {
  letra: 'A' | 'B' | 'C' | 'D';
  es: { nombre: string; texto: string };
  en: { nombre: string; texto: string };
}

// ───── Blog ─────

/**
 * El cuerpo de un artículo: Markdown mínimo, un bloque por párrafo (separados por una línea en blanco). `## ` y
 * `### ` son títulos, `- ` una lista, `1. ` una lista numerada, `> ` una nota, ` ``` ` un bloque de código, y
 * `| a | b |` una tabla (la primera fila es el encabezado). Dentro del texto vale el marcado de `Texto`.
 */
export type CuerpoArticulo = string;

export interface ArticuloIdioma {
  slug: string;
  /** El H1 y el <title> (30 a 60, sin «| Vion»: lo pone la plantilla si entra). */
  titulo: string;
  /** Meta descripción (70 a 155). */
  descripcion: string;
  /** La bajada bajo el H1 (puede ser más larga que la descripción). */
  bajada: string;
  /** Palabra del título en rojo. */
  acento?: string;
  /** El título corto de la imagen Open Graph. */
  og: string;
  etiquetas: string[];
  cuerpo: CuerpoArticulo;
  fuentes: { titulo: string; url: string; nota?: string }[];
}

export interface Articulo {
  id: string;
  /** AAAA-MM-DD */
  publicado: string;
  actualizado?: string;
  /** El servicio con el que se relaciona (enlace al final). */
  relacion: IdPagina;
  es: ArticuloIdioma;
  en: ArticuloIdioma;
}

/** Una figura dibujada: su leyenda y los rótulos que van dentro del dibujo (en orden). */
export interface FiguraDibujada { pie: string; alt: string; r: string[] }

export interface PiezasCasos {
  fichaTitulo: string;
  proyecto: string;
  clientes: string;
  clientesValor: string;
  captura: string;
  /** Los esquemas de cada proyecto propio, por id del proyecto. */
  figuras: Record<'ultron' | 'topspin' | 'realfood' | 'viazo', FiguraDibujada>;
  /** Cómo va a ser un caso de cliente cuando exista: la ficha vacía con su estado. */
  plantilla: { titulo: string; estado: string; filas: { termino: string; valor: string }[] };
}

export interface PiezasNosotros {
  fichaTitulo: string;
  estudio: string;
  estudioValor: string;
  persona: string;
  bio: string;
  medida: FiguraDibujada;
  husos: FiguraDibujada & { zonas: { nombre: string; desfase: number }[]; jornada: string; comun: string; hora: string };
}

export interface PiezasContacto {
  fichaTitulo: string;
  respuesta: string;
  respuestaValor: string;
  recorrido: FiguraDibujada;
}
