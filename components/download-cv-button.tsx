"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

export default function DownloadCVButton() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
      <Button
        size="lg"
        className="relative gap-2 font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
      >
        <Download className="h-5 w-5" />
        <a href="/Victor_Adeniyi_CV.pdf" download>
          Download CV
        </a>
      </Button>
    </motion.div>
  )
}

