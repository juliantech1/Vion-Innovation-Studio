import { pasoDe, precioDe, visibles } from '../catalogo';
import { publicarRangos } from '../sitio';
import type { Pagina } from '../tipos';
import { servicios } from './catalogo';

const d = servicios.diagnostico;
const descripcion =
  'Consultoría BIM y AutoCAD para firmas de ingeniería y arquitectura en Costa Rica: estándares, automatización y adopción de ISO 19650. Escríbanos.';

export const consultoria: Pagina = {
  id: 'consultoria',
  nav: 'Consultoría',
  titulo: 'Consultoría BIM y AutoCAD en Costa Rica | Vion',
  descripcion,
  palabrasClave: [
    'consultoría BIM Costa Rica',
    'consultoría de inteligencia artificial para empresas Costa Rica',
    'ISO 19650 Costa Rica',
    'ISO 19650 certificación Costa Rica',
  ],
  indexar: true,
  etiqueta: `Consultoría · ${d.plazo} para empezar`,
  h1: 'Consultoría BIM y AutoCAD para firmas de ingeniería y arquitectura',
  acento: 'BIM',
  bajada:
    'Revisamos cómo dibuja, modela y entrega su equipo, ordenamos los estándares y automatizamos lo que se repite. Con AutoCAD, Civil 3D y Revit, para firmas de Costa Rica.',
  acciones: [
    { texto: 'Pedir diagnóstico por WhatsApp', destino: { whatsapp: 'Hola, Vion. Quiero pedir un diagnóstico de automatización.' } },
    { texto: 'Ver el proceso de trabajo', destino: { pagina: 'consultoria', ancla: 'proceso' } },
  ],
  secciones: [
    {
      tipo: 'texto',
      id: 'diagnostico',
      etiqueta: `${d.nombre} · ${d.plazo}`,
      titulo: 'Diagnóstico de procesos',
      acento: 'procesos',
      parrafos: [d.que, `Para ${d.para.charAt(0).toLowerCase()}${d.para.slice(1)} Lo que recibe:`],
      lista: d.entregables,
      cierre: publicarRangos ? [`Inversión orientativa: ${d.rango}. Se confirma al definir el alcance.`] : undefined,
    },
    {
      tipo: 'texto',
      id: 'iso-19650',
      etiqueta: 'BIM · ISO 19650',
      titulo: 'Estándares BIM e ISO 19650',
      acento: 'ISO 19650',
      parrafos: [
        'Un modelo BIM rinde cuando todos nombran, guardan y entregan la información de la misma forma.',
        'Revisamos cómo maneja hoy su firma las capas, las familias, los nombres de archivo y los entregables, y proponemos un orden alineado con la serie **ISO 19650**, adoptada en Costa Rica como INTE/ISO 19650. Después, ese orden se vuelve plantillas y rutinas para que se cumpla solo, no por memoria.',
        'No somos un ente certificador: le ayudamos a ordenar la casa y a automatizar el cumplimiento del estándar dentro de su equipo.',
      ],
    },
    {
      tipo: 'texto',
      id: 'automatizacion',
      etiqueta: 'AutoCAD · Civil 3D · Revit',
      titulo: 'Automatización de AutoCAD',
      acento: 'AutoCAD',
      parrafos: [
        'Lo que el diagnóstico encuentra se automatiza: láminas, cuantificación, estándares y exportes.',
        'Trabajamos sobre sus propios proyectos, no sobre ejemplos de manual, y medimos las horas antes y después para saber si valió la pena.',
        '[Qué tareas de AutoCAD automatizamos y cómo](@autocad).',
      ],
    },
    {
      tipo: 'texto',
      id: 'consultoria-ia',
      etiqueta: 'Fuera del dibujo',
      titulo: 'Consultoría de inteligencia artificial para empresas',
      acento: 'inteligencia artificial',
      parrafos: [
        'El mismo método sirve para los flujos de oficina: revisamos un proceso, encontramos lo que se repite y definimos qué conviene automatizar con IA y qué debe seguir en manos de una persona.',
        'Si la respuesta es un sistema o una app, también lo construimos: [apps y agentes de IA a la medida](@apps). Para ver cómo funciona un sistema así por dentro, [Ultron es nuestro propio caso](@casos#ultron).',
      ],
    },
    {
      tipo: 'pasos',
      id: 'proceso',
      etiqueta: 'De menor a mayor',
      titulo: 'Proceso de trabajo',
      acento: 'trabajo',
      pasos: [pasoDe(servicios.diagnostico, true), pasoDe(servicios.piloto, true), pasoDe(servicios.soporte, true)],
    },
    {
      tipo: 'preguntas',
      id: 'preguntas',
      titulo: 'Preguntas sobre la consultoría',
      acento: 'consultoría',
      preguntas: visibles([
        {
          p: '¿Qué incluye el diagnóstico de automatización?',
          r: 'Dura dos semanas. Entregamos un mapa de sus flujos CAD/BIM, la lista de tareas automatizables con las horas estimadas y un informe con el ahorro esperado y una hoja de ruta.',
        },
        {
          p: '¿Vion da la certificación ISO 19650 en Costa Rica?',
          r: 'No. Vion no es un ente certificador. Le ayudamos a ordenar capas, familias, nombres de archivo y entregables según la serie ISO 19650 (INTE/ISO 19650 en Costa Rica) y a automatizar su cumplimiento dentro del equipo.',
        },
        {
          p: '¿Con qué programas trabaja la consultoría?',
          r: 'Con AutoCAD, Civil 3D, Revit y flujos BIM. El diagnóstico se hace sobre los archivos y proyectos reales de su firma.',
        },
        {
          p: '¿Cuánto cuesta el diagnóstico?',
          r: `Como referencia, de ${d.rango}. El monto se confirma al definir el alcance.`,
          precio: true,
        },
      ]),
    },
  ],
  llamado: {
    titulo: 'Empecemos por un diagnóstico',
    acento: 'diagnóstico',
    texto:
      'Cuéntenos con qué software trabaja su firma y qué tarea le quita más horas. Le respondemos con los siguientes pasos.',
    mensajeWhatsapp: 'Hola, Vion. Me interesa la consultoría BIM y AutoCAD para mi firma.',
  },
  og: { titulo: 'Consultoría BIM y AutoCAD', acento: 'BIM' },
  esquema: {
    tipo: 'WebPage',
    servicio: {
      nombre: 'Consultoría IA + AutoCAD/BIM',
      tipoDeServicio: 'Consultoría BIM y AutoCAD',
      descripcion,
      precio: precioDe(d),
      oferta: d.nombre,
    },
  },
};
