'use client'

import { Header } from "@/components/ui/header-2"
import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function ContactPage() {
  const [lang, setLang] = useState<'en' | 'es'>('en')
  const [isMobile, setIsMobile] = useState(false)
  const mobileVideoRef = useRef<HTMLVideoElement>(null)
  const [videoEnded, setVideoEnded] = useState(false)
  const [showSpline3D, setShowSpline3D] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (!isMobile) return
    const timer = setTimeout(() => setShowSpline3D(true), 3000)
    return () => clearTimeout(timer)
  }, [isMobile])

  // Mobile version: video bg + 3D Spline on right
  if (isMobile) {
    return (
      <div className="h-screen w-full bg-black relative flex flex-col overflow-hidden fixed inset-0">
        {/* Video background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute inset-[-20px]"
            animate={videoEnded ? {
              x: [0, -8, 5, -3, 7, -5, 2, -6, 4, 0],
              y: [0, 5, -7, 4, -3, 6, -8, 3, -5, 0],
              scale: [1.02, 1.03, 1.02, 1.035, 1.02, 1.03, 1.025, 1.035, 1.02, 1.02],
            } : {}}
            transition={videoEnded ? {
              duration: 20,
              repeat: Infinity,
              repeatType: "mirror" as const,
              ease: "easeInOut",
            } : {}}
          >
            <video
              ref={mobileVideoRef}
              autoPlay
              muted
              playsInline
              className="h-full w-full object-cover"
              onEnded={() => setVideoEnded(true)}
            >
              <source src="/videos/liquid-glass.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1] bg-black/40" />

        {/* Logo + Lang switch */}
        <div className="w-full z-40 relative flex items-center justify-between px-4" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
          <a href="/">
            <img src="/images/Untitled design(27).png" alt="VION" className="h-16 w-auto" />
          </a>
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10 transition-all duration-200"
          >
            <span className={lang === 'en' ? 'text-white' : 'text-neutral-500'}>EN</span>
            <span className="text-neutral-500">/</span>
            <span className={lang === 'es' ? 'text-white' : 'text-neutral-500'}>ES</span>
          </button>
        </div>

        {/* 3D Spline — full width with book page flip */}
        <div className="flex-1 relative z-10" style={{ perspective: '1500px' }}>
          <AnimatePresence>
            {showSpline3D && (
              <motion.div
                className="absolute inset-0 origin-right"
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Spline
                  scene="https://prod.spline.design/5a7A2AD8SAW2juV8/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    )
  }

  // Desktop version: black bg + Spline animation at bottom
  return (
    <div className="h-screen w-full bg-black relative overflow-hidden">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-auto">
        <Header lang={lang} onLangChange={(l) => setLang(l)} />
      </div>

      {/* 3D Spline animation — bottom of screen */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] z-10">
        <Spline
          scene="https://prod.spline.design/x97P76bNBU1H0K3U/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}
