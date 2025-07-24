import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeaderAnimation = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    function splitTextIntoSpans() {
      if (!headerRef.current) return;

      const text = headerRef.current.innerText;
      const topValue = window.innerWidth < 768 ? "200px" : "400px";
      const splitText = text
        .split("")
        .map(
          (char, index) =>
            `<span key=${index} style="position:relative; top:${topValue}">${char}</span>`
        )
        .join("");

      headerRef.current.innerHTML = splitText;
    }

    splitTextIntoSpans();

    const spans = headerRef.current.querySelectorAll("span");
    gsap.to(spans, {
      top: "0px",
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      delay: 11,
    });
  }, []);

  return (
    <div className="header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1
        ref={headerRef}
        className="text-[15vw] sm:text-[18vw] md:text-[20vw] uppercase font-black font-neuebrucke text-[#ebdc0b] overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        Swifties
      </h1>
    </div>
  );
};

export default HeaderAnimation;
