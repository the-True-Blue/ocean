import React, { useEffect } from "react";
import VideosCarousel from "./VideosCarousel";

const VideosModal = ({ onClose }) => {
  // Add event listener to close modal with escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  // Handle click outside modal content to close
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={handleOutsideClick}
    >
      <div className="relative w-full w-full h-full max-h-[80vh] md:max-h-[90vh] bg-gradient-to-b from-blue-900/40 to-indigo-900/40 rounded-lg overflow-hidden border border-blue-500/30">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white p-2 rounded-full bg-blue-600/50 hover:bg-blue-600/70 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal title */}
        <div className="pt-6 pb-2 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-rajdhani">
            Sonic The Hedgehog Fan Game Videos
          </h2>
        </div>

        {/* Enhanced VideosCarousel */}
        <div className="p-4 h-[calc(100%-80px)]">
          <VideosCarousel />
        </div>
      </div>
    </div>
  );
};

export default VideosModal;
