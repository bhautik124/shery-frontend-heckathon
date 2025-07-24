import React from "react";
import Menu from "../Menu/contactMenu/Menu";
import { MdOutlineMailOutline } from "react-icons/md";
import RandomLetterSwapForward from "../animation/contactPageAnimation/ContactAnimation";

const Contact = () => {
  return (
    <div className="w-full min-h-screen relative text-white bg-black">
      <div className="absolute top-0 left-0 w-full flex flex-wrap justify-between items-start p-4 sm:p-6 z-10">
        <img
          src="contect/logo.png"
          alt="Left Decorative"
          className="w-24 sm:w-28 md:w-32 h-auto object-contain"
        />

        <div
          className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 font-semibold text-xl sm:text-2xl md:text-3xl shadow-md flex items-center gap-2 cursor-pointer mt-4 sm:mt-0"
          style={{
            clipPath:
              "polygon(8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%)",
          }}
        >
          <MdOutlineMailOutline className="text-2xl sm:text-3xl md:text-4xl" />
          Let’s Talk
        </div>
      </div>

      <div className="min-h-screen w-full flex flex-col items-center justify-center text-white relative px-4 sm:px-6">
        <div className="text-center space-y-0 text-white">
          <div className="w-screen leading-none">
            <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light uppercase sm:border-t-2 sm:border-b-2 border-white w-full text-center p-0 m-0 leading-none">
              <RandomLetterSwapForward label="Feel free" reverse={false} />
            </h3>
          </div>
          <div className="w-screen leading-none">
            <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light uppercase sm:border-b-2 border-white w-full text-center p-0 m-0 leading-none">
              <RandomLetterSwapForward label="to" reverse={false} />
            </h3>
          </div>
          <div className="w-screen leading-none">
            <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light uppercase sm:border-b-2 border-white w-full text-center p-0 m-0 leading-none">
              <RandomLetterSwapForward label="connect" reverse={false} />
            </h3>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-between w-[95%] sm:w-[90%] max-w-6xl text-white gap-4 sm:gap-6">
          <h3 className="sm:border-b-2 sm:border-t-2 border-white text-2xl sm:text-3xl md:text-4xl w-full sm:w-auto text-center">
            <RandomLetterSwapForward label="abc@gmail.com" reverse={false} />
          </h3>
          <h3 className="sm:border-b-2 sm:border-t-2 border-white text-2xl sm:text-3xl md:text-4xl w-full sm:w-auto text-center">
            <RandomLetterSwapForward label="+91 1234567890" reverse={false} />
          </h3>
        </div>
      </div>

      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 sm:p-6 md:p-8 z-50 w-full flex justify-center">
        <Menu />
      </nav>
    </div>
  );
};

export default Contact;
