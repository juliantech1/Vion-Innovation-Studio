import Image from 'next/image';
import type { CSSProperties } from 'react';
import { pagina, piezasDe, type Idioma, type Proyecto } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Texto } from '@/components/sitio/Texto';
import { Cierre } from '@/components/vion/Cierre';
import { Cabeza, Ficha, Figura, Titular } from '@/components/vion/piezas';
import { seccion } from './comun';
import { caja, circulo, marcasCota, PortadaInterior, punta, rombo, T, Desliza } from './estudio';

type Rotulos = string[];
const n2 = (i: number) => String(i + 1).padStart(2, '0');

/** Fig. Ultron: los agentes dejan su trabajo en la cola y una persona decide (el rombo rojo). */
function Ultron({ r }: { r: Rotulos }) {
  const ys = [58, 98, 138, 178, 218];
  return (
    <>
      <T d={caja(4, 22, 412, 278)} fino />
      {ys.map((y, i) => <T key={y} d={caja(16, y, 150, 30)} i={i} />)}
      <T d={ys.map((y) => `M166 ${y + 15}C180 ${y + 15} 174 152 188 152`).join('') + punta(188, 152, 'der')} i={2} />
      <T d={caja(190, 116, 66, 72) + caja(199, 127, 48, 13) + caja(199, 146, 48, 13) + caja(199, 165, 48, 13)} i={3} />
      <T d={'M256 152h62' + punta(318, 152, 'der') + 'M356 152h48' + punta(404, 152, 'der')} i={4} />
      <T d={rombo(338, 152, 16)} rojo />
      <T d={'M338 168v100H91v-12' + punta(91, 256, 'arr')} fino i={5} />
      <T d={caja(214, 40, 194, 22) + caja(214, 66, 194, 22)} fino i={1} />
      <g aria-hidden="true">
        <text x="16" y="15">{r[0]}</text>
        <text x="16" y="48" className="d-tenue">{r[6]}</text>
        {ys.map((y, i) => <text key={y} x="26" y={y + 19}>{r[i + 1]}</text>)}
        <text x="190" y="206">{r[7]}</text>
        <text x="338" y="124" textAnchor="middle" className="d-rojo">{r[8]}</text>
        <text x="404" y="174" textAnchor="end">{r[9]}</text>
        <text x="214" y="288" textAnchor="middle" className="d-tenue">{r[10]}</text>
        <text x="224" y="55">{r[11]}</text>
        <text x="224" y="81">{r[12]}</text>
      </g>
    </>
  );
}

/** Fig. Top Spin: la planta reglamentaria de una pista de pádel (20 × 10 m, a 19 px por metro). */
function TopSpin({ r }: { r: Rotulos }) {
  const [x0, y0, m] = [14, 52, 19];
  const [ancho, alto] = [20 * m, 10 * m];
  const red = x0 + ancho / 2;
  const saque = 6.95 * m;
  const xd = x0 + ancho + 12;
  return (
    <>
      <T d={caja(x0, y0, ancho, alto)} />
      <T d={`M${red - saque} ${y0}v${alto}M${red + saque} ${y0}v${alto}M${red - saque} ${y0 + alto / 2}H${red + saque}`} i={1} />
      <T d={`M${red} ${y0 - 8}v${alto + 16}`} rojo />
      <T d={`M${x0 - 3} ${y0 - 3}v${alto + 6}M${x0 + ancho + 3} ${y0 - 3}v${alto + 6}M${x0} ${y0 - 3}h${4 * m}M${x0 + ancho} ${y0 - 3}h${-4 * m}M${x0} ${y0 + alto + 3}h${4 * m}M${x0 + ancho} ${y0 + alto + 3}h${-4 * m}`} i={2} />
      <T d={`M${x0} 24H${x0 + ancho}` + marcasCota(x0, x0 + ancho, 24, 4) + `M${xd} ${y0}V${y0 + alto}M${xd - 4} ${y0 + 4}l8-8M${xd - 4} ${y0 + alto + 4}l8-8`} fino i={3} />
      <T d={`M${red - saque} ${y0 + alto + 8}v10M${red} ${y0 + alto + 8}v10M${x0 + ancho} ${y0 + alto + 8}v10`} fino i={4} />
      <g aria-hidden="true">
        <text x={x0 + ancho / 2} y="17" textAnchor="middle" className="d-fuerte">{r[1]}</text>
        <text x={xd + 10} y={y0 + alto / 2} textAnchor="middle" className="d-fuerte" transform={`rotate(-90 ${xd + 10} ${y0 + alto / 2})`}>{r[2]}</text>
        <text x={red} y={y0 + alto + 32} textAnchor="middle" className="d-rojo">{r[0]}</text>
        <text x={red - saque} y={y0 + alto + 32} textAnchor="middle">{r[3]}</text>
        <text x={x0 + ancho} y={y0 + alto + 32} textAnchor="end">{r[4]}</text>
        <text x={x0} y={y0 + alto + 58} className="d-tenue">{r[5]}</text>
      </g>
    </>
  );
}

