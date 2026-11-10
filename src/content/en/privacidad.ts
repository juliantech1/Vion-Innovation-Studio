import { P } from '../pendientes';
import { sitio } from '../sitio';
import type { Pagina } from '../tipos';

// DRAFT pending legal review (Costa Rica's Law 8968 and its regulations): translation of the Spanish notice.
// Not indexed and not in the sitemap until a lawyer approves it (PENDIENTES-JULIAN.md).
const correo = `[${sitio.correo}](mailto:${sitio.correo})`;

export const privacidad: Pagina = {
  id: 'privacidad',
  nav: 'Privacy notice',
  titulo: 'Privacy notice and personal data | Vion',
  descripcion:
    'How Vion handles the personal data it receives through its website, under Law 8968 on personal data protection in Costa Rica.',
  palabrasClave: [],
  indexar: false,
  etiqueta: 'Draft · Law 8968',
  h1: 'Privacy notice',
  acento: 'Privacy',
  bajada:
    'Draft pending legal review. Vion will complete the items shown in double braces before publishing. This notice explains which personal data Vion receives through vion-studio.com, what it is used for and how you can exercise your rights under Costa Rica’s Law 8968 (Protection of the Person regarding the Processing of Personal Data) and its regulations.',
  secciones: [
    {
      tipo: 'texto',
      id: 'controller',
      titulo: 'Who is responsible',
      parrafos: [
        `The party responsible for the database is ${P.razonSocial}, with its address at ${P.domicilio}, Costa Rica. Email for anything related to your data: ${correo}.`,
      ],
    },
    {
      tipo: 'texto',
      id: 'data',
      titulo: 'What data we receive',
      parrafos: ['Only what you write in the [contact form](@contacto#form):'],
      lista: [
        'name;',
        'email or WhatsApp number;',
        'company (optional);',
        'the service you are interested in and your message (optional);',
        'if you arrived from an ad or a tagged link, the source of that link (UTM parameters).',
      ],
      cierre: [
        'Your name and a way to contact you are required so we can reply; without them we cannot handle your request. Please do not include sensitive data in the message.',
      ],
    },
    {
      tipo: 'texto',
      id: 'use',
      titulo: 'What we use it for',
      parrafos: [
        'To answer your request, prepare a proposal if you ask for one and follow up on that conversation. We do not sell your data, we do not share it with third parties for advertising and we do not send you automated messages.',
      ],
    },
    {
      tipo: 'texto',
      id: 'storage',
      titulo: 'Where it is stored and who sees it',
      parrafos: [
        `The site is hosted on Vercel, which processes the form submission on servers outside Costa Rica: ${P.regionVercel}. The message is stored in Vion’s internal system, in Costa Rica, and only the people at Vion who handle your request can see it. We keep it for ${P.conservacion} or until you ask us to delete it.`,
      ],
    },
    {
      tipo: 'texto',
      id: 'rights',
      titulo: 'Your rights',
      parrafos: ['At any time you can ask for:'],
      lista: [
        'access to the data we hold about you;',
        'corrections or updates;',
        'deletion;',
        'withdrawal of your consent.',
      ],
      cierre: [
        `Write to ${correo} with your name and what you need. We reply within ${P.plazoLegal}. If you believe we did not handle your request, you can go to Costa Rica’s data protection agency (Agencia de Protección de Datos de los Habitantes, PRODHAB).`,
      ],
    },
    {
      tipo: 'texto',
      id: 'cookies',
      titulo: 'Cookies and analytics',
      parrafos: [
        'This site does not use its own cookies or any analytics or advertising tools. If that changes, we will say so here first.',
      ],
    },
    {
      tipo: 'texto',
      id: 'changes',
      titulo: 'Changes to this notice',
      parrafos: [
        `If the way we handle your data changes, we will update this notice and its date. Last updated: ${P.fechaAviso}.`,
      ],
    },
  ],
  og: { titulo: 'Privacy notice', acento: 'Privacy' },
  esquema: { tipo: 'WebPage' },
};
