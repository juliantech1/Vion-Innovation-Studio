'use client';

import { usePathname } from 'next/navigation';
import { paginaDeRuta } from '@/content/rutas';

/** La celda «Lámina n/07» del cajetín: el número y el nombre de la página en la que está el visitante. */
export function Lamina({ nombres, orden }: { nombres: Record<string, string>; orden: string[] }) {
  const p = paginaDeRuta(usePathname() || '/');
  const i = p ? orden.indexOf(p.id) : -1;
  const total = String(orden.length).padStart(2, '0');
  return (
    <p className="celda__v celda__v--mono">
      {i < 0 ? '00' : String(i + 1).padStart(2, '0')}/{total}
      <small>{i < 0 ? (p ? nombres[p.id] ?? '' : '404') : nombres[orden[i]]}</small>
    </p>
  );
}
