import { Privacidad } from '@/components/paginas/Privacidad';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('privacidad', 'en');

export default function Page() {
  return <Privacidad idioma="en" />;
}
