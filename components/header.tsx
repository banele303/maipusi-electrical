"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { ServicesDropdown } from "@/components/services-dropdown"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact" },
  ]

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <motion.div
          className="flex items-center gap-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="font-bold text-xl text-primary">
            Eye of Africa
          </Link>
        </motion.div>
        <motion.nav
          className="hidden md:flex items-center gap-6"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.div key={item.href} variants={itemVariants}>
              <Link href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            variants={itemVariants}
            className="relative"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setShowServicesDropdown(!showServicesDropdown)}
            >
              Services
              <motion.div animate={{ rotate: showServicesDropdown ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>
            <AnimatePresence>{showServicesDropdown && <ServicesDropdown />}</AnimatePresence>
          </motion.div>
        </motion.nav>
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </motion.div>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="relative">
                  <MobileServicesMenu closeSheet={() => setIsOpen(false)} />
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 w-full mt-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

function MobileServicesMenu({ closeSheet }: { closeSheet: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { href: "/services", label: "All Services" },
    { href: "/services/residential", label: "Residential Pest Control" },
    { href: "/services/commercial", label: "Commercial Pest Control" },
    { href: "/services/termite-control", label: "Termite Control" },
    { href: "/services/rodent-control", label: "Rodent Control" },
    { href: "/services/mosquito-control", label: "Mosquito Control" },
    { href: "/services/bed-bug-treatment", label: "Bed Bug Treatment" },
  ]

  return (
    <>
      <button
        className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        Services
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pl-4 mt-2 flex flex-col gap-3 border-l-2 border-primary/20">
              {services.map((service) => (
                <motion.div
                  key={service.href}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={service.href}
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                    onClick={closeSheet}
                  >
                    {service.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

