import React, { useEffect, useRef } from "react";
import { X, Play, ExternalLink } from "lucide-react";
import profilePicture from "../../assets/hero/About-picture.png";
import check from "../../assets/hero/check.png";
import avatar from "../../assets/hero/avatar.png";
import featuredVideoFile from "../../assets/hero/featured_google.mp4";
import videoThumbnail from "../../assets/hero/videoThumbnail.png";

const featuredVideo = {
  title: "Google Play Ad",
  description:
    "Selected to participate in this ad; we discuss how services like Google Play can aid developers in making games more accessible through mobile devices.",
  sourceUrl: "https://x.com/googleplaybiz/status/2034036547100549140?s=46",
};

const AboutModal = ({ isOpen, onClose, onOpenVideo }) => {
  const modalRef = useRef(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Handle escape key to close
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with blur effect */}
      <div className="fixed inset-0 backdrop-blur-xs z-30 h-screen"></div>

      <div className="h-screen w-full fixed md:top-0 top-15 left-0 z-40">
        {/* Modal container */}
        <div
          ref={modalRef}
          className="absolute inset-0 z-50 flex flex-col items-center md:justify-center py-10 pt-16 md:pt-10"
        >
          {/* Close button - top of modal */}
          <div className="w-full max-w-[1212px] flex justify-end px-10 md:px-0 mb-2">
            <button
              onClick={onClose}
              className="text-white rounded-full p-1 hover:bg-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={26} />
            </button>
          </div>

          {/* Featured Video - Desktop */}
          {/* Gradient border wrapper */}
          <div className="hidden md:block relative w-full lg:max-w-[1000px] max-w-[700px] mb-20 rounded-xl p-[1px] border-teal-300 border">
            {/* Featured badge */}
            <div className="absolute top-1 right-1 z-20">
              <div className="bg-yellow-400 text-blue-900 py-1 px-3 text-xs font-bold shadow-md font-orbitron rounded-tr-lg rounded-tl-xs">
                FEATURED
              </div>
            </div>
            {/* Corner glows: large dot sits ON the corner edge, smaller ones fan inward */}
            {/* Top-left */}
            <div
              className="absolute z-10"
              style={{ top: "-6px", left: "-6px" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: "12px",
                  height: "12px",
                  top: 0,
                  left: 0,
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 40%,transparent 70%)",
                  boxShadow: "0 0 10px 4px rgba(125,216,248,0.95)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  top: "2px",
                  left: "10px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  top: "3px",
                  left: "21px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  top: "10px",
                  left: "2px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  top: "21px",
                  left: "3px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
            </div>
            {/* Top-right */}
            <div
              className="absolute z-10"
              style={{ top: "-6px", right: "-6px" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: "12px",
                  height: "12px",
                  top: 0,
                  right: 0,
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 40%,transparent 70%)",
                  boxShadow: "0 0 10px 4px rgba(125,216,248,0.95)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  top: "2px",
                  right: "10px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  top: "3px",
                  right: "21px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  top: "10px",
                  right: "2px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  top: "21px",
                  right: "3px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
            </div>
            {/* Bottom-left */}
            <div
              className="absolute z-10"
              style={{ bottom: "-6px", left: "-6px" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: "12px",
                  height: "12px",
                  bottom: 0,
                  left: 0,
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 40%,transparent 70%)",
                  boxShadow: "0 0 10px 4px rgba(125,216,248,0.95)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  bottom: "2px",
                  left: "10px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  bottom: "3px",
                  left: "21px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  bottom: "10px",
                  left: "2px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  bottom: "21px",
                  left: "3px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
            </div>
            {/* Bottom-right */}
            <div
              className="absolute z-10"
              style={{ bottom: "-6px", right: "-6px" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: "12px",
                  height: "12px",
                  bottom: 0,
                  right: 0,
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 40%,transparent 70%)",
                  boxShadow: "0 0 10px 4px rgba(125,216,248,0.95)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  bottom: "2px",
                  right: "10px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  bottom: "3px",
                  right: "21px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  bottom: "10px",
                  right: "2px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  bottom: "21px",
                  right: "3px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
            </div>
            <div className="flex flex-row w-full rounded-xl overflow-hidden backdrop-blur-xl bg-[#0d2a5e]/10">
              <div className="w-2/5 p-3">
                <div
                  className="w-full overflow-hidden rounded-lg shadow-lg border-teal-300 border"
                  style={{ aspectRatio: "16/9" }}
                >
                  <video
                    src={featuredVideoFile}
                    poster={videoThumbnail}
                    className="w-full h-full object-cover"
                    controls
                    style={{ objectPosition: "center 15%" }}
                  />
                </div>
              </div>
              <div className="w-3/5 p-4 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-white font-orbitron">
                  {featuredVideo.title}
                </h3>
                <hr className="border-white/20" />
                <p className="text-white/90 text-lg font-rajdhani line-clamp-3">
                  {featuredVideo.description}
                </p>
                <a
                  href={featuredVideo.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center flex items-center hover:scale-105 gap-2 px-4 py-2 bg-[linear-gradient(170deg,#6a7fac_0%,#305798_30%,#0933b9_60%)] border-[#4c6ef5] text-white text-sm  rounded-full transition-colors duration-200"
                >
                  <ExternalLink size={20} className="text-[#4f87f2]" />
                  View Full Campaign
                </a>
                <hr className="border-white/20" />
                <p className="text-white/90 text-lg font-rajdhani">
                  Play anywhere, anytime, any way with Google Play.
                </p>
              </div>
            </div>
          </div>

          {/* About Desktop */}
          <div className="hidden md:block px-10 relative">
            {/* Close button */}
            <div className="flex w-full xl:h-[369px]">
              <div className="max-w-[266px]  h-auto object-contain relative">
                <div className="flex flex-col items-start relative">
                  <img
                    src={profilePicture}
                    alt="profile-picture"
                    className="w-full "
                  />
                  {/* Parent container for positioning */}
                  <div className="absolute -bottom-25 max-w-[266px] w-full">
                    {/* Border layer */}
                    <div className="absolute rounded-xl inset-0 -m-0.5 [clip-path:polygon(30px_0%,100%_0%,100%_100%,0%_100%,0%_30px)] bg-[#729a9f] z-0"></div>
                    {/* Content layer */}
                    <div className="relative lg:ps-[19px] lg:pe-[19px] rounded-xl [clip-path:polygon(30px_0%,100%_0%,100%_100%,0%_100%,0%_30px)] flex flex-col p-3 items-start bg-[linear-gradient(170deg,#6a7fac_0%,#305798_30%,#0933b9_60%)] gap-2 z-10">
                      <div className="flex gap-2">
                        <img src={avatar} alt="avatar-icon" />
                        <div className="flex">
                          <h3
                            className="text-white font-rajdhani text-[8px] font-[600] md:text-[14.92px]"
                            style={{
                              WebkitTextStroke: "1.7px #FFFFFF47",
                              textStroke: "1.7px #FFFFFF47",
                            }}
                          >
                            @tempestdigital_
                          </h3>
                          <img
                            src={check}
                            alt="check-icon"
                            className="w-[5px] object-contain"
                          />
                        </div>
                      </div>
                      <div
                        className="flex w-full flex-col gap-1 text-white font-[600] font-rajdhani xl:text-[16px] text-xs"
                        style={{
                          WebkitTextStroke: "1.7px #FFFFFF47",
                          textStroke: "1.7px #FFFFFF47",
                        }}
                      >
                        <div className="flex justify-between">
                          <h3 className="border-s-1 border-e-1 px-1">
                            Where Waves take you to Unreality. Make your game
                            map's identity the essence of character design.
                          </h3>
                          <h3 className="border-s-1 border-e-1 px-1"></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[946px] w-full h-full font-inter ps-[60px] py-[24px] pe-[24px] text-white about-me-border backdrop-blur-xl bg-blue-500/10">
                <h1 className="text-[25px] font-[800]">About Me</h1>
                <p className="text-[11px] font-[400]">
                  Hey guys! I'm Dominique, but you can call me Dom for short. If
                  it wasn't obvious already, I love the ocean, I love blue and I
                  am obsessed with Sonic The Hedgehog. Something as simple as
                  the color blue and a hedgehog is why I'm a game developer
                  today. I am a 3D artist and game programmer. Outside of game
                  development, I'm a software developer, primarily in front-end
                  development and UX design. In addition to that, I am also a
                  video editor and I take pride in making engaging edits of my
                  work and my life. My creative expression in the game dev
                  environment enables me to fully drive the player experience. I
                  love constrcuting maps for video games. Open-world or not, a
                  map with depth in a game is what tells a complete story. I can
                  visualize anything in seconds with the patience to actually
                  code it. Whether it's designing immsersive game environments
                  with VFX in Unreal Engine, modeling stylized 3D assets in Maya
                  with Substance or ZBrush, or program game mechanics that make
                  you think outside the box, it's all done in one house!
                </p>
                <div
                  className="flex items-center justify-end gap-2 mt-5 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={onOpenVideo}
                >
                  <Play className="w-4 fill-white"></Play>
                  <h3 className="text-[10px]">Intro</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Video - Mobile */}
          {/* Gradient border wrapper */}
          <div
            className="md:hidden relative w-[85vw] max-w-[320px] mb-3 rounded-xl p-[1px]"
            style={{
              background:
                "linear-gradient(135deg, #7dd8f8 0%, #2a7fd4 30%, #1a3a8f 50%, #2a7fd4 70%, #7dd8f8 100%)",
              boxShadow:
                "0 0 12px 2px rgba(100,180,255,0.3), 0 0 24px 2px rgba(60,120,220,0.12)",
            }}
          >
            {/* Featured badge */}
            <div className="absolute top-1 right-1 z-20">
              <div className="bg-yellow-400 text-blue-900 py-0.5 px-2 text-[6px] font-bold shadow-md font-orbitron rounded-tr-lg rounded-tl-xs">
                FEATURED
              </div>
            </div>
            {/* Top-left */}
            <div
              className="absolute z-10"
              style={{ top: "-6px", left: "-6px" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: "12px",
                  height: "12px",
                  top: 0,
                  left: 0,
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 40%,transparent 70%)",
                  boxShadow: "0 0 10px 4px rgba(125,216,248,0.95)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  top: "2px",
                  left: "10px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  top: "3px",
                  left: "21px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  top: "10px",
                  left: "2px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  top: "21px",
                  left: "3px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
            </div>
            {/* Top-right */}
            <div
              className="absolute z-10"
              style={{ top: "-6px", right: "-6px" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: "12px",
                  height: "12px",
                  top: 0,
                  right: 0,
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 40%,transparent 70%)",
                  boxShadow: "0 0 10px 4px rgba(125,216,248,0.95)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  top: "2px",
                  right: "10px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  top: "3px",
                  right: "21px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  top: "10px",
                  right: "2px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  top: "21px",
                  right: "3px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
            </div>
            {/* Bottom-left */}
            <div
              className="absolute z-10"
              style={{ bottom: "-6px", left: "-6px" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: "12px",
                  height: "12px",
                  bottom: 0,
                  left: 0,
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 40%,transparent 70%)",
                  boxShadow: "0 0 10px 4px rgba(125,216,248,0.95)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  bottom: "2px",
                  left: "10px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  bottom: "3px",
                  left: "21px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  bottom: "10px",
                  left: "2px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  bottom: "21px",
                  left: "3px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
            </div>
            {/* Bottom-right */}
            <div
              className="absolute z-10"
              style={{ bottom: "-6px", right: "-6px" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: "12px",
                  height: "12px",
                  bottom: 0,
                  right: 0,
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 40%,transparent 70%)",
                  boxShadow: "0 0 10px 4px rgba(125,216,248,0.95)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  bottom: "2px",
                  right: "10px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  bottom: "3px",
                  right: "21px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  bottom: "10px",
                  right: "2px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 5px 2px rgba(125,216,248,0.75)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  bottom: "21px",
                  right: "3px",
                  background:
                    "radial-gradient(circle,#fff 0%,#7dd8f8 50%,transparent 70%)",
                  boxShadow: "0 0 3px 1px rgba(125,216,248,0.6)",
                }}
              />
            </div>
            <div className="flex flex-row w-full rounded-xl overflow-hidden backdrop-blur-xl bg-[#0d2a5e]/60">
              <div className="w-2/5 p-1.5">
                <div
                  className="w-full overflow-hidden rounded-lg shadow-lg"
                  style={{ aspectRatio: "16/9" }}
                >
                  <video
                    src={featuredVideoFile}
                    poster={videoThumbnail}
                    className="w-full h-full object-cover"
                    controls
                  />
                </div>
              </div>
              <div className="w-3/5 p-2 flex flex-col justify-between">
                <h3 className="text-[10px] font-bold text-white font-orbitron truncate">
                  {featuredVideo.title}
                </h3>
                <hr className="border-white/20" />
                <p className="text-white/90 text-[8px] font-rajdhani line-clamp-2">
                  {featuredVideo.description}
                </p>
                <a
                  href={featuredVideo.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center flex items-center gap-1 px-2 py-1 bg-[linear-gradient(170deg,#6a7fac_0%,#305798_30%,#0933b9_60%)] border-[#4c6ef5] text-white text-[6px] font-orbitron rounded-full transition-colors duration-200"
                >
                  <ExternalLink size={10} className="text-[#4f87f2]" />
                  View Full Campaign
                </a>
                <hr className="border-white/20" />
                <p className="text-white/90 text-[8px] font-rajdhani line-clamp-1">
                  Play anywhere, anytime, any way with Google Play.
                </p>
              </div>
            </div>
          </div>

          {/* About Mobile */}
          <div className="md:hidden relative mt-0 w-[85vw] max-w-[320px]">
            <div className="relative pt-[90px]">
              <div className="absolute left-0 top-0 z-10 w-[108px]">
                <img
                  src={profilePicture}
                  alt="profile-picture"
                  className="w-full"
                />
                <div className="absolute w-full -bottom-3">
                  <div className="absolute rounded-xl inset-0 -m-0.5 [clip-path:polygon(12px_0%,100%_0%,100%_100%,0%_100%,0%_12px)] bg-[#729a9f] z-0"></div>
                  <div className="relative rounded-xl [clip-path:polygon(12px_0%,100%_0%,100%_100%,0%_100%,0%_12px)] flex px-1.5 py-1.5 items-center bg-gradient-to-r from-[rgb(37_150_190)] to-[#4c8284] gap-1 z-10">
                    <img
                      src={avatar}
                      alt="avatar-icon"
                      className="w-[12px] shrink-0"
                    />
                    <div className="flex items-center">
                      <h3 className="text-white font-rajdhani text-[7px] whitespace-nowrap">
                        @tempestdigital_
                      </h3>
                      <img
                        src={check}
                        alt="check-icon"
                        className="w-[4px] object-contain shrink-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="font-inter ml-[90px] pb-[16px] pt-[12px] px-[14px] text-white about-me-border bg-linear-to-b from-[#53b1ba] via-[#1f8aa8] to-[#274f79]">
                <h1 className="text-[16px] font-[800] ps-5">About Me</h1>
                <p className="text-[8px] font-[400] leading-relaxed mt-1 ps-5">
                  Hey guys! I'm Dominique, but you can call me Dom for short. If
                  it wasn't obvious already, I love the ocean, I love blue and I
                  am obsessed with Sonic The Hedgehog. Something as simple as
                  the color blue and a hedgehog is why I'm a game developer
                  today. I am a 3D artist and game programmer. Outside of game
                  development, I'm a software developer, primarily in front-end
                  development and UX design. In addition to that, I am also a
                  video editor and I take pride in making engaging edits of my
                  work and my life. My creative expression in the game dev
                  environment enables me to fully drive the player experience. I
                  love constrcuting maps for video games. Open-world or not, a
                  map with depth in a game is what tells a complete story. I can
                  visualize anything in seconds with the patience to actually
                  code it. Whether it's designing immsersive game environments
                  with VFX in Unreal Engine, modeling stylized 3D assets in Maya
                  with Substance or ZBrush, or program game mechanics that make
                  you think outside the box, it's all done in one house!
                </p>
                <div
                  className="flex items-center justify-end gap-2 mt-3 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={onOpenVideo}
                >
                  <Play className="w-3 fill-white"></Play>
                  <h3 className="text-[8px]">Intro</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutModal;
