'use client';

import { useEffect, useRef, useState } from 'react';
import type { Idioma, Piezas } from '@/content/tipos';

type Trabajo = [string, string, string];
interface Tarjeta { k: number; dato: Trabajo; estado?: 'entra' | 'si' | 'no' }
interface Linea { k: number; hora: string; fuerte: string; resto: string }

/**
 * Fig. 2: la cola de aprobación de Ultron, que se puede operar. Datos de ejemplo (lo dice en pantalla). Aprobar: la
 * tarjeta sale y queda en el registro. Rechazar: vuelve a su agente. Mientras está a la vista y nadie la toca, los
 * agentes dejan un trabajo nuevo cada 7 s (hasta tres). Sin JavaScript se ve la cola inicial, quieta.
 */
export function Cola({ t, idioma }: { t: Piezas['ultron']['cola']; idioma: Idioma }) {
  const [tarjetas, setTarjetas] = useState<Tarjeta[]>(() => t.trabajos.slice(0, 3).map((dato, k) => ({ k, dato })));
  const [cuentas, setCuentas] = useState({ salieron: 0, volvieron: 0 });
  const [registro, setRegistro] = useState<Linea[]>([{ k: 0, hora: t.ahora, fuerte: '', resto: t.inicial }]);
  const caja = useRef<HTMLDivElement>(null);
  const serie = useRef(3);
  const turno = useRef(3);
  const estado = useRef({ esperan: 3, visible: false });
  const esperan = tarjetas.filter((x) => x.estado !== 'si' && x.estado !== 'no').length;
  useEffect(() => { estado.current.esperan = esperan; }, [esperan]);

  const hora = () => new Date().toLocaleTimeString(idioma === 'es' ? 'es-CR' : 'en-US', { hour12: false });
  const anotar = ([fuerte, resto]: [string, string], que: string, area: string) =>
    setRegistro((r) => [{ k: serie.current++, hora: hora(), fuerte, resto: resto.replace('{que}', que.toLowerCase()).replace('{area}', area) }, ...r].slice(0, 3));
  const llega = (dato: Trabajo, callado?: boolean) => {
    const k = serie.current++;
    const calma = matchMedia('(prefers-reduced-motion: reduce)').matches;
    setTarjetas((l) => [...l, { k, dato, estado: calma ? undefined : 'entra' }]);
    if (!calma) requestAnimationFrame(() => requestAnimationFrame(() => setTarjetas((l) => l.map((x) => (x.k === k ? { ...x, estado: undefined } : x)))));
    if (!callado) anotar(t.preparado, dato[0], dato[1]);
  };
  const decidir = (x: Tarjeta, si: boolean, boton: HTMLElement) => {
    if (x.estado) return;
    const vecina = [...(caja.current?.querySelectorAll<HTMLElement>('.tarjeta:not([data-estado])') ?? [])].find((el) => !el.contains(boton));
    vecina?.querySelector<HTMLElement>(si ? '.mini--si' : '.mini:not(.mini--si)')?.focus({ preventScroll: true });
    setTarjetas((l) => l.map((y) => (y.k === x.k ? { ...y, estado: si ? 'si' : 'no' } : y)));
    setCuentas((c) => (si ? { ...c, salieron: c.salieron + 1 } : { ...c, volvieron: c.volvieron + 1 }));
    anotar(si ? t.aprobado : t.rechazado, x.dato[0], x.dato[1]);
    window.setTimeout(() => setTarjetas((l) => l.filter((y) => y.k !== x.k)), 560);
  };
  const reiniciar = () => {
    t.trabajos.slice(0, 3).forEach((d) => llega(d, true));
    setRegistro((r) => [{ k: serie.current++, hora: hora(), fuerte: t.deNuevo[0], resto: t.deNuevo[1] }, ...r].slice(0, 3));
  };

  useEffect(() => {
    const el = caja.current;
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const obs = new IntersectionObserver(([e]) => { estado.current.visible = e.isIntersecting; }, { threshold: 0.4 });
    obs.observe(el);
    const id = window.setInterval(() => {
      const s = estado.current;
      if (!s.visible || document.hidden || s.esperan >= 3 || el.matches(':hover, :focus-within')) return;
      llega(t.trabajos[turno.current++ % t.trabajos.length]);
    }, 7000);
    return () => { obs.disconnect(); clearInterval(id); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cola" ref={caja}>
      <div className="cola__barra">
        <p className="cola__titulo"><i aria-hidden="true" />{t.titulo}</p>
        <span className="chip">{t.demo}</span>
      </div>
      <dl className="cola__cuentas">
        <div><dt>{t.esperan}</dt><dd>{esperan}</dd></div>
        <div><dt>{t.salieron}</dt><dd>{cuentas.salieron}</dd></div>
        <div><dt>{t.volvieron}</dt><dd>{cuentas.volvieron}</dd></div>
      </dl>
      <ol className="cola__lista" aria-label={t.lista}>
        {tarjetas.map((x) => (
          <li className="tarjeta" key={x.k} data-estado={x.estado}>
            <div>
              <div className="tarjeta__in">
                <p className="tarjeta__q">{x.dato[0]} <span>· {x.dato[1]}</span></p>
                <p className="tarjeta__p">{x.dato[2]}</p>
                <div className="tarjeta__a">
                  <button className="mini mini--si" type="button" disabled={Boolean(x.estado && x.estado !== 'entra')} aria-label={`${t.aprobar}: ${x.dato[0]}`} onClick={(e) => decidir(x, true, e.currentTarget)}>{t.aprobar}</button>
                  <button className="mini" type="button" disabled={Boolean(x.estado && x.estado !== 'entra')} aria-label={`${t.rechazar}: ${x.dato[0]}`} onClick={(e) => decidir(x, false, e.currentTarget)}>{t.rechazar}</button>
                </div>
              </div>
            </div>
          </li>
        ))}
        {tarjetas.length === 0 && (
          <li className="cola__vacia">
            <p>{t.vacia}</p>
            <button className="mini" type="button" onClick={reiniciar}>{t.reiniciar}</button>
          </li>
        )}
      </ol>
      <div className="cola__registro">
        <p className="cola__registro-t">{t.registro}</p>
        <ol aria-live="polite">
          {registro.map((l, i) => (
            <li key={l.k} data-nueva={i === 0 && l.k > 0 ? '' : undefined}>
              <time>{l.hora}</time>
              <span>{l.fuerte && <b>{l.fuerte} </b>}{l.resto}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
