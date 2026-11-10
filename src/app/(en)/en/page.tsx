import { Inicio } from '@/components/paginas/Inicio';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('inicio', 'en');

export default function Page() {
  return <Inicio idioma="en" />;
}
