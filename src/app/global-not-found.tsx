// La 404 de todo el sitio. Cada idioma tiene su propio layout raíz (<html lang>), así que no hay un not-found.tsx
// común: Next lo resuelve con `global-not-found` (experimental.globalNotFound en next.config.ts). Es estática y
// responde 404 a cualquier dirección que no exista, en español (la raíz) y con la misma ayuda en inglés (lang="en").
// Con un catch-all por idioma y notFound(), Next 16 devuelve un HTML de error vacío (sin lang ni H1) y dibuja la
// página recién con JavaScript; por eso no se usa.
import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import { Cabecera } from '@/components/sitio/Cabecera';
import { NoEncontrada } from '@/components/sitio/NoEncontrada';
import { Pie } from '@/components/sitio/Pie';
import { interfazDe } from '@/content';
import { metadatosNoEncontrada, viewport as vista } from '@/seo/metadatos';
import './globals.css';
import './base.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'], display: 'swap', preload: false });
const ui = interfazDe('es');

export const metadata: Metadata = metadatosNoEncontrada();
export const viewport = vista;

export default function GlobalNotFound() {
  return (
    <html lang={ui.lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a className="saltar" href="#contenido">
          {ui.saltar}
        </a>
        <Cabecera idioma="es" />
        <main id="contenido" tabIndex={-1}>
          <NoEncontrada />
        </main>
        <Pie idioma="es" />
      </body>
    </html>
  );
}
