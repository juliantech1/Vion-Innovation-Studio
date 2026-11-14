// D2 · Su sitio web con Claude Code: la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción del final,
// desde el storyboard (docs/planes/cursos/D2-sitio-claude-code.md de la aldea, 2026-11-10). Las lecciones están en lecciones.ts.
import type { CursoTexto } from '../../tipos';

export const curso: CursoTexto = {
  "es": {
    "corto": "Sitio web",
    "titulo": "Su sitio web con Claude Code (y nada se publica sin su OK)",
    "subtitulo": "Next.js, GitHub y Vercel, con vista previa y su aprobación",
    "tituloSeo": "Curso gratis: su sitio web con Claude Code | Vion",
    "descripcion": "Curso gratis de Vion: publique su sitio con Claude Code, GitHub y Vercel, y que ningún cambio salga sin su aprobación.",
    "paraQuien": "Dueños de negocio, profesionales y agencias chicas que quieren un sitio propio y cambiarlo sin depender de nadie, pero sin que una IA publique algo que no vieron.",
    "seLleva": "Su sitio publicado (Next.js en GitHub y Vercel) y el circuito: le pide un cambio a Claude Code en palabras, Claude lo hace en una rama, Vercel arma una vista previa, usted la mira y solo cuando usted aprueba se publica. Con la rama principal protegida, controles automáticos (build, SEO y Lighthouse), la forma de volver atrás y el kit.",
    "herramientas": "Claude Code (plan pago de Anthropic, desde USD 20 al mes); GitHub gratis (proteger un repositorio privado pide GitHub Pro); Vercel Hobby gratis solo para uso personal, Pro USD 20 al mes para un negocio.",
    "explica": "Un **sitio web** es su vitrina en internet. En este curso usted hace el suyo **pidiéndoselo en palabras** a Claude Code (el asistente de Claude que trabaja en su computadora) y lo publica con dos servicios gratis para empezar: **GitHub**, donde se guarda el sitio con todas sus versiones, y **Vercel**, que lo pone en internet.\n\nLa idea central del curso es una regla: **nada se publica sin que usted lo vea y diga que sí**. Cada cambio se hace aparte, en una copia del sitio llamada **rama**; Vercel le muestra cómo queda en una **vista previa**, y solo cuando usted aprueba pasa al sitio de verdad. Si algo sale mal, se vuelve atrás con un botón.\n\n### Al terminar el curso va a poder\n\n- tener su sitio de cuatro páginas publicado en internet, hecho por Claude con sus datos;\n- pedir cambios en palabras y verlos en una vista previa, también en el celular;\n- proteger su sitio para que nadie publique sin su aprobación, ni Claude ni usted por error;\n- aprobar y publicar con un botón, y deshacer un cambio si hace falta;\n- sumar controles automáticos que revisan cada cambio antes de que usted lo mire.\n\n### Lo que necesita\n\nUna computadora con Windows, Mac o Linux, una cuenta de Claude con plan pago (Pro, desde USD 20 al mes) y cuentas gratis de GitHub y Vercel. No hace falta saber programar: los comandos se copian de cada lámina y el código lo escribe Claude.",
    "ficha": {
      "requisitos": "Windows 10 (1809) o más nuevo, macOS 13 o más nuevo, o Ubuntu 20.04 o más nuevo; 4 GB de RAM para Claude Code (8 recomendados); conexión a internet; un celular para mirar las vistas previas.",
      "duracion": "8 lecciones, 57 láminas con videos cortos, más el tráiler.",
      "costo": "Claude Code pide un plan pago (desde USD 20 al mes). GitHub es gratis, pero proteger la rama de un repositorio privado pide GitHub Pro. Vercel Hobby es gratis solo para uso personal, no comercial: el sitio de un negocio pide Vercel Pro (USD 20 al mes). El dominio, lo que cobre su registrador."
    },
    "costos": [
      {
        "pieza": "Claude Code",
        "costo": "Pago. Pro USD 20 al mes (USD 17 pagando el año: USD 200), Max USD 100, Ultra USD 200. El plan gratis no lo incluye",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "GitHub",
        "costo": "Free, USD 0. Las reglas de rama (protected branches y rulesets) con Free valen solo en repositorios públicos. Para un repositorio privado hace falta GitHub Pro (la documentación lo confirma: «Protected branches» en privados) o Team. El precio de Pro (USD 4 al mes) no aparece hoy en github.com/pricing: lo dan fuentes secundarias; compruébelo al contratar",
        "fuente": "[docs.github.com: los planes de GitHub](https://docs.github.com/en/get-started/learning-about-github/githubs-plans), [github.com/pricing](https://github.com/pricing)"
      },
      {
        "pieza": "GitHub Actions (lección 6)",
        "costo": "Gratis en repositorios públicos. En privados, Free incluye USD 12 al mes de cómputo y Pro USD 18 (≈ 2.000 y 3.000 minutos de Linux; la cuenta es nuestra, no de GitHub)",
        "fuente": "[docs.github.com: facturación de GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions)"
      },
      {
        "pieza": "Vercel",
        "costo": "Hobby, USD 0, «para uso personal, no comercial»: sirve para practicar y para un sitio personal. El sitio de un negocio pide Pro: USD 20 al mes por desarrollador (con USD 20 de uso incluido). La protección con contraseña de las vistas previas es solo de Pro (USD 20 al mes por proyecto); la protección con cuenta de Vercel viene gratis en todos los planes",
        "fuente": "[vercel.com/pricing](https://vercel.com/pricing), [vercel.com/docs/deployment-protection](https://vercel.com/docs/deployment-protection)"
      },
      {
        "pieza": "Dominio",
        "costo": "Lo que cobre su registrador (no lo vende el curso)"
      },
      {
        "pieza": "Node.js 26.13.0 LTS, Git, GitHub CLI, Next.js, Lighthouse",
        "costo": "Gratis",
        "fuente": "nodejs.org, git-scm.com, cli.github.com, npm"
      }
    ],
    "costosFecha": "2026-11-10",
    "puesta": {
      "leccion": 0,
      "texto": "Todo se instala en la lección 0, en este orden:\n\n1. **Cuenta de Claude** Pro o superior ([claude.com/pricing](https://claude.com/pricing)). Se comprueba con el plan en Ajustes.\n2. **Git** (Git para Windows 2.56.0). Windows: `winget install --id Git.Git -e`; Mac: `xcode-select --install`; Linux: `sudo apt install git`. Se comprueba con `git --version`.\n3. **Node.js 26.13.0 LTS**. Windows: `winget install --id OpenJS.NodeJS.LTS -e` o el .msi de nodejs.org; Mac: el .pkg LTS de nodejs.org; Linux: las instrucciones de nodejs.org/en/download. Se comprueba con `node -v` (v26) y `npm -v`.\n4. **Claude Code**. Windows, en PowerShell: `irm https://claude.ai/install.ps1 | iex`; Mac y Linux: `curl -fsSL https://claude.ai/install.sh | bash`. En una terminal nueva: `claude --version`, `claude doctor` y `claude` para entrar.\n5. **Cuenta de GitHub** con verificación en dos pasos (Settings → Password and authentication).\n6. **GitHub CLI** (`gh` 2.103.3). Windows: `winget install --id GitHub.cli -e`; Mac: `brew install gh`; Linux: las instrucciones de cli.github.com. Se comprueba con `gh --version`.\n7. **Conectar `gh` y Git a su cuenta**: `gh auth login` (GitHub.com, HTTPS, navegador) y los dos `git config --global` con su nombre y el correo noreply de GitHub. Se comprueba con `gh auth status` («Logged in»).\n8. **Cuenta de Vercel**: Continue with GitHub, y a la app de Vercel en GitHub, «Only select repositories».\n9. **La carpeta del curso** con el kit: `Documentos\\sitio-curso` en Windows, `~/sitio-curso` en Mac y Linux.\n\nLa CLI de Vercel no hace falta. La prueba final: Claude Code, en la carpeta del kit, responde con las versiones de git, node y gh, y su usuario de GitHub."
    },
    "recursos": [
      {
        "nombre": "Next.js 16.4.6",
        "url": "https://nextjs.org",
        "que": "El marco del sitio: páginas, rutas, metadatos e imágenes. Se crea con `create-next-app@16.4.6`.",
        "licencia": "MIT",
        "revision": "En uso en vion-studio.com (16.1.6). Se instala con versión fija y `npm ci` con el lockfile.",
        "lecciones": "1"
      },
      {
        "nombre": "GitHub CLI (gh) 2.103.3",
        "url": "https://cli.github.com",
        "que": "Crear el repositorio, abrir el pull request y ver los controles, desde la terminal.",
        "licencia": "MIT",
        "revision": "Oficial de GitHub. Claude la usa con su sesión: por eso la regla de la rama (lección 2) es la pared.",
        "lecciones": "0, 1, 4"
      },
      {
        "nombre": "Integración de Vercel con GitHub",
        "url": "https://vercel.com",
        "que": "Una vista previa por rama y por pull request, con el enlace comentado en el pull request; `main` va a producción.",
        "licencia": "Servicio",
        "revision": "En uso en vion-studio.com. Darle acceso solo al repositorio del sitio.",
        "lecciones": "1, 4, 5"
      },
      {
        "nombre": "actions/checkout v7.0.1",
        "url": "https://github.com/actions/checkout",
        "que": "Baja el código del repositorio en el flujo de controles de la lección 6.",
        "licencia": "MIT",
        "revision": "Oficial de GitHub. En el kit va fijada por su commit (`3d3c42e…`), no por la etiqueta, que se puede mover.",
        "lecciones": "6"
      },
      {
        "nombre": "actions/setup-node v7.1.0",
        "url": "https://github.com/actions/setup-node",
        "que": "Instala Node en el flujo de controles de la lección 6.",
        "licencia": "MIT",
        "revision": "Oficial de GitHub. En el kit va fijada por su commit (`949feb2…`), no por la etiqueta, que se puede mover.",
        "lecciones": "6"
      },
      {
        "nombre": "Lighthouse",
        "url": "https://pagespeed.web.dev",
        "que": "Rendimiento, accesibilidad, buenas prácticas y SEO de una página. En Chrome: DevTools → Lighthouse; o en pagespeed.web.dev.",
        "licencia": "Apache-2.0",
        "revision": "En uso en Vion (la 13.5.0 con lockfile, sin `npx`). En el curso se usa el que trae Chrome: nada que instalar.",
        "lecciones": "6, 7"
      },
      {
        "nombre": "anthropics/claude-code-action (v1)",
        "url": "https://github.com/anthropics/claude-code-action",
        "que": "Claude respondiendo en un pull request cuando lo mencionan.",
        "licencia": "MIT",
        "revision": "No lo usamos ni es parte del curso: se menciona. Necesita su propia credencial en los secretos del repositorio y gasta minutos de Actions; en un repositorio público, cuidado con quién puede llamarlo.",
        "lecciones": "6 (mención)"
      },
      {
        "nombre": "Skill del curso cambio-al-sitio",
        "que": "Cómo hacer un pedido de punta a punta: rama, alcance, build, revisor, commit y resumen con el bloque de controles.",
        "licencia": "La del kit (propuesta: MIT)",
        "revision": "Escrita por nosotros, sin scripts; es la versión para el alumno de las instrucciones de nuestro agente de sitios.",
        "lecciones": "3"
      },
      {
        "nombre": "Skills de diseño: impeccable, taste-skill, awwwards y /jury",
        "que": "Dirección de arte y jurado a ciegas.",
        "licencia": "Ver cada repo",
        "revision": "En uso en el rediseño de vion-studio.com, revisadas con nuestra regla (leer antes de instalar y fijar la versión) y parcheadas, sin sus lanzadores. En el curso se cuenta el método (lección 7); no se reparten.",
        "lecciones": "7"
      }
    ],
    "noRecomendamos": "- Darle a Vercel o a cualquier app acceso a «All repositories»: solo al repositorio de su sitio.\n- `npx` de paquetes sin versión.\n- Plantillas de sitios que no dicen su licencia.\n- Pegar en Claude texto de una página o de un correo como si fuera una orden (lección 3): va entre `<dato>` y `</dato>`.\n- Contar con los permisos de Claude Code como única barrera: se pueden esquivar con otra forma del comando. La pared es la regla de GitHub sobre `main`, sin excepciones.",
    "kit": {
      "descripcion": "La carpeta `sitio-curso/`, escrita para el curso: las reglas para Claude, los permisos, la skill, el revisor de SEO y el flujo de controles.",
      "archivos": [
        {
          "nombre": "LEAME.md",
          "que": "Qué trae y en qué orden: los comandos de la lección 0, cómo copiar el kit dentro del proyecto y la lista de archivos."
        },
        {
          "nombre": "CLAUDE.md",
          "que": "Las reglas del proyecto para Claude Code, con huecos para su negocio."
        },
        {
          "nombre": ".claude/settings.json",
          "que": "Los permisos: lo que Claude no puede correr (push a main, force, merge, vercel)."
        },
        {
          "nombre": ".claude/skills/cambio-al-sitio/SKILL.md",
          "que": "Cómo se hace un pedido de punta a punta."
        },
        {
          "nombre": ".github/workflows/controles.yml",
          "que": "Lint, build y revisor de SEO en cada pull request, con las acciones fijadas por su commit."
        },
        {
          "nombre": "scripts/revisar-seo.mjs",
          "que": "El revisor de SEO, sin dependencias, para Node 26."
        },
        {
          "nombre": "reglas-github.md",
          "que": "La regla de `main` paso por paso, con capturas, y qué cambia con un repositorio privado."
        },
        {
          "nombre": "pedido.md",
          "que": "La plantilla de pedido: qué, dónde, por qué, qué no tocar, cómo sabe que está bien y el dato opcional."
        },
        {
          "nombre": "revisar-vista-previa.md",
          "que": "La lista para revisar una vista previa (lámina 4.2)."
        },
        {
          "nombre": "prompts.md",
          "que": "Pedidos de ejemplo de cada lección, el de las tres direcciones y el del jurado a ciegas con su rúbrica."
        }
      ]
    },
    "accion": {
      "titulo": "Su sitio, con su permiso",
      "texto": "Ya tiene el circuito: usted pide, Claude hace, usted mira, usted aprueba. Úselo en cada cambio de su sitio, también en el próximo rediseño. Si quiere mostrarnos su sitio, la comunidad de Vion está abierta."
    }
  },
  "en": {
    "corto": "Website",
    "titulo": "Ship your site with Claude Code",
    "subtitulo": "Next.js, GitHub and Vercel, with previews and your approval",
    "tituloSeo": "Free course: ship your website with Claude Code | Vion",
    "descripcion": "A free Vion course: publish your site with Claude Code, GitHub and Vercel, and nothing goes live without your OK.",
    "paraQuien": "Business owners, professionals and small agencies who want their own site and want to change it on their own, without an AI publishing anything they have not seen.",
    "seLleva": "Your site live (Next.js on GitHub and Vercel) and the loop: you ask Claude Code for a change in plain words, Claude makes it on a branch, Vercel builds a preview, you review it, and it only goes live when you approve. Plus a protected main branch, automated checks (build, SEO and Lighthouse), a way to roll back, and the kit.",
    "herramientas": "Claude Code (paid Anthropic plan, from USD 20 a month); GitHub is free (protecting a private repository needs GitHub Pro); Vercel Hobby is free for personal use only, Pro is USD 20 a month for a business.",
    "lecciones": [
      "Setup: Git, Node, Claude Code, GitHub and Vercel",
      "Your site in one afternoon",
      "The rules before the first change",
      "Asking for changes in plain words",
      "The preview",
      "Approve and publish (and roll back)",
      "Automated checks",
      "A real redesign: what we did with vion-studio.com"
    ]
  }
};
