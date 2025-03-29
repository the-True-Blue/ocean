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
      <div className="fixed inset-0 backdrop-blur-xs z-30 h-screen "></div>

      <div className="h-screen w-full  fixed top-0 left-0 z-40 ">
        {/* Contenedor del modal */}
        <div
          ref={modalRef}
          className="absolute inset-0 z-50 flex flex-col items-center gap-40 py-60 justify-start "
        >
          <div className="flex flex-col items-center justify-center">
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
          {/* About Desktop */}
          <div className="hidden md:block h-full px-10 ">
            <div className="flex w-full xl:h-[374px]">
              <div className="max-w-[266px] h-auto object-contain relative">
                <img
                  src={profilePicture}
                  alt="profile-picture"
                  className="w-full "
                />
                {/* Contenedor padre para posicionamiento */}
                <div className="absolute md:-bottom-0 max-w-[266px] w-full">
                  {/* Capa de borde */}
                  <div className="absolute rounded-xl inset-0 -m-0.5 [clip-path:polygon(30px_0%,100%_0%,100%_100%,0%_100%,0%_30px)] bg-[#729a9f] z-0"></div>

                  {/* Capa de contenido */}
                  <div className="relative lg:ps-[19px] lg:pe-[19px] rounded-xl [clip-path:polygon(30px_0%,100%_0%,100%_100%,0%_100%,0%_30px)] flex flex-col p-3 items-start bg-[linear-gradient(170deg,#6a7fac_0%,#305798_30%,#0933b9_60%)] gap-2 z-10">
                    <div className="flex gap-2">
                      <img src={avatar} alt="avatar-icon" />
                      <div className="flex">
                        <h3
                          className="text-white font-rajdhani text-[8px] font-[600] md:text-[14.92px]"
                          style={{
                            WebkitTextStroke: "1.7px #FFFFFF47",
                            textStroke: "1.7px #FFFFFF47",
                          }}
                        >
                          @tempestdigital_
                        </h3>
                        <img
                          src={check}
                          alt="chack-icon"
                          className="w-[5px] object-contain"
                        />
                      </div>
                    </div>
                    <div
                      className="flex w-full flex-col gap-1 text-white  font-[600] font-rajdhani xl:text-[16px] text-xs"
                      style={{
                        WebkitTextStroke: "1.7px #FFFFFF47",
                        textStroke: "1.7px #FFFFFF47",
                      }}
                    >
                      <div className="flex justify-between ">
                        <h3 className="border-s-1 border-e-1 px-1">
                          Game Programmer
                        </h3>
                        <h3 className="border-s-1 border-e-1 px-1">
                          3D Artist
                        </h3>
                      </div>
                      <div className="flex justify-between">
                        <h3 className="border-s-1 border-e-1 px-1">
                          Graphic Design
                        </h3>
                        <h3 className="border-s-1 border-e-1 px-1">
                          Video Editing
                        </h3>
                      </div>
                      <h3 className="border-s-1 border-e-1 px-1">
                        Web Design & UI/UX
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[946px] w-full h-full font-inter ps-[60px] py-[24px] pe-[24px] text-white about-me-border backdrop-blur-xl bg-blue-500/10 ">
                <h1 className="text-[25px] font-[800]">About Me</h1>
                <p className="text-[11px] font-[400]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum quis amet, faucibus lorem. Lectus amet odio quis sed
                  adipiscing adipiscing magna non. Nullam turpis faucibus
                  ridiculus suscipit. Et blandit suspendisse curabitur eu congue
                  dui ut.Lorem ipsum dolor sit amet, consectetur cipit. Et
                  blandit suspendisse curabitur eu congue dui ut.Lorem bitur eu
                  congue dui ut.Et blandit suspendisse curabitur eu congue dui
                  ut.Et blandit suspendisse curabitur eu congue dui ut.Et
                  blandit suspendisse curabitur eu.
                </p>
                <div className="flex items-center justify-end gap-2 mt-5">
                  <Play className="w-4 fill-white"></Play>
                  <h3 className="text-[10px]">Intro</h3>
                </div>
              </div>
            </div>
          </div>
          {/* About Mobile */}
          <div className="md:hidden">
            <div className="relative w-80">
              <div className="w-[101px] h-full relative">
                <img
                  src={profilePicture}
                  alt="profile-picture"
                  className="w-full "
                />
                {/* Contenedor padre para posicionamiento */}
                <div className="absolute -bottom-5 w-[101px]">
                  {/* Capa de borde */}
                  <div className="absolute rounded-xl inset-0 -m-0.5 [clip-path:polygon(15px_0%,100%_0%,100%_100%,0%_100%,0%_15px)] bg-[#729a9f] z-0"></div>

                  {/* Capa de contenido */}
                  <div className="relative rounded-xl [clip-path:polygon(15px_0%,100%_0%,100%_100%,0%_100%,0%_15px)] flex px-2 py-3 items-center bg-gradient-to-r from-[rgb(37_150_190)] to-[#4c8284] gap-2 z-10">
                    <img src={avatar} alt="avatar-icon" className="w-[18px]" />
                    <div className="flex">
                      <h3 className="text-white font-rajdhani text-[8px]">
                        @tempestdigital_
                      </h3>
                      <img
                        src={check}
                        alt="chack-icon"
                        className="w-[5px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[271px] absolute left-15 top-15 -z-10 font-inter ps-[60px] py-[24px] pe-[24px] text-white about-me-border bg-linear-to-b from-[#53b1ba] via-[#1f8aa8] to-[#274f79] ">
                <h1 className="text-[25px] font-[800]">About Me</h1>
                <p className="text-[11px] font-[400]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum quis amet, faucibus lorem. Lectus amet odio quis sed
                  adipiscing adipiscing magna non. Nullam turpis faucibus
                  ridiculus suscipit. Et blandit suspendisse curabitur eu congue
                  dui ut.Lorem ipsum dolor sit amet, consectetur cipit. Et
                  blandit suspendisse curabitur eu congue dui ut.Lorem bitur eu
                  congue dui ut.Et blandit suspendisse curabitur eu congue dui
                  ut.Et blandit suspendisse curabitur eu congue dui ut.Et
                  blandit suspendisse curabitur eu{" "}
                </p>
                <div className="flex items-center justify-end gap-2 mt-5">
                  <Play className="w-4 fill-white"></Play>
                  <h3 className="text-[10px]">Intro</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección About me - segunda parte del modal */}
    </>
  );
};

export default Modal;
