import Link from 'next/link';
import { catalogoDe, enlaceWhatsapp, interfazDe, piezasDe, publicarRangos, ruta, sitio, type Idioma, type Llamado } from '@/content';
import { Texto } from '@/components/sitio/Texto';
import { Flecha, Nube } from './piezas';

/**
 * El cierre de una página: la pregunta con su nube de revisión, WhatsApp y correo, y el único campo rojo de la
 * página (el panel que lleva a Contacto con el primer paso, su plazo y su rango).
 */
export function Cierre({ llamado, idioma }: { llamado: Llamado; idioma: Idioma }) {
  const ui = interfazDe(idioma);
  const t = piezasDe(idioma).cierre;
  const d = catalogoDe(idioma).diagnostico;
  const { titulo, acento } = llamado;
  const i = acento ? titulo.indexOf(acento) : -1;
  return (
    <section className="cierre tono-raven" aria-labelledby="t-llamado" data-seccion={ui.pie.contacto} data-dibuja>
      <div className="marco reticula">
        <div className="cierre__texto">
          <h2 className="titular" id="t-llamado">
            {i < 0 || !acento ? (
              titulo
            ) : (
              <>
                {titulo.slice(0, i)}
                <Nube largo={acento.length}>
                  <span className="acento">{acento}</span>
                </Nube>
                {titulo.slice(i + acento.length)}
              </>
            )}
          </h2>
          <p className="lead" data-entra>
            <Texto idioma={idioma}>{llamado.texto}</Texto>
          </p>
          <div className="cierre__vias" data-entra>
            <p className="rotulo">{t.vias}</p>
            <div className="acciones">
              <a className="boton boton--linea" href={enlaceWhatsapp(llamado.mensajeWhatsapp)} rel="noopener">
                {ui.llamado.whatsapp}
              </a>
              <a className="enlace cierre__correo" href={`mailto:${sitio.correo}`}>
                {sitio.correo}
              </a>
            </div>
          </div>
        </div>
        <Link className="panel" href={ruta('contacto', idioma)} data-entra>
          <span className="rotulo">{t.rotulo}</span>
          <span className="panel__t">{t.panel}</span>
          <span className="panel__pie">
            <span>
              {d.plazo}
              {publicarRangos && (
                <>
                  <br />
                  {d.rango}
                </>
              )}
            </span>
            <span className="panel__ir" aria-hidden="true">
              <Flecha />
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
