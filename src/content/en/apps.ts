import { precioDe, visibles } from '../catalogo';
import { publicarRangos } from '../sitio';
import type { Pagina, Seccion } from '../tipos';
import { servicios } from './catalogo';

const a = servicios.apps;
const descripcion =
  'Custom app development and software with AI for companies, built by a studio in Costa Rica. See the scope, timelines and indicative price ranges.';

const rangos: Seccion[] = publicarRangos
  ? [
      {
        tipo: 'rangos',
        id: 'pricing',
        etiqueta: 'In US dollars, indicative',
        titulo: 'Price ranges',
        acento: 'ranges',
        intro: 'The exact amount is confirmed after the assessment, once the scope is clear.',
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
  titulo: 'Custom apps and software with AI | Vion, Costa Rica',
  descripcion,
  palabrasClave: ['custom app development', 'custom software with AI', 'AI process automation', 'AI software development Costa Rica'],
  indexar: true,
  etiqueta: `Apps · ${a.plazo}`,
  h1: 'Custom apps and software with AI for your company',
  acento: 'AI',
  bajada:
    'Web and mobile apps, assistants and AI agents made for the way your company works, from prototype to production. AI software development from Costa Rica.',
  acciones: [
    { texto: 'Request a quote on WhatsApp', destino: { whatsapp: 'Hi Vion. I would like a quote for a custom app.' } },
    { texto: publicarRangos ? 'See price ranges' : 'See the process', destino: { pagina: 'apps', ancla: publicarRangos ? 'pricing' : 'process' } },
  ],
  secciones: [
    {
      tipo: 'lista',
      id: 'what-we-build',
      etiqueta: 'Custom apps',
      titulo: 'What we build',
      acento: 'build',
      items: [
        { titulo: 'Web and mobile apps', texto: 'For your customers or for your team, with your brand and your data.', etiqueta: 'Product' },
        { titulo: 'AI assistants', texto: 'They answer with your company’s information and know when to hand the case to a person.', etiqueta: 'Support' },
        { titulo: 'Data extraction', texto: 'From documents, emails, drawings or forms into an organized database, with no manual typing.', etiqueta: 'Data' },
        { titulo: 'Process automation', texto: 'The repeated steps of a process, done by a system that leaves the important decisions for approval.', etiqueta: 'Processes' },
      ],
    },
    {
      tipo: 'texto',
      id: 'ai-automation',
      etiqueta: 'AI systems and agents',
      titulo: 'AI process automation',
      acento: 'AI',
      parrafos: [
        'An AI agent prepares the work. A person decides.',
        'We build systems with agents that research, organize, draft and notify, under three rules: **they can be measured** (what they did and what it cost), **they protect your data** (sensitive information can stay on local models) and **a person approves what matters** before it goes out.',
        'That is how Ultron works, the system Vion runs on. [See how Ultron is put together](@casos#ultron).',
      ],
    },
    {
      tipo: 'pasos',
      id: 'process',
      etiqueta: `Typical timeline: ${a.plazo}`,
      titulo: 'Custom app development process',
      acento: 'process',
      pasos: [
        { titulo: 'Clickable prototype', texto: 'Before building everything, a version you can try to confirm it solves what you need.' },
        { titulo: 'App in production', texto: 'The app built, tested and released, with AI where it actually saves work.' },
        { titulo: 'Optional maintenance', texto: 'Adjustments, improvements and support after delivery, if you need it.' },
      ],
      nota: 'Is your company an engineering or architecture firm? See also [AutoCAD automation with routines and plugins](@autocad) and [BIM consulting](@consultoria).',
    },
    ...rangos,
    {
      tipo: 'preguntas',
      id: 'questions',
      titulo: 'Questions about custom apps and software',
      acento: 'custom',
      preguntas: visibles([
        {
          p: 'How much does a custom app cost?',
          r: `As a reference, a custom app or custom software with AI costs ${a.rango}. The exact price is confirmed once the scope is clear.`,
          precio: true,
        },
        {
          p: 'How long does it take to develop an app?',
          r: `The typical timeline is ${a.plazo}: first a clickable prototype, then the app in production.`,
        },
        {
          p: 'What happens to my company’s data?',
          r: 'The systems are designed to protect your data: sensitive information can stay on local models, what each agent does can be measured, and a person approves what matters before it goes out.',
        },
        {
          p: 'Is there maintenance after delivery?',
          r: 'Yes, and it is optional: adjustments, improvements and support after the app is released, if your company needs it.',
        },
      ]),
    },
  ],
  llamado: {
    titulo: 'Tell us which app you need',
    acento: 'app',
    texto: 'A short description of what you want to solve is enough to start. We reply with the next steps.',
    mensajeWhatsapp: 'Hi Vion. I would like a quote for a custom app.',
  },
  og: { titulo: 'Custom apps and software with AI', acento: 'AI' },
  esquema: {
    tipo: 'WebPage',
    servicio: {
      nombre: 'Custom apps and software with AI',
      tipoDeServicio: 'Custom app and software development',
      descripcion,
      precio: precioDe(a),
      oferta: a.nombre,
    },
  },
};
