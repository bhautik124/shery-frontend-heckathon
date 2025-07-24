import React, { useEffect } from "react";
import { gsap } from "gsap";

const HeroAnimation = () => {
  useEffect(() => {
    gsap.to(".hero-imgs > img", {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.25,
      delay: 9,
    });

    const scaleValue = window.innerWidth < 768 ? 1.15 : 1.25;

    gsap.to(".hero", {
      scale: scaleValue,
      duration: 3,
      ease: "power3.inOut",
      delay: 9,
    });
  }, []);

  return null;
};

export default HeroAnimation;
