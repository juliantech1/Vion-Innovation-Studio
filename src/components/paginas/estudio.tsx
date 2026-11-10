// Piezas compartidas por Casos, Nosotros, Contacto, Privacidad y Gracias: la portada interior (titular ancho, bajada,
// un botón principal y la ficha) y los trazos de los dibujos. Sin texto propio: todo llega por props desde src/content.
import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { interfazDe, pagina, ruta, type Idioma, type Pagina } from '@/content';
import { Acentuado, Texto } from '@/components/sitio/Texto';
import { Boton } from '@/components/vion/piezas';
import './estudio.css';

const espera = (ms: number) => ({ '--espera': `${ms}ms` }) as CSSProperties;

/** Las migas de una página interior (Inicio, página). */
export function Miga({ p, idioma }: { p: Pagina; idioma: Idioma }) {
  return (
    <nav className="miga" aria-label={interfazDe(idioma).migas}>
      <ol>
        <li><Link href={ruta('inicio', idioma)}>{pagina('inicio', idioma).nav}</Link></li>
        <li aria-current="page">{p.nav}</li>
      </ol>
    </nav>
  );
}

/**
 * La portada de una página interior: el H1 a lo ancho, debajo la bajada con un solo botón principal (y uno de línea) y,
 * a la derecha, la ficha con el dato que el visitante busca. `fichaTitulo` es el H2 (en rótulo) de esa ficha.
 */
export function PortadaInterior({ p, idioma, fichaTitulo, ficha, clase }: { p: Pagina; idioma: Idioma; fichaTitulo?: string; ficha?: ReactNode; clase?: string }) {
  return (
    <section className={`portada portada--interior tono-raven${clase ? ` ${clase}` : ''}`} aria-labelledby="titulo">
      <div className="marco pi">
        <div className="pi__cab">
          <Miga p={p} idioma={idioma} />
          <p className="rotulo" data-llega style={espera(200)}>{p.etiqueta}</p>
          <h1 className={p.h1.length > 40 ? 'mega mega--larga' : 'mega'} id="titulo">
            <Acentuado texto={p.h1} acento={p.acento} />
          </h1>
        </div>
        <div className="pi__texto">
          <p className="lead" data-llega style={espera(520)}><Texto idioma={idioma}>{p.bajada}</Texto></p>
          {p.acciones && (
            <div className="acciones" data-llega style={espera(620)}>
              <Boton accion={p.acciones[0]} idioma={idioma} flecha />
              {p.acciones[1] && <Boton accion={p.acciones[1]} idioma={idioma} variante="linea" />}
            </div>
          )}
        </div>
        {ficha && (
          <aside className="pi__ficha" aria-labelledby="ficha-t" data-llega style={espera(720)}>
            <h2 className="rotulo" id="ficha-t">{fichaTitulo}</h2>
            {ficha}
          </aside>
        )}
      </div>
    </section>
  );
}

// ───── trazos para los dibujos (SVG en unidades del viewBox) ─────

/** Un círculo como trazo (se dibuja con stroke-dashoffset como cualquier línea). */
export const circulo = (cx: number, cy: number, r: number) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
/** Un rectángulo con las esquinas redondeadas. */
export const caja = (x: number, y: number, w: number, h: number, r = 0) =>
  r
    ? `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}h${-(w - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}v${-(h - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}Z`
    : `M${x} ${y}h${w}v${h}h${-w}Z`;
/** Un rombo (la marca de «usted decide»). */
export const rombo = (cx: number, cy: number, r: number) => `M${cx} ${cy - r}L${cx + r} ${cy}L${cx} ${cy + r}L${cx - r} ${cy}Z`;
/** Punta de flecha que llega a (x, y) desde la dirección dada (der, izq, arr, aba). */
export const punta = (x: number, y: number, dir: 'der' | 'izq' | 'arr' | 'aba', t = 6) =>
  ({
    der: `M${x - t} ${y - t * 0.8}L${x} ${y}L${x - t} ${y + t * 0.8}`,
    izq: `M${x + t} ${y - t * 0.8}L${x} ${y}L${x + t} ${y + t * 0.8}`,
    arr: `M${x - t * 0.8} ${y + t}L${x} ${y}L${x + t * 0.8} ${y + t}`,
    aba: `M${x - t * 0.8} ${y - t}L${x} ${y}L${x + t * 0.8} ${y - t}`,
  })[dir];
/** Las marcas de una cota (trazos a 45°, como en un plano) en los dos extremos de una línea horizontal. */
export const marcasCota = (x1: number, x2: number, y: number, t = 5) => `M${x1 - t} ${y + t}l${2 * t} ${-2 * t}M${x2 - t} ${y + t}l${2 * t} ${-2 * t}M${x1} ${y - 9}v18M${x2} ${y - 9}v18`;
/** Una línea horizontal punteada hecha de trazos (sigue dibujándose de punta a punta). */
export const punteada = (x1: number, x2: number, y: number, largo = 7, aire = 5) => {
  let d = '';
  for (let x = x1; x < x2; x += largo + aire) d += `M${x} ${y}h${Math.min(largo, x2 - x)}`;
  return d;
};

/** Un trazo del dibujo: `pathLength=1` para que se trace al asomar. */
export function T({ d, rojo, fino, i }: { d: string; rojo?: boolean; fino?: boolean; i?: number }) {
  return (
    <g className={rojo ? 'dib dib--rojo' : fino ? 'dib dib--fino' : 'dib'} style={i ? ({ '--i': i } as CSSProperties) : undefined}>
      <path pathLength={1} d={d} />
    </g>
  );
}

/**
 * Un dibujo que en el celular se ve a su tamaño (1:1, rótulos de 11 px) y se desliza de costado, en lugar de achicarse
 * hasta que sus rótulos no se leen. Se puede enfocar con el teclado para moverlo con las flechas.
 */
export function Desliza({ etiqueta, children }: { etiqueta: string; children: ReactNode }) {
  return (
    <div className="desliza" tabIndex={0} role="group" aria-label={etiqueta}>
      {children}
    </div>
  );
}
