import { useState, useEffect } from "react";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "../../assets/hero/hero.png";
import ExploreBtn from "../ExploreBtn";
import AboutModal from "./AboutModal";
import VideoModal from "./VideoModal";

const Hero = () => {
  // Separate states for each modal
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoSrc = "https://www.youtube.com/embed/your-video-id";

  // Animation controls
  const titleControls = useAnimation();
  const buttonControls = useAnimation();

  // References to detect when elements are in viewport
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [buttonRef, buttonInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Start animations when elements enter viewport
  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleInView, titleControls]);

  useEffect(() => {
    if (buttonInView) {
      buttonControls.start("visible");
    }
  }, [buttonInView, buttonControls]);

  // Animation variants
  const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Background stars animation
  const starsVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  // Functions to handle About modal
  const openAboutModal = () => {
    setIsAboutModalOpen(true);
    // Make sure video modal is closed when About opens
    setIsVideoModalOpen(false);
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  // Functions to handle Video modal
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="h-[1285px] relative w-full">
      {/* Desktop Image */}
      <div
        className="absolute inset-0 h-full bg-center bg-no-repeat bg-cover xl:!bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Stars overlay similar to GraphicDesign */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={starsVariant}
        className="absolute inset-0 w-full h-full stars-background pointer-events-none"
        style={{ zIndex: 1 }}
      ></motion.div>

      {/* Top Content */}
      <div className="relative z-10 flex flex-col items-center gap-[19px] text-white">
        <motion.h1
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariant}
          className="text-[36px] md:text-[55px] font-spartan font-600 mb-0 mt-[257px] md:mt-[230px]"
          style={{
            background:
              "linear-gradient(272.38deg, #FFFFFF 46.06%, #A9EAFA 81.53%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          WELCOME
        </motion.h1>
        <motion.div
          ref={buttonRef}
          initial="hidden"
          animate={buttonControls}
          variants={buttonVariant}
        >
          <ExploreBtn
            text="Explore"
            className="font-orbitron font-[700px] text-[15px]"
            onClick={openAboutModal}
          />
        </motion.div>
      </div>

      {/* About Me Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={closeAboutModal}
        onOpenVideo={openVideoModal}
      />

      {/* Video Modal (independent from About) */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoSrc={videoSrc}
      />

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
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
};

export default Hero;
