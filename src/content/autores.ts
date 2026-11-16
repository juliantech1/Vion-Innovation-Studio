// Quién firma los artículos del blog (decisión de Julian del 2026-11-16): por defecto, Vion (la organización). Solo los
// artículos más profundos, con más oficio, los firma Julian Alvarez como persona, con su ficha en «Nosotros». Cada
// artículo dice el suyo en `autor`; lo nuevo sigue la regla: `vion`, salvo que Julian decida otra cosa.
// La biografía corta dice solo lo que Julian confirmó (fundador; ingeniería y automatización con IA; AutoCAD y BIM). La
// formación y la experiencia son un casillero (PENDIENTES-JULIAN.md).
import type { Idioma } from './tipos';

export type IdAutor = 'vion' | 'julian';

/** El ancla de la ficha de una persona en «Nosotros»: su nombre sin tildes, en minúsculas y con guiones. */
export const anclaPersona = (nombre: string) =>
  nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');

export interface Persona {
  nombre: string;
  /** El ancla de su ficha en «Nosotros» (/nosotros#…, /en/about#…). */
  ancla: string;
  cargo: Record<Idioma, string>;
  bio: Record<Idioma, string>;
  /** Para el JSON-LD (knowsAbout). */
  sabe: Record<Idioma, string[]>;
}

export const JULIAN: Persona = {
  nombre: 'Julian Alvarez',
  ancla: anclaPersona('Julian Alvarez'),
  cargo: { es: 'Fundador y CEO', en: 'Founder and CEO' },
  bio: {
    es: 'Fundador y CEO de Vion. Trabaja en ingeniería y automatización con IA: sistemas y agentes de IA, desarrollo de software y la automatización de AutoCAD y BIM para firmas de ingeniería y arquitectura.',
    en: 'Founder and CEO of Vion, focused on engineering and AI automation: AI systems and agents, software development, and AutoCAD and BIM automation for engineering and architecture firms.',
  },
  sabe: {
    es: ['Automatización con IA', 'Agentes de IA', 'Desarrollo de software', 'AutoCAD', 'BIM'],
    en: ['AI automation', 'AI agents', 'Software development', 'AutoCAD', 'BIM'],
  },
};

/** La persona que firma, o nada si firma Vion. */
export const personaAutora = (autor: IdAutor): Persona | undefined => (autor === 'julian' ? JULIAN : undefined);
