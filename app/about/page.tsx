"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DownloadCVButton from "@/components/download-cv-button"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import { Briefcase, GraduationCap, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={stagger(0.1)} className="mb-16 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Product Manager with a passion for building innovative solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/profile.png" alt="Victor Adeniyi" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-6">Hi, I'm Victor!</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                I'm Victor Adeniyi, a <span className="font-medium">Product Manager</span> specializing in{" "}
                <span className="font-medium">CRM automation, financial solutions, and trading platforms</span>, with a
                background in business development.
              </p>
              <p>
                My journey began in business development, where I discovered my passion for user-centric products. Over{" "}
                <span className="font-medium">2+ years</span>, I've led cross-functional teams in{" "}
                <span className="font-medium">fintech, SaaS, and B2B/B2C platforms</span>, delivering high-impact
                solutions.
              </p>
              <p>
                I excel in{" "}
                <span className="font-medium">
                  end-to-end product development, roadmap execution, and UX optimization
                </span>
                . Beyond work, I mentor aspiring PMs, share insights on{" "}
                <span className="font-medium">product strategy and growth</span>, and contribute via consultations and
                speaking engagements.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <DownloadCVButton />
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-xl font-bold">Technical Product Manager</h3>
                <div className="ml-auto flex items-center">
                  <Image src="/images/companies/enif.png" alt="Enif AI" width={30} height={30} className="rounded-md" />
                  <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
                    <a
                      href="https://enif.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      Enif AI
                    </a>
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">March 2024 - Present</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>
                  Led a team developing CRM Automation using natural language AI, resulting in a 30% increase in product
                  adoption.
                </li>
                <li>Spearheaded the integration of AI-driven data analysis to deliver personalized solutions.</li>
                <li>Managed a product roadmap with 95% of project milestones met on schedule.</li>
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-xl font-bold">Product Manager</h3>
                <div className="ml-auto flex items-center">
                  <Image
                    src="/images/companies/credpal.png"
                    alt="CredPal"
                    width={30}
                    height={30}
                    className="rounded-md"
                  />
                  <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
                    <a
                      href="https://credpal.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      CredPal
                    </a>
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">January 2023 - March 2024</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>
                  Managed the development of the BEAM Trading Platform, enabling stockbrokers and customers to trade
                  stocks.
                </li>
                <li>Developed and launched Melon, a platform that consolidates social media accounts and products.</li>
                <li>Developed and launched Livio Food, a mobile app for exploring African cuisine.</li>
                <li>
                  Drove product innovation across these platforms, leading to a 25% improvement in user engagement.
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-xl font-bold">Business Operation Manager</h3>
                <div className="ml-auto flex items-center">
                  <Image
                    src="/images/companies/credpal.png"
                    alt="CredPal"
                    width={30}
                    height={30}
                    className="rounded-md"
                  />
                  <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
                    <a
                      href="https://credpal.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      CredPal
                    </a>
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">January 2021 - December 2022</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Managed daily operations of the relationship management team, boosting operational efficiency.</li>
                <li>Led feedback collection initiatives to identify pain points and launched new product features.</li>
                <li>Supported the technical department in product improvement, reducing customer churn.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-xl font-bold">Bachelor of Science - Computer Science</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">National Open University of Nigeria (NOUN)</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Expected 2025</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-xl font-bold">National Diploma - Computer Engineering</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">Yaba College of Technology</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">2013 - 2017</p>
            </div>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Certifications</h2>
            <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-xl font-bold">Advanced Product Management</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">Vision, Strategy, and Metrics</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Udemy, 2024</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-xl font-bold">API for Product Managers</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">Technical Product Management</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Udemy, 2023</p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}

