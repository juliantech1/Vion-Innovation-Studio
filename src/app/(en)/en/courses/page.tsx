import { Cursos } from '@/components/paginas/Cursos';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('cursos', 'en');

export default function Page() {
  return <Cursos idioma="en" />;
}
