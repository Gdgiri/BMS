import React, { useState } from "react";

const testimonials = [
  {
    name: "Priya",
    location: "Vellore, Tamil Nadu",
    feedback:
      "They transformed my messy apartment into a sparkling home. Thank you",
    stars: 5,
  },
  {
    name: "Ravi",
    location: "Chennai, Tamil Nadu",
    feedback:
      "Amazing service! The staff were polite and super efficient. Highly recommend!",
    stars: 5,
  },
  {
    name: "Divya",
    location: "Coimbatore, Tamil Nadu",
    feedback:
      "They transformed my messy apartment into a sparkling home. Thank you!",
    stars: 4,
  },
  {
    name: "Divya",
    location: "Coimbatore, Tamil Nadu",
    feedback:
      "They transformed my messy apartment into a sparkling home. Thank you!",
    stars: 4,
  },
  {
    name: "Amit",
    location: "Salem, Tamil Nadu",
    feedback:
      "Very responsive and professional. They kept me informed every step of the way.",
    stars: 5,
  },
  {
    name: "Meena",
    location: "Madurai, Tamil Nadu",
    feedback:
      "One of the best cleaning services I’ve used. Definitely going to book again.",
    stars: 5,
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    if (startIndex + visibleCount < testimonials.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <div
      className="bg-[#fff5e9] px-4 text-center relative bottom-12"
      id="testominals"
    >
      <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
      <p className="text-gray-600 mb-8">Don't just take our word for it</p>

      {/* Testimonial Cards */}
      <div className="flex justify-center gap-6 flex-wrap">
        {visibleTestimonials.map((item, index) => (
          <div
            key={index}
            className="w-[300px] bg-white rounded-xl shadow-md p-6"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto -mt-12 mb-4 border-4 border-white shadow"
              />
            ) : (
              <div className="w-20 h-20 rounded-full mx-auto -mt-12 mb-4 flex items-center justify-center text-white text-2xl font-bold shadow bg-yellow-500">
                {item.name.charAt(0)}
              </div>
            )}

            <p className="text-gray-700 text-sm mb-4">{item.feedback}</p>
            <div className="text-yellow-400 mb-2">
              {Array.from({ length: item.stars }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <h4 className="font-bold">{item.name}</h4>
            <p className="text-sm text-gray-500">{item.location}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`text-2xl px-4 py-2 rounded-full ${
            startIndex === 0
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= testimonials.length}
          className={`text-2xl px-4 py-2 rounded-full ${
            startIndex + visibleCount >= testimonials.length
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          &rarr;
        </button>
      </div>

      {/* Leave Feedback Button */}
      <button className="mt-12  bg-yellow-400 hover:bg-yellow-500 text-white py-2 mb- px-6 rounded-full transition">
        Leave a feedback
      </button>
    </div>
  );
};

export default Testimonials;
