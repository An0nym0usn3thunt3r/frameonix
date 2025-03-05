"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

type Project = {
  id: number
  title: string
  category: string
  image: string
  client: string
  description: string
  year: string
  tags: string[]
}

type FilterCategory =
  | "All"
  | "Graphic Designing"
  | "Video Editing"
  | "UI/UX gn"
  | "Social Media"
  | "Brand Strategy"
  | "Photography"

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [filter, setFilter] = useState<FilterCategory>("All")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const projects: Project[] = [
    // Graphic Designing Projects (updated for Indian brands)
    {
      id: 1,
      title: "Vibrant  Identity",
      category: "Graphic Designing",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/mQKcU6WuCceSM7iE-Alter.png?w=750&h=750",
      client: "",
      description: "Complete brand identity regn including logo, packaging, and marketing materials for , reflecting the innovative spirit of India.",
      year: "2025",
      tags: ["Logo gn", "Packaging", "Brand Guidelines"],
    },
    {
      id: 1,
      title: "Vibrant  Identity",
      category: "Graphic Designing",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/fj0qQAM7SThDtB0z-horror-lady.png?w=750&h=750",
      client: "",
      description: "Complete brand identity regn including logo, packaging, and marketing materials for , reflecting the innovative spirit of India.",
      year: "2025",
      tags: ["Logo gn", "Packaging", "Brand Guidelines"],
    },
    {
      id: 1,
      title: "Vibrant  Identity",
      category: "Graphic Designing",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/H88BXpHu4A401Q3O-framonix-edit-11.png?w=750&h=750",
      client: "",
      description: "Complete brand identity regn including logo, packaging, and marketing materials for , reflecting the innovative spirit of India.",
      year: "2025",
      tags: ["Logo gn", "Packaging", "Brand Guidelines"],
    },
    {
      id: 1,
      title: "Vibrant  Identity",
      category: "Graphic Designing",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/kXGRUBxARYNgYpLP-GIRL-WITH-FACE.png?w=750&h=750",
      client: "",
      description: "Complete brand identity regn including logo, packaging, and marketing materials for , reflecting the innovative spirit of India.",
      year: "2025",
      tags: ["Logo gn", "Packaging", "Brand Guidelines"],
    },
    {
      id: 1,
      title: "Vibrant  Identity",
      category: "Graphic Designing",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/mp2KSypdWVtuKogO-From.png?w=750&h=750",
      client: "",
      description: "Complete brand identity regn including logo, packaging, and marketing materials for , reflecting the innovative spirit of India.",
      year: "2025",
      tags: ["Logo gn", "Packaging", "Brand Guidelines"],
    },
    {
      id: 1,
      title: "Vibrant Identity",
      category: "Graphic Designing",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/n3xcagAIs0mC1VqU-Cloud.png?w=750&h=750",
      client: "",
      description: "Complete brand identity regn including logo, packaging, and marketing materials for , reflecting the innovative spirit of India.",
      year: "2025",
      tags: ["Logo gn", "Packaging", "Brand Guidelines"],
    },
    {
      id: 1,
      title: "Vibrant  Identity",
      category: "Graphic Designing",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/y0BgTCFfuMxGoWf9-Cade.png?w=750&h=750",
      client: "",
      description: "Complete brand identity regn including logo, packaging, and marketing materials for , reflecting the innovative spirit of India.",
      year: "2025",
      tags: ["Logo gn", "Packaging", "Brand Guidelines"],
    },

    // Brand Strategy Projects (updated for Indian brands)
    {
      id: 4,
      title: " Product Campaign",
      category: "Brand Strategy",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/Yao4VPMVFodYPdYN-Untitled-3.png?w=750&h=750",
      client: "Mahindra Group",
      description: "Comprehensive campaign including video, social media, and print materials for a major product launch by Mahindra Group.",
      year: "2025",
      tags: ["Campaign Strategy", "Product Launch", "Integrated Marketing"],
    },
    {
      id: 4,
      title: " Product Campaign",
      category: "Brand Strategy",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/HgbDbh29TuRMpdfz-BANNER-2.png?w=750&h=750",
      client: "Mahindra Group",
      description: "Comprehensive campaign including video, social media, and print materials for a major product launch by Mahindra Group.",
      year: "2025",
      tags: ["Campaign Strategy", "Product Launch", "Integrated Marketing"],
    },
    {
      id: 4,
      title: " Product Campaign",
      category: "Brand Strategy",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/yH4sYJcRmbircvw7-Brand.png?w=750&h=750",
      client: "Mahindra Group",
      description: "Comprehensive campaign including video, social media, and print materials for a major product launch by Mahindra Group.",
      year: "2025",
      tags: ["Campaign Strategy", "Product Launch", "Integrated Marketing"],
    },
    {
      id: 4,
      title: " Product Campaign",
      category: "Brand Strategy",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/8uN5pfpwHYJYramj-NexGen.png?w=750&h=750",
      client: "Mahindra Group",
      description: "Comprehensive campaign including video, social media, and print materials for a major product launch by Mahindra Group.",
      year: "2025",
      tags: ["Campaign Strategy", "Product Launch", "Integrated Marketing"],
    },
    {
      id: 4,
      title: " Product Campaign",
      category: "Brand Strategy",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/OYHYXRfPyj40YjA3-branding2.png?w=750&h=750",
      client: "Mahindra Group",
      description: "Comprehensive campaign including video, social media, and print materials for a major product launch by Mahindra Group.",
      year: "2025",
      tags: ["Campaign Strategy", "Product Launch", "Integrated Marketing"],
    },
    {
      id: 4,
      title: " Product Campaign",
      category: "Brand Strategy",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/tjMgqJGLhhJ8XKhI-1111.png?w=750&h=750",
      client: "Mahindra Group",
      description: "Comprehensive campaign including video, social media, and print materials for a major product launch by Mahindra Group.",
      year: "2025",
      tags: ["Campaign Strategy", "Product Launch", "Integrated Marketing"],
    },

    // Photography Projects (updated for Indian brands)
    {
      id: 8,
      title: "Cultural Lens Photography",
      category: "Photography",
      image: "https://creatorspace.imgix.net/users/cm625f37601nei601ju9koe3t/iRrmxdAP7YLSMmQ7-prime.png?w=750&h=750",
      client: "Luxe India",
      description: "High-end product photography capturing the elegance of Indian gn and cultural heritage.",
      year: "2025",
      tags: ["Product Photography", "Styling", "Post-Production"],
    },
    {
      id: 11,
      title: "Festive Moments",
      category: "Photography",
      image: "https://images.pexels.com/photos/30761487/pexels-photo-30761487/free-photo-of-traditional-fire-ritual-at-night-in-kerala-india.jpeg?auto=compress&cs=tinysrgb&w=600",
      client: "Indian Tech Event",
      description: "Comprehensive event photography capturing the vibrant spirit of Indian tech conferences and cultural moments.",
      year: "2025",
      tags: ["Event Photography", "Photojournalism", "Corporate Events"],
    }
  ]

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === filter))
    }
  }, [filter])

  const loadMoreProjects = () => {
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length))
      setIsLoading(false)
    }, 800)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
              Our Portfolio
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
              Explore our creative projects and see how we've helped iconic Indian brands shine.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="sticky top-0 z-10 bg-white py-6 shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {[
              "All",
              "Graphic Designing",
              // "Video Editing",
              // "UI/UX gn",
              // "Social Media",
              "Brand Strategy",
              "Photography",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category as FilterCategory)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors md:text-base ${
                  filter === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                  variants={fadeIn}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                  onClick={() => setActiveProject(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 w-full p-6 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <h3 className="mb-1 text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-gray-200">Client: {project.client}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                      {project.category}
                    </span>
                    <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={loadMoreProjects}
                disabled={isLoading}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg font-medium text-white transition-all hover:from-purple-700 hover:to-pink-700 disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="mr-2 h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  "Load More Projects"
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-h-[90vh] max-w-4xl overflow-auto rounded-xl bg-white p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 rounded-full bg-gray-200 p-2 text-gray-800 transition-colors hover:bg-gray-300"
                onClick={() => setActiveProject(null)}
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid gap-8 md:grid-cols-2">
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
                      <h4 className="text-sm font-bold text-gray-900">Year</h4>
                      <p className="mt-1 text-sm text-gray-600">{activeProject.year}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Category</h4>
                      <p className="mt-1 text-sm text-gray-600">{activeProject.category}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-bold text-gray-900">Tags</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activeProject.tags.map((tag, index) => (
                        <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
