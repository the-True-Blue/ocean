import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import instagramIcon from "../assets/footer/instagram.svg";
import linkedinIcon from "../assets/footer/linkedin.svg";
import tiktokIcon from "../assets/footer/tiktok.svg";
import fiverIcon from "../assets/footer/Fiverr.png";
import background from "../assets/footer/background.png";
import backgroundMobile from "../assets/footer/background_mobile.png";

const Footer = () => {
  // Animation controls
  const titleControls = useAnimation();
  const socialIconsControls = useAnimation();
  const copyrightControls = useAnimation();

  // References to detect when elements are in viewport
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [socialIconsRef, socialIconsInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [copyrightRef, copyrightInView] = useInView({
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
    if (socialIconsInView) {
      socialIconsControls.start("visible");
    }
  }, [socialIconsInView, socialIconsControls]);

  useEffect(() => {
    if (copyrightInView) {
      copyrightControls.start("visible");
    }
  }, [copyrightInView, copyrightControls]);

  // Animation variants
  const titleVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialIconsContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.3,
      },
    },
  };

  const socialIconVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const copyrightVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="footer" className="w-full h-[400px] md:h-[750px] relative">
      {/* Desktop Background */}
      <div
        className="absolute w-full h-full bg-[length:125%_100%] bg-no-repeat md:!bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="absolute pt-[15px] ps-[17px] md:pt-20">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariant}
          className="md:ps-[66px] mt-15 flex flex-col items-start gap-3 font-orbitron text-white font-[700] [text-shadow:_5px_5px_4px_rgba(255,255,255,0.51)] drop-shadow-xl"
        >
          <h1 className="text-[24px] md:text-[32px]">Cool down</h1>
          <h1 className="text-[16px] md:text-[20px]">
            with <span className="text-[36px] md:text-[40px]">TEMPEST</span>
          </h1>
          <motion.div
            ref={socialIconsRef}
            initial="hidden"
            animate={socialIconsControls}
            variants={socialIconsContainerVariant}
            className="flex md:flex-col items-center gap-3 ms-5"
          >
            <div className="flex gap-2 md:gap-8">
              <motion.div
                variants={socialIconVariant}
                className="bg-white/15 hover:bg-white/25 h-full rounded-full p-3 transition-all duration-300 hover:shadow-glow transform hover:scale-110 cursor-pointer"
              >
                <a
                  href="https://www.linkedin.com/in/dominique-mccormack-4213791b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={linkedinIcon}
                    alt="linkedin-icon"
                    className="md:w-[33px] w-[15px] transition-transform duration-300"
                  />
                </a>
              </motion.div>
              <motion.div
                variants={socialIconVariant}
                className="bg-white/15 hover:bg-white/25 h-full rounded-full p-3 transition-all duration-300 hover:shadow-glow transform hover:scale-110 cursor-pointer"
              >
                <a
                  href="https://www.instagram.com/tempestdigital_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={instagramIcon}
                    alt="instagram-icon"
                    className="invert md:w-[33px] w-[15px] transition-transform duration-300"
                  />
                </a>
              </motion.div>
              <motion.div
                variants={socialIconVariant}
                className="bg-white/15 hover:bg-white/25 h-full rounded-full p-3 transition-all duration-300 hover:shadow-glow transform hover:scale-110 cursor-pointer"
              >
                <a
                  href="https://www.tiktok.com/@tempestdigital_?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={tiktokIcon}
                    alt="tiktok-icon"
                    className="md:w-[33px] w-[15px] transition-transform duration-300"
                  />
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={socialIconVariant}
              className="bg-white/15 hover:bg-white/25 h-full rounded-full p-3 transition-all duration-300 hover:shadow-glow transform hover:scale-110 cursor-pointer"
            >
              <a
                href="https://www.fiverr.com/lexyblue3456"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={fiverIcon}
                  alt="tiktok-icon"
                  className="md:w-[33px] w-[15px] transition-transform duration-300"
                />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.h2
        ref={copyrightRef}
        initial="hidden"
        animate={copyrightControls}
        variants={copyrightVariant}
        className="absolute font-inter font-[400] md:text-[15px] text-[11px] text-white bottom-8 text-center w-full drop-shadow-[0_4px_4px_rgba(0,0,0,1)]"
      >
        © 2024 Designed by Tempest Digital, All rights reserved.
      </motion.h2>
    </div>
  );
};

export default Footer;
