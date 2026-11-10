import type { Apoyo as DatosApoyo, Idioma, Medio, TipoApoyo } from '@/content';
import { piezasDe } from '@/content';
import { esVideo } from '@/content/cursos/medios';
import { Linea } from './Md';
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
 * alternativo, o el video con carga diferida, subtítulos y su transcripción. Si todavía no existe: un marco con el tipo
 * de apoyo, la leyenda «en producción» y la descripción de lo que se va a ver, para que la lámina se entienda sin él.
 */
export function Apoyo({ a, m, n, titulo, idioma }: { a: DatosApoyo; m?: Medio; n: string; titulo: string; idioma: Idioma }) {
  const t = piezasDe(idioma).cursos.leccionUi;
  const video = esVideo(a.tipo);
  const tipo = `${t.apoyo[a.tipo]}${a.conChispa && a.tipo !== 'chispa' ? ` ${t.conChispa}` : ''}`;
  const duracion = video && a.segundos ? ` · ${a.segundos} ${t.segundos}` : '';
  const hayVideo = video && m && (m.video || m.youtube || m.vimeo);
  const hayImagen = !video && m?.imagen;
  return (
    <figure className={`apoyo apoyo--${a.tipo}${hayVideo || hayImagen ? '' : ' apoyo--pendiente'}`}>
      {hayVideo ? (
        <VideoLamina m={m} titulo={`${titulo} (${tipo})`} mudo={!a.dice} reproducir={t.reproducir} />
      ) : hayImagen ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="apoyo__img" src={m.imagen} alt={(a.seVe ?? titulo).replace(/[`*]/g, '')} width={m.ancho ?? 1600} height={m.alto ?? 900} loading="lazy" decoding="async" />
      ) : (
        <div className="apoyo__marco">
          <Glifo tipo={a.tipo} />
          <p className="apoyo__tipo">{tipo}{duracion}</p>
          <p className="estado">{video ? t.videoEnProduccion : t.imagenEnProduccion}</p>
        </div>
      )}
      <figcaption>
        <span className="rotulo">{t.lamina} {n} · {tipo}{duracion}</span>
        {!hayImagen && a.seVe && <span className="apoyo__ve"><Linea s={a.seVe} idioma={idioma} /></span>}
      </figcaption>
      {a.dice && (
        <details className="apoyo__dice" open={!hayVideo}>
          <summary className="rotulo">{hayVideo ? t.transcripcion : a.vozEnOff ? t.vozEnOff : t.dice}</summary>
          <p lang={idioma === 'es' ? undefined : 'es'}>«{a.dice}»</p>
        </details>
      )}
    </figure>
  );
}
