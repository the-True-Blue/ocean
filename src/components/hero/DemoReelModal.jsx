import { useEffect, useState } from "react";
import { X } from "lucide-react";

const videoSrc = `${import.meta.env.BASE_URL}videos/demo-reel.mp4`;
const posterSrc = `${import.meta.env.BASE_URL}videos/demo-reel.jpg`;

const DemoReelModal = ({ onClose }) => {
  const [hasVideoError, setHasVideoError] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
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
        <video
          src={videoSrc}
          poster={posterSrc}
          controls
          playsInline
          preload="metadata"
          aria-label="Demo reel video"
          className="w-full max-h-[65dvh] rounded-lg bg-black"
          onError={() => setHasVideoError(true)}
        >
          Your browser does not support embedded video.
        </video>
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
    </div>
  );
};

export default DemoReelModal;
