'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { equivalente } from '@/content/rutas';
import type { Idioma } from '@/content/tipos';

interface Props {
  idioma: Idioma;
  textos: { nav: string; menu: string; cerrar: string; idioma: string; cta: string; inicio: string; marca: string };
  enlaces: { href: string; texto: string; n: string; descriptor?: string }[];
  inicio: string;
  contacto: string;
  otro: { idioma: Idioma; lang: string; corto: string; texto: string; etiqueta: string };
  simbolo: string;
}

/**
 * Lo único de la cabecera que necesita saber en qué página está: el menú (aria-current), el selector de idioma (lleva
 * a la misma página en el otro idioma) y el menú del celular, un <dialog> modal (foco atrapado y Esc de fábrica).
 * Todo sale también en el HTML estático: sin JavaScript el menú de escritorio y el idioma funcionan igual.
 */
export function Navegador({ idioma, textos, enlaces, inicio, contacto, otro, simbolo }: Props) {
  const actual = (usePathname() || '/').replace(/(.)\/+$/, '$1');
  const dialogo = useRef<HTMLDialogElement>(null);
  const [abierto, setAbierto] = useState(false);
  useEffect(() => {
    dialogo.current?.close();
  }, [actual]);
  const otroHref = equivalente(actual, otro.idioma);
  const aqui = (href: string) => (actual === href ? ('page' as const) : undefined);
  return (
    <>
      <nav className="nav" aria-label={textos.nav}>
        <ul>
          {enlaces.slice(0, -1).map((e) => (
            <li key={e.href}>
              <Link href={e.href} aria-current={aqui(e.href)}>
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="cabecera__fin">
        <div className="idioma" role="group" aria-label={textos.idioma}>
          <span aria-current="true" lang={idioma}>{idioma.toUpperCase()}</span>
          <i aria-hidden="true" />
          {/* <a> y no <Link>: cada idioma tiene su propio layout raíz (<html lang>), así que cambia el documento entero. */}
          <a href={otroHref} hrefLang={otro.lang} lang={otro.lang} title={otro.etiqueta}>
            {otro.corto}
          </a>
        </div>
        <Link className="boton boton--linea boton--chico" href={contacto} aria-current={aqui(contacto)}>
          {textos.cta}
        </Link>
        <button
          className="menu-boton"
          type="button"
          aria-haspopup="dialog"
          aria-controls="menu"
          aria-expanded={abierto}
          onClick={() => { dialogo.current?.showModal(); setAbierto(true); }}
        >
          {textos.menu}
          <i aria-hidden="true" />
        </button>
      </div>
      <dialog className="menu" id="menu" ref={dialogo} aria-label={textos.menu} onClose={() => setAbierto(false)} onClick={(e) => { if ((e.target as Element).closest('a')) dialogo.current?.close(); }}>
        <div className="menu__cabeza">
          <span className="marca">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={simbolo} alt="" width={30} height={29} loading="lazy" />
            <span>Vion</span>
          </span>
          <button className="menu__cerrar" type="button" onClick={() => dialogo.current?.close()}>
            {textos.cerrar}
            <i aria-hidden="true" />
          </button>
        </div>
        <ul className="menu__lista">
          <li>
            <Link href={inicio} aria-current={aqui(inicio)}>
              <b>01</b>
              {textos.inicio}
            </Link>
          </li>
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link href={e.href} aria-current={aqui(e.href)}>
                <b>{e.n}</b>
                {e.texto}
                {e.descriptor && <span>{e.descriptor}</span>}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu__pie">
          <Link className="boton" href={contacto}>
            {textos.cta}
          </Link>
          <p className="idioma">
            <span>{textos.idioma}</span>
            <a href={otroHref} hrefLang={otro.lang} lang={otro.lang}>
              {otro.texto}
            </a>
          </p>
        </div>
      </dialog>
    </>
  );
}
