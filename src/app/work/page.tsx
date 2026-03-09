'use client'

import { Header } from "@/components/ui/header-2"
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState, useCallback } from "react"

export default function WorkPage() {
  const [lang, setLang] = useState<'en' | 'es'>('en')
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 })
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 })
  const [cursorHover, setCursorHover] = useState(false)
  const [splineLoaded, setSplineLoaded] = useState(false)

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

      {/* Content */}
      <div className="flex h-screen items-center relative z-10">
        {/* Left — 3D Spline (mouse yes, scroll no) */}
        <motion.div
          className="w-1/2 h-full overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: splineLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Spline
            style={{
              width: '100%',
              height: '100%',
              pointerEvents: 'auto',
            }}
            scene="https://prod.spline.design/T3UhOxqF3Ia8VB9T/scene.splinecode"
            onLoad={() => setSplineLoaded(true)}
          />
          {/* Overlay: blocks scroll/wheel from reaching Spline, forwards mouse events through */}
          <div
            className="absolute inset-0 z-10"
            ref={(el) => {
              if (!el || (el as any).__bound) return
              ;(el as any).__bound = true
              el.addEventListener('wheel', (e) => {
                e.preventDefault()
                e.stopPropagation()
                window.scrollBy(0, e.deltaY)
              }, { passive: false })
            }}
            onMouseDown={(e) => {
              // Forward click to Spline canvas below
              const el = e.currentTarget
              el.style.pointerEvents = 'none'
              const below = document.elementFromPoint(e.clientX, e.clientY)
              below?.dispatchEvent(new MouseEvent('mousedown', { clientX: e.clientX, clientY: e.clientY, bubbles: true }))
              requestAnimationFrame(() => { el.style.pointerEvents = 'auto' })
            }}
            onMouseUp={(e) => {
              const el = e.currentTarget
              el.style.pointerEvents = 'none'
              const below = document.elementFromPoint(e.clientX, e.clientY)
              below?.dispatchEvent(new MouseEvent('mouseup', { clientX: e.clientX, clientY: e.clientY, bubbles: true }))
              requestAnimationFrame(() => { el.style.pointerEvents = 'auto' })
            }}
            onMouseMove={(e) => {
              const el = e.currentTarget
              el.style.pointerEvents = 'none'
              const below = document.elementFromPoint(e.clientX, e.clientY)
              below?.dispatchEvent(new MouseEvent('mousemove', { clientX: e.clientX, clientY: e.clientY, bubbles: true }))
              requestAnimationFrame(() => { el.style.pointerEvents = 'auto' })
            }}
          />
        </motion.div>

        {/* Right — Card */}
        <div className="w-[42%] flex items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={splineLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_8px_32px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden max-w-md"
          >
            {/* Glass highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/[0.04] to-transparent pointer-events-none" />

            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6">
              If You Can Think About It, We Can Bring It to Life
            </h2>
            <button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-colors cursor-none">
              Start Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
