import type { Pagina } from '../tipos';

// Cursos de IA de Vion. La lista de cursos (títulos, para quién, lecciones) está en `src/content/cursos.ts`; acá va
// el texto de la página. Todavía no hay ningún curso publicado y la página lo dice así: sin fechas ni promesas.
export const cursos: Pagina = {
  id: 'cursos',
  nav: 'Cursos',
  titulo: 'Cursos de IA gratis: agentes, video y AutoCAD | Vion',
  descripcion:
    'Cursos de inteligencia artificial gratis de Vion, con videos y material: agentes, motion, 3D y AutoCAD para ingeniería. Hoy, en producción.',
  palabrasClave: ['cursos de inteligencia artificial para arquitectura e ingeniería Costa Rica'],
  indexar: true,
  etiqueta: 'Cursos · gratis · en producción',
  h1: 'Cursos de IA gratis, con lo que Vion ya hizo',
  acento: 'gratis',
  bajada:
    'Vamos a publicar cursos de inteligencia artificial gratis, con videos y material, hechos en Costa Rica. Solo enseñamos lo que ya construimos y usamos todos los días. Son diez cursos en cuatro rutas, y hoy están todos en producción.',
  acciones: [
    { texto: 'Avisarme por WhatsApp', destino: { whatsapp: 'Hola, Vion. Avísenme cuando publiquen el primer curso.' } },
    { texto: 'Ver los cursos', destino: { pagina: 'cursos', ancla: 'cursos' } },
  ],
  secciones: [
    {
      tipo: 'texto',
      id: 'cursos',
      etiqueta: 'Diez cursos, cuatro rutas',
      titulo: 'Los cursos que estamos grabando',
      acento: 'grabando',
      intro:
        'Ninguno está publicado todavía. Estos son los diez, agrupados por ruta y empezando por Claude básico, con sus lecciones previstas y cuántos de sus videos ya están listos. Cuando uno salga, va a tener su propia página con cada lección.',
      parrafos: [],
    },
    {
      tipo: 'texto',
      id: 'rutas',
      etiqueta: 'Cuatro rutas',
      titulo: 'Cuatro rutas, un mismo criterio',
      acento: 'rutas',
      intro: 'Los cursos se ordenan en cuatro rutas. Cada una sale de algo que Vion ya hace con clientes o en su propio sistema.',
      parrafos: [],
    },
    {
      tipo: 'texto',
      id: 'como-son',
      etiqueta: 'Cómo van a ser',
      titulo: 'Gratis de verdad, y con lo que cuesta dicho',
      acento: 'Gratis',
      parrafos: [
        'Cada lección es una presentación de láminas que se recorre a su ritmo: el texto explica el paso, los comandos y los pedidos a Claude se copian con un botón, y cada lámina trae su apoyo visual: una captura, un diagrama, un video corto de motion o de la pantalla, o Chispa, nuestro personaje, explicando el punto difícil. Todo explicado, desde qué descargar y cómo conectarlo hasta los repos y skills que usamos.',
        'Los videos y el material de cada curso van a ser gratis. Lo que sí puede costar son algunas herramientas que se usan: Claude Code pide un plan pago de Anthropic y AutoCAD su licencia de Autodesk. Cada curso lo dice antes de la primera lección, para que nadie se entere a la mitad.',
        'Enseñamos el oficio y no solo la herramienta: cada curso termina en un resultado que se puede usar, como una animación con su marca, un sistema de agentes con cola de aprobación o una tabla de cantidades sacada de un plano. Los cursos de IA para arquitectura e ingeniería siempre llevan la revisión de una persona antes de que algo llegue a una obra o a un cliente.',
        'Mientras tanto, en [el blog](@blog) publicamos artículos sobre lo mismo: ISO 19650, AutoCAD y agentes de IA con aprobación humana.',
      ],
    },
    {
      tipo: 'preguntas',
      id: 'preguntas',
      titulo: 'Preguntas sobre los cursos',
      acento: 'cursos',
      preguntas: [
        {
          p: '¿Los cursos de Vion son gratis?',
          r: 'Sí. Los videos y el material de cada curso van a ser gratis. Algunas herramientas que se usan en los cursos sí cobran, como Claude Code o AutoCAD, y cada curso lo dice antes de empezar.',
        },
        {
          p: '¿Cuándo sale el primer curso?',
          r: 'Todavía no tenemos fecha. Los diez están en producción. Si nos escribe por WhatsApp o por el formulario, le avisamos cuando salga el que le interesa.',
        },
        {
          p: '¿Qué se necesita saber para tomarlos?',
          r: 'Depende del curso: cada uno dice para quién es. Ninguno pide saber programar; el de AutoCAD pide saber usar AutoCAD.',
        },
        {
          p: '¿Quién da los cursos?',
          r: 'Vion, el estudio de IA de Costa Rica. Cada curso enseña algo que ya hicimos: el sistema de agentes con el que trabajamos, los videos que producimos o la automatización de AutoCAD que ofrecemos a firmas de ingeniería y arquitectura.',
        },
      ],
    },
  ],
  llamado: {
    titulo: '¿Qué curso quiere ver primero?',
    acento: 'primero',
    texto: 'Escríbanos cuál le sirve más. Nos ayuda a ordenar la producción y le avisamos cuando salga.',
    mensajeWhatsapp: 'Hola, Vion. El curso que más me interesa es:',
  },
  og: { titulo: 'Cursos de IA gratis', acento: 'gratis' },
  esquema: { tipo: 'CollectionPage' },
};
