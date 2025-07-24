import React, { useState, useEffect, useRef } from "react";
import Preloader from "../animation/LandingPageAnimation/Preloader";
import HeaderAnimation from "../animation/LandingPageAnimation/HeaderAnimation";
import HeroAnimation from "../animation/LandingPageAnimation/HeroAnimation";
import NavAnimation from "../Menu/NavAnimation";
import Menu from "../Menu/contactMenu/Menu";

const Home = () => {
  const [showPreloader, setShowPreloader] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("hasVisitedRoot");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const hasVisited = localStorage.getItem("hasVisitedRoot");

    if (window.location.pathname === "/" && !hasVisited) {
      setShowPreloader(true);
      localStorage.setItem("hasVisitedRoot", "true");
    } else {
      setAnimationComplete(true);
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    setAnimationComplete(true);
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <section
        className={`hero w-screen h-screen ${
          animationComplete ? "p-0" : "p-4 sm:p-8 md:p-12"
        }`}
      >
        <div className="hero-imgs relative w-full h-full overflow-hidden z-0">
          {[
            "home/1.jpg",
            "home/2.jpg",
            "home/3.jpg",
            "home/4.jpg",
            "home/7.jpg",
            "home/6.jpg",
            "home/5.jpg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="absolute w-full h-full object-cover"
              style={{
                clipPath: animationComplete
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                  : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
              }}
            />
          ))}
        </div>
      </section>

      <div className="website-content absolute top-0 left-0 w-full h-full z-[1]">
        <nav className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <Menu />
        </nav>

        <div className="header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1
            className="text-[15vw] sm:text-[18vw] md:text-[20vw] uppercase font-black font-neuebrucke text-white overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              opacity: animationComplete ? 1 : 0,
            }}
          >
            Swifties
          </h1>
        </div>
      </div>

      {showPreloader && (
        <>
          <HeaderAnimation />
          <HeroAnimation />
          <NavAnimation />
        </>
      )}
    </div>
  );
};

export default Home;
