// Los cursos de IA de Vion (pedido de Julian del 2026-11-10; plan en la aldea: docs/planes/2026-11-10-cursos-vion.md, y
// un storyboard por curso en docs/planes/cursos/). Son gratis. Cada lección es una presentación de láminas con su texto,
// sus bloques copiables y su apoyo visual (videos cortos de motion, grabaciones editadas y Chispa explicando).
//
// Cada curso vive en su carpeta: `curso.ts` (la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción
// del final) y `lecciones.ts` (las lecciones con todas sus láminas). Los videos y las imágenes van aparte, en
// `medios.json` (curso → lámina → archivo o URL), para sumarlos sin tocar el texto.
//
// Publicar un curso: cuando sus videos estén alojados y cargados en medios.json, poner `estado: 'publicado'` y
// `publicado: 'AAAA-MM-DD'` acá. Con eso se construyen su página (/cursos/<slug>) y la de cada lección
// (/cursos/<slug>/<lección>), entran al sitemap, a llms.txt y a la lista de /cursos con enlace, y el curso lleva su
// JSON-LD `Course`. Mientras tanto, para revisarlos: construir con VION_BORRADORES=1 (salen con noindex).
import { SLUGS_CURSOS } from '../slugs';
import type { Curso, CursoIdioma, CursoTexto, Idioma, LeccionCurso, RutaCursos } from '../tipos';
import { curso as claudeBasico } from './claude-basico/curso';
import { lecciones as leccionesClaudeBasico } from './claude-basico/lecciones';
import { curso as agenticOs } from './agentic-os/curso';
import { lecciones as leccionesAgenticOs } from './agentic-os/lecciones';
import { curso as skills } from './skills/curso';
import { lecciones as leccionesSkills } from './skills/lecciones';
import { curso as motion } from './motion/curso';
import { lecciones as leccionesMotion } from './motion/lecciones';
import { curso as blender3d } from './blender-3d/curso';
import { lecciones as leccionesBlender3d } from './blender-3d/lecciones';
import { curso as personaje3d } from './personaje-3d/curso';
import { lecciones as leccionesPersonaje3d } from './personaje-3d/lecciones';
import { curso as claudeAutocad } from './claude-autocad/curso';
import { lecciones as leccionesClaudeAutocad } from './claude-autocad/lecciones';
import { curso as cuantificacion } from './cuantificacion/curso';
import { lecciones as leccionesCuantificacion } from './cuantificacion/lecciones';
import { curso as seoAgentes } from './seo-agentes/curso';
import { lecciones as leccionesSeoAgentes } from './seo-agentes/lecciones';
import { curso as sitioClaudeCode } from './sitio-claude-code/curso';
import { lecciones as leccionesSitioClaudeCode } from './sitio-claude-code/lecciones';

export const RUTAS_CURSOS: RutaCursos[] = [
  {
    letra: 'A',
    es: { nombre: 'Claude y agentes', texto: 'De la primera conversación con Claude a un equipo de agentes que trabaja con su aprobación, con skills propias.' },
    en: { nombre: 'Claude and agents', texto: 'From your first conversation with Claude to a team of agents that works with your approval, with your own skills.' },
  },
  {
    letra: 'B',
    es: { nombre: 'Video, motion y 3D con IA', texto: 'Animaciones, escenas 3D y un personaje que habla, hechos con código y con IA, del borrador al MP4.' },
    en: { nombre: 'Video, motion and 3D with AI', texto: 'Animations, 3D scenes and a talking character, made with code and AI, from draft to MP4.' },
  },
  {
    letra: 'C',
    es: { nombre: 'IA para ingeniería y arquitectura', texto: 'AutoCAD, planos, cantidades y presupuestos con IA, siempre con la revisión de una persona.' },
    en: { nombre: 'AI for engineering and architecture', texto: 'AutoCAD, drawings, quantities and estimates with AI, always reviewed by a person.' },
  },
  {
    letra: 'D',
    es: { nombre: 'IA para su negocio', texto: 'Su sitio web y su SEO con agentes, sin que nada se publique sin su visto bueno.' },
    en: { nombre: 'AI for your business', texto: 'Your website and your SEO with agents, with nothing published without your sign-off.' },
  },
];

interface Registro {
  id: string;
  codigo: string;
  ruta: Curso['ruta'];
  lleva: Curso['lleva'];
  estado: Curso['estado'];
  publicado?: string;
  texto: CursoTexto;
  lecciones: LeccionCurso[];
}

