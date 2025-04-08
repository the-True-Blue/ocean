import React, { useEffect, useRef } from "react";

const KickstarterEmbed = ({ projectUrl, width = "100%", height = "400px" }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    //  Kickstarter URL
    if (!projectUrl || !projectUrl.includes("kickstarter.com/projects")) {
      console.error("Invalid Kickstarter project URL");
      return;
    }

    const embedUrl = `${projectUrl.replace(/\/$/, "")}/widget/card.html`;

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
