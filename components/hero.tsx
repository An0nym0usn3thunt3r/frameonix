"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/25744121/11904048_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 to-black/40" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center px-6 md:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Transforming Brands with{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Creativity
              </span>
            </h1>
            <p className="mb-8 text-xl text-gray-300 md:text-2xl">
              Expert graphic design and video editing tailored to elevate your social media presence.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="#work"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg font-medium text-white transition-all hover:from-purple-700 hover:to-pink-700"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 text-lg font-medium text-white transition-all hover:bg-white/10"
              >
                Let's Collaborate
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="mb-2 text-sm font-medium text-white">Scroll Down</span>
          <div className="h-10 w-[2px] bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

