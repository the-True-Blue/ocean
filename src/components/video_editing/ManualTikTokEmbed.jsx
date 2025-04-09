import React, { useEffect, useRef, useState } from "react";

const ManualTikTokEmbed = ({ url, onLoad }) => {
  const embedRef = useRef(null);
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [scale, setScale] = useState(1);
  const [containerHeight, setContainerHeight] = useState("auto");

  // Function to extract TikTok video ID from URL
  const extractTikTokId = (url) => {
    if (!url || !url.includes("tiktok.com")) return null;

    const regex = /tiktok\.com\/@[^\/]+\/video\/(\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Calculate and apply the appropriate scale based on viewport height
  const calculateScale = () => {
    const viewportHeight = window.innerHeight;

    // Default TikTok embed is around 650-700px tall with content
    const defaultHeight = 680;

    // Calculate available height (accounting for modal padding)
    const availableHeight = viewportHeight * 0.8 - 30; // 80% of viewport minus padding

    // Calculate the scale ratio
    let newScale = 1;

    // If the available height is less than what TikTok needs, scale it down
    if (availableHeight < defaultHeight) {
      newScale = Math.max(0.5, availableHeight / defaultHeight); // Never go below 0.5
    }

    return newScale;
  };

  // Handle window resize to recalculate scale
  useEffect(() => {
    const handleResize = () => {
      const newScale = calculateScale();
      setScale(newScale);

      // Update container height based on scale
      // This allows the scrollbar to appear at the right position
      if (containerRef.current) {
        const viewportHeight = window.innerHeight;
        const adjustedHeight = viewportHeight * 0.8; // 80% of viewport
        setContainerHeight(`${adjustedHeight}px`);
      }
    };

    // Initial calculation
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Create and handle the TikTok embed
  useEffect(() => {
    const videoId = extractTikTokId(url);

    if (!videoId) {
      console.error("Invalid TikTok URL");
      setError(true);
      setLoading(false);
      if (onLoad) onLoad();
      return;
    }

    // Create the embed
    const createEmbed = () => {
      if (!embedRef.current) return;

      // Clear any existing content
      embedRef.current.innerHTML = "";

      // Create the blockquote element that TikTok script transforms
      const blockquote = document.createElement("blockquote");
      blockquote.className = "tiktok-embed";
      blockquote.setAttribute("cite", url);
      blockquote.setAttribute("data-video-id", videoId);

      // Add required attributes
      blockquote.setAttribute("data-embed-type", "video");

      // Create the section for TikTok script
      const section = document.createElement("section");
      blockquote.appendChild(section);

      // Add the blockquote to our container
      embedRef.current.appendChild(blockquote);

      // Load or reload the TikTok embed script
      loadTikTokScript();
    };

    const loadTikTokScript = () => {
      // Check if script is already loaded
      if (window.tiktokEmbed) {
        try {
          window.tiktokEmbed.reloadEmbeds();
          setLoading(false);
          if (onLoad) onLoad();
        } catch (e) {
          // If reload fails, load the script again
          loadScript();
        }
      } else {
        loadScript();
      }
    };

    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      script.onload = () => {
        setLoading(false);
        if (onLoad) onLoad();
      };
      script.onerror = () => {
        console.error("Error loading TikTok embed script");
        setError(true);
        setLoading(false);
        if (onLoad) onLoad();
      };

      document.body.appendChild(script);
    };

    // Initialize embed
    createEmbed();
  }, [url, onLoad]);

  return (
    <div
      ref={containerRef}
      className="tiktok-container w-full flex items-center justify-center overflow-hidden"
      style={{
        height: "auto",
        maxHeight: "95vh",
      }}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <div className="loading-spinner w-10 h-10 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
      )}

      {error ? (
        <div className="flex flex-col items-center justify-center p-6 bg-black/80 rounded-lg text-center">
          <p className="text-red-500 text-lg mb-3">
            Could not load TikTok video
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
          >
            View on TikTok
          </a>
        </div>
      ) : (
        <div
          className="transform-container"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center", // <-- SOLUCIÓN: Cambiar a 'center center'
            width: "100%",
            maxWidth: "380px",
            padding: "0.5rem 0",
          }}
        >
          <div
            ref={embedRef}
            className="tiktok-embed-container"
            style={{
              minHeight: "200px",
              width: "100%",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ManualTikTokEmbed;
