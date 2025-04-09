import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import rocket from "../../assets/waterfall2/rocket.png";
import telescope from "../../assets/waterfall2/telescope.png";
import background from "../../assets/waterfall2/background.png";

const Waterfall2 = () => {
  const [activeCard, setActiveCard] = useState("rocket");

  // Animation controls
  const titleControls = useAnimation();
  const cardsControls = useAnimation();

  // References to detect when elements are in viewport
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Start animations when elements enter viewport
  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleInView, titleControls]);

  useEffect(() => {
    if (cardsInView) {
      cardsControls.start("visible");
    }
  }, [cardsInView, cardsControls]);

  // Animation variants
  const titleVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardsContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.3,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Background stars animation variant
  const starsVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="w-full md:h-[1260px] h-[800px] relative overflow-hidden">
      <div
        className="absolute w-full h-full bg-no-repeat md:bg-cover bg-[length:125%_100%] xl:bg-[length:100%_100%]
                     md:w-full md:right-0 
                     sm:right-[-20%]"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Stars overlay similar to GraphicDesign */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={starsVariant}
        className="absolute inset-0 w-full h-full stars-background pointer-events-none"
        style={{ zIndex: 1 }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 h-full">
        {/* Web Design Projects Heading - Repositioned */}
        <motion.h2
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariant}
          className="font-orbitron text-[40px] font-bold text-white absolute top-[100px] right-[40px] z-20 md:block hidden [text-shadow:_8px_12px_4px_rgba(0,0,0,1)] drop-shadow-xl"
        >
          Web Design Projects
        </motion.h2>

        <div className="flex flex-col items-center md:block h-full">
          {/* Cards Container - Centrado en mobile, alineado a la derecha en desktop */}
          <motion.div
            ref={cardsRef}
            initial="hidden"
            animate={cardsControls}
            variants={cardsContainerVariant}
            className="flex w-full items-center md:items-start justify-center md:justify-end md:pr-[75px] h-full md:pt-[180px]"
          >
            <div className="relative w-82 max-w-md md:w-[483px] h-[510px] md:h-[647px] px-4 md:px-0">
              {/* Telescope Card */}
              <motion.div
                variants={cardVariant}
                custom={1}
                className={`absolute ${
                  activeCard === "telescope"
                    ? "top-25 md:-left-20"
                    : "top-25 md:-left-20"
                } w-full md:w-[483px] h-100 md:h-[647px] border-gradient-web-design rounded-2xl backdrop-blur-2xl p-6 transition-all duration-500 shadow-xl
                  ${
                    activeCard === "telescope"
                      ? "z-20"
                      : "z-10 bg-black/60 scale-[0.98] transform"
                  }
                  hover:shadow-[0_0_20px_rgba(147,197,253,0.5)] cursor-pointer`}
                onMouseEnter={() => setActiveCard("telescope")}
              >
                <div className="flex flex-col h-full justify-between">
                  <h3 className="font-inter text-2xl md:text-[40px] font-bold text-white mb-4 [text-shadow:_0px_4px_4px_rgba(255,255,255,0.5)] drop-shadow-xl">
                    StarryNight
                  </h3>

                  <p className="font-inter text-white text-sm md:text-[25px] md:leading-[50.2px] font-normal">
                    This is a visual representation of an artwork turned into an
                    interactive website. Using CSS, I animated a rotating galaxy
                    with shiny stars representing links to different parts of
                    the page.
                  </p>

                  <div className="mt-auto flex justify-end">
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400 to-indigo-400 blur-md transition-all duration-500"></div>
                      <img
                        src={telescope}
                        alt="Telescope"
                        onClick={() =>
                          window.open(
                            "https://tempest-digital.io/Project%20presentation/index.html",
                            "_blank"
                          )
                        }
                        className="w-[163px] h-[181px] object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`,
                              animationDuration: `${1 + Math.random() * 2}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Rocket Card */}
              <motion.div
                variants={cardVariant}
                custom={0}
                className={`absolute ${
                  activeCard === "rocket" ? "top-0 left-0" : "top-0 left-0"
                } w-full md:w-[483px] h-100 md:h-[647px] border-gradient-web-design rounded-2xl backdrop-blur-2xl p-6 transition-all duration-500 shadow-xl
                  ${
                    activeCard === "rocket"
                      ? "z-20"
                      : "z-10 bg-black/60 scale-[0.98] transform"
                  }
                  hover:shadow-[0_0_20px_rgba(167,139,250,0.5)] cursor-pointer`}
                onMouseEnter={() => setActiveCard("rocket")}
              >
                <div className="flex flex-col h-full justify-between">
                  <h3 className="font-inter text-2xl md:text-[40px] font-bold text-white mb-4 [text-shadow:_0px_4px_4px_rgba(255,255,255,0.5)] drop-shadow-xl">
                    Animated Comic
                  </h3>

                  <p className="font-inter text-white text-sm md:text-[25px] md:leading-[50.2px] font-normal">
                    An interactive page where you can read a comic from the
                    Sonic The Hedgehog series in an animated style. Using the JS
                    library, I made seamless transitions and image cut-ins for
                    each panel.
                  </p>

                  <div className="mt-auto flex justify-end">
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-400 to-pink-400 blur-md transition-all duration-500"></div>
                      <img
                        src={rocket}
                        alt="Rocket"
                        onClick={() =>
                          window.open(
                            "https://tempest-digital.io/Final%20Project/FinalProject.html",
                            "_blank"
                          )
                        }
                        className="w-[151px] h-[166px] object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`,
                              animationDuration: `${1 + Math.random() * 2}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for stars */}
      <style jsx>{`
        .stars-background {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #ffffff,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
          mix-blend-mode: screen;
        }
      `}</style>
    </div>
  );
};

export default Waterfall2;
