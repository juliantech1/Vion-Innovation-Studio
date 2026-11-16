import { pasoDe, precioDe, visibles } from '../catalogo';
import { publicarRangos } from '../sitio';
import { rutaArticulo, rutaCurso } from '../rutas';
import { SLUGS_BLOG, SLUGS_CURSOS } from '../slugs';
import type { Pagina } from '../tipos';
import { servicios } from './catalogo';

const d = servicios.diagnostico;
const descripcion =
  'BIM and AutoCAD consulting for engineering and architecture firms: standards, automation and ISO 19650 adoption. Start with a two-week assessment.';

export const consultoria: Pagina = {
  id: 'consultoria',
  nav: 'Consulting',
  titulo: 'BIM and AutoCAD consulting for AEC firms | Vion',
  descripcion,
  palabrasClave: ['BIM consulting', 'AutoCAD consulting', 'AI consulting', 'ISO 19650'],
  indexar: true,
  etiqueta: `Consulting · ${d.plazo} to get started`,
  h1: 'BIM and AutoCAD consulting for engineering and architecture firms',
  acento: 'BIM',
  bajada:
    'We review how your team drafts, models and delivers, put your standards in order and automate what repeats. In AutoCAD, Civil 3D and Revit.',
  resumen: {
    pregunta: 'What is Vion’s BIM and AutoCAD consulting?',
    texto: [
      'Vion’s BIM and AutoCAD consulting is a service that puts a firm’s drafting and modeling standards in order and automates the tasks its team repeats.',
      'It is for engineering and architecture firms that work in AutoCAD, Civil 3D or Revit.',
      `The work goes from small to large: first an **${d.nombre.toLowerCase()}** of ${d.plazo} on the firm’s real files and projects; then, if it makes sense, a ${servicios.piloto.nombre.toLowerCase()} (${servicios.piloto.plazo}) and ${servicios.soporte.nombre.toLowerCase()}.`,
      'The assessment delivers a map of the CAD/BIM workflows, the list of tasks that can be automated with estimated hours, and a report with the expected savings and a roadmap.',
      publicarRangos ? `The indicative investment for the assessment is ${d.rango}, confirmed once the scope is defined.` : '',
      'On standards, the order follows the ISO 19650 series, adopted in Costa Rica as INTE/ISO 19650. Vion is not a certification body.',
    ].filter(Boolean).join(' '),
    ficha: [
      { termino: 'For', valor: 'Engineering and architecture firms using AutoCAD, Civil 3D or Revit' },
      { termino: 'First step', valor: `${d.nombre} · ${d.plazo}` },
      ...(publicarRangos ? [{ termino: 'Investment', valor: `${d.rango} (indicative)` }] : []),
      { termino: 'Deliverables', valor: d.entregables.join('; ') },
    ],
    enlaces: [
      `[Article: ISO 19650 file naming](${rutaArticulo(SLUGS_BLOG['iso-19650-nombres'].en, 'en')})`,
      '[AutoCAD automation with AutoLISP routines](@autocad)',
      `[Free course: Claude + AutoCAD](${rutaCurso(SLUGS_CURSOS['claude-autocad'].en, 'en')})`,
      '[GEO audit for your website](@geo)',
    ],
  },
  actualizado: '2026-11-16',
  acciones: [
    { texto: 'Request an assessment on WhatsApp', destino: { whatsapp: 'Hi Vion. I would like to request an automation assessment.' } },
    { texto: 'See how the process works', destino: { pagina: 'consultoria', ancla: 'process' } },
  ],
  secciones: [
    {
      tipo: 'texto',
      id: 'assessment',
      etiqueta: `${d.nombre} · ${d.plazo}`,
      titulo: 'Process assessment',
      acento: 'assessment',
      parrafos: [d.que, `For ${d.para.charAt(0).toLowerCase()}${d.para.slice(1)} What you receive:`],
      lista: d.entregables,
      cierre: publicarRangos ? [`Indicative investment: ${d.rango}. Confirmed once the scope is defined.`] : undefined,
    },
    {
      tipo: 'texto',
      id: 'iso-19650',
      etiqueta: 'BIM · ISO 19650',
      titulo: 'BIM standards and ISO 19650',
      acento: 'ISO 19650',
      parrafos: [
        'A BIM model pays off when everyone names, stores and delivers information the same way.',
        'We review how your firm handles layers, families, file names and deliverables today, and propose an order aligned with the **ISO 19650** series (adopted in Costa Rica as INTE/ISO 19650). That order then becomes templates and routines, so it is followed by default and not from memory.',
        'We are not a certification body: we help you get your house in order and automate compliance with the standard inside your team.',
      ],
    },
    {
      tipo: 'texto',
      id: 'automation',
      etiqueta: 'AutoCAD · Civil 3D · Revit',
      titulo: 'AutoCAD automation',
      acento: 'AutoCAD',
      parrafos: [
        'What the assessment finds gets automated: sheets, quantity takeoffs, standards and exports.',
        'We work on your own projects, not on textbook examples, and we measure the hours before and after to know whether it was worth it.',
        '[Which AutoCAD tasks we automate and how](@autocad).',
      ],
    },
    {
      tipo: 'texto',
      id: 'ai-consulting',
      etiqueta: 'Beyond the drawing',
      titulo: 'AI consulting for companies',
      acento: 'AI',
      parrafos: [
        'The same method works for office workflows: we review a process, find what repeats and define what is worth automating with AI and what should stay in the hands of a person.',
        'If the answer is a system or an app, we build that too: [custom apps and AI agents](@apps). To see how such a system works on the inside, [Ultron is our own case](@casos#ultron).',
      ],
    },
    {
      tipo: 'pasos',
      id: 'process',
      etiqueta: 'From small to large',
      titulo: 'How we work',
      acento: 'work',
      pasos: [pasoDe(servicios.diagnostico, true), pasoDe(servicios.piloto, true), pasoDe(servicios.soporte, true)],
    },
    {
      tipo: 'preguntas',
      id: 'questions',
      titulo: 'Questions about the consulting',
      acento: 'consulting',
      preguntas: visibles([
        {
          p: 'What does the automation assessment include?',
          r: 'It takes two weeks. You receive a map of your CAD/BIM workflows, the list of tasks that can be automated with estimated hours, and a report with the expected savings and a roadmap.',
        },
        {
          p: 'Does Vion provide ISO 19650 certification?',
          r: 'No. Vion is not a certification body. We help you organize layers, families, file names and deliverables according to the ISO 19650 series and automate compliance inside your team.',
        },
        {
          p: 'Which software does the consulting cover?',
          r: 'AutoCAD, Civil 3D, Revit and BIM workflows. The assessment is done on the real files and projects of your firm.',
        },
        {
          p: 'How much does the assessment cost?',
          r: `As a reference, ${d.rango}. The amount is confirmed once the scope is defined.`,
          precio: true,
        },
      ]),
    },
  ],
  llamado: {
    titulo: 'Start with an assessment',
    acento: 'assessment',
    texto: 'Tell us which software your firm works in and which task takes the most hours. We reply with the next steps.',
    mensajeWhatsapp: 'Hi Vion. I am interested in BIM and AutoCAD consulting for my firm.',
  },
  og: { titulo: 'BIM and AutoCAD consulting', acento: 'BIM' },
  esquema: {
    tipo: 'WebPage',
    servicio: {
      nombre: 'AI + AutoCAD/BIM consulting',
      tipoDeServicio: 'BIM and AutoCAD consulting',
      descripcion,
      precio: precioDe(d),
      oferta: d.nombre,
    },
  },
};
