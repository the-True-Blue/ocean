import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import projectImg from "../../assets/video_editing/proyects_img.png";
import avatarImg from "../../assets/hero/avatar.png";
import arrow from "../../assets/video_editing/Arrow.png";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import ManualTikTokEmbed from "./ManualTikTokEmbed";

// Projects data - move Kickstarter project to a separate variable
const kickstarterProject = {
  id: 11,
  title: "Jungles of Kuauhtla Trailer",
  description:
    "Video editing for 'Jungles of Kuauhtla'. The trailer was featured on Kickstarter.",
  videoUrl: "https://youtu.be/Cj-ykheti-Q?si=ipNRcNC0uqkOFC3D",
  kickstarterUrl:
    "https://www.kickstarter.com/projects/kuauhtla/jungles-of-kuauhtla-the-campaign-guide",
  featured: true,
  isKickstarter: true,
};

const projectsData = [
  {
    id: 1,
    title: "Miraculous Ladybug Opening Intro",
    description:
      "My take on the animated intro of the Miraculous Ladybug series when we cosplayed as them for New York Comic Con 2023.",
    videoUrl:
      "https://www.tiktok.com/@tempestdigital_/video/7342483870014606638",
  },
  {
    id: 2,
    title: "Miraculous Ladybug Transformation",
    description:
      "Made VFX and animated transitions in After Effects with my New York Comic Con 2023 costume to mimic Ladybug's transformation in the TV show.",
    videoUrl:
      "https://www.tiktok.com/@tempestdigital_/video/7342496338812194094",
  },
  {
    id: 3,
    title: "Ladybug Purify",
    description:
      "My animated take of a magical sequence in the Miraculous Ladybug series in my New York Comic Con 2023 costume.",
    videoUrl:
      "https://www.tiktok.com/@tempestdigital_/video/7342588420113354027",
  },
  {
    id: 4,
    title: "Ladybug Lucky Charm",
    description:
      "My own version of Ladybug's Lucky Charm sequence in the Miraculous Ladybug series in my New York Comic Con 2023 costume.",
    videoUrl:
      "https://www.tiktok.com/@tempestdigital_/video/7342584804065496362",
  },
  {
    id: 5,
    title: "Chat Noir Transformation",
    description:
      "Did my own animated take of Chat Noir's transformation in the Miraculous Ladybug series using costumes worn during New York Comic Con 2023.",
    videoUrl:
      "https://www.tiktok.com/@tempestdigital_/video/7342578762116074795",
  },
  {
    id: 6,
    title: "Chat Noir Cataclysm",
    description:
      "Did my own animated take of Chat Noir's cataclysm move in the Miraculous Ladybug series using costumes worn during New York Comic Con 2023.",
    videoUrl:
      "https://www.tiktok.com/@tempestdigital_/video/7342587057698557226",
  },
  {
    id: 7,
    title: "Ariel Under The Sea",
    description:
      "Dressed up as the Disney Princess, Ariel and Prince Eric, for New York Comic Con 2023 and did a short music video of our first day at the convention.",
    videoUrl:
      "https://www.tiktok.com/@tempestdigital_/video/7342470279085493547",
  },
  {
    id: 8,
    title: "Ariel Part of Your World",
    description:
      "Dressed up as the Disney Princess, Ariel and Prince Eric, for New York Comic Con 2023 and did a short music video of our first day at the convention.",
    videoUrl:
      "https://www.tiktok.com/@tempestdigital_/video/7342473270106557742",
  },
  {
    id: 9,
    title: "Across the Spiderverse TikTok Edit",
    description:
      "Made a TikTok Edit of us dressed up as Miles Morales and Gwen Stacy during New York Comic Con 2023 from the famous Across the Spiderverse movie. Using trendy text animations and VFX transitions, I made short-form video edit.",
    videoUrl: "https://www.instagram.com/p/C6uDVeHJG0b/?igsh=bXJyNm4xczlodHNz",
  },
  {
    id: 10,
    title: "Character Animation",
    description:
      "Drew a fictional avatar of myself and animated its facial features with each frame in Photoshop. Then added animations and VFX with After Effects.",
    videoUrl:
      "https://www.tiktok.com/@tempestdigital_/video/7342469276441365802",
  },
];

