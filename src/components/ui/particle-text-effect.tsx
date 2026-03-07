"use client"

import { useEffect, useRef, useImperativeHandle, forwardRef } from "react"

interface Vector2D {
  x: number
  y: number
}

class Particle {
  pos: Vector2D = { x: 0, y: 0 }
  vel: Vector2D = { x: 0, y: 0 }
  acc: Vector2D = { x: 0, y: 0 }
  target: Vector2D = { x: 0, y: 0 }

  closeEnoughTarget = 100
  maxSpeed = 1.0
  maxForce = 0.1
  particleSize = 10
  isKilled = false

  startColor = { r: 255, g: 255, b: 255 }
  targetColor = { r: 255, g: 255, b: 255 }
  colorWeight = 0
  colorBlendRate = 0.01

  move() {
    let proximityMult = 1
    const distance = Math.sqrt(Math.pow(this.pos.x - this.target.x, 2) + Math.pow(this.pos.y - this.target.y, 2))
    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget
    }

    const towardsTarget = { x: this.target.x - this.pos.x, y: this.target.y - this.pos.y }
    const magnitude = Math.sqrt(towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y)
    if (magnitude > 0) {
      towardsTarget.x = (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult
      towardsTarget.y = (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult
    }

    const steer = { x: towardsTarget.x - this.vel.x, y: towardsTarget.y - this.vel.y }
    const steerMag = Math.sqrt(steer.x * steer.x + steer.y * steer.y)
    if (steerMag > 0) {
      steer.x = (steer.x / steerMag) * this.maxForce
      steer.y = (steer.y / steerMag) * this.maxForce
    }

    this.acc.x += steer.x
    this.acc.y += steer.y
    this.vel.x += this.acc.x
    this.vel.y += this.acc.y
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.acc.x = 0
    this.acc.y = 0
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0)
    }
    const r = Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight)
    const g = Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight)
    const b = Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight)

    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
    ctx.fillRect(this.pos.x, this.pos.y, 2, 2)
  }

  kill(width: number, height: number) {
    if (!this.isKilled) {
      const angle = Math.random() * Math.PI * 2
      const mag = (width + height) / 2
      this.target.x = width / 2 + Math.cos(angle) * mag
      this.target.y = height / 2 + Math.sin(angle) * mag
      this.maxSpeed = Math.random() * 10 + 8
      this.maxForce = this.maxSpeed * 0.05

      this.startColor = {
        r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
      }
      this.targetColor = { r: 0, g: 0, b: 0 }
      this.colorWeight = 0
      this.isKilled = true
    }
  }
}

export interface ParticleTextHandle {
  killAll: () => void
  showLines: (lines: string[]) => void
}

interface ParticleTextEffectProps {
  lines?: string[]
  className?: string
  fontSize?: number
  lineHeight?: number
}

