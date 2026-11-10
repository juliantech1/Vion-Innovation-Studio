import { Autocad } from '@/components/paginas/Autocad';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('autocad', 'es');

export default function Page() {
  return <Autocad idioma="es" />;
}
