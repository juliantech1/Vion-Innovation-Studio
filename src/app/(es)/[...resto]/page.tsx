import { notFound } from 'next/navigation';
import { metadatosNoEncontrada } from '@/seo/metadatos';

// Cualquier dirección que no sea una página: responde 404 con la página «no encontrada» de este idioma
// (cada idioma tiene su layout raíz, así que no hay un not-found global).
export const generateMetadata = () => metadatosNoEncontrada('es');

export default function Page() {
  notFound();
}
