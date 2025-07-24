import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Particles from "./homePageParticlesAnimation/Particles";

const Preloader = ({ onComplete }) => {
  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement("div");
        div.className = "num";
        div.textContent = j;
        digit3Ref.current.appendChild(div);
      }
    }

    const finalDigit = document.createElement("div");
    finalDigit.className = "num";
    finalDigit.textContent = "0";
    digit3Ref.current.appendChild(finalDigit);

    function animate(digit, duration, delay = 1) {
      const numHeight = digit.querySelector(".num").clientHeight;
      const totalDistance =
        (digit.querySelectorAll(".num").length - 1) * numHeight;
      gsap.to(digit, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    }

    animate(digit3Ref.current, 5);
    animate(digit2Ref.current, 6);
    animate(digit1Ref.current, 2, 5);

    gsap.to(progressBarRef.current, {
      width: "30%",
      duration: 2,
      ease: "power4.inOut",
      delay: 7,
    });

    gsap.to(progressBarRef.current, {
      width: "100%",
      opacity: 0,
      duration: 2,
      delay: 8.5,
      ease: "power3.out",
      onComplete,
    });
  }, [onComplete]);

  return (
    <div className="pre-loader w-[200%] h-full p-4 sm:p-8 flex justify-end items-end gap-2 fixed top-0 right-0 overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>

      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-neuebrucke text-white leading-[1.2] w-max">
        Loading
      </p>
      <div className="counter h-[45px] sm:h-[80px] md:h-[100px] flex font-neuebrucke text-white text-[50px] sm:text-[70px] md:text-[100px] font-normal leading-[1] overflow-hidden">
        <div
          ref={digit1Ref}
          className="mt-2 lg:mt-7 md:mt-9 digit-1 relative -top-[5px] sm:-top-[10px] md:-top-[15px]"
        >
          <div className="num">0</div>
          <div className="num offset relative -right-[3px] sm:-right-[5px] md:-right-[7.5px]">
            1
          </div>
        </div>
        <div
          ref={digit2Ref}
          className="mt-2 lg:mt-7 md:mt-9 digit-2 relative -top-[5px] sm:-top-[10px] md:-top-[15px]"
        >
          <div className="num">0</div>
          <div className="num offset relative -right-[3px] sm:-right-[5px] md:-right-[7.5px]">
            1
          </div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
        <div
          ref={digit3Ref}
          className="mt-2 lg:mt-7 md:mt-9 digit-3 relative -top-[5px] sm:-top-[10px] md:-top-[15px]"
        >
          <div className="num">0</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
        </div>
        <div className="mt-2 lg:mt-7 md:mt-9 digit-4 relative -top-[5px] sm:-top-[10px] md:-top-[15px]">
          %
        </div>
      </div>
      <div
        ref={progressBarRef}
        className="progress-bar relative -top-[5px] sm:-top-[10px] md:-top-[15px] w-0 h-0.5 sm:h-1 bg-white"
      ></div>
    </div>
  );
};

export default Preloader;
