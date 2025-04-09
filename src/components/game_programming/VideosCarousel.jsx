import React, { useState, useEffect } from "react";
import thumbnail1 from "../../assets/game_programming/videos/thumbnail1.png";
import thumbnail2 from "../../assets/game_programming/videos/thumbnail2.png";

const VideosCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [videoIds, setVideoIds] = useState([null, null]);
  const [embedUrls, setEmbedUrls] = useState([null, null]);
  const [thumbnailUrls, setThumbnailUrls] = useState([null, null]);

  // Extract YouTube video ID from various URL formats
  const getYouTubeVideoId = (url) => {
    const patterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^/?]+)/i,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([^/?]+)/i,
      /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^/?]+)/i,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^/?]+)/i,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    return null;
  };

  useEffect(() => {
    // YouTube video URLs
    const videoUrls = [
      "https://youtu.be/RgeSWx8a12w?si=3gwSnGrtpcBijPsC",
      "https://youtu.be/HGdTSO5WBwk?si=okvkgoe1SBkytn9p",
    ];

    // Extract video IDs
    const ids = videoUrls.map((url) => getYouTubeVideoId(url));
    setVideoIds(ids);

    // Create embed URLs
    const urls = ids.map((id) =>
      id ? `https://www.youtube.com/embed/${id}` : null
    );
    setEmbedUrls(urls);

    // Use reliable thumbnail format (hqdefault is usually always available)
    const thumbnails = ids.map((id) =>
      id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null
    );
    setThumbnailUrls(thumbnails);
  }, []);

  // Videos array with thumbnails
  const videos = [
    {
      id: 1,
      title: "Gameplay Demo in Unreal Engine",
      description:
        "Featuring my own combat system with 3D assets ripped from Sonic games!",
      thumbnailSrc: thumbnail1,
    },
    {
      id: 2,
      title: "Advanced Combat Mechanics",
      description:
        "My own combat system with 3D assets ripped from Sonic games!",
      thumbnailSrc: thumbnail2,
    },
  ];

  const nextSlide = () => {
    setShowVideo(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setShowVideo(false);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  const goToSlide = (index) => {
    if (activeIndex !== index) {
      setShowVideo(false);
      setActiveIndex(index);
    }
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
    setShowVideo(true);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <div
      className="w-full relative overflow-hidden flex flex-col  pt-2 sm:pt-3 md:pt-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ minHeight: "200px", maxHeight: "100%" }}
    >
      {/* Main Video Display */}
      <div className="flex items-center justify-center p-1">
        <div
          className="bg-black rounded-lg overflow-hidden relative mx-auto"
          style={{
            width: "min(98%, 90vh)",
            maxWidth: "900px",
            height: "auto",
          }}
        >
          {/* Video player - Using iframe for YouTube embed */}
          <div className="w-full aspect-video flex items-center justify-center bg-blue-900/30">
            {!showVideo ? (
              // YouTube thumbnail with play button
              <div className="relative w-full h-full">
                <img
                  src={thumbnailUrls[activeIndex] || "/api/placeholder/640/360"}
                  alt={videos[activeIndex].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Try alternative formats if error occurs
                    const videoId = videoIds[activeIndex];
                    if (videoId) {
                      // Try different formats, from lowest to highest
                      const formats = [
                        "default.jpg",
                        "mqdefault.jpg",
                        "sddefault.jpg",
                      ];
                      const currentSrc = e.target.src;

                      // Find next format to try
                      let nextFormat = null;
                      if (currentSrc.includes("hqdefault.jpg")) {
                        nextFormat = formats[0]; // Try default.jpg
                      } else if (currentSrc.includes("default.jpg")) {
                        nextFormat = formats[1]; // Try mqdefault.jpg
                      } else if (currentSrc.includes("mqdefault.jpg")) {
                        nextFormat = formats[2]; // Try sddefault.jpg
                      }

                      if (nextFormat) {
                        e.target.src = `https://img.youtube.com/vi/${videoId}/${nextFormat}`;
                      } else {
                        // If all fails, use custom thumbnail as last resort
                        e.target.src = videos[activeIndex].thumbnailSrc;
                      }
                    }
                  }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={handleVideoClick}
                >
                  <button className="bg-blue-500/70 hover:bg-blue-600/90 active:bg-blue-700/80 text-white rounded-full p-3 sm:p-4 transition-all duration-200 transform hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-blue-500/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : embedUrls[activeIndex] ? (
              // YouTube video
              <iframe
                src={embedUrls[activeIndex]}
                className="w-full h-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={videos[activeIndex].title}
              ></iframe>
            ) : (
              // Loading state if URL not yet available
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-white bg-black/50 p-2 rounded">
                  Loading video...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div
        className="py-1 px-2 sm:p-2 text-white text-center max-w-full"
        style={{ maxWidth: "min(100%, 90vh)", margin: "0 auto" }}
      >
        <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1 truncate">
          {videos[activeIndex].title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 line-clamp-1 sm:line-clamp-2">
          {videos[activeIndex].description}
        </p>
      </div>

      {/* Navigation Controls */}
      <div
        className="flex items-center gap-5 justify-between py-1 px-2 sm:py-2 sm:px-4 md:px-6"
        style={{ maxWidth: "min(100%, 90vh)", margin: "0 auto" }}
      >
        {/* Prev button */}
        <button
          className="bg-blue-600/50 hover:bg-blue-600/70 active:bg-blue-700/60 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-blue-500/30"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-150 hover:-translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Video indicators/thumbnails */}
        <div className="flex space-x-2 sm:space-x-4 items-center">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-200 hover:shadow-md hover:shadow-blue-400/30 ${
                index === activeIndex
                  ? "border border-blue-400 scale-105 hover:border-blue-500"
                  : "border border-blue-600/50 opacity-70 hover:opacity-100 hover:border-blue-400"
              }`}
            >
              <img
                src={video.thumbnailSrc}
                alt={`Video ${index + 1}`}
                className="w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 object-cover rounded"
              />
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          className="bg-blue-600/50 hover:bg-blue-600/70 active:bg-blue-700/60 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-blue-500/30"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-150 hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideosCarousel;
