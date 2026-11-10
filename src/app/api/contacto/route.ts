// El manejador del formulario de contacto. La lógica (validar, descartar bots, rechazar otros orígenes, entregar a
// Ventas de Ultron o responder «modo prueba») está en `src/lib/contacto.ts`, con su prueba en `scripts/`.
import { recibir } from '@/lib/contacto';

export const dynamic = 'force-dynamic';

export function POST(request: Request) {
  return recibir(request);
}

export function GET() {
  return Response.json({ ok: false, error: 'metodo' }, { status: 405, headers: { allow: 'POST', 'cache-control': 'no-store' } });
}
