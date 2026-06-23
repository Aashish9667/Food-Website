"use client";
import { useState } from "react";
import { Menu, X, MoveRight } from "lucide-react";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "#home" },
    { name: "About", id: "#about" },
    { name: "Menu", id: "#menu" },
    { name: "Gallary", id: "#gallary" },
    { name: "Review", id: "#review" },
    { name: "Chef", id: "#chef" },
    { name: "Order", id: "#order" },
    { name: "Contact", id: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md lg:px-10 py-3.5 px-5 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto relative">
        <a
          href="#home"
          className="no-underline text-yellow-400 font-bold text-xl"
        >
        <img src="./foodlogo.jpg" alt="" className="w-20"/>
        </a>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="group flex flex-col cursor-pointer w-max"
              >
                <a
                  href={link.id}
                  className="font-medium text-gray-600 no-underline leading-none pb-1 group-hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </a>
                <div className="border-t-2 border-yellow-500 rounded-xl transition-all duration-300 ease-in-out w-0 group-hover:w-full"></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="#menu"
            className="relative bg-yellow-400 font-medium px-4 py-1.5 rounded-2xl no-underline overflow-hidden group hidden md:flex items-center gap-1.5 transition-all duration-300 hover:bg-yellow-500"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
            <span className="relative z-10 text-[14px] flex items-center gap-1.5 whitespace-nowrap text-black">
              Order Now
              <MoveRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg md:hidden transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg border-t transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isOpen
            ? "max-h-[600px] opacity-100 py-4"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 list-none m-0 mb-4">
          {navLinks.map((link) => (
            <li key={link.id} className="w-full">
              <a
                href={link.id}
                onClick={() => setIsOpen(false)}
                className="block text-gray-600 font-medium py-2 no-underline hover:text-yellow-400  transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <hr className="border-gray-200 my-2" />
        <div className="px-6 pt-2">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="relative bg-yellow-400
             font-medium px-4 py-1.5 rounded-2xl no-underline overflow-hidden group flex items-center gap-1.5 transition-all duration-300 hover:bg-yellow-500 w-fit"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
            <span className="relative z-10 text-[14px] flex items-center gap-1.5 whitespace-nowrap">
              Order Now
              <MoveRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
