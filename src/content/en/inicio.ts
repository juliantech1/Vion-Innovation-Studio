import { pasoDe } from '../catalogo';
import type { Pagina } from '../tipos';
import { servicios } from './catalogo';

export const inicio: Pagina = {
  id: 'inicio',
  nav: 'Home',
  titulo: 'Vion Studio: AI, AutoCAD/BIM automation and custom apps',
  descripcion:
    'AI consulting, AutoCAD and BIM automation, and custom apps for engineering and architecture firms. A Costa Rica studio on UTC-6 all year.',
  palabrasClave: ['AI software development Costa Rica', 'AutoCAD automation', 'BIM consulting'],
  indexar: true,
  etiqueta: 'Vion · AI studio · Costa Rica',
  h1: 'AI, AutoCAD/BIM automation and custom apps for engineering and architecture',
  acento: 'AutoCAD/BIM',
  bajada:
    'Vion builds custom AI systems and agents, automates AutoCAD, Civil 3D and Revit, and develops apps for companies. We are based in Costa Rica and work in English and Spanish.',
  acciones: [
    { texto: 'Request an assessment on WhatsApp', destino: { whatsapp: 'Hi Vion. I would like to request an automation assessment.' } },
    { texto: 'See the services', destino: { pagina: 'inicio', ancla: 'services' } },
  ],
  secciones: [
    {
      tipo: 'lista',
      id: 'what-we-solve',
      etiqueta: 'What we solve',
      titulo: 'If it repeats, it can be automated',
      acento: 'automated',
      intro: 'Every week, hours of your team go into tasks done exactly like last week. That is where our work starts.',
      items: [
        { titulo: 'Sheets and drawings put together by hand on every project.', texto: 'Title blocks, views, formats and numbering that repeat.' },
        { titulo: 'Quantities that go from the drawing to Excel by copy and paste.', texto: 'Takeoffs that depend on counting by eye.' },
        { titulo: 'Standards that each person applies differently.', texto: 'Layers, file names and deliverables without one shared order.' },
        { titulo: 'Exports and deliveries that repeat.', texto: 'PDF, DWG and client packages, assembled by hand every time.' },
        {
          titulo: 'Office processes that someone sorts out by hand.',
          texto: 'Emails, reports and data that an app or an AI agent can prepare for a person to approve.',
        },
      ],
    },
    {
      tipo: 'lista',
      id: 'services',
      etiqueta: 'Services',
      titulo: 'Three lines of work',
      acento: 'work',
      items: [
        {
          titulo: 'AI + AutoCAD/BIM consulting',
          texto:
            'BIM consulting for design firms: an assessment of your drafting and modeling workflows, BIM standards aligned with ISO 19650 and a plan to automate what takes the most hours.',
          etiqueta: 'Assessment · 2 weeks',
          enlace: { pagina: 'consultoria' },
        },
        {
          titulo: 'AutoCAD automation',
          texto: 'AutoLISP routines and custom plugins for sheets, quantity takeoffs, standards and exports, built on your own projects.',
          etiqueta: 'Pilot · 4 to 6 weeks',
          enlace: { pagina: 'autocad' },
        },
        {
          titulo: 'Custom apps and AI agents',
          texto:
            'AI software development from Costa Rica: web and mobile apps with AI built in, and agent systems that prepare the work so a person can approve it.',
          etiqueta: 'Project · 6 to 12 weeks',
          enlace: { pagina: 'apps' },
        },
      ],
    },
    {
      tipo: 'pasos',
      id: 'how-it-starts',
      etiqueta: 'Process',
      titulo: 'How it starts',
      acento: 'starts',
      intro: 'First we measure, then we automate a single workflow, and only then do you decide whether to continue.',
      pasos: [pasoDe(servicios.diagnostico), pasoDe(servicios.piloto), pasoDe(servicios.soporte)],
      nota: 'Each step is explained in [our AI, AutoCAD and BIM consulting process](@consultoria#process).',
    },
    {
      tipo: 'texto',
      id: 'ultron',
      etiqueta: 'Our own case',
      titulo: 'Ultron: an office of AI agents',
      acento: 'agents',
      parrafos: [
        'We use it before we offer it. Ultron is the system of AI agents that Vion runs on.',
        'It runs on our own hardware, with no rented servers: local models with Ollama for what must not leave the machine and Claude through the API for what needs more capacity, with a monthly spending cap. The data stays in house and the cost stays under control.',
        'Its agents research markets, look for companies that might need us, draft proposals and prepare content. **Nothing goes out until a person approves it.** We build client systems on the same principle.',
        '[See Ultron and our other in-house projects](@casos) or [meet the Vion team](@nosotros).',
      ],
    },
    {
      tipo: 'texto',
      id: 'working-with-us',
      etiqueta: 'Remote from Costa Rica',
      titulo: 'Working with a studio in Costa Rica',
      acento: 'Costa Rica',
      parrafos: [
        'Costa Rica is on Central Standard Time all year (UTC-6), so calls happen during the US business day. We work remotely, in English and Spanish, and prices are quoted in US dollars.',
        'The first step is always the same small one: [a two-week assessment](@consultoria#assessment) before any larger commitment.',
      ],
    },
    {
      tipo: 'texto',
      id: 'cursos',
      etiqueta: 'Courses · free',
      titulo: 'Free AI courses',
      acento: 'Free',
      parrafos: [
        'We are going to publish free courses, with videos and materials, on what we already do: AI agents, motion and 3D, and AutoCAD for engineering and architecture. The first five are in production and do not have a date yet.',
      ],
    },
    {
      tipo: 'texto',
      id: 'blog',
      etiqueta: 'Blog',
      titulo: 'Latest from the blog',
      acento: 'blog',
      parrafos: ['Articles on ISO 19650, AutoCAD and AI agents, written from our everyday work, with sources at the end.'],
    },
  ],
  llamado: {
    titulo: 'Which task takes the most hours from your team?',
    acento: 'hours',
    texto: 'Tell us how you work today. We reply with the next steps and, if it makes sense, we start with a two-week assessment.',
    mensajeWhatsapp: 'Hi Vion. I would like to request an automation assessment.',
  },
  og: { titulo: 'AI, AutoCAD/BIM and custom apps', acento: 'AutoCAD/BIM' },
  esquema: { tipo: 'WebPage' },
};
