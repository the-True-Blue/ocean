import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import projectImg from "../../assets/video_editing/proyects_img.png";
import avatarImg from "../../assets/hero/avatar.png";
import arrow from "../../assets/video_editing/Arrow.png";

// Projects data - move Kickstarter project to a separate variable
const kickstarterProject = {
  id: 11,
  title: "Jungles of Kuauhtla Trailer",
  description:
    "Video editing for 'Jungles of Kuauhtla'. The trailer was featured on Kickstarter.",
  videoUrl: "https://youtu.be/Cj-ykheti-Q?si=ipNRcNC0uqkOFC3D",
  featured: true,
};

const projectsData = [
  {
    id: 1,
    title: "Miraculous Ladybug Opening Intro",
    description:
      "My take on the animated intro of the Miraculous Ladybug series when we cosplayed as them for New York Comic Con 2023.",
    videoUrl:
      "https://drive.google.com/file/d/1lsWv6qgEL3U81iQzSTt-vzf8b4k6hkA9/view?usp=share_link",
  },
  {
    id: 2,
    title: "Miraculous Ladybug Transformation",
    description:
      "Made VFX and animated transitions in After Effects with my New York Comic Con 2023 costume to mimic Ladybug's transformation in the TV show.",
    videoUrl:
      "https://drive.google.com/file/d/1JSmsnsGpx_xcaXiFezd6OqeRpYBEduSC/view?usp=share_link",
  },
  {
    id: 3,
    title: "Ladybug Purify",
    description:
      "My animated take of a magical sequence in the Miraculous Ladybug series in my New York Comic Con 2023 costume.",
    videoUrl:
      "https://drive.google.com/file/d/1hPKKaXv1qGkpRtDXmw1Hvn-AkvDGGn6m/view?usp=share_link",
  },
  {
    id: 4,
    title: "Ladybug Lucky Charm",
    description:
      "My own version of Ladybug's Lucky Charm sequence in the Miraculous Ladybug series in my New York Comic Con 2023 costume.",
    videoUrl:
      "https://drive.google.com/file/d/11b-ARwQapHNX1F_RXhOtULcpPOjC6mmi/view?usp=share_link",
  },
  {
    id: 5,
    title: "Chat Noir Transformation",
    description:
      "Did my own animated take of Chat Noir's transformation in the Miraculous Ladybug series using costumes worn during New York Comic Con 2023.",
    videoUrl:
      "https://drive.google.com/file/d/15El-MpKZYPfUUnCImdbfT-Q1sHEnnBYK/view?usp=share_link",
  },
  {
    id: 6,
    title: "Chat Noir Cataclysm",
    description:
      "Did my own animated take of Chat Noir's cataclysm move in the Miraculous Ladybug series using costumes worn during New York Comic Con 2023.",
    videoUrl:
      "https://drive.google.com/file/d/15El-MpKZYPfUUnCImdbfT-Q1sHEnnBYK/view?usp=share_link",
  },
  {
    id: 7,
    title: "Ariel Under The Sea",
    description:
      "Dressed up as the Disney Princess, Ariel and Prince Eric, for New York Comic Con 2023 and did a short music video of our first day at the convention.",
    videoUrl:
      "https://drive.google.com/file/d/15El-MpKZYPfUUnCImdbfT-Q1sHEnnBYK/view?usp=share_link",
  },
  {
    id: 8,
    title: "Ariel Part of Your World",
    description:
      "Dressed up as the Disney Princess, Ariel and Prince Eric, for New York Comic Con 2023 and did a short music video of our first day at the convention.",
    videoUrl:
      "https://drive.google.com/file/d/1EDy07qw6jzekcQCAY3CI-bwHJKT1-mEb/view?usp=share_link",
  },
  {
    id: 9,
    title: "Across the Spiderverse TikTok Edit",
    description:
      "Made a TikTok Edit of us dressed up as Miles Morales and Gwen Stacy during New York Comic Con 2023 from the famous Across the Spiderverse movie. Using trendy text animations and VFX transitions, I made short-form video edit.",
    videoUrl:
      "https://drive.google.com/file/d/1EDy07qw6jzekcQCAY3CI-bwHJKT1-mEb/view?usp=share_link",
  },
  {
    id: 10,
    title: "Character Animation",
    description:
      "Drew a fictional avatar of myself and animated its facial features with each frame in Photoshop. Then added animations and VFX with After Effects.",
    videoUrl:
      "https://drive.google.com/file/d/1oiiQnH6DxgMOhsLTuOQRENhuXeQPWf-S/view?usp=share_link",
  },
];

