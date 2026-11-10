// Los datos fijos de Vion (docs/marca/DESIGN.md de la aldea). Reglas de todo el contenido:
// - español de Costa Rica con trato de usted; inglés cuidado para el mercado de EE.UU.;
// - nada inventado: sin clientes, logos, reseñas, cifras ni casos que no existan;
// - lo que falta va como {{casillero}} (se ve marcado en la página) y está en PENDIENTES-JULIAN.md.

export const sitio = {
  nombre: 'Vion',
  /** Como lo buscan de verdad (Search Console: «vion studio», «vion-studio») y como se llamaba en el sitio anterior. */
  nombresAlternos: ['Vion Studio', 'Vion Innovation Studio'],
  url: 'https://vion-studio.com',
  correo: 'consultorias@vion-studio.com',
  whatsapp: '+506 8688 3553',
  whatsappE164: '+50686883553',
  whatsappEnlace: 'https://wa.me/50686883553',
  instagram: 'https://www.instagram.com/vion_int/',
  instagramUsuario: '@vion_int',
  pais: 'CR',
  logo: { src: '/marca/vion-logo.png', ancho: 640, alto: 640 },
  simbolo: { src: '/marca/simbolo-claro.png', ancho: 75, alto: 72 },
  colores: { negro: '#0b0b0c', azul: '#c9dfee', rojo: '#e8341c', naranja: '#f0612a', claro: '#fafafa' },
} as const;

/**
 * ¿Se publican los rangos de precio? Salen del catálogo real de Orión (son orientativos: se confirman después del
 * diagnóstico). Feme recomienda publicarlos. Con `false` desaparecen de las páginas, de las preguntas frecuentes y de
 * los datos estructurados. Lo decide Julian (PENDIENTES-JULIAN.md).
 */
export const publicarRangos: boolean = true;

/** El enlace de WhatsApp con el mensaje ya escrito. */
export const enlaceWhatsapp = (mensaje?: string) =>
  mensaje ? `${sitio.whatsappEnlace}?text=${encodeURIComponent(mensaje)}` : sitio.whatsappEnlace;

/**
 * Lo que entra en el formulario: el valor que viaja a Ventas de Ultron es siempre este texto en español (lista
 * cerrada, la misma de `src/lib/contacto.ts`). El orden coincide con `formulario.opciones` de cada idioma.
 */
export const opcionesServicio = [
  'Diagnóstico de automatización',
  'Automatización de AutoCAD',
  'Consultoría BIM e ISO 19650',
  'App o software a la medida',
  'Sistema o agente de IA',
  'Otro',
] as const;
