import React from "react";
import { FaFacebook, FaYoutube, FaSnapchatSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaSquareTwitter } from "react-icons/fa6";
import Menu from "../Menu/contactMenu/Menu";

const About = () => {
  return (
    <div className="w-full min-h-screen text-white px-4 py-4 sm:py-6 md:py-24 pb-28">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-12 lg:gap-24 max-w-7xl mx-auto h-full">
        <div className="w-full lg:w-1/2 h-auto">
          <img
            src="about/about.webp"
            alt="About"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center py-6 sm:py-8 lg:py-0">
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold leading-relaxed mb-4 sm:mb-6 max-w-[90%] sm:max-w-[600px] text-white">
            I'm Taylor Swift — a singer, songwriter, and storyteller who’s been
            turning emotions into music since I was a teenager. From country
            beginnings to pop anthems and indie reflections, each era of my
            career represents a new chapter of growth and reinvention. I believe
            in the power of lyrics, owning your voice, and connecting through
            honest, heartfelt music. When I’m not writing or performing, you’ll
            probably find me hanging out with my cats, baking, or daydreaming
            about the next story to tell.
          </p>

          <div className="flex justify-center gap-4 sm:gap-6 text-xl sm:text-2xl mt-4">
            <a
              href="https://www.facebook.com/TaylorSwift"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/taylorswift13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-200"
            >
              <FaSquareTwitter />
            </a>
            <a
              href="https://www.instagram.com/taylorswift/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-200"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@taylorswift"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-200"
            >
              <AiFillTikTok />
            </a>
            <a
              href="https://www.youtube.com/taylorswift"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-200"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.snapchat.com/@taylorswift"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-200"
            >
              <FaSnapchatSquare />
            </a>
          </div>
        </div>

        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-8 z-50">
          <Menu />{" "}
        </nav>
      </div>
    </div>
  );
};

export default About;
