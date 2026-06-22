import { MoveRight } from "lucide-react";

export default function ContactUs() {
  const formFields = [
    {
      id: 1,
      label: "Your Name",
      type: "text",
      name: "name",
      placeholder: "Your Name",
    },
    {
      id: 2,
      label: "Your Email",
      type: "email",
      name: "email",
      placeholder: "Your Email",
    },
    {
      id: 3,
      label: "Your Number",
      type: "number",
      name: "number",
      placeholder: "Your Number",
      customClass: "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    },
    {
      id: 4,
      label: "Your Address",
      type: "text",
      name: "address",
      placeholder: "Your Address",
    }
  ];

  return (
    <section className="px-5 lg:px-10 py-20">
      <div>
        <h1
          className="flex items-center justify-center text-[40px] md:text-[55px] mb-[30px] font-bold"
          data-aos="fade-up"
        >
          Your
          <span className="text-[#fac031] ml-[15px] font-['mv_boli'] relative after:content-[''] after:w-full after:h-[2px] after:bg-[#fac031] after:block after:absolute after:-bottom-1">
            Order
          </span>
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-between items-center gap-10 w-full">
        <div className="lg:w-[50%] w-full " data-aos="fade-right">
          <img src="order_image.png" alt="" />
        </div>
        <form
          className="lg:grid grid-cols-2 gap-4 lg:w-[50%] w-full space-y-5"
          data-aos="fade-left"
        >
          {formFields.map((field) => (
            <div key={field.id} className="flex flex-col">
              <h1 className="mb-1 font-semibold">{field.label}</h1>
              <input
                type={field.type}
                name={field.name}
                className={`outline-none border border-gray-300 p-2 rounded transition-colors duration-200 hover:border-yellow-500 ${field.customClass}`}
                placeholder={field.placeholder}
              />
            </div>
          ))}

          <div className="col-span-2 mt-4">
            <button className="relative bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-md text-black flex items-center gap-2 overflow-hidden group font-medium text-sm sm:text-base w-fit shadow-sm transition-colors duration-300">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
              Submit
              <MoveRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
