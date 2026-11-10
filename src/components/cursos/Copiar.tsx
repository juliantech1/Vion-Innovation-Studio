'use client';

import { useState } from 'react';

/** El botón «Copiar» de un bloque: copia el texto exacto y lo confirma por 2 s (también para lectores de pantalla). */
export function Copiar({ texto, rotulo, hecho, de }: { texto: string; rotulo: string; hecho: string; de: string }) {
  const [listo, setListo] = useState(false);
  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto);
    } catch {
      // Sin permiso de portapapeles (http, navegador viejo): se selecciona el texto para copiarlo a mano.
      const pre = document.activeElement?.closest('.bloque')?.querySelector('code');
      if (pre) {
        const r = document.createRange();
        r.selectNodeContents(pre);
        const sel = getSelection();
        sel?.removeAllRanges();
        sel?.addRange(r);
      }
      return;
    }
    setListo(true);
    setTimeout(() => setListo(false), 2000);
  }
  return (
    <button type="button" className="bloque__copiar" onClick={copiar} aria-label={`${rotulo}: ${de}`} data-listo={listo || undefined}>
      <span aria-hidden="true">{listo ? hecho : rotulo}</span>
      <span className="solo-lectores" role="status">{listo ? hecho : ''}</span>
    </button>
  );
}
