import { PaginaContenido } from '@/components/sitio/PaginaContenido';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('autocad', 'es');

export default function Page() {
  return <PaginaContenido id="autocad" idioma="es" />;
}
