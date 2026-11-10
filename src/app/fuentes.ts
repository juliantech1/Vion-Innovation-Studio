import { Geist, Geist_Mono } from 'next/font/google';

// Geist y Geist Mono variables (un solo archivo woff2 por familia, todos los pesos). La sans se precarga porque el
// titular es el LCP; la mono no (rótulos y cifras chicas: entra con `swap` sin mover nada, tiene respaldo ajustado).
export const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
export const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'], display: 'swap', preload: false });
export const claseFuentes = `${geistSans.variable} ${geistMono.variable}`;
