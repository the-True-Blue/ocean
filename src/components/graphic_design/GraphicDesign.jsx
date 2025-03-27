import React from "react";
import rectangle from "../../assets/graphic_design/Rectangle.png";
import centerImg from "../../assets/graphic_design/center_img.png";
import leftImg from "../../assets/graphic_design/left_img.png";
import rightImg from "../../assets/graphic_design/right_img.png";
import instagramIcon from "../../assets/graphic_design/instagram_icon.png";
import check from "../../assets/hero/check.png";
import avatar from "../../assets/hero/avatar.png";

const GraphicDesign = () => {
  return (
    <div className="h-[619px] hidden md:flex flex-col items-center bg-radial from-[#0445A5] to-[#031150] bg-cover">
      <div className="w-full max-w-6xl pl-16 mt-10">
        <h1 className="text-white font-orbitron text-[40px] font-[900] [text-shadow:_3px_6px_4px_rgba(52,140,240,1)] drop-shadow-xl">
          Graphic Design
        </h1>
      </div>

      {/* Contenedor de tarjetas con efecto de superposición */}
      <div className="relative flex items-center justify-center mt-8 w-full z-30">
        {/* Tarjeta central (al frente) con z-index más alto */}
        <div className="relative z-30 mx-auto">
          <div className="rounded-3xl overflow-hidden">
            <img src={centerImg} alt="center image" className="w-[469px]" />
          </div>

          {/* Tarjeta derecha (atrás) con z-index más bajo */}
          <div className="absolute -right-20 top-15 -z-10 transform translate-x-1/2">
            <div className="relative rounded-3xl overflow-hidden">
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

          {/* Tarjeta izquierda (atrás) con z-index más bajo */}
          <div className="absolute top-15 -left-20 -z-10 transform -translate-x-1/2">
            <div className="relative rounded-3xl overflow-hidden">
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

      {/* Contenedor de texto con esquinas recortadas */}
      <div className="relative mt-0 w-[359px] max-w-xl">
        <div className="relative backdrop-blur-4xl p-6 rounded-lg border-[#FFFFFF47] border">
          {/* Pseudoelementos para las esquinas recortadas */}
          <div className="absolute top-0 left-0 w-8 h-8 bg-transparent rounded-tl-xl transform -translate-x-2 -translate-y-2"></div>
          <div className="absolute top-0 right-0 w-8 h-8 bg-transparent rounded-tr-xl transform translate-x-2 -translate-y-2"></div>

          {/* Contenido del texto */}
          <div className="flex flex-col items-start">
            <div className="flex gap-2">
              <img src={avatar} alt="avatar-icon" />
              <div className="flex">
                <p className="text-white font-[600] font-rajdhani text-[14px]">
                  @tempestdigital
                </p>
                <img
                  src={check}
                  alt="check-icon"
                  className="w-[15px] object-contain"
                />
              </div>
            </div>
            <p className="text-white text- font-rajdhani [16px] mt-1">
              Come check out my graphic designs of logos, ads, banners, flyers
              and more on my IG!
            </p>
          </div>
        </div>

        {/* Logo de Instagram que sale del contenedor */}
        <div className="absolute  border-[#6f75b6be] border-10  -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center">
          <img
            src={instagramIcon}
            alt="Instagram"
            className="w-8 h-8 object-cover -p-5"
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
