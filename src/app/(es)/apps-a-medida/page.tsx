import { Apps } from '@/components/paginas/Apps';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('apps', 'es');

export default function Page() {
  return <Apps idioma="es" />;
}
