import Link from 'next/link';
import { catalogoDe, interfazDe, pagina, piezasDe, publicarRangos, ruta, type Idioma } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Acentuado, Texto } from '@/components/sitio/Texto';
import { Cierre } from '@/components/vion/Cierre';
import { Boton, Cabeza, Ficha, Figura, Preguntas, Titular } from '@/components/vion/piezas';
import { seccion } from './comun';

// Los cuatro dibujos de la Fig. 2 (láminas, cuantificación, estándares, exportes): línea negra y un trazo rojo.
const DIBUJOS: [string[], string][] = [
  [['M10 10h80v56H10ZM18 18h64v40H18ZM58 58V46h24', 'M34 30h80v56H34ZM42 38h64v40H42ZM82 78V66h24', 'M58 50h80v56H58ZM66 58h64v40H66ZM106 98V86h24'], 'M152 78h34m-8-6 8 6-8 6'],
  [['M10 14h70v70H10ZM10 49h70M45 14v70', 'M112 14h78v84h-78ZM112 35h78M112 56h78M112 77h78M164 14v84'], 'M84 49h24m-7-6 7 6-7 6'],
  [['M10 14h180M10 38h180M10 62h180M10 86h180', 'M18 20h12v12H18ZM18 44h12v12H18ZM18 68h12v12H18ZM44 26h70M44 50h96M44 74h56'], 'M164 26l5 5 10-10M164 50l5 5 10-10M164 74l5 5 10-10'],
  [['M10 24h60v62H10ZM18 34h44v42H18Z', 'M112 10h34l12 12v32h-46ZM146 10v12h12M112 62h34l12 12v32h-46ZM146 62v12h12'], 'M74 55h14V32h18m-7-6 7 6-7 6M88 55v29h18m-7-6 7 6-7 6'],
];

/** La rutina de la Fig. 3: AutoLISP de verdad, completa. Los nombres de símbolos cambian con el idioma; el código es el mismo. */
function Rutina({ comando, comentario, es }: { comando: string; comentario: string; es: boolean }) {
  const [nombre, lista, par] = es ? ['nombre', 'lista', 'par'] : ['name', 'totals', 'pair'];
  return (
    <code>
      <span className="c">{comentario}</span>{'\n'}
      (<b>defun</b> <i>c:{comando}</i> (/ sel i {nombre} {lista} {par}){'\n'}
      {'  '}(<b>if</b> (<b>setq</b> sel (ssget <u>&quot;_X&quot;</u> &apos;((0 . <u>&quot;INSERT&quot;</u>)))){'\n'}
      {'    '}(<b>progn</b>{'\n'}
      {'      '}(<b>setq</b> i 0){'\n'}
      {'      '}(<b>repeat</b> (sslength sel){'\n'}
      {'        '}(<b>setq</b> {nombre} (cdr (assoc 2 (entget (ssname sel i))))){'\n'}
      {'        '}(<b>if</b> (<b>setq</b> {par} (assoc {nombre} {lista})){'\n'}
      {'          '}(<b>setq</b> {lista} (subst (cons {nombre} (1+ (cdr {par}))) {par} {lista})){'\n'}
      {'          '}(<b>setq</b> {lista} (cons (cons {nombre} 1) {lista}))){'\n'}
      {'        '}(<b>setq</b> i (1+ i))){'\n'}
      {'      '}(<b>foreach</b> {par} {lista}{'\n'}
      {'        '}(princ (strcat <u>&quot;{"\\n"}&quot;</u> (car {par}) <u>&quot;: &quot;</u> (itoa (cdr {par})))))))){'\n'}
      {'  '}(princ))
    </code>
  );
}