// Video Modal Component
const VideoModal = ({ project, onClose }) => {
  const [embedUrl, setEmbedUrl] = useState(null);

  useEffect(() => {
    if (project) {
      // Check if it's a YouTube URL
      if (
        project.videoUrl.includes("youtu.be") ||
        project.videoUrl.includes("youtube.com")
      ) {
        // Extract YouTube video ID
        const getYoutubeVideoId = (url) => {
          const regExp =
            /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
          const match = url.match(regExp);
          return match && match[2].length === 11 ? match[2] : null;
        };

        const videoId = getYoutubeVideoId(project.videoUrl);
        if (videoId) {
          setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
        }
      } else {
        // Handle Google Drive files
        const getGoogleDriveFileId = (url) => {
          const match = url.match(/[-\w]{25,}/);
          return match ? match[0] : null;
        };

        const fileId = getGoogleDriveFileId(project.videoUrl);
        if (fileId) {
          setEmbedUrl(`https://drive.google.com/file/d/${fileId}/preview`);
        }
      }
    }
  }, [project]);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      ></div>
      <div
        className="relative z-10 w-full max-w-4xl bg-transparent rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 z-20 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition-all"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="aspect-video bg-black">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              title={project.title}
            ></iframe>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black text-white">
              Loading video...
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

// Project Card Component
const ProjectCard = ({ project, onClick, featured = false }) => {
  return (
    <div
      className={`flex flex-col w-full rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] relative ${
        featured ? "border-2 border-yellow-400" : ""
      }`}
      style={{
        height: "auto",
        aspectRatio: "369.38/503",
        width: "100%",
        maxWidth: "100%",
      }}
      onClick={() => onClick(project)}
    >
      {/* Featured badge if it's the featured project */}
      {featured && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 font-bold py-1 px-4 z-10 rounded-bl-lg shadow-md transform rotate-0 font-orbitron">
          FEATURED
        </div>
      )}

      {/* Image container - exact height as specified */}
      <div
        className="w-full overflow-hidden"
        style={{ aspectRatio: "369.38/378.03" }}
      >
        <img
          src={projectImg}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container - positioned for slight overlap */}
      <div
        className="absolute w-full"
        style={{
          bottom: "0",
          height: "34%",
          top: "auto",
        }}
      >
        {/* Border layer with clip-path */}
        <div
          className={`absolute inset-0 -m-0.5 rounded-b-lg [clip-path:polygon(30px_0%,100%_0%,100%_100%,0%_100%,0%_30px)] ${
            featured ? "bg-yellow-500" : "bg-[#729a9f]"
          }`}
        ></div>

        {/* Content layer with gradient and clip-path */}
        <div
          className={`p-4 flex flex-col relative rounded-b-lg [clip-path:polygon(30px_0%,100%_0%,100%_100%,0%_100%,0%_30px)] ${
            featured
              ? "bg-[linear-gradient(170deg,#8a6c14_0%,#b58a0b_30%,#ffc107_60%)]"
              : "bg-[linear-gradient(170deg,#6a7fac_0%,#305798_30%,#0933b9_60%)]"
          }`}
          style={{ height: "100%" }}
        >
          <h3 className="text-lg font-bold text-white mb-2 font-orbitron truncate">
            {project.title}
          </h3>
          <div className="flex items-center mb-2">
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="font-medium text-white text-sm">
              @tempestdigital
            </span>
            <svg
              className="w-4 h-4 ml-1 text-blue-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-white/90 overflow-hidden text-sm line-clamp-3 font-rajdhani">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Featured Project Component
const FeaturedProject = ({ project, onClick }) => {
  return (
    <div className="w-full mb-4 md:mb-8 relative">
      {/* Ultra-compact mobile, normal on desktop */}
      <div className="flex flex-row w-full backdrop-blur-sm bg-black/20 rounded-lg overflow-hidden shadow-xl border border-yellow-400">
        {/* Featured tag - smaller on mobile */}
        <div className="absolute -top-1 -right-1 z-10">
          <div className="bg-yellow-400 text-blue-900 py-0.5 sm:py-1 px-2 sm:px-3 text-[10px] sm:text-xs font-bold shadow-md font-orbitron rounded-br-lg">
            FEATURED
          </div>
        </div>

        {/* Mobile design: ultra-compact side-by-side layout */}
        <div className="flex flex-row w-full">
          {/* Thumbnail side - very compact on mobile */}
          <div className="w-2/5 md:w-2/5 p-1.5 sm:p-3">
            <div
              className="w-full overflow-hidden cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              onClick={() => onClick(project)}
              style={{ aspectRatio: "16/9" }}
            >
              <div
                className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden"
                style={{
                  backgroundImage: `url(${projectImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Play button overlay - tiny on mobile */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-yellow-500/80 flex items-center justify-center pl-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
                    >
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side - extremely compact on mobile */}
          <div className="w-3/5 md:w-3/5 p-1.5 sm:p-3 md:p-4 flex flex-col justify-center">
            {/* Title - single line, smaller text on mobile */}
            <h3 className="text-sm sm:text-lg md:text-xl font-bold text-yellow-400 truncate font-orbitron">
              {project.title}
            </h3>

            {/* User info - hidden on smallest screens */}
            <div className="hidden sm:flex items-center my-1">
              <img
                src={avatarImg}
                alt="Avatar"
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full mr-1"
              />
              <span className="font-medium text-white text-[10px] sm:text-xs">
                @tempestdigital
              </span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Description - only 1 line on mobile, more on larger screens */}
            <p className="text-white/90 text-[10px] sm:text-xs md:text-sm line-clamp-1 sm:line-clamp-2 md:line-clamp-3 font-rajdhani my-0.5 sm:my-1 md:my-2">
              {project.description}
            </p>

            {/* Button - tiny on mobile, normal on desktop */}
            <button
              className="self-start px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-blue-900 text-[10px] sm:text-xs md:text-sm font-bold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-orbitron"
              onClick={() => onClick(project)}
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Carousel Modal Component
const CarouselModal = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardGap, setCardGap] = useState(27);
  const [containerWidth, setContainerWidth] = useState(0);

  // Update layout based on screen size
  useEffect(() => {
    const updateLayout = () => {
      // Get arrow width for calculations
      const arrowWidth = window.innerWidth < 640 ? 24 : 32; // Estimated arrow width including padding
      const arrowSpacing = window.innerWidth < 640 ? 16 : 24; // Space between arrow and content
      const totalArrowSpace = (arrowWidth + arrowSpacing) * 2; // Space for both arrows

      // Determine gap between cards
      const newCardGap = window.innerWidth < 640 ? 12 : 20; // Reduced gap size
      setCardGap(newCardGap);

      // Calculate container width based on available space
      let newContainerWidth = 0;

      if (window.innerWidth >= 1280) {
        // XL screens
        newContainerWidth = Math.min(
          1100,
          window.innerWidth - totalArrowSpace - 40
        );
      } else if (window.innerWidth >= 768) {
        // Medium screens
        newContainerWidth = window.innerWidth - totalArrowSpace - 40;
      } else {
        // Small screens
        newContainerWidth = window.innerWidth - totalArrowSpace - 32;
      }

      setContainerWidth(newContainerWidth);

      // Determine number of visible cards
      let newVisibleCount = 3;

      if (window.innerWidth < 640) {
        newVisibleCount = 1;
      } else if (window.innerWidth < 1024) {
        newVisibleCount = 2;
      } else {
        newVisibleCount = 3;
      }

      setVisibleCount(newVisibleCount);

      // Calculate card width with a small reduction to ensure no overflow
      const totalGapWidth = newCardGap * (newVisibleCount - 1);
      const availableWidth = newContainerWidth - totalGapWidth;
      // Apply a small reduction to ensure cards fit completely
      const newCardWidth = Math.floor(
        (availableWidth / newVisibleCount) * 0.98
      );

      setCardWidth(newCardWidth);

      // Reset current index if needed
      const maxIndex = projectsData.length - newVisibleCount;
      if (currentIndex > maxIndex) {
        setCurrentIndex(Math.max(0, maxIndex));
      }
    };

    // Initial update
    if (isOpen) {
      updateLayout();

      // Add resize listener
      window.addEventListener("resize", updateLayout);

      // Cleanup
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, [isOpen, currentIndex]);

  const nextSlide = () => {
    const maxIndex = projectsData.length - visibleCount;
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    const maxIndex = projectsData.length - visibleCount;
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseVideoModal = () => {
    setSelectedProject(null);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div
        className="absolute inset-0 backdrop-blur-md"
        onClick={onClose}
      ></div>
      <div
        className="relative z-10 w-full max-w-[1280px] h-full md:h-auto max-h-[90vh] backdrop-blur-xl p-3 md:p-6 rounded-lg overflow-auto flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition-all z-20"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-orbitron pt-6 text-center">
          Video Editing Projects
        </h2>

        {/* Featured Project */}
        <FeaturedProject
          project={kickstarterProject}
          onClick={handleProjectClick}
        />

        {/* Divider - more compact */}
        <div className="w-full flex items-center my-3 md:my-4">
          <div className="flex-grow h-px bg-white/20"></div>
          <h3 className="px-3 text-sm md:text-lg font-orbitron text-white/70">
            MORE PROJECTS
          </h3>
          <div className="flex-grow h-px bg-white/20"></div>
        </div>

        {/* Carousel Section with Arrows Outside */}
        <div className="relative w-full flex items-center justify-center">
          {/* Left Arrow - Positioned based on screen size */}
          <button
            className="absolute left-2 md:left-4 transform transition-all hover:scale-110 z-10 flex items-center justify-center w-6 h-6 md:w-8 md:h-8"
            onClick={prevSlide}
            style={{ transform: "rotate(180deg)" }}
          >
            <img src={arrow} alt="Previous" className="w-full h-full" />
          </button>

          {/* Carousel Container with dynamic width */}
          <div
            className="relative overflow-hidden mx-8 md:mx-12"
            style={{ width: `${containerWidth}px` }}
          >
            {/* Carousel Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (cardWidth + cardGap)
                }px)`,
              }}
            >
              {/* Carousel Items */}
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-shrink-0"
                  style={{
                    width: `${cardWidth}px`,
                    marginRight:
                      index === projectsData.length - 1 ? "0" : `${cardGap}px`,
                  }}
                >
                  <ProjectCard project={project} onClick={handleProjectClick} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow - Positioned based on screen size */}
          <button
            className="absolute right-2 md:right-4 transform transition-all hover:scale-110 z-10 flex items-center justify-center w-6 h-6 md:w-8 md:h-8"
            onClick={nextSlide}
          >
            <img src={arrow} alt="Next" className="w-full h-full" />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: projectsData.length - visibleCount + 1 }).map(
            (_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-blue-500 scale-125"
                    : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            )
          )}
        </div>
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <VideoModal project={selectedProject} onClose={handleCloseVideoModal} />
      )}
    </div>,
    document.body
  );
};

export default CarouselModal;
