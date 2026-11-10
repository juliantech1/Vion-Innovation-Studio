import { Apps } from '@/components/paginas/Apps';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('apps', 'en');

export default function Page() {
  return <Apps idioma="en" />;
}
