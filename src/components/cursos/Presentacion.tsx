'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Textos = { anterior: string; siguiente: string; de: string; lamina: string; verTodas: string; verDeAUna: string; teclas: string };

/**
 * Lo que convierte la lista de láminas (HTML del servidor, que sin JavaScript se lee entera de arriba abajo) en una
 * presentación: una lámina a la vez, con botones, flechas del teclado y deslizando con el dedo. La dirección lleva el
 * ancla de la lámina (#lamina-1-3) para compartirla; se reemplaza sin sumar pasos al historial. Antes de que esto
 * cargue, el CSS ya muestra la primera lámina (o la del ancla con :target), así que no hay salto al hidratar.
 */
export function Presentacion({ ids, titulos, t }: { ids: string[]; titulos: string[]; t: Textos }) {
  const [i, setI] = useState(0);
  const [todas, setTodas] = useState(false);
  const raiz = useRef<HTMLDivElement>(null);
  const iRef = useRef(0);
  const total = ids.length;

  const contenedor = () => raiz.current?.closest<HTMLElement>('[data-presentacion]') ?? null;

  const mostrar = useCallback((k: number, mover: boolean) => {
    const c = contenedor();
    if (!c) return;
    const n = Math.max(0, Math.min(total - 1, k));
    c.querySelectorAll<HTMLElement>('.lamina').forEach((el, j) => {
      el.classList.toggle('es-actual', j === n);
    });
    c.querySelectorAll<HTMLAnchorElement>('.pres__marcas a').forEach((a, j) => (j === n ? a.setAttribute('aria-current', 'step') : a.removeAttribute('aria-current')));
    c.toggleAttribute('data-fin', n === total - 1);
    c.classList.add('presentacion--lista');
    setI(n);
    iRef.current = n;
    if (mover) {
      history.replaceState(null, '', `#${ids[n]}`);
      const el = document.getElementById(ids[n]);
      if (el && el.getBoundingClientRect().top < 0) {
        el.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      }
    }
  }, [ids, total]);

  // Al cargar: la lámina del ancla, si hay.
  useEffect(() => {
    const k = ids.indexOf(location.hash.slice(1));
    mostrar(k >= 0 ? k : 0, false);
    const alCambiar = () => {
      const j = ids.indexOf(location.hash.slice(1));
      if (j >= 0) mostrar(j, false);
    };
    addEventListener('hashchange', alCambiar);
    return () => removeEventListener('hashchange', alCambiar);
  }, [ids, mostrar]);

  // Teclado, marcas y dedo.
  useEffect(() => {
    const c = contenedor();
    if (!c || todas) return;
    const tecla = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.defaultPrevented) return;
      const el = e.target as HTMLElement;
      if (el.closest('input, textarea, select, [contenteditable], video, iframe, .md__tabla, pre')) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); mostrar(iRef.current + 1, true); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); mostrar(iRef.current - 1, true); }
    };
    const marca = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('.pres__marcas a, .pres__indice a');
      if (!a) return;
      const k = ids.indexOf(a.hash.slice(1));
      if (k < 0) return;
      e.preventDefault();
      mostrar(k, true);
      a.closest('details')?.removeAttribute('open');
    };
    let x0 = 0, y0 = 0, pid = -1;
    const lista = c.querySelector<HTMLElement>('.laminas');
    const baja = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' || (e.target as HTMLElement).closest('pre, .md__tabla, video, iframe, button, a, summary')) return;
      x0 = e.clientX; y0 = e.clientY; pid = e.pointerId;
    };
    const sube = (e: PointerEvent) => {
      if (e.pointerId !== pid) return;
      pid = -1;
      const dx = e.clientX - x0, dy = e.clientY - y0;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6) mostrar(iRef.current + (dx < 0 ? 1 : -1), true);
    };
    document.addEventListener('keydown', tecla);
    c.addEventListener('click', marca);
    lista?.addEventListener('pointerdown', baja);
    lista?.addEventListener('pointerup', sube);
    lista?.addEventListener('pointercancel', () => (pid = -1));
    return () => {
      document.removeEventListener('keydown', tecla);
      c.removeEventListener('click', marca);
      lista?.removeEventListener('pointerdown', baja);
      lista?.removeEventListener('pointerup', sube);
    };
  }, [ids, mostrar, todas]);

  useEffect(() => {
    contenedor()?.classList.toggle('presentacion--todas', todas);
  }, [todas]);

  const n2 = (k: number) => String(k).padStart(2, '0');
  return (
    <div ref={raiz} className="pres__mando">
      <p className="pres__cuenta" aria-hidden={todas || undefined}>
        <span className="rotulo">{t.lamina}</span> <strong>{n2(i + 1)}</strong> <span>{t.de} {n2(total)}</span>
      </p>
      <p className="solo-lectores" role="status">{todas ? '' : `${t.lamina} ${i + 1} ${t.de} ${total}: ${titulos[i]}`}</p>
      <div className="pres__botones">
        <button type="button" className="pres__btn" onClick={() => mostrar(i - 1, true)} disabled={todas || i === 0} aria-label={t.anterior}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button type="button" className="pres__btn pres__btn--sig" onClick={() => mostrar(i + 1, true)} disabled={todas || i === total - 1}>
          <span>{t.siguiente}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
        <button type="button" className="pres__modo" aria-pressed={todas} onClick={() => setTodas((v) => !v)}>
          {todas ? t.verDeAUna : t.verTodas}
        </button>
      </div>
      <p className="pres__ayuda">{t.teclas}</p>
    </div>
  );
}
