import { PaginaContenido } from '@/components/sitio/PaginaContenido';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('apps', 'en');

export default function Page() {
  return <PaginaContenido id="apps" idioma="en" />;
}
