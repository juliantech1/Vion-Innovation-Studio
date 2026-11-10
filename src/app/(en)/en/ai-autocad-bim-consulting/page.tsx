import { Consultoria } from '@/components/paginas/Consultoria';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('consultoria', 'en');

export default function Page() {
  return <Consultoria idioma="en" />;
}
