import React, { useState, useEffect, useRef } from "react";
import avatar from "../../assets/mid_waterfall/avatar.png";
import check from "../../assets/hero/check.png";
import element1 from "../../assets/mid_waterfall/element1.png";
import element2 from "../../assets/mid_waterfall/element2.png";
import element3 from "../../assets/mid_waterfall/element3.png";
import character from "../../assets/mid_waterfall/character/Pumpkin1.jpg";
import character1 from "../../assets/mid_waterfall/character/Pumpkin2.png";
import character2 from "../../assets/mid_waterfall/character/Pumpkin3.png";
import character3 from "../../assets/mid_waterfall/character/Pumpkin4.jpg";
import character4 from "../../assets/mid_waterfall/character/Sonic1.png";
import character5 from "../../assets/mid_waterfall/character/Sonic2.jpg";
import character6 from "../../assets/mid_waterfall/character/Sonic3.jpg";
import interior from "../../assets/mid_waterfall/interior/Fireplace.png";
import interior1 from "../../assets/mid_waterfall/interior/room.png";
import interior2 from "../../assets/mid_waterfall/interior/window.png";

const ArtCollectionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeModal, setActiveModal] = useState(null);
  const [currentModalSlide, setCurrentModalSlide] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const videoContainerRef = useRef(null);

  // Mock data for the three cards with added titles and descriptions for each modal content item
  const cards = [
    {
      id: 1,
      title: "3D Character Modeling",
      element: "element1",
      username: "TEMPESTDIGITAL_",
      type: "images",
      modalContent: [
        {
          type: "image",
          src: character,
          alt: "Character 1",
          title: "Pumpkin Character - Front View",
          description:
            "A 3D model of a pumpkin character with detailed texturing and facial expressions, created in Maya.",
        },
        {
          type: "image",
          src: character1,
          alt: "Character 2",
          title: "Pumpkin Character - Side View",
          description:
            "Side profile of the pumpkin character showing the intricate details of the model's features.",
        },
        {
          type: "image",
          src: character2,
          alt: "Character 3",
          title: "Pumpkin Character - Alternative Design",
          description:
            "An alternative design variant of the pumpkin character with different color palette and features.",
        },
        {
          type: "image",
          src: character3,
          alt: "Character 4",
          title: "Pumpkin Character - Action Pose",
          description:
            "The pumpkin character in a dynamic action pose, showcasing the model's rigging capabilities.",
        },
        {
          type: "image",
          src: character4,
          alt: "Character 5",
          title: "Sonic Character - Core Design",
          description:
            "A 3D model inspired by Sonic with custom design elements and high-quality texturing.",
        },
        {
          type: "image",
          src: character5,
          alt: "Character 6",
          title: "Sonic Character - Environment Integration",
          description:
            "The Sonic character integrated into a game environment to showcase lighting and proportions.",
        },
        {
          type: "image",
          src: character6,
          alt: "Character 7",
          title: "Sonic Character - Final Render",
          description:
            "Final render of the Sonic character with post-processing effects applied for presentation.",
        },
      ],
    },
    {
      id: 2,
      title: "3D Interior Space",
      element: "element2",
      username: "TEMPESTDIGITAL_",
      type: "images",
      modalContent: [
        {
          type: "image",
          src: interior,
          alt: "Interior 1",
          title: "Cozy Fireplace Scene",
          description:
            "A warm interior space featuring a detailed fireplace with realistic lighting and material properties.",
        },
        {
          type: "image",
          src: interior1,
          alt: "Interior 2",
          title: "Modern Living Room",
          description:
            "A modern living room design with custom furniture and careful attention to spatial composition.",
        },
        {
          type: "image",
          src: interior2,
          alt: "Interior 3",
          title: "Window View Scene",
          description:
            "An architectural interior focusing on a window view, demonstrating lighting techniques and material rendering.",
        },
      ],
    },
    {
      id: 3,
      title: "3D Environment Art",
      element: "element3",
      username: "TEMPESTDIGITAL_",
      type: "videos",
      modalContent: [
        {
          type: "video",
          src: "https://www.youtube.com/embed/16ZYPKoESB4",
          alt: "Environment Video 1",
          title: "Rendered Cinematic of VFX Waterfall in Unreal",
          description:
            "A dynamic walkthrough of a forest environment created in Unreal Engine with custom assets and lighting.",
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/kIfVKO1nyY4",
          alt: "Environment Video 2",
          title: "Rendered Cinematic of Town at Night",
          description:
            "A showcase of an urban environment with dynamic elements and atmospheric effects.",
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/5E64m1ZHsUM",
          alt: "Environment Video 3",
          title: "Rendered Cinematic of Stylized Beach",
          description:
            "A flythrough of a fantasy landscape environment featuring custom terrain, vegetation, and water effects.",
        },
      ],
    },
  ];

  // Effect to handle video loading state
  useEffect(() => {
    if (activeModal) {
      const currentCard = cards.find((card) => card.id === activeModal);
      if (
        currentCard?.type === "videos" ||
        currentCard?.modalContent[currentModalSlide]?.type === "video"
      ) {
        setIsVideoLoading(true);

        // Reset loading state after a period (simulating load completion)
        const timer = setTimeout(() => {
          setIsVideoLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
      }
    }
  }, [activeModal, currentModalSlide]);

  // Next slide function
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  // Modal carousel navigation
  const nextModalSlide = () => {
    if (activeModal) {
      const card = cards.find((card) => card.id === activeModal);
      setCurrentModalSlide((prev) =>
        prev === card.modalContent.length - 1 ? 0 : prev + 1
      );

      // Set loading state when navigating to a new slide
      if (card.type === "videos" || card.modalContent[0].type === "video") {
        setIsVideoLoading(true);
      }
    }
  };

  const prevModalSlide = () => {
    if (activeModal) {
      const card = cards.find((card) => card.id === activeModal);
      setCurrentModalSlide((prev) =>
        prev === 0 ? card.modalContent.length - 1 : prev - 1
      );

      // Set loading state when navigating to a new slide
      if (card.type === "videos" || card.modalContent[0].type === "video") {
        setIsVideoLoading(true);
      }
    }
  };

  // Open modal function
  const openModal = (id) => {
    setActiveModal(id);
    setCurrentModalSlide(0); // Reset modal carousel to first slide

    // Set loading state when opening a modal with videos
    const card = cards.find((card) => card.id === id);
    if (card.type === "videos" || card.modalContent[0].type === "video") {
      setIsVideoLoading(true);
    }
  };

  // Close modal function
  const closeModal = () => {
    setActiveModal(null);
    setCurrentModalSlide(0);
    setIsVideoLoading(false);
  };

  // Handle video loading complete
  const handleVideoLoaded = () => {
    setIsVideoLoading(false);
  };

  // Get current modal content
  const getCurrentModalContent = () => {
    if (!activeModal) return null;
    const card = cards.find((card) => card.id === activeModal);
    return card?.modalContent[currentModalSlide];
  };

  // Prevent clicks on the video from propagating to the carousel controls
  const handleVideoContainerClick = (e) => {
    // If we're clicking directly on the video container, prevent propagation
    if (e.target === videoContainerRef.current) {
      e.stopPropagation();
    }
  };

  return (
    <div className="relative">
      {/* Section Title */}
      <div className="mb-8 px-6 flex flex-col md:flex-row items-center mx-auto max-w-7xl justify-between gap-10 md:gap-0">
        <h2 className="order-2 md:order-0 text-2xl lg:text-[40px]  font-orbitron font-[900] text-white [text-shadow:_8px_12px_4px_rgba(0,0,0,1)] drop-shadow-xl">
          3D ART Collection
        </h2>
        <p className="md:max-w-[671px] font-orbitron lg:text-[20px] text-[13px] tracking-[9%] leading-[162%] font-[900] text-white [text-shadow:_8px_12px_4px_rgba(0,0,0,1)] drop-shadow-xl">
          Here is work I did as a 3D artist, modeling characters and interior
          spaces in Maya, while designing environments in Unreal.{" "}
        </p>
      </div>

      {/* Desktop View - All Cards */}
      <div className="hidden md:flex justify-center gap-6 px-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-blue-900/50 border-gray-300/30  overflow-hidden w-full max-w-sm border-2  hover:border-blue-400/40 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20"
            style={{ width: "390px", height: "490px" }}
          >
            <div className="p-4 h-full flex flex-col">
              <div className="flex-grow flex items-center justify-center ">
                <div className="w-full h-64 rounded-lg flex items-center justify-center">
                  <img
                    src={
                      card.id === 1
                        ? element1
                        : card.id === 2
                        ? element2
                        : element3
                    }
                    alt={card.title}
                    className="w-full h-full object-contain art-image-pulse"
                  />
                </div>
              </div>
              <div className="text-white flex flex-col items-center h-full justify-evenly mb-5">
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <div className="flex items-center mt-2 mb-4">
                    <img
                      src={avatar}
                      alt="Avatar"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>{card.username}</span>
                    <img src={check} alt="Verified" className="w-4 h-4 ml-1" />
                  </div>
                </div>
                <button
                  onClick={() => openModal(card.id)}
                  className="w-full py-2 px-4 rounded text-white font-medium transition-all duration-200 transform btn-pulse focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                  style={{
                    maxWidth: "209px",
                    height: "44px",
                    background:
                      "linear-gradient(92.23deg, #1194CA 50.63%, #4276CB 69.49%, #348CF0 100%, #87A0FF 117.04%)",
                    boxShadow:
                      "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cards.map((card) => (
              <div key={card.id} className="w-full flex-shrink-0 px-4">
                <div
                  className="bg-blue-900/50 rounded-lg overflow-hidden mx-auto border border-transparent hover:border-blue-400/40 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20"
                  style={{ width: "204px", height: "261px" }}
                >
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex-grow flex items-center justify-center mb-0">
                      <div className="w-full h-32 rounded-lg flex items-center justify-center">
                        <img
                          src={
                            card.id === 1
                              ? element1
                              : card.id === 2
                              ? element2
                              : element3
                          }
                          alt={card.title}
                          className="w-full h-full object-contain art-image-pulse"
                        />
                      </div>
                    </div>
                    <div className="text-white flex flex-col items-center h-full justify-evenly ">
                      <div>
                        <h3 className="text-xs text-center font-bold">
                          {card.title}
                        </h3>
                        <div className="flex items-center mt-2 mb-3">
                          <img
                            src={avatar}
                            alt="Avatar"
                            className="w-5 h-5 rounded-full mr-2"
                          />
                          <span className="text-sm">{card.username}</span>
                          <img
                            src={check}
                            alt="Verified"
                            className="w-3 h-3 ml-1"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => openModal(card.id)}
                        className="py-0 cursor-pointer px-4 rounded text-white text-sm font-medium transition-all duration-200 transform btn-pulse focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                        style={{
                          width: "106px",
                          height: "28px",
                          background:
                            "linear-gradient(92.23deg, #1194CA 50.63%, #4276CB 69.49%, #348CF0 100%, #87A0FF 117.04%)",
                          boxShadow:
                            "0 3px 5px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
                        }}
                      >
                        Check Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-blue-800/80 text-white w-8 h-8 rounded-full flex items-center justify-center"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-800/80 text-white w-8 h-8 rounded-full flex items-center justify-center"
        >
          &gt;
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 mx-1 rounded-full ${
                currentSlide === index ? "bg-blue-400" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal with Carousel */}
      {activeModal && (
        <div className="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50">
          <div className="bg-black/40 p-6 rounded-lg md:max-w-[1036px] md:max-h-[722px] max-w-lg w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-end mb-2">
              <button onClick={closeModal} className="text-white text-2xl">
                &times;
              </button>
            </div>

            {/* Title and Description for the current modal content */}
            <div className="text-white mb-4 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-2 ">
                {getCurrentModalContent()?.title}
              </h3>
              <p className="text-sm md:text-base text-gray-200">
                {getCurrentModalContent()?.description}
              </p>
            </div>

            <div className="w-full rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Carousel Content */}
              <div className="w-full h-full flex items-center justify-center">
                {getCurrentModalContent()?.type === "image" ? (
                  <img
                    src={getCurrentModalContent()?.src}
                    alt={getCurrentModalContent()?.alt}
                    className="w-full max-h-[400px] object-contain"
                  />
                ) : (
                  <div
                    className="relative w-full h-[400px]"
                    ref={videoContainerRef}
                    onClick={handleVideoContainerClick}
                  >
                    {/* Loading spinner overlay */}
                    {isVideoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    {/* Video iframe updated for YouTube */}
                    <iframe
                      src={`${getCurrentModalContent()?.src}?autoplay=0&rel=0`}
                      title={getCurrentModalContent()?.alt}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      onLoad={handleVideoLoaded}
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                  </div>
                )}
              </div>

              {/* Modal Carousel Navigation - Moved outside the video area */}
              <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4 pointer-events-none">
                <button
                  onClick={prevModalSlide}
                  className="bg-blue-800/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 pointer-events-auto"
                >
                  &lt;
                </button>
                <button
                  onClick={nextModalSlide}
                  className="bg-blue-800/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 pointer-events-auto"
                >
                  &gt;
                </button>
              </div>
            </div>

            {/* Modal Carousel Dots Indicator - Moved to bottom */}
            <div className="flex justify-center mt-4">
              {cards
                .find((card) => card.id === activeModal)
                ?.modalContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentModalSlide(index)}
                    className={`w-3 h-3 mx-1 rounded-full ${
                      currentModalSlide === index
                        ? "bg-blue-400"
                        : "bg-gray-400"
                    }`}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtCollectionCarousel;
