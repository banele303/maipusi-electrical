"use client"

import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { ArrowLeft, Heart, Wrench, Shirt, ShoppingBag, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useParams } from "next/navigation"

// Services data for Maipusi Electrical Signals
const services = [
	{
		title: "Herbalife Products",
		slug: "herbalife",
		icon: Heart,
		shortDescription: "Herbalife products with friendly guidance and support.",
		description:
			"We sell genuine Herbalife products and help you pick the right items for your goals.",
		longDescription:
			"From shakes and teas to vitamins and targeted nutrition, we tailor simple daily routines and provide ongoing support so you stay on track.",
		heroImage: "/placeholder.svg?height=400&width=800&text=Herbalife",
		features: [
			{ title: "Personalized Guidance", description: "Choose the right products for your goals." },
			{ title: "Genuine Products", description: "Authentic stock and fresh inventory." },
			{ title: "Flexible Plans", description: "Weight, energy, and wellness options." },
			{ title: "Ongoing Support", description: "Check-ins and tips when you need them." },
		],
		approach: [
			{ title: "Consultation", description: "Discuss your goals and preferences.", image: "" },
			{ title: "Product Selection", description: "Choose a tailored set of products.", image: "" },
			{ title: "Routine Planning", description: "Create a simple daily routine.", image: "" },
			{ title: "Follow-up", description: "Adjust and optimize over time.", image: "" },
		],
		benefits: [
			"Simple daily routines",
			"Support for weight and energy goals",
			"Quality, authentic products",
			"Friendly advice and check-ins",
		],
		faqs: [
			{ question: "Do you consult first?", answer: "Yes, we start with a quick consultation to match products to goals." },
			{ question: "Are products in stock?", answer: "Common items are in stock; special items can be ordered quickly." },
		],
		areas: ["Johannesburg", "Sandton", "Midrand", "Centurion", "Pretoria"],
	},
	{
		title: "Repairs, Design & Install",
		slug: "repairs",
		icon: Wrench,
		shortDescription:
			"Repairs, design and installation: inverters, irons, washers, microwaves, stoves, TVs.",
		description:
			"Fast diagnostics, skilled repairs, and clean installs with clear pricing and dependable workmanship.",
		longDescription:
			"We repair home electronics and appliances, and we design and install inverter power systems. From sizing and wiring to commissioning and support, we deliver reliable setups and quality repairs.",
		heroImage: "/placeholder.svg?height=400&width=800&text=Repairs+%26+Install",
		features: [
			{ title: "Inverters: Design & Install", description: "System sizing, wiring, commissioning, and support." },
			{ title: "Iron & Microwave Repairs", description: "Elements, thermostats, switches, and safety checks." },
			{ title: "Washing Machine Repairs", description: "Pumps, bearings, belts, valves, and control boards." },
			{ title: "Stoves & TV Repairs", description: "Elements, ignition, power supplies, backlights, and more." },
		],
		approach: [
			{ title: "Assessment", description: "Describe the fault; we run quick diagnostics.", image: "" },
			{ title: "Quote", description: "Transparent pricing before any work starts.", image: "" },
			{ title: "Repair", description: "Skilled repairs with quality parts.", image: "" },
			{ title: "Testing", description: "Thorough functional testing and handover.", image: "" },
		],
		benefits: ["Skilled technicians", "Quality parts where possible", "Fast turnaround", "Clear pricing"],
		faqs: [
			{ question: "Do you offer collection?", answer: "Yes, local collection can be arranged on request." },
			{ question: "Warranty on repairs?", answer: "We provide a limited workmanship warranty; details on quote." },
		],
		areas: ["Johannesburg", "Sandton", "Randburg", "Roodepoort", "Midrand"],
	},
	{
		title: "Laundry — Washing Dirty Laundry",
		slug: "laundry",
		icon: Shirt,
		shortDescription: "Drop-off laundry. Fresh, fast, and neatly folded.",
		description:
			"Bring your dirty laundry — we wash, dry and fold with care using fabric-safe detergents.",
		longDescription:
			"Simple, great-value service for everyday wear and linens. Same‑day options available on request. Pay-by-weight with clear pricing.",
		heroImage: "/placeholder.svg?height=400&width=800&text=Laundry",
		features: [
			{ title: "Wash & Fold", description: "Clean, dry, and neatly folded." },
			{ title: "Same‑day Options", description: "Express service when you need it." },
			{ title: "Careful Handling", description: "Fabric-appropriate programs and detergents." },
			{ title: "Simple Pricing", description: "Pay-by-weight, no surprises." },
		],
		approach: [
			{ title: "Drop-off", description: "Bring items; we weigh and tag.", image: "" },
			{ title: "Care Settings", description: "We set programs by fabric type.", image: "" },
			{ title: "Quality Check", description: "Fold, pack, and confirm order.", image: "" },
			{ title: "Pickup", description: "Ready for collection or delivery (if arranged).", image: "" },
		],
		benefits: ["Fresh results", "Fast turnaround", "Great value", "Friendly service"],
		faqs: [
			{ question: "Do you iron clothes?", answer: "Ironing available on request; ask for a combined rate." },
			{ question: "Stain treatment?", answer: "We pre-treat common stains where possible." },
		],
		areas: ["Johannesburg", "Soweto", "Midrand", "Kempton Park", "Centurion"],
	},
	{
		title: "Sells Shoes",
		slug: "shoes",
		icon: ShoppingBag,
		shortDescription: "Stylish footwear at great prices.",
		description:
			"We sell trendy, comfortable shoes with regular new stock. Ask about sizes and latest arrivals.",
		longDescription:
			"From casual sneakers to smart styles, we focus on value and comfort. Try-ons welcome at our service point.",
		heroImage: "/placeholder.svg?height=400&width=800&text=Shoes",
		features: [
			{ title: "Latest Styles", description: "Fresh drops and regular updates." },
			{ title: "Great Value", description: "Competitive pricing across sizes." },
			{ title: "Comfort‑fit", description: "Lightweight, daily-wear comfort." },
			{ title: "Size Guidance", description: "We help you pick the right fit." },
		],
		approach: [
			{ title: "Browse", description: "Check current stock and sizes.", image: "" },
			{ title: "Try-on", description: "Visit to try sizes and styles.", image: "" },
			{ title: "Purchase", description: "Pay and take home same day.", image: "" },
			{ title: "Aftercare", description: "Care tips for longer life.", image: "" },
		],
		benefits: ["Trendy picks", "Comfortable wear", "Multiple sizes", "Great pricing"],
		faqs: [
			{ question: "Do you deliver?", answer: "Local delivery can be arranged for a small fee." },
			{ question: "Returns?", answer: "Unworn items can be exchanged within 7 days with receipt." },
		],
		areas: ["Johannesburg", "Sandton", "Benoni", "Boksburg", "Alberton"],
	},
]

