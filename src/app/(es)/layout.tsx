import { Geist, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import { Cabecera } from '@/components/sitio/Cabecera';
import { Pie } from '@/components/sitio/Pie';
import { interfazDe } from '@/content';
import { metadatosBase, viewport as vista } from '@/seo/metadatos';
import '../globals.css';
import '../base.css';

// Layout raíz del sitio en español: su propio <html lang>. No hay middleware que redirija por idioma.
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'], display: 'swap', preload: false });

const ui = interfazDe('es');
export const metadata = metadatosBase('es');
export const viewport = vista;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang={ui.lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a className="saltar" href="#contenido">
          {ui.saltar}
        </a>
        <Cabecera idioma="es" />
        <main id="contenido" tabIndex={-1}>
          {children}
        </main>
        <Pie idioma="es" />
      </body>
    </html>
  );
}
