import React, { useState } from "react";
import rocket from "../../assets/waterfall2/rocket.png";
import telescope from "../../assets/waterfall2/telescope.png";
import background from "../../assets/waterfall2/background.png";

const Waterfall2 = () => {
  const [activeCard, setActiveCard] = useState("rocket");

  return (
    <div className="w-full h-[1260px] relative overflow-hidden">
      <div
        className="absolute w-[120%] h-full bg-cover bg-no-repeat bg-[url('src/assets/waterfall2/background.png')] 
                     md:w-full md:right-0 
                     sm:right-[-20%]"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 h-full">
        {/* Web Design Projects Heading - Repositioned */}
        <h2 className="font-orbitron text-[40px] font-bold text-white absolute top-[100px] right-[40px] z-20 md:block hidden">
          Web Design Projects
        </h2>

        <div className="flex flex-col items-center md:block h-full">
          {/* Cards Container - Centrado en mobile, alineado a la derecha en desktop */}
          <div className="flex w-full items-center md:items-start justify-center md:justify-end md:pr-[75px] h-full md:pt-[180px]">
            <div className="relative w-full max-w-md md:w-[483px] h-[510px] md:h-[647px] px-4 md:px-0">
              {/* Telescope Card - Posición ligeramente desplazada */}
              <div
                className={`absolute ${
                  activeCard === "telescope"
                    ? "top-0 left-0"
                    : "top-25 md:-left-20"
                } w-full md:h-full md:w-[483px] h-[647px] rounded-2xl backdrop-blur-2xl p-6 transition-all duration-500 shadow-xl
                  ${
                    activeCard === "telescope"
                      ? "z-20"
                      : "z-10 backdrop-blur-3xl"
                  }
                  hover:shadow-[0_0_20px_rgba(147,197,253,0.5)] cursor-pointer`}
                onMouseEnter={() => setActiveCard("telescope")}
              >
                <div className="flex flex-col h-full justify-between">
                  <h3 className="font-inter text-2xl md:text-[40px] font-bold text-white mb-4">
                    StarryNight
                  </h3>

                  <p className="font-inter text-white text-sm md:text-[25px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Interdum quis amet, faucibus lorem. Lectus amet odio quis
                    sed adipiscing adipiscing magna non. Nullam turpis faucibus
                    ridiculus suscipit. Et blandit suspendisse curabitur eu
                    congue dui ut.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>

                  <div className="mt-auto flex justify-end">
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400 to-indigo-400 blur-md transition-all duration-500"></div>
                      <img
                        src={telescope}
                        alt="Telescope"
                        onClick={() =>
                          window.open(
                            "https://tempest-digital.io/Project%20presentation/index.html",
                            "_blank"
                          )
                        }
                        className="w-20 h-20 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`,
                              animationDuration: `${1 + Math.random() * 2}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rocket Card - Posición ligeramente desplazada */}
              <div
                className={`absolute ${
                  activeCard === "rocket"
                    ? "top-0 left-0"
                    : "top-25 md:-left-20"
                } w-full md:h-full md:w-[483px] h-[647px] rounded-2xl backdrop-blur-2xl p-6 transition-all duration-500 shadow-xl
                  ${activeCard === "rocket" ? "z-20" : "z-10"}
                  hover:shadow-[0_0_20px_rgba(167,139,250,0.5)] cursor-pointer`}
                onMouseEnter={() => setActiveCard("rocket")}
              >
                <div className="flex flex-col h-full justify-between">
                  <h3 className="font-inter text-2xl md:text-[40px] font-bold text-white mb-4">
                    Animated Comic
                  </h3>

                  <p className="font-inter text-white text-sm md:text-[25px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Interdum quis amet, faucibus lorem. Lectus amet odio quis
                    sed adipiscing adipiscing magna non. Nullam turpis faucibus
                    ridiculus suscipit. Et blandit suspendisse curabitur eu
                    congue dui ut.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>

                  <div className="mt-auto flex justify-end">
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-400 to-pink-400 blur-md transition-all duration-500"></div>
                      <img
                        src={rocket}
                        alt="Rocket"
                        onClick={() =>
                          window.open(
                            "https://tempest-digital.io/Final%20Project/FinalProject.html",
                            "_blank"
                          )
                        }
                        className="w-20 h-20 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`,
                              animationDuration: `${1 + Math.random() * 2}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waterfall2;
