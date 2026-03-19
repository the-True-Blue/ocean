import React, { useEffect, useRef, useState } from "react";
import background from "../../assets/waterfall/background.png";
import waterfallMp4 from "../../assets/Animations/waterfall1/Upper-Waterfall.mp4";
import waterfallPoster from "../../assets/Animations/waterfall1/waterfall1.png";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const Waterfall = () => {
  const textRef = useRef(null);
  const [videoReady, setVideoReady] = useState(!isSafari);

  useEffect(() => {
    if (!isSafari) return;
    const unlock = () => setVideoReady(true);
    document.addEventListener("click", unlock, { once: true });
    document.addEventListener("touchstart", unlock, { once: true });
    document.addEventListener("scroll", unlock, { once: true });
    document.addEventListener("keydown", unlock, { once: true });
    return () => {
      document.removeEventListener("click", unlock);
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("scroll", unlock);
      document.removeEventListener("keydown", unlock);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      {
        threshold: 0.8,
      },
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-[750px] md:h-auto relative flex flex-col md:justify-end justify-center overflow-hidden">
      {/* Mobile: imagen estática */}
      <div
        className="md:hidden absolute w-full h-full bg-[length:170%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Desktop: video animado */}
      <div className="hidden md:block">
        {videoReady ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full block"
            style={{ pointerEvents: "none" }}
          >
            <source src={waterfallMp4} type="video/mp4" />
          </video>
        ) : (
          <img
            src={waterfallPoster}
            className="w-full block"
            style={{ pointerEvents: "none" }}
          />
        )}
      </div>

      <div
        ref={textRef}
        className="md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 relative w-full max-w-[1359px] xl:mb-15 md:mb-10 mx-auto opacity-0 transition-opacity duration-1000 ease-in-out fade-in"
      >
        <div className="text-white flex md:flex-row md:justify-between justify-evenly items-center font-poppins font-[900]">
          <div className="flex flex-col items-center lg:pl-25 md:pl-5">
            <h1 className="lg:text-[98px] md:text-8xl text-[32px] tracking-[6%] leading-[44px] md:tracking-[0%] md:leading-none text-center">
              20+
            </h1>
            <h2 className="lg:text-[60px] md:text-4xl text-[32px] tracking-[6%] leading-[44px] md:tracking-[0%] md:leading-none text-center">
              Skills
            </h2>
          </div>
          <div className="flex flex-col items-center lg:pr-25 md:pr-5">
            <h1 className="lg:text-[98px] md:text-7xl text-center text-[32px] tracking-[6%] leading-[44px] md:tracking-[0%] md:leading-none">
              10+{" "}
              <span className="md:hidden">
                Projects <br /> Completed
              </span>
            </h1>
            <h2 className="lg:text-[34px] md:text-4xl text-center hidden md:block">
              Projects <br /> Completed
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waterfall;
