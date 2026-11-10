import type { Pagina } from '../tipos';

export const cursos: Pagina = {
  id: 'cursos',
  nav: 'Courses',
  titulo: 'Free AI courses: agents, video and AutoCAD | Vion',
  descripcion:
    'Free artificial intelligence courses from Vion, with videos and materials: agents, motion, 3D and AutoCAD for engineering. In production today.',
  palabrasClave: ['AI courses for architecture and engineering'],
  indexar: true,
  etiqueta: 'Courses · free · in production',
  h1: 'Free AI courses, built on what Vion already does',
  acento: 'Free',
  bajada:
    'We are going to publish free artificial intelligence courses, with videos and materials, made in Costa Rica. We only teach what we have already built and use every day. There are eleven courses in four tracks, and all of them are in production today.',
  acciones: [
    { texto: 'Notify me on WhatsApp', destino: { whatsapp: 'Hi Vion. Please let me know when you publish the first course.' } },
    { texto: 'See the courses', destino: { pagina: 'cursos', ancla: 'cursos' } },
  ],
  secciones: [
    {
      tipo: 'texto',
      id: 'cursos',
      etiqueta: 'Eleven courses, four tracks',
      titulo: 'The courses we are recording',
      acento: 'recording',
      intro:
        'None is published yet. Here are all eleven, grouped by track and starting with Claude basics, with their planned lessons and how many of their videos are ready. When one comes out, it gets its own page with every lesson.',
      parrafos: [],
    },
    {
      tipo: 'texto',
      id: 'rutas',
      etiqueta: 'Four tracks',
      titulo: 'Four tracks, one standard',
      acento: 'tracks',
      intro: 'The courses are organized into four tracks. Each one comes from something Vion already does for clients or in its own system.',
      parrafos: [],
    },
    {
      tipo: 'texto',
      id: 'como-son',
      etiqueta: 'What they will be like',
      titulo: 'Actually free, with the costs spelled out',
      acento: 'free',
      parrafos: [
        'Every lesson is a slide deck you go through at your own pace: the text explains the step, commands and prompts for Claude copy with one button, and every slide has its visual: a screenshot, a diagram, a short motion or screen video, or Chispa, our character, explaining the hard part. Everything is covered, from what to download and how to connect it to the repos and skills we use.',
        'The videos and materials for every course will be free. What can cost money are some of the tools: Claude Code requires a paid Anthropic plan and AutoCAD needs an Autodesk license. Every course says so before the first lesson, so nobody finds out halfway through.',
        'We teach the craft, not just the tool: every course ends in something you can use, such as an on-brand animation, an agent system with an approval queue, or a quantity table pulled from a drawing. The AI courses for architecture and engineering always include a person reviewing the work before anything reaches a site or a client.',
        'In the meantime, [the blog](@blog) covers the same ground: ISO 19650, AutoCAD and AI agents with human approval.',
      ],
    },
    {
      tipo: 'preguntas',
      id: 'preguntas',
      titulo: 'Questions about the courses',
      acento: 'courses',
      preguntas: [
        {
          p: 'Are Vion’s courses free?',
          r: 'Yes. The videos and materials for every course will be free. Some tools used in the courses do cost money, such as Claude Code or AutoCAD, and each course says so before you start.',
        },
        {
          p: 'When does the first course come out?',
          r: 'We do not have a date yet. All eleven are in production. If you message us on WhatsApp or through the form, we will let you know when the one you want is out.',
        },
        {
          p: 'What do I need to know to take them?',
          r: 'It depends on the course: each one says who it is for. None requires coding; the AutoCAD course assumes you know AutoCAD.',
        },
        {
          p: 'Who teaches the courses?',
          r: 'Vion, the AI studio from Costa Rica. Every course teaches something we have already done: the agent system we run on, the videos we produce or the AutoCAD automation we offer engineering and architecture firms.',
        },
      ],
    },
  ],
  llamado: {
    titulo: 'Which course do you want first?',
    acento: 'first',
    texto: 'Tell us which one would help you most. It helps us plan production, and we will let you know when it is out.',
    mensajeWhatsapp: 'Hi Vion. The course I am most interested in is:',
  },
  og: { titulo: 'Free AI courses', acento: 'Free' },
  esquema: { tipo: 'CollectionPage' },
};
