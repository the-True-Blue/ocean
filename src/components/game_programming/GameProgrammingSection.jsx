import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GameCarousel from "./GameCarousel";
import background from "../../assets/game_programming/background.png";
import Rive from "@rive-app/react-canvas";

const GameProgrammingSection = () => {
  // Controls for animations
  const titleControls = useAnimation();
  const descriptionControls = useAnimation();
  const carouselControls = useAnimation();
  const riveAnimationControls = useAnimation();

  // References to detect when elements are in viewport
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [descriptionRef, descriptionInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [carouselRef, carouselInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [riveRef, riveInView] = useInView({
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
    if (descriptionInView) {
      descriptionControls.start("visible");
    }
  }, [descriptionInView, descriptionControls]);

  useEffect(() => {
    if (carouselInView) {
      carouselControls.start("visible");
    }
  }, [carouselInView, carouselControls]);

  useEffect(() => {
    if (riveInView) {
      riveAnimationControls.start("visible");
    }
  }, [riveInView, riveAnimationControls]);

  // Animation variants
  const titleVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const carouselVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  const riveVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="game-programming-section"
      className="w-full md:h-[1260px] min-h-[822px] relative"
    >
      {/* Desktop Image */}
      <div
        className="absolute inset-0 h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>

      {/* Stars background overlay - similar to GraphicDesign */}
      <motion.div
        className="absolute inset-0 w-full h-full opacity-40 stars-background"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 w-full h-full opacity-20 stars-background-small"
        animate={{
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1,
        }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <motion.h1
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariant}
          className="font-orbitron font-black text-white text-[26.53px] text-center md:text-start md:ms-[48px]
          [text-shadow:_3px_6px_4px_rgba(52,140,240,1)] drop-shadow-xl pt-[46px]"
        >
          Game Programming
        </motion.h1>

        <div className="w-full relative">
          <motion.div
            ref={descriptionRef}
            initial="hidden"
            animate={descriptionControls}
            variants={descriptionVariant}
            className="w-[340px] md:w-[681px] h-[102px] absolute right-0 md:right-[48px] mt-[43px]"
          >
            <h2 className="text-[16px] h-full flex items-center text-white font-rajdhani backdrop-blur-3xl p-7 border-3 border-[#FFFFFF47] border-r-0 md:border-r-3 md:rounded-full rounded-l-full">
              Discover my game dev projects developed in Unity, showcasing my
              skills in game design and programming.
            </h2>
          </motion.div>
        </div>

        {/* Carousel with animation */}
        <motion.div
          ref={carouselRef}
          initial="hidden"
          animate={carouselControls}
          variants={carouselVariant}
          className="relative top-[350px] md:top-[180px] w-full flex justify-center"
        >
          <div className="w-full max-w-[1200px]">
            <GameCarousel />
          </div>
        </motion.div>

        {/* Rive bubble animation (bottom right corner) with entrance animation */}
        <motion.div
          ref={riveRef}
          initial="hidden"
          animate={riveAnimationControls}
          variants={riveVariant}
          className="absolute -bottom-80 left-0 md:left-50 w-[300px] h-[300px] z-20"
        >
          <Rive
            src="/animations/untitled.riv"
            animations="Timeline 1"
            autoPlay={true}
          />
        </motion.div>
      </div>

      {/* Additional space for mobile */}
      <div className="h-[200px] md:h-0 w-full"></div>

      {/* CSS for stars - copied from GraphicDesign */}
      <style jsx>{`
        .stars-background {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #77a0ff,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(2px 2px at 40px 70px, #a1b8ff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #5d99ff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #8bb3ff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #4f7df2, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 160px 120px, #97c1ff, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
        }

        .stars-background-small {
          background-image: radial-gradient(
              1px 1px at 10px 10px,
              #77a0ff,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(1px 1px at 150px 150px, #a1b8ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 100px 50px, #5d99ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 60px 120px, #8bb3ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 175px 55px, #4f7df2, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 20px 180px, #97c1ff, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
        }
      `}</style>
    </div>
  );
};

export default GameProgrammingSection;
