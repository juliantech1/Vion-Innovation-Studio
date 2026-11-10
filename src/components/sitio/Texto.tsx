import Link from 'next/link';
import type { ReactNode } from 'react';
import { PAGINAS, ruta, type IdPagina, type Idioma } from '@/content';

const PARTE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\)|\{\{[^}]+\}\})/g;

/** Un dato que falta ({{…}}): se ve marcado y está listado en PENDIENTES-JULIAN.md. */
export function Casillero({ texto }: { texto: string }) {
  const limpio = texto.replace(/^\{\{|\}\}$/g, '');
  return (
    <mark className="casillero" data-casillero={limpio}>
      {`{{${limpio}}}`}
    </mark>
  );
}

/**
 * Dibuja el marcado mínimo del contenido: **negrita**, [texto](@pagina#ancla), [texto](https://…),
 * [texto](mailto:…) y {{casilleros}}. Los enlaces internos se resuelven a la URL del idioma.
 */
export function Texto({ children, idioma }: { children: string; idioma: Idioma }): ReactNode {
  return children.split(PARTE).map((parte, i) => {
    if (!parte) return null;
    if (parte.startsWith('**')) return <strong key={i}>{parte.slice(2, -2)}</strong>;
    if (parte.startsWith('{{')) return <Casillero key={i} texto={parte} />;
    const enlace = parte.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (!enlace) return parte;
    const [, texto, destino] = enlace;
    if (destino.startsWith('@')) {
      const [id, ancla] = destino.slice(1).split('#');
      if (!(PAGINAS as readonly string[]).includes(id)) throw new Error(`Enlace interno a una página que no existe: ${destino}`);
      return (
        <Link key={i} href={ruta(id as IdPagina, idioma, ancla)}>
          {texto}
        </Link>
      );
    }
    return (
      <a key={i} href={destino} rel={destino.startsWith('http') ? 'noopener' : undefined}>
        {texto}
      </a>
    );
  });
}

/** Un título con su palabra de acento marcada (el diseño decide cómo se ve). */
export function Acentuado({ texto, acento }: { texto: string; acento?: string }): ReactNode {
  if (!acento || !texto.includes(acento)) return texto;
  const i = texto.indexOf(acento);
  return (
    <>
      {texto.slice(0, i)}
      <span className="acento">{acento}</span>
      {texto.slice(i + acento.length)}
    </>
  );
}
