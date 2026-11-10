import type { IdPagina, Pagina } from '../tipos';
import { apps } from './apps';
import { autocad } from './autocad';
import { casos } from './casos';
import { consultoria } from './consultoria';
import { contacto } from './contacto';
import { gracias } from './gracias';
import { inicio } from './inicio';
import { nosotros } from './nosotros';
import { privacidad } from './privacidad';

export { interfaz } from './interfaz';
export const paginas: Record<IdPagina, Pagina> = { inicio, consultoria, autocad, apps, casos, nosotros, contacto, privacidad, gracias };
