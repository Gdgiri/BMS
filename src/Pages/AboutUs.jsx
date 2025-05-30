import React from "react";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="py-12 px-4 sm:px-6 lg:px-8 mt-12 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Side Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80"
            alt="Professional service"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Side Text */}
        <div className="md:w-1/2 text-center md:text-left mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Book My Service</strong> connects you with skilled
            professionals for all your home and office needs. Whether it's
            plumbing, electrical work, cleaning, or handyman tasks, our trusted
            experts are here to help.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mt-4">
            We are committed to delivering top-quality service and ensuring
            complete customer satisfaction. Our mission is to make booking
            services fast, simple, and reliable—every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
