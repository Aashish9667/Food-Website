import { MoveRight } from "lucide-react";
const gallaryData = [
  {
    img: "./Gallary/gallary_1.jpg",
    heading: "Food",
    paragraph: "Lorem hello im dilisuse food also testy amazing",
    button: "Order Now",
  },
  {
    img: "./Gallary/gallary_2.jpg",
    heading: "Food",
    paragraph: "Lorem hello im dilisuse food also testy amazing",
    button: "Order Now",
  },
  {
    img: "./Gallary/gallary_3.jpg",
    heading: "Food",
    paragraph: "Lorem hello im dilisuse food also testy amazing",
    button: "Order Now",
  },
  {
    img: "./Gallary/gallary_4.jpg",
    heading: "Food",
    paragraph: "Lorem hello im dilisuse food also testy amazing",
    button: "Order Now",
  },
  {
    img: "./Gallary/gallary_5.jpg",
    heading: "Food",
    paragraph: "Lorem hello im dilisuse food also testy amazing",
    button: "Order Now",
  },
  {
    img: "./Gallary/gallary_6.jpg",
    heading: "Food",
    paragraph: "Lorem hello im dilisuse food also testy amazing",
    button: "Order Now",
  },
];

export default function Gallary() {
  return (
    <section className="px-5 lg:px-10 py-20">
      <div>
         <h1 className="pb-10 flex items-center justify-center text-[40px] md:text-[55px] mb-[30px] font-bold"  data-aos="fade-up">
        Our 
        <span className="text-[#fac031] ml-[15px] font-['mv_boli'] relative after:content-[''] after:w-full after:h-[2px] after:bg-[#fac031] after:block after:absolute after:-bottom-1">
          Gallary
        </span>
      </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"  >
          {gallaryData.map((item, index) => (
            <div
            data-aos="fade-up"  
              key={index}
              className="group relative w-full h-[250px] md:h-[300px] overflow-hidden rounded-xl shadow-md cursor-pointer">
              <img
                src={item.img}
                alt={item.heading}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-4">
                <h2 className="text-3xl font-bold text-amber-400 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400 pb-2">
                  {item.heading}
                </h2>
                <p className="text-white text-sm px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400 delay-75 pb-5">
                  {item.paragraph}
                </p>
                <a
                  href="#work"
                  className="relative py-2.5 px-6 bg-black !text-white !text-[15px] !rounded-4xl flex gap-1.5 items-center overflow-hidden group transition-all duration-300 hover:bg-zinc-900 !no-underline w-fit"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"/>
                  <span className="relative z-10 flex items-center gap-1.5">
                    Order Now
                    <MoveRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
