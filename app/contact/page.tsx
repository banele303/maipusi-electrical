"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Clock, CheckCircle, Zap, Heart, Shirt, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    address: "",
    city: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    hearAbout: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Service request submitted:", formData)
    alert("Thank you for your request! We'll contact you soon to confirm your service.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      address: "",
      city: "",
      serviceType: "",
      preferredDate: "",
      preferredTime: "",
      hearAbout: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Contact Maipusi Electrical Signals
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Design, Install, Repair. Herbalife products, electrical repairs, laundry services, and premium shoes.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-300" />
                <span className="font-semibold">Design & Install</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-green-300" />
                <span className="font-semibold">Herbalife Products</span>
              </div>
              <div className="flex items-center gap-2">
                <Shirt className="h-6 w-6 text-blue-300" />
                <span className="font-semibold">Laundry Service</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-purple-300" />
                <span className="font-semibold">Premium Shoes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Ready to experience our premium services? Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                <Tabs defaultValue="contact" className="mb-8">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-xl p-1">
                    <TabsTrigger value="contact" className="rounded-lg">
                      Quick Contact
                    </TabsTrigger>
                    <TabsTrigger value="service" className="rounded-lg">
                      Service Request
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="contact">
                    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name" className="text-sm font-semibold">
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="email" className="text-sm font-semibold">
                              Email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                              required
                            />
                          </div>

                          <div className="grid gap-3">
                            <Label htmlFor="phone" className="text-sm font-semibold">
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="Your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid gap-3">
                          <Label htmlFor="service" className="text-sm font-semibold">
                            Service Interested In
                          </Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => handleSelectChange("service", value)}
                          >
                            <SelectTrigger id="service" className="rounded-xl border-2 border-gray-200">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="herbalife">Herbalife Products</SelectItem>
                              <SelectItem value="repairs">Electrical Repairs & Installation</SelectItem>
                              <SelectItem value="laundry">Laundry Services</SelectItem>
                              <SelectItem value="shoes">Premium Shoes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid gap-3">
                          <Label htmlFor="message" className="text-sm font-semibold">
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us how we can help you..."
                            value={formData.message}
                            onChange={handleChange}
                            className="min-h-[120px] rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Send Message
                      </Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="service">
                    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name" className="text-sm font-semibold">
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="email" className="text-sm font-semibold">
                              Email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                              required
                            />
                          </div>

                          <div className="grid gap-3">
                            <Label htmlFor="phone" className="text-sm font-semibold">
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="Your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid gap-3">
                          <Label htmlFor="address" className="text-sm font-semibold">
                            Service Address
                          </Label>
                          <Input
                            id="address"
                            name="address"
                            placeholder="Where do you need our service?"
                            value={formData.address}
                            onChange={handleChange}
                            className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>

                        <div className="grid gap-3">
                          <Label htmlFor="serviceType" className="text-sm font-semibold">
                            Service Type
                          </Label>
                          <Select
                            value={formData.serviceType}
                            onValueChange={(value) => handleSelectChange("serviceType", value)}
                          >
                            <SelectTrigger id="serviceType" className="rounded-xl border-2 border-gray-200">
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="herbalife-consultation">Herbalife Product Consultation</SelectItem>
                              <SelectItem value="inverter-install">Inverter Design & Installation</SelectItem>
                              <SelectItem value="inverter-repair">Inverter Repair</SelectItem>
                              <SelectItem value="iron-repair">Electric Iron Repair</SelectItem>
                              <SelectItem value="washing-machine">Washing Machine Repair</SelectItem>
                              <SelectItem value="microwave-repair">Microwave Oven Repair</SelectItem>
                              <SelectItem value="stove-repair">Electrical Stove Repair</SelectItem>
                              <SelectItem value="tv-repair">Television Repair</SelectItem>
                              <SelectItem value="laundry-service">Laundry Service</SelectItem>
                              <SelectItem value="shoe-purchase">Shoe Purchase</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="preferredDate" className="text-sm font-semibold">
                              Preferred Date
                            </Label>
                            <Input
                              id="preferredDate"
                              name="preferredDate"
                              type="date"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                            />
                          </div>

                          <div className="grid gap-3">
                            <Label htmlFor="preferredTime" className="text-sm font-semibold">
                              Preferred Time
                            </Label>
                            <Select
                              value={formData.preferredTime}
                              onValueChange={(value) => handleSelectChange("preferredTime", value)}
                            >
                              <SelectTrigger id="preferredTime" className="rounded-xl border-2 border-gray-200">
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="morning">Morning (8AM-12PM)</SelectItem>
                                <SelectItem value="afternoon">Afternoon (12PM-4PM)</SelectItem>
                                <SelectItem value="evening">Evening (4PM-6PM)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid gap-3">
                          <Label htmlFor="message" className="text-sm font-semibold">
                            Service Details
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Please describe your specific needs or the issue you're experiencing..."
                            value={formData.message}
                            onChange={handleChange}
                            className="min-h-[120px] rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Request Service
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl mt-8 border border-red-200">
                  <h3 className="text-xl font-bold mb-4 text-red-700">Emergency Electrical Repairs</h3>
                  <p className="mb-4 text-red-600">
                    For urgent electrical issues that need immediate attention, call our emergency line:
                  </p>
                  <div className="flex items-center gap-3 text-lg font-semibold">
                    <Phone className="h-5 w-5 text-red-600" />
                    <a href="https://wa.me/27798131590" className="hover:text-red-800 text-red-700">
                      +27 79 813 1590
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contact Information
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Reach out to us directly for immediate assistance. We serve the greater Johannesburg area with all our
                premium services.
              </p>

              <div className="grid grid-cols-1 gap-8">
                <Card className="bg-white shadow-xl rounded-2xl border-0 overflow-hidden">
                  <CardHeader className="pb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5" /> Phone Numbers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="mb-3 flex justify-between">
                      <strong>Main Line:</strong> <span className="text-blue-600">(011) 925 4615</span>
                    </p>
                    <p className="mb-3 flex justify-between">
                      <strong>WhatsApp:</strong> <span className="text-blue-600">+27 79 813 1590</span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Emergency:</strong> <span className="text-red-600">+27 79 813 1590</span>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl rounded-2xl border-0 overflow-hidden">
                  <CardHeader className="pb-2 bg-gradient-to-r from-green-500 to-teal-500 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" /> Email Addresses
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="mb-3">
                      <strong>General:</strong> info@maipusi-electrical.co.za
                    </p>
                    <p className="mb-3">
                      <strong>Support:</strong> support@maipusi-electrical.co.za
                    </p>
                    <p>
                      <strong>Management:</strong> management@maipusi-electrical.co.za
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl rounded-2xl border-0 overflow-hidden">
                  <CardHeader className="pb-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" /> Location
                    </CardTitle>
                    <CardDescription className="text-purple-100">Visit our service center</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="mb-4 text-gray-700">
                      123 Electrical Avenue
                      <br />
                      Johannesburg
                      <br />
                      South Africa, 2000
                    </p>
                    <div className="rounded-xl overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <MapPin className="h-12 w-12 mx-auto mb-2" />
                        <p>Interactive Map Coming Soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-xl rounded-2xl border-0 overflow-hidden">
                  <CardHeader className="pb-2 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" /> Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="font-medium">Monday - Friday</div>
                      <div className="text-green-600 font-semibold">8:00 AM - 6:00 PM</div>
                      <div className="font-medium">Saturday</div>
                      <div className="text-green-600 font-semibold">9:00 AM - 4:00 PM</div>
                      <div className="font-medium">Sunday</div>
                      <div className="text-orange-600 font-semibold">Emergency Only</div>
                      <div className="font-medium">Public Holidays</div>
                      <div className="text-orange-600 font-semibold">Emergency Available</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-10 bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Service Areas
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const serviceAreas = [
  "Johannesburg CBD",
  "Sandton",
  "Randburg",
  "Roodepoort",
  "Midrand",
  "Soweto",
  "Centurion",
  "Pretoria",
  "Kempton Park",
  "Boksburg",
  "Benoni",
  "Germiston",
  "Alberton",
  "Springs",
  "Brakpan",
]

