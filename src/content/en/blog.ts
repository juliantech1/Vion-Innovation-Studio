import type { Pagina } from '../tipos';

export const blog: Pagina = {
  id: 'blog',
  nav: 'Blog',
  titulo: 'Vion blog: AI, AutoCAD, BIM and ISO 19650',
  descripcion:
    'Articles from Vion on AI for engineering and architecture: ISO 19650, AutoCAD automation and AI agent systems with human approval.',
  palabrasClave: ['ISO 19650'],
  indexar: true,
  etiqueta: 'Blog · articles',
  h1: 'What we learn by doing, written down',
  acento: 'written down',
  bajada:
    'Articles about the work we do every day in Costa Rica: BIM standards and ISO 19650, AutoCAD automation and AI agent systems. No made-up numbers, and sources listed at the end.',
  acciones: [{ texto: 'Request an assessment', destino: { pagina: 'contacto' } }],
  secciones: [
    {
      tipo: 'texto',
      id: 'articulos',
      etiqueta: 'Article register',
      titulo: 'Articles',
      acento: 'Articles',
      parrafos: [],
    },
  ],
  llamado: {
    titulo: 'What should we write about next?',
    acento: 'next',
    texto: 'If you have a question about AI, AutoCAD or BIM that would help other people too, send it our way. It could be the next article.',
    mensajeWhatsapp: 'Hi Vion. Here is a topic for the blog:',
  },
  og: { titulo: 'The Vion blog', acento: 'blog' },
  esquema: { tipo: 'CollectionPage' },
};
