import type { Metadata } from "next"
import ServicesPage from "@/components/pages/services-page"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Services | Creative Agency",
  description:
    "Explore our comprehensive range of creative services including graphic design, video editing, and social media content creation.",
}

export default function Services() {
  return (
    <>
      <ServicesPage />
      <Footer />
    </>
  )
}

