import { cursos } from '@/components/paginas/rutasAprender';

const r = cursos('es');
export const dynamicParams = false;
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
