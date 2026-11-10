import { publicarRangos } from './sitio';
import type { Paso, Pregunta } from './tipos';

/** Un servicio del catálogo real de Orión (settings.orion.catalogo de Ultron, cargado por Julian). */
export interface Servicio {
  nombre: string;
  plazo: string;
  para: string;
  que: string;
  entregables: string[];
  /** Orientativo: se confirma después del diagnóstico. */
  rango: string;
  precio: { min: number; max: number; moneda: 'USD'; porMes?: boolean };
}
export type Catalogo = Record<'diagnostico' | 'piloto' | 'soporte' | 'apps', Servicio>;

/** Los montos del catálogo (iguales en los dos idiomas; el texto del rango lo pone cada idioma). */
export const PRECIOS = {
  diagnostico: { min: 600, max: 1500, moneda: 'USD' },
  piloto: { min: 2000, max: 5000, moneda: 'USD' },
  soporte: { min: 300, max: 900, moneda: 'USD', porMes: true },
  apps: { min: 3000, max: 15000, moneda: 'USD' },
} as const;

/** Un servicio como paso de un proceso (el rango solo si se publican). */
export const pasoDe = (s: Servicio, conEntregables = false): Paso => ({
  titulo: s.nombre,
  texto: s.que,
  plazo: s.plazo,
  rango: publicarRangos ? s.rango : undefined,
  entregables: conEntregables ? s.entregables : undefined,
});

/** El precio para los datos estructurados (solo si se publican los rangos). */
export const precioDe = (s: Servicio) => (publicarRangos ? s.precio : undefined);

/** Una pregunta que habla de precios: sale solo si se publican los rangos. */
export type PreguntaConPrecio = Pregunta & { precio?: true };
export const visibles = (ps: PreguntaConPrecio[]): Pregunta[] =>
  ps.filter((q) => publicarRangos || !q.precio).map(({ p, r }) => ({ p, r }));
