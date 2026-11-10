import { Blog } from '@/components/paginas/Blog';
import { metadatosDe } from '@/seo/metadatos';

export const generateMetadata = () => metadatosDe('blog', 'en');

export default function Page() {
  return <Blog idioma="en" />;
}
