"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, ShoppingCart } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  title: string
  description: string
  price: number
  videoUrl: string
  category: string
  popular?: boolean
  thumbnailUrl: string // Add this for custom thumbnail URL
}

export function ProductCard({ title, description, price, videoUrl, category, popular = false, thumbnailUrl }: ProductCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const videoId = getYouTubeId(videoUrl)

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
          {!isPlaying ? (
            <div className="w-full h-full relative">
              <Image
                src={thumbnailUrl}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity hover:bg-black/30" />
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
              className="w-full h-full absolute top-0 left-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          <Button
            variant="secondary"
            size="icon"
            className="absolute bottom-3 right-3 rounded-full opacity-90 hover:opacity-100 bg-white/90 hover:bg-white z-10"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </Button>
        </div>
        <div className="absolute top-3 left-3 flex gap-2 z-10">
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
