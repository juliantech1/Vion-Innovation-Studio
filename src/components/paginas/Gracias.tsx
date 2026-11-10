import { enlaceWhatsapp, interfazDe, pagina, piezasDe, sitio, type Idioma } from '@/content';
import { JsonLd } from '@/components/sitio/JsonLd';
import { Ficha } from '@/components/vion/piezas';
import { PortadaInterior } from './estudio';

/** Gracias (es/en): adonde vuelve el formulario sin JavaScript. Una sola lámina, sobria. */
export function Gracias({ idioma }: { idioma: Idioma }) {
  const p = pagina('gracias', idioma);
  const ui = interfazDe(idioma);
  const t = piezasDe(idioma);
  const g = t.gracias;
  return (
    <>
      <JsonLd id="gracias" idioma={idioma} />
      <article className="pagina" data-pagina="gracias">
        <PortadaInterior
          p={p}
          idioma={idioma}
          clase="portada--gracias"
          fichaTitulo={g.fichaTitulo}
          ficha={
            <Ficha
              filas={[
                { termino: g.recibido, valor: <span className="gracias__ok">{g.recibidoValor}</span> },
                { termino: ui.contacto.whatsapp, valor: <a href={enlaceWhatsapp()} rel="noopener">{ui.llamado.whatsapp}</a> },
                { termino: ui.contacto.correo, valor: <a href={`mailto:${sitio.correo}`}>{sitio.correo}</a> },
              ]}
            />
          }
        />
      </article>
    </>
  );
}
