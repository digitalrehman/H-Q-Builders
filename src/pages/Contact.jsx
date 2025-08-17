import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import { siteConfig } from "../assets/config";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // Initialize with your real public key
  emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email format";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setSuccess("");
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_KEY,
        import.meta.env.VITE_TEMPLATE_ID, // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (err) => {
          console.error(err);
          setError("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - {siteConfig.meta.title}</title>
        <meta
          name="description"
          content="Get in touch with HK Builders for your next project. Contact us for a free consultation and estimate."
        />
      </Helmet>

      <div className="pt-16 lg:pt-20">
        <Banner
          title="Contact Us"
          subtitle="Let's Discuss Your Next Project"
          backgroundImage="https://images.unsplash.com/photo-1659353588059-aa687e2332e6"
        />

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Call Us",
                  icon: Phone,
                  content: siteConfig.contact.phone,
                  link: `tel:${siteConfig.contact.phone}`,
                },
                {
                  title: "Email Us",
                  icon: Mail,
                  content: siteConfig.contact.email,
                  link: `mailto:${siteConfig.contact.email}`,
                },
                {
                  title: "Visit Us",
                  icon: MapPin,
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
                  className="flex items-center justify-center flex-col bg-gray-50 p-8 rounded-lg"
                >
                  <div className="text-4xl mb-4">
                    {<contact.icon size={40} />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {contact.title}
                  </h3>
                  <a
                    href={contact.link}
                    className="text-red-600 hover:text-red-700 transition-colors duration-200"
                  >
                    {contact.content}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form (same design as ContactForm) */}
        <section className="py-16 bg-gray-50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Send Us a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-lg space-y-6"
            >
              {error && (
                <p className="text-red-600 text-center font-medium">{error}</p>
              )}
              {success && (
                <p className="text-green-600 text-center font-medium">
                  {success}
                </p>
              )}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>

        {/* Google Map */}
        <section className="py-16 bg-gray-100">
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Location
            </h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.414519361632!2d-96.78940359999999!3d33.1225432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3daba4c9d2af%3A0xb7024aea22eb481f!2s13071%20Darkwood%20Dr%2C%20Frisco%2C%20TX%2075035%2C%20USA!5e0!3m2!1sen!2s!4v1720678804371!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
