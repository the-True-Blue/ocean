import React from "react";
import ArtCollectionCarousel from "./ArtCollectionCarousel";
import background from "../../assets/mid_waterfall/background.png";

const MidWaterfall = () => {
  return (
    <div className="w-full md:h-[745px] h-[500px]">
      <div
        className="w-full h-full bg-no-repeat bg-center bg-[length:170%_100%]  md:bg-cover xl:!bg-[length:100%_100%] flex justify-center items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* carousel component */}
        <div className="container mx-auto px-4">
          <ArtCollectionCarousel />
        </div>
      </div>
    </div>
  );
};

export default MidWaterfall;
