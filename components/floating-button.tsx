"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Wrench, Shirt, ShoppingBag, ArrowRight, Zap, Phone, CheckCircle, Star, Shield, Tv, Cpu, WashingMachine, Utensils, Sparkles, Clock, Award, Check, Users, TrendingUp, Scale, Microwave } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 }
  }
};

// WhatsApp constants (single source of truth)
const WHATSAPP_E164 = "27798131590"; // no leading +
const WHATSAPP_TEXT = encodeURIComponent("Hi! I'm interested in your services. Can you help me?");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}?text=${WHATSAPP_TEXT}`;
const PHONE_TEL = "+27798131590";
const WHATSAPP_DISPLAY = "+27 79 813 1590";

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-b from-gray-50 to-white ">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
          
          {/* Animated floating elements */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-10">
            <motion.div 
              className="text-white"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.span 
                className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-blue-300"
                variants={itemVariants}
              >
                Your Trusted Partner Since 2010
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
                variants={itemVariants}
              >
                Premium Services <span className="text-blue-400">Beyond</span> Expectations
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-2xl"
                variants={itemVariants}
              >
                Experience excellence with our comprehensive range of services designed to enhance your lifestyle and business operations.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Link href="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <a href={WHATSAPP_URL} className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </motion.div>
              
              <motion.div 
                className="mt-12 flex flex-wrap gap-6 items-center text-sm text-gray-400"
                variants={itemVariants}
              >
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    {[1, 2, 3].map((item) => (
                      <div 
                        key={item}
                        className="w-8 h-8 rounded-full border-2 border-gray-800 bg-gray-700"
                      ></div>
                    ))}
                  </div>
                  <span>Trusted by 1000+ clients</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mr-2">
                    <Star className="h-4 w-4 text-yellow-800 fill-current" />
                  </div>
                  <span>4.9/5 (200+ Reviews)</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="relative aspect-video w-full">
                  <Image 
                    src="/electric.jpeg" 
                    alt="Maipusi Electrical Services" 
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">Professional Electrical Services</h3>
                    <p className="text-gray-300 text-sm mt-1">Expert repairs and installations</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Premium Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Maipusi Electrical Signals offers four core services to meet your personal and household needs.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Electrical Repairs */}
            <FadeIn direction="up" delay={0.1}>
              <motion.div 
                className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src="/electricstuff.jpeg" 
                    alt="Electrical Repairs" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg group-hover:bg-white transition-all duration-300">
                    <Wrench className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Electrical Repairs</h3>
                  <p className="text-gray-600 mb-6">
                    Professional repair services for TVs, microwaves, stoves, washing machines, and more.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">Certified technicians</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">Quality replacement parts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">Warranty on all repairs</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/services/electrical-repairs">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            </FadeIn>

            {/* Laundry Services */}
            <FadeIn direction="up" delay={0.2}>
              <motion.div 
                className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src="/laundry.jpg" 
                    alt="Laundry Services" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg group-hover:bg-white transition-all duration-300">
                    <Shirt className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Laundry Services</h3>
                  <p className="text-gray-600 mb-6">
                    Professional washing, drying, and ironing services for all your garments.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">Eco-friendly detergents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">Same-day service available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">Pickup & delivery available</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/services/laundry-services">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            </FadeIn>

            {/* Herbalife Products */}
            <FadeIn direction="up" delay={0.3}>
              <motion.div 
                className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src="/helth.jpeg" 
                    alt="Herbalife Products" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg group-hover:bg-white transition-all duration-300">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Herbalife Products</h3>
                  <p className="text-gray-600 mb-6">
                    Your source for official Herbalife nutritional products and wellness coaching.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">Weight management solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">Energy and fitness supplements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">Personalized meal plans</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/services/herbalife-products">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            </FadeIn>

            {/* Premium Footwear */}
            <FadeIn direction="up" delay={0.4}>
              <motion.div 
                className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src="/shoes.jpeg" 
                    alt="Premium Footwear" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg group-hover:bg-white transition-all duration-300">
                    <ShoppingBag className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Premium Footwear</h3>
                  <p className="text-gray-600 mb-6">
                    Discover our curated collection of stylish and comfortable footwear.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">Leading local and international brands</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">Men's, Women's, and Kids' sections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">Latest fashion trends</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/services/premium-footwear">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Modern Gallery Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium">
              Our Work Gallery
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Work in 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"> Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take a look at our professional work and quality products in action. Every project showcases our commitment to excellence.
            </p>
          </motion.div>
          
          {/* Modern Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Large Featured Item */}
            <motion.div 
              className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-96 lg:h-full">
                <Image 
                  src="/tv.jpeg" 
                  alt="Professional TV Repair" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <Tv className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">Featured Work</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Professional TV Repair</h3>
                  <p className="text-white/90">Expert television repair and maintenance services</p>
                </div>
              </div>
            </motion.div>

            {/* Grid Items */}
            {[
              { src: "/microwave.jpeg", title: "Microwave Repair", desc: "Professional servicing", icon: <Microwave className="w-5 h-5" /> },
              { src: "/fridge.jpeg", title: "Appliance Repair", desc: "All home appliances", icon: <WashingMachine className="w-5 h-5" /> },
              { src: "/main-tv.jpeg", title: "Laundry Services", desc: "Professional cleaning", icon: <Shirt className="w-5 h-5" /> },
              { src: "/helth-one.jpeg", title: "Herbalife Products", desc: "Premium nutrition", icon: <Heart className="w-5 h-5" /> },
              { src: "/tv2.jpeg", title: "Quality Service", desc: "Attention to detail", icon: <Star className="w-5 h-5" /> },
              { src: "/shoes.jpeg", title: "Premium Footwear", desc: "Stylish collection", icon: <ShoppingBag className="w-5 h-5" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-64"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="relative h-full">
                  <Image 
                    src={item.src} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-white/90 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 px-8 h-14 text-lg"
            >
              <Link href="/gallery" className="flex items-center justify-center gap-2">
                View Full Gallery
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      
      {/* Why Choose Us */}
      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Our Clients <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Trust Us</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're committed to delivering exceptional service and building lasting relationships with our clients.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const colors = [
                'from-blue-500 to-blue-600',
                'from-purple-500 to-purple-600',
                'from-indigo-500 to-indigo-600',
                'from-cyan-500 to-cyan-600'
              ];
              
              const colorClass = colors[index % colors.length];
              
              return (
                <motion.div 
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className="absolute -inset-0.5 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" 
                    style={{
                      background: `linear-gradient(135deg, ${colorClass.split(' ')[0].replace('from-', '#')}, ${colorClass.split(' ')[1].replace('to-', '#')})`
                    }}
                  />
                  
                  <div className="relative bg-white rounded-2xl p-8 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="inline-flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"
                    style={{ zIndex: 4 - item }}
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500">Join our satisfied clients</p>
                <p className="font-medium text-gray-900">4.9/5 from 200+ reviews</p>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our products and services or to schedule an appointment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-white/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  <a href={WHATSAPP_URL} className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    WhatsApp {WHATSAPP_DISPLAY}
                  </a>
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Experienced Technicians",
    description: "Our certified technicians have years of experience in appliance repair."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Quick Service",
    description: "We understand the urgency and provide prompt, efficient service."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Quality Parts",
    description: "We use only high-quality, manufacturer-approved replacement parts."
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Satisfaction Guaranteed",
    description: "Your satisfaction is our top priority. We stand behind our work."
  }
];

const services = [
  {
    title: "Electrical Repairs",
    description: "Expert repairs for all your household and commercial electronics with certified technicians and quick turnaround times.",
    slug: "electrical-repairs",
    icon: Wrench,
    image: "/services/electrical-repair.jpg",
    bgGradient: "from-blue-500 to-indigo-600",
    features: [
      { text: "TVs, Microwaves, Stoves", icon: <Tv className="w-5 h-5" /> },
      { text: "Wiring and DB Boards", icon: <Zap className="w-5 h-5" /> },
      { text: "Certified Technicians", icon: <Shield className="w-5 h-5" /> },
      { text: "Quick Turnaround", icon: <Clock className="w-5 h-5" /> },
    ],
  },
  {
    title: "Laundry Services",
    description: "Professional washing, drying, and ironing services with expert fabric care and stain removal.",
    slug: "laundry-services",
    icon: Shirt,
    image: "/services/laundry-service.jpg",
    bgGradient: "from-emerald-500 to-teal-600",
    features: [
      { text: "Delicate Fabric Care", icon: <Sparkles className="w-5 h-5" /> },
      { text: "Stain Removal Experts", icon: <WashingMachine className="w-5 h-5" /> },
      { text: "Folding & Packaging", icon: <Shirt className="w-5 h-5" /> },
      { text: "Express Service", icon: <Clock className="w-5 h-5" /> },
    ],
  },
  {
    title: "Herbalife Products",
    description: "Official Herbalife nutritional products and personalized wellness coaching.",
    slug: "herbalife-products",
    icon: Heart,
    image: "/services/herbalife-nutrition.jpg",
    bgGradient: "from-rose-500 to-pink-600",
    features: [
      { text: "Weight Management", icon: <Scale className="w-5 h-5" /> },
      { text: "Energy Supplements", icon: <Zap className="w-5 h-5" /> },
      { text: "Meal Plans", icon: <Utensils className="w-5 h-5" /> },
      { text: "Expert Advice", icon: <Users className="w-5 h-5" /> },
    ],
  },
  {
    title: "Premium Footwear",
    description: "Curated collection of stylish and comfortable footwear from top brands.",
    slug: "premium-footwear",
    icon: ShoppingBag,
    image: "/services/premium-shoes.jpg",
    bgGradient: "from-amber-500 to-orange-600",
    features: [
      { text: "Top Brands", icon: <Star className="w-5 h-5" /> },
      { text: "All Sizes & Styles", icon: <Users className="w-5 h-5" /> },
      { text: "Latest Trends", icon: <TrendingUp className="w-5 h-5" /> },
      { text: "Comfort Guaranteed", icon: <CheckCircle className="w-5 h-5" /> },
    ],
  },
];

const benefits = [
  {
    title: "Quality Guaranteed",
    description:
      "We stand behind the quality of our products and services, ensuring you get the best value and results every time.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Your satisfaction is our top priority. We strive to provide friendly, reliable, and personalized service to every client.",
  },
  {
    title: "One-Stop Solution",
    description:
      "From electrical repairs and laundry to wellness products and footwear, we offer a diverse range of services to simplify your life.",
  },
  {
    title: "Expert Technicians",
    description:
      "Our team consists of skilled and certified professionals with extensive experience in their respective fields.",
  },
  {
    title: "Prompt & Reliable",
    description:
      "We value your time and are committed to providing prompt and reliable service across all our offerings.",
  },
  {
    title: "Community Trusted",
    description:
      "We are a proud local business, trusted by the community for our integrity, fairness, and consistent quality.",
  },
];

const certifications = [
  {
    name: "Certified Technicians",
    icon: CheckCircle,
  },
  {
    name: "Authorized Distributor",
    icon: Shield,
  },
  {
    name: "Quality Assured",
    icon: Star,
  },
  {
    name: "Eco-Friendly Options",
    icon: Zap,
  },
];

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Years in Business",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    value: 4,
    suffix: "",
    label: "Core Services",
  },
  {
    value: 99,
    suffix: "%",
    label: "Satisfaction Rate",
  },
];

const testimonials = [
  {
    name: "Lerato Khumalo",
    location: "Johannesburg",
    rating: 5,
    text: "Maipusi Electrical fixed my fridge in no time! The technician was professional and the price was very reasonable. I highly recommend their services.",
  },
  {
    name: "David Smith",
    location: "Pretoria",
    rating: 5,
    text: "The laundry service is a lifesaver. My clothes always come back perfectly clean, fresh, and neatly folded. It saves me so much time every week.",
  },
  {
    name: "Naledi Williams",
    location: "Soweto",
    rating: 4,
    text: "I've been buying my Herbalife products from them for months. They always have stock and provide great advice on how to achieve my fitness goals.",
  },
  {
    name: "Pieter van Jaarsveld",
    location: "Sandton",
    rating: 5,
    text: "Found the perfect pair of sneakers I've been looking for everywhere. Great selection and friendly staff. Will definitely be back for more.",
  },
];

const applianceBrands = [
  { name: "Samsung", image: "/brands/samsung.svg" },
  { name: "LG", image: "/brands/lg.svg" },
  { name: "Defy", image: "/brands/defy.svg" },
  { name: "Bosch", image: "/brands/bosch.svg" },
  { name: "Hisense", image: "/brands/hisense.svg" },
  { name: "KIC", image: "/brands/kic.svg" },
];

const faqs = [
  {
    question: "What kind of electronics do you repair?",
    answer:
      "We repair a wide range of household appliances, including TVs, microwaves, stoves, washing machines, and fridges. We also handle general electrical work like wiring and distribution boards.",
  },
  {
    question: "What is the turnaround time for laundry services?",
    answer:
      "Our standard turnaround time for laundry is 24-48 hours. We also offer an express service for a small additional fee if you need your items back sooner.",
  },
  {
    question: "Are you an official Herbalife distributor?",
    answer:
      "Yes, we are an authorized independent Herbalife distributor. All our products are genuine and sourced directly from Herbalife.",
  },
  {
    question: "What areas do you service for electrical repairs?",
    answer:
      "We primarily service Johannesburg and the surrounding suburbs. Please contact us with your location to confirm if we can come to you.",
  },
  {
    question: "Do you offer warranties on your repairs?",
    answer:
      "Yes, all our electrical repairs come with a standard 3-month warranty on parts and labor to give you peace of mind.",
  },
  {
    question: "Can I bring my laundry to you or do you collect?",
    answer:
      "We offer both drop-off at our location and a convenient collection and delivery service for a small fee. Please choose the option that works best for you when booking.",
  },
];