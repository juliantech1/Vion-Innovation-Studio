// Los videos y las imágenes de las láminas, aparte del texto: `medios.json` dice, por curso y por lámina («0.3»), dónde
// está cada pieza. Los videos NO van al repositorio (pesan y el repositorio es público): van por URL al lugar donde se
// alojen (ver PENDIENTES-JULIAN.md: YouTube no listado, Vimeo, Vercel Blob o Cloudflare R2/Stream). Las imágenes fijas
// livianas sí pueden ir en /public/cursos/<curso>/ (WebP o AVIF, menos de 300 kB cada una).
//
//   "motion": {
//     "0.2": { "video": "https://…/B1-L0-02.mp4", "poster": "/cursos/motion/L0-02.webp", "subtitulos": "https://…/B1-L0-02.vtt" },
//     "1.4": { "youtube": "dQw4w9WgXcQ", "poster": "/cursos/motion/L1-04.webp" },
//     "0.3": { "imagen": "/cursos/motion/L0-03.webp", "ancho": 1600, "alto": 900 }
//   }
//
// Un origen externo nuevo (el CDN de los videos) se suma solo a la CSP de next.config.ts, que lee este mismo archivo.
import datos from './medios.json';
import type { Curso, TipoApoyo } from '../tipos';

export interface Medio {
  /** Un MP4 (o WebM): ruta propia o URL absoluta. */
  video?: string;
  /** Un video de YouTube (id) o de Vimeo (id): se reproduce en un iframe recién cuando se pide. */
  youtube?: string;
  vimeo?: string;
  /** El cuadro que se ve antes de reproducir (WebP o AVIF). */
  poster?: string;
  /** Subtítulos WebVTT en castellano. */
  subtitulos?: string;
  /** Una imagen fija (imagen, diagrama o captura) con sus medidas. */
  imagen?: string;
  ancho?: number;
  alto?: number;
  /** El video ya está hecho pero todavía no está alojado (scripts/medios-cursos.py): cuenta como listo. */
  producido?: boolean;
}

const MEDIOS = datos as Record<string, Record<string, Medio>>;

export const medioDe = (curso: string, lamina: string): Medio | undefined => MEDIOS[curso]?.[lamina];

const ES_VIDEO: TipoApoyo[] = ['motion', 'grabacion', 'chispa'];
export const esVideo = (t: TipoApoyo) => ES_VIDEO.includes(t);

/** Cuántos videos prevé el curso y cuántos ya están cargados: el estado honesto de la producción. */
export function videosDe(c: Curso) {
  let total = 0, listos = 0;
  for (const l of c.es.contenido?.lecciones ?? []) {
    for (const x of l.laminas) {
      if (!esVideo(x.apoyo.tipo)) continue;
      total++;
      const m = medioDe(c.id, x.n);
      if (m && (m.video || m.youtube || m.vimeo || m.producido)) listos++;
    }
  }
  return { total, listos };
}
