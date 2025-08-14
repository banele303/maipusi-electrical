"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Wrench, Shirt, ShoppingBag, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define types
type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: LucideIcon;
  keyPoints: string[];
  categories: ("products" | "repairs" | "care")[];
};

type HeroSlide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  ctaLink: string;
};

// Hero slider data
const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Premium Services",
    subtitle: "Excellence in Every Detail",
    description: "From Herbalife nutrition products to professional electrical repairs - we deliver quality you can trust.",
    image: "/helth-one.jpeg",
    cta: "Explore Products",
    ctaLink: "/services/herbalife"
  },
  {
    id: 2,
    title: "Expert Repairs",
    subtitle: "Professional & Reliable",
    description: "Skilled technicians ready to fix your appliances with precision and care. Same-day service available.",
    image: "/main-tv.jpeg",
    cta: "Get Repair Quote",
    ctaLink: "/services/repairs"
  },
  {
    id: 3,
    title: "Laundry Care",
    subtitle: "Fresh & Professional",
    description: "Drop-off laundry service with fabric-safe cleaning and same-day options for your convenience.",
    image: "/fridge.jpeg",
    cta: "Learn More",
    ctaLink: "/services/laundry"
  },
  {
    id: 4,
    title: "Premium Footwear",
    subtitle: "Style Meets Comfort",
    description: "Discover our collection of stylish, comfortable shoes with expert fitting guidance.",
    image: "/shoes.jpeg",
    cta: "Shop Now",
    ctaLink: "/services/shoes"
  }
];

// Updated services data
const services: Service[] = [
  {
    slug: "herbalife",
    title: "Herbalife Products",
    shortDescription: "Nutrition and wellness solutions for your goals.",
    description:
      "Guided product selection for weight, energy, and daily wellness. Authentic products with friendly advice.",
    image: "/helth-one.jpeg",
    icon: Heart,
    keyPoints: ["Nutrition coaching", "Weight management", "Energy and wellness", "Authentic products"],
    categories: ["products"],
  },
  {
    slug: "repairs",
    title: "Electrical Repairs",
    shortDescription: "Inverters, irons, washers, microwaves, stoves, TVs.",
    description:
      "Fast diagnostics and skilled repairs with clear pricing and dependable workmanship.",
    image: "/microwave.jpeg",
    icon: Wrench,
    keyPoints: ["Inverters, irons, washers", "Microwaves, stoves, TVs", "Quick diagnostics", "Workmanship warranty"],
    categories: ["repairs"],
  },
  {
    slug: "laundry",
    title: "Laundry Services",
    shortDescription: "Drop-off laundry. Fresh, fast, and neatly folded.",
    description:
      "Careful wash, dry, and fold with fabric-safe settings. Same‑day options available.",
    image: "/main-tv.jpeg",
    icon: Shirt,
    keyPoints: ["Wash, dry and fold", "Same‑day options", "Fabric‑safe detergents", "Simple pricing"],
    categories: ["care"],
  },
  {
    slug: "shoes",
    title: "Premium Shoes",
    shortDescription: "Stylish footwear at great prices.",
    description:
      "Trendy, comfortable styles with regular new stock and size guidance.",
    image: "/shoes.jpeg",
    icon: ShoppingBag,
    keyPoints: ["Latest styles", "Great value", "Multiple sizes", "Comfort‑fit guidance"],
    categories: ["products"],
  },
];

export default function ServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Image Slider */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white"
                >
                  <motion.span 
                    className="inline-block mb-4 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium text-blue-200"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {heroSlides[currentSlide].subtitle}
                  </motion.span>
                  
                  <motion.h1 
                    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl md:text-2xl font-light text-gray-200 mb-8 max-w-2xl leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      asChild 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 px-8 py-6 text-lg"
                    >
                      <Link href={heroSlides[currentSlide].ctaLink}>
                        {heroSlides[currentSlide].cta}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      size="lg" 
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
                    >
                      <Link href="/contact">
                        Contact Us
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            
            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={togglePlayPause}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-white" />
              ) : (
                <Play className="h-5 w-5 text-white" />
              )}
            </button>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your needs with excellence and reliability
            </p>
          </motion.div>
          
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-2xl grid-cols-4 bg-white shadow-lg border">
                <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">All</TabsTrigger>
                <TabsTrigger value="products" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">Products</TabsTrigger>
                <TabsTrigger value="repairs" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">Repairs</TabsTrigger>
                <TabsTrigger value="care" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">Care</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.slug}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="products" className="mt-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {services
                  .filter((s) => s.categories.includes("products"))
                  .map((service, index) => (
                    <motion.div
                      key={service.slug}
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ServiceCard service={service} />
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="repairs" className="mt-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {services
                  .filter((s) => s.categories.includes("repairs"))
                  .map((service, index) => (
                    <motion.div
                      key={service.slug}
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ServiceCard service={service} />
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="care" className="mt-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {services
                  .filter((s) => s.categories.includes("care"))
                  .map((service, index) => (
                    <motion.div
                      key={service.slug}
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ServiceCard service={service} />
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tell us what you need and we'll recommend the right service or product for you. 
              Our expert team is ready to provide personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-8 py-6 text-lg font-semibold"
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold"
              >
                <a href="tel:27798131590">
                  Call 27 79 813 1590
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Card className="bg-white border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 rounded-xl overflow-hidden">
      <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="bg-white">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <CardTitle className="text-gray-900">{service.title}</CardTitle>
        <CardDescription className="text-gray-600">{service.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="bg-white">
        <p className="text-gray-700 mb-4">{service.description}</p>
        <div className="space-y-2">
          {service.keyPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{point}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-white border-t border-gray-100">
        <Button 
          asChild 
          variant="outline" 
          className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <Link href={`/services/${service.slug}`} className="flex items-center justify-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
