import { visibles } from '../catalogo';
import { P } from '../pendientes';
import { sitio } from '../sitio';
import type { Pagina } from '../tipos';
import { servicios } from './catalogo';

/** Preguntas frecuentes generales: solo lo que el catálogo y la voz de Vion permiten responder sin inventar. */
const preguntas = visibles([
  {
    p: '¿Por dónde se empieza?',
    r: 'Por un diagnóstico de dos semanas. Revisamos sus flujos de dibujo, modelado o de oficina, encontramos las tareas repetitivas que más horas consumen y le entregamos un informe con el ahorro esperado y una hoja de ruta.',
  },
  {
    p: '¿Qué pasa después del diagnóstico?',
    r: 'Si tiene sentido seguir, hacemos un piloto de 4 a 6 semanas sobre un solo flujo y con sus propios proyectos. Termina con la automatización funcionando, un manual corto, la capacitación del equipo y la medición de horas antes y después.',
  },
  {
    p: '¿Cuánto cuesta?',
    r: `Como referencia de precio: el diagnóstico va de ${servicios.diagnostico.rango}, un piloto de ${servicios.piloto.rango} y una app a la medida de ${servicios.apps.rango}. El monto exacto se confirma después del diagnóstico, cuando el alcance está claro.`,
    precio: true,
  },
  {
    p: '¿Con qué software trabajan?',
    r: 'En ingeniería y arquitectura, con AutoCAD, Civil 3D, Revit y flujos BIM. En apps, con lo que mejor encaje con su empresa: web, apps móviles o sistemas internos con IA integrada.',
  },
  {
    p: '¿La IA reemplaza a mi equipo?',
    r: 'No. Automatiza lo repetitivo para que su equipo dedique esas horas a lo que necesita criterio. En los sistemas que construimos, una persona aprueba lo importante antes de que salga.',
  },
  {
    p: '¿Hay soporte después de entregar?',
    r: 'Sí, con una mensualidad opcional: mantenemos y ajustamos las automatizaciones, sumamos mejoras pequeñas cada mes y damos soporte por correo y llamadas.',
  },
]);

export const contacto: Pagina = {
  id: 'contacto',
  nav: 'Contacto',
  titulo: 'Contacto y cotización | Vion Costa Rica',
  descripcion:
    'Escriba a Vion para consultoría BIM, automatización de AutoCAD o apps a la medida. Le respondemos con los siguientes pasos.',
  palabrasClave: ['consultoría BIM Costa Rica', 'empresa desarrollo de apps móviles Costa Rica precio'],
  indexar: true,
  etiqueta: 'Contacto · respuesta personal',
  h1: 'Hablemos de su proyecto',
  acento: 'proyecto',
  bajada:
    'Cuéntenos qué hace su equipo a mano o qué app necesita su empresa. Con eso alcanza para empezar: consultoría BIM, automatización de AutoCAD o desarrollo de apps, desde Costa Rica.',
  acciones: [
    { texto: 'Escribir por WhatsApp', destino: { whatsapp: 'Hola, Vion. Quiero conversar sobre un proyecto.' } },
    { texto: `Escribir a ${sitio.correo}`, destino: { correo: true } },
  ],
  secciones: [
    {
      tipo: 'contacto',
      id: 'datos',
      etiqueta: 'Contacto directo',
      titulo: 'Datos de contacto',
      acento: 'contacto',
      intro: 'Para una consulta rápida, WhatsApp. Para una propuesta formal, el correo.',
      filas: [{ termino: 'Dónde', valor: `Costa Rica · trabajo remoto y ${P.presencial}` }],
    },
    {
      tipo: 'formulario',
      id: 'formulario',
      etiqueta: 'Si prefiere dejarnos sus datos',
      titulo: 'Formulario de contacto',
      acento: 'contacto',
      intro: 'Lo lee una persona de Vion. Nadie le va a escribir de forma automática.',
    },
    {
      tipo: 'pasos',
      id: 'que-pasa-despues',
      etiqueta: 'Sin compromiso',
      titulo: 'Qué pasa después',
      acento: 'después',
      pasos: [
        { titulo: 'Lo recibimos', texto: 'Su mensaje llega directo a Vion. Sus datos se usan solo para responderle.' },
        { titulo: 'Le respondemos', texto: `Por correo o WhatsApp, según lo que prefiera, en ${P.plazoRespuesta}.` },
        { titulo: 'Una llamada corta', texto: 'Si tiene sentido seguir, una llamada de 20 minutos para entender el flujo y proponer el diagnóstico.' },
      ],
      nota: 'Antes de escribir puede revisar [la consultoría BIM y AutoCAD](@consultoria), [la automatización de AutoCAD](@autocad), [las apps a la medida y sus precios orientativos](@apps) o [nuestros proyectos propios](@casos).',
    },
    {
      tipo: 'preguntas',
      id: 'preguntas',
      titulo: 'Preguntas frecuentes',
      acento: 'frecuentes',
      preguntas,
    },
  ],
  og: { titulo: 'Hablemos de su proyecto', acento: 'proyecto' },
  esquema: { tipo: 'ContactPage' },
};
