import React from "react";
import Menu from "../Menu/contactMenu/Menu";
import { useEffect, useRef } from "react";
import { initSliderAnimations } from "../animation/CardSaw/animations";
import "../../styles/style.css";
import RandomLetterSwapForward from "../animation/contactPageAnimation/ContactAnimation";

const MusicAlbum = ({ content, initialSlideIndex = 0 }) => {
  const sliderRef = useRef(null);
  const sliderTitleRef = useRef(null);
  const sliderItemsRef = useRef(null);
  const sliderPreviewRef = useRef(null);

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
      {/* Hero Section */}
      <section className="w-full py-12 text-white text-center">
        <h3 className="text-5xl md:text-7xl lg:text-9xl font-bold">
          <RandomLetterSwapForward label="Album Collection" reverse={false} />
        </h3>
      </section>

      <section className="w-full min-h-screen lg:mt-16 mb-10">
        <div className="text-center px-4">
          <p className="text-xl md:max-w-2xl lg:max-w-3xl mx-auto lg:text-5xl lg:max-w-6xl lg:mx-auto text-white font-lexend normal-case">
            This album is a diary of my soul — sung, not spoken. Each track
            holds a heartbeat, a memory, a spark of who I was. Thank you for
            listening, feeling, and making it yours. Now, it’s no longer just my
            story — it’s ours.
          </p>
        </div>

        <div className="slider w-full min-h-screen" ref={sliderRef}>
          <div className="slide-container prev">
            <div className="slide-img">
              <img src={content[prevIndex].img} alt={content[prevIndex].name} />
            </div>
          </div>
          <div className="slide-container active">
            <div className="slide-img">
              <img
                src={content[initialSlideIndex].img}
                alt={content[initialSlideIndex].name}
              />
            </div>
          </div>
          <div className="slide-container next">
            <div className="slide-img">
              <img src={content[nextIndex].img} alt={content[nextIndex].name} />
            </div>
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

      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-8 z-50">
        <Menu />{" "}
      </nav>
    </div>
  );
};

export default MusicAlbum;
