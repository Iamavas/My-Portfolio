"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import CompanyLogo from "@/components/company-logo"

export default function ProductsPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={stagger(0.1)} className="mb-16 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">
            Products I've Built
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Innovative solutions across fintech, AI, health, and logistics.
          </motion.p>
        </motion.div>

        {/* AI CRM Automation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="mb-4 flex items-center">
                <CompanyLogo name="Enif AI" src="/images/companies/enif.png" size={50} href="https://enif.ai/" />
                <div className="ml-4">
                  <h2 className="text-3xl font-bold">AI CRM Automation</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    <a
                      href="https://enif.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      Enif AI
                    </a>{" "}
                    | Technical Product Manager | 2024
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Led the development of an AI-powered customer relationship management system that uses natural
                  language processing to enhance customer interactions and automate routine tasks.
                </p>

                <h3 className="text-xl font-semibold mt-6">Key Features:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>AI-driven conversation analysis for real-time customer support guidance</li>
                  <li>Automated task management based on conversation context</li>
                  <li>Personalized customer journey mapping and recommendations</li>
                  <li>Integration with existing CRM systems with minimal setup</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Results:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>30% increase in product adoption across client organizations</li>
                  <li>20% improvement in customer satisfaction scores</li>
                  <li>15% greater efficiency in customer service operations</li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                    AI/ML
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-8 rounded-2xl">
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <div className="text-center p-4">
                  <Image
                    src="/images/companies/enif.png"
                    alt="Enif AI CRM Screenshot"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                  <p className="mt-4 text-slate-600 dark:text-slate-400">AI-Powered CRM Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* BEAM Trading Platform */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-8 rounded-2xl">
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <div className="text-center p-4">
                  <Image
                    src="/images/companies/credpal.png"
                    alt="BEAM Trading Platform Screenshot"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                  <p className="mt-4 text-slate-600 dark:text-slate-400">BEAM Trading Dashboard</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-4 flex items-center">
                <CompanyLogo name="CredPal" src="/images/companies/credpal.png" size={50} href="https://credpal.com/" />
                <div className="ml-4">
                  <h2 className="text-3xl font-bold">CredPal App</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    <a
                      href="https://credpal.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      CredPal
                    </a>{" "}
                    | Product Manager | 2023
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Led the development of CredPal's fintech application offering Buy Now Pay Later (BNPL), credit cards,
                  savings, and investment features to expand financial inclusion in Nigeria.
                </p>

                <h3 className="text-xl font-semibold mt-6">Key Features:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Buy Now Pay Later (BNPL) functionality for online and in-store purchases</li>
                  <li>Virtual and physical credit card issuance and management</li>
                  <li>Savings plans with competitive interest rates</li>
                  <li>Investment opportunities with various risk profiles</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Results:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Expanded financial inclusion by providing credit access to underserved populations</li>
                  <li>Increased user base by 25% within six months of feature enhancements</li>
                  <li>Improved user retention through diversified financial product offerings</li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
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
              </div>
            </div>
          </div>
        </motion.section>

        {/* Melon */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="mb-4 flex items-center">
                <CompanyLogo name="Melon" src="/images/companies/melon.png" size={50} className="bg-black" />
                <div className="ml-4">
                  <h2 className="text-3xl font-bold">Melon Platform</h2>
                  <p className="text-slate-600 dark:text-slate-400">CredPal | Product Manager | 2023</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Developed and launched Melon, a platform that consolidates social media accounts and products into a
                  single link, making it easier for businesses and individuals to manage their online presence and drive
                  engagement.
                </p>

                <h3 className="text-xl font-semibold mt-6">Key Features:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Unified link for all social media profiles and product listings</li>
                  <li>Customizable landing page with brand elements</li>
                  <li>Analytics dashboard for tracking engagement and clicks</li>
                  <li>E-commerce integration for direct product sales</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Results:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>15% increase in digital engagement for businesses and individuals</li>
                  <li>Streamlined social media management for users</li>
                  <li>Created new revenue stream through premium features</li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 rounded-full text-sm">
                    Express
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/30 dark:to-pink-950/30 p-8 rounded-2xl">
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl bg-black flex items-center justify-center">
                <div className="text-center p-4">
                  <Image
                    src="/images/companies/melon.png"
                    alt="Melon Platform Screenshot"
                    width={250}
                    height={250}
                    className="mx-auto"
                  />
                  <p className="mt-4 text-slate-400">Melon Profile Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Livio Food */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-8 rounded-2xl">
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <div className="text-center p-4">
                  <Image
                    src="/images/companies/livio.png"
                    alt="Livio Food App Screenshot"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                  <p className="mt-4 text-slate-600 dark:text-slate-400">Livio Food App Interface</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-4 flex items-center">
                <CompanyLogo name="Livio" src="/images/companies/livio.png" size={50} href="https://livio.life/" />
                <div className="ml-4">
                  <h2 className="text-3xl font-bold">Livio Food</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    <a
                      href="https://livio.life/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      Livio
                    </a>{" "}
                    | Product Manager | 2024
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Developed and launched Livio Food, a mobile app for exploring African cuisine and meal planning, with
                  a bulk food marketplace feature that connects users with local food suppliers.
                </p>

                <h3 className="text-xl font-semibold mt-6">Key Features:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Comprehensive African recipe database with nutritional information</li>
                  <li>Meal planning and grocery list generation</li>
                  <li>Bulk food marketplace connecting consumers with local suppliers</li>
                  <li>Community features for sharing recipes and food experiences</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Results:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>10% increase in daily active users after UX improvements</li>
                  <li>Expanded market reach by connecting food suppliers with consumers</li>
                  <li>Created vibrant food community around African cuisine</li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                    Flutter
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm">
                    Firebase
                  </span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 rounded-full text-sm">
                    Subscription APIs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}

