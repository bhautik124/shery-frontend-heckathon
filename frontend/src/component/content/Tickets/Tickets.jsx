import React, { useState, useRef, useEffect } from "react";
import { initSliderAnimations } from "../../animation/CardSaw/animations";
import FallingImages from "../../animation/fallingTickets/Fall";
import BookTicket from "./BookTicketModal";
import "../../../styles/style.css";
import Menu from "../../Menu/contactMenu/Menu";
import RandomLetterSwapForward from "../../animation/contactPageAnimation/ContactAnimation";
import { useMediaQuery } from "react-responsive";

const Tickets = ({ content, initialSlideIndex = 0 }) => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const sliderRef = useRef(null);
  const sliderTitleRef = useRef(null);
  const sliderItemsRef = useRef(null);
  const sliderPreviewRef = useRef(null);

  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    if (
      sliderRef.current &&
      sliderTitleRef.current &&
      sliderItemsRef.current &&
      sliderPreviewRef.current
    ) {
      initSliderAnimations(
        {
          slider: sliderRef.current,
          sliderTitle: sliderTitleRef.current,
          sliderItems: sliderItemsRef.current,
          sliderPreview: sliderPreviewRef.current,
          initialSlideIndex,
        },
        content
      );
    }
  }, [content, initialSlideIndex]);

  const prevIndex = (initialSlideIndex - 1 + content.length) % content.length;
  const nextIndex = (initialSlideIndex + 1) % content.length;

  return (
    <div className="w-full min-h-screen relative">
      <div
        className={showBooking ? "blur-sm pointer-events-none select-none" : ""}
      >
        <section className="w-full py-12 text-white text-center">
          <h3 className="text-5xl md:text-7xl lg:text-9xl font-bold">
            <RandomLetterSwapForward label="Concert vibe" reverse={false} />
          </h3>
        </section>

        <section className="w-full min-h-screen lg:mt-16 mb-10">
          <div className="text-center px-4">
            <p className="text-xl md:max-w-2xl lg:max-w-6xl mx-auto lg:text-5xl lg:max-w-6xl lg:mx-auto text-white font-lexend normal-case">
              The Eras Tour has been one of the most emotional and magical
              experiences of my life. Each era represents a different chapter of
              my journey, and getting to share that with you — city after city,
              night after night — has meant everything to me. Your energy, your
              love, your friendship... I feel it with every song. Thank you for
              making these moments unforgettable. I’ll carry them with me
              forever.
            </p>
          </div>

          <div className="slider w-full min-h-screen" ref={sliderRef}>
            <div className="slide-container prev">
              <img src={content[prevIndex].img} alt={content[prevIndex].name} />
            </div>
            <div className="slide-container active">
              <img
                src={content[initialSlideIndex].img}
                alt={content[initialSlideIndex].name}
              />
            </div>
            <div className="slide-container next">
              <img src={content[nextIndex].img} alt={content[nextIndex].name} />
            </div>

            <div className="slider-title" ref={sliderTitleRef}>
              <h1>{content[initialSlideIndex].name}</h1>
            </div>

            <div className="slider-items" ref={sliderItemsRef}>
              {content.map((item, index) => (
                <p
                  key={item.name}
                  className={index === initialSlideIndex ? "activeItem" : ""}
                >
                  {item.name}
                </p>
              ))}
            </div>

            <div className="slider-preview" ref={sliderPreviewRef}>
              <img src={content[initialSlideIndex].img} alt="" />
            </div>
          </div>
        </section>

        <section className="w-full lg:mt-16 mb-10 px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ebdc0b] font-bold leading-tight">
              Unlock The Experience
            </h3>
          </div>

          <div className="w-full h-[65vh] sm:h-[70vh] md:h-[75vh] border border-[#ebdc0b] rounded-xl relative overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-[#ebdc0b] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-md cursor-pointer transition-transform hover:scale-105"
              onClick={() => setShowBooking(true)}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3D1D0F] tracking-wide">
                BAG IT
              </h3>
            </div>

            <FallingImages
              imageUrls={
                isMobile
                  ? [
                      "/tickets/1.jpg",
                      "/tickets/2.jpg",
                      "/tickets/3.jpg",
                      "/tickets/2.jpg",
                    ]
                  : isTablet
                  ? [
                      "/tickets/1.jpg",
                      "/tickets/2.jpg",
                      "/tickets/3.jpg",
                      "/tickets/2.jpg",
                      "/tickets/1.jpg",
                      "/tickets/3.jpg",
                    ]
                  : [
                      "/tickets/1.jpg",
                      "/tickets/2.jpg",
                      "/tickets/3.jpg",
                      "/tickets/1.jpg",
                      "/tickets/2.jpg",
                      "/tickets/3.jpg",
                      "/tickets/1.jpg",
                      "/tickets/3.jpg",
                    ]
              }
              trigger="scroll"
              pause={showBooking}
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              mouseConstraintStiffness={0.9}
              imageWidth={isMobile ? "55%" : isTablet ? "35%" : "20%"}
              imageHeight={isMobile ? "15%" : isTablet ? "18%" : "20%"}
            />
          </div>
        </section>
      </div>

      {showBooking && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <BookTicket handleClose={() => setShowBooking(false)} />
        </div>
      )}

      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-8 z-50">
        <Menu />{" "}
      </nav>
    </div>
  );
};

export default Tickets;
