import { pasoDe } from '../catalogo';
import type { Pagina } from '../tipos';
import { servicios } from './catalogo';

export const inicio: Pagina = {
  id: 'inicio',
  nav: 'Inicio',
  // El plan de Feme decía «Vion: …». Search Console muestra que la búsqueda real de la marca es «vion studio».
  titulo: 'Vion Studio: consultoría IA, AutoCAD/BIM y apps a medida',
  descripcion:
    'Consultoría de IA, automatización de AutoCAD/BIM y apps a la medida para ingeniería y arquitectura en Costa Rica. Pida su diagnóstico.',
  palabrasClave: ['consultoría BIM Costa Rica', 'desarrollo de software con inteligencia artificial Costa Rica'],
  indexar: true,
  etiqueta: 'Vion · estudio de IA · Costa Rica',
  h1: 'IA, AutoCAD/BIM y apps a medida para ingeniería y arquitectura',
  acento: 'AutoCAD/BIM',
  bajada:
    'Vion construye sistemas y agentes de IA a la medida, automatiza AutoCAD, Civil 3D y Revit, y desarrolla apps para empresas de Costa Rica.',
  acciones: [
    { texto: 'Pedir diagnóstico por WhatsApp', destino: { whatsapp: 'Hola, Vion. Quiero pedir un diagnóstico de automatización.' } },
    { texto: 'Ver los servicios', destino: { pagina: 'inicio', ancla: 'servicios' } },
  ],
  secciones: [
    {
      tipo: 'lista',
      id: 'que-resolvemos',
      etiqueta: 'Qué resolvemos',
      titulo: 'Lo que se repite, se automatiza',
      acento: 'automatiza',
      intro:
        'Cada semana, horas de su equipo se van en tareas que se hacen igual que la semana pasada. Ahí empieza nuestro trabajo.',
      items: [
        { titulo: 'Láminas y planos que se arman a mano en cada proyecto.', texto: 'Formatos, rótulos, vistas y numeración que se repiten.' },
        { titulo: 'Cantidades que pasan del dibujo a Excel copiando y pegando.', texto: 'Cuantificaciones que dependen de contar a ojo.' },
        { titulo: 'Estándares que cada quien aplica distinto.', texto: 'Capas, nombres de archivo y entregables sin un mismo orden.' },
        { titulo: 'Exportes y entregas que se repiten.', texto: 'PDF, DWG y paquetes para el cliente, armados a mano cada vez.' },
        {
          titulo: 'Procesos de oficina que alguien ordena a mano.',
          texto: 'Correos, reportes y datos que una app o un agente de IA puede preparar para que una persona los apruebe.',
        },
      ],
    },
    {
      tipo: 'lista',
      id: 'servicios',
      etiqueta: 'Servicios',
      titulo: 'Tres líneas de trabajo',
      acento: 'trabajo',
      items: [
        {
          titulo: 'Consultoría IA + AutoCAD/BIM',
          texto:
            'Consultoría BIM para firmas de Costa Rica: diagnóstico de sus flujos de dibujo y modelado, estándares BIM con ISO 19650 y un plan para automatizar lo que más horas consume.',
          etiqueta: 'Diagnóstico · 2 semanas',
          enlace: { pagina: 'consultoria' },
        },
        {
          titulo: 'Automatización de AutoCAD',
          texto:
            'Rutinas AutoLISP y plugins a medida para láminas, cuantificación, estándares y exportes, sobre sus propios proyectos.',
          etiqueta: 'Piloto · 4 a 6 semanas',
          enlace: { pagina: 'autocad' },
        },
        {
          titulo: 'Apps y agentes de IA a medida',
          texto:
            'Desarrollo de software con inteligencia artificial: apps web y móviles con IA integrada, y sistemas de agentes que preparan el trabajo para que una persona lo apruebe.',
          etiqueta: 'Proyecto · 6 a 12 semanas',
          enlace: { pagina: 'apps' },
        },
      ],
    },
    {
      tipo: 'pasos',
      id: 'como-se-empieza',
      etiqueta: 'Proceso',
      titulo: 'Cómo se empieza',
      acento: 'empieza',
      intro: 'Primero se mide, después se automatiza un solo flujo y recién entonces se decide si seguir.',
      pasos: [pasoDe(servicios.diagnostico), pasoDe(servicios.piloto), pasoDe(servicios.soporte)],
      nota: 'El detalle de cada paso está en [la consultoría de IA, AutoCAD y BIM](@consultoria#proceso).',
    },
    {
      tipo: 'texto',
      id: 'ultron',
      etiqueta: 'Nuestro propio caso',
      titulo: 'Ultron: una oficina de agentes de IA',
      acento: 'agentes',
      parrafos: [
        'Antes de ofrecerlo, lo usamos. Ultron es el sistema de agentes de IA con el que trabaja Vion.',
        'Corre en equipo propio, sin servidores alquilados: modelos locales con Ollama para lo que no debe salir de la máquina y Claude por API para lo que necesita más capacidad, con un tope de gasto mensual. Los datos quedan en casa y el costo, bajo control.',
        'Sus agentes investigan mercados, buscan empresas que podrían necesitarnos, redactan borradores de propuestas y preparan contenido. **Nada sale sin que una persona lo apruebe.** Es el mismo principio con el que construimos los sistemas para clientes.',
        '[Ver Ultron y los demás proyectos propios](@casos) o [conocer al equipo de Vion](@nosotros).',
      ],
    },
    {
      tipo: 'texto',
      id: 'como-trabajamos',
      etiqueta: 'A distancia, desde Costa Rica',
      titulo: 'Para firmas de Costa Rica y de Estados Unidos',
      acento: 'Estados Unidos',
      parrafos: [
        'Trabajamos a distancia, en español y en inglés. Costa Rica está en UTC-6 todo el año, así que las reuniones caen en horario laboral de Centroamérica y de Estados Unidos, y los precios se cotizan en dólares.',
        'El primer paso es siempre el mismo y es chico: [un diagnóstico de dos semanas](@consultoria#diagnostico) antes de cualquier compromiso mayor.',
      ],
    },
    {
      tipo: 'texto',
      id: 'cursos',
      etiqueta: 'Cursos · gratis',
      titulo: 'Cursos de IA, gratis',
      acento: 'gratis',
      parrafos: [
        'Vamos a publicar cursos gratis, con videos y material, sobre lo que ya hacemos: agentes de IA, motion y 3D, y AutoCAD para ingeniería y arquitectura. Los cinco primeros están en producción y todavía no tienen fecha.',
      ],
    },
    {
      tipo: 'texto',
      id: 'blog',
      etiqueta: 'Blog',
      titulo: 'Lo último del blog',
      acento: 'blog',
      parrafos: ['Artículos sobre ISO 19650, AutoCAD y agentes de IA, escritos desde el trabajo de todos los días y con las fuentes al pie.'],
    },
  ],
  llamado: {
    titulo: '¿Qué tarea le quita más horas a su equipo?',
    acento: 'quita',
    texto:
      'Cuéntenos cómo trabajan hoy. Le respondemos con los siguientes pasos y, si tiene sentido, empezamos por un diagnóstico de dos semanas.',
    mensajeWhatsapp: 'Hola, Vion. Quiero pedir un diagnóstico de automatización.',
  },
  og: { titulo: 'IA, AutoCAD/BIM y apps a medida', acento: 'AutoCAD/BIM' },
  esquema: { tipo: 'WebPage' },
};
