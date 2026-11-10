import type { Pagina, Seccion } from '@/content';

/** La sección n de una página, con su tipo comprobado: si el contenido cambia de forma, el build falla acá y no en silencio. */
export function seccion<T extends Seccion['tipo']>(p: Pagina, n: number, tipo: T): Extract<Seccion, { tipo: T }> {
  const s = p.secciones[n];
  if (!s || s.tipo !== tipo) throw new Error(`${p.id}: la sección ${n} no es de tipo «${tipo}»`);
  return s as Extract<Seccion, { tipo: T }>;
}
