import type { IdPagina, Pagina } from '../tipos';
import { apps } from './apps';
import { autocad } from './autocad';
import { blog } from './blog';
import { casos } from './casos';
import { consultoria } from './consultoria';
import { contacto } from './contacto';
import { cursos } from './cursos';
import { gracias } from './gracias';
import { inicio } from './inicio';
import { nosotros } from './nosotros';
import { privacidad } from './privacidad';

export { interfaz } from './interfaz';
export { piezas } from './piezas';
export { servicios } from './catalogo';
export const paginas: Record<IdPagina, Pagina> = { inicio, consultoria, autocad, apps, cursos, casos, nosotros, blog, contacto, privacidad, gracias };
