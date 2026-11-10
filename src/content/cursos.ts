// Los cursos de IA de Vion (pedido de Julian del 2026-11-10; plan en la aldea: docs/planes/2026-11-10-cursos-vion.md).
// Van a ser gratis, con videos y material. Hoy ninguno está publicado: los cinco primeros están «En producción» y la
// página lo dice así, sin fechas ni promesas. Solo se enseña lo que Vion ya hizo.
//
// Cómo se publica un curso: se cargan sus lecciones con `video` (y `minutos`, `material`), su `tituloSeo` y su
// `descripcion` en los dos idiomas, `estado: 'publicado'` y `publicado: 'AAAA-MM-DD'`. Con eso sale su página
// (/cursos/<slug>), entra al sitemap, a llms.txt y a la lista de /cursos con enlace, y lleva su JSON-LD `Course`.
import { SLUGS_CURSOS } from './slugs';
import type { Curso, CursoIdioma, Idioma, RutaCursos } from './tipos';

export const RUTAS_CURSOS: RutaCursos[] = [
  {
    letra: 'A',
    es: { nombre: 'Agentes y Claude Code', texto: 'Sistemas de agentes que trabajan con su aprobación, skills propias y Claude Code en el trabajo de todos los días.' },
    en: { nombre: 'Agents and Claude Code', texto: 'Agent systems that work with your approval, your own skills, and Claude Code in everyday work.' },
  },
  {
    letra: 'B',
    es: { nombre: 'Video, motion y 3D con IA', texto: 'Animaciones, escenas 3D y videos hechos con código y con IA, del borrador al MP4.' },
    en: { nombre: 'Video, motion and 3D with AI', texto: 'Animations, 3D scenes and videos made with code and AI, from draft to MP4.' },
  },
  {
    letra: 'C',
    es: { nombre: 'IA para ingeniería y arquitectura', texto: 'AutoCAD, planos, cantidades y reportes con IA, siempre con la revisión de una persona.' },
    en: { nombre: 'AI for engineering and architecture', texto: 'AutoCAD, drawings, quantities and reports with AI, always reviewed by a person.' },
  },
  {
    letra: 'D',
    es: { nombre: 'IA para su negocio', texto: 'SEO, sitios, contenido y procesos de oficina con agentes, sin que nada salga sin su visto bueno.' },
    en: { nombre: 'AI for your business', texto: 'SEO, websites, content and office work with agents, with nothing going out without your sign-off.' },
  },
];

type SinSlug = Omit<CursoIdioma, 'slug'>;
type CursoFuente = Omit<Curso, 'es' | 'en'> & { es: SinSlug; en: SinSlug };

const lecciones = (titulos: string[]) => titulos.map((titulo) => ({ titulo }));

