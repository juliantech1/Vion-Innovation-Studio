import { PaginaContenido } from '@/components/sitio/PaginaContenido';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('contacto', 'es');

export default function Page() {
  return <PaginaContenido id="contacto" idioma="es" />;
}
