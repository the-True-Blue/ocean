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
          ? "bg-blue-900/90 backdrop-blur-sm"
          : "bg-transparent md:bg-transparent bg-white/[0.15]"
      }`}
      style={{ height: "61px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between py-[14px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={Logo1}
              alt="logo"
              className="w-[63px] h-[63px] object-contain"
            />
          </div>

          {/* Center Navigation Links */}
          <div className="flex items-center w-full lg:mx-[112px] mx-5 justify-between font-orbitron font-[700] text-[0.25rem]  lg:text-[14px] lg:space-x-8 space-x-2">
            <div className="text-white hover:text-blue-200  cursor-pointer">
              Game Programming
            </div>
            <div className="text-white hover:text-blue-200 cursor-pointer">
              About
            </div>
            <div className="text-white hover:text-blue-200 cursor-pointer">
              Graphic Design
            </div>
            <div className="text-white hover:text-blue-200  cursor-pointer">
              Video Editing
            </div>
            <div className="text-white hover:text-blue-200 cursor-pointer">
              Web Design
            </div>
          </div>

          {/* Form Icon on Right */}
          <div className="flex-shrink-0 w-[22.11px] h-[22.11px] border-1 border-white rounded-full flex items-center justify-center">
            <img
              src={formIcon}
              alt="Contact Form"
              className="w-[12px] h-[12px] object-contain cursor-pointer"
            />
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between h-16">
          {/* Logo (Left) */}
          <div className="flex-shrink-0">
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
          <div className="text-white hover:text-blue-200  cursor-pointer">
            Game Programming
          </div>
          <div className="text-white hover:text-blue-200 cursor-pointer">
            About
          </div>
          <div className="text-white hover:text-blue-200 cursor-pointer">
            Graphic Design
          </div>
          <div className="text-white hover:text-blue-200  cursor-pointer">
            Video Editing
          </div>
          <div className="text-white hover:text-blue-200 cursor-pointer">
            Web Design
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
