import React, { useState } from "react";
import rectangle from "../../assets/graphic_design/Rectangle.png";
import centerImg from "../../assets/graphic_design/center_img.png";
import leftImg from "../../assets/graphic_design/left_img.png";
import rightImg from "../../assets/graphic_design/right_img.png";
import instagramIcon from "../../assets/graphic_design/instagram_icon.png";
import check from "../../assets/hero/check.png";
import avatar from "../../assets/hero/avatar.png";

const GraphicDesign = () => {
  const [hoverCenter, setHoverCenter] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <div className="relative md:min-h-fit flex flex-col items-center pb-35 -mb-2">
      {/* Background with improved gradient */}
      <div className="absolute inset-0 w-full h-full">
        {/* Additional layer for radial effect in the center */}
        <div className="absolute inset-0 w-full h-full bg-[#060757]"></div>

        {/* Subtle gradients for corners for better blending */}
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-b from-[#083395] to-[#060757]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#060757] from-65% via-[#070862] via-68% to-[#212eb4] to-100%"></div>
        <div className="absolute top-0 left-1/3 w-1/3 h-1/2  bg-gradient-to-b from-[#083395] to-[#060757]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-[#083395] to-[#060757]"></div>
        <div className="absolute  bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#060757] from-65% via-[#070862] via-30% to-[#212eb4] to-100%"></div>

        {/* Layer for dots/stars - using pseudo-elements and custom CSS */}
        <div className="absolute inset-0 w-full h-full opacity-40 stars-background"></div>
        <div
          className="absolute inset-0 w-full h-full opacity-20 stars-background-small"
          style={{ animationDelay: "-3s" }}
        ></div>
        <div
          className="absolute inset-0 w-full h-full opacity-15 stars-background-tiny"
          style={{ animationDelay: "-5s" }}
        ></div>
      </div>

      <div className="w-full max-w-6xl px-4 md:pl-16 mt-10 relative z-10">
        <h1 className="text-white font-orbitron text-[32px] md:text-[40px] font-[900] [text-shadow:_3px_6px_4px_rgba(52,140,240,1)] drop-shadow-xl">
          Graphic Design
        </h1>
      </div>

      {/* Card container with overlay effect */}
      <div className="relative flex items-center justify-center mt-8 w-full z-30 ">
        {/* Center card */}
        <div className="relative z-30 mx-auto scale-[0.65] xs:scale-75 sm:scale-80 lg:scale-100 origin-center">
          <div
            className="rounded-3xl overflow-hidden transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoverCenter(true)}
            onMouseLeave={() => setHoverCenter(false)}
            style={{
              boxShadow: hoverCenter
                ? "0 0 25px 5px rgba(251, 55, 255, 0.4)"
                : "none",
            }}
          >
            <img src={centerImg} alt="center image" className="w-[469px]" />
          </div>

          {/* Right card */}
          <div className="absolute md:-right-20 right-10 md:top-15 top-52 -z-10 transform translate-x-1/2">
            <div
              className="relative rounded-3xl overflow-hidden transition-all duration-300 ease-in-out"
              onMouseEnter={() => setHoverRight(true)}
              onMouseLeave={() => setHoverRight(false)}
              style={{
                boxShadow: hoverRight
                  ? "0 0 25px 5px rgba(251, 55, 255, 0.4)"
                  : "none",
              }}
            >
              <img src={rectangle} alt="bg-rectangle" className="w-64" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={rightImg}
                  alt="right image"
                  className="w-full scale-170 h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Left card */}
          <div className="absolute md:-left-20 left-10 md:top-15 top-52 -z-10 transform -translate-x-1/2">
            <div
              className="relative rounded-3xl overflow-hidden transition-all duration-300 ease-in-out"
              onMouseEnter={() => setHoverLeft(true)}
              onMouseLeave={() => setHoverLeft(false)}
              style={{
                boxShadow: hoverLeft
                  ? "0 0 25px 5px rgba(251, 55, 255, 0.4)"
                  : "none",
              }}
            >
              <img src={rectangle} alt="bg-rectangle" className="w-64" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={leftImg}
                  alt="left image"
                  className="w-full scale-110 h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for stars - using inline styles to avoid modifying CSS file */}
      <style jsx>{`
        .stars-background {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #77a0ff,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(2px 2px at 40px 70px, #a1b8ff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #5d99ff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #8bb3ff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #4f7df2, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 160px 120px, #97c1ff, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 4s ease-in-out infinite alternate;
        }

        .stars-background-small {
          background-image: radial-gradient(
              1px 1px at 10px 10px,
              #77a0ff,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(1px 1px at 150px 150px, #a1b8ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 100px 50px, #5d99ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 60px 120px, #8bb3ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 175px 55px, #4f7df2, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 20px 180px, #97c1ff, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite alternate;
        }

        .stars-background-tiny {
          background-image: radial-gradient(
              1px 1px at 45px 45px,
              #77a0ff,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(1px 1px at 95px 95px, #a1b8ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 145px 25px, #5d99ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 195px 155px, #8bb3ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 85px 185px, #4f7df2, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 6s ease-in-out infinite alternate;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.4;
          }
          100% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default GraphicDesign;
