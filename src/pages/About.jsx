"use client"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import Banner from "../components/Banner"
import { siteConfig } from "../assets/config"

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - {siteConfig.meta.title}</title>
        <meta
          name="description"
          content="Learn about KYCO Construction's history, values, and commitment to quality construction services."
        />
      </Helmet>

      <div className="pt-16 lg:pt-20">
        <Banner
          title="About Us"
          subtitle="Building Excellence Since 1998"
          backgroundImage="/placeholder.svg?height=400&width=1200"
        />

        {/* Company Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Founded in 1998, KYCO Construction began as a small drywall installation company with a simple
                  mission: deliver quality work with integrity and professionalism. Over the past 25 years, we've grown
                  into a full-service construction company while maintaining our core values.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Today, we specialize in excavation, roofing, electrical work, and general contracting for commercial,
                  multifamily, and residential projects. Our team of 50+ skilled professionals brings decades of
                  combined experience to every project we undertake.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="KYCO Construction team"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we serve our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality First",
                  description:
                    "We never compromise on quality. Every project receives our full attention to detail and commitment to excellence.",
                  icon: "⭐",
                },
                {
                  title: "Integrity",
                  description:
                    "Honest communication, fair pricing, and transparent processes are the foundation of our business relationships.",
                  icon: "🤝",
                },
                {
                  title: "Reliability",
                  description:
                    "When we make a commitment, we keep it. Our clients can count on us to deliver on time and within budget.",
                  icon: "🎯",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals who lead KYCO Construction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Smith",
                  position: "Founder & CEO",
                  image: "/placeholder.svg?height=300&width=300",
                  bio: "With over 30 years in construction, John founded KYCO with a vision of delivering exceptional quality and service.",
                },
                {
                  name: "Sarah Johnson",
                  position: "Operations Manager",
                  image: "/placeholder.svg?height=300&width=300",
                  bio: "Sarah ensures every project runs smoothly from start to finish, coordinating teams and managing timelines.",
                },
                {
                  name: "Mike Davis",
                  position: "Project Manager",
                  image: "/placeholder.svg?height=300&width=300",
                  bio: "Mike brings 20 years of project management experience, specializing in commercial and multifamily projects.",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-red-600 font-semibold mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-red-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {siteConfig.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-white"
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
