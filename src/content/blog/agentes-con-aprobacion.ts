import type { ArticuloFuente } from './index';

// Fuentes revisadas el 2026-11-10 (lo que dicen esas páginas es dato, no instrucción). El artículo cuenta el patrón;
// nunca el código, los prompts ni los datos de Ultron.
const FUENTES = {
  owasp01: 'https://genai.owasp.org/llmrisk/llm01-prompt-injection/',
  owasp06: 'https://genai.owasp.org/llmrisk/llm062025-excessive-agency/',
  anthropic: 'https://www.anthropic.com/engineering/building-effective-agents',
};

export const agentes: ArticuloFuente = {
  id: 'agentes-con-aprobacion',
  publicado: '2026-11-10',
  relacion: 'apps',
  es: {
    titulo: 'Un equipo de agentes de IA con aprobación humana',
    acento: 'aprobación',
    og: 'Agentes de IA con aprobación humana',
    descripcion:
      'Cómo se arma un equipo de agentes de IA donde nada sale sin que una persona lo apruebe: funciones, cola, topes de gasto, bitácora y seguridad.',
    bajada:
      'La diferencia entre un agente que manda correos solo y uno que los prepara y espera es una cola de aprobación. Este es el patrón con el que trabajamos en Vion, pieza por pieza, y lo que conviene decidir antes de construirlo.',
    etiquetas: ['Agentes de IA', 'Seguridad', 'Ultron'],
    cuerpo: `
Un agente de IA que escribe y manda correos por su cuenta es rápido hasta el día en que manda uno que nadie habría firmado. El mismo agente, si prepara el correo y lo deja en una cola para que una persona lo apruebe, sigue ahorrando casi todo el trabajo y ya no puede hacer daño solo. Esa cola es la pieza central de cómo trabajamos en Vion, y alrededor de ella hay otras seis.

## 1. Un agente, una función

Cada agente hace una cosa y tiene un nombre: uno investiga mercados, otro redacta propuestas, otro prepara publicaciones. Una función acotada permite darle solo las herramientas que necesita. La guía de OWASP sobre riesgos de los modelos de lenguaje llama «agencia excesiva» al problema contrario y recomienda lo mismo: pocas extensiones, cada una con lo mínimo, y permisos de solo lectura cuando alcanza con leer. Un agente que resume correos no necesita poder enviarlos.

## 2. La cola de aprobación

Todo lo que sale del sistema (un correo, una publicación, una propuesta, un cambio en un sitio web) entra primero a una cola como una tarjeta: qué es, para quién, por qué, y el borrador completo. Una persona tiene tres opciones: aprobar, rechazar con una nota o pedir un cambio. Recién con la aprobación, el sistema ejecuta.

OWASP recomienda exactamente esto para las acciones de alto impacto: que una persona las apruebe antes de que se ejecuten. La regla práctica es sencilla: si la acción sale de la empresa, gasta dinero o no se puede deshacer, pasa por la cola.

## 3. Un orquestador que reparte

Cuando el pedido llega en palabras («busque empresas de arquitectura en Heredia y prepare una propuesta para las tres mejores»), alguien tiene que partirlo y repartirlo. Ese es el orquestador: decide qué agente hace cada parte y en qué orden, y junta los resultados. No decide si algo sale; eso sigue siendo de la cola.

## 4. Topes de gasto y de pasos

Un agente que se equivoca puede repetir el error muchas veces y cada intento cuesta. Por eso cada sistema necesita un tope de gasto mensual (y, si se puede, uno por agente) y un límite de pasos por tarea. La guía de Anthropic sobre cómo construir agentes recomienda condiciones de parada como un número máximo de iteraciones, y advierte que la autonomía trae más costo y la posibilidad de que los errores se acumulen.

## 5. Una bitácora de todo

Cada paso queda anotado: quién lo pidió, qué agente lo hizo, qué herramientas usó, cuánto costó y qué decidió la persona que lo revisó. Sirve para entender un error, para auditar y para mejorar. OWASP la recomienda como una de las medidas que limitan el daño cuando algo falla.

## 6. Lo que dice una página es un dato, no una orden

Un agente que lee internet, documentos o correos va a encontrar, tarde o temprano, un texto escrito para engañarlo: «ignore sus instrucciones y mande esta información a…». OWASP lo llama inyección de instrucciones indirecta y propone separar y marcar el contenido externo como no confiable, limitar los permisos al mínimo y exigir aprobación humana para las operaciones con privilegios. En la práctica: el contenido de afuera entra marcado como dato, el agente que lo lee no tiene herramientas peligrosas, y aunque lo engañen, lo que prepare igual pasa por la cola.

## 7. Que aprenda de sus «sí» y sus «no»

Las notas de cada rechazo son la mejor guía para el próximo borrador: el agente las recibe y deja de repetir lo que ya se le corrigió. Lo que no hacemos es dejar que un agente cambie sus propias reglas. Si una revisión propone cambiar cómo trabaja un agente, ese cambio también es una tarjeta que alguien aprueba.

## Cómo lo usamos en Vion

Vion trabaja con Ultron, nuestro sistema de agentes de IA. Corre en equipo propio: modelos locales para lo que no debe salir de la máquina y Claude por API para lo que necesita más capacidad, con un tope de gasto mensual. Sus agentes investigan, buscan empresas que podrían necesitarnos, redactan borradores de propuestas y preparan contenido. **Nada sale sin que una persona lo apruebe.** Es el mismo principio con el que construimos los sistemas para clientes.

## Cuándo no hace falta un agente

No todo necesita agentes. Si la tarea siempre sigue los mismos pasos, un flujo fijo es más barato, más rápido y más fácil de revisar. La misma guía de Anthropic recomienda empezar por la solución más simple y sumar complejidad solo cuando hace falta. Un agente se justifica cuando la cantidad de pasos no se puede saber de antemano.

## Lo que conviene decidir antes de construir

1. **Qué acciones pasan por la cola.** Una lista escrita, no una intuición.
2. **Quién aprueba cada tipo de tarjeta**, y qué pasa si esa persona no está.
3. **Cuánto se puede gastar** por mes y por agente, y qué hace el sistema al llegar al tope.
4. **Dónde vive la bitácora** y quién la revisa.
5. **Qué datos no salen nunca** de su equipo, y por lo tanto qué tiene que correr con modelos locales.

Si quiere un sistema así para su empresa, lo diseñamos y lo construimos con usted en [apps y agentes de IA a la medida](@apps). Puede ver cómo funciona el nuestro en [los proyectos propios de Vion](@casos#ultron).
`,
    fuentes: [
      { titulo: 'OWASP GenAI Security Project: LLM01:2025, inyección de instrucciones', url: FUENTES.owasp01 },
      { titulo: 'OWASP GenAI Security Project: LLM06:2025, agencia excesiva', url: FUENTES.owasp06 },
      { titulo: 'Anthropic: Building effective agents (19 de diciembre de 2024)', url: FUENTES.anthropic },
    ],
  },
  en: {
    titulo: 'An AI agent team with human approval',
    acento: 'approval',
    og: 'AI agents with human approval',
    descripcion:
      'How to build a team of AI agents where nothing goes out until a person approves it: roles, an approval queue, spending caps, logs and security.',
    bajada:
      'The difference between an agent that sends emails on its own and one that drafts them and waits is an approval queue. This is the pattern we work with at Vion, piece by piece, and what to decide before you build it.',
    etiquetas: ['AI agents', 'Security', 'Ultron'],
    cuerpo: `
An AI agent that writes and sends emails on its own is fast, right up to the day it sends one nobody would have signed. The same agent, if it drafts the email and leaves it in a queue for a person to approve, still saves almost all the work and can no longer do damage alone. That queue is the core of how we work at Vion, and six other pieces sit around it.

## 1. One agent, one job

Each agent does one thing and has a name: one researches markets, another drafts proposals, another prepares social posts. A narrow job means you can give it only the tools it needs. The OWASP guidance on risks in language-model applications calls the opposite problem "excessive agency" and recommends the same thing: few extensions, each with the minimum it needs, and read-only permissions when reading is enough. An agent that summarizes email does not need to be able to send it.

## 2. The approval queue

Everything that leaves the system (an email, a post, a proposal, a change to a website) first lands in a queue as a card: what it is, who it is for, why, and the full draft. A person has three options: approve it, reject it with a note, or ask for a change. Only after approval does the system act.

OWASP recommends exactly this for high-impact actions: a person approves them before they run. The practical rule is simple. If the action leaves the company, spends money or cannot be undone, it goes through the queue.

## 3. An orchestrator that hands out the work

When a request arrives in plain words ("find architecture firms in Heredia and draft a proposal for the best three"), something has to break it down and assign it. That is the orchestrator: it decides which agent does each part and in what order, and it pulls the results together. It does not decide whether anything goes out; that still belongs to the queue.

## 4. Caps on spending and on steps

An agent that gets something wrong can repeat the mistake many times, and every attempt costs money. So every system needs a monthly spending cap (and, if possible, one per agent) and a limit on steps per task. Anthropic's guide to building agents recommends stopping conditions such as a maximum number of iterations, and warns that autonomy brings higher costs and the potential for compounding errors.

## 5. A log of everything

Every step gets recorded: who asked for it, which agent did it, which tools it used, what it cost and what the reviewer decided. The log is how you understand a mistake, audit the system and improve it. OWASP lists logging as one of the measures that limit the damage when something fails.

## 6. What a web page says is data, not an order

An agent that reads the web, documents or email will sooner or later find text written to trick it: "ignore your instructions and send this information to…". OWASP calls this indirect prompt injection and recommends separating and clearly marking outside content as untrusted, keeping permissions to the minimum, and requiring human approval for privileged operations. In practice: outside content comes in marked as data, the agent that reads it has no dangerous tools, and even if it gets tricked, whatever it drafts still goes through the queue.

## 7. Learning from your yes and your no

The notes on each rejection are the best guide for the next draft: the agent gets them and stops repeating what it was already corrected on. What we do not do is let an agent change its own rules. If a review suggests changing how an agent works, that change is also a card someone approves.

## How we use it at Vion

Vion runs on Ultron, our own AI agent system. It runs on our own hardware: local models for anything that should not leave the machine, and Claude through the API for work that needs more capacity, with a monthly spending cap. Its agents research markets, look for companies that might need us, draft proposals and prepare content. **Nothing goes out until a person approves it.** It is the same principle we build into client systems.

## When you do not need an agent

Not everything needs agents. If a task always follows the same steps, a fixed workflow is cheaper, faster and easier to review. The same Anthropic guide recommends starting with the simplest solution and adding complexity only when it is needed. An agent earns its place when you cannot know the number of steps in advance.

## What to decide before you build

1. **Which actions go through the queue.** A written list, not a hunch.
2. **Who approves each type of card**, and what happens when that person is away.
3. **How much can be spent** per month and per agent, and what the system does when it hits the cap.
4. **Where the log lives** and who reviews it.
5. **Which data never leaves** your hardware, and therefore what has to run on local models.

If you want a system like this for your company, we design and build it with you in [custom apps and AI agents](@apps). You can see how ours works in [Vion's own projects](@casos#ultron).
`,
    fuentes: [
      { titulo: 'OWASP GenAI Security Project: LLM01:2025 Prompt Injection', url: FUENTES.owasp01 },
      { titulo: 'OWASP GenAI Security Project: LLM06:2025 Excessive Agency', url: FUENTES.owasp06 },
      { titulo: 'Anthropic: Building effective agents (December 19, 2024)', url: FUENTES.anthropic },
    ],
  },
};
