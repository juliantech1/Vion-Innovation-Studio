import type { Bloque, Idioma } from '@/content';
import { piezasDe } from '@/content';
import { Copiar } from './Copiar';

/** Los bloques copiables de una lámina: comando, pedido a Claude, archivo o código, cada uno con su botón «Copiar». */
export function Bloques({ bloques, idioma }: { bloques: Bloque[]; idioma: Idioma }) {
  const t = piezasDe(idioma).cursos.leccionUi;
  return (
    <div className="bloques">
      {bloques.map((b0, i) => {
        const b = { ...b0, texto: b0.tipo === 'pedido' ? b0.texto.trim() : b0.texto.replace(/^\n+|\s+$/g, '') };
        const rotulo = [t.bloque[b.tipo], b.etiqueta, b.lenguaje && !b.etiqueta?.toLowerCase().includes(b.lenguaje) ? b.lenguaje : null].filter(Boolean).join(' · ');
        return (
          <div key={i} className={`bloque bloque--${b.tipo}`}>
            <div className="bloque__cab">
              <span className="rotulo">{rotulo}</span>
              <Copiar texto={b.texto} rotulo={t.copiar} hecho={t.copiado} de={rotulo} />
            </div>
            <pre tabIndex={0}><code>{b.texto}</code></pre>
          </div>
        );
      })}
    </div>
  );
}
