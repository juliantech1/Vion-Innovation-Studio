'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { FallingPattern } from "@/components/ui/falling-pattern"
import { DottedSurface } from "@/components/ui/dotted-surface"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { useEffect, useState, useCallback } from "react"

const fadeInLeft = (delay: number) => ({
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
})

export default function Home() {
  const [phase, setPhase] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [showWhite, setShowWhite] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 })
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
  }, [cursorX, cursorY])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1500)
    const t2 = setTimeout(() => setPhase(2), 3000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const [bgPhase, setBgPhase] = useState(0) // 0: black, 1: fading to white, 2: white

  const handleStartNow = () => {
    setTransitioning(true)
    // Phase 1: show falling pattern on black for 2s
    setTimeout(() => setBgPhase(1), 2000)
    // Phase 2: fully white, transition complete
    setTimeout(() => setBgPhase(2), 5000)
    setTimeout(() => setShowWhite(true), 6000)
  }

  if (showWhite) {
    return (
      <div className="h-screen w-full bg-white cursor-none">
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

      {/* 3D Model */}
      <div className="absolute inset-0 left-[25%]">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Text & Button */}
      <div className="absolute left-0 top-0 h-full w-[35%] z-10 flex flex-col items-end justify-center pr-4 pointer-events-none">
        {phase >= 1 && (
          <div className="flex flex-col gap-2">
            <motion.h1
              {...fadeInLeft(0)}
              className="text-7xl md:text-9xl font-bold text-white tracking-tight"
            >
              Vion
            </motion.h1>
            <motion.h2
              {...fadeInLeft(0.6)}
              className="text-5xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500"
            >
              Innovation
            </motion.h2>
            <motion.h2
              {...fadeInLeft(1.2)}
              className="text-5xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500"
            >
              Studio
            </motion.h2>
          </div>
        )}

        {phase >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-8 pointer-events-auto"
          >
            <button
              onClick={handleStartNow}
              className="px-16 py-5 rounded-full bg-white text-black font-bold text-2xl border-2 border-transparent hover:bg-black hover:text-white hover:border-white transition-all duration-300 cursor-none"
            >
              Start Now
            </button>
          </motion.div>
        )}
      </div>

      {/* Falling pattern transition overlay */}
      {transitioning && (
        <>
          {/* Falling pattern on black background */}
          <motion.div
            className="fixed inset-0 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" as const }}
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
            transition={{ duration: 3, ease: "easeInOut" as const }}
          />
        </>
      )}
    </div>
  )
}
