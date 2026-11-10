import Link from 'next/link';
import { MENU, pagina, piezasDe, ruta, type IdPagina, type Idioma } from '@/content';
import { AMBIENTES, ANCHO, FONDO, VISTA, XS, YC, YS, segmentos } from './geometria';
import { PlanoVivo } from './PlanoVivo';

// Unidades del póster: 100 por metro. La caja de la figura tiene esta misma proporción.
const U = 100;
const X = (x: number) => +((x - VISTA.x0) * U).toFixed(1);
const Y = (y: number) => +((VISTA.y1 - y) * U).toFixed(1);
const ORDEN: IdPagina[] = ['inicio', ...MENU];
/** El trazado dura 2,3 s y arranca cuando el titular ya está en su lugar. */
const T = 2300;
const T0 = 500;
const tiempo = (t0: number, t1: number) => ({ '--t0': `${Math.round(T0 + t0 * T)}ms`, '--dur': `${Math.max(120, Math.round((t1 - t0) * T))}ms` }) as React.CSSProperties;
const tarde = (ms: number) => ({ '--t0': `${T0 + ms}ms` }) as React.CSSProperties;

function Cota({ x0, y0, x1, y1, rotulo, lateral }: { x0: number; y0: number; x1: number; y1: number; rotulo: string; lateral?: boolean }) {
  const tic = (x: number, y: number) => `M${X(x) - 13} ${Y(y) + 13}L${X(x) + 13} ${Y(y) - 13}`;
  return (
    <g className={lateral ? 'p-tarde p-lateral' : 'p-tarde'} style={tarde(1500)}>
      <path className="p-cota" d={`M${X(x0)} ${Y(y0)}L${X(x1)} ${Y(y1)}`} />
      <path className="p-tic" d={`${tic(x0, y0)}${tic(x1, y1)}`} />
      {lateral ? (
        <text x={X(x0) - 22} y={Y((y0 + y1) / 2) + 12} style={{ textAnchor: 'end' }}>{rotulo}</text>
      ) : (
        <text x={X((x0 + x1) / 2)} y={Y(y0) - 20}>{rotulo}</text>
      )}
    </g>
  );
}

/**
 * La figura de firma de la portada: la planta del sitio. Sale entera en el HTML (un SVG que se traza solo con CSS) y
 * sus ambientes son enlaces de verdad a las páginas. Después del LCP, `PlanoVivo` monta encima el lienzo que respira
 * y que, con el scroll, pasa a isométrica y a corte A-A. Sin JavaScript o con movimiento reducido queda la planta.
 */
export function Plano({ idioma }: { idioma: Idioma }) {
  const t = piezasDe(idioma).portada.figura;
  const fig = piezasDe(idioma).fig;
  const planta = segmentos().filter((s) => s.a[2] === 0 && s.b[2] === 0 && ['eje', 'muro', 'tabique', 'puerta', 'corte'].includes(s.capa));
  return (
    <figure className="plano" data-plano aria-labelledby="plano-pie">
      <div className="plano__caja">
        <svg className="plano__poster" viewBox={`0 0 ${VISTA.ancho * U} ${VISTA.alto * U}`} aria-hidden="true" focusable="false">
          {planta.map((s, i) => (
            <path key={i} className={`p-${s.capa}`} pathLength={1} style={tiempo(s.t0, s.t1)} d={`M${X(s.a[0])} ${Y(s.a[1])}L${X(s.b[0])} ${Y(s.b[1])}`} />
          ))}
          <g className="p-tarde" style={tarde(700)}>
            {XS.flatMap((x) => YS.map((y) => <rect key={`${x}-${y}`} className="p-col" x={X(x) - 13} y={Y(y) - 13} width={26} height={26} />))}
          </g>
          <g className="p-tarde" style={tarde(400)}>
            {XS.map((x, k) => (
              <g key={x}>
                <circle className="p-burbuja" cx={X(x)} cy={Y(FONDO + 1.75)} r={35} />
                <text x={X(x)} y={Y(FONDO + 1.75) + 12}>{'ABCD'[k]}</text>
              </g>
            ))}
          </g>
          <g className="p-tarde p-lateral" style={tarde(400)}>
            {YS.map((y, k) => (
              <g key={y}>
                <circle className="p-burbuja" cx={X(ANCHO + 1.75)} cy={Y(y)} r={35} />
                <text x={X(ANCHO + 1.75)} y={Y(y) + 12}>{k + 1}</text>
              </g>
            ))}
          </g>
          {[0, 1, 2].map((i) => <Cota key={i} x0={XS[i]} y0={-1.45} x1={XS[i + 1]} y1={-1.45} rotulo="4.00" />)}
          <Cota x0={0} y0={-2.5} x1={ANCHO} y1={-2.5} rotulo="12.00" />
          {[0, 1, 2].map((i) => <Cota key={i} lateral x0={-1.45} y0={YS[i]} x1={-1.45} y1={YS[i + 1]} rotulo={['4.50', '1.00', '2.50'][i]} />)}
          <g className="p-tarde" style={tarde(2100)}>
            {[-1.1, ANCHO + 1.1].map((x) => (
              <g key={x}>
                <path className="p-flecha" d={`M${X(x)} ${Y(YC)}L${X(x)} ${Y(YC + 0.8)}M${X(x) - 13} ${Y(YC + 0.8) + 22}L${X(x)} ${Y(YC + 0.8)}L${X(x) + 13} ${Y(YC + 0.8) + 22}`} />
                <text className="p-rojo" x={X(x) + (x < 0 ? -36 : 36)} y={Y(YC) + 13}>A</text>
              </g>
            ))}
          </g>
        </svg>
        <ul className="plano__ambientes" aria-label={t.ambientes}>
          {AMBIENTES.map(({ id, caja }) => {
            const n = String(ORDEN.indexOf(id) + 1).padStart(2, '0');
            const estilo = {
              '--x': `${(((caja[0] - VISTA.x0) / VISTA.ancho) * 100).toFixed(3)}%`,
              '--y': `${(((VISTA.y1 - caja[3]) / VISTA.alto) * 100).toFixed(3)}%`,
              '--w': `${(((caja[2] - caja[0]) / VISTA.ancho) * 100).toFixed(3)}%`,
              '--h': `${(((caja[3] - caja[1]) / VISTA.alto) * 100).toFixed(3)}%`,
            } as React.CSSProperties;
            const nombre = pagina(id, idioma).nav;
            return (
              <li key={id} data-amb={id} data-fila={caja[1] >= 5.5 ? 'fondo' : undefined} style={estilo}>
                {id === 'inicio' ? (
                  <span className="amb" aria-current="page">{nombre} <b>{n}</b></span>
                ) : (
                  <Link href={ruta(id, idioma)}>{nombre} <b>{n}</b></Link>
                )}
              </li>
            );
          })}
        </ul>
        <canvas className="plano__lienzo" aria-hidden="true" />
      </div>
      <figcaption id="plano-pie">
        <span className="plano__vista" data-plano-vista>{t.vistas[0]}</span>
        <span className="pie-fig"><b>{fig} 0</b>{t.nombre}. {t.pie}</span>
      </figcaption>
      <PlanoVivo vistas={t.vistas} />
    </figure>
  );
}
