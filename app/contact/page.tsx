import type { Metadata } from "next"
import ContactPage from "@/components/pages/contact-page"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us | Creative Agency",
  description:
    "Get in touch with our creative team to discuss your project needs and how we can help transform your brand.",
}

export default function Contact() {
  return (
    <>
      <ContactPage />
      <Footer />
    </>
  )
}

