import { catalogoDe, piezasDe, publicarRangos, type Idioma } from '@/content';

const sinMoneda = (rango: string, alMes: string) => {
  const limpio = rango.replace(/^USD\s*/, '');
  const i = limpio.toLowerCase().indexOf(alMes.toLowerCase());
  return i > 0 ? { cifra: limpio.slice(0, i).trim(), resto: alMes } : { cifra: limpio, resto: '' };
};

/** Fig. 1: los tres pasos (diagnóstico, piloto, soporte) sobre una misma escala de semanas. Datos del catálogo. */
export function Pasos({ idioma }: { idioma: Idioma }) {
  const t = piezasDe(idioma).fig1;
  const c = catalogoDe(idioma);
  const eje = [`${t.semana} 0`, '2', '4', '6', '8', t.mesAMes];
  const pasos = [
    { s: c.diagnostico, barras: <><span className="barra" style={{ '--ini': 0, '--fin': 2, '--i': 0 } as React.CSSProperties} /><span className="decide decide--der" style={{ '--en': 2, '--i': 0 } as React.CSSProperties}><i /><span>{t.decide[0]}</span></span></> },
    { s: c.piloto, barras: <><span className="barra" style={{ '--ini': 2, '--fin': 6, '--i': 1 } as React.CSSProperties} /><span className="barra barra--rango" style={{ '--ini': 6, '--fin': 8, '--i': 1.6 } as React.CSSProperties} /><span className="decide decide--izq" style={{ '--en': 8, '--i': 2 } as React.CSSProperties}><i /><span>{t.decide[1]}</span></span></> },
    { s: c.soporte, barras: <span className="barra barra--sigue" style={{ '--ini': 8, '--fin': 10, '--i': 3 } as React.CSSProperties} />, opcional: true },
  ];
  return (
    <div className="pasos" data-traza>
      <div className="pasos__cab" aria-hidden="true">
        <span>{t.paso}</span>
        <span className="eje">{eje.map((e) => <span key={e}>{e}</span>)}</span>
        <span>{t.plazo}</span>
        {publicarRangos && <span className="der">{t.rango}</span>}
      </div>
      {pasos.map(({ s, barras, opcional }, i) => {
        const r = sinMoneda(s.rango, t.alMes);
        return (
          <div className="paso" key={s.nombre}>
            <div className="paso__que">
              <p className="paso__n">{t.paso} {i + 1}</p>
              <h3 className="sub">{s.nombre}</h3>
              <p>{s.que}</p>
              <ul className="paso__entrega">
                {s.entregables.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
            <div className="carril-caja" aria-hidden="true">
              <span className="eje eje--movil">{eje.map((e) => <span key={e}>{e}</span>)}</span>
              <div className="carril">{barras}</div>
            </div>
            <dl className="paso__plazo">
              <dt>{t.plazo}</dt>
              <dd>{s.plazo}{opcional && <small>{t.opcional}</small>}</dd>
            </dl>
            {publicarRangos && (
              <dl className="paso__rango">
                <dt>{t.rango}</dt>
                <dd>{r.cifra}{r.resto && <small>{r.resto}</small>}</dd>
              </dl>
            )}
          </div>
        );
      })}
    </div>
  );
}
