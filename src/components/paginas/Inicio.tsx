import { MENU, catalogoDe, pagina, piezasDe, publicarRangos, ruta, type IdPagina, type Idioma } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Acentuado, Texto } from '@/components/sitio/Texto';
import { Cierre } from '@/components/vion/Cierre';
import { Cola } from '@/components/vion/Cola';
import { Pasos } from '@/components/vion/Pasos';
import { Boton, Cabeza, Ficha, Figura, FilaServicio, LlamadaNota, Nota, Titular } from '@/components/vion/piezas';
import { Plano } from '@/components/vion/plano/Plano';
import { seccion } from './comun';

const numero = (id: IdPagina) => String(MENU.indexOf(id) + 2).padStart(2, '0');

/** La portada (es/en). Todo el texto sale de `src/content`: `inicio.ts`, el catálogo y `piezas.ts`. */
export function Inicio({ idioma }: { idioma: Idioma }) {
  const p = pagina('inicio', idioma);
  const t = piezasDe(idioma);
  const d = catalogoDe(idioma).diagnostico;
  const resuelve = seccion(p, 0, 'lista');
  const servicios = seccion(p, 1, 'lista');
  const empieza = seccion(p, 2, 'pasos');
  const ultron = seccion(p, 3, 'texto');
  const trabajo = seccion(p, 4, 'texto');
  const tx = (s: string) => <Texto idioma={idioma}>{s}</Texto>;
  return (
    <>
      <JsonLd id="inicio" idioma={idioma} />
      <article className="pagina" data-pagina="inicio">
        {/* 1 · Portada: titular, ficha con plazo y precio, y la planta del sitio */}
        <section className="portada portada--plano tono-raven" aria-labelledby="titulo">
          <div className="portada__escena">
            <div className="marco portada__cuerpo">
              <div className="portada__cab">
                <p className="rotulo" data-llega style={{ '--espera': '200ms' } as React.CSSProperties}>{p.etiqueta}</p>
                <h1 className={p.h1.length > 64 ? 'mega mega--larga' : 'mega'} id="titulo">
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
                <h2 className="rotulo" id="ficha-t">{t.portada.fichaTitulo}</h2>
                <Ficha
                  filas={[
                    { termino: t.portada.primerPaso, valor: d.nombre },
                    { termino: t.portada.plazo, valor: d.plazo },
                    ...(publicarRangos ? [{ termino: <>{t.portada.rango}<LlamadaNota n={1} rotulo={t.nota} /></>, valor: d.rango }] : []),
                    { termino: t.portada.recibe, valor: t.portada.recibeValor },
                  ]}
                />
              </aside>
              <div className="portada__plano">
                <Plano idioma={idioma} />
              </div>
            </div>
          </div>
        </section>

        {/* 2 · Lo que se repite */}
        <section className="seccion tono-powder" id={resuelve.id} aria-labelledby={`t-${resuelve.id}`} data-seccion={resuelve.etiqueta}>
          <div className="marco">
            <Cabeza {...resuelve} idioma={idioma} />
            <ul className="mayor" data-traza>
              {resuelve.items.map((x, i) => (
                <li key={x.titulo}>
                  <span className="mayor__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="sub">{x.titulo}</h3>
                  <p>{tx(x.texto)}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3 · Tres líneas de trabajo: filas que se invierten a azul polvo */}
        <section className="seccion tono-raven" id={servicios.id} aria-labelledby={`t-${servicios.id}`} data-seccion={servicios.etiqueta}>
          <div className="marco">
            <Cabeza {...servicios} idioma={idioma} />
            <ul className="indice" data-traza>
              {servicios.items.map((x) => (
                <FilaServicio key={x.titulo} href={x.enlace ? ruta(x.enlace.pagina, idioma, x.enlace.ancla) : ruta('contacto', idioma)} numero={x.enlace ? numero(x.enlace.pagina) : ''} titulo={x.titulo} texto={x.texto} meta={x.etiqueta} />
              ))}
            </ul>
          </div>
        </section>

        {/* 4 · Cómo se empieza · Fig. 1 */}
        <section className="seccion tono-powder" id={empieza.id} aria-labelledby={`t-${empieza.id}`} data-seccion={empieza.etiqueta}>
          <div className="marco">
            <Cabeza {...empieza} idioma={idioma} />
            <Figura
              id="fig1-pie"
              numero={1}
              rotulo={t.fig}
              leyenda={t.fig1.pie}
              notas={
                <>
                  {publicarRangos && <Nota n={1}>{t.fig1.notaRangos}</Nota>}
                  {empieza.nota && <p className="nota texto">{tx(empieza.nota)}</p>}
                </>
              }
            >
              <Pasos idioma={idioma} />
            </Figura>
          </div>
        </section>

        {/* 5 · Ultron · Fig. 2: la cola que se puede operar */}
        <section className="seccion tono-raven" id={ultron.id} aria-labelledby={`t-${ultron.id}`} data-seccion={ultron.etiqueta}>
          <div className="marco reticula">
            <div className="ultron__texto">
              <div className="encabezado">
                <p className="rotulo">{ultron.etiqueta}</p>
                <Titular id={`t-${ultron.id}`} texto={ultron.titulo} acento={ultron.acento} />
              </div>
              <p className="lead" data-entra>{tx(ultron.parrafos[0])}</p>
              <div className="texto" data-entra>
                {ultron.parrafos.slice(1, -1).map((x) => <p key={x}>{tx(x)}</p>)}
              </div>
              <Ficha filas={t.ultron.ficha} />
              <p className="texto">{tx(ultron.parrafos[ultron.parrafos.length - 1])}</p>
            </div>
            <Figura id="fig2-pie" numero={2} rotulo={t.fig} leyenda={t.ultron.pie} notas={<Nota n={2}>{t.ultron.notaDemo}</Nota>} clase="ultron__fig">
              <Cola t={t.ultron.cola} idioma={idioma} />
            </Figura>
          </div>
        </section>

        {/* 6 · Cómo trabajamos: Costa Rica y Estados Unidos */}
        <section className="seccion tono-powder" id={trabajo.id} aria-labelledby={`t-${trabajo.id}`} data-seccion={trabajo.etiqueta}>
          <div className="marco reticula">
            <div className="trabajo__texto">
              <div className="encabezado">
                <p className="rotulo">{trabajo.etiqueta}</p>
                <Titular id={`t-${trabajo.id}`} texto={trabajo.titulo} acento={trabajo.acento} />
              </div>
              <div className="texto" data-entra>
                {trabajo.parrafos.map((x) => <p key={x}>{tx(x)}</p>)}
              </div>
            </div>
            <Ficha filas={t.trabajo.ficha} clase="trabajo__ficha" />
          </div>
        </section>

        {p.llamado && <Cierre llamado={p.llamado} idioma={idioma} />}
      </article>
    </>
  );
}
