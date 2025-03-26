import React from "react";
import element1 from "../../assets/game_programming/element1.png";
import check from "../../assets/hero/check.png";
import avatar from "../../assets/hero/avatar.png";
import arrow from "../../assets/hero/arrow.png";

const GameProgrammingSection = () => {
  return (
    <div
      id="game-programming-section"
      className="w-full md:h-[1260px] h-[822px] relative"
    >
      {/* Imagen para Mobile (visible solo en pantallas pequeñas) */}
      <div
        className="absolute inset-0 md:hidden w-full h-full bg-cover"
        style={{
          backgroundImage:
            "url(src/assets/game_programming/mobileBackground.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          height: "830px",
        }}
      ></div>

      {/* Imagen para Desktop (oculta en pantallas pequeñas) */}
      <div
        className="absolute inset-0 h-full bg-center bg-cover bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url(src/assets/game_programming/background.png)",
        }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10">
        <h1
          className="font-orbitron font-black text-white text-[26.53px] text-center 
          [text-shadow:_3px_6px_4px_rgba(52,140,240,1)] drop-shadow-xl pt-[46px]"
        >
          Game Development
        </h1>

        <div className="container relative">
          <div className="w-[340px]  absolute right-0 mt-[43px]">
            <h2 className="text-[16px] h-[102px] flex items-center text-white font-rajdhani backdrop-blur-3xl p-7 border-3 border-[#FFFFFF47] border-r-0 rounded-l-full">
              Discover my game dev projects developed in Unity, showcasing my
              skills in game design and programming.
            </h2>
          </div>
        </div>
        <div className="relative top-[515px] flex items-center justify-center">
          <div className="flex  items-center justify-center backdrop-blur-3xl w-[165px] h-[121px] bg-[#FFFFFF2D] border-4 border-[#FFFFFF47] rounded-4xl">
            <img
              src={element1}
              alt="element1"
              className="w-[127px] h-[107px]"
            />
          </div>
          <div className="items-center -ml-[40px] -z-10 justify-center backdrop-blur-3xl w-[175px] h-[121px] bg-[#FFFFFF2D] border-4 border-[#FFFFFF47] rounded-4xl">
            <div className="flex flex-col items-start h-full pl-10 ">
              <div className="flex flex-col h-full justify-evenly  gap-1 pe-3 py-[17px]">
                <div className="flex gap-2">
                  <div className="flex h-[15px]">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="w-[15px] object-contain md:w-[34px]"
                    />
                    <img
                      src={check}
                      alt="check-icon"
                      className="w-[5px] h-[5px] md:w-[10px] md:h-[10px]"
                    />
                  </div>
                  <div className="text-white">
                    <h2 className="text-[9px] font-[700]">
                      "Riley's Big Move"
                    </h2>
                    <h3 className="text-[6px] font-[600] font-rajdhani text-white md:text-[14px]">
                      @tempestdigital_
                    </h3>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="text-[7px] font-[700]">Main info text</h2>
                  <h3 className="text-[6px] font-rajdhani font-[600] text-white md:text-[14px]">
                    Details2 - ipsum isilum
                  </h3>
                </div>
                <button className="border-2 border-[#1F29AA]  w-[38px] ms-auto">
                  <div className=" font-rajdhani flex items-center gap-1 bg-linear-to-r px-[3px] from-[#1194CA] to-[#375191]">
                    <span className="font-medium text-white text-[8px]">
                      View
                    </span>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-[8.55px] h-[6px] object-contain"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameProgrammingSection;
