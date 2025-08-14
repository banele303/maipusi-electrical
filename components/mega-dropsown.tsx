"use client"

import type { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MegaDropdownProps {
  isOpen: boolean
  children: ReactNode
  className?: string
}

export function MegaDropdown({ isOpen, children, className = "" }: MegaDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`overflow-hidden ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

