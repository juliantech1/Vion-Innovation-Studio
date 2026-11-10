import { P } from '../pendientes';
import { sitio } from '../sitio';
import type { Pagina } from '../tipos';

// BORRADOR para revisión legal (Ley 8968 de Costa Rica y su reglamento). No se indexa ni va al sitemap hasta que lo
// revise una abogada: al aprobarlo, completar los casilleros y poner `indexar: true` (PENDIENTES-JULIAN.md).
const correo = `[${sitio.correo}](mailto:${sitio.correo})`;

export const privacidad: Pagina = {
  id: 'privacidad',
  nav: 'Aviso de privacidad',
  titulo: 'Aviso de privacidad y datos personales | Vion',
  descripcion:
    'Cómo trata Vion los datos personales que recibe por su sitio web, según la Ley 8968 de protección de datos personales de Costa Rica.',
  palabrasClave: [],
  indexar: false,
  etiqueta: 'Borrador · Ley 8968',
  h1: 'Aviso de privacidad',
  acento: 'privacidad',
  bajada:
    'Borrador pendiente de revisión legal. Los datos marcados entre llaves dobles los completa Vion antes de publicar. Este aviso explica qué datos personales recibe Vion por el sitio vion-studio.com, para qué los usa y cómo puede usted ejercer sus derechos, según la Ley 8968 de Protección de la Persona frente al Tratamiento de sus Datos Personales y su reglamento.',
  secciones: [
    {
      tipo: 'texto',
      id: 'responsable',
      titulo: 'Quién es el responsable',
      parrafos: [
        `El responsable de la base de datos es ${P.razonSocial}, con domicilio en ${P.domicilio}, Costa Rica. Correo para todo lo relacionado con sus datos: ${correo}.`,
      ],
    },
    {
      tipo: 'texto',
      id: 'datos',
      titulo: 'Qué datos recibimos',
      parrafos: ['Solo los que usted escribe en el [formulario de contacto](@contacto#formulario):'],
      lista: [
        'nombre;',
        'correo o número de WhatsApp;',
        'empresa (opcional);',
        'el servicio que le interesa y su mensaje (opcional);',
        'si llegó desde un anuncio o un enlace marcado, el origen de ese enlace (parámetros UTM).',
      ],
      cierre: [
        'El nombre y el contacto son obligatorios para poder responderle; sin ellos no podemos atender su consulta. Le pedimos no incluir datos sensibles en el mensaje.',
      ],
    },
    {
      tipo: 'texto',
      id: 'uso',
      titulo: 'Para qué los usamos',
      parrafos: [
        'Para responder su consulta, preparar una propuesta si usted la pide y dar seguimiento a esa conversación. No los vendemos, no los cedemos a terceros para publicidad y no le enviamos mensajes automáticos.',
      ],
    },
    {
      tipo: 'texto',
      id: 'guardado',
      titulo: 'Dónde se guardan y quién los ve',
      parrafos: [
        `El sitio está alojado en Vercel, que procesa el envío del formulario en servidores fuera de Costa Rica: ${P.regionVercel}. El mensaje se guarda en el sistema interno de Vion, en Costa Rica, y solo lo ven las personas de Vion que atienden su consulta. Los guardamos durante ${P.conservacion} o hasta que usted pida borrarlos.`,
      ],
    },
    {
      tipo: 'texto',
      id: 'derechos',
      titulo: 'Sus derechos',
      parrafos: ['Usted puede pedir en cualquier momento:'],
      lista: [
        'acceso a los datos que tenemos sobre usted;',
        'que los corrijamos o actualicemos;',
        'que los eliminemos;',
        'retirar su consentimiento.',
      ],
      cierre: [
        `Escriba a ${correo} con su nombre y lo que necesita. Le respondemos en ${P.plazoLegal}. Si considera que no atendimos su solicitud, puede acudir a la Agencia de Protección de Datos de los Habitantes (PRODHAB).`,
      ],
    },
    {
      tipo: 'texto',
      id: 'cookies',
      titulo: 'Cookies y analítica',
      parrafos: [
        'Este sitio no usa cookies propias ni herramientas de analítica o publicidad. Si eso cambia, lo vamos a decir aquí antes.',
      ],
    },
    {
      tipo: 'texto',
      id: 'cambios',
      titulo: 'Cambios a este aviso',
      parrafos: [
        `Si cambia la forma en que tratamos sus datos, actualizamos este aviso y su fecha. Última actualización: ${P.fechaAviso}.`,
      ],
    },
  ],
  og: { titulo: 'Aviso de privacidad', acento: 'privacidad' },
  esquema: { tipo: 'WebPage' },
};
