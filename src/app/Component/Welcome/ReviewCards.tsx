
export default function ReviewCards() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Food Blogger",
      image: "./Review/review1.webp",
      rating: 5,
      review: "The Truffle Mushroom Risotto was an absolute masterpiece! Rich, creamy, and bursting with authentic flavours. GourmetBite has officially become my weekly fine-dining spot."
    },
    {
      id: 2,
      name: "David Chen",
      role: "Local Guide",
      image: "./Review/review2.webp",
      rating: 5,
      review: "Exceptional service from the moment we walked in. The staff was incredibly attentive, and the farm-to-table freshness shines through in every single dish."
    },
    {
      id: 3,
      name: "Elena Rostova",
      role: "Regular Customer",
      image: "./Review/review3.webp",
      rating: 5,
      review: "Their Friday Happy Hours are the best in town! Amazing craft drinks paired with top-tier appetizers. The rustic yet modern atmosphere makes it perfect for winding down."
    },
    {
      id: 4,
      name: "Marcus Thompson",
      role: "Executive Chef",
      image: "./Review/review4.webp",
      rating: 5,
      review: "As a fellow chef, I highly respect their commitment to locally sourced ingredients. The culinary execution is flawless, and the presentation is clean and elegant."
    }
  ];

  return (
    <section className="py-20 px-5 lg:px-10">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-12">
           <h1
          className="flex items-center justify-center text-[40px] md:text-[55px] mb-[30px] font-bold"
          data-aos="fade-up"
        >
          Our
          <span className="text-[#fac031] ml-[15px] font-['mv_boli'] relative after:content-[''] after:w-full after:h-[2px] after:bg-[#fac031] after:block after:absolute after:-bottom-1">
            Review
          </span>
        </h1>
          <p data-aos="fade-up" className="text-gray-400 text-sm md:text-base max-w-md mx-auto">
            Dont just take our word for it. Here is what real food lovers have to say about their GourmetBite experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((item) => (
            <div 
              key={item.id} 
              className=" border border-zinc-700/50 rounded-2xl p-6 flex flex-col justify-between hover:border-[#fac031]/40 transition-all duration-300 group shadow-xl"
            >
              <div>
                <div className="flex gap-1 mb-4 text-[#fac031]">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className=" text-sm leading-relaxed italic mb-6" data-aos="fade-left">
                  {item.review}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-700/50">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-zinc-700 group-hover:ring-[#fac031] transition-all duration-300"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
