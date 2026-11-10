import type { NextConfig } from "next";
import medios from "./src/content/cursos/medios.json";

// Las URLs del sitio anterior → las del plan de Feme (308, permanentes).
const VIEJAS: [string, string][] = [
  ["/work", "/casos"],
  ["/about", "/nosotros"],
  ["/how-it-works", "/consultoria-ia-autocad-bim"],
  ["/contact", "/contacto"],
  ["/services", "/#servicios"],
];

const desarrollo = process.env.NODE_ENV !== "production";
const vistaPrevia = process.env.VERCEL_ENV === "preview";

// Los orígenes de los videos e imágenes de los cursos (src/content/cursos/medios.json): un CDN nuevo entra solo a
// media-src e img-src; YouTube (sin cookies) y Vimeo, a frame-src, recién cuando algún curso los use.
const piezas = Object.values(medios as Record<string, Record<string, Record<string, string | number>>>).flatMap((c) => Object.values(c));
const origenes = (claves: string[]) =>
  [...new Set(piezas.flatMap((m) => claves.map((k) => m[k]).filter((v): v is string => typeof v === "string" && v.startsWith("https://")).map((v) => new URL(v).origin)))].map((o) => ` ${o}`).join("");
const conYoutube = piezas.some((m) => m.youtube) ? " https://www.youtube-nocookie.com" : "";
const conVimeo = piezas.some((m) => m.vimeo) ? " https://player.vimeo.com" : "";

// Política de contenido: todo del mismo origen. Next necesita scripts y estilos en línea (sin nonce, para que las
// páginas sigan siendo estáticas). Si el diseño suma un origen externo (por ejemplo una escena de Spline:
// prod.spline.design, 'unsafe-eval' y blob: para sus workers), se agrega acá a propósito: ver el README.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${desarrollo ? " 'unsafe-eval'" : ""}${vistaPrevia ? " https://vercel.live" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob:${origenes(["poster", "imagen"])}`,
  `media-src 'self'${origenes(["video", "subtitulos"])}`,
  "font-src 'self'",
  `connect-src 'self'${desarrollo ? " ws:" : ""}${vistaPrevia ? " https://vercel.live wss://ws-us3.pusher.com" : ""}`,
  `frame-src 'self'${conYoutube}${conVimeo}${vistaPrevia ? " https://vercel.live" : ""}`,
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  ...(desarrollo ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: { globalNotFound: true },
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return VIEJAS.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
