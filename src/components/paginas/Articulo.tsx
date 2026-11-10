import Link from 'next/link';
import type { ReactNode } from 'react';
import { ARTICULOS, interfazDe, minutosDeLectura, pagina, piezasDe, ruta, rutaArticulo, type Articulo as DatosArticulo, type Idioma } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Acentuado, Texto } from '@/components/sitio/Texto';
import { Cierre } from '@/components/vion/Cierre';
import { Ficha, Titular } from '@/components/vion/piezas';
import { datosArticulo } from '@/seo/jsonld';
import { fechaLarga } from './fechas';
import './aprender.css';
import './estudio.css';


/** El id de un título (para el índice y las anclas): minúsculas, sin tildes ni signos. */
export const anclaDe = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);

/** Texto en línea: `código` y, en lo demás, el marcado de `Texto` (negrita, enlaces, casilleros). */
function Linea({ s, idioma }: { s: string; idioma: Idioma }): ReactNode {
  return s.split(/(`[^`]+`)/g).map((parte, i) =>
    parte.startsWith('`') && parte.endsWith('`') ? <code key={i}>{parte.slice(1, -1)}</code> : parte ? <Texto key={i} idioma={idioma}>{parte}</Texto> : null,
  );
}

/** Los títulos del cuerpo (## …), para el índice. */
export const titulosDe = (cuerpo: string) =>
  cuerpo
    .split('\n')
    .filter((l) => l.startsWith('## '))
    .map((l) => ({ texto: l.slice(3).trim(), id: anclaDe(l.slice(3)) }));

/**
 * El cuerpo de un artículo, del Markdown mínimo de `CuerpoArticulo`: un bloque por párrafo; `## ` y `### ` títulos,
 * `- ` lista, `1. ` lista numerada, `> ` nota, `| a | b |` tabla (la primera fila es el encabezado).
 */
export function Cuerpo({ cuerpo, idioma }: { cuerpo: string; idioma: Idioma }) {
  const bloques = cuerpo.trim().split(/\n\s*\n/);
  return bloques.map((b, i) => {
    const lineas = b.split('\n').map((l) => l.trim()).filter(Boolean);
    const primera = lineas[0] ?? '';
    if (primera.startsWith('## ')) return <h2 key={i} id={anclaDe(primera.slice(3))}>{primera.slice(3)}</h2>;
    if (primera.startsWith('### ')) return <h3 key={i}>{primera.slice(4)}</h3>;
    if (lineas.every((l) => l.startsWith('- '))) return <ul key={i}>{lineas.map((l, k) => <li key={k}><Linea s={l.slice(2)} idioma={idioma} /></li>)}</ul>;
    if (lineas.every((l) => /^\d+\. /.test(l))) return <ol key={i}>{lineas.map((l, k) => <li key={k}><Linea s={l.replace(/^\d+\. /, '')} idioma={idioma} /></li>)}</ol>;
    if (primera.startsWith('> ')) return <blockquote key={i}><p><Linea s={lineas.map((l) => l.replace(/^> ?/, '')).join(' ')} idioma={idioma} /></p></blockquote>;
    if (lineas.every((l) => l.startsWith('|'))) {
      const filas = lineas.map((l) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()));
      return (
        <div key={i} className="tabla-art">
          <table>
            <thead>
              <tr>{filas[0].map((c) => <th key={c} scope="col">{c}</th>)}</tr>
            </thead>
            <tbody>
              {filas.slice(1).map((f, k) => (
                <tr key={k}>{f.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}><Linea s={c} idioma={idioma} /></td>))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return <p key={i}><Linea s={lineas.join(' ')} idioma={idioma} /></p>;
  });
}

/** Un artículo del blog: portada de lectura con su ficha, el índice y el cuerpo, las fuentes al pie y otros artículos. */
export function Articulo({ a, idioma }: { a: DatosArticulo; idioma: Idioma }) {
  const x = a[idioma];
  const t = piezasDe(idioma);
  const b = t.blog;
  const blog = pagina('blog', idioma);
  const ui = interfazDe(idioma);
  const titulos = titulosDe(x.cuerpo);
  const otros = ARTICULOS.filter((o) => o.id !== a.id);
  const minutos = minutosDeLectura(x.cuerpo);
  return (
    <>
      <JsonLd nodos={datosArticulo(a, idioma)} />
      <article className="pagina articulo" data-pagina="blog">
        <section className="portada portada--interior portada--lectura tono-raven" aria-labelledby="titulo">
          <div className="marco pi">
            <div className="pi__cab">
              <nav className="miga" aria-label={ui.migas}>
                <ol>
                  <li><Link href={ruta('inicio', idioma)}>{pagina('inicio', idioma).nav}</Link></li>
                  <li><Link href={ruta('blog', idioma)}>{blog.nav}</Link></li>
                  <li aria-current="page">{x.etiquetas[0]}</li>
                </ol>
              </nav>
              <p className="rotulo" data-llega style={{ '--espera': '200ms' } as React.CSSProperties}>{x.etiquetas.join(' · ')}</p>
              <h1 className={x.titulo.length > 40 ? 'mega mega--larga' : 'mega'} id="titulo">
                <Acentuado texto={x.titulo} acento={x.acento} />
              </h1>
            </div>
            <div className="pi__texto">
              <p className="lead" data-llega style={{ '--espera': '520ms' } as React.CSSProperties}>{x.bajada}</p>
            </div>
            <aside className="pi__ficha" aria-labelledby="ficha-t" data-llega style={{ '--espera': '720ms' } as React.CSSProperties}>
              <h2 className="rotulo" id="ficha-t">{b.fichaTitulo}</h2>
              <Ficha
                filas={[
                  { termino: b.autor, valor: 'Vion' },
                  { termino: b.publicado, valor: <time dateTime={a.publicado}>{fechaLarga(a.publicado, idioma)}</time> },
                  ...(a.actualizado ? [{ termino: b.actualizado, valor: <time dateTime={a.actualizado}>{fechaLarga(a.actualizado, idioma)}</time> }] : []),
                  { termino: b.lectura, valor: `${minutos} min` },
                ]}
              />
            </aside>
          </div>
        </section>

        <div className="tono-powder lectura-bloque" data-seccion={blog.nav}>
          <div className="marco reticula lectura">
            <nav className="lectura__indice" aria-labelledby="indice-t">
              <p className="rotulo" id="indice-t">{b.indice}</p>
              <ol>
                {titulos.map((h, i) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`}><b>{String(i + 1).padStart(2, '0')}</b>{h.texto}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="lectura__cuerpo">
              <Cuerpo cuerpo={x.cuerpo} idioma={idioma} />
              <section className="fuentes" aria-labelledby="t-fuentes">
                <h2 id="t-fuentes">{b.fuentes}</h2>
                <ol>
                  {x.fuentes.map((f) => (
                    <li key={f.url}>
                      <a href={f.url} rel="noopener">{f.titulo}</a>
                    </li>
                  ))}
                </ol>
                <p>{b.fuentesNota.replace('{fecha}', fechaLarga(a.actualizado ?? a.publicado, idioma))}</p>
              </section>
            </div>
          </div>
        </div>

        {otros.length > 0 && (
          <section className="seccion tono-raven" aria-labelledby="t-otros" data-seccion={b.otros}>
            <div className="marco aprende">
              <div className="aprende__texto">
                <div className="encabezado">
                  <p className="rotulo">{blog.nav}</p>
                  <Titular id="t-otros" texto={b.otros} />
                </div>
                <p>
                  <Link className="enlace-linea" href={ruta('blog', idioma)}>{b.volver}</Link>
                </p>
              </div>
              <div className="aprende__lista">
                <ol>
                  {otros.map((o, i) => (
                    <li key={o.id}>
                      <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      <Link href={rutaArticulo(o[idioma].slug, idioma)}>{o[idioma].titulo}</Link>
                      <time dateTime={o.publicado}>{o.publicado}</time>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        )}

        {blog.llamado && <Cierre llamado={blog.llamado} idioma={idioma} />}
      </article>
    </>
  );
}
