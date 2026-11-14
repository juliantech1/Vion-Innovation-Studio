import type { Apoyo as DatosApoyo, Idioma, Medio, TipoApoyo } from '@/content';
import { piezasDe } from '@/content';
import { esVideo } from '@/content/cursos/medios';
import { VideoLamina } from './VideoLamina';

/** Un dibujo de línea por tipo de apoyo (para el marco del que todavía está en producción). */
function Glifo({ tipo }: { tipo: TipoApoyo }) {
  const d: Record<TipoApoyo, string> = {
    motion: 'M6 30 C 22 4, 42 52, 58 18 M50 14 L58 18 L56 27 M24 26 l10 6 -10 6z',
    grabacion: 'M6 10 H58 V44 H6 Z M6 17 H58 M11 13.5 h.01 M16 13.5 h.01 M14 26 l6 4 -6 4 M24 34 h12 M26 52 h12 M32 44 v8',
    chispa: 'M8 12 H56 V40 H30 L20 50 V40 H8 Z M18 22 H46 M18 30 H38',
    captura: 'M8 14 V8 H14 M50 8 H56 V14 M56 42 V48 H50 M14 48 H8 V42 M16 18 H48 V38 H16 Z M16 24 H48',
    diagrama: 'M10 10 H26 V22 H10 Z M38 34 H54 V46 H38 Z M38 10 H54 V22 H38 Z M26 16 H38 M46 22 V34 M18 22 V40 H38',
    imagen: 'M8 10 H56 V46 H8 Z M8 38 L24 26 L34 34 L42 28 L56 40 M42 20 a3 3 0 1 0 .01 0',
  };
  return (
    <svg className="apoyo__glifo" viewBox="0 0 64 56" aria-hidden="true">
      <path d={d[tipo]} />
    </svg>
  );
}

/**
 * El apoyo visual de una lámina. Si el archivo existe (medios.json): la imagen, con su descripción como texto
 * alternativo, o el video con carga diferida, subtítulos y su transcripción. Si todavía no existe: un marco con el dibujo
 * del tipo de apoyo. La descripción de lo que se ve (`seVe`) nunca se muestra: es de producción y solo queda para los
 * lectores de pantalla. El título y el cuerpo de la lámina tienen que explicar el paso por sí solos.
 */
export function Apoyo({ a, m, titulo, idioma }: { a: DatosApoyo; m?: Medio; titulo: string; idioma: Idioma }) {
  const t = piezasDe(idioma).cursos.leccionUi;
  const video = esVideo(a.tipo);
  const hayVideo = video && m && (m.video || m.youtube || m.vimeo);
  const hayImagen = !video && m?.imagen;
  const descripcion = a.seVe?.replace(/[`*]/g, '');
  return (
    <figure className={`apoyo apoyo--${a.tipo}${hayVideo || hayImagen ? '' : ' apoyo--pendiente'}`}>
      {hayVideo ? (
        <VideoLamina m={m} titulo={titulo} mudo={!a.dice} reproducir={t.reproducir} />
      ) : hayImagen ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="apoyo__img" src={m.imagen} alt={descripcion ?? titulo} width={m.ancho ?? 1600} height={m.alto ?? 900} loading="lazy" decoding="async" />
      ) : (
        <div className="apoyo__marco">
          <Glifo tipo={a.tipo} />
        </div>
      )}
      {!hayImagen && descripcion && <figcaption className="solo-lectores">{descripcion}</figcaption>}
      {a.dice && (
        <details className="apoyo__dice">
          <summary className="rotulo">{hayVideo ? t.transcripcion : a.vozEnOff ? t.vozEnOff : t.dice}</summary>
          <p lang={idioma === 'es' ? undefined : 'es'}>«{a.dice}»</p>
        </details>
      )}
    </figure>
  );
}