/** Fig. RealFood: envases con compartimentos, en planta, dentro de la flecha de un ciclo que se repite. */
function RealFood({ r }: { r: Rotulos }) {
  const xs = [68, 168, 268];
  const envase = (x: number) => caja(x, 118, 86, 62, 9) + `M${x + 52} 118v62M${x + 52} 149h34`;
  return (
    <>
      {xs.map((x, i) => <T key={x} d={envase(x)} i={i} />)}
      <T d={'M326 84H362a30 30 0 0 1 30 30V188a30 30 0 0 1-30 30H58a30 30 0 0 1-30-30V114a30 30 0 0 1 30-30H230' + punta(232, 84, 'der', 7)} rojo />
      <T d="M111 186V248" fino i={3} />
      <g aria-hidden="true">
        <text x="210" y="40" textAnchor="middle" className="d-fuerte">{r[0]}</text>
        <text x="279" y="88" textAnchor="middle" className="d-rojo">{r[2]}</text>
        <text x="111" y="266" textAnchor="middle">{r[1]}</text>
        <text x="392" y="290" textAnchor="end" className="d-tenue">{r[3]}</text>
      </g>
    </>
  );
}

/** Fig. Viazo: dos rutas con paradas y buses que marcan su posición por GPS (esquema, no mapa). */
function Viazo({ r }: { r: Rotulos }) {
  const r51 = 'M14 74H120L176 136H286L338 74H406';
  const r53 = 'M14 236H128L180 160H282L330 236H406';
  const paradas = [[60, 74], [148, 105], [232, 136], [372, 74], [60, 236], [154, 198], [232, 160], [368, 236]];
  const bus = (x: number, y: number) => caja(x - 14, y - 7, 28, 14, 3);
  const ondas = (x: number, y: number) => `M${x - 9} ${y - 16}a12 12 0 0 1 18 0M${x - 15} ${y - 23}a20 20 0 0 1 30 0`;
  return (
    <>
      <T d={r51} />
      <T d={r53} i={1} />
      <T d={paradas.map(([x, y]) => circulo(x, y, 4)).join('')} fino i={2} />
      <T d={bus(96, 74) + bus(258, 136) + bus(352, 236)} i={3} />
      <T d={ondas(96, 66) + ondas(258, 128) + ondas(352, 228)} rojo />
      <g aria-hidden="true">
        <text x="14" y="60" className="d-fuerte">{r[0]}</text>
        <text x="14" y="262" className="d-fuerte">{r[1]}</text>
        <text x="258" y="94" textAnchor="middle" className="d-rojo">{r[2]}</text>
        <text x="232" y="190" textAnchor="middle" className="d-tenue">{r[3]}</text>
      </g>
    </>
  );
}

const DIBUJOS: Record<string, { vb: string; D: (x: { r: Rotulos }) => React.ReactNode }> = {
  ultron: { vb: '0 0 420 300', D: Ultron },
  topspin: { vb: '0 0 420 312', D: TopSpin },
  realfood: { vb: '0 0 420 300', D: RealFood },
  viazo: { vb: '0 0 420 300', D: Viazo },
};

