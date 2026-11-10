import type { ReactNode } from 'react';
import { Marco } from '@/components/vion/Marco';
import { interfazDe } from '@/content';
import { metadatosBase, viewport as vista } from '@/seo/metadatos';
import { claseFuentes } from '../fuentes';
import '../globals.css';
import '../sistema.css';

// Layout raíz del sitio en español: su propio <html lang>. No hay middleware que redirija por idioma.

const ui = interfazDe('es');
export const metadata = metadatosBase('es');
export const viewport = vista;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang={ui.lang} className={claseFuentes} suppressHydrationWarning>
      <body className="tono-raven">
        <Marco idioma="es">{children}</Marco>
      </body>
    </html>
  );
}
