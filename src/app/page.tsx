"use client";

import { useState } from "react";
import Image from "next/image";
import vionImage from "../../../assets/images/vion1.png";

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white font-sans dark:bg-black">
      {/* Contenido principal */}
      <main className="flex min-h-screen w-full flex-col">
        {/* Imagen principal con difuminado */}
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={vionImage}
              alt="Vion"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Gradiente de difuminado hacia abajo */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black pointer-events-none" />
        </div>

        {/* Texto minimalista */}
        <div className="flex items-center justify-center px-8 py-16 md:py-24">
          <p className="text-center text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl mx-auto text-zinc-800 dark:text-zinc-200">
            No permitas que el futuro de tu empresa dependa de procesos manuales con margen de error, Construye tus sueños con Vion.
          </p>
        </div>
      </main>

      {/* Cortina/Persiana de bienvenida */}
      <div
        className={`fixed inset-0 z-50 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900 transition-transform duration-1000 ease-in-out cursor-pointer ${
          isRevealed ? "-translate-y-full" : "translate-y-0"
        }`}
        onClick={() => setIsRevealed(true)}
      >
        <div className="flex min-h-screen w-full flex-col items-center justify-center px-8">
          <div className="flex flex-col items-center gap-8 text-center animate-in fade-in duration-1000">
            <h1 className="text-7xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-8xl md:text-9xl">
              Vion
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl">
              Bienvenido
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-4">
              Haz clic para continuar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
