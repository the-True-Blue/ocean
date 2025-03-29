import React, { useState, useEffect } from "react";
import thumbnail1 from "../../assets/game_programming/videos/thumbnail1.png";
import thumbnail2 from "../../assets/game_programming/videos/thumbnail2.png";

const VideosCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [embedUrls, setEmbedUrls] = useState([null, null]);
  const [showVideo, setShowVideo] = useState(false);

  // Extraer el ID de los archivos de Google Drive
  const getGoogleDriveFileId = (url) => {
    const match = url.match(/[-\w]{25,}/);
    return match ? match[0] : null;
  };

  useEffect(() => {
    // IDs de los videos de Google Drive
    const videoIds = [
      getGoogleDriveFileId(
        "https://drive.google.com/file/d/1XTCNFN6n02YicYi3P4dzFDNFDkDVYmu0/view?usp=share_link"
      ),
      getGoogleDriveFileId(
        "https://drive.google.com/file/d/19TPd4QnFLsBtRpkAtJWG8zI1fu1-4p2z/view?usp=share_link"
      ),
    ];

    // Crear URLs para embeber
    const urls = videoIds.map((id) =>
      id ? `https://drive.google.com/file/d/${id}/preview` : null
    );

    setEmbedUrls(urls);
  }, []);

  // Videos array usando thumbnails
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
    setIsPlaying(false);
    setShowVideo(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setIsPlaying(false);
    setShowVideo(false);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  const goToSlide = (index) => {
    if (activeIndex !== index) {
      setIsPlaying(false);
      setShowVideo(false);
      setActiveIndex(index);
    }
  };

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  // Touch handlers para swipe en móvil
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
      className="w-full h-full relative overflow-hidden flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Video Display */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full h-full max-h-[60vh] bg-black rounded-lg overflow-hidden relative">
          {/* Video player - Using iframe for Google Drive embed */}
          <div className="w-full h-full flex items-center justify-center bg-blue-900/30">
            {!showVideo ? (
              // Thumbnail con botón de play
              <div className="relative w-full h-full">
                <img
                  src={videos[activeIndex].thumbnailSrc}
                  alt={videos[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={handleVideoClick}
                >
                  <button className="bg-blue-500/70 hover:bg-blue-600/90 text-white rounded-full p-4 transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-12 h-12"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : embedUrls[activeIndex] ? (
              // Video de Google Drive
              <iframe
                src={embedUrls[activeIndex]}
                className="w-full h-full"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title={videos[activeIndex].title}
              ></iframe>
            ) : (
              // Estado de carga si la URL aún no está disponible
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-white bg-black/50 p-2 rounded">
                  Cargando video...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4 text-white text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-2">
          {videos[activeIndex].title}
        </h3>
        <p className="text-sm md:text-base text-gray-300">
          {videos[activeIndex].description}
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between py-4 px-8">
        {/* Prev button */}
        <button
          className="bg-blue-600/50 hover:bg-blue-600/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Video indicators/thumbnails */}
        <div className="flex space-x-3 items-center">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-200 ${
                index === activeIndex
                  ? "border-2 border-blue-400 scale-110"
                  : "border border-blue-600/50 opacity-70"
              }`}
            >
              <img
                src={video.thumbnailSrc}
                alt={`Video ${index + 1}`}
                className="w-16 h-10 md:w-24 md:h-14 object-cover rounded"
              />
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          className="bg-blue-600/50 hover:bg-blue-600/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
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
