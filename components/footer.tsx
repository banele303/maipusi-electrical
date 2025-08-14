"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export function Footer() {
  return (
    <footer className="bg-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn direction="up">
            <div>
              <h3 className="text-xl font-bold mb-4">Eye of Africa</h3>
              <p className="mb-4">Professional pest control services for residential and commercial properties.</p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="hover:text-[#F5A623] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-[#F5A623] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-[#F5A623] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </motion.a>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <StaggerChildren className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Services" },
                  { href: "/team", label: "Our Team" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <StaggerItem key={link.href}>
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                      <Link href={link.href} className="hover:text-[#F5A623] transition-colors">
                        {link.label}
                      </Link>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <StaggerChildren className="space-y-2">
                {[
                  { href: "/services/residential", label: "Residential Pest Control" },
                  { href: "/services/commercial", label: "Commercial Pest Control" },
                  { href: "/services/termite-control", label: "Termite Control" },
                  { href: "/services/rodent-control", label: "Rodent Control" },
                  { href: "/services/mosquito-control", label: "Mosquito Control" },
                ].map((service) => (
                  <StaggerItem key={service.href}>
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                      <Link href={service.href} className="hover:text-[#F5A623] transition-colors">
                        {service.label}
                      </Link>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>27 79 813 1590</p>
                    <p>079 095 9784</p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <p>amos@eye-ofafrica-pestcontrol.co.za</p>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <p>Johannesburg, South Africa</p>
                </motion.li>
              </ul>
            </div>
          </FadeIn>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Eye of Africa Pest Control. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

