"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CompanyLogoProps {
  name: string
  src: string
  className?: string
  size?: number
  href?: string
}

export default function CompanyLogo({ name, src, className, size = 50, href }: CompanyLogoProps) {
  const Logo = () => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        "relative flex items-center justify-center rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={`${name} logo`}
        width={size}
        height={size}
        className="object-contain p-1"
      />
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name} website`}>
        <Logo />
      </a>
    )
  }

  return <Logo />
}

