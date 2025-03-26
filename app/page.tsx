"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import DownloadCVButton from "@/components/download-cv-button"
import { motion } from "framer-motion"
import { fadeUp, stagger, slideFromLeft, slideFromRight } from "@/lib/animations"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger(0.1)}
          className="max-w-5xl mx-auto px-4 sm:px-6"
        >
          <motion.div variants={fadeUp} className="relative w-64 h-64 md:w-80 md:h-80 mb-8 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-30"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
              <Image src="/images/profile.png" alt="Victor Adeniyi" fill className="object-cover" priority />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          >
            Victor<span>.dev</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-slate-700 dark:text-slate-300"
          >
            Product Manager specializing in CRM automation, financial solutions, and trading platforms
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/about">About Me</Link>
            </Button>
            <DownloadCVButton />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 md:mt-12 flex justify-center space-x-4">
            <Link href="https://github.com/Iamavas/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://x.com/I_Avas" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/victoradeniyi" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 md:mt-16 animate-bounce">
            <Link
              href="#featured-work"
              scroll={false}
              className="text-sm font-medium text-slate-500 dark:text-slate-400 flex flex-col items-center"
            >
              <span>Scroll to discover</span>
              <span className="mt-2">↓</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section id="featured-work" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Here are some of the impactful products I've built and managed throughout my career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* BEAM Trading Platform - Update to CredPal App */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideFromLeft}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-6">
                <Image
                  src="/images/companies/credpal.png"
                  alt="CredPal logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">CredPal App</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    <a
                      href="https://credpal.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      CredPal
                    </a>{" "}
                    | 2023
                  </p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Fintech app offering BNPL, credit cards, savings, and investments. Impact: Expanded financial inclusion.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                  Flutter
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 rounded-full text-sm">
                  Payment APIs
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">
                  Credit Scoring
                </span>
              </div>
            </motion.div>

            {/* AI CRM Automation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideFromRight}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-6">
                <Image src="/images/companies/enif.png" alt="Enif logo" width={60} height={60} className="rounded-lg" />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">AI CRM Automation</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    <a
                      href="https://enif.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      Enif AI
                    </a>{" "}
                    | 2024
                  </p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                AI-powered CRM enhancing customer interactions via NLP, with 30% adoption increase and 20% CSAT boost.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full text-sm">
                  AI/ML
                </span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </motion.div>

            {/* Melon */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideFromLeft}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-6">
                <Image
                  src="/images/companies/melon.png"
                  alt="Melon logo"
                  width={60}
                  height={60}
                  className="rounded-lg bg-black"
                />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">Melon Platform</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">CredPal | 2023</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Platform that consolidates social media accounts and products into a single link, driving 15% increase
                in digital engagement.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 rounded-full text-sm">
                  Express
                </span>
              </div>
            </motion.div>

            {/* Livio Food */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideFromRight}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-6">
                <Image
                  src="/images/companies/livio.png"
                  alt="Livio logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">Livio Food</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    <a
                      href="https://livio.life/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      Livio
                    </a>{" "}
                    | 2024
                  </p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Meal-planning app with bulk food marketplace, achieving 10% DAU growth through UX improvements.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 rounded-full text-sm">
                  Flutter
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm">
                  Firebase
                </span>
                <span className="px-3 py-1 bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200 rounded-full text-sm">
                  APIs
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="/products">View All Products</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            I'm passionate about creating innovative products that solve real problems. Let's collaborate on your next
            big idea!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <DownloadCVButton />
          </div>
        </motion.div>
      </section>
    </main>
  )
}

