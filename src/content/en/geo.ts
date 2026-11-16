import { rutaArticulo, rutaCurso } from '../rutas';
import { SLUGS_BLOG, SLUGS_CURSOS } from '../slugs';
import type { Pagina } from '../tipos';

// The GEO audit as a Vion service (Julian's decision, 2026-11-16): no published price, it is quoted. See es/geo.ts.
const descripcion =
  'Vion’s GEO audit checks whether ChatGPT, Perplexity and Google’s AI answers can read and cite your website, and gives you a plan. Ask for a quote.';

export const geo: Pagina = {
  id: 'geo',
  nav: 'GEO audit',
  titulo: 'GEO audit: get your site into AI answers | Vion',
  descripcion,
  palabrasClave: ['GEO audit', 'AI search engines', 'generative engine optimization'],
  indexar: true,
  etiqueta: 'GEO audit · quoted per site',
  h1: 'GEO audit: help AI search engines read and cite your website',
  acento: 'GEO',
  bajada:
    'We check whether ChatGPT, Perplexity, Claude and Google’s AI answers can read, understand and cite your website, and we deliver a prioritized plan to improve it.',
  resumen: {
    pregunta: 'What is a GEO audit?',
    texto: [
      'A GEO audit is a review of a website to find out whether AI search engines, such as ChatGPT, Perplexity, Claude and Google’s AI answers, can read it, understand it and cite it in their answers.',
      'Vion does it for companies that already have their own website and want to show up when their customers ask an AI.',
      'We review up to 10 key pages: whether AI crawlers are allowed in robots.txt, whether there is an llms.txt, which structured data (schema.org) describes the company, which passages can be quoted as they are, and whether the brand exists outside the site.',
      'Each of the six categories gets a score from 0 to 100 on a fixed rubric.',
      'You receive a report with the score per category, the findings ordered by severity and an action plan.',
      'Price and timeline are confirmed in the quote, after we look at the site. No report can guarantee that an AI will cite a website.',
    ].join(' '),
    ficha: [
      { termino: 'For', valor: 'Companies with their own website' },
      { termino: 'Scope', valor: 'Up to 10 key pages, in six categories' },
      { termino: 'Deliverables', valor: 'Report with a score per category; findings by severity; action plan' },
      { termino: 'Price', valor: 'Quoted after we look at the site' },
    ],
    enlaces: [
      '[AI, BIM and AutoCAD consulting](@consultoria)',
      '[Custom apps and software with AI](@apps)',
      `[Free course: SEO with AI agents](${rutaCurso(SLUGS_CURSOS['seo-agentes'].en, 'en')})`,
      `[Article: an AI agent team with human approval](${rutaArticulo(SLUGS_BLOG['agentes-con-aprobacion'].en, 'en')})`,
    ],
  },
  actualizado: '2026-11-16',
  acciones: [
    { texto: 'Ask for a quote on WhatsApp', destino: { whatsapp: 'Hi Vion. I would like a quote for a GEO audit of my website.' } },
    { texto: 'See what we review', destino: { pagina: 'geo', ancla: 'que-se-revisa' } },
  ],
  secciones: [
    {
      tipo: 'ficha',
      id: 'que-se-revisa',
      etiqueta: 'Six categories, weighted',
      titulo: 'What does a GEO audit review?',
      acento: 'GEO',
      intro: 'The final score is the weighted average of the six. It is a rubric to order the work, not a measurement of what each AI does.',
      filas: [
        { termino: 'Citability · 25%', valor: 'Whether there are passages an AI can quote as they are: direct definitions, short answers to real questions, data with its source.' },
        { termino: 'Brand and mentions · 20%', valor: 'Whether the company exists as an entity outside its own site: Wikipedia, Wikidata, profiles and mentions on other sites.' },
        { termino: 'Content and authorship · 20%', valor: 'Visible experience: named authors, dates, sources and depth of the writing.' },
        { termino: 'Technical base · 15%', valor: 'Content in the HTML, robots.txt that lets AI crawlers in, the sitemap and the llms.txt.' },
        { termino: 'Structured data · 10%', valor: 'The schema.org markup for the organization, its services, its FAQs and its articles.' },
        { termino: 'Platforms · 10%', valor: 'What each AI search engine needs: Google’s AI features, ChatGPT, Perplexity and Bing.' },
      ],
    },
    {
      tipo: 'pasos',
      id: 'como-se-trabaja',
      etiqueta: 'Method',
      titulo: 'How is the audit done?',
      acento: 'audit',
      pasos: [
        { titulo: 'Reading the site', texto: 'We read up to 10 key pages the way a search engine reads them: only what is public, with no server access or passwords.' },
        { titulo: 'Score per category', texto: 'Each category is scored from 0 to 100 on the same rubric, with the evidence for each finding in view.' },
        { titulo: 'Report and plan', texto: 'A report with the findings ordered by severity and an action plan: what to fix first and who does it.' },
        { titulo: 'Fixes, if you want them', texto: 'If we built the site or can work on its code, we apply the changes with a preview you approve before anything is published, and we measure again.' },
      ],
    },
    {
      tipo: 'texto',
      id: 'lo-que-no-promete',
      etiqueta: 'No promises',
      titulo: 'What does a GEO audit not promise?',
      acento: 'not promise',
      parrafos: [
        'No report can guarantee that ChatGPT, Perplexity or Google will cite a website, or a position in their answers: their models decide that.',
        'What an audit does is remove what keeps them from reading and understanding the site, and show what is missing for them to cite it.',
        'We do not invent anything to raise the score either: no reviews, no figures, no profiles that do not exist. What is missing, we ask you for.',
      ],
    },
    {
      tipo: 'preguntas',
      id: 'preguntas',
      titulo: 'Questions about the GEO audit',
      acento: 'GEO',
      preguntas: [
        {
          p: 'What is GEO?',
          r: 'GEO (generative engine optimization) is the work of preparing a website so that AI search engines, such as ChatGPT, Perplexity and Google’s AI answers, can read it, understand it and cite it in their answers.',
        },
        {
          p: 'How is GEO different from SEO?',
          r: 'SEO targets a search engine’s list of results; GEO targets the answers an AI writes. They share the technical base, but GEO also needs passages that stand on their own, structured data about the company and a brand presence outside the site.',
        },
        {
          p: 'Does the audit guarantee that an AI will cite my site?',
          r: 'No. Nobody can guarantee that: each search engine’s models decide. The audit removes what keeps them from reading the site and leaves a plan with what is missing for them to cite it.',
        },
        {
          p: 'What do you need to do the audit?',
          r: 'Only the website address. The audit reads what a search engine reads, so there is no need to give server access or passwords.',
        },
        {
          p: 'How much does a GEO audit cost?',
          r: 'It is quoted after we look at the site. Send us the website address on WhatsApp or by email and we reply with a proposal.',
        },
      ],
    },
  ],
  llamado: {
    titulo: 'Does your site show up when people ask an AI?',
    acento: 'AI',
    texto: 'Send us the website address and we reply with a quote for the GEO audit.',
    mensajeWhatsapp: 'Hi Vion. I would like a quote for a GEO audit of my website.',
  },
  og: { titulo: 'GEO audit for your website', acento: 'GEO' },
  esquema: {
    tipo: 'WebPage',
    servicio: {
      nombre: 'GEO audit',
      tipoDeServicio: 'GEO audit (generative engine optimization)',
      descripcion,
    },
  },
};
