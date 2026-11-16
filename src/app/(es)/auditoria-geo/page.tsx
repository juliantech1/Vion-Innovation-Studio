import { Geo } from '@/components/paginas/Geo';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('geo', 'es');

export default function Page() {
  return <Geo idioma="es" />;
}
