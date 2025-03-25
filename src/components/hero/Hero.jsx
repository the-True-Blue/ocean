import { useState } from "react";
import React from "react";
import heroImage from "../../assets/hero/hero.png";
import heromobile from "../../assets/hero/heromobile.png";
import ExploreBtn from "../ExploreBtn";
import Modal from "./Modal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoSrc = "https://www.youtube.com/embed/your-video-id";

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="h-[724px] md:h-screen relative w-full">
      {/* Imagen para Mobile (visible solo en pantallas pequeñas) */}
      <div
        className="absolute inset-0 md:hidden w-full"
        style={{
          backgroundImage: `url(${heromobile})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      ></div>

      {/* Imagen para Desktop (oculta en pantallas pequeñas) */}
      <div
        className="absolute h-full inset-0 bg-center bg-cover bg-no-repeat hidden md:block "
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center gap-[19px] text-white">
        <h1
          className="text-[36px] md:text-[55px] font-spartan font-600 mb-0 mt-[257px] md:mt-[230px]"
          style={{
            background:
              "linear-gradient(272.38deg, #FFFFFF 46.06%, #A9EAFA 81.53%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          WELCOME
        </h1>
        <ExploreBtn
          text="Explore"
          className="font-orbitron font-[700px] text-[15px]"
          onClick={openModal}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 hidden md:flex flex-col items-center  mb-0 pt-[480px]">
        <h1 className="text-[32px]  font-poppins tracking-[15px] [text-shadow:_0_4px_4px_rgb(225_255_255_/_0.25)] md:text-[55px] text-[#094058] font-[800]  drop-shadow-lg">
          5 + YEARS
        </h1>
        <div className="mt-[27px]  flex items-center text-[#FFFFFF] text-xl font-aldrich">
          <div
            className="flex 
          "
          >
            <h2 className="border-l-1 px-2">Game Designer</h2>
            <h2 className="border-l-1 px-2">Video Editor</h2>
            <h2 className="border-l-1 border-r-1 px-2">Software Engineer</h2>
          </div>
          <h2 className="border-r-1 px-2">3D Generalist</h2>
        </div>
        <h1 className="text-[52px] font-poppins text-white font-[800] tracking-[7px] [text-shadow:_0_4px_4px_rgb(225_255_255_/_0.25)] drop-shadow-lg mt-[37px]">
          OF EXPERIENCE
        </h1>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={videoSrc}
      />
    </div>
  );
};

export default Hero;
