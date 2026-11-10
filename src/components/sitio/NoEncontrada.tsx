import Link from 'next/link';
import { MENU, interfazDe, pagina, ruta, type IdPagina, type Idioma } from '@/content';
import { Acentuado } from './Texto';

const TODAS: IdPagina[] = ['inicio', ...MENU];

function Lista({ idioma, idTitulo, titulo }: { idioma: Idioma; idTitulo: string; titulo: string }) {
  return (
    <>
      <h2 id={idTitulo}>{titulo}</h2>
      <ul className="items">
        {TODAS.map((id) => (
          <li key={id}>
            <h3>
              <Link href={ruta(id, idioma)}>{pagina(id, idioma).nav}</Link>
            </h3>
            <p>{pagina(id, idioma).descripcion}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

/**
 * La página 404 (la dibuja `app/global-not-found.tsx` para cualquier dirección que no existe, en los dos idiomas):
 * un H1 en español, las siete páginas en español y, marcada con lang="en", la misma ayuda en inglés.
 */
export function NoEncontrada() {
  const es = interfazDe('es').noEncontrada;
  const en = interfazDe('en').noEncontrada;
  return (
    <article className="pagina" data-pagina="404">
      <header className="portada">
        <div className="contenedor">
          <p className="etiqueta">{es.etiqueta}</p>
          <h1>
            <Acentuado texto={es.h1} acento={es.acento} />
          </h1>
          <p className="bajada">{es.bajada}</p>
        </div>
      </header>
      <section className="seccion" aria-labelledby="t-paginas">
        <div className="contenedor">
          <Lista idioma="es" idTitulo="t-paginas" titulo={es.lista} />
        </div>
      </section>
      <section className="seccion" lang={interfazDe('en').lang} aria-labelledby="t-pages">
        <div className="contenedor">
          <p className="etiqueta">{en.etiqueta}</p>
          <h2 id="t-pages">
            <Acentuado texto={en.h1} acento={en.acento} />
          </h2>
          <p className="intro">{en.bajada}</p>
          <ul className="items">
            {TODAS.map((id) => (
              <li key={id}>
                <h3>
                  <Link href={ruta(id, 'en')} hrefLang="en">
                    {pagina(id, 'en').nav}
                  </Link>
                </h3>
                <p>{pagina(id, 'en').descripcion}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
