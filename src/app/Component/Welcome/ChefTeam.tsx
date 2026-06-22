"use client";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const chefData = [
  {
    img: "./Chef/chef1.png",
    headingTwo: "Chef1",
    paragraph: "Lorem ipsum dolor sit amet.",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  {
    img: "./Chef/chef2.png",
    headingTwo: "Chef2",
    paragraph: "Lorem ipsum dolor sit amet.",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  {
    img: "./Chef/chef3.jpg",
    headingTwo: "Chef3",
    paragraph: "Lorem ipsum dolor sit amet.",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  {
    img: "./Chef/chef4.jpg",
    headingTwo: "Chef4",
    paragraph: "Lorem ipsum dolor sit amet.",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
];

export default function ChefTeam() {
  return (
    <div className="w-full h-auto bg-cover bg-center px-5 lg:px-10 py-10">
      <h1
        className="flex items-center justify-center text-[40px] md:text-[55px] mb-[30px] font-bold"
        data-aos="fade-up"
      >
        Our
        <span className="text-[#fac031] ml-[15px] font-['mv_boli'] relative after:content-[''] after:w-full after:h-[2px] after:bg-[#fac031] after:block after:absolute after:-bottom-1">
          Team
        </span>
      </h1>
      <div className="max-w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-24 justify-items-center pt-24 pb-16">
        {chefData.map((item, index) => (
          <div
            key={index}
            className="w-full flex justify-center items-center h-auto"
            data-aos="fade-up"
          >
            <div className="group min-w-[280px] min-h-[280px] rounded-full bg-white flex items-center justify-center relative shadow-[0_0_8px_rgba(0,0,0,0.5)] shrink-0 hover:rounded-[20px] mx-auto">
              <img
                src={item.img}
                alt={item.headingTwo}
                className="w-[210px] h-[210px] object-cover object-center rounded-full cursor-pointer shadow-[0_0_8px_rgba(0,0,0,0.5)] z-10 transition-[margin] duration-800 ease-in-out group-hover:rounded-[20px] group-hover:-mt-[230px]"
              />
              <div className="absolute text-center top-[25%] transition-[top] duration-800 ease-in-out group-hover:top-[60%] px-4 w-full left-0">
                <h2 className="text-[#fac031] mb-[10px] text-xl font-bold">
                  {item.headingTwo}
                </h2>
                <p className="w-[85%] text-center mx-auto mb-[10px] text-sm text-gray-600 line-clamp-2">
                  {item.paragraph}
                </p>
                <div className="flex justify-center gap-4 mt-2">
                  <a
                    href={item.facebook}
                    className="inline-block text-lg text-gray-800 transition-colors duration-300 hover:text-[#fac031]"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={item.twitter}
                    className="inline-block text-lg text-gray-800 transition-colors duration-300 hover:text-[#fac031]"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={item.instagram}
                    className="inline-block text-lg text-gray-800 transition-colors duration-300 hover:text-[#fac031]"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
