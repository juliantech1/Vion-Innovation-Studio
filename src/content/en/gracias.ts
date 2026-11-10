import type { Pagina } from '../tipos';

/** Where the form returns when it is submitted without JavaScript (the handler answers 303 to this page). */
export const gracias: Pagina = {
  id: 'gracias',
  nav: 'Message received',
  titulo: 'Message received: thank you for writing | Vion',
  descripcion:
    'Thank you for writing to Vion. We received your message and a person will reply through the channel you gave us.',
  palabrasClave: [],
  indexar: false,
  etiqueta: 'Contact · received',
  h1: 'Thank you, we received it',
  acento: 'received',
  bajada: 'A person at Vion will read it and reply through the channel you gave us.',
  acciones: [
    { texto: 'Back to the home page', destino: { pagina: 'inicio' } },
    { texto: 'See Vion’s projects', destino: { pagina: 'casos' } },
  ],
  secciones: [],
  og: { titulo: 'Thank you, we received it', acento: 'received' },
  esquema: { tipo: 'WebPage' },
};
