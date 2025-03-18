"use client"

import { useEffect } from "react"
import Spline from "@splinetool/react-spline"
import { Application } from "@splinetool/runtime"

interface SplineSceneProps {
  scene: string
  className?: string
}

// Preload the scene
const preloadScene = (url: string) => {
  return new Promise((resolve) => {
    const scene = new Application(document.createElement('canvas'))
    scene.load(url).then(() => resolve(true))
  })
}

let preloadedScenes = new Set<string>()

export function SplineScene({ scene, className }: SplineSceneProps) {
  useEffect(() => {
    if (!preloadedScenes.has(scene)) {
      preloadScene(scene).then(() => {
        preloadedScenes.add(scene)
      })
    }
  }, [scene])

  return (
    <div className={className}>
      <Spline scene={scene} />
    </div>
  )
}

