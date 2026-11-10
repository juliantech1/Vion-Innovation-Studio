import { PaginaContenido } from '@/components/sitio/PaginaContenido';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('apps', 'es');

export default function Page() {
  return <PaginaContenido id="apps" idioma="es" />;
}
