import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { siteConfig } from "../assets/config";
import { Link } from "react-router-dom";
import RecentWork from "../components/RecentWork";
const Home = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === siteConfig.testimonials.length - 3 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === siteConfig.testimonials.length - 3 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? siteConfig.testimonials.length - 3 : prev - 1
    );
  };

  return (
    <>
      <Helmet>
        <title>{siteConfig.meta.title}</title>
        <meta name="description" content={siteConfig.meta.description} />
      </Helmet>

      {/* hero section  */}
      <section className="md:w-[85%] justify-between w-full min-h-screen background flex mx-auto flex-col lg:flex-row items-center overflow-hidden">
        <div className="h-[50vh] bg-red-600 md:block hidden absolute -z-10 w-full bottom-0 left-0" />
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white lg:w-1/2 w-full md:h-full flex flex-col justify-center pt-32 lg:pt-24 items-start px-6 lg:pl-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wider">
            {siteConfig.hero.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-200">
            {siteConfig.hero.subtitle}
          </p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onClick={() => setShowQuoteForm(true)}
            className="bg-red-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {siteConfig.hero.buttonText}
          </motion.button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 md:w-2/3 w-full h-[400px] sm:h-[500px] lg:h-screen flex items-end"
        >
          <img
            src={siteConfig.images.heroImage}
            alt="Professional construction worker"
            className="w-full lg:h-[500px] h-full object-cover"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-red-600 ">
        <div className="md:w-[85%] w-full bg-[#FDF0D5] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-950 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-red-600">
        <div className="px-4 sm:px-6 md:w-[85%] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  {/* Image with zoom effect */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient Overlay at bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/100 to-transparent z-10" />

                  {/* Title on top of gradient (no bg color) */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
                    <h3 className="text-white text-lg font-semibold">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* MORE Button at Section End */}
            <div className="mt-8 flex justify-end">
              <Link to="/services">
                <button className="text-white  hover:scale-110 underline transition duration-300">
                  More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RecentWork />

      {/* Partnership Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${siteConfig.images.partnershipBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative z-10   px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {siteConfig.partnership.title}
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.partnership.content}
            </p>
            <Link to="/projects" onClick={()=>scrollTo(0,0)} className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors duration-200 font-semibold">
              {siteConfig.partnership.buttonText}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 ">
        <div className="  px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-red-600 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What People Are Saying About Us
            </h2>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteConfig.testimonials
                .slice(currentTestimonial, currentTestimonial + 3)
                .map((testimonial, index) => (
                  <motion.div
                    key={currentTestimonial + index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg shadow-md"
                  >
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Quote Form Popup */}
      {showQuoteForm && (
        <ContactForm isPopup={true} onClose={() => setShowQuoteForm(false)} />
      )}
    </>
  );
};

export default Home;