const FUENTE: CursoFuente[] = [
  {
    id: 'motion',
    ruta: 'B',
    estado: 'produccion',
    lleva: 'apps',
    es: {
      corto: 'Motion',
      titulo: 'Motion design con Claude',
      tituloSeo: 'Curso gratis: motion design con Claude | Vion',
      descripcion: 'Curso gratis de Vion: animaciones propias en MP4 pidiéndolas en palabras a Claude, con su marca, sin After Effects. En producción.',
      paraQuien: 'Creadores, agencias chicas y dueños de negocio que no usan After Effects.',
      seLleva: 'Tres animaciones propias en MP4, con su marca: un título, un explicador con pasos y una tarjeta de oferta.',
      herramientas: 'Claude Code (pide un plan pago de Anthropic).',
      lecciones: lecciones([
        'Pide una animación y recibe código que se mueve',
        'El prompt de estilo: su guía de marca en texto',
        'Del HTML al MP4',
        'Remotion: cuando quiere repetirlo',
        'Plantillas que se reusan',
        'Ritmo y sonido',
        'Un explicador completo',
      ]),
    },
    en: {
      corto: 'Motion',
      titulo: 'Motion design with Claude',
      tituloSeo: 'Free course: motion design with Claude | Vion',
      descripcion: 'A free Vion course: make your own on-brand MP4 animations by describing them to Claude, no After Effects needed. In production.',
      paraQuien: 'Creators, small agencies and business owners who do not use After Effects.',
      seLleva: 'Three on-brand MP4 animations of your own: a title, a step-by-step explainer and an offer card.',
      herramientas: 'Claude Code (requires a paid Anthropic plan).',
      lecciones: lecciones([
        'Ask for an animation, get code that moves',
        'The style prompt: your brand guide in words',
        'From HTML to MP4',
        'Remotion: when you want to repeat it',
        'Templates you can reuse',
        'Rhythm and sound',
        'A complete explainer',
      ]),
    },
  },
  {
    id: 'agentic-os',
    ruta: 'A',
    estado: 'produccion',
    lleva: 'apps',
    es: {
      corto: 'Agentic OS',
      titulo: 'Su agentic OS: un equipo de agentes que trabaja para usted',
      subtitulo: 'Agentic OS',
      tituloSeo: 'Curso gratis: su agentic OS con Claude Code | Vion',
      descripcion: 'Curso gratis de Vion: arme en Claude Code un equipo de agentes con cola de aprobación, tope de gasto y memoria. En producción.',
      paraQuien: 'Dueños de pymes, independientes y equipos chicos que ya usan Claude.',
      seLleva: 'Su propio sistema en Claude Code: tres agentes con una función cada uno, una cola de aprobación, un tope de gasto, memoria y un aviso al teléfono.',
      herramientas: 'Claude Code (pide un plan pago de Anthropic).',
      lecciones: lecciones([
        'Qué es un agentic OS (y por qué no es un chatbot)',
        'Un agente: una función, un nombre y sus reglas',
        'La cola de aprobación: nada sale sin usted',
        'Topes de gasto para que la cuenta no sorprenda',
        'La memoria: qué recuerda y dónde',
        'El orquestador: se le pide en palabras y él reparte',
        'Que le avise al teléfono',
        'Que aprenda de sus «sí» y sus «no»',
      ]),
    },
    en: {
      corto: 'Agentic OS',
      titulo: 'Your agentic OS: a team of agents that works for you',
      subtitulo: 'Agentic OS',
      tituloSeo: 'Free course: build your agentic OS | Vion',
      descripcion: 'A free Vion course: build a team of agents in Claude Code with an approval queue, a spending cap and memory. In production.',
      paraQuien: 'Small business owners, freelancers and small teams who already use Claude.',
      seLleva: 'Your own system in Claude Code: three agents with one job each, an approval queue, a spending cap, memory and an alert on your phone.',
      herramientas: 'Claude Code (requires a paid Anthropic plan).',
      lecciones: lecciones([
        'What an agentic OS is (and why it is not a chatbot)',
        'One agent: one job, one name and its rules',
        'The approval queue: nothing goes out without you',
        'Spending caps so the bill never surprises you',
        'Memory: what it remembers and where',
        'The orchestrator: you ask in plain words, it assigns',
        'Alerts on your phone',
        'Learning from your yes and your no',
      ]),
    },
  },
  {
    id: 'claude-autocad',
    ruta: 'C',
    estado: 'produccion',
    lleva: 'consultoria',
    es: {
      corto: 'AutoCAD',
      titulo: 'Claude + AutoCAD: planos, cantidades y reportes',
      tituloSeo: 'Curso gratis: Claude + AutoCAD, planos y cantidades',
      descripcion: 'Curso gratis de Vion: conecte Claude Code a AutoCAD, lea un plano, pase las cantidades a Excel y arme el reporte. En producción.',
      paraQuien: 'Oficinas de ingeniería y arquitectura, dibujantes y técnicos que trabajan en AutoCAD.',
      seLleva: 'Claude Code conectado a su AutoCAD, la lectura de un DWG, una tabla de cantidades en Excel y un reporte en PDF.',
      herramientas: 'AutoCAD en Windows (licencia de Autodesk) y Claude Code (plan pago de Anthropic).',
      lecciones: lecciones([
        'Qué hace (y qué no) la IA en AutoCAD',
        'Conectar Claude Code por MCP',
        'Leer un plano: capas, bloques y atributos',
        'Cantidades a Excel',
        'Validar las cantidades (nunca a ciegas)',
        'El diagnóstico en PDF para el cliente',
        'Rutinas que se repiten',
      ]),
    },
    en: {
      corto: 'AutoCAD',
      titulo: 'Claude + AutoCAD: drawings, quantities and reports',
      tituloSeo: 'Free course: Claude + AutoCAD drawings and quantities',
      descripcion: 'A free Vion course: connect Claude Code to AutoCAD, read a drawing, send quantities to Excel and build the report. In production.',
      paraQuien: 'Engineering and architecture offices, drafters and technicians who work in AutoCAD.',
      seLleva: 'Claude Code connected to your AutoCAD, a DWG read end to end, a quantity table in Excel and a PDF report.',
      herramientas: 'AutoCAD on Windows (Autodesk license) and Claude Code (paid Anthropic plan).',
      lecciones: lecciones([
        'What AI does (and does not do) in AutoCAD',
        'Connecting Claude Code through MCP',
        'Reading a drawing: layers, blocks and attributes',
        'Quantities to Excel',
        'Checking the quantities (never blindly)',
        'The PDF assessment for the client',
        'Routines that repeat',
      ]),
    },
  },
  {
    id: 'blender-3d',
    ruta: 'B',
    estado: 'produccion',
    lleva: 'apps',
    es: {
      corto: 'Blender 3D',
      titulo: 'Videos 3D con Blender y Claude (sin saber Blender)',
      tituloSeo: 'Curso gratis: videos 3D con Blender y Claude | Vion',
      descripcion: 'Curso gratis de Vion: una escena 3D desde una frase, animada y llevada a video con Blender y Claude, sin saber Blender. En producción.',
      paraQuien: 'Creadores y estudios que quieren 3D sin aprender Blender a fondo.',
      seLleva: 'Una escena 3D hecha desde un texto, animada y llevada a video.',
      herramientas: 'Blender (gratis) y Claude Code (plan pago de Anthropic).',
      lecciones: lecciones([
        'Blender por código: Claude escribe, Blender dibuja',
        'Una escena desde una frase',
        'Cámara y tomas',
        'Luz y materiales sin sufrir',
        'Render en su GPU sin recalentarla',
        'Editar toma por toma',
        'Del borrador al video',
      ]),
    },
    en: {
      corto: 'Blender 3D',
      titulo: '3D videos with Blender and Claude (no Blender skills needed)',
      tituloSeo: 'Free course: 3D videos with Blender and Claude | Vion',
      descripcion: 'A free Vion course: a 3D scene from one sentence, animated and rendered to video with Blender and Claude. In production.',
      paraQuien: 'Creators and studios who want 3D without learning Blender in depth.',
      seLleva: 'A 3D scene made from text, animated and rendered to video.',
      herramientas: 'Blender (free) and Claude Code (paid Anthropic plan).',
      lecciones: lecciones([
        'Blender through code: Claude writes, Blender draws',
        'A scene from one sentence',
        'Camera and shots',
        'Light and materials without the pain',
        'Rendering on your GPU without overheating it',
        'Editing shot by shot',
        'From draft to video',
      ]),
    },
  },
  {
    id: 'skills',
    ruta: 'A',
    estado: 'produccion',
    lleva: 'apps',
    es: {
      corto: 'Skills',
      titulo: 'Cree sus propias skills de Claude',
      subtitulo: 'Claude skills',
      tituloSeo: 'Curso gratis: cree sus propias skills de Claude | Vion',
      descripcion: 'Curso gratis de Vion: escriba sus propias skills de Claude y aprenda a revisar las de terceros antes de instalarlas. En producción.',
      paraQuien: 'Quien ya usa Claude y repite las mismas instrucciones una y otra vez.',
      seLleva: 'Dos skills propias funcionando y una forma de revisar las de terceros antes de instalarlas.',
      herramientas: 'Claude o Claude Code (plan pago de Anthropic).',
      lecciones: lecciones([
        'Qué es una skill (y qué no)',
        'Escribir un método, no una plantilla',
        'Su primera skill en 15 minutos',
        'Skills con scripts',
        'Revisar una skill ajena antes de instalarla',
        'Su biblioteca, con versiones',
      ]),
    },
    en: {
      corto: 'Skills',
      titulo: 'Build your own Claude skills',
      subtitulo: 'Claude skills',
      tituloSeo: 'Free course: build your own Claude skills | Vion',
      descripcion: 'A free Vion course: write your own Claude skills and learn to review third-party skills before you install them. In production.',
      paraQuien: 'Anyone who already uses Claude and keeps repeating the same instructions.',
      seLleva: 'Two working skills of your own and a way to review third-party skills before installing them.',
      herramientas: 'Claude or Claude Code (paid Anthropic plan).',
      lecciones: lecciones([
        'What a skill is (and is not)',
        'Write a method, not a template',
        'Your first skill in 15 minutes',
        'Skills with scripts',
        'Reviewing someone else’s skill before installing it',
        'Your library, with versions',
      ]),
    },
  },
  {
    // El curso de ejemplo: sirve para construir y probar la plantilla de /cursos/<slug>. Es un borrador y NO se
    // publica (ni ruta, ni sitemap, ni listas). Sus «videos» apuntan a un archivo que no existe a propósito: la
    // plantilla muestra el lugar del video con su póster y el aviso de borrador.
    id: 'ejemplo',
    ruta: 'B',
    estado: 'publicado',
    borrador: true,
    publicado: '2026-11-10',
    lleva: 'apps',
    es: {
      corto: 'Ejemplo',
      titulo: 'Curso de ejemplo para revisar la plantilla',
      tituloSeo: 'Curso de ejemplo: plantilla de un curso | Vion',
      descripcion: 'Borrador interno para revisar cómo se ve la página de un curso publicado de Vion: lecciones, videos y material. No se publica.',
      paraQuien: 'Nadie todavía: es la página de prueba de la plantilla.',
      seLleva: 'La forma de una página de curso: lecciones con su video, minutos y material.',
      herramientas: 'Ninguna.',
      lecciones: [
        { titulo: 'Una lección con su video', minutos: 6, video: { mp4: '/cursos/ejemplo/leccion-1.mp4', poster: '/marca/vion-logo.png', subidoEl: '2026-11-10' }, material: [{ texto: 'Plantilla de ejemplo (PDF)', href: '/cursos/ejemplo/material.pdf' }] },
        { titulo: 'Otra lección, todavía sin video' },
      ],
    },
    en: {
      corto: 'Sample',
      titulo: 'Sample course to review the template',
      tituloSeo: 'Sample course: the course page template | Vion',
      descripcion: 'An internal draft to review how a published Vion course page looks: lessons, videos and materials. It is never published.',
      paraQuien: 'Nobody yet: this is the template test page.',
      seLleva: 'The shape of a course page: lessons with their video, minutes and materials.',
      herramientas: 'None.',
      lecciones: [
        { titulo: 'A lesson with its video', minutos: 6, video: { mp4: '/cursos/ejemplo/leccion-1.mp4', poster: '/marca/vion-logo.png', subidoEl: '2026-11-10' }, material: [{ texto: 'Sample template (PDF)', href: '/cursos/ejemplo/material.pdf' }] },
        { titulo: 'Another lesson, no video yet' },
      ],
    },
  },
];

