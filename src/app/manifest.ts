import type { MetadataRoute } from 'next';
import { pagina, sitio } from '@/content';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vion Studio',
    short_name: sitio.nombre,
    description: pagina('inicio', 'es').descripcion,
    lang: 'es-CR',
    start_url: '/',
    display: 'browser',
    background_color: sitio.colores.negro,
    theme_color: sitio.colores.negro,
    icons: [
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/icono-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
