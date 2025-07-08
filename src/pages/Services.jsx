"use client"

import { useState } from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import Banner from "../components/Banner"
import ContactForm from "../components/ContactForm"
import { siteConfig } from "../assets/config"

const Services = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false)

  const serviceDetails = [
    {
      title: "Excavation Services",
      description: "Professional excavation and earthwork services for all types of construction projects.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Site preparation and clearing",
        "Foundation excavation",
        "Utility trenching",
        "Grading and leveling",
        "Demolition services",
      ],
    },
    {
      title: "Roofing Solutions",
      description: "Complete roofing services from new installations to repairs and maintenance.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "New roof installation",
        "Roof repairs and maintenance",
        "Commercial roofing systems",
        "Residential roofing",
        "Emergency roof services",
      ],
    },
    {
      title: "Electrical Work",
      description: "Licensed electrical services for residential and commercial properties.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Electrical installations",
        "Wiring and rewiring",
        "Panel upgrades",
        "Commercial electrical systems",
        "Safety inspections",
      ],
    },
    {
      title: "General Contracting",
      description: "Full-service general contracting for projects of all sizes and complexities.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Project management",
        "Construction planning",
        "Permit assistance",
        "Quality control",
        "Timeline coordination",
      ],
    },
  ]

  return (
    <>
      <Helmet>
        <title>Services - {siteConfig.meta.title}</title>
        <meta
          name="description"
          content="Explore KYCO Construction's comprehensive services including excavation, roofing, electrical work, and general contracting."
        />
      </Helmet>

      <div className="pt-16 lg:pt-20">
        <Banner
          title="Our Services"
          subtitle="Comprehensive Construction Solutions for Every Need"
          backgroundImage="/placeholder.svg?height=400&width=1200"
        />

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From excavation to final finishes, we provide comprehensive construction services that meet the highest
                standards of quality and professionalism.
              </p>
            </motion.div>

            <div className="space-y-16">
              {serviceDetails.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>

                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setShowQuoteForm(true)}
                      className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors duration-200 font-semibold"
                    >
                      Get Quote
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven process to ensure every project is completed successfully.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "We meet with you to understand your project requirements and vision.",
                },
                {
                  step: "02",
                  title: "Planning",
                  description: "Our team develops a detailed project plan with timelines and specifications.",
                },
                {
                  step: "03",
                  title: "Execution",
                  description: "We execute the project with precision, keeping you informed every step of the way.",
                },
                {
                  step: "04",
                  title: "Completion",
                  description: "Final walkthrough and handover of your completed project.",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and estimate. Let's bring your vision to life.
              </p>
              <button
                onClick={() => setShowQuoteForm(true)}
                className="bg-white text-red-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                Request Free Estimate
              </button>
            </motion.div>
          </div>
        </section>

        {/* Quote Form Popup */}
        {showQuoteForm && <ContactForm isPopup={true} onClose={() => setShowQuoteForm(false)} />}
      </div>
    </>
  )
}

export default Services
