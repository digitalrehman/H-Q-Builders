import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import { siteConfig } from "../assets/config";

const Services = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const serviceDetails = [
    {
      title: "Carpentry Services",
      description:
        "Custom carpentry solutions for residential and commercial projects.",
      image: siteConfig.images.carpentry,
      features: [
        "Custom cabinets and shelves",
        "Door and window framing",
        "Trim and molding installation",
        "Deck and porch construction",
        "Wood repairs and finishes",
      ],
    },
    {
      title: "Decks and Patios",
      description:
        "Beautifully designed and durable decks and patios for outdoor living.",
      image: siteConfig.images.decksandpatios,
      features: [
        "Wood and composite decking",
        "Patio pavers and stones",
        "Pergolas and gazebos",
        "Waterproofing and sealing",
        "Custom outdoor designs",
      ],
    },
    {
      title: "Fencing Solutions",
      description:
        "Secure and stylish fencing options for all types of properties.",
      image: siteConfig.images.fencing,
      features: [
        "Wood, vinyl, and chain-link fencing",
        "Fence installation and repair",
        "Privacy and security fencing",
        "Gate installation",
        "Decorative fencing styles",
      ],
    },
    {
      title: "Flooring Installation",
      description:
        "Professional flooring services to enhance the look and feel of any space.",
      image: siteConfig.images.flooring,
      features: [
        "Hardwood and laminate installation",
        "Tile and vinyl flooring",
        "Subfloor preparation",
        "Repairs and refinishing",
        "Commercial and residential solutions",
      ],
    },
    {
      title: "Junk Removal",
      description:
        "Fast and reliable junk removal for homes, offices, and construction sites.",
      image: siteConfig.images.junkremoval,
      features: [
        "Furniture and appliance removal",
        "Construction debris cleanup",
        "Yard waste hauling",
        "Garage and basement cleanouts",
        "Eco-friendly disposal",
      ],
    },
    {
      title: "Painting Services",
      description:
        "Interior and exterior painting services that bring your spaces to life.",
      image: siteConfig.images.painting,
      features: [
        "Interior wall and ceiling painting",
        "Exterior painting and prep",
        "Staining and sealing",
        "Drywall patching and repair",
        "Color consultation",
      ],
    },
    {
      title: "Landscaping & Maintenance",
      description:
        "Transform your outdoor space with professional landscaping solutions.",
      image: siteConfig.images.landscaping,
      features: [
        "Lawn mowing and edging",
        "Tree and shrub trimming",
        "Mulching and planting",
        "Irrigation system setup",
        "Seasonal yard cleanups",
      ],
    }, {
      title: "Roofing Services",
      description:
        "Reliable roofing solutions for both residential and commercial properties.",
      image: siteConfig.images.roofing,
      features: [
        "Shingle and metal roofing installation",
        "Roof inspections and leak detection",
        "Storm damage repairs",
        "Flat and sloped roofing systems",
        "Gutter and downspout services",
      ],
    },
    {
      title: "Bathroom Remodeling",
      description:
        "Transform your bathrooms with modern, functional, and stylish renovations.",
      image: siteConfig.images.bathroom,
      features: [
        "Shower and bathtub upgrades",
        "Vanity and sink installation",
        "Tiling and waterproofing",
        "Lighting and ventilation improvements",
        "Custom bathroom designs",
      ],
    },
  ];


  return (
    <>
      <Helmet>
        <title>Services - {siteConfig.meta.title}</title>
        <meta
          name="description"
          content="Explore  H&K Builders Construction's comprehensive services including excavation, roofing, electrical work, and general contracting."
        />
      </Helmet>

      <div className="pt-16 lg:pt-20">
        <Banner
          title="Built to Inspire. Designed to Last"
          subtitle="Reliable Remodeling Solutions — From Kitchens to Full Home Makeovers"
          backgroundImage={siteConfig.images.servicebanner}
        />

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="  px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At H&K Builders, we handle every aspect of your renovation with precision and care. Explore our wide range of remodeling services designed to enhance your home’s beauty, function, and value — all delivered with trusted local expertise.
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
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>

                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-700"
                        >
                          <svg
                            className="w-5 h-5 text-red-600 mr-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
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
          <div className="  px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven process to ensure every project is completed
                successfully.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description:
                    "We start by understanding your goals, needs, and vision for the project.",
                },
                {
                  step: "02",
                  title: "Design & Planning",
                  description:
                    "Our experts create a tailored design and develop a detailed plan.",
                },
                {
                  step: "03",
                  title: "Proposal & Contract",
                  description:
                    "We present a transparent proposal and finalize the agreement to begin.",
                },
                {
                  step: "04",
                  title: "Construction",
                  description:
                    "Our skilled team brings the plan to life with quality materials and workmanship.",
                },
                {
                  step: "05",
                  title: "Quality Assurance",
                  description:
                    "We inspect and ensure everything meets our high standards before delivery.",
                },
                {
                  step: "06",
                  title: "Project Completion",
                  description:
                    "We walk you through the final results and hand over a completed, beautiful project.",
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">{process.description}</p>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600">
          <div className="  px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and estimate. Let's
                bring your vision to life.
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
        {showQuoteForm && (
          <ContactForm isPopup={true} onClose={() => setShowQuoteForm(false)} />
        )}
      </div>
    </>
  );
};

export default Services;
