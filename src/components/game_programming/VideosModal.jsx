import React, { useEffect, useRef } from "react";
import VideosCarousel from "./VideosCarousel";

const VideosModal = ({ onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    // Modificaciones para asegurar que el modal esté por encima de todo
    document.body.style.overflow = "hidden";
    document.body.style.position = "relative";

    // Ocultar temporalmente todos los elementos con z-index alto
    const highZElements = document.querySelectorAll('[style*="z-index"]');
    const originalZValues = new Map();

    highZElements.forEach((element) => {
      if (
        element !== modalRef.current &&
        !modalRef.current?.contains(element)
      ) {
        const zValue = window.getComputedStyle(element).zIndex;
        if (zValue !== "auto" && parseInt(zValue) > 100) {
          originalZValues.set(element, element.style.zIndex);
          element.style.zIndex = "0";
        }
      }
    });

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
      document.body.style.position = "";

      // Restaurar los z-index originales
      highZElements.forEach((element) => {
        if (originalZValues.has(element)) {
          element.style.zIndex = originalZValues.get(element);
        }
      });
    };
  }, [onClose]);

  // Handle click outside modal content to close
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center backdrop-blur-sm"
      onClick={handleOutsideClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        touchAction: "none",
        isolation: "isolate" /* Crea un nuevo contexto de apilamiento */,
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full h-full max-h-[90dvh] bg-gradient-to-b from-blue-900/40 to-indigo-900/40 rounded-lg overflow-hidden border border-blue-500/30"
        onClick={(e) => e.stopPropagation()}
        style={{
          contain: "layout" /* Mejora el rendimiento */,
          maxWidth: "95vw",
        }}
      >
        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 z-50 text-white p-2 rounded-full bg-blue-600/50 hover:bg-blue-600/70 active:bg-blue-700/60 transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md hover:shadow-blue-500/30 active:shadow-inner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 transition-transform duration-150 hover:rotate-90"
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
