import React from "react";
import Logo1 from "../assets/Logo1.svg";
import instagramIcon from "../assets/footer/instagram.svg";
import linkedinIcon from "../assets/footer/linkedin.svg";
import tiktokIcon from "../assets/footer/tiktok.svg";
import background from "../assets/footer/background.png";
import backgroundMobile from "../assets/footer/background_mobile.png";

const Footer = () => {
  // Función para navegar al Hero (inicio)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-[620px] md:h-[750px] relative">
      {/* Fondo para móvil (visible en pantallas pequeñas) */}
      <div
        className="absolute w-full h-full bg-no-repeat bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${backgroundMobile})` }}
      ></div>

      {/* Fondo para desktop (oculto en pantallas pequeñas) */}
      <div
        className="absolute w-full h-full bg-no-repeat bg-center hidden md:block md:bg-cover xl:!bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="absolute pt-[15px] ps-[17px] md:pt-20">
        {/* Logo con navegación al Hero */}
        <img
          src={Logo1}
          alt="logo"
          className="mb-15 cursor-pointer"
          onClick={scrollToTop}
        />
        <div className="md:ps-[66px] flex flex-col items-start gap-3 font-orbitron text-white font-[700] [text-shadow:_3px_6px_4px_rgba(52,140,240,1)] drop-shadow-xl">
          <h1 className="text-[24px] md:text-[32px]">Cool down</h1>
          <h1 className="text-[16px] md:text-[20px]">
            with <span className="text-[36px] md:text-[40px]">TEMPEST</span>
          </h1>
          <div className="flex flex-col md:flex-row md:gap-8 items-center gap-0 ms-5">
            <div className="flex gap-2 md:gap-8">
              <div className="bg-white/15 h-full rounded-full p-3">
                <a
                  href="https://www.linkedin.com/in/dominique-mccormack-4213791b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinIcon}
                    alt="linkedin-icon"
                    className="w-[33px]"
                  />
                </a>
              </div>
              <div className="bg-white/15 h-full rounded-full p-3">
                <a
                  href="https://www.instagram.com/tempestdigital_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagramIcon}
                    alt="instagram-icon"
                    className="invert w-[33px]"
                  />
                </a>
              </div>
            </div>
            <div className="bg-white/15 h-full rounded-full p-3">
              <a
                href="https://www.tiktok.com/@tempestdigital_?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tiktokIcon} alt="tiktok-icon" className="w-[33px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2 className="absolute font-inter font-[400] text-white bottom-8 text-center w-full drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
        © 2024 Designed by Tempest Digital, All rights reserved.
      </h2>
    </div>
  );
};

export default Footer;
