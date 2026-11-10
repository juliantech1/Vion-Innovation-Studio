import { articulos } from '@/components/paginas/rutasAprender';

const r = articulos('es');
export const dynamicParams = false;
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
