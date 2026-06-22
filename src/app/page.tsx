import React from "react";
import HeroSlider from "./Component/Welcome/HeroSection/HeroSection";
import ChefTeam from "./Component/Welcome/ChefTeam";
import Gallary from "./Component/Welcome/Gallary";
import MenuOrder from "./Component/Welcome/MenuOreder";
import NavbarMobile from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ContactUs from "./Component/Welcome/ContactUs";
import ReviewCards from "./Component/Welcome/ReviewCards";
import About from "./Component/Welcome/About";
import FromSubmit from "./Component/Welcome/FromSubmit";
export default function App() {
  return (
    <main className="w-full">
      <NavbarMobile />
      <section className="w-full bg-cover bg-center bg-no-repeat" id="home" style={{ backgroundImage: "url('./bg1.jpg')" }}>
        <div className="max-w-7xl mx-auto">
          <HeroSlider />
        </div>
      </section>
      <section className="w-full bg-cover bg-center bg-no-repeat scale-x-[-1]" id="about" style={{ backgroundImage: "url('./bg1.jpg')" }}>
        <div className="max-w-7xl mx-auto scale-x-[-1]">
          <About />
        </div>
      </section>
      <section className="w-full bg-cover bg-center bg-no-repeat" id="menu" style={{ backgroundImage: "url('./bg1.jpg')" }}>
        <div className="max-w-7xl mx-auto ">
          <MenuOrder />
        </div>
      </section>
      <section className="w-full bg-cover bg-center bg-no-repeat scale-x-[-1]" id="gallary" style={{ backgroundImage: "url('./bg1.jpg')" }}>
        <div className="max-w-7xl mx-auto  scale-x-[-1]">
          <Gallary />
        </div>
      </section>
      <section className="w-full bg-cover bg-center bg-no-repeat" id="review" style={{ backgroundImage: "url('./bg1.jpg')" }}>
        <div className="max-w-7xl mx-auto">
          <ReviewCards />
        </div>
      </section>
      <section className="w-full bg-cover bg-center bg-no-repeat scale-x-[-1]" id="chef" style={{ backgroundImage: "url('./bg1.jpg')" }}>
        <div className="max-w-7xl mx-auto scale-x-[-1]">
          <ChefTeam />
        </div>
      </section>
      <section className="w-full bg-cover bg-center bg-no-repeat" id="order" style={{ backgroundImage: "url('./bg1.jpg')" }}>
        <div className="max-w-7xl mx-auto">
          < FromSubmit/>
        </div>
      </section>
      <section id="contact">
      <Footer />
      </section>
    </main>
  );
}

