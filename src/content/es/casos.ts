import { P } from '../pendientes';
import type { CasoCliente, Pagina, Proyecto } from '../tipos';

/**
 * El primer caso de cliente (Julian, 2026-11-16; autoriza nombrar a la empresa): «la empresa Ruta 51-53: le hicimos un
 * CRM para tener GPS en los buses e implementamos IA en la empresa; se ahorran los checadores, que eran los que revisaban
 * cada cuánto pasaban los buses por las paradas públicas». Sin cifras ni fechas del proyecto: no las dio.
 */
export const rutaCaso: CasoCliente = {
  id: 'ruta-51-53',
  cliente: 'Ruta 51-53',
  rubro: 'Transporte público en buses',
  titulo: 'Ruta 51-53: GPS en los buses en lugar de checadores',
  problema:
    'Para controlar la frecuencia del servicio, la empresa dependía de checadores: personas en las paradas públicas que revisaban cada cuánto pasaban los buses.',
  solucion:
    'Vion le hizo un CRM con GPS en los buses, para saber por dónde va cada bus y cuándo pasa por cada parada, e implementó inteligencia artificial en la empresa.',
  resultado:
    'Ya no hacen falta checadores para controlar el paso de los buses por las paradas: ese control lo da el sistema.',
  // Lo que hace la IA, en palabras de Julian (2026-11-16): «evalúa rutas, mejora el funcionamiento, lleva finanzas, crea
  // reportes de los buses, optimiza».
  ia: [
    'Evalúa las rutas.',
    'Propone mejoras en la operación.',
    'Lleva las finanzas de la empresa.',
    'Arma los reportes de los buses.',
    'Ayuda a optimizar el servicio.',
  ],
  servicio: 'apps',
  publicado: '2026-11-16',
  pendientes: [P.cifrasRuta],
};

// Proyectos propios de Vion (contexto.NEGOCIOS de la aldea y el catálogo de Orión) y los casos de clientes que existen y
// el cliente permite nombrar. Lo que no se sabe va como casillero.
const proyectos: Proyecto[] = [
  {
    id: 'ultron',
    nombre: 'Ultron',
    linea: 'Sistema de agentes de IA',
    que: 'El sistema de agentes de IA con el que trabaja Vion. Sus agentes investigan mercados, buscan empresas que podrían necesitar nuestros servicios, redactan borradores de propuestas, preparan contenido y llevan las cuentas del gasto.',
    filas: [
      {
        termino: 'Cómo funciona',
        valor: 'Corre en equipo propio, sin servidores alquilados. Usa modelos locales con Ollama para lo que no debe salir de la máquina y Claude por API para lo que necesita más capacidad, con un tope de gasto mensual. Todo lo que sale pasa por una cola de aprobación.',
      },
      { termino: 'Resultados', valor: P.resultadosUltron },
    ],
    captura: P.capturaUltron,
  },
  {
    id: 'topspin',
    nombre: 'Top Spin',
    linea: 'App',
    que: 'Una app para el ecosistema del pádel en Costa Rica.',
    filas: [
      { termino: 'Estado', valor: P.estadoTopSpin },
      { termino: 'Resultados', valor: P.resultadosTopSpin },
    ],
    captura: P.capturaTopSpin,
  },
  {
    id: 'realfood',
    nombre: 'RealFood',
    linea: 'Suscripción',
    que: 'Una suscripción de comidas preparadas (meal prep) para la Gran Área Metropolitana.',
    filas: [
      { termino: 'Estado', valor: P.estadoRealFood },
      { termino: 'Resultados', valor: P.resultadosRealFood },
    ],
    captura: P.capturaRealFood,
  },
  {
    id: 'viazo',
    nombre: 'Viazo',
    linea: 'Rastreo de flotas',
    que: 'Rastreo de flotas de buses públicos, con una app GPS para las rutas 51 y 53.',
    filas: [
      { termino: 'Estado', valor: P.estadoViazo },
      { termino: 'Resultados', valor: P.resultadosViazo },
    ],
    captura: P.capturaViazo,
  },
];

export const casos: Pagina = {
  id: 'casos',
  nav: 'Casos',
  titulo: 'Casos de consultoría BIM y apps con IA | Vion',
  descripcion:
    'El caso de Ruta 51-53 (GPS en los buses en lugar de checadores) y los proyectos propios de Vion: Ultron, Top Spin, RealFood y Viazo.',
  palabrasClave: ['consultoría BIM Costa Rica', 'desarrollo de aplicaciones a la medida Costa Rica'],
  indexar: true,
  etiqueta: 'Casos · clientes y proyectos propios',
  h1: 'Proyectos de consultoría, automatización y apps',
  acento: 'automatización',
  bajada:
    'Los proyectos propios de Vion, hechos en Costa Rica, y los casos de clientes que nos permiten publicar: el primero, Ruta 51-53, con GPS en los buses.',
  acciones: [{ texto: 'Pedir diagnóstico', destino: { pagina: 'contacto' } }],
  secciones: [
    {
      tipo: 'proyectos',
      id: 'proyectos-propios',
      etiqueta: 'Desarrollo de aplicaciones a la medida',
      titulo: 'Casos de apps con IA y proyectos propios',
      acento: 'propios',
      proyectos,
    },
    {
      tipo: 'caso',
      id: 'casos-de-clientes',
      etiqueta: 'Caso de cliente · publicado con permiso',
      titulo: 'Casos de clientes',
      acento: 'clientes',
      intro: 'Los casos de clientes se publican con su permiso y con lo que el cliente quiera mostrar. Sin cifras que no se hayan medido.',
      casos: [rutaCaso],
      cierre: [
        'Cuando un piloto de AutoCAD termine, su medición de horas antes y después también va a aparecer acá, con el permiso de la firma.',
        'Para ver cómo trabajamos: [la consultoría BIM y AutoCAD](@consultoria), [la automatización de AutoCAD](@autocad) y [las apps y el software a la medida](@apps).',
      ],
    },
  ],
  llamado: {
    titulo: 'Hablemos de su caso',
    acento: 'caso',
    texto:
      'Cuéntenos cómo trabajan hoy. Le respondemos con los siguientes pasos y, si tiene sentido, empezamos por un diagnóstico de dos semanas.',
    mensajeWhatsapp: 'Hola, Vion. Quiero conversar sobre un proyecto.',
  },
  og: { titulo: 'Proyectos propios de Vion', acento: 'Vion' },
  esquema: { tipo: 'CollectionPage', lista: [{ nombre: rutaCaso.cliente, ancla: rutaCaso.id }, ...proyectos.map((p) => ({ nombre: p.nombre, ancla: p.id }))] },
};
