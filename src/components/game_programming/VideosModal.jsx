import React, { useEffect, useRef } from "react";
import VideosCarousel from "./VideosCarousel";

const VideosModal = ({ onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Handle escape key to close modal
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    // Save current scroll position
    const scrollY = window.scrollY;

    // Prevent body scrolling while modal is open but maintain scroll position
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.height = "100%";

    // Temporarily hide the navbar and other fixed elements
    const fixedElements = document.querySelectorAll(
      'nav, [class*="navbar"], [class*="header"], [class*="fixed"]'
    );
    const originalDisplayValues = new Map();

    fixedElements.forEach((element) => {
      if (
        element !== modalRef.current &&
        !modalRef.current?.contains(element) &&
        // Avoid hiding elements that are part of this modal
        !element.closest(".modal-overlay") &&
        element.tagName.toLowerCase() !== "body" &&
        element.tagName.toLowerCase() !== "html"
      ) {
        originalDisplayValues.set(element, {
          display: element.style.display,
          visibility: element.style.visibility,
          zIndex: element.style.zIndex,
        });

        // Instead of hiding completely, set a very low z-index
        element.style.zIndex = "-1";
        element.style.visibility = "hidden";
      }
    });

    // Handle z-index conflicts by temporarily adjusting other elements
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
      // Cleanup on modal close
      document.removeEventListener("keydown", handleEscKey);
      // Get the body's top position
      const scrollY =
        parseInt((document.body.style.top || "0").replace("px", "")) * -1;

      // Restore original body styles
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
      document.body.style.top = "";

      // Restore scroll position
      window.scrollTo(0, scrollY);

      // Restore original display values
      fixedElements.forEach((element) => {
        if (originalDisplayValues.has(element)) {
          const originalValues = originalDisplayValues.get(element);
          element.style.display = originalValues.display;
          element.style.visibility = originalValues.visibility;
          element.style.zIndex = originalValues.zIndex;
        }
      });

      // Restore original z-index values
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
      className="fixed inset-0 z-[99999] flex items-center justify-center backdrop-blur-sm md:pt-10 modal-overlay"
      onClick={handleOutsideClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        touchAction: "none",
        isolation: "isolate",
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full bg-gradient-to-b from-blue-900/40 to-indigo-900/40 rounded-lg overflow-hidden border border-blue-500/30"
        onClick={(e) => e.stopPropagation()}
        style={{
          contain: "layout",
          maxWidth: "95vw",
          maxHeight: "90vh",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Close button - adjusted position */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-2 right-2 z-50 text-white p-1.5 rounded-full bg-blue-600/50 hover:bg-blue-600/70 active:bg-blue-700/60 transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-md hover:shadow-blue-500/30 active:shadow-inner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 transition-transform duration-150 hover:rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal title - reduced spacing */}
        <div className="pt-3 pb-0 px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-rajdhani truncate">
            Sonic The Hedgehog Fan Game Videos
          </h2>
        </div>

        {/* VideosCarousel container - more flexible sizing */}
        <div
          className="flex-1 overflow-auto pb-5"
          style={{ minHeight: "200px" }}
        >
          <VideosCarousel />
        </div>
      </div>
    </div>
  );
};

export default VideosModal;