export const CURSOS: Curso[] = FUENTE.map((c) => {
  const s = SLUGS_CURSOS[c.id];
  if (!s) throw new Error(`El curso «${c.id}» no tiene sus direcciones en slugs.ts`);
  return { ...c, es: { ...c.es, slug: s.es }, en: { ...c.en, slug: s.en } };
});

/** ¿Se construyen los borradores? Solo para revisar la plantilla (VION_BORRADORES=1 al construir); nunca en Vercel. */
export const CON_BORRADORES = process.env.VION_BORRADORES === '1' && !process.env.VERCEL;

/** Un curso tiene página propia si está publicado (o si es un borrador y se construye para revisar la plantilla). */
export const cursoConPagina = (c: Curso) => c.estado === 'publicado' && (!c.borrador || CON_BORRADORES);
/** Lo que se indexa: publicado y no borrador. */
export const cursoIndexable = (c: Curso) => c.estado === 'publicado' && !c.borrador;
/** Lo que aparece en las listas del sitio: todo menos los borradores. */
export const cursosVisibles = () => CURSOS.filter((c) => !c.borrador);
export const cursoPorSlug = (idioma: Idioma, slug: string) => CURSOS.find((c) => c[idioma].slug === slug && cursoConPagina(c));
export const rutaCursos = (letra: Curso['ruta']) => RUTAS_CURSOS.find((r) => r.letra === letra)!;
