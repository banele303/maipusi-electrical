import { Mail, Phone, Shield, Award, BookOpen } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#2A4834] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl max-w-3xl">
            Meet the dedicated professionals behind Eye of Africa Pest Control. Our experienced team is committed to
            providing exceptional pest management services.
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Pest Control Specialists</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our team consists of highly trained and certified pest control specialists with years of experience in
                the industry. We take pride in our knowledge, professionalism, and commitment to customer satisfaction.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Each member of our team undergoes rigorous training and certification to ensure they have the skills and
                knowledge needed to handle any pest situation effectively and safely.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#2A4834]" />
                  <span>Certified Technicians</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#2A4834]" />
                  <span>Industry Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-[#2A4834]" />
                  <span>Continuous Training</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#2A4834]" />
                  <span>Background Checked</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=500&width=700&text=Our+Team"
                alt="Eye of Africa Pest Control Team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="aspect-square bg-gray-200 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    {member.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-[#2A4834]" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>{member.email}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalTeam.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>{member.email}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Support Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportTeam.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>{member.email}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Join Our Team</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We're always looking for talented and dedicated individuals to join our team. If you're passionate about
              pest control and customer service, we'd love to hear from you.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-[#2A4834] hover:bg-[#1A3824]">
                <Link href="/contact">Contact Us About Careers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const leadershipTeam = [
  {
    name: "Amos John Mhlanga",
    position: "Managing Director",
    bio: "With over 20 years of experience in pest control, Amos founded Eye of Africa and leads our team with expertise and dedication to customer satisfaction.",
    phone: "079 095 9784",
    email: "amos@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=400&width=400&text=Amos+John+Mhlanga",
    certifications: ["Certified Pest Control Operator", "SAPCA Member", "Health & Safety Certified"],
  },
  {
    name: "Nompumelelo Thabitha Mhlanga",
    position: "Administrative Manager",
    bio: "Nompumelelo ensures smooth operations and excellent customer service in all administrative aspects of our business. She has been with the company since its founding.",
    phone: "084 995 7085",
    email: "nompumelelo@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=400&width=400&text=Nompumelelo+Mhlanga",
    certifications: ["Business Administration", "Customer Service Excellence", "Office Management"],
  },
  {
    name: "Charles Mkansi",
    position: "Marketing Manager",
    bio: "Charles develops and implements our marketing strategies to reach and serve more clients effectively. He brings 10 years of marketing experience to our team.",
    phone: "073 664 2517",
    email: "charly@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=400&width=400&text=Charles+Mkansi",
    certifications: ["Digital Marketing Certified", "Brand Management", "Strategic Marketing"],
  },
  {
    name: "Thabo Mokoena",
    position: "Operations Manager",
    bio: "Thabo oversees our day-to-day operations, ensuring efficient service delivery and maintaining our high standards of quality control.",
    phone: "072 123 4567",
    email: "thabo@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=400&width=400&text=Thabo+Mokoena",
    certifications: ["Operations Management", "Pest Control Certified", "Team Leadership"],
  },
]

const technicalTeam = [
  {
    name: "Siphamandla Nicolus Mhlanga",
    position: "Senior Pest Control Technician",
    bio: "Siphamandla brings technical expertise and attention to detail to every pest control job. He specializes in termite control and commercial pest management.",
    phone: "079 940 4510",
    email: "siphamandla@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=300&width=400&text=Siphamandla+Mhlanga",
  },
  {
    name: "David Ndlovu",
    position: "Pest Control Technician",
    bio: "David has 8 years of experience in residential pest control and is an expert in rodent management and exclusion techniques.",
    phone: "071 234 5678",
    email: "david@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=300&width=400&text=David+Ndlovu",
  },
  {
    name: "Samuel Khumalo",
    position: "Pest Control Technician",
    bio: "Samuel specializes in mosquito and fly control, with particular expertise in developing seasonal treatment plans for residential properties.",
    phone: "073 345 6789",
    email: "samuel@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=300&width=400&text=Samuel+Khumalo",
  },
  {
    name: "Jacob Molefe",
    position: "Pest Control Technician",
    bio: "Jacob is our bed bug specialist, with advanced training in heat treatments and integrated pest management for difficult infestations.",
    phone: "074 456 7890",
    email: "jacob@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=300&width=400&text=Jacob+Molefe",
  },
  {
    name: "Michael Sithole",
    position: "Pest Control Technician",
    bio: "Michael focuses on commercial pest control, with expertise in food processing facilities and healthcare environments.",
    phone: "075 567 8901",
    email: "michael@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=300&width=400&text=Michael+Sithole",
  },
  {
    name: "Peter Nkosi",
    position: "Pest Control Technician",
    bio: "Peter specializes in preventative pest control and building modifications to prevent pest entry and harborage.",
    phone: "076 678 9012",
    email: "peter@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=300&width=400&text=Peter+Nkosi",
  },
]

const supportTeam = [
  {
    name: "Sarah Dlamini",
    position: "Customer Service Representative",
    bio: "Sarah handles customer inquiries and scheduling, ensuring a smooth experience from first contact through service completion.",
    phone: "071 789 0123",
    email: "sarah@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=300&width=400&text=Sarah+Dlamini",
  },
  {
    name: "Grace Mathebula",
    position: "Administrative Assistant",
    bio: "Grace supports our administrative operations, handling paperwork, record-keeping, and customer follow-ups.",
    phone: "072 890 1234",
    email: "grace@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=300&width=400&text=Grace+Mathebula",
  },
  {
    name: "John Zulu",
    position: "Logistics Coordinator",
    bio: "John manages our fleet and equipment, ensuring our technicians have everything they need to provide excellent service.",
    phone: "073 901 2345",
    email: "john@eye-ofafrica-pestcontrol.co.za",
    image: "/placeholder.svg?height=300&width=400&text=John+Zulu",
  },
]

