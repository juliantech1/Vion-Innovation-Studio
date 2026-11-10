import { PaginaContenido } from '@/components/sitio/PaginaContenido';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('gracias', 'en');

export default function Page() {
  return <PaginaContenido id="gracias" idioma="en" />;
}
