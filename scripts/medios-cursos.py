#!/usr/bin/env python3
"""Lleva al sitio lo que los productores de video dejaron listo en ~/hefesto/cursos-media/<curso>/manifiesto.json.

    python3 scripts/medios-cursos.py [--origen ~/hefesto/cursos-media]

- Las imágenes fijas listas (captura, imagen, diagrama) se pasan a WebP de 1600 px de ancho como mucho y menos de
  300 kB, en public/cursos/<id>/L<n>-<nn>.webp, y se anotan en src/content/cursos/medios.json con sus medidas.
- Los videos listos NO se copian (el repositorio es público y pesan): se anotan como `"producido": true` para que la
  página diga cuántos están listos. Cuando estén alojados, se les pone `video` (o `youtube`/`vimeo`), `poster` y
  `subtitulos` a mano o con otro paso, y la CSP los toma sola.
Las entradas que ya tienen una URL de video no se tocan. Necesita Pillow (pip install pillow==12.1.1).

    python3 scripts/medios-cursos.py --subir A3 [--env ~/aldea/secretos/r2/r2.env]

- Con --subir, los videos listos de ese curso se suben a Cloudflare R2 (clave <id>/<archivo>; solo los que no están o
  cambiaron, por su MD5) con la API S3 firmada a mano (solo biblioteca estándar), y medios.json lleva su URL pública
  (R2_PUBLICO). Al lado de cada video, el productor deja <video>.poster.jpg (pasa a WebP en public/cursos/<id>/) y, si
  habla, <video>.vtt (se copia a public/: los subtítulos van del mismo origen que la página). Las claves se leen del
  archivo de --env y nunca se imprimen."""
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


def leer_env(p):
    d = {}
    for l in pathlib.Path(p).expanduser().read_text().splitlines():
        if '=' in l and not l.lstrip().startswith('#'):
            k, v = l.split('=', 1); d[k.strip()] = v.strip().strip('"').strip("'")
    return d


def r2(env, metodo, clave, cuerpo=b'', tipo=None):
    """Un pedido a R2 (S3) firmado con SigV4; devuelve (estado, cabeceras)."""
    import datetime, hashlib, hmac, urllib.parse, urllib.request
    host = f"{env['R2_ACCOUNT_ID']}.r2.cloudflarestorage.com"
    ruta = '/' + env['R2_BUCKET'] + '/' + urllib.parse.quote(clave)
    ahora = datetime.datetime.now(datetime.timezone.utc)
    amz, dia = ahora.strftime('%Y%m%dT%H%M%SZ'), ahora.strftime('%Y%m%d')
    h_cuerpo = hashlib.sha256(cuerpo).hexdigest()
    cab = {'host': host, 'x-amz-content-sha256': h_cuerpo, 'x-amz-date': amz}
    if tipo: cab['content-type'] = tipo
    firmadas = ';'.join(sorted(cab))
    canon = '\n'.join([metodo, ruta, '', ''.join(f'{k}:{cab[k]}\n' for k in sorted(cab)), firmadas, h_cuerpo])
    alcance = f'{dia}/auto/s3/aws4_request'
    texto = '\n'.join(['AWS4-HMAC-SHA256', amz, alcance, hashlib.sha256(canon.encode()).hexdigest()])
    k = ('AWS4' + env['R2_SECRET_ACCESS_KEY']).encode()
    for x in (dia, 'auto', 's3', 'aws4_request'):
        k = hmac.new(k, x.encode(), hashlib.sha256).digest()
    firma = hmac.new(k, texto.encode(), hashlib.sha256).hexdigest()
    cab['authorization'] = f"AWS4-HMAC-SHA256 Credential={env['R2_ACCESS_KEY_ID']}/{alcance}, SignedHeaders={firmadas}, Signature={firma}"
    pedido = urllib.request.Request(f'https://{host}{ruta}', data=cuerpo if metodo == 'PUT' else None, method=metodo,
                                    headers={k2: v for k2, v in cab.items() if k2 != 'host'})
    try:
        with urllib.request.urlopen(pedido, timeout=600) as r:
            return r.status, dict(r.headers)
    except urllib.error.HTTPError as e:
        return e.code, dict(e.headers)


if '--subir' in sys.argv:
    import hashlib, shutil
    codigo = sys.argv[sys.argv.index('--subir') + 1]
    env = leer_env(sys.argv[sys.argv.index('--env') + 1] if '--env' in sys.argv else '~/aldea/secretos/r2/r2.env')
    publico = env['R2_PUBLICO'].rstrip('/')
    carpeta = next(c for c in ORIGEN.iterdir() if c.name.startswith(codigo + '-') and (c / 'manifiesto.json').exists())
    cid = CARPETAS[codigo]
    curso = medios.setdefault(cid, {})
    man = json.loads((carpeta / 'manifiesto.json').read_text())
    for x in man.get('laminas', []):
        n, archivo = x['lamina'], x.get('archivo') or ''
        if x.get('estado') != 'listo' or not archivo.endswith('.mp4'):
            continue
        src = carpeta / archivo
        datos = src.read_bytes()
        clave = f'{cid}/{archivo}'
        estado, cab = r2(env, 'HEAD', clave)
        if not (estado == 200 and cab.get('ETag', cab.get('etag', '')).strip('"') == hashlib.md5(datos).hexdigest()):
            estado, _ = r2(env, 'PUT', clave, datos, 'video/mp4')
            if estado != 200:
                print(f'  {cid} {n}: no se pudo subir ({estado})'); continue
            print(f'  {cid} {n}: subido {len(datos) // 1000} kB')
        if n == 'tráiler':  # el tráiler queda alojado, pero la página todavía no tiene dónde mostrarlo
            print(f'  {cid} tráiler: {publico}/{clave}'); continue
        e = curso.setdefault(n, {})
        e.pop('producido', None)
        e['video'] = f'{publico}/{clave}'
        base = src.with_suffix('')
        if base.with_suffix('.poster.jpg').exists():
            dest = RAIZ / f'public/cursos/{cid}/{base.name}-poster.webp'
            dest.parent.mkdir(parents=True, exist_ok=True)
            im = Image.open(base.with_suffix('.poster.jpg')).convert('RGB')
            if im.width > 1280:
                im = im.resize((1280, round(im.height * 1280 / im.width)), Image.LANCZOS)
            im.save(dest, 'WEBP', quality=72, method=6)
            e['poster'] = f'/cursos/{cid}/{dest.name}'
        if base.with_suffix('.vtt').exists():
            dest = RAIZ / f'public/cursos/{cid}/{base.name}.vtt'
            shutil.copyfile(base.with_suffix('.vtt'), dest)
            e['subtitulos'] = f'/cursos/{cid}/{dest.name}'

medios_p.write_text(json.dumps(medios, ensure_ascii=False, indent=2) + '\n')
