import Link from 'next/link';
import type { CSSProperties } from 'react';
import { RUTAS_CURSOS, cursoConPagina, cursosVisibles, enlaceWhatsapp, pagina, piezasDe, ruta, rutaCurso, videosDe, type Curso, type Idioma } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Texto } from '@/components/sitio/Texto';
import { Cierre } from '@/components/vion/Cierre';
import { Cabeza, Ficha, Figura, Flecha, Preguntas, Titular } from '@/components/vion/piezas';
import { Linea } from '@/components/cursos/Md';
import { seccion } from './comun';
import { PortadaInterior, T, circulo } from './estudio';
import './aprender.css';
import './cursos.css';

const n2 = (i: number) => String(i + 1).padStart(2, '0');

/** Los dos enlaces de «avisarme»: WhatsApp con el mensaje escrito y el formulario con el mismo mensaje puesto. */
export function Avisar({ curso, idioma }: { curso: Curso; idioma: Idioma }) {
  const t = piezasDe(idioma).cursos;
  const mensaje = t.mensajeAviso.replace('{curso}', curso[idioma].titulo);
  const form = seccion(pagina('contacto', idioma), 1, 'formulario').id;
  return (
    <div className="curso__avisar">
      <p>{t.avisar}</p>
      <a className="enlace-linea" href={enlaceWhatsapp(mensaje)} rel="noopener">
        {t.avisarWhatsapp}: {curso[idioma].corto}
        <span aria-hidden="true"><Flecha diagonal /></span>
      </a>
      <Link className="enlace-linea" href={`${ruta('contacto', idioma)}?mensaje=${encodeURIComponent(mensaje)}#${form}`}>
        {t.avisarFormulario}: {curso[idioma].corto}
      </Link>
    </div>
  );
}

/**
 * Fig. 1: las cuatro rutas como ejes de un plano (A a D) y los diez cursos como piezas en obra (cuadro punteado) sobre
 * su ruta. El relleno de cada cuadro es la parte de sus videos que ya está lista. En celular el dibujo se recompone en
 * vertical (las rutas son columnas) para que ningún rótulo quede por debajo de 11 px.
 */
function FiguraRutas({ cursos, idioma }: { cursos: Curso[]; idioma: Idioma }) {
  const t = piezasDe(idioma).cursos;
  const letras = RUTAS_CURSOS.map((r) => r.letra);
  const pos = cursos.map((c) => [letras.indexOf(c.ruta), cursos.filter((y) => y.ruta === c.ruta).indexOf(c)] as const);
  const W = 780, H = 290, x0 = 140, dx = 210, y0 = 50, dy = 64;
  const w = 340, h = 330, cx0 = 66, cdx = 72, cy0 = 112, cdy = 76;
  const cuadro = (x: number, y: number, c: Curso, k: number, i: number) => {
    const v = videosDe(c);
    const lleno = v.total ? (28 * v.listos) / v.total : 0;
    return (
      <g key={c.id} style={{ '--i': i } as CSSProperties}>
        <rect className="r-obra" x={x - 14} y={y - 14} width={28} height={28} />
        {lleno > 0 && <rect className="r-lleno" x={x - 14} y={y + 14 - lleno} width={28} height={lleno} />}
        <text className="r-n" x={x} y={y + 4.5} textAnchor="middle">{k + 1}</text>
      </g>
    );
  };
  return (
    <>
      <svg className="rutas-fig__ancho" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={t.fig1Alt}>
        {letras.map((l, k) => (
          <g key={l}>
            <T d={circulo(40, y0 + k * dy, 15)} i={k} />
            <text x={40} y={y0 + k * dy + 4.5} textAnchor="middle">{l}</text>
            <T fino d={`M62 ${y0 + k * dy}H${W - 20}`} i={k} />
          </g>
        ))}
        {cursos.map((c, i) => cuadro(x0 + pos[i][1] * dx, y0 + pos[i][0] * dy, c, i, 6 + i))}
        {cursos.map((c, i) => (
          <text key={c.id} className="r-tenue" x={x0 + pos[i][1] * dx + 24} y={y0 + pos[i][0] * dy + 4.5}>{c[idioma].corto}</text>
        ))}
      </svg>
      <svg className="rutas-fig__alto" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={t.fig1Alt}>
        {letras.map((l, k) => (
          <g key={l}>
            <T d={circulo(cx0 + k * cdx, 30, 15)} i={k} />
            <text x={cx0 + k * cdx} y={34.5} textAnchor="middle">{l}</text>
            <T fino d={`M${cx0 + k * cdx} 52V${h - 16}`} i={k} />
          </g>
        ))}
        {cursos.map((c, i) => cuadro(cx0 + pos[i][0] * cdx, cy0 + pos[i][1] * cdy, c, i, 5 + i))}
      </svg>
    </>
  );
}

