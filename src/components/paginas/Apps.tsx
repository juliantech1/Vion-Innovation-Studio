import Link from 'next/link';
import { catalogoDe, interfazDe, pagina, piezasDe, publicarRangos, ruta, type Idioma } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Acentuado, Texto } from '@/components/sitio/Texto';
import { Cierre } from '@/components/vion/Cierre';
import { Boton, Cabeza, Ficha, Figura, LlamadaNota, Nota, Preguntas, Titular } from '@/components/vion/piezas';
import { seccion } from './comun';
import './apps.css';

type Estilo = React.CSSProperties & Record<`--${string}`, string | number>;

// Los cuatro dibujos de la Fig. 2 (app, asistente, extracción, proceso): línea y un trazo rojo, el paso que deja de ser a mano.
const DIBUJOS: [string[], string][] = [
  [['M10 12h118v86H10ZM10 26h118M34 26v72M44 40h70M44 54h70M44 68h48', 'M144 30h44v74h-44ZM144 42h44M144 92h44M152 56h28M152 66h22'], 'M152 80h28'],
  [['M10 14h96v30H30l-12 12V44h-8Z', 'M48 60h88v28h-8v12l-12-12H48Z', 'M178 40a8 8 0 1 0 0.01 0M162 82c0-14 32-14 32 0'], 'M140 70h16m-6-6 6 6-6 6'],
  [['M10 10h50l14 14v76H10ZM60 10v14h14', 'M20 40h40M20 52h44M20 64h34M20 76h44', 'M120 22h70v66h-70ZM120 44h70M120 66h70M155 22v66'], 'M84 55h26m-7-6 7 6-7 6'],
  [['M8 40h28v28H8ZM54 40h28v28H54ZM164 40h28v28h-28Z', 'M36 54h18M82 54h15M143 54h21'], 'M120 32l22 22-22 22-22-22Z'],
];

/** Fig. 1: el prototipo en línea, la misma app en el escritorio y en el celular, con sus cotas. */
function Prototipo({ idioma }: { idioma: Idioma }) {
  const r = piezasDe(idioma).apps.fig1Rotulos;
  return (
    <svg viewBox="0 0 440 352" aria-hidden="true" focusable="false">
      {/* cota del escritorio */}
      <g className="dib dib--fino"><path pathLength={1} d="M12 18h318M12 12v12M330 12v12" /></g>
      <text x="171" y="10" textAnchor="middle">{r.escritorio.toUpperCase()} · 1440</text>
      {/* la ventana del escritorio */}
      <g className="dib">
        <path pathLength={1} d="M12 30h318v226H12Z" />
        <path pathLength={1} d="M12 48h318M78 48v208" />
        <path pathLength={1} d="M24 66h40M24 82h32M24 98h36M24 114h28" />
        <path pathLength={1} d="M92 108h178v104H92ZM92 134h178M92 160h178M92 186h178M152 108v104M214 108v104" />
      </g>
      <g className="dib dib--fino"><path pathLength={1} d="M102 121h36M102 147h40M102 173h30M102 199h38M162 121h38M162 147h30M162 173h42M162 199h26M224 121h30M224 147h36M224 173h24M224 199h32" /></g>
      <text x="92" y="74" className="proto__t">{r.panel.toUpperCase()}</text>
      <text x="92" y="98">{r.datos.toUpperCase()}</text>
      {/* el celular, encima */}
      <rect className="proto__fondo" x="286" y="92" width="116" height="222" rx="14" />
      <g className="dib">
        <path pathLength={1} d="M300 92h88a14 14 0 0 1 14 14v194a14 14 0 0 1-14 14h-88a14 14 0 0 1-14-14V106a14 14 0 0 1 14-14Z" />
        <path pathLength={1} d="M330 102h28" />
        <path pathLength={1} d="M298 142h74v24h-74ZM316 176h74v24h-74ZM298 210h60v20h-60Z" />
      </g>
      <text x="298" y="130">{r.asistente.toUpperCase()}</text>
      <rect className="proto__boton" x="298" y="268" width="92" height="30" rx="4" />
      <text className="proto__boton-t" x="344" y="287" textAnchor="middle">{r.aprobar.toUpperCase()}</text>
      {/* cota del celular */}
      <g className="dib dib--fino"><path pathLength={1} d="M286 330h116M286 324v12M402 324v12" /></g>
      <text x="344" y="350" textAnchor="middle">{r.celular.toUpperCase()} · 390</text>
      {/* la lámina */}
      <g className="dib dib--fino"><path pathLength={1} d="M12 270h126v28H12ZM84 270v28" /></g>
      <text x="22" y="288">{piezasDe(idioma).transicion.lamina.toUpperCase()}</text>
      <text x="94" y="288" className="proto__t">{r.lamina}</text>
    </svg>
  );
}

