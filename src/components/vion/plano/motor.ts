// El plano vivo: canvas 2D a mano, proyección ortogonal. Se carga después del LCP y toma el relevo del póster SVG
// (el mismo dibujo): respira en reposo, sigue al puntero y, con el scroll, la cámara pasa de planta a isométrica y
// a corte A-A. Si este archivo no llega a cargar, el póster queda entero: la portada nunca depende de él.
import { ALTO, AMBIENTES, ANCHO, EJES, FONDO, VISTA, XS, YC, YS, segmentos, type P3 } from './geometria';

const C = { claro: '250,250,250', azul: '201,223,238', rojo: '232,52,28', naranja: '240,97,42' };
const RAD = Math.PI / 180;
const suave = (a: number, b: number, x: number) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export function montar(figura: HTMLElement, vistas: string[]): () => void {
  const lienzo = figura.querySelector<HTMLCanvasElement>('canvas')!;
  const caja = figura.querySelector<HTMLElement>('.plano__caja')!;
  const portada = figura.closest<HTMLElement>('.portada');
  const escena = portada?.querySelector<HTMLElement>('.portada__escena') ?? null;
  const rotulo = figura.querySelector<HTMLElement>('[data-plano-vista]');
  const items = [...figura.querySelectorAll<HTMLElement>('[data-amb]')];
  const ctx = lienzo.getContext('2d');
  if (!ctx) return () => {};
  const seg = segmentos();
  const columnas: [number, number][] = [];
  XS.forEach((x) => YS.forEach((y) => columnas.push([x, y])));
  const fuente = getComputedStyle(lienzo).fontFamily || 'monospace';
  const cajaDe = (id: string) => AMBIENTES.find((a) => a.id === id)!.caja;

  let w = 0, h = 0, dpr = 1, esc = 30, cx = 0, cy = 0, movil = false, fijada = false;
  let phi = 90, theta = 0, baja = 0, sp = 1, cp = 0, st = 0, ct = 1;
  const proy = (v: P3): [number, number] => {
    const x = v[0] - VISTA.ox, y = v[1] - VISTA.oy;
    const xr = x * ct - y * st, yr = x * st + y * ct;
    return [cx + xr * esc, cy + baja - (yr * sp + v[2] * cp) * esc];
  };
  const enPlanta = (x: number, y: number): [number, number] => [cx + (x - VISTA.ox) * esc, cy - (y - VISTA.oy) * esc];

  function medir() {
    const rl = lienzo.getBoundingClientRect(), rc = caja.getBoundingClientRect();
    w = rl.width; h = rl.height; movil = innerWidth < 992;
    dpr = Math.min(devicePixelRatio || 1, movil ? 1.5 : 2);
    lienzo.width = Math.round(w * dpr); lienzo.height = Math.round(h * dpr);
    esc = rc.width / VISTA.ancho;
    cx = rc.left - rl.left + (VISTA.ox - VISTA.x0) * esc;
    cy = rc.top - rl.top + (VISTA.y1 - VISTA.oy) * esc;
    fijada = !!escena && getComputedStyle(escena).position === 'sticky';
  }

  let p = 0, pxS = 0, pyS = 0, px = -1, py = -1, sobre: string | null = null, sobreA = 0, visible = true, ultima = -1, t0 = 0, par = 0, cuadroId = 0, vivo = true;

  function trazo(capa: string): boolean {
    ctx!.setLineDash([]);
    let a = 1, col = C.claro, lw = 1;
    if (capa === 'muro') { lw = 1.7; a = 0.95; }
    else if (capa === 'tabique') { lw = 1.15; a = 0.78; }
    else if (capa === 'alto') { a = 0.34 * (1 - Math.pow(sp, 14)); }
    else if (capa === 'puerta') { col = C.azul; a = 0.7 * suave(0.35, 0.8, sp); }
    else if (capa === 'eje') { col = C.azul; a = 0.32 * suave(0.3, 0.75, sp); ctx!.setLineDash([12, 4, 2, 4]); }
    else if (capa === 'losa') { col = C.azul; a = 0.42 * (1 - Math.pow(sp, 10)); }
    else if (capa === 'techo') { col = C.azul; a = 0.5 * (1 - Math.pow(sp, 10)); ctx!.setLineDash([5, 4]); }
    else if (capa === 'cim') { col = C.azul; a = 0.55 * (1 - suave(0.2, 0.7, sp)); ctx!.setLineDash([3, 3]); }
    else if (capa === 'corte') { col = C.rojo; lw = 1.5; a = suave(0.2, 0.6, sp); ctx!.setLineDash([14, 4, 3, 4]); }
    ctx!.lineWidth = lw; ctx!.strokeStyle = `rgba(${col},${a.toFixed(3)})`;
    return a > 0.004;
  }
  // Cada rótulo lleva un halo del color del fondo: así una cota que cae sobre un eje se sigue leyendo.
  const texto = (s: string, x: number, y: number, alfa: number, col = C.claro, alin: CanvasTextAlign = 'center') => {
    ctx!.setLineDash([]); ctx!.textAlign = alin;
    ctx!.lineWidth = 4; ctx!.lineJoin = 'round'; ctx!.strokeStyle = `rgba(11,11,12,${Math.min(1, alfa * 1.1).toFixed(3)})`; ctx!.strokeText(s, x, y);
    ctx!.fillStyle = `rgba(${col},${alfa.toFixed(3)})`; ctx!.fillText(s, x, y);
  };
  const burbuja = (pt: [number, number], s: string, alfa: number) => {
    if (alfa < 0.01) return;
    ctx!.setLineDash([]); ctx!.lineWidth = 1; ctx!.strokeStyle = `rgba(${C.azul},${(0.7 * alfa).toFixed(3)})`;
    ctx!.beginPath(); ctx!.arc(pt[0], pt[1], Math.max(0.35 * esc, 9.5), 0, 6.2832); ctx!.stroke();
    texto(s, pt[0], pt[1] + 4, 0.9 * alfa);
  };
  const cota = (a: [number, number], b: [number, number], dx: number, dy: number, rot: string, alfa: number, lado?: 'izq') => {
    if (alfa < 0.01) return;
    const A = [a[0] + dx, a[1] + dy], B = [b[0] + dx, b[1] + dy];
    ctx!.setLineDash([]); ctx!.lineWidth = 1; ctx!.strokeStyle = `rgba(${C.azul},${(0.6 * alfa).toFixed(3)})`;
    ctx!.beginPath(); ctx!.moveTo(A[0], A[1]); ctx!.lineTo(B[0], B[1]);
    ctx!.moveTo(a[0] + dx * 0.25, a[1] + dy * 0.25); ctx!.lineTo(A[0] + dx * 0.14, A[1] + dy * 0.14);
    ctx!.moveTo(b[0] + dx * 0.25, b[1] + dy * 0.25); ctx!.lineTo(B[0] + dx * 0.14, B[1] + dy * 0.14); ctx!.stroke();
    ctx!.lineWidth = 1.6; ctx!.strokeStyle = `rgba(${C.naranja},${alfa.toFixed(3)})`;
    ctx!.beginPath(); [A, B].forEach((q) => { ctx!.moveTo(q[0] - 4, q[1] + 4); ctx!.lineTo(q[0] + 4, q[1] - 4); }); ctx!.stroke();
    const mx = (A[0] + B[0]) / 2, my = (A[1] + B[1]) / 2;
    if (lado === 'izq') texto(rot, mx - 7, my + 3.5, 0.9 * alfa, C.claro, 'right'); else texto(rot, mx, my - 6, 0.9 * alfa);
  };

  function dibujar() {
    const c = ctx!;
    c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, w, h);
    sp = Math.sin(phi * RAD); cp = Math.cos(phi * RAD); st = Math.sin(theta * RAD); ct = Math.cos(theta * RAD);
    baja = (1 - sp) * (movil ? 1.6 : 2.3) * esc;
    c.font = `500 ${movil ? 11 : 11.5}px ${fuente}`;
    if ('letterSpacing' in c) (c as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '0.6px';
    c.lineCap = 'round'; c.lineJoin = 'round';
    const enCorte = 1 - suave(1, 9, phi), planta = suave(30, 62, phi);
    const lateral = innerWidth >= 480;

    if (sobre && sobreA > 0.01) {
      const r = cajaDe(sobre), q = ([[r[0], r[1], 0], [r[2], r[1], 0], [r[2], r[3], 0], [r[0], r[3], 0]] as P3[]).map(proy);
      c.fillStyle = `rgba(${C.azul},${(sobreA * (1 - enCorte)).toFixed(3)})`;
      c.beginPath(); q.forEach((v, k) => (k ? c.lineTo(v[0], v[1]) : c.moveTo(v[0], v[1]))); c.closePath(); c.fill();
    }
    if (enCorte > 0.01) {
      c.fillStyle = `rgba(${C.azul},${(0.92 * enCorte).toFixed(3)})`;
      [[-0.3, -0.25, ANCHO + 0.3, 0], [-0.7, ALTO, ANCHO + 0.7, ALTO + 0.3], [0, 0, 0.22, ALTO], [ANCHO - 0.22, 0, ANCHO, ALTO], ...XS.slice(1, -1).map((x) => [x - 0.06, 0, x + 0.06, ALTO])].forEach((b) => {
        const a = proy([b[0], YC, b[1]]), d = proy([b[2], YC, b[3]]); c.fillRect(a[0], d[1], d[0] - a[0], a[1] - d[1]);
      });
      const g0 = proy([-1.9, YC, -0.25]), g1 = proy([ANCHO + 1.9, YC, -0.25]);
      c.setLineDash([]); c.lineWidth = 1; c.strokeStyle = `rgba(${C.azul},${(0.55 * enCorte).toFixed(3)})`;
      c.beginPath(); c.moveTo(g0[0], g0[1]); c.lineTo(g1[0], g1[1]);
      for (let gx = g0[0] + 6; gx < g1[0]; gx += 11) { c.moveTo(gx, g0[1] + 2); c.lineTo(gx - 6, g0[1] + 9); }
      c.stroke();
    }
    let capa = '', ok = false;
    for (const s of seg) {
      if (s.capa !== capa) { if (capa && ok) c.stroke(); capa = s.capa; ok = trazo(capa); if (ok) c.beginPath(); }
      if (!ok) continue;
      const a = proy(s.a), b = proy(s.b);
      c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]);
    }
    if (ok) c.stroke();
    c.setLineDash([]);
    c.fillStyle = `rgba(${C.claro},0.95)`;
    columnas.forEach((k) => {
      const q = ([[k[0] - 0.13, k[1] - 0.13, 0], [k[0] + 0.13, k[1] - 0.13, 0], [k[0] + 0.13, k[1] + 0.13, 0], [k[0] - 0.13, k[1] + 0.13, 0]] as P3[]).map(proy);
      c.beginPath(); q.forEach((v, i) => (i ? c.lineTo(v[0], v[1]) : c.moveTo(v[0], v[1]))); c.closePath(); c.fill();
    });
    if (enCorte > 0.01) {
      c.fillStyle = `rgba(${C.azul},${(0.5 * enCorte).toFixed(3)})`;
      XS.forEach((x) => { const a = proy([x - 0.13, YC, -0.25]), b = proy([x + 0.13, YC, -1.1]); c.fillRect(a[0], a[1], b[0] - a[0], b[1] - a[1]); });
    }
    XS.forEach((x, k) => {
      burbuja(proy([x, FONDO + 1.75, 0]), EJES[k], planta);
      burbuja([proy([x, 0, 0])[0], proy([x, YC, -1.5])[1] + 2.05 * esc], EJES[k], enCorte);
    });
    if (lateral) YS.forEach((y, k) => burbuja(proy([ANCHO + 1.75, y, 0]), String(k + 1), planta));
    const base = (x: number): [number, number] => {
      let q = proy([x, 0, 0]);
      if (enCorte > 0) { const g = proy([x, YC, -1.5]); q = [q[0] + (g[0] - q[0]) * enCorte, q[1] + (g[1] - q[1]) * enCorte]; }
      return q;
    };
    for (let i = 0; i < XS.length - 1; i++) cota(base(XS[i]), base(XS[i + 1]), 0, 1.45 * esc * (1 - enCorte * 0.55), (XS[i + 1] - XS[i]).toFixed(2), 1);
    cota(base(0), base(ANCHO), 0, 2.5 * esc * (1 - enCorte * 0.5), ANCHO.toFixed(2), 1);
    if (lateral && planta > 0.01) for (let i = 0; i < 3; i++) cota(proy([0, YS[i], 0]), proy([0, YS[i + 1], 0]), -1.45 * esc, 0, ['4.50', '1.00', '2.50'][i], planta, 'izq');
    if (enCorte > 0.01) ([[0, '+0.00'], [ALTO, '+3.20']] as [number, string][]).forEach((n) => {
      const q = proy([ANCHO + 1.2, YC, n[0]]);
      c.setLineDash([]); c.lineWidth = 1; c.strokeStyle = `rgba(${C.azul},${(0.7 * enCorte).toFixed(3)})`;
      c.beginPath(); c.moveTo(q[0] - 14, q[1]); c.lineTo(q[0] + 40, q[1]); c.moveTo(q[0], q[1]); c.lineTo(q[0] - 5, q[1] - 7); c.lineTo(q[0] + 5, q[1] - 7); c.closePath(); c.stroke();
      // en una pantalla angosta el rótulo del nivel no se sale: se corre a la izquierda lo que haga falta
      const borde = innerWidth - lienzo.getBoundingClientRect().left - 6;
      texto(n[1], Math.min(q[0] + 10, borde - c.measureText(n[1]).width), q[1] - 6, 0.9 * enCorte, C.claro, 'left');
    });
    const kx = suave(0.2, 0.6, sp);
    if (kx > 0.01) [-1.1, ANCHO + 1.1].forEach((x) => {
      const q = proy([x, YC, 0]), f = proy([x, YC + 0.8, 0]);
      c.setLineDash([]); c.lineWidth = 1.5; c.strokeStyle = `rgba(${C.rojo},${kx.toFixed(3)})`;
      const dx = f[0] - q[0], dy = f[1] - q[1], L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L;
      c.beginPath(); c.moveTo(q[0], q[1]); c.lineTo(f[0], f[1]); c.moveTo(f[0] - ux * 7 - uy * 4, f[1] - uy * 7 + ux * 4); c.lineTo(f[0], f[1]); c.lineTo(f[0] - ux * 7 + uy * 4, f[1] - uy * 7 - ux * 4); c.stroke();
      texto('A', q[0] + (x < 0 ? -11 : 11), q[1] + 4, kx, C.rojo);
    });
    // los ambientes (enlaces de verdad) siguen al plano
    const oa = suave(0.28, 0.5, sp).toFixed(2);
    items.forEach((el) => {
      // el ancla es el punto de la planta donde está el rótulo (los del fondo van arriba, lejos de las puertas)
      const r = cajaDe(el.dataset.amb!), pasillo = el.dataset.amb === 'inicio';
      const mx = pasillo ? 4.05 : (r[0] + r[2]) / 2, my = el.dataset.fila === 'fondo' ? r[3] - 0.7 : (r[1] + r[3]) / 2;
      const a = proy([mx, my, 0]), b = enPlanta(mx, my);
      const tr = `translate(${(a[0] - b[0]).toFixed(1)}px,${(a[1] - b[1]).toFixed(1)}px)`;
      if (el.dataset.t !== tr) { el.dataset.t = tr; el.style.transform = tr; }
      if (el.dataset.o !== oa) { el.dataset.o = oa; el.style.setProperty('--o', oa); el.style.pointerEvents = +oa > 0.5 ? '' : 'none'; el.style.visibility = +oa > 0.02 ? '' : 'hidden'; }
    });
  }

  function cuadro(t: number) {
    cuadroId = requestAnimationFrame(cuadro);
    if (!visible || document.hidden) return;
    if (movil && (par ^= 1)) return;                       // el celular dibuja a medio ritmo
    if (!t0) t0 = t;
    let obj = 0;
    const alto = innerHeight;
    if (fijada && portada && escena) {
      const tramo = portada.offsetHeight - escena.offsetHeight;
      obj = tramo > 0 ? (scrollY - portada.offsetTop) / tramo : 0;
    } else {
      const r = caja.getBoundingClientRect();
      obj = (alto * 0.8 - (r.top + r.height / 2)) / (alto * 0.62);
    }
    obj = Math.max(0, Math.min(1, obj));
    p += (obj - p) * (movil ? 0.22 : 0.12); if (Math.abs(obj - p) < 0.0004) p = obj;
    const nx = px < 0 ? 0 : px / innerWidth - 0.5, ny = py < 0 ? 0 : py / alto - 0.5;
    pxS += (nx - pxS) * 0.06; pyS += (ny - pyS) * 0.06;
    const quieto = 1 - p, respiro = Math.sin((t - t0) / 1900) * 0.5 + 0.5, entra = Math.min(1, (t - t0) / 1400);
    phi = 90 * Math.pow(1 - Math.min(1, p / 0.88), 1.55) - quieto * entra * (1.6 + 2.6 * respiro + Math.max(0, pyS + 0.5) * 5);
    const pg = Math.min(1, p / 0.78);
    theta = -36 * Math.sin(Math.PI * Math.pow(pg, 0.9)) + quieto * entra * pxS * 8 + pxS * 4 * Math.sin(Math.PI * pg) * (1 - quieto);
    phi = Math.max(0, Math.min(90, phi));
    const i = p < 0.08 ? 0 : p < 0.86 ? 1 : 2;
    if (i !== ultima) { ultima = i; if (rotulo) rotulo.textContent = vistas[i]; }
    sobreA += ((sobre ? 0.92 : 0) - sobreA) * 0.18;
    dibujar();
  }

  const alPuntero = (e: PointerEvent) => { px = e.clientX; py = e.clientY; };
  const senalar = (e: Event) => {
    const el = (e.target as Element | null)?.closest?.('a[href]');
    const href = el?.getAttribute('href');
    const it = href ? items.find((x) => x.querySelector('a')?.getAttribute('href') === href) : undefined;
    sobre = it ? it.dataset.amb! : null;
  };
  const obs = new IntersectionObserver((es) => { visible = es[0].isIntersecting; }, { rootMargin: '10% 0px' });
  obs.observe(figura);
  const redimension = new ResizeObserver(() => { medir(); });
  redimension.observe(caja);
  addEventListener('pointermove', alPuntero, { passive: true });
  document.addEventListener('pointerover', senalar, { passive: true });
  document.addEventListener('focusin', senalar);
  medir();
  cuadroId = requestAnimationFrame((t) => { cuadro(t); if (vivo) figura.dataset.vivo = ''; });

  return () => {
    vivo = false;
    cancelAnimationFrame(cuadroId); obs.disconnect(); redimension.disconnect();
    removeEventListener('pointermove', alPuntero);
    document.removeEventListener('pointerover', senalar);
    document.removeEventListener('focusin', senalar);
    delete figura.dataset.vivo;
    items.forEach((el) => { el.style.transform = ''; el.style.removeProperty('--o'); el.style.pointerEvents = ''; el.style.visibility = ''; });
  };
}
