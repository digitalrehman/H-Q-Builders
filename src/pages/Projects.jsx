import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import { siteConfig } from "../assets/config";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  let navigate = useNavigate();
  const projects = [
    {
      title: "Kitchen Remodeling",
      category: "residential",
      image: siteConfig.images.kitchen3,
      year: "2025",
    },
    {
      title: "Paint & Finishing",
      category: "commercial",
      image: siteConfig.images.paint2,
      year: "2024",
    },
    {
      title: "Fence Installation",
      category: "multifamily",
      image: siteConfig.images.fencing3,
      year: "2023",
    },
    {
      title: "Flooring Installation",
      category: "residential",
      image: siteConfig.images.flooring2,
      year: "2022",
    },
    {
      title: "Roof Installation",
      category: "commercial",
      image: siteConfig.images.roofing1,
      year: "2021",
    },
    {
      title: "Paint & Finishing",
      category: "multifamily",
      image: siteConfig.images.paint4,
      year: "2020",
    },
    {
      title: "Bathroom Remodeling",
      category: "residential",
      image: siteConfig.images.bath2,
      year: "2019",
    },
    {
      title: "Fence Installation",
      category: "commercial",
      image: siteConfig.images.fencing5,
      year: "2018",
    },
    {
      title: "Paint & Finishing",
      category: "residential",
      image: siteConfig.images.paint5,
      year: "2017",
    },
    {
      title: "Bathroom Remodeling",
      category: "multifamily",
      image: siteConfig.images.bath1,
      year: "2016",
    },
    {
      title: "Kitchen Remodeling",
      category: "commercial",
      image: siteConfig.images.kitchen2,
      year: "2015",
    },
    {
      title: "Flooring Installation",
      category: "multifamily",
      image: siteConfig.images.flooring1,
      year: "2025",
    },
    {
      title: "Paint & Finishing",
      category: "residential",
      image: siteConfig.images.paint6,
      year: "2024",
    },
    {
      title: "Kitchen Remodeling",
      category: "multifamily",
      image: siteConfig.images.kitchen1,
      year: "2023",
    },
    {
      title: "Fence Installation",
      category: "residential",
      image: siteConfig.images.fencing1,
      year: "2022",
    },
    {
      title: "Fence Installation",
      category: "commercial",
      image: siteConfig.images.fencing2,
      year: "2021",
    },
    {
      title: "Paint & Finishing",
      category: "multifamily",
      image: siteConfig.images.paint1,
      year: "2020",
    },
    {
      title: "Fence Installation",
      category: "residential",
      image: siteConfig.images.fencing4,
      year: "2019",
    },
    {
      title: "Flooring Installation",
      category: "commercial",
      image: siteConfig.images.flooring3,
      year: "2018",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Projects - {siteConfig.meta.title}</title>
        <meta
          name="description"
          content="Explore  HK Builders portfolio of completed projects including commercial, multifamily, and residential construction."
        />
      </Helmet>

      <div className="pt-16 lg:pt-20">
        <Banner
          title="Our Projects"
          subtitle="Showcasing Excellence in Every Build"
          backgroundImage={siteConfig.images.project}
        />

        {/* Projects Grid */}
        <section className="py-16 bg-gray-50">
          <div className="  px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Project Stats */}
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
                Project Highlights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our portfolio represents millions of dollars in successful
                construction projects.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "200+", label: "Projects Completed" },
                { number: "$10M+", label: "Total Project Value" },
                { number: "10", label: "Years Experience" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
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
                Let us help you bring your construction vision to life with the
                same quality and attention to detail.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-red-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                Get Started Today
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