/** Fig. 3: un trabajo dentro de un sistema con agentes (lo prepara el agente, queda en el registro, decide una persona). */
function Flujo({ idioma }: { idioma: Idioma }) {
  const r = piezasDe(idioma).apps.fig3Rotulos;
  const M = (s: string) => s.toUpperCase();
  return (
    <svg viewBox="0 0 410 384" aria-hidden="true" focusable="false">
      <g transform="translate(30 0)">
        <g className="dib">
          <path pathLength={1} d="M130 8h120v34H130Z" />
          <path pathLength={1} d="M120 112h140v48H120Z" />
          <path pathLength={1} d="M140 334h100v34H140Z" />
        </g>
        <path className="flujo__perimetro" d="M40 76h300v138H40Z" />
        <g className="dib dib--fino">
          <path pathLength={1} d="M190 42v34m-5-7 5 7 5-7" />
          <path pathLength={1} d="M190 160v18M150 178h80M150 186h80M150 194h52" />
          <path pathLength={1} d="M190 214v24m-5-7 5 7 5-7" />
          <path pathLength={1} d="M190 302v32m-5-7 5 7 5-7" />
        </g>
        <path className="flujo__rombo" d="M190 238l32 32-32 32-32-32Z" />
        <text x="190" y="30" textAnchor="middle">{M(r.pedido)}</text>
        <text x="52" y="96">{M(r.perimetro)}</text>
        <text x="190" y="141" textAnchor="middle" className="flujo__t">{M(r.agente)}</text>
        <text x="190" y="209" textAnchor="middle" className="flujo__chico">{M(r.registro)}</text>
        <text x="230" y="262">{M(r.decide)}</text>
        <text x="190" y="356" textAnchor="middle" className="flujo__t">{M(r.sale)}</text>
      </g>
      <g className="dib dib--rojo"><path pathLength={1} d="M188 270H18V136h132m-8-6 8 6-8 6" /></g>
      <text x="26" y="290" className="flujo__rojo">{M(r.vuelve)}</text>
    </svg>
  );
}

