
"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";
import { MoveRight } from "lucide-react";
import { sliderData } from "./data/sliderData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSlider() {
  return (
    <div >
    <section className="max-w-7xl mx-auto w-full relative px-5 md:pt-40 pt-30 lg:px-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="hero-swiper-container"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col lg:flex-row lg:justify-between overflow-hidden">
              <div className="flex flex-col z-20 w-full">
              <div className="flex flex-col"data-aos="fade-right">
                <h1 className="lg:text-6xl text-4xl sm:text-5xl font-bold pb-5 leading-tight text-neutral-900">
                  {slide.titleBefore}{" "}
                  <strong className="text-yellow-400 font-bold">
                    {slide.highlightText}
                  </strong>
                  <br  className="lg:block hidden"/>
                  {slide.titleAfter}
                </h1>

                <p className="text-neutral-700 text-xs sm:text-base leading-relaxed pb-2">
                  {slide.description}
                </p>
               </div>
                <div className="w-full block lg:hidden" data-aos="fade-left">
                  <img
                    src={slide.imageSrc}
                    alt={slide.imageAlt || "Food Item Image"}
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />
                </div>
                <div className="pt-5 z-20" data-aos="fade-right">
                  <button className="relative bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-full text-black flex items-center gap-2 overflow-hidden group font-medium text-sm sm:text-base w-fit shadow-sm transition-colors duration-300">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                    {slide.buttonText || "Order Now"}
                    <MoveRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
              <div className="w-full max-w-[450px] hidden lg:block z-10" data-aos="fade-left">
                <img
                  src={slide.imageSrc}
                  alt={slide.imageAlt || "Food Item Image"}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </div>
  );
}
