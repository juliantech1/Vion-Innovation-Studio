import { P } from '../pendientes';
import type { CasoCliente, Pagina, Proyecto } from '../tipos';

/** The first client case (Julian, 2026-11-16; the company may be named). See es/casos.ts. No figures or project dates. */
export const rutaCaso: CasoCliente = {
  id: 'ruta-51-53',
  cliente: 'Ruta 51-53',
  rubro: 'Public bus transport',
  titulo: 'Ruta 51-53: GPS on the buses instead of manual checkers',
  problema:
    'To control service frequency across its fleet of 40 buses, the company relied on 5 checkers (“checadores”): people at public bus stops who tracked how often the buses came by.',
  solucion:
    'Vion built a CRM with GPS on all 40 buses, [Viazo](@casos#viazo), to know where each bus is and when it passes each stop, and implemented artificial intelligence in the company.',
  resultado:
    'The 5 checkers are no longer needed to control when the buses pass the stops: the system provides that control.',
  ia: [
    'It evaluates the routes.',
    'It proposes improvements to operations.',
    'It keeps the company’s finances.',
    'It produces the bus reports.',
    'It helps optimize the service.',
  ],
  datos: [
    { termino: 'Fleet', valor: '40 buses' },
    { termino: 'Checkers before', valor: '5, at public bus stops' },
  ],
  sistema: { nombre: 'Viazo', ancla: 'viazo' },
  servicio: 'apps',
  publicado: '2026-11-16',
  pendientes: [],
};

// Only Vion's own projects. What is not known yet is a placeholder. No client cases until one exists and the client allows it.
const proyectos: Proyecto[] = [
  {
    id: 'ultron',
    nombre: 'Ultron',
    linea: 'AI agent system',
    que: 'The system of AI agents that Vion runs on. Its agents research markets, look for companies that might need our services, draft proposals, prepare content and keep track of spending.',
    filas: [
      {
        termino: 'How it works',
        valor: 'It runs on our own hardware, with no rented servers. It uses local models with Ollama for what must not leave the machine and Claude through the API for what needs more capacity, with a monthly spending cap. Everything that goes out passes through an approval queue.',
      },
      { termino: 'Results', valor: P.resultadosUltron },
    ],
    captura: P.capturaUltron,
  },
  {
    id: 'topspin',
    nombre: 'Top Spin',
    linea: 'App',
    que: 'An app for the padel community in Costa Rica.',
    filas: [
      { termino: 'Status', valor: P.estadoTopSpin },
      { termino: 'Results', valor: P.resultadosTopSpin },
    ],
    captura: P.capturaTopSpin,
  },
  {
    id: 'realfood',
    nombre: 'RealFood',
    linea: 'Subscription',
    que: 'A meal prep subscription for the Greater Metropolitan Area of Costa Rica.',
    filas: [
      { termino: 'Status', valor: P.estadoRealFood },
      { termino: 'Results', valor: P.resultadosRealFood },
    ],
    captura: P.capturaRealFood,
  },
  {
    id: 'viazo',
    nombre: 'Viazo',
    linea: 'Fleet tracking',
    que: 'Fleet tracking for public buses, with a GPS app for routes 51 and 53.',
    filas: [
      { termino: 'Status', valor: 'In use at [Ruta 51-53](@casos#ruta-51-53), on all 40 buses of its fleet.' },
      { termino: 'Results', valor: 'The 5 checkers who tracked the buses at the stops are no longer needed for that. [See the Ruta 51-53 case](@casos#ruta-51-53).' },
    ],
    captura: P.capturaViazo,
  },
];

export const casos: Pagina = {
  id: 'casos',
  nav: 'Work',
  titulo: 'Our work: AI agents, apps and automation | Vion',
  descripcion:
    'The Ruta 51-53 client case (GPS on the buses instead of manual checkers) and Vion’s own projects: Ultron, Top Spin, RealFood and Viazo.',
  palabrasClave: ['AI agents', 'custom apps', 'AutoCAD automation'],
  indexar: true,
  etiqueta: 'Work · clients and in-house projects',
  h1: 'Consulting, automation and app projects',
  acento: 'automation',
  bajada:
    'Vion’s own projects, built in Costa Rica, and the client cases we are allowed to publish: the first one, Ruta 51-53, with GPS on the buses.',
  acciones: [{ texto: 'Request an assessment', destino: { pagina: 'contacto' } }],
  secciones: [
    {
      tipo: 'proyectos',
      id: 'in-house-projects',
      etiqueta: 'Custom apps and AI agents',
      titulo: 'AI apps and our own projects',
      acento: 'own',
      proyectos,
    },
    {
      tipo: 'caso',
      id: 'client-cases',
      etiqueta: 'Client case · published with permission',
      titulo: 'Client cases',
      acento: 'Client',
      intro: 'Client cases are published with the client’s permission and only with what the client wants to show. No figures that have not been measured.',
      casos: [rutaCaso],
      cierre: [
        'When an AutoCAD pilot ends, its hours measured before and after will also appear here, with the firm’s permission.',
        'To see how we work: [BIM and AutoCAD consulting](@consultoria), [AutoCAD automation](@autocad) and [custom apps and software](@apps).',
      ],
    },
  ],
  llamado: {
    titulo: 'Let’s talk about your case',
    acento: 'case',
    texto: 'Tell us how you work today. We reply with the next steps and, if it makes sense, we start with a two-week assessment.',
    mensajeWhatsapp: 'Hi Vion. I would like to talk about a project.',
  },
  og: { titulo: 'Vion’s own projects', acento: 'Vion’s' },
  esquema: { tipo: 'CollectionPage', lista: [{ nombre: rutaCaso.cliente, ancla: rutaCaso.id }, ...proyectos.map((p) => ({ nombre: p.nombre, ancla: p.id }))] },
};
