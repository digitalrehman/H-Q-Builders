import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { siteConfig } from "../assets/config";
import { Link } from "react-router-dom";

const recentWork = [
  {
    title: "Bathroom Remodeling",
    image: siteConfig.images.bath1,
  },
  {
    title: "Fence Installation",
    image: siteConfig.images.fencing1,
  },
  {
    title: "Fence Installation",
    image: siteConfig.images.fencing3,
  },
  {
    title: "Fence Installation",
    image: siteConfig.images.fencing5,
  },
  {
    title: "Flooring Installation",
    image: siteConfig.images.flooring1,
  },
  {
    title: "Flooring Installation",
    image: siteConfig.images.flooring3,
  },
  {
    title: "Kitchen Remodeling",
    image: siteConfig.images.kitchen1,
  },
  {
    title: "Kitchen Remodeling",
    image: siteConfig.images.kitchen2,
  },
  {
    title: "Roof Installation",
    image: siteConfig.images.roofing1,
  },
];


const RecentWork = () => {
  return (
    <section className="py-20 mb-10">
      <div className="md:w-[85%] relative w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Recent Work
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {recentWork.map((work, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-lg group transition-all duration-300">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64  group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 ">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {work.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to="/projects" className="absolute underline hover:text-red-600 right-10">More</Link>
      </div>
    </section>
  );
};

export default RecentWork;
