import { Gracias } from '@/components/paginas/Gracias';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('gracias', 'en');

export default function Page() {
  return <Gracias idioma="en" />;
}
