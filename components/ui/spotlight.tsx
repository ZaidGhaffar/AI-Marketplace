"use client"

import { cn } from "@/lib/utils"
import { useRef, useState, useEffect } from "react"

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className = "", fill = "white" }: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [size, setSize] = useState(0)

  const updateSpotlightPosition = () => {
    if (!divRef.current) return

    const rect = divRef.current.getBoundingClientRect()
    setSize(Math.max(rect.width, rect.height) * 2)
    setOpacity(0.15)
  }

  useEffect(() => {
    updateSpotlightPosition()
    window.addEventListener("resize", updateSpotlightPosition)

    return () => {
      window.removeEventListener("resize", updateSpotlightPosition)
    }
  }, [])

  return (
    <div ref={divRef} className={cn("pointer-events-none absolute inset-0 z-0", className)} aria-hidden="true">
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          opacity,
        }}
      >
        <div
          className="absolute rounded-full blur-[80px]"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
            background: fill,
          }}
        />
      </div>
    </div>
  )
}

