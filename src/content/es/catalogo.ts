import { PRECIOS, type Catalogo } from '../catalogo';

export const servicios: Catalogo = {
  diagnostico: {
    nombre: 'Diagnóstico de automatización',
    plazo: '2 semanas',
    para: 'Firmas de ingeniería y arquitectura que trabajan con AutoCAD, Civil 3D o Revit.',
    que: 'Revisamos sus flujos de dibujo y modelado, encontramos las tareas repetitivas que más horas consumen y estimamos el ahorro.',
    entregables: [
      'Mapa de flujos CAD/BIM',
      'Lista de tareas automatizables con horas estimadas',
      'Informe con ahorro esperado y hoja de ruta',
    ],
    rango: 'USD 600 a 1.500',
    precio: PRECIOS.diagnostico,
  },
  piloto: {
    nombre: 'Piloto sobre un flujo',
    plazo: '4 a 6 semanas',
    para: 'Firmas que ya tienen claro el flujo que más les duele: láminas, cuantificación, estándares o exportes.',
    que: 'Automatizamos un flujo completo sobre sus propios proyectos y capacitamos al equipo para usarlo.',
    entregables: [
      'Automatización funcionando en un flujo real',
      'Manual corto y capacitación',
      'Medición de horas antes y después',
    ],
    rango: 'USD 2.000 a 5.000',
    precio: PRECIOS.piloto,
  },
  soporte: {
    nombre: 'Mensualidad de soporte',
    plazo: 'Mensual',
    para: 'Firmas que terminaron el piloto y quieren seguir automatizando.',
    que: 'Mantenemos y ajustamos las automatizaciones, sumamos mejoras pequeñas cada mes y damos soporte al equipo.',
    entregables: ['Mantenimiento de las rutinas', 'Mejoras menores mensuales', 'Soporte por correo y llamadas'],
    rango: 'USD 300 a 900 al mes',
    precio: PRECIOS.soporte,
  },
  apps: {
    nombre: 'Apps a la medida con IA',
    plazo: '6 a 12 semanas',
    para: 'Empresas que quieren una app web o móvil propia, con IA integrada.',
    que: 'Diseñamos y construimos apps a la medida con IA: asistentes, extracción de datos y automatización de procesos, del prototipo a producción.',
    entregables: ['Prototipo navegable', 'App en producción', 'Mantenimiento opcional'],
    rango: 'USD 3.000 a 15.000',
    precio: PRECIOS.apps,
  },
};
