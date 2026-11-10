import { PaginaContenido } from '@/components/sitio/PaginaContenido';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('privacidad', 'en');

export default function Page() {
  return <PaginaContenido id="privacidad" idioma="en" />;
}
