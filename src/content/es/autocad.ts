import { precioDe, visibles } from '../catalogo';
import { P } from '../pendientes';
import { publicarRangos } from '../sitio';
import type { Pagina } from '../tipos';
import { servicios } from './catalogo';

const piloto = servicios.piloto;
const descripcion =
  'Rutinas AutoLISP y plugins a medida para automatizar planos y tareas repetitivas en AutoCAD. Cotice su proyecto con Vion.';

export const autocad: Pagina = {
  id: 'autocad',
  nav: 'AutoCAD',
  titulo: 'Automatización AutoCAD y rutinas AutoLISP | Vion',
  descripcion,
  palabrasClave: [
    'automatización AutoCAD Costa Rica',
    'desarrollo de rutinas AutoLISP para AutoCAD',
    'desarrollo de plugins para AutoCAD a medida',
  ],
  indexar: true,
  etiqueta: `AutoCAD · piloto de ${piloto.plazo}`,
  h1: 'Automatice sus planos con rutinas AutoLISP y plugins a medida',
  acento: 'AutoLISP',
  bajada:
    'Las tareas que su equipo repite en AutoCAD se pueden volver un comando. Lo construimos sobre sus propios dibujos y lo dejamos funcionando. Desarrollo a medida desde Costa Rica.',
  acciones: [
    { texto: 'Solicitar cotización por WhatsApp', destino: { whatsapp: 'Hola, Vion. Quiero cotizar una automatización de AutoCAD.' } },
    { texto: 'Ver cómo se cotiza', destino: { pagina: 'autocad', ancla: 'cotizacion' } },
  ],
  secciones: [
    {
      tipo: 'lista',
      id: 'tareas',
      etiqueta: 'Automatización de AutoCAD',
      titulo: 'Tareas que automatizamos',
      acento: 'automatizamos',
      items: [
        { titulo: 'Láminas', texto: 'Formatos, rótulos, vistas y numeración que se arman igual en cada proyecto.', etiqueta: 'Planos' },
        { titulo: 'Cuantificación', texto: 'Cantidades sacadas del dibujo a Excel, sin copiar y pegar ni contar a ojo.', etiqueta: 'Excel' },
        { titulo: 'Estándares', texto: 'Capas, estilos, bloques y nombres revisados y corregidos con un comando.', etiqueta: 'Calidad' },
        { titulo: 'Exportes', texto: 'PDF, DWG y paquetes de entrega armados de una vez y con el mismo orden.', etiqueta: 'Entregas' },
      ],
    },
    {
      tipo: 'texto',
      id: 'rutinas-autolisp',
      etiqueta: 'Dentro de AutoCAD',
      titulo: 'Desarrollo de rutinas AutoLISP',
      acento: 'AutoLISP',
      parrafos: [
        'Para lo que vive dentro del dibujo: un comando nuevo que hace en segundos lo que antes eran varios pasos.',
        'Una rutina AutoLISP corre en el AutoCAD que su equipo ya usa, sin instalar otro programa. Sirve para tareas acotadas y frecuentes: insertar y llenar bloques, revisar capas, numerar, medir y exportar.',
        'Cada rutina se entrega con su manual corto y se prueba con sus dibujos reales antes de darla por terminada.',
      ],
    },
    {
      tipo: 'texto',
      id: 'plugins',
      etiqueta: 'Cuando una rutina no alcanza',
      titulo: 'Plugins para AutoCAD a medida',
      acento: 'medida',
      parrafos: [
        'Para flujos más largos: leer muchos archivos, cruzar el dibujo con una hoja de cálculo o conectar AutoCAD con otro sistema.',
        'Ahí conviene un plugin o una herramienta aparte que trabaje con sus archivos. La decisión sale del [diagnóstico de automatización](@consultoria#diagnostico): usamos lo más simple que resuelva la tarea.',
        `Tecnologías con las que trabajamos: ${P.tecnologias}`,
      ],
    },
    {
      tipo: 'ficha',
      id: 'ejemplos',
      etiqueta: 'Ejemplos de uso',
      titulo: 'Medido, no prometido',
      acento: 'prometido',
      filas: [
        { termino: 'Ejemplo', valor: 'Diagnóstico sobre un plano de muestra de Autodesk.' },
        { termino: 'Resultado', valor: P.resultadoEjemplo },
        { termino: 'Caso de cliente', valor: P.casoCliente },
      ],
      nota: 'Cada piloto termina con la **medición de horas antes y después**. Esos números, con permiso del cliente, son los que van a aparecer acá y en [los casos de Vion](@casos).',
    },
    {
      tipo: 'texto',
      id: 'cotizacion',
      etiqueta: `${piloto.nombre} · ${piloto.plazo}`,
      titulo: 'Cómo se cotiza',
      acento: 'cotiza',
      parrafos: [
        `${piloto.que} Es para ${piloto.para.charAt(0).toLowerCase()}${piloto.para.slice(1)}`,
        ...(publicarRangos
          ? [`**Inversión orientativa: ${piloto.rango}.** Se confirma después del diagnóstico, cuando el flujo y el alcance están claros.`]
          : []),
        'Si además de AutoCAD necesita ordenar estándares BIM o ISO 19650, vea [la consultoría BIM y AutoCAD](@consultoria).',
      ],
    },
    {
      tipo: 'preguntas',
      id: 'preguntas',
      titulo: 'Preguntas sobre la automatización de AutoCAD',
      acento: 'AutoCAD',
      preguntas: visibles([
        {
          p: '¿Hay que instalar otro programa para usar una rutina AutoLISP?',
          r: 'No. Una rutina AutoLISP corre en el AutoCAD que su equipo ya usa y se ejecuta como un comando más.',
        },
        {
          p: '¿Qué tareas de AutoCAD se pueden automatizar?',
          r: 'Las que se repiten igual en cada proyecto: armar láminas, sacar cantidades a Excel, revisar capas, estilos, bloques y nombres, y exportar PDF, DWG y paquetes de entrega.',
        },
        {
          p: '¿Cuándo conviene un plugin en vez de una rutina?',
          r: 'Cuando el flujo es más largo: leer muchos archivos, cruzar el dibujo con una hoja de cálculo o conectar AutoCAD con otro sistema. La decisión sale del diagnóstico y siempre se usa lo más simple que resuelva la tarea.',
        },
        {
          p: '¿Cuánto cuesta y cuánto tarda automatizar un flujo?',
          r: `Un piloto sobre un flujo toma de ${piloto.plazo} y, como referencia, va de ${piloto.rango}. El monto se confirma después del diagnóstico.`,
          precio: true,
        },
        {
          p: '¿Cómo se sabe si la automatización valió la pena?',
          r: 'Cada piloto termina con la medición de horas antes y después sobre sus propios proyectos. Con esos números se decide si seguir.',
        },
      ]),
    },
  ],
  llamado: {
    titulo: '¿Qué hace su equipo a mano en AutoCAD?',
    acento: 'AutoCAD',
    texto: 'Con una descripción corta de la tarea y del software alcanza para empezar. Le respondemos con los siguientes pasos.',
    mensajeWhatsapp: 'Hola, Vion. Quiero cotizar una automatización de AutoCAD.',
  },
  og: { titulo: 'Automatización de AutoCAD', acento: 'AutoCAD' },
  esquema: {
    tipo: 'WebPage',
    servicio: {
      nombre: 'Automatización de AutoCAD y rutinas AutoLISP',
      tipoDeServicio: 'Automatización de AutoCAD',
      descripcion,
      precio: precioDe(piloto),
      oferta: piloto.nombre,
    },
  },
};
