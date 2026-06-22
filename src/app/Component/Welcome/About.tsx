import React from "react";
import { FaLeaf } from "react-icons/fa";
import { FaAward, FaTruckFast } from "react-icons/fa6";
import { MoveRight } from "lucide-react";

export default function About() {
  const features = [
    {
      id: 1,
      icon: <FaLeaf className="text-red-500 text-xl" />,
      iconBg: "bg-red-50",
      title: "100% Fresh Ingredients",
      description: "We source locally and sustainably. Every ingredient is hand-picked daily for maximum freshness."
    },
    {
      id: 2,
      icon: <FaAward className="text-yellow-500 text-xl" />,
      iconBg: "bg-yellow-50",
      title: "Expertly Crafted Salmon:",
      description: "Our signature recipes have won national culinary awards 5 years in a row."
    },
    {
      id: 3,
      icon: <FaTruckFast className="text-green-600 text-xl" />,
      iconBg: "bg-green-50",
      title: "Lightning-Fast Delivery:",
      description: "Order online and get hot, fresh food at your door in under 25 minutes, guaranteed."
    }
  ];

  return (
    <section className=" px-5 lg:px-10 pt-20">
      <div className="pb-10">
        <h1
          className="flex items-center justify-center text-[40px] md:text-[55px] mb-[30px] font-bold"
          data-aos="fade-up"
        >
          About{" "}
          <span className="text-[#fac031] ml-[15px] font-['mv_boli'] relative after:content-[''] after:w-full after:h-[2px] after:bg-[#fac031] after:block after:absolute after:-bottom-1">
            {" "}
            Us{" "}
          </span>
        </h1>
      </div>

      <div className="flex items-center lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full lg:pb-0 pb-5">
          <img
            src="about1.jpg"
            alt=""
            className="lg:max-w-[90%] w-full rounded-4xl"
            data-aos="fade-right"
          />
        </div>

        <div className="lg:w-1/2 w-full">
          <h3 className="text-3xl font-semibold pb-5" data-aos="fade-up">
            We Invite You to Visit Our Food Restaurant
          </h3>
          <p className="text-[14px] pb-3" data-aos="fade-up">
            Founded in 2012, Sarab began as a small corner joint with a big dream
            - to serve food that brings people together. Today we are proud to
            serve thousands of happy customers every week with the same passion
            that started it all.
          </p>
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-4 p-2"
              data-aos="fade-right"
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${feature.iconBg} shrink-0`}>
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-900 text-[15px] leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-[13px] mt-0.5 leading-snug">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-5" data-aos="fade-up">
            <div className="pt-5 z-20">
              <button className="relative bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-md text-black flex items-center gap-2 overflow-hidden group font-medium text-sm sm:text-base w-fit shadow-sm transition-colors duration-300">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                View All Menu{" "}
                <MoveRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
