import { precioDe, visibles } from '../catalogo';
import { publicarRangos } from '../sitio';
import type { Pagina, Seccion } from '../tipos';
import { servicios } from './catalogo';

const a = servicios.apps;
const descripcion =
  'Desarrollo de apps y software a medida con IA para empresas en Costa Rica. Conozca los alcances y pida una cotización sin compromiso.';

const rangos: Seccion[] = publicarRangos
  ? [
      {
        tipo: 'rangos',
        id: 'rangos',
        etiqueta: 'En dólares, orientativos',
        titulo: 'Rangos de inversión y precio',
        acento: 'inversión',
        intro: 'El monto exacto se confirma después del diagnóstico, cuando el alcance está claro.',
        filas: [servicios.diagnostico, servicios.piloto, servicios.soporte, servicios.apps].map((s) => ({
          nombre: s.nombre,
          rango: s.rango,
          detalle: `${s.plazo} · ${s.entregables.join(', ')}`,
        })),
      },
    ]
  : [];

export const apps: Pagina = {
  id: 'apps',
  nav: 'Apps',
  titulo: 'Apps y software a medida con IA en Costa Rica | Vion',
  descripcion,
  palabrasClave: [
    'desarrollo de aplicaciones a la medida Costa Rica',
    'empresa desarrollo de apps móviles Costa Rica precio',
    'automatización de procesos con inteligencia artificial Costa Rica',
    'software a la medida Costa Rica precio',
  ],
  indexar: true,
  etiqueta: `Apps · ${a.plazo}`,
  h1: 'Apps y software a medida con IA para su empresa',
  acento: 'IA',
  bajada:
    'Apps web y móviles, asistentes y agentes de IA hechos para cómo trabaja su empresa, del prototipo a producción. Desarrollo de aplicaciones a la medida desde Costa Rica.',
  acciones: [
    { texto: 'Solicitar cotización por WhatsApp', destino: { whatsapp: 'Hola, Vion. Quiero cotizar una app a la medida.' } },
    { texto: publicarRangos ? 'Ver rangos de inversión' : 'Ver el proceso', destino: { pagina: 'apps', ancla: publicarRangos ? 'rangos' : 'proceso' } },
  ],
  secciones: [
    {
      tipo: 'lista',
      id: 'que-construimos',
      etiqueta: 'Apps a la medida',
      titulo: 'Qué construimos',
      acento: 'construimos',
      items: [
        { titulo: 'Apps web y móviles', texto: 'Para sus clientes o para su equipo, con su marca y sus datos.', etiqueta: 'Producto' },
        { titulo: 'Asistentes con IA', texto: 'Que responden con la información de su empresa y saben cuándo pasarle el caso a una persona.', etiqueta: 'Atención' },
        { titulo: 'Extracción de datos', texto: 'De documentos, correos, planos o formularios a una base ordenada, sin digitar a mano.', etiqueta: 'Datos' },
        { titulo: 'Automatización de procesos', texto: 'Los pasos repetidos de un proceso, hechos por un sistema que deja lo importante para aprobar.', etiqueta: 'Procesos' },
      ],
    },
    {
      tipo: 'texto',
      id: 'automatizacion-con-ia',
      etiqueta: 'Sistemas y agentes de IA',
      titulo: 'Automatización de procesos con inteligencia artificial',
      acento: 'inteligencia artificial',
      parrafos: [
        'Un agente de IA prepara el trabajo. Una persona decide.',
        'Construimos sistemas con agentes que investigan, ordenan, redactan y avisan, con tres reglas: **se pueden medir** (qué hicieron y cuánto costó), **cuidan sus datos** (lo sensible puede quedarse en modelos locales) y **una persona aprueba lo importante** antes de que salga.',
        'Es como funciona Ultron, el sistema con el que trabaja Vion. [Vea cómo está armado Ultron](@casos#ultron).',
      ],
    },
    {
      tipo: 'pasos',
      id: 'proceso',
      etiqueta: `Plazo habitual: ${a.plazo}`,
      titulo: 'Proceso de desarrollo',
      acento: 'desarrollo',
      pasos: [
        { titulo: 'Prototipo navegable', texto: 'Antes de programar todo, una versión que se puede tocar para confirmar que resuelve lo que hace falta.' },
        { titulo: 'App en producción', texto: 'La app construida, probada y publicada, con la IA integrada donde de verdad ahorra trabajo.' },
        { titulo: 'Mantenimiento opcional', texto: 'Ajustes, mejoras y soporte después de la entrega, si lo necesita.' },
      ],
      nota: '¿Su empresa es una firma de ingeniería o arquitectura? Vea también [la automatización de AutoCAD con rutinas y plugins](@autocad) y [la consultoría BIM](@consultoria).',
    },
    ...rangos,
    {
      tipo: 'preguntas',
      id: 'preguntas',
      titulo: 'Preguntas sobre apps y software a la medida',
      acento: 'medida',
      preguntas: visibles([
        {
          p: '¿Cuánto cuesta una app a la medida?',
          r: `Como referencia, una app o un software a la medida con IA va de ${a.rango}. El precio exacto se confirma cuando el alcance está claro.`,
          precio: true,
        },
        {
          p: '¿Cuánto tarda el desarrollo de una app?',
          r: `El plazo habitual es de ${a.plazo}: primero un prototipo navegable, después la app en producción.`,
        },
        {
          p: '¿Qué pasa con los datos de mi empresa?',
          r: 'Los sistemas se diseñan para cuidar sus datos: lo sensible puede quedarse en modelos locales, lo que hace cada agente se puede medir y una persona aprueba lo importante antes de que salga.',
        },
        {
          p: '¿Hay mantenimiento después de la entrega?',
          r: 'Sí, es opcional: ajustes, mejoras y soporte después de publicar la app, si su empresa lo necesita.',
        },
      ]),
    },
  ],
  llamado: {
    titulo: 'Cuéntenos qué app necesita',
    acento: 'necesita',
    texto: 'Con una descripción corta de lo que quiere resolver alcanza para empezar. Le respondemos con los siguientes pasos.',
    mensajeWhatsapp: 'Hola, Vion. Quiero cotizar una app a la medida.',
  },
  og: { titulo: 'Apps y software a medida con IA', acento: 'IA' },
  esquema: {
    tipo: 'WebPage',
    servicio: {
      nombre: 'Apps y software a medida con IA',
      tipoDeServicio: 'Desarrollo de apps y software a la medida',
      descripcion,
      precio: precioDe(a),
      oferta: a.nombre,
    },
  },
};
