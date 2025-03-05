import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServiceDetailPage from "@/components/pages/service-detail-page"
import Footer from "@/components/footer"

type ServiceParams = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServiceParams): Promise<Metadata> {
  const slug = params.slug

  // This would typically come from a database or CMS
  const services = {
    "graphic-design": {
      title: "Graphic Design Services | Creative Agency",
      description:
        "Professional graphic design services including logo design, brand identity, marketing materials, and more.",
    },
    "video-editing": {
      title: "Video Editing Services | Creative Agency",
      description:
        "Professional video editing services for promotional videos, social media content, motion graphics, and more.",
    },
    "social-media": {
      title: "Social Media Content Services | Creative Agency",
      description: "Strategic social media content creation and management to build your brand's online presence.",
    },
    "ui-ux-design": {
      title: "UI/UX Design Services | Creative Agency",
      description: "User-centered design solutions that enhance user experience and drive conversions.",
    },
    "brand-strategy": {
      title: "Brand Strategy Services | Creative Agency",
      description: "Strategic brand development to position your business effectively in the competitive market.",
    },
    photography: {
      title: "Photography Services | Creative Agency",
      description: "Professional photography services to showcase your products and services in the best light.",
    },
  }

  const service = services[slug as keyof typeof services]

  if (!service) {
    return {
      title: "Service Not Found | Creative Agency",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

export default function ServiceDetail({ params }: ServiceParams) {
  const slug = params.slug

  // List of valid service slugs
  const validSlugs = [
    "graphic-design",
    "video-editing",
    "social-media",
    "ui-ux-design",
    "brand-strategy",
    "photography",
  ]

  // Check if the slug is valid
  if (!validSlugs.includes(slug)) {
    notFound()
  }

  return (
    <>
      <ServiceDetailPage slug={slug} />
      <Footer />
    </>
  )
}

