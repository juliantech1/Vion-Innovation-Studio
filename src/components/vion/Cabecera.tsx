import Image from 'next/image';
import Link from 'next/link';
import { MENU, interfazDe, pagina, piezasDe, ruta, sitio, type Idioma } from '@/content';
import { Navegador } from './Navegador';

/**
 * La cabecera: marca, etiqueta de sección (dice dónde está el visitante), menú, selector de idioma y el llamado.
 * Es de servidor; lo único de cliente es `Navegador` (marca la página actual, arma el enlace al otro idioma y abre el
 * menú del celular, un <dialog>). La etiqueta de sección la escribe `Comportamientos` al hacer scroll.
 */
export function Cabecera({ idioma }: { idioma: Idioma }) {
  const ui = interfazDe(idioma);
  const t = piezasDe(idioma).cabecera;
  const otro: Idioma = idioma === 'es' ? 'en' : 'es';
  return (
    <header className="cabecera" data-cabecera>
      <div className="marco cabecera__fila">
        <Link className="marca" href={ruta('inicio', idioma)} aria-label={ui.inicio}>
          <Image src={sitio.simbolo.src} alt="" width={30} height={29} loading="eager" />
          <span>Vion</span>
        </Link>
        <p className="aqui" data-aqui aria-hidden="true">
          <span />
        </p>
        <Navegador
          idioma={idioma}
          textos={{ nav: ui.navPrincipal, menu: t.menu, cerrar: t.cerrar, idioma: t.idioma, cta: t.cta, inicio: pagina('inicio', idioma).nav, marca: ui.inicio }}
          enlaces={MENU.map((id, i) => ({ href: ruta(id, idioma), texto: pagina(id, idioma).nav, n: String(i + 2).padStart(2, '0'), descriptor: t.descriptores[id] }))}
          inicio={ruta('inicio', idioma)}
          contacto={ruta('contacto', idioma)}
          otro={{ idioma: otro, lang: interfazDe(otro).lang, corto: otro.toUpperCase(), texto: ui.otroIdioma.texto, etiqueta: ui.otroIdioma.etiqueta }}
          simbolo={sitio.simbolo.src}
        />
      </div>
    </header>
  );
}
