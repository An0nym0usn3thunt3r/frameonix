import type { Metadata } from "next"
import PortfolioPage from "@/components/pages/portfolio-page"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Portfolio | Creative Agency",
  description:
    "Explore our portfolio of creative projects including graphic design, video editing, and social media content.",
}

export default function Portfolio() {
  return (
    <>
      <PortfolioPage />
      <Footer />
    </>
  )
}

