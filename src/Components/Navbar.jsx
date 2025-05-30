import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "AboutUs", "Services", "Contact"];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 rounded-full w-24">
          <a href="#">
            {" "}
            <img src={logo} alt="BookMyService" className="w-20 h-20 " />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 ms-auto relative right-32">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-blue-500 font-medium hover:text-blue-700 text-lg transition duration-300 group"
            >
              {link}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact">
            <button className="bg-blue-500 text-white px-6 py-2 text-lg rounded-2xl hover:scale-110 transform transition duration-300 ease-in-out">
              Book a Service
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-blue-500">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 ">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 relative text-blue-500 font-medium text-center text-lg hover:text-blue-700 transition duration-300 group"
            >
              {link}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-24"></span>
            </a>
          ))}
          <a href="#contact">
            {" "}
            <button className="mt-3 w-full bg-blue-500 text-white px-4 py-2 rounded-2xl text-lg hover:bg-blue-700 hover:scale-110 transform transition duration-300 ease-in-out">
              Book a Service
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
