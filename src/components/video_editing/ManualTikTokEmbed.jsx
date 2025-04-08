import React, { useEffect, useRef, useState } from "react";

const ManualTikTokEmbed = ({ url }) => {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);
  const [containerSize, setContainerSize] = useState({
    width: "100%",
    height: "100%",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Function to adjust container size based on viewport
    const adjustSize = () => {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Calculate dimensions to fit the entire TikTok embed
      // Reduced size to make the entire content visible
      const maxHeight = Math.min(viewportHeight * 0.65, 550);

      // For mobile screens, limit width for better proportion
      let maxWidth = 300;
      if (viewportWidth > 768) {
        maxWidth = 320;
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
    blockquote.style.display = "flex";
    blockquote.style.justifyContent = "center";
    blockquote.style.alignItems = "center";

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

    // Set loaded state when script loads
    script.onload = () => {
      // Wait a moment for TikTok to initialize the embed
      setTimeout(() => {
        setIsLoaded(true);

        // Scale the TikTok container to fit properly
        if (containerRef.current) {
          const tiktokContainer =
            containerRef.current.querySelector(".tiktok-embed");
          if (tiktokContainer) {
            // Apply scale transformation to fit entire content
            tiktokContainer.style.transform = "scale(0.85)";
            tiktokContainer.style.transformOrigin = "center center";
          }
        }
      }, 1000);
    };

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

  // Effect to resize TikTok embed after it's loaded
  useEffect(() => {
    if (isLoaded && containerRef.current) {
      const resizeTikTokEmbed = () => {
        // Find and adjust TikTok iframe elements
        const tiktokElements = containerRef.current.querySelectorAll(
          ".tiktok-embed, iframe"
        );

        tiktokElements.forEach((element) => {
          // Apply scale transformation
          element.style.transform = "scale(0.85)";
          element.style.transformOrigin = "center center";

          // Adjust any iframe specific properties
          if (element.tagName.toLowerCase() === "iframe") {
            element.style.maxHeight = "100%";
          }
        });
      };

      // Run once immediately
      resizeTikTokEmbed();

      // And again after a short delay to handle delayed rendering
      const timer = setTimeout(resizeTikTokEmbed, 1500);

      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center"
      style={{
        width: containerSize.width,
        height: containerSize.height,
        margin: "0 auto",
        overflow: "hidden", // No scrolling, just contain
      }}
    />
  );
};

export default ManualTikTokEmbed;
