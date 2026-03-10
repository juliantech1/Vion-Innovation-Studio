'use client'

import { Header } from "@/components/ui/header-2"
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useEffect, useState, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"

export default function WorkPage() {
  const router = useRouter()
  const [lang, setLang] = useState<'en' | 'es'>('en')
  const [entryDone, setEntryDone] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [exiting, setExiting] = useState(false)

  // Scroll-driven Spline section
  const splineSectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: splineProgress } = useScroll({
    target: splineSectionRef,
    offset: ['start start', 'end end'],
  })
  // Text hidden initially — higher threshold on mobile to account for negative margin pre-scroll
  const startShow = isMobile ? 0.18 : 0.08
  const endShow = isMobile ? 0.23 : 0.2
  const textOpacity = useTransform(splineProgress, [startShow, endShow, 0.88, 0.96], [0, 1, 1, 0])
  const textScale = useTransform(splineProgress, [startShow, endShow, 0.88, 0.96], [0.9, 1, 1, 0.9])
  // Spline: centered initially, moves right when text appears, returns near end
  const splineShift = isMobile ? 120 : 150
  const splineXRaw = useTransform(splineProgress, [startShow, endShow, 0.88, 0.96], [0, splineShift, splineShift, 0])
  const splineX = useSpring(splineXRaw, { damping: 40, stiffness: 80 })

  // Force white chrome only after entry transition completes
  useEffect(() => {
    if (!entryDone) return
    // Update ALL theme-color meta tags to white
    const metas = document.querySelectorAll('meta[name="theme-color"]') as NodeListOf<HTMLMetaElement>
    if (metas.length > 0) {
      metas.forEach((m) => { m.content = '#ffffff' })
    } else {
      const meta = document.createElement('meta')
      meta.name = 'theme-color'
      meta.content = '#ffffff'
      document.head.appendChild(meta)
    }
    // Also set body bg to help Safari detect white
    document.body.style.backgroundColor = '#ffffff'
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [entryDone])

  // Desktop cursor
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 })
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 })
  const [cursorHover, setCursorHover] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
  }, [cursorX, cursorY])

  useEffect(() => {
    if (isMobile) return
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove, isMobile])

  useEffect(() => {
    if (isMobile) return
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
  }, [isMobile])

  // Entry animation timing
  useEffect(() => {
    const timer = setTimeout(() => setEntryDone(true), 1000)
    return () => {
      clearTimeout(timer)
      const existing = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null
      if (existing) {
        existing.content = '#000000'
      }
    }
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setExiting(true)
    const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null
    if (meta) meta.content = '#000000'
    setTimeout(() => {
      router.push('/')
    }, 900)
  }

  return (
    <div className={`min-h-screen w-full relative overflow-x-hidden ${isMobile ? 'cursor-auto' : 'cursor-none'}`} style={{ backgroundColor: entryDone && !exiting ? '#ffffff' : '#000000' }}>
      {/* Entry transition: white rectangle spiraling open from center */}
      {!entryDone && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <motion.div
            className="bg-white rounded-lg"
            initial={{ scale: 0, width: 80, height: 50, rotate: 0 }}
            animate={{ scale: 1, width: '150vmax', height: '150vmax', borderRadius: 0, rotate: 360 }}
            transition={{
              scale: { delay: 0, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
              default: { delay: 0.35, duration: 0.6, ease: [0.65, 0, 0.35, 1] },
            }}
          />
        </motion.div>
      )}

      {/* Custom cursor — desktop only */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 z-[60] pointer-events-none"
          style={{ x: springX, y: springY }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="rounded-full border border-black/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ width: cursorHover ? 40 : 0, height: cursorHover ? 40 : 0, opacity: cursorHover ? 1 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
            <motion.div
              className="rounded-full bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(0,0,0,0.3),0_0_20px_rgba(0,0,0,0.15)]"
              animate={{ width: cursorHover ? 12 : 10, height: cursorHover ? 12 : 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}

      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-auto">
        <Header lang={lang} onLangChange={(l) => setLang(l)} variant="light" onLogoClick={handleLogoClick} />
      </div>

      {/* Exit transition: black rectangle spiraling closed (inverse of entry) */}
      <AnimatePresence>
        {exiting && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              className="bg-black rounded-lg"
              initial={{ scale: 0, width: 80, height: 50, rotate: 0 }}
              animate={{ scale: 1, width: '150vmax', height: '150vmax', borderRadius: 0, rotate: -360 }}
              transition={{
                scale: { delay: 0, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
                default: { delay: 0.2, duration: 0.6, ease: [0.65, 0, 0.35, 1] },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content — always mounted for scroll ref, hidden until entry done */}
      <div className="relative z-10 pt-24 md:pt-28" style={{ opacity: entryDone ? 1 : 0, pointerEvents: entryDone ? 'auto' : 'none' }}>
        {/* Section 1: Title + Subtitle */}
        {entryDone && (
          <div className="px-6 md:px-20" style={{ perspective: '1200px' }}>
            <motion.h1
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left center' }}
              className="text-3xl md:text-6xl font-bold text-black tracking-[-0.02em] leading-tight"
            >
              We Build Interfaces, Experiences, and Invisible Software
            </motion.h1>
            <motion.p
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left center' }}
              className="mt-3 text-base md:text-xl text-neutral-500 tracking-[-0.01em]"
            >
              The Future Is Now. Don&apos;t Fall Behind.
            </motion.p>
          </div>
        )}

        {/* Scroll-driven Spline + Text section */}
        <div ref={splineSectionRef} className="relative" style={{ height: isMobile ? '180vh' : '180vh', marginTop: isMobile ? '-14rem' : '-2rem' }}>
          <div className="sticky overflow-hidden" style={{ top: isMobile ? '0rem' : '3.5rem', height: isMobile ? '100vh' : 'calc(100vh - 7rem)' }}>
            {/* Liquid glass card with text — appears/disappears with scroll */}
            <motion.div
              className="absolute left-4 md:left-12 z-10"
              style={{
                opacity: textOpacity,
                scale: textScale,
                top: isMobile ? '55%' : '40%',
                width: isMobile ? '55%' : '35%',
              }}
            >
              <div
                className="rounded-2xl border border-white/40 p-5 md:p-6 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.25) 100%)',
                  backdropFilter: 'blur(20px) saturate(1.4)',
                  WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
                }}
              >
                <p
                  className="text-black font-bold leading-tight tracking-[-0.02em]"
                  style={{ fontSize: isMobile ? '32px' : '38px' }}
                >
                  We build software for any screen, any device, any vision — from your wrist to the world.
                </p>
              </div>
            </motion.div>

            {/* Spline model — shifts right when text shows, returns to center */}
            <motion.div
              className="absolute inset-0 select-none"
              style={{
                x: splineX,
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none',
              }}
              onContextMenu={(e) => e.preventDefault()}
            >
              {entryDone && (
                <motion.div
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                >
                  <Spline
                    scene="https://prod.spline.design/9Pw-H2bJR7Kw0lGT/scene.splinecode"
                    style={{ width: '100%', height: '100%' }}
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-20" />
      </div>

    </div>
  )
}
