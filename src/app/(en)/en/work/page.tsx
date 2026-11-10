import { PaginaContenido } from '@/components/sitio/PaginaContenido';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('casos', 'en');

export default function Page() {
  return <PaginaContenido id="casos" idioma="en" />;
}
