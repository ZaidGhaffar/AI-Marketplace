"use client"

import { useState, useRef } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

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
          {!isPlaying ? (
            // Thumbnail with play button
            <div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer"
              onClick={handlePlay}
              style={{
                backgroundImage: "url('https://www.thesoftwarereport.com/wp-content/uploads/2021/05/Microsoft.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Play Button */}
              <div className="bg-black bg-opacity-50 p-4 rounded-full">
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>
          ) : (
            // YouTube Video (only loads when clicked)
            <iframe
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/p9Q5a1Vn-Hk?autoplay=1&controls=0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
