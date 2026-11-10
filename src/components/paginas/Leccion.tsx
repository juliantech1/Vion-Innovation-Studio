import Link from 'next/link';
import { anclaLamina, cursoIndexable, interfazDe, leccionesDe, medioDe, pagina, piezasDe, ruta, rutaCurso, rutaLeccion, type Curso, type Idioma, type LeccionCurso } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Acentuado } from '@/components/sitio/Texto';
import { Apoyo } from '@/components/cursos/Apoyo';
import { Bloques } from '@/components/cursos/Bloques';
import { Linea, Md } from '@/components/cursos/Md';
import { Presentacion } from '@/components/cursos/Presentacion';
import { Ficha, Flecha } from '@/components/vion/piezas';
import { datosLeccion } from '@/seo/jsonld';
import './aprender.css';
import './estudio.css';
import './cursos.css';


/**
 * Una lección (/cursos/<curso>/<lección>): una presentación de láminas. Cada lámina tiene su ancla (#lamina-1-3), su
 * título, su texto, sus bloques copiables y su apoyo visual. Sin JavaScript se leen todas, una debajo de otra; con
 * JavaScript se recorren de a una (botones, flechas del teclado y el dedo), con la opción de verlas todas.
 */
export function Leccion({ c, l, idioma }: { c: Curso; l: LeccionCurso; idioma: Idioma }) {
  const x = c[idioma];
  const k = piezasDe(idioma).cursos;
  const t = k.leccionUi;
  const ui = interfazDe(idioma);
  const todas = leccionesDe(c, idioma);
  const i = todas.findIndex((y) => y.slug === l.slug);
  const antes = todas[i - 1];
  const despues = todas[i + 1];
  const ids = l.laminas.map((y) => anclaLamina(y.n));
  const videos = l.laminas.filter((y) => ['motion', 'grabacion', 'chispa'].includes(y.apoyo.tipo)).length;
  return (
    <>
      <JsonLd nodos={datosLeccion(c, l, idioma)} />
      {!cursoIndexable(c) && <p className="aviso-borrador" role="note">{k.plantilla.borrador}</p>}
      <article className="pagina leccion" data-pagina="cursos">
        <section className="portada portada--interior portada--leccion tono-raven" aria-labelledby="titulo" data-seccion={`${k.leccion} ${l.n}`}>
          <div className="marco pi">
            <div className="pi__cab">
              <nav className="miga" aria-label={ui.migas}>
                <ol>
                  <li><Link href={ruta('inicio', idioma)}>{pagina('inicio', idioma).nav}</Link></li>
                  <li><Link href={ruta('cursos', idioma)}>{pagina('cursos', idioma).nav}</Link></li>
                  <li><Link href={rutaCurso(x.slug, idioma)}>{x.corto}</Link></li>
                  <li aria-current="page">{k.leccion} {l.n}</li>
                </ol>
              </nav>
              <p className="rotulo">{k.leccion} {l.n} · {x.titulo}</p>
              <h1 className={l.titulo.length > 48 ? 'mega mega--larga mega--leccion' : 'mega mega--leccion'} id="titulo">
                <Acentuado texto={l.titulo} />
              </h1>
            </div>
            <div className="pi__texto">
              <p className="lead"><Linea s={l.objetivo} idioma={idioma} /></p>
            </div>
            <aside className="pi__ficha" aria-labelledby="ficha-t">
              <h2 className="rotulo" id="ficha-t">{k.leccion} {l.n}</h2>
              <Ficha
                filas={[
                  ...(l.resultado ? [{ termino: k.plantilla.resultado, valor: <Linea s={l.resultado} idioma={idioma} /> }] : []),
                  { termino: k.plantilla.contenido, valor: `${l.laminas.length} ${k.plantilla.laminas} · ${videos} ${k.plantilla.videos}` },
                ]}
              />
            </aside>
          </div>
        </section>

        <section className="presentacion tono-powder" id="laminas" aria-label={t.indice} data-presentacion data-seccion={x.corto}>
          <div className="marco">
            <div className="pres__barra">
              <Presentacion ids={ids} titulos={l.laminas.map((y) => y.titulo)} t={t} />
              <nav className="pres__marcas" aria-label={t.indice}>
                <ol>
                  {l.laminas.map((y, j) => (
                    <li key={y.n}>
                      <a href={`#${ids[j]}`} aria-label={`${t.lamina} ${y.n}: ${y.titulo}`}>
                        {y.n}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <details className="pres__indice">
                <summary>{t.indice}</summary>
                <ol>
                  {l.laminas.map((y, j) => (
                    <li key={y.n}><a href={`#${ids[j]}`}><span aria-hidden="true">{y.n}</span> {y.titulo}</a></li>
                  ))}
                </ol>
              </details>
            </div>

            <ol className="laminas">
              {l.laminas.map((y, j) => (
                <li key={y.n} id={ids[j]} className="lamina" aria-labelledby={`${ids[j]}-t`}>
                  <div className="lamina__cab">
                    <p className="rotulo">
                      <span className="lamina__n">{y.n}</span> {t.lamina} {j + 1} {t.de} {l.laminas.length}
                    </p>
                    <h2 className="lamina__t" id={`${ids[j]}-t`}>{y.titulo}</h2>
                  </div>
                  <div className="lamina__apoyo">
                    <Apoyo a={y.apoyo} m={medioDe(c.id, y.n)} n={y.n} titulo={y.titulo} idioma={idioma} />
                  </div>
                  <div className="lamina__texto md">
                    <Md texto={y.cuerpo} idioma={idioma} />
                    {y.bloques && y.bloques.length > 0 && <Bloques bloques={y.bloques} idioma={idioma} />}
                  </div>
                </li>
              ))}
            </ol>

            <nav className="pres__pie" aria-label={t.fin}>
              {antes ? (
                <Link className="pres__vecina" href={rutaLeccion(x.slug, antes.slug, idioma)}>
                  <span className="rotulo">{k.leccion} {antes.n}</span>
                  <span>{antes.titulo}</span>
                </Link>
              ) : (
                <Link className="pres__vecina" href={rutaCurso(x.slug, idioma)}>
                  <span className="rotulo">{x.corto}</span>
                  <span>{t.volverCurso}</span>
                </Link>
              )}
              {despues ? (
                <Link className="pres__vecina pres__vecina--sig" href={rutaLeccion(x.slug, despues.slug, idioma)}>
                  <span className="rotulo">{t.proxima} · {k.leccion} {despues.n}</span>
                  <span>{despues.titulo} <span aria-hidden="true"><Flecha /></span></span>
                </Link>
              ) : (
                <Link className="pres__vecina pres__vecina--sig" href={rutaCurso(x.slug, idioma)}>
                  <span className="rotulo">{t.fin}</span>
                  <span>{t.volverCurso} <span aria-hidden="true"><Flecha /></span></span>
                </Link>
              )}
            </nav>
          </div>
        </section>
      </article>
    </>
  );
}