/** Automatización de AutoCAD (es/en): la segunda página de referencia del sistema. Texto de `autocad.ts` y `piezas.ts`. */
export function Autocad({ idioma }: { idioma: Idioma }) {
  const p = pagina('autocad', idioma);
  const ui = interfazDe(idioma);
  const t = piezasDe(idioma);
  const a = t.autocad;
  const piloto = catalogoDe(idioma).piloto;
  const tareas = seccion(p, 0, 'lista');
  const rutinas = seccion(p, 1, 'texto');
  const plugins = seccion(p, 2, 'texto');
  const ejemplos = seccion(p, 3, 'ficha');
  const cotiza = seccion(p, 4, 'texto');
  const preguntas = seccion(p, 5, 'preguntas');
  const tx = (s: string) => <Texto idioma={idioma}>{s}</Texto>;
  const comando = idioma === 'es' ? 'CONTAR' : 'COUNT';
  return (
    <>
      <JsonLd id="autocad" idioma={idioma} />
      <article className="pagina" data-pagina="autocad">
        {/* 1 · Portada del servicio · Fig. 1 */}
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
                <p className="rotulo" data-llega style={{ '--espera': '200ms' } as React.CSSProperties}>{p.etiqueta}</p>
                <h1 className="mega mega--larga" id="titulo">
                  <Acentuado texto={p.h1} acento={p.acento} />
                </h1>
              </div>
              <div className="portada__texto">
                <p className="lead" data-llega style={{ '--espera': '520ms' } as React.CSSProperties}>{tx(p.bajada)}</p>
                {p.acciones && (
                  <div className="acciones" data-llega style={{ '--espera': '620ms' } as React.CSSProperties}>
                    <Boton accion={p.acciones[0]} idioma={idioma} flecha />
                    {p.acciones[1] && <Boton accion={p.acciones[1]} idioma={idioma} variante="linea" />}
                  </div>
                )}
              </div>
              <aside className="portada__ficha" aria-labelledby="ficha-t" data-llega style={{ '--espera': '720ms' } as React.CSSProperties}>
                <h2 className="rotulo" id="ficha-t">{piloto.nombre}</h2>
                <Ficha
                  filas={[
                    { termino: a.cotiza.plazo, valor: piloto.plazo },
                    ...(publicarRangos ? [{ termino: a.cotiza.rango, valor: piloto.rango }] : []),
                    { termino: a.cotiza.recibe, valor: piloto.entregables[0] },
                  ]}
                />
              </aside>
              <div className="portada__plano" data-llega style={{ '--espera': '400ms' } as React.CSSProperties}>
                <Figura id="fig1-pie" numero={1} rotulo={t.fig} leyenda={a.fig1} clase="juego" dibuja>
                  <svg viewBox="0 0 420 330" aria-hidden="true" focusable="false">
                    <g className="dib dib--fino"><path pathLength={1} d="M92 12h316v224H92Z" /><path pathLength={1} d="M300 236v-40h108M300 216h108" /></g>
                    <g className="dib dib--fino"><path pathLength={1} d="M52 36h316v224H52Z" /><path pathLength={1} d="M260 260v-40h108M260 240h108" /></g>
                    <rect className="juego__fondo" x="12" y="60" width="316" height="224" />
                    <g className="dib">
                      <path pathLength={1} d="M12 60h316v224H12Z" />
                      <path pathLength={1} d="M22 70h296v204H22Z" />
                      <path pathLength={1} d="M220 274v-44h98M220 252h98M278 230v44" />
                      <path pathLength={1} d="M34 82h130v84H34ZM176 82h130v136H176ZM34 178h130v84H34Z" />
                      <path pathLength={1} d="M46 96h70v40H46ZM82 96v40M46 116h36M190 100h100M190 118h100M190 136h100M190 154h100M190 172h60M48 196h44v50H48ZM104 196h44v24h-44Z" />
                    </g>
                    <text x="226" y="246">{t.transicion.lamina.toUpperCase()}</text>
                    <text x="285" y="268" className="juego__num">A-01</text>
                    <path className="dib dib--rojo" pathLength={1} d="M12 310l8 5-8 5" />
                    <text className="juego__cmd" x="30" y="320">{a.fig1Comando}</text>
                  </svg>
                </Figura>
              </div>
            </div>
          </div>
        </section>

        {/* 2 · Tareas · Fig. 2 */}
        <section className="seccion tono-powder" id={tareas.id} aria-labelledby={`t-${tareas.id}`} data-seccion={tareas.etiqueta}>
          <div className="marco">
            <Cabeza {...tareas} idioma={idioma} />
            <Figura id="fig2-pie" numero={2} rotulo={t.fig} leyenda={a.fig2} dibuja>
              <ul className="matriz reticula" data-traza>
                {tareas.items.map((x, i) => (
                  <li key={x.titulo} style={{ '--i': i } as React.CSSProperties}>
                    <svg viewBox="0 0 200 110" aria-hidden="true" focusable="false">
                      <g className="dib">{DIBUJOS[i]?.[0].map((d) => <path key={d} pathLength={1} d={d} />)}</g>
                      <path className="dib dib--rojo" pathLength={1} d={DIBUJOS[i]?.[1]} />
                    </svg>
                    <p className="rotulo">{x.etiqueta}</p>
                    <h3 className="sub">{x.titulo}</h3>
                    <p>{tx(x.texto)}</p>
                  </li>
                ))}
              </ul>
            </Figura>
          </div>
        </section>

        {/* 3 · Rutinas AutoLISP · Fig. 3: una rutina de verdad */}
        <section className="seccion tono-raven" id={rutinas.id} aria-labelledby={`t-${rutinas.id}`} data-seccion={rutinas.etiqueta}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                <p className="rotulo">{rutinas.etiqueta}</p>
                <Titular id={`t-${rutinas.id}`} texto={rutinas.titulo} acento={rutinas.acento} />
              </div>
              <p className="lead" data-entra>{tx(rutinas.parrafos[0])}</p>
              <div className="texto" data-entra>
                {rutinas.parrafos.slice(1).map((x) => <p key={x}>{tx(x)}</p>)}
              </div>
            </div>
            <Figura id="fig3-pie" numero={3} rotulo={t.fig} leyenda={a.fig3} clase="codigo partido__fig">
              <div className="codigo__caja">
                <p className="codigo__barra"><span>{a.fig3Archivo}</span><span>{a.fig3Rotulo}</span></p>
                <pre tabIndex={0} role="region" aria-label={a.fig3Codigo}>
                  <Rutina comando={comando} comentario={a.fig3Comentario} es={idioma === 'es'} />
                </pre>
                <p className="codigo__cmd"><span>{a.fig3Comando}</span>{comando}<i aria-hidden="true" /></p>
              </div>
            </Figura>
          </div>
        </section>

        {/* 4 · Plugins */}
        <section className="seccion tono-powder" id={plugins.id} aria-labelledby={`t-${plugins.id}`} data-seccion={plugins.etiqueta}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                <p className="rotulo">{plugins.etiqueta}</p>
                <Titular id={`t-${plugins.id}`} texto={plugins.titulo} acento={plugins.acento} />
              </div>
              <p className="lead" data-entra>{tx(plugins.parrafos[0])}</p>
              <div className="texto" data-entra>
                {plugins.parrafos.slice(1).map((x) => <p key={x}>{tx(x)}</p>)}
              </div>
            </div>
            <figure className="esquema partido__fig" data-dibuja>
              <svg viewBox="0 0 520 300" role="img" aria-label={a.esquema.alt}>
                <g className="dib">
                  <path pathLength={1} d="M20 30h90v50H20ZM30 20h90v50M40 10h90v50" />
                  <path pathLength={1} d="M210 110h120v80H210Z" />
                  <path pathLength={1} d="M410 30h90v60h-90ZM410 50h90M410 70h90M440 30v60M470 30v60" />
                  <path pathLength={1} d="M410 210h90v60h-90Z" />
                </g>
                <g className="dib dib--rojo"><path pathLength={1} d="M110 70l100 60m-11-1 11 1-5-10M330 130l80-60m-10 2 10-2-4 10M330 170l80 60m-11-1 11 1-5-10" /></g>
                <g aria-hidden="true">
                  <text x="20" y="130">{a.esquema.archivos}</text>
                  <text x="270" y="155" textAnchor="middle">{a.esquema.plugin}</text>
                  <text x="500" y="18" textAnchor="end">{a.esquema.hoja}</text>
                  <text x="500" y="292" textAnchor="end">{a.esquema.sistema}</text>
                </g>
              </svg>
            </figure>
          </div>
        </section>

        {/* 5 · Medido, no prometido: el cuadro de revisiones dice lo que todavía falta medir */}
        <section className="seccion tono-raven" id={ejemplos.id} aria-labelledby={`t-${ejemplos.id}`} data-seccion={ejemplos.etiqueta}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                <p className="rotulo">{ejemplos.etiqueta}</p>
                <Titular id={`t-${ejemplos.id}`} texto={ejemplos.titulo} acento={ejemplos.acento} />
              </div>
              {ejemplos.nota && <p className="texto" data-entra>{tx(ejemplos.nota)}</p>}
            </div>
            <div className="partido__fig">
              <table className="tabla" data-traza>
                <caption className="solo-lectores">{a.revisiones}</caption>
                <thead>
                  <tr><th scope="col">{a.rev}</th><th scope="col">{a.queSeMide}</th><th scope="col">{a.resultado}</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="tabla__rev">A</th>
                    <td>{tx(ejemplos.filas[0].valor)}</td>
                    <td><span className="tabla__estado">{a.pendiente}</span>{tx(ejemplos.filas[1].valor)}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="tabla__rev">B</th>
                    <td>{ejemplos.filas[2].termino}</td>
                    <td><span className="tabla__estado">{a.pendiente}</span>{tx(ejemplos.filas[2].valor)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6 · Cómo se cotiza */}
        <section className="seccion tono-powder" id={cotiza.id} aria-labelledby={`t-${cotiza.id}`} data-seccion={cotiza.titulo}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                <p className="rotulo">{cotiza.etiqueta}</p>
                <Titular id={`t-${cotiza.id}`} texto={cotiza.titulo} acento={cotiza.acento} />
              </div>
              <div className="texto" data-entra>
                {cotiza.parrafos.map((x) => <p key={x}>{tx(x)}</p>)}
              </div>
            </div>
            <div className="cotiza__lado">
              {publicarRangos && (
                <div>
                  <p className="rotulo">{a.cotiza.rango}</p>
                  <p className="cotiza__cifra">{piloto.rango}</p>
                </div>
              )}
              <Ficha
                filas={[
                  { termino: a.cotiza.plazo, valor: piloto.plazo },
                  { termino: a.cotiza.recibe, valor: <ul className="cotiza__entrega">{piloto.entregables.map((e) => <li key={e}>{e}</li>)}</ul> },
                ]}
              />
            </div>
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
