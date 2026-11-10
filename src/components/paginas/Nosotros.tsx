import type { CSSProperties } from 'react';
import { MENU, pagina, piezasDe, ruta, type IdPagina, type Idioma } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Texto } from '@/components/sitio/Texto';
import { Cierre } from '@/components/vion/Cierre';
import { Cabeza, Ficha, Figura, FilaServicio, Titular } from '@/components/vion/piezas';
import { seccion } from './comun';
import { caja, marcasCota, PortadaInterior, punta, punteada, rombo, T, Desliza } from './estudio';

const numero = (id: IdPagina) => String(MENU.indexOf(id) + 2).padStart(2, '0');

/** Fig. 1: la misma tarea medida antes y después sobre la misma cota; al final decide usted (el rombo rojo). */
function Medida({ r }: { r: string[] }) {
  return (
    <>
      <T d={'M14 60H406' + marcasCota(14, 406, 60)} />
      <T d={'M30 78v58' + punta(30, 136, 'aba')} fino i={1} />
      <T d={punteada(14, 356, 196) + 'M14 187v18M9 201l10-10'} i={2} />
      <T d={'M360 196h20' + punta(380, 196, 'der', 5)} i={3} />
      <T d={rombo(398, 196, 12)} rojo />
      <g aria-hidden="true">
        <text x="14" y="30" className="d-fuerte">{r[0]}</text>
        <text x="210" y="50" textAnchor="middle">{r[3]}</text>
        <text x="44" y="112">{r[1]}</text>
        <text x="14" y="166" className="d-fuerte">{r[2]}</text>
        <text x="185" y="186" textAnchor="middle" className="d-tenue">{r[4]}</text>
        <text x="410" y="234" textAnchor="end" className="d-rojo">{r[5]}</text>
      </g>
    </>
  );
}

/** Fig. 2: una jornada de 8 a 17 h en Costa Rica y en las cuatro zonas de EE.UU. continental, en hora de Costa Rica. */
function Husos({ h, idioma }: { h: ReturnType<typeof piezasDe>['nosotros']['husos']; idioma: Idioma }) {
  const x = (hora: number) => 120 + (hora - 6) * 20.4;
  const fila = (i: number) => 30 + i * 36;
  const horas = Array.from({ length: 15 }, (_, i) => 6 + i);
  return (
    <>
      <T d={`M${x(8)} 14V184M${x(17)} 14V184`} fino />
      {h.zonas.map((z, i) => {
        const [a, b] = [8 - z.desfase, 17 - z.desfase];
        return <T key={z.nombre} d={caja(x(a), fila(i) - 6, x(b) - x(a), 12)} rojo={i === 0} i={i} />;
      })}
      <T d={`M${x(6)} 200H${x(20)}` + horas.map((hr) => `M${x(hr)} 200v${hr % 2 ? 3 : 6}`).join('')} i={2} />
      <g aria-hidden="true">
        {h.zonas.map((z, i) => {
          const [a, b] = [Math.max(8, 8 - z.desfase), Math.min(17, 17 - z.desfase)];
          return (
            <g key={z.nombre}>
              {i > 0 && <rect className="d-relleno" x={x(a)} y={fila(i) - 6} width={x(b) - x(a)} height="12" />}
              <text x="0" y={fila(i) + 3} className={i === 0 ? 'd-fuerte' : undefined}>{z.nombre}</text>
              {i > 0 && <text x="0" y={fila(i) + 16} className="d-tenue">{`${b - a} h ${h.comun}`}</text>}
            </g>
          );
        })}
        {horas.filter((hr) => hr % 2 === 0).map((hr) => (
          <text key={hr} x={x(hr)} y="218" textAnchor="middle" className="d-tenue">
            {idioma === 'es' ? hr : `${hr % 12 || 12}${hr < 12 ? 'a' : 'p'}`}
          </text>
        ))}
        <text x="0" y="244" className="d-tenue">{h.jornada}</text>
        <text x="420" y="244" textAnchor="end" className="d-tenue">{h.hora}</text>
      </g>
    </>
  );
}

