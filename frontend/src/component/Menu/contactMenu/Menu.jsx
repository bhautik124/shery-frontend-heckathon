import React, { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { gsap } from "gsap";

const Menu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      gsap.set(menuRef.current, { display: "block" });
      gsap.fromTo(
        menuRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setMenuOpen(false);
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Album", path: "/album" },
    { name: "Tickets", path: "/tickets" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const filteredItems = menuItems.filter(
    (item) => item.path !== location.pathname
  );

  return (
    <div className="flex flex-col items-center font-neuebrucke text-2xl sm:text-3xl md:text-4xl font-light text-black uppercase relative">
      {!menuOpen && (
        <div
          className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white p-2 sm:p-3 md:p-4 rounded-md cursor-pointer"
          onClick={toggleMenu}
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl uppercase font-black text-black">
            MENU
          </h3>
          <IoMenu className="text-black text-3xl sm:text-4xl md:text-5xl" />
        </div>
      )}

      <div
        ref={menuRef}
        className="absolute w-[90vw] sm:w-[24rem] md:w-[28rem] lg:w-[30rem] bottom-full bg-white text-black p-4 sm:p-5 md:p-6 rounded-xl text-2xl sm:text-3xl md:text-4xl hidden shadow-lg"
      >
        <div className="flex justify-end mb-3 sm:mb-4">
          <IoClose
            className="text-2xl sm:text-3xl md:text-4xl cursor-pointer hover:rotate-90 transition-all duration-300"
            onClick={toggleMenu}
          />
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {filteredItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `relative group border border-black rounded-md cursor-pointer overflow-hidden ${
                  isActive ? "bg-black text-white" : ""
                }`
              }
              onClick={toggleMenu}
            >
              {({ isActive }) => (
                <>
                  {!isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-black transition-all duration-300 z-0"></div>
                  )}
                  <h3 className="relative z-10 text-center p-2 sm:p-3 group-hover:text-white transition-colors duration-300 text-xl sm:text-2xl md:text-3xl">
                    {item.name}
                  </h3>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
