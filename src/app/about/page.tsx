'use client'

import { Header } from "@/components/ui/header-2"
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState, useCallback } from "react"

export default function AboutPage() {
  const [lang, setLang] = useState<'en' | 'es'>('en')
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 })
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 })
  const [cursorHover, setCursorHover] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
  }, [cursorX, cursorY])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

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

  return (
    <div className="min-h-screen w-full bg-black cursor-none relative">
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

      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-auto">
        <Header lang={lang} onLangChange={(l) => setLang(l)} />
      </div>

      {/* Meet The Team Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight"
        >
          Meet The Team
        </motion.h2>

        {/* Team Member: Maite */}
        {/* Team Member: Julian — Spline Left, Card Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          {/* 3D Spline — Left */}
          <div className="w-full lg:w-1/2 h-[565px] md:h-[727px] rounded-2xl overflow-hidden">
            <Spline
              style={{
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
              }}
              scene="https://prod.spline.design/UWf-NVzf681biZpu/scene.splinecode"
            />
          </div>

          {/* Liquid Glass Card — Right */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_8px_32px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden">
              {/* Glass highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/[0.04] to-transparent pointer-events-none" />

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Julian Alvarez
              </h3>
              <p className="text-sm md:text-base font-medium text-white/50 tracking-wide uppercase mb-6">
                CEO, Software Developer, AI Enthusiast
              </p>
              <div className="space-y-4 text-neutral-300 text-base leading-relaxed">
                <p>
                  Julian is the driving force behind VION's technical vision. With deep expertise in full-stack development and artificial intelligence, he architects the systems that power modern businesses — from intelligent automations to scalable web platforms.
                </p>
                <p>
                  His passion for emerging technology and relentless pursuit of innovation keeps VION at the cutting edge. He believes the best software doesn't just solve problems — it opens doors to possibilities no one imagined.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Member: Maite — Card Left, Spline Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-20"
        >
          {/* Liquid Glass Card — Left */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_8px_32px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden">
              {/* Glass highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/[0.04] to-transparent pointer-events-none" />

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Maite Alvarez
              </h3>
              <p className="text-sm md:text-base font-medium text-white/50 tracking-wide uppercase mb-6">
                COO, Engineer, Creative Mind
              </p>
              <div className="space-y-4 text-neutral-300 text-base leading-relaxed">
                <p>
                  With a unique blend of engineering precision and creative vision, Maite drives the operational backbone of VION Innovation Studio. Her ability to bridge technical complexity with elegant design thinking ensures every project delivers both form and function.
                </p>
                <p>
                  From startup branding to full-scale web applications, she orchestrates cross-functional teams to ship products that make a lasting impact. Her philosophy: great software should feel invisible — it just works.
                </p>
              </div>
            </div>
          </div>

          {/* 3D Spline — Right */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 h-[565px] md:h-[727px] rounded-2xl overflow-hidden">
            <Spline
              style={{
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
              }}
              scene="https://prod.spline.design/VtTEH5MWg3a4IA3W/scene.splinecode"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
