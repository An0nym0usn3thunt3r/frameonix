"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Palette, Video, Instagram, Layout, Megaphone, Camera, ArrowRight, ChevronRight } from "lucide-react"

type Service = {
  id: string
  icon: React.ReactNode
  title: string
  shortDescription: string
  longDescription: string
  features: string[]
  image: string
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null)

  const services: Service[] = [
    {
      id: "graphic-design",
      icon: <Palette className="h-10 w-10 text-purple-600" />,
      title: "Graphic Design",
      shortDescription:
        "From logos to complete brand identities, we create visually stunning designs that capture your brand's essence.",
      longDescription:
        "Our graphic design services help businesses establish a strong visual presence through thoughtful and strategic design solutions. We specialize in creating memorable brand identities, marketing materials, and digital assets that communicate your brand's unique value proposition.",
      features: [
        "Logo Design & Brand Identity",
        "Print & Digital Marketing Materials",
        "Packaging Design",
        "Illustration & Infographics",
        "Publication Design",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "video-editing",
      icon: <Video className="h-10 w-10 text-pink-600" />,
      title: "Video Editing",
      shortDescription:
        "Professional video editing services that transform raw footage into compelling visual stories.",
      longDescription:
        "Our video editing team combines technical expertise with creative storytelling to produce high-quality videos that engage and inspire your audience. From promotional videos to social media content, we help you communicate your message effectively through the power of video.",
      features: [
        "Commercial & Promotional Videos",
        "Social Media Content",
        "Motion Graphics & Animation",
        "Color Grading & Visual Effects",
        "Video Optimization for Different Platforms",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "social-media",
      icon: <Instagram className="h-10 w-10 text-purple-600" />,
      title: "Social Media Content",
      shortDescription:
        "Engaging content tailored for each platform to maximize your social media presence and engagement.",
      longDescription:
        "Our social media content services help businesses build a strong online presence through strategic content creation and management. We develop platform-specific content strategies that align with your brand voice and business objectives to drive engagement and growth.",
      features: [
        "Platform-Specific Content Creation",
        "Social Media Strategy Development",
        "Content Calendar Planning",
        "Community Management",
        "Performance Analytics & Reporting",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "ui-ux-design",
      icon: <Layout className="h-10 w-10 text-pink-600" />,
      title: "UI/UX Design",
      shortDescription: "User-centered design solutions that enhance user experience and drive conversions.",
      longDescription:
        "Our UI/UX design services focus on creating intuitive, user-friendly digital experiences that delight users and achieve business goals. We combine research, strategy, and design thinking to develop websites and applications that are both beautiful and functional.",
      features: [
        "User Research & Persona Development",
        "Information Architecture",
        "Wireframing & Prototyping",
        "Visual Design & UI Systems",
        "Usability Testing & Optimization",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "brand-strategy",
      icon: <Megaphone className="h-10 w-10 text-purple-600" />,
      title: "Brand Strategy",
      shortDescription: "Strategic brand development to position your business effectively in the competitive market.",
      longDescription:
        "Our brand strategy services help businesses define their unique position in the market and develop a cohesive brand identity that resonates with their target audience. We work closely with you to understand your business goals and create a strategic roadmap for your brand's growth.",
      features: [
        "Brand Positioning & Messaging",
        "Competitive Analysis",
        "Target Audience Research",
        "Brand Voice & Personality Development",
        "Brand Guidelines & Implementation",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "photography",
      icon: <Camera className="h-10 w-10 text-pink-600" />,
      title: "Photography",
      shortDescription: "High-quality photography services that showcase your products and services in the best light.",
      longDescription:
        "Our photography services capture the essence of your brand, products, and services through high-quality, professional imagery. Whether you need product photography, lifestyle shots, or corporate headshots, we deliver visually compelling images that tell your brand's story.",
      features: [
        "Product Photography",
        "Lifestyle & Brand Photography",
        "Corporate Headshots & Team Photos",
        "Event Coverage",
        "Photo Editing & Retouching",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-800 py-24 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Our Services
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "6rem" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 w-24 rounded bg-white"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 max-w-2xl text-lg text-gray-200"
            >
              We offer a comprehensive range of creative services to help your brand stand out in today's digital
              landscape.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="mb-4 text-gray-600">{service.shortDescription}</p>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-purple-600 transition-colors hover:text-purple-800"
                >
                  Contact Us
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${
                    activeService === service.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scrolling Sections */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-4 text-3xl font-bold md:text-4xl"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Process
              </span>
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
              We follow a structured approach to deliver exceptional results for every project.
            </motion.p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 scrollbar-hide">
              {[
                {
                  title: "Discovery",
                  icon: "🔍",
                  description:
                    "We start by understanding your business, goals, and target audience to develop a strategic approach.",
                },
                {
                  title: "Strategy",
                  icon: "🧠",
                  description:
                    "Based on our findings, we create a tailored strategy that aligns with your business objectives.",
                },
                {
                  title: "Creation",
                  icon: "✏️",
                  description:
                    "Our creative team brings the strategy to life through design, content, and development.",
                },
                {
                  title: "Refinement",
                  icon: "🔄",
                  description: "We iterate and refine our work based on feedback to ensure it meets your expectations.",
                },
                {
                  title: "Delivery",
                  icon: "🚀",
                  description: "Once approved, we deliver the final assets and provide support for implementation.",
                },
                {
                  title: "Evaluation",
                  icon: "📊",
                  description: "We measure the performance of our work and make adjustments to optimize results.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex min-w-[280px] snap-center flex-col items-center rounded-xl bg-white p-6 shadow-sm sm:min-w-[320px] md:min-w-[400px]"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-3xl">
                    {step.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                  <p className="text-center text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-800 py-20 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold md:text-4xl"
            >
              Ready to Transform Your Brand?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl text-lg text-gray-200"
            >
              Let's discuss how our creative services can help you achieve your business goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-medium text-purple-900 transition-all hover:bg-gray-100"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
