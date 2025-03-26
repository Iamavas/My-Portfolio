"use client"

import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Mail, Calendar, Download, ExternalLink, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Testimonial data
const testimonials = [
  {
    name: "Henry Richard",
    title: "Head of Collections | Risk Management",
    date: "January 27, 2025",
    relationship: "Henry worked with Victor but on different teams at CredPal",
    content:
      "Victor Adeniyi is an outstanding product manager whose impact on his team and projects has been nothing short of remarkable. While I didn't have the opportunity to work directly with him, I consistently heard glowing feedback about his ability to manage complex projects and deliver exceptional results. I have no doubt that Victor will continue to excel and create meaningful impact wherever they go.",
  },
  {
    name: "Ndulue Obinna",
    title: "Product Designer",
    date: "January 27, 2025",
    relationship: "Ndulue reported directly to Victor",
    content:
      "I had the privilege of working closely with Victor as a Product Designer, and I can confidently say he is one of the most principled professionals I've ever met. His strong values and integrity guide every decision he makes, ensuring the team always stays aligned with both user needs and business objectives. Victor excels at balancing strategy and execution, effortlessly managing cross-functional teams to deliver impactful results.",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={stagger(0.1)} className="mb-12 md:mb-16 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            I'm always open to new opportunities and collaborations
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Schedule a Meeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Card className="h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl">Schedule a Meeting</CardTitle>
                <CardDescription>Let's connect and discuss your project or opportunity</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Choose a convenient time for us to talk about your ideas, projects, or how we might work together.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full"
                >
                  <a
                    href="https://calendly.com/adeniyivictor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Book a Time
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>Reach out directly or connect on social media</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-2">Email</h3>
                    <a
                      href="mailto:adeniyivictorayo@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    >
                      adeniyivictorayo@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-3">Connect With Me</h3>
                    <div className="flex space-x-3">
                      <a
                        href="https://github.com/Iamavas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 p-3 rounded-full transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                      <a
                        href="https://x.com/I_Avas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 p-3 rounded-full transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a
                        href="https://linkedin.com/in/victoradeniyi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 p-3 rounded-full transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CV Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="h-full bg-gradient-to-br from-blue-600 to-purple-600 text-white border-none shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Looking for a CV?</CardTitle>
                <CardDescription className="text-white/80">
                  Download my resume to learn more about my experience
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-white/90 mb-6">
                  Get a comprehensive overview of my skills, work history, and qualifications in a downloadable format.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" variant="secondary" className="w-full rounded-full font-medium">
                  <a href="/Victor_Adeniyi_CV.pdf" download className="flex items-center justify-center gap-2">
                    <Download className="h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <Quote className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl">Recommendations</CardTitle>
                <CardDescription>What colleagues and clients say about working with me</CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <div className="h-[280px] md:h-[220px]">
                  <TestimonialCarousel testimonials={testimonials} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

