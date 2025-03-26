"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeSwitcher() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Use resolvedTheme to get the actual theme that's currently active
  const currentTheme = resolvedTheme || theme
  const isDark = currentTheme === "dark"

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        className="relative overflow-hidden"
      >
        <div className="flex items-center justify-center">
          {isDark ? <Sun className="h-5 w-5 transition-all" /> : <Moon className="h-5 w-5 transition-all" />}
        </div>
      </Button>
    </motion.div>
  )
}

