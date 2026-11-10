// /llms.txt: un resumen breve del sitio para modelos de lenguaje, armado desde la capa de contenido.
import { IDIOMAS, indexables, pagina, sitio, urlAbsoluta } from '@/content';

export const dynamic = 'force-static';

export function GET() {
  const lineas = [
    '# Vion (Vion Studio)',
    '',
    `> ${pagina('inicio', 'en').bajada}`,
    '',
    `Vion is an AI studio based in Costa Rica. Contact: ${sitio.correo} · WhatsApp ${sitio.whatsapp} · Instagram ${sitio.instagramUsuario}.`,
    'The site is published in Spanish (es-CR, at the root) and in English (under /en). Prices are indicative and are confirmed after an assessment.',
    '',
  ];
  for (const idioma of IDIOMAS) {
    lineas.push(idioma === 'es' ? '## Páginas en español' : '## Pages in English', '');
    for (const p of indexables(idioma)) lineas.push(`- [${p.titulo}](${urlAbsoluta(p.id, idioma)}): ${p.descripcion}`);
    lineas.push('');
  }
  return new Response(lineas.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
