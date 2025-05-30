import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import footerlogo from "../assets/footerlogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a2f5d] text-white px-6 py-5 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm border-b border-gray-700 pb-1">
        {/* Logo Section */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <img src={footerlogo} alt="logo" className="w-32 mb-6 md:w-44" />
        </div>

        {/* About Us */}
        <div className="text-center md:text-left mr-2 md:mr-24">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">
            About Us
          </h3>
          <p className="text-white leading-relaxed">
            Book my service connects you with skilled professionals for all your
            home and office needs. We ensure quality service and customer
            satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="">
              <a
                href="#home"
                className="text-white hover:underline transition duration-200"
              >
                Home
              </a>
            </li>
            <li className="">
              <a
                href="#services"
                className="text-white hover:underline transition duration-200"
              >
                Services
              </a>
            </li>
            <li className="">
              <a
                href="#contact"
                className="text-white hover:underline transition duration-200"
              >
                Contact
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="text-white hover:underline transition duration-200"
              >
                Terms & conditions
              </a>
            </li>
            <li className="">
              <Link
                to="/admin"
                className="text-white hover:underline transition duration-200"
              >
                admin
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">
            Contact Info
          </h3>
          <ul className="space-y-3 text-white text-sm">
            <li className="flex items-start justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-sky-400" />
              <div>
                No 4 Mp Sarathi nagar,
                <br />
                Arcot road Kagithapattarai,
                <br />
                Vellore 632012.
              </div>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt className="text-sky-400" />
              <a href="tel:+918189822888">+91 8189822888</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-sky-400" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Bookmyservicetn23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bookmyservicetn23@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaClock className="text-sky-400" />
              Mon-Sun: 8:00AM - 8:00PM
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto relative top-5 text-center text-xs text-white space-x-4 flex flex-wrap justify-center gap-2">
        <span>© 2025 Book my services</span>
        <span className="hidden md:flex space-x-4">
          <a
            href="#"
            className="text-white hover:underline transition duration-200 "
          >
            Privacy
          </a>
        </span>
        <span className="hidden md:flex space-x-4">
          <a
            href=""
            className="text-white hover:underline transition duration-200"
          >
            Cookies
          </a>
        </span>
        <span className="hidden md:flex space-x-4">
          <a
            href=""
            className="text-white hover:underline transition duration-200"
          >
            Terms
          </a>
        </span>
        <span className="hidden md:flex space-x-4">
          <a
            href=""
            className="text-white hover:underline transition duration-200"
          >
            Risk
          </a>
        </span>
      </div>
      <div className="max-w-7xl mx-auto mt-6 text-center text-xs text-white space-x-4 flex flex-wrap justify-center gap-2">
        <span className="inline-block md:hidden space-x-4">Privacy</span>
        <span className="inline-block md:hidden space-x-4">Cookies</span>
        <span className="inline-block md:hidden space-x-4">Terms</span>
        <span className="inline-block md:hidden space-x-4">Risk</span>
      </div>
    </footer>
  );
};

export default Footer;
