"use client"

import { useEffect } from "react"
import Spline from "@splinetool/react-spline"
import { Application } from "@splinetool/runtime"
import React from "react"
import { cn } from "@/lib/utils"

interface SplineSceneProps {
  scene: string
  className?: string
  onLoadComplete?: () => void
}

// Preload the scene
const preloadScene = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const scene = new Application(document.createElement('canvas'))
    scene.load(url).then(() => resolve(true))
  })
}

let preloadedScenes = new Set<string>()
let preloadPromises = new Map<string, Promise<boolean>>()

export function SplineScene({ scene, className, onLoadComplete }: SplineSceneProps) {
  const [isLoading, setIsLoading] = React.useState(true)

  useEffect(() => {
    if (!preloadedScenes.has(scene)) {
      if (!preloadPromises.has(scene)) {
        const promise = preloadScene(scene).then(() => {
          preloadedScenes.add(scene)
          setIsLoading(false)
          onLoadComplete?.()
        })
        preloadPromises.set(scene, promise)
      } else {
        preloadPromises.get(scene)?.then(() => {
          setIsLoading(false)
          onLoadComplete?.()
        })
      }
    } else {
      setIsLoading(false)
      onLoadComplete?.()
    }
  }, [scene, onLoadComplete])

  return (
    <div className={cn("relative", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}
      <Spline scene={scene} />
    </div>
  )
}

