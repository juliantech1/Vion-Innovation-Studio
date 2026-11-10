import Link from 'next/link';
import type { CSSProperties } from 'react';
import { RUTAS_CURSOS, cursoConPagina, cursosVisibles, enlaceWhatsapp, pagina, piezasDe, ruta, rutaCurso, type Curso, type Idioma } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Texto } from '@/components/sitio/Texto';
import { Cierre } from '@/components/vion/Cierre';
import { Cabeza, Ficha, Figura, Flecha, Preguntas, Titular } from '@/components/vion/piezas';
import { seccion } from './comun';
import { PortadaInterior, T, circulo } from './estudio';
import './aprender.css';

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
 * Fig. 1: las cuatro rutas como ejes de un plano (A a D) y los cursos como piezas en obra (cuadro punteado) en el
 * orden en que se preparan, unidas por la línea de producción. En celular el dibujo se recompone en vertical para que
 * ningún rótulo quede por debajo de 11 px.
 */
function FiguraRutas({ cursos, idioma }: { cursos: Curso[]; idioma: Idioma }) {
  const t = piezasDe(idioma).cursos;
  const letras = RUTAS_CURSOS.map((r) => r.letra);
  // Horizontal: las rutas son filas, el orden va de izquierda a derecha.
  const W = 640, H = 300, x0 = 150, dx = 100, y0 = 70, dy = 56;
  const ph = cursos.map((c, i) => [x0 + i * dx, y0 + letras.indexOf(c.ruta) * dy] as const);
  // Vertical (celular): las rutas son columnas, el orden baja.
  const w = 340, h = 470, cx0 = 92, cdx = 64, cy0 = 112, cdy = 66;
  const pv = cursos.map((c, i) => [cx0 + letras.indexOf(c.ruta) * cdx, cy0 + i * cdy] as const);
  const cuadro = (x: number, y: number, k: number, i: number) => (
    <g key={k} style={{ '--i': i } as CSSProperties}>
      <rect className="r-obra" x={x - 14} y={y - 14} width={28} height={28} />
      <text className="r-n" x={x} y={y + 4.5} textAnchor="middle">{k + 1}</text>
    </g>
  );
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
        {cursos.map((c, i) => (
          <g key={c.id}>
            <T fino d={`M${ph[i][0]} 28V${H - 44}`} i={4 + i} />
            <text className="r-tenue" x={ph[i][0]} y={20} textAnchor="middle">{n2(i)}</text>
            <text className="r-tenue" x={ph[i][0]} y={H - 22} textAnchor="middle">{c[idioma].corto}</text>
          </g>
        ))}
        <T d={`M${ph.map((p) => `${p[0]} ${p[1]}`).join('L')}`} i={9} />
        {ph.map((p, i) => cuadro(p[0], p[1], i, 10 + i))}
        <T rojo d={`M${x0 - 50} 34V${H - 40}`} i={2} />
        <text x={x0 - 56} y={H - 22} textAnchor="end">{t.fig1Rotulos.hoy}</text>
      </svg>
      <svg className="rutas-fig__alto" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={t.fig1Alt}>
        {letras.map((l, k) => (
          <g key={l}>
            <T d={circulo(cx0 + k * cdx, 30, 15)} i={k} />
            <text x={cx0 + k * cdx} y={34.5} textAnchor="middle">{l}</text>
            <T fino d={`M${cx0 + k * cdx} 52V${h - 16}`} i={k} />
          </g>
        ))}
        {cursos.map((c, i) => (
          <text key={c.id} className="r-tenue" x={14} y={pv[i][1] + 4.5}>{n2(i)}</text>
        ))}
        <T d={`M${pv.map((p) => `${p[0]} ${p[1]}`).join('L')}`} i={5} />
        {pv.map((p, i) => cuadro(p[0], p[1], i, 6 + i))}
        <T rojo d={`M54 ${cy0 - 36}H${w - 12}`} i={2} />
        <text x={w - 12} y={cy0 - 44} textAnchor="end">{t.fig1Rotulos.hoy}</text>
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
            <ol className="cursos" data-traza>
              {cursos.map((x, i) => {
                const d = x[idioma];
                const r = RUTAS_CURSOS.find((y) => y.letra === x.ruta)!;
                return (
                  <li key={x.id} className="curso" id={x.id}>
                    <div className="curso__marca">
                      <span className="curso__n" aria-hidden="true">{n2(i)}</span>
                      <p className="estado">{c.estado[x.estado]}</p>
                      <p className="curso__ruta">
                        <span className="ruta-letra" aria-hidden="true">{x.ruta}</span>
                        <span>{c.ruta} {x.ruta}: {r[idioma].nombre}</span>
                      </p>
                    </div>
                    <div className="curso__cuerpo">
                      <h3 className="curso__t">
                        {cursoConPagina(x) ? <Link href={rutaCurso(d.slug, idioma)}>{d.titulo}</Link> : d.titulo}
                        {d.subtitulo && <small lang={idioma === 'es' ? 'en' : undefined}>{d.subtitulo}</small>}
                      </h3>
                      <Ficha
                        clase="ficha--larga"
                        filas={[
                          { termino: c.paraQuien, valor: d.paraQuien },
                          { termino: c.seLleva, valor: d.seLleva },
                          { termino: c.herramientas, valor: d.herramientas },
                        ]}
                      />
                    </div>
                    <div className="curso__lecciones">
                      <h4 className="rotulo">{x.estado === 'publicado' ? c.lecciones : c.leccionesPrevistas}</h4>
                      <ol>
                        {d.lecciones.map((l) => <li key={l.titulo}>{l.titulo}</li>)}
                      </ol>
                    </div>
                    {x.estado !== 'publicado' && <Avisar curso={x} idioma={idioma} />}
                  </li>
                );
              })}
            </ol>
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

