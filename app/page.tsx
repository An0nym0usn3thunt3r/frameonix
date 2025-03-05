import Hero from "@/components/hero"
import WhoWeAre from "@/components/who-we-are"
import OurWork from "@/components/our-work"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhoWeAre />
      <OurWork />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