/** Casos (es) / Work (en): los proyectos propios, uno por lámina, y la ficha franca de los casos de clientes. */
export function Casos({ idioma }: { idioma: Idioma }) {
  const p = pagina('casos', idioma);
  const t = piezasDe(idioma).casos;
  const fig = piezasDe(idioma).fig;
  const propios = seccion(p, 0, 'proyectos');
  const clientes = seccion(p, 1, 'texto');
  const tx = (s: string) => <Texto idioma={idioma}>{s}</Texto>;
  const esCasillero = (s: string) => s.startsWith('{{');

  const ficha = (
    <Ficha
      clase="ficha--indice"
      filas={[
        ...propios.proyectos.map((x, i) => ({ termino: n2(i), valor: <a href={`#${x.id}`}>{x.nombre}</a>, detalle: x.linea })),
        { termino: '', valor: <a href={`#${clientes.id}`}>{t.clientesValor}</a>, detalle: t.clientes },
      ]}
    />
  );

  const proyecto = (x: Proyecto, i: number) => {
    const d = DIBUJOS[x.id];
    const f = t.figuras[x.id as keyof typeof t.figuras];
    return (
      <article key={x.id} id={x.id} className={`proyecto ${i % 2 ? 'tono-raven proyecto--par' : 'tono-powder'}`} aria-labelledby={`t-${x.id}`} data-seccion={x.nombre}>
        {i === 0 && (
          <div className="marco">
            <Cabeza {...propios} idioma={idioma} />
          </div>
        )}
        <div className="marco reticula proyecto__cuerpo">
          <div className="proyecto__texto">
            <p className="rotulo proyecto__n">
              <span>{t.proyecto} {n2(i)}</span>
              {x.linea}
            </p>
            <h3 className="proyecto__t" id={`t-${x.id}`}>{x.nombre}</h3>
            <p className="lead" data-entra>{tx(x.que)}</p>
            <Ficha clase="ficha--larga" filas={x.filas.map((r) => ({ termino: r.termino, valor: tx(r.valor) }))} />
            {x.imagen ? (
              <Image className="proyecto__img" src={x.imagen.src} alt={x.imagen.alt} width={x.imagen.ancho} height={x.imagen.alto} sizes="(min-width: 62rem) 40vw, 100vw" />
            ) : (
              x.captura && (
                <p className="proyecto__captura">
                  <span className="rotulo">{t.captura}</span>
                  {tx(x.captura)}
                </p>
              )
            )}
          </div>
          {d && f && (
            <Figura id={`fig${i + 1}-pie`} numero={i + 1} rotulo={fig} leyenda={f.pie} clase={x.id === 'ultron' ? 'dibujo dibujo--ancho proyecto__fig' : 'dibujo proyecto__fig'} dibuja>
              {x.id === 'ultron' ? (
                <Desliza etiqueta={f.alt}>
                  <svg viewBox={d.vb} role="img" aria-label={f.alt}>
                    <d.D r={f.r} />
                  </svg>
                </Desliza>
              ) : (
                <svg viewBox={d.vb} role="img" aria-label={f.alt}>
                  <d.D r={f.r} />
                </svg>
              )}
            </Figura>
          )}
        </div>
      </article>
    );
  };

  return (
    <>
      <JsonLd id="casos" idioma={idioma} />
      <article className="pagina" data-pagina="casos">
        <PortadaInterior p={p} idioma={idioma} fichaTitulo={t.fichaTitulo} ficha={ficha} />

        <section id={propios.id} aria-labelledby={`t-${propios.id}`} data-seccion={propios.etiqueta}>
          {propios.proyectos.map(proyecto)}
        </section>

        <section className="seccion tono-powder" id={clientes.id} aria-labelledby={`t-${clientes.id}`} data-seccion={clientes.titulo}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                <p className="rotulo">{clientes.etiqueta}</p>
                <Titular id={`t-${clientes.id}`} texto={clientes.titulo} acento={clientes.acento} />
              </div>
              <p className="lead clientes__dicho" data-entra>{tx(clientes.parrafos[0])}</p>
              <div className="texto" data-entra>
                {clientes.parrafos.slice(1).filter((s) => !esCasillero(s)).map((s) => <p key={s}>{tx(s)}</p>)}
              </div>
            </div>
            <div className="clientes__ficha" data-entra style={{ '--i': 1 } as CSSProperties}>
              <div className="clientes__cab">
                <h3 className="rotulo">{t.plantilla.titulo}</h3>
                <span className="tabla__estado">{t.plantilla.estado}</span>
              </div>
              <Ficha filas={t.plantilla.filas} />
              {clientes.parrafos.filter(esCasillero).map((s) => <p key={s} className="clientes__nota">{tx(s)}</p>)}
            </div>
          </div>
        </section>

        {p.llamado && <Cierre llamado={p.llamado} idioma={idioma} />}
      </article>
    </>
  );
}
