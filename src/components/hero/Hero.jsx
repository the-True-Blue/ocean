import { useState } from "react";
import React from "react";
import heroImage from "../../assets/hero/hero.png";
import ExploreBtn from "../ExploreBtn";
import AboutModal from "./AboutModal";
import VideoModal from "./VideoModal";

const Hero = () => {
  // Estados separados para cada modal
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoSrc = "https://www.youtube.com/embed/your-video-id";

  // Funciones para manejar el modal About
  const openAboutModal = () => {
    setIsAboutModalOpen(true);
    // Asegúrate de que el modal de video esté cerrado cuando se abre el About
    setIsVideoModalOpen(false);
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  // Funciones para manejar el modal Video
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="h-[1285px] relative w-full">
      {/* Imagen para Desktop */}
      <div
        className="absolute inset-0 h-full bg-center bg-no-repeat bg-cover xl:!bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Contenido superior */}
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
          onClick={openAboutModal}
        />
      </div>

      {/* Contenido de experiencia */}
      <div className="relative z-10 flex flex-col items-center mb-0 pt-[480px]">
        <h1 className="text-[32px] font-poppins tracking-[15px] [text-shadow:_0_4px_4px_rgb(225_255_255_/_0.25)] md:text-[55px] text-[#094058] font-[800] drop-shadow-lg">
          5 + YEARS
        </h1>
        <div className="mt-[27px] gap-[33px] md:gap-0 flex flex-col md:flex-row items-center text-[#FFFFFF] md:text-xl text-[12px] font-aldrich">
          <div className="flex">
            <h2 className="border-l-1 px-2">Game Designer</h2>
            <h2 className="border-l-1 px-2">Video Editor</h2>
            <h2 className="border-l-1 border-r-1 px-2">Software Engineer</h2>
          </div>
          <h2 className="border-r-1 px-2">3D Generalist</h2>
        </div>
        <h1 className="md:text-[52px] text-[32px] font-poppins text-white font-[800] tracking-[7px] [text-shadow:_0_4px_4px_rgb(225_255_255_/_0.25)] drop-shadow-lg mt-[37px]">
          OF EXPERIENCE
        </h1>
      </div>

      {/* Modal About Me */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={closeAboutModal}
        onOpenVideo={openVideoModal}
      />

      {/* Modal Video (independiente del About) */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoSrc={videoSrc}
      />
    </div>
  );
};

export default Hero;
