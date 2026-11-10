'use client';

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { opcionesServicio } from '@/content/sitio';
import type { Idioma, Interfaz } from '@/content/tipos';

interface Props {
  idioma: Idioma;
  textos: Interfaz['formulario'];
  /** «prueba»: al construir no estaban las variables de Ventas; se avisa antes de llenar. */
  modo: 'real' | 'prueba';
  /** El texto del consentimiento, con su enlace al aviso de privacidad (lo dibuja el servidor). */
  consentimiento: ReactNode;
}
type Campo = 'nombre' | 'contacto' | 'consentimiento';
type Estado = { tipo: 'nada' | 'enviando' | 'ok' | 'prueba' | 'error'; texto: string };

/**
 * Formulario accesible. Con JavaScript valida y envía por fetch a /api/contacto; sin JavaScript es un POST normal
 * y el manejador redirige (303) a la página de gracias. El campo escondido `sitio_web` y el tiempo `t` son para
 * descartar bots.
 */
export function FormularioContacto({ idioma, textos: t, modo, consentimiento }: Props) {
  const [errores, setErrores] = useState<Partial<Record<Campo, boolean>>>({});
  const [estado, setEstado] = useState<Estado>({ tipo: 'nada', texto: '' });
  const abierto = useRef<HTMLInputElement>(null);
  const utm = useRef<HTMLInputElement>(null);
  const mensaje = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (abierto.current) abierto.current.value = String(Date.now());
    const q = new URLSearchParams(window.location.search);
    const u: Record<string, string> = {};
    for (const k of ['source', 'medium', 'campaign', 'content', 'term']) {
      const v = q.get(`utm_${k}`);
      if (v) u[k] = v.slice(0, 120);
    }
    if (utm.current) utm.current.value = Object.keys(u).length ? JSON.stringify(u) : '';
    // Un enlace del sitio puede traer el mensaje ya escrito (por ejemplo, «avísenme cuando salga el curso…»).
    const previo = q.get('mensaje');
    if (previo && mensaje.current && !mensaje.current.value) mensaje.current.value = previo.slice(0, 300);
  }, []);

  async function enviar(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const datos = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const mal: Partial<Record<Campo, boolean>> = {};
    if (!datos.nombre?.trim()) mal.nombre = true;
    if ((datos.contacto?.trim().length ?? 0) < 3) mal.contacto = true;
    if (datos.consentimiento !== 'si') mal.consentimiento = true;
    setErrores(mal);
    const primero = (Object.keys(mal) as Campo[])[0];
    if (primero) {
      (form.elements.namedItem(primero) as HTMLElement | null)?.focus();
      setEstado({ tipo: 'error', texto: t.errores.revisar });
      return;
    }
    setEstado({ tipo: 'enviando', texto: t.enviando });
    try {
      const r = await fetch(form.action, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(datos),
      });
      const j = (await r.json().catch(() => null)) as { ok?: boolean; modo?: string; error?: Campo } | null;
      if (r.status === 422 && j?.error) {
        setErrores({ [j.error]: true });
        setEstado({ tipo: 'error', texto: t.errores.revisar });
        return;
      }
      if (!r.ok || !j?.ok) throw new Error(String(r.status));
      if (j.modo === 'prueba') {
        setEstado({ tipo: 'prueba', texto: t.exitoPrueba });
        return;
      }
      setEstado({ tipo: 'ok', texto: t.exito });
      form.reset();
      if (abierto.current) abierto.current.value = String(Date.now());
    } catch {
      setEstado({ tipo: 'error', texto: t.errores.envio });
    }
  }

  const error = (campo: Campo, texto: string) => (
    <span className="error-campo" id={`e-${campo}`} hidden={!errores[campo]}>
      {texto}
    </span>
  );

  return (
    <form className="formulario" action="/api/contacto" method="post" noValidate onSubmit={enviar}>
      {modo === 'prueba' && <p className="aviso-prueba">{t.avisoPrueba}</p>}
      <div className="campo">
        <label htmlFor="f-nombre">
          {t.nombre} <span className="oblig">({t.obligatorio})</span>
        </label>
        <input id="f-nombre" name="nombre" type="text" autoComplete="name" required maxLength={160} aria-invalid={errores.nombre || undefined} aria-describedby="e-nombre" />
        {error('nombre', t.errores.nombre)}
      </div>
      <div className="campo">
        <label htmlFor="f-empresa">{t.empresa}</label>
        <input id="f-empresa" name="empresa" type="text" autoComplete="organization" maxLength={160} />
      </div>
      <div className="campo">
        <label htmlFor="f-contacto">
          {t.contacto} <span className="oblig">({t.obligatorio})</span>
        </label>
        <input id="f-contacto" name="contacto" type="text" autoComplete="email" required minLength={3} maxLength={200} aria-invalid={errores.contacto || undefined} aria-describedby="a-contacto e-contacto" />
        <span className="ayuda" id="a-contacto">
          {t.ayudaContacto}
        </span>
        {error('contacto', t.errores.contacto)}
      </div>
      <div className="campo">
        <label htmlFor="f-servicio">{t.servicio}</label>
        <select id="f-servicio" name="servicio" defaultValue={opcionesServicio[0]}>
          {opcionesServicio.map((valor, i) => (
            <option key={valor} value={valor}>
              {t.opciones[i]}
            </option>
          ))}
        </select>
      </div>
      <div className="campo">
        <label htmlFor="f-mensaje">{t.mensaje}</label>
        <textarea id="f-mensaje" name="mensaje" ref={mensaje} maxLength={2000} rows={5} aria-describedby="a-mensaje" />
        <span className="ayuda" id="a-mensaje">
          {t.ejemploMensaje}
        </span>
      </div>
      {/* Trampa para bots: fuera de la vista, del foco y de los lectores de pantalla. */}
      <div className="trampa" aria-hidden="true">
        <label htmlFor="f-sitio">{t.trampa}</label>
        <input id="f-sitio" name="sitio_web" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {/* Sin defaultValue: en un input escondido el valor es el atributo, y React lo volvía a "" en cada render (al
          marcar un error), así que el envío siguiente salía sin tiempo y el manejador lo tomaba por un bot. */}
      <input type="hidden" name="t" ref={abierto} />
      <input type="hidden" name="utm" ref={utm} />
      <input type="hidden" name="idioma" value={idioma} />
      <div className="campo campo--consentimiento">
        <input id="f-consentimiento" type="checkbox" name="consentimiento" value="si" required aria-invalid={errores.consentimiento || undefined} aria-describedby="e-consentimiento" />
        <label htmlFor="f-consentimiento">{consentimiento}</label>
        {error('consentimiento', t.errores.consentimiento)}
      </div>
      <button className="boton boton--principal" type="submit" disabled={estado.tipo === 'enviando'}>
        {t.enviar}
      </button>
      <p className="estado-envio" role="status" aria-live="polite" data-tipo={estado.tipo}>
        {estado.texto}
      </p>
    </form>
  );
}
