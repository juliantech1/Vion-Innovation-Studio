import { type IdPagina, type Idioma } from '@/content';
import { datosEstructurados, serializar } from '@/seo/jsonld';

/** Los datos estructurados de la página: un <script type="application/ld+json"> por nodo. */
export function JsonLd({ id, idioma }: { id: IdPagina; idioma: Idioma }) {
  return datosEstructurados(id, idioma).map((nodo, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializar(nodo) }} />
  ));
}
