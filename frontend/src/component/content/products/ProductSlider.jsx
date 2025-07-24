import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const ProductSlider = ({ title, data }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 md:px-10 relative">
      <h3 className="text-3xl sm:text-4xl md:text-5xl p-3 sm:p-4 md:p-5 font-semibold">
        {title}
      </h3>

      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 sm:p-3 md:p-4 rounded-full z-10"
      >
        <FaChevronLeft size={16} className="sm:size-18 md:size-9" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 sm:p-3 md:p-4 rounded-full z-10"
      >
        <FaChevronRight size={16} className="sm:size-18 md:size-9" />
      </button>

      <div
        ref={scrollRef}
        className="scrollbar-hidden overflow-x-auto scroll-smooth scrollbar-hide px-3 sm:px-4 md:px-6"
      >
        <Link to="/view-more">
          <div className="flex gap-3 sm:gap-4 w-max">
            {Array.isArray(data) &&
              data.map((item, index) => (
                <div className="cursor-pointer border w-[250px] sm:w-[300px] md:w-[350px] h-[350px] sm:h-[400px] md:h-[450px] flex-shrink-0 bg-white/5 p-4 sm:p-5 md:p-6 rounded-lg flex flex-col items-center justify-between text-center">
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full h-48 sm:h-60 md:h-72 object-contain"
                  />
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl mt-3 sm:mt-4 font-semibold">
                      {item.heading}
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}

            <div className="w-[250px] sm:w-[300px] md:w-[350px] h-[350px] sm:h-[400px] md:h-[450px] flex-shrink-0 border p-4 sm:p-5 md:p-6 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer">
              <div className="flex items-center gap-2 flex-col justify-center">
                <CiSquarePlus className="text-2xl sm:text-3xl md:text-4xl" />
                <p className="text-xl sm:text-2xl md:text-3xl text-black uppercase font-medium tracking-widest">
                  View More
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProductSlider;
