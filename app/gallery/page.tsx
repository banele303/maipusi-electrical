"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Tv, Microwave, WashingMachine, Heart, Shirt, ShoppingBag, Star, Zap, Shield, Clock, Award } from "lucide-react";

export default function Gallery() {
  const galleryItems = [
    // Electrical Repairs
    {
      id: 1,
      src: "/tv.jpeg",
      title: "Professional TV Repair",
      category: "Electrical Repairs",
      description: "Expert television repair and maintenance services for all brands",
      icon: <Tv className="w-5 h-5" />,
      featured: true
    },
    {
      id: 2,
      src: "/microwave.jpeg",
      title: "Microwave Repair",
      category: "Electrical Repairs",
      description: "Professional microwave oven servicing and parts replacement",
      icon: <Microwave className="w-5 h-5" />
    },
    {
      id: 3,
      src: "/fridge.jpeg",
      title: "Appliance Repair",
      category: "Electrical Repairs",
      description: "Comprehensive repair services for all home appliances",
      icon: <WashingMachine className="w-5 h-5" />
    },
    {
      id: 4,
      src: "/main-tv4.jpeg",
      title: "Electronics Servicing",
      category: "Electrical Repairs",
      description: "Quality electronics repair and maintenance",
      icon: <Zap className="w-5 h-5" />
    },
    
    // Laundry Services
    {
      id: 5,
      src: "/main-tv.jpeg",
      title: "Professional Laundry",
      category: "Laundry Services",
      description: "Professional washing, drying, and ironing services",
      icon: <Shirt className="w-5 h-5" />
    },
    {
      id: 6,
      src: "/tv2.jpeg",
      title: "Quality Service",
      category: "Laundry Services",
      description: "Attention to detail in every garment we handle",
      icon: <Star className="w-5 h-5" />
    },
    {
      id: 7,
      src: "/tv6.jpeg",
      title: "Laundry Delivery",
      category: "Laundry Services",
      description: "Convenient pickup and delivery services",
      icon: <Clock className="w-5 h-5" />
    },
    
    // Herbalife Products
    {
      id: 8,
      src: "/helth-one.jpeg",
      title: "Herbalife Nutrition",
      category: "Herbalife Products",
      description: "Premium wellness and nutrition products",
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: 9,
      src: "/helth2.jpeg",
      title: "Health Supplements",
      category: "Herbalife Products",
      description: "Energy and fitness supplements for active lifestyles",
      icon: <Award className="w-5 h-5" />
    },
    {
      id: 10,
      src: "/helth.jpeg",
      title: "Wellness Products",
      category: "Herbalife Products",
      description: "Complete wellness solutions for healthy living",
      icon: <Shield className="w-5 h-5" />
    },
    
    // Premium Footwear
    {
      id: 11,
      src: "/shoes.jpeg",
      title: "Premium Footwear",
      category: "Premium Footwear",
      description: "Stylish and comfortable footwear collection",
      icon: <ShoppingBag className="w-5 h-5" />
    },
    {
      id: 12,
      src: "/shoes.jpeg",
      title: "Fashion Collection",
      category: "Premium Footwear",
      description: "Latest trends in men's, women's, and kids' footwear",
      icon: <Star className="w-5 h-5" />
    }
  ];

  const categories = ["All", "Electrical Repairs", "Laundry Services", "Herbalife Products", "Premium Footwear"];
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Button asChild variant="outline" className="mb-8">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Our Work 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"> Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive portfolio showcasing professional work, quality products, and exceptional service across all our specialties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  item.featured ? 'md:col-span-2 md:row-span-2' : ''
                } ${index % 7 === 0 ? 'lg:col-span-2' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`relative ${item.featured ? 'h-96 lg:h-full' : 'h-64'}`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                    {item.category}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                        {item.icon}
                      </div>
                      {item.featured && (
                        <span className="text-white/90 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl p-12 shadow-xl max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Experience Our Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get in touch with us today to discuss your needs and see how we can help you with our professional services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
