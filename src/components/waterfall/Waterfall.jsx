import React from "react";
import background from "../../assets/waterfall/background.png";

const Waterfall = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Fondo de imagen que cubre todo el componente */}
      <div
        className="absolute w-full h-full bg-cover bg-no-repeat bg-center md:bg-cover xl:!bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="relative md:top-190 bottom-0 w-full max-w-[1359px] hidden md:block mx-auto">
        <div className="text-white flex flex-col gap-0 md:gap-0 md:flex-row justify-between font-poppins font-[900]">
          <div className="flex flex-col items-center lg:pl-25 md:pl-5">
            <h1 className="lg:text-[128px] text-8xl    text-center">20+</h1>
            <h2 className="lg:text-[80px] text-4xl   text-center">Skills</h2>
          </div>
          <div className="flex flex-col items-center lg:pr-5 md:pr-5">
            <h1 className="lg:text-[128px] text-7xl  text-center">10+ </h1>
            <h2 className="lg:text-[54px] text-4xl text-center">
              Projects <br /> Completed
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waterfall;
