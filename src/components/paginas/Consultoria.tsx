import Link from 'next/link';
import { catalogoDe, interfazDe, pagina, piezasDe, publicarRangos, ruta, type Idioma } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Acentuado, Texto } from '@/components/sitio/Texto';
import { Cierre } from '@/components/vion/Cierre';
import { Pasos } from '@/components/vion/Pasos';
import { Boton, Ficha, Figura, LlamadaNota, Nota, Preguntas, Titular } from '@/components/vion/piezas';
import { seccion } from './comun';
import './consultoria.css';

type Estilo = React.CSSProperties & Record<`--${string}`, string | number>;

/** Los tres tramos del diagnóstico sobre sus diez días hábiles (orientativos: se solapan, como en la práctica). */
const TRAMOS: [number, number][] = [[0, 4], [3, 8], [7, 10]];

/** Fig. 1: la escala de los tres pasos de la portada, con el diagnóstico ampliado en un detalle (como un detalle de plano). */
function Lupa({ idioma }: { idioma: Idioma }) {
  const t = piezasDe(idioma);
  const c = t.consultoria;
  const d = catalogoDe(idioma).diagnostico;
  return (
    <div className="lupa">
      <div className="lupa__general" aria-hidden="true">
        <p className="lupa__rot">{c.fig1General}</p>
        <span className="eje lupa__eje">{['0', '2', '4', '6', '8', '10'].map((e) => <span key={e}>{e}</span>)}</span>
        <div className="lupa__regla">
          <span className="lupa__b lupa__b--diag" style={{ '--ini': 0, '--fin': 2 } as Estilo} />
          <span className="lupa__b" style={{ '--ini': 2, '--fin': 6 } as Estilo} />
          <span className="lupa__b lupa__b--raya" style={{ '--ini': 6, '--fin': 8 } as Estilo} />
          <span className="lupa__b lupa__b--sigue" style={{ '--ini': 8, '--fin': 10 } as Estilo} />
          <span className="lupa__circulo"><b>A</b></span>
        </div>
      </div>
      <div className="lupa__detalle">
        <p className="lupa__cab">
          <b>{c.fig1Detalle}</b>
          <span>{d.nombre} · {d.plazo}</span>
        </p>
        <div className="lupa__dias" aria-hidden="true">
          {[1, 2].map((s) => (
            <span className="lupa__semana" key={s}>
              <span className="lupa__s">{c.fig1Semana} {s}</span>
              {c.fig1Dias.map((x, i) => <span key={i}>{x}</span>)}
            </span>
          ))}
        </div>
        <ol className="lupa__tramos">
          {c.fig1Tramos.map((x, i) => {
            const [ini, fin] = TRAMOS[i];
            return (
              <li key={x} className={ini >= 5 ? 'lupa__tramo lupa__tramo--der' : 'lupa__tramo'} style={{ '--ini': ini, '--fin': fin, '--i': i } as Estilo}>
                <span className="lupa__que">{x}</span>
                <span className="lupa__barra" aria-hidden="true" />
                <span className="lupa__sale">
                  <svg viewBox="0 0 12 14" aria-hidden="true" focusable="false"><path d="M1 1h6.5L11 4.5V13H1ZM7 1v4h4" /></svg>
                  {d.entregables[i]}
                </span>
              </li>
            );
          })}
        </ol>
        <p className="lupa__decide"><span>{t.fig1.decide[0]}</span><i aria-hidden="true" /></p>
      </div>
    </div>
  );
}

/** Fig. 2: un nombre de archivo según la convención de la ISO 19650, campo por campo. */
function NombreIso({ idioma }: { idioma: Idioma }) {
  const c = piezasDe(idioma).consultoria;
  return (
    <div className="nombre-iso">
      <p className="nombre-iso__fila nombre-iso__fila--antes">
        <span className="rotulo">{c.fig2Antes}</span>
        <s>{c.fig2NombreAntes}</s>
      </p>
      <svg className="nombre-iso__flecha" viewBox="0 0 24 40" aria-hidden="true" focusable="false">
        <path className="dib dib--rojo" pathLength={1} d="M12 2v34m-6-7 6 7 6-7" />
      </svg>
      <div className="nombre-iso__fila">
        <span className="rotulo">{c.fig2Despues}</span>
        <ol className="nombre-iso__campos" aria-label={c.fig2Lista}>
          {c.fig2Campos.map(([codigo, que], i) => (
            <li key={que} style={{ '--i': i } as Estilo}>
              <code>{codigo}</code>
              <span>{que}</span>
            </li>
          ))}
          <li className="nombre-iso__ext" aria-hidden="true"><code>.dwg</code></li>
        </ol>
      </div>
      <p className="nombre-iso__rutina">
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M2.5 8.5l3.5 3.5 7.5-8" /></svg>
        {c.fig2Rutina}
      </p>
    </div>
  );
}

