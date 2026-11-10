#!/usr/bin/env python3
"""Revisa el contenido de los cursos (src/content/cursos/<id>/lecciones.ts y curso.ts) sin construir el sitio.

    python3 scripts/validar-cursos.py [id …]

Los dos archivos son TypeScript cuyo valor es JSON estricto (después del primer «= » y hasta el último «;»): así se
pueden revisar con Python, sin Node. Falla (sale con 1) si algo no cumple: forma y tipos, numeración de láminas,
títulos y descripciones para buscadores, rayas, frases prohibidas por la marca y jerga interna a la vista."""
import json, pathlib, re, sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent / 'src/content/cursos'
TIPOS_APOYO = {'imagen', 'diagrama', 'captura', 'motion', 'grabacion', 'chispa'}
TIPOS_BLOQUE = {'comando', 'pedido', 'archivo', 'codigo'}
PROHIBIDAS = ['elevate', 'seamless', 'potencie su negocio', 'revolucionario', 'disruptivo', 'siguiente nivel', 'garantizado',
              'WhatsApp Business', 'next level', 'game-changer', 'cutting-edge']
# Lo que no se ve en el sitio: rutas y nombres internos de la aldea, notas de producción.
JERGA = [r'~/aldea', r'\bsecretos/', r'Cal[ií]ope', r'\bMM\b', r'§', r'\[T\]', r'\bP\d\b',
         r'Motion manual', r'plantilla `(pizarra|chat|claude_code|lista|oferta|girar)`', r'^`(pizarra|chat|lista|oferta)`',
         r'\bregla 1[23]\b', r'Hefesto', r'\bEco\b', r'Feme', r'Orión', r'render(izar)? (de )?Chispa', r'REVISAR', r'Estudio 3D',
         r'Plantilla `', r'cuadro fijo', r'Grabación A\d', r'Captura A\d', r'\bla aldea\b']
fallas = []


def cargar(p):
    t = p.read_text()
    a, b = t.index('= ') + 2, t.rindex(';')
    return json.loads(t[a:b])


def texto_visible(s, donde, permitir_codigo=False):
    if not isinstance(s, str):
        fallas.append(f'{donde}: no es texto'); return
    if re.search('[—–]', s):
        fallas.append(f'{donde}: raya o guion largo')
    for f in PROHIBIDAS:
        if f.lower() in s.lower():
            fallas.append(f'{donde}: frase prohibida «{f}»')
    for j in JERGA:
        if re.search(j, s, re.M):
            fallas.append(f'{donde}: jerga interna ({j}): «{s[:90]}»')


def largo(s, a, b, donde):
    if not (a <= len(s) <= b):
        fallas.append(f'{donde}: {len(s)} caracteres ({a} a {b}): «{s}»')