/** El orden es el de la página: por ruta, y dentro de cada ruta por código (A0, el de Claude básico, primero). */
const REGISTRO: Registro[] = [
  { id: 'claude-basico', codigo: 'A0', ruta: 'A', lleva: 'apps', estado: 'produccion', texto: claudeBasico, lecciones: leccionesClaudeBasico },
  { id: 'agentic-os', codigo: 'A2', ruta: 'A', lleva: 'apps', estado: 'produccion', texto: agenticOs, lecciones: leccionesAgenticOs },
  { id: 'skills', codigo: 'A3', ruta: 'A', lleva: 'apps', estado: 'produccion', texto: skills, lecciones: leccionesSkills },
  { id: 'motion', codigo: 'B1', ruta: 'B', lleva: 'apps', estado: 'produccion', texto: motion, lecciones: leccionesMotion },
  { id: 'blender-3d', codigo: 'B2', ruta: 'B', lleva: 'apps', estado: 'produccion', texto: blender3d, lecciones: leccionesBlender3d },
  { id: 'personaje-3d', codigo: 'B3', ruta: 'B', lleva: 'apps', estado: 'produccion', texto: personaje3d, lecciones: leccionesPersonaje3d },
  { id: 'claude-autocad', codigo: 'C1', ruta: 'C', lleva: 'consultoria', estado: 'produccion', texto: claudeAutocad, lecciones: leccionesClaudeAutocad },
  { id: 'cuantificacion', codigo: 'C2', ruta: 'C', lleva: 'autocad', estado: 'produccion', texto: cuantificacion, lecciones: leccionesCuantificacion },
  { id: 'seo-agentes', codigo: 'D1', ruta: 'D', lleva: 'apps', estado: 'produccion', texto: seoAgentes, lecciones: leccionesSeoAgentes },
  { id: 'sitio-claude-code', codigo: 'D2', ruta: 'D', lleva: 'apps', estado: 'produccion', texto: sitioClaudeCode, lecciones: leccionesSitioClaudeCode },
];

function armar(r: Registro): Curso {
  const s = SLUGS_CURSOS[r.id];
  if (!s) throw new Error(`El curso «${r.id}» no tiene sus direcciones en slugs.ts`);
  const { es, en } = r.texto;
  const { corto, titulo, subtitulo, tituloSeo, descripcion, paraQuien, seLleva, herramientas, ...resto } = es;
  const cursoEs: CursoIdioma = {
    slug: s.es, corto, titulo, subtitulo, tituloSeo, descripcion, paraQuien, seLleva, herramientas,
    lecciones: r.lecciones.map((l) => ({ titulo: l.titulo })),
    contenido: { ...resto, lecciones: r.lecciones },
  };
  if (en.lecciones.length !== r.lecciones.length) throw new Error(`El curso «${r.id}» no tiene en inglés los títulos de todas sus lecciones`);
  const cursoEn: CursoIdioma = {
    slug: s.en, corto: en.corto, titulo: en.titulo, subtitulo: en.subtitulo, tituloSeo: en.tituloSeo, descripcion: en.descripcion,
    paraQuien: en.paraQuien, seLleva: en.seLleva, herramientas: en.herramientas,
    lecciones: en.lecciones.map((titulo) => ({ titulo })),
  };
  return { id: r.id, codigo: r.codigo, ruta: r.ruta, estado: r.estado, publicado: r.publicado, lleva: r.lleva, es: cursoEs, en: cursoEn };
}

export const CURSOS: Curso[] = REGISTRO.map(armar);

/** ¿Se construyen los cursos en producción para revisarlos? Solo con VION_BORRADORES=1 al construir; nunca en Vercel. */
export const CON_BORRADORES = process.env.VION_BORRADORES === '1' && !process.env.VERCEL;

/** Lo que se indexa: un curso marcado como publicado. */
export const cursoIndexable = (c: Curso) => c.estado === 'publicado';
/** Un curso tiene páginas (la suya y las de sus lecciones) si está publicado, o si se construye para revisarlo. */
export const cursoConPagina = (c: Curso) => cursoIndexable(c) || CON_BORRADORES;
/** Las lecciones de un curso en un idioma (vacío si ese idioma todavía no tiene el contenido). */
export const leccionesDe = (c: Curso, idioma: Idioma) => c[idioma].contenido?.lecciones ?? [];
/** Lo que aparece en las listas del sitio: todos los cursos, en su orden. */
export const cursosVisibles = () => CURSOS;
export const cursoPorSlug = (idioma: Idioma, slug: string) => CURSOS.find((c) => c[idioma].slug === slug && cursoConPagina(c));
export const leccionPorSlug = (c: Curso, idioma: Idioma, slug: string) => leccionesDe(c, idioma).find((l) => l.slug === slug);
export const rutaCursos = (letra: Curso['ruta']) => RUTAS_CURSOS.find((r) => r.letra === letra)!;