/** Apps a la medida (es/en). Texto de `apps.ts`, el catálogo y `piezas.ts` (bloque `apps`). */
export function Apps({ idioma }: { idioma: Idioma }) {
  const p = pagina('apps', idioma);
  const ui = interfazDe(idioma);
  const t = piezasDe(idioma);
  const a = t.apps;
  const c = catalogoDe(idioma);
  const app = c.apps;
  const construimos = seccion(p, 0, 'lista');
  const ia = seccion(p, 1, 'texto');
  const proceso = seccion(p, 2, 'pasos');
  const rangos = publicarRangos ? seccion(p, 3, 'rangos') : undefined;
  const preguntas = seccion(p, rangos ? 4 : 3, 'preguntas');
  const tx = (s: string) => <Texto idioma={idioma}>{s}</Texto>;
  const eje = [`${a.fig4Rotulos.semana} 0`, '3', '6', '9', '12'];
  return (
    <>
      <JsonLd id="apps" idioma={idioma} />
      <article className="pagina" data-pagina="apps">
        {/* 1 · Portada del servicio · Fig. 1: el prototipo en línea */}
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
                <h1 className={p.h1.length > 64 ? 'mega mega--larga' : 'mega'} id="titulo">
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
                <h2 className="rotulo" id="ficha-t">{a.ficha.titulo}</h2>
                <Ficha
                  filas={[
                    { termino: a.ficha.plazo, valor: app.plazo },
                    ...(publicarRangos ? [{ termino: <>{a.ficha.rango}<LlamadaNota n={1} rotulo={t.nota} /></>, valor: app.rango }] : []),
                    { termino: a.ficha.recibe, valor: app.entregables.slice(0, 2).join(' · ') },
                  ]}
                />
              </aside>
              <div className="portada__plano" data-llega style={{ '--espera': '400ms' } as Estilo}>
                <Figura id="fig1-pie" numero={1} rotulo={t.fig} leyenda={a.fig1} clase="proto" dibuja>
                  <Prototipo idioma={idioma} />
                </Figura>
              </div>
            </div>
          </div>
        </section>

        {/* 2 · Qué construimos · Fig. 2: cuatro dibujos */}
        <section className="seccion tono-powder" id={construimos.id} aria-labelledby={`t-${construimos.id}`} data-seccion={construimos.titulo}>
          <div className="marco">
            <Cabeza {...construimos} intro={app.para} idioma={idioma} />
            <Figura id="fig2-pie" numero={2} rotulo={t.fig} leyenda={a.fig2} dibuja>
              <ul className="cuatro reticula" data-traza>
                {construimos.items.map((x, i) => (
                  <li key={x.titulo} style={{ '--i': i } as Estilo}>
                    <svg viewBox="0 0 200 110" aria-hidden="true" focusable="false">
                      <g className="dib">{DIBUJOS[i]?.[0].map((d) => <path key={d} pathLength={1} d={d} />)}</g>
                      <path className="dib dib--rojo" pathLength={1} d={DIBUJOS[i]?.[1]} />
                    </svg>
                    <p className="rotulo"><span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>{x.etiqueta}</p>
                    <h3 className="sub">{x.titulo}</h3>
                    <p>{tx(x.texto)}</p>
                  </li>
                ))}
              </ul>
            </Figura>
          </div>
        </section>

        {/* 3 · Automatización con IA · Fig. 3: el agente prepara, una persona decide */}
        <section className="seccion tono-raven" id={ia.id} aria-labelledby={`t-${ia.id}`} data-seccion={ia.etiqueta}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                <p className="rotulo">{ia.etiqueta}</p>
                <Titular id={`t-${ia.id}`} texto={ia.titulo} acento={ia.acento} />
              </div>
              <p className="lead flujo__lema" data-entra>{tx(ia.parrafos[0])}</p>
              <div className="texto" data-entra>
                {ia.parrafos.slice(1).map((x) => <p key={x}>{tx(x)}</p>)}
              </div>
            </div>
            <Figura id="fig3-pie" numero={3} rotulo={t.fig} leyenda={a.fig3} clase="partido__fig flujo" dibuja>
              <Flujo idioma={idioma} />
            </Figura>
          </div>
        </section>

        {/* 4 · Proceso de desarrollo · Fig. 4: las tres etapas sobre el plazo habitual */}
        <section className="seccion tono-powder" id={proceso.id} aria-labelledby={`t-${proceso.id}`} data-seccion={proceso.titulo}>
          <div className="marco">
            <Cabeza {...proceso} idioma={idioma} />
            <Figura id="fig4-pie" numero={4} rotulo={t.fig} leyenda={a.fig4} notas={proceso.nota && <p className="nota texto">{tx(proceso.nota)}</p>} dibuja>
              <div className="etapas">
                <div className="etapas__escala" aria-hidden="true">
                  <div className="etapas__plazo">
                    <span className="eje">{eje.map((e) => <span key={e}>{e}</span>)}</span>
                    <div className="etapas__carril">
                      <span className="etapas__barra" style={{ '--ini': 0, '--fin': 6 } as Estilo} />
                      <span className="etapas__barra etapas__barra--raya" style={{ '--ini': 6, '--fin': 12 } as Estilo} />
                    </div>
                    <span className="etapas__cifra">{app.plazo}</span>
                  </div>
                  <div className="etapas__despues">
                    <span className="etapas__d">{a.fig4Rotulos.despues}</span>
                    <div className="etapas__carril"><span className="etapas__barra etapas__barra--sigue" style={{ '--ini': 0, '--fin': 12 } as Estilo} /></div>
                    <span className="etapas__cifra">{a.fig4Rotulos.opcional}</span>
                  </div>
                </div>
                <ol className="etapas__l">
                  {proceso.pasos.map((x, i) => (
                    <li key={x.titulo} style={{ '--i': i } as Estilo}>
                      {i === 1 && <span className="etapas__confirma"><i aria-hidden="true" />{a.fig4Rotulos.confirma}</span>}
                      <p className="rotulo">{a.fig4Rotulos.etapa.replace('{n}', String(i + 1))}</p>
                      <h3 className="sub">{x.titulo}</h3>
                      <p>{tx(x.texto)}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Figura>
          </div>
        </section>

        {/* 5 · Rangos de inversión: la tabla de los cuatro servicios, con esta página marcada */}
        {rangos && (
          <section className="seccion tono-raven" id={rangos.id} aria-labelledby={`t-${rangos.id}`} data-seccion={rangos.titulo}>
            <div className="marco">
              <Cabeza {...rangos} idioma={idioma} />
              <table className="tabla rangos" data-traza>
                <caption className="solo-lectores">{a.rangos.titulo}</caption>
                <thead>
                  <tr>
                    <th scope="col">{a.rangos.servicio}</th>
                    <th scope="col">{a.rangos.plazo}</th>
                    <th scope="col">{a.rangos.entregables}</th>
                    <th scope="col" className="rangos__der">{a.rangos.rango}<LlamadaNota n={1} rotulo={t.nota} /></th>
                  </tr>
                </thead>
                <tbody>
                  {rangos.filas.map((f, i) => {
                    const sv = Object.values(c).find((x) => x.nombre === f.nombre);
                    const [plazo, ...resto] = f.detalle.split(' · ');
                    const esta = i === rangos.filas.length - 1;
                    return (
                      <tr key={f.nombre} className={esta ? 'rangos__esta' : undefined}>
                        <th scope="row">
                          {f.nombre}
                          {esta && <span className="rangos__marca">{a.rangos.estaPagina}</span>}
                        </th>
                        <td className="rangos__plazo">{sv?.plazo ?? plazo}</td>
                        <td className="rangos__ent">
                          {sv ? <ul>{sv.entregables.map((e) => <li key={e}>{e}</li>)}</ul> : resto.join(' · ')}
                        </td>
                        <td className="cifra rangos__der">{f.rango.replace(/^USD\s*/, '')}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="rangos__notas">
                <Nota n={1}>{t.fig1.notaRangos}</Nota>
              </div>
            </div>
          </section>
        )}

        {/* 6 · Preguntas */}
        <section className={`seccion ${rangos ? 'tono-powder' : 'tono-raven'}`} id={preguntas.id} aria-labelledby={`t-${preguntas.id}`} data-seccion="FAQ">
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
