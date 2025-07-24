import React, { useEffect } from "react";
import { gsap } from "gsap";

const NavAnimation = () => {
  useEffect(() => {
    gsap.set("nav", { y: 200, opacity: 0 });

    gsap.to("nav", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 11,
    });
  }, []);

  return null;
};

export default NavAnimation;