import { PaginaContenido } from '@/components/sitio/PaginaContenido';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('nosotros', 'en');

export default function Page() {
  return <PaginaContenido id="nosotros" idioma="en" />;
}
