import { Nosotros } from '@/components/paginas/Nosotros';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('nosotros', 'es');

export default function Page() {
  return <Nosotros idioma="es" />;
}