/** Nosotros (es) / About (en): las personas, cómo se trabaja, lo que se cree y el vínculo con Costa Rica y EE.UU. */
export function Nosotros({ idioma }: { idioma: Idioma }) {
  const p = pagina('nosotros', idioma);
  const t = piezasDe(idioma);
  const n = t.nosotros;
  const quienes = seccion(p, 0, 'personas');
  const como = seccion(p, 1, 'texto');
  const experiencia = seccion(p, 2, 'texto');
  const creemos = seccion(p, 3, 'lista');
  const pais = seccion(p, 4, 'texto');
  const hacemos = seccion(p, 5, 'lista');
  const tx = (s: string) => <Texto idioma={idioma}>{s}</Texto>;

  const ficha = (
    <Ficha
      filas={[
        { termino: n.estudio, valor: n.estudioValor },
        ...quienes.personas.map((x) => ({ termino: x.cargo.split(' · ')[0], valor: x.nombre })),
        ...t.trabajo.ficha,
      ]}
    />
  );

  return (
    <>
      <JsonLd id="nosotros" idioma={idioma} />
      <article className="pagina" data-pagina="nosotros">
        <PortadaInterior p={p} idioma={idioma} fichaTitulo={n.fichaTitulo} ficha={ficha} />

        {/* 2 · Las personas y lo hecho: un mismo tono */}
        <div className="tono-powder">
          <section className="seccion seccion--sin-fin" id={quienes.id} aria-labelledby={`t-${quienes.id}`} data-seccion={quienes.etiqueta}>
            <div className="marco">
              <Cabeza {...quienes} idioma={idioma} />
              <ul className="personas reticula" data-traza>
                {quienes.personas.map((x, i) => {
                  const [cargo, area] = x.cargo.split(' · ');
                  return (
                    <li key={x.nombre} className="persona" data-entra style={{ '--i': i } as CSSProperties}>
                      <p className="rotulo">{n.persona} {String(i + 1).padStart(2, '0')}</p>
                      <h3 className="persona__nombre">{x.nombre}</h3>
                      <p className="persona__cargo"><b>{cargo}</b>{area && <span>{area}</span>}</p>
                      <div className="persona__bio">
                        <p className="rotulo">{n.bio}</p>
                        <p>{tx(x.bio)}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <section className="seccion experiencia" id={experiencia.id} aria-labelledby={`t-${experiencia.id}`} data-seccion={experiencia.etiqueta}>
            <div className="marco reticula">
              <div className="experiencia__t encabezado">
                <p className="rotulo">{experiencia.etiqueta}</p>
                <Titular id={`t-${experiencia.id}`} texto={experiencia.titulo} acento={experiencia.acento} />
              </div>
              <div className="texto experiencia__lado" data-entra>
                {experiencia.parrafos.map((s) => <p key={s}>{tx(s)}</p>)}
              </div>
            </div>
          </section>
        </div>

        {/* 3 · Cómo trabajamos · Fig. 1 */}
        <section className="seccion tono-raven" id={como.id} aria-labelledby={`t-${como.id}`} data-seccion={como.etiqueta}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                <p className="rotulo">{como.etiqueta}</p>
                <Titular id={`t-${como.id}`} texto={como.titulo} acento={como.acento} />
              </div>
              <p className="lead" data-entra>{tx(como.parrafos[0])}</p>
              <div className="texto" data-entra>
                {como.parrafos.slice(1).map((s) => <p key={s}>{tx(s)}</p>)}
              </div>
            </div>
            <Figura id="fig1-pie" numero={1} rotulo={t.fig} leyenda={n.medida.pie} clase="dibujo dibujo--ancho partido__fig" dibuja>
              <Desliza etiqueta={n.medida.alt}>
                <svg viewBox="0 0 420 250" role="img" aria-label={n.medida.alt}>
                  <Medida r={n.medida.r} />
                </svg>
              </Desliza>
            </Figura>
          </div>
        </section>

        {/* 4 · Lo que creemos: las posturas de la voz de Vion */}
        <section className="seccion tono-powder" id={creemos.id} aria-labelledby={`t-${creemos.id}`} data-seccion={creemos.etiqueta}>
          <div className="marco">
            <Cabeza {...creemos} idioma={idioma} />
            <ul className="mayor" data-traza>
              {creemos.items.map((x, i) => (
                <li key={x.titulo}>
                  <span className="mayor__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="sub">{x.titulo}</h3>
                  <p>{tx(x.texto)}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5 · En qué podemos ayudarle: filas que se invierten */}
        <section className="seccion tono-raven" id={hacemos.id} aria-labelledby={`t-${hacemos.id}`} data-seccion={hacemos.etiqueta}>
          <div className="marco">
            <Cabeza {...hacemos} idioma={idioma} />
            <ul className="indice" data-traza>
              {hacemos.items.map((x) => (
                <FilaServicio key={x.titulo} href={x.enlace ? ruta(x.enlace.pagina, idioma, x.enlace.ancla) : ruta('contacto', idioma)} numero={x.enlace ? numero(x.enlace.pagina) : ''} titulo={x.titulo} texto={x.texto} />
              ))}
            </ul>
          </div>
        </section>

        {/* 6 · Costa Rica y Estados Unidos · Fig. 2 */}
        <section className="seccion tono-powder" id={pais.id} aria-labelledby={`t-${pais.id}`} data-seccion={pais.etiqueta}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                <p className="rotulo">{pais.etiqueta}</p>
                <Titular id={`t-${pais.id}`} texto={pais.titulo} acento={pais.acento} />
              </div>
              <p className="lead" data-entra>{tx(pais.parrafos[0])}</p>
              <div className="texto" data-entra>
                {pais.parrafos.slice(1).map((s) => <p key={s}>{tx(s)}</p>)}
              </div>
            </div>
            <Figura id="fig2-pie" numero={2} rotulo={t.fig} leyenda={n.husos.pie} clase="dibujo dibujo--ancho partido__fig" dibuja>
              <Desliza etiqueta={n.husos.alt}>
                <svg viewBox="0 0 420 252" role="img" aria-label={n.husos.alt}>
                  <Husos h={n.husos} idioma={idioma} />
                </svg>
              </Desliza>
            </Figura>
          </div>
        </section>

        {p.llamado && <Cierre llamado={p.llamado} idioma={idioma} />}
      </article>
    </>
  );
}
