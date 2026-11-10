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

/**
 * Pega cada palabra de una o dos letras a la que sigue (espacio duro): en un titular en mayúsculas, «Y», «A» o «DE»
 * no quedan colgando al final de un renglón.
 */
export const ligar = (s: string) => {
  let antes = '';
  while (antes !== s) { antes = s; s = s.replace(/(^|[\s\u00a0])([\p{L}]{1,2}) (?=\S)/gu, '$1$2\u00a0'); }
  return s;
};

/** Un título con su palabra de acento marcada (el diseño decide cómo se ve). */
export function Acentuado({ texto, acento }: { texto: string; acento?: string }): ReactNode {
  if (!acento || !texto.includes(acento)) return ligar(texto);
  const i = texto.indexOf(acento);
  return (
    <>
      {ligar(texto.slice(0, i))}
      <span className="acento">{ligar(acento)}</span>
      {ligar(texto.slice(i + acento.length))}
    </>
  );
}
