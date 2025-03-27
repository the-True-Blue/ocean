import React, { useEffect, useRef, useState } from "react";
import { X, Play } from "lucide-react";
import YoutubeIcon from "../../assets/hero/youtube.png";
import profilePicture from "../../assets/hero/About-picture.png";
import check from "../../assets/hero/check.png";
import avatar from "../../assets/hero/avatar.png";
import videoPoster from "../../assets/hero/heroVideoPoster.png";

const Modal = ({ isOpen, onClose, videoSrc }) => {
  const modalRef = useRef(null);
  const aboutRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        aboutRef.current &&
        !aboutRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Handle escape key to close
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  // Función para iniciar la reproducción del video
  const handlePlayVideo = () => {
    setVideoPlaying(true);
  };

  // Reset video state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setVideoPlaying(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop global con efecto blur */}
      <div className="fixed inset-0 backdrop-blur-xs z-30"></div>

      {/* Contenedor del video */}
      <div className="h-screen w-full flex items-center justify-center fixed top-0 left-0 z-40">
        {/* Contenedor del modal */}
        <div
          ref={modalRef}
          className="absolute inset-0 z-50 flex flex-col items-center justify-start md:mt-[130px] mt-[250px] overflow-y-auto"
        >
          {/* Botón de cierre superior */}
          <button
            onClick={onClose}
            className="relative md:-right-82 md:top-1 top-3 -right-42 text-white rounded-full p-1 hover:bg-gray-700 transition-colors z-10"
            aria-label="Close modal"
          >
            <X size={26} />
          </button>
          <div className="md:w-[652px] md:h-[402px] w-[303.64px] h-[192px] max-w-[619.51px] mx-auto p-1 bg-gradient-to-r from-dark-blue to-light-blue rounded-xl overflow-hidden">
            <div className="bg-white rounded-[calc(0.75rem-0.25rem)] overflow-hidden">
              {/* Video header with title */}
              <div className="bg-white ps-3 py-1 flex items-center">
                <img
                  src={YoutubeIcon}
                  alt="Youtube-icon"
                  className="w-[53.33px] md:w-[120.49px]"
                />
              </div>
              {/* Video container with poster or iframe */}
              <div className="px-2 pb-2 pt-0 md:px-3 md:pb-3">
                {!videoPlaying ? (
                  <div
                    className="relative w-full md:h-[340.94px] h-[150.19px] rounded-xl cursor-pointer overflow-hidden"
                    onClick={handlePlayVideo}
                  >
                    <img
                      src={videoPoster}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="150.19"
                    src={`${videoSrc}${
                      videoSrc.includes("?") ? "&" : "?"
                    }autoplay=1`}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl md:h-[340.94px]"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección About me - segunda parte del modal */}
      <div className="h-screen mt-[270px] flex items-center justify-center fixed top-0 z-50">
        {/* Contenedor del about me */}
        <div
          ref={aboutRef}
          className="relative w-full flex flex-col items-center justify-start md:mt-[130px] mt-[250px]"
        >
          {/* Wrapper para centrar todo el contenido */}
          <div className="flex justify-center items-center w-full ps-28 md:px-8 lg:px-16">
            {/* Contenedor principal que incluye tanto el about me como la imagen */}
            <div className="relative mx-auto pl-16 md:pl-0 md:flex md:items-start md:gap-0 md:max-w-[1246px] md:justify-center md:w-full">
              {/* Botón de cierre - reposicionado */}
              <button
                onClick={onClose}
                className="absolute md:right-2 right-2 md:-top-10 top-2 text-white rounded-full p-1 hover:bg-gray-700 transition-colors z-[100] cursor-pointer"
                aria-label="Close modal"
              >
                <X size={26} className="hover:text-gray-300" />
              </button>

              {/* Profile picture and avatar container */}
              <div className="absolute -top-20 -left-0 md:relative md:top-0 md:left-0 md:max-w-[266px] z-10">
                <img
                  src={profilePicture}
                  alt="profilePicture"
                  className="w-[101px] h-[110px] object-fill md:w-full md:h-full md:max-w-[266px] md:max-h-[279px]"
                />
                <div className="relative md:bottom-10 bottom-5 flex items-center justify-center gap-1 bg-no-repeat w-[101px]  h-[39px] bg-cover md:bg-[url(src/assets/hero/profile_container2.png)] bg-[url(src/assets/hero/profile_container.png)] md:w-full md:h-[104px]">
                  <div className="flex flex-col gap-1 ">
                    <div className="flex flex-col items-start justify-center  w-fit ps-3">
                      <div className="flex gap-1 ">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="w-[15px] md:w-[34px]"
                        />
                        <div className="flex">
                          <h3 className="text-tiny font-rajdhani text-white md:text-[14px] flex justify-center">
                            @tempestdigital_
                          </h3>
                          {/* <img
                            src={check}
                            alt="check-icon"
                            className="w-[5px] h-[5px]  md:w-[10px] md:h-[10px]"
                          /> */}
                        </div>
                      </div>
                      <div className="hidden lg:flex flex-col gap-1 text-[16px] ">
                        <div className="flex gap-1">
                          <h3 className="font-rajdhani text-white border-l-1 border-r-1 px-1">
                            Game Programmer
                          </h3>
                          <h3 className="font-rajdhani text-white border-l-1 border-r-1 px-1">
                            3D Artist
                          </h3>
                        </div>
                        <div className="flex gap-1">
                          <h3 className="font-rajdhani text-white border-l-1 border-r-1 px-1">
                            Graphic Design
                          </h3>
                          <h3 className="font-rajdhani text-white border-l-1 border-r-1 px-1">
                            Video Editing
                          </h3>
                        </div>
                        <h3 className="font-rajdhani text-white border-l-1 border-r-1 px-1">
                          Web Design & UI/UX
                        </h3>
                      </div>
                    </div>
                    <div className="hidden">
                      <h2>Psalm 3</h2>
                      <h2>I AM UNDEFEATABLE</h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* About me box */}
              <div className="border border-[#616161] md:h-86 rounded-md ps-[60px] pe-[23px] py-[24px] font-inter text-white w-[271px] md:w-auto md:max-w-[946px] md:ps-[42px] bg-[#FFFFFF1A] backdrop-blur-2xl">
                <h1 className="text-[25.87px] font-[800] ">About me</h1>
                <p className="text-[11.64px] leading-[20.7px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum quis amet, faucibus lorem. Lectus amet odio quis sed
                  adipiscing adipiscing magna non. Nullam turpis faucibus
                  ridiculus suscipit. Et blandit suspendisse curabitur eu congue
                  dui ut.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Interdum quis amet, faucibus lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
