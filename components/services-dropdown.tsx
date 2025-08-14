"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Bug, Building2, Shield, Rat, BugIcon as Mosquito, BedDouble } from "lucide-react"

export function ServicesDropdown() {
  const services = [
    {
      href: "/services/residential",
      label: "Residential Pest Control",
      icon: Bug,
      description: "Complete pest management for homes",
    },
    {
      href: "/services/commercial",
      label: "Commercial Pest Control",
      icon: Building2,
      description: "Solutions for businesses and industries",
    },
    {
      href: "/services/termite-control",
      label: "Termite Control",
      icon: Shield,
      description: "Protection against destructive termites",
    },
    {
      href: "/services/rodent-control",
      label: "Rodent Control",
      icon: Rat,
      description: "Effective solutions for rats and mice",
    },
    {
      href: "/services/mosquito-control",
      label: "Mosquito Control",
      icon: Mosquito,
      description: "Reduce mosquito populations",
    },
    {
      href: "/services/bed-bug-treatment",
      label: "Bed Bug Treatment",
      icon: BedDouble,
      description: "Complete bed bug elimination",
    },
  ]

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      clipPath: "inset(0% 0% 100% 0%)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  return (
    <motion.div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2">
          {services.map((service) => (
            <motion.div key={service.href} variants={itemVariants}>
              <Link
                href={service.href}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
              >
                <div className="mt-1 p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium group-hover:text-primary transition-colors">{service.label}</div>
                  <div className="text-sm text-muted-foreground">{service.description}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t">
          <Link
            href="/services"
            className="block w-full text-center p-2 bg-muted hover:bg-muted/80 rounded-md font-medium transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
      <motion.div
        className="h-1 bg-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{ transformOrigin: "0% 50%" }}
      />
    </motion.div>
  )
}

