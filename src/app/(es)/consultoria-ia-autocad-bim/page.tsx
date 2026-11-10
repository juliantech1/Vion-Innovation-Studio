import { PaginaContenido } from '@/components/sitio/PaginaContenido';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('consultoria', 'es');

export default function Page() {
  return <PaginaContenido id="consultoria" idioma="es" />;
}
