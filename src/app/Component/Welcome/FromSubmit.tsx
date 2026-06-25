"use client"
import { MoveRight } from "lucide-react";
import { useState } from 'react';

export default function FromSubmit() {
    const [result, setResult] = useState("");
  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formTarget = event.currentTarget; 
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "9d7b8fb3-f65c-424f-a10d-81977a31951e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
     formTarget.reset()
     setTimeout(() => {
          setResult("");
        }, 2000)
    } else {
      setResult("Error");
    }
  };
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
      label: "Your Order",
      type: "text",
      name: "order",
      placeholder: "Food Name",
    },
    {
      id: 4,
      label: "How Much",
      type: "text",
      name: "quntity",
      placeholder: "How Many Order",
    },
     {
      id: 5,
      label: "Your Number",
      type: "number",
      name: "number",
      placeholder: "Your Number",
      customClass: "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    },
     {
      id: 6,
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
          <img src="orderImage.webp" alt="" />
        </div>
        <form
        onSubmit={onSubmit}
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
                required
              />
            </div>
          ))}
          <div className="col-span-2 mt-4">
            <button type="submit" className="relative bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-md text-black flex items-center gap-2 overflow-hidden group font-medium text-sm sm:text-base w-fit shadow-sm transition-colors duration-300">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
              Submit
              <MoveRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            <span>{result}</span>
          </div>
          
        </form>
      </div>
    </section>
  );
}

