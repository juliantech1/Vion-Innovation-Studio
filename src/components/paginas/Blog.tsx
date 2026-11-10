import Link from 'next/link';
import { ARTICULOS, minutosDeLectura, pagina, piezasDe, ruta, rutaArticulo, type Idioma } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Cierre } from '@/components/vion/Cierre';
import { Cabeza, Ficha, Figura } from '@/components/vion/piezas';
import { fechaLarga } from './fechas';
import { seccion } from './comun';
import { PortadaInterior } from './estudio';
import './aprender.css';

/** El ícono de RSS (tres trazos), para el enlace a la fuente. */
function IconoRss() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" focusable="false">
      <path d="M3 3a10 10 0 0 1 10 10M3 7.5A5.5 5.5 0 0 1 8.5 13" />
      <circle cx="3.75" cy="12.25" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Blog (es/en): la portada con su ficha y el registro de artículos (Fig. 1), como el de emisiones de un juego de planos. */
export function Blog({ idioma }: { idioma: Idioma }) {
  const p = pagina('blog', idioma);
  const t = piezasDe(idioma);
  const b = t.blog;
  const lista = seccion(p, 0, 'texto');
  const rss = `${ruta('blog', idioma)}/rss.xml`;
  return (
    <>
      <JsonLd id="blog" idioma={idioma} />
      <article className="pagina" data-pagina="blog">
        <PortadaInterior
          p={p}
          idioma={idioma}
          fichaTitulo={b.fichaTitulo}
          ficha={
            <Ficha
              filas={[
                { termino: b.articulos.replace(/^./, (l) => l.toUpperCase()), valor: String(ARTICULOS.length) },
                ...b.ficha,
                {
                  termino: 'RSS',
                  valor: (
                    <a className="enlace-linea rss" href={rss} type="application/rss+xml">
                      <IconoRss />
                      {b.rss}
                    </a>
                  ),
                },
              ]}
            />
          }
        />

        <section className="seccion tono-powder" id={lista.id} aria-labelledby={`t-${lista.id}`} data-seccion={lista.etiqueta}>
          <div className="marco">
            <Cabeza {...lista} idioma={idioma} />
            <Figura id="fig1-pie" numero={1} rotulo={t.fig} leyenda={b.fig1}>
              <table className="registro" data-traza>
                <thead>
                  <tr>
                    <th scope="col">N.º</th>
                    <th scope="col">{lista.titulo}</th>
                    <th scope="col">{b.publicado}</th>
                    <th scope="col">{b.lectura}</th>
                  </tr>
                </thead>
                <tbody>
                  {ARTICULOS.map((a, i) => {
                    const x = a[idioma];
                    return (
                      <tr key={a.id}>
                        <td className="registro__n">{String(i + 1).padStart(2, '0')}</td>
                        <td className="registro__t">
                          <h3>
                            <Link href={rutaArticulo(x.slug, idioma)}>{x.titulo}</Link>
                          </h3>
                          <p>{x.descripcion}</p>
                          <p className="registro__temas">{x.etiquetas.map((e) => <span key={e}>{e}</span>)}</p>
                        </td>
                        <td className="registro__f">
                          <time dateTime={a.publicado}>{fechaLarga(a.publicado, idioma)}</time>
                        </td>
                        <td className="registro__f registro__m">{minutosDeLectura(x.cuerpo)} min</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Figura>
          </div>
        </section>

        {p.llamado && <Cierre llamado={p.llamado} idioma={idioma} />}
      </article>
    </>
  );
}
