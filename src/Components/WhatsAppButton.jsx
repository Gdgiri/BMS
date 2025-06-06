// src/components/ContactButtons.jsx
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";

const ContactButtons = () => {
  const phoneNumber = "91 8189822888";
  const mobileNumber="91 8825965775"
  const message = "Hi BookMySerives!";
  const message2 = "I need more details on services!";

  const [isWhatsAppBouncing, setIsWhatsAppBouncing] = useState(false);
  const [isCallBouncing, setIsCallBouncing] = useState(false);

  const handleWhatsAppClick = () => {
    setIsWhatsAppBouncing(true);
    setTimeout(() => setIsWhatsAppBouncing(false), 500);
  };

  const handleCallClick = () => {
    setIsCallBouncing(true);
    setTimeout(() => setIsCallBouncing(false), 500);
  };

  return (
    <div className="fixed bottom-20 right-7 z-50 md:hidden flex-col gap-4 sm:right-6 md:right-6 lg:right-8  ">
      {/* Call Button */}
      <a
        href={`tel:+${mobileNumber}`}
        onClick={handleCallClick}
        className={`relative bg-[#1067a4] hover:bg-[#0f7fcf] rounded-full w-12 h-12 flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110 ${
          isCallBouncing ? "animate-bounce" : ""
        } wave-effect`}
        title="Call us"
        aria-label="Call us"
      >
        <span className="text-white text-xl">
          <IoCall />
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          `${message}\n${message2}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className={`relative bg-green-500 hover:bg-green-600 mt-4 rounded-full w-12 h-12 flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110 ${
          isWhatsAppBouncing ? "animate-bounce" : ""
        } wave-effect`}
        title="Chat with us on WhatsApp"
        aria-label="Chat with us on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

export default ContactButtons;
