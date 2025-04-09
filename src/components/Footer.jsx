import React from "react";
import instagramIcon from "../assets/footer/instagram.svg";
import linkedinIcon from "../assets/footer/linkedin.svg";
import tiktokIcon from "../assets/footer/tiktok.svg";
import fiverIcon from "../assets/footer/Fiverr.png";
import background from "../assets/footer/background.png";
import backgroundMobile from "../assets/footer/background_mobile.png";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-[400px] md:h-[750px] relative">
      {/*  mobile Background */}

      {/* Desktop Background */}
      <div
        className="absolute w-full h-full bg-[length:125%_100%] bg-no-repeat   md:!bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="absolute pt-[15px] ps-[17px] md:pt-20">
        <div className="md:ps-[66px] mt-15 flex flex-col items-start gap-3 font-orbitron text-white font-[700] [text-shadow:_5px_5px_4px_rgba(255,255,255,0.51)] drop-shadow-xl">
          <h1 className="text-[24px] md:text-[32px]">Cool down</h1>
          <h1 className="text-[16px] md:text-[20px]">
            with <span className="text-[36px]  md:text-[40px]">TEMPEST</span>
          </h1>
          <div className="flex md:flex-col items-center gap-3 ms-5">
            <div className="flex gap-2 md:gap-8">
              <div className="bg-white/15 hover:bg-white/25 h-full rounded-full p-3 transition-all duration-300 hover:shadow-glow transform hover:scale-110 cursor-pointer">
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
              </div>
              <div className="bg-white/15 hover:bg-white/25 h-full rounded-full p-3 transition-all duration-300 hover:shadow-glow transform hover:scale-110 cursor-pointer">
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
              </div>
              <div className="bg-white/15 hover:bg-white/25 h-full rounded-full p-3 transition-all duration-300 hover:shadow-glow transform hover:scale-110 cursor-pointer">
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
              </div>
            </div>

            <div className="bg-white/15 hover:bg-white/25 h-full rounded-full p-3 transition-all duration-300 hover:shadow-glow transform hover:scale-110 cursor-pointer">
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
            </div>
          </div>
        </div>
      </div>
      <h2 className="absolute font-inter font-[400] md:text-[15px] text-[11px] text-white bottom-8 text-center w-full drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
        © 2024 Designed by Tempest Digital, All rights reserved.
      </h2>
    </div>
  );
};

export default Footer;
