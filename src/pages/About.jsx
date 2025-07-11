;
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import { siteConfig } from "../assets/config";
import { User } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - {siteConfig.meta.title}</title>
        <meta
          name="description"
          content="Learn about  H&K Builders Construction's history, values, and commitment to quality construction services."
        />
      </Helmet>

      <div className="pt-16 lg:pt-20">
        <Banner
          title="About Us"
          subtitle="Building Excellence Since 2015"
          backgroundImage={siteConfig.images.about}
        />

        {/* Company Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Main Heading */}
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
                Our Story
              </h2>

              {/* Subsection 1 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-red-600 mb-4">
                  Where It All Began – Pennsylvania
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our story started over 7 years ago in Pennsylvania, where
                  construction was more than a job — it was part of our family’s
                  everyday life. What began as a small, family-run operation
                  quickly grew into a trusted name in local remodeling. We
                  earned our reputation by staying true to our values: honest
                  work, skilled craftsmanship, and treating every home like it
                  was our own. Those early years laid the foundation for
                  everything H&K Builders stands for today.
                </p>
              </div>

              {/* Subsection 2 */}
              <div>
                <h3 className="text-2xl font-semibold text-red-600 mb-4">
                  A New Chapter – Texas
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Three years ago, we brought our experience and dedication to
                  Texas, planting new roots in Dallas, Frisco, and surrounding
                  areas. Since then, H&K Builders has proudly continued the
                  family legacy — now with a broader reach and even stronger
                  commitment to quality. In every project, big or small, we
                  bring the same passion that started it all back in
                  Pennsylvania. Today, we’re not just building homes — we’re
                  building trust, one remodel at a time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we serve
                our clients.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals who lead H&K Builders
                Construction.
              </p>
            </motion.div>

            <div className="flex items-center justify-center">
              {[
                {
                  name: "Syed Hassan",
                  position: "Co-founder",
                  image: siteConfig.images.profile,
                  bio: "I ensure personally every project runs smoothly from start to finish, coordinating teams and managing timelines.",
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="md:w-96 w-80 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                >
                  <div className="p-6">
                    <img src={member.image} className="md:w-auto w-3/4 mx-auto" alt="" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-red-600 font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
