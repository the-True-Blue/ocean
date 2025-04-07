import React, { useEffect, useRef, useState } from "react";

const ManualTikTokEmbed = ({ url }) => {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);
  const [containerSize, setContainerSize] = useState({
    width: "100%",
    height: "100%",
  });

  useEffect(() => {
    // Function to adjust container size based on viewport
    const adjustSize = () => {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Calculate max dimensions (80% of viewport height, with some spacing)
      const maxHeight = Math.min(viewportHeight * 0.8, 650);

      // For mobile screens, limit width
      let maxWidth = 340;
      if (viewportWidth > 768) {
        maxWidth = 380; // Slightly larger for desktop
      }

      setContainerSize({
        width: `${maxWidth}px`,
        height: `${maxHeight}px`,
      });
    };

    // Initial adjustment
    adjustSize();

    // Add resize listener for responsive behavior
    window.addEventListener("resize", adjustSize);

    // Clear any previous script
    if (scriptRef.current) {
      document.head.removeChild(scriptRef.current);
      scriptRef.current = null;
    }

    if (!containerRef.current || !url) return;

    // Create the blockquote for TikTok
    containerRef.current.innerHTML = "";
    const blockquote = document.createElement("blockquote");
    blockquote.className = "tiktok-embed";
    blockquote.setAttribute("cite", url);

    // Force TikTok embed to be proper size
    blockquote.style.maxWidth = "100%";
    blockquote.style.margin = "0 auto";

    // Extract video ID if available
    const videoIdMatch = url.match(/\/video\/(\d+)/);
    if (videoIdMatch && videoIdMatch[1]) {
      blockquote.setAttribute("data-video-id", videoIdMatch[1]);
    }

    // Add placeholder
    const placeholder = document.createElement("div");
    placeholder.textContent = "Loading TikTok...";
    placeholder.style.display = "flex";
    placeholder.style.alignItems = "center";
    placeholder.style.justifyContent = "center";
    placeholder.style.height = "100%";
    blockquote.appendChild(placeholder);

    // Add blockquote to container
    containerRef.current.appendChild(blockquote);

    // Create and load TikTok script with timestamp to force reload
    const script = document.createElement("script");
    script.src = `https://www.tiktok.com/embed.js?t=${Date.now()}`;
    script.id = "tiktok-embed-script";
    script.async = true;

    // Save script reference for cleanup
    scriptRef.current = script;

    // Add script to head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", adjustSize);
      if (scriptRef.current) {
        document.head.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center overflow-auto"
      style={{
        width: containerSize.width,
        height: containerSize.height,
        margin: "0 auto",
        // Add subtle scrolling if needed
        overflowY: "auto",
        // Improve scrollbar appearance
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(155, 155, 155, 0.5) transparent",
      }}
    />
  );
};

export default ManualTikTokEmbed;
