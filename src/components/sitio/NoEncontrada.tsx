import Link from 'next/link';
import { MENU, interfazDe, pagina, ruta, type IdPagina, type Idioma } from '@/content';
import { Acentuado } from './Texto';

const TODAS: IdPagina[] = ['inicio', ...MENU];

/** La página 404 de cada idioma: un H1, una explicación y los enlaces a las siete páginas. */
export function NoEncontrada({ idioma }: { idioma: Idioma }) {
  const t = interfazDe(idioma).noEncontrada;
  return (
    <article className="pagina" data-pagina="404">
      <header className="portada">
        <div className="contenedor">
          <p className="etiqueta">{t.etiqueta}</p>
          <h1>
            <Acentuado texto={t.h1} acento={t.acento} />
          </h1>
          <p className="bajada">{t.bajada}</p>
        </div>
      </header>
      <section className="seccion" aria-labelledby="t-paginas">
        <div className="contenedor">
          <h2 id="t-paginas">{t.lista}</h2>
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
        </div>
      </section>
    </article>
  );
}
