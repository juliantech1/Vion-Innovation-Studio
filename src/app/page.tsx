'use client'

import Spline from '@splinetool/react-spline'
import { Header } from "@/components/ui/header-2"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('en')
  const [activeBtn, setActiveBtn] = useState(-1) // -1 = none selected
  const router = useRouter()
  const [curtainClosing, setCurtainClosing] = useState(false)
  const touchStartY = useRef(0)

  const handleNavClick = (href: string) => {
    if (href === '#') return
    setCurtainClosing(true)
    setTimeout(() => {
      router.push(href)
    }, 700)
  }

  const navItems = [
    { en: 'Work', es: 'Trabajo', href: '/work' },
    { en: 'Services', es: 'Servicios', href: '#' },
    { en: 'About', es: 'Nosotros', href: '/about' },
    { en: 'Blog', es: 'Blog', href: '/blog' },
    { en: 'Contact', es: 'Contacto', href: '/contact' },
  ]

  useEffect(() => {
    // Ensure iOS chrome is black on home
    const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null
    if (meta) meta.content = '#000000'

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.height = '100%'
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.height = ''
    }
  }, [])

  // Carousel: continuous touchmove tracking for ultra-fluid scroll
  const accumulatedDelta = useRef(0)
  const stepSize = 18

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      accumulatedDelta.current = 0
    }

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY
      const delta = touchStartY.current - currentY
      accumulatedDelta.current += delta
      touchStartY.current = currentY

      if (Math.abs(accumulatedDelta.current) < stepSize) return

      const direction = accumulatedDelta.current > 0 ? -1 : 1
      accumulatedDelta.current = 0

      setActiveBtn((prev) => {
        if (prev === -1) return 2
        const next = prev + direction
        return Math.max(0, Math.min(next, navItems.length - 1))
      })
    }

    // Also support mouse wheel for desktop
    const handleWheel = (e: WheelEvent) => {
      accumulatedDelta.current += e.deltaY
      if (Math.abs(accumulatedDelta.current) < stepSize) return

      const direction = accumulatedDelta.current > 0 ? -1 : 1
      accumulatedDelta.current = 0

      setActiveBtn((prev) => {
        if (prev === -1) return 2
        const next = prev + direction
        return Math.max(0, Math.min(next, navItems.length - 1))
      })
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [navItems.length])

  return (
    <motion.div
      className="h-screen w-full bg-black relative flex flex-col overflow-hidden fixed inset-0"
      animate={curtainClosing ? { y: '120vh', rotate: 6, scale: 0.8, opacity: 0 } : {}}
      transition={curtainClosing ? { duration: 0.7, ease: [0.55, 0, 1, 0.45] } : {}}
      style={{ transformOrigin: 'center top' }}
    >
      {/* Navigation Header */}
      <div className="w-full z-40 relative">
        <Header lang={lang} onLangChange={(l) => setLang(l)} />
      </div>

      {/* Content: left nav buttons — MetaLab-style scroll */}
      <div className="flex-1 relative z-10 flex items-center">
        <div className="pl-4 relative">
          <motion.div
            className="flex flex-col gap-2"
            animate={{ y: activeBtn > 0 ? -(activeBtn * 52) : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {navItems.map((item, i) => {
              const isActive = i === activeBtn
              const distance = activeBtn === -1 ? 0 : Math.abs(i - activeBtn)
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{
                    opacity: activeBtn === -1 ? 1 : isActive ? 1 : Math.max(0.25, 1 - distance * 0.25),
                    x: 0,
                    scale: isActive ? 1.12 : activeBtn === -1 ? 1 : Math.max(0.85, 1 - distance * 0.06),
                  }}
                  transition={{
                    opacity: { type: "spring", stiffness: 400, damping: 30 },
                    scale: { type: "spring", stiffness: 400, damping: 30 },
                    x: { delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" },
                  }}
                  style={{ transformOrigin: 'left center' }}
                >
                  <div onClick={() => handleNavClick(item.href)} className="cursor-pointer">
                    <ShimmerButton
                      shimmerColor="rgba(255,255,255,0.15)"
                      shimmerSize="0.05em"
                      shimmerDuration="3s"
                      borderRadius="12px"
                      background={isActive ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.6)"}
                      className={`w-[8rem] py-3 text-base font-semibold justify-center text-white transition-colors duration-200 ${
                        isActive ? 'ring-[1.5px] ring-white/90' : ''
                      }`}
                    >
                      {item[lang]}
                    </ShimmerButton>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* 3D Spline animation — bottom of screen */}
      <div className="absolute bottom-0 left-0 right-0 h-[45vh] z-0">
        <Spline
          scene="https://prod.spline.design/x97P76bNBU1H0K3U/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

    </motion.div>
  )
}
