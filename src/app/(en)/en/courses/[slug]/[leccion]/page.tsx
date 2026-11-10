import { lecciones } from '@/components/paginas/rutasAprender';

const r = lecciones('en');
export const dynamicParams = false;
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
