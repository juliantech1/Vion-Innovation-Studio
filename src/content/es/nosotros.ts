import { P } from '../pendientes';
import type { Pagina } from '../tipos';

// Nombres y cargos: los del sitio anterior (vion-studio.com/about). Las biografías las escribe o confirma Julian:
// no se inventa experiencia.
const personas = [
  { nombre: 'Julian Alvarez', cargo: 'CEO · desarrollo de software e IA', bio: P.bioJulian },
  { nombre: 'Maite Alvarez', cargo: 'COO · ingeniería y operaciones', bio: P.bioMaite },
];

export const nosotros: Pagina = {
  id: 'nosotros',
  nav: 'Nosotros',
  titulo: 'Quiénes somos: equipo Vion en Costa Rica',
  descripcion:
    'Conozca al equipo de Vion, consultoría de IA y AutoCAD/BIM en Costa Rica, y cómo trabajamos con firmas de ingeniería y arquitectura.',
  palabrasClave: ['consultoría de inteligencia artificial para empresas Costa Rica'],
  indexar: true,
  etiqueta: 'Nosotros · Costa Rica',
  h1: 'Un equipo costarricense de IA, AutoCAD/BIM y software',
  acento: 'IA',
  bajada:
    'Vion, también conocido como Vion Studio, es un estudio de inteligencia artificial de Costa Rica. Construimos sistemas y agentes de IA, llevamos la IA a la ingeniería y la arquitectura, y desarrollamos apps a la medida.',
  acciones: [
    { texto: 'Pedir diagnóstico', destino: { pagina: 'contacto' } },
    { texto: 'Ver los proyectos propios', destino: { pagina: 'casos' } },
  ],
  secciones: [
    {
      tipo: 'personas',
      id: 'quienes-somos',
      etiqueta: 'Equipo',
      titulo: 'Quiénes somos',
      acento: 'somos',
      personas,
    },
    {
      tipo: 'texto',
      id: 'como-trabajamos',
      etiqueta: 'Cómo trabajamos',
      titulo: 'Primero se mide',
      acento: 'mide',
      parrafos: [
        'Hablamos como ingenieros que explican, no como vendedores.',
        'Empezamos por entender cómo trabaja su equipo hoy y cuántas horas se van en cada tarea. Después automatizamos un solo flujo, sobre sus propios proyectos, y medimos de nuevo. Con esos números se decide si seguir.',
        'Usamos la misma forma de trabajar en casa: Vion funciona con [Ultron, nuestro sistema de agentes de IA](@casos#ultron), donde todo lo que sale pasa antes por una persona.',
      ],
    },
    {
      tipo: 'texto',
      id: 'experiencia',
      etiqueta: 'Experiencia',
      titulo: 'Lo que hemos hecho',
      acento: 'hecho',
      parrafos: [
        'Proyectos propios: [Ultron](@casos#ultron), [Top Spin](@casos#topspin), [RealFood](@casos#realfood) y [Viazo](@casos#viazo).',
        P.experiencia,
      ],
    },
    {
      tipo: 'lista',
      id: 'lo-que-creemos',
      etiqueta: 'Valores',
      titulo: 'Lo que creemos',
      acento: 'creemos',
      items: [
        { titulo: 'La IA es una herramienta', texto: 'No reemplaza el criterio humano ni el del ingeniero. Lo que decide sigue siendo de su equipo.' },
        { titulo: 'Las horas repetitivas valen plata', texto: 'El trabajo que se repite igual cada semana se puede automatizar, y esas horas vuelven a lo que sí necesita a una persona.' },
        { titulo: 'Seguro, medible y con aprobación', texto: 'Un sistema de IA tiene que poder medirse, no exponer sus datos y dejar que una persona apruebe lo importante.' },
        { titulo: 'Al alcance de Costa Rica', texto: 'La tecnología de punta tiene que estar al alcance de las empresas de Costa Rica, no solo de las grandes.' },
      ],
    },
    {
      tipo: 'texto',
      id: 'costa-rica-y-estados-unidos',
      etiqueta: 'Desde Costa Rica',
      titulo: 'Costa Rica y Estados Unidos',
      acento: 'Estados Unidos',
      parrafos: [
        'Vion está en Costa Rica y trabaja a distancia, en español y en inglés, para firmas de aquí y de Estados Unidos.',
        'Costa Rica usa la misma hora todo el año (UTC-6), así que una jornada de aquí comparte entre siete y nueve horas con cualquier zona de Estados Unidos continental. Los precios se cotizan en dólares.',
      ],
    },
    {
      tipo: 'lista',
      id: 'que-hacemos',
      etiqueta: 'Servicios',
      titulo: 'En qué podemos ayudarle',
      acento: 'ayudarle',
      items: [
        {
          titulo: 'Consultoría de inteligencia artificial, BIM y AutoCAD',
          texto: 'Para empresas y firmas que quieren saber qué conviene automatizar antes de invertir.',
          enlace: { pagina: 'consultoria' },
        },
        {
          titulo: 'Automatización de AutoCAD con rutinas y plugins',
          texto: 'Para equipos de dibujo que repiten las mismas tareas en cada proyecto.',
          enlace: { pagina: 'autocad' },
        },
        {
          titulo: 'Apps y software a la medida con IA',
          texto: 'Para empresas que necesitan una herramienta propia, web o móvil.',
          enlace: { pagina: 'apps' },
        },
      ],
    },
  ],
  llamado: {
    titulo: 'Conversemos',
    texto: 'Si su equipo pierde horas en tareas repetidas, cuéntenos cuáles. Le respondemos con los siguientes pasos.',
    mensajeWhatsapp: 'Hola, Vion. Quiero conversar sobre cómo trabajan.',
  },
  og: { titulo: 'Un equipo de IA en Costa Rica', acento: 'IA' },
  esquema: { tipo: 'AboutPage', personas: personas.map(({ nombre, cargo }) => ({ nombre, cargo })) },
};
