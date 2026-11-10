import type { Idioma } from './tipos';

// Las direcciones de los artículos y de los cursos, por id y por idioma. Viven acá (y no con su texto) porque el
// selector de idioma y la lámina del pie, que corren en el navegador, las necesitan: así no cargan los artículos.
// Un artículo o un curso nuevo se suma acá y en su archivo; si falta acá, el build falla (ver blog/index.ts y cursos.ts).

export const SLUGS_BLOG: Record<string, Record<Idioma, string>> = {
  'iso-19650-nombres': { es: 'nombrar-archivos-iso-19650', en: 'iso-19650-file-naming' },
  'autocad-que-automatizar': { es: 'que-automatizar-primero-en-autocad', en: 'what-to-automate-first-in-autocad' },
  'agentes-con-aprobacion': { es: 'equipo-de-agentes-de-ia-con-aprobacion', en: 'ai-agent-team-with-human-approval' },
};

export const SLUGS_CURSOS: Record<string, Record<Idioma, string>> = {
  'claude-basico': { es: 'claude-basico-chat-cowork-code', en: 'claude-basics-chat-cowork-code' },
  'agentic-os': { es: 'agentic-os-equipo-de-agentes', en: 'build-your-agentic-os' },
  skills: { es: 'skills-propias-de-claude', en: 'build-your-own-claude-skills' },
  motion: { es: 'motion-design-con-claude', en: 'motion-design-with-claude' },
  'blender-3d': { es: 'videos-3d-con-blender-y-claude', en: '3d-videos-with-blender-and-claude' },
  'personaje-3d': { es: 'personaje-3d-que-habla', en: 'talking-3d-character' },
  'claude-autocad': { es: 'claude-autocad-planos-cantidades', en: 'claude-autocad-drawings-quantities' },
  cuantificacion: { es: 'cuantificacion-y-presupuestos-con-ia', en: 'quantity-takeoff-and-estimates-with-ai' },
  'seo-agentes': { es: 'seo-con-agentes', en: 'seo-with-ai-agents' },
  'sitio-claude-code': { es: 'sitio-web-con-claude-code', en: 'website-with-claude-code' },
};
