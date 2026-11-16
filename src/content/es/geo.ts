import { rutaArticulo, rutaCurso } from '../rutas';
import { SLUGS_BLOG, SLUGS_CURSOS } from '../slugs';
import type { Pagina } from '../tipos';

// La auditoría GEO como servicio de Vion (decisión de Julian del 2026-11-16): sin precio publicado, se cotiza. El método
// es el que usa Vion de verdad (skill geo-audit de la aldea): hasta 10 páginas, seis categorías con su peso, un puntaje
// que es una rúbrica y no una medición, y nada prometido sobre lo que haga una IA. Precio y plazo: se cotizan.
const descripcion =
  'Auditoría GEO de Vion: revisamos si ChatGPT, Perplexity y los resúmenes con IA de Google pueden leer y citar su sitio, y le damos un plan. Pida cotización.';

export const geo: Pagina = {
  id: 'geo',
  nav: 'Auditoría GEO',
  titulo: 'Auditoría GEO: su sitio en las respuestas de IA | Vion',
  descripcion,
  palabrasClave: ['auditoría GEO', 'buscadores con IA', 'optimización para buscadores con IA'],
  indexar: true,
  etiqueta: 'Auditoría GEO · se cotiza',
  h1: 'Auditoría GEO: que los buscadores con IA lean y citen su sitio',
  acento: 'GEO',
  bajada:
    'Revisamos si ChatGPT, Perplexity, Claude y los resúmenes con IA de Google pueden leer, entender y citar su sitio, y le entregamos un plan priorizado para mejorarlo.',
  resumen: {
    pregunta: '¿Qué es una auditoría GEO?',
    texto: [
      'Una auditoría GEO es una revisión de un sitio web para saber si los buscadores con IA, como ChatGPT, Perplexity, Claude y los resúmenes con IA de Google, pueden leerlo, entenderlo y citarlo en sus respuestas.',
      'Vion la hace para empresas que ya tienen sitio propio y quieren aparecer cuando sus clientes le preguntan a una IA.',
      'Se revisan hasta 10 páginas clave: si los rastreadores de IA tienen permiso en robots.txt, si hay llms.txt, qué datos estructurados (schema.org) describen a la empresa, qué pasajes se pueden citar tal cual y si la marca existe fuera del sitio.',
      'Cada una de las seis categorías recibe un puntaje de 0 a 100 con una rúbrica fija.',
      'Se entrega un informe con el puntaje por categoría, los hallazgos ordenados por gravedad y un plan de acción.',
      'El precio y el plazo se confirman al cotizar, después de ver el sitio. Ningún informe puede garantizar que una IA cite un sitio.',
    ].join(' '),
    ficha: [
      { termino: 'Para quién', valor: 'Empresas con sitio web propio' },
      { termino: 'Se revisa', valor: 'Hasta 10 páginas clave, en seis categorías' },
      { termino: 'Se entrega', valor: 'Informe con puntaje por categoría; hallazgos por gravedad; plan de acción' },
      { termino: 'Precio', valor: 'Se cotiza después de ver el sitio' },
    ],
    enlaces: [
      '[Consultoría de IA, BIM y AutoCAD](@consultoria)',
      '[Apps y software a medida con IA](@apps)',
      `[Curso gratis: SEO con agentes de IA](${rutaCurso(SLUGS_CURSOS['seo-agentes'].es, 'es')})`,
      `[Artículo: un equipo de agentes de IA con aprobación humana](${rutaArticulo(SLUGS_BLOG['agentes-con-aprobacion'].es, 'es')})`,
    ],
  },
  actualizado: '2026-11-16',
  acciones: [
    { texto: 'Pedir cotización por WhatsApp', destino: { whatsapp: 'Hola, Vion. Quiero cotizar una auditoría GEO de mi sitio.' } },
    { texto: 'Ver qué se revisa', destino: { pagina: 'geo', ancla: 'que-se-revisa' } },
  ],
  secciones: [
    {
      tipo: 'ficha',
      id: 'que-se-revisa',
      etiqueta: 'Seis categorías, con su peso',
      titulo: '¿Qué revisa una auditoría GEO?',
      acento: 'GEO',
      intro: 'El puntaje final es el promedio ponderado de las seis. Es una rúbrica para ordenar el trabajo, no una medición de lo que hace cada IA.',
      filas: [
        { termino: 'Citabilidad de los textos · 25 %', valor: 'Si hay pasajes que una IA puede citar tal cual: definiciones directas, respuestas cortas a preguntas reales, datos con su fuente.' },
        { termino: 'Marca y menciones · 20 %', valor: 'Si la empresa existe como entidad fuera de su sitio: Wikipedia, Wikidata, perfiles y menciones en otros sitios.' },
        { termino: 'Contenido y autoría · 20 %', valor: 'Experiencia y oficio visibles: autores con nombre, fechas, fuentes y profundidad de los textos.' },
        { termino: 'Base técnica · 15 %', valor: 'Que el contenido esté en el HTML, que robots.txt deje entrar a los rastreadores de IA, el sitemap y el llms.txt.' },
        { termino: 'Datos estructurados · 10 %', valor: 'El schema.org de la organización, sus servicios, sus preguntas frecuentes y sus artículos.' },
        { termino: 'Plataformas · 10 %', valor: 'Lo que pide cada buscador con IA: Google con IA, ChatGPT, Perplexity y Bing.' },
      ],
    },
    {
      tipo: 'pasos',
      id: 'como-se-trabaja',
      etiqueta: 'Metodología',
      titulo: '¿Cómo se hace la auditoría?',
      acento: 'auditoría',
      pasos: [
        { titulo: 'Lectura del sitio', texto: 'Leemos hasta 10 páginas clave como las lee un buscador: solo lo público, sin acceso al servidor ni contraseñas.' },
        { titulo: 'Puntaje por categoría', texto: 'Cada categoría se puntúa de 0 a 100 con la misma rúbrica, con la evidencia de cada hallazgo a la vista.' },
        { titulo: 'Informe y plan', texto: 'Un informe con los hallazgos ordenados por gravedad y un plan de acción: qué arreglar primero y quién lo hace.' },
        { titulo: 'Arreglos, si los quiere', texto: 'Si el sitio lo construimos o podemos trabajar sobre su código, aplicamos los cambios con una vista previa que usted aprueba antes de publicar, y volvemos a medir.' },
      ],
    },
    {
      tipo: 'texto',
      id: 'lo-que-no-promete',
      etiqueta: 'Sin promesas',
      titulo: '¿Qué no promete una auditoría GEO?',
      acento: 'no promete',
      parrafos: [
        'Ningún informe puede garantizar que ChatGPT, Perplexity o Google citen un sitio, ni un puesto en sus respuestas: lo deciden sus modelos.',
        'Lo que sí hace una auditoría es quitar lo que impide que lo lean y lo entiendan, y dejar a la vista lo que falta para que lo puedan citar.',
        'Tampoco inventamos nada para subir el puntaje: ni reseñas, ni cifras, ni perfiles que no existan. Lo que falte, se lo pedimos a usted.',
      ],
    },
    {
      tipo: 'preguntas',
      id: 'preguntas',
      titulo: 'Preguntas sobre la auditoría GEO',
      acento: 'GEO',
      preguntas: [
        {
          p: '¿Qué es GEO?',
          r: 'GEO (generative engine optimization, en español optimización para buscadores con IA) es el trabajo de preparar un sitio para que los buscadores con IA, como ChatGPT, Perplexity y los resúmenes con IA de Google, lo lean, lo entiendan y lo citen en sus respuestas.',
        },
        {
          p: '¿En qué se diferencia GEO del SEO?',
          r: 'El SEO apunta a la lista de resultados de un buscador; GEO apunta a las respuestas que redacta una IA. Comparten la base técnica, pero GEO pide además pasajes que se sostengan solos, datos estructurados de la empresa y presencia de la marca fuera del sitio.',
        },
        {
          p: '¿La auditoría garantiza que una IA cite mi sitio?',
          r: 'No. Nadie puede garantizarlo: lo deciden los modelos de cada buscador. La auditoría quita lo que impide que lean el sitio y deja un plan con lo que falta para que lo puedan citar.',
        },
        {
          p: '¿Qué necesitan para hacer la auditoría?',
          r: 'Solo la dirección del sitio. La auditoría lee lo mismo que lee un buscador, así que no hace falta dar acceso al servidor ni contraseñas.',
        },
        {
          p: '¿Cuánto cuesta una auditoría GEO?',
          r: 'Se cotiza después de ver el sitio. Escríbanos por WhatsApp o por correo con la dirección del sitio y le respondemos con la propuesta.',
        },
      ],
    },
  ],
  llamado: {
    titulo: '¿Su sitio aparece cuando le preguntan a una IA?',
    acento: 'IA',
    texto: 'Mándenos la dirección del sitio y le respondemos con una cotización de la auditoría GEO.',
    mensajeWhatsapp: 'Hola, Vion. Quiero cotizar una auditoría GEO de mi sitio.',
  },
  og: { titulo: 'Auditoría GEO para su sitio', acento: 'GEO' },
  esquema: {
    tipo: 'WebPage',
    servicio: {
      nombre: 'Auditoría GEO',
      tipoDeServicio: 'Auditoría GEO (optimización para buscadores con IA)',
      descripcion,
    },
  },
};
