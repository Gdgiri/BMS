import React, { useState } from "react";
import {
  FaBolt,
  FaCar,
  FaPaintRoller,
  FaBroom,
  FaHammer,
  FaGift,
} from "react-icons/fa";
import { MdPlumbing } from "react-icons/md";

const services = [
  { name: "Carpenter", icon: <FaHammer size={30} />, status: "Available" },
  { name: "Electrician", icon: <FaBolt size={30} />, status: "Available" },
  { name: "Mechanic", icon: <FaCar size={30} />, status: "Available" },
  { name: "Painter", icon: <FaPaintRoller size={30} />, status: "Available" },
  { name: "Plumber", icon: <MdPlumbing size={30} />, status: "Available" },
  { name: "House Cleaning", icon: <FaBroom size={30} />, status: "Available" },
];

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <div id="services" className="bg-[#fff7ed] py-24 px-4 scroll-mt-24">
      <div id="services" className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-2">
          Professional services for all your home and office needs
        </p>
      </div>

      {/* <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {displayedServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
          >
            <div className="bg-yellow-100 p-4 rounded-full mb-4 text-yellow-500">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold mb-1">{service.name}</h3>
            <span className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full mb-4">
              {service.status}
            </span>
            <button className="text-white bg-teal-600 flex items-center gap-2 px-4 py-2 rounded-xl font-medium shadow-md hover:bg-teal-700 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
              <FaGift className="text-xl" />
              Book
            </button>
          </div>
        ))}
      </div> */}

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto px-4 py-8">
        {displayedServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
          >
            <div className="bg-yellow-100 p-4 rounded-full mb-4 text-yellow-500 text-3xl">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.name}
            </h3>

            <span className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full mb-4">
              {service.status}
            </span>

            <button className="mt-auto text-white bg-teal-600 flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium shadow-md hover:bg-teal-700  hover:shadow-lg transition duration-300 hover:scale-105 ease-in-out will-change-transform">
              <FaGift className="text-xl" />
              <span className="block transform scale-100">Book</span>
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 font-semibold  inline-flex items-center gap-2"
        >
          {showAll ? "Show Less" : "View All Services"}{" "}
          <span className="text-xl">{showAll ? "↑" : "→"}</span>
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
