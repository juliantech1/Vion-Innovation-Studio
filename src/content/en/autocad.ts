import { precioDe, visibles } from '../catalogo';
import { P } from '../pendientes';
import { publicarRangos } from '../sitio';
import type { Pagina } from '../tipos';
import { servicios } from './catalogo';

const piloto = servicios.piloto;
const descripcion =
  'Custom AutoLISP routines and plugins that automate drawings and repetitive tasks in AutoCAD. Request a quote for your workflow from Vion.';

export const autocad: Pagina = {
  id: 'autocad',
  nav: 'AutoCAD',
  titulo: 'AutoCAD automation and custom AutoLISP routines | Vion',
  descripcion,
  palabrasClave: ['AutoCAD automation', 'custom AutoLISP routines', 'custom AutoCAD plugins', 'AutoLISP developer freelance'],
  indexar: true,
  etiqueta: `AutoCAD · ${piloto.plazo} pilot`,
  h1: 'Automate your drawings with AutoLISP routines and custom plugins',
  acento: 'AutoLISP',
  bajada:
    'The tasks your team repeats in AutoCAD can become a command. We build it on your own drawings and leave it running.',
  acciones: [
    { texto: 'Request a quote on WhatsApp', destino: { whatsapp: 'Hi Vion. I would like a quote for an AutoCAD automation.' } },
    { texto: 'See how pricing works', destino: { pagina: 'autocad', ancla: 'quote' } },
  ],
  secciones: [
    {
      tipo: 'lista',
      id: 'tasks',
      etiqueta: 'AutoCAD automation',
      titulo: 'Tasks we automate',
      acento: 'automate',
      items: [
        { titulo: 'Sheets', texto: 'Formats, title blocks, views and numbering that are set up the same way on every project.', etiqueta: 'Drawings' },
        { titulo: 'Quantity takeoffs', texto: 'Quantities taken from the drawing to Excel, without copy and paste or counting by eye.', etiqueta: 'Excel' },
        { titulo: 'Standards', texto: 'Layers, styles, blocks and names checked and corrected with one command.', etiqueta: 'Quality' },
        { titulo: 'Exports', texto: 'PDF, DWG and delivery packages produced in one go, in the same order every time.', etiqueta: 'Deliveries' },
      ],
    },
    {
      tipo: 'texto',
      id: 'autolisp-routines',
      etiqueta: 'Inside AutoCAD',
      titulo: 'Custom AutoLISP routines',
      acento: 'AutoLISP',
      parrafos: [
        'For what lives inside the drawing: a new command that does in seconds what used to take several steps.',
        'An AutoLISP routine runs in the AutoCAD your team already uses, with no other program to install. It suits narrow, frequent tasks: inserting and filling blocks, checking layers, numbering, measuring and exporting.',
        'Each routine comes with a short manual and is tested on your real drawings before we call it done.',
      ],
    },
    {
      tipo: 'texto',
      id: 'plugins',
      etiqueta: 'When a routine is not enough',
      titulo: 'Custom AutoCAD plugins',
      acento: 'plugins',
      parrafos: [
        'For longer workflows: reading many files, matching the drawing against a spreadsheet or connecting AutoCAD to another system.',
        'That is where a plugin or a separate tool that works with your files makes sense. The decision comes out of the [automation assessment](@consultoria#assessment): we use the simplest thing that solves the task.',
        `Technologies we work with: ${P.tecnologias}`,
      ],
    },
    {
      tipo: 'ficha',
      id: 'examples',
      etiqueta: 'Examples',
      titulo: 'Measured, not promised',
      acento: 'promised',
      filas: [
        { termino: 'Example', valor: 'Assessment on an Autodesk sample drawing.' },
        { termino: 'Result', valor: P.resultadoEjemplo },
        { termino: 'Client case', valor: P.casoCliente },
      ],
      nota: 'Every pilot ends with **hours measured before and after**. Those numbers, with the client’s permission, are what will appear here and in [our work](@casos).',
    },
    {
      tipo: 'texto',
      id: 'quote',
      etiqueta: `${piloto.nombre} · ${piloto.plazo}`,
      titulo: 'How a quote works',
      acento: 'quote',
      parrafos: [
        `${piloto.que} It is for ${piloto.para.charAt(0).toLowerCase()}${piloto.para.slice(1)}`,
        ...(publicarRangos
          ? [`**Indicative investment: ${piloto.rango}.** Confirmed after the assessment, once the workflow and the scope are clear.`]
          : []),
        'If you also need to put BIM standards or ISO 19650 in order, see [our BIM and AutoCAD consulting](@consultoria).',
      ],
    },
    {
      tipo: 'preguntas',
      id: 'questions',
      titulo: 'Questions about AutoCAD automation',
      acento: 'AutoCAD',
      preguntas: visibles([
        {
          p: 'Do we need to install another program to use an AutoLISP routine?',
          r: 'No. An AutoLISP routine runs in the AutoCAD your team already uses and is launched like any other command.',
        },
        {
          p: 'Which AutoCAD tasks can be automated?',
          r: 'The ones that repeat the same way on every project: setting up sheets, taking quantities to Excel, checking layers, styles, blocks and names, and exporting PDF, DWG and delivery packages.',
        },
        {
          p: 'When does a plugin make more sense than a routine?',
          r: 'When the workflow is longer: reading many files, matching the drawing against a spreadsheet or connecting AutoCAD to another system. The decision comes out of the assessment, and we always use the simplest thing that solves the task.',
        },
        {
          p: 'How much does it cost and how long does it take to automate a workflow?',
          r: `A pilot on one workflow takes ${piloto.plazo} and, as a reference, costs ${piloto.rango}. The amount is confirmed after the assessment.`,
          precio: true,
        },
        {
          p: 'Is Vion a freelance AutoLISP developer?',
          r: 'Vion is a studio, not a freelance marketplace. The work follows a fixed process: an assessment first, then a pilot on your own drawings, delivered with a short manual and hours measured before and after.',
        },
      ]),
    },
  ],
  llamado: {
    titulo: 'What does your team do by hand in AutoCAD?',
    acento: 'AutoCAD',
    texto: 'A short description of the task and the software is enough to start. We reply with the next steps.',
    mensajeWhatsapp: 'Hi Vion. I would like a quote for an AutoCAD automation.',
  },
  og: { titulo: 'AutoCAD automation', acento: 'AutoCAD' },
  esquema: {
    tipo: 'WebPage',
    servicio: {
      nombre: 'AutoCAD automation and AutoLISP routines',
      tipoDeServicio: 'AutoCAD automation',
      descripcion,
      precio: precioDe(piloto),
      oferta: piloto.nombre,
    },
  },
};
