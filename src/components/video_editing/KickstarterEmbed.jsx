import React, { useEffect, useRef } from "react";

const KickstarterEmbed = ({ projectUrl, width = "100%", height = "400px" }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Ensure we have a valid Kickstarter URL
    if (!projectUrl || !projectUrl.includes("kickstarter.com/projects")) {
      console.error("Invalid Kickstarter project URL");
      return;
    }

    // Kickstarter projects can be embedded by appending /widget/card to their URL
    const embedUrl = `${projectUrl.replace(/\/$/, "")}/widget/card.html`;

    // Set the iframe src if ref is available
    if (iframeRef.current) {
      iframeRef.current.src = embedUrl;
    }
  }, [projectUrl]);

  if (!projectUrl) {
    return <div>No Kickstarter project URL provided</div>;
  }

  return (
    <div className="kickstarter-embed">
      <iframe
        ref={iframeRef}
        title="Kickstarter Project"
        className="kickstarter-frame"
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

export default KickstarterEmbed;
