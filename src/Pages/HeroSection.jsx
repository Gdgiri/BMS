import React from "react";
import bgImage from "../assets/hero.jpeg";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="bg-cover bg-center relative h-[90vh] flex items-center justify-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Skilled Professionals <br />
          <span className="text-yellow-400">at Your Doorstep</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          we connect you with trusted experts for every job.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href="#services">
            {" "}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition transform hover:scale-105 duration-300 ease-in-out">
              Explore Services
            </button>
          </a>
          <a href="#contact">
            <button className="bg-white text-blue-600 hover:bg-gray-200 px-5 py-2 rounded-md transition transform hover:scale-105 duration-300 ease-in-out">
              Book Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
