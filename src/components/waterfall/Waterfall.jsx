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

      <div className="relative md:top-200 bottom-0 w-full pl-10 pr-12 pb-12">
        <div className="text-white flex flex-col gap-0 md:gap-0 md:flex-row justify-between font-poppins font-[900]">
          <div className="flex flex-col items-center">
            <h1 className="md:text-[128px] text-[80px] text-center">20+</h1>
            <h2 className="md:text-[80px] text-[50px] text-center">Skills</h2>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="md:text-[128px] text-[80px]  text-center">10+ </h1>
            <h2 className="md:text-[54px] text-[30px] text-center">
              Projects <br /> Completed
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waterfall;
