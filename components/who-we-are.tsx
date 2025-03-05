"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WhoWeAre() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="mb-4 text-3xl font-bold md:text-5xl"
          >
            Who Are{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">We</span>
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
            className="mx-auto h-1 w-24 rounded bg-gradient-to-r from-purple-600 to-pink-600"
          />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={fadeIn}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-2xl font-bold md:text-3xl">Our Story</h3>
            <p className="mb-6 text-lg text-gray-600">
              Founded in 2025, our creative studio began with a vision of empowering businesses with fresh, innovative ideas. Driven by young minds, we are dedicated to transforming brands through unique and energetic creative solutions.
            </p>
            <p className="mb-6 text-lg text-gray-600">
              Our approach combines strategic insight with modern creative execution, ensuring that every project delivers a dynamic impact that resonates with today's audience.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-lg bg-gray-100 px-6 py-3">
                <span className="text-3xl font-bold text-purple-600">5+</span>
                <p className="text-sm text-gray-600">Projects Launched</p>
              </div>
              <div className="rounded-lg bg-gray-100 px-6 py-3">
                <span className="text-3xl font-bold text-pink-600">100%</span>
                <p className="text-sm text-gray-600">Client Dedication</p>
              </div>
              <div className="rounded-lg bg-gray-100 px-6 py-3">
                <span className="text-3xl font-bold text-purple-600">2</span>
                <p className="text-sm text-gray-600">Innovative Ventures</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative h-[500px] overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/17484901/pexels-photo-17484901/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-boundaries-set-in-place-to-secure-safe-accountable-biotechnology-it-was-created-by-artist-khyati-treha.png?auto=compress&cs=tinysrgb&w=600"
                alt="Creative team working together"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-48 w-48 overflow-hidden rounded-xl shadow-xl">
              <Image
                src="https://images.pexels.com/photos/18069157/pexels-photo-18069157/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-the-process-used-by-text-to-image-diffusion-models-it-was-created-by-linus-zoll-as-part-of-the-visualising-ai.png?auto=compress&cs=tinysrgb&w=600"
                alt="Behind the scenes"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -right-6 -top-6 h-32 w-32 overflow-hidden rounded-xl shadow-xl">
              <Image src="https://images.pexels.com/photos/17483848/pexels-photo-17483848/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-a-look-inside-how-ai-microchips-are-designed-it-was-created-by-champ-panupong-techawongthawon-as-part-of-the-v.png?auto=compress&cs=tinysrgb&w=600" alt="Design process" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

