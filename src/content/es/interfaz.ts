import { P } from '../pendientes';
import type { Interfaz } from '../tipos';

export const interfaz: Interfaz = {
  idioma: 'es',
  lang: 'es-CR',
  localeOg: 'es_CR',
  saltar: 'Saltar al contenido',
  inicio: 'Vion, inicio',
  navPrincipal: 'Principal',
  navPie: 'Pie de página',
  migas: 'Usted está en',
  otroIdioma: { texto: 'English', etiqueta: 'Read this page in English' },
  pie: {
    lema: 'Vion Studio es un estudio de IA de Costa Rica. Sistemas y agentes de IA, IA para ingeniería y arquitectura, y apps a la medida.',
    servicios: 'Servicios',
    estudio: 'Estudio',
    contacto: 'Contacto',
    formulario: 'Formulario de contacto',
    legal: `Vion. ${P.razonSocial}`,
    privacidad: 'Aviso de privacidad',
  },
  llamado: {
    whatsapp: 'Escribir por WhatsApp',
    correo: 'Escribir a',
    formulario: 'Ver el formulario y los datos de contacto',
  },
  etiquetas: { paso: 'Paso {n} de {total}', plazo: 'Plazo', rango: 'Inversión orientativa', entregables: 'Lo que recibe' },
  contacto: { whatsapp: 'WhatsApp', correo: 'Correo', instagram: 'Instagram' },
  noEncontrada: {
    titulo: 'Página no encontrada | Vion',
    descripcion:
      'Esta página no existe o cambió de dirección. Desde aquí puede ir a cualquiera de las siete páginas del sitio de Vion.',
    etiqueta: 'Error 404',
    h1: 'Esta página no existe',
    acento: 'no existe',
    bajada: 'La dirección no existe o cambió. Estas son las páginas del sitio:',
    lista: 'Páginas del sitio',
  },
  formulario: {
    avisoPrueba:
      'Modo prueba: el formulario se puede llenar, pero todavía no envía nada. Mientras tanto, escríbanos por WhatsApp o por correo.',
    nombre: 'Nombre',
    empresa: 'Empresa',
    contacto: 'Correo o WhatsApp',
    ayudaContacto: 'Por donde prefiera que le respondamos.',
    servicio: 'Qué le interesa',
    opciones: [
      'Diagnóstico de automatización',
      'Automatización de AutoCAD',
      'Consultoría BIM e ISO 19650',
      'App o software a la medida',
      'Sistema o agente de IA',
      'Otro',
    ],
    mensaje: 'Mensaje',
    ejemploMensaje: 'Qué tarea se repite, con qué software y cuántas personas la hacen.',
    obligatorio: 'obligatorio',
    consentimiento: 'Acepto que Vion use estos datos solo para responderme, según el [aviso de privacidad](@privacidad).',
    enviar: 'Enviar mensaje',
    enviando: 'Enviando…',
    errores: {
      nombre: 'Escriba su nombre.',
      contacto: 'Escriba un correo o un número para responderle.',
      consentimiento: 'Hace falta su consentimiento para poder responderle.',
      revisar: 'Revise los campos marcados.',
      envio: 'No se pudo enviar. Escríbanos a consultorias@vion-studio.com o por WhatsApp.',
    },
    exito: 'Gracias. Recibimos su mensaje y le vamos a responder personalmente.',
    exitoPrueba:
      'Modo prueba: todo está bien llenado, pero el formulario todavía no está conectado y su mensaje no se envió. Escríbanos por WhatsApp o por correo.',
    trampa: 'No llenar este campo',
  },
};
