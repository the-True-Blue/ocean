import React from "react";
import Logo1 from "../assets/Logo1.svg";
import instagramIcon from "../assets/footer/instagram.svg";
import linkedinIcon from "../assets/footer/linkedin.svg";
import tiktokIcon from "../assets/footer/tiktok.svg";

const Footer = () => {
  return (
    <div className="w-full h-[620px] md:h-[750px] relative">
      <div className="absolute w-full h-full bg-no-repeat bg-cover bg-center md:bg-[url('src/assets/footer/background.png')] bg-[url('src/assets/footer/background_mobile.png')]"></div>
      <div className="absolute pt-[15px] ps-[17px] md:pt-20">
        <img src={Logo1} alt="logo" className="mb-15" />
        <div className="md:ps-[66px] flex flex-col items-start gap-3 font-orbitron text-white font-[700] [text-shadow:_3px_6px_4px_rgba(52,140,240,1)] drop-shadow-xl">
          <h1 className="text-[24px] md:text-[32px]">Cool down</h1>
          <h1 className="text-[16px] md:text-[20px]">
            with <span className="text-[36px] md:text-[40px]">TEMPEST</span>
          </h1>
          <div className="flex flex-col md:flex-row md:gap-8 items-center gap-0 ms-5">
            <div className="flex gap-2 md:gap-8">
              <div className="bg-white/15 h-full rounded-full p-3">
                <img src={linkedinIcon} className="w-[33px]" />
              </div>
              <div className="bg-white/15 h-full rounded-full p-3">
                <img
                  src={instagramIcon}
                  alt="instagram-icon"
                  className="invert w-[33px]"
                />
              </div>
            </div>
            <div className="bg-white/15 h-full rounded-full p-3">
              <img src={tiktokIcon} alt="tiktok-icon" className="w-[33px]" />
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
