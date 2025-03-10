"use client";
import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">Frameonix Studio</h3>
            <p className="mb-4 text-gray-400">
              Transforming brands with creativity and innovation. We help businesses stand out in the digital landscape.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center rounded-full bg-gray-800 p-2 text-white transition-colors hover:bg-gray-700"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 transition-colors hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Newsletter</h3>
            <p className="mb-4 text-gray-400">Subscribe to our newsletter to receive updates and creative insights.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 font-medium text-white transition-colors hover:from-purple-700 hover:to-pink-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Frameonix Studio. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link href="#" className="text-gray-400 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 transition-colors hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

