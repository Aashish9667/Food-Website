import React from "react";

export default function MenuOrder() {
  const menuItems = [
    {
      id: 1,
      title: "Chocolate dipping Churros",
      rating: "4.8",
      price: "$9.99",
      bgClass: "bg-[#B56515]",
      imgSrc: "./MenuImage/buger.jpg",
    },
    {
      id: 2,
      title: "Chocolate dipping Churros",
      rating: "4.7",
      price: "$13.99",
      bgClass: "bg-orange-500",
      imgSrc: "./MenuImage/pasta.jpg",
    },
    {
      id: 3,
      title: "Chocolate dipping Churros",
      rating: "4.7",
      price: "$13.99",
      bgClass: "bg-[#2BB673]",
      imgSrc: "./MenuImage/sandwich.jpg",
    },
    {
      id: 4,
      title: "Chocolate dipping Churros",
      rating: "4.7",
      price: "$13.99",
      bgClass: "bg-[#5C3A21]",
      imgSrc: "./MenuImage/chocolate_Drink.jpg",
    },
    {
      id: 5,
      title: "Chocolate dipping Churros",
      rating: "4.7",
      price: "$13.99",
      bgClass: "bg-[#FF6584]",
      imgSrc: "./MenuImage/ice_cream.jpg",
    },
    {
      id: 6,
      title: "Chocolate dipping Churros",
      rating: "4.7",
      price: "$13.99",
      bgClass: "bg-[#000080]",
      imgSrc: "./MenuImage/juse.jpg",
    },
    {
      id: 7,
      title: "Chocolate dipping Churros",
      rating: "4.7",
      price: "$13.99",
      bgClass: "bg-yellow-400",
      imgSrc: "./MenuImage/Hot_dog.jpg",
    },
    {
      id: 8,
      title: "Chocolate dipping Churros",
      rating: "4.7",
      price: "$13.99",
      bgClass: "bg-orange-700",
      imgSrc: "./MenuImage/biryani.jpg",
    },

    {
      id: 9,
      title: "Chocolate dipping Churros",
      rating: "4.7",
      price: "$13.99",
      bgClass: "bg-[#D98324]",
      imgSrc: "./MenuImage/pizza.jpg",
    },
  ];
  return (
    <section className="px-5 lg:px-10 pt-35 pb-20">
      <div className="text-center pb-10">
         <h1 className="flex items-center justify-center text-[40px] md:text-[55px] mb-[30px] font-bold" data-aos="fade-up">
        Our 
        <span className="text-[#fac031] ml-[15px] font-['mv_boli'] relative after:content-[''] after:w-full after:h-[2px] after:bg-[#fac031] after:block after:absolute after:-bottom-1">
          Menu
        </span>
      </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`${item.bgClass} text-white rounded-[24px]  flex items-center justify-between gap-4 shadow-lg h-[200px] w-full`}
          >
            <div className="flex flex-col justify-between h-full flex-1 p-5"  data-aos="fade-left">
              <div>
                <div className="flex items-center gap-1 text-[13px] opacity-90 font-medium mb-1">
                  <span>★</span> {item.rating}
                </div>
                <h1 className="text-xl font-bold leading-tight line-clamp-3">
                  {item.title}
                </h1>
              </div>
              <button className="relative overflow-hidden bg-white text-black font-semibold text-sm py-2 px-5 rounded-full w-fit shadow-md transition-all duration-300 hover:scale-105 active:scale-95 group">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">{item.price}</span>
              </button>
            </div>
            <div className="w-[170px] h-[200px] flex-shrink-0 relative overflow-hidden group">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover rounded-l-full rounded-r-[24px] shadow-md transition-transform duration-300 "
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent  group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none rounded-l-full rounded-r-[24px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

