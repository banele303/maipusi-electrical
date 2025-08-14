"use client"

import { CheckCircle, Clock, FileText, Shield, Target, Users } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { AnimatedCounter } from "@/components/animations/animated-counter"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Eye of Africa</h1>
            <p className="text-xl max-w-3xl">
              We are a leading pest control company dedicated to providing effective and environmentally responsible
              pest management solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Eye of Africa Pest Control was founded in 2008 with a mission to provide superior pest management
                  services that protect homes and businesses while minimizing environmental impact.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  With over 15 years of experience in the industry, our team has developed effective strategies for
                  dealing with all types of pest infestations common in South Africa. We've grown from a small family
                  business to one of the most trusted pest control companies in Johannesburg.
                </p>
                <p className="text-lg text-muted-foreground">
                  We pride ourselves on our professional approach, attention to detail, and commitment to customer
                  satisfaction. Our technicians are highly trained and certified, ensuring that every job is done right
                  the first time.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-muted p-4 rounded-lg"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h4 className="font-semibold text-primary">
                      <AnimatedCounter from={0} to={15} />+
                    </h4>
                    <p>Years of Experience</p>
                  </motion.div>
                  <motion.div
                    className="bg-muted p-4 rounded-lg"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h4 className="font-semibold text-primary">
                      <AnimatedCounter from={0} to={5000} formatter={(value) => value.toLocaleString()} />+
                    </h4>
                    <p>Satisfied Customers</p>
                  </motion.div>
                  <motion.div
                    className="bg-muted p-4 rounded-lg"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h4 className="font-semibold text-primary">
                      <AnimatedCounter from={0} to={12} />
                    </h4>
                    <p>Certified Technicians</p>
                  </motion.div>
                  <motion.div
                    className="bg-muted p-4 rounded-lg"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h4 className="font-semibold text-primary">24/7</h4>
                    <p>Emergency Service</p>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <motion.div
                className="rounded-lg overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
  src="/eye-pest-control.jpg"
  alt="Professional pest control technician"
  width={800}
  height={600}
  className="w-full h-auto"
/>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <FadeIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                <div className="flex mb-8">
                  <div className="flex-shrink-0 w-24 text-right pr-6 pt-1">
                    <motion.span
                      className="font-bold text-primary"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {item.year}
                    </motion.span>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-primary z-10 relative"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                    ></motion.div>
                    {index < timeline.length - 1 && (
                      <motion.div
                        className="absolute top-4 bottom-0 left-1.5 w-1 bg-primary/20 -mb-8"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      ></motion.div>
                    )}
                  </div>
                  <motion.div
                    className="pl-6"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    {item.image && (
                      <motion.div
                        className="mt-4 rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-auto max-w-md"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                To provide exceptional pest control services that protect our clients' health, property, and peace of
                mind while maintaining the highest standards of safety and environmental responsibility.
              </p>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              {[
                {
                  title: "Customer Satisfaction",
                  description:
                    "We prioritize your needs and ensure complete satisfaction with our services. Our success is measured by your happiness.",
                },
                {
                  title: "Environmental Responsibility",
                  description:
                    "We use eco-friendly methods and products whenever possible, minimizing our impact on the environment while effectively controlling pests.",
                },
                {
                  title: "Professional Excellence",
                  description:
                    "Our team maintains the highest standards of professionalism and expertise through continuous training and certification.",
                },
                {
                  title: "Continuous Improvement",
                  description:
                    "We constantly update our methods and knowledge to provide better service and stay ahead of evolving pest challenges.",
                },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-card p-8 rounded-lg shadow-md text-center h-full"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Approach to Pest Control</h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-card p-8 rounded-lg shadow-md border-t-4 border-t-primary h-full"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {step.image && (
                    <motion.div
                      className="mt-6 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-auto" /> */}
                    </motion.div>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-6">Ready to work with us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team today to schedule a consultation or learn more about our pest control services.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-[#F5A623] hover:bg-[#E09612] text-black">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

const timeline = [
  {
    year: "2008",
    title: "Company Founded",
    description:
      "Eye of Africa Pest Control was established by Amos John Mhlanga with a single truck and a vision to provide quality pest control services.",
    image: "/placeholder.svg?height=300&width=500&text=Company+Founded",
  },
  {
    year: "2012",
    title: "Expansion",
    description:
      "After four successful years, we expanded our team and service area to cover the greater Johannesburg region.",
    image: "/placeholder.svg?height=300&width=500&text=Company+Expansion",
  },
  {
    year: "2015",
    title: "Certification",
    description:
      "Achieved industry certifications and became members of the South African Pest Control Association (SAPCA).",
    image: null,
  },
  {
    year: "2018",
    title: "Commercial Division",
    description:
      "Launched our dedicated commercial pest control division to better serve businesses and industrial clients.",
    image: "/placeholder.svg?height=300&width=500&text=Commercial+Division",
  },
  {
    year: "2020",
    title: "Green Initiative",
    description:
      "Implemented our eco-friendly pest control program, focusing on environmentally responsible treatment methods.",
    image: null,
  },
  {
    year: "2023",
    title: "Today",
    description:
      "Now operating with a team of 12 certified technicians and serving thousands of residential and commercial clients across South Africa.",
    image: "/placeholder.svg?height=300&width=500&text=Today",
  },
]

const values = [
  {
    title: "Integrity",
    description:
      "We conduct our business with honesty, transparency, and ethical practices. We do what we say we'll do and stand behind our work.",
    icon: Shield,
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service delivery, from customer communication to treatment effectiveness.",
    icon: Target,
  },
  {
    title: "Responsibility",
    description:
      "We take responsibility for our actions and their impact on our clients, communities, and the environment.",
    icon: FileText,
  },
  {
    title: "Innovation",
    description:
      "We continuously seek innovative solutions to improve our pest control methods and provide better service to our clients.",
    icon: Target,
  },
  {
    title: "Teamwork",
    description:
      "We work together as a cohesive team to deliver the best possible results for our clients and support each other's growth.",
    icon: Users,
  },
  {
    title: "Reliability",
    description:
      "We are dependable and consistent in our service delivery, always showing up on time and completing work as promised.",
    icon: Clock,
  },
]

const approach = [
  {
    title: "Thorough Inspection",
    description:
      "We begin with a comprehensive inspection of your property to identify pest problems, entry points, and conducive conditions. This allows us to develop an effective treatment plan.",
    image: "/placeholder.svg?height=200&width=300&text=Inspection",
  },
  {
    title: "Customized Plan",
    description:
      "We develop a tailored treatment plan based on your specific situation, the types of pests involved, and the unique characteristics of your property.",
    image: "/placeholder.svg?height=200&width=300&text=Planning",
  },
  {
    title: "Implementation",
    description:
      "Our technicians implement the plan using the most effective and appropriate methods for your situation, focusing on both elimination and prevention.",
    image: "/placeholder.svg?height=200&width=300&text=Implementation",
  },
  {
    title: "Prevention",
    description:
      "We implement preventative measures to reduce the likelihood of future infestations, including sealing entry points and recommending environmental modifications.",
    image: "/placeholder.svg?height=200&width=300&text=Prevention",
  },
  {
    title: "Follow-up",
    description:
      "We conduct follow-up visits to ensure the effectiveness of our treatments and make adjustments if necessary to maintain a pest-free environment.",
    image: "/placeholder.svg?height=200&width=300&text=Follow-up",
  },
  {
    title: "Education",
    description:
      "We educate our clients on how to maintain a pest-free environment and recognize early signs of infestation to prevent major problems from developing.",
    image: "/placeholder.svg?height=200&width=300&text=Education",
  },
]

