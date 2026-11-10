import Image from 'next/image';
import Link from 'next/link';
import { enlaceWhatsapp, interfazDe, ruta, sitio, type Idioma, type Paso, type Seccion } from '@/content';
import { FormularioContacto } from './FormularioContacto';
import { Acentuado, Texto } from './Texto';

/** ¿Está conectado el formulario? Se decide al construir, sin exponer nada: solo si existen las dos variables. */
const formularioConectado = () => Boolean(process.env.VENTAS_API_URL && process.env.VENTAS_API_TOKEN);

function Pasos({ pasos, idioma }: { pasos: Paso[]; idioma: Idioma }) {
  const e = interfazDe(idioma).etiquetas;
  return (
    <ol className="pasos">
      {pasos.map((p, i) => (
        <li key={p.titulo} className="paso">
          <p className="etiqueta">{e.paso.replace('{n}', String(i + 1)).replace('{total}', String(pasos.length))}</p>
          <h3>{p.titulo}</h3>
          <p>
            <Texto idioma={idioma}>{p.texto}</Texto>
          </p>
          {p.entregables && (
            <>
              <p className="etiqueta">{e.entregables}</p>
              <ul>
                {p.entregables.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </>
          )}
          {(p.plazo || p.rango) && (
            <dl className="datos">
              {p.plazo && (
                <div>
                  <dt>{e.plazo}</dt>
                  <dd>{p.plazo}</dd>
                </div>
              )}
              {p.rango && (
                <div>
                  <dt>{e.rango}</dt>
                  <dd>{p.rango}</dd>
                </div>
              )}
            </dl>
          )}
        </li>
      ))}
    </ol>
  );
}

function Cuerpo({ s, idioma }: { s: Seccion; idioma: Idioma }) {
  const ui = interfazDe(idioma);
  const t = (texto: string) => <Texto idioma={idioma}>{texto}</Texto>;
  switch (s.tipo) {
    case 'texto':
      return (
        <div className="prosa">
          {s.parrafos.map((p) => (
            <p key={p}>
              {t(p)}
            </p>
          ))}
          {s.lista && (
            <ul>
              {s.lista.map((x) => (
                <li key={x}>
                  {t(x)}
                </li>
              ))}
            </ul>
          )}
          {s.cierre?.map((p) => (
            <p key={p}>
              {t(p)}
            </p>
          ))}
        </div>
      );
    case 'lista':
      return (
        <ul className="items">
          {s.items.map((x) => (
            <li key={x.titulo}>
              {x.etiqueta && <p className="etiqueta">{x.etiqueta}</p>}
              <h3>{x.enlace ? <Link href={ruta(x.enlace.pagina, idioma, x.enlace.ancla)}>{x.titulo}</Link> : x.titulo}</h3>
              <p>
                {t(x.texto)}
              </p>
            </li>
          ))}
        </ul>
      );
    case 'pasos':
      return (
        <>
          <Pasos pasos={s.pasos} idioma={idioma} />
          {s.nota && (
            <p className="nota">
              {t(s.nota)}
            </p>
          )}
        </>
      );
    case 'ficha':
      return (
        <>
          <dl className="ficha">
            {s.filas.map((f) => (
              <div key={f.termino}>
                <dt>{f.termino}</dt>
                <dd>
                  {t(f.valor)}
                </dd>
              </div>
            ))}
          </dl>
          {s.nota && (
            <p className="nota">
              {t(s.nota)}
            </p>
          )}
        </>
      );
    case 'proyectos':
      return (
        <div className="proyectos">
          {s.proyectos.map((p) => (
            <article key={p.id} id={p.id} aria-labelledby={`t-${p.id}`}>
              <p className="etiqueta">{p.linea}</p>
              <h3 id={`t-${p.id}`}>{p.nombre}</h3>
              <p>
                {t(p.que)}
              </p>
              <dl className="ficha">
                {p.filas.map((f) => (
                  <div key={f.termino}>
                    <dt>{f.termino}</dt>
                    <dd>
                      {t(f.valor)}
                    </dd>
                  </div>
                ))}
              </dl>
              {p.imagen ? (
                <Image src={p.imagen.src} alt={p.imagen.alt} width={p.imagen.ancho} height={p.imagen.alto} sizes="(min-width: 960px) 880px, 100vw" />
              ) : (
                p.captura && (
                  <p className="hueco">
                    {t(p.captura)}
                  </p>
                )
              )}
            </article>
          ))}
        </div>
      );
    case 'personas':
      return (
        <ul className="items">
          {s.personas.map((p) => (
            <li key={p.nombre}>
              <h3>{p.nombre}</h3>
              <p className="etiqueta">{p.cargo}</p>
              <p>
                {t(p.bio)}
              </p>
            </li>
          ))}
        </ul>
      );
    case 'rangos':
      return (
        <>
          <ul className="items">
            {s.filas.map((f) => (
              <li key={f.nombre}>
                <h3>{f.nombre}</h3>
                <p className="cifra">{f.rango}</p>
                <p>{f.detalle}</p>
              </li>
            ))}
          </ul>
          {s.nota && (
            <p className="nota">
              {t(s.nota)}
            </p>
          )}
        </>
      );
    case 'preguntas':
      return (
        <div className="preguntas">
          {s.preguntas.map((q) => (
            <div key={q.p}>
              <h3>{q.p}</h3>
              <p>{q.r}</p>
            </div>
          ))}
        </div>
      );
    case 'contacto':
      return (
        <address className="contacto">
          <dl className="ficha">
            <div>
              <dt>{ui.contacto.whatsapp}</dt>
              <dd>
                <a href={enlaceWhatsapp()} rel="noopener">
                  {ui.llamado.whatsapp}
                </a>
              </dd>
            </div>
            <div>
              <dt>{ui.contacto.correo}</dt>
              <dd>
                <a href={`mailto:${sitio.correo}`}>{sitio.correo}</a>
              </dd>
            </div>
            <div>
              <dt>{ui.contacto.instagram}</dt>
              <dd>
                <a href={sitio.instagram} rel="noopener">
                  {sitio.instagramUsuario}
                </a>
              </dd>
            </div>
            {s.filas.map((f) => (
              <div key={f.termino}>
                <dt>{f.termino}</dt>
                <dd>
                  {t(f.valor)}
                </dd>
              </div>
            ))}
          </dl>
        </address>
      );
    case 'formulario':
      return (
        <FormularioContacto
          idioma={idioma}
          textos={ui.formulario}
          modo={formularioConectado() ? 'real' : 'prueba'}
          consentimiento={t(ui.formulario.consentimiento)}
        />
      );
  }
}

/** Las secciones de una página: cada una es un <section> con su H2 (y H3 adentro). */
export function Secciones({ secciones, idioma }: { secciones: Seccion[]; idioma: Idioma }) {
  return secciones.map((s) => (
    <section key={s.id} id={s.id} className={`seccion seccion--${s.tipo}`} aria-labelledby={`t-${s.id}`}>
      <div className="contenedor">
        <header className="seccion__cabeza">
          {s.etiqueta && <p className="etiqueta">{s.etiqueta}</p>}
          <h2 id={`t-${s.id}`}>
            <Acentuado texto={s.titulo} acento={s.acento} />
          </h2>
          {s.intro && (
            <p className="intro">
              <Texto idioma={idioma}>{s.intro}</Texto>
            </p>
          )}
        </header>
        <Cuerpo s={s} idioma={idioma} />
      </div>
    </section>
  ));
}
