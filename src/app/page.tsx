'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { FallingPattern } from "@/components/ui/falling-pattern"
import { DottedSurface } from "@/components/ui/dotted-surface"
import { ParticleTextEffect, type ParticleTextHandle } from "@/components/ui/particle-text-effect"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Spline from '@splinetool/react-spline'
import { Header } from "@/components/ui/header-2"
import { PinContainer } from "@/components/ui/3d-pin"
import { StickyFooter } from "@/components/sticky-footer"
import Image from "next/image"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { useEffect, useState, useCallback, useRef, useMemo } from "react"

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
  const [showMain, setShowMain] = useState(() => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search).has('skip')
    }
    return false
  })
  const [lang, setLang] = useState<'en' | 'es'>('en')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 })
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 })
  const [cursorHover, setCursorHover] = useState(false)

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
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select, [draggable="true"], label, [onclick]')) {
        setCursorHover(true)
      }
    }
    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null
      if (!related || !related.closest?.('a, button, [role="button"], input, textarea, select, [draggable="true"], label, [onclick]')) {
        setCursorHover(false)
      }
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

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
    setTimeout(() => setBgPhase(1), 300)
    setTimeout(() => setBgPhase(2), 900)
    setTimeout(() => setShowMain(true), 1200)
  }

  const t = {
    en: {
      statement: "We design systems that scale businesses.",
      subtitle: "Custom software, automation and internal tools built for performance.",
      scrollTitle: "Your Business Deserves",
      scrollHighlight: "Its Own Software",
    },
    es: {
      statement: "Diseñamos sistemas que escalan negocios.",
      subtitle: "Software a medida, automatización y herramientas internas construidas para rendimiento.",
      scrollTitle: "Tu Negocio Merece",
      scrollHighlight: "Su Propio Software",
    },
  }

  const c = t[lang]

  // Mobile version: video background + navbar only
  if (isMobile) {
    return (
      <div className="min-h-screen w-full bg-black relative flex flex-col overflow-hidden">
        {/* Video background - rotated to vertical */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="min-h-full min-w-full object-cover rotate-90 scale-[1.8]"
          >
            <source src="/videos/liquid-glass.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 z-[1] bg-black/40" />

        {/* Navigation Header */}
        <div className="w-full z-40 relative">
          <Header lang={lang} onLangChange={(l) => setLang(l)} />
        </div>

        {/* Empty content area */}
        <div className="flex-1 relative z-10" />
      </div>
    )
  }

  if (showMain) {
    return (
      <div className="min-h-screen w-full bg-black cursor-none relative">
        {/* 3D Spline Boxes Background */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <Spline
            style={{
              width: '100%',
              height: '100%',
              pointerEvents: 'auto',
            }}
            scene="https://prod.spline.design/rebLu0BL4cCKQDvT/scene.splinecode"
          />
        </div>

        {/* Custom cursor */}
        <motion.div
          className="fixed top-0 left-0 z-[60] pointer-events-none"
          style={{ x: springX, y: springY }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="rounded-full border border-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ width: cursorHover ? 40 : 0, height: cursorHover ? 40 : 0, opacity: cursorHover ? 1 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
            <motion.div
              className="rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]"
              animate={{ width: cursorHover ? 12 : 10, height: cursorHover ? 12 : 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Navigation Header — fixed so it's independent of scroll containers */}
        <div className="fixed top-0 left-0 right-0 z-40 pointer-events-auto">
          <Header lang={lang} onLangChange={(l) => setLang(l)} />
        </div>

        {/* Section 1 — Value Statement + Spline */}
        <section className="relative z-10 pt-28 pb-16 h-screen flex items-center">
          {/* Left — Text */}
          <div className="w-full md:w-[45%] pl-10 md:pl-20 relative z-20 pointer-events-none">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="text-4xl md:text-7xl font-medium text-white tracking-[-0.02em] leading-tight text-left"
            >
              {c.statement}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" as const }}
              className="mt-3 text-base md:text-xl text-neutral-400 tracking-[-0.01em] text-left"
            >
              {c.subtitle}
            </motion.p>
          </div>

          {/* Right — Spline Animation (larger, shifted left, mouse-interactive) */}
          <div className="hidden md:block absolute right-0 top-0 w-[75%] h-full overflow-hidden -ml-[5%]"
            style={{ left: '20%' }}
          >
            <Spline
              style={{
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
              }}
              scene="https://prod.spline.design/5a7A2AD8SAW2juV8/scene.splinecode"
            />
          </div>
        </section>

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 pointer-events-none [&_button]:pointer-events-auto [&_a]:pointer-events-auto">

          {/* Section — Scroll Animation Showcase */}
          <ContainerScroll
            titleComponent={
              <h2 className="text-4xl font-semibold text-white">
                {c.scrollTitle} <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  {c.scrollHighlight}
                </span>
              </h2>
            }
          >
            <img
              src="/ipad2.png"
              alt="Business software showcase"
              className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>

          {/* Section — 3D Pin Cards */}
          <section className="py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-40 gap-x-4 place-items-center">
              {[
                {
                  title: "Brand Strategy",
                  href: "#",
                  heading: "Brand Strategy",
                  desc: "Building strong brand identities that resonate with your audience.",
                  gradient: "from-purple-600 via-violet-500 to-indigo-500",
                },
                {
                  title: "Start Up Branding",
                  href: "#",
                  heading: "Start Up Branding",
                  desc: "Launch-ready branding packages for emerging businesses.",
                  gradient: "from-cyan-500 via-teal-500 to-emerald-500",
                },
                {
                  title: "Web Design",
                  href: "#",
                  heading: "Web Design",
                  desc: "Stunning, conversion-focused websites that stand out.",
                  gradient: "from-blue-600 via-sky-500 to-cyan-400",
                },
                {
                  title: "App Design",
                  href: "#",
                  heading: "App Design",
                  desc: "Intuitive mobile experiences users love to engage with.",
                  gradient: "from-pink-500 via-rose-500 to-orange-400",
                },
                {
                  title: "Web App Development",
                  href: "#",
                  heading: "Web App Development",
                  desc: "Full-stack web applications built for scale and performance.",
                  gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
                },
                {
                  title: "AI Automations",
                  href: "#",
                  heading: "AI Automations",
                  desc: "Intelligent workflows that eliminate manual processes.",
                  gradient: "from-emerald-500 via-cyan-500 to-blue-500",
                },
              ].map((card, i) => (
                <div key={i} className="h-80 w-full flex items-center justify-center pointer-events-auto">
                  <PinContainer title={card.title} href={card.href}>
                    <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[16rem] h-[16rem]">
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        {card.heading}
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500">
                          {card.desc}
                        </span>
                      </div>
                      <div className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${card.gradient}`} />
                    </div>
                  </PinContainer>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Sticky Footer */}
        <div className="pointer-events-auto">
          <StickyFooter />
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
          <motion.div
            className="rounded-full border border-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ width: cursorHover ? 40 : 0, height: cursorHover ? 40 : 0, opacity: cursorHover ? 1 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
          <motion.div
            className="rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]"
            animate={{ width: cursorHover ? 12 : 10, height: cursorHover ? 12 : 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
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
            transition={{ duration: 0.3, ease: "easeOut" as const }}
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

          {/* Dark fade overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: bgPhase >= 1 ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          />
        </>
      )}
    </div>
  )
}
