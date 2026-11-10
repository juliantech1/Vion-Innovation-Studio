import { Cursos } from '@/components/paginas/Cursos';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('cursos', 'es');

export default function Page() {
  return <Cursos idioma="es" />;
}
