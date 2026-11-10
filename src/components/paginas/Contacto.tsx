import { enlaceWhatsapp, interfazDe, pagina, piezasDe, sitio, type Idioma } from '@/content';
import { FormularioContacto } from '@/components/sitio/FormularioContacto';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Acentuado, Texto } from '@/components/sitio/Texto';
import { Ficha, Figura, Flecha, Preguntas, Titular } from '@/components/vion/piezas';
import { seccion } from './comun';
import { caja, circulo, Miga, punta, rombo, T } from './estudio';

/** ¿Está conectado el formulario? Se decide al construir, sin exponer nada: solo si existen las dos variables. */
const formularioConectado = () => Boolean(process.env.VENTAS_API_URL && process.env.VENTAS_API_TOKEN);

/** Fig. 1: el recorrido de un mensaje, de arriba abajo; el rombo rojo es la decisión del visitante. */
function Recorrido({ r }: { r: string[] }) {
  const baja = (y1: number, y2: number) => `M40 ${y1}V${y2}` + punta(40, y2, 'aba', 5);
  return (
    <>
      <T d={caja(22, 28, 36, 24) + 'M22 28l18 13 18-13'} />
      <T d={baja(60, 96)} fino i={1} />
      <T d={circulo(40, 110, 8) + 'M26 136q14-20 28 0'} i={1} />
      <T d={baja(146, 184)} fino i={2} />
      <T d={caja(22, 196, 36, 24, 4) + 'M30 220l-3 9 11-9'} i={2} />
      <T d={baja(236, 272)} fino i={3} />
      <T d={circulo(40, 296, 16) + 'M40 296V285M40 296l8.5 5'} i={3} />
      <T d="M40 274A22 22 0 0 1 59 307" rojo />
      <T d={baja(322, 360)} fino i={4} />
      <T d={rombo(40, 380, 13)} rojo />
      <T d={baja(398, 428)} fino i={5} />
      <T d={caja(18, 436, 44, 26)} i={5} />
      <g aria-hidden="true">
        <text x="84" y="45" className="d-fuerte">{r[0]}</text>
        <text x="84" y="116">{r[1]}</text>
        <text x="84" y="212">{r[2]}</text>
        <text x="84" y="294">{r[3]}</text>
        <text x="84" y="310" className="d-rojo">{r[4]}</text>
        <text x="84" y="385" className="d-rojo">{r[5]}</text>
        <text x="84" y="454" className="d-fuerte">{r[6]}</text>
      </g>
    </>
  );
}

