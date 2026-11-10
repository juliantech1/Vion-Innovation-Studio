import { PaginaContenido } from '@/components/sitio/PaginaContenido';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('gracias', 'es');

export default function Page() {
  return <PaginaContenido id="gracias" idioma="es" />;
}
