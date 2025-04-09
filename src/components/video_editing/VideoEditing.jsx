import React, { useState, useRef, useEffect } from "react";
import Rive from "@rive-app/react-canvas";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Custom CSS for animation delays
const AnimationStyles = () => (
  <style jsx>{`
    .animation-delay-300 {
      animation-delay: 300ms;
    }
    .animation-delay-500 {
      animation-delay: 500ms;
    }
    .animation-delay-700 {
      animation-delay: 700ms;
    }
    .animation-delay-1000 {
      animation-delay: 1000ms;
    }
    @keyframes floatBubble {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
    .speech-bubble {
      animation: floatBubble 5s ease-in-out infinite;
      animation-play-state: running;
      will-change: transform;
    }
    .speech-bubble:hover {
      animation: floatBubble 2s ease-in-out infinite;
    }
  `}</style>
);
import rocket from "../../assets/video_editing/rocket.png";
import ps from "../../assets/video_editing/ps.png";
import pr from "../../assets/video_editing/pr.png";
import ae from "../../assets/video_editing/ae.png";
import ai from "../../assets/video_editing/ai.png";
import background from "../../assets/video_editing/background.png";
import bubble from "../../assets/video_editing/bubble.png";
import CarouselModal from "./VideoProjectsCarousel";

const VideoEditing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const orbitRef = useRef(null);
  const [orbitSize, setOrbitSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isRocketHovered, setIsRocketHovered] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const rocketRef = useRef(null);
  const bubbleRef = useRef(null);

  const titleControls = useAnimation();
  const bubbleControls = useAnimation();

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [bubbleViewRef, bubbleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Start animations when elements enter viewport
  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleInView, titleControls]);

  useEffect(() => {
    if (bubbleInView) {
      bubbleControls.start("visible");
    }
  }, [bubbleInView, bubbleControls]);

  const titleVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  const bubbleVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.4,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleRocketHover = () => {
    setIsRocketHovered(true);
    setShowButtons(true);
  };

  const handleRocketLeave = () => {
    setIsRocketHovered(false);
  };

  const orbitalElements = [
    {
      id: "ps",
      image: ps,
      duration: 20,
      radius: { mobile: 80, desktop: 120 },
      initialAngle: 0,
      size: "w-20 md:w-24",
      zIndex: "z-20",
    },
    {
      id: "ae",
      image: ae,
      duration: 20,
      radius: { mobile: 85, desktop: 130 },
      initialAngle: 90,
      size: "w-20 md:w-24",
      zIndex: "z-10",
    },
    {
      id: "pr",
      image: pr,
      duration: 20,
      radius: { mobile: 90, desktop: 140 },
      initialAngle: 180,
      size: "w-20 md:w-24",
      zIndex: "z-30",
    },
    {
      id: "ai",
      image: ai,
      duration: 20,
      radius: { mobile: 95, desktop: 150 },
      initialAngle: 270,
      size: "w-20 md:w-24",
      zIndex: "z-0",
    },
  ];

  // Function to update size and detect if mobile
  const updateSizeAndDevice = () => {
    if (orbitRef.current) {
      const width = orbitRef.current.offsetWidth;
      const height = orbitRef.current.offsetHeight;
      setOrbitSize({ width, height });
      setIsMobile(window.innerWidth < 768);
    }
  };

  // Function to prevent event propagation between overlapping elements
  useEffect(() => {
    const bubbleElement = bubbleRef.current;
    const rocketElement = rocketRef.current;

    if (bubbleElement && rocketElement) {
      const handleBubbleMouseEnter = (e) => {
        e.stopPropagation();
      };

      bubbleElement.addEventListener("mouseenter", handleBubbleMouseEnter);

      return () => {
        bubbleElement.removeEventListener("mouseenter", handleBubbleMouseEnter);
      };
    }
  }, []);

  useEffect(() => {
    updateSizeAndDevice();
    window.addEventListener("resize", updateSizeAndDevice);
    return () => window.removeEventListener("resize", updateSizeAndDevice);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full h-[759px] relative overflow-hidden">
      <AnimationStyles />
      <div
        className="absolute inset-0 h-full bg-center bg-cover md:-right-0 -right-[260px] bg-no-repeat md:bg-cover xl:!bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <motion.h1
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariant}
          className="font-orbitron flex items-center justify-center md:justify-end md:me-8 font-black text-white text-[26.53px] md:text-[40px] text-start 
          [text-shadow:_3px_6px_4px_rgba(52,140,240,1)] drop-shadow-xl pt-[46px]"
        >
          Video Editing & <br className="md:hidden" /> Post-production
        </motion.h1>

        <div className="relative">
          <motion.div
            ref={(el) => {
              bubbleRef.current = el;
              bubbleViewRef(el);
            }}
            initial="hidden"
            animate={bubbleControls}
            variants={bubbleVariant}
            className="absolute right-10 md:right-105 flex items-center justify-center mt-[43px] bg-cover md:w-[262.53px] md:h-[230.53px] w-[135px] h-[130px] bg-no-repeat speech-bubble cursor-pointer"
            style={{ backgroundImage: `url(${bubble})` }}
          >
            <h2 className="text-[7px] md:text-[14px] md:w-52 text-center w-20 text-white font-orbitron leading-[1.5]">
              Explore my video editing and post-production portfolio using Adobe
              Creative Suite, with experience in animation and VFX.
            </h2>
          </motion.div>
        </div>

        <div className="absolute top-[350px] md:top-25 right-1/2 md:right-5 transform translate-x-1/2 md:translate-x-0 rocket-container">
          <div
            ref={orbitRef}
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
          >
            <div
              ref={rocketRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
              onMouseEnter={handleRocketHover}
              onMouseLeave={handleRocketLeave}
            >
              <div
                className="absolute inset-0 bg-blue-400 blur-md rounded-full scale-110 -z-10 transition-opacity duration-500"
                style={{
                  opacity: isRocketHovered ? 0.7 : 0,
                  pointerEvents: "none",
                }}
              ></div>

              {/* Engine thrust - behind the rocket */}
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 md:w-10 -z-5"
                style={{
                  opacity: isRocketHovered ? 1 : 0,
                  transition: "opacity 300ms ease",
                  pointerEvents: "none",
                }}
              >
                <div className="h-16 md:h-24 animate-pulse bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-b-full"></div>
              </div>

              {/* Rocket image - on top of the thrust */}
              <img
                src={rocket}
                alt="rocket"
                className="h-[209px] md:h-[366.67px] w-auto object-cover relative z-10 transition-transform ease-in-out duration-500"
                style={{
                  transform: isRocketHovered ? "rotate(0deg)" : "rotate(25deg)",
                  transformOrigin: "center center",
                  willChange: "transform",
                }}
              />

              {/* Sparkles - only visible on hover */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  opacity: isRocketHovered ? 1 : 0,
                  transition: "opacity 300ms ease",
                }}
              >
                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-ping animation-delay-300"></div>
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-700"></div>
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full animate-ping animation-delay-1000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-200 rounded-full animate-ping animation-delay-500"></div>
              </div>
            </div>

            {/* Orbital elements */}
            {orbitalElements.map((item) => (
              <OrbitalElement
                key={item.id}
                item={item}
                containerSize={orbitSize}
                isMobile={isMobile}
              />
            ))}
          </div>
          <div className="absolute bottom-25 left-0 w-[300px] h-[300px] z-20">
            <Rive
              src="/animations/untitled.riv"
              animations="Timeline 1"
              autoPlay={true}
            />
          </div>
        </div>

        <div
          className="top-125 md:top-135 right-38 absolute hidden md:block z-50"
          style={{
            opacity: showButtons ? 1 : 0,
            transition: "opacity 500ms ease",
            pointerEvents: showButtons ? "auto" : "none",
          }}
        >
          <button
            className="text-white font-rajdhani font-[700] text-[48px] rounded-full px-[63px] py-[4px] bg-linear-to-r from-[#3BACE2] from-5% via-[#1270DC] via-75% to-[#4EF5FF] to-[100%] backdrop-blur-3xl hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-pulse"
            onClick={openModal}
          >
            View
          </button>
        </div>
      </div>
      <div
        className="bottom-[32px] md:hidden left-1/2 transform -translate-x-1/2 absolute z-50"
        style={{
          opacity: showButtons ? 1 : 0,
          transition: "opacity 500ms ease",
          pointerEvents: showButtons ? "auto" : "none",
        }}
      >
        <button
          className="text-white font-rajdhani font-[700] text-[32px] rounded-4xl px-[49px] py-[4px] bg-linear-to-r from-[#3BACE2] from-5% via-[#1270DC] via-75% to-[#4EF5FF] to-[100%] backdrop-blur-3xl hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-pulse"
          onClick={openModal}
        >
          View
        </button>
      </div>

      {/* Carousel Modal */}
      <CarouselModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

// Orbital element component with improved positioning
const OrbitalElement = ({ item, containerSize, isMobile }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const elementRef = useRef(null);

  // Effect for circular animation
  useEffect(() => {
    let startTime = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const elapsedSeconds = elapsed / 1000;

      const centerX = containerSize.width / 2.5;
      const centerY = containerSize.height / 2;

      const radius = isMobile ? item.radius.mobile : item.radius.desktop;

      const radiusX = radius * (containerSize.width / (isMobile ? 250 : 350));
      const radiusY = radius * (containerSize.height / (isMobile ? 700 : 700));

      const angleOffset = (elapsedSeconds / item.duration) * 2 * Math.PI;
      const angle = (item.initialAngle * Math.PI) / 180 + angleOffset;

      const x = centerX + radiusX * Math.cos(angle);
      const y = centerY + radiusY * Math.sin(angle);

      const z = Math.sin(angle) * 40;

      setPosition({ x, y, z });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Only start animation if container has dimensions
    if (containerSize.width > 0 && containerSize.height > 0) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [item, containerSize, isMobile]);

  // Calculate z-index dynamically
  const dynamicZIndex = Math.round(position.z + 50);

  return (
    <motion.div
      ref={elementRef}
      className={`absolute ${item.size} pointer-events-none`}
      style={{
        left: position.x,
        top: position.y,
        zIndex: dynamicZIndex,
        transform: "translate(-50%, -50%)",
        transition: "none",
        filter: position.z < 0 ? "brightness(0.7)" : "brightness(1)",
        scale: 1 + position.z / 400,
        willChange: "transform, filter",
      }}
    >
      <img
        src={item.image}
        alt={`orbital-${item.id}`}
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default VideoEditing;
