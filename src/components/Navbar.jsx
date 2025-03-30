import React, { useState, useEffect } from "react";
import Logo1 from "../assets/Logo1.svg";
import formIcon from "../assets/formIcon.png";
import hambBtn from "../assets/hambBtn.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para navegar suavemente a las secciones
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 75, // Ajuste para el navbar fijo
        behavior: "smooth",
      });
      setIsOpen(false); // Cierra el menú móvil después de hacer clic
    }
  };

  // Función para navegar al Hero (inicio)
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

  return (
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
          {/* Logo con navegación al Hero */}
          <div className="flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
            <img
              src={Logo1}
              alt="logo"
              className="w-[63px] h-[63px] object-contain"
            />
          </div>

          {/* Center Navigation Links */}
          <div className="flex items-center w-full lg:mx-[112px] mx-5 justify-between font-orbitron font-[700] text-[0.25rem]  lg:text-[14px] lg:space-x-8 space-x-2">
            <div
              className="text-white hover:text-blue-200 cursor-pointer"
              onClick={() => scrollToSection("game-programming")}
            >
              Game Programming
            </div>
            <div
              className="text-white hover:text-blue-200 cursor-pointer"
              onClick={() => scrollToSection("3d-art")}
            >
              3D ART
            </div>
            <div
              className="text-white hover:text-blue-200 cursor-pointer"
              onClick={() => scrollToSection("graphic-design")}
            >
              Graphic Design
            </div>
            <div
              className="text-white hover:text-blue-200 cursor-pointer"
              onClick={() => scrollToSection("video-editing")}
            >
              Video Editing
            </div>
            <div
              className="text-white hover:text-blue-200 cursor-pointer"
              onClick={() => scrollToSection("web-design")}
            >
              Web Design
            </div>
          </div>

          {/* Form Icon on Right */}
          <div className="flex-shrink-0 w-[22.11px] h-[22.11px] border-1 border-white rounded-full flex items-center justify-center">
            <img
              src={formIcon}
              alt="Contact Form"
              className="w-[12px] h-[12px] object-contain cursor-pointer"
              onClick={() => scrollToSection("contact")}
            />
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between h-full">
          {/* Logo (Left) con navegación al Hero */}
          <div className="flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
            <img
              src={Logo1}
              alt="logo"
              className="w-[36px] h-[36px] object-contain"
            />
          </div>

          {/* Form Icon (Center) */}
          <div className="flex-shrink-0">
            <img
              src={formIcon}
              alt="Contact Form"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              onClick={() => scrollToSection("contact")}
            />
          </div>

          {/* Hamburger Button (Right) */}
          <div className="flex-shrink-0">
            <button onClick={toggleMenu} className="focus:outline-none">
              <img
                src={hambBtn}
                alt="Menu"
                className="w-[24px] h-[24px] object-contain"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/[0.15] backdrop-blur-sm">
          <div
            className="text-white hover:text-blue-200 cursor-pointer p-2"
            onClick={() => scrollToSection("game-programming")}
          >
            Game Programming
          </div>
          <div
            className="text-white hover:text-blue-200 cursor-pointer p-2"
            onClick={() => scrollToSection("3d-art")}
          >
            3D ART
          </div>
          <div
            className="text-white hover:text-blue-200 cursor-pointer p-2"
            onClick={() => scrollToSection("graphic-design")}
          >
            Graphic Design
          </div>
          <div
            className="text-white hover:text-blue-200 cursor-pointer p-2"
            onClick={() => scrollToSection("video-editing")}
          >
            Video Editing
          </div>
          <div
            className="text-white hover:text-blue-200 cursor-pointer p-2"
            onClick={() => scrollToSection("web-design")}
          >
            Web Design
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
