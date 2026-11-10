'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { paginaDeRuta } from '@/content/rutas';
import type { Idioma } from '@/content/tipos';

interface Props {
  idioma: Idioma;
  /** id de página → [número de lámina, nombre] para el cajetín de la transición. */
  laminas: Record<string, [string, string]>;
  textos: { lamina: string; colofonMedido: string; reticulaDato: string };
}

const SALE_EXPO = 'cubic-bezier(0.16, 1, 0.3, 1)';
const calma = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Todo el JavaScript de comportamiento del sitio, en un solo componente de cliente que no dibuja contenido:
 * 1 la cabecera (se pega, se esconde al bajar, vuelve al subir) y su etiqueta de sección · 2 lo que entra al asomar ·
 * 3 el colofón medido · 4 la retícula con la tecla G · 5 la transición entre páginas (la lámina).
 * El contenido nunca depende de esto: sin JavaScript la página se ve entera.
 */
export function Comportamientos({ idioma, laminas, textos }: Props) {
  const ruta = usePathname() || '/';
  const router = useRouter();
  const cambio = useRef<HTMLDivElement>(null);
  const guia = useRef<HTMLDivElement>(null);
  const guiaDato = useRef<HTMLDivElement>(null);
  const primera = useRef(true);

  // 1 y 2: por página (se rearma en cada navegación)
  useEffect(() => {
    const d = document;
    const cabecera = d.querySelector<HTMLElement>('[data-cabecera]');
    const aqui = d.querySelector<HTMLElement>('[data-aqui]');
    const secciones = [...d.querySelectorAll<HTMLElement>('main [data-seccion]')];
    let antes = scrollY, pendiente = false, rotulo = '';
    const leer = () => {
      pendiente = false;
      const y = scrollY, estado: string[] = [];
      if (y > 8) estado.push('pegada');
      if (y > 480 && (y > antes + 2 || (y >= antes - 2 && cabecera?.dataset.estado?.includes('oculta')))) estado.push('oculta');
      if (cabecera && cabecera.dataset.estado !== estado.join(' ')) cabecera.dataset.estado = estado.join(' ');
      antes = y;
      if (aqui) {
        const linea = innerHeight * 0.35;
        let nombre = '';
        for (const s of secciones) { if (s.getBoundingClientRect().top <= linea) nombre = s.dataset.seccion || ''; else break; }
        if (nombre !== rotulo) {
          rotulo = nombre;
          if (nombre) aqui.firstElementChild!.textContent = nombre;
          aqui.dataset.visible = String(Boolean(nombre) && y > 8);
        } else if (nombre) aqui.dataset.visible = String(y > 8);
      }
    };
    const alScroll = () => { if (!pendiente) { pendiente = true; requestAnimationFrame(leer); } };
    addEventListener('scroll', alScroll, { passive: true });
    leer();

    const ver = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visto'); ver.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    d.querySelectorAll('[data-entra], [data-traza], [data-dibuja]').forEach((el) => ver.observe(el));

    // 3 el colofón: cuánto pesó y cuánto tardó esta página, medido acá
    const colofon = d.querySelector<HTMLElement>('[data-colofon]');
    let reloj = 0;
    const medir = () => {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      if (!nav || !colofon) return;
      const recursos = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const bytes = [nav, ...recursos].reduce((s, r) => s + (r.transferSize || r.encodedBodySize || 0), 0);
      const seg = (nav.loadEventEnd || nav.domContentLoadedEventEnd) / 1000;
      const f = (x: number, dec: number) => x.toLocaleString(idioma === 'es' ? 'es-CR' : 'en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
      if (bytes) colofon.textContent = textos.colofonMedido.replace('{n}', String(recursos.length + 1)).replace('{kb}', f(bytes / 1000, 0)).replace('{s}', f(seg, 2));
    };
    const programar = () => { reloj = window.setTimeout(medir, 1200); };
    if (d.readyState === 'complete') programar(); else addEventListener('load', programar, { once: true });

    return () => { removeEventListener('scroll', alScroll); removeEventListener('load', programar); clearTimeout(reloj); ver.disconnect(); };
  }, [ruta, idioma, textos.colofonMedido]);

  // 4 la retícula a la vista
  useEffect(() => {
    const g = guia.current, dato = guiaDato.current;
    if (!g || !dato) return;
    const escribir = () => {
      const r = g.querySelector<HTMLElement>('.reticula')!;
      const cs = getComputedStyle(r);
      dato.textContent = textos.reticulaDato
        .replace('{cols}', String(cs.gridTemplateColumns.split(' ').length))
        .replace('{canal}', String(Math.round(parseFloat(cs.columnGap))))
        .replace('{margen}', String(Math.round(r.getBoundingClientRect().left)))
        .replace('{ancho}', String(innerWidth));
    };
    const cambiar = () => {
      const ver = g.dataset.visible !== 'true';
      g.dataset.visible = String(ver);
      document.querySelector('[data-guia-boton]')?.setAttribute('aria-pressed', String(ver));
      if (ver) escribir();
    };
    const alClic = (e: MouseEvent) => { if ((e.target as Element).closest?.('[data-guia-boton]')) cambiar(); };
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== 'g' || e.ctrlKey || e.metaKey || e.altKey) return;
      if ((e.target as Element).closest?.('input, textarea, select, [contenteditable]')) return;
      cambiar();
    };
    const alMedir = () => { if (g.dataset.visible === 'true') escribir(); };
    document.addEventListener('click', alClic);
    addEventListener('keydown', alTeclear);
    addEventListener('resize', alMedir);
    return () => { document.removeEventListener('click', alClic); removeEventListener('keydown', alTeclear); removeEventListener('resize', alMedir); };
  }, [textos.reticulaDato]);

  // 5a la lámina cubre: crece desde el enlace tocado hasta tapar la pantalla, y recién entonces se navega
  useEffect(() => {
    const capa = cambio.current;
    if (!capa) return;
    const alClic = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest?.('a');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      const destino = paginaDeRuta(url.pathname);
      if (!destino || destino.idioma !== idioma || calma() || !capa.animate) return;   // otro idioma: documento entero
      e.preventDefault();
      if (capa.dataset.activo !== undefined) return;
      const [n, nombre] = laminas[destino.id] ?? ['', ''];
      capa.querySelector('[data-cambio-n]')!.textContent = n ? `${textos.lamina} ${n}` : textos.lamina;
      capa.querySelector('[data-cambio-t]')!.textContent = nombre;
      const r = a.getBoundingClientRect();
      const desde = `inset(${Math.max(0, r.top)}px ${Math.max(0, innerWidth - r.right)}px ${Math.max(0, innerHeight - r.bottom)}px ${Math.max(0, r.left)}px)`;
      capa.dataset.activo = '';
      document.documentElement.classList.add('transito');
      const ir = () => router.push(url.pathname + url.search + url.hash);
      capa.animate([{ clipPath: desde }, { clipPath: 'inset(0px 0px 0px 0px)' }], { duration: 480, easing: SALE_EXPO, fill: 'both' }).finished.then(ir, ir);
      window.setTimeout(() => abrir(capa), 5000);   // por si la navegación no llega: nunca queda tapada
    };
    document.addEventListener('click', alClic, true);
    return () => document.removeEventListener('click', alClic, true);
  }, [idioma, laminas, router, textos.lamina]);

  // 5b la página nueva se abre por una ventana con proporción de lámina que crece desde el centro
  useEffect(() => {
    if (primera.current) { primera.current = false; return; }
    const capa = cambio.current;
    if (capa?.dataset.activo === undefined) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => abrir(capa)));
    return () => cancelAnimationFrame(id);
  }, [ruta]);

  return (
    <>
      <div className="cambio" ref={cambio} aria-hidden="true">
        <div className="cambio__marco" />
        <p className="cambio__cajetin">
          <span data-cambio-n />
          <span data-cambio-t />
        </p>
      </div>
      <div className="guia" ref={guia} aria-hidden="true">
        <div className="marco reticula">
          {Array.from({ length: 12 }, (_, i) => <i key={i} style={{ '--i': i } as React.CSSProperties} />)}
        </div>
      </div>
      <div className="guia__dato" ref={guiaDato} aria-hidden="true" />
    </>
  );
}

function abrir(capa: HTMLElement) {
  if (capa.dataset.activo === undefined || capa.dataset.abriendo !== undefined) return;
  capa.dataset.abriendo = '';
  const hueco = (t: number, r: number, b: number, l: number) =>
    `polygon(evenodd, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${l}% ${t}%, ${100 - r}% ${t}%, ${100 - r}% ${100 - b}%, ${l}% ${100 - b}%, ${l}% ${t}%)`;
  const fin = () => {
    capa.getAnimations().forEach((a) => a.cancel());
    delete capa.dataset.activo;
    delete capa.dataset.abriendo;
  };
  capa.animate(
    [{ clipPath: hueco(50, 50, 50, 50) }, { clipPath: hueco(36, 34, 36, 34), offset: 0.32, easing: SALE_EXPO }, { clipPath: hueco(0, 0, 0, 0) }],
    { duration: 820, delay: 140, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', fill: 'both' },
  ).finished.then(fin, fin);
}
