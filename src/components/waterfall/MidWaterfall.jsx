import React from "react";
import ArtCollectionCarousel from "./ArtCollectionCarousel";

const MidWaterfall = () => {
  return (
    <div className="w-full h-[745px]">
      <div className="w-full h-full bg-no-repeat bg-cover bg-center bg-[url('src/assets/mid_waterfall/background.png')] flex justify-center items-center">
        {/* carousel component */}
        <div className="container mx-auto px-4">
          <ArtCollectionCarousel />
        </div>
      </div>
    </div>
  );
};

export default MidWaterfall;