export default function ServicePage() {
	// Normalize slug safely across Next versions
	const params = useParams()
	const slug = Array.isArray((params as any)?.slug) ? (params as any).slug[0] : ((params as any)?.slug as string)
	const service = services.find((s) => s.slug === slug)

	if (!service) {
		return (
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-2xl font-semibold mb-4">Service not found</h1>
				<Button asChild variant="outline">
					<Link href="/services">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Services
					</Link>
				</Button>
			</div>
		)
	}

	// JSON-LD for SEO
	const serviceLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: service.title,
		description: service.description,
		provider: { "@type": "LocalBusiness", name: "Maipusi Electrical Signals" },
		areaServed: service.areas,
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: `${service.title} Options`,
		},
	}
	const breadcrumbLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: "/" },
			{ "@type": "ListItem", position: 2, name: "Services", item: "/services" },
			{ "@type": "ListItem", position: 3, name: service.title, item: `/services/${service.slug}` },
		],
	}

	// Simple gallery fallback using available public images
	const gallery = [
		service.heroImage,
		"/placeholder.svg?height=400&width=800&text=Showcase+1",
		"/placeholder.svg?height=400&width=800&text=Showcase+2",
	]

	return (
		<div className="flex flex-col min-h-screen">
			{/* SEO: JSON-LD */}
			<Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
			<Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

			{/* Modern Hero */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600" />
				<div className="relative container mx-auto px-4 py-16 text-white">
					<div className="flex items-center gap-2 mb-6">
						<Link href="/services" className="text-white/90 hover:text-white inline-flex items-center gap-1">
							<ArrowLeft className="h-4 w-4" /> Back to Services
						</Link>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						<div>
							<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{service.title}</h1>
							<p className="text-lg md:text-xl mt-4 max-w-2xl text-white/90">{service.shortDescription}</p>
							<div className="mt-8 flex flex-wrap gap-3">
								<Button asChild className="bg-white text-gray-900 hover:opacity-90">
									<Link href="/contact">Get a Quote</Link>
								</Button>
								<Button asChild variant="outline" className="border-white/70 text-white hover:bg-white/10">
									<a href="tel:27798131590">Call 27 79 813 1590</a>
								</Button>
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden ring-1 ring-white/20">
							<Image
								src={service.heroImage}
								alt={service.title}
								width={960}
								height={540}
								className="w-full h-auto object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Key Highlights */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{service.features.slice(0, 4).map((f, i) => (
							<div key={i} className="rounded-xl border bg-white p-5">
								<div className="flex items-start gap-3">
									<CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
									<div>
										<div className="font-semibold">{f.title}</div>
										<div className="text-sm text-gray-600">{f.description}</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Details with Tabs */}
			<section className="py-12">
				<div className="container mx-auto px-4">
					<Tabs defaultValue="overview" className="mb-12">
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="approach">How It Works</TabsTrigger>
							<TabsTrigger value="benefits">Benefits</TabsTrigger>
						</TabsList>

						<TabsContent value="overview" className="pt-6">
							<div className="grid lg:grid-cols-3 gap-10">
								<div className="lg:col-span-2">
									<h2 className="text-3xl font-bold mb-6">Overview</h2>
									<p className="text-lg text-gray-700 mb-6">{service.description}</p>
									<p className="text-lg text-gray-700 mb-6">{service.longDescription}</p>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
										{service.features.map((feature, index) => (
											<div key={index} className="flex gap-3">
												<CheckCircle className="w-5 h-5 text-[#2A4834] flex-shrink-0 mt-1" />
												<div>
													<h4 className="font-semibold mb-1">{feature.title}</h4>
													<p className="text-gray-700">{feature.description}</p>
												</div>
											</div>
										))}
									</div>
								</div>
								<div className="rounded-xl overflow-hidden border">
									<Image
										src={service.heroImage}
										alt={`${service.title} image`}
										width={800}
										height={600}
										className="w-full h-auto object-cover"
									/>
								</div>
							</div>
						</TabsContent>

						<TabsContent value="approach" className="pt-6">
							<h2 className="text-3xl font-bold mb-6">How It Works</h2>
							<div className="grid gap-6">
								{service.approach.map((step, index) => (
									<div key={index} className="flex gap-4">
										<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2A4834] text-white flex items-center justify-center">
											{index + 1}
										</div>
										<div>
											<h4 className="text-xl font-semibold mb-2">{step.title}</h4>
											<p className="text-gray-700">{step.description}</p>
										</div>
									</div>
								))}
							</div>
						</TabsContent>

						<TabsContent value="benefits" className="pt-6">
							<h3 className="text-3xl font-bold mb-6">Benefits</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{service.benefits.map((benefit, index) => (
									<div key={index} className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-[#2A4834] mt-0.5" />
										<p className="text-gray-700">{benefit}</p>
									</div>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</section>

			{/* Gallery */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					<h3 className="text-2xl font-bold mb-6">Gallery</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{gallery.map((src, i) => (
							<div key={i} className="rounded-xl overflow-hidden border bg-white">
								<Image src={src} alt={`${service.title} ${i + 1}`} width={600} height={400} className="w-full h-auto object-cover" />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4">
					<h3 className="text-2xl font-bold mb-6">What Clients Say</h3>
					<div className="grid md:grid-cols-3 gap-6">
						{[
							{ name: "Thandi", text: "Excellent service and fast turnaround. Highly recommend!" },
							{ name: "Sipho", text: "Professional, friendly, and great value." },
							{ name: "Lerato", text: "Quality products and superb support." },
						].map((t, i) => (
							<div key={i} className="rounded-xl border p-5 bg-white">
								<p className="text-gray-700">“{t.text}”</p>
								<div className="mt-3 text-sm font-semibold text-gray-900">— {t.name}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing/Options */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					<h3 className="text-2xl font-bold mb-6">{service.title} Options</h3>
					<div className="grid md:grid-cols-3 gap-6">
						{["Basic", "Standard", "Premium"].map((tier, i) => (
							<div key={i} className="rounded-2xl border bg-white p-6">
								<div className="text-lg font-semibold">{tier}</div>
								<ul className="mt-4 space-y-2 text-sm text-gray-700">
									<li className="flex items-center gap-2">
										<CheckCircle className="w-4 h-4 text-green-600" /> Quality assurance
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="w-4 h-4 text-green-600" /> Friendly support
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="w-4 h-4 text-green-600" /> Clear pricing
									</li>
								</ul>
								<Button asChild className="mt-6 w-full bg-[#2A4834] hover:bg-[#1A3824]">
									<Link href="/contact">Enquire</Link>
								</Button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Areas + CTA */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4">
					<h3 className="text-2xl font-bold mb-4">Service Areas</h3>
					<div className="flex flex-wrap gap-2">
						{service.areas.map((area) => (
							<span key={area} className="px-3 py-1 rounded-full border bg-gray-50 text-sm">
								{area}
							</span>
						))}
					</div>
					<div className="mt-10 rounded-2xl border bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 p-8 text-white">
						<div className="grid md:grid-cols-2 gap-6 items-center">
							<div>
								<h4 className="text-2xl font-bold">Ready to get started?</h4>
								<p className="text-white/90 mt-2">Contact us for a tailored quote and fast service.</p>
							</div>
							<div className="flex gap-3 md:justify-end">
								<Button asChild className="bg-white text-gray-900 hover:opacity-90">
									<Link href="/contact">Contact Us</Link>
								</Button>
								<Button asChild variant="outline" className="border-white/70 text-white hover:bg-white/10">
									<a href="tel:27798131590">Call 27 79 813 1590</a>
								</Button>
							</div>
						</div>
					</div>

					{/* Other Services */}
					<div className="mt-10">
						<h4 className="font-semibold mb-3">Other Services</h4>
						<ul className="space-y-2">
							{services
								.filter((s) => s.slug !== slug)
								.map((s) => (
									<li key={s.slug}>
										<Link href={`/services/${s.slug}`} className="text-[#2A4834] hover:underline">
											{s.title}
										</Link>
									</li>
								))}
						</ul>
					</div>
				</div>
			</section>
		</div>
	)
}