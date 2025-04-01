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
    <div className="relative min-h-190 md:min-h-fit flex flex-col items-center pb-16 -mb-2">
      {/* Fondo con gradiente mejorado */}
      <div className="absolute inset-0 w-full h-full">
        {/* Capa adicional para efecto radial en el centro */}
        <div className="absolute inset-0 w-full h-full bg-radial to-transparent opacity-70 1c29b7"></div>

        {/* Gradientes sutiles para las esquinas para mejor fusión */}
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-b from-[#083395] to-[#060757]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-[#060757] from-65% via-[#070862] via-80% to-[#0e1a97] to-100%"></div>
        <div className="absolute top-0 left-1/3 w-1/3 h-1/2 bg-gradient-to-b from-[#083395] to-[#060757]"></div>
        <div className="absolute bottom-0 left-1/3 w-1/6 h-1/2 bg-linear-[140deg,#060757,55%,#1d29b0] "></div>
        <div className="absolute bottom-0 right-1/3 w-1/6 h-1/2 bg-linear-[190deg,#060757,55%,#1d29b0] "></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-[#083395] to-[#060757]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-[#060757] from-5% via-[#03044e] via-74% to-[#1925aa] to-100%"></div>

        {/* Capa para puntos/estrellas - usando pseudo-elementos y CSS personalizado */}
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

      {/* Contenedor de tarjetas con efecto de superposición */}
      <div className="relative flex items-center justify-center mt-8 w-full z-30">
        {/* Tarjeta central */}
        <div className="relative z-30 mx-auto scale-[0.65] xs:scale-75 sm:scale-80 lg:scale-100 origin-center">
          <div className="rounded-3xl overflow-hidden">
            <img src={centerImg} alt="center image" className="w-[469px]" />
          </div>

          {/* Tarjeta derecha */}
          <div className="absolute md:-right-20 right-10 md:top-15 top-52 -z-10 transform translate-x-1/2">
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

          {/* Tarjeta izquierda */}
          <div className="absolute md:-left-20 left-10 md:top-15 top-52 -z-10 transform -translate-x-1/2">
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

      {/* CSS para los puntos/estrellas - usando estilos en línea para no tener que modificar tu archivo CSS */}
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
