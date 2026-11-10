import { P } from '../pendientes';
import type { Pagina, Proyecto } from '../tipos';

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
      { termino: 'Status', valor: P.estadoViazo },
      { termino: 'Results', valor: P.resultadosViazo },
    ],
    captura: P.capturaViazo,
  },
];

export const casos: Pagina = {
  id: 'casos',
  nav: 'Work',
  titulo: 'Our work: AI agents, apps and automation | Vion',
  descripcion:
    'Vion’s own projects: Ultron, Top Spin, RealFood and Viazo. What each one solves and how it was built with AI in Costa Rica.',
  palabrasClave: ['AI agents', 'custom apps', 'AutoCAD automation'],
  indexar: true,
  etiqueta: 'Work · in-house projects',
  h1: 'Consulting, automation and app projects',
  acento: 'automation',
  bajada:
    'We start at home: these are Vion’s own projects, built in Costa Rica. Client cases will be added here when they exist and the client allows it.',
  secciones: [
    {
      tipo: 'proyectos',
      id: 'in-house-projects',
      etiqueta: 'Custom apps and AI agents',
      titulo: 'AI apps and in-house projects',
      acento: 'in-house',
      proyectos,
    },
    {
      tipo: 'texto',
      id: 'client-cases',
      etiqueta: 'BIM consulting · AutoCAD automation',
      titulo: 'Client cases',
      acento: 'Client',
      parrafos: [
        'We have not published client cases yet.',
        'When a pilot ends, its hours measured before and after will appear here, always with the client’s permission and without any data the client does not want to show. We do not use anyone’s logos, names or figures without authorization.',
        P.casoCliente,
        'In the meantime, you can see how we work in [BIM and AutoCAD consulting](@consultoria), [AutoCAD automation](@autocad) and [custom apps and software](@apps).',
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
  esquema: { tipo: 'CollectionPage', lista: proyectos.map((p) => ({ nombre: p.nombre, ancla: p.id })) },
};
