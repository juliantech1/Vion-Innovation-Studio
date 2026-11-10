import { Contacto } from '@/components/paginas/Contacto';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('contacto', 'en');

export default function Page() {
  return <Contacto idioma="en" />;
}
