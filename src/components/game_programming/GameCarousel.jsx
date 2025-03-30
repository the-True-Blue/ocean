import React, { useState } from "react";
import check from "../../assets/hero/check.png";
import avatar from "../../assets/hero/avatar.png";
import arrow from "../../assets/hero/arrow.png";
import carouselArrow from "../../assets/game_programming/Arrow.png";
import element1 from "../../assets/game_programming/element1.png";
import element2 from "../../assets/game_programming/element2.png";
import element3 from "../../assets/game_programming/element3.png";
import gem from "../../assets/game_programming/gem.png";
import VideosModal from "./VideosModal";

const GameCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showVideosModal, setShowVideosModal] = useState(false);
  const [isTouching, setIsTouching] = useState(false); // Nuevo estado para rastrear toques

  const projects = [
    {
      id: 1,
      image: element1,
      title: "Riley's Big Move",
      username: "@tempestdigital_",
      description: "Top-Down Adventure Game",
      details: "Unravel the mystery through hidden clues.",
      link: "https://juju136.itch.io/rileys-big-move",
    },
    {
      id: 2,
      image: element2,
      title: "Glitch",
      username: "@tempestdigital_",
      description: "2D Dungeon Crawler",
      details: "Escape a spaceship through puzzles and combat.",
      link: "https://juju136.itch.io/glitch",
    },
    {
      id: 3,
      image: element3,
      title: "A Pirate's Lost Treasure",
      username: "@tempestdigital_",
      description: "2D Platformer",
      details: "Seek treasure in a perilous jungle.",
      link: "https://the-true-blue.itch.io/a-pirates-lost-treasure",
    },
    {
      id: 4,
      image: element1,
      title: "Robotron Clone",
      username: "@tempestdigital_",
      description: "Top-Down Shooter",
      details: "Survive endless waves of foes.",
      link: "https://dominique-mccormack.itch.io/robotron-clone",
    },
    {
      id: 5,
      image: element2,
      title: "Wizard-Towers",
      username: "@tempestdigital_",
      description: "Tower-Defense Game",
      details: "Defend your territory!",
      link: "https://dominique-mccormack.itch.io/wizard-themed-tower-defense-game",
    },
    {
      id: 6,
      image: gem,
      title: "Sonic The Hedgehog Fan Game",
      username: "@tempestdigital_",
      description: "Gameplay Demo in Unreal Engine",
      details: "3D assets ripped from Sonic games!",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Función modificada para manejar el clic en el botón "View"
  const handleViewClick = (e) => {
    // Detener la propagación del evento para evitar conflictos con eventos táctiles
    e.stopPropagation();

    // Prevenir el comportamiento por defecto
    e.preventDefault();

    const currentProject = projects[activeIndex];

    if (currentProject.id === 6) {
      // Si es el proyecto con ID 6 (Sonic), abre el modal de videos
      setShowVideosModal(true);
    } else if (currentProject.link) {
      // Para el resto, abre el enlace externo
      window.open(currentProject.link);
    }
  };

  // Touch handlers for mobile swipe - modificados
  const handleTouchStart = (e) => {
    // Si el toque se origina en el botón View o sus elementos hijos, no iniciamos el swipe
    if (e.target.closest('button[data-view-button="true"]')) {
      return;
    }

    setIsTouching(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!isTouching) return;

    // Solo procesamos el swipe si la diferencia es significativa
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }

    setIsTouching(false);
  };

  // Calcular los índices de elementos visibles
  const getPrevIndex = () =>
    (activeIndex - 1 + projects.length) % projects.length;
  const getNextIndex = () => (activeIndex + 1) % projects.length;

  return (
    <>
      <div className="w-full relative overflow-hidden py-8 h-[300px] md:h-[400px] mx-auto max-w-7xl">
        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40  text-white rounded-full w-10 h-10 flex items-center justify-center  transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-blue-500/30 active:shadow-inner"
          onClick={prevSlide}
        >
          <img
            src={carouselArrow}
            alt="Previous"
            className="w-6 h-6 transform rotate-180 transition-transform duration-150 hover:-translate-x-1"
          />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40  text-white rounded-full w-10 h-10 flex items-center justify-center  transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-blue-500/30 active:shadow-inner"
          onClick={nextSlide}
        >
          <img
            src={carouselArrow}
            alt="Next"
            className="w-6 h-6 transition-transform duration-150 hover:translate-x-1"
          />
        </button>

        {/* Carousel Items Container */}
        <div
          className="flex items-center justify-center h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Three-element carousel layout */}
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Previous Item - Left Side */}
            <div className="absolute left-33  hidden md:block z-10 opacity-60 scale-75 hover:opacity-80 hover:scale-80 transition-all duration-200">
              <div className="flex items-center justify-center w-[179px] h-[120px]">
                <div className="flex items-center justify-center backdrop-blur-3xl w-[179px] h-[120px] bg-[#FFFFFF2D] border-4 border-[#FFFFFF47] rounded-4xl hover:border-[#FFFFFF60] transition-all duration-200">
                  <img
                    src={projects[getPrevIndex()].image}
                    alt={projects[getPrevIndex()].title}
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Active Item - Center */}
            <div className="z-30">
              <div className="flex items-center justify-center md:w-[530px] h-[220px]">
                {/* Element container */}
                <div className="flex items-center justify-center backdrop-blur-3xl md:w-[279px] md:h-full w-[165px] h-[125px] bg-[#FFFFFF2D] border-4 border-[#FFFFFF47] rounded-4xl z-20 transition-all duration-300 hover:border-[#FFFFFF70] hover:shadow-lg hover:shadow-blue-400/10">
                  <img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="md:w-[149px] md:h-[149px] w-[127px] h-[107px] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {/* Info container */}
                <div className="items-center -ml-[40px] z-10 justify-center backdrop-blur-3xl md:w-[306px] md:h-full w-[159px] h-[125px] bg-[#FFFFFF2D] border-4 border-[#FFFFFF47] rounded-4xl transition-all duration-300 hover:border-[#FFFFFF70] hover:shadow-lg hover:shadow-blue-400/10">
                  <div className="flex flex-col md:items-start h-full md:pl-12 pl-[45px]">
                    <div className="flex flex-col h-full justify-evenly gap-3 pe-5 md:py-[24px] py-2">
                      <div className="flex w-full gap-2 items-center">
                        <div className="flex h-fit w-fit">
                          <img
                            src={avatar}
                            alt="avatar"
                            className="md:w-[30px] md:h-[30px] w-[10px] h-[10px] object-contain"
                          />
                          <img
                            src={check}
                            alt="check-icon"
                            className="w-[5px] h-[5px]"
                          />
                        </div>
                        <div className="text-white font-rajdhani text-nowrap">
                          <h2 className="text-[7px] md:text-[20px] font-bold text-wrap leading-tight">
                            "{projects[activeIndex].title}"
                          </h2>
                          <h3 className="text-[6px] md:text-[15px] font-semibold text-white">
                            {projects[activeIndex].username}
                          </h3>
                        </div>
                      </div>
                      <div className="text-white">
                        <h2 className="text-[7px] md:text-[12px] font-bold">
                          {projects[activeIndex].description}
                        </h2>
                        <h3 className="text-[6px] md:text-[12px] font-rajdhani font-semibold text-white">
                          {projects[activeIndex].details}
                        </h3>
                      </div>
                      <button
                        data-view-button="true"
                        onClick={handleViewClick}
                        className="border-2 border-[#1F29AA] w-[38px] md:w-[88px] ms-auto cursor-pointer relative overflow-hidden transition-transform duration-150 hover:scale-105 active:scale-95 hover:shadow-md hover:shadow-blue-500/20 group"
                      >
                        <div className="font-rajdhani flex items-center gap-0 md:gap-3 bg-gradient-to-r px-[6px] from-[#1194CA] to-[#375191] hover:from-[#0f85b3] hover:to-[#2b4680] active:from-[#0c6f96] active:to-[#1b3672] transition-colors duration-200">
                          <span className="font-medium text-white text-[8px] md:text-[20px]">
                            View
                          </span>
                          <img
                            src={arrow}
                            alt="arrow"
                            className="w-[8px] md:w-[16px] object-contain transform transition-transform duration-150 group-hover:translate-x-1"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Item - Right Side */}
            <div className="absolute right-33 hidden md:block z-10 opacity-60 scale-75 hover:opacity-80 hover:scale-80 transition-all duration-200">
              <div className="flex items-center justify-center w-[179px] h-[120px]">
                <div className="flex items-center justify-center backdrop-blur-3xl w-[179px] h-[120px] bg-[#FFFFFF2D] border-4 border-[#FFFFFF47] rounded-4xl hover:border-[#FFFFFF60] transition-all duration-200">
                  <img
                    src={projects[getNextIndex()].image}
                    alt={projects[getNextIndex()].title}
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 active:scale-75 ${
                index === activeIndex
                  ? "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                  : "bg-blue-300 hover:bg-blue-400 active:bg-blue-500 hover:shadow hover:shadow-blue-400/30"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {showVideosModal && (
        <VideosModal onClose={() => setShowVideosModal(false)} />
      )}
    </>
  );
};

export default GameCarousel;
