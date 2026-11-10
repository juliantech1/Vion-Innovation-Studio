// La 404 de todo el sitio. Cada idioma tiene su propio layout raíz (<html lang>), así que no hay un not-found.tsx
// común: Next lo resuelve con `global-not-found` (experimental.globalNotFound en next.config.ts). Es estática y
// responde 404 a cualquier dirección que no exista, en español (la raíz) y con la misma ayuda en inglés (lang="en").
// Con un catch-all por idioma y notFound(), Next 16 devuelve un HTML de error vacío (sin lang ni H1) y dibuja la
// página recién con JavaScript; por eso no se usa.
import type { Metadata } from 'next';
import { NoEncontrada } from '@/components/sitio/NoEncontrada';
import { Marco } from '@/components/vion/Marco';
import { interfazDe } from '@/content';
import { metadatosNoEncontrada, viewport as vista } from '@/seo/metadatos';
import { claseFuentes } from './fuentes';
import './globals.css';
import './sistema.css';

const ui = interfazDe('es');

export const metadata: Metadata = metadatosNoEncontrada();
export const viewport = vista;

export default function GlobalNotFound() {
  return (
    <html lang={ui.lang} className={claseFuentes} suppressHydrationWarning>
      <body className="tono-raven">
        <Marco idioma="es">
          <NoEncontrada />
        </Marco>
      </body>
    </html>
  );
}
