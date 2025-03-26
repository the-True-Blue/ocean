import React from "react";

const Waterfall2 = () => {
  return (
    <div className="w-full h-[1260px] relative overflow-hidden">
      {/* Fondo con posicionamiento responsivo */}
      <div
        className="absolute w-[120%] h-full bg-cover bg-no-repeat bg-[url('src/assets/waterfall2/background.png')] 
                     md:w-full md:right-0 
                     sm:right-[-20%]"
      ></div>

      {/* Contenido */}
      <div className="relative z-10"></div>
    </div>
  );
};

export default Waterfall2;
