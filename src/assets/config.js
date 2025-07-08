import logo from "./images/logo.png"
import heroImage from "./images/banner.webp"
export const siteConfig = {
  // Site metadata
  meta: {
    title: "KYCO - Professional Construction Services",
    description:
      "Committed to quality construction services including excavation, roofing, electrical, and general contracting. Experience excellence every time.",
    keywords:
      "construction, excavation, roofing, electrical, general contracting, commercial, residential, multifamily",
    author: "KYCO Construction",
    url: "https://kyco-construction.com",
    image: "/images/hero-bg.jpg",
  },

  // Contact information
  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@kycoconstruction.com",
    address: "123 Construction Ave, Builder City, BC 12345",
  },

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ],

  // Images
  images: {
    logo,
    heroWorker:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e3fe042e-eaef-4d61-9b89-ea54c67144da.png-nfWf2qlI7LumqsAt2srFdLqQ6JoPH0.jpeg",
    heroImage,
    serviceExcavation: "/images/service-excavation.jpg",
    serviceRoofing: "/images/service-roofing.jpg",
    serviceElectrical: "/images/service-electrical.jpg",
    serviceGeneral: "/images/service-general.jpg",
    projectImage1: "/images/project-1.jpg",
    projectImage2: "/images/project-2.jpg",
    experienceWorker: "/images/experience-worker.jpg",
    partnershipBg: "/images/partnership-bg.jpg",
    communityTeam1: "/images/community-team-1.jpg",
    communityTeam2: "/images/community-team-2.jpg",
    footerTruck: "/images/footer-truck.png",
  },

  // Hero section content
  hero: {
    title: "COMMITTED TO QUALITY",
    subtitle:
      "Every step of the way in everything we touch, from our first meeting with you to the final walk-through, we are committed to your complete satisfaction.",
    buttonText: "Request Our Services",
  },

  // Stats section
  stats: [
    { icon: "🏗️", number: "25+", label: "Years in Business" },
    { icon: "📋", number: "500+", label: "Projects Completed" },
    { icon: "👥", number: "50+", label: "Expert Team Members" },
    { icon: "⭐", number: "100%", label: "Client Satisfaction" },
  ],

  // Services
  services: [
    {
      title: "Excavation",
      image: "/placeholder.svg?height=200&width=300",
      description: "Professional excavation services for all your construction needs.",
    },
    {
      title: "Roofing",
      image: "/placeholder.svg?height=200&width=300",
      description: "Complete roofing solutions from installation to repair.",
    },
    {
      title: "Electrical",
      image: "/placeholder.svg?height=200&width=300",
      description: "Licensed electrical work for residential and commercial projects.",
    },
    {
      title: "General",
      image: "/placeholder.svg?height=200&width=300",
      description: "Full-service general contracting for projects of all sizes.",
    },
  ],

  // Recent work content
  recentWork: {
    title: "What Started as Drywall Became So Much More",
    content:
      "From our humble beginnings in drywall installation, we've grown into a full-service construction company. Our commitment to quality and customer satisfaction has driven our expansion into excavation, roofing, electrical, and general contracting services.",
    buttonText: "View Our Work",
    images: ["/placeholder.svg?height=250&width=300", "/placeholder.svg?height=250&width=300"],
  },

  // Partnership section
  partnership: {
    title: "Where Quality Comes Standard and Relationships Come First.",
    content:
      "We believe that great construction starts with great relationships. Our team works closely with each client to understand their vision and deliver results that exceed expectations.",
    buttonText: "Start Your Project",
  },

  // Experience section
  experience: {
    title: "Experience. Excellence. Every Time.",
    content:
      "With over 25 years in the construction industry, our team brings unmatched expertise to every project. From small residential repairs to large commercial developments, we deliver excellence every time.",
    buttonText: "Request Free Estimate",
  },

  // Categories
  categories: [
    {
      title: "Commercial",
      icon: "🏢",
      description: "Professional commercial construction services",
    },
    {
      title: "Multifamily",
      icon: "🏘️",
      description: "Specialized multifamily residential projects",
    },
    {
      title: "Residential",
      icon: "🏠",
      description: "Custom residential construction and renovation",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "John Smith",
      company: "ABC Corporation",
      text: "KYCO delivered exceptional quality on our commercial project. Their attention to detail and professionalism exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      company: "Homeowner",
      text: "From start to finish, the KYCO team was professional, reliable, and delivered outstanding results on our home renovation.",
      rating: 5,
    },
    {
      name: "Mike Davis",
      company: "Property Manager",
      text: "We've worked with KYCO on multiple multifamily projects. Their quality and timeliness are consistently excellent.",
      rating: 5,
    },
    {
      name: "Lisa Brown",
      company: "Restaurant Owner",
      text: "KYCO transformed our restaurant space beautifully. The project was completed on time and within budget.",
      rating: 5,
    },
    {
      name: "Tom Wilson",
      company: "Office Manager",
      text: "Professional service from consultation to completion. KYCO is our go-to contractor for all office renovations.",
      rating: 5,
    },
    {
      name: "Jennifer Lee",
      company: "Homeowner",
      text: "The electrical work KYCO performed was top-notch. Clean, professional, and up to all safety standards.",
      rating: 5,
    },
    {
      name: "Robert Garcia",
      company: "Developer",
      text: "KYCO has been our trusted partner on numerous development projects. Their expertise is unmatched.",
      rating: 5,
    },
    {
      name: "Amanda Taylor",
      company: "Business Owner",
      text: "Excellent communication throughout the project. KYCO kept us informed every step of the way.",
      rating: 5,
    },
  ],

  // Community section
  community: {
    title: "Rooted in Community",
    content:
      "We take pride in being an active part of our local community. From supporting local charities to participating in community development projects, KYCO is committed to giving back to the neighborhoods we serve.",
    posts: [
      {
        title: "Community Blog Post",
        excerpt: "Learn about our latest community involvement and how we're making a difference in our local area.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Community Blog Post",
        excerpt: "Discover our ongoing commitment to sustainable construction practices and community development.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },

  // Contact form
  contactForm: {
    title: "Let's Start Building Together.",
    subtitle:
      "Ready to begin your construction project? Get in touch with our team for a free consultation and estimate.",
    services: [
      "Excavation",
      "Roofing",
      "Electrical",
      "General Contracting",
      "Commercial Construction",
      "Residential Construction",
      "Renovation",
      "Other",
    ],
  },

  // Footer
  footer: {
    description: "KYCO is committed to delivering quality construction services with integrity and excellence.",
    quickLinks: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Excavation", href: "/services#excavation" },
      { name: "Roofing", href: "/services#roofing" },
      { name: "Electrical", href: "/services#electrical" },
      { name: "General Contracting", href: "/services#general" },
    ],
    socialLinks: [
      { name: "Facebook", href: "#", icon: "facebook" },
      { name: "Twitter", href: "#", icon: "twitter" },
      { name: "LinkedIn", href: "#", icon: "linkedin" },
    ],
  },
}
