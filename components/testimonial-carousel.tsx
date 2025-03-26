"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"

interface Testimonial {
  name: string
  title: string
  date: string
  relationship: string
  content: string
  avatar?: string
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="relative h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="h-full flex flex-col"
        >
          <div className="flex-1">
            <div className="relative mb-6">
              <Quote className="h-10 w-10 text-blue-200 dark:text-blue-800 absolute -top-2 -left-2 opacity-50 transform -scale-x-100" />
              <div className="pl-6 pr-2">
                <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex items-center border-t border-slate-200 dark:border-slate-700 pt-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="ml-3">
                <h3 className="font-bold text-slate-900 dark:text-white">{testimonials[currentIndex].name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{testimonials[currentIndex].title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{testimonials[currentIndex].date}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                    : "w-2 bg-slate-300 dark:bg-slate-700"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

