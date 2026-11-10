import Image from 'next/image';
import Link from 'next/link';
import { MENU, interfazDe, pagina, ruta, sitio, type Idioma } from '@/content';
import { Navegacion } from './Navegacion';

export function Cabecera({ idioma }: { idioma: Idioma }) {
  const ui = interfazDe(idioma);
  const otroIdioma: Idioma = idioma === 'es' ? 'en' : 'es';
  return (
    <header className="cabecera">
      <div className="contenedor cabecera__fila">
        <Link className="marca" href={ruta('inicio', idioma)} aria-label={ui.inicio}>
          <Image src={sitio.simbolo.src} alt="" width={30} height={29} loading="eager" />
          <span>Vion</span>
        </Link>
        <Navegacion
          idioma={idioma}
          etiqueta={ui.navPrincipal}
          enlaces={MENU.map((id) => ({ href: ruta(id, idioma), texto: pagina(id, idioma).nav }))}
          otro={{ idioma: otroIdioma, lang: interfazDe(otroIdioma).lang, texto: ui.otroIdioma.texto, etiqueta: ui.otroIdioma.etiqueta }}
        />
      </div>
    </header>
  );
}
