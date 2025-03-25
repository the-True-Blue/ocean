import heroImage from "../../assets/hero/hero.png";
import heromobile2 from "../../assets/hero/hero-mobile2.png";

const Hero2 = () => {
  // State to control modal visibility

  return (
    <div className="h-[561px] md:hidden relative w-full">
      {/* Imagen para Mobile (visible solo en pantallas pequeñas) */}
      <div
        className="absolute inset-0 md:hidden w-full"
        style={{
          backgroundImage: `url(${heromobile2})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      ></div>

      {/* Imagen para Desktop (oculta en pantallas pequeñas) */}
      <div
        className="absolute h-full inset-0 bg-center bg-cover bg-no-repeat hidden md:block "
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10  flex flex-col items-center  mb-0 pt-[185px] md:pt-[230px]">
        <h1 className="text-[32px]  font-poppins tracking-[15px] [text-shadow:_0_4px_4px_rgb(225_255_255_/_0.25)] md:text-[55px] text-[#094058] font-[800]  drop-shadow-lg">
          5 + YEARS
        </h1>
        <div className="mt-[27px] gap-[33px] flex flex-col items-center text-[#FFFFFF] sm:text-[12px] text-xs font-aldrich">
          <div
            className="flex 
          "
          >
            <h2 className="border-l-1 px-2">Game Designer</h2>
            <h2 className="border-l-1 px-2">Video Editor</h2>
            <h2 className="border-l-1 border-r-1 px-2">Software Engineer</h2>
          </div>
          <h2 className="border-l-1 border-r-1 px-2">3D Generalist</h2>
        </div>
        <h1 className="text-[32px] font-poppins text-white font-[800] tracking-[7px] [text-shadow:_0_4px_4px_rgb(225_255_255_/_0.25)] drop-shadow-lg mt-[37px]">
          OF EXPERIENCE
        </h1>
      </div>
    </div>
  );
};

export default Hero2;
