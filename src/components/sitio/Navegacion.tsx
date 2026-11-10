'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { equivalente } from '@/content/rutas';
import type { Idioma } from '@/content/tipos';

interface Props {
  idioma: Idioma;
  etiqueta: string;
  enlaces: { href: string; texto: string }[];
  /** El selector de idioma: el texto está en el otro idioma. */
  otro: { idioma: Idioma; lang: string; texto: string; etiqueta: string };
}

/**
 * El menú principal y el selector de idioma. Es lo único de la cabecera que necesita saber en qué página está:
 * marca la página actual (aria-current) y arma el enlace a la página equivalente en el otro idioma. Se dibuja
 * también en el HTML estático, así que funciona sin JavaScript.
 */
export function Navegacion({ etiqueta, enlaces, otro }: Props) {
  const actual = (usePathname() || '/').replace(/(.)\/+$/, '$1');
  return (
    <nav className="nav" aria-label={etiqueta}>
      <ul className="nav__lista">
        {enlaces.map((e) => (
          <li key={e.href}>
            <Link href={e.href} aria-current={actual === e.href ? 'page' : undefined}>
              {e.texto}
            </Link>
          </li>
        ))}
        <li className="nav__idioma">
          {/* <a> y no <Link>: cada idioma tiene su propio layout raíz (<html lang>), así que cambia el documento entero. */}
          <a href={equivalente(actual, otro.idioma)} hrefLang={otro.lang} lang={otro.lang} aria-label={otro.etiqueta}>
            {otro.texto}
          </a>
        </li>
      </ul>
    </nav>
  );
}
