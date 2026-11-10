import type { ReactNode } from 'react';
import { Texto } from '@/components/sitio/Texto';
import type { Idioma } from '@/content';

/** Texto en línea de una lámina: `código`, *cursiva* y, en lo demás, el marcado de `Texto` (negrita, enlaces, casilleros). */
export function Linea({ s, idioma }: { s: string; idioma: Idioma }): ReactNode {
  return s.split(/(`[^`]+`)/g).map((parte, i) => {
    if (!parte) return null;
    if (parte.length > 2 && parte.startsWith('`') && parte.endsWith('`')) return <code key={i}>{parte.slice(1, -1)}</code>;
    return parte.split(/((?<![*\w])\*(?!\*)[^*\n]+?\*(?![*\w]))/g).map((x, k) =>
      !x ? null : x.length > 2 && x.startsWith('*') && x.endsWith('*') && !x.startsWith('**') ? (
        <em key={`${i}-${k}`}><Texto idioma={idioma}>{x.slice(1, -1)}</Texto></em>
      ) : (
        <Texto key={`${i}-${k}`} idioma={idioma}>{x}</Texto>
      ),
    );
  });
}

const celdas = (l: string) => l.replace(/^\||\|$/g, '').split(/(?<!\\)\|/).map((c) => c.replace(/\\\|/g, '|').trim());

/**
 * El Markdown mínimo de las láminas y de las secciones de un curso: un bloque por párrafo (línea en blanco entre
 * bloques); `- ` lista, `1. ` lista numerada, `> ` nota, `### ` subtítulo y `| a | b |` tabla (la primera fila es el
 * encabezado; la línea de guiones, si está, se ignora).
 */
export function Md({ texto, idioma, nivel = 3 }: { texto: string; idioma: Idioma; nivel?: 3 | 4 }) {
  const bloques = texto.trim().split(/\n\s*\n/);
  const H = nivel === 3 ? 'h3' : 'h4';
  return bloques.map((b, i) => {
    const lineas = b.split('\n').map((l) => l.trim()).filter(Boolean);
    const primera = lineas[0] ?? '';
    if (primera.startsWith('### ')) return <H key={i} className="md__h">{primera.slice(4)}</H>;
    if (lineas.every((l) => l.startsWith('- '))) {
      const tildes = lineas.every((l) => l.startsWith('- ✓'));
      return (
        <ul key={i} className={tildes ? 'md__tildes' : undefined}>
          {lineas.map((l, k) => <li key={k}><Linea s={l.slice(2).replace(/^✓\s*/, '')} idioma={idioma} /></li>)}
        </ul>
      );
    }
    if (lineas.every((l) => /^\d+\. /.test(l))) {
      return (
        <ol key={i} start={Number(primera.match(/^\d+/)![0])}>
          {lineas.map((l, k) => <li key={k}><Linea s={l.replace(/^\d+\. /, '')} idioma={idioma} /></li>)}
        </ol>
      );
    }
    if (primera.startsWith('> ')) return <blockquote key={i}><p><Linea s={lineas.map((l) => l.replace(/^> ?/, '')).join(' ')} idioma={idioma} /></p></blockquote>;
    if (lineas.every((l) => l.startsWith('|'))) {
      const filas = lineas.filter((l) => !/^\|[\s:|-]+\|$/.test(l)).map(celdas);
      return (
        <div key={i} className="md__tabla" role="region" aria-label={filas[0].join(' · ')} tabIndex={0}>
          <table>
            <thead>
              <tr>{filas[0].map((c, k) => <th key={k} scope="col"><Linea s={c.replace(/\*\*/g, '')} idioma={idioma} /></th>)}</tr>
            </thead>
            <tbody>
              {filas.slice(1).map((f, k) => (
                <tr key={k}>{f.map((c, j) => (j === 0 ? <th key={j} scope="row"><Linea s={c} idioma={idioma} /></th> : <td key={j}><Linea s={c} idioma={idioma} /></td>))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return <p key={i}><Linea s={lineas.join(' ')} idioma={idioma} /></p>;
  });
}
