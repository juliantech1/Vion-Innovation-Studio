'use client'

import { Header } from "@/components/ui/header-2"
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState, useCallback } from "react"

export default function BlogPage() {
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

      {/* Content — left space for text, right Spline */}
      <div className="flex h-screen items-center">
        {/* Left — reserved for text */}
        <div className="w-1/2" />

        {/* Right — 3D Spline */}
        <div className="w-1/2 h-full overflow-hidden">
          <Spline
            style={{
              width: '100%',
              height: '100%',
              pointerEvents: 'auto',
            }}
            scene="https://prod.spline.design/XK3XlzoFvVltAHrm/scene.splinecode"
          />
        </div>
      </div>
    </div>
  )
}
