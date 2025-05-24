import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo1 from "../assets/Logo1.svg";
import formIcon from "../assets/formIcon.png";
import hambBtn from "../assets/hambBtn.png";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationsReady, setAnimationsReady] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Enhanced version for mobile devices
  const scrollToSection = (sectionId) => {
    console.log("Scrolling to section:", sectionId); // For debugging
    
    // Small delay to ensure menu closes first
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 75,
          behavior: "smooth",
        });
      } else {
        console.error("Section not found:", sectionId);
      }
    }, 100);
    
    // Close mobile menu immediately
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Initialize animations after component mounts
  useEffect(() => {
    // Slight delay to ensure DOM is fully ready
    const timer = setTimeout(() => {
      setAnimationsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants - using only opacity with slower transitions
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1.0,
      },
    },
  };

  // Direct handlers for mobile menu navigation
  const handleGameProgrammingClick = () => scrollToSection("game-programming");
  const handle3DArtClick = () => scrollToSection("3d-art");
  const handleGraphicDesignClick = () => scrollToSection("graphic-design");
  const handleVideoEditingClick = () => scrollToSection("video-editing");
  const handleWebDesignClick = () => scrollToSection("web-design");

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-blue-900/90 backdrop-blur-sm "
            : " md:bg-transparent bg-white/[0.15] "
        } h-[61px] md:h-[61px] ${scrolled ? "md:h-[75px]" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center justify-between h-full py-10">
            <motion.div
              className="flex-shrink-0 cursor-pointer"
              onClick={scrollToTop}
              initial="hidden"
              animate={animationsReady ? "visible" : "hidden"}
              variants={logoVariants}
            >
              <img
                src={Logo1}
                alt="logo"
                className="w-[63px] h-[63px] object-contain"
              />
            </motion.div>

            {/* Center Navigation Links */}
            <motion.div
              className="flex items-center w-full lg:mx-[112px] mx-5 justify-between font-orbitron font-[700] text-[0.25rem] lg:text-[14px] lg:space-x-8 space-x-2"
              initial="hidden"
              animate={animationsReady ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div
                className="text-white hover:text-blue-200 cursor-pointer"
                onClick={() => scrollToSection("game-programming")}
                variants={linkVariants}
                whileHover={{ scale: 1.05 }}
              >
                Game Programming
              </motion.div>
              <motion.div
                className="text-white hover:text-blue-200 cursor-pointer"
                onClick={() => scrollToSection("3d-art")}
                variants={linkVariants}
                whileHover={{ scale: 1.05 }}
              >
                3D ART
              </motion.div>
              <motion.div
                className="text-white hover:text-blue-200 cursor-pointer"
                onClick={() => scrollToSection("graphic-design")}
                variants={linkVariants}
                whileHover={{ scale: 1.05 }}
              >
                Graphic Design
              </motion.div>
              <motion.div
                className="text-white hover:text-blue-200 cursor-pointer"
                onClick={() => scrollToSection("video-editing")}
                variants={linkVariants}
                whileHover={{ scale: 1.05 }}
              >
                Video Editing
              </motion.div>
              <motion.div
                className="text-white hover:text-blue-200 cursor-pointer"
                onClick={() => scrollToSection("web-design")}
                variants={linkVariants}
                whileHover={{ scale: 1.05 }}
              >
                Web Design
              </motion.div>
            </motion.div>

            {/* Form Icon on Right */}
            <motion.div
              className="flex-shrink-0 w-[22.11px] h-[22.11px] border-1 border-white rounded-full flex items-center justify-center cursor-pointer"
              onClick={toggleModal}
              initial="hidden"
              animate={animationsReady ? "visible" : "hidden"}
              variants={iconVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={formIcon}
                alt="Contact Form"
                className="w-[12px] h-[12px] object-contain"
              />
            </motion.div>
          </div>

          {/* Mobile Navbar */}
          <div className="flex md:hidden items-center justify-between h-full">
            <motion.div
              className="flex-shrink-0 cursor-pointer"
              onClick={scrollToTop}
              style={{ display: "flex", alignItems: "center" }}
              initial={{ opacity: 0 }}
              animate={animationsReady ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={Logo1}
                alt="logo"
                className="w-[36px] h-[36px] object-contain"
                style={{ display: "block" }}
              />
            </motion.div>

            {/* Form Icon (Center) */}
            <motion.div
              className="flex-shrink-0 cursor-pointer"
              onClick={toggleModal}
              style={{ display: "flex", alignItems: "center" }}
              initial={{ opacity: 0 }}
              animate={animationsReady ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={formIcon}
                alt="Contact Form"
                className="w-[24px] h-[24px] object-contain"
                style={{ display: "block" }}
              />
            </motion.div>

            {/* Hamburger Button (Right) */}
            <motion.div
              className="flex-shrink-0"
              style={{ display: "flex", alignItems: "center" }}
              initial={{ opacity: 0 }}
              animate={animationsReady ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={toggleMenu}
                className="focus:outline-none"
                style={{ display: "block" }}
              >
                <img
                  src={hambBtn}
                  alt="Menu"
                  className="w-[24px] h-[24px] object-contain"
                  style={{ display: "block" }}
                />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile menu dropdown with direct handlers */}
        <motion.div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-64" : "max-h-0"
          }`}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/[0.15] backdrop-blur-sm">
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
              >
                <motion.button
                  className="text-white hover:text-blue-200 cursor-pointer p-2 w-full text-left"
                  onClick={handleGameProgrammingClick}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Game Programming
                </motion.button>
                <motion.button
                  className="text-white hover:text-blue-200 cursor-pointer p-2 w-full text-left"
                  onClick={handle3DArtClick}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  3D ART
                </motion.button>
                <motion.button
                  className="text-white hover:text-blue-200 cursor-pointer p-2 w-full text-left"
                  onClick={handleGraphicDesignClick}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Graphic Design
                </motion.button>
                <motion.button
                  className="text-white hover:text-blue-200 cursor-pointer p-2 w-full text-left"
                  onClick={handleVideoEditingClick}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                >
                  Video Editing
                </motion.button>
                <motion.button
                  className="text-white hover:text-blue-200 cursor-pointer p-2 w-full text-left"
                  onClick={handleWebDesignClick}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Web Design
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </nav>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
