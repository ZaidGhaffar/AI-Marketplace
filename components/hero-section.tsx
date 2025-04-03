"use client"

import { SplineScene } from "@/components/ui/spline-scene"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FullPageLoader } from "@/components/ui/full-page-loader"
import { useState } from "react"

export function HeroSection() {
  const [isModelLoaded, setIsModelLoaded] = useState(false)

  return (
    <>
      <FullPageLoader isLoading={!isModelLoaded} />
      <section id="home" className="relative min-h-screen pt-16 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(120, 119, 198, 0.3)" />

        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left content */}
            <div className="flex-1 z-10 mb-12 md:mb-0">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Hire AI Agents
                </span>
                <br />
                <span>For Your Business</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-xl">
                Our marketplace connects you with specialized AI agents designed to automate tasks, enhance productivity,
                and transform your business operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Explore Agents <ArrowRight size={16} />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right content - 3D Robot */}
            <div className="flex-1 relative h-[500px] md:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10 md:hidden" />
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
                onLoadComplete={() => setIsModelLoaded(true)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

