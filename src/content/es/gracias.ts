import type { Pagina } from '../tipos';

/** Adonde vuelve el formulario cuando se envía sin JavaScript (el manejador responde 303 hacia acá). */
export const gracias: Pagina = {
  id: 'gracias',
  nav: 'Mensaje recibido',
  titulo: 'Mensaje recibido: gracias por escribir | Vion',
  descripcion:
    'Gracias por escribirle a Vion. Recibimos su mensaje y le vamos a responder personalmente por el medio que nos indicó.',
  palabrasClave: [],
  indexar: false,
  etiqueta: 'Contacto · recibido',
  h1: 'Gracias, lo recibimos',
  acento: 'recibimos',
  bajada: 'Una persona de Vion lo va a leer y le va a responder por el medio que nos indicó.',
  acciones: [
    { texto: 'Volver al inicio', destino: { pagina: 'inicio' } },
    { texto: 'Ver los proyectos de Vion', destino: { pagina: 'casos' } },
  ],
  secciones: [],
  og: { titulo: 'Gracias, lo recibimos', acento: 'recibimos' },
  esquema: { tipo: 'WebPage' },
};
