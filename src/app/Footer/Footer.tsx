import React from "react";
export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-12 pb-6 w-full">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-white" data-aos="fade-up">
           VeerJi<span className="text-[#fac031]">Resturent</span>
          </h2>
          <p className="text-sm text-gray-400" data-aos="fade-up">
            Serving fresh, delicious meals made from locally sourced ingredients
            since 2010.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3
            className="text-lg font-semibold text-white mb-1"
            data-aos="fade-up"
          >
            Quick Links
          </h3>
          <a
            href="#menu"
            className="hover:text-[#fac031] transition-colors text-sm"
            data-aos="fade-up"
          >
            Our Menu
          </a>
          <a
            href="#about"
            className="hover:text-[#fac031] transition-colors text-sm"
            data-aos="fade-up"
          >
            About Us
          </a>
          <a
            href="#order"
            className="hover:text-[#fac031] transition-colors text-sm"
            data-aos="fade-up"
          >
            Book A Table
          </a>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <h3
            className="text-lg font-semibold text-white mb-2"
            data-aos="fade-up"
          >
            Opening Hours
          </h3>
          <p data-aos="fade-up">
            <span className="font-medium text-gray-400">Mon - Fri:</span> 11:00
            AM - 10:00 PM
          </p>
          <p data-aos="fade-up">
            <span className="font-medium text-gray-400">Sat - Sun:</span> 10:00
            AM - 11:00 PM
          </p>
          <p className="text-[#fac031] font-semibold mt-1" data-aos="fade-up">
            Happy Hours: Every Friday 4PM - 6PM
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h3
            className="text-lg font-semibold text-white mb-1"
            data-aos="fade-up"
          >
            Contact Us
          </h3>
          <p data-aos="fade-up">📍 123 Foodie Street, Culinary City</p>
          <p data-aos="fade-up">📞 +1 (555) 019-2834</p>
          <p data-aos="fade-up">✉️ info@gourmetbite.com</p>
        </div>
      </div>
      <div className="border-t mt-12 pt-6 text-center text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Veer Ji Restaurant. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
