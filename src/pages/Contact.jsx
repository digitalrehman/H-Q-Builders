"use client"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import Banner from "../components/Banner"
import ContactForm from "../components/ContactForm"
import { siteConfig } from "../assets/config"

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - {siteConfig.meta.title}</title>
        <meta
          name="description"
          content="Get in touch with  H&K Builders Construction for your next project. Contact us for a free consultation and estimate."
        />
      </Helmet>

      <div className="pt-16 lg:pt-20">
        <Banner
          title="Contact Us"
          subtitle="Let's Discuss Your Next Project"
          backgroundImage="/placeholder.svg?height=400&width=1200"
        />

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="  px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Call Us",
                  icon: "📞",
                  content: siteConfig.contact.phone,
                  link: `tel:${siteConfig.contact.phone}`,
                },
                {
                  title: "Email Us",
                  icon: "✉️",
                  content: siteConfig.contact.email,
                  link: `mailto:${siteConfig.contact.email}`,
                },
                {
                  title: "Visit Us",
                  icon: "📍",
                  content: siteConfig.contact.address,
                  link: "#",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-gray-50 p-8 rounded-lg"
                >
                  <div className="text-4xl mb-4">{contact.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{contact.title}</h3>
                  <a href={contact.link} className="text-red-600 hover:text-red-700 transition-colors duration-200">
                    {contact.content}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* Business Hours */}
        <section className="py-16 bg-gray-50">
          <div className="  px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Hours</h2>
              <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">Emergency services available 24/7</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
