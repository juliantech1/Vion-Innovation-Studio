import { type IdPagina, type Idioma } from '@/content';
import { datosEstructurados, serializar } from '@/seo/jsonld';

type Nodo = Record<string, unknown>;

/** Los datos estructurados de la página: un <script type="application/ld+json"> por nodo. */
export function JsonLd({ id, idioma, nodos }: { id?: IdPagina; idioma?: Idioma; nodos?: Nodo[] }) {
  const todos = nodos ?? (id && idioma ? datosEstructurados(id, idioma) : []);
  return todos.map((nodo, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializar(nodo) }} />);
}
