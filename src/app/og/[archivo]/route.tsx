// Las imágenes Open Graph (1200 × 630), una por página y por idioma: /og/es-inicio.png, /og/en-inicio.png…
// Se dibujan al construir (estáticas) con next/og y Geist (OFL, en src/seo/fuentes). Diseño sobrio con la marca
// (DESIGN.md): negro cuervo, titular en mayúsculas a la izquierda y el rojo amapola solo como acento.
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { IDIOMAS, PAGINAS, pagina, sitio, type IdPagina, type Idioma } from '@/content';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return IDIOMAS.flatMap((idioma) => PAGINAS.map((id) => ({ archivo: `${idioma}-${id}.png` })));
}

const archivo = (ruta: string) => readFile(path.join(process.cwd(), ruta));
const limpiar = (s: string) => s.toLowerCase().replace(/[^\p{L}\p{N}/]/gu, '');

export async function GET(_: Request, { params }: { params: Promise<{ archivo: string }> }) {
  const [idioma, id] = (await params).archivo.replace(/\.png$/, '').split('-') as [Idioma, IdPagina];
  const p = pagina(id, idioma);
  const [negrita, normal, simbolo] = await Promise.all([
    archivo('src/seo/fuentes/Geist-Bold.ttf'),
    archivo('src/seo/fuentes/Geist-Regular.ttf'),
    archivo(`public${sitio.simbolo.src}`),
  ]);
  const c = sitio.colores;
  const acento = new Set((p.og.acento ?? '').split(/\s+/).filter(Boolean).map(limpiar));
  const palabras = p.og.titulo.split(/\s+/);
  const grande = p.og.titulo.length > 26 ? 76 : 92;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: c.negro, color: c.claro, padding: '64px 72px 0', fontFamily: 'Geist' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img src={`data:image/png;base64,${simbolo.toString('base64')}`} width={56} height={54} />
            <div style={{ marginLeft: 18, fontSize: 40, fontWeight: 700, letterSpacing: 6 }}>VION</div>
          </div>
          <div style={{ fontSize: 24, letterSpacing: 3, textTransform: 'uppercase', color: c.azul }}>
            {idioma === 'es' ? 'Estudio de IA · Costa Rica' : 'AI studio · Costa Rica'}
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: grande, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2, textTransform: 'uppercase', maxWidth: 1000 }}>
          {palabras.map((palabra, i) => (
            <span key={i} style={{ marginRight: 22, color: acento.has(limpiar(palabra)) ? c.rojo : c.claro }}>
              {palabra}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 26, color: c.claro, marginBottom: 28 }}>vion-studio.com</div>
          <div style={{ display: 'flex', height: 14, width: '100%', backgroundImage: `linear-gradient(90deg, ${c.rojo}, ${c.naranja})` }} />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Geist', data: negrita, weight: 700, style: 'normal' },
        { name: 'Geist', data: normal, weight: 400, style: 'normal' },
      ],
    },
  );
}
