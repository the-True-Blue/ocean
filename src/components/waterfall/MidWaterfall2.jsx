import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import rocket from "../../assets/waterfall2/rocket.png";
import telescope from "../../assets/waterfall2/telescope.png";
import videoSrc from "../../assets/Animations/waterfall2/waterfall2_alpha.webm";
import videoPoster from "../../assets/Animations/waterfall2/waterfall2.png";
import bgMidWaterfall from "../../assets/mid_waterfall/background.png";
import bgWaterfall2 from "../../assets/waterfall2/background.png";
import ArtCollectionCarousel from "./ArtCollectionCarousel";
import StarryNight from "../projects/StarryNight";
import AnimatedComic from "../projects/AnimatedComic";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const MidWaterfall2 = () => {
  const [activeCard, setActiveCard] = useState("rocket");
  const [activeProject, setActiveProject] = useState(null);
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

  // Animation controls
  const titleControls = useAnimation();
  const cardsControls = useAnimation();

  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (titleInView) titleControls.start("visible");
  }, [titleInView, titleControls]);

  useEffect(() => {
    if (cardsInView) cardsControls.start("visible");
  }, [cardsInView, cardsControls]);

  const titleVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const cardsContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.6, duration: 0.8 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Mobile: dos fondos estáticos apilados */}
      <div className="md:hidden">
        {/* Top section mobile */}
        <div
          className="w-full h-[500px] bg-no-repeat bg-center bg-[length:170%_100%] flex justify-center items-center"
          style={{ backgroundImage: `url(${bgMidWaterfall})` }}
        >
          <div className="container mx-auto px-4">
            <ArtCollectionCarousel />
          </div>
        </div>

        {/* Bottom section mobile */}
        <div
          className="w-full h-[800px] bg-no-repeat bg-center bg-[length:125%_100%] relative"
          style={{ backgroundImage: `url(${bgWaterfall2})` }}
        >
          <motion.h2
            ref={titleRef}
            initial="hidden"
            animate={titleControls}
            variants={titleVariant}
            className="font-orbitron text-3xl text-nowrap text-center right-1/2 translate-x-1/2 font-bold text-white absolute top-10 z-20 [text-shadow:_8px_12px_4px_rgba(0,0,0,1)] drop-shadow-xl"
          >
            Web Design <br /> Projects
          </motion.h2>

          <div className="flex flex-col items-center h-full">
            <motion.div
              ref={cardsRef}
              initial="hidden"
              animate={cardsControls}
              variants={cardsContainerVariant}
              className="flex w-full items-center justify-center h-full"
            >
              <div className="relative w-82 max-w-md h-[510px] px-4">
                <motion.div
                  variants={cardVariant}
                  className={`absolute top-25 w-full h-100 border-gradient-web-design rounded-2xl backdrop-blur-2xl p-6 transition-all duration-500 shadow-xl ${activeCard === "telescope" ? "z-20" : "z-10 bg-black/60 scale-[0.98]"} hover:shadow-[0_0_20px_rgba(147,197,253,0.5)] cursor-pointer`}
                  onMouseEnter={() => setActiveCard("telescope")}
                >
                  <div className="flex flex-col h-full justify-between">
                    <h3 className="font-inter text-2xl font-bold text-white mb-4 [text-shadow:_0px_4px_4px_rgba(255,255,255,0.5)] drop-shadow-xl">
                      StarryNight
                    </h3>
                    <p className="font-inter text-white text-sm font-normal">
                      This is a visual representation of an artwork turned into
                      an interactive website. Using CSS, I animated a rotating
                      galaxy with shiny stars representing links to different
                      parts of the page.
                    </p>
                    <div className="mt-auto flex justify-end">
                      <div className="relative group">
                        <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400 to-indigo-400 blur-md transition-all duration-500"></div>
                        <img
                          src={telescope}
                          alt="Telescope"
                          onClick={() => setActiveProject("starrynight")}
                          className="w-[163px] h-[181px] object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardVariant}
                  className={`absolute top-0 left-0 w-full h-100 border-gradient-web-design rounded-2xl backdrop-blur-2xl p-6 transition-all duration-500 shadow-xl ${activeCard === "rocket" ? "z-20" : "z-10 bg-black/60 scale-[0.98]"} hover:shadow-[0_0_20px_rgba(167,139,250,0.5)] cursor-pointer`}
                  onMouseEnter={() => setActiveCard("rocket")}
                >
                  <div className="flex flex-col h-full justify-between">
                    <h3 className="font-inter text-2xl font-bold text-white mb-4 [text-shadow:_0px_4px_4px_rgba(255,255,255,0.5)] drop-shadow-xl">
                      Animated Comic
                    </h3>
                    <p className="font-inter text-white text-sm font-normal">
                      An interactive page where you can read a comic from the
                      Sonic The Hedgehog series in an animated style. Using the
                      JS library, I made seamless transitions and image cut-ins
                      for each panel.
                    </p>
                    <div className="mt-auto flex justify-end">
                      <div className="relative group">
                        <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-400 to-pink-400 blur-md transition-all duration-500"></div>
                        <img
                          src={rocket}
                          alt="Rocket"
                          onClick={() => setActiveProject("animatedcomic")}
                          className="w-[151px] h-[166px] object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop: video fluye naturalmente, contenido absolute encima */}
      <div className="hidden md:block relative">
        {videoReady ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full block"
            style={{ pointerEvents: "none" }}
          >
            <source src={videoSrc} type="video/webm" />
          </video>
        ) : (
          <img
            src={videoPoster}
            className="w-full block"
            style={{ pointerEvents: "none" }}
          />
        )}

        {/* Contenido absolute sobre el video */}
        <div className="absolute inset-0">
          {/* Top section: carousel (primeros 745px aprox) */}
          <div className="w-full h-[745px] flex justify-center items-center">
            <div className="container mx-auto px-4">
              <ArtCollectionCarousel />
            </div>
          </div>

          {/* Bottom section: Web Design Projects (siguientes 1260px aprox) */}
          <div className="w-full h-[1260px] relative">
            <motion.h2
              ref={titleRef}
              initial="hidden"
              animate={titleControls}
              variants={titleVariant}
              className="font-orbitron md:text-[40px] font-bold text-white absolute top-[100px] right-[40px] z-20 [text-shadow:_8px_12px_4px_rgba(0,0,0,1)] drop-shadow-xl"
            >
              Web Design Projects
            </motion.h2>

            <div className="flex flex-col items-center md:block h-full">
              <motion.div
                ref={cardsRef}
                initial="hidden"
                animate={cardsControls}
                variants={cardsContainerVariant}
                className="flex w-full items-start justify-end pr-[75px] h-full pt-[180px]"
              >
                <div className="relative w-[483px] h-[647px]">
                  {/* Telescope Card */}
                  <motion.div
                    variants={cardVariant}
                    className={`absolute top-25 -left-20 w-[483px] h-[647px] border-gradient-web-design rounded-2xl backdrop-blur-2xl p-6 transition-all duration-500 shadow-xl ${activeCard === "telescope" ? "z-20" : "z-10 bg-black/60 scale-[0.98]"} hover:shadow-[0_0_20px_rgba(147,197,253,0.5)] cursor-pointer`}
                    onMouseEnter={() => setActiveCard("telescope")}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <h3 className="font-inter text-[40px] font-bold text-white mb-4 [text-shadow:_0px_4px_4px_rgba(255,255,255,0.5)] drop-shadow-xl">
                        StarryNight
                      </h3>
                      <p className="font-inter text-white text-[25px] leading-[50.2px] font-normal">
                        This is a visual representation of an artwork turned
                        into an interactive website. Using CSS, I animated a
                        rotating galaxy with shiny stars representing links to
                        different parts of the page.
                      </p>
                      <div className="mt-auto flex justify-end">
                        <div className="relative group">
                          <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400 to-indigo-400 blur-md transition-all duration-500"></div>
                          <img
                            src={telescope}
                            alt="Telescope"
                            onClick={() => setActiveProject("starrynight")}
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
                    className={`absolute top-0 left-0 w-[483px] h-[647px] border-gradient-web-design rounded-2xl backdrop-blur-2xl p-6 transition-all duration-500 shadow-xl ${activeCard === "rocket" ? "z-20" : "z-10 bg-black/60 scale-[0.98]"} hover:shadow-[0_0_20px_rgba(167,139,250,0.5)] cursor-pointer`}
                    onMouseEnter={() => setActiveCard("rocket")}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <h3 className="font-inter text-[40px] font-bold text-white mb-4 [text-shadow:_0px_4px_4px_rgba(255,255,255,0.5)] drop-shadow-xl">
                        Animated Comic
                      </h3>
                      <p className="font-inter text-white text-[25px] leading-[50.2px] font-normal">
                        An interactive page where you can read a comic from the
                        Sonic The Hedgehog series in an animated style. Using
                        the JS library, I made seamless transitions and image
                        cut-ins for each panel.
                      </p>
                      <div className="mt-auto flex justify-end">
                        <div className="relative group">
                          <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-400 to-pink-400 blur-md transition-all duration-500"></div>
                          <img
                            src={rocket}
                            alt="Rocket"
                            onClick={() => setActiveProject("animatedcomic")}
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
        </div>
      </div>

      {/* Project Components */}
      {activeProject === "starrynight" && (
        <StarryNight onClose={() => setActiveProject(null)} />
      )}
      {activeProject === "animatedcomic" && (
        <AnimatedComic onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
};

export default MidWaterfall2;
