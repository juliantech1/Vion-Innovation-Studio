// Pruebas de la lógica del formulario (src/lib/contacto.ts) sin red: Ventas de Ultron es un fetch simulado.
// Node 22.18 o más nuevo (quita los tipos de TypeScript solo):  node --test scripts/probar-contacto.mjs
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MIN_MS, recibir, validar } from '../src/lib/contacto.ts';

const VENTAS = { VENTAS_API_URL: 'https://ultron.ejemplo', VENTAS_API_TOKEN: 'secreto' };
const ahora = () => String(Date.now() - MIN_MS - 1000);
const bueno = () => ({
  nombre: 'Ana',
  contacto: 'ana@ejemplo.cr',
  servicio: 'Automatización de AutoCAD',
  mensaje: 'Láminas',
  consentimiento: 'si',
  sitio_web: '',
  t: ahora(),
  idioma: 'es',
  utm: '{"source":"ig","x":"no"}',
});
const pedido = (cuerpo, { js = true, origin = 'https://vion-studio.com', host = 'vion-studio.com' } = {}) =>
  new Request('https://vion-studio.com/api/contacto', {
    method: 'POST',
    headers: {
      'content-type': js ? 'application/json' : 'application/x-www-form-urlencoded',
      accept: js ? 'application/json' : 'text/html',
      ...(origin ? { origin } : {}),
      host,
    },
    body: typeof cuerpo === 'string' ? cuerpo : js ? JSON.stringify(cuerpo) : new URLSearchParams(cuerpo).toString(),
  });

let enviados = [];
const original = globalThis.fetch;
const ventas = (estado = 201) => {
  enviados = [];
  globalThis.fetch = async (url, init) => {
    enviados.push({ url: String(url), init });
    return new Response('{"id":1}', { status: estado });
  };
};
const restaurar = () => (globalThis.fetch = original);

test('entrega el contacto a Ventas con el token solo en el encabezado', async () => {
  ventas();
  const r = await recibir(pedido(bueno()), VENTAS);
  assert.equal(r.status, 200);
  assert.deepEqual(await r.json(), { ok: true, modo: 'real' });
  assert.equal(enviados.length, 1);
  assert.equal(enviados[0].url, 'https://ultron.ejemplo/api/ventas/servicio/contactos');
  assert.equal(enviados[0].init.headers.authorization, 'Bearer secreto');
  assert.deepEqual(JSON.parse(enviados[0].init.body), {
    negocio: 'vion',
    nombre: 'Ana',
    contacto: 'ana@ejemplo.cr',
    servicio: 'Automatización de AutoCAD',
    empresa: null,
    pais: null,
    mensaje: 'Láminas',
    utm: { source: 'ig' },
  });
  restaurar();
});

test('sin JavaScript vuelve a la página de gracias de su idioma (303)', async () => {
  ventas();
  const es = await recibir(pedido(bueno(), { js: false }), VENTAS);
  assert.equal(es.status, 303);
  assert.equal(es.headers.get('location'), 'https://vion-studio.com/gracias');
  const en = await recibir(pedido({ ...bueno(), idioma: 'en' }, { js: false }), VENTAS);
  assert.equal(en.headers.get('location'), 'https://vion-studio.com/en/thanks');
  assert.equal(enviados.length, 2);
  restaurar();
});

test('modo prueba: sin las variables no envía nada y lo dice', async () => {
  ventas();
  const r = await recibir(pedido(bueno()), {});
  assert.deepEqual(await r.json(), { ok: true, modo: 'prueba' });
  const sinJs = await recibir(pedido(bueno(), { js: false }), {});
  assert.equal(sinJs.status, 303);
  assert.equal(sinJs.headers.get('location'), 'https://vion-studio.com/contacto#datos');
  assert.equal(enviados.length, 0);
  restaurar();
});

test('valida lo incompleto y descarta bots sin avisarles', async () => {
  ventas();
  for (const [campo, valor, error] of [
    ['nombre', ' ', 'nombre'],
    ['contacto', 'a', 'contacto'],
    ['consentimiento', '', 'consentimiento'],
  ]) {
    const r = await recibir(pedido({ ...bueno(), [campo]: valor }), VENTAS);
    assert.equal(r.status, 422);
    assert.equal((await r.json()).error, error);
  }
  // campo trampa, demasiado rápido, o con JavaScript pero sin el tiempo: se responde «listo» y no se entrega
  for (const raro of [{ sitio_web: 'http://spam' }, { t: String(Date.now()) }, { t: '' }]) {
    const r = await recibir(pedido({ ...bueno(), ...raro }), VENTAS);
    assert.equal(r.status, 200);
  }
  assert.equal(enviados.length, 0);
  assert.equal(validar({ ...bueno(), servicio: 'cualquier cosa' }).contacto.servicio, 'Otro');
  restaurar();
});

test('rechaza otro origen, cuerpos enormes y formatos raros', async () => {
  ventas();
  assert.equal((await recibir(pedido(bueno(), { origin: 'https://otro.example' }), VENTAS)).status, 403);
  assert.equal((await recibir(pedido(bueno(), { origin: null }), VENTAS)).status, 403);
  assert.equal((await recibir(pedido('x'.repeat(13000)), VENTAS)).status, 400);
  assert.equal((await recibir(pedido('[1,2]'), VENTAS)).status, 400);
  assert.equal(enviados.length, 0);
  restaurar();
});

test('si Ventas falla o no responde, 502 y sin filtrar el token', async () => {
  ventas(401);
  const r = await recibir(pedido(bueno()), VENTAS);
  assert.equal(r.status, 502);
  assert.ok(!(await r.text()).includes('secreto'));
  globalThis.fetch = async () => {
    throw new Error('red');
  };
  assert.equal((await recibir(pedido(bueno()), VENTAS)).status, 502);
  restaurar();
});
