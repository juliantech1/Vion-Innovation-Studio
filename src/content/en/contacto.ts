import { visibles } from '../catalogo';
import { P } from '../pendientes';
import { sitio } from '../sitio';
import type { Pagina } from '../tipos';
import { servicios } from './catalogo';

const preguntas = visibles([
  {
    p: 'Where do we start?',
    r: 'With a two-week assessment. We review your drafting, modeling or office workflows, find the repetitive tasks that take the most hours and give you a report with the expected savings and a roadmap.',
  },
  {
    p: 'What happens after the assessment?',
    r: 'If it makes sense to continue, we run a 4 to 6 week pilot on a single workflow, using your own projects. It ends with the automation running, a short manual, training for the team and hours measured before and after.',
  },
  {
    p: 'How much does it cost?',
    r: `As a reference: the assessment costs ${servicios.diagnostico.rango}, a pilot ${servicios.piloto.rango} and a custom app ${servicios.apps.rango}. The exact amount is confirmed after the assessment, once the scope is clear.`,
    precio: true,
  },
  {
    p: 'Which software do you work with?',
    r: 'In engineering and architecture, AutoCAD, Civil 3D, Revit and BIM workflows. For apps, whatever fits your company best: web, mobile or internal systems with AI built in.',
  },
  {
    p: 'Does AI replace my team?',
    r: 'No. It automates the repetitive work so your team can spend those hours on what needs judgment. In the systems we build, a person approves what matters before it goes out.',
  },
  {
    p: 'Is there support after delivery?',
    r: 'Yes, with an optional monthly plan: we maintain and adjust the automations, add small improvements every month and provide support by email and calls.',
  },
]);

export const contacto: Pagina = {
  id: 'contacto',
  nav: 'Contact',
  titulo: 'Contact Vion and request a quote | Costa Rica',
  descripcion:
    'Write to Vion about BIM consulting, AutoCAD automation or custom app development. A person replies with the next steps, in English or Spanish.',
  palabrasClave: ['BIM consulting', 'custom app development', 'AutoCAD automation'],
  indexar: true,
  etiqueta: 'Contact · a personal reply',
  h1: 'Let’s talk about your project',
  acento: 'project',
  bajada:
    'Tell us what your team does by hand or which app your company needs. That is enough to start: BIM consulting, AutoCAD automation or custom app development.',
  acciones: [
    { texto: 'Message us on WhatsApp', destino: { whatsapp: 'Hi Vion. I would like to talk about a project.' } },
    { texto: `Email ${sitio.correo}`, destino: { correo: true } },
  ],
  secciones: [
    {
      tipo: 'contacto',
      id: 'details',
      etiqueta: 'Direct contact',
      titulo: 'Contact details',
      acento: 'Contact',
      intro: 'For a quick question, WhatsApp. For a formal proposal, email.',
      filas: [
        { termino: 'Where', valor: `Costa Rica · remote work and ${P.presencial}` },
        { termino: 'Time zone', valor: 'Central Standard Time all year (UTC-6)' },
      ],
    },
    {
      tipo: 'formulario',
      id: 'form',
      etiqueta: 'If you prefer to leave your details',
      titulo: 'Contact form',
      acento: 'form',
      intro: 'A person at Vion reads it. Nobody will send you automated messages.',
    },
    {
      tipo: 'pasos',
      id: 'what-happens-next',
      etiqueta: 'No commitment',
      titulo: 'What happens next',
      acento: 'next',
      pasos: [
        { titulo: 'We receive it', texto: 'Your message goes straight to Vion. Your details are used only to reply to you.' },
        { titulo: 'We reply', texto: `By email or WhatsApp, whichever you prefer, within ${P.plazoRespuesta}.` },
        { titulo: 'A short call', texto: 'If it makes sense to continue, a 20-minute call to understand the workflow and propose the assessment.' },
      ],
      nota: 'Before writing you can review [BIM and AutoCAD consulting](@consultoria), [AutoCAD automation](@autocad), [custom apps and their indicative prices](@apps) or [our own projects](@casos).',
    },
    {
      tipo: 'preguntas',
      id: 'questions',
      titulo: 'Frequently asked questions',
      acento: 'questions',
      preguntas,
    },
  ],
  og: { titulo: 'Let’s talk about your project', acento: 'project' },
  esquema: { tipo: 'ContactPage' },
};
