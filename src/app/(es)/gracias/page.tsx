import { Gracias } from '@/components/paginas/Gracias';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('gracias', 'es');

export default function Page() {
  return <Gracias idioma="es" />;
}
