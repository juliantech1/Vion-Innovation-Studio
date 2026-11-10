import Image from 'next/image';
import Link from 'next/link';
import { enlaceWhatsapp, interfazDe, pagina, ruta, sitio, type IdPagina, type Idioma } from '@/content';
import { Texto } from './Texto';

const SERVICIOS: IdPagina[] = ['consultoria', 'autocad', 'apps'];
const ESTUDIO: IdPagina[] = ['casos', 'nosotros', 'contacto'];

/** Los nombres largos de las páginas de servicio para el pie (texto de enlace descriptivo). */
const nombreLargo = (id: IdPagina, idioma: Idioma) => pagina(id, idioma).esquema.servicio?.nombre ?? pagina(id, idioma).nav;

export function Pie({ idioma }: { idioma: Idioma }) {
  const ui = interfazDe(idioma);
  const anio = new Date().getFullYear();
  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie__marca">
          <Image src={sitio.simbolo.src} alt="Vion" width={54} height={52} />
          <p>
            <Texto idioma={idioma}>{ui.pie.lema}</Texto>
          </p>
        </div>
        <nav className="pie__nav" aria-label={ui.navPie}>
          <div>
            <p className="etiqueta" id="pie-servicios">{ui.pie.servicios}</p>
            <ul aria-labelledby="pie-servicios">
              {SERVICIOS.map((id) => (
                <li key={id}>
                  <Link href={ruta(id, idioma)}>{nombreLargo(id, idioma)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="etiqueta" id="pie-estudio">{ui.pie.estudio}</p>
            <ul aria-labelledby="pie-estudio">
              {ESTUDIO.map((id) => (
                <li key={id}>
                  <Link href={ruta(id, idioma)}>{pagina(id, idioma).nav}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="etiqueta" id="pie-contacto">{ui.pie.contacto}</p>
            <ul aria-labelledby="pie-contacto">
              <li>
                <a href={`mailto:${sitio.correo}`}>{sitio.correo}</a>
              </li>
              <li>
                <a href={enlaceWhatsapp()} rel="noopener">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={sitio.instagram} rel="noopener">
                  Instagram {sitio.instagramUsuario}
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="pie__legal">
          <p>
            © {anio} <Texto idioma={idioma}>{ui.pie.legal}</Texto>
          </p>
          <Link href={ruta('privacidad', idioma)}>{ui.pie.privacidad}</Link>
        </div>
      </div>
    </footer>
  );
}
