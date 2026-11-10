import Link from 'next/link';
import { MENU, interfazDe, pagina, piezasDe, ruta, type IdPagina } from '@/content';
import { FilaServicio } from '@/components/vion/piezas';
import { Acentuado } from './Texto';

const TODAS: IdPagina[] = ['inicio', ...MENU];

/**
 * La página 404 (la dibuja `app/global-not-found.tsx` para cualquier dirección que no existe, en los dos idiomas):
 * un H1 en español, el índice de las siete láminas en español y, marcada con lang="en", la misma ayuda en inglés.
 */
export function NoEncontrada() {
  const es = interfazDe('es').noEncontrada;
  const en = interfazDe('en').noEncontrada;
  return (
    <article className="pagina perdida tono-raven" data-pagina="404">
      <header className="portada">
        <div className="marco portada__cuerpo">
          <div className="portada__cab">
            <p className="rotulo">{es.etiqueta} · {piezasDe('es').pie.lamina} 00/07</p>
            <h1 className="mega">
              <Acentuado texto={es.h1} acento={es.acento} />
            </h1>
            <p className="lead">{es.bajada}</p>
          </div>
        </div>
      </header>
      <section className="seccion" aria-labelledby="t-paginas" style={{ paddingTop: 0 }}>
        <div className="marco">
          <h2 className="rotulo" id="t-paginas" style={{ marginBottom: '1rem' }}>{es.lista}</h2>
          <ul className="indice">
            {TODAS.map((id, i) => (
              <FilaServicio key={id} href={ruta(id, 'es')} numero={String(i + 1).padStart(2, '0')} titulo={pagina(id, 'es').nav} texto={pagina(id, 'es').descripcion} />
            ))}
          </ul>
          <section className="perdida__en" lang={interfazDe('en').lang} aria-labelledby="t-pages" style={{ marginTop: '4rem' }}>
            <p className="rotulo">{en.etiqueta}</p>
            <h2 className="sub" id="t-pages">
              <Acentuado texto={en.h1} acento={en.acento} />
            </h2>
            <p className="texto">{en.bajada}</p>
            <ul>
              {TODAS.map((id) => (
                <li key={id}>
                  <Link href={ruta(id, 'en')} hrefLang="en">
                    {pagina(id, 'en').nav}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </article>
  );
}
