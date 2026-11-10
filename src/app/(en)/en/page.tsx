import { PaginaContenido } from '@/components/sitio/PaginaContenido';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('inicio', 'en');

export default function Page() {
  return <PaginaContenido id="inicio" idioma="en" />;
}
