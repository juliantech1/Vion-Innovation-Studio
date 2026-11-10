'use client';

import { useEffect, useRef } from 'react';

/**
 * Monta el lienzo vivo del plano cuando ya no molesta: después de `load`, con el navegador ocioso y con el póster ya
 * trazado. El motor (plano/motor.ts) viaja en su propio archivo y no entra en el JavaScript inicial de la portada.
 * Con movimiento reducido no se carga: queda la planta del póster.
 */
export function PlanoVivo({ vistas }: { vistas: string[] }) {
  const ancla = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const figura = ancla.current?.closest<HTMLElement>('[data-plano]');
    if (!figura || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let desmontar: (() => void) | undefined;
    let cancelado = false;
    let reloj = 0;
    const cargar = () => {
      if (cancelado) return;
      import('./motor').then((m) => { if (!cancelado) desmontar = m.montar(figura, vistas); }).catch(() => {});
    };
    const ocioso = () => {
      const pedir = window.requestIdleCallback ?? ((f: () => void) => window.setTimeout(f, 200));
      reloj = window.setTimeout(() => pedir(cargar, { timeout: 1500 }), 3100);   // el póster termina de trazarse a los 2,8 s
    };
    if (document.readyState === 'complete') ocioso(); else addEventListener('load', ocioso, { once: true });
    return () => { cancelado = true; clearTimeout(reloj); removeEventListener('load', ocioso); desmontar?.(); };
  }, [vistas]);
  return <span ref={ancla} hidden />;
}
