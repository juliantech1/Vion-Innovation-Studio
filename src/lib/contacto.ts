// La lógica del formulario de contacto, sin dependencias (la prueba `scripts/probar-contacto.mjs` la importa con Node).
// Recibe el formulario y, si existen VENTAS_API_URL y VENTAS_API_TOKEN, lo deja como contacto nuevo en Ventas de
// Ultron (POST /api/ventas/servicio/contactos, negocio «vion»). Sin esas variables responde «modo prueba».
// El token nunca va al navegador. No guarda nada ni registra datos personales (solo el estado de la entrega).

const MAX_CUERPO = 12_000;
/** Menos que esto entre que se abrió el formulario y se envió: un bot. */
export const MIN_MS = 2500;
const MAX_MS = 24 * 60 * 60 * 1000;
export const SERVICIOS = [
  'Diagnóstico de automatización',
  'Automatización de AutoCAD',
  'Consultoría BIM e ISO 19650',
  'App o software a la medida',
  'Sistema o agente de IA',
  'Otro',
];
const CLAVES_UTM = ['source', 'medium', 'campaign', 'content', 'term'];
const RUTAS = {
  es: { gracias: '/gracias', contacto: '/contacto#datos' },
  en: { gracias: '/en/thanks', contacto: '/en/contact#details' },
};

type Datos = Record<string, unknown>;

const json = (estado: number, datos: object) =>
  new Response(JSON.stringify(datos), {
    status: estado,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
const texto = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').trim().slice(0, max) : '';

function utmDe(valor: unknown) {
  let u = valor;
  if (typeof u === 'string') {
    try {
      u = u ? JSON.parse(u) : null;
    } catch {
      u = null;
    }
  }
  if (!u || typeof u !== 'object' || Array.isArray(u)) return null;
  const limpio: Record<string, string> = {};
  for (const k of CLAVES_UTM) {
    const v = texto((u as Datos)[k], 120);
    if (v) limpio[k] = v;
  }
  return Object.keys(limpio).length ? limpio : null;
}

/**
 * Valida lo que llegó. Devuelve { contacto }, { error } o { trampa } (un bot: se le responde como si hubiera salido).
 * `exigirTiempo`: los envíos con JavaScript traen `t` (cuándo se abrió el formulario); sin él o demasiado rápido, bot.
 */
export function validar(d: Datos, ahora = Date.now(), exigirTiempo = false) {
  if (texto(d.sitio_web, 200)) return { trampa: true as const };
  const t = Number(d.t);
  if (Number.isFinite(t) && t > 0) {
    if (ahora - t < MIN_MS || ahora - t > MAX_MS) return { trampa: true as const };
  } else if (exigirTiempo) return { trampa: true as const };
  const nombre = texto(d.nombre, 160);
  const contacto = texto(d.contacto, 200);
  if (!nombre) return { error: 'nombre' as const };
  if (contacto.length < 3) return { error: 'contacto' as const };
  if (d.consentimiento !== 'si' && d.consentimiento !== true) return { error: 'consentimiento' as const };
  const servicio = typeof d.servicio === 'string' && SERVICIOS.includes(d.servicio) ? d.servicio : 'Otro';
  return {
    contacto: {
      negocio: 'vion',
      nombre,
      contacto,
      servicio,
      empresa: texto(d.empresa, 160) || null,
      pais: null,
      mensaje: texto(d.mensaje, 2000) || null,
      utm: utmDe(d.utm),
    },
  };
}

async function leer(request: Request): Promise<Datos | null> {
  if (Number(request.headers.get('content-length') || 0) > MAX_CUERPO) return null;
  const crudo = await request.text();
  if (crudo.length > MAX_CUERPO) return null;
  const tipo = request.headers.get('content-type') || '';
  try {
    if (tipo.includes('application/json')) {
      const j = JSON.parse(crudo);
      return j && typeof j === 'object' && !Array.isArray(j) ? j : null;
    }
  } catch {
    return null;
  }
  if (tipo.includes('application/x-www-form-urlencoded')) return Object.fromEntries(new URLSearchParams(crudo));
  return null;
}

/** Solo desde el mismo sitio (producción o su vista previa): el Origin tiene que ser el host que recibe el pedido. */
export function mismoOrigen(request: Request) {
  const origen = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  if (origen && host) {
    try {
      return new URL(origen).host === host;
    } catch {
      return false;
    }
  }
  // Sin Origin (navegadores viejos): vale solo si el navegador dice que el pedido sale del mismo sitio.
  return request.headers.get('sec-fetch-site') === 'same-origin';
}

export async function recibir(request: Request, env: Record<string, string | undefined> = process.env): Promise<Response> {
  if (!mismoOrigen(request)) return json(403, { ok: false, error: 'origen' });
  const conJs = (request.headers.get('accept') || '').includes('application/json');
  const datos = await leer(request);
  if (!datos) return json(400, { ok: false, error: 'formato' });
  const rutas = datos.idioma === 'en' ? RUTAS.en : RUTAS.es;
  const volver = (a: string) => new Response(null, { status: 303, headers: { location: new URL(a, request.url).href, 'cache-control': 'no-store' } });
  const listo = () => (conJs ? json(200, { ok: true, modo: 'real' }) : volver(rutas.gracias));

  const r = validar(datos, Date.now(), conJs);
  if ('trampa' in r) return listo();
  if ('error' in r) return json(422, { ok: false, error: r.error });

  const base = env.VENTAS_API_URL;
  const token = env.VENTAS_API_TOKEN;
  // Modo prueba: todo válido, pero no hay adónde entregarlo. Se dice con claridad: el mensaje NO se envió.
  if (!base || !token) return conJs ? json(200, { ok: true, modo: 'prueba' }) : volver(rutas.contacto);

  try {
    const resp = await fetch(new URL('/api/ventas/servicio/contactos', base), {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
      body: JSON.stringify(r.contacto),
      signal: AbortSignal.timeout(8000),
      redirect: 'error',
    });
    if (!resp.ok) {
      console.error(`ventas respondió ${resp.status}`);
      return json(502, { ok: false, error: 'entrega' });
    }
  } catch (e) {
    console.error(`ventas no respondió: ${(e as Error)?.name || 'error'}`);
    return json(502, { ok: false, error: 'entrega' });
  }
  return listo();
}
