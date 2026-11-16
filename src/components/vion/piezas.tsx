// Las piezas base del sistema (ver DISENO.md). Todas son componentes de servidor: HTML y CSS, sin JavaScript.
import Link from 'next/link';
import type { ReactNode } from 'react';
import { enlaceWhatsapp, piezasDe, ruta, sitio, type Accion, type Resumen as DatosResumen, type Idioma, type Pregunta as DatosPregunta } from '@/content';
import { Acentuado, Texto } from '@/components/sitio/Texto';
import { fechaLarga } from '@/components/paginas/fechas';

/** La flecha doble de los botones y paneles: una sale, la otra entra. */
export function Flecha({ diagonal }: { diagonal?: boolean }) {
  const d = diagonal ? 'M4 12l8-8M5.5 4H12v6.5' : 'M2.5 8h10.5M9 4l4 4-4 4';
  const svg = (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={diagonal ? 1.25 : 1.5} focusable="false">
      <path d={d} />
    </svg>
  );
  return (
    <>
      {svg}
      {svg}
    </>
  );
}

type Variante = 'principal' | 'linea';
/** Botón: `principal` (rojo, uno por pantalla) o `linea`. Lleva a una página, a WhatsApp con el mensaje escrito o al correo. */
export function Boton({ accion, idioma, variante = 'principal', chico, flecha }: { accion: Accion; idioma: Idioma; variante?: Variante; chico?: boolean; flecha?: boolean }) {
  const clase = ['boton', variante === 'linea' && 'boton--linea', chico && 'boton--chico'].filter(Boolean).join(' ');
  const dentro = (
    <>
      {accion.texto}
      {flecha && (
        <span className="boton__flecha" aria-hidden="true">
          <Flecha />
        </span>
      )}
    </>
  );
  const d = accion.destino;
  if ('pagina' in d) return <Link className={clase} href={ruta(d.pagina, idioma, d.ancla)}>{dentro}</Link>;
  return (
    <a className={clase} href={'whatsapp' in d ? enlaceWhatsapp(d.whatsapp) : `mailto:${sitio.correo}`} rel={'whatsapp' in d ? 'noopener' : undefined}>
      {dentro}
    </a>
  );
}

/** Titular de sección (H2): MAYÚSCULAS 800 con la palabra de acento en rojo. */
export function Titular({ id, texto, acento, nivel = 2, clase = 'titular' }: { id?: string; texto: string; acento?: string; nivel?: 1 | 2; clase?: string }) {
  const H = nivel === 1 ? 'h1' : 'h2';
  return (
    <H className={clase} id={id}>
      <Acentuado texto={texto} acento={acento} />
    </H>
  );
}

/** La cabeza de una sección: rótulo, titular y, a la derecha, la intro. */
export function Cabeza({ id, etiqueta, titulo, acento, intro, idioma }: { id: string; etiqueta?: string; titulo: string; acento?: string; intro?: string; idioma: Idioma }) {
  return (
    <div className="reticula cabeza">
      <div className="cabeza__t encabezado">
        {etiqueta && <p className="rotulo">{etiqueta}</p>}
        <Titular id={`t-${id}`} texto={titulo} acento={acento} />
      </div>
      {intro && (
        <p className="texto cabeza__lado" data-entra>
          <Texto idioma={idioma}>{intro}</Texto>
        </p>
      )}
    </div>
  );
}

