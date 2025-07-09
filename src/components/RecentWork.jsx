import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const recentWork = [
  {
    title: "New Home Construction",
    image: "https://images.unsplash.com/photo-1556156653-e5a7c69cc263",
  },
  {
    title: "Office Renovation",
    image: "https://images.unsplash.com/photo-1631193908297-ebadbad17167",
  },
  {
    title: "Roof Installation",
    image: "https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e",
  },
  {
    title: "Kitchen Remodeling",
    image: "https://images.unsplash.com/photo-1682888818620-94875adf5bb9",
  },
  // Add more as needed
];

const RecentWork = () => {
  return (
    <section className="py-20">
      <div className="md:w-[85%] w-full mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </section>
  );
};

export default RecentWork;
