import { Casos } from '@/components/paginas/Casos';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('casos', 'en');

export default function Page() {
  return <Casos idioma="en" />;
}