export const ParticleTextEffect = forwardRef<ParticleTextHandle, ParticleTextEffectProps>(
  function ParticleTextEffect({ lines = ["HELLO"], className, fontSize = 80, lineHeight = 1.2 }, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number>(0)
    const particlesRef = useRef<Particle[]>([])
    const containerRef = useRef<HTMLDivElement>(null)
    const currentLinesRef = useRef<string[]>([])
    const solidifyStartRef = useRef<number | null>(null)
    const solidifyProgressRef = useRef(0)

    const pixelSteps = 5

    const generateRandomPos = (x: number, y: number, mag: number): Vector2D => {
      const angle = Math.random() * Math.PI * 2
      return {
        x: x + Math.cos(angle) * mag,
        y: y + Math.sin(angle) * mag,
      }
    }

    const renderLines = (textLines: string[], canvas: HTMLCanvasElement) => {
      const offscreen = document.createElement("canvas")
      offscreen.width = canvas.width
      offscreen.height = canvas.height
      const offCtx = offscreen.getContext("2d")!

      const scaledFontSize = fontSize * (canvas.width / 1000)
      const scaledLineHeight = scaledFontSize * lineHeight

      offCtx.fillStyle = "white"
      offCtx.textAlign = "center"
      offCtx.textBaseline = "middle"

      const totalHeight = textLines.length * scaledLineHeight
      const startY = (canvas.height - totalHeight) / 2 + scaledLineHeight / 2

      textLines.forEach((line, i) => {
        const isFirst = i === 0
        offCtx.font = `${isFirst ? 'bold' : '600'} ${isFirst ? scaledFontSize * 1.3 : scaledFontSize}px system-ui, -apple-system, sans-serif`
        offCtx.fillText(line, canvas.width / 2, startY + i * scaledLineHeight)
      })

      const imageData = offCtx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = imageData.data
      const particles = particlesRef.current
      let particleIndex = 0

      const coordsIndexes: number[] = []
      for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
        coordsIndexes.push(i)
      }

      for (let i = coordsIndexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[coordsIndexes[i], coordsIndexes[j]] = [coordsIndexes[j], coordsIndexes[i]]
      }

      for (const coordIndex of coordsIndexes) {
        const alpha = pixels[coordIndex + 3]
        if (alpha > 0) {
          const x = (coordIndex / 4) % canvas.width
          const y = Math.floor(coordIndex / 4 / canvas.width)

          let particle: Particle
          if (particleIndex < particles.length) {
            particle = particles[particleIndex]
            particle.isKilled = false
            particleIndex++
          } else {
            particle = new Particle()
            const randomPos = generateRandomPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2)
            particle.pos.x = randomPos.x
            particle.pos.y = randomPos.y
            particle.maxSpeed = Math.random() * 6 + 4
            particle.maxForce = particle.maxSpeed * 0.05
            particle.particleSize = Math.random() * 4 + 2
            particle.colorBlendRate = Math.random() * 0.02 + 0.005
            particles.push(particle)
          }

          particle.startColor = {
            r: particle.startColor.r + (particle.targetColor.r - particle.startColor.r) * particle.colorWeight,
            g: particle.startColor.g + (particle.targetColor.g - particle.startColor.g) * particle.colorWeight,
            b: particle.startColor.b + (particle.targetColor.b - particle.startColor.b) * particle.colorWeight,
          }
          particle.targetColor = { r: 255, g: 255, b: 255 }
          particle.colorWeight = 0
          particle.target.x = x
          particle.target.y = y
        }
      }

      for (let i = particleIndex; i < particles.length; i++) {
        particles[i].kill(canvas.width, canvas.height)
      }
    }

    useImperativeHandle(ref, () => ({
      killAll: () => {
        const canvas = canvasRef.current
        if (!canvas) return
        solidifyProgressRef.current = 0
        solidifyStartRef.current = null
        particlesRef.current.forEach((p) => p.kill(canvas.width, canvas.height))
      },
      showLines: (newLines: string[]) => {
        const canvas = canvasRef.current
        if (!canvas) return
        currentLinesRef.current = newLines
        solidifyProgressRef.current = 0
        solidifyStartRef.current = performance.now() + 2500
        renderLines(newLines, canvas)
      },
    }))

    useEffect(() => {
      const canvas = canvasRef.current
      const container = containerRef.current
      if (!canvas || !container) return

      const resize = () => {
        const rect = container.getBoundingClientRect()
        canvas.width = rect.width * window.devicePixelRatio
        canvas.height = rect.height * window.devicePixelRatio
        canvas.style.width = `${rect.width}px`
        canvas.style.height = `${rect.height}px`
        renderLines(lines, canvas)
      }

      resize()
      window.addEventListener("resize", resize)

      const drawSolidText = (ctx: CanvasRenderingContext2D) => {
        const textLines = currentLinesRef.current
        if (textLines.length === 0 || solidifyProgressRef.current <= 0) return

        const scaledFontSize = fontSize * (canvas.width / 1000)
        const scaledLineHeight = scaledFontSize * lineHeight
        const totalHeight = textLines.length * scaledLineHeight
        const startY = (canvas.height - totalHeight) / 2 + scaledLineHeight / 2

        ctx.save()
        ctx.globalAlpha = solidifyProgressRef.current
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        textLines.forEach((line, i) => {
          const isFirst = i === 0
          ctx.font = `${isFirst ? 'bold' : '600'} ${isFirst ? scaledFontSize * 1.3 : scaledFontSize}px system-ui, -apple-system, sans-serif`
          ctx.fillText(line, canvas.width / 2, startY + i * scaledLineHeight)
        })
        ctx.restore()
      }

      const animate = () => {
        const ctx = canvas.getContext("2d")!
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Update solidify progress
        if (solidifyStartRef.current !== null) {
          const elapsed = performance.now() - solidifyStartRef.current
          if (elapsed > 0) {
            solidifyProgressRef.current = Math.min(elapsed / 1500, 1)
          }
        }

        // Draw solid text underneath particles (fills gaps gradually)
        drawSolidText(ctx)

        const particles = particlesRef.current
        for (let i = particles.length - 1; i >= 0; i--) {
          const particle = particles[i]
          particle.move()
          particle.draw(ctx)

          if (particle.isKilled) {
            if (
              particle.pos.x < -50 || particle.pos.x > canvas.width + 50 ||
              particle.pos.y < -50 || particle.pos.y > canvas.height + 50
            ) {
              particles.splice(i, 1)
            }
          }
        }

        animationRef.current = requestAnimationFrame(animate)
      }

      animate()

      return () => {
        window.removeEventListener("resize", resize)
        cancelAnimationFrame(animationRef.current)
      }
    }, [])

    return (
      <div ref={containerRef} className={className}>
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    )
  }
)
