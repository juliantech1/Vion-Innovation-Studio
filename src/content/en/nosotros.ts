import { P } from '../pendientes';
import type { Pagina } from '../tipos';

// Names and roles: the ones on the previous site (vion-studio.com/about). Julian writes or confirms the bios.
const personas = [
  { nombre: 'Julian Alvarez', cargo: 'CEO · software development and AI', bio: P.bioJulian },
  { nombre: 'Maite Alvarez', cargo: 'COO · engineering and operations', bio: P.bioMaite },
];

export const nosotros: Pagina = {
  id: 'nosotros',
  nav: 'About',
  titulo: 'About Vion: an AI studio based in Costa Rica',
  descripcion:
    'Meet the team behind Vion, an AI and AutoCAD/BIM consulting studio in Costa Rica, and how we work with engineering and architecture firms.',
  palabrasClave: ['AI consulting Costa Rica', 'AI studio'],
  indexar: true,
  etiqueta: 'About · Costa Rica',
  h1: 'A Costa Rican team for AI, AutoCAD/BIM and software',
  acento: 'AI',
  bajada:
    'Vion, also known as Vion Studio, is an AI studio based in Costa Rica. We build AI systems and agents, bring AI to engineering and architecture, and develop custom apps.',
  acciones: [
    { texto: 'Request an assessment', destino: { pagina: 'contacto' } },
    { texto: 'See our own projects', destino: { pagina: 'casos' } },
  ],
  secciones: [
    {
      tipo: 'personas',
      id: 'who-we-are',
      etiqueta: 'Team',
      titulo: 'Who we are',
      acento: 'are',
      personas,
    },
    {
      tipo: 'texto',
      id: 'how-we-work',
      etiqueta: 'How we work',
      titulo: 'First we measure',
      acento: 'measure',
      parrafos: [
        'We talk like engineers who explain, not like salespeople.',
        'We start by understanding how your team works today and how many hours go into each task. Then we automate a single workflow, on your own projects, and measure again. Those numbers decide whether to continue.',
        'We work the same way at home: Vion runs on [Ultron, our system of AI agents](@casos#ultron), where everything that goes out passes through a person first.',
      ],
    },
    {
      tipo: 'texto',
      id: 'experience',
      etiqueta: 'Experience',
      titulo: 'What we have built',
      acento: 'built',
      parrafos: [
        'In-house projects: [Ultron](@casos#ultron), [Top Spin](@casos#topspin), [RealFood](@casos#realfood) and [Viazo](@casos#viazo).',
        P.experiencia,
      ],
    },
    {
      tipo: 'lista',
      id: 'what-we-believe',
      etiqueta: 'Values',
      titulo: 'What we believe',
      acento: 'believe',
      items: [
        { titulo: 'AI is a tool', texto: 'It does not replace human judgment or the engineer’s. The decisions stay with your team.' },
        { titulo: 'Repetitive hours are worth money', texto: 'Work that repeats the same way every week can be automated, and those hours go back to what really needs a person.' },
        { titulo: 'Safe, measurable and approved', texto: 'An AI system has to be measurable, must not expose your data and has to let a person approve what matters.' },
        { titulo: 'Within reach', texto: 'Advanced technology has to be within reach of companies in Costa Rica, not only the large ones.' },
      ],
    },
    {
      tipo: 'texto',
      id: 'costa-rica-and-the-us',
      etiqueta: 'From Costa Rica',
      titulo: 'Costa Rica and the United States',
      acento: 'United States',
      parrafos: [
        'Vion is based in Costa Rica and works remotely, in English and Spanish, for firms here and in the United States.',
        'Costa Rica keeps the same time all year (UTC-6), so a workday here shares seven to nine hours with any time zone in the continental United States. Prices are quoted in US dollars.',
      ],
    },
    {
      tipo: 'lista',
      id: 'what-we-do',
      etiqueta: 'Services',
      titulo: 'How we can help',
      acento: 'help',
      items: [
        {
          titulo: 'AI, BIM and AutoCAD consulting',
          texto: 'For companies and firms that want to know what is worth automating before they invest.',
          enlace: { pagina: 'consultoria' },
        },
        {
          titulo: 'AutoCAD automation with routines and plugins',
          texto: 'For drafting teams that repeat the same tasks on every project.',
          enlace: { pagina: 'autocad' },
        },
        {
          titulo: 'Custom apps and software with AI',
          texto: 'For companies that need a tool of their own, web or mobile.',
          enlace: { pagina: 'apps' },
        },
      ],
    },
  ],
  llamado: {
    titulo: 'Let’s talk',
    texto: 'If your team loses hours to repeated tasks, tell us which ones. We reply with the next steps.',
    mensajeWhatsapp: 'Hi Vion. I would like to know more about how you work.',
  },
  og: { titulo: 'An AI studio in Costa Rica', acento: 'AI' },
  esquema: { tipo: 'AboutPage', personas: personas.map(({ nombre, cargo }) => ({ nombre, cargo })) },
};
