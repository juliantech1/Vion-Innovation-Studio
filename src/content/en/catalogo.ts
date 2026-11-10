import { PRECIOS, type Catalogo } from '../catalogo';

export const servicios: Catalogo = {
  diagnostico: {
    nombre: 'Automation assessment',
    plazo: '2 weeks',
    para: 'Engineering and architecture firms that work in AutoCAD, Civil 3D or Revit.',
    que: 'We review your drafting and modeling workflows, find the repetitive tasks that take the most hours and estimate the savings.',
    entregables: [
      'Map of your CAD/BIM workflows',
      'List of tasks that can be automated, with estimated hours',
      'Report with expected savings and a roadmap',
    ],
    rango: 'USD 600 to 1,500',
    precio: PRECIOS.diagnostico,
  },
  piloto: {
    nombre: 'Pilot on one workflow',
    plazo: '4 to 6 weeks',
    para: 'Firms that already know which workflow hurts the most: sheets, quantity takeoffs, standards or exports.',
    que: 'We automate one complete workflow on your own projects and train your team to use it.',
    entregables: [
      'Automation running on a real workflow',
      'Short manual and training',
      'Hours measured before and after',
    ],
    rango: 'USD 2,000 to 5,000',
    precio: PRECIOS.piloto,
  },
  soporte: {
    nombre: 'Monthly support',
    plazo: 'Monthly',
    para: 'Firms that finished the pilot and want to keep automating.',
    que: 'We maintain and adjust the automations, add small improvements every month and support your team.',
    entregables: ['Maintenance of the routines', 'Minor improvements every month', 'Support by email and calls'],
    rango: 'USD 300 to 900 per month',
    precio: PRECIOS.soporte,
  },
  apps: {
    nombre: 'Custom apps with AI',
    plazo: '6 to 12 weeks',
    para: 'Companies that want their own web or mobile app, with AI built in.',
    que: 'We design and build custom apps with AI: assistants, data extraction and process automation, from prototype to production.',
    entregables: ['Clickable prototype', 'App in production', 'Optional maintenance'],
    rango: 'USD 3,000 to 15,000',
    precio: PRECIOS.apps,
  },
};