/** Fig. 3: un proceso en dos carriles; lo repetido corre en el del sistema y la decisión baja al de la persona. */
function Reparto({ idioma }: { idioma: Idioma }) {
  const c = piezasDe(idioma).consultoria;
  const xs = [80, 150, 220, 380, 450];
  return (
    <div className="reparto">
      <div className="reparto__caja">
        <svg viewBox="0 0 520 180" aria-hidden="true" focusable="false">
          <path className="reparto__carril" d="M0 90h520" />
          <g className="dib dib--fino"><path pathLength={1} d="M8 45H64M96 45h38M166 45h38M236 45H300V111M324 135H380V61M396 45h38M466 45H512m-8-6 8 6-8 6" /></g>
          <g className="dib">{xs.map((x) => <path key={x} pathLength={1} d={`M${x - 16} 29h32v32h-32Z`} />)}</g>
          <g className="reparto__lleno">{xs.map((x) => <rect key={x} x={x - 10} y={35} width={20} height={20} />)}</g>
          <path className="reparto__rombo" d="M300 111l24 24-24 24-24-24Z" />
        </svg>
        <p className="reparto__t reparto__t--1"><i className="reparto__cuadro" aria-hidden="true" />{c.fig3Sistema}</p>
        <p className="reparto__t reparto__t--2"><i className="reparto__diamante" aria-hidden="true" />{c.fig3Persona}</p>
      </div>
      <p className="reparto__ext" aria-hidden="true"><span>{c.fig3Entra}</span><span>{c.fig3Sale}</span></p>
    </div>
  );
}