/** Ficha: pares dato / valor. */
export function Ficha({ filas, clase }: { filas: { termino: ReactNode; valor: ReactNode; detalle?: ReactNode }[]; clase?: string }) {
  return (
    <dl className={clase ? `ficha ${clase}` : 'ficha'}>
      {filas.map((f, i) => (
        <div key={i}>
          <dt>{f.termino}</dt>
          <dd>
            {f.valor}
            {f.detalle && <small>{f.detalle}</small>}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Figura numerada con su leyenda (y sus notas). `id` nombra la leyenda para aria-labelledby. */
export function Figura({ id, numero, rotulo, leyenda, notas, clase, children, dibuja }: { id: string; numero: number; rotulo: string; leyenda: ReactNode; notas?: ReactNode; clase?: string; children: ReactNode; dibuja?: boolean }) {
  return (
    <figure className={clase ? `fig ${clase}` : 'fig'} aria-labelledby={id} data-dibuja={dibuja ? '' : undefined}>
      {children}
      <figcaption>
        <p className="pie-fig" id={id}>
          <b>{rotulo} {numero}</b>
          {leyenda}
        </p>
        {notas}
      </figcaption>
    </figure>
  );
}

/** Nota al pie de una figura y su llamada. */
export function Nota({ n, children }: { n: number; children: ReactNode }) {
  return (
    <p className="nota" id={`nota-${n}`}>
      <b>{n}</b>
      {children}
    </p>
  );
}
export function LlamadaNota({ n, rotulo }: { n: number; rotulo: string }) {
  return (
    <a className="nota-ref" href={`#nota-${n}`} aria-label={`${rotulo} ${n}`}>
      {n}
    </a>
  );
}

/** Fila de servicio: un enlace que ocupa toda la fila y se invierte a azul polvo al pasar. */
export function FilaServicio({ href, numero, titulo, texto, meta, hrefLang }: { href: string; numero: string; titulo: string; texto: string; meta?: string; hrefLang?: string }) {
  const [m1, m2] = (meta ?? '').split(' · ');
  return (
    <li>
      <Link className="fila" href={href} hrefLang={hrefLang}>
        <span className="fila__n" aria-hidden="true">{numero}</span>
        <h3 className="fila__t">{titulo}</h3>
        <p className="fila__d">{texto}</p>
        {meta && (
          <p className="fila__m">
            {m1}
            {m2 && <span>{m2}</span>}
          </p>
        )}
        <span className="fila__ir" aria-hidden="true">
          <Flecha diagonal />
        </span>
      </Link>
    </li>
  );
}

/** Pregunta: un <details> de verdad (abre con teclado, la respuesta está siempre en el HTML). */
export function Preguntas({ preguntas }: { preguntas: DatosPregunta[] }) {
  return preguntas.map((q, i) => (
    <details className="preg" key={q.p} open={i === 0}>
      <summary>
        <h3 className="preg__q">{q.p}</h3>
        <span className="preg__mas" aria-hidden="true" />
      </summary>
      <p className="preg__r">{q.r}</p>
    </details>
  ));
}

/** La nube de revisión (una sola por página, en el cierre): rodea la palabra por fuera, sin pisar letras. */
export function Nube({ children, largo }: { children: ReactNode; largo: number }) {
  const W = Math.max(160, Math.round(largo * 62) + 40);
  const H = 120;
  const r = 20;
  const nx = Math.max(3, Math.round((W - 2 * r) / 46));
  const ny = 2;
  const dx = (W - 2 * r) / nx;
  const dy = (H - 2 * r) / ny;
  const arco = (x: number, y: number) => `a${Math.abs(x || y) * 0.62} ${Math.abs(x || y) * 0.62} 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)}`;
  const d = `M${r} ${r}${arco(dx, 0).repeat(nx)}${arco(0, dy).repeat(ny)}${arco(-dx, 0).repeat(nx)}${arco(0, -dy).repeat(ny)}Z`;
  return (
    <span className="nube">
      {children}
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path pathLength={1} d={d} />
      </svg>
    </span>
  );
}

/**
 * «En resumen»: el bloque citable bajo la portada de una página de servicio. A la izquierda la pregunta (H2) y el pasaje
 * que se sostiene solo; a la derecha la ficha con los datos clave, lo relacionado y la fecha de la última revisión.
 * Sigue el tono de la portada, así se lee como su continuación y no como una sección nueva.
 */
export function Resumen({ resumen, actualizado, idioma }: { resumen: DatosResumen; actualizado?: string; idioma: Idioma }) {
  const t = piezasDe(idioma).resumen;
  const tx = (s: string) => <Texto idioma={idioma}>{s}</Texto>;
  return (
    <section className="seccion resumen tono-raven" id="resumen" aria-labelledby="t-resumen" data-seccion={t.rotulo}>
      <div className="marco reticula">
        <div className="resumen__cuerpo">
          <p className="rotulo">{t.rotulo}</p>
          <h2 className="sub resumen__t" id="t-resumen">{resumen.pregunta}</h2>
          <p className="texto" data-entra>{tx(resumen.texto)}</p>
          {actualizado && (
            <p className="resumen__fecha">
              {t.actualizado} <time dateTime={actualizado}>{fechaLarga(actualizado, idioma)}</time>
            </p>
          )}
        </div>
        <div className="resumen__lado">
          <h3 className="rotulo">{t.datos}</h3>
          <Ficha filas={resumen.ficha.map((f) => ({ termino: f.termino, valor: tx(f.valor) }))} />
          {resumen.enlaces.length > 0 && (
            <nav aria-labelledby="t-resumen-enlaces">
              <h3 className="rotulo" id="t-resumen-enlaces">{t.enlaces}</h3>
              <ul className="resumen__enlaces texto">
                {resumen.enlaces.map((e) => <li key={e}>{tx(e)}</li>)}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
