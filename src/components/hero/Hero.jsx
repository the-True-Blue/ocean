import { useState, useEffect } from "react";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroVideoMp4 from "../../assets/Animations/Hero/hero.mp4";
import heroPoster from "../../assets/Animations/Hero/hero-poster.png";
import heroImage from "../../assets/hero/hero.png";
import ExploreBtn from "../ExploreBtn";
import AboutModal from "./AboutModal";
import VideoModal from "./VideoModal";

const Hero = () => {
  // Separate states for each modal
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoSrc = "https://www.youtube.com/embed/your-video-id";
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
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
        duration: 1.8,
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
        duration: 1.2,
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
    <div className="relative w-full">
      {/* Mobile: imagen estática */}
      <div
        className="md:hidden h-[1285px] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

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
            <source src={heroVideoMp4} type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroPoster}
            className="w-full block"
            style={{ pointerEvents: "none" }}
          />
        )}
      </div>

      {/* Top Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center gap-[19px] text-white">
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
    </div>
  );
};

export default Hero;