/** Cursos (es) / Courses (en): los cursos que se están grabando, las cuatro rutas, cómo van a ser y las preguntas. */
export function Cursos({ idioma }: { idioma: Idioma }) {
  const p = pagina('cursos', idioma);
  const t = piezasDe(idioma);
  const c = t.cursos;
  const lista = seccion(p, 0, 'texto');
  const rutas = seccion(p, 1, 'texto');
  const como = seccion(p, 2, 'texto');
  const preguntas = seccion(p, 3, 'preguntas');
  const cursos = cursosVisibles();
  const tx = (s: string) => <Texto idioma={idioma}>{s}</Texto>;
  return (
    <>
      <JsonLd id="cursos" idioma={idioma} />
      <article className="pagina" data-pagina="cursos">
        <PortadaInterior p={p} idioma={idioma} fichaTitulo={c.fichaTitulo} ficha={<Ficha filas={c.ficha} />} />

        {/* 1 · Los cursos que se están grabando: una ficha por curso, con su estado de obra */}
        <section className="seccion tono-powder" id={lista.id} aria-labelledby={`t-${lista.id}`} data-seccion={lista.etiqueta}>
          <div className="marco">
            <Cabeza {...lista} idioma={idioma} />
            <div className="cursos-rutas">
              {RUTAS_CURSOS.map((r) => (
                <div key={r.letra} className="ruta-grupo" id={`ruta-${r.letra.toLowerCase()}`}>
                  <h3 className="ruta-grupo__t">
                    <span className="ruta-letra" aria-hidden="true">{r.letra}</span>
                    <span>{c.ruta} {r.letra}: {r[idioma].nombre}</span>
                  </h3>
                  <ol className="cursos" data-traza>
                    {cursos.filter((x) => x.ruta === r.letra).map((x) => {
                      const d = x[idioma];
                      const v = videosDe(x);
                      const i = cursos.indexOf(x);
                      return (
                        <li key={x.id} className="curso" id={x.id}>
                          <div className="curso__marca">
                            <span className="curso__n" aria-hidden="true">{n2(i)}</span>
                            <p className={`estado${x.estado === 'publicado' ? ' estado--publicado' : ''}`}>{c.estado[x.estado]}</p>
                            {x.estado === 'produccion' && v.total > 0 && (
                              <p className="curso__videos">{c.videosListos.replace('{n}', String(v.listos)).replace('{total}', String(v.total))}</p>
                            )}
                          </div>
                          <div className="curso__cuerpo">
                            <h4 className="curso__t">
                              {cursoConPagina(x) ? <Link href={rutaCurso(d.slug, idioma)}>{d.titulo}</Link> : d.titulo}
                              {d.subtitulo && <small lang={idioma === 'es' ? 'en' : undefined}>{d.subtitulo}</small>}
                            </h4>
                            <Ficha
                              clase="ficha--larga"
                              filas={[
                                { termino: c.paraQuien, valor: <Linea s={d.paraQuien} idioma={idioma} /> },
                                { termino: c.seLleva, valor: <Linea s={d.seLleva} idioma={idioma} /> },
                                { termino: c.plantilla.costo, valor: <Linea s={x.es.contenido && idioma === 'es' ? x.es.contenido.ficha.costo : d.herramientas} idioma={idioma} /> },
                              ]}
                            />
                          </div>
                          <div className="curso__lecciones">
                            <h5 className="rotulo">{x.estado === 'publicado' ? c.lecciones : c.leccionesPrevistas}</h5>
                            <ol>
                              {(x[idioma].contenido?.lecciones ?? d.lecciones.map((l, k) => ({ ...l, n: k }))).map((l) => (
                                <li key={l.titulo} data-n={String(l.n).padStart(2, '0')}>{l.titulo}</li>
                              ))}
                            </ol>
                          </div>
                          {x.estado !== 'publicado' && <Avisar curso={x} idioma={idioma} />}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2 · Las cuatro rutas · Fig. 1 */}
        <section className="seccion tono-raven" id={rutas.id} aria-labelledby={`t-${rutas.id}`} data-seccion={rutas.etiqueta}>
          <div className="marco">
            <Cabeza {...rutas} idioma={idioma} />
            <Figura id="fig1-pie" numero={1} rotulo={t.fig} leyenda={c.fig1} clase="rutas-fig" dibuja>
              <FiguraRutas cursos={cursos} idioma={idioma} />
            </Figura>
            <ul className="mayor rutas" data-traza>
              {RUTAS_CURSOS.map((r) => (
                <li key={r.letra}>
                  <span className="mayor__n" aria-hidden="true">{r.letra}</span>
                  <h3 className="sub">{r[idioma].nombre}</h3>
                  <p>{r[idioma].texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3 · Cómo van a ser */}
        <section className="seccion tono-powder" id={como.id} aria-labelledby={`t-${como.id}`} data-seccion={como.etiqueta}>
          <div className="marco reticula">
            <div className="aprende__texto">
              <div className="encabezado">
                <p className="rotulo">{como.etiqueta}</p>
                <Titular id={`t-${como.id}`} texto={como.titulo} acento={como.acento} />
              </div>
            </div>
            <div className="aprende__lista texto" data-entra>
              {como.parrafos.map((x) => <p key={x}>{tx(x)}</p>)}
            </div>
          </div>
        </section>

        {/* 4 · Preguntas */}
        <section className="seccion tono-raven" id={preguntas.id} aria-labelledby={`t-${preguntas.id}`} data-seccion="FAQ">
          <div className="marco reticula">
            <div className="preguntas__t">
              <Titular id={`t-${preguntas.id}`} texto={preguntas.titulo} acento={preguntas.acento} />
            </div>
            <div className="preguntas__l" data-traza>
              <Preguntas preguntas={preguntas.preguntas} />
            </div>
          </div>
        </section>

        {p.llamado && <Cierre llamado={p.llamado} idioma={idioma} />}
      </article>
    </>
  );
}

