import React from "react";
import rocket from "../../assets/video_editing/rocket.png";
import ps from "../../assets/video_editing/ps.png";
import pr from "../../assets/video_editing/pr.png";
import ae from "../../assets/video_editing/ae.png";
import ai from "../../assets/video_editing/ai.png";
import background from "../../assets/video_editing/background.png";

const VideoEditing = () => {
  return (
    <div className="w-full   h-[759px] relative overflow-hidden">
      <div
        className="absolute inset-0 h-full bg-center bg-cover md:-right-0 -right-[260px] bg-no-repeat md:bg-cover xl:!bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10 w-full">
        <h1
          className="font-orbitron flex items-center justify-center md:justify-end md:me-8 font-black text-white text-[26.53px] md:text-[40px] text-start 
          [text-shadow:_3px_6px_4px_rgba(52,140,240,1)] drop-shadow-xl pt-[46px]"
        >
          Video Editing & <br className="md:hidden" /> Post-production
        </h1>

        <div className=" relative">
          <div className="absolute  right-10 md:right-105 flex items-center justify-center mt-[43px] bg-[url(src/assets/video_editing/bubble.png)] bg-cover md:w-[262.53px] md:h-[230.53px] w-[135px] h-[130px] bg-no-repeat">
            <h2 className="text-[7px] md:text-[14px] md:w-52  text-center w-20 text-white font-orbitron leading-[1.5]">
              Explore my video editing and post-production portfolio using Adobe
              Creative Suite, with experience in animation and VFX.
            </h2>
          </div>
        </div>
        <div className="absolute top-[367px] md:top-35 md:right-20 md:translate-0 right-1/2 transform translate-x-1/2 flex items-center justify-center">
          <img
            src={rocket}
            alt="rocket"
            className="relative object-cover w-[195px] md:w-[290px] md:rotate-25"
          />
          <img
            src={ps}
            alt="ps"
            className="absolute -right-18 -z-10 md:top-45 md:-right-0 opacity-90"
          />
          <img
            src={ae}
            alt="ae"
            className="absolute -right-20 top-25 md:top-30 md:-right-0 md:-left-10 opacity-80"
          />
          <img
            src={pr}
            alt="pr"
            className="absolute -left-12  md:left-52 md:top-12 top-25 opacity-80"
          />
          <img
            src={ai}
            alt="ai"
            className="absolute -left-7 md:top-0 md:left-5 -z-10 opacity-90"
          />
        </div>
        <div className="top-125 right-38 absolute hidden md:block">
          <button className="text-white font-rajdhani font-[700] text-[48px] rounded-full px-[63px] py-[4px] bg-linear-to-r from-[#3BACE2] from-5% via-[#1270DC] via-75% to-[#4EF5FF] to-[100%] backdrop-blur-3xl;">
            View
          </button>
        </div>
      </div>
      <div className="bottom-[32px] md:hidden left-1/2 transform -translate-x-1/2 absolute">
        <button className="text-white font-rajdhani font-[700] text-[32px] rounded-4xl px-[49px] py-[4px] bg-linear-to-r from-[#3BACE2] from-5% via-[#1270DC] via-75% to-[#4EF5FF] to-[100%] backdrop-blur-3xl;">
          View
        </button>
      </div>
    </div>
  );
};

export default VideoEditing;