def revisar(cid):
    d = RAIZ / cid
    lec = cargar(d / 'lecciones.ts')
    slugs = set()
    for L in lec:
        w = f'{cid} L{L.get("n")}'
        for k in ('n', 'slug', 'titulo', 'objetivo', 'laminas'):
            if k not in L:
                fallas.append(f'{w}: falta {k}')
        if L['slug'] in slugs or not re.match(r'^[a-z0-9-]+$', L['slug']):
            fallas.append(f'{w}: slug repetido o con caracteres raros: {L["slug"]}')
        slugs.add(L['slug'])
        if '_sueltos' in L:
            fallas.append(f'{w}: quedaron bloques sin lámina (_sueltos)')
        for k in ('titulo', 'objetivo', 'resultado'):
            if k in L:
                texto_visible(L[k], f'{w} {k}')
        if len(L['objetivo']) < 40:
            fallas.append(f'{w}: objetivo muy corto para la descripción de la página ({len(L["objetivo"])})')
        ns = []
        for lam in L['laminas']:
            x = f'{w} lámina {lam.get("n")}'
            ns.append(lam['n'])
            if not lam['n'].startswith(f'{L["n"]}.'):
                fallas.append(f'{x}: el número no es de la lección {L["n"]}')
            texto_visible(lam['titulo'], f'{x} título')
            texto_visible(lam['cuerpo'], f'{x} cuerpo')
            if '{{' in lam['titulo']:
                fallas.append(f'{x}: casillero en el título')
            ap = lam['apoyo']
            if ap.get('tipo') not in TIPOS_APOYO:
                fallas.append(f'{x}: apoyo.tipo «{ap.get("tipo")}»')
            for k in ('seVe', 'dice'):
                if k in ap:
                    texto_visible(ap[k], f'{x} apoyo.{k}')
            if ap.get('tipo') in ('motion', 'grabacion', 'chispa') and not ap.get('segundos'):
                fallas.append(f'{x}: video sin segundos')
            if not ap.get('seVe'):
                fallas.append(f'{x}: apoyo sin seVe (la lámina tiene que entenderse sin el video)')
            for b in lam.get('bloques', []):
                if b.get('tipo') not in TIPOS_BLOQUE or not b.get('texto', '').strip():
                    fallas.append(f'{x}: bloque mal formado {b}')
                if 'etiqueta' in b:
                    texto_visible(b['etiqueta'], f'{x} bloque.etiqueta')
                if re.search('[—–]', b.get('texto', '')):
                    fallas.append(f'{x}: raya dentro de un bloque copiable')
        if len(set(ns)) != len(ns):
            fallas.append(f'{w}: láminas con número repetido')
    p = d / 'curso.ts'
    if not p.exists():
        fallas.append(f'{cid}: falta curso.ts'); return lec
    c = cargar(p)
    es, en = c['es'], c['en']
    for idioma, x in (('es', es), ('en', en)):
        for k in ('corto', 'titulo', 'tituloSeo', 'descripcion', 'paraQuien', 'seLleva', 'herramientas'):
            if not x.get(k):
                fallas.append(f'{cid} {idioma}: falta {k}')
            else:
                texto_visible(x[k], f'{cid} {idioma} {k}')
                if '{{' in x[k] and k in ('titulo', 'tituloSeo', 'descripcion', 'corto'):
                    fallas.append(f'{cid} {idioma} {k}: casillero')
        largo(x['tituloSeo'], 30, 60, f'{cid} {idioma} tituloSeo')
        largo(x['descripcion'], 70, 155, f'{cid} {idioma} descripcion')
    if len(en['lecciones']) != len(lec):
        fallas.append(f'{cid} en: {len(en["lecciones"])} títulos de lecciones y {len(lec)} lecciones')
    for k in ('ficha', 'costos', 'costosFecha', 'puesta', 'recursos', 'kit', 'accion'):
        if k not in es:
            fallas.append(f'{cid} es: falta {k}')
    for k in ('requisitos', 'duracion', 'costo'):
        texto_visible(es['ficha'].get(k, ''), f'{cid} ficha.{k}')
    for f in es['costos']:
        texto_visible(f['pieza'] + ' ' + f['costo'] + ' ' + f.get('fuente', ''), f'{cid} costos')
    if es['puesta']['leccion'] not in [L['n'] for L in lec]:
        fallas.append(f'{cid}: puesta.leccion no es una lección')
    texto_visible(es['puesta']['texto'], f'{cid} puesta')
    for r in es['recursos']:
        for k in ('nombre', 'que', 'licencia', 'revision'):
            if not r.get(k):
                fallas.append(f'{cid} recurso {r.get("nombre")}: falta {k}')
        texto_visible(' '.join(str(r.get(k, '')) for k in ('nombre', 'que', 'licencia', 'revision', 'lecciones')), f'{cid} recurso {r.get("nombre")}')
        if r.get('url') and not r['url'].startswith('https://'):
            fallas.append(f'{cid} recurso {r["nombre"]}: url sin https')
    if 'noRecomendamos' in es:
        texto_visible(es['noRecomendamos'], f'{cid} noRecomendamos')
    texto_visible(es['kit']['descripcion'], f'{cid} kit')
    for a in es['kit']['archivos']:
        texto_visible(a['nombre'] + ' ' + a['que'], f'{cid} kit {a["nombre"]}')
    texto_visible(es['accion']['titulo'] + ' ' + es['accion']['texto'], f'{cid} accion')
    return lec


ids = sys.argv[1:] or sorted(p.name for p in RAIZ.iterdir() if p.is_dir())
for cid in ids:
    lec = revisar(cid)
    n = sum(len(L['laminas']) for L in lec)
    v = sum(1 for L in lec for x in L['laminas'] if x['apoyo']['tipo'] in ('motion', 'grabacion', 'chispa'))
    b = sum(len(x.get('bloques', [])) for L in lec for x in L['laminas'])
    print(f'{cid:20} {len(lec)} lecciones · {n} láminas · {v} videos · {b} bloques copiables')
print(f'validar-cursos: {len(fallas)} fallas')
for f in fallas[:400]:
    print('  FALLA:', f)
sys.exit(1 if fallas else 0)
