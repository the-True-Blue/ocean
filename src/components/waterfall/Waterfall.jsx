import React, { useEffect, useRef } from "react";
import background from "../../assets/waterfall/background.png";

const Waterfall = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Cuando el elemento es visible, añadimos la clase para el fade in
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      {
        threshold: 0.2, // El efecto se activa cuando al menos 20% del elemento es visible
      }
    );

    // Observamos el elemento que contiene el texto
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Limpiamos el observer cuando el componente se desmonta
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen relative flex flex-col justify-end overflow-hidden">
      {/* Fondo de imagen que cubre todo el componente */}
      <div
        className="absolute w-full h-full bg-cover bg-no-repeat bg-center md:bg-cover xl:!bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div
        ref={textRef}
        className="relative w-full max-w-[1359px] xl:mb-20 mb-10 hidden md:block mx-auto opacity-0 transition-opacity duration-1000 ease-in-out fade-in"
      >
        <div className="text-white flex flex-col gap-0 md:gap-0 md:flex-row justify-between font-poppins font-[900]">
          <div className="flex flex-col items-center lg:pl-25 md:pl-5">
            <h1 className="lg:text-[128px] text-8xl text-center">20+</h1>
            <h2 className="lg:text-[80px] text-4xl text-center">Skills</h2>
          </div>
          <div className="flex flex-col items-center lg:pr-5 md:pr-5">
            <h1 className="lg:text-[128px] text-7xl text-center">10+ </h1>
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
