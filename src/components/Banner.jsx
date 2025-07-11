
import { motion } from "framer-motion"

const Banner = ({ title, subtitle, backgroundImage, isHome = false }) => {
  return (
    <div className={`relative ${isHome ? "h-screen" : "h-96"} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.7)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className={`relative z-10 text-center text-white px-4 ${isHome ? "max-w-4xl" : "max-w-4xl mx-8"}`}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`font-bold mb-4 ${isHome ? "text-4xl md:text-6xl lg:text-7xl" : "text-3xl md:text-4xl lg:text-5xl"}`}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${isHome ? "text-lg md:text-xl lg:text-2xl" : "text-base md:text-lg"} leading-relaxed`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  )
}

export default Banner
