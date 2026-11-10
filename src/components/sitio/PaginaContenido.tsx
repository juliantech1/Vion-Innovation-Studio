import Link from 'next/link';
import { enlaceWhatsapp, interfazDe, pagina, ruta, sitio, type Accion, type IdPagina, type Idioma, type Llamado } from '@/content';
import { JsonLd } from './JsonLd';
import { Secciones } from './Secciones';
import { Acentuado, Texto } from './Texto';

/** Un llamado: enlace interno, WhatsApp con el mensaje ya escrito o correo. */
export function BotonAccion({ accion, idioma, principal }: { accion: Accion; idioma: Idioma; principal?: boolean }) {
  const clase = principal ? 'boton boton--principal' : 'boton';
  const d = accion.destino;
  if ('pagina' in d) {
    return (
      <Link className={clase} href={ruta(d.pagina, idioma, d.ancla)}>
        {accion.texto}
      </Link>
    );
  }
  return (
    <a className={clase} href={'whatsapp' in d ? enlaceWhatsapp(d.whatsapp) : `mailto:${sitio.correo}`} rel={'whatsapp' in d ? 'noopener' : undefined}>
      {accion.texto}
    </a>
  );
}

/** El cierre de la página: WhatsApp y correo como llamados principales, y el camino a la página de contacto. */
function LlamadoFinal({ llamado, idioma }: { llamado: Llamado; idioma: Idioma }) {
  const ui = interfazDe(idioma);
  return (
    <section className="seccion llamado" aria-labelledby="t-llamado">
      <div className="contenedor">
        <h2 id="t-llamado">
          <Acentuado texto={llamado.titulo} acento={llamado.acento} />
        </h2>
        <p className="intro">
          <Texto idioma={idioma}>{llamado.texto}</Texto>
        </p>
        <p className="acciones">
          <a className="boton boton--principal" href={enlaceWhatsapp(llamado.mensajeWhatsapp)} rel="noopener">
            {ui.llamado.whatsapp}
          </a>
          <a className="boton" href={`mailto:${sitio.correo}`}>
            {ui.llamado.correo} {sitio.correo}
          </a>
        </p>
        <p>
          <Link href={ruta('contacto', idioma)}>{ui.llamado.formulario}</Link>
        </p>
      </div>
    </section>
  );
}

/**
 * Una página entera desde su contenido: datos estructurados, migas, cabecera con el único H1, secciones y cierre.
 * Estructura semántica con un estilo mínimo: el diseño de cada página se monta encima de esto (o lo reemplaza
 * usando la misma capa de contenido).
 */
export function PaginaContenido({ id, idioma }: { id: IdPagina; idioma: Idioma }) {
  const p = pagina(id, idioma);
  const ui = interfazDe(idioma);
  return (
    <>
      <JsonLd id={id} idioma={idioma} />
      <article className="pagina base" data-pagina={id}>
        <header className="portada">
          <div className="contenedor">
            {id !== 'inicio' && (
              <nav className="migas" aria-label={ui.migas}>
                <ol>
                  <li>
                    <Link href={ruta('inicio', idioma)}>{pagina('inicio', idioma).nav}</Link>
                  </li>
                  <li aria-current="page">{p.nav}</li>
                </ol>
              </nav>
            )}
            <p className="etiqueta">{p.etiqueta}</p>
            <h1>
              <Acentuado texto={p.h1} acento={p.acento} />
            </h1>
            <p className="bajada">
              <Texto idioma={idioma}>{p.bajada}</Texto>
            </p>
            {p.acciones && (
              <p className="acciones">
                {p.acciones.map((a, i) => (
                  <BotonAccion key={a.texto} accion={a} idioma={idioma} principal={i === 0} />
                ))}
              </p>
            )}
          </div>
        </header>
        <Secciones secciones={p.secciones} idioma={idioma} />
        {p.llamado && <LlamadoFinal llamado={p.llamado} idioma={idioma} />}
      </article>
    </>
  );
}
