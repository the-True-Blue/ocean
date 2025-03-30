import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import YoutubeIcon from "../../assets/hero/youtube.png";
import videoPoster from "../../assets/hero/heroVideoPoster.png";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  const modalRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Reset video playing state whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setVideoPlaying(false);
    } else {
      // Asegúrate de que el video se detenga cuando se cierra el modal
      setVideoPlaying(false);
    }
  }, [isOpen]);

  // Start video playback
  const handlePlayVideo = () => {
    setVideoPlaying(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      {/* Additional darker backdrop for video modal */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-60"></div>

      <div
        ref={modalRef}
        className="relative z-70 flex flex-col items-center justify-center"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="relative md:-right-82 md:top-1 top-3 -right-42 text-white rounded-full p-1 hover:bg-gray-700 transition-colors z-10"
          aria-label="Close video modal"
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full">
                      <div className="w-14 h-14 flex items-center justify-center bg-white/30 rounded-full">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
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
  );
};

export default VideoModal;
