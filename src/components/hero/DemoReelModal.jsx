import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const videoSrc = `${import.meta.env.BASE_URL}videos/demo-reel.mp4`;
const playerSrc = `${import.meta.env.BASE_URL}demo-reel-player.html`;

const DemoReelModal = ({ onClose, onPlaybackOpenChange }) => {
  const [hasVideoError, setHasVideoError] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    onPlaybackOpenChange(true);
    return () => onPlaybackOpenChange(false);
  }, [onPlaybackOpenChange]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const pageRoot = document.getElementById("root");
    const previousVisibility = pageRoot?.style.visibility;
    const previousHeight = pageRoot?.style.height;
    const previousContentVisibility = pageRoot?.style.contentVisibility;
    const previousInert = pageRoot?.inert;
    const animations = pageRoot
      ? pageRoot.getAnimations({ subtree: true }).filter((animation) => animation.playState === "running")
      : [];
    animations.forEach((animation) => animation.pause());
    document.body.style.overflow = "hidden";
    // Preserve page state and size while skipping background layout and paint.
    if (pageRoot) {
      pageRoot.style.height = `${pageRoot.getBoundingClientRect().height}px`;
      pageRoot.style.contentVisibility = "hidden";
      pageRoot.style.visibility = "hidden";
      pageRoot.inert = true;
    }
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    const handlePlayerMessage = (event) => {
      if (
        event.origin !== window.location.origin ||
        event.source !== playerRef.current?.contentWindow
      ) return;
      if (event.data?.type === "demo-reel-close") onClose();
      if (event.data?.type === "demo-reel-error") setHasVideoError(true);
    };
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("message", handlePlayerMessage);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (pageRoot) {
        pageRoot.style.height = previousHeight;
        pageRoot.style.contentVisibility = previousContentVisibility;
        pageRoot.style.visibility = previousVisibility;
        pageRoot.inert = previousInert;
      }
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("message", handlePlayerMessage);
      animations.forEach((animation) => {
        if (animation.playState === "paused") animation.play();
      });
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-black p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-reel-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-5xl max-h-[90dvh] overflow-y-auto rounded-xl border border-blue-400/40 bg-blue-950 p-4 text-white">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 id="demo-reel-title" className="text-xl font-bold">Demo Reel</h2>
          <button
            onClick={onClose}
            aria-label="Close demo reel"
            autoFocus
            className="rounded-full p-1 hover:bg-blue-800 focus-visible:outline focus-visible:outline-2"
          >
            <X size={26} />
          </button>
        </div>
        <iframe
          ref={playerRef}
          src={playerSrc}
          title="Demo reel video"
          allowFullScreen
          className="block w-full aspect-video max-h-[65dvh] border-0 bg-black"
        />
        {hasVideoError && (
          <p role="alert" className="mt-3 text-red-300">
            The demo reel could not be loaded. Try opening the video below.
          </p>
        )}
        <a
          href={videoSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm underline underline-offset-4 hover:text-blue-200"
        >
          Open video in a new tab
        </a>
      </div>
    </div>,
    document.body
  );
};

export default DemoReelModal;
