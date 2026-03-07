'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { FallingPattern } from "@/components/ui/falling-pattern"
import { DottedSurface } from "@/components/ui/dotted-surface"
import { ParticleTextEffect, type ParticleTextHandle } from "@/components/ui/particle-text-effect"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { useEffect, useState, useCallback, useRef } from "react"

const fadeInLeft = (delay: number) => ({
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
})

export default function Home() {
  const splineContainerRef = useRef<HTMLDivElement>(null)
  const particleRef = useRef<ParticleTextHandle>(null)
  const [modelLoaded, setModelLoaded] = useState(false)
  const [phase, setPhase] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [showWhite, setShowWhite] = useState(false)
  const [lang, setLang] = useState<'en' | 'es'>('en')
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 })
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
  }, [cursorX, cursorY])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const touch = e.touches[0]
    cursorX.set(touch.clientX)
    cursorY.set(touch.clientY)
  }, [cursorX, cursorY])

  const simulateMouseOnSpline = useCallback((x: number, y: number) => {
    const canvas = splineContainerRef.current?.querySelector('canvas')
    if (!canvas) return
    const event = new MouseEvent('mousemove', {
      clientX: x,
      clientY: y,
      bubbles: true,
    })
    canvas.dispatchEvent(event)
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [handleMouseMove, handleTouchMove])

  useEffect(() => {
    if (!modelLoaded) return
    const t1 = setTimeout(() => {
      setPhase(1)
      particleRef.current?.showLines(["Vion", "Innovation", "Studio"])
    }, 1500)
    const t2 = setTimeout(() => {
      setPhase(2)
    }, 3000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [modelLoaded])

  const [bgPhase, setBgPhase] = useState(0) // 0: black, 1: fading to white, 2: white

  const handleStartNow = (e: React.MouseEvent | React.TouchEvent) => {
    // Get button position to make robot look toward it
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    simulateMouseOnSpline(x, y)

    // Destroy all particles
    particleRef.current?.killAll()

    setTransitioning(true)
    setTimeout(() => setBgPhase(1), 800)
    setTimeout(() => setBgPhase(2), 2500)
    setTimeout(() => setShowWhite(true), 3000)
  }

  const t = {
    en: {
      statement: "We design systems that scale businesses.",
      subtitle: "Custom software, automation and internal tools built for performance.",
      services: [
        { title: "Custom Web & Mobile Apps", desc: "Performant applications tailored to your workflow." },
        { title: "CRM & Internal Systems", desc: "Centralized tools that eliminate operational friction." },
        { title: "AI & Automation", desc: "Intelligent processes that reduce manual work." },
        { title: "Business Dashboards", desc: "Real-time visibility into the metrics that matter." },
      ],
      steps: [
        { num: "01", label: "Strategy" },
        { num: "02", label: "Build" },
        { num: "03", label: "Scale" },
      ],
      cta: "Start Your Project",
      ctaSub: "Let's build something scalable.",
    },
    es: {
      statement: "Diseñamos sistemas que escalan negocios.",
      subtitle: "Software a medida, automatización y herramientas internas construidas para rendimiento.",
      services: [
        { title: "Apps Web & Móviles", desc: "Aplicaciones de alto rendimiento adaptadas a tu flujo de trabajo." },
        { title: "CRM & Sistemas Internos", desc: "Herramientas centralizadas que eliminan la fricción operativa." },
        { title: "IA & Automatización", desc: "Procesos inteligentes que reducen el trabajo manual." },
        { title: "Dashboards de Negocio", desc: "Visibilidad en tiempo real de las métricas que importan." },
      ],
      steps: [
        { num: "01", label: "Estrategia" },
        { num: "02", label: "Construir" },
        { num: "03", label: "Escalar" },
      ],
      cta: "Inicia Tu Proyecto",
      ctaSub: "Construyamos algo escalable.",
    },
  }

  const c = t[lang]

  if (showWhite) {
    return (
      <div className="min-h-screen w-full bg-white cursor-none">
        {/* Custom cursor */}
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none"
          style={{ x: springX, y: springY }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 rounded-full border border-black/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(0,0,0,0.4),0_0_20px_rgba(0,0,0,0.2)]" />
          </div>
        </motion.div>

        {/* Language Toggle */}
        <div className="fixed top-6 right-6 z-40 flex items-center gap-3">
          <span className="text-xs font-medium text-neutral-400">EN</span>
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className={`relative w-12 h-6 rounded-full border transition-colors duration-300 cursor-none ${
              lang === 'en' ? 'bg-white border-black' : 'bg-black border-black'
            }`}
          >
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-300 ${
                lang === 'en'
                  ? 'left-1 bg-black'
                  : 'left-[calc(100%-20px)] bg-white'
              }`}
            />
          </button>
          <span className="text-xs font-medium text-neutral-400">ES</span>
        </div>

        <div className="max-w-[1140px] mx-auto px-6">

          {/* Section 1 — Value Statement */}
          <section className="pt-40 pb-32 text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="text-2xl md:text-3xl font-medium text-black tracking-[-0.02em] leading-tight"
            >
              {c.statement}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" as const }}
              className="mt-5 text-sm md:text-base text-neutral-500 tracking-[-0.01em]"
            >
              {c.subtitle}
            </motion.p>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-[#EAEAEA]" />

          {/* Section 2 — Service Blocks */}
          <section className="py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {c.services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: "easeOut" as const }}
                  className="border border-[#EAEAEA] rounded-[10px] p-7 hover:border-neutral-400 transition-colors duration-200 cursor-none"
                >
                  <h3 className="text-sm font-semibold text-black tracking-[-0.01em]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-[#EAEAEA]" />

          {/* Section 3 — Process Timeline */}
          <section className="py-32">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
              {c.steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i, ease: "easeOut" as const }}
                  className="flex items-center gap-4 flex-1 w-full md:w-auto"
                >
                  <span className="text-xs font-mono text-neutral-400">{step.num}</span>
                  <span className="text-sm font-medium text-black tracking-[-0.01em]">{step.label}</span>
                  {i < 2 && (
                    <div className="hidden md:block flex-1 h-px bg-[#EAEAEA] ml-6" />
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-[#EAEAEA]" />

          {/* Section 4 — CTA */}
          <section className="py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" as const }}
            >
              <button className="px-10 py-4 bg-black text-white text-sm font-medium rounded-lg hover:bg-white hover:text-black border border-black transition-all duration-200 cursor-none">
                {c.cta}
              </button>
              <p className="mt-5 text-xs text-neutral-400 tracking-[-0.01em]">
                {c.ctaSub}
              </p>
            </motion.div>
          </section>

        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-full bg-black relative overflow-hidden cursor-none">
      {/* Dotted surface background */}
      <DottedSurface className="z-0" />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none"
        style={{ x: springX, y: springY }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 rounded-full border border-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="w-2.5 h-2.5 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]" />
        </div>
      </motion.div>

      {/* 3D Model - centered on mobile, right on desktop */}
      <div ref={splineContainerRef} className="absolute inset-0 md:left-[25%]">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
          onLoad={() => setModelLoaded(true)}
        />
      </div>

      {/* Particle Text - solidifies naturally on canvas */}
      <ParticleTextEffect
        ref={particleRef}
        lines={[]}
        fontSize={70}
        lineHeight={1.3}
        className="absolute inset-0 md:left-0 md:top-0 md:w-[40%] md:h-full z-10 pointer-events-none"
      />

      {/* Start Now button */}
      {phase >= 2 && !transitioning && (
        <div className="absolute inset-0 md:left-0 md:top-0 md:w-[40%] md:h-full z-20 flex items-end justify-center pb-[18%] md:pb-[12%]">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleStartNow}
            className="px-10 py-3.5 bg-white text-black font-semibold text-lg rounded-lg border-2 border-white active:bg-black active:text-white active:border-white hover:bg-black hover:text-white hover:border-white transition-all duration-200 cursor-none"
          >
            Start Now
          </motion.button>
        </div>
      )}

      {/* Falling pattern transition overlay */}
      {transitioning && (
        <>
          {/* Falling pattern on black background */}
          <motion.div
            className="fixed inset-0 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" as const }}
          >
            <FallingPattern
              className="h-full w-full"
              color="rgba(255,255,255,0.12)"
              backgroundColor="black"
              duration={80}
              blurIntensity="1.5em"
              density={1}
            />
          </motion.div>

          {/* Slow fade from black to white */}
          <motion.div
            className="fixed inset-0 z-40 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: bgPhase >= 1 ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" as const }}
          />
        </>
      )}
    </div>
  )
}
