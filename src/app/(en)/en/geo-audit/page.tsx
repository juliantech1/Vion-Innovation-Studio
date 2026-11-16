import { Geo } from '@/components/paginas/Geo';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('geo', 'en');

export default function Page() {
  return <Geo idioma="en" />;
}