/** Consultoría IA + AutoCAD/BIM (es/en). Texto de `consultoria.ts`, el catálogo y `piezas.ts` (bloque `consultoria`). */
export function Consultoria({ idioma }: { idioma: Idioma }) {
  const p = pagina('consultoria', idioma);
  const ui = interfazDe(idioma);
  const t = piezasDe(idioma);
  const c = t.consultoria;
  const d = catalogoDe(idioma).diagnostico;
  const diag = seccion(p, 0, 'texto');
  const iso = seccion(p, 1, 'texto');
  const auto = seccion(p, 2, 'texto');
  const ia = seccion(p, 3, 'texto');
  const proceso = seccion(p, 4, 'pasos');
  const preguntas = seccion(p, 5, 'preguntas');
  const tx = (s: string) => <Texto idioma={idioma}>{s}</Texto>;
  const n2 = (i: number) => String(i + 1).padStart(2, '0');
  return (
    <>
      <JsonLd id="consultoria" idioma={idioma} />
      <article className="pagina" data-pagina="consultoria">
        {/* 1 · Portada del servicio · Fig. 1: el diagnóstico ampliado sobre la escala de los tres pasos */}
        <section className="portada portada--servicio tono-raven" aria-labelledby="titulo">
          <div className="portada__escena">
            <div className="marco portada__cuerpo">
              <div className="portada__cab">
                <nav className="miga" aria-label={ui.migas}>
                  <ol>
                    <li><Link href={ruta('inicio', idioma)}>{pagina('inicio', idioma).nav}</Link></li>
                    <li aria-current="page">{p.nav}</li>
                  </ol>
                </nav>
                <p className="rotulo" data-llega style={{ '--espera': '200ms' } as Estilo}>{p.etiqueta}</p>
                <h1 className="mega mega--larga" id="titulo">
                  <Acentuado texto={p.h1} acento={p.acento} />
                </h1>
              </div>
              <div className="portada__texto">
                <p className="lead" data-llega style={{ '--espera': '520ms' } as Estilo}>{tx(p.bajada)}</p>
                {p.acciones && (
                  <div className="acciones" data-llega style={{ '--espera': '620ms' } as Estilo}>
                    <Boton accion={p.acciones[0]} idioma={idioma} flecha />
                    {p.acciones[1] && <Boton accion={p.acciones[1]} idioma={idioma} variante="linea" />}
                  </div>
                )}
              </div>
              <aside className="portada__ficha" aria-labelledby="ficha-t" data-llega style={{ '--espera': '720ms' } as Estilo}>
                <h2 className="rotulo" id="ficha-t">{c.ficha.titulo} · {d.nombre}</h2>
                <Ficha
                  filas={[
                    { termino: c.ficha.plazo, valor: d.plazo },
                    ...(publicarRangos ? [{ termino: <>{c.ficha.rango}<LlamadaNota n={1} rotulo={t.nota} /></>, valor: d.rango }] : []),
                    { termino: c.ficha.recibe, valor: d.entregables[d.entregables.length - 1] },
                  ]}
                />
              </aside>
              <div className="portada__plano" data-llega style={{ '--espera': '400ms' } as Estilo}>
                <Figura id="fig1-pie" numero={1} rotulo={t.fig} leyenda={c.fig1} clase="lupa-fig" dibuja>
                  <Lupa idioma={idioma} />
                </Figura>
              </div>
            </div>
          </div>
        </section>

        {/* 2 · Diagnóstico: qué recibe y el cuadro de qué revisamos */}
        <section className="seccion tono-powder" id={diag.id} aria-labelledby={`t-${diag.id}`} data-seccion={diag.titulo}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                <p className="rotulo">{diag.etiqueta}</p>
                <Titular id={`t-${diag.id}`} texto={diag.titulo} acento={diag.acento} />
              </div>
              <p className="lead" data-entra>{tx(diag.parrafos[0])}</p>
              <div className="texto" data-entra>
                {diag.parrafos.slice(1).map((x) => <p key={x}>{tx(x)}</p>)}
              </div>
              {diag.lista && (
                <ol className="recibe" data-traza>
                  {diag.lista.map((x, i) => (
                    <li key={x}><span aria-hidden="true">{n2(i)}</span>{tx(x)}</li>
                  ))}
                </ol>
              )}
              {diag.cierre?.map((x) => <p className="texto" key={x}>{tx(x)}</p>)}
            </div>
            <div className="partido__fig revisa">
              <h3 className="sub revisa__t">{c.revisa.titulo}</h3>
              <table className="tabla" data-traza>
                <caption className="solo-lectores">{c.revisa.titulo}</caption>
                <thead>
                  <tr><th scope="col">{c.revisa.que}</th><th scope="col">{c.revisa.donde}</th><th scope="col" className="revisa__der">{c.revisa.sale}</th></tr>
                </thead>
                <tbody>
                  {c.revisa.filas.map(([que, donde], i) => (
                    <tr key={que}>
                      <th scope="row">{que}</th>
                      <td>{donde}</td>
                      <td className="revisa__sale">
                        <span aria-hidden="true">{n2(i)}</span>
                        <span className="solo-lectores">{d.entregables[i]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3 · Estándares BIM e ISO 19650 · Fig. 2: el nombre de archivo, campo por campo, y la nota general */}
        <section className="seccion tono-raven" id={iso.id} aria-labelledby={`t-${iso.id}`} data-seccion={iso.etiqueta}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                <p className="rotulo">{iso.etiqueta}</p>
                <Titular id={`t-${iso.id}`} texto={iso.titulo} acento={iso.acento} />
              </div>
              <p className="lead" data-entra>{tx(iso.parrafos[0])}</p>
              <div className="texto" data-entra>
                {iso.parrafos.slice(1, -1).map((x) => <p key={x}>{tx(x)}</p>)}
              </div>
              <aside className="nota-general" aria-label={c.notaGeneral} data-entra>
                <p className="rotulo"><b>1</b>{c.notaGeneral}</p>
                <p>{tx(iso.parrafos[iso.parrafos.length - 1])}</p>
              </aside>
            </div>
            <Figura id="fig2-pie" numero={2} rotulo={t.fig} leyenda={c.fig2} clase="partido__fig iso-fig" dibuja>
              <NombreIso idioma={idioma} />
            </Figura>
          </div>
        </section>

        {/* 4 · Automatización de AutoCAD: lo que el diagnóstico encuentra */}
        <section className="seccion tono-powder" id={auto.id} aria-labelledby={`t-${auto.id}`} data-seccion={auto.etiqueta}>
          <div className="marco reticula">
            <div className="auto__t encabezado">
              <p className="rotulo">{auto.etiqueta}</p>
              <Titular id={`t-${auto.id}`} texto={auto.titulo} acento={auto.acento} />
            </div>
            <div className="auto__texto">
              <p className="lead" data-entra>{tx(auto.parrafos[0])}</p>
              <div className="texto" data-entra>
                {auto.parrafos.slice(1).map((x) => <p key={x}>{tx(x)}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* 5 · Consultoría de IA para empresas · Fig. 3: lo que hace un sistema y lo que decide una persona */}
        <section className="seccion tono-raven" id={ia.id} aria-labelledby={`t-${ia.id}`} data-seccion={ia.etiqueta}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                <p className="rotulo">{ia.etiqueta}</p>
                <Titular id={`t-${ia.id}`} texto={ia.titulo} acento={ia.acento} />
              </div>
              <p className="lead" data-entra>{tx(ia.parrafos[0])}</p>
              <div className="texto" data-entra>
                {ia.parrafos.slice(1).map((x) => <p key={x}>{tx(x)}</p>)}
              </div>
            </div>
            <Figura id="fig3-pie" numero={3} rotulo={t.fig} leyenda={c.fig3} clase="partido__fig reparto-fig" dibuja>
              <Reparto idioma={idioma} />
            </Figura>
          </div>
        </section>

        {/* 6 · Proceso de trabajo · Fig. 4: los tres pasos sobre la misma escala de la portada */}
        <section className="seccion tono-powder" id={proceso.id} aria-labelledby={`t-${proceso.id}`} data-seccion={proceso.titulo}>
          <div className="marco">
            <div className="reticula cabeza">
              <div className="cabeza__t encabezado">
                <p className="rotulo">{proceso.etiqueta}</p>
                <Titular id={`t-${proceso.id}`} texto={proceso.titulo} acento={proceso.acento} />
              </div>
            </div>
            <Figura id="fig4-pie" numero={4} rotulo={t.fig} leyenda={t.fig1.pie} notas={publicarRangos ? <Nota n={1}>{t.fig1.notaRangos}</Nota> : undefined}>
              <Pasos idioma={idioma} />
            </Figura>
          </div>
        </section>

        {/* 7 · Preguntas */}
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
