import React from "react";

const GameProgrammingSection = () => {
  return (
    <div id="game-programming-section" className="w-full min-h-screen relative">
      {/* Imagen para Mobile (visible solo en pantallas pequeñas) */}
      <div
        className="absolute inset-0 md:hidden w-full h-[830px]"
        style={{
          backgroundImage:
            "url(src/assets/game_programming/mobileBackground.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
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
          className="font-orbitron font-black text-white text-center 
          [text-shadow:_3px_6px_4px_rgba(52,140,240,1)] drop-shadow-xl"
        >
          Game Programming
        </h1>

        {/* Content for the game programming section goes here */}
        <div className="container mx-auto px-4 mt-12">
          {/* Add your content here */}
        </div>
      </div>
    </div>
  );
};

export default GameProgrammingSection;
