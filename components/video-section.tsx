"use client"

import { useEffect, useRef } from "react"

export function VideoSection() {
  const videoRef = useRef<HTMLIFrameElement>(null)

  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Transform Your Business with{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI-Powered Solutions
          </span>
        </h2>

        <div className="relative w-full max-w-7xl mx-auto aspect-[18/9] rounded-2xl overflow-hidden shadow-xl">

          <iframe
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/p9Q5a1Vn-Hk?autoplay=1&mute=1&loop=1&playlist=p9Q5a1Vn-Hk&controls=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
} 
