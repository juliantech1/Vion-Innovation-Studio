#!/usr/bin/env python3
"""Lleva al sitio lo que los productores de video dejaron listo en ~/hefesto/cursos-media/<curso>/manifiesto.json.

    python3 scripts/medios-cursos.py [--origen ~/hefesto/cursos-media]

- Las imágenes fijas listas (captura, imagen, diagrama) se pasan a WebP de 1600 px de ancho como mucho y menos de
  300 kB, en public/cursos/<id>/L<n>-<nn>.webp, y se anotan en src/content/cursos/medios.json con sus medidas.
- Los videos listos NO se copian (el repositorio es público y pesan): se anotan como `"producido": true` para que la
  página diga cuántos están listos. Cuando estén alojados, se les pone `video` (o `youtube`/`vimeo`), `poster` y
  `subtitulos` a mano o con otro paso, y la CSP los toma sola.
Las entradas que ya tienen una URL de video no se tocan. Necesita Pillow (pip install pillow==12.1.1)."""
import json, pathlib, sys
from PIL import Image

RAIZ = pathlib.Path(__file__).resolve().parent.parent
ORIGEN = pathlib.Path(sys.argv[sys.argv.index('--origen') + 1] if '--origen' in sys.argv else pathlib.Path.home() / 'hefesto/cursos-media').expanduser()
CARPETAS = {'A0': 'claude-basico', 'A2': 'agentic-os', 'A3': 'skills', 'B1': 'motion', 'B2': 'blender-3d', 'B3': 'personaje-3d',
            'C1': 'claude-autocad', 'C2': 'cuantificacion', 'D1': 'seo-agentes', 'D2': 'sitio-claude-code'}
FIJOS = {'captura', 'imagen', 'diagrama'}
TOPE = 300_000

medios_p = RAIZ / 'src/content/cursos/medios.json'
medios = json.loads(medios_p.read_text())

for carpeta in sorted(ORIGEN.iterdir()):
    m = carpeta / 'manifiesto.json'
    cid = CARPETAS.get(carpeta.name[:2])
    if not m.exists() or not cid:
        continue
    man = json.loads(m.read_text())
    curso = medios.setdefault(cid, {})
    for x in man.get('laminas', []):
        n, archivo, tipo = x['lamina'], x.get('archivo') or '', x.get('tipo', '')
        if x.get('estado') != 'listo' or not archivo:
            continue
        src = carpeta / archivo
        if not src.exists() or src.stat().st_size == 0:
            print(f'  {cid} {n}: «{archivo}» marcado listo pero no está (o pesa 0)')
            continue
        e = curso.setdefault(n, {})
        if tipo in FIJOS or src.suffix.lower() in ('.png', '.jpg', '.jpeg', '.webp'):
            dest = RAIZ / f'public/cursos/{cid}/{pathlib.Path(archivo).stem.rsplit("-", 1)[0]}.webp'
            dest.parent.mkdir(parents=True, exist_ok=True)
            im = Image.open(src).convert('RGB')
            if im.width > 1600:
                im = im.resize((1600, round(im.height * 1600 / im.width)), Image.LANCZOS)
            for q in (82, 75, 68, 60, 52):
                im.save(dest, 'WEBP', quality=q, method=6)
                if dest.stat().st_size < TOPE:
                    break
            if dest.stat().st_size >= TOPE:
                print(f'  {cid} {n}: no baja de 300 kB; se deja afuera'); dest.unlink(); curso.pop(n, None); continue
            e.update({'imagen': f'/cursos/{cid}/{dest.name}', 'ancho': im.width, 'alto': im.height})
            print(f'  {cid} {n}: imagen {dest.stat().st_size // 1000} kB')
        elif not (e.get('video') or e.get('youtube') or e.get('vimeo')):
            e['producido'] = True
            print(f'  {cid} {n}: video producido (sin alojar)')

medios_p.write_text(json.dumps(medios, ensure_ascii=False, indent=2) + '\n')
