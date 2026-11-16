// /llms-full.txt: el texto completo de las páginas que se indexan y de los artículos del blog, para que un modelo de
// lenguaje lo lea de una vez sin recorrer el sitio (GEO, pedido de Julian del 2026-11-16). Sale de la misma capa de
// contenido que las páginas: nada que no esté publicado. Los casilleros {{…}} no van (son notas para Julian).
// Español de Costa Rica primero (el sitio principal), el inglés aparte al final.
import { ARTICULOS, CURSOS, cursoIndexable, indexables, personaAutora, sitio, urlAbsoluta, urlArticulo, urlCurso, type Idioma, type Seccion } from '@/content';

export const dynamic = 'force-static';

/** Texto plano: sin marcado de enlaces ni negritas, y sin casilleros. */
const plano = (s: string) =>
  s
    .replace(/\{\{[^}]*\}\}/g, '')
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/[ \t]+/g, ' ')
    .trim();

function seccionEnTexto(s: Seccion): string[] {
  const l: string[] = [`### ${s.titulo}`, ''];
  if (s.intro) l.push(plano(s.intro), '');
  switch (s.tipo) {
    case 'texto':
      for (const x of [...s.parrafos, ...(s.lista ?? []).map((y) => `- ${y}`), ...(s.cierre ?? [])]) if (plano(x)) l.push(plano(x));
      break;
    case 'lista':
      for (const x of s.items) l.push(`- ${x.titulo}: ${plano(x.texto)}`);
      break;
    case 'pasos':
      s.pasos.forEach((x, i) => l.push(`${i + 1}. ${x.titulo}${x.plazo ? ` (${x.plazo}${x.rango ? `, ${x.rango}` : ''})` : ''}: ${plano(x.texto)}`));
      if (s.nota && plano(s.nota)) l.push('', plano(s.nota));
      break;
    case 'ficha':
      for (const x of s.filas) if (plano(x.valor)) l.push(`- ${x.termino}: ${plano(x.valor)}`);
      if (s.nota && plano(s.nota)) l.push('', plano(s.nota));
      break;
    case 'rangos':
      for (const x of s.filas) l.push(`- ${x.nombre}: ${x.rango} (${x.detalle})`);
      if (s.nota && plano(s.nota)) l.push('', plano(s.nota));
      break;
    case 'preguntas':
      for (const q of s.preguntas) l.push(`- ${q.p} ${q.r}`);
      break;
    case 'personas':
      for (const x of s.personas) l.push(`- ${x.nombre} (${x.cargo})${plano(x.bio) ? `: ${plano(x.bio)}` : ''}`);
      break;
    case 'proyectos':
      for (const x of s.proyectos) l.push(`- ${x.nombre}: ${plano(x.linea)}${plano(x.que) ? ` ${plano(x.que)}` : ''}`);
      break;
    default:
      return [];
  }
  l.push('');
  return l;
}

function idiomaEnTexto(idioma: Idioma): string[] {
  const es = idioma === 'es';
  const l: string[] = [];
  for (const p of indexables(idioma)) {
    if (p.id === 'contacto') continue;
    l.push(`## ${p.titulo}`, '', `URL: ${urlAbsoluta(p.id, idioma)}`);
    if (p.actualizado) l.push(`${es ? 'Actualizado' : 'Updated'}: ${p.actualizado}`);
    l.push('', plano(p.bajada), '');
    if (p.resumen) {
      l.push(`### ${p.resumen.pregunta}`, '', plano(p.resumen.texto), '');
      for (const f of p.resumen.ficha) l.push(`- ${f.termino}: ${plano(f.valor)}`);
      l.push('');
    }
    for (const s of p.secciones) l.push(...seccionEnTexto(s));
  }
  l.push(es ? '## Blog' : '## Blog', '');
  for (const a of ARTICULOS) {
    const x = a[idioma];
    const autor = personaAutora(a.autor)?.nombre ?? sitio.nombre;
    l.push(`### ${x.titulo}`, '', `URL: ${urlArticulo(x.slug, idioma)}`);
    l.push(`${es ? 'Autor' : 'Author'}: ${autor} · ${es ? 'Publicado' : 'Published'}: ${a.publicado}${a.actualizado ? ` · ${es ? 'Actualizado' : 'Updated'}: ${a.actualizado}` : ''}`, '');
    l.push(plano(x.bajada), '', x.cuerpo.trim(), '');
    if (x.fuentes.length) {
      l.push(es ? 'Fuentes:' : 'Sources:');
      for (const f of x.fuentes) l.push(`- ${f.titulo}: ${f.url}`);
      l.push('');
    }
  }
  const cursos = CURSOS.filter(cursoIndexable);
  if (cursos.length) {
    l.push(es ? '## Cursos gratis' : '## Free courses', '');
    for (const c of cursos) l.push(`- ${c[idioma].titulo} (${urlCurso(c[idioma].slug, idioma)}): ${c[idioma].descripcion}`);
    l.push('');
  }
  return l;
}

export function GET() {
  const lineas = [
    `# ${sitio.nombre} (${sitio.nombresAlternos.join(', ')}): texto completo`,
    '',
    `> Vion es un estudio de IA de Costa Rica. Contacto: ${sitio.correo} · WhatsApp ${sitio.whatsapp} · Instagram ${sitio.instagramUsuario}. Resumen corto y lista de páginas: ${sitio.url}/llms.txt`,
    '',
    ...idiomaEnTexto('es'),
    '# English version (/en)',
    '',
    `> Vion is an AI studio based in Costa Rica. Contact: ${sitio.correo} · WhatsApp ${sitio.whatsapp}.`,
    '',
    ...idiomaEnTexto('en'),
  ];
  return new Response(lineas.join('\n').replace(/\n{3,}/g, '\n\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
