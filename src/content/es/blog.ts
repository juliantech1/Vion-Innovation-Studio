import type { Pagina } from '../tipos';

// El índice del blog. Los artículos están en `src/content/blog/`.
export const blog: Pagina = {
  id: 'blog',
  nav: 'Blog',
  titulo: 'Blog de Vion: IA, AutoCAD, BIM e ISO 19650',
  descripcion:
    'Artículos de Vion sobre IA aplicada a ingeniería y arquitectura: ISO 19650, automatización de AutoCAD y agentes de IA con aprobación humana.',
  palabrasClave: ['ISO 19650 Costa Rica'],
  indexar: true,
  etiqueta: 'Blog · artículos',
  h1: 'Lo que aprendemos haciendo, por escrito',
  acento: 'por escrito',
  bajada:
    'Artículos sobre lo que hacemos todos los días en Costa Rica: estándares BIM e ISO 19650, automatización de AutoCAD y sistemas de agentes de IA. Sin cifras inventadas y con las fuentes al pie.',
  acciones: [{ texto: 'Pedir diagnóstico', destino: { pagina: 'contacto' } }],
  secciones: [
    {
      tipo: 'texto',
      id: 'articulos',
      etiqueta: 'Registro de artículos',
      titulo: 'Artículos',
      acento: 'Artículos',
      parrafos: [],
    },
  ],
  llamado: {
    titulo: '¿Sobre qué quiere que escribamos?',
    acento: 'escribamos',
    texto: 'Si tiene una pregunta sobre IA, AutoCAD o BIM que le sirva a más gente, escríbanos. Puede ser el próximo artículo.',
    mensajeWhatsapp: 'Hola, Vion. Les propongo un tema para el blog:',
  },
  og: { titulo: 'Blog de Vion', acento: 'Blog' },
  esquema: { tipo: 'CollectionPage' },
};
