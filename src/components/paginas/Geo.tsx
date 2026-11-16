import Link from 'next/link';
import type { CSSProperties } from 'react';
import { interfazDe, pagina, piezasDe, ruta, type Idioma } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Acentuado, Texto } from '@/components/sitio/Texto';
import { Cierre } from '@/components/vion/Cierre';
import { Boton, Cabeza, Ficha, Figura, Preguntas, Resumen, Titular } from '@/components/vion/piezas';
import { seccion } from './comun';
import './geo.css';

type Estilo = CSSProperties & Record<`--${string}`, string | number>;

/** «Citabilidad de los textos · 25 %» → nombre y peso. */
const partir = (termino: string) => {
  const [nombre, peso] = termino.split(' · ');
  return { nombre, peso: parseInt(peso, 10) };
};

/** Auditoría GEO (es/en): servicio sin precio publicado (decisión de Julian del 2026-11-16). Texto de `geo.ts`. */
export function Geo({ idioma }: { idioma: Idioma }) {
  const p = pagina('geo', idioma);
  const ui = interfazDe(idioma);
  const t = piezasDe(idioma);
  const revisa = seccion(p, 0, 'ficha');
  const metodo = seccion(p, 1, 'pasos');
  const limites = seccion(p, 2, 'texto');
  const preguntas = seccion(p, 3, 'preguntas');
  const tx = (s: string) => <Texto idioma={idioma}>{s}</Texto>;
  const categorias = revisa.filas.map((f) => ({ ...partir(f.termino), que: f.valor }));
  const r = p.resumen!;
  const leyenda = idioma === 'es'
    ? 'La rúbrica de la auditoría: seis categorías y su peso en el puntaje final, de 0 a 100.'
    : 'The audit rubric: six categories and their weight in the final score, from 0 to 100.';
  const cab = idioma === 'es' ? { categoria: 'Categoría', peso: 'Peso', que: 'Qué se revisa' } : { categoria: 'Category', peso: 'Weight', que: 'What we review' };
  return (
    <>
      <JsonLd id="geo" idioma={idioma} />
      <article className="pagina" data-pagina="geo">
        {/* 1 · Portada del servicio · Fig. 1: la rúbrica (seis categorías y su peso) */}
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
                <h2 className="rotulo" id="ficha-t">{p.nav}</h2>
                <Ficha filas={r.ficha.slice(1).map((f) => ({ termino: f.termino, valor: tx(f.valor) }))} />
              </aside>
              <div className="portada__plano" data-llega style={{ '--espera': '400ms' } as Estilo}>
                <Figura id="fig1-pie" numero={1} rotulo={t.fig} leyenda={leyenda} clase="rubrica-fig" dibuja>
                  <ol className="rubrica" aria-hidden="true">
                    {categorias.map((c, i) => (
                      <li key={c.nombre} style={{ '--peso': c.peso, '--i': i } as Estilo}>
                        <span className="rubrica__n">{c.nombre}</span>
                        <span className="rubrica__barra" />
                        <span className="rubrica__p">{c.peso}</span>
                      </li>
                    ))}
                  </ol>
                </Figura>
              </div>
            </div>
          </div>
        </section>

        {/* 1b · En resumen: el bloque citable */}
        <Resumen resumen={r} actualizado={p.actualizado} idioma={idioma} />

        {/* 2 · Qué se revisa: la tabla de las seis categorías */}
        <section className="seccion tono-powder" id={revisa.id} aria-labelledby={`t-${revisa.id}`} data-seccion={revisa.etiqueta}>
          <div className="marco">
            <Cabeza {...revisa} idioma={idioma} />
            <div className="geo-tabla" data-traza>
              <table>
                <caption className="solo-lectores">{revisa.titulo}</caption>
                <thead>
                  <tr><th scope="col">{cab.categoria}</th><th scope="col">{cab.peso}</th><th scope="col">{cab.que}</th></tr>
                </thead>
                <tbody>
                  {categorias.map((c) => (
                    <tr key={c.nombre}>
                      <th scope="row">{c.nombre}</th>
                      <td className="geo-tabla__peso">{c.peso} %</td>
                      <td>{tx(c.que)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3 · Cómo se hace: la metodología en cuatro pasos */}
        <section className="seccion tono-raven" id={metodo.id} aria-labelledby={`t-${metodo.id}`} data-seccion={metodo.etiqueta}>
          <div className="marco">
            <Cabeza {...metodo} idioma={idioma} />
            <ol className="metodo reticula" data-traza>
              {metodo.pasos.map((x, i) => (
                <li key={x.titulo} data-entra style={{ '--i': i } as Estilo}>
                  <span className="metodo__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="sub">{x.titulo}</h3>
                  <p className="texto">{tx(x.texto)}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4 · Lo que no promete */}
        <section className="seccion tono-powder" id={limites.id} aria-labelledby={`t-${limites.id}`} data-seccion={limites.etiqueta}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                <p className="rotulo">{limites.etiqueta}</p>
                <Titular id={`t-${limites.id}`} texto={limites.titulo} acento={limites.acento} />
              </div>
            </div>
            <div className="partido__fig texto" data-entra>
              {limites.parrafos.map((x) => <p key={x}>{tx(x)}</p>)}
            </div>
          </div>
        </section>

        {/* 5 · Preguntas */}
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
