import Link from 'next/link';
import { cursoIndexable, interfazDe, leccionesDe, pagina, piezasDe, ruta, rutaCurso, rutaCursos, rutaLeccion, type Curso as DatosCurso, type Idioma } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Acentuado } from '@/components/sitio/Texto';
import { Md, Linea } from '@/components/cursos/Md';
import { Cierre } from '@/components/vion/Cierre';
import { Boton, Ficha, Flecha, Titular } from '@/components/vion/piezas';
import { datosCurso } from '@/seo/jsonld';
import './aprender.css';
import './estudio.css';
import './cursos.css';

const n2 = (n: number) => String(n).padStart(2, '0');

/**
 * La página de un curso (/cursos/<slug>): portada con su ficha (para quién, requisitos, lo que cuesta y duración), de qué
 * se trata en palabras de principiante, el índice de lecciones, la puesta a punto, lo que cuesta pieza por pieza, los repos y skills
 * recomendados, el kit y la acción del final. Cada lección es una presentación de láminas en su propia página. Ningún
 * texto interno (estados de producción, notas, instrucciones de uso de la interfaz) va a la vista.
 */
export function Curso({ c, idioma }: { c: DatosCurso; idioma: Idioma }) {
  const x = c[idioma];
  const k = piezasDe(idioma).cursos;
  const p = k.plantilla;
  const ui = interfazDe(idioma);
  const cursos = pagina('cursos', idioma);
  const lleva = pagina(c.lleva, idioma);
  const cont = x.contenido;
  const lecciones = leccionesDe(c, idioma);
  const laminas = lecciones.reduce((s, l) => s + l.laminas.length, 0);
  const primera = lecciones[0];
  const ruta_ = rutaCursos(c.ruta)[idioma];
  return (
    <>
      <JsonLd nodos={datosCurso(c, idioma)} />
      {!cursoIndexable(c) && <p className="aviso-borrador" role="note">{p.borrador}</p>}
      <article className="pagina curso-pagina" data-pagina="cursos">
        <section className="portada portada--interior tono-raven" aria-labelledby="titulo" data-seccion={x.corto}>
          <div className="marco pi">
            <div className="pi__cab">
              <nav className="miga" aria-label={ui.migas}>
                <ol>
                  <li><Link href={ruta('inicio', idioma)}>{pagina('inicio', idioma).nav}</Link></li>
                  <li><Link href={ruta('cursos', idioma)}>{cursos.nav}</Link></li>
                  <li aria-current="page">{x.corto}</li>
                </ol>
              </nav>
              <p className="rotulo">{k.ruta} {c.ruta} · {ruta_.nombre} · {c.codigo}</p>
              <h1 className={x.titulo.length > 40 ? 'mega mega--larga' : 'mega'} id="titulo">
                <Acentuado texto={x.titulo} />
              </h1>
            </div>
            <div className="pi__texto">
              <p className="lead"><Linea s={x.seLleva} idioma={idioma} /></p>
              <div className="acciones">
                {primera ? (
                  <Link className="boton" href={rutaLeccion(x.slug, primera.slug, idioma)}>
                    {p.empezar} {primera.n}
                    <span className="boton__flecha" aria-hidden="true"><Flecha /></span>
                  </Link>
                ) : (
                  <Link className="boton boton--linea" href={rutaCurso(c.es.slug, 'es')} hrefLang="es-CR">{p.verCastellano}</Link>
                )}
              </div>
              {!cont && <p className="curso-pagina__nota">{p.soloCastellano}</p>}
            </div>
            <aside className="pi__ficha" aria-labelledby="ficha-t">
              <h2 className="rotulo" id="ficha-t">{x.corto}</h2>
              <Ficha
                filas={[
                  { termino: k.paraQuien, valor: <Linea s={x.paraQuien} idioma={idioma} /> },
                  ...(cont ? [{ termino: p.requisitos, valor: <Linea s={cont.ficha.requisitos} idioma={idioma} /> }] : []),
                  { termino: p.costo, valor: <Linea s={cont ? cont.ficha.costo : x.herramientas} idioma={idioma} /> },
                  ...(cont ? [{ termino: p.duracion, valor: <Linea s={cont.ficha.duracion} idioma={idioma} /> }] : []),
                ]}
              />
            </aside>
          </div>
        </section>

        {cont?.explica && (
          <section className="seccion tono-powder curso-pagina__explica" id="de-que-se-trata" aria-labelledby="t-explica" data-seccion={p.explica}>
            <div className="marco reticula">
              <div className="curso-pagina__lado">
                <div className="encabezado">
                  <p className="rotulo">{x.corto}</p>
                  <Titular id="t-explica" texto={p.explica} />
                </div>
              </div>
              <div className="curso-pagina__md md">
                <Md texto={cont.explica} idioma={idioma} />
              </div>
            </div>
          </section>
        )}

        <section className="seccion tono-powder" id="lecciones" aria-labelledby="t-lecciones" data-seccion={k.lecciones}>
          <div className="marco">
            <div className="encabezado">
              <p className="rotulo">{x.corto} · {x.lecciones.length} {k.lecciones.toLowerCase()}{laminas ? ` · ${laminas} ${p.laminas}` : ''}</p>
              <Titular id="t-lecciones" texto={p.indice} />
            </div>
            <ol className="indice-lecciones" data-traza>
              {(lecciones.length ? lecciones : x.lecciones.map((l, i) => ({ n: i, titulo: l.titulo, slug: '', objetivo: '', resultado: undefined, laminas: [] as typeof lecciones[number]['laminas'] }))).map((l) => {
                const videos = l.laminas.filter((y) => ['motion', 'grabacion', 'chispa'].includes(y.apoyo.tipo)).length;
                return (
                  <li key={l.titulo} id={l.slug ? `leccion-${l.n}` : undefined}>
                    <span className="indice-lecciones__n" aria-hidden="true">{n2(l.n)}</span>
                    <div className="indice-lecciones__cuerpo">
                      <h3 className="indice-lecciones__t">
                        {l.slug ? <Link href={rutaLeccion(x.slug, l.slug, idioma)}>{l.titulo}</Link> : l.titulo}
                      </h3>
                      {l.objetivo && <p><Linea s={l.objetivo} idioma={idioma} /></p>}
                      {l.resultado && (
                        <p className="indice-lecciones__res"><span className="rotulo">{p.resultado}</span> <Linea s={l.resultado} idioma={idioma} /></p>
                      )}
                    </div>
                    {l.laminas.length > 0 && (
                      <span className="indice-lecciones__m">{l.laminas.length} {p.laminas}{' '}<br />{videos} {p.videos}</span>
                    )}
                  </li>
                );
              })}
            </ol>
            {!cont && (
              <p className="curso-pagina__nota">
                {p.soloCastellano}{' '}
                <Link className="enlace-linea" href={rutaCurso(c.es.slug, 'es')} hrefLang="es-CR">{p.verCastellano}</Link>
              </p>
            )}
          </div>
        </section>

        {cont && (
          <>
            <section className="seccion tono-raven" id="puesta-a-punto" aria-labelledby="t-puesta" data-seccion={p.puesta}>
              <div className="marco reticula">
                <div className="curso-pagina__lado">
                  <div className="encabezado">
                    <p className="rotulo">{k.leccion} {cont.puesta.leccion}</p>
                    <Titular id="t-puesta" texto={p.puesta} />
                  </div>
                  {lecciones.find((l) => l.n === cont.puesta.leccion) && (
                    <p>
                      <Link className="enlace-linea" href={rutaLeccion(x.slug, lecciones.find((l) => l.n === cont.puesta.leccion)!.slug, idioma)}>
                        {p.puestaIr}
                        <span aria-hidden="true"><Flecha /></span>
                      </Link>
                    </p>
                  )}
                </div>
                <div className="curso-pagina__md md">
                  <Md texto={cont.puesta.texto} idioma={idioma} />
                </div>
              </div>
            </section>

            <section className="seccion tono-powder" id="costos" aria-labelledby="t-costos" data-seccion={p.costo}>
              <div className="marco reticula">
                <div className="curso-pagina__lado">
                  <div className="encabezado">
                    <p className="rotulo">{p.costo}</p>
                    <Titular id="t-costos" texto={p.costos} />
                  </div>
                  <p className="lead-chico"><Linea s={cont.ficha.costo} idioma={idioma} /></p>
                </div>
                <div className="curso-pagina__md md">
                  <div className="md__tabla" role="region" aria-label={p.costos} tabIndex={0}>
                    <table>
                      <thead>
                        <tr><th scope="col">{p.costosCols.pieza}</th><th scope="col">{p.costosCols.costo}</th><th scope="col">{p.costosCols.fuente}</th></tr>
                      </thead>
                      <tbody>
                        {cont.costos.map((f) => (
                          <tr key={f.pieza}>
                            <th scope="row"><Linea s={f.pieza} idioma={idioma} /></th>
                            <td><Linea s={f.costo} idioma={idioma} /></td>
                            <td>{f.fuente ? <Linea s={f.fuente} idioma={idioma} /> : '·'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="curso-pagina__pie">{p.costosFecha.replace('{fecha}', cont.costosFecha)}</p>
                </div>
              </div>
            </section>

            <section className="seccion tono-raven" id="repos" aria-labelledby="t-repos" data-seccion={p.recursos}>
              <div className="marco">
                <div className="encabezado">
                  <p className="rotulo">{p.recursosCols.nombre}</p>
                  <Titular id="t-repos" texto={p.recursos} />
                  <p className="intro">{p.recursosIntro}</p>
                </div>
                <ul className="recursos" data-traza>
                  {cont.recursos.map((r) => (
                    <li key={r.nombre}>
                      <h3 className="recursos__t">
                        {r.url ? (
                          <a href={r.url} rel="noopener">
                            <Linea s={r.nombre} idioma={idioma} />
                            <span aria-hidden="true"><Flecha diagonal /></span>
                          </a>
                        ) : (
                          <Linea s={r.nombre} idioma={idioma} />
                        )}
                      </h3>
                      <p className="recursos__que"><Linea s={r.que} idioma={idioma} /></p>
                      <dl className="recursos__datos">
                        <div><dt>{p.recursosCols.licencia}</dt><dd><Linea s={r.licencia} idioma={idioma} /></dd></div>
                        <div><dt>{p.recursosCols.revision}</dt><dd><Linea s={r.revision} idioma={idioma} /></dd></div>
                        {r.lecciones && <div><dt>{p.recursosCols.lecciones}</dt><dd>{r.lecciones}</dd></div>}
                      </dl>
                    </li>
                  ))}
                </ul>
                {cont.noRecomendamos && (
                  <div className="recursos__no md">
                    <h3 className="rotulo">{p.noRecomendamos}</h3>
                    <Md texto={cont.noRecomendamos} idioma={idioma} nivel={4} />
                  </div>
                )}
              </div>
            </section>

            <section className="seccion tono-powder" id="kit" aria-labelledby="t-kit" data-seccion={p.kit}>
              <div className="marco reticula">
                <div className="curso-pagina__lado">
                  <div className="encabezado">
                    <p className="rotulo">{p.kit}</p>
                    <Titular id="t-kit" texto={p.kit} />
                  </div>
                  <div className="md"><Md texto={cont.kit.descripcion} idioma={idioma} /></div>
                </div>
                <div className="curso-pagina__md">
                  <ul className="kit" data-traza>
                    {cont.kit.archivos.map((a) => (
                      <li key={a.nombre}>
                        <code>{a.nombre}</code>
                        <span><Linea s={a.que} idioma={idioma} /></span>
                      </li>
                    ))}
                  </ul>
                  <div className="accion-final" aria-labelledby="t-accion">
                    <p className="rotulo">{p.accion}</p>
                    <h3 className="sub" id="t-accion">{cont.accion.titulo}</h3>
                    <div className="md"><Md texto={cont.accion.texto} idioma={idioma} /></div>
                    <p className="accion-final__lleva">
                      <span>{k.lleva}:</span>{' '}
                      <Boton accion={{ texto: lleva.esquema.servicio?.nombre ?? lleva.nav, destino: { pagina: c.lleva } }} idioma={idioma} variante="linea" flecha chico />
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {cursos.llamado && <Cierre llamado={cursos.llamado} idioma={idioma} />}
      </article>
    </>
  );
}

