import { Inicio } from '@/components/paginas/Inicio';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('inicio', 'es');

export default function Page() {
  return <Inicio idioma="es" />;
}