/** Contacto (es) / Contact (en): WhatsApp y correo grandes a la izquierda, el formulario a la derecha, qué pasa después y preguntas. */
export function Contacto({ idioma }: { idioma: Idioma }) {
  const p = pagina('contacto', idioma);
  const ui = interfazDe(idioma);
  const t = piezasDe(idioma);
  const c = t.contacto;
  const datos = seccion(p, 0, 'contacto');
  const formulario = seccion(p, 1, 'formulario');
  const despues = seccion(p, 2, 'pasos');
  const preguntas = seccion(p, 3, 'preguntas');
  const tx = (s: string) => <Texto idioma={idioma}>{s}</Texto>;
  const whatsapp = p.acciones?.find((a) => 'whatsapp' in a.destino);
  const mensaje = whatsapp && 'whatsapp' in whatsapp.destino ? whatsapp.destino.whatsapp : undefined;
  const e = ui.etiquetas;

  return (
    <>
      <JsonLd id="contacto" idioma={idioma} />
      <article className="pagina" data-pagina="contacto">
        {/* 1 · Portada: el titular, WhatsApp y correo grandes a la izquierda, el formulario a la derecha */}
        <section className="portada portada--interior portada--contacto tono-raven" aria-labelledby="titulo">
          <div className="marco pi pi--contacto">
            <div className="pi__cab">
              <Miga p={p} idioma={idioma} />
              <p className="rotulo" data-llega style={{ '--espera': '200ms' } as React.CSSProperties}>{p.etiqueta}</p>
              <h1 className="mega" id="titulo">
                <Acentuado texto={p.h1} acento={p.acento} />
              </h1>
            </div>
            <p className="lead pi__bajada" data-llega style={{ '--espera': '520ms' } as React.CSSProperties}>{tx(p.bajada)}</p>

            <section className="contacto__datos" id={datos.id} aria-labelledby={`t-${datos.id}`} data-seccion={datos.etiqueta}>
              <h2 className="rotulo" id={`t-${datos.id}`}>{datos.titulo}</h2>
              {datos.intro && <p className="texto">{tx(datos.intro)}</p>}
              <ul className="vias">
                <li>
                  <a className="via via--principal" href={enlaceWhatsapp(mensaje)} rel="noopener">
                    <span className="via__r">{ui.contacto.whatsapp}</span>
                    <span className="via__t">{whatsapp?.texto ?? ui.llamado.whatsapp}</span>
                    <span className="via__n">{sitio.whatsapp}</span>
                    <span className="via__ir" aria-hidden="true"><Flecha /></span>
                  </a>
                </li>
                <li>
                  <a className="via" href={`mailto:${sitio.correo}`}>
                    <span className="via__r">{ui.contacto.correo}</span>
                    <span className="via__t via__t--correo">{sitio.correo}</span>
                    <span className="via__ir" aria-hidden="true"><Flecha /></span>
                  </a>
                </li>
              </ul>
              <address>
                <Ficha
                  filas={[
                    { termino: c.respuesta, valor: c.respuestaValor },
                    { termino: ui.contacto.instagram, valor: <a href={sitio.instagram} rel="noopener">{sitio.instagramUsuario}</a> },
                    ...datos.filas.map((f) => ({ termino: f.termino, valor: tx(f.valor) })),
                  ]}
                />
              </address>
            </section>

            <section className="contacto__form" id={formulario.id} aria-labelledby={`t-${formulario.id}`} data-seccion={formulario.titulo}>
              <div className="contacto__form-cab">
                {formulario.etiqueta && <p className="rotulo">{formulario.etiqueta}</p>}
                <h2 className="sub" id={`t-${formulario.id}`}>{formulario.titulo}</h2>
                {formulario.intro && <p className="texto">{tx(formulario.intro)}</p>}
              </div>
              <FormularioContacto idioma={idioma} textos={ui.formulario} modo={formularioConectado() ? 'real' : 'prueba'} consentimiento={tx(ui.formulario.consentimiento)} />
            </section>
          </div>
        </section>

        {/* 2 · Qué pasa después · Fig. 1 */}
        <section className="seccion tono-powder" id={despues.id} aria-labelledby={`t-${despues.id}`} data-seccion={despues.titulo}>
          <div className="marco reticula">
            <div className="partido__texto">
              <div className="encabezado">
                {despues.etiqueta && <p className="rotulo">{despues.etiqueta}</p>}
                <Titular id={`t-${despues.id}`} texto={despues.titulo} acento={despues.acento} />
              </div>
              <ol className="pasos-c" data-traza>
                {despues.pasos.map((x, i) => (
                  <li key={x.titulo} data-entra style={{ '--i': i } as React.CSSProperties}>
                    <p className="rotulo">{e.paso.replace('{n}', String(i + 1)).replace('{total}', String(despues.pasos.length))}</p>
                    <h3 className="sub">{x.titulo}</h3>
                    <p>{tx(x.texto)}</p>
                  </li>
                ))}
              </ol>
              {despues.nota && <p className="texto despues__nota">{tx(despues.nota)}</p>}
            </div>
            <Figura id="fig1-pie" numero={1} rotulo={t.fig} leyenda={c.recorrido.pie} clase="dibujo dibujo--vertical contacto__fig" dibuja>
              <svg viewBox="0 0 300 470" role="img" aria-label={c.recorrido.alt}>
                <Recorrido r={c.recorrido.r} />
              </svg>
            </Figura>
          </div>
        </section>

        {/* 3 · Preguntas */}
        <section className="seccion tono-raven" id={preguntas.id} aria-labelledby={`t-${preguntas.id}`} data-seccion="FAQ">
          <div className="marco reticula">
            <div className="preguntas__t">
              <Titular id={`t-${preguntas.id}`} texto={preguntas.titulo} acento={preguntas.acento} />
            </div>
            <div className="preguntas__l" data-traza>
              <Preguntas preguntas={preguntas.preguntas} />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
