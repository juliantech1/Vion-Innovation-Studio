// D1 · SEO con agentes: la ficha, lo que cuesta, la puesta a punto, los repos, el kit y la acción del final, desde el
// storyboard (docs/planes/cursos/D1-seo-agentes.md de la aldea, 2026-11-10). Las lecciones están en lecciones.ts.
import type { CursoTexto } from '../../tipos';

export const curso: CursoTexto = {
  "es": {
    "corto": "SEO con agentes",
    "titulo": "SEO con agentes: auditoría, Google y arreglos",
    "subtitulo": "Auditoría SEO con Claude Code, Lighthouse y Search Console, paso a paso",
    "tituloSeo": "Curso gratis: SEO con agentes y Claude Code | Vion",
    "descripcion": "Curso gratis de Vion: audite su sitio, mídalo con Lighthouse, lea Search Console sin riesgo y apruebe cada arreglo. En producción.",
    "paraQuien": "Dueños de sitios de servicios (estudios, consultorías, comercios) y quien les hace el sitio. Sirve para cualquier sitio público; los arreglos de la lección 6 necesitan que el sitio esté en Git (GitHub).",
    "seLleva": "Una auditoría técnica de su sitio con puntaje por sección (un programa que recorre el sitio como un buscador), su línea base de Lighthouse bien medida, Search Console conectado sin permiso de escritura, un verificador que corre antes de cada publicación y el ciclo: el agente propone en una rama, usted aprueba la vista previa, se publica y se mide de nuevo.",
    "herramientas": "Claude Code (plan pago de Anthropic, desde USD 20 al mes); Search Console, Lighthouse, PageSpeed Insights y Node, gratis; GitHub y una vista previa por rama (Vercel, Netlify u otra) para los arreglos.",
    "ficha": {
      "requisitos": "Windows 10 (1809 o más nuevo), macOS 13 o más nuevo, o Linux; Chrome; una cuenta de Claude con Claude Code (plan pago); una cuenta de Google con acceso de propietario al dominio (para verificar Search Console). Para la lección 6: el sitio en un repo de GitHub y una vista previa por rama (Vercel, Netlify o la que tenga).",
      "duracion": "7 lecciones, 55 láminas con 43 videos cortos (unos 20 min de video en total). Hacerlo con su sitio: estimado, una tarde, más la espera de Google (semanas) para la lección 7.",
      "costo": "Claude Pro (USD 20 al mes, o USD 200 al año); Search Console, Lighthouse, PageSpeed Insights y Node son gratis, y GitHub también para lo del curso. Vercel Hobby es gratis pero solo para uso personal y no comercial: el sitio de un negocio va en Pro (USD 20 al mes) o en el hosting que ya tenga."
    },
    "costos": [
      {
        "pieza": "Claude Pro",
        "costo": "USD 20 al mes; USD 17 al mes con pago anual (USD 200). El plan gratis no incluye Claude Code",
        "fuente": "[claude.com/pricing](https://claude.com/pricing)"
      },
      {
        "pieza": "Google Search Console",
        "costo": "Gratis",
        "fuente": "[search.google.com/search-console](https://search.google.com/search-console)"
      },
      {
        "pieza": "API de Search Console",
        "costo": "Sin precio publicado; cuotas: Search Analytics, 1.200 consultas por minuto por sitio y por usuario",
        "fuente": "[developers.google.com/webmaster-tools/limits](https://developers.google.com/webmaster-tools/limits)"
      },
      {
        "pieza": "Lighthouse",
        "costo": "Gratis (Apache-2.0); viene dentro de Chrome (DevTools → Lighthouse). La versión de npm pide Node 22 o más nuevo; la última es la 13.6.0 (2026-10-27)",
        "fuente": "[github.com/GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse)"
      },
      {
        "pieza": "PageSpeed Insights",
        "costo": "La página web es gratis. Su API pide una clave (`key=`) de un proyecto de Google Cloud; sin clave, nuestro agente de SEO recibió «429: Quota exceeded»",
        "fuente": "[developers.google.com/speed/docs/insights/v5/get-started](https://developers.google.com/speed/docs/insights/v5/get-started)"
      },
      {
        "pieza": "GitHub",
        "costo": "Gratis para un repo y ramas"
      },
      {
        "pieza": "Vercel",
        "costo": "Hobby USD 0, «for personal, non-commercial use»; Pro USD 20 al mes",
        "fuente": "[vercel.com/pricing](https://vercel.com/pricing)"
      },
      {
        "pieza": "Dominio",
        "costo": "El que ya tiene"
      }
    ],
    "costosFecha": "2026-11-10",
    "puesta": {
      "leccion": 2,
      "texto": "Todo se instala en la lección 2 (la misma guía va en el kit como `INSTALAR.md`).\n\n| Pieza | Windows | Mac | Linux | Cómo se comprueba |\n| --- | --- | --- | --- | --- |\n| Claude Code (plan pago) | `winget install Anthropic.ClaudeCode` | `brew install --cask claude-code` | · | `claude doctor` y `claude` para entrar |\n| Node 22 LTS o más nuevo | `winget install OpenJS.NodeJS.LTS` | `brew install node@22` | El paquete de su distribución o nodejs.org | `node --version` (v22 o más) |\n| Chrome actualizado | Lighthouse viene adentro | ídem | ídem | DevTools → Lighthouse → «Mobile» → Analizar |\n| El kit | `git clone` del kit | ídem | ídem | `node auditar.mjs https://su-sitio.com` termina con un puntaje y `salida/auditoria.md` |\n\n**Search Console:** agregar la propiedad como **Dominio** (un registro TXT en el DNS) o como **Prefijo de URL** (un archivo o una etiqueta), y enviar el sitemap.\n\n**La cuenta de solo lectura (lección 5):** un proyecto de Google Cloud con la API de Search Console habilitada, una cuenta de servicio sin roles y su clave JSON en `claves/` del kit (fuera de Git); en Search Console, esa cuenta como usuario **Restringido**. Se comprueba con `node gsc.mjs sitios`: muestra su propiedad con permiso `siteRestrictedUser`.\n\nLighthouse por consola es opcional: se instala dentro del kit con `npm ci --ignore-scripts` (versión exacta y lockfile), nunca con `npx` ni global."
    },
    "recursos": [
      {
        "nombre": "Lighthouse",
        "url": "https://github.com/GoogleChrome/lighthouse",
        "que": "Mide rendimiento, accesibilidad, buenas prácticas y SEO de una página.",
        "licencia": "Apache-2.0",
        "revision": "En Vion: la 13.5.0 exacta con lockfile (114 paquetes con sha512), instalada con `npm ci --ignore-scripts` y usada por su API de Node (sin su CLI, sin Sentry), con una versión fija de Chrome. La última es la 13.6.0: se revisa antes de subir.",
        "lecciones": "4, 7"
      },
      {
        "nombre": "PageSpeed Insights",
        "url": "https://pagespeed.web.dev",
        "que": "Lighthouse en los servidores de Google, más datos de usuarios reales si el sitio tiene tráfico.",
        "licencia": "Servicio de Google",
        "revision": "Solo lectura.",
        "lecciones": "4"
      },
      {
        "nombre": "Search Console y su API",
        "url": "https://search.google.com/search-console",
        "que": "Qué consultas muestran su sitio, en qué puesto y con cuántos clics; la indexación y los sitemaps. La API está en [developers.google.com/webmaster-tools](https://developers.google.com/webmaster-tools).",
        "licencia": "Servicio de Google",
        "revision": "Con una cuenta Restringida y el alcance `webmasters.readonly`: no puede cambiar nada (lección 5).",
        "lecciones": "5, 7"
      },
      {
        "nombre": "/jury (juliobsz/skills)",
        "url": "https://github.com/juliobsz/skills",
        "que": "Puntúa un sitio como un jurado: capturas en celular y escritorio, LCP, CLS, axe, foco, SEO y metadatos.",
        "licencia": "MIT",
        "revision": "Revisado por Vion (commit `add880bd`): usa internet (las páginas que mira) y Node; se parchó para no correr `npx playwright install`.",
        "lecciones": "6 (revisar la vista previa)"
      },
      {
        "nombre": "impeccable (pbakaus)",
        "url": "https://github.com/pbakaus/impeccable",
        "que": "24 comandos de diseño web, entre ellos `audit` y `critique`.",
        "licencia": "Apache-2.0",
        "revision": "Revisado por Vion (v4.8.1): su lanzador baja un binario; lo usamos en modo «sin lanzador».",
        "lecciones": "6 (mención)"
      },
      {
        "nombre": "playwright-cli (Microsoft)",
        "url": "https://github.com/microsoft/playwright-cli",
        "que": "Maneja un navegador desde la terminal: capturas y lo que se ve después de cargar el JavaScript.",
        "licencia": "Apache-2.0",
        "revision": "En Vion: @playwright/cli 0.1.23 con lockfile y una versión fija de Chrome. Su README propone `npm install -g …@latest`: no lo instalamos así.",
        "lecciones": "3 (opcional: palabras visibles después de cargar)"
      },
      {
        "nombre": "Skill claude-ads",
        "url": "https://github.com/AgriciDaniel/claude-ads",
        "que": "Auditoría de anuncios; su parte de páginas de destino revisa velocidad y mensaje.",
        "licencia": "MIT",
        "revision": "Revisado por Vion: solo los textos; nunca cambia una cuenta.",
        "lecciones": "7 (mención, para quien además paga anuncios)"
      },
      {
        "nombre": "El kit del curso",
        "que": "`auditar.mjs`, `secciones.mjs`, `gsc.mjs`, `lighthouse.sh`, `verificar.mjs`, el skill `auditar-seo` y el `CLAUDE.md` del agente que propone.",
        "licencia": "MIT (propuesta)",
        "revision": "Lo escribimos nosotros para el curso: Node sin dependencias para auditar; Lighthouse, fijado con su lockfile. El skill se revisa con nuestra regla (leer antes de instalar y fijar la versión) antes de publicarlo.",
        "lecciones": "todas"
      }
    ],
    "noRecomendamos": "- **Trucos para Google:** texto oculto, páginas copiadas por ciudad, reseñas inventadas, compra de enlaces. El sitio de Vion no los usa, su verificador rechaza reseñas en los datos estructurados y el `CLAUDE.md` del kit los prohíbe.\n- **`npx lighthouse` o instalaciones globales:** se instala dentro del kit con versión exacta y lockfile, para usar la versión que se revisó.\n- **Darle al agente permiso de escritura en Search Console:** para leer sus datos no lo necesita (lección 5).",
    "kit": {
      "descripcion": "Un repo propio, escrito para el curso (licencia MIT propuesta): las reglas de nuestra auditoría, en código nuevo y sin dependencias para auditar. Se publica con el curso.",
      "archivos": [
        {
          "nombre": "LEAME.md",
          "que": "Qué es, qué cuesta y los enlaces de las lecciones."
        },
        {
          "nombre": "INSTALAR.md",
          "que": "La puesta a punto completa de la lección 2."
        },
        {
          "nombre": "CLAUDE.md",
          "que": "Las reglas del agente que propone: qué hace, qué no hace, cómo arregla y cómo mide."
        },
        {
          "nombre": ".claude/settings.json",
          "que": "Los permisos: leer todo menos `claves/`; escribir solo en `salida/` y `propuestas.md`; en la terminal, solo node, git (sin push) y `lighthouse.sh`."
        },
        {
          "nombre": ".claude/skills/auditar-seo/SKILL.md",
          "que": "El método de las lecciones 3 a 7, como skill."
        },
        {
          "nombre": "auditar.mjs",
          "que": "La auditoría: hasta N páginas, 3 s entre pedidos, hallazgos con gravedad y arreglo, y el puntaje."
        },
        {
          "nombre": "secciones.mjs",
          "que": "El puntaje por sección: 9 secciones, peso × 5."
        },
        {
          "nombre": "gsc.mjs",
          "que": "Search Console de solo lectura: solo `sitios` y `consultas`, con la prueba de escritura que tiene que fallar."
        },
        {
          "nombre": "lighthouse.sh",
          "que": "Lighthouse fijado con su lockfile, para una o varias URL."
        },
        {
          "nombre": "verificar.mjs",
          "que": "Un verificador chico para correr contra la vista previa (las reglas de la lámina 6.4)."
        },
        {
          "nombre": "PEDIDOS.md",
          "que": "Los pedidos a Claude de cada lección."
        },
        {
          "nombre": "plantillas/",
          "que": "`propuestas.md` y `comparacion.md`."
        },
        {
          "nombre": "claves/",
          "que": "Vacía y fuera de Git: ahí va la clave de la cuenta de servicio."
        },
        {
          "nombre": "salida/",
          "que": "Lo que generan los programas."
        }
      ]
    },
    "accion": {
      "titulo": "Cada mes, el mismo ciclo",
      "texto": "Auditar, leer Search Console, proponer, aprobar y medir: es un ciclo, no un arreglo. Si quiere que lo hagamos con su sitio, todos los meses y con su aprobación en cada cambio, escríbanos."
    }
  },
  "en": {
    "corto": "SEO agents",
    "titulo": "SEO with AI agents: audit, Google and fixes",
    "subtitulo": "SEO audit with Claude Code, Lighthouse and Search Console, step by step",
    "tituloSeo": "Free course: SEO with AI agents and Claude Code | Vion",
    "descripcion": "A free Vion course: audit your site, measure it with Lighthouse, read Search Console safely and approve every fix. In production.",
    "paraQuien": "Owners of service business websites (studios, consultancies, shops) and whoever builds their site. It works for any public site; the fixes in lesson 6 need the site in Git (GitHub).",
    "seLleva": "A technical audit of your site scored by section, a Lighthouse baseline measured the right way, Search Console connected with no write access, a checker that runs before every release, and the loop: the agent proposes on a branch, you approve the preview, it ships and gets measured again.",
    "herramientas": "Claude Code (paid Anthropic plan, from USD 20 a month); Search Console, Lighthouse, PageSpeed Insights and Node are free; GitHub and a per-branch preview (Vercel, Netlify or similar) for the fixes.",
    "lecciones": [
      "The case: vion-studio.com, measured before and after",
      "Setup: Claude Code, Node, Chrome, Search Console and the kit",
      "The automated audit and its score by section",
      "Lighthouse: measuring right (and why a 100 can lie)",
      "Read-only Search Console (and why)",
      "From finding to fix: the agent proposes, you approve",
      "Measure again (and wait for Google)"
    ]
  }
};
