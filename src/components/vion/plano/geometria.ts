// La planta del sitio: un edificio de una planta cuyos ambientes son las páginas (cuatro crujías de 4 m: la cuarta,
// la del eje D al E, sumó Cursos al frente y Blog al fondo el 2026-11-10). En metros (x a la derecha, y al
// fondo, z arriba). La comparten el póster SVG (servidor) y el lienzo vivo (cliente): el mismo dibujo, dos plumas.
import type { IdPagina } from '@/content/tipos';

export const ANCHO = 16;
export const FONDO = 8;
export const ALTO = 3.2;
export const XS = [0, 4, 8, 12, 16];
/** Las letras de los ejes (una por cada valor de XS). */
export const EJES = 'ABCDE';
/** Las puertas al pasillo: una por crujía, a 1,6 m del eje. */
export const PUERTAS = XS.slice(0, -1).map((x) => x + 1.6);
export const YS = [0, 4.5, 5.5, 8];
/** Por dónde pasa el corte A-A. */
export const YC = 3.35;

/** Cada ambiente: [x0, y0, x1, y1]. El pasillo es «Inicio». */
export const AMBIENTES: { id: IdPagina; caja: [number, number, number, number] }[] = [
  { id: 'inicio', caja: [0, 4.5, 16, 5.5] },
  { id: 'consultoria', caja: [0, 0, 4, 4.5] },
  { id: 'autocad', caja: [4, 0, 8, 4.5] },
  { id: 'apps', caja: [8, 0, 12, 4.5] },
  { id: 'cursos', caja: [12, 0, 16, 4.5] },
  { id: 'casos', caja: [0, 5.5, 4, 8] },
  { id: 'nosotros', caja: [4, 5.5, 8, 8] },
  { id: 'blog', caja: [8, 5.5, 12, 8] },
  { id: 'contacto', caja: [12, 5.5, 16, 8] },
];

/** El encuadre de la planta (lo que entra en la caja de la figura) y el pivote de la cámara. */
export const VISTA = { x0: -2.5, y1: 10.4, ancho: 21, alto: 13.4, ox: 8, oy: 3.7 };

export type Capa = 'eje' | 'muro' | 'tabique' | 'alto' | 'puerta' | 'losa' | 'techo' | 'cim' | 'corte';
export type P3 = [number, number, number];
export interface Segmento { a: P3; b: P3; capa: Capa; t0: number; t1: number }

export function segmentos(): Segmento[] {
  const seg: Segmento[] = [];
  const linea = (a: P3, b: P3, capa: Capa, t0: number, t1: number) => seg.push({ a, b, capa, t0, t1 });
  const muro = (x0: number, y0: number, x1: number, y1: number, capa: Capa, t0: number, t1: number) => {
    linea([x0, y0, 0], [x1, y1, 0], capa, t0, t1);
    linea([x0, y0, ALTO], [x1, y1, ALTO], 'alto', t0, t1);
    linea([x0, y0, 0], [x0, y0, ALTO], 'alto', t0, t1);
    linea([x1, y1, 0], [x1, y1, ALTO], 'alto', t0, t1);
  };
  XS.forEach((x, i) => linea([x, -0.9, 0], [x, FONDO + 1.2, 0], 'eje', i * 0.03, 0.14 + i * 0.03));
  YS.forEach((y, i) => linea([-0.9, y, 0], [ANCHO + 1.2, y, 0], 'eje', 0.06 + i * 0.03, 0.2 + i * 0.03));
  // muros exteriores (el hueco de la izquierda es el acceso: el pasillo es «Inicio»)
  muro(0, 4.6, 0, 0, 'muro', 0.12, 0.2);
  muro(0, 0, ANCHO, 0, 'muro', 0.18, 0.3);
  muro(ANCHO, 0, ANCHO, FONDO, 'muro', 0.28, 0.36);
  muro(ANCHO, FONDO, 0, FONDO, 'muro', 0.34, 0.44);
  muro(0, FONDO, 0, 5.4, 'muro', 0.42, 0.48);
  XS.slice(1, -1).forEach((x, i) => {
    muro(x, 0, x, 4.5, 'tabique', 0.44 + i * 0.03, 0.54 + i * 0.03);
    muro(x, 5.5, x, FONDO, 'tabique', 0.48 + i * 0.03, 0.56 + i * 0.03);
  });
  [4.5, 5.5].forEach((y, j) => {
    const cortes = [0, ...PUERTAS.flatMap((x) => [x, x + 0.9]), ANCHO];
    for (let k = 0; k < cortes.length; k += 2) muro(cortes[k], y, cortes[k + 1], y, 'tabique', 0.5 + j * 0.05 + k * 0.008, 0.6 + j * 0.05 + k * 0.008);
    PUERTAS.forEach((x, i) => {
      linea([x, y, 2.1], [x + 0.9, y, 2.1], 'alto', 0.5, 0.7);
      const s = j ? 1 : -1;
      const t0 = 0.6 + i * 0.03 + j * 0.04;
      const n = 8;
      let ant: P3 = [x, y + s * 0.9, 0];
      linea([x, y, 0], ant, 'puerta', t0, t0 + 0.05);
      for (let q = 1; q <= n; q++) {
        const an = ((q / n) * 90 * Math.PI) / 180;
        const pt: P3 = [x + Math.sin(an) * 0.9, y + s * Math.cos(an) * 0.9, 0];
        linea(ant, pt, 'puerta', t0 + 0.05 + (q - 1) * 0.01, t0 + 0.05 + q * 0.01);
        ant = pt;
      }
    });
  });
  const caja = (x0: number, y0: number, x1: number, y1: number, z0: number, z1: number, capa: Capa) => {
    [z0, z1].forEach((z) => {
      linea([x0, y0, z], [x1, y0, z], capa, 0, 1);
      linea([x1, y0, z], [x1, y1, z], capa, 0, 1);
      linea([x1, y1, z], [x0, y1, z], capa, 0, 1);
      linea([x0, y1, z], [x0, y0, z], capa, 0, 1);
    });
    ([[x0, y0], [x1, y0], [x1, y1], [x0, y1]] as const).forEach((c) => linea([c[0], c[1], z0], [c[0], c[1], z1], capa, 0, 1));
  };
  caja(-0.3, -0.3, ANCHO + 0.3, FONDO + 0.3, -0.25, 0, 'losa');
  caja(-0.7, -0.7, ANCHO + 0.7, FONDO + 0.7, ALTO, ALTO + 0.3, 'techo');
  XS.forEach((x) => {
    caja(x - 0.55, -0.55, x + 0.55, 0.55, -1.5, -1.1, 'cim');
    linea([x, 0, -1.1], [x, 0, -0.25], 'cim', 0, 1);
  });
  linea([-1.1, YC, 0], [ANCHO + 1.1, YC, 0], 'corte', 0.86, 1);
  return seg;
}
