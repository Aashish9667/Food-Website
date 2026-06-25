"use client";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const chefData = [
  {
    img: "./Chef/chef1.webp",
    headingTwo: "Chef Elias Thorne",
    paragraph:
      "Culinary Director & Innovator. Specialist in modern fusion cuisine with over 20 years experience.",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  {
    img: "./Chef/chef2.webp",
    headingTwo: "Chef Elysa Thorne",
    paragraph:
      "Culinary Director & Innovator. Specialist in modern fusion cuisine with over 20 years experience.",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  {
    img: "./Chef/chef3.webp",
    headingTwo: "Chef Tom Thorne",
    paragraph:
      "Culinary Director & Innovator. Specialist in modern fusion cuisine with over 20 years experience.",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  {
    img: "./Chef/chef4.webp",
    headingTwo: "Chef Tiger Thorne",
    paragraph:
      "Culinary Director & Innovator. Specialist in modern fusion cuisine with over 20 years experience.",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
];

export default function ChefTeam() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="w-full h-auto bg-cover bg-center px-5 lg:px-10 py-10">
      <h1
        className="flex items-center justify-center text-[40px] md:text-[55px] mb-[30px] font-bold"
        data-aos="fade-up"
      >
        Our{" "}
        <span className="text-[#fac031] ml-[15px] font-['mv_boli'] relative after:content-[''] after:w-full after:h-[2px] after:bg-[#fac031] after:block after:absolute after:-bottom-1">
          Team
        </span>
      </h1>

      <div className="max-w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-24 justify-items-center pt-24 pb-16">
        {chefData.map((item, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={index}
              className="w-full flex justify-center items-center h-auto"
              data-aos="fade-up"
            >
              <div
                onClick={() => handleCardClick(index)}
                className={`group min-w-[280px] min-h-[280px] bg-white flex items-center justify-center relative shadow-[0_0_8px_rgba(0,0,0,0.5)] shrink-0 mx-auto transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[border-radius] cursor-pointer
                  ${isActive ? "rounded-[20px] " : "rounded-[140px] lg:hover:rounded-[20px]"}`}
              >
                <img
                  src={item.img}
                  alt={item.headingTwo}
                  className={`w-[210px] h-[210px] object-cover object-center rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)] z-10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${isActive ? "rounded-[20px] -mt-[230px]" : "lg:group-hover:rounded-[140px] lg:group-hover:-mt-[230px]"}`}
                />

                <div
                  className={`absolute text-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] px-4 w-full left-0
                    ${isActive ? "top-[55%]" : "top-[25%] lg:group-hover:top-[55%]"}`}
                >
                  <h2 className="text-[#fac031]  text-xl font-bold pb-0.5">
                    {item.headingTwo}
                  </h2>
                  <p className="w-[85%] text-center mx-auto text-sm text-gray-600 line-clamp-2 tracking-tight leading-4">
                    {item.paragraph}
                  </p>
                  <div className="flex justify-center gap-4 m-2">
                    <a
                      href={item.facebook}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block text-lg text-gray-800 transition-colors duration-300 hover:text-[#fac031]"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href={item.twitter}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block text-lg text-gray-800 transition-colors duration-300 hover:text-[#fac031]"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={item.instagram}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block text-lg text-gray-800 transition-colors duration-300 hover:text-[#fac031]"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
