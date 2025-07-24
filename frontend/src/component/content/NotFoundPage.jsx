import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 text-center text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-extrabold leading-none">
          404
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mt-4">Page Not Found</p>
        <a
          href="/"
          className="mt-8 sm:mt-10 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black text-sm sm:text-base font-medium rounded-full transition duration-300 hover:bg-gray-200"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
