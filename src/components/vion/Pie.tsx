import Image from 'next/image';
import Link from 'next/link';
import { MENU, enlaceWhatsapp, interfazDe, pagina, piezasDe, ruta, sitio, type IdPagina, type Idioma } from '@/content';
import { P } from '@/content/pendientes';
import { Casillero, Texto } from '@/components/sitio/Texto';
import { Lamina } from './Lamina';

const TODAS: IdPagina[] = ['inicio', ...MENU];
/** Los nombres largos de las páginas de servicio (texto de enlace descriptivo). */
const nombreLargo = (id: IdPagina, idioma: Idioma) => pagina(id, idioma).esquema.servicio?.nombre ?? pagina(id, idioma).nav;
/** La revisión del cajetín es la fecha en que se construyó el sitio: un dato verdadero, no un adorno. */
const REVISION = new Date().toISOString().slice(0, 10);

/**
 * El pie: un cajetín de plano (proyecto, lámina n/07, revisión, quién dibujó, razón social) unido al colofón (con qué
 * está compuesto el sitio, cuánto pesó esta página medido en el navegador del visitante y la retícula a la vista).
 */
export function Pie({ idioma }: { idioma: Idioma }) {
  const ui = interfazDe(idioma);
  const t = piezasDe(idioma).pie;
  return (
    <footer className="pie tono-raven">
      <div className="marco">
        <div className="pie__lema">
          <Image src={sitio.simbolo.src} alt="Vion" width={38} height={37} />
          <p>
            <Texto idioma={idioma}>{ui.pie.lema}</Texto>
          </p>
        </div>
        <div className="cajetin">
          <div className="celda celda--proyecto">
            <p className="celda__r">{t.proyecto}</p>
            <p className="celda__v">{t.proyectoValor}</p>
          </div>
          <div className="celda celda--lamina">
            <p className="celda__r">{t.lamina}</p>
            <Lamina nombres={Object.fromEntries(TODAS.map((id) => [id, pagina(id, idioma).nav]))} orden={TODAS} />
          </div>
          <div className="celda celda--rev">
            <p className="celda__r">{t.revision}</p>
            <p className="celda__v celda__v--mono">
              <time dateTime={REVISION}>{REVISION}</time>
            </p>
          </div>
          <div className="celda celda--dibujo">
            <p className="celda__r">{t.dibujo}</p>
            <p className="celda__v">{t.dibujoValor}</p>
          </div>
          <div className="celda celda--razon">
            <p className="celda__r">{t.razon}</p>
            <p className="celda__v">
              <Casillero texto={P.razonSocial} />
            </p>
          </div>
          <nav className="celda celda--indice" aria-label={ui.navPie}>
            <p className="celda__r">{t.indice}</p>
            <ul>
              {TODAS.map((id, i) => (
                <li key={id}>
                  <Link href={ruta(id, idioma)}>
                    <b>{String(i + 1).padStart(2, '0')}</b>
                    {nombreLargo(id, idioma)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="celda celda--contacto">
            <p className="celda__r">{ui.pie.contacto}</p>
            <ul>
              <li>
                <a href={`mailto:${sitio.correo}`}>{sitio.correo}</a>
              </li>
              <li>
                <a href={enlaceWhatsapp()} rel="noopener">WhatsApp</a>
              </li>
              <li>
                <a href={sitio.instagram} rel="noopener">Instagram {sitio.instagramUsuario}</a>
              </li>
            </ul>
          </div>
          <div className="celda celda--colofon">
            <p className="celda__r">{t.colofon}</p>
            <p>
              {t.colofonTexto} <output data-colofon>{t.colofonEspera}</output>
            </p>
            <p className="colofon__r">
              <button className="conmutador" type="button" aria-pressed="false" data-guia-boton>
                <i aria-hidden="true" />
                {t.reticula}
              </button>
              <kbd aria-hidden="true">G</kbd>
            </p>
          </div>
        </div>
        <div className="legal">
          <p>© {new Date().getFullYear()} Vion</p>
          <Link href={ruta('privacidad', idioma)}>{ui.pie.privacidad}</Link>
        </div>
      </div>
    </footer>
  );
}
