import type { Idioma } from '@/content';

/** La fecha como la lee una persona (10 de noviembre de 2026 · November 10, 2026), sin depender de la zona horaria. */
export const fechaLarga = (iso: string, idioma: Idioma) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(idioma === 'es' ? 'es-CR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