// Updated VideoModal component for proper video containment

const VideoModal = ({ project, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const modalRef = useRef(null);

  // Reference to the container for YouTube videos
  const youtubeContainerRef = useRef(null);

  useEffect(() => {
    if (project) {
      setLoading(true);
      setError(false);

      // Log for debugging
      console.log("Content type:", getVideoType(project.videoUrl));
      console.log("URL:", project.videoUrl);

      // For Instagram, ensure the embed script is loaded
      if (project.videoUrl.includes("instagram.com")) {
        const loadInstagramScript = () => {
          if (!window.instgrm) {
            const script = document.createElement("script");
            script.src = "//www.instagram.com/embed.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);

            script.onload = () => {
              // Process embeds when script loads
              if (window.instgrm) {
                window.instgrm.Embeds.process();
              }
            };
          } else if (window.instgrm) {
            // If already loaded, process embeds
            window.instgrm.Embeds.process();
          }
        };

        loadInstagramScript();

        // Try processing again after a short delay
        const timer = setTimeout(() => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        }, 1000);

        return () => clearTimeout(timer);
      }
    }
  }, [project]);

  // Manejar el z-index y la visibilidad para el modal de video anidado
  useEffect(() => {
    if (project) {
      // No necesitamos fijar el body de nuevo porque el modal padre ya lo hizo
      // Pero podemos manejar elementos adicionales que podrían estar sobre este modal

      const highZElements = document.querySelectorAll('[style*="z-index"]');
      const originalZValues = new Map();

      highZElements.forEach((element) => {
        if (
          element !== modalRef.current &&
          !modalRef.current?.contains(element) &&
          !element.closest(".carousel-modal-overlay") // No afectar elementos del carousel modal padre
        ) {
          const zValue = window.getComputedStyle(element).zIndex;
          if (zValue !== "auto" && parseInt(zValue) > 100) {
            originalZValues.set(element, element.style.zIndex);
            element.style.zIndex = "0";
          }
        }
      });

      return () => {
        // Restaurar valores de z-index
        highZElements.forEach((element) => {
          if (originalZValues.has(element)) {
            element.style.zIndex = originalZValues.get(element);
          }
        });
      };
    }
  }, [project]);

  // Helper function to determine video type
  const getVideoType = (url) => {
    if (url.includes("youtube.com") || url.includes("youtu.be"))
      return "YouTube";
    if (url.includes("tiktok.com")) return "TikTok";
    if (url.includes("instagram.com")) return "Instagram";
    return "external";
  };

  // Function to clean and validate Instagram URL
  const getCleanInstagramUrl = (url) => {
    // Ensure URL has the correct format for Instagram
    if (url.includes("instagram.com")) {
      // Try to extract the ID
      const regexPost = /instagram\.com\/p\/([^\/\?]+)/;
      const regexReel = /instagram\.com\/reel\/([^\/\?]+)/;

      let match = url.match(regexPost);
      if (!match) {
        match = url.match(regexReel);
      }

      if (match && match[1]) {
        const id = match[1];
        // Determine if it's a post or a reel
        if (url.includes("/reel/")) {
          return `https://www.instagram.com/reel/${id}/`;
        } else {
          return `https://www.instagram.com/p/${id}/`;
        }
      }
    }

    // If unable to clean, return original URL
    return url;
  };

  if (!project) return null;

  // Function to determine what type of embed to show
  const renderEmbed = () => {
    if (error) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <p className="mb-4">Error loading video.</p>
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              View on original site
            </a>
          </div>
        </div>
      );
    }

    // Handle Kickstarter videos
    if (project.isKickstarter && project.kickstarterUrl) {
      const embedUrl = `${project.kickstarterUrl.replace(
        /\/$/,
        ""
      )}/widget/video.html`;

      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black">
          <div className="w-full" style={{ aspectRatio: "16/9" }}>
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              title="Kickstarter Project Video"
              allowFullScreen
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setError(true);
              }}
            />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
            <span className="text-white text-sm">Video from Kickstarter:</span>
            <a
              href={project.kickstarterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5.6,18.6C5.6,18.6 6.55,20 8.4,20C10.7,20 11.44,18.6 13.6,18.6C15.1,18.6 15.85,19.4 17,19.4C18,19.4 18.8,18.6 18.8,18.6L19.25,17.5C19.25,17.5 18.1,18.05 17,18.05C16,18.05 14.85,17.3 13.6,17.3C12.3,17.3 10.65,18.65 8.4,18.65C6.75,18.65 5.6,17.5 5.6,17.5V18.6M19.2,16.5C19.2,16.5 18,17.5 17,17.5C16,17.5 15.1,16.7 13.6,16.7C12.1,16.7 10.45,18.25 8.2,18.25C6,18.25 4.8,16.55 4.8,16.55V18C4.8,18 6.1,19.5 8.2,19.5C10.7,19.5 11.3,18 13.6,18C15.4,18 16,18.5 17,18.5C18.1,18.5 19.2,17.5 19.2,17.5M19.2,15.5C19.2,15.5 18,16.5 17,16.5C16,16.5 15.1,15.7 13.6,15.7C12.1,15.7 10.45,17.25 8.2,17.25C6,17.25 4.8,15.55 4.8,15.55V17C4.8,17 6.1,18.5 8.2,18.5C10.7,18.5 11.3,17 13.6,17C15.4,17 16,17.5 17,17.5C18.1,17.5 19.2,16.5 19.2,16.5M19.2,14.5C19.2,14.5 18,15.5 17,15.5C16,15.5 15.1,14.7 13.6,14.7C12.1,14.7 10.45,16.25 8.2,16.25C6,16.25 4.8,14.55 4.8,14.55V16C4.8,16 6.1,17.5 8.2,17.5C10.7,17.5 11.3,16 13.6,16C15.4,16 16,16.5 17,16.5C18.1,16.5 19.2,15.5 19.2,15.5M19.2,13.5C19.2,13.5 18,14.5 17,14.5C16,14.5 15.1,13.7 13.6,13.7C12.1,13.7 10.45,15.25 8.2,15.25C6,15.25 4.8,13.55 4.8,13.55V15C4.8,15 6.1,16.5 8.2,16.5C10.7,16.5 11.3,15 13.6,15C15.4,15 16,15.5 17,15.5C18.1,15.5 19.2,14.5 19.2,14.5M8.2,13.9C6,13.9 4.8,12.2 4.8,12.2V13.65C4.8,13.65 6.1,15.15 8.2,15.15C10.7,15.15 11.3,13.65 13.6,13.65C15.4,13.65 16,14.15 17,14.15C18.1,14.15 19.2,13.15 19.2,13.15V12.15C19.2,12.15 18,13.15 17,13.15C16,13.15 15.1,12.35 13.6,12.35C12.1,12.35 10.45,13.9 8.2,13.9Z" />
              </svg>
              View on Kickstarter
            </a>
            <button
              onClick={() => {
                // Fallback to YouTube if Kickstarter embed fails
                if (error && project.videoUrl) {
                  window.open(project.videoUrl, "_blank");
                }
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Watch on YouTube
            </button>
          </div>
        </div>
      );
    }

    // YouTube videos
    if (
      project.videoUrl.includes("youtu.be") ||
      project.videoUrl.includes("youtube.com")
    ) {
      return (
        <div
          className="w-full h-full relative"
          ref={youtubeContainerRef}
          style={{
            position: "relative",
            paddingTop: "56.25%", // 16:9 aspect ratio
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          >
            <YouTubeEmbed
              url={project.videoUrl}
              width="100%"
              height="100%"
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setError(true);
              }}
            />
          </div>

          {/* Show Kickstarter link if applicable but using YouTube embed */}
          {project.kickstarterUrl && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <a
                href={project.kickstarterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500/90 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5.6,18.6C5.6,18.6 6.55,20 8.4,20C10.7,20 11.44,18.6 13.6,18.6C15.1,18.6 15.85,19.4 17,19.4C18,19.4 18.8,18.6 18.8,18.6L19.25,17.5C19.25,17.5 18.1,18.05 17,18.05C16,18.05 14.85,17.3 13.6,17.3C12.3,17.3 10.65,18.65 8.4,18.65C6.75,18.65 5.6,17.5 5.6,17.5V18.6M19.2,16.5C19.2,16.5 18,17.5 17,17.5C16,17.5 15.1,16.7 13.6,16.7C12.1,16.7 10.45,18.25 8.2,18.25C6,18.25 4.8,16.55 4.8,16.55V18C4.8,18 6.1,19.5 8.2,19.5C10.7,19.5 11.3,18 13.6,18C15.4,18 16,18.5 17,18.5C18.1,18.5 19.2,17.5 19.2,17.5M19.2,15.5C19.2,15.5 18,16.5 17,16.5C16,16.5 15.1,15.7 13.6,15.7C12.1,15.7 10.45,17.25 8.2,17.25C6,17.25 4.8,15.55 4.8,15.55V17C4.8,17 6.1,18.5 8.2,18.5C10.7,18.5 11.3,17 13.6,17C15.4,17 16,17.5 17,17.5C18.1,17.5 19.2,16.5 19.2,16.5M19.2,14.5C19.2,14.5 18,15.5 17,15.5C16,15.5 15.1,14.7 13.6,14.7C12.1,14.7 10.45,16.25 8.2,16.25C6,16.25 4.8,14.55 4.8,14.55V16C4.8,16 6.1,17.5 8.2,17.5C10.7,17.5 11.3,16 13.6,16C15.4,16 16,16.5 17,16.5C18.1,16.5 19.2,15.5 19.2,15.5M19.2,13.5C19.2,13.5 18,14.5 17,14.5C16,14.5 15.1,13.7 13.6,13.7C12.1,13.7 10.45,15.25 8.2,15.25C6,15.25 4.8,13.55 4.8,13.55V15C4.8,15 6.1,16.5 8.2,16.5C10.7,16.5 11.3,15 13.6,15C15.4,15 16,15.5 17,15.5C18.1,15.5 19.2,14.5 19.2,14.5M8.2,13.9C6,13.9 4.8,12.2 4.8,12.2V13.65C4.8,13.65 6.1,15.15 8.2,15.15C10.7,15.15 11.3,13.65 13.6,13.65C15.4,13.65 16,14.15 17,14.15C18.1,14.15 19.2,13.15 19.2,13.15V12.15C19.2,12.15 18,13.15 17,13.15C16,13.15 15.1,12.35 13.6,12.35C12.1,12.35 10.45,13.9 8.2,13.9Z" />
                </svg>
                View on Kickstarter
              </a>
            </div>
          )}
        </div>
      );
    }

    // TikTok videos - Using our manual implementation
    if (project.videoUrl.includes("tiktok.com")) {
      return (
        <div
          className="tiktok-container w-full"
          style={{ height: "calc(80vh - 40px)" }}
        >
          <ManualTikTokEmbed url={project.videoUrl} />
        </div>
      );
    }

    // Instagram videos
    if (project.videoUrl.includes("instagram.com")) {
      const cleanUrl = getCleanInstagramUrl(project.videoUrl);
      return (
        <div
          className="w-full h-full flex items-center justify-center overflow-auto instagram-embed-container"
          style={{ maxHeight: "calc(80vh - 40px)" }}
        >
          {/* Fallback in case the embed doesn't load */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 pointer-events-none opacity-0">
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium mb-2">Content not loading?</p>
              <a
                href={cleanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(cleanUrl, "_blank");
                }}
              >
                View on Instagram
              </a>
            </div>
          </div>

          {/* Using original component with clean URL */}
          <InstagramEmbed
            url={cleanUrl}
            captioned={true}
            onLoad={() => {
              console.log("Instagram embed loaded");
              setLoading(false);
              // Try processing again
              if (window.instgrm) {
                setTimeout(() => {
                  window.instgrm.Embeds.process();
                }, 500);
              }
            }}
            onError={() => {
              console.error("Error loading Instagram embed");
              setLoading(false);
              setError(true);
            }}
          />
        </div>
      );
    }

    // Default fallback
    return (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <div className="text-center text-white max-w-md p-4">
          <h3 className="text-lg font-bold mb-2">External video</h3>
          <p className="mb-4">This content is hosted on an external site.</p>
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Watch video
          </a>
        </div>
      </div>
    );
  };

  // Determine if this is a vertical video (TikTok or Instagram Reel)
  const isVerticalVideo = () => {
    return (
      project.videoUrl.includes("tiktok.com") ||
      (project.videoUrl.includes("instagram.com") &&
        project.videoUrl.includes("/reel/"))
    );
  };

  // Check if this is a YouTube video
  const isYouTubeVideo = () => {
    return (
      project.videoUrl.includes("youtu.be") ||
      project.videoUrl.includes("youtube.com")
    );
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 video-modal-overlay"
      onClick={onClose}
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
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      ></div>
      <div
        ref={modalRef}
        className={`relative z-10 w-full max-w-4xl bg-transparent rounded-lg overflow-hidden ${
          isVerticalVideo() ? "max-h-[90vh]" : ""
        }`}
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

        {/* Different container based on video type */}
        {isYouTubeVideo() ? (
          <div className="video-modal-content aspect-video bg-black w-full">
            {renderEmbed()}
          </div>
        ) : (
          <div
            className="video-modal-content bg-black"
            style={{
              maxHeight: isVerticalVideo() ? "90vh" : "auto",
              overflow: "hidden",
            }}
          >
            {renderEmbed()}
          </div>
        )}
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
  const modalRef = useRef(null);

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

  // Efecto para manejar el HTML cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      // Guardar la posición actual del scroll
      const scrollY = window.scrollY;

      // Prevenir el scroll del body y mantener la posición
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.height = "100%";

      // Ocultar temporalmente elementos fijos como el navbar
      const fixedElements = document.querySelectorAll(
        'nav, [class*="navbar"], [class*="header"], [class*="fixed"]'
      );
      const originalDisplayValues = new Map();

      fixedElements.forEach((element) => {
        if (
          element !== modalRef.current &&
          !modalRef.current?.contains(element) &&
          // Evitar ocultar elementos que son parte de este modal
          !element.closest(".carousel-modal-overlay") &&
          element.tagName.toLowerCase() !== "body" &&
          element.tagName.toLowerCase() !== "html"
        ) {
          originalDisplayValues.set(element, {
            display: element.style.display,
            visibility: element.style.visibility,
            zIndex: element.style.zIndex,
          });

          // En lugar de ocultar completamente, establecer un z-index muy bajo
          element.style.zIndex = "-1";
          element.style.visibility = "hidden";
        }
      });

      // Manejar conflictos de z-index
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
        // Obtener la posición de desplazamiento guardada
        const scrollY =
          parseInt((document.body.style.top || "0").replace("px", "")) * -1;

        // Restaurar los estilos originales del body
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.height = "";
        document.body.style.top = "";

        // Restaurar la posición de desplazamiento
        window.scrollTo(0, scrollY);

        // Restaurar los valores de visualización originales
        fixedElements.forEach((element) => {
          if (originalDisplayValues.has(element)) {
            const originalValues = originalDisplayValues.get(element);
            element.style.display = originalValues.display;
            element.style.visibility = originalValues.visibility;
            element.style.zIndex = originalValues.zIndex;
          }
        });

        // Restaurar los valores originales de z-index
        highZElements.forEach((element) => {
          if (originalZValues.has(element)) {
            element.style.zIndex = originalZValues.get(element);
          }
        });
      };
    }
  }, [isOpen]);

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
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center carousel-modal-overlay"
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
        className="absolute inset-0 backdrop-blur-md"
        onClick={onClose}
      ></div>
      <div
        ref={modalRef}
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
