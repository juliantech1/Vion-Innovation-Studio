import Link from 'next/link';
import { interfazDe, pagina, piezasDe, ruta, rutaCursos, type Curso as DatosCurso, type Idioma, type Leccion } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Acentuado, Texto } from '@/components/sitio/Texto';
import { Cierre } from '@/components/vion/Cierre';
import { Boton, Ficha, Titular } from '@/components/vion/piezas';
import { datosCurso } from '@/seo/jsonld';
import './aprender.css';
import './estudio.css';

/** El video de una lección: un archivo propio (con su póster, sin cargar nada hasta que se reproduce) o el lugar vacío. */
function Video({ l, titulo, vacio }: { l?: Leccion; titulo: string; vacio: string }) {
  const v = l?.video;
  if (v?.mp4) {
    return (
      <video controls preload="none" poster={v.poster} title={titulo} width={1280} height={720}>
        <source src={v.mp4} type="video/mp4" />
        {v.vtt && <track kind="captions" src={v.vtt} default />}
      </video>
    );
  }
  if (v?.youtube) {
    // youtube-nocookie y solo al pedirlo: un enlace, para no meter un iframe de terceros (y su CSP) en la carga.
    return (
      <a className="leccion-video__vacio" href={`https://www.youtube-nocookie.com/watch?v=${encodeURIComponent(v.youtube)}`} rel="noopener">
        {titulo}
      </a>
    );
  }
  return <p className="leccion-video__vacio">{vacio}</p>;
}

/**
 * La página de un curso publicado (/cursos/<slug>): portada con su ficha, la primera lección con video, la lista de
 * lecciones con su video, minutos y material, y la acción del final hacia el servicio al que lleva. Hoy solo la usa el
 * curso de ejemplo, que es un borrador y no se publica.
 */
export function Curso({ c, idioma }: { c: DatosCurso; idioma: Idioma }) {
  const x = c[idioma];
  const t = piezasDe(idioma);
  const k = t.cursos;
  const ui = interfazDe(idioma);
  const cursos = pagina('cursos', idioma);
  const minutos = x.lecciones.reduce((s, l) => s + (l.minutos ?? 0), 0);
  const primera = x.lecciones.find((l) => l.video);
  const lleva = pagina(c.lleva, idioma);
  return (
    <>
      <JsonLd nodos={datosCurso(c, idioma)} />
      {c.borrador && <p className="aviso-borrador" role="note">{k.plantilla.borrador}</p>}
      <article className="pagina" data-pagina="cursos">
        <section className="portada portada--interior tono-raven" aria-labelledby="titulo">
          <div className="marco pi">
            <div className="pi__cab">
              <nav className="miga" aria-label={ui.migas}>
                <ol>
                  <li><Link href={ruta('inicio', idioma)}>{pagina('inicio', idioma).nav}</Link></li>
                  <li><Link href={ruta('cursos', idioma)}>{cursos.nav}</Link></li>
                  <li aria-current="page">{x.corto}</li>
                </ol>
              </nav>
              <p className="rotulo">{k.ruta} {c.ruta} · {rutaCursos(c.ruta)[idioma].nombre}</p>
              <h1 className={x.titulo.length > 40 ? 'mega mega--larga' : 'mega'} id="titulo">
                <Acentuado texto={x.titulo} />
              </h1>
            </div>
            <div className="pi__texto leccion-video">
              <Video l={primera} titulo={primera?.titulo ?? x.titulo} vacio={k.plantilla.sinVideo} />
              <p className="rotulo">{k.plantilla.video}{primera ? `: ${primera.titulo}` : ''}</p>
            </div>
            <aside className="pi__ficha" aria-labelledby="ficha-t">
              <h2 className="rotulo" id="ficha-t">{x.corto}</h2>
              <Ficha
                filas={[
                  { termino: k.paraQuien, valor: x.paraQuien },
                  { termino: k.seLleva, valor: x.seLleva },
                  { termino: k.lecciones, valor: String(x.lecciones.length) },
                  ...(minutos ? [{ termino: k.plantilla.duracion, valor: `${minutos} ${k.minutos}` }] : []),
                  { termino: k.herramientas, valor: x.herramientas },
                ]}
              />
            </aside>
          </div>
        </section>

        <section className="seccion tono-powder" id="lecciones" aria-labelledby="t-lecciones" data-seccion={k.lecciones}>
          <div className="marco">
            <div className="encabezado">
              <p className="rotulo">{x.corto}</p>
              <Titular id="t-lecciones" texto={k.plantilla.indice} />
            </div>
            <ol className="lecciones" data-traza>
              {x.lecciones.map((l, i) => (
                <li key={l.titulo} id={`leccion-${i + 1}`}>
                  <span className="lecciones__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="lecciones__t">{l.titulo}</h3>
                  <span className="lecciones__m">{l.minutos ? `${l.minutos} ${k.minutos}` : ''}</span>
                  {(l.video || l.material) && (
                    <div className="lecciones__cuerpo">
                      {l.video && l !== primera && <div className="leccion-video"><Video l={l} titulo={l.titulo} vacio={k.plantilla.sinVideo} /></div>}
                      {l.material && (
                        <p className="lecciones__material">
                          <span className="rotulo">{k.plantilla.material}</span>
                          {l.material.map((m) => <a key={m.href} className="enlace-linea" href={m.href}>{m.texto}</a>)}
                        </p>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <p style={{ marginTop: '2rem' }}>
              <Link className="enlace-linea" href={ruta('cursos', idioma)}>{k.plantilla.volver}</Link>
            </p>
          </div>
        </section>

        <section className="seccion tono-raven" id="siguiente" aria-labelledby="t-siguiente" data-seccion={lleva.nav}>
          <div className="marco aprende">
            <div className="aprende__texto">
              <div className="encabezado">
                <p className="rotulo">{lleva.nav}</p>
                <Titular id="t-siguiente" texto={k.lleva} />
              </div>
            </div>
            <div className="aprende__lista texto">
              <p><Texto idioma={idioma}>{lleva.bajada}</Texto></p>
              <p style={{ marginTop: '1.5rem' }}>
                <Boton accion={{ texto: lleva.esquema.servicio?.nombre ?? lleva.nav, destino: { pagina: c.lleva } }} idioma={idioma} variante="linea" flecha />
              </p>
            </div>
          </div>
        </section>

        {cursos.llamado && <Cierre llamado={cursos.llamado} idioma={idioma} />}
      </article>
    </>
  );
}
