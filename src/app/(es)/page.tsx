import { PaginaContenido } from '@/components/sitio/PaginaContenido';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('inicio', 'es');

export default function Page() {
  return <PaginaContenido id="inicio" idioma="es" />;
}
