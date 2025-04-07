import React from "react";
import GameCarousel from "./GameCarousel";
import background from "../../assets/game_programming/background.png";
import Rive from "@rive-app/react-canvas";

const GameProgrammingSection = () => {
  return (
    <div
      id="game-programming-section"
      className="w-full md:h-[1260px] min-h-[822px] relative"
    >
      {/* Imagen para Desktop */}
      <div
        className="absolute inset-0 h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10 w-full">
        <h1
          className="font-orbitron font-black text-white text-[26.53px] text-center md:text-start md:ms-[48px]
          [text-shadow:_3px_6px_4px_rgba(52,140,240,1)] drop-shadow-xl pt-[46px]"
        >
          Game Programming
        </h1>

        <div className="w-full relative">
          <div className="w-[340px] md:w-[681px] h-[102px] absolute right-0 md:right-[48px] mt-[43px]">
            <h2 className="text-[16px] h-full flex items-center text-white font-rajdhani backdrop-blur-3xl p-7 border-3 border-[#FFFFFF47] border-r-0 md:border-r-3 md:rounded-full rounded-l-full">
              Discover my game dev projects developed in Unity, showcasing my
              skills in game design and programming.
            </h2>
          </div>
        </div>

        {/* Carrusel */}
        <div className="relative top-[350px] md:top-[180px] w-full flex justify-center">
          <div className="w-full max-w-[1200px]">
            <GameCarousel />
          </div>
        </div>

        {/* Animación de burbujas de Rive (en la esquina inferior derecha) */}
        <div className="absolute -bottom-80 left-0 md:left-50 w-[300px] h-[300px] z-20">
          <Rive
            src="src/assets/animations/untitled.riv"
            animations="Timeline 1"
            autoPlay={true}
          />
        </div>
      </div>

      {/* Espacio adicional para móvil */}
      <div className="h-[200px] md:h-0 w-full"></div>
    </div>
  );
};

export default GameProgrammingSection;
