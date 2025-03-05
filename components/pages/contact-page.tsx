"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Mail, Phone, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    try {
      // This would be replaced with actual Resend API implementation
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      })

      form.reset()
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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
              Contact Us
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
              Ready to transform your brand? Let's discuss how we can help you achieve your creative goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-between"
            >
              <div>
                <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
                <p className="mb-8 text-gray-600">
                  Have questions or want to discuss a project? Reach out to us using the contact information below or
                  fill out the form.
                </p>

                <div className="mb-8 space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Monday to Friday, 9am to 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Email</h4>
                      <p className="text-gray-600">hello@creativeagency.com</p>
                      <p className="text-sm text-gray-500">We'll respond as soon as possible</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Location</h4>
                      <p className="text-gray-600">123 Creative Street, Design District</p>
                      <p className="text-gray-600">New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-purple-600 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-purple-600 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-purple-600 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-purple-600 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-xl bg-white p-8 shadow-lg"
            >
              <h3 className="mb-6 text-2xl font-bold">Send Us a Message</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882426698!3d40.74076987932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1677542332972!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-4 text-3xl font-bold md:text-4xl"
            >
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Questions
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
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "What services do you offer?",
                answer:
                  "We offer a comprehensive range of creative services including graphic design, video editing, social media content creation, UI/UX design, brand strategy, and photography.",
              },
              {
                question: "How much do your services cost?",
                answer:
                  "Our pricing varies depending on the scope and requirements of each project. We provide customized quotes based on your specific needs. Contact us for a free consultation and quote.",
              },
              {
                question: "What is your typical process for working with new clients?",
                answer:
                  "Our process typically involves an initial consultation to understand your needs, followed by a proposal, project planning, execution, and review. We maintain open communication throughout to ensure your satisfaction.",
              },
              {
                question: "How long does a typical project take to complete?",
                answer:
                  "Project timelines vary depending on complexity and scope. A simple logo design might take 1-2 weeks, while a comprehensive brand identity could take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                variants={fadeIn}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

