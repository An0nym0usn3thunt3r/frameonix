"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Palette, Video, Instagram, Layout, Megaphone, Camera, ArrowRight } from "lucide-react"
import Link from "next/link"

type Service = {
  icon: React.ReactNode
  title: string
  description: string
}

export default function Services() {
  const services: Service[] = [
    {
      icon: <Palette className="h-10 w-10 text-purple-600" />,
      title: "Graphic Design",
      description:
        "From logos to complete brand identities, we create visually stunning designs that capture your brand's essence.",
    },
    {
      icon: <Video className="h-10 w-10 text-pink-600" />,
      title: "Video Editing",
      description: "Professional video editing services that transform raw footage into compelling visual stories.",
    },
    {
      icon: <Instagram className="h-10 w-10 text-purple-600" />,
      title: "Social Media Content",
      description: "Engaging content tailored for each platform to maximize your social media presence and engagement.",
    },
    {
      icon: <Layout className="h-10 w-10 text-pink-600" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and drive conversions.",
    },
    {
      icon: <Megaphone className="h-10 w-10 text-purple-600" />,
      title: "Brand Strategy",
      description: "Strategic brand development to position your business effectively in the competitive market.",
    },
    {
      icon: <Camera className="h-10 w-10 text-pink-600" />,
      title: "Photography",
      description: "High-quality photography services that showcase your products and services in the best light.",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="bg-white py-24">
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
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
            className="mx-auto h-1 w-24 rounded bg-gradient-to-r from-purple-600 to-pink-600"
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={fadeIn}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-600"
          >
            We offer a comprehensive range of creative services to help your brand stand out in today's digital
            landscape.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeIn}
              className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <Link
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-purple-600 transition-colors hover:text-purple-800"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          variants={fadeIn}
          className="mt-16 flex justify-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg font-medium text-white transition-all hover:from-purple-700 hover:to-pink-700"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

