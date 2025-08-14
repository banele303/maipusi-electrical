"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Heart, Wrench, Shirt, ShoppingBag, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const toggleMenu = () => setIsOpen(!isOpen)
  
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]
  
  const serviceItems = [
    { name: "Herbalife Products", href: "/services/herbalife", icon: Heart },
    { name: "Electrical Repairs", href: "/services/repairs", icon: Wrench },
    { name: "Laundry Services", href: "/services/laundry", icon: Shirt },
    { name: "Premium Shoes", href: "/services/shoes", icon: ShoppingBag },
  ]

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-3" 
          : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative my-[-1.1rem] z-10">
              <Image
                src="/electric-log.png"
                alt="Maipusi Electrical Signals"
                width={600}
                height={180}
                className="h-16 md:h-24 w-auto max-w-none"
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors",
                  pathname === item.href && "text-blue-600 font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="ml-4">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <a href="tel:27798131590" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="hidden lg:inline">27 79 813 1590</span>
                  <span className="lg:hidden">Call</span>
                </a>
              </Button>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white/95 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out pt-20",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="container mx-auto px-4 py-6 flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "py-3 px-4 text-lg font-medium border-b border-gray-100",
                pathname === item.href && "text-blue-600"
              )}
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Our Services
            </h3>
            {serviceItems.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.name}
                  href={service.href}
                  className="py-3 px-4 flex items-center gap-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={toggleMenu}
                >
                  <Icon className="h-5 w-5 text-blue-600" />
                  {service.name}
                </Link>
              )
            })}
          </div>
          
          <div className="mt-6 px-4">
            <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <a href="tel:27798131590" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now: 27 79 813 1590
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
