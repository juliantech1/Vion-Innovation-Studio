import type { ReactNode } from 'react';
import { MENU, interfazDe, pagina, piezasDe, type IdPagina, type Idioma } from '@/content';
import { Cabecera } from './Cabecera';
import { Comportamientos } from './Comportamientos';
import { Pie } from './Pie';

const TODAS: IdPagina[] = ['inicio', ...MENU];

/**
 * Lo que comparten todas las páginas dentro de <body>: el aviso de que hay JavaScript (una línea, antes de pintar,
 * para que nada se esconda sin él), saltar al contenido, cabecera, <main>, pie-cajetín y los comportamientos.
 */
export function Marco({ idioma, children }: { idioma: Idioma; children: ReactNode }) {
  const ui = interfazDe(idioma);
  const t = piezasDe(idioma);
  const laminas = Object.fromEntries(TODAS.map((id, i) => [id, [`${String(i + 1).padStart(2, '0')}/${String(TODAS.length).padStart(2, '0')}`, pagina(id, idioma).nav]])) as Record<string, [string, string]>;
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      <a className="saltar" href="#contenido">
        {ui.saltar}
      </a>
      <Cabecera idioma={idioma} />
      <main id="contenido" tabIndex={-1}>
        {children}
      </main>
      <Pie idioma={idioma} />
      <Comportamientos idioma={idioma} laminas={laminas} textos={{ lamina: t.transicion.lamina, colofonMedido: t.pie.colofonMedido, reticulaDato: t.pie.reticulaDato }} />
    </>
  );
}
