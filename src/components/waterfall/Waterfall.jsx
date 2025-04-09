import React, { useEffect, useRef } from "react";
import background from "../../assets/waterfall/background.png";

const Waterfall = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full md:h-screen h-[750px] relative flex flex-col md:justify-end justify-center overflow-hidden">
      <div
        className="absolute w-full h-full bg-[length:170%_100%] bg-no-repeat bg-center md:bg-cover xl:!bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div
        ref={textRef}
        className="relative w-full max-w-[1359px] xl:mb-15 md:mb-10  mx-auto opacity-0 transition-opacity duration-1000 ease-in-out fade-in"
      >
        <div className="text-white flex md:flex-row md:justify-between justify-evenly items-center font-poppins font-[900]">
          <div className="flex flex-col items-center lg:pl-25 md:pl-5">
            <h1 className="lg:text-[98px] md:text-8xl text-[32px] tracking-[6%] leading-[44px] md:tracking-[0%] md:leading-none text-center">
              20+
            </h1>
            <h2 className="lg:text-[60px] md:text-4xl text-[32px] tracking-[6%] leading-[44px] md:tracking-[0%] md:leading-none text-center">
              Skills
            </h2>
          </div>
          <div className="flex flex-col items-center lg:pr-25 md:pr-5">
            <h1 className="lg:text-[98px] md:text-7xl text-center text-[32px] tracking-[6%] leading-[44px] md:tracking-[0%] md:leading-none">
              10+{" "}
              <span className="md:hidden">
                Projects <br /> Completed
              </span>
            </h1>
            <h2 className="lg:text-[34px] md:text-4xl text-center hidden md:block">
              Projects <br /> Completed
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waterfall;
