"use client"

import { useState } from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import Banner from "../components/Banner"
import { siteConfig } from "../assets/config"

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const projects = [
    {
      title: "Downtown Office Complex",
      category: "commercial",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Complete renovation of a 50,000 sq ft office building including electrical, HVAC, and interior finishes.",
      year: "2023",
    },
    {
      title: "Luxury Apartment Building",
      category: "multifamily",
      image: "/placeholder.svg?height=300&width=400",
      description: "New construction of a 120-unit luxury apartment complex with modern amenities.",
      year: "2023",
    },
    {
      title: "Custom Family Home",
      category: "residential",
      image: "/placeholder.svg?height=300&width=400",
      description: "Ground-up construction of a 4,500 sq ft custom home with high-end finishes.",
      year: "2022",
    },
    {
      title: "Retail Shopping Center",
      category: "commercial",
      image: "/placeholder.svg?height=300&width=400",
      description: "New construction of a 25,000 sq ft retail center with multiple tenant spaces.",
      year: "2022",
    },
    {
      title: "Townhome Development",
      category: "multifamily",
      image: "/placeholder.svg?height=300&width=400",
      description: "Development of 24 luxury townhomes with modern design and energy-efficient features.",
      year: "2022",
    },
    {
      title: "Historic Home Restoration",
      category: "residential",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete restoration of a 1920s historic home while preserving original character.",
      year: "2021",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "commercial", name: "Commercial" },
    { id: "multifamily", name: "Multifamily" },
    { id: "residential", name: "Residential" },
  ]

  return (
    <>
      <Helmet>
        <title>Projects - {siteConfig.meta.title}</title>
        <meta
          name="description"
          content="Explore KYCO Construction's portfolio of completed projects including commercial, multifamily, and residential construction."
        />
      </Helmet>

      <div className="pt-16 lg:pt-20">
        <Banner
          title="Our Projects"
          subtitle="Showcasing Excellence in Every Build"
          backgroundImage="/placeholder.svg?height=400&width=1200"
        />

        {/* Project Categories */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    activeCategory === category.id
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{project.year}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.category === "commercial"
                            ? "bg-blue-100 text-blue-800"
                            : project.category === "multifamily"
                              ? "bg-green-100 text-green-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                      <button className="text-red-600 hover:text-red-700 font-medium">View Details →</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Highlights</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our portfolio represents millions of dollars in successful construction projects.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "$50M+", label: "Total Project Value" },
                { number: "25", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
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
                Let us help you bring your construction vision to life with the same quality and attention to detail.
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-semibold">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Projects
