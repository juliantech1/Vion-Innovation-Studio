import { P } from '../pendientes';
import type { Pagina, Proyecto } from '../tipos';

// Solo proyectos propios de Vion (contexto.NEGOCIOS de la aldea y el catálogo de Orión). Lo que no se sabe va como
// casillero. Ningún caso de cliente hasta que exista y el cliente lo permita.
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
  // Feme proponía «proyectos reales… para clientes… vea los resultados»: todavía no hay casos de clientes publicables.
  descripcion:
    'Los proyectos propios de Vion: Ultron, Top Spin, RealFood y Viazo. Qué resuelve cada uno y cómo se construyó con IA en Costa Rica.',
  palabrasClave: ['consultoría BIM Costa Rica', 'desarrollo de aplicaciones a la medida Costa Rica'],
  indexar: true,
  etiqueta: 'Casos · proyectos propios',
  h1: 'Proyectos de consultoría, automatización y apps',
  acento: 'automatización',
  bajada:
    'Empezamos por casa: estos son los proyectos propios de Vion, hechos en Costa Rica. Los casos de clientes se suman acá cuando existan y el cliente lo permita.',
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
      tipo: 'texto',
      id: 'casos-de-clientes',
      etiqueta: 'Consultoría BIM · automatización de AutoCAD',
      titulo: 'Casos de clientes',
      acento: 'clientes',
      parrafos: [
        'Todavía no publicamos casos de clientes.',
        'Cuando un piloto termine, su medición de horas antes y después va a aparecer acá, siempre con el permiso del cliente y sin datos que no quiera mostrar. No usamos logos, nombres ni cifras de nadie sin autorización.',
        P.casoCliente,
        'Mientras tanto, puede ver cómo trabajamos en [la consultoría BIM y AutoCAD](@consultoria), en [la automatización de AutoCAD](@autocad) y en [las apps y el software a la medida](@apps).',
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
  esquema: { tipo: 'CollectionPage', lista: proyectos.map((p) => ({ nombre: p.nombre, ancla: p.id })) },
};
