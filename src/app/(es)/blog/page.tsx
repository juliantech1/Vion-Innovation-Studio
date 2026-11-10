import { Blog } from '@/components/paginas/Blog';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('blog', 'es');

export default function Page() {
  return <Blog idioma="es" />;
}
