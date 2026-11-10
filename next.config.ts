import type { NextConfig } from "next";

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

// Política de contenido: todo del mismo origen. Next necesita scripts y estilos en línea (sin nonce, para que las
// páginas sigan siendo estáticas). Si el diseño suma un origen externo (por ejemplo una escena de Spline:
// prod.spline.design, 'unsafe-eval' y blob: para sus workers), se agrega acá a propósito: ver el README.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${desarrollo ? " 'unsafe-eval'" : ""}${vistaPrevia ? " https://vercel.live" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${desarrollo ? " ws:" : ""}${vistaPrevia ? " https://vercel.live wss://ws-us3.pusher.com" : ""}`,
  `frame-src 'self'${vistaPrevia ? " https://vercel.live" : ""}`,
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
