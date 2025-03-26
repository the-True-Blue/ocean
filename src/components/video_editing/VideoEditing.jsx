import React from "react";
import rocket from "../../assets/video_editing/rocket.png";
import ps from "../../assets/video_editing/ps.png";
import pr from "../../assets/video_editing/pr.png";
import ae from "../../assets/video_editing/ae.png";
import ai from "../../assets/video_editing/ai.png";

const VideoEditing = () => {
  return (
    <div className="w-full md:h-[1260px]  h-[759px] relative overflow-hidden">
      <div className="absolute inset-0 h-full bg-center md:-right-0 -right-[260px] bg-cover bg-no-repeat bg-[url('src/assets/video_editing/background.png')]"></div>

      {/* Contenido */}
      <div className="relative z-10">
        <h1
          className="font-orbitron flex items-center justify-center font-black text-white text-[26.53px] text-start 
          [text-shadow:_3px_6px_4px_rgba(52,140,240,1)] drop-shadow-xl pt-[46px]"
        >
          Video Editing & <br /> Post-production
        </h1>

        <div className="container relative">
          <div className="absolute right-10 flex items-center justify-center mt-[43px] bg-[url(src/assets/video_editing/bubble.png)] bg-cover w-[135px] h-[130px] bg-no-repeat">
            <h2 className="text-[7px] text-center w-20 text-white font-orbitron leading-[1.5]">
              Explore my video editing and post-production portfolio using Adobe
              Creative Suite, with experience in animation and VFX.
            </h2>
          </div>
        </div>
        <div className="relative top-[280px] flex items-center justify-center">
          <img
            src={rocket}
            alt="rocket"
            className="relative object-cover w-[195px]"
          />
          <img
            src={ps}
            alt="ps"
            className="absolute right-10 -z-10 opacity-90"
          />
          <img
            src={ae}
            alt="ae"
            className="absolute right-8 top-25 opacity-80"
          />
          <img
            src={pr}
            alt="pr"
            className="absolute left-16 top-25 opacity-80"
          />
          <img
            src={ai}
            alt="ai"
            className="absolute left-18 -z-10 opacity-90"
          />
        </div>
      </div>
      <div className="bottom-[32px] left-1/2 transform -translate-x-1/2 absolute">
        <button className="text-white font-rajdhani font-[700] text-[32px] rounded-4xl px-[49px] py-[4px] bg-linear-to-r from-[#3BACE2] from-5% via-[#1270DC] via-75% to-[#4EF5FF] to-[100%] backdrop-blur-3xl;">
          View
        </button>
      </div>
    </div>
  );
};

export default VideoEditing;
