"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, ShoppingCart } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  price: number
  videoUrl: string
  category: string
  popular?: boolean
}

export function ProductCard({ title, description, price, videoUrl, category, popular = false }: ProductCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <div className="aspect-video bg-muted relative overflow-hidden">
          <video ref={videoRef} src={videoUrl} className="w-full h-full object-cover" loop muted onClick={togglePlay} />
          <Button
            variant="secondary"
            size="icon"
            className="absolute bottom-3 right-3 rounded-full opacity-90 hover:opacity-100"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </Button>
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary">{category}</Badge>
          {popular && <Badge variant="destructive">Popular</Badge>}
        </div>
      </div>

      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center border-t p-4">
        <div className="font-bold text-xl">${price.toFixed(2)}</div>
        <Button className="gap-2">
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

