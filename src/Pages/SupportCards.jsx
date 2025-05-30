import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const SupportCards = () => {
  const number = "8189822888";
  const callLink = `tel:${number}`;
  const message = "Hello, I need some service details. Kindly assist.";
  // const message = "Hi, I'm interested in your services. Please let me know how to proceed.";
  // const message = "Hello! I’d like to know more about your services.";
  // const message = "Hi, I’m looking for services. Please guide me.";

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${number}?text=${encodedMessage}`;
  return (
    <div
      className="py-16 bg-[#fff7f0] flex items-center justify-center "
      id="support"
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full m-4 mb-34">
        {/* WhatsApp Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 max-w-md mx-auto">
          {/* Decorative Corners */}
          <div className="absolute top-0 right-0 h-20 w-20 bg-green-100 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 h-20 w-20 bg-green-100 rounded-tr-full"></div>

          {/* Icon */}
          <div className="flex items-center justify-center mb-5 z-10 relative">
            <div className="bg-green-500 text-white p-4 rounded-full text-2xl shadow-md">
              <FaWhatsapp />
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-xl font-semibold text-center text-gray-800">
            Need Help Instantly?
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 text-center mt-3 leading-relaxed px-2">
            Connect with our team on WhatsApp and get quick responses to your
            service queries. We’re available every day from{" "}
            <strong className="text-gray-800">8 AM to 9 PM</strong>.
          </p>

          {/* Button */}
          <div className="flex justify-center mt-6 z-10 relative">
            <a
              href={whatsappLink}
              className="bg-green-500 hover:bg-green-600 text-white py-2.5 px-5 rounded-full text-sm font-medium shadow-md transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Call Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 max-w-md mx-auto">
          {/* Decorative corners */}
          <div className="absolute top-0 right-0 h-20 w-20 bg-blue-100 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 h-20 w-20 bg-blue-100 rounded-tr-full"></div>

          {/* Icon */}
          <div className="flex items-center justify-center mb-5 relative z-10">
            <div className="bg-blue-500 text-white p-4 rounded-full text-2xl shadow-md">
              <FaPhoneAlt />
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-xl font-semibold text-center text-gray-800 leading-snug z-10 relative">
            Prefer to Talk?
            <br />
            Give Us a Call!
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 text-center mt-3 px-2 leading-relaxed z-10 relative">
            We're just a call away. Speak directly with our team for bookings,
            inquiries, or urgent help.
          </p>

          {/* Button */}
          <div className="flex justify-center mt-6 relative z-10">
            <a
              href={callLink}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-5 rounded-full text-sm font-medium shadow-md transition duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCards;
