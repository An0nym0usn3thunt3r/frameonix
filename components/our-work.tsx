"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

type Project = {
  id: number
  title: string
  category: string
  image: string
  client: string
  description: string
  tags: string[]
}

export default function OurWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Vibrant  Identity",
      category: "Graphic Designing",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/mQKcU6WuCceSM7iE-Alter.png?w=750&h=750",
      client: "",
      description: "Complete brand identity regn including logo, packaging, and marketing materials for , reflecting the innovative spirit of India.",
      tags: ["Logo gn", "Packaging", "Brand Guidelines"],
    },
    {
      id: 1,
      title: "Vibrant  Identity",
      category: "Graphic Designing",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/fj0qQAM7SThDtB0z-horror-lady.png?w=750&h=750",
      client: "",
      description: "Complete brand identity regn including logo, packaging, and marketing materials for , reflecting the innovative spirit of India.",
      tags: ["Logo gn", "Packaging", "Brand Guidelines"],
    },
    {
      id: 1,
      title: "Vibrant  Identity",
      category: "Graphic Designing",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/H88BXpHu4A401Q3O-framonix-edit-11.png?w=750&h=750",
      client: "",
      description: "Complete brand identity regn including logo, packaging, and marketing materials for , reflecting the innovative spirit of India.",
      tags: ["Logo gn", "Packaging", "Brand Guidelines"],
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="work" className="bg-gray-50 py-24">
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
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
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
            Explore our portfolio of creative projects that have helped brands stand out in the digital landscape.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeIn}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-white opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <span className="mb-2 inline-block rounded-full bg-purple-600 px-3 py-1 text-xs font-medium">
                  {project.category}
                </span>
                <h3 className="mb-1 text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-200">Client: {project.client}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-white">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-h-[90vh] max-w-4xl overflow-auto rounded-xl bg-white p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 rounded-full bg-gray-200 p-2 text-gray-800 transition-colors hover:bg-gray-300"
                onClick={() => setActiveProject(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
                  <Image
                    src={activeProject.image || "/placeholder.svg"}
                    alt={activeProject.title}
                    fill
                    className="object-contain bg-black"
                  />
                </div>
                <div>
                  <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                    {activeProject.category}
                  </span>
                  <h3 className="mb-2 text-2xl font-bold">{activeProject.title}</h3>
                  <p className="mb-4 text-sm font-medium text-gray-600">Client: {activeProject.client}</p>
                  <div className="mb-6 h-0.5 w-12 bg-purple-600" />
                  <p className="text-gray-700">{activeProject.description}</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Services</h4>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>Brand Strategy</li>
                        <li>Visual Identity</li>
                        <li>Content Creation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Results</h4>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>45% Increase in Engagement</li>
                        <li>2.3M Social Impressions</li>
                        <li>35% Conversion Rate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

