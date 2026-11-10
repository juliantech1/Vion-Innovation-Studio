import { pagina, piezasDe, type Idioma, type SeccionTexto } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Texto } from '@/components/sitio/Texto';
import { Ficha } from '@/components/vion/piezas';
import { seccion } from './comun';
import { PortadaInterior } from './estudio';

/** Aviso de privacidad (es/en): texto de lectura, con su índice a la izquierda y las secciones numeradas. */
export function Privacidad({ idioma }: { idioma: Idioma }) {
  const p = pagina('privacidad', idioma);
  const t = piezasDe(idioma).privacidad;
  const secciones: SeccionTexto[] = p.secciones.map((_, i) => seccion(p, i, 'texto'));
  const tx = (s: string) => <Texto idioma={idioma}>{s}</Texto>;
  const n2 = (i: number) => String(i + 1).padStart(2, '0');
  return (
    <>
      <JsonLd id="privacidad" idioma={idioma} />
      <article className="pagina" data-pagina="privacidad">
        <PortadaInterior
          p={p}
          idioma={idioma}
          clase="portada--lectura"
          fichaTitulo={t.fichaTitulo}
          ficha={<Ficha filas={[{ termino: t.estado, valor: t.estadoValor }, { termino: t.ley, valor: t.leyValor }]} />}
        />
        <div className="tono-powder lectura-bloque">
          <div className="marco reticula lectura">
            <nav className="lectura__indice" aria-labelledby="indice-t">
              <p className="rotulo" id="indice-t">{t.indice}</p>
              <ol>
                {secciones.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}><b>{n2(i)}</b>{s.titulo}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="lectura__cuerpo">
              {secciones.map((s, i) => (
                <section key={s.id} id={s.id} aria-labelledby={`t-${s.id}`} data-seccion={s.titulo}>
                  <h2 className="lectura__h" id={`t-${s.id}`}>
                    <span className="lectura__n" aria-hidden="true">{n2(i)}</span>
                    {s.titulo}
                  </h2>
                  {s.parrafos.map((x) => <p key={x}>{tx(x)}</p>)}
                  {s.lista && <ul>{s.lista.map((x) => <li key={x}>{tx(x)}</li>)}</ul>}
                  {s.cierre?.map((x) => <p key={x}>{tx(x)}</p>)}
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
