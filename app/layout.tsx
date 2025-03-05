import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frameonix Studio | Transforming Brands with Creativity",
  description: "Expert graphic design and video editing tailored to elevate your social media presence.",
  generator: 'v0.dev',
  openGraph: {
    title: "Frameonix Studio | Transforming Brands with Creativity",
    description: "Expert graphic design and video editing tailored to elevate your social media presence.",
    type: "website",
    url: "https://frameonix.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frameonix Studio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Frameonix Studio | Transforming Brands with Creativity",
    description: "Expert graphic design and video editing tailored to elevate your social media presence.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://frameonix.com"
  },
  other: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Frameonix Studio",
    description: "Expert graphic design and video editing tailored to elevate your social media presence.",
    url: "https://frameonix.com",
    logo: "https://frameonix.com/logo.png",
    sameAs: [
      "https://twitter.com/frameonix",
      "https://instagram.com/frameonix",
      "https://linkedin.com/company/frameonix"
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
        <Analytics/>
      </body>
    </html>
  )
}



import './globals.css'
